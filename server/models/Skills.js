const mongoose = require('mongoose');
const { Schema } = mongoose;



const Skills = new Schema({
  id: Number,
  name : String,
  skills2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skills2'
   }
});

module.exports = mongoose.model('Skills', Skills);