
/********************
*
*   Sandbox
*
*********************/
function loadSandbox() {
    Showpopup(content['textsandbox'], hidePopup(), '');

    $('main').loadLevel('sandbox', function () {

        //var image = $('.imageObject');

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

        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);


        //        $('#frameWrapper .imageObject').each(function () {
        //            $(this).data('pos', {
        //                x: 0,
        //                y: 0,
        //                rot: 0
        //            }).data('name', 'img_'+$(this).index());
        //        });



        //Change Active Pixel
        $(document).on('touch click', '.pixel', function () {
            $('.pixelActive').removeClass('pixelActive imgActive');
            $(this).addClass('pixelActive imgActive');

            var name = $(this).data('name');
            var thisColors = $(this).data('rvb');
            showModal();
            resetCodePixel(name, thisColors.red, thisColors.green, thisColors.blue);



        })

        //Run Code
        //        $('.runCode').click(function () {
        //            runCodeLevel4();
        //            hideModal();
        //        });

        //        $('.functions-btn .btn').click(function() {
        //            console.log($(this))
        //            addCode($(this));
        //        })

        $('.reinitSandbox').click(reinitSandbox);

        codeMirror.setValue('init');
        //resetCode();

        $('.addPixel').click(addPixel);

        $('.runCode').click(runSandbox);

    })
}

function runSandbox() {

    var code = codeMirror.getValue();

    try {
        eval(code); 

        pixel = eval($('.pixelActive').data('name'));

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



        $('.pixelActive').data('rvb', {
            red: pixel.red, 
            green: pixel.green, 
            blue: pixel.blue
        });
        resetCodePixel($('.pixelActive').data('name'), pixel.red, pixel.green, pixel.blue);

        colorPixel();

        var pos = $('.pixelActive').data('pos'); 
        //pos.x = pos.x > 2 ? 2 : (pos.x < 0) ? 0 : pos.x; {DEV}
        //pos.y = pos.y > 2 ? 2 : (pos.y < 0) ? 0 : pos.y;
        pos.rot %= 360;

        $('.pixelActive').css('transform', 'rotate('+pos.rot+'deg)');
        var size = $('.pixelActive').outerWidth();
        $('.pixelActive').css('left', pos.x * size + 'px');
        $('.pixelActive').css('top', pos.y * size + 'px');

        hideModal();


    } catch (e) {

        alert(e.message);

        var resetPixel = $('.pixelActive').data('rvb');

        resetCodePixel($('.pixelActive').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);

    }











}