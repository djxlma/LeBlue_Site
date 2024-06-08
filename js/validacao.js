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
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Obtém os valores dos campos do formulário de login
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginSenha').value;

    // Verifica se o email inserido está na lista de emails cadastrados
    const emailIndex = emailCadastrado.indexOf(email);

    // Verifica se o índice do email é válido
    if (emailIndex !== -1 && senhaCadastrada[emailIndex] === password) {
        alert('Login bem-sucedido!');
        formLogin.reset();
    } else if (emailIndex !== -1 && senhaCadastrada[emailIndex] !== password){
        alert('Senha incorreta.');
    } else if (emailIndex === -1){
        alert('Este email não foi cadastrado');
    }
    // Reseta o formulário de login
});