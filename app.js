const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db');

//middleware for bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routes')); // reference directory

app.listen(3000,()=>{
    console.log('listen on port 3000');
});
