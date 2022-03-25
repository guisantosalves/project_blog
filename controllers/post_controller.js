var modelPost = require("../schemas/postSchema");

module.exports.getPost = (req, res, next) => {
  try{
    modelPost.find({}, (err, data)=>{
        res.send(data);
    })
  }catch(err){
    res.send(err);
    res.status(400).json({error: err});
  }
};

module.exports.postingPost = (req, res, next) => {
  try{
    var newpost = new modelPost({
      titulo: req.body.titulo, 
      autor: req.body.autor,
      conteudo: req.body.conteudo,
      like: req.body.like,
      dontlike: req.body.dontlike
    });

    newpost.save().then(result=>{
        res.status(200);
        res.send(result);
    })
  }catch(err){
    res.send(err);
    res.status(400).json({error: err});
  }
};

module.exports.putPost = (req, res, next) => {
  try{
    id =  req.params.id;
    const newPost = {
      titulo: req.body.titulo, 
      autor: req.body.autor,
      conteudo: req.body.conteudo,
      like: req.body.like,
      dontlike: req.body.dontlike
    }
    modelPost.findByIdAndUpdate(id, newPost, (err, docs)=>{
      if(err){
        res.send(err);
      }else{
        res.send("Alterado com sucesso!");
        res.status(200);
      }
    })
  }catch(err){
    res.send(err).json({error: err});
  }
};

module.exports.deletePost = (req, res, next) => {
  //deletando post
};
