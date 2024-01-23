$(function () {
    
$(".logo, .btnTop").on("click", () => {
    $("html,body").stop().animate({
        scrollTop: 0
    }, 400);
});
$(window).scroll(() => {
    if ($(this).scrollTop() > 500) {
        $(".btnTop").fadeIn();
    } else {
        $(".btnTop").fadeOut();
    }
});

let isMainMenuClicked = false;

function updateStyles(isScrolled, isHovered = false) {
    let imgSrc = isHovered || isScrolled ? './images/logo.svg' : './images/logo_w.svg';

    let headerStyles = {
        'height': isHovered || isScrolled || isMainMenuClicked ? '110px' : '',
        'width': '100%',
        'background-color': isScrolled || isMainMenuClicked ? 'white' : (isHovered ? 'white' : ''),
        'border-bottom': isHovered || isScrolled || isMainMenuClicked ? '1px solid #ddd' : ''
    };

    let linkStyles = {
        'color': isHovered || isScrolled || isMainMenuClicked ? '#000' : '',
    };



    $("header img").attr('src', imgSrc);
    $("header").css(headerStyles);
    $("ul.searchLang li:nth-child(1) a i, ul.searchLang li:nth-child(3) a ").css('color', linkStyles.color);
    $(".nav-list>li>a, .submenu>li>a").css(linkStyles);
}


$(function () {
    let isHovered = false;

    $(window).scroll(() => {
        let scrollTop = $(window).scrollTop();
        let isScrolled = scrollTop > 110;

        let headerStyles = {
            'height': isScrolled ? '110px' : '',
            'width': '100%',
            'background-color': isScrolled ? 'white' : '',
            'border-bottom': isScrolled ? '1px solid #ddd' : ''
        };

        let linkStyles = {
            'color': isHovered || isScrolled || isMainMenuClicked ? '#000' : '',
        };

        $("header img").attr('src', isScrolled ? './images/logo.svg' : './images/logo_w.svg');
        $("header").css({
            ...headerStyles,
            'box-shadow': isScrolled ? '0 5px 5px rgba(0, 0, 0, 0.1)' : ''
        });

        updateStyles(isScrolled, isHovered);
    });

    $("ul#menu, .innerHeader").hover(
        () => {
            $(".submenu, .smenu_bar").stop().slideDown('fast');
            isHovered = true;
            updateStyles($(window).scrollTop() > 110, isHovered);
        },
        () => {
            $(".submenu, .smenu_bar").stop().fadeOut('fast');
            isHovered = false;
            updateStyles($(window).scrollTop() > 110, isHovered);
        }
    );

    $(".nav-list>li").hover(
        function () {
            $(this).find(">a").addClass("active");
        },
        function () {
            $(this).find(">a").removeClass("active");
        }
    );

    $("ul#menu").slicknav();
});

    $(".submenu>li>a").mouseenter(function () {
        $(this).addClass("submenu-hovered");
        $(this).css({
            "color": "#999"
        });
    });

    $(".submenu>li>a").mouseleave(function () {
        $(this).removeClass("submenu-hovered");
        $(this).css({
            "color": ""
        });
    });

    $(window).scroll(updateStyleOnScroll);

    function updateStyleOnScroll() {
        let scrollTop = $(window).scrollTop();
        let isScrolled = scrollTop > 110;

        let headerStyles = {
            'height': isScrolled ? '110px' : '',
            'width': '100%',
            'background-color': isScrolled ? '#fff' : '',
            'border-bottom': isScrolled ? '1px solid #ddd' : ''
        };

        let linkStyles = {
            'color': isScrolled ? '#000' : ''
        };

        $("header img").attr('src', isScrolled ? './images/logo.svg' : './images/logo.svg');
        $("header").css({
            ...headerStyles,
            'box-shadow': isScrolled ? '0 5px 5px rgba(0, 0, 0, 0.1)' : ''
        });

        updateStyles(isScrolled);
    }

    let options = $(".pd_list .option");
    let currentIndex = 0;

    $(".pd_list .option:not(.active) .wArrow").css({
        bottom: "-70px",
        opacity: 0

    });
    options.on("click", function () {
        let option = $(this);

        if (option.hasClass("active")) {
            option.removeClass("active");
        } else {
            options.removeClass("active");
            option.addClass("active");
        }

        updateBackground();

        $(".wArrow").removeClass("active");
        option.find(".wArrow").addClass("active");

        let arrow = option.find(".wArrow");
        arrow.animate({
            bottom: "30px",
            opacity: 1
        }, 100); 
    });

    function updateBackground() {

        $(".pd_list .option:not(.active) .wArrow").css({
            bottom: "-70px",
            opacity: 0
        });

    }

    //news room
	$(".news_slider").slick({
		autoplay:false, 
		infinite: true,
		slidesToShow:3, 
		dots:true,
		arrows:false, 
		speed:500,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					centerMode: true,
					centerPadding: '60px',
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 431,
				settings: {
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 1,
				}
			},
		]
	});

});

