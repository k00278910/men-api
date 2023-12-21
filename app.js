const express = require('express');
const app = express();


//ROUTES
app.get('/',(req,res)=>{
res.send('app.js Index Page');
});
app.get('/api',(req,res)=>{
    res.send('app.js API Index Page');
});
app.listen(3000,()=>{
    console.log('listen on port 3000');
});
