$(document).ready(function () {
    $('.lasted-project-carousel').owlCarousel({
        loop: true,
        margin: 20, 
        dots: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    })

    $('.testimonials-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});

