const mongoose = require('mongoose');
const { Schema } = mongoose;
const Rewiews = new Schema({
    name: String,
    body: String,
    publishedAt:{ 
        type:Date,             
        default:Date.now()      
    }
});

module.exports = mongoose.model('Rewiews', Rewiews);