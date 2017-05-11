/**
* @file Define all the variables used in the project
* @author François-Xavier Bresson & Benjamin Demaizière
**/

//Folders path
var dest = './dist/',
    level = '/levels/',
    views = './dist/views/',
    vrviews = './dist/assets/vrviews/',

    //Current screen
    screen = 'index',

    countLevel = 0,
    ecrin = false, 

    //Handle language
    lang = "fr",
    isFr = true,

    //Username and testing mode
    Username = "",
    testing = false,

    //Answers
    answers = {},
    thisLvlAnswers = {},

    timeOut = 0,

    //Text content
    content = {},

    arrayCookieUser = {
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
    },

    //VR view
    vrView,
    deviceOrientationData = {
        alpha: 0,
        beta: 0,
        gamma: 0
    },
    isMobile = typeof window.orientation != 'undefined' ? true : false,

    //Deprecated : used for move() function in developer mode
    up = 'up',
    haut = 'up',
    down = 'down',
    bas = 'down',
    left = 'left',
    gauche = 'left',
    right = 'right',
    droite = 'right',
    plus = 'up',
    moins = 'down',

    //Code Mirror
    codeMirror = null,
    textArea = $('.codeMirror')[0],
    codeConfig = {
        mode: "text/javascript",
        theme: "icecoder", 
        lineWrapping: true, 
        lineNumbers: true, 
        autofocus: false
        //matchBrackets: true
    },

    //Level 1
    aleNumber = '',
    binaire = '',

    //Level 3
    which = 'right',
    isFailedOnce = false;

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
    sandboxIsVisited = false,

    $countHelp = 0,
    Tip1,
    tipsLevel1,
    Tip2,
    tipsLevel2,
    Tip3,
    tipsLevel3,
    Tip4,
    tipsLevel4,
    Tip5,
    tipsLevel5,

    startTime = 0,
    endTime =0,
    intervale = 0,
    t = 0,

    // Scenes for the VR experience
    scenes = {
        sandbox: {
            image: 'test.jpg',
            hotspots: {
                level1: {
                    pitch: 0,
                    yaw: 0,
                    radius: 0.5,
                    distance: 1
                },
                level2: {
                    pitch: 0,
                    yaw: 150,
                    radius: 0.05,
                    distance: 1
                },
                level3: {
                    pitch: -5,
                    yaw: 150,
                    radius: 0.05,
                    distance: 1
                },
                level4: {
                    pitch: 0,
                    yaw: 150,
                    radius: 0.05,
                    distance: 1
                }
            }
        },
        level1: {
            image: '360.jpg',
            hotspots: {
                center: {
                    pitch: 0,
                    yaw: 110,
                    radius: 0.05,
                    distance: 1
                }
            }
        },
        level2: {
            image: '360.jpg',
            hotspots: {
                center: {
                    pitch: 0,
                    yaw: 110,
                    radius: 0.05,
                    distance: 1
                }
            }
        },
        level3: {
            image: '360.jpg',
            hotspots: {
                center: {
                    pitch: 0,
                    yaw: 110,
                    radius: 0.05,
                    distance: 1
                }
            }
        },
        level4: {
            image: '360.jpg',
            hotspots: {
                center: {
                    pitch: 0,
                    yaw: 110,
                    radius: 0.05,
                    distance: 1
                }
            }
        }
    };