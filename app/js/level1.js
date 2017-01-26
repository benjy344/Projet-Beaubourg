/********************
*
*   Chapitre 1
*
*********************/
function loadLevel1() {
    $('main').addClass('flex');
    $('.js-hamburger').show();
    countLevel = 1;
    if (!level1IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['jeu1']
        });
    }
    
    level1IsVisited = true;
    alenumber = "";
    $('main').loadLevel('level1', function(){
        //generation du nombre aléatoir a 24 chiffres + creation d'une chaine binaire
        var heightNumber =  16;
        var min = Math.ceil(0);
        var max = Math.floor(9);
        tipsLevel1 = {
            0 : content['jeu1astuce1'],
            1 : content['jeu1astuce2'],
            2 : content['jeu1astuce3']
           }
        //var tips1 = []
        Tip1 = new Tip({
            'tips' : tipsLevel1,
            'duration' : 4000,
            'level': 1
        })
        //constructTips(4000, 3, tips1);
        for (var i = 0; i < heightNumber; i++){
            var alea = Math.floor(Math.random() * (max - min +1)) + min;
            if (alea % 2 == 0) {
                binaire = binaire+'0';
            }
            else { binaire = binaire+'1'; }
            //console.log( i % 4 )
            if (i != 0) {
                if (i % 4 === 0) { alenumber += '</span><span class="numbercase">'+alea+'';} else {alenumber += ''+alea+'';}
            } else {
                alenumber += '<span class="numbercase">'+alea+'';
            }
            
            
        }

        alenumber += '</span>';
        $('.js-alenumber').html(alenumber);
        
        var div = $('.tableau ul li div');

        div.on('touch click', function(e) {
            $(this).toggleClass('black');
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
        if($( this ).hasClass( "black" )){
            chaineTableau = chaineTableau + '0';
        }
        else{
            chaineTableau = chaineTableau + '1';
        }
    });
    if (chaineTableau == binaire || testing) { //{TEST} Always True

        var $popinError = new Popin({
            content: content['jeu1d'],
            callback: 'loadLevel2()',
            type: 'succes',
            icon: 'succes1'
        });
        Tip1.destroy('Tip1');
        //Showpopup(content['jeu1d'], 'loadLevel2()', 'succes1', true);

    }else{var $popinError = new Popin({
        content: content['erreur'],
    });}
}

