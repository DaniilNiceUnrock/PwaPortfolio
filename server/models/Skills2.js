const mongoose = require('mongoose');
const { Schema } = mongoose;


const Skills2 = new Schema({
  name : String,
  percent: Number,
});


module.exports = mongoose.model('skills2', Skills2);