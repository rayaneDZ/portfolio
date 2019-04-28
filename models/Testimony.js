const mongoose = require('mongoose');

const testimonySchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
    testimony : String
});

module.exports = mongoose.model('Testimony', testimonySchema);