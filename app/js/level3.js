/**
* @file General functions used in level 3
* @author François-Xavier Bresson & Benjamin Demaizière
**/

/**
* @function portalLevel3
* @description
**/
function portalLevel3() {
    if (isFr) {
        var $portalLevel2 = new Portal({
            title: 'La Couleur Additive',
            notion: 'Reproduisez les teintes de l’un des dégradés de Morellet, soyez méticuleux !',
            callback: 'loadLevel3()'
        });
    } else {
        var $portalLevel2 = new Portal({
            title: 'The Additive Color Process',
            notion: 'Reproduce the shades of one of Morellet\'s gradations, be meticulous!',
            callback: 'loadLevel3()'
        });
    }
    arrayCookieUser.currentLevel = 3;
    createCookie(Username, arrayCookieUser, 20);
    isNewTip = false;
}

/**
* @function loadLevel3
* @description Load and initialize level 3
**/
function loadLevel3() {
    startTime = Date.now();
    if (!ecrin) {initEcrin()}
    $('.help-button').removeClass("first-tip");
    countLevel = 3;
    if (!level3IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['encyclo1jeu3']
        });
        addHelp(helpTitle(2, 1), content['jeu2astuce1']);
        addHelp(helpTitle(2, 2), content['jeu2astuce2']);
        addHelp(helpTitle(2, 3), content['jeu2astuce3']); 
        tipsLevel3 = {
            0 : content['jeu3astuce1'],
            1 : content['jeu3astuce2'],
            2 : content['jeu3astuce3']
        }
        Tip3 = new Tip({
            'tips' : tipsLevel3,
            'duration' : 4000,
            'level': 3
        })
    } else {
        var $popinSlider = new Popin({
            content: content['jeu3reloadpopin']
        });
    }
    var titleExplain = isFr ? 'Validation du niveau 3' : 'Level 3 validation',
        info = new Popin({
            type: 'info',
            title: titleExplain,
            content: content['lvl3explanation'],
            $popin: $('.js-popup-info'),
            $open: $('.js-icon-info')
        });
    level3IsVisited = true;
    arrayCookieUser.level3IsVisited = true;
    createCookie(Username, arrayCookieUser, 20);
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
        }
        //Initialisation des variables
        var defaultValue = 0;
        codeConfig.readOnly = 'nocursor';
        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);
        //        codeMirror.addKeyMap({
        //            Enter: function (cm) {
        //                enterKeyMap();
        //            }
        //        });
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
                //console.log(thisColors)
                resetSliders(thisColors.red, thisColors.green, thisColors.blue);
                disableSliders($(this).data('validated'));
                resetCodePixel($('.pixel-active').data('name'), thisColors.red, thisColors.green, thisColors.blue);
                showModal();
            }
        })

        //Verify pixel on 
        $('.apply-color').on('touch click', function(){
            $('.pixel-active').verifyPixel();
        })

        //Choose which part of the painting to reproduce
        $('#chooseFrameLvl3 input[type="radio"]').on('change', function() {
            which = $('#chooseFrameLvl3 input[type="radio"]:checked').attr('id');
        })
        $('.js-close-popup-encyclo, .js-overlay').on('touch click', function() {
            //console.log('initiating level')
            $('input[name="chooseFrameLvl3"]').off();
            var varNames = [];
            $(content['jeu3variables_'+which]).map(function() {
                varNames.push($(this).text())
            })
            //console.log(varNames)
            $('.js-framewrapper').children().each(function(){
                $(this).data('rvb', {red: defaultValue, green: defaultValue, blue: defaultValue}).data('name', varNames[$(this).index()]).data('validated', {red:false, green:false, blue:false});
            });

            if (isFr) {
                var side = which == left ? 'gauche' : 'droite';
                var colors = which == left ? 'bleus' : 'rouges';
                $('#level3 .consigne p').text('Reproduisez le dégradé allant du jaune au violet en passant par les '+colors+' ! (Partie '+side+' du tableau)'); 
            } else {
                var side = which == left ? 'Left' : 'Right';
                var colors = which == left ? 'blue' : 'red';
                $('#level3 .consigne p').text('Reproduce the '+colors+' gradient ! ('+side+' part of the painting)');
            }
        })

        //Change input
        $('input[type=range]').on("input", function(){
            var name = $(this).attr('class'),
                thisPixel = $('.pixel-active').data('rvb');
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
    });
}

/**
* @function submitLevel3
* @description Submit level 3 and verify anwsers 
**/
function submitLevel3() {
    endTime = Date.now();
    var myTime = (endTime - startTime)/1000;

    $.each($('.square').not('correct'), function(i) {
        $(this).removeClass('active-pixel');
        $(this).verifyPixel();
    });

    if ($('.correct').length == $('.square').length || testing) { //{TEST}
        if (!level4IsVisited) {
            if (myTime <= 120) { 
                var $popinError = new Popin({
                    content: content['jeu3d'],
                    type: 'succes',
                    callback: 'popinEndLevel3()',
                    icon: 'succes3'
                });
            } else {
                var $popinError = new Popin({
                    content: content['jeu3d'],
                    type: 'succes',
                    callback: 'portalLevel4()',
                    icon: 'succes3'
                });
            }
            if (Tip3) Tip3.destroy('Tip3');
        } else {
            if (myTime <= 120) {
                popinEndLevel3();
            } else {
                portalLevel4();                
            }
        }
    } else {
        var $popinError = new Popin({
            content: content['erreur']
        });
    }
}

/**
* @function verifyPixel
* @description Verify active pixel - Level 3
**/
$.fn.verifyPixel = function() {
    var rvb = $(this).data('rvb'),
        validated = $(this).data('validated'),
        pixelName = $(this).data('name'),
        correctRvb = thisLvlAnswers[which][pixelName],
        isCorrect = true;

    //Verify each color
    $.each(correctRvb, function(color, value){
        if (value.length > 1) { 
            if (!(rvb[color] < value[0] || rvb[color] > value[1])) { 
                validated[color] = true;
            }
        } else { 
            if (rvb[color] == value[0]) { 
                validated[color] = true;
            }
        }     
    }) 

    //Disable sliders
    $(this).data('validated', validated);
    if ($(this).hasClass('pixel-active')) {
        disableSliders(validated);
    }

    //Set pixel to correct or incorrect
    if (validated.red && validated.green && validated.blue) {
        $(this).removeClass('incorrect')
        $(this).addClass('correct')
        setTimeout(hideModal, 500);
    } else {
        $(this).addClass('incorrect') 
    }
}

/**
* @function popinExplainLevel3
* @description
**/
function popinExplainLevel3() {
    var title = isFr ? 'Validation du niveau 3' : 'Level 3 validation',
        popinExplain = new Popin({
            content: content['lvl3explanation'],
            type: 'info',
            title: title
        });
}

/**
* @function popinEndLevel3
* @description
**/
function popinEndLevel3 () {
    var exist = false;
    for (var i = 0; i < $tabSuccess.length; i++) {
        if ($tabSuccess[i] === 'succes7') {
            exist = true;
            break;
        }
    }
    if (!exist) {
        var $popinSuccessTime = new Popin({
            content: content['jeu3s'],
            type: 'succes',
            callback: 'portalLevel4()',
            icon: 'succes7'
        });
    }else {
        portalLevel4();
    }
}

/**
* @function runCodeLevel3
* @description Execute code from Code Mirror Editor - Level 3
* @deprecated Was used for developer mode
**/
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
        alert ('pls input only nu');

        var resetPixel = $('.pixel-active').data('rvb');

        resetCodePixel($('.pixel-active').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);
    }
}