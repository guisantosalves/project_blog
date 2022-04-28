var mongoose = require('mongoose');
var db = require('../connection/db');

//abrindo conexao
db();

const postsSchema = mongoose.Schema({
    titulo:  String, // String is shorthand for {type: String}
    autor: String,
    conteudo: String,
    // data: { type: Date, default: Date.now },
    data: Date,
}, {collection: 'posts'});

const post = mongoose.model('posts', postsSchema)

module.exports = post;