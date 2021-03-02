$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".headerBox").addClass("headerBox--fixed");
    }
    else {
        $(".headerBox").removeClass("headerBox--fixed");
    }
}); //missing );

$('.mobile-toggle').on('click', function(){
    $('.headerBox__menu-wrapper').toggleClass('active');
    $(this).toggleClass('active');
});

$('.cross-menu-btn').on('click', function(){
    $('.headerBox__menu-wrapper').removeClass('active');
    $('.mobile-toggle').removeClass('active');
});

$("#singleSlide").slick({
    infinite: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$("#threeSlide").slick({
    infinite: false,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
        slidesToShow: 1,
        dots: true
        }

    }]
});
