const mongoose = require('mongoose');
const { Schema } = mongoose;

const Skills = new Schema({
    
    Skill: String,
    Skills:   {
        name : String,
        precent: Number
    }
});

/* db.Skills.insertOne({"name": "Test", "precent": 28}) */

module.exports = mongoose.model('Skills', Skills);