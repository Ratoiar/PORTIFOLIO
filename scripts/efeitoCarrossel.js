const swiper = new Swiper('.swiper', {


  breakpoints: {
 
    0: {
     
      spaceBetween: 50, 
      slidesPerView: 1, 
    },

    550:{
      spaceBetween: 100,
      slidesPerView: 2,
    },

    999: {
      spaceBetween: 150,
      slidesPerView: 3.4, 
      edgeSwipeThreshold: 10,
    }
  },

  centeredSlides:true,
  loop: true,
  freeMode: true,
  freeMode: {
    sticky: true,
    minimumVelocity: 100,
    enabled: true,
  },

effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
  },
edgeSwipeDetection: true,

});