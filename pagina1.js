const poemas = document.querySelectorAll('.poema');

function checkScroll() {
  const trigger = window.innerHeight * 0.8;

  poemas.forEach(poema => {
    const top = poema.getBoundingClientRect().top;
    if (top < trigger) {
      poema.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
