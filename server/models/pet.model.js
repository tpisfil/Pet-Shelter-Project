const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    //_id gets added automatically by mongoDB

    name: {
        type: String,
        required: [true, "Pet's name is required!"],
        minlength: [3,"Pet name must be at least 3 characters!"]
    },

    type: {
        type: String, 
        required: [true, "Type of pet is required!"],
        minlength: [3, "Type of pet must be at least 3 characters!"]
    },

    description: {
        type: String, 
        required: [true, "Description of pet is required!"],
        minlength: [3, "Pet's description must be at least 3 characters!"]
    },

    skillOne: {
        type: String
    },

    skillTwo: {
        type: String
    },

    skillThree: {
        type: String
    },

});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet; 