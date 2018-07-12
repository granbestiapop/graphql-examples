const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const graphql = require('./graphql');

const app = new Express();
app.use(cors());
app.use(bodyParser.json());
app.use('/graphql', graphql);

app.listen(8080, ()=>{
  console.log('app is running...');
})