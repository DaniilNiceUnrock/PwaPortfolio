const mongoose = require('mongoose');
const { Schema } = mongoose;

const Author = new Schema({
    id: Number,
    first_name: String,
    family_name: String,
    date_of_birth: Number,
    date_of_death: Number
});

module.exports = mongoose.model('Author', Author);