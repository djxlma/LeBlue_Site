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