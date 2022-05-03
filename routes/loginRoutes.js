var express = require("express");
var router = express.Router();
var login_controller = require("../controllers/login_controller");
var db = require("../connection/db");
const { body } = require("express-validator");
var modelLogin = require("../schemas/loginSchema");

/* rotas do login */
router.get("/getlogin", (req, res) => {
  modelLogin.find({}, (err, data) => {
    res.status(200);
    res.send(data);
  });

  //   try {
  //     modelLogin.find({}, (err, data) => {
  //       res.status(200);
  //       res.send(data);
  //     });
  //   } catch (err) {
  //     res.send(err);
  //     res.status(400).json({ error: err });
  //   }
});

router.post(
  "/postlogin",
  body("usuario").not().isEmpty().withMessage("nao pode ser vazio"),
  body("senha")
    .isLength({ min: 8 })
    .not()
    .isEmpty()
    .withMessage("tem que ser acima de 8 caracter e nao pode ser vazio"),
  login_controller.postLogin
);

router.put(
  "/putlogin/:id",
  body("usuario").not().isEmpty().withMessage("nao pode ser vazio"),
  body("senha")
    .isLength({ min: 8 })
    .not()
    .isEmpty()
    .withMessage("tem que ser acima de 8 caracter e nao pode ser vazio"),
  login_controller.putLogin
);

router.delete("/deletelogin/:id", login_controller.deleteLogin);

router.get("/funcionou", (req, res) => {
  res.send("funcionou");
});

module.exports = router;
