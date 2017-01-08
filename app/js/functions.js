/********************
*
*   gestion niveaux/chapitres 
*
*********************/

function reloadLevel() {
    //console.log(level+' '+screen+' '+devMod);
    switch(screen) {
        case 'level1':
            //console.log('jrfeiu')
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
*   Choix du niveau 
*
*********************/
function loadChooseDevMod(){
    Showpopup(content['accueil'], 'hidePopup()', '');
    Username = $('input#name').val();
    $('#username').text(Username);
    if (Username == 'test') { // {DEV}
        testing = true;
    }
    $('main').load(views+'chooseDevMod.html', chooseMode);
    $('#input1, #input2').off('touch click');
}

function chooseMode(){

    $('#input1, #input2').on('touch click', function(e) {
        isdebMod = $('input#input1:checked').val();
        if (isdebMod == 'on') {
            console.log('korf');
            devMod = false;
        }
        else {devMod = true;} 
    }); 
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
function Showpopup(content, loadfonction, icon, isSuccess=false){

    if ($Popup) {

        popinIsOpen = true;
        $content_popup.html(''+content+'');
        if (loadfonction) {$button.attr("onclick", ''+loadfonction+'');} else {$button.attr("onclick", 'hidePopup()');}
        if(icon) {$popup_icon.attr('class', 'icon icon-'+icon+' iconAnim') } else {$popup_icon.attr('class', '')};
        if(isSuccess) addSuccess(icon);
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
    ConstructPopupAide(tips[number]);
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

function ConstructPopupAide(tip) {
    if (tip) {
        countip++;
        $content_popup.html(''+tip+'');
        $button.attr("onclick", 'closePopupAide()');
        isNewTip = true;

        addEncyclo('Aide n°'+countip+'', tip);
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

    // encyclo = $('.encyclo ul');
    // archive = $('.archive');
    countEncyclo = $tabArchiveTitle.length;
    if (name && content) {
        $tabArchiveTitle.push('<li data-link="content-'+countEncyclo+'">'+name+'</li>');
        $tabArchiveContent.push('<div id="content-'+countEncyclo+'" class="encycloPop " data-link="content-'+countEncyclo+'"><div class="icon icon-close popinClose"></div>'+content+'</div>');
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
function addSuccess (icon) {
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
        $('.content-global').hide();
    }, 1000);

}

function hideModal() {
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');
    $('.content-global').show();  
}