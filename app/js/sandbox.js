
/********************
*
*   Sandbox
*
*********************/
function loadSandbox() {
    //    showpop4C = "Showpopup(jeu4c, 'hidePopup()', '')";
    //    showpop4B = "Showpopup(jeu4b, showpop4C, '')";
    //    Showpopup(jeu4a, showpop4B, '');

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
    eval(code)

    pixel = eval($('.pixelActive').data('name'));

    $('.pixelActive').data('rvb', {
        red: pixel.red, 
        green: pixel.green, 
        blue: pixel.blue
    });
    colorPixel();


    var pos = $('.pixelActive').data('pos'); 
    //pos.x = pos.x > 2 ? 2 : (pos.x < 0) ? 0 : pos.x; {DEV}
    //pos.y = pos.y > 2 ? 2 : (pos.y < 0) ? 0 : pos.y;
    pos.rot %= 360;

    $('.pixelActive').css('transform', 'rotate('+pos.rot+'deg)');
    $('.pixelActive').css('left', pos.x * 100 + 'px');
    $('.pixelActive').css('top', pos.y * 100 + 'px');

    hideModal();


}