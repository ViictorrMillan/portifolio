// Pega os elementos
const menuToggle = document.getElementById('menu-toggle');
const aside = document.querySelector('aside');
const overlay = document.getElementById('overlay');
const asideT = document.querySelector('.aside-t');

// Função que alterna o menu e o overlay
function toggleMenu() {
  aside.classList.toggle('active');
  asideT.classList.toggle('active'); // Mantém junto com aside

  if (aside.classList.contains('active')) {
    overlay.style.display = 'block';
  } else {
    overlay.style.display = 'none';
  }
}

menuToggle.addEventListener('click', toggleMenu);

overlay.addEventListener('click', () => {
  aside.classList.remove('active');
  asideT.classList.remove('active'); 
  overlay.style.display = 'none';
});

const navLinks = aside.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    aside.classList.remove('active');
    asideT.classList.remove('active'); 
    overlay.style.display = 'none';
  });
});