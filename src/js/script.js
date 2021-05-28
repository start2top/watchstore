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


  var slider = tns({
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

$(document).ready(function(){
    
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass
      ('catalog__content_active').eq($(this).index()).addClass
      ('catalog__content_active');
  });
  
  

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
          $('.catalog-item__content').eq(i  ).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i ).toggleClass('catalog-item__list_active');
      })
    });
  };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

  //Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });


    $('.button__mini').each(function(i) {
      $(this).on('click', function()   {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    });

});