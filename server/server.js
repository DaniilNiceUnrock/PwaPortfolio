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


mongoose.connect('mongodb+srv://Daniil:090974papa@cluster0.wbyey.mongodb.net/PWA?retryWrites=true&w=majority', { useNewUrlParser: true })

.then(db => console.log('[OK] DB is connected !'))
.catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));


app.use('/api/rewiews', require('./routes/rewiews'));// отзывы 
app.use('/api/skills', require('./routes/skills')); //категория скиллов
app.use('/api/skillsbody', require('./routes/skillsbody')); // сами скиллы, которые связаны с категорией скиллов

app.use('/', express.static(path.join(__dirname, '../dist')));
