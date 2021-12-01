const mongoose = require('mongoose');
const { Schema } = mongoose;

const Author = new Schema({
    first_name: String,
    family_name: String,
    date_of_birth: Date,
    date_of_death: Date
});


module.exports = mongoose.model('Author', Author);