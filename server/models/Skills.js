const mongoose = require('mongoose');
const { Schema } = mongoose;



const Skills = new Schema({
  name : String,
  Skillsbodies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'skillsbodies'
   }
  ]
});


module.exports = mongoose.model('Skills', Skills);