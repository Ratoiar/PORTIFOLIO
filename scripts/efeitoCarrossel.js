const swiper = new Swiper('.swiper', {

  effect: 'coverflow',
  coverflowEffect: {
    rotate:30,
    slideShadows: false,
  },

  breakpoints: {
 
    0: {   
      spaceBetween: 0, 
      slidesPerView: 1, 
    },

    350:{
      spaceBetween: 55,
      slidesPerView: 1,
    },
    400:{
      spaceBetween: 10,
      slidesPerView: 1,
    },
    450:{
      spaceBetween: 10,
      slidesPerView: 1.2,
    },
    500:{
      spaceBetween: 20,
      slidesPerView: 1.4,
    },
    550:{
      spaceBetween: 20,
      slidesPerView: 1.5,
    },
    600:{
      spaceBetween: 20,
      slidesPerView: 1.,
    },
    700:{
      spaceBetween: 40,
      slidesPerView: 2,
    },
    800:{
      spaceBetween: 50,
      slidesPerView: 2,
    },

    900: {
      spaceBetween:50,
      slidesPerView: 3, 
    },
    950: {
      spaceBetween:65,
      slidesPerView: 3, 
    },
    1000:{
      spaceBetween:75,
      slidesPerView: 3,
    },
    1050:{
      spaceBetween:90,
      slidesPerView: 3,
    },
    1100:{
      spaceBetween:100,
      slidesPerView: 3,
    },
    1150:{
      spaceBetween:125,
      slidesPerView: 3,
    },
    1200:{
      spaceBetween:150,
      slidesPerView: 3,
    },
    1250:{
      spaceBetween:175,
      slidesPerView: 3,
    },
    1300:{
      spaceBetween:200,
      slidesPerView: 3,
    },
    1350:{
      spaceBetween:225,
      slidesPerView: 3,
    },
    1400:{
      spaceBetween:250,
      slidesPerView: 3,
    },
    1450:{
      spaceBetween:275,
      slidesPerView: 3,
    },
    1500:{
      spaceBetween: 300,
      slidesPerView: 3,
    },
    1550:{
      spaceBetween: 325,
      slidesPerView: 3,
    },
    1600:{
      spaceBetween: 350,
      slidesPerView: 3,
    },
    1650:{
      spaceBetween: 375,
      slidesPerView: 3,
    },
    1700:{
      spaceBetween: 400,
      slidesPerView: 3,
    },
    1750:{
      spaceBetween: 425,
      slidesPerView: 3,
    },
    1800:{
      spaceBetween: 450,
      slidesPerView: 3,
    },
    1850:{
      spaceBetween: 475,
      slidesPerView: 3,
    },
    1900:{
      spaceBetween: 500,
      slidesPerView: 3,
    },
    1950:{
      spaceBetween: 525,
      slidesPerView: 3,
    },
    2000:{
      spaceBetween: 550,
      slidesPerView: 3,
    },
    2050:{
      spaceBetween: 575,
      slidesPerView: 3,
    },

  },
  centeredSlides:true,
  loop: true,
  freeMode: true,
  freeMode: {
    sticky: true,
    minimumVelocity: 500,
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
    waitForTransition: true,
  },

edgeSwipeDetection: true,

});