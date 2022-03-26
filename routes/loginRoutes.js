var express = require('express');
var router = express.Router();
var login_controller = require('../controllers/login_controller');
var db = require('../connection/db');
const {body} = require('express-validator');

/* rotas do login */
router.get('/getlogin', login_controller.getDataLogin);

router.post('/postlogin', body('usuario').not().isEmpty().withMessage("nao pode ser vazio"), body('senha').isLength({min: 8}).not().isEmpty().withMessage("tem que ser acima de 8 caracter e nao pode ser vazio"), login_controller.postLogin);

router.put('/putlogin/:id', body('usuario').not().isEmpty().withMessage("nao pode ser vazio"), body('senha').isLength({min: 8}).not().isEmpty().withMessage("tem que ser acima de 8 caracter e nao pode ser vazio"), login_controller.putLogin);

router.delete('/deletelogin/:id', login_controller.deleteLogin);

module.exports = router;
