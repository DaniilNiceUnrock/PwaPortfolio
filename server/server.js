const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')

const app = express();

//console.log("порт");
app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});


mongoose.connect('mongodb://localhost:27017/PWA', { useNewUrlParser: true })

.then(db => console.log('[OK] DB is connected !'))
.catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(cors({
    origin: 'http://104.198.229.231:8080'
}));
app.use('/api/records', require('./routes/records'));
app.use('/api/skills', require('./routes/skills'));

app.use('/', express.static(path.join(__dirname, '../dist')));
