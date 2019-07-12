$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<img src=\"img/prevArr.svg\" alt=\"\" class='prev'  >",
    nextArrow: "<img src=\"img/nextArr.svg\" alt=\"\" class='next'  >",
    responsive: [
        {
            breakpoint: 1235,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 5,
                arrows: false
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 4,
                arrows: false
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});