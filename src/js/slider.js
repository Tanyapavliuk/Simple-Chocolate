
 new Swiper ('.swiper-produckts', {
  grabCursor: true,
  pagination: {
    el: '.produckts-pagination',
    clickable: true,
   },
   zoom: {
     maxRatio: 1.3,
     minRatio: 1,
  },
  breakpoints :{
    0 :{
      slidesPerView: 1,
    },
    758 :{
      slidesPerView: 2.5,
    },
    1200 :{
      slidesPerView: 4,
    },
  }
});

new Swiper ('.swiper-buy', {
  spaceBetween: 16,
  grabCursor: true,
  pagination: {
    el: '.pagination-buy',
    clickable: true,
  },
 

  breakpoints :{
    375 :{
      slidesPerView: 1,
    },
    1200 :{
      slidesPerView: 3,
    },
  }
});
