// deviceRoutes.js

const express = require('express');
const router = express.Router();
const Device = require('../models/deviceModel');
const { auth } = require('../utils');   
const { userModel } = require('../models');


router.get('/', async (req,res)=>{
    
    const allDevices = await Device.find();

    res.json(allDevices)
})

// Create a new device
router.post('/create', auth(), async (req, res) => {
    const { _id: userId } = req?.user;
    const deviceData = {
        ...req.body,
        userId: userId,
    }

    const owner = await userModel.findById(deviceData.userId);

    if (!owner.devices) {
        owner.devices = [];
    }

    try {
        const createdDevice = await Device.create(deviceData);
        res.status(201).json(createdDevice);
        owner.devices.push(createdDevice);
        await owner.save();
    } catch (error) {
        console.error('Error creating offer:', error);
        res.status(500).json({ error: 'Error creating offer' });
    }
    
});

router.get('/:deviceId', async (req, res) => {
    const { deviceId } = req.params;

    try {
        const currentDevice = await Device.findById(deviceId);
        res.json(currentDevice);
    } catch (error) {
        return res.status(404).send({ message: 'There is no device with this id!' });
    }
});

router.put('/edit/:deviceId', auth(), async (req, res) => {
    const { deviceId } = req.params;
    const userId = req.user?._id;

  
    try {
      const deviceToUpdate = await Device.findById(deviceId);
  
      if (!deviceToUpdate) {
        return res.status(404).json({ error: 'Device not found' });
      }
  
      // Check if the user is the creator of the Device
      if (deviceToUpdate.userId.toString() !== userId.toString()) {
        return res.status(403).json({ error: 'You are not authorized to edit this Device' });
      }
  
      // Update Device data with the new values from the request body
      const updatedDevice = { ...deviceToUpdate.toObject(), ...req.body };
  
      // Save the updated Device to the database
      await deviceToUpdate.updateOne(updatedDevice);
  
      res.json({ message: 'Device updated successfully', updatedMovie: updatedDevice });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the Device' });
    }
  });

  router.delete('/:deviceId', auth(), async (req, res) => {
    const { deviceId } = req.params;
    const userId = req.user?._id;

  
    try {
      const device = await Device.findById(deviceId);
  
      if (!device) {
        return res.status(404).json({ error: 'device not found' });
      }
  
      if (device.userId.toString() !== userId.toString()) {
  
        return res.status(403).json({ error: 'You are not authorized to delete this device!' });
      }
      
      await device.remove();
      res.status(204).send();

    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the device' });
    }
  });

module.exports = router;
