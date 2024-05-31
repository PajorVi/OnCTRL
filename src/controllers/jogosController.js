var jogosModel = require("../models/jogosModel");

function adicionar(req, res) {
    var nome = req.body.nomeJogo;
    var genero = req.body.genero;
    var descricao = req.body.descricao;
    var idUsuario = req.params.idUsuario;

    if (nome == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (genero == undefined) {
        res.status(400).send("O Genero está indefinido");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("A descrição está indefinido!");
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

function buscarJogosPorUsuario(req, res) {

    var idUsuario = req.params.idUsuario;
    
    jogosModel
        .buscarJogosPorUsuario(idUsuario)
        .then((resultadoJogos) => {
            if (resultadoJogos.length > 0) {
                res.json({
                    jogos: resultadoJogos
                });
            } else {
                res.status(204).json({ jogos: [] });
            }
        });
}

function buscarUltimosJogos(req, res) {

    const limite_linhas = 10;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando os ultimos ${limite_linhas} jogos`);

    jogosModel.buscarUltimosJogos(idUsuario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    adicionar,
    buscarJogosPorUsuario,
    buscarUltimosJogos
}