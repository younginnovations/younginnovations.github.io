$(document).ready(function(){
    $('.inner-wrapper').css('min-height', $(window).height() + 'px');     



    //        new UIMorphingButton( document.querySelector( '.morph-button' ), {
    //            closeEl : '.icon-close',
    //        } );

    $('.work-wrapper').siblings('.navigation-wrapper').addClass('worknav');

    var imgheight = $('.office-image img').height() + 'px';
    $('#contact iframe').css('height', imgheight);

    $('.impact-wrap svg').hover(function() {
        $(this).parent('.impact-image').addClass('impactover');
    },function(){
        $(this).parent('.impact-image').removeClass('impactover');
    });


    $(".trigger").click( function(event){
        //hide navigation wrap when clicked esc key

        $(document).keyup(function(event) {
            if(event.which === 27) {
                $( ".navigation-wrap" ).animate({
                    'opacity': '0',
                    'width': '0%',
                    'height': '100%',
                    'top': '400px',
                    'left': '50%'
                },300, function() {
                    // Animation complete.
                });
                $('.navigation-wrapper').addClass('noscroll').removeClass('scroll');
                $('body').removeClass('fixed');
                $('.trigger').removeClass('active').addClass('inactive');
            }
            else {
                $( ".navigation-wrap" ).animate({
                    'opacity': '1',
                    'width': '100%',
                    'height': '100%',
                    'top': '0',
                    'left': '0'
                }, 10, function() {
                    // Animation complete.
                }); 

            }
        });

        $(this).toggleClass("inactive"); 
        $(this).toggleClass("active"); 
        $('.navigation-wrapper').removeClass('noscroll');
        $(this).parents('.navigation-wrapper').toggleClass('scroll');
        $('body').toggleClass('fixed');
        $('.trigger').delay(600).queue(function(){
            $(this).toggleClass('open').clearQueue();
        });

        event.preventDefault();
        if ($(this).hasClass("inactive") ) {
            $( ".navigation-wrap" ).animate({
                'opacity': '0',
                'width': '0%',
                'height': '100%',
                'top': '400px',
                'left': '50%'
            },400, function() {
                // Animation complete.
            });
        } else {
            $( ".navigation-wrap" ).animate({
                'opacity': '1',
                'width': '100%',
                'height': '100%',
                'top': '0',
                'left': '0'
            }, 400, function() {
                // Animation complete.
            });
        }
        return false;
    });



    $(window).scroll(function() {
        if ($(window).width() > 1100) {
            var scrollVal = $(this).scrollTop();
            var scrollHeight = $('.image-wrap').height();
            var imgHeight = $('.image-wrap').height()/2;
//            $('.imagefixed-wrap+article').css('padding-top',scrollHeight);
            if ( scrollVal > imgHeight) {
                $('.image-wrap').addClass('imagefixed-wrap');
                $('.imagefixed-wrap+article').css('padding-top',scrollHeight);
            }
            else {
                $('.image-wrap').removeClass('imagefixed-wrap');
                $('.image-wrap+article').css('padding-top','0');
            }
        }
        else {
            $('.image-wrap').removeClass('imagefixed-wrap');
            $('.image-wrap+article').css('padding-top','0');
        }
    });

    $(window).resize(function(){
        $('.inner-wrapper').css('min-height', $(window).height() + 'px'); 
        var imgheight = $('.office-image img').height() + 'px';
        $('#contact iframe').css('height', imgheight);
        $('.image-wrap').removeClass('imagefixed-wrap');
        $('.image-wrap+article').css('padding-top','0');
        $(window).scroll(function() {
            if ($(window).width() > 1100) {
                var scrollVal = $(this).scrollTop();
                var scrollHeight = $('.image-wrap').height();
                var imgHeight = $('.image-wrap').height()/2;
//                $('.imagefixed-wrap+article').css('padding-top',scrollHeight);
                if ( scrollVal > imgHeight) {
                    $('.image-wrap').addClass('imagefixed-wrap');
                    $('.imagefixed-wrap+article').css('padding-top',scrollHeight);
                }
                else {
                    $('.image-wrap').removeClass('imagefixed-wrap');
                    $('.image-wrap+article').css('padding-top','0');
                }
            }
            else {
                $('.image-wrap').removeClass('imagefixed-wrap');
                $('.image-wrap+article').css('padding-top','0');
            }
        });
    });




    $( "#target" ).toggle(function() {
        alert( "First handler for .toggle() called." );
    }, function() {
        alert( "Second handler for .toggle() called." );
    });


    $('.career-wrapper').parents('article').addClass('career-wrap');

    //scrollit

    $.scrollIt();


    // for touch devices

    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }

    var ua = navigator.userAgent;
    function is_touch_device() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }


    if ((is_touch_device()) || ua.match(/(iPhone|iPod|iPad)/) || ua.match(/BlackBerry/) || ua.match(/Android/)) {
        $('.slide-navigation').css('display','none');
        $('.call').css('display','none');
        $('.tel').css('display','block');


        $(window).scroll(function() {
            var wrapVal = $(this).scrollTop();

            if ( wrapVal >= 10 ) {
                $('.contact .navigation-wrapper').addClass('contact-nav');
            }
            else {
                $('.contact .navigation-wrapper').removeClass('contact-nav');
            }
        });
    }



    //for non touch devices

    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }

    var ua1 = navigator.userAgent;
    function is_touchd_device() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }

    if (!((is_touchd_device()) || ua1.match(/(iPhone|iPod|iPad)/) || ua1.match(/BlackBerry/) || ua1.match(/Android/))) {
        // Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('.navigation-wrapper').outerHeight();
        var topHeight = '-' + navbarHeight + 'px';

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 100);

        function hasScrolled() {
            var st = $(this).scrollTop();
            var unpin = $('.unpin').scrollTop();

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('.navigation-wrapper').removeClass('nav-down').addClass('nav-up');

            }
            else if(st + $(window).height() < $(document).height()) {
                $('.navigation-wrapper').removeClass('nav-up').addClass('nav-down');
                if ($(this).scrollTop() <= 0){
                    $('.navigation-wrapper').addClass('docked_nav');
                }
                else if ($(this).scrollTop() >= 110) {
                    $('.navigation-wrapper').removeClass('docked_nav');
                }

            }

            lastScrollTop = st;
        }

        $('.quote-wrapper').addClass('quote-wrap-large');

    }


    $('.contact-wrapper').parents('body').addClass('contact');
});