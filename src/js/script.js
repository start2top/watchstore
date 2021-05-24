  // $(document).ready(function(){
  //     $('.carousel__inner').slick({
  //         speed: 1200,
  //       // adaptiveHeight: true,
  //         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
  //         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
  //         responsive: [
  //             {
  //               breakpoint: 1024,
  //               settings: {
  //                 slidesToShow: 3,
  //                 slidesToScroll: 3,
  //                 infinite: true,
  //                 dots: false
  //               }
  //             },
  //             {
  //               breakpoint: 600,
  //               settings: {
  //                 slidesToShow: 3,
  //                 slidesToScroll: 3
  //               }
  //             },
  //             {
  //               breakpoint: 480,
  //               settings: {
  //                 slidesToShow: 3,
  //                 slidesToScroll: 3
  //               }
  //             }
  //             // You can unslick at a given breakpoint now by adding:
  //             // settings: "unslick"
  //             // instead of a settings object
  //           ]
  //     });
  //   });


  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
      320:{
        controls: false,
        autoWidth: true
      },
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 1,
        autoWidth: true
      },
      768: {
        gutter: 30,
        controls: false,
        autoWidth: true
      },
      991: {
        items: 1,
        controls: false,
        autoWidth: true
      }
    }
 });

 document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

(function($) {
  $(function() {
    
    $('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });