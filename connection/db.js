const mongoose = require('mongoose');

module.exports = () => {
    //deve ser uma function para exportar a conexao
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
        if(!err){
            console.log("Conectado com sucesso")
        }else{
            console.log("não está conectado")
        }
    });
};