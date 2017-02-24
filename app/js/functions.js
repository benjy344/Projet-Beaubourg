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


    lang = $('#chooseLang input[type="radio"]:checked').attr('id');
    if (lang == 'en') {
        isFr = false;
    }

    $.get("dist/content/content_"+lang+".html", function(data) {
        $(data).filter('div').each(function(i) {
            var name = $(this).attr("id");
            content[name] = $(this).html();
        })

        $('.main-nav ul').html(content['menu'])
        isUserExiste(Username);
    });
    
}


function isUserExiste (username) {
    if(readCookie(username)){
        arrayCookieUser = readCookie(username);
        $('main').load(views+lang+'/intro.html', function() {
            initRealoadSession();
            if (countLevel == 5) {
                var l = 'loadSandbox()';
            } else {
                var l = 'loadLevel'+countLevel+'()';
            }
            if (isFr) {
                var $portalLevel1 = new Portal({
                    title: 'Bon retour '+Username,
                    notion: 'Vous retrouverez tout ce que vous avez débloqué',
                    callback: l
                }); 
            } else {
                var $portalLevel1 = new Portal({
                    title: 'Welcome back '+Username,
                    notion: 'You can access everything you have already unlocked',
                    callback: l
                }); 
            }
        });
    } else {
        createCookie(username, arrayCookieUser, 20);
        $('main').load(views+lang+'/intro.html', function() {
            $('#username').text(Username);     
        });
    }
}



function initRealoadSession() {
    if (eval(arrayCookieUser.$tabSuccess)!= 0 && eval(arrayCookieUser.$tabSuccess)!= undefined) {
        $tabSuccess = eval(arrayCookieUser.$tabSuccess);
    } else {
        $tabSuccess = [];
    }
    level1IsVisited = eval(arrayCookieUser.level1IsVisited),
        level2IsVisited = eval(arrayCookieUser.level2IsVisited),
        level3IsVisited = eval(arrayCookieUser.level3IsVisited),
        level4IsVisited = eval(arrayCookieUser.level4IsVisited),
        sandboxIsVisited = eval(arrayCookieUser.sandboxIsVisited);
    countLevel = eval(arrayCookieUser.currentLevel);
    var countHelp = arrayCookieUser.$countHelp;
    var countEncyclo = arrayCookieUser.$countEncyclo;
    var number = 1; 
    var levelForHelp = 1; 
    var numberForEncyclo = 1; 
    var levelForEncyclo = 1; 

    for (var i = 0; i < countHelp; i++) {
        var thecontent = 'jeu'+levelForHelp+'astuce'+number,
            title = (isFr ? 'Niveau '+levelForHelp+' Aide n°'+number : 'Level '+levelForHelp+' Hint n°'+number);
        addHelp(title, content[thecontent]);
        if ((number % 3) == 0) {levelForHelp++; number = 1;} else {number++; }
    }
    var numberTitle = 0;
    for (var i = 0; i < countEncyclo; i++) {
        if ((numberForEncyclo % 2) == 0){
            numberTitle++;
            switch (numberTitle) {
                case 1:
                    var title = content['art1'];
                    break;
                case 2:
                    var title = content['art2'];
                    addEncyclo('Info 1', 'info1 blabla');
                    break;
                case 3:
                    var title = content['art3'];
                    addEncyclo('Info 2', 'info2 blabla');
                    break;
                case 4:
                    var title = content['art4'];
                    addEncyclo('Info 3', 'info3 blabla');
                    break;   
            }
        }else{ 
            var title = (isFr ? 'Niveau '+levelForEncyclo : 'Level '+levelForEncyclo);
        }
        var thecontent = 'encyclo'+numberForEncyclo+'jeu'+levelForEncyclo;
        addEncyclo(title, content[thecontent]);
        if ((numberForEncyclo % 2) == 0) {levelForEncyclo++; numberForEncyclo = 1;} else {numberForEncyclo++; }
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
    $('main').load(views+lang+'/accueil.html');
}

$.fn.loadLevel = function(levelToLoad, callback) {

    reinitMain();

    screen = levelToLoad;

    var file = views + lang + level+levelToLoad+'.html',
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
        if (name.indexOf("Info") != 0) {
            encycloNameTab.push(name);
            countEncyclo = encycloNameTab.length;
            arrayCookieUser.$countEncyclo = countEncyclo;
        } 
        counter++;
        createCookie(Username, arrayCookieUser, 20);
        if (name && content) {
            $tabArchiveTitle.push('<li data-link="content-'+counter+'">'+name+'</li>');
            $tabArchiveContent.push('<div id="content-'+counter+'" class="encycloPop " data-link="content-'+counter+'">'+content+'</div>');
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
            break;
        }
    }
    if (!exist) {
        helpNameTab.push(name);
        countHelp = $tabHelpTitle.length;
        arrayCookieUser.$countHelp = countHelp+1;
        createCookie(Username, arrayCookieUser, 20);
        if (name && content) {
            $tabHelpTitle.push('<li data-link="content-'+countHelp+'">'+name+'</li>');
            $tabHelpContent.push('<div id="content-'+countHelp+'" class="encycloPop " data-link="help-'+countHelp+'">'+content+'</div>');
        } 
    } else {
        return;
    }

}

function helpTitle(level, help) {
    var title = isFr ? 'Niveau '+level+' Aide n°'+help : 'Level '+level+' Help n°'+help;
    return title;
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

function finish() {
    var totalSucces = 8,
        nbSucces = (totalSucces - $tabSuccess.length),
        title = "", 
        content = "";

    if (totalSucces > $tabSuccess.length) {
        if (isFr) {
            title = "Félicitations !"; 
            content = 'Vous êtes venu à bout de toutes les épreuves, cependant il vous reste '+nbSucces+' succé(s) à débloquer! n\'hésitez pas à rejouer les activités. D\'autres groupes vous attendent dans le musée pour vous proposer d\'autres experiences'; 
        } else {
            title = "Congratulations !";
            content = 'Vous êtes venu à bout de toutes les épreuves, cependant il vous reste '+nbSucces+' succé(s) à débloquer! n\'hésitez pas à rejouer les activités. D\'autres groupes vous attendent dans le musée pour vous proposer d\'autres experiences'; 
        }
    } else {
        if (isFr) {
            title = "Félicitations !"; 
            content = 'Vous êtes venu à bout de toutes les épreuves en débloquant tous les succés!! Allez présenter cet écran aux résponssables pour recevoir une recompence! D\'autres groupes vous attendent dans le musée pour vous proposer d\'autres experiences'; 
        } else {
            title = "Congratulations !";
            content = 'Vous êtes venu à bout de toutes les épreuves en débloquant tous les succés!! Allez présenter cet écran aux résponssables pour recevoir une recompence! D\'autres groupes vous attendent dans le musée pour vous proposer d\'autres experiences'; 
        }
    }

    var $portalFinish = new Portal({
                title: title,
                notion: content,
                callback: 'portalLevel1()', 
                loadCallbackOnClose: true
            });
    
}
function unlockAllSuccess() {
    for (var i = 1; i < 9; i++) {
        var succes = 'succes'+i;
        addSuccess(succes); 
    }
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

function initEcrin() {
    $('main').addClass('flex');
    $('.background').addClass('none');
    $('.js-hamburger').show();
    ecrin = true;
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