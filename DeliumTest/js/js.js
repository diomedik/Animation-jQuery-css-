$(document).ready(function(){
  $('.header-slider').slick({
  	prevArrow: $('.header-arrows__arrow-prev'),
  	nextArrow: $('.header-arrows__arrow-next'),
    infinite: true,
   	slidesToShow: 3,
   	slidesToScroll: 3,
   	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  $('.header-slider__item__content__text').on({
     mouseenter: function () {
     	$(this).children('.disable-text').stop().show(300);
     	$(this).siblings('.header-slider .img').stop().animate({ "top" : "-80px"}, 300);
      if(window.matchMedia('(max-width: 1199px)').matches){
        $(this).siblings('.header-slider .img').stop().animate({ "top" : "-70px"}, 300);
      };
      if(window.matchMedia('(max-width: 767px)').matches){
        $(this).siblings('.header-slider .img').stop().animate({ "top" : "-50px"}, 300);
      };
      if(window.matchMedia('(max-width: 430px)').matches){
        $(this).siblings('.header-slider .img').stop().animate({ "top" : "-80px"}, 300);
      };
     	if(window.matchMedia('(max-width: 320px)').matches){
     		$(this).siblings('.header-slider .img').stop().animate({ "top" : "-60px"}, 300);
     	};
     },
     mouseleave: function () {
     	$(this).children('.disable-text').stop().hide(300);
     	$(this).siblings('.header-slider .img').stop().animate({ "top" : "0px"}, 300);
     }
  });
 
/*
  $('.header-slider__item__content').hover(function(){
  	$('.shower').toggle(300);
  	$('.header .img').animate({ "top" : "-80px"}, 300);
  })
  $('.img').css({"top":"0px"});
  */
});