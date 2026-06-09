document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Scroll Animations (Intersection Observer)
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  
  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  fadeElements.forEach(el => {
    fadeObserver.observe(el);
  });

  // 2. FAQ Accordion Logic
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;
      const isActive = item.classList.contains('active');
      
      // Fechar todos os outros abertos (opcional, mas bom UX)
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });
      
      // Toggle atual
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // 3. Mobile Menu Toggle Logic
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('nav-open');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('nav-open');
      });
    });
  }

});
