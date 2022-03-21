var mongoose = require('mongoose');
var modelLogin = require('../schemas/loginSchema');

module.exports.getDataLogin = (req, res, next) => {
    modelLogin.find({}, (err, data)=>{
       res.send(data)
    })
}

module.exports.postLogin = (req, res, next) => {
    
    var login = new modelLogin({
        usuario: req.body.usuario,
        senha: req.body.senha
    });

    login.save().then(result=>{
        res.status(200);
        res.send(result)
    })
}

module.exports.putLogin = (req, res, next) => {
    //alterando 
}

module.exports.deleteLogin = (req, res, next) => {
    //deletando
}