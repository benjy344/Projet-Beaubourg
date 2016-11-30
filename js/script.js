var Username = ""
, devMod = false
, aleNumber = ''
, binaire = ''
, codeMirror = null
, answers = ''
, thisLvlAnswers = {}
$.getJSON('./js/answers.json', function (data) {
    answers = data;
});
$Popup = $('.popup');
$content_popup = $('.popup .content-popup');
$button = $('.js-fleche-popup');
$hoverlay = $('.hoverlay');
$popup_icon = $('.popup-icon i');


$(document).ready(function () {
    $('.hamburger').hide();
    $('.hamburger, #overlay').on('touch click', function () {
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
    $.support.placeholder = (function () {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();
    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
        $('.form-label').each(function () {
            $(this).addClass('js-hide-label');
        });
        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {
            // Cache our selectors
            var $this = $(this)
            , $parent = $this.parent().find("label");
            if (e.type == 'keyup') {
                if ($this.val() == '') {
                    $parent.addClass('js-hide-label');
                }
                else {
                    $parent.removeClass('js-hide-label');
                }
            }
            else if (e.type == 'blur') {
                if ($this.val() == '') {
                    $parent.addClass('js-hide-label');
                }
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            }
            else if (e.type == 'focus') {
                if ($this.val() !== '') {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        }).off();
    }
});


/********************

Chargement des levels et menu

*******************/
function loadChooseDevMod() {
    Username = $('input#name').val();
    $('main').load('./views/chooseDevMod.html', function () {
        $('input').on('touch click', function (e) {
            isdebMod = $('input#input1:checked').val();
            if (isdebMod == 'on') {
                devMod = false;
            }
            else {
                devMod = true;
            }
            $(this).off();
        });
    });
}

function loadChooseLevel() {
    $('main').load('./accueil.html');
}
//==================== LEVEL 1 ==================== \\
function loadLvl1(devMod) {
    $('.hamburger').show();
    if (devMod) {
        $('main').load('./views/levels/level1.html', function () {
            //generation du nombre aléatoir a 24 chiffres + creation d'une chaine binaire
            var heightNumber = 24;
            var min = Math.ceil(0);
            var max = Math.floor(9);
            for (var i = 0; i < heightNumber; i++) {
                var alea = Math.floor(Math.random() * (max - min + 1)) + min;
                if (alea % 2 == 0) {
                    binaire = binaire + '0';
                }
                else {
                    binaire = binaire + '1';
                }
                aleNumber = aleNumber + '' + alea + ''
            }
            $('.aleNumber').html(aleNumber);
            //generation des cases du tableau
            for (var i = 0; i < 5; i++) {
                $('.tableau ul:first-child').clone().appendTo(".tableau");
            }
            var div = $('.tableau ul li div');
            div.on('touch click', function (e) {
                $(this).toggleClass('white');
            }).off();
        });
    }
    else {
        $('main').load('./views/levels/level1.html', function () {
            //generation du nombre aléatoir a 12 chiffres
            var heightNumber = 12;
            min = Math.ceil(0);
            max = Math.floor(9);
            for (var i = 0; i < heightNumber; i++) {
                var alea = Math.floor(Math.random() * (max - min + 1)) + min;
                if (alea % 2 == 0) {
                    binaire = binaire + '0';
                }
                else {
                    binaire = binaire + '1';
                }
                aleNumber = aleNumber + '' + alea + ''
            }
            $('.aleNumber').html(aleNumber);
            //generation des cases du tableau
            for (var i = 0; i < 2; i++) {
                $('.tableau ul:first-child').clone().appendTo(".tableau");
            }
            var div = $('.tableau ul li div');
            div.on('touch click', function (e) {
                $(this).toggleClass('white');
            });
        }).off();
    }
}

function submitLvl1() {
    var chaineTableau = '';
    var div = $('.tableau ul li div');
    $(div).each(function () {
        if ($(this).hasClass("white")) {
            chaineTableau = chaineTableau + '1';
        }
        else {
            chaineTableau = chaineTableau + '0';
        }
    });
    if (chaineTableau == binaire || chaineTableau != binaire) {
        Showpopup('Bravo !', 'loadLvl2()', 'succes');
    }
    else {
        Showpopup('Mmmmh, il semble y avoir une erreur', 'hidePopup()', 'error');
    }
}
//==================== LEVEL 2 ==================== \\
function loadLvl2() {

    reinitMain();

    $('main').load('./views/levels/level2.html', function () {
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
        //console.log(devMod)

        if (!devMod) {
            codeConfig.readOnly = 'nocursor';
            $('.dev').hide();  
        } 
        $('.notdev').hide();

        //console.log(codeConfig.readOnly)

        thisLvlAnswers = answers.lvl2;
        console.log(thisLvlAnswers);

        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);
        //cm.addKeyMap(map: object, bottom: boolean) || extraKeys: Dans la config du CM
        codeMirror.addKeyMap({
            Enter: function (cm) {
                setSelection('atom');
            }
        });

        $('#frameWrapper').children().each(function () {
            $(this).data('rvb', {
                red: defaultValue,
                green: defaultValue,
                blue: defaultValue
            }).data('name', 'pixel_'+$(this).index());
        });

        //Change Active Pixel
        $('#frameWrapper .pixel').click(function () {
            if (!$(this).hasClass('pixelActive')) {
                $('.pixelActive').removeClass('pixelActive');
            }
            $(this).toggleClass('pixelActive');
            var thisColors = $(this).data('rvb');
            if ($('.pixelActive').length != 0) {
                resetCheckboxes(thisColors.red, thisColors.green, thisColors.blue);
                resetCode($('.pixelActive').data('name'), thisColors.red, thisColors.green, thisColors.blue);

                if (!devMod) {$('.notdev').show();}
            } else {
                if (!devMod) {$('.notdev').hide();}
            }
        })

        //Run Code
        $('.runCode').click(function () {
            runCode();
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
            applyColor(thisPixel);
        })

        //On focus, reset the cursor to the start and set selection
        codeMirror.on('focus', function () {
            myCodeMirror.setCursor({line:0,ch:0});
            setSelection('atom');
        })

    })

}

function submitLvl2() {
    //Validate
    
    console.log('submitting')
    
    var isCorrect = true;
    $.each(thisLvlAnswers, function(i, value){
        if (!value.validate) {
            isCorrect = false;
        }
    })

    if (isCorrect) {
        Showpopup('Bravo !', 'loadLvl3()', 'succes');
    } else {
        Showpopup('Mmmmh, il semble y avoir une erreur', 'hidePopup()', 'error');
    }
}

//==================== LEVEL 3 ==================== \\
function loadLvl3() {
    reinitMain();

    $('main').load('./views/levels/level3.html', function () {
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

        if (!devMode) {
            codeConfig.readOnly = 'nocursor';
            $('.dev').hide(); 
        }
        $('.notdev').hide();

        thisLvlAnswers = answers.lvl3;

        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);
        codeMirror.addKeyMap({
            Enter: function (cm) {
                setSelection('number');
            }
        });


        $('#frameWrapper').children().each(function(){            
            $(this).data('rvb', {red: defaultValue, green: defaultValue, blue: defaultValue});
        });

        //Change Active Pixel
        $('#frameWrapper .pixel').click(function() {
            if (!$(this).hasClass('pixelActive')) {
                $('.pixelActive').removeClass('pixelActive');
            }
            $(this).toggleClass('pixelActive');
            var thisColors = $(this).data('rvb');
            if ($('.pixelActive').length != 0) {
                resetSliders(thisColors.red, thisColors.green, thisColors.blue);
                resetCode($('.pixelActive').data('name'), thisColors.red, thisColors.green, thisColors.blue);

                if (!devMod) {$('.notdev').show();}
            } else {
                if (!devMod) {$('.notdev').hide();}
            }
        })

        //Run Code
        $('.runCode').click(function(){
            runCode();
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



            thisColors[name] = $(this).val();
            applyColor(thisPixel);
        })

        $('input[type=range]').on("change", function(){
            verifPixel();

        })

        //On focus, reset the cursor to the start and set selection
        myCodeMirror.on('focus', function(){
            myCodeMirror.setCursor({line:0,ch:0});
            setSelection('number');
        });
    });
}

function submitLvl3() {
    //Validate
    var isCorrect = true;
    $.each(answers, function(i, value){
        if (!value.validate) {
            isCorrect = false;
        }
    })

    if (isCorrect) {
        console.log('WIN')
    } else {
        console.log('T\'es nul');
    }
}
//==================== LEVEL 4 ==================== \\
function loadLvl4() {}
//==================== LEVEL 5 ==================== \\
function loadLvl5() {}
/********************
 *
 *   Popup
 *
 *********************/
function Showpopup(content, loadfonction, icon) {
    if ($Popup) {
        $content_popup.html('' + content + '');
        $button.attr("onclick", '' + loadfonction + '');
        if (icon) $popup_icon.attr('class', 'icon icon-' + icon + '');
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

function reinitMain() {
    hidePopup();
}


/********************
 *
 *   Lvl 2 & 3
 *
 *********************/
function setSelection(varType) {
    var setPos = true,
        cm = codeMirror,
        currentPos = cm.getCursor(),
        line = currentPos.line,
        tokens,
        i; //Indice du token en cours

    //Commencer la recherche en début de ligne suivante si le curseur est en fin de ligne
    if (currentPos.ch == cm.getLine(line).length) {
        line++;
        currentPos.ch = 0;
    }
    tokens = cm.getLineTokens(line);
    i = 0; 
    //Commencer la recherche après la position actuelle du curseur
    while (tokens[i].end <= currentPos.ch) {
        i++;
    }
    //Commencer la recherche au token suivant si le token en cours est du bon type
    if (tokens[i].type == varType) {
        i++;
    }
    //Commencer la recherche a la ligne suivante si il n'y a plus de tokens sur la ligne
    if (typeof tokens[i] == 'undefined') {
        i = 0;
        line++
        tokens = cm.getLineTokens(line)
    }

    //Début de la recherche
    //Tant que le token en cours n'est pas du bon type, on analyse le token suivant
    while (tokens[i].type != varType) {
        i++
        //Continuer la recherche a la ligne suivante si il n'y a plus de tokens sur la ligne
        if (typeof tokens[i] == 'undefined') {
            i = 0;
            line++
            tokens = cm.getLineTokens(line)
        }
        //Il n'y a plus de tokens dans l'editeur. On arrete la boucle et !setPos pour ne pas effectuer les prochaines instructions
        if (line > codeMirror.lineCount()) {
            setPos = false;
            //console.log('should run code')
            break;
        }
    }
    //console.log('oui')
    //Si on a trouvé un prochain token, le selectionne
    if (setPos) {
        cm.setSelection({
            line: line,
            ch: tokens[i].start
        }, {
            line: line,
            ch: tokens[i].end
        });
    } else {//Si on a pas trouvé de token, on vérifie qu'il y ait bien 3 tokens du bon type
        console.log('runcode')
        if ($('.cm-atom').length != 3) {
            alertErr();
            //console.log('nope')
        } else { //Si oui, unfocus l'editeur et lance le code
            runCode();
            codeMirror.getInputField().blur();
        }
    }
    //console.log(tokens[i])
}

function alertErr() {
    var pixel = $('.pixelActive').data('rvb');
    resetCode($('.pixelActive').data('name'), pixel.red, pixel.green, pixel.blue)
    codeMirror.getInputField().blur();
    //codeMirror.focus();
    alert('ERROR');
}

function runCode() {
    console.log('running code')
    var code = codeMirror.getValue();
    eval(code)
    pixel = eval($('.pixelActive').data('name'));
    //console.log(pixel)                    
    $('.pixelActive').data('rvb', {
        red: pixel.red
        , green: pixel.green
        , blue: pixel.blue
    });
    resetCheckboxes(pixel.red, pixel.green, pixel.blue);
    applyColor(pixel);
}

function applyColor(pixel) {
    resetCode($('.pixelActive').data('name'), pixel.red, pixel.green, pixel.blue);
    colorPixelRVB(pixel);
    verifPixel();
}



function colorPixelRVB(pixel) {
    //console.log(pixel)
    var red = 0,
        green = 0,
        blue = 0;
    if (pixel.red) {
        red = 255;
    }
    if (pixel.green) {
        green = 255;
    }
    if (pixel.blue) {
        blue = 255;
    }
    $('.pixelActive').css('background-color', 'rgb(' + red + ', ' + green + ', ' + blue + ')');
}

function colorPixel(pixel) {
    $('.pixelActive').css('background-color', 'rgb(' + pixel.red + ', ' + pixel.green + ', ' + pixel.blue + ')');
}

function resetCode(id, r, g, b) {
    codeMirror.setValue('var ' + id + ' = {\n\tred : ' + r + ',\n\tgreen : ' + g + ',\n\tblue : ' + b + '\n}');
    codeMirror.markText({line: 0, ch: 0}, {line: 1, ch: 7}, {readOnly: true});
    codeMirror.markText({line: 2, ch: 0}, {line: 2, ch: 9}, {readOnly: true});
    codeMirror.markText({line: 3, ch: 0}, {line: 3, ch: 8}, {readOnly: true});
    codeMirror.markText({line: 4, ch: 0}, {line: 5, ch: 0}, {readOnly: true});
}

function resetCheckboxes(r, g, b) {
    var valR, valG, valB;
    if (r) {valR = 255} else {valR = 0}
    if (g) {valG = 255} else {valG = 0}
    if (b) {valB = 255} else {valB = 0}
    $('input.red').prop('checked', r).parent().css('background-color', 'rgb(' + valR + ', 0, 0)')
    $('input.green').prop('checked', g).parent().css('background-color', 'rgb(0, ' + valG + ', 0)')
    $('input.blue').prop('checked', b).parent().css('background-color', 'rgb(0, 0, ' + valB + ')')
}

function verifPixel() {
    var rvb = $('.pixelActive').data('rvb');
    var correctRvb = thisLvlAnswers[$('.pixelActive').data('name')].rvb;
    //console.log(rvb)
    //console.log(answers[$('.pixelActive').index()]);


    if (JSON.stringify(rvb) == JSON.stringify(correctRvb)) {
        console.log('yep')
        thisLvlAnswers[$('.pixelActive').data('name')].validate = true;
    } else {
        console.log('nope')
        thisLvlAnswers[$('.pixelActive').data('name')].validate = false;
    }
}

function resetLvl2() {
    $('.pixel').off()
    $('.runCode').off()
    $('input:checkbox').off() //cm.getWrapperElement().parentNode.removeChild(cm.getWrapperElement());
    //cm=null;
}