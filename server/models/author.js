const mongoose = require('mongoose');
const { Schema } = mongoose;

const Author = new Schema({
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
});


module.exports = mongoose.model('author', Author);