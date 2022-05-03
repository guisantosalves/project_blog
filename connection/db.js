const mongoose = require("mongoose");
const db = process.env.MONGODB_URL;

module.exports = () => {
  //deve ser uma function para exportar a conexao
  mongoose.connect(
    db,
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
