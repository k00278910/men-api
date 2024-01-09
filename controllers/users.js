// include models
const User = require('../models/users');

// The API endpoints map to the actions 
// performed by the Controller 
exports.index = (req,res)=>{
    res.send('Users INDEX');
};


// CRUD-CREATE
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
    try{
        const createUser = await user.save();
        res.status(201).json(user);
    }
    catch(err){
        res.status(400).json({msg:err});
    } 
};
// CRUD - READ
exports.listAll = async(req,res)=>{
    
    try{
        const query = await User.find();
        res.status(200).json(query);
    }
    catch(err){
        res.status(400).json({msg:err});
    } 
};
// take in a param to get a user
exports.singleUser = async(req,res)=>{
    try{
        const query = await User.findById(req.params.id);
		if (!query) {
			res.status(400).json({ msg: 'invalid user' });
		}
		res.status(200).json(query);
    }
    catch(err){
        res.status(400).json({msg:err});
    } 
};

exports.updateUser = async(req,res)=>{
    try{
        const query = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body, 
            },{
                new:true,
            }
            );
            if(!query){
                res.status(400).json({msg:'invalid user'}); 
               }
                res.status(200).json({query});

    }
    catch(err){
        res.status(400).json({msg:err});
    } 
};

//CRUD Delete
exports.deleteUser = async (req, res) => {
	try {
		if (req.params.id) {
			const query = await User.findByIdAndDelete(req.params.id);
			if (!query) {
				res.status(400).json({ msg: 'invalid user' });
			}
			res.status(200).json({ deleted: req.params.id, document: query });
		} else {
			res.status(400).json({ msg: 'No ID' });
		}
	} catch(err){
        res.status(400).json({msg:err});
    } 
};


