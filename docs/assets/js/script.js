(function ($) {
    "use strict";

    
    ///============= Preloader =============\\\
    $(window).on('load', function() {
        $(".preloader").fadeOut();     
    });

    ///============= Tooltip Init =============\\\
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-te-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new te.Tooltip(tooltipTriggerEl));

    ///============= Sidebar Expanded =============\\\
    function sidebarMenu(selector, actionSelector) {
        var selectorr = $(selector);
        selectorr.on("click", function() {
            $(selector).toggleClass('active');
        });
        
        var hamburgerbtn = $(selector);
        hamburgerbtn.on("click", function() {
            $(actionSelector).toggleClass('active');
        });

        $('.main-content, .sidebar-nav ul li a').on('click', function(e) {
            $(actionSelector).removeClass("active");
        });    
    };

    sidebarMenu('.sidebar_toggle', '.sidebar-nav'); 


    ///============= Sidebar Expanded =============\\\
    $('a:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });


    ///=============  Magnific Popup  =============\\\
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });


    
$(document).ready(function() {

    $(".doc-nav").find("> li > a").append($('<span class="docs-progress-bar absolute left-0 bottom-0 h-full bg-slate-300 -z-[1]"></span>'));
    $(".doc-nav").offset().top;
    $(window).scroll(function() {
        $(".doc-nav").height();
        var t = $(this).scrollTop(),
            n = $(this).innerHeight(),
            e = $(".doc-nav li a").filter(".active").index();
        $(".doc-section").each(function(i) {
            var c = $(this).offset().top,
                s = $(this).height(),
                a = c + s,
                r = 0;
            t >= c && t <= a ? (r = (t - c) / s * 100) >= 100 && (r = 100) : t > a && (r = 100), a < t + n - 70 && (r = 100);
            var d = $(".doc-nav .docs-progress-bar:eq(" + i + ")");
            e > i && d.parent().addClass("viewed"), d.css("width", r + "%")
        })
    })
})

  
})(jQuery);


