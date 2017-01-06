/********************
*
*   Chapitre 4
*
*********************/
function loadLevel4() {
    showpop4C = "Showpopup(content['jeu4c'], 'hidePopup()', '')";
    showpop4B = "Showpopup(content['jeu4b'], showpop4C, '')";
    Showpopup(content['jeu4a'], showpop4B, '');

    $('main').loadLevel('level4', function () {

        var image = $('.imageObject');
        image.on('touch click', showModal);

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
        if (!devMod) {
            codeConfig.readOnly = 'nocursor';
            $('.dev').hide();  
        } else {
            $('.notdev').hide();
        }

        //thisLvlAnswers = answers.lvl4;

        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);

        //        codeMirror.addKeyMap({
        //            Enter: function (cm) {
        //
        //            }
        //        });

        $('#frameWrapper .imageObject').each(function () {
            $(this).data('pos', {
                x: 0,
                y: 0,
                rot: 0
            }).data('name', 'img_'+$(this).index());
        });

        //Change Active Pixel
        image.click(function () {
            $('.imgActive').removeClass('imgActive');
            $(this).addClass('imgActive');

            resetCode();
        })

        //Run Code
        $('.runCode').click(function () {
            runCodeLevel4();
            hideModal();
        });

        $('.functions-btn .btn').click(function() {
            console.log($(this))
            addCode($(this));
        })

        $('.reinitImg').click(reinitImg);

        codeMirror.setValue('init');
        //resetCode();

    })

}



function runCodeLevel4() {
    // console.log('running code')
    // console.log($('.imgActive').data('pos'))
    var code = codeMirror.getValue();
    eval(code)
    applyPosition();
    resetCode();
}



/********************
*
*   Fonctions du Chapitre 4
*
*********************/

function submitLevel4() {
    //Validate
    var isCorrect = 0;
    $.each($('.imageObject'), function(i) {
        var pos = $(this).data('pos');
        $.each(thisLvlAnswers, function(i, value) {
            if (JSON.stringify(pos) == JSON.stringify(value)) {
                console.log(pos);
                console.log(value);
                isCorrect++;
            }
        });
    })
    if (isCorrect == 9 || testing) { //{TEST}
        console.log('WIN');
        Showpopup('Bravo !', 'loadSandbox()', 'succes');
    } else {
        //console.log('T\'es nul');
        Showpopup('Mmmmh, il semble y avoir une erreur', 'hidePopup()', 'error');
    }
}
