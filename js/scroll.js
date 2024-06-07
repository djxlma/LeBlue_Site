function irParaSecao(comecoConteudo) {
    const elementoSecao = document.getElementById(comecoConteudo);
    if (elementoSecao) {
      window.scrollTo({
        top: elementoSecao.offsetTop,
      });
    };
};