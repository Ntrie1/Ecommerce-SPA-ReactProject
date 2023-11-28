// Device.js

const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    deviceType: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    storageCapacity: {
        type: String,
    },
    color: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String, 
        required: true,
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },

    sellerNumber: {
        type: Number
    }
}, { timestamps: true });

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
