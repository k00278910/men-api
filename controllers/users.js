// include models
const User = require('../models/users');

// The API endpoints map to the actions 
// performed by the Controller 
exports.index = (req,res)=>{
    res.send('Users INDEX');
};

exports.listAll = (req,res)=>{
    res.send('List all Users');
};