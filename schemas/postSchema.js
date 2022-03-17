var mongoose = require('mongoose');
var db = require('../connection/db');


const postsSchema = mongoose.Schema({
    titulo:  String, // String is shorthand for {type: String}
    autor: String,
    conteudo: String,
    data: { type: Date, default: Date.now },
    like: Number,
    dontlike: Number
}, {collection: 'posts'});

const post = mongoose.model('posts', postsSchema, 'blog')

module.exports = post;