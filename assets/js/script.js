/*-----------------------------------------------------------------------------------

    Project Name: 
    Version: 1.0.0
    Project URI: https://html.themestransmit.com/html/qunesa/
    Description: 
    Author URI: http://themeforest.net/user/themestransmit
    Support: themestransmit@gmail.com

-----------------------------------------------------------------------------------*/


(function ($) {
    "use strict";

    /* ============================================================ */
    /* PRELOADER START
    /* ============================================================ */
    $(document).ready(function($) {
        $(".preloader").fadeOut();
    });
    /* Preloader End */

    /* ============================================================ */
    /* MOBILE MENU START
    /* ============================================================ */
    function offcanvas_menu(selector, actionSelector) {
        var offcanvas_menu = $(selector);
        offcanvas_menu.on('click', function() {
            $(selector).toggleClass('is-menu-open');
        });

        var hamburgerbtn = $(selector);
        hamburgerbtn.on('click', function() {
            $(actionSelector).toggleClass('is-menu-open');
        });

        $(document).on('click', function(e) {
            var selectorType = $(actionSelector).add(offcanvas_menu);
            if (
                selectorType.is(e.target) !== true &&
                selectorType.has(e.target).length === 0
            ) {
                $(actionSelector).removeClass('is-menu-open');
                $(selector).removeClass('is-menu-open');
            }
        });
        $('.overlay-menu').on('click', function(e) {
            $(actionSelector).removeClass('is-menu-open');
            $(selector).removeClass('is-menu-open');
        });
    }
    offcanvas_menu(
        'header .sidebar_toggler, .close-menu ',
        '.offcanvas-menu, .overlay-menu, body'
    );

    $('.offcanvas-menu .menu-item-has-children').on('click', '.menu-link', function() {
        var $this = $(this);
        $this.toggleClass('active').next('.sub-menu').slideToggle();
        $this.parent().siblings().find('.sub-menu').slideUp().end().find('.menu-link').removeClass('active');
    });
    /* Mobile menu End */


    
    /* ============================================================ */
    /* StickyHeader
    /* ============================================================ */
    var fixed_top = $("header");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 30) {
            fixed_top.addClass("sticky");
        } else {
            fixed_top.removeClass("sticky");
        }
    });

    /* ============================================================ */
    /* Gallery Lightbox
    /* ============================================================ */
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
    
    /* ============================================================ */
    /* Mobile Menu Integration
    /* ============================================================ */

    /* ============================================================ */
    /* ISOTOP
    /* ============================================================ */
    $(window).on("load resize",function(e){ 
        var $container = $('.isotop-gallery'),
        isotope = function () {
            $container.isotope({
                resizable: true,
                itemSelector: '.grid-item',
                layoutMode: 'packery',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                },
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s',
            });
        };
        isotope(); 

        var $isotopefilters = $('.filter-buttons');
        $isotopefilters.on( 'click', 'button', function() {
            $(this).addClass('active').siblings().removeClass('active');

            var filterValue = $( this ).attr('data-filter');
            $container.isotope({ 
                filter: filterValue 
            });
        });        
    }); 

    // Fun Facts Counterup
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    /* ============================================================ */
    /* Scroll Top
    /* ============================================================ */
    $('body').append(
        "<a href='#top' title='Scroll Top' id='scroll-top' class='topbutton'><i class='fal fa-chevron-up'></i></a>"
    );
    let $scrolltop = $('#scroll-top');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > $(this).height()) {
            $scrolltop.addClass('btn-show').removeClass('btn-hide');
        } else {
            $scrolltop.addClass('btn-hide').removeClass('btn-show');
        }
    });
    $("a[href='#top']").on('click', function () {
        $('html, body').animate({
                scrollTop: 0,
            },
            'normal'
        );
        return false;
    });

    /* ============================================================ */
    /* circle progress
    /* ============================================================ */
    const circularProgress = document.querySelectorAll(".circular-progress");

        Array.from(circularProgress).forEach((progressBar) => {
        const progressValue = progressBar.querySelector(".percentage");
        const innerCircle = progressBar.querySelector(".inner-circle");
        let startValue = 0,
            endValue = Number(progressBar.getAttribute("data-percentage")),
            speed = 50,
            progressColor = progressBar.getAttribute("data-progress-color");

        const progress = setInterval(() => {
            startValue++;
            progressValue.textContent = `${startValue}%`;
            progressValue.style.color = `${progressColor}`;

            innerCircle.style.backgroundColor = `${progressBar.getAttribute(
            "data-inner-circle-color"
            )}`;

            progressBar.style.background = `conic-gradient(${progressColor} ${
            startValue * 3.6
            }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
            if (startValue === endValue) {
            clearInterval(progress);
            }
        }, speed);
    });

    // brand slider activation
    let testimonialSlider = new Swiper ('.testimonial_slider', {
        spaceBetween: 25,
        speed: 2000,
        autoplay: true,
        breakpoints: {
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });


    // brand slider activation
    let brandSlider = new Swiper ('.brand_slider', {
        spaceBetween: 30,
        slidesPerView: 'auto',
        loop: true,
        freeMode: true,
        slidesPerView: 2,
        speed: 5000,
        autoplay: {
            delay: 0,
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });
    
    // brand slider activation
    let footerBrandSlider = new Swiper ('.footer_brand_slider', {
        spaceBetween: 30,
        slidesPerView: 'auto',
        loop: true,
        freeMode: true,
        slidesPerView: 2,
        speed: 5000,
        autoplay: {
            delay: 0,
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    // service slider activation
    let serviceSlider = new Swiper ('.services_slider', {
        spaceBetween: 30,
        slidesPerView: 'auto',
        loop: true,
        slidesPerView: 2,
        speed: 5000,
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    //circle progress bar script here
    let options = {
        startAngle: -1.55,
    }
    
    var codingSkills = $('.circle_wrapper');
    if (codingSkills.length > 0) {
        codingSkills.waypoint(function() {
            $(".circle .bar").circleProgress(options).on('circle-animation-progress',
                function(event, progress, stepValue){
                    let percentageValue = String(stepValue.toFixed(2).substr(2));
                    // Custom HTML structure for separate font size control
                    $(this).parent().find(".box").html(`${percentageValue}<span class="percentage-sign">%</span>`);
            });            
        }, { 
            offset: '100%'
        });
    };


    /* ============================================================ */
    /* project Isotop filter
    /* ============================================================ */
    $(window).on("load resize",function(e){ 
        var $container = $('.project_wrapper'),
        isotope = function () {
            $container.isotope({
                resizable: true,
                itemSelector: '.grid-item',
                layoutMode: 'packery',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                },
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s',
            });
        };
        isotope(); 

        var $isotopefilters = $('.project_menu_list');
        $isotopefilters.on( 'click', 'button', function() {
            $(this).addClass('active').siblings().removeClass('active');

            var filterValue = $( this ).attr('data-filter');
            $container.isotope({ 
                filter: filterValue 
            });
        });
    }); 
    

    // testimonail slider js
    var clientImage = new Swiper(".client_image_slider", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        autoplay: true,
        watchSlidesProgress: true,
    });
    var clientInfo = new Swiper(".client_info_slider", {
        loop: true,
        spaceBetween: 10,
        autoplay: true,
        parallax: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: clientImage
        },
    });
      


    /* ============================================================ */
    /* Searchbox Show-Hide
    /* ============================================================ */
    function toggleModal(modalClass, openTrigger, closeTrigger, activeClass) {
        $(document).on('click', openTrigger, function() {
            $(modalClass).addClass(activeClass);
        });    
        $(document).on('click', closeTrigger, function() {
            $(modalClass).removeClass(activeClass);
        });
    }
    toggleModal('.searchbox', '.search_icon', '.closeSearchBox', 'show');
    

    /* ============================================================ */
    /* AOS Animation 
    /* ============================================================ */
    AOS.init({
        duration: 800,
        once: true,
    });

    /* ============================================================ */
    /* Nice Select 
    /* ============================================================ */
    $(document).ready(function() {
        $('select.nice_select').niceSelect();
    });
    
})(jQuery);