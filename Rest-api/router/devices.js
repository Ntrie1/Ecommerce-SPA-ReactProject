// deviceRoutes.js

const express = require('express');
const router = express.Router();
const Device = require('../models/deviceModel');
const { auth } = require('../utils');   


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

    try {
        const createdDevice = await Device.create(deviceData);
        res.status(201).json(createdDevice);
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
})

module.exports = router;
