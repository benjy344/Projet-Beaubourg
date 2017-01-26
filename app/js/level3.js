/********************
*
*   Chapitre 3
*
*********************/
function loadLevel3() {
    countLevel = 3;
    if (!level3IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['jeu3'],
            $close: $('.js-close-popup-encyclo')
        });
    }

    level3IsVisited = true;
    $('main').loadLevel('level3', function () {

        var pixel = $('.square');

        //CodeMirror
        textArea = $('.js-code-mirror')[0];
        codeConfig = {
                mode: "text/javascript",
                theme: "icecoder",
                lineWrapping: true,
                lineNumbers: true,
                autofocus: false
                //matchBrackets: true
            }
        //Initialisation des variables
        var defaultValue = 0;

        codeConfig.readOnly = 'nocursor';
        var tips3 = {
            0 : content['jeu3astuce1'],
            1 : content['jeu3astuce2'],
            2 : content['jeu3astuce3']
        }
        constructTips(42000, 3, tips3); 

        //thisLvlAnswers = answers.lvl3;
        //console.log(thisLvlAnswers)

        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);
        codeMirror.addKeyMap({
            Enter: function (cm) {
                enterKeyMap();
            }
        });
        $('.cm-s-icecoder').addClass('only-color');

        //Run Code
        $('.js-run-code').click(function(){
            runCodeLevel3();
        });
       

        //Change Active Pixel
        pixel.on('touch click', function() {
            if (!$(this).hasClass('.correct')) {
                $('.pixel-active').removeClass('pixel-active');
                $(this).addClass('pixel-active');
                var thisColors = $(this).data('rvb');
                console.log(thisColors)
                resetSliders(thisColors.red, thisColors.green, thisColors.blue);
                resetCodePixel($('.pixel-active').data('name'), thisColors.red, thisColors.green, thisColors.blue);
                showModal();
            }
        })

        $('.apply-color').on('touch click', hideModal)
        
        
        $('input[name="chooseFrameLvl3"]').on('change', function() {
            which = $('input[name="chooseFrameLvl3"]:checked').val();
            //console.log(which)
        })
        
       $('.js-close-popup-encyclo, .js-overlay').on('touch click', function() {
           
           $('input[name="chooseFrameLvl3"]').off();
           
           var varNames = [];
           $(content['jeu3variables_'+which]).map(function() {
               varNames.push($(this).text())
           })
           //console.log(varNames)
           
            $('.js-framewrapper').children().each(function(){            
            $(this).data('rvb', {red: defaultValue, green: defaultValue, blue: defaultValue}).data('name', varNames[$(this).index()]);
        });
       })

        //Change input
        $('input[type=range]').on("input", function(){

            var name = $(this).attr('class');
            var thisPixel = $('.pixel-active').data('rvb');

            switch(name) {
                case 'red':
                    $(this).parent().css('background-color', 'rgb('+$(this).val()+', 0, 0)');
                    break;
                case 'green': 
                    $(this).parent().css('background-color', 'rgb(0, '+$(this).val()+', 0)');
                    break;
                case 'blue':
                    $(this).parent().css('background-color', 'rgb(0, 0, '+$(this).val()+')');
                    break;
                default:
                    break;
            }

            thisPixel[name] = $(this).val();
            resetCodePixel($('.pixel-active').data('name'), thisPixel.red, thisPixel.green, thisPixel.blue);
            colorPixel();
        })

        $('input[type=range]').on("change", function(){
            //verifPixelLevel3();
        })
    });
}

function runCodeLevel3() {
    //console.log('running code')
    var code = codeMirror.getValue();

    try {
        eval(code)

        var pixelBorder = eval($('.pixel-active').data('name'));

        $.each(pixelBorder, function(i, value) {
            if (typeof value == 'number') {
                if (value < 0) {
                    pixelBorder[i] = 0;
                }
                if (value > 255) {
                    pixelBorder[i] = 255;
                }
            } else {
                pixelBorder[i] = 0
            }
        });

        $('.pixel-active').data('rvb', {red: pixelBorder.red, green: pixelBorder.green, blue: pixelBorder.blue});

        resetSliders(pixelBorder.red, pixelBorder.green, pixelBorder.blue);

        resetCodePixel($('.pixel-active').data('name'), pixelBorder.red, pixelBorder.green, pixelBorder.blue);
        colorPixel();

    } catch(e) {
        alert ('pls input only nu')

        var resetPixel = $('.pixel-active').data('rvb');

        resetCodePixel($('.pixel-active').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);
    }
}


/********************
*
*   Fonctions du Chapitre 3
*
*********************/

function submitLevel3() {
    
    
    
    $.each($('.square').not('correct'), function(i) {
        
        //console.log(i);
        var rvb = $(this).data('rvb'),
            pixelName = $(this).data('name'),
            correctRvb = thisLvlAnswers[which][pixelName],
            isCorrect = true;

        $.each(correctRvb, function(j, value){
            if (value.length > 1) { 
                if (rvb[j] < value[0] || rvb[j] > value[1]) { 
                    isCorrect = false; 
                }   
            } else { 
                if (rvb[j] != value[0]) { 
                    isCorrect = false; 
                } 
            }     
        }) 

        //console.log(isCorrect);
        if (isCorrect) {
           $(this).removeClass('incorrect')
           $(this).addClass('correct')
        } else {
           $(this).addClass('incorrect')
        }
        //console.log(i);
    });

    if ($('.correct').length == $('.square').length || testing) { //{TEST}
        var $popinError = new Popin({
            content: content['jeu3d'],
            callback: 'loadLevel4()',
            type: 'succes',
            icon: 'succes3'
        });
    } else {
        var $popinError = new Popin({
            content: content['erreur']
        });
    }

}
