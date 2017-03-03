/********************
*
*   Chapitre 2
*
*********************/
function portalLevel2() {
    if (isFr) {
        var $portalLevel2 = new Portal({
            title: 'La Couleur',
            notion: 'Retrouvez les couleurs perdues du tableau !',
            callback: 'loadLevel2()'
        });
    } else {
        var $portalLevel2 = new Portal({
            title: 'The Color',
            notion: 'Find the lost colors of the painting',
            callback: 'loadLevel2()'
        });
    }
    arrayCookieUser.currentLevel = 2;
    createCookie(Username, arrayCookieUser, 20);
    isNewTip = false;
}

function loadLevel2() {
    startTime = Date.now();
    if (!ecrin) {initEcrin()}
    $('.help-button').removeClass("first-tip");
    countLevel = 2;
    if (!level2IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['encyclo1jeu2']
        });
        addHelp(helpTitle(1, 1), content['jeu1astuce1']);
        addHelp(helpTitle(1, 2), content['jeu1astuce2']);
        addHelp(helpTitle(1, 3), content['jeu1astuce3']);   

        tipsLevel2 = {
            0 : content['jeu2astuce1'],
            1 : content['jeu2astuce2'],
            2 : content['jeu2astuce3']
        }
        Tip2 = new Tip({
            'tips' : tipsLevel2,
            'duration' : 4000,
            'level': 2
        }) 
    }


    level2IsVisited = true;
    arrayCookieUser.level2IsVisited = true;
    createCookie(Username, arrayCookieUser, 20);
    $('main').loadLevel('level2', function() {
       var titleExplain = isFr ? 'Les Variables' : 'Variables';
        var info = new Popin({
            type: 'info',
            title: titleExplain,
            content: content['variable'],
            isSlider: true, 
            $popin: $('.js-popup-info'),
            $open: $('.js-icon-info')
        })

        //CodeMirror
        textArea = $('.js-code-mirror')[0];
        codeConfig = {
            mode: "text/javascript",
            theme: "icecoder", 
            lineWrapping: true, 
            lineNumbers: true, 
            autofocus: false
            //matchBrackets: true
        };
        //Initialisation des variables
        var defaultValue = false;

        codeConfig.readOnly = 'nocursor';
        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);
        //cm.addKeyMap(map: object, bottom: boolean) || extraKeys: Dans la config du CM
        codeMirror.addKeyMap({
            Enter: function (cm) {
                enterKeyMap();
            }
        });
        $('.cm-s-icecoder').addClass('only-color');

        $('.js-framewrapper').children().each(function () {
            $(this).data('rvb', {
                red: defaultValue,
                green: defaultValue,
                blue: defaultValue
            }).data('name', 'pixel_'+$(this).index());
        });

        console.log('TEST');
        //Change Active Pixel
        $('.js-framewrapper .js-pixel').click(function () {
            console.log($(this));
            $('.pixel-active').removeClass('pixel-active');
            $(this).addClass('pixel-active');
            var thisColors = $(this).data('rvb');
            resetCheckboxes(thisColors.red, thisColors.green, thisColors.blue);
            resetCodePixel($('.pixel-active').data('name'), thisColors.red, thisColors.green, thisColors.blue);
            showModal();
        })

        //Run Code
        $('.js-run-code').click(function () {
            runCodeLevel2();
        });

        $('.js-apply-color').on('touch click', hideModal)

        //Change input
        $('.checkboxes input:checkbox').change(function () {
            var name = $(this).attr('class');
            var thisPixel = $('.pixel-active').data('rvb');
            var val;
            if ($(this).is(':checked')) {
                thisPixel[name] = true;
                val = 255;
            }
            else {
                thisPixel[name] = false;
                val = 0;
            }
            switch (name) {
                case 'red':
                    $(this).parent().css('background-color', 'rgb(' + val + ', 0, 0)');
                    break;
                case 'green':
                    $(this).parent().css('background-color', 'rgb(0, ' + val + ', 0)');
                    break;
                case 'blue':
                    $(this).parent().css('background-color', 'rgb(0, 0, ' + val + ')');
                    break;
                default:
                    break;
            }
            resetCodePixel($('.pixel-active').data('name'), thisPixel.red, thisPixel.green, thisPixel.blue);
            colorPixelRVB();
            //verifPixelLevel2();
        })
    })
}

function runCodeLevel2() {
    var code = codeMirror.getValue();

    try {
        eval(code)

        pixel = eval($('.pixel-active').data('name'));
        //console.log(pixel)                    
        $('.pixel-active').data('rvb', {
            red: pixel.red, 
            green: pixel.green, 
            blue: pixel.blue
        });
        resetCheckboxes(pixel.red, pixel.green, pixel.blue);
        resetCodePixel($('.pixel-active').data('name'), pixel.red, pixel.green, pixel.blue);
        colorPixelRVB();
        //verifPixelLevel2();
    } catch(e) {
        var resetPixel = $('.pixel-active').data('rvb');

        resetCodePixel($('.pixel-active').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);
    }
}



/********************
*
*   Fonctions du Chapitre 2
*
*********************/

function submitLevel2() {
    endTime = Date.now();
    var numCorrect = 0;
    var pixels = $('.js-pixel');
    var myTime = (endTime - startTime)/1000;

    for (i=0; i < pixels.length; i++) {
        var rvb = $(pixels[i]).data('rvb'),
            pixelName = $(pixels[i]).data('name'),
            correctRVB = thisLvlAnswers[pixelName].rvb;

        if (JSON.stringify(rvb) == JSON.stringify(correctRVB)) {
            numCorrect++;
        } else {
            break;
        }
    }

    if (numCorrect == pixels.length || testing) { //{}
        
        if (!level3IsVisited) {

            if (myTime <= 40) {
                var $popinError = new Popin({
                    content: content['jeu2d'],
                    type: 'succes',
                    callback: 'popinEndLevel2()',
                    icon: 'succes2'
                });
            } else {
                var $popinError = new Popin({
                    content: content['jeu2d'],
                    type: 'succes',
                    callback: 'portalLevel3()',
                    icon: 'succes2'
                });
            }

            if(Tip2){Tip2.destroy('Tip2')};
        } else {
            if (myTime <= 40) {
                popinEndLevel2();
            } else {
                portalLevel3();                
            }
        }
    } else {
        var $popinError = new Popin({
            content: content['erreur']
        });
    }

}
function popinEndLevel2 () {
    var exist = false;
    for (var i = 0; i < $tabSuccess.length; i++) {
        if ($tabSuccess[i] === 'succes6') {
            exist = true;
            break;
        }
    }
    if (!exist) {
        var $popinSuccessTime = new Popin({
                content: content['jeu2s'],
                type: 'succes',
                callback: 'portalLevel3()',
                icon: 'succes6'
            });
    }else {
        portalLevel3();
    }
}