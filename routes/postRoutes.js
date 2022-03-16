var express = require('express');
var router = express.Router();

var postController = require('../controllers/post_controller');

/* rotas dos posts do blog */
router.get('/getpost', postController.getPost);
router.post('/posting', postController.postingPost);

module.exports = router;
