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
    if (Username == '' || Username =='FX') { // {DEV}
        testing = true;
    }
    isUserExiste(Username);
}


function isUserExiste (username) {
    if(readCookie(username)){
        //console.log(readCookie(username))
        arrayCookieUser = readCookie(username);
        $('main').load(views+'intro.html', function() {
            $tabSuccess = arrayCookieUser.$tabSuccess;
            level1IsVisited = arrayCookieUser.level1IsVisited,
            level2IsVisited = arrayCookieUser.level2IsVisited,
            level3IsVisited = arrayCookieUser.level3IsVisited,
            level4IsVisited = arrayCookieUser.level4IsVisited,
            sandboxIsVisited = arrayCookieUser.sandboxIsVisited;
            $('#username').text(Username);     
        });
    } else {
        createCookie(username, arrayCookieUser, 20);
        $('main').load(views+'intro.html', function() {
            $('#username').text(Username);     
        });
    }
}




/**********************************
*
*             COOKIES
*
*********************************/

function createCookie(name, tabvalue, duration) {
// Le nombre de duration est spécifié
value = decodeURIComponent( $.param( tabvalue ) );
if (duration) {
    var date = new Date();
                // Converti le nombre de jour en millisecondes
                date.setTime(date.getTime()+(duration*24*60*60*1000));
                var expire = "; expire="+date.toGMTString();
            }
        // Aucune valeur de duration spécifiée
        else var expire = "";
        document.cookie = name+"="+value+expire+"; path=/";
    }
function readCookie(name) {
// Ajoute le signe égale virgule au name
    // pour la recherche
    var name2 = name + "=";
    // Array contenant tous les cookies
    var arrCookies = document.cookie.split(';');
    // Cherche l'array pour le cookie en question
    for(var i=0;i < arrCookies.length;i++) {
        var a = arrCookies[i];
        // Si c'est un espace, enlever
        while (a.charAt(0)==' ') {
          a = a.substring(1,a.length);
        }
        if (a.indexOf(name2) == 0) {
          return $.parseParams("?"+a.substring(name2.length,a.length));
        }
    }
    // Aucun cookie trouvé
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
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
        modal = '#modal-content';

    thisLvlAnswers = answers[levelToLoad];
    //console.log(thisLvlAnswers);

    this.load(file + ' ' + lvl, function() {  
        $('.modal-content').load(file + ' ' + modal, function() {

            callback();


        })
    })
}


/********************
*
*   Popup & Modal
*
*********************/



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
// function constructTips(time, numberOftips, tips ) {
//     var number = 0;
//     timeOut = setTimeout( function () {
//         if (popinIsOpen === false) {
//             getATip(number, time, tips, numberOftips);
//         } else {
//             constructTips(time, numberOftips, tips );
//         } 
//     } , time);

// }


// function getATip(number, time, tips, total, finish) {
//     if (finish) {
        
//         clearTimeout(t);
//         t = 0;
//         clearInterval(intervale);
//         intervale = 0;
//         console.log('kill')
//         console.log(t)
//         console.log(intervale)
//     } else {
//         intervale = 0;
//         t = 0;
//         $('.help-button').show().addClass('newTip');
//         isNewTip = true;
//         var $popup = $popin = new Popin({
//                     content: tips[number],
//                     type: 'help',
//                     $open: $('.help-button')
//                 });
//         number++;
//         if (number < total) {

//             //var t = setTimeout( function(){getATip(number, time, tips, total)} , time);
//             intervale = setInterval(function () {
//                 if (isNewTip == true || tipIsOpened == true || popinIsOpen == true) {
//                     clearTimeout(t);
//                     t = 0;
//                 } else {
//                     t = setTimeout( function(){getATip(number, time, tips, total)} , time);
//                     clearInterval(intervale);
//                 }
//             }, 1000);

//         } else {
//             clearTimeout(t);
//             t = 0;
//             clearInterval(intervale);
//             intervale = 0;
//         }
//     }
// }

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

function addEncyclo(name, content) {
    var exist = false;
    for (var i = 0; i < encycloNameTab.length; i++) {
        if (encycloNameTab[i] === name) {
            exist = true;
        }
    }
    if (!exist) {
        encycloNameTab.push(name);
        countEncyclo = encycloNameTab.length;
        if (name && content) {
            $tabArchiveTitle.push('<li data-link="content-'+countEncyclo+'">'+name+'</li>');
            $tabArchiveContent.push('<div id="content-'+countEncyclo+'" class="encycloPop " data-link="content-'+countEncyclo+'">'+content+'</div>');
        } 
    } else {
        return;
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
    var exist = false;
    for (var i = 0; i < helpNameTab.length; i++) {
        if (helpNameTab[i] === name) {
            exist = true;
        }
    }
    if (!exist) {
        helpNameTab.push(name);
        countHelp = $tabHelpTitle.length;
        if (name && content) {
            $tabHelpTitle.push('<li data-link="content-'+countHelp+'">'+name+'</li>');
            $tabHelpContent.push('<div id="content-'+countHelp+'" class="encycloPop " data-link="help-'+countHelp+'">'+content+'</div>');
        } 
    } else {
        return;
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
    if (icon) {
        $tabSuccess.push(icon);
        arrayCookieUser.$tabSuccess = $tabSuccess;
        createCookie(Username, arrayCookieUser, 20);
    }
}


function alertErr() {
    var pixel = $('.pixel-active').data('rvb');
    resetCodePixel($('.pixel-active').data('name'), pixel.red, pixel.green, pixel.blue)
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
}

function hideModal() {
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');
    $('.content-global').show(); 
}

//**********************************************************************
// function waitfor - Wait until a condition is met
//        
// Needed parameters:
//    test: function that returns a value
//    expectedValue: the value of the test function we are waiting for
//    msec: delay between the calls to test
//    callback: function to execute when the condition is met
// Parameters for debugging:
//    count: used to count the loops
//    source: a string to specify an ID, a message, etc
//**********************************************************************
function waitforPopinIsOpen( expectedValue, msec, count, source, level, callback) {
    // Check if condition met. If not, re-check later (msec).
    if (countLevel === level) {
       if (popinIsOpen !== expectedValue || isNewTip !== expectedValue) {
            count++;
            setTimeout(function() {
                waitforPopinIsOpen( expectedValue, msec, count, source, level, callback);
            }, msec);
            return;
        } 
    }else {
        return;
    }
    
    // Condition finally met. callback() can be executed.
    //console.log(source + ': ' + popinIsOpen + ', expected: ' + expectedValue + ', ' + count + ' loops.');
    callback();
}




// Add an URL parser to JQuery that returns an object
// This function is meant to be used with an URL like the window.location
// Use: $.parseParams('http://mysite.com/?var=string') or $.parseParams() to parse the window.location
// Simple variable:  ?var=abc                        returns {var: "abc"}
// Simple object:    ?var.length=2&var.scope=123     returns {var: {length: "2", scope: "123"}}
// Simple array:     ?var[]=0&var[]=9                returns {var: ["0", "9"]}
// Array with index: ?var[0]=0&var[1]=9              returns {var: ["0", "9"]}
// Nested objects:   ?my.var.is.here=5               returns {my: {var: {is: {here: "5"}}}}
// All together:     ?var=a&my.var[]=b&my.cookie=no  returns {var: "a", my: {var: ["b"], cookie: "no"}}
// You just cant have an object in an array, e.g. ?var[1].test=abc DOES NOT WORK
(function ($) {
    //
    var re = /([^&=]+)=?([^&]*)/g;
    var decode = function (str) {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    };
    $.parseParams = function (query) {

        // recursive function to construct the result object
        function createElement(params, key, value) {
            key = key + '';

            // if the key is a property
            if (key.indexOf('.') !== -1) {
                // extract the first part with the name of the object
                var list = key.split('.');

                // the rest of the key
                var new_key = key.split(/\.(.+)?/)[1];

                // create the object if it doesnt exist
                if (!params[list[0]]) params[list[0]] = {};

                // if the key is not empty, create it in the object
                if (new_key !== '') {
                    createElement(params[list[0]], new_key, value);
                } else console.warn('parseParams :: empty property in key "' + key + '"');
            } else
            // if the key is an array    
            if (key.indexOf('[') !== -1) {
                // extract the array name
                var list = key.split('[');
                key = list[0];

                // extract the index of the array
                var list = list[1].split(']');
                var index = list[0]

                // if index is empty, just push the value at the end of the array
                if (index == '') {
                    if (!params) params = {};
                    if (!params[key] || !$.isArray(params[key])) params[key] = [];
                    params[key].push(value);
                } else
                // add the value at the index (must be an integer)
                {
                    if (!params) params = {};
                    if (!params[key] || !$.isArray(params[key])) params[key] = [];
                    params[key][parseInt(index)] = value;
                }
            } else
            // just normal key
            {
                if (!params) params = {};
                params[key] = value;
            }
        }

        // be sure the query is a string
        query = query + '';
        
        if (query === '') query = window.location + '';
        
        var params = {}, e;
        if (query) {
            // remove # from end of query
            if (query.indexOf('#') !== -1) {
                query = query.substr(0, query.indexOf('#'));
            }

            // remove ? at the begining of the query
            if (query.indexOf('?') !== -1) {
                query = query.substr(query.indexOf('?') + 1, query.length);
            } else return {};
            
            // empty parameters
            if (query == '') return {};
            
            // execute a createElement on every key and value
            while (e = re.exec(query)) {
                var key = decode(e[1]);
                var value = decode(e[2]);
                createElement(params, key, value);
            }
        }
        return params;
    };
})(jQuery);