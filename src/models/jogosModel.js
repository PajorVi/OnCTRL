var database = require("../database/config");

function adicionar(nome, genero, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", nome, genero, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO jogo (nome, genero, descricao,dataAdd, fkUsuario) VALUES ('${nome}', '${genero}', '${descricao}', current_date(), '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarJogosPorUsuario(idUsuario) {
    var instrucaoSql = `SELECT * FROM jogo WHERE fkUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimosJogos(idUsuario) {
    var instrucaoSql = `
    SELECT 
    genero,
    count(genero) quantidade
    FROM jogo 
    where fkUsuario = ${idUsuario}
    group by genero;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maisJogados(idUsuario) {
    var instrucaoSql = `
    select
    genero, 
    count(genero) quantidade
    from jogo
    where fkUsuario = ${idUsuario} 
    group by genero
    order by quantidade desc
    limit 1; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    adicionar,
    buscarJogosPorUsuario,
    buscarUltimosJogos,
    maisJogados,
}