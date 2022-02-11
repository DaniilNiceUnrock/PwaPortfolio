const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const morgan = require('morgan');


app.use(cors());


app.use(morgan('dev')); // для отсмотра запросов


app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on https://ponomarevdaniil.fun/:${app.get('port')}`);
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/', express.static(path.join(__dirname, '/dist')));