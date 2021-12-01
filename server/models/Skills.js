const mongoose = require('mongoose');
const { Schema } = mongoose;



const Skills = new Schema({
  name : String,
  skills2: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'skills2'
   }
  ]
});


module.exports = mongoose.model('Skills', Skills);