/**
 * plugins/carousel.js — Plugin de Carrusel Dinámico
 */

(function() {
  function initCarousels() {
    const carousels = document.querySelectorAll('.flutcom-carousel:not(.carousel-initialized)');
    
    carousels.forEach(carousel => {
      carousel.classList.add('carousel-initialized');
      
      const inner = carousel.querySelector('.carousel-inner');
      const items = carousel.querySelectorAll('.carousel-item');
      const btnPrev = carousel.querySelector('.carousel-prev');
      const btnNext = carousel.querySelector('.carousel-next');
      const dotsContainer = carousel.querySelector('.carousel-dots');
      
      if(!inner || items.length === 0) return;

      let currentIndex = 0;
      let intervalId = null;
      const autoPlayTime = 5000; // 5 segundos

      // Limpiar y generar dots
      if(dotsContainer) {
        dotsContainer.innerHTML = '';
        items.forEach((_, i) => {
          const dot = document.createElement('button');
          dot.className = `w-3 h-3 rounded-full border-2 transition-colors ${i === 0 ? 'border-[#89F336] bg-[#89F336]' : 'border-white/50 bg-transparent'}`;
          dot.addEventListener('click', () => goToSlide(i));
          dotsContainer.appendChild(dot);
        });
      }

      function updateDots() {
        if(!dotsContainer) return;
        const dots = dotsContainer.querySelectorAll('button');
        dots.forEach((dot, i) => {
          if (i === currentIndex) {
            dot.className = 'w-3 h-3 rounded-full border-2 transition-colors border-[#89F336] bg-[#89F336]';
          } else {
            dot.className = 'w-3 h-3 rounded-full border-2 transition-colors border-white/50 bg-transparent';
          }
        });
      }

      function goToSlide(index) {
        if(index < 0) index = items.length - 1;
        if(index >= items.length) index = 0;
        currentIndex = index;
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
        resetTimer();
      }

      function nextSlide() { goToSlide(currentIndex + 1); }
      function prevSlide() { goToSlide(currentIndex - 1); }

      function startTimer() {
        intervalId = setInterval(nextSlide, autoPlayTime);
      }

      function resetTimer() {
        clearInterval(intervalId);
        startTimer();
      }

      if(btnPrev) btnPrev.addEventListener('click', prevSlide);
      if(btnNext) btnNext.addEventListener('click', nextSlide);

      // Iniciar el auto-play
      startTimer();
      
      // Pausar al hacer hover
      carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
      carousel.addEventListener('mouseleave', startTimer);
    });
  }

  // Inicializar cuando el DOM está listo
  document.addEventListener('DOMContentLoaded', initCarousels);
  
  // Exponer la función globalmente por si el framework inyecta contenido dinámico
  window.flutcomInitCarousels = initCarousels;

  // Un pequeño observador por si las vistas cambian dinámicamente
  const observer = new MutationObserver((mutations) => {
    let hasNewNodes = mutations.some(m => m.addedNodes.length > 0);
    if(hasNewNodes) {
      setTimeout(initCarousels, 100);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

})();
