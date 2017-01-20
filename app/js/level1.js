/********************
*
*   Chapitre 1
*
*********************/
function loadLevel1() {
    $('main').addClass('flex');
    $('.hamburger').show();
    countLevel = 1;
    if (!level1IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['jeu1'],
            $close: $('.js-close-popupEncyclo')
        });
    }
    
    level1IsVisited = true;
    aleNumber = "";
    $('main').loadLevel('level1', function(){

        //generation du nombre aléatoir a 24 chiffres + creation d'une chaine binaire
        var heightNumber =  16;
        var min = Math.ceil(0);
        var max = Math.floor(9);
        var tips1 = {
            0 : content['jeu1astuce1dev'],
            1 : content['jeu1astuce2dev'],
            2 : content['jeu1astuce3dev']
           }
        constructTips(4000, 3, tips1);
        for (var i = 0; i < heightNumber; i++){
            var alea = Math.floor(Math.random() * (max - min +1)) + min;
            if (alea % 2 == 0) {
                binaire = binaire+'0';
            }
            else { binaire = binaire+'1'; }
            //console.log( i % 4 )
            if (i != 0) {
                if (i % 4 === 0) { aleNumber += '</span><span class="numberCase">'+alea+'';} else {aleNumber += ''+alea+'';}
            } else {
                aleNumber += '<span class="numberCase">'+alea+'';
            }
            
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

        var $popinError = new Popin({
            content: content['jeu1d'],
            callback: 'loadLevel2()',
            type: 'succes',
            icon: 'succes1'
        });
        //Showpopup(content['jeu1d'], 'loadLevel2()', 'succes1', true);

    }else{var $popinError = new Popin({
        content: content['erreur'],
    });}
}

