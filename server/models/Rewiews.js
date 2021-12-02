const mongoose = require('mongoose');
const { Schema } = mongoose;

const Rewiews = new Schema({
    name: String,
    body: String,
    date: Date
});

module.exports = mongoose.model('Rewiews', Rewiews);