var database = require("../database/config");

function adicionar(nome, genero, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", nome, genero, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO jogo (nome, genero, descricao,dataAdd, fkUsuario) VALUES ('${nome}', '${genero}', '${descricao}', now(), '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    adicionar
}