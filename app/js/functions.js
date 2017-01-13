/********************
*
*   gestion niveaux/chapitres 
*
*********************/

function reloadLevel() {
    switch(screen) {
        case 'level1':
            loadLevel1();
            break;
        case 'level2':
            loadLevel2();
            break;
        case 'level3':
            loadLevel3();
            break;
        case 'level4':
            loadLevel4();
            break;
    }
}

/********************
*
*   Intro 
*
*********************/
function loadIntro(){
    Username = $('input#name').val();
    $('#username').text(Username);
    if (Username == '') { // {DEV}
        testing = true;
    }
    $('main').load(views+'intro.html');
}

/********************
*
*   Page de choix des chapitres 
*
*********************/
function loadChooseLevel(){
    $('main').load(views+'accueil.html');
}

$.fn.loadLevel = function(levelToLoad, callback) {

    reinitMain();

    screen = levelToLoad;

    var file = level+levelToLoad+'.html',
        lvl = '#'+levelToLoad,
        modal = '#modalContent';

    thisLvlAnswers = answers[levelToLoad];
    //console.log(thisLvlAnswers);

    this.load(file + ' ' + lvl, function() {    
        $('.modalContent').load(file + ' ' + modal, function() {

            callback();


        })
    })
}


/********************
*
*   Popup & Modal
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
function Showpopup(content, loadfonction, icon, title=null , isSuccess=false){

    if ($Popup) {

        popinIsOpen = true;
        $content_popup.html(''+content+'');
        if (loadfonction) {$button.attr("onclick", ''+loadfonction+'');} else {$button.attr("onclick", 'hidePopup()');}
        if(icon) {$popup_icon.attr('class', 'icon icon-'+icon+' iconAnim') } else {$popup_icon.attr('class', '')};
        if(isSuccess) addSuccess(icon);
        if(title) addEncyclo(title, content);
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
    var number = 0;
    timeOut = setTimeout( function () {
        if (popinIsOpen === false) {
            getATip(number, time, tips, numberOftips);
        } else {
            constructTips(time, numberOftips, tips );
        } 
    } , time);

}


function getATip(number, time, tips, total) {
    var intervale = 0;
    var t = 0;
    $('.help-button').show().addClass('newTip');
    isNewTip = true;
    var $popup = $popin = new Popin({
                content: tips[number],
                type: 'help',
                $open: $('.help-button')
            });
    number++;
    if (number < total) {

        //var t = setTimeout( function(){getATip(number, time, tips, total)} , time);
        intervale = setInterval(function () {
            if (isNewTip == true || tipIsOpened == true || popinIsOpen == true) {
                clearTimeout(t);
                t = 0;
            } else {
                t = setTimeout( function(){getATip(number, time, tips, total)} , time);
                clearInterval(intervale);
            }
        }, 1000);

    } else {
        clearTimeout(t);
        t = 0;
        clearInterval(intervale);
        intervale = 0;
    }

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

    countEncyclo = $tabArchiveTitle.length;
    if (name && content) {
        $tabArchiveTitle.push('<li data-link="content-'+countEncyclo+'">'+name+'</li>');
        $tabArchiveContent.push('<div id="content-'+countEncyclo+'" class="encycloPop " data-link="content-'+countEncyclo+'"><div class="icon icon-close popinClose"></div>'+content+'</div>');
    } 

}
/*********************

Implementation de l'aide

********************/

// ici tout le contenu designé sera stoqué en tant que page dans l'aide
// en param de la fonction => 
/**
* Nom de la page ( titre du li)
* contenu textuel
*
*/

function addHelp(name, content) {

    countHelp = $tabHelpTitle.length;
    if (name && content) {
        $tabHelpTitle.push('<li data-link="content-'+countHelp+'">'+name+'</li>');
        $tabHelpContent.push('<div id="content-'+countHelp+'" class="encycloPop " data-link="help-'+countHelp+'"><div class="icon icon-close popinClose"></div>'+content+'</div>');
    } 

}

/*********************

Implementation des success 

********************/

// ici tout le contenu designé sera stoqué en tant trophé dans la pages des success 
// en param de la fonction => 
/**
* class de l'icon du success
*
*/
function addSuccess(icon) {
    countSuccess = $tabSuccess.length;
    if (icon) $tabSuccess.push(icon);
}


function alertErr() {
    var pixel = $('.pixelActive').data('rvb');
    resetCodePixel($('.pixelActive').data('name'), pixel.red, pixel.green, pixel.blue)
    codeMirror.getInputField().blur();
    //codeMirror.focus();
    alert('ERROR');
}





// Modal gestion
function showModal() {
    $('#modal-container').removeAttr('class').addClass('openCode');
    $('body').addClass('modal-active');
    setTimeout(function() {
        if ($('body').hasClass('modal-active')) {
            $('.content-global').hide();
        }
    }, 1000);
    console.log('showing modale')


}

function hideModal() {
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');
    $('.content-global').show(); 
    console.log('hidding modale')
}