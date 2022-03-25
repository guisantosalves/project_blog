var mongoose = require('mongoose');
var db = require('../connection/db')

//abrindo conexao
db();

const loginSchema = mongoose.Schema({
    usuario: String, 
    senha: String
});

const login = mongoose.model('login', loginSchema);

module.exports = login;