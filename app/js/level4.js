/********************
*
*   Chapitre 4
*
*********************/
function portalLevel4() {
    if (isFr) {
        var $portalLevel2 = new Portal({
            title: 'Le Positionnement',
            notion: 'Repositionnez les 9 carrés superposés et recréer l’oeuvre de Morellet',
            callback: 'loadLevel4()'
        });
    } else {
        var $portalLevel2 = new Portal({
            title: 'Positionning',
            notion: 'Blabla',
            callback: 'loadLevel4()'
        });
    }
    arrayCookieUser.currentLevel = 4;
    createCookie(Username, arrayCookieUser, 20);
}
function loadLevel4() {
    if (!ecrin) {initEcrin()}
    countLevel = 4;
    if (!level4IsVisited) {
        var $popinSlider = new Popin({
            isSlider: true,
            type: 'encyclo',
            content: content['encyclo1jeu4']
        });
        addHelp(helpTitle(3, 1), content['jeu3astuce1']);
        addHelp(helpTitle(3, 2), content['jeu3astuce2']);
        addHelp(helpTitle(3, 3), content['jeu3astuce3']); 

        tipsLevel4 = {
            0 : content['jeu4astuce1'],
            1 : content['jeu4astuce2'],
            2 : content['jeu4astuce3']
        }
        Tip4 = new Tip({
            'tips' : tipsLevel4,
            'duration' : 42000,
            'level': 4
        })
    }

    level4IsVisited = true;
    arrayCookieUser.level4IsVisited = true;
    createCookie(Username, arrayCookieUser, 20);
    $('main').loadLevel('level4', function () {

        var image = $('.js-image-object');
        var holdTimeout = '';


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
        //Initialisation des variables
        codeConfig.readOnly = 'nocursor';




        //thisLvlAnswers = answers.lvl4;

        //Initialisation de codeMirror
        codeMirror = CodeMirror.fromTextArea(textArea, codeConfig);

        //        codeMirror.addKeyMap({
        //            Enter: function (cm) {
        //
        //            }
        //        });

        image.each(function () {
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

        image.bind('mousedown touchstart', function() {
            $(this).addClass('hovered');
        })

        image.bind('mouseup touchend', function() {
            if ($(this).hasClass('hovered')) {
                $(this).removeClass('hovered')
            }
        })


        //Change Active Pixel
        image.on('touch click', function () {
            showModal();
            $('.img-active').removeClass('img-active');
            $(this).addClass('img-active');

            resetCode();
        });




        //Run Code
        $('.js-run-code').on('touch click', function () {
            runCodeLevel4();
            hideModal();
        });

        $('.functions-btn .btn').click(function() {
            console.log($(this))
            addCode($(this));
        })

        $('.reinit-img').click(reinitImg);

        codeMirror.setValue('init');
        //resetCode();

    })

}



function runCodeLevel4() {
    console.log('running code lvl4')
    // console.log($('.imgActive').data('pos'))
    //alert('ok')
    var code = codeMirror.getValue();
    var oldPos = $('.img-active').data('pos'); 
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
    endTime = Date.now();
    var myTime = (endTime - startTime)/1000;


    var isCorrect = 0;
    $.each($('.js-image-object'), function(i) {
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
        if (!sandboxIsVisited) {


            if (myTime <= 90) { 
                var $popinError = new Popin({
                    content: content['jeu4d'],
                    type: 'succes',
                    callback: 'popinEndLevel4()',
                    icon: 'succes4'
                });
            } else {
                var $popinError = new Popin({
                    content: content['jeu4d'],
                    type: 'succes',
                    callback: 'popinTable4()',
                    icon: 'succes4'
                });
            }
            var $popinError = new Popin({
                content: content['felicitation'],
                callback: 'popinTable4()',
                type: 'succes',
                icon: 'succes4'
            });
            if (Tip4) Tip4.destroy('Tip4');
        } else {
            if (myTime <= 90) {
                popinEndLevel4();
            } else {
                portalSandbox();                
            }
        }
    } else {
        var $popinError = new Popin({
            content: content['erreur']
        });
    }
}

function popinEndLevel3 () {
    if (!sandboxIsVisited) { var callback = 'popinTable4()'} else { var callback = 'portalSandbox()'}
    var $popinSuccessTime = new Popin({
                content: content['jeu3s'],
                type: 'succes',
                callback: callback,
                icon: 'succes8'
            });
}
function popinTable4 () {

    var $popinTableau = new Popin({
        content: content['encyclo2jeu4'],
        type: 'encyclo',
        callback: 'portalSandbox()',
        title: content['art4']
    });
}