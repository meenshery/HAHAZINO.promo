document.addEventListener("DOMContentLoaded", function () {

    // смена лого при наведении

    const logoimg = document.querySelector('.logo-img');

    logoimg.addEventListener('mouseenter', () => {
        logoimg.src = './images/logo-green.png';
      });
    
      logoimg.addEventListener('mouseleave', () => {
        logoimg.src = './images/logo-img.png';
      });

      // параллакс слотов

      window.addEventListener('scroll', () => {
        const slots = document.querySelector('.slots-banner');
        const scrolled = window.scrollY;
        slots.style.transform = `translateY(${scrolled * 0.06}px)`;
      });

      // постеры карусель

      document.querySelectorAll('.post').forEach(poster => {
        poster.addEventListener('mouseenter', () => {
          const carousel = poster.closest('.carousel');
          carousel.classList.add('paused');
        });
        poster.addEventListener('mouseleave', () => {
          const carousel = poster.closest('.carousel');
          carousel.classList.remove('paused');
        });
      });
})

      // форма жалобы

      document.addEventListener('DOMContentLoaded', () => {
        const complain = document.querySelector('.complain-btn');
        const submit = document.querySelector('.submit-form');
        const close = document.querySelector('.close-form');
        const complainform = document.querySelector('.form-404');

        complain.addEventListener('click', () => {
          complainform.classList.remove('sectionnone');
          complainform.classList.add('sectionblock');
        });

        submit.addEventListener('click', () => {
          complainform.classList.remove('sectionblock');
          complainform.classList.add('sectionnone');
        });

        close.addEventListener('click', () => {
          complainform.classList.remove('sectionblock');
          complainform.classList.add('sectionnone');
        });
      });

      // мерч покупка кнопка ура

      document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.shop-button');
      
        buttons.forEach((button) => {
          let inCart = false;
      
          button.addEventListener('click', () => {
            if (!inCart) {
              inCart = true;
              button.classList.add('shop-button-green');
              button.textContent = 'В КОРЗИНЕ -  1  +';
            } else {
              window.location.href = './basket.html';
            }
          });
        });
      });
      
      
      
      
      
