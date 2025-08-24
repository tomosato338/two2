$(document).ready(function() {




    $('.img-wrap img:nth-child(n+2)').hide();
    setInterval(function() {
        $(".img-wrap img:first-child").fadeOut(2000);
        $(".img-wrap img:nth-child(2)").fadeIn(2000);
        $(".img-wrap img:first-child").appendTo(".img-wrap");
    }, 4000);


    $(function() {
        $('.pics').slick({
            centerMode: true,
            centerPadding: '25%',
            slidesToShow: 1,
            responsive: [{
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerPadding: "10%",
                },
            }, ],
        });

        $('.pics').on('beforeChange', function() {
            $('.slick-current').removeClass('is--active');
        });
        $('.pics').on('afterChange', function() {
            $('.slick-current').addClass('is--active');
        });

    });

    $('.toTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('active');
            } else {
                $(this).stop().removeClass("active");
            }

        });
    });
    $('.slide-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,

        responsive: [{
                breakpoint: 768, // ブレイクポイントを指定
                settings: {
                    slidesToShow: 2,
                    speed: 600,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20%',
                },
            },
        ]
    });
});

$('.slide-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,

    responsive: [{
            breakpoint: 768, // ブレイクポイントを指定
            settings: {
                slidesToShow: 2,
                speed: 600,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '20%',
            },
        },
    ]
});

// https://web-emo.com/jquery-scroll-fadein/