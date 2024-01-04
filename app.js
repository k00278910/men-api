const express = require('express');
const app = express();
//MIDDLEWARES
// Middleware is software that different 
// applications use to communicate with each other. 

//Express will use this file to manage routs now
app.use(require('./routes')); // reference directory

// app.use('/api',(req,res,next)=>{
//     console.log('api middleware');
//     next();
// });
// app.use('/api',(req,res,next)=>{
//     console.log('api middleware');
//     next();
// });
//ROUTES
//path-response
// app.get('/',(req,res)=>{
// res.send('app.js Index Page');
// });
// app.get('/api',(req,res)=>{
//     res.send('app.js API Index Page');
// });
app.listen(3000,()=>{
    console.log('listen on port 3000');
});
