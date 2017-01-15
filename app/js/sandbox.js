
/********************
*
*   Sandbox
*
*********************/
function loadSandbox() {
     var $popinSlider = new Popin({
        isSlider: true,
        type: 'encyclo',
        content: content['textsandbox']
    });
    $('main').loadLevel('sandbox', function () {

        //var image = $('.imageObject');

        //CodeMirror
        var textArea = $('.codeMirror')[0],
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
        $(document).on('touch click', '.pixel', function () {

            if ($(this).hasClass('pixelActive')) {
                $('.pixelActive').removeClass('pixelActive imgActive');
                $('.editPixel').addClass('hidden');
            } else {
                $('.pixelActive').removeClass('pixelActive imgActive');
                $(this).addClass('pixelActive imgActive');
                $('.editPixel').removeClass('hidden');
            }

            

            



        })

        $('.changeColor').on('touch click', function() {
            if($('.pixelActive').length > 0) {

                $('.btn-position').addClass('hidden');
                $('.btn-color').removeClass('hidden');
                $('.CodeMirror.CodeMirror-wrap').addClass('only-color');

                var name = $('.pixelActive').data('name');
                var thisColors = $('.pixelActive').data('rvb');
                resetCodePixel(name, thisColors.red, thisColors.green, thisColors.blue);
                resetSliders(thisColors.red, thisColors.green, thisColors.blue);

                showModal();
            }
        })

        $('.changePosition').on('touch click', function() {
            if($('.pixelActive').length > 0) {
                $('.btn-color').addClass('hidden');
                $('.btn-position').removeClass('hidden');
                $('.CodeMirror.CodeMirror-wrap').removeClass('only-color');

                resetCode();

                showModal();                
            }
        })

        $('.reinitSandbox').click(reinitSandbox);



        $('.addPixel').click(addPixel);


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

        $('.runCode').click(function () {
            hideModal();
            runCodeLevel4();
            
        });

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
        var size = $('.pixelActive').outerWidth();

        hideModal();

        console.log($('#sandboxWrapper').length);
        var xMax = Math.ceil($('#sandboxWrapper').width() / size) - 1;
        var yMax = Math.ceil($('#sandboxWrapper').height() / size) - 1;
        console.log(xMax, yMax)

        pos.x = pos.x > xMax ? xMax : (pos.x < 0) ? 0 : pos.x;
        pos.y = pos.y > yMax ? yMax : (pos.y < 0) ? 0 : pos.y;
        pos.rot %= 360;

        console.log(pos.x, pos.y);

        $('.pixelActive').css('transform', 'rotate('+pos.rot+'deg)');
        $('.pixelActive').css('left', pos.x * size + 'px');
        $('.pixelActive').css('top', pos.y * size + 'px');




    } catch (e) {

        alert(e.message);

        var resetPixel = $('.pixelActive').data('rvb');

        resetCodePixel($('.pixelActive').data('name'), resetPixel.red, resetPixel.green, resetPixel.blue);

    }











}


