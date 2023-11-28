// deviceRoutes.js

const express = require('express');
const router = express.Router();
const Device = require('../models/Device');
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
        const createdDevice = await movieModel.create(deviceData);
        res.status(201).json(createdDevice);
    } catch (error) {
        console.error('Error creating offer:', error);
        res.status(500).json({ error: 'Error creating offer' });
    }
    
});

module.exports = router;
