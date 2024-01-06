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
/* asynch function returns a promise
 a Promise is an object that will 
produce a single value some time in 
the future*/
exports.createUser = async(req,res)=>{
    const user = new User({
        name:req.body.name,
            title:req.body.title,
            bio:req.body.bio,
    });


    // // Save to DB
    // // Use promise
    // user.save().then((data)=>{
    //     // 200 for ok status
    // res.status(200).json(data);
    // }).catch((err)=>{
    //     // 200 for ok status
    // res.status(400).json({msg:err});
    // }); 
    try{
        const createUser = await user.save();
        res.status(201).json(user);
    }
    catch(err){
        res.status(400).json({msg:err});
    }
        
    
};
