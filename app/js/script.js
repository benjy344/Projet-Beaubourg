var dest = './dist/',
    level = './dist/views/levels/',
    views = './dist/views/',

    Username = "",
    devMod = false,
    aleNumber = '',
    binaire = '',
    screen = 'index',
    

    answers = {},
    thisLvlAnswers = {};
$.getJSON('dist/json/answers.json', function (data) {
    answers = data;
});

$Popup = $('.popup');
$content_popup = $('.popup .content-popup');
$button = $('.js-fleche-popup');
$hoverlay = $('.hoverlay');
$popup_icon = $('.popup-icon i');

popinIsOpen = false;
tipIsOpened = false;
isNewTip = false;


/********************

Chargement des levels et menu

*******************/


/********************
*
*   Choix du niveau 
*
*********************/
function loadChooseDevMod(){
    Showpopup(accueil, 'hidePopup()', '');
    Username = $('input#name').val();
    $('main').load(views+'chooseDevMod.html', function(){
        
        screen = 'chooseDevMode';

        $('#input1, #input2').on('touch click', function(e) {
            isdebMod = $('input#input1:checked').val();
            if (isdebMod == 'on') {

                devMod = false;
            }
            else {devMod = true;} 
        }); 
    });
    $('#input1, #input2').off();
}



/********************
*
*   page de choix des chapitres 
*
*********************/
function loadChooseLevel(){
    $('main').load(views+'accueil.html');
}


/********************
*
*   Chapitre 1
*
*********************/
function loadLevel1() {
    screen = 'level1';
    $('.hamburger').show();
    showpop1C = "Showpopup(jeu1c, 'hidePopup()', '')";
    showpop1B = "Showpopup(jeu1b, showpop1C, '')";
    //Showpopup(jeu1a, showpop1B, '');


    if (devMod){
        $('main').load(level+'level1.html', function(){

            //generation du nombre aléatoir a 24 chiffres + creation d'une chaine binaire
            var heightNumber =  16;
            var min = Math.ceil(0);
            var max = Math.floor(9);
            var tips1 = {
                0 : 'dev blabla1',
                1 : 'dev blabla2',
                2 : 'dev blabla3'
            }
            constructTips(2000, 3, tips1); //{DEV}
            for (var i = 0; i < heightNumber; i++){
                var alea = Math.floor(Math.random() * (max - min +1)) + min;
                if (alea % 2 == 0) {
                    binaire = binaire+'0';
                }
                else { binaire = binaire+'1'; }
                aleNumber = aleNumber+''+alea+''
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
    else {

        $('main').load(level+'level1.html', function(){
            //generation du nombre aléatoir a 12 chiffres
            var heightNumber =  12;
            min = Math.ceil(0);
            max = Math.floor(9);
            var tips1 = {
                0 : 'blabla1',
                1 : 'blabla2',
                2 : 'blabla3'
            }
            constructTips(10000, 3, tips1); //{DEV}
            for (var i = 0; i < heightNumber; i++){
                var alea = Math.floor(Math.random() * (max - min +1)) + min;
                if (alea % 2 == 0) {
                    binaire = binaire+'0';
                }
                else { binaire = binaire+'1'; }
                aleNumber = aleNumber+''+alea+''
            }
            $('.aleNumber').html(aleNumber);
            //generation des cases du tableau
            for (var i = 0; i < 2; i++){
                $('.tableau ul:first-child').clone().appendTo( ".tableau" );
            }
            var div = $('.tableau ul li div');


            div.on('touch click', function(e) {
                $(this).toggleClass('white');
            });
        });
    }    
}


/********************
*
*   Validation Chapitre 1
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
    if (chaineTableau == binaire || chaineTableau != binaire) { //{DEV} Always True
        Showpopup(jeu1d, 'loadLevel2()', 'succes iconAnim');
    }else{Showpopup('Mmmmh, il semble y avoir une erreur...', 'hidePopup()', 'error');}
}



/********************
*
*   Chapitre 2
*
*********************/
function loadLevel2() {
    screen = 'level2';
    reinitMain();
    showpop2C = "Showpopup(jeu2c, 'hidePopup()', '')";
    showpop2B = "Showpopup(jeu2b, showpop2C, '')";
    Showpopup(jeu2a, showpop2B, '');
    $('main').load(level+'level2.html', function(){
        var pixel = $('.pixel');
        //$(pixel).on('touch click', showModal) {DEV}
        //$('.close').on('touch click', hideModal)

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
        //console.log(thisLvlAnswers);

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
            applyColor(thisPixel);
        })

        //On focus, reset the cursor to the start and set selection
        codeMirror.on('focus', function () {
            codeMirror.setCursor({line:0,ch:0});
            setSelection('atom');
        })
    })
}

function showModal() {
    $('#modal-container').removeAttr('class').addClass('openCode');
    $('body').addClass('modal-active');
}

function hideModal() {
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');
}

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
            if (screen == 'level2') {
                runCodeLevel2();
            } else if (screen == 'level3') {
                runCodeLevel3();
            }

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

function runCodeLevel2() {
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
    verifPixelLevel2();
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

function verifPixelLevel2() {
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

function resetLevel2() {
    $('.pixel').off()
    $('.runCode').off()
    $('input:checkbox').off() //cm.getWrapperElement().parentNode.removeChild(cm.getWrapperElement());
    //cm=null;
}

/********************
*
*   Validation Chapitre 2
*
*********************/

function submitLevel2() {
    //Validate

    console.log('submitting')

    var isCorrect = true;
    $.each(thisLvlAnswers, function(i, value){
        //        if (!value.validate) { {DEV}
        //            isCorrect = false;
        //        }
    })

    if (isCorrect) {
        Showpopup('Bravo !', 'loadLevel3()', 'succes');
    } else {
        Showpopup('Mmmmh, il semble y avoir une erreur', 'hidePopup()', 'error');
    }
}


/********************
*
*   Chapitre 3
*
*********************/
function loadLevel3() {
    screen = 'level3';
    reinitMain();
    showpop3C = "Showpopup(jeu3c, 'hidePopup()', '')";
    showpop3B = "Showpopup(jeu3b, showpop3C, '')";
    Showpopup(jeu3a, showpop3B, '');

    $('main').load(level+'level3.html', function () {
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

        if (!devMod) {
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

            thisColors[name] = $(this).val();
            applyColor(thisPixel);
        })

        $('input[type=range]').on("change", function(){
            verifPixelLevel3();

        })

        //On focus, reset the cursor to the start and set selection
        CodeMirror.on('focus', function(){
            codeMirror.setCursor({line:0,ch:0});
            setSelection('number');
        });
    });
}

function resetSliders(r, g, b) {
    $('input.red').val(r).parent().css('background-color', 'rgb('+r+', 0, 0)')
    $('input.green').val(g).parent().css('background-color', 'rgb(0, '+g+', 0)')
    $('input.blue').val(b).parent().css('background-color', 'rgb(0, 0, '+b+')')
}

function verifPixelLevel3() {
    var rvb = $('.pixelActive').data('rvb');

    //console.log(rvb)
    //console.log(answers[$('.pixelActive').index()]);

    var thisAnswer = answers[$('.pixelActive').index()];
    var ok = true;

    $.each(thisAnswer, function(i, value){
        console.log(value);
        if (value.length > 1) {
            if (rvb[i] < value[0] || rvb[i] > value[1]) {
                ok = false;
            }  
        } else {
            if (rvb[i] != value[0]) {
                ok = false;
            }
        }    
    })

    if (ok) {
        console.log('right');

        answers[$('.pixelActive').index()].validate = true;

    } else {
        console.log('nope');
        //Est-ce que l'utilisateur peut changer les variables une fois que le carré a été validé?

        answers[$('.pixelActive').index()].validate = false;

    }
}

function runCodeLevel3() {
    console.log('running code')
    var code = codeMirror.getValue();
    eval(code)

    pixel = eval('pixel' + $('.pixelActive').index());
    //console.log(pixel)                    

    $.each(pixel, function(i, value) {
        if (value < 0) {
            pixel[i] = 0;
        }
        if (value > 255) {
            pixel[i] = 255;
        }
    });


    $('.pixelActive').data('rvb', {red: pixel.red, green: pixel.green, blue: pixel.blue});

    resetSliders(pixel.red, pixel.green, pixel.blue);

    applyColor(pixel);
    verif();


}


/********************
*
*   Validation Chapitre 3
*
*********************/

function submitLevel3() {
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

/********************
*
*   Chapitre 4
*
*********************/
function loadLevel4() {
    hidePopup();
    showpop4C = "Showpopup(jeu4c, 'hidePopup()', '')";
    showpop4B = "Showpopup(jeu4b, showpop4C, '')";
    Showpopup(jeu4a, showpop4B, '');
}


/********************
*
*   Chapitre 5
*
*********************/
function loadLevel5() {
    hidePopup();
}


/********************
*
*   Fonctions de réinitialisation
*
*********************/

function reinitMain() {
    hidePopup();
}

/********************
*
*   Popup
*
*********************/

/**
* showpopup
* function de création des popups
* Params : 
*       content (string) contenu text de la popup 
*       loadfunction (string) la function à charger au click sur la fleche, par defaut hidePopup()
*       icon (string) la class de l'icon, par default sans class     
**/
function Showpopup(content, loadfonction, icon){
    if ($Popup) {
        popinIsOpen = true;
        $content_popup.html(''+content+'');
        if (loadfonction) {$button.attr("onclick", ''+loadfonction+'');} else {$button.attr("onclick", 'hidePopup()');}
        if(icon) {$popup_icon.attr('class', 'icon icon-'+icon+'') } else {$popup_icon.attr('class', '')};
        $Popup.removeClass('hide');
        $hoverlay.removeClass('hide');
    };
}


/**
* hidePopup
* function de clean des popups
**/
function hidePopup() {
    popinIsOpen = false;
    $content_popup.html('');
    $button.attr("onclick", '');
    $popup_icon.attr('class', '');
    $Popup.addClass('hide');
    $hoverlay.addClass('hide');
}



/**
* open popup code
* inactive 
**/
// $('.button').on('touch click', function(){
//   var buttonId = $(this).attr('id');
//   $('#modal-container').removeAttr('class').addClass(buttonId);
//   $('body').addClass('modal-active');
// })

// $('#modal-container .close').on('touch click',function(){
//   $('#modal-container').addClass('out');
//   $('body').removeClass('modal-active');
// });

/*********************

    Popup Aide

********************/
/**
* constructTips
* function de construction des popups d'aide
* time en ms, durée entre chaque aide;
* numberOftips nombre total de tips;
* tips = {
*   0 : 'blabla1',
*   1 : 'blabla2',
*   2 : 'blabla'
* }
**/
function constructTips(time, numberOftips, tips ) {
    var number = 0
    setTimeout( function(){getATip(number, time, tips, numberOftips)} , time);
}


function getATip(number, time, tips, total) {
    var intervale = 0;
    var t = 0;
    $('.help-button').show().addClass('newTip');
    ConstructPopupAide(tips[number]);
    number++;
    if (number < total) {
        //var t = setTimeout( function(){getATip(number, time, tips, total)} , time);
        intervale = setInterval(function () {
            if (isNewTip == true || tipIsOpened == true || popinIsOpen == true) {
                console.log('clear le set')
                clearTimeout(t);
                t = 0;
            } else {
                console.log('else '+number);
                t = setTimeout( function(){getATip(number, time, tips, total)} , time);
                clearInterval(intervale);
            }
        }, 3000);

    } else {
        clearTimeout(t);
        t = 0;
        clearInterval(intervale);
        intervale = 0;
    }

}

function ConstructPopupAide(tip) {
    if (tip) {
        $content_popup.html(''+tip+'');
        $button.attr("onclick", 'closePopupAide()');
        isNewTip = true;
    };
}

function ShowPopupAide() {
    tipIsOpened = true;
    popinIsOpen = true;
    isNewTip = false;
    $('.help-button').removeClass('newTip');
    $Popup.removeClass('hide');
    $hoverlay.removeClass('hide');
}

function closePopupAide() {
    tipIsOpened = false;
    popinIsOpen = false;
    $Popup.addClass('hide');
    $hoverlay.addClass('hide');
}

/*********************

Implementation de l'encyclopedie

********************/

// ici tout le contenu designé sera stoqué en tant que page dans l'encyclopedie
// en param de la fonction => 
/**
* Nom de la page ( titre du li)
* contenu textuel
*
*/

function addEncyclo (name, content) {
    encyclo = $('.encyclo ul');
    archive = $('.archive');
    countEncyclo = encyclo.children().length;
    if (name && content) {
        encyclo.prepend('<li class="encycloLink"><a href="#" data-link="'+countEncyclo+'">'+name+'</a></li>');
        archive.prepend('<li data-link="'+countEncyclo+'">'+content+'</li>');
    }
}

/*********************

Implementation des success 

********************/

// ici tout le contenu designé sera stoqué en tant trophé dans la pages des success 
// en param de la fonction => 
/**
* Nom du success ( titre du li)
* class de l'icon du success
*
*/
function addSuccess (name, icon) {
    gallery = $('.successGalery ul');
    if (name && icon) {
        gallery.prepend('<li class="succes"><i class="icon icon-'+icon+'"></i><p>'+name+'</p></li>');
    }
}




/*********************

Document.ready

********************/

$(document).ready(function() {
    Username = $('input#name').val();
    $('.hamburger').hide();

    $('.hamburger, #overlay').on('touch click', function() {
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
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){

            //Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        }).off();
    } 
});


/********************

Variable de textes

*********************/

//Présentation ouverture application
var accueil = '<p>Bonjour '+Username+' et bienvenue sur notre application !</p> <p>Afin de vous accompagner dans votre découverte du code informatique et de vous expliquer des notions sur le code informatique, nous avons mené une mission de “vulgarisation scientifique” du code informatique pour vous ! <br>Au fil des quelques jeux que nous vous avons préparez, vous allez découvrir des notions fondamentales sur la création d’une image numérique.</p> <p>Bonne chance et bon jeu !</p>';

//Jeu 1

//Présentation
var jeu1a = '<h1>Présentation de l\'oeuvre</h1><p>Vous vous trouvez actuellement devant l’oeuvre de François Morellet, 6 répartitions aléatoires de 4 carrés noirs et blancs d’après les chiffres. L’artiste a en fait représenté sous forme de carrés noirs et blancs les 24 premiers chiffres du chiffre PI, pour cela, il a choisi de mettre un carré blanc pour un chiffre impair et un carré noir pour un chiffre pair.</p>';

//Notion informatique
var jeu1b = '<h1>Explication de la notion abordée</h1><p>A travers cette activité, vous serez initié à la notion de pixel. Un pixel est le plus petit élément d\'une surface d\'affichage tel qu’un ordinateur, un téléviseur, votre téléphone portable ou encore une tablette.</p>';

//Explication du jeu
var jeu1c = '<h1>Explication du jeu</h1><p>Vous disposerez d’un nombre aléatoire qu’il faudra reproduire à la méthode de Morelet, un pixel éteint pour un chiffre pair et allumé pour un chiffre impair.</p>';

//Oeuvre suivante
var jeu1d = '<p>Bravo ! Vous avez réussi le mini-jeu !<br>La prochaine activité sera inspirée d’une oeuvre de Ellsworth Kelly, elle se trouve sur votre droite.</p>';

//Astuce
var jeu1astuce1 = '<p>Cliquez sur chaque cases pour changer la couleur du carré.</p>';
//Astuce
var jeu1astuce2 = '<p>Pair : Noir<br>Impair : Blanc</p>';
//Astuce
var jeu1astuce3 = '<p>0 : Noir<br>1 : Blanc<br>2 : Noir<br>3 : Blanc<br>4 : Noir<br>5 : Blanc<br>6 : Noir<br>7 : Blanc<br>8 : Noir<br>9 : Blanc</p>';
//Astuce
var jeu1astuce4 = '<p>voici la réponse à vous de la recopier !</p>';

//Jeu 2

//Présentation
var jeu2a = '<h1>Présentation de l\'oeuvre</h1><p>Vous vous trouvez devant une oeuvre de Elisworth Kelly, Kite II. C’est en fait un assemblage bord à bord de carrés noir et colorés et de rectangles blancs. Il montre ici un rythme, un vide par le blanc, et un plein par la couleur et le noir. Les couleurs sont un mélange entre les couleurs primaires naturelles (rouge, bleu et jaune) et numérique (rouge, bleu et vert).</p>';

//Notion informatique
var jeu2b = '<h1>Explication de la notion abordée</h1><p>Vous allez ici être initié à la couleur. En numérique, ce n’est pas les couleurs primaires qui sont utilisées mais les couleurs additives, le RVB : Rouge, Vert et Bleu. Et c’est en additionnant ces couleurs que vous obtiendrez les autres couleurs.</p>';

//Explication du jeu
var jeu2c = '<h1>Explication du jeu</h1><p>Reproduisez le tableau en allumant ou en éteignant les boutons :<br>R : Rouge<br>V : Vert<br>B : Bleu</p>';

//Oeuvre suivante
var jeu2d = '<p>Bravo ! Vous avez réussi le mini-jeu !<br>Regardez sur votre droite, la prochaine activité vous attend ! Elle sera basé sur une oeuvre de François Morellet, et voilà à quoi elle ressemble :</p>';

//Astuce
var jeu2astuce1 = '<p>Voici le diagramme des couleurs additives.</p>';
//Astuce
var jeu2astuce2 = '<p>Voici comment créer les couleurs qui vous seront utiles :<br>Jaune : RV : allumés, B : éteins<br>Blanc : RVB : allumés<br>Noir : RVB : éteins</p>';
//Astuce
var jeu2astuce3 = '<p>Voici la réponse du jeu, à vous de la recopier !</p>';

//Jeu 3

//Présentation
var jeu3a = '<h1>Présentation de l\'oeuvre</h1><p>Vous voici devant une oeuvre de François Morollet, du jaune au violet. Ici, l’artiste nous montre qu’il y a deux manières de passer de la couleur jaune à la couleur violette, tout d’abord en passant par le vert et le bleu puis en passant par le orange et le rouge. Si vous y regardez de plus près, vous verrez même qu’il joue avec l’épaisseur de trait jaune, rouge et violet, ou jaune, bleu et vert, pour former ce dégradé.</p>';

//Notion informatique
var jeu3b = '<h1>Explication de la notion abordée</h1><p>Nous allons ici vous initier aux nuances de couleurs. C’est en fait en mélangeant trois couleurs numérique (Rouge, Vert et Bleu) que nous pouvons créer de nouvelles couleurs.</p>';

//Explication du jeu
var jeu3c = '<h1>Explication du jeu</h1><p>Vous allez devoir reproduire les différentes nuances de couleur du tableau, en jouant avec l’intensité de chaque couleur additives, pour au final réussir à reproduire un dégradé du jaune au violet !</p>';

//Oeuvre suivante
var jeu3d = '<p>Bravo ! Vous avez réussi le mini-jeu !<br>L’oeuvre suivante est une oeuvre de François Morellet. Elle se trouve sur votre droite. Voilà à quoi elle ressemble :</p>';

//Astuce
var jeu3astuce1 = '<p>Jouez sur l\intensité des couleurs RVB, de 0 à 255.</p>';
//Astuce
var jeu3astuce2 = '<p>Voici le diagramme des couleurs !</p>';
//Astuce
var jeu3astuce3 = '<p>Voici la réponse, à vous de récopier correctement pour passer à l\'étape suivante.</p>';

//Jeu 4

//Présentation
var jeu4a = '<h1>Présentation de l\'oeuvre</h1><p>L’oeuvre sur laquelle nous nous sommes basée pour cette activité est une oeuvre de François Morellet, intitulé 3*3. C’est une disposition de 9 carrés identiques, positionné de manière différente sur la toile. C’est cette notion de rotation et de déplacement qui nous a inspiré à la création de l’activité que nous vous proposons. </p>';

//Notion informatique
var jeu4b = '<h1>Explication de la notion abordée</h1><p>A partir de 9 images identiques superposées, vous devrez reproduire le tableau de Morellet en  modifiant le code informatique pour changer la position et la rotation des éléments. A vous de jouer !</p>';

//Explication du jeu
var jeu4c = '<h1>Explication du jeu</h1><p>Vous allez maintenant aborder la notion de motifs, de formes et de leur positionnement dans l’espace. <br>Comme vous le verrez, certaines lignes de code permettent d’appliquer des transformations mineures aux images telles que des rotations, des déplacements ou encore des redimensionnements. </p>';

//Oeuvre suivante
var jeu4d = '<p>Bravo !</p>';

//Astuce
var jeu4astuce1 = '<p></p>';
//Astuce
var jeu4astuce2 = '<p></p>';
//Astuce
var jeu4astuce3 = '<p></p>';


//Félicitation fin du jeu
var felicitation = '<p>Bravo ! Vous venez de finir la dernière activité ! Êtes-vous prêt à faire marcher votre imagination pour mettre en application les notions que vous venez de découvrir ? Rendez-vous dans la sandbox !</p>';

//Sandbox
var textsandbox = '<p>Vous avez complété toutes les activités ! Félicitations !</p> <p>Nous vous proposons une dernière animation pour résumer les connaissances que vous venez d\'acquérir.</p><p>Nous vous invitons maintenant à expérimenter toutes les notions que vous venez de découvrir, à votre guise et sans contraintes !</p>';

//FinSandbox
var finsandbox = '<p>Bravo ! Vous vous venez de compléter toutes les activités de notre atelier !</p> <p>Nous espérons que nous vous aurons permis d’apprendre et de comprendre les notions de base de l’informatique, et qui sait, de faire naître une nouvelle passion ! </p>';












