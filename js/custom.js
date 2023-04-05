$("#slider_1").owlCarousel({
  loop: true,
  margin: 10,
  dotsEach: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
new WOW().init();
var owl = $("#slider_1");
owl.owlCarousel();
// Listen to owl events:
owl.on("changed.owl.carousel", function (event) {
  new WOW().init();
});
// ================================ animation is add here =====================================
  
// =================================== slider 2 start ============================================


$('#slider_2').owlCarousel({
  
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
          }

})

// =================================== slider 2 end ============================================

// ================================== slider 3 is start ===================================


$('#slider_3').owlCarousel({
  loop:true,
  margin:10,
  dotsEach:false,
  dots:true,  
  dots:2,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$('#slider_4').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:3
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})



$('#slider_5').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// ==================================slider 3 is start ===================================