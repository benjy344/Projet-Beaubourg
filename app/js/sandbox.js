/**
* @file General functions used in the sandbopx
* @author François-Xavier Bresson & Benjamin Demaizière
**/

/**
* @function portalSandbox
* @description initialise the sandboxe's portal
**/
function portalSandbox() {
    if (isFr) {
        var $portalSandbox = new Portal({
            title: 'Sandbox',
            notion: 'Appliquez toutes les notions vues précedement, vous êtes libre !',
            callback: 'loadSandbox()'
        });
    } else {
        var $portalSandbox = new Portal({
            title: 'Sandbox',
            notion: 'Apply all the concepts you have seen, you are totally free !',
            callback: 'loadSandbox()'
        });
    }
    arrayCookieUser.currentLevel = 5;
    createCookie(Username, arrayCookieUser, 20);
}

/**
* @function loadSandbox
* @description Load and initialize sandbox
**/
function loadSandbox() {
    if (!ecrin) {initEcrin()}
    $('.help-button').removeClass("first-tip");
    countLevel = 5;
    if (!sandboxIsVisited) {
        var $popinSlider = new Popin({
            type: 'encyclo',
            content: content['encyclo1jeu5'], 
            title: 'Sandbox'
        });

        addHelp(helpTitle(4, 1), content['jeu4astuce1']);
        addHelp(helpTitle(4, 2), content['jeu4astuce2']);
        addHelp(helpTitle(4, 3), content['jeu4astuce3']); 
    }

    sandboxIsVisited = true;
    arrayCookieUser.sandboxIsVisited = true;
    createCookie(Username, arrayCookieUser, 20);
    $('main').loadLevel('sandbox', function () {       

        //CodeMirror
        textArea = $('.js-code-mirror')[0];
        codeConfig = {
            mode: "text/javascript",
            theme: "icecoder", 
            lineWrapping: true, 
            lineNumbers: true, 
            autofocus: false,
            readOnly: 'nocursor'
            //matchBrackets: true
        }

        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);
        
        $('.js-run-code').click(function () { 
            hideModal(); 
            runCodeLevel4();   
        }); 

        //Change Active Pixel
        $(document).on('touch click', '.js-sandboxwrapper .js-pixel', function () {

            if ($(this).hasClass('pixel-active')) {
                $('.pixel-active').removeClass('pixel-active img-active');
                $('.js-edit-pixel').addClass('hidden');
            } else {
                $('.pixel-active').removeClass('pixel-active img-active');
                $(this).addClass('pixel-active img-active');
                $('.js-edit-pixel').removeClass('hidden');
            }


        })

        //Edit Pixel - Color
        $('.js-change-color').on('touch click', function() {
            if($('.pixel-active').length > 0) {
                $('.btn-position').addClass('hidden');
                $('.btn-color').removeClass('hidden');
                $('.cm-s-icecoder').addClass('only-color');
                var name = $('.pixel-active').data('name');
                var thisColors = $('.pixel-active').data('rvb');
                resetCodePixel(name, thisColors.red, thisColors.green, thisColors.blue);
                resetSliders(thisColors.red, thisColors.green, thisColors.blue);
                showModal();
            }
        })

        //Edit Pixel - Position
        $('.js-change-position').on('touch click', function() {
            if($('.pixel-active').length > 0) {
                $('.btn-color').addClass('hidden');
                $('.btn-position').removeClass('hidden');
                $('.cm-s-icecoder').removeClass('only-color');
                showModal();  
                resetCode();
            }
        })

        $('.js-reinit-sandbox').click(reinitSandbox);

        $('.js-add-pixel').click(addPixel);

        //Change color
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

        $('.js-apply-color').on('touch click', hideModal)

        $('.functions-btn .btn').on('touch click', function() {
            addCode($(this));
        })
        codeMirror.setValue('init');
        resetCode();
    })
}

/**
* @function runCodeSandbox
* @description Execute code from Code Mirror Editor - Sandbox
* @deprecated Was used for developer mode
**/
function runCodeSandbox() {

    var code = codeMirror.getValue();

    try {
        eval(code); 

        pixel = eval($('.pixel-active').data('name'));

        $.each(pixel, function(i, value) {
            if (typeof value == 'number') {
                if (value < 0) {
                    pixel[i] = 0;
                }
                if (value > 255) {
                    pixel[i] = 255;
                }
            } else {
                pixel[i] = 0
            }
        });



        $('.pixel-active').data('rvb', {
            red: pixel.red, 
            green: pixel.green, 
            blue: pixel.blue
        });
        resetCodePixel($('.pixel-active').data('name'), pixel.red, pixel.green, pixel.blue);

        colorPixel();

        var pos = $('.pixel-active').data('pos'); 
        var size = $('.pixel-active').outerWidth();

        hideModal();

        var xMax = Math.ceil($('.js-sandboxwrapper').width() / size) - 1;
        var yMax = Math.ceil($('.js-sandboxwrapper').height() / size) - 1;

        pos.x = pos.x > xMax ? xMax : (pos.x < 0) ? 0 : pos.x;
        pos.y = pos.y > yMax ? yMax : (pos.y < 0) ? 0 : pos.y;
        pos.rot %= 360;

        $('.pixel-active').css('transform', 'rotate('+pos.rot+'deg)');
        $('.pixel-active').css('left', pos.x * size + 'px');
        $('.pixel-active').css('top', pos.y * size + 'px');




    } catch (e) {

        alert(e.message);

        var resetPixel = $('.pixel-active').data('rvb');

        resetCodePixel($('.pixel-active').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);

    }
}