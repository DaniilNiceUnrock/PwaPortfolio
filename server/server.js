const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
var http = require('http');
var https = require('https');
const enforce = require('express-sslify');
const app = express();

//console.log("порт");
app.use(enforce.HTTPS({ trustXForwardedHostHeader: true }))
app.set('port', 8080);
https.createServer(app).listen(app.get('port'), () => {
    console.log(`[OK] Server is running on https://192.168.0.11:8080/api/skills:${app.get('port')}`);
});


mongoose.connect('mongodb+srv://Daniil:090974papa@cluster0.wbyey.mongodb.net/PWA?retryWrites=true&w=majority', { useNewUrlParser: true })

.then(db => console.log('[OK] DB is connected !'))
.catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));


app.use('/api/rewiews', require('./routes/rewiews'));// отзывы 
app.use('/api/skills', require('./routes/skills')); //категория скиллов
app.use('/api/skillsbodies', require('./routes/skillsbodies')); // сами скиллы, которые связаны с категорией скиллов

app.use('/', express.static(path.join(__dirname, '../dist')));
