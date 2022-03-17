var modelLogin = require('../schemas/loginSchema');

module.exports.getDataLogin = (req, res, next) => {
    res.send("eae")
    // modelLogin.find({}, (err, data)=>{
    //     res.send(data)
    // })
}

module.exports.postLogin = (req, res, next) => {
    var usuario = req.body.usuario;
    var senha = req.body.senha;
    
    
}

module.exports.putLogin = (req, res, next) => {
    //alterando 
}

module.exports.deleteLogin = (req, res, next) => {
    //deletando
}