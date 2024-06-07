const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.registro-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('ativado');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('ativado');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('popup-ativado');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('popup-ativado');
});

document.addEventListener('DOMContentLoaded', function() {
    var saibaMaisLink = document.querySelector('.saibaMais');
    var btnSaibaSlide = document.querySelector('.slide[alt="btnSaiba"]');

    saibaMaisLink.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Calcula a posição da seção desejada em relação ao topo da página
        var offsetTop = btnSaibaSlide.offsetTop;

        // Faz a rolagem suave até a posição da seção
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});
