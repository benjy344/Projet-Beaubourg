/********************
*
*   Chapitre 2
*
*********************/
function loadLevel2() {
    getATip("", "", "", "", true);
    countLevel = 2;
    if (!level2IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['jeu2'],
            $close: $('.js-close-popup-encyclo')
        });
    }
    var tips2 = {
            0 : content['jeu2astuce1'],
            1 : content['jeu2astuce2'],
            2 : content['jeu2astuce3']
        }
        constructTips(42000, 3, tips2); //{DEV} 
    level2IsVisited = true;
    $('main').loadLevel('level2', function() {
        var pixel = $('.js-pixel');
        pixel.on('touch click', showModal) //{DEV}

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

        //Change Active Pixel
        $('.js-framewrapper .js-pixel').click(function () {
            $('.pixel-active').removeClass('pixel-active');
            $(this).addClass('pixel-active');
            var thisColors = $(this).data('rvb');
            resetCheckboxes(thisColors.red, thisColors.green, thisColors.blue);
            resetCodePixel($('.pixel-active').data('name'), thisColors.red, thisColors.green, thisColors.blue);
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

function afterLoadLevel2() {
    console.log('coucou')

        
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
    var numCorrect = 0;
    var pixels = $('.js-pixel');

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
        var $popinError = new Popin({
            content: content['jeu2d'],
            callback: 'loadLevel3()',
            type: 'succes',
            icon: 'succes2'
        });
    } else {
       var $popinError = new Popin({
            content: content['erreur']
        });
    }

}