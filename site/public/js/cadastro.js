function cadastrar() {
    nome = nome_input.value
    email = email_input.value;
    senha = senha_input.value;
    cnpj = cnpj_input.value;

    fetch("/usuario/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha,
            cnpjServer: cnpj
        })
    }).then(res => {
        res.text().then(() => {
            setTimeout(() => {
                window.location.href = "../login.html";
            }, 1500);
        });
    })
}

function redirecionarLogin() {
    window.location.href = "../login.html"
}