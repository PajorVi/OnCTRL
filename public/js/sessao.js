// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.APELIDO_USUARIO;

    if (email == null && nome == null) {
        window.location = "../login.html";
        sessao = false;
    }

}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}