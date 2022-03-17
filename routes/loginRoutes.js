var express = require('express');
var router = express.Router();
var login_controller = require('../controllers/login_controller')

/* rotas do login */
router.get('/getlogin', login_controller.getDataLogin);
router.post('/postlogin', login_controller.postLogin);
router.put('/putlogin', login_controller.putLogin);
router.delete('/deletelogin', login_controller.deleteLogin)

module.exports = router;
