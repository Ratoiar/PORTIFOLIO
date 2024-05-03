const swiper = new Swiper('.swiper', {


  breakpoints: {
 
    0: {
     
      spaceBetween: 10, 
      slidesPerView: 1, 
    },

    990: {
      spaceBetween: 150,
      slidesPerView: 3.4, 
      edgeSwipeThreshold: 10,
    }
  },

  centeredSlides: true,
  freeMode: true,
  freeMode: {
    enabled: true,
    sticky: true,
    minimumVelocity: 15,
  },
});