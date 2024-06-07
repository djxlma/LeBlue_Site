const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numeroSlides = slides.length;
let slideNumero = 0;

// slide botao next
nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('ativado');
    });

    slideNumero++;

    if (slideNumero > (numeroSlides - 1)) {
        slideNumero = 0;
    }

    slides[slideNumero].classList.add('ativado');
}

// slide botao volta
prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('ativado');
    });

    slideNumero--;

    if (slideNumero < 0) {
        slideNumero = numeroSlides - 1;
    }

    slides[slideNumero].classList.add('ativado');
}
