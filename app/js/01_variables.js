/*
Choses a implementer

applyposition et applyColor pour la sandbox
*/

var dest = './dist/',
    level = './dist/views/levels/',
    views = './dist/views/',
    screen = 'index',
    countLevel = 0,

    Username = "",
    testing = false,
    aleNumber = '',
    binaire = '',

    codeMirror = null,

    answers = {},
    thisLvlAnswers = {},

    timeOut = 0,

    content = {};


var up = 'up',
    haut = 'up',
    down = 'down',
    bas = 'down',
    left = 'left',
    gauche = 'left',
    right = 'right',
    droite = 'right',
    plus = 'up',
    moins = 'down';

var which = 'left';

$.getJSON('dist/json/answers.json', function(data) {
    answers = data;
});

$.get("dist/content/content_fr.html", function(data) {
    $(data).filter('div').each(function(i) {
        var name = $(this).attr("id");
        content[name] = $(this).html()
    })
});



$Popup = $('.popup');
$content_popup = $('.popup .content-popup');
$button = $('.js-fleche-popup');
$hoverlay = $('.hoverlay');
$popup_icon = $('.popup-icon i');

popinIsOpen = false;
tipIsOpened = false;
isNewTip = false;

countip = 0;

$tabArchiveTitle = [];
$tabArchiveContent = [];
$tabSuccess = [];
$tabHelpTitle = [];
$tabHelpContent = [];

var level1IsVisited = false,
    level2IsVisited = false,
    level3IsVisited = false,
    level4IsVisited = false,
    sandboxIsVisited = false;

var intervale = 0,
    t = 0;