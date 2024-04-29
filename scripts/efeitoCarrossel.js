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



@media screen and (min-width: 1024px){


    .swiper-pagination{
        position: initial;
        margin: 2em 0 3em 0;

    }

    .swiper-slide img{
            width:60%;

    }

    .swiper-button-prev, .swiper-button-next{
                display: block;
                padding: 0 8em;

    }
}

