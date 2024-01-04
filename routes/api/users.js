const router = require('express').Router();
// access tp controllers - users.js
const users_ctrl = require('../../controllers/users');

// app index through router
// localhost:3000/api/users
router.get('/',users_ctrl.index);
router.get('/list',users_ctrl.listAll);

// export it
module.exports = router;