$('.ByOffer').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,

    responsive: [
    {
        breakpoint: 768,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        dots:true,
        }
    },
    {
        breakpoint: 480,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        dots:true,
        }
    }
    ]
});

