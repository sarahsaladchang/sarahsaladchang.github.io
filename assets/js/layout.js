(() => {
  const current = document.body.dataset.page;
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === current);
  });

  const mobileSelect = document.querySelector('.mobile-select');
  if (mobileSelect) {
    mobileSelect.addEventListener('change', event => {
      window.location.href = event.target.value;
    });
  }

  document.querySelectorAll('[data-project-jump]').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.projectJump);
      if (!target) return;
      document.querySelectorAll('[data-project-jump]').forEach(item => item.classList.toggle('active', item === button));
      const top = target.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const dots = carousel.querySelectorAll('[data-slide]');
    let index = 0;
    let touchStartX = 0;

    function updateCarousel(nextIndex) {
      if (!slides.length) return;
      index = (nextIndex + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
    }

    if (slides.length <= 1) {
      updateCarousel(0);
      return;
    }

    prev?.addEventListener('click', () => updateCarousel(index - 1));
    next?.addEventListener('click', () => updateCarousel(index + 1));
    dots.forEach(dot => dot.addEventListener('click', () => updateCarousel(Number(dot.dataset.slide))));
    carousel.addEventListener('touchstart', event => { touchStartX = event.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', event => {
      const delta = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) >= 42) updateCarousel(delta < 0 ? index + 1 : index - 1);
    });
    updateCarousel(0);
  });
})();
