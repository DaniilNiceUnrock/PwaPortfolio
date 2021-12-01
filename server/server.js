const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')

const app = express();

//console.log("порт");
app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on http://104.198.229.231/:${app.get('port')}`);
});


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Daniil:090974papa@cluster0.wbyey.mongodb.net/PWA?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("PWA").collection("skills");
  // perform actions on the collection object
  client.close();
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));


app.use('/api/records', require('./routes/records'));
app.use('/api/skills', require('./routes/skills'));

app.use('/', express.static(path.join(__dirname, '../dist')));
