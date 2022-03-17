module.exports.getPost = (req, res, next) => {
    const object = [
        {'id':0, 'titulo':'minnhawaifu é top', 'conteudo':'aqui ta o conteuuuudo', 'data':'15022002'}
    ]
    res.send(object);
}

module.exports.postingPost = (req, res, next) =>{
    var titulo = req.body.titulo;
    var conteudo = req.body.conteudo;
    var data = req.body.data;

    var object = [
        {'id':0, 'titulo':titulo, 'conteudo':conteudo, 'data':data}
    ]
    res.send(object)
}

module.exports.putPost = (req, res, next) =>{
    //alterando post
    
}

module.exports.deletePost = (req, res, next) =>{
    //deletando post
}