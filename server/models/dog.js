const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    dogName: String,
    dogLicNum: Number,
    ownerEmail: String,
    approved: String,
    photo: String,
    // price: Number
});

module.exports = mongoose.model("Dog", DogSchema);