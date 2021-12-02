const mongoose = require('mongoose');
const { Schema } = mongoose;


const Skillsbodies = new Schema({
  name : String,
  percent: Number,
});


module.exports = mongoose.model('skillsbodies', Skillsbodies);