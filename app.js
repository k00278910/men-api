const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db');


app.use(require('./routes')); // reference directory

app.listen(3000,()=>{
    console.log('listen on port 3000');
});
