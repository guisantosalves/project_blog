const mongoose = require('mongoose');

module.exports.connection = () => {

    mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
        if(!err){
            console.log("Conectado com sucesso")
        }else{
            console.log("não está conectado")
        }
    });
};