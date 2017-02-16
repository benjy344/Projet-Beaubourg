
/********************
*
*   Sandbox
*
*********************/
function loadSandbox() {
    countLevel = 5;
    if (!sandboxIsVisited) {
        var $popinSlider = new Popin({
            type: 'encyclo',
            content: content['encyclo1jeu5'], 
            title: 'Sandbox'
        });

        addHelp('Niveau 4 Aide n°1', content['jeu4astuce1']);
        addHelp('Niveau 4 Aide n°2', content['jeu4astuce2']);
        addHelp('Niveau 4 Aide n°3', content['jeu4astuce3']); 
    }

    sandboxIsVisited = true;
    arrayCookieUser.sandboxIsVisited = true;
    createCookie(Username, arrayCookieUser, 20);
    $('main').loadLevel('sandbox', function () {

        //var image = $('.imageObject');

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
        codeMirror.addKeyMap({
            Enter: function (cm) {
                enterKeyMap();
            }
        });


        //        $('#frameWrapper .imageObject').each(function () {
        //            $(this).data('pos', {
        //                x: 0,
        //                y: 0,
        //                rot: 0
        //            }).data('name', 'img_'+$(this).index());
        //        });



        //Change Active Pixel
        $(document).on('touch click', '.js-pixel', function () {

            if ($(this).hasClass('pixel-active')) {
                $('.pixel-active').removeClass('pixel-active img-active');
                $('.js-edit-pixel').addClass('hidden');
            } else {
                $('.pixel-active').removeClass('pixel-active img-active');
                $(this).addClass('pixel-active img-active');
                $('.js-edit-pixel').removeClass('hidden');
            }


        })

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

        $('.js-run-code').click(function () {
            hideModal();
            runCodeLevel4();  
        });

        $('.js-apply-color').on('touch click', hideModal)

        $('.functions-btn .btn').on('touch click', function() {
            console.log($(this))
            addCode($(this));
        })

        codeMirror.setValue('init');
        resetCode();

    })
}

function runSandbox() {

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

        //console.log($('.js-sandboxwrapper').length);
        var xMax = Math.ceil($('.js-sandboxwrapper').width() / size) - 1;
        var yMax = Math.ceil($('.js-sandboxwrapper').height() / size) - 1;
        //console.log(xMax, yMax)

        pos.x = pos.x > xMax ? xMax : (pos.x < 0) ? 0 : pos.x;
        pos.y = pos.y > yMax ? yMax : (pos.y < 0) ? 0 : pos.y;
        pos.rot %= 360;

        //console.log(pos.x, pos.y);

        $('.pixel-active').css('transform', 'rotate('+pos.rot+'deg)');
        $('.pixel-active').css('left', pos.x * size + 'px');
        $('.pixel-active').css('top', pos.y * size + 'px');




    } catch (e) {

        alert(e.message);

        var resetPixel = $('.pixel-active').data('rvb');

        resetCodePixel($('.pixel-active').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);

    }
}