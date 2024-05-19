var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        if (resultadoAutenticar.length > 0) {
                            res.json({
                                nomeUsuario: resultadoAutenticar[0].nomeUsuario,
                                apelido: resultadoAutenticar[0].apelido,
                                email: resultadoAutenticar[0].email,
                                senha: resultadoAutenticar[0].senha
                            })
                        }
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    usuarioModel.listar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMesage);
    })
}

function cadastrar(req, res) {
    var nomeUsuario = req.body.nomeServer;
    var apelido = req.body.apelidoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;


    if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome está undefined");
    } else if (apelido == undefined) {
        res.status(400).send("Seu apelido está undefined");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined");
    } else {
        usuarioModel.cadastrar(nomeUsuario, apelido, email, senha)
            .then(function (resposta) {
                res.status(200).send("Cadastro realizado com sucesso");
            }).catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizae o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMesage);
            }
            );
    }


}

module.exports = {
    autenticar,
    cadastrar
}