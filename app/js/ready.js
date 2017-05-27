/**
* @file Functions to execute when document is ready
* @author François-Xavier Bresson & Benjamin Demaizière
**/



$(document).ready(function() {

    var testGyro = function(event) {
        console.log(event)
        if (event.alpha) {
            hasGyro = true 
        }
        window.removeEventListener('deviceorientation', testGyro)



        //VRView 
        if (isHandheld) { //Mobile
            if (hasGyro) {
                $('#js-switchView').remove();
                window.addEventListener("deviceorientation", function (event) { 
                    processGyro(event.alpha, event.beta, event.gamma);   
                }, true);
            } else {
                $('#js-switchView').click(function() {
                    $('#app').toggleClass("hidden");
                    $('#view').toggleClass('hidden');
                })
                window.addEventListener("devicemotion", function(event){
                    processGyro(event.accelerationIncludingGravity.x, event.accelerationIncludingGravity.y, event.accelerationIncludingGravity.z);              
                }, true);
            }

            $('#appFrame').remove();
            $('#view').addClass('hidden');

        } else {
            if(!inIframe) {
                $('#app').remove();
                $('#appFrame').attr('src', window.location);  
                $('#js-switchView').click(function() {
                    $('#appFrame').toggleClass("hidden");
                })
            } else {
                $('#view').remove();
                $('#appFrame').remove();
                $('#js-switchView').remove();
            }


        }

        console.log(isHandheld)

        console.log(window.self, window.top, window.parent)

        if (!inIframe) {
            vrView = new VRView.Player('#vrview', {
                image: vrviews + 'center.jpg',
                is_autopan_off: true
            });
            vrView.on('ready', onVRViewReady);
            vrView.on('modechange', onModeChange);
            vrView.on('click', onHotspotClick);
            vrView.on('error', onVRViewError);
        }




        $('.hamburger').hide();

        $('.hamburger').on('touch click', function() {
            $('.hamburger').toggleClass('is-active');
            $('#overlay').toggleClass('open');
            $('.main-nav>ul').removeClass('childOpen');
            $('.main-nav .child').removeClass('isOpen');
        });

        $('.loading').slideUp(1000);

        $('.modal .close').on('touch click', hideModal);

        //Menu
        $(document).on('click touch', '.haveChild', function(event) {
            event.preventDefault();
            event.stopPropagation();
            var loader = $(this).attr('data-loading'),
                $parent = $('.main-nav>ul'),
                $child = $('.main-nav .child'),
                $child_content = $('.main-nav .child .child-content');
            $parent.addClass('childOpen');
            $child.addClass('isOpen');
            $child_content.load(views+lang+'/'+loader+'.html');
        });
        $(document).on('click touch', '.main-nav .child i', function(event){
            event.preventDefault();
            event.stopPropagation();
            var $parent = $('.main-nav>ul');
            var $child = $('.main-nav .child');

            $parent.removeClass('childOpen');
            $child.removeClass('isOpen');

        });

        //Formulaire&
        //placeholder
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
    }
    window.addEventListener('deviceorientation', testGyro);

});