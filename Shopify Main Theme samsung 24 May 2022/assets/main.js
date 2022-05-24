$('.carousel-main').flickity();

function myFunction(x) {
//   $('body').toggle("change");
    $('body').toggleClass( "change" );
}

$('.menu-overlay').on('click', function () {
   alert('test');
$('body').removeClass( "change" );
 
});

$('.carousel-search-diagram').flickity();

//  $('.carousel-search-diagram1').slick({
//    slidesToShow: 5,
//    slidesToScroll: 1,
//    arrows: true,
//    fade: true,   
//  });

  
