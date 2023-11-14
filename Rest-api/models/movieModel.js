const mongoose =  require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const movieSchema =  new mongoose.Schema({
    title: {
        required: true,
    },

    description: {
        required: true,
    },

    imageUrl: {
        required: true,
    },

    


    
})
