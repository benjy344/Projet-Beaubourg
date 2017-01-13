/*********************

Document.ready

********************/

$(document).ready(function() {

    Username = $('input#name').val();
    $('.hamburger').hide();

    $('.hamburger, #overlay').on('touch click', function() {
        $('.hamburger').toggleClass('is-active');
        $('#overlay').toggleClass('open');
        $('.main-nav>ul').removeClass('childOpen');
        $('.main-nav .child').removeClass('isOpen');
    });

    $('.loading').slideUp(1000);

    $("#name").on('keyup', function (e) {
        if (e.keyCode == 13) {
            loadChooseDevMod();
        }
    });

    $('.modal .close').on('touch click', hideModal);
    /////////////////Gestion menu

    $('.haveChild').on('click touch', function(event) {

        event.preventDefault();
        event.stopPropagation();
        var loader = $(this).attr('data-loading');

        var $parent = $('.main-nav>ul');
        var $child = $('.main-nav .child');
        var $child_content = $('.main-nav .child .child-content');

        $parent.addClass('childOpen');
        $child.addClass('isOpen');

        $child_content.load(views+loader+'.html');


    });
    $('.main-nav .child i').on('click touch', function(event){
        event.preventDefault();
        event.stopPropagation();
        var $parent = $('.main-nav>ul');
        var $child = $('.main-nav .child');

        $parent.removeClass('childOpen');
        $child.removeClass('isOpen');

    });

    /////////////////Formulaire
    // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            //Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    } 
});