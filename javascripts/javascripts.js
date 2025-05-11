document.addEventListener("DOMContentLoaded", function () {
    const logoimg = document.querySelector('.logo-img');

    logoimg.addEventListener('mouseenter', () => {
        logoimg.src = './images/logo-green.png';
      });
    
      logoimg.addEventListener('mouseleave', () => {
        logoimg.src = './images/logo-img.png';
      });

})