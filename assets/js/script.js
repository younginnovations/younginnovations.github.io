$(document).ready(function(){
    $('.inner-wrapper').css('min-height', $(window).height() + 'px');     


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

    $(window).resize(function(){
        $('.inner-wrapper').css('min-height', $(window).height() + 'px'); 
        var imgheight = $('.office-image img').height() + 'px';
        $('#contact iframe').css('height', imgheight);
    });


    $( "#target" ).toggle(function() {
        alert( "First handler for .toggle() called." );
    }, function() {
        alert( "Second handler for .toggle() called." );
    });


    $('.career-wrapper').parents('article').addClass('career-wrap');

    //scrollit

    $.scrollIt();
    
    $('.upto-article-layout').parents('body').addClass('upto-wrap');


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
        $('.thumbnail').css('display','none');

        $(window).scroll(function() {
            var wrapVal = $(this).scrollTop();

            if ( wrapVal >= 10 ) {
                $('.contact .navigation-wrapper').addClass('contact-nav');
            }
            else {
                $('.contact .navigation-wrapper').removeClass('contact-nav');
            }
        });

        $('.info').css('display','none');
        $('.impact-projects ul li a img,.work-article-wrap article .link-article img').css('transform','none');

        $('body').addClass('smallnav-wrap');
    }

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

    if ((is_touch_device()) || ua.match(/BlackBerry/) ) {
        $('body').addClass('berrybody');
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
        $('.impact-project-title').hide();
    }

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);


    if (isSafari) {
        $('.impact-screen-image').addClass('safari-image');
    }

    if (isChrome) {
        $('.impact-screen-image').removeClass('safari-image');
    }

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.smallnav-wrap .scrolltop').fadeIn();
        } else {
            $('.smallnav-wrap .scrolltop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.smallnav-wrap .scrolltop').click(function(){
        $('html, body').animate({scrollTop : 0},500);
        return false;
    });
    
    
    function goToByScroll(id){
        // Reove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top},
                               'slow');
    }

    $(".dev-btn").click(function(e) {
        // Prevent a page reload when a link is pressed
//        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr("id"));

    });
    


    $('.contact-wrapper').parents('body').addClass('contact');
    
    var navheight = $('.navigation-wrapper').height();
    $('#main').css('padding-top',navheight);

    $(window).scroll(function() {
        if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
            $('.navigation-wrapper').addClass('bottomfix');
        }
        else {
            $('.navigation-wrapper').removeClass('bottomfix');
        }
    });
    
    var note = $('.note'),
        ts = new Date(2015, 1, 16),
        newYear = true;

    if((new Date()) > ts){
        // The new year is here! Count towards something else.
        // Notice the *1000 at the end - time must be in milliseconds
        ts = (new Date()).getTime() + 14*24*60*60*1000;
        newYear = false;
    }
    

    $( ".nav ul li .sub-menu" ).hover(
        function() {
            $(this).parent('li').addClass('subhover');
        }, function() {
            $(this).parent('li').removeClass('subhover');
        }
    );
    
    $('.error-wrapper img').plaxify();
    $.plax.enable();

    var imgTags = $( ".blog-layout img" );

        if ( imgTags.parent().is( "p" ) ) {
            imgTags.unwrap();
        }
    
    $('.leftimage,.leftimage+p').wrapAll('<div class="blog-text-wrap"></div>');
    $('.rightimage,.rightimage+p').wrapAll('<div class="blog-text-wrap"></div>');

    
});

