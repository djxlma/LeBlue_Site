let usuarioCadastrado = []
let emailCadastrado = []
let senhaCadastrada = []

const formsRegitrado = document.getElementById('formsRegistrado');

formsRegitrado.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    usuarioCadastrado.push(username);
    emailCadastrado.push(email);
    senhaCadastrada.push(password);

    console.log(usuarioCadastrado)
    console.log(emailCadastrado)
    console.log(senhaCadastrada)

    alert("Usuário Cadastrado!")
    formsRegitrado.reset();
});

formLogin.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginSenha').value;

    const emailIndex = emailCadastrado.indexOf(email);

    if (emailIndex !== -1 && senhaCadastrada[emailIndex] === password) {
        alert('Login bem-sucedido!');
        formLogin.reset();
    } else if (emailIndex !== -1 && senhaCadastrada[emailIndex] !== password){
        alert('Senha incorreta.');
    } else if (emailIndex === -1){
        alert('Este email não foi cadastrado');
    }
});