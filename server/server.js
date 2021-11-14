const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')

const app = express();

app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});


 
mongoose.connect('mongodb://localhost:27017/PwaPortfolio', { useNewUrlParser: true })

.then(db => console.log('[OK] DB is connected !'))
.catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(cors({
    origin: 'http://localhost:8080'
}));
app.use('/api/records', require('./routes/records'));
app.use('/api/skills', require('./routes/skills'));

app.use('/', express.static(path.join(__dirname, '../dist')));


/* GRAPHQL
const express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const path = require('path');
const schema = require('./src/schema.js');


// Construct a schema, using GraphQL schema language


// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

let port = 4000;
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(port);
console.log('GraphQL API server running at localhost:'+ port);

app.use('/', express.static(path.join(__dirname, '../dist')));



*/