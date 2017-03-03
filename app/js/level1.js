/********************
*
*   Chapitre 1
*
*********************/
function portalLevel1() {
    if (isFr) {
        var $portalLevel1 = new Portal({
            title: 'Le Pixel',
            notion: 'Chiffres pairs ou impairs ? À vous de retranscrire la chaîne de chiffre proposée',
            callback: 'loadLevel1()'
        });
    } else {
        var $portalLevel1 = new Portal({
            title: 'The Pixel',
            notion: 'Odd or even number ? It’s your turn to transcribe the given string of numbers.',
            callback: 'loadLevel1()'
        });
    }
    
    arrayCookieUser.currentLevel = 1;
    createCookie(Username, arrayCookieUser, 20);
}

function loadLevel1() {
    binaire = '';
    initEcrin();
    startTime = Date.now();
    countLevel = 1;
    if (!level1IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['encyclo1jeu1']
        });

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
    } else {
        if (arrayCookieUser.$countHelp <=3) {
            switch (arrayCookieUser.$countHelp) {
                case 0:
                tipsLevel1 = {
                    0 : content['jeu1astuce1'],
                    1 : content['jeu1astuce2'],
                    2 : content['jeu1astuce3']
                }
                break;
                case 1:
                tipsLevel1 = {
                    0 : content['jeu1astuce1'],
                    1 : content['jeu1astuce2'],
                    2 : content['jeu1astuce3']
                }
                break;
                case 2:
                tipsLevel1 = {
                    0 : content['jeu1astuce1'],
                    1 : content['jeu1astuce2'],
                    2 : content['jeu1astuce3']
                }
                break;
            }
            
            //var tips1 = []
            Tip1 = new Tip({
                'tips' : tipsLevel1,
                'duration' : 4000,
                'level': 1
            })
        }
    }
    
    level1IsVisited = true;
    arrayCookieUser.level1IsVisited = true;
    createCookie(Username, arrayCookieUser, 20);
    alenumber = "";
    $('main').loadLevel('level1', function(){
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
    console.log('submit lv1')
    endTime = Date.now();

    var myTime = (endTime - startTime)/1000;

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

        if (!level2IsVisited) {
            if (myTime <= 30) {
                var $popinError = new Popin({
                    content: content['jeu1d'],
                    type: 'succes',
                    callback: 'popinEndLevel1()',
                    icon: 'succes1'
                });
            } else {
                var $popinError = new Popin({
                    content: content['jeu1d'],
                    type: 'succes',
                    callback: 'portalLevel2()',
                    icon: 'succes1'
                });
            }

            if(Tip1){ Tip1.destroy('Tip1');}
        } else {
            if (myTime <= 30) { popinEndLevel1();} else { portalLevel2();}
        } 
        
        
    }else{var $popinError = new Popin({
        content: content['erreur'],
    });}
}
function popinEndLevel1 () {
    var exist = false;
    for (var i = 0; i < $tabSuccess.length; i++) {
        if ($tabSuccess[i] === 'succes5') {
            exist = true;
            break;
        }
    }
    if (!exist) {
        var $popinSuccessTime = new Popin({
            content: content['jeu1s'],
            type: 'succes',
            callback: 'portalLevel2()',
            icon: 'succes5'
        });
    }else {
        portalLevel2();
    }
    
}
