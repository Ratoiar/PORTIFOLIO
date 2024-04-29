const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      aling: center,
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 3,
      spaceBetween: 250
    }
  },
  
  
  


});

