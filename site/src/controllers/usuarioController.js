var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == "") {
        res.status(400).send("Preencha o campo de e-mail!");
    } else if (senha == "") {
        res.status(400).send("Preencha o campo de senha!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(resultado => {
                if (resultado.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)!");
                } else {
                    res.status(200).json(resultado);
                }
            }).catch(error => {
                console.log(error);
            })
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var cnpj = req.body.cnpjServer;

    if (nome == "") {
        res.status(400).send("Preencha o campo de nome!");
    } else if (email == "") {
        res.status(400).send("Preencha o campo de e-mail!");
    } else if (senha == "") {
        res.status(400).send("Preencha o campo de senha!");
    } else if (cnpj == "") {
        res.status(400).send("Preencha o campo de CNPJ!");
    } else {
        usuarioModel.cadastrar(nome, email, senha, cnpj)
            .then(() => {
                res.status(201).send("Empresa cadastrada com sucesso!");
            }).catch(error => {
                console.log(error);
            });
    }
}

module.exports = {
    autenticar,
    cadastrar
}