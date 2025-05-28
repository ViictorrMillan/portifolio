document.querySelectorAll('.contato-card').forEach(card => {
  const deslizador = card.querySelector('.deslizador');
  const gap = card.querySelector('.gap-borda');

  const largura = card.offsetWidth;
  const altura = card.offsetHeight;
  const perimetro = 2 * (largura + altura);

  let pos = 0;
  let animando = false;

  function animar() {
    if (!animando) return;

    let x = 0, y = 0;

    if (pos < largura) {
      x = pos;
      y = 0;
    } else if (pos < largura + altura) {
      x = largura;
      y = pos - largura;
    } else if (pos < 2 * largura + altura) {
      x = largura - (pos - (largura + altura));
      y = altura;
    } else {
      x = 0;
      y = altura - (pos - (2 * largura + altura));
    }

    deslizador.style.left = `${x - 20}px`;
    deslizador.style.top = `${y - 20}px`;
    gap.style.left = `${x - 20}px`;
    gap.style.top = `${y - 20}px`;

    pos += 0.8;
    if (pos > perimetro) pos = 0;

    requestAnimationFrame(animar);
  }

  card.addEventListener('mouseenter', () => {
    animando = true;
    animar();
  });

  card.addEventListener('mouseleave', () => {
    animando = false;
  });
});