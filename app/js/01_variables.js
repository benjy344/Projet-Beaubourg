/*
Choses a implementer

applyposition et applyColor pour la sandbox
*/

var dest = './dist/',
    level = '/levels/',
    views = './dist/views/',
    screen = 'index',
    countLevel = 0,
    ecrin = false, 
    
    lang = "fr",
    isFr = true,

    Username = "",
    testing = false,
    aleNumber = '',
    binaire = '',

    codeMirror = null,

    answers = {},
    thisLvlAnswers = {},

    timeOut = 0,

    content = {};

var arrayCookieUser = {
    level1IsVisited: false,
    level2IsVisited: false,
    level3IsVisited: false,
    level4IsVisited: false,
    sandboxIsVisited: false,
    $tabSuccess : [],
    $countHelp : 0,
    $countip : 0,
    $countEncyclo : 0, 
    currentLevel:1
};

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

var textArea = $('.codeMirror')[0],
            codeConfig = {
                mode: "text/javascript",
                theme: "icecoder", 
                lineWrapping: true, 
                lineNumbers: true, 
                autofocus: false
                //matchBrackets: true
            };

$Popup = $('.js-popup');
$content_popup = $Popup.find('.js-content-popup');
$button = $('.js-fleche-popup');
$hoverlay = $('.js-overlay');
//$popup_icon = $('.popup-icon i');

popinIsOpen = false;
tipIsOpened = false;
isNewTip = false;

countip = 0,
counter = 0;

$tabArchiveTitle = [];
$tabArchiveContent = [];
$tabSuccess = [];
$tabHelpTitle = [];
$tabHelpContent = [];
encycloNameTab = [];
helpNameTab = [];

var level1IsVisited = false,
    level2IsVisited = false,
    level3IsVisited = false,
    level4IsVisited = false,
    sandboxIsVisited = false;

var $countHelp = 0,
    Tip1,
    tipsLevel1,
    Tip2,
    tipsLevel2,
    Tip3,
    tipsLevel3,
    Tip4,
    tipsLevel4,
    Tip5,
    tipsLevel5;

var startTime = 0,
    endTime =0;
var intervale = 0,
    t = 0;

var which = 'left';