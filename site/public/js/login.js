function logar() {
    email = email_input.value;
    senha = senha_input.value;

    fetch("/usuario/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(res => {
        if (res.status == 200) {
            res.json().then(res => {
                sessionStorage.setItem("idEmpresa", res[0].idEmpresa);
                sessionStorage.setItem("nome", res[0].nome);
                window.location.href = "../dashboard/dashboard.html";
            });
        } else {
            res.text().then(res => {
                console.log(res);
            });
        }
    })
}

function redirecionarCadastro(){
    window.location.href = "../cadastro.html"
}