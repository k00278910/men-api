const router = require('express').Router();

// ** Difference between 'get' and 'use' **
// localhost:3000/api/users
router.use('/users',require('./users'));
// localhost:3000/api
router.get('/',(req,res)=>{
    res.send('app.js api Index Page');
    });

// export it
module.exports = router;