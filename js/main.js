import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.portfolio__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: false,
  autoHeight: true,
  navigation: {
    nextEl: '.main__portfolio .swiper-button-next',
    prevEl: '.main__portfolio .swiper-button-prev',
  },
  breakpoints: {
    960: {
       slidesPerView: 2, 
       spaceBetween: 24
      },
  },
});

const hamburgerBtn = document.querySelector('.hamburger');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 960) {
    hamburgerBtn.classList.remove('active');

  }
});

let servicesSwiper;

function initServicesSwiper() {
  if (window.innerWidth >= 960) {
    if (!servicesSwiper) {
      servicesSwiper = new Swiper('.services__swiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
  else {
    if (servicesSwiper) {
      servicesSwiper.destroy(true, true);
      servicesSwiper = undefined;
    }
  }
}
window.addEventListener('load', initServicesSwiper);
window.addEventListener('resize', initServicesSwiper);

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq__question');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});