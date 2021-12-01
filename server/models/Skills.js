const mongoose = require('mongoose');
const { Schema } = mongoose;

const Skills = new Schema({
    category: String,
    skills: String  [
        {   
            id: Number,
            name : String,
            precent: Number
        }
    ]
});


/*
[
    {
      "id": 1,
      "category": "Frontend",
      "skills": [
        {
          "id": 1,
          "title": "HTML",
          "percent": 90
        },
        {
          "id": 2,
          "title": "CSS",
          "percent": 76
        },
        {
          "id": 3,
          "title": "JavaScript",
          "percent": 25
        },
        {
          "id": 4,
          "title": "Vue.js",
          "percent": 35
        }
      ]
    },
  ]
*/

/* db.Skills.insertOne({"name": "Test", "precent": 28}) */

module.exports = mongoose.model('Skills', Skills);