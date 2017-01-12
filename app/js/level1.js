/********************
*
*   Chapitre 1
*
*********************/
function loadLevel1() {
    $('.hamburger').show();
    showpop1C = "Showpopup(content['jeu1c'], 'hidePopup()', '')";
    showpop1B = "Showpopup(content['jeu1b'], showpop1C, '')";
    Showpopup(content['jeu1a'], showpop1B, '', "Présention de l\'oeuvre 1", false);
    aleNumber = 0;
    $('main').loadLevel('level1', function(){

        if (devMod){


            //generation du nombre aléatoir a 24 chiffres + creation d'une chaine binaire
            var heightNumber =  16;
            var min = Math.ceil(0);
            var max = Math.floor(9);
            var tips1 = {
                0 : content['jeu1astuce1dev'],
                1 : content['jeu1astuce2dev'],
                2 : content['jeu1astuce3dev']
            }
            constructTips(42000, 3, tips1);
            for (var i = 0; i < heightNumber; i++){
                var alea = Math.floor(Math.random() * (max - min +1)) + min;
                if (alea % 2 == 0) {
                    binaire = binaire+'0';
                }
                else { binaire = binaire+'1'; }
                aleNumber += ''+alea+'';
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
        } else {


            //generation du nombre aléatoir a 12 chiffres
            var heightNumber =  12;
            min = Math.ceil(0);
            max = Math.floor(9);
            var tips1D = {
                0 : content['jeu1astuce1'],
                1 : content['jeu1astuce2'],
                2 : content['jeu1astuce3']
            }
            constructTips(42000, 3, tips1D); //{DEV}
            for (var i = 0; i < heightNumber; i++){
                var alea = Math.floor(Math.random() * (max - min +1)) + min;
                if (alea % 2 == 0) {
                    binaire = binaire+'0';
                }
                else { binaire = binaire+'1'; }
                aleNumber += ''+alea+'';
            }
            $('.aleNumber').html(aleNumber);
            $('.tableau ul').addClass('width-3');
            //generation des cases du tableau
            for (var i = 0; i < 2; i++){
                $('.tableau ul:first-child').clone().appendTo( ".tableau" );
            }
            var div = $('.tableau ul li div');


            div.on('touch click', function(e) {
                $(this).toggleClass('white');
            });
        }

    });
}


/********************
*
*   Fonctions du Chapitre 1
*
*********************/
function submitLevel1() {
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
    if (chaineTableau == binaire || testing) { //{TEST} Always True

        Showpopup(content['jeu1d'], 'loadLevel2()', 'succes1', true);

    }else{Showpopup('Mmmmh, il semble y avoir une erreur...', 'hidePopup()', 'error');}
}

