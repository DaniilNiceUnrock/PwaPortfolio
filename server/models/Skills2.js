const mongoose = require('mongoose');
const { Schema } = mongoose;


const Skills2 = new Schema({
  id: Number,
  name : String,
  test: Number,
});


module.exports = mongoose.model('skills2', Skills2);