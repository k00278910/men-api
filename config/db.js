const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DB_URI,
{
  dbName:process.env.DB_NAME,
  user:process.env.DB_USER,
 pass:process.env.DB_PASS,
 useNewUrlParser: true, 
   useUnifiedTopology: true,   
}
).then(()=>{
    console.log('connected to mongodb');
})
.catch((err)=>{
    console.log(err.message);
});



db.on('error',()=>{
    console.log('Error ocurred from database');
});
db.on('open',()=>{
    console.log('Sucessfully accessed the database');
});

module.exports=mongoose;