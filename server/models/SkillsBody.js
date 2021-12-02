const mongoose = require('mongoose');
const { Schema } = mongoose;


const SkillsBody = new Schema({
  name : String,
  percent: Number,
});


module.exports = mongoose.model('skillsBody', SkillsBody);