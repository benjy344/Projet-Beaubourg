/********************
*
*   Chapitre 3
*
*********************/
function loadLevel3() {
    showpop3C = "Showpopup(content['jeu3c'], 'hidePopup()', '')";
    showpop3B = "Showpopup(content['jeu3b'], showpop3C, '')";
    Showpopup(content['jeu3a'], showpop3B, '');

    $('main').loadLevel('level3', function () {

        var pixel = $('.square');
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
        var defaultValue = 0;

        if (!devMod) {
            codeConfig.readOnly = 'nocursor';
            $('.dev').hide();  
        } else {
            $('.notdev').hide();
        }

        //thisLvlAnswers = answers.lvl3;
        //console.log(thisLvlAnswers)

        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);
        codeMirror.addKeyMap({
            Enter: function (cm) {
                enterKeyMap();
            }
        });


        $('#frameWrapper').children().each(function(){            
            $(this).data('rvb', {red: defaultValue, green: defaultValue, blue: defaultValue}).data('name', $(this).attr('data-name'));
        });

        //Change Active Pixel
        pixel.click(function() {
            $('.pixelActive').removeClass('pixelActive');
            $(this).addClass('pixelActive');
            var thisColors = $(this).data('rvb');
            if ($('.pixelActive').length != 0) {
                resetSliders(thisColors.red, thisColors.green, thisColors.blue);
                resetCodePixel($('.pixelActive').data('name'), thisColors.red, thisColors.green, thisColors.blue);

                if (!devMod) {$('.notdev').show();}
            } else {
                if (!devMod) {$('.notdev').hide();}
            }
        })

        //Run Code
        $('.runCode').click(function(){
            runCodeLevel3();
        });



        //Change input
        $('input[type=range]').on("input", function(){

            var name = $(this).attr('class');
            var thisPixel = $('.pixelActive').data('rvb');

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
            resetCodePixel($('.pixelActive').data('name'), thisPixel.red, thisPixel.green, thisPixel.blue);
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

        var pixelBorder = eval($('.pixelActive').data('name'));

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

        $('.pixelActive').data('rvb', {red: pixelBorder.red, green: pixelBorder.green, blue: pixelBorder.blue});

        resetSliders(pixelBorder.red, pixelBorder.green, pixelBorder.blue);

        resetCodePixel($('.pixelActive').data('name'), pixelBorder.red, pixelBorder.green, pixelBorder.blue);
        colorPixel();
        
    } catch(e) {
        alert ('pls input only nu')

        var resetPixel = $('.pixelActive').data('rvb');

        resetCodePixel($('.pixelActive').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);
    }
}


/********************
*
*   Fonctions du Chapitre 3
*
*********************/

function submitLevel3() {

    var numCorrect = 0;
    var which = 'left';
    var squares = $('.square');

    var i = 0;

    while (i < squares.length-1) {
        //console.log(i);
        var rvb = $(squares[i]).data('rvb');
        var pixelName = $(squares[i]).data('name'),
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
            numCorrect++;
            i++;
        } else {
            if (which == 'left') {
                numCorrect = 0;
                i = 0;
                which = 'right';
                console.log('should reset i')
            } else {
                break;
            }
        }
        //console.log(i);
    }

    if (numCorrect == squares.length || testing) { //{TEST}
        //console.log('WIN');
        Showpopup('Bravo !', 'loadLevel4()', 'succes');
    } else {
        //console.log('T\'es nul');
        Showpopup('Mmmmh, il semble y avoir une erreur', 'hidePopup()', 'error');
    }

}