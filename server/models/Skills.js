const mongoose = require('mongoose');
const { Schema } = mongoose;



const Skills = new Schema({
  name : String,
  skillsbody: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'skillsbody'
   }
  ]
});


module.exports = mongoose.model('Skills', Skills);