var database = require("../database/config")

function autenticar(email, senha) {
    var instrucao = `SELECT * FROM empresa WHERE email = '${email}' AND senha = '${senha}';`;
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, cnpj) {
    var instrucao = `INSERT INTO empresa (nome, email, senha, cnpj) VALUES ('${nome}', '${email}', '${senha}', '${cnpj}');`;
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar
};