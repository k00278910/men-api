//Express will use this file to manage routs now

const express = require('express');
// bring this in

const router = require('express').Router();

//Express will use this file to manage routs now
router.use('/api',require('./api')); // reference directory

// app index through router
router.get('/',(req,res)=>{
    res.send('app.js Index Page');
    });

// export it
module.exports = router;
