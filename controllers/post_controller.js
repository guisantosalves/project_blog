var modelPost = require("../schemas/postSchema");

module.exports.getPost = (req, res, next) => {
    modelPost.find({}, (err, data)=>{
        res.send(data)
    })
};

module.exports.postingPost = (req, res, next) => {
  var newpost = new modelPost({
    titulo: req.body.titulo, 
    autor: req.body.autor,
    conteudo: req.body.conteudo,
    like: req.body.like,
    dontlike: req.body.dontlike
  });

  newpost.save().then(result=>{
      res.send(result)
  })
};

module.exports.putPost = (req, res, next) => {
  //alterando post
};

module.exports.deletePost = (req, res, next) => {
  //deletando post
};
