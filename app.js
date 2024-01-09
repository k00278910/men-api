const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
require('./config/db');

//middleware for bodyparser
// Using CORS, a server can explicitly allow some cross-origin requests while rejecting others.
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routes')); // reference directory

app.listen(3000,()=>{
    console.log('listen on port 3000');
});
