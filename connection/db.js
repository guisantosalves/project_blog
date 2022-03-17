const mongoose = require('mongoose');

module.exports = () => {
    //deve ser uma function para exportar a conexao
    mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
        if(!err){
            console.log("Conectado com sucesso")
        }else{
            console.log("não está conectado")
        }
    });
};