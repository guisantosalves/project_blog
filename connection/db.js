const mongoose = require("mongoose");
const db =
  process.env.MONGODB_URL ||
  "mongodb://guizaodozap:paodequeijo123@cluster0-shard-00-00.wx08a.mongodb.net:27017,cluster0-shard-00-01.wx08a.mongodb.net:27017,cluster0-shard-00-02.wx08a.mongodb.net:27017/blog?ssl=true&replicaSet=atlas-10xsiq-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports = () => {

    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
    .then(()=>{
        console.log("Database Conectada")
    })
    .catch(err=>console.log(err))
    
};
