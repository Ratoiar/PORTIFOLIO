const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  breakpoints: {
 
    0: {
      slidesPerView: 1,
      spaceBetween: 250 
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 200,
    }
  },
  

});



