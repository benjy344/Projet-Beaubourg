/********************
*
*   Chapitre 2
*
*********************/
function loadLevel2() {
    showpop2C = "Showpopup(content['jeu2c'], 'hidePopup()', '')";
    showpop2B = "Showpopup(content['jeu2b'], showpop2C, '')";
    //Showpopup(content['jeu2a'], showpop2B, '');
    //    $('main').load(level+'Level2.html', function(){
    var $popinSlider = new Popin({
        isSlider: true,
        type: 'encyclo',
        content: content['jeu2']
    });
    $('main').loadLevel('level2', function() {

        var pixel = $('.pixel');
        pixel.on('touch click', showModal) //{DEV}

        //CodeMirror
        var textArea = $('.codeMirror')[0],
            codeConfig = {
                mode: "text/javascript",
                theme: "icecoder", 
                lineWrapping: true, 
                lineNumbers: true, 
                autofocus: false
                //matchBrackets: true
            }
        //Initialisation des variables
        var defaultValue = false;

        codeConfig.readOnly = 'nocursor';
        var tips2 = {
            0 : content['jeu2astuce1'],
            1 : content['jeu2astuce2'],
            2 : content['jeu2astuce3']
        }
        constructTips(42000, 3, tips2); //{DEV} 
       



        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);
        //cm.addKeyMap(map: object, bottom: boolean) || extraKeys: Dans la config du CM
        codeMirror.addKeyMap({
            Enter: function (cm) {
                enterKeyMap();
            }
        });
        $('.CodeMirror.CodeMirror-wrap').addClass('only-color');

        $('#frameWrapper').children().each(function () {
            $(this).data('rvb', {
                red: defaultValue,
                green: defaultValue,
                blue: defaultValue
            }).data('name', 'pixel_'+$(this).index());
        });

        //Change Active Pixel
        $('#frameWrapper .pixel').click(function () {
            $('.pixelActive').removeClass('pixelActive');
            $(this).addClass('pixelActive');
            var thisColors = $(this).data('rvb');
            resetCheckboxes(thisColors.red, thisColors.green, thisColors.blue);
            resetCodePixel($('.pixelActive').data('name'), thisColors.red, thisColors.green, thisColors.blue);
        })

        //Run Code
        $('.runCode').click(function () {
            runCodeLevel2();
        });

        //Change input
        $('.checkboxes input:checkbox').change(function () {
            var name = $(this).attr('class');
            var thisPixel = $('.pixelActive').data('rvb');
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
            resetCodePixel($('.pixelActive').data('name'), thisPixel.red, thisPixel.green, thisPixel.blue);
            colorPixelRVB();
            //verifPixelLevel2();
        })
    })
}

function runCodeLevel2() {
    var code = codeMirror.getValue();

    try {
        eval(code)

        pixel = eval($('.pixelActive').data('name'));
        //console.log(pixel)                    
        $('.pixelActive').data('rvb', {
            red: pixel.red, 
            green: pixel.green, 
            blue: pixel.blue
        });
        resetCheckboxes(pixel.red, pixel.green, pixel.blue);
        resetCodePixel($('.pixelActive').data('name'), pixel.red, pixel.green, pixel.blue);
        colorPixelRVB();
        //verifPixelLevel2();
    } catch(e) {
        var resetPixel = $('.pixelActive').data('rvb');

        resetCodePixel($('.pixelActive').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);
    }
}



/********************
*
*   Fonctions du Chapitre 2
*
*********************/

function submitLevel2() {
    var numCorrect = 0;
    var pixels = $('.pixel');

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
            content: content['error']
        });
    }

}