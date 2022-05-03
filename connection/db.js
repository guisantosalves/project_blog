const mongoose = require("mongoose");

module.exports = () => {
  //deve ser uma function para exportar a conexao
  mongoose.connect(
    "mongodb+srv://guizaodozap:paodequeijo123@cluster0.wx08a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (!err) {
        console.log("Conectado com sucesso");
      } else {
        console.log("não está conectado");
      }
    }
  );
};
