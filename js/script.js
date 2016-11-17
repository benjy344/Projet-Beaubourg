var Username = "";
var devMod = false;
var aleNumber = '';
var binaire = '';

$Popup = $('.popup');
$content_popup = $('.popup .content-popup');
$button = $('.js-fleche-popup');
$hoverlay = $('.hoverlay');
$popup_icon = $('.popup-icon i');
/********************

Chargement des levels et menu

*******************/
function loadChooseDevMod(){
    Username = $('input#name').val();
    $('main').load('./chooseDevMod.html', function(){

        $('#input1, #input2').on('touch click', function(e) {
            isdebMod = $('input#input1:checked').val();
            if (isdebMod == 'on') {

                devMod = false;
            }
            else {devMod = true;} 
        }); 
    });
    $('#input1, #input2').off();
}

function loadChooseLevel(){
    $('main').load('./accueil.html');
}

function loadlevel1(devMod) {
    $('.hamburger').show();
    if (devMod){
        $('main').load('./level1.html', function(){
            
            //generation du nombre aléatoir a 24 chiffres + creation d'une chaine binaire
            var heightNumber =  16;
            var min = Math.ceil(0);
            var max = Math.floor(9);
   
            for (var i = 0; i < heightNumber; i++){
                var alea = Math.floor(Math.random() * (max - min +1)) + min;
                if (alea % 2 == 0) {
                    binaire = binaire+'0';
                }
                else { binaire = binaire+'1'; }
                aleNumber = aleNumber+''+alea+''
            }
            $('.aleNumber').html(aleNumber);
            //generation des cases du tableau
            for (var i = 0; i < 3; i++){
                 $('.tableau ul:first-child').clone().appendTo( ".tableau" );
            }
               

            var div = $('.tableau ul li div');

            div.on('touch click', function(e) {
                $(this).toggleClass('white');
            });
        });
    }
    else {
        $('main').load('./level1.html', function(){
            //generation du nombre aléatoir a 12 chiffres
            var heightNumber =  12;
            min = Math.ceil(0);
            max = Math.floor(9);
   
            for (var i = 0; i < heightNumber; i++){
                var alea = Math.floor(Math.random() * (max - min +1)) + min;
                if (alea % 2 == 0) {
                    binaire = binaire+'0';
                }
                else { binaire = binaire+'1'; }
                aleNumber = aleNumber+''+alea+''
            }
            $('.aleNumber').html(aleNumber);
            //generation des cases du tableau
            for (var i = 0; i < 2; i++){
                 $('.tableau ul:first-child').clone().appendTo( ".tableau" );
            }
            var div = $('.tableau ul li div');
            

            div.on('touch click', function(e) {
                $(this).toggleClass('white');
            });
        });
    }    
}
function validChap1() {
    var chaineTableau = '';
    var div = $('.tableau ul li div');

    $(div).each(function() {
        if($( this ).hasClass( "white" )){
            chaineTableau = chaineTableau + '1';
        }
        else{
            chaineTableau = chaineTableau + '0';
        }
    });
    if (chaineTableau == binaire ) {
        Showpopup('Bravo !', 'loadlevel2()', 'succes iconAnim');
    }else{Showpopup('Mmmmh, il semble y avoir une erreur...', 'hidePopup()', 'error');}
}


function loadlevel2() {
    hidePopup();
    
}

function loadlevel3() {
    hidePopup();
}

function loadlevel4() {
    hidePopup();
}

function loadlevel5() {
    hidePopup();
}


/********************
*
*   Popup
*
*********************/
function Showpopup(content, loadfonction, icon){
    if ($Popup) {
        $content_popup.html(''+content+'');
        $button.attr("onclick", ''+loadfonction+'');
        if(icon) $popup_icon.attr('class', 'icon icon-'+icon+'');
        $Popup.removeClass('hide');
        $hoverlay.removeClass('hide');
    };
}
function hidePopup() {
    $content_popup.html('');
    $button.attr("onclick", '');
    $popup_icon.attr('class', '');
    $Popup.addClass('hide');
    $hoverlay.addClass('hide');
}



$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

$(document).ready(function() {
    $('.hamburger').hide();
    
    $('.hamburger, #overlay').on('touch click', function() {
            $('.hamburger').toggleClass('is-active');
            $('#overlay').toggleClass('open');
        });

    $('.loading').slideUp(1000);

    $("#name").on('keyup', function (e) {
        if (e.keyCode == 13) {
            loadChooseDevMod();
        }
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
            
            // Cache our selectors
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
        }).off();
    } 
});