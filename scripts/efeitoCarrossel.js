const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 2,
      spaceBetween: 250 
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 3,
      spaceBetween: 200,
    }
  },
  

});

