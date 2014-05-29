$(document).ready(function(){
    $('.main-wrapper,.inner-wrapper').css('min-height', $(window).height() + 'px');    


        new UIMorphingButton( document.querySelector( '.morph-button' ), {
            closeEl : '.icon-close'
        } );
   $('.work-wrapper').siblings('.navigation-wrapper').addClass('worknav');
});