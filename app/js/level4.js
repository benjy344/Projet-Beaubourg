/********************
*
*   Chapitre 4
*
*********************/
function loadLevel4() {
    countLevel = 4;
    if (!level4IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['jeu4'],
            $close: $('.js-close-popupEncyclo')
        });
    }
    
    level4IsVisited = true;

    $('main').loadLevel('level4', function () {

        var image = $('.imageObject');
        var holdTimeout = '';


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
        //Initialisation des variables
            codeConfig.readOnly = 'nocursor';

            var tips4 = {
                0 : content['jeu4astuce1'],
                1 : content['jeu4astuce2'],
                2 : content['jeu4astuce3']
            }
            console.log(tips4)
            constructTips(42000, 3, tips4); 
        

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


        //        $('.imageObject').bind('mousedown touchstart', function() {
        //            console.log($(this))
        //            var that = $(this)
        //            holdTimeout = setTimeout(add.bind(null, that), 1000);
        //        })
        //        
        //        $('.imageObject').bind('mouseup touchend', function() {
        //            console.log($(this))
        //            if ($(this).hasClass('hovered')) {
        //                $(this).removeClass('hovered')
        //            } else {
        //                clearTimeout(holdTimeout);
        //            }
        //        })
        //        
        //        function add(that) {
        //            console.log(that)
        //            that.addClass('hovered');
        //        }

        $('.imageObject').bind('mousedown touchstart', function() {
            $(this).addClass('hovered');
        })

        $('.imageObject').bind('mouseup touchend', function() {
            if ($(this).hasClass('hovered')) {
                $(this).removeClass('hovered')
            }
        })


        //Change Active Pixel
        image.on('touch click', function () {
            showModal();
            $('.imgActive').removeClass('imgActive');
            $(this).addClass('imgActive');

            resetCode();
        });




        //Run Code
        $('.runCode').on('touch click', function () {
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
     console.log('running code lvl4')
    // console.log($('.imgActive').data('pos'))
    //alert('ok')
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
        var $popinError = new Popin({
            content: content['felicitation'],
            callback: 'loadSandbox()',
            type: 'succes',
            icon: 'succes4'
        });
    } else {
        var $popinError = new Popin({
            content: content['erreur']
        });
    }
}
