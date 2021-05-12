const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HWOneSchema = new Schema({
    studentEmail: String,
    numberCorrect: String,
    // sandysName: String,
    // finishedAndPassed: Boolean,
});

module.exports = mongoose.model("HWOne", HWOneSchema);