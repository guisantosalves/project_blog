var mongoose = require("mongoose");
var modelLogin = require("../schemas/loginSchema");
const {validationResult} = require('express-validator');

module.exports.getDataLogin = (req, res, next) => {
  try {
    modelLogin.find({}, (err, data) => {
      res.status(200);
      res.send(data);
    });
  } catch (err) {
    res.send(err);
    res.status(400).json({ error: err });
  }
}

module.exports.postLogin = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
    }
    var login = new modelLogin({
      usuario: req.body.usuario,
      senha: req.body.senha,
    });

    login.save().then((result) => {
      res.status(200);
      res.send(result);
    });
  } catch (err) {
    res.send(err);
    res.status(400).json({ error: err });
  }
}

module.exports.putLogin = (req, res, next) => {
  try {
    var id = req.params.id;
    var newLogin = {
      usuario: req.body.usuario,
      senha: req.body.senha,
    };
    modelLogin.findByIdAndUpdate(id, newLogin, (err, docs) => {
      if (err) {
        res.send(err);
      } else {
        res.send("alterado com sucesso!!");
      }
    });
  } catch (err) {
    res.send(err);
    res.status(400).json({ error: err });
  }
}

module.exports.deleteLogin = (req, res, next) => {
  try {
    var id = req.params.id;
    //res.send(id)
    modelLogin.findOneAndDelete({ _id: id }, (err, docs) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Excluído com sucesso");
      }
    });
  } catch (err) {
    res.send(err);
    res.status(400).json({ error: err });
  }
}
