module.exports.getDataLogin = (req, res, next) => {
    const object = [
        {"id":"0", "usuario":"guizaodozap", "senha":"54548948"},
        {"id":"1","usuario":"lucas","senha":"85258"},
        {"id":"2","usuario":"joao","senha":"7878454"}
    ]

    
    res.send(object);
}

module.exports.postLogin = (req, res, next) => {
    var usuario = req.body.usuario;
    var senha = req.body.senha;
    
    res.send({"id":0, "usuario":usuario})
}