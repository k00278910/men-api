const router = require('express').Router();
// access tp controllers - users.js
const users_ctrl = require('../../controllers/users');


// Interact with DB from within User Model 
// Set up Routes
//(CRUD)(post,get,patch,delete)
//CREATE
router.post('/',users_ctrl.createUser);
//READ
router.get('/', users_ctrl.listAll); //GET http://localhost:3000/api/users/
router.get('/:id', users_ctrl.singleUser); //GET http://localhost:3000/api/users/:id
//UPDATE (patch or put)
router.patch('/',users_ctrl.index);
//DELETE
router.delete('/',users_ctrl.index);
// app index through router
// localhost:3000/api/users
// router.get('/',users_ctrl.index);
// router.get('/list',users_ctrl.listAll);

// export it
module.exports = router;