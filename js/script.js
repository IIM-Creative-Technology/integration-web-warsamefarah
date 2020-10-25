$('#slideshow .slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 2,
            infinite: false,
            dots: true
          }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite:false,
                dots: true
            }
        }
      ]
});