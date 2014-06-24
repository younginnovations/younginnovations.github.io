$(document).ready(function(){
    $('.main-wrapper,.inner-wrapper').css('min-height', $(window).height() + 'px');    


    new UIMorphingButton( document.querySelector( '.morph-button' ), {
        closeEl : '.icon-close',
    } );

    $('.work-wrapper').siblings('.navigation-wrapper').addClass('worknav');

    var imgheight = $('.office-image img').height() + 'px';
    $('#contact iframe').css('height', imgheight);

    $(window).resize(function() {
        var imgheight = $('.office-image img').height() + 'px';
        $('#contact iframe').css('height', imgheight);
    });
    
    

    //hide navigation wrap when clicked esc key

    $(document).keyup(function(event) {
        if(event.which === 27) {
            $('.navigation-wrap').hide();
        }
    });
    
    $('.impact-wrap svg').hover(function() {
        $(this).parent('.impact-image').addClass('impactover');
    },
    function(){
        $(this).parent('.impact-image').removeClass('impactover');
    });

//    $('.morph-button').parents('.navigation-wrapper').css('height','auto');
//    
//    $('.trigger').click(function() {
//        $('.morph-button').parents('body').addClass('fixed');
//        $('.morph-button').parents('.navigation-wrapper').css('height','100%');
//        $('.morph-button').parents('.navigation-wrapper.nav-down').addClass('morphnav');
//        $('.slide-navigation').css('display','none');
//    });
//
//    $('.icon-close').click(function() {
//        $('.morph-button').parents('body').removeClass('fixed');
////      $('.morph-button').parents('.navigation-wrapper').css('height','auto');
//       $('.morph-button').parents('.navigation-wrapper.nav-down').removeClass('morphnav');
//        $('.slide-navigation').css('display','block');
//    });

    
    //
    //    $( '.icon-close' ).on(
    //        'click',
    //        function()
    //        {
    //            var href = $(this).attr( 'href' );
    //
    //            //  if the clicked link is linked to an anchor, scroll the page to that anchor 
    //            if ( href.slice( 0, 1 ) == '#' )
    //            {
    //                $menu.one(
    //                    'closed.mm',
    //                    function()
    //                    {
    //                        setTimeout(
    //                            function()
    //                            {
    //                                $html.animate({
    //                                    scrollTop: $( href ).offset().top
    //                                },700); 
    //                            }, 10
    //                        );  
    //                    }
    //                );                      
    //            }
    //        }
    //    );

    


    //scrollit

    $.scrollIt();


    //    $(window).scroll(function() {
    //        var wrapVal = $(this).scrollTop();
    //        var wrapheight = $('.wrap-out').height() - 390;
    //       
    //        if ( wrapVal > wrapheight) {
    //            $('.slide-navigation').addClass('nav-circ');
    //        }
    //        else {
    //           
    //        }
    //    });
    //    
    //    $(window).scroll(function() {
    //        var quotVal = $(this).scrollTop();
    //        var qheight = $('.wrap-out').height();
    //        var quoteheight = $('.quote-wrapper').height();
    //        var totalheight = qheight+quoteheight+1000;
    //        if ( quotVal > totalheight) {
    //            $('.slide-navigation').removeClass('nav-circ');
    //        }
    //        else {
    //            
    //        }
    //    });


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



    }

  
 $('.contact-wrapper').parents('body').addClass('contact');
});