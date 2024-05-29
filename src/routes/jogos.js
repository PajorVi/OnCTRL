var express = require("express");
var router = express.Router();

var jogosController = require("../controllers/jogosController");

router.post("/adicionar/:idUsuario", function (req, res) {
    jogosController.adicionar(req, res);
});

router.get("/buscarJogosPorUsuario/:idUsuario", function(req, res) {
    jogosController.buscarJogosPorUsuario(req, res);
});

module.exports = router;