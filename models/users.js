// Create users model with schema
// Then acquire it through the controller
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        bio:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            default:Date.now,
        },
    });
    module.exports = mongoose.model('User',UserSchema);