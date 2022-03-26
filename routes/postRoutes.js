var express = require('express');
var router = express.Router();
const {body} = require('express-validator');
var postController = require('../controllers/post_controller');

/* rotas dos posts do blog */
router.get('/getpost', postController.getPost);

router.post('/posting', body('titulo').not().isEmpty().withMessage("Titulo nao pode ser vazio"), 
body('autor').not().isEmpty().withMessage("autor nao pode ser vazio"), 
body('conteudo').not().isEmpty().withMessage("conteudo nao pode ser vazio"), 
postController.postingPost);

router.put('/putpost/:id', body('titulo').not().isEmpty().withMessage("Titulo nao pode ser vazio"), 
body('autor').not().isEmpty().withMessage("autor nao pode ser vazio"), 
body('conteudo').not().isEmpty().withMessage("conteudo nao pode ser vazio"), 
postController.putPost);

router.delete('/deletepost/:id', postController.deletePost)

module.exports = router;

// titulo: req.body.titulo, 
//       autor: req.body.autor,
//       conteudo: req.body.conteudo,
//       like: req.body.like,
//       dontlike: req.body.dontlike