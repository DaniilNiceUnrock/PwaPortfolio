const mongoose = require('mongoose');
const { Schema } = mongoose;

const Skills = new Schema({
    name: String,
    precent: Number
});

module.exports = mongoose.model('Skills', Skills);

