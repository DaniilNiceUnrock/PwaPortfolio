const mongoose = require('mongoose');
const { Schema } = mongoose;



const Skills = new Schema({
  name : String,
  skillsBody: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'skillsBody'
   }
  ]
});


module.exports = mongoose.model('Skills', Skills);