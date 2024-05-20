var jogosModel = require("../models/jogosModel");

function adicionar(req, res) {
    var nome = req.body.input_nome_jogo;
    var genero = req.body.input_genero_jogo;
    var descricao = req.body.input_desc_jogo;
    var idUsuario = req.params.idUsuario;

    if (nome == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (genero == undefined) {
        res.status(400).send("O Genero está indefinido");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        jogosModel.adicionar(nome, genero, descricao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao cadastrar o jogo: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    adicionar
}