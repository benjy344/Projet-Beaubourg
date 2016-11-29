var dest = './dist/';
var level = './app/views/levels/';
var views = './app/views/';

var Username = "";
var devMod = false;
var aleNumber = '';
var binaire = '';

$Popup = $('.popup');
$content_popup = $('.popup .content-popup');
$button = $('.js-fleche-popup');
$hoverlay = $('.hoverlay');
$popup_icon = $('.popup-icon i');


/********************

Chargement des levels et menu

*******************/


/********************
*
*   Choix du niveau 
*
*********************/
function loadChooseDevMod(){
    Showpopup(accueil, 'hidePopup()', '');
    Username = $('input#name').val();
    $('main').load(views+'chooseDevMod.html', function(){

        $('#input1, #input2').on('touch click', function(e) {
            isdebMod = $('input#input1:checked').val();
            if (isdebMod == 'on') {

                devMod = false;
            }
            else {devMod = true;} 
        }); 
    });
    $('#input1, #input2').off();
}



/********************
*
*   page de choix des chapitres 
*
*********************/
function loadChooseLevel(){
    $('main').load(views+'accueil.html');
}


/********************
*
*   Chapitre 1
*
*********************/
function loadlevel1() {
    $('.hamburger').show();
    showpop1C = "Showpopup(jeu1c, 'hidePopup()', '')";
    showpop1B = "Showpopup(jeu1b, showpop1C, '')";
    //Showpopup(jeu1a, showpop1B, '');
    
    
    if (devMod){
        $('main').load(level+'level1.html', function(){
            
            //generation du nombre aléatoir a 24 chiffres + creation d'une chaine binaire
            var heightNumber =  16;
            var min = Math.ceil(0);
            var max = Math.floor(9);
   
            for (var i = 0; i < heightNumber; i++){
                var alea = Math.floor(Math.random() * (max - min +1)) + min;
                if (alea % 2 == 0) {
                    binaire = binaire+'0';
                }
                else { binaire = binaire+'1'; }
                aleNumber = aleNumber+''+alea+''
            }
            $('.aleNumber').html(aleNumber);
            //generation des cases du tableau
            for (var i = 0; i < 3; i++){
                 $('.tableau ul:first-child').clone().appendTo( ".tableau" );
            }
               

            var div = $('.tableau ul li div');

            div.on('touch click', function(e) {
                $(this).toggleClass('white');
            });
        });
    }
    else {

        $('main').load(level+'level1.html', function(){
            //generation du nombre aléatoir a 12 chiffres
            var heightNumber =  12;
            min = Math.ceil(0);
            max = Math.floor(9);
   
            for (var i = 0; i < heightNumber; i++){
                var alea = Math.floor(Math.random() * (max - min +1)) + min;
                if (alea % 2 == 0) {
                    binaire = binaire+'0';
                }
                else { binaire = binaire+'1'; }
                aleNumber = aleNumber+''+alea+''
            }
            $('.aleNumber').html(aleNumber);
            //generation des cases du tableau
            for (var i = 0; i < 2; i++){
                 $('.tableau ul:first-child').clone().appendTo( ".tableau" );
            }
            var div = $('.tableau ul li div');
            

            div.on('touch click', function(e) {
                $(this).toggleClass('white');
            });
        });
    }    
}


/********************
*
*   Validation Chapitre 1
*
*********************/
function validChap1() {
    var chaineTableau = '';
    var div = $('.tableau ul li div');

    $(div).each(function() {
        if($( this ).hasClass( "white" )){
            chaineTableau = chaineTableau + '1';
        }
        else{
            chaineTableau = chaineTableau + '0';
        }
    });
    if (chaineTableau == binaire ) {
        Showpopup(jeu1d, 'loadlevel2()', 'succes iconAnim');
    }else{Showpopup('Mmmmh, il semble y avoir une erreur...', 'hidePopup()', 'error');}
}



/********************
*
*   Chapitre 2
*
*********************/
function loadlevel2() {
    hidePopup();
    showpop2C = "Showpopup(jeu2c, 'hidePopup()', '')";
    showpop2B = "Showpopup(jeu2b, showpop2C, '')";
    Showpopup(jeu2a, showpop2B, '');
    $('main').load(level+'level2.html', function(){
        var pixel = $('.tableau ul li .pixel');
        $(pixel).on('touch click', function(){
            $('#modal-container').removeAttr('class').addClass('openCode');
            $('body').addClass('modal-active');
      })
        $('.close').on('touch click', function(){
            $('#modal-container').addClass('out');
            $('body').removeClass('modal-active');
      })

    })
    
}

/********************
*
*   Chapitre 3
*
*********************/
function loadlevel3() {
    hidePopup();
    showpop3C = "Showpopup(jeu3c, 'hidePopup()', '')";
    showpop3B = "Showpopup(jeu3b, showpop3C, '')";
    Showpopup(jeu3a, showpop3B, '');
}


/********************
*
*   Chapitre 4
*
*********************/
function loadlevel4() {
    hidePopup();
    showpop4C = "Showpopup(jeu4c, 'hidePopup()', '')";
    showpop4B = "Showpopup(jeu4b, showpop4C, '')";
    Showpopup(jeu4a, showpop4B, '');
}


/********************
*
*   Chapitre 5
*
*********************/
function loadlevel5() {
    hidePopup();
}





/********************
*
*   Popup
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
function Showpopup(content, loadfonction, icon){
    if ($Popup) {
        $content_popup.html(''+content+'');
        if (loadfonction) {$button.attr("onclick", ''+loadfonction+'');} else {$button.attr("onclick", 'hidePopup()');}
        if(icon) {$popup_icon.attr('class', 'icon icon-'+icon+'') } else {$popup_icon.attr('class', '')};
        $Popup.removeClass('hide');
        $hoverlay.removeClass('hide');
    };
}


/**
* hidePopup
* function de clean des popups
**/
function hidePopup() {
    $content_popup.html('');
    $button.attr("onclick", '');
    $popup_icon.attr('class', '');
    $Popup.addClass('hide');
    $hoverlay.addClass('hide');
}



/**
* open popup code
* inactive 
**/
// $('.button').on('touch click', function(){
//   var buttonId = $(this).attr('id');
//   $('#modal-container').removeAttr('class').addClass(buttonId);
//   $('body').addClass('modal-active');
// })

// $('#modal-container .close').on('touch click',function(){
//   $('#modal-container').addClass('out');
//   $('body').removeClass('modal-active');
// });

/*********************

    Popup Aide

********************/
// level = 'dev';
// time = 2000;
// numberOftips = 3;
// tips = {
//   0 : 'blabla1',
//   1 : 'blabla2',
//   2 : 'blabla'
// }
// nb = 0;
function constructTips(level, time, numberOftips, tips ) {
    if (level === 'dev') {

        var number = 0
        setTimeout( function(){getATip(number, time, tips, numberOftips)} , time);

       
    } else {

    }
}


function getATip(number, time, tips, total) {

    // ... Fabriquer la popup
    console.log('aide numero' + number);

    //if (nb === 2){ duration = 1000 } else { duration = 3000 } 
    number++;
    if (number < total) {
        setTimeout( function(){getATip(number, time, tips, total)} , time);
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
    encyclo = $('.encyclo ul');
    archive = $('.archive');
    countEncyclo = encyclo.children().length;
    if (name && content) {
        encyclo.prepend('<li class="encycloLink"><a href="#" data-link="'+countEncyclo+'">'+name+'</a></li>');
        archive.prepend('<li data-link="'+countEncyclo+'">'+content+'</li>');
    }
}

/*********************

Implementation des success 

********************/

// ici tout le contenu designé sera stoqué en tant trophé dans la pages des success 
// en param de la fonction => 
/**
* Nom du success ( titre du li)
* class de l'icon du success
*
*/
function addSuccess (name, icon) {
    gallery = $('.successGalery ul');
    if (name && icon) {
        gallery.prepend('<li class="succes"><i class="icon icon-'+icon+'"></i><p>'+name+'</p></li>');
    }
}






$(document).ready(function() {
    Username = $('input#name').val();
    $('.hamburger').hide();
    
    $('.hamburger, #overlay').on('touch click', function() {
            $('.hamburger').toggleClass('is-active');
            $('#overlay').toggleClass('open');
        });

    $('.loading').slideUp(1000);

    $("#name").on('keyup', function (e) {
        if (e.keyCode == 13) {
            loadChooseDevMod();
        }
    });
    /////////////////Formulaire
    // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        }).off();
    } 
});


/********************

Variable de textes

*********************/

//Présentation ouverture application
var accueil = '<p>Bonjour '+Username+' et bienvenue sur notre application !</p> <p>Afin de vous accompagner dans votre découverte du code informatique et de vous expliquer des notions sur le code informatique, nous avons mené une mission de “vulgarisation scientifique” du code informatique pour vous ! <br>Au fil des quelques jeux que nous vous avons préparez, vous allez découvrir des notions fondamentales sur la création d’une image numérique.</p> <p>Bonne chance et bon jeu !</p>';

//Jeu 1

//Présentation
var jeu1a = '<h1>Présentation de l\'oeuvre</h1><p>Vous vous trouvez actuellement devant l’oeuvre de François Morellet, 6 répartitions aléatoires de 4 carrés noirs et blancs d’après les chiffres. L’artiste a en fait représenté sous forme de carrés noirs et blancs les 24 premiers chiffres du chiffre PI, pour cela, il a choisi de mettre un carré blanc pour un chiffre impair et un carré noir pour un chiffre pair.</p>';

//Notion informatique
var jeu1b = '<h1>Explication de la notion abordée</h1><p>A travers cette activité, vous serez initié à la notion de pixel. Un pixel est le plus petit élément d\'une surface d\'affichage tel qu’un ordinateur, un téléviseur, votre téléphone portable ou encore une tablette.</p>';

//Explication du jeu
var jeu1c = '<h1>Explication du jeu</h1><p>Vous disposerez d’un nombre aléatoire qu’il faudra reproduire à la méthode de Morelet, un pixel éteint pour un chiffre pair et allumé pour un chiffre impair.</p>';

//Oeuvre suivante
var jeu1d = '<p>Bravo ! Vous avez réussi le mini-jeu !<br>La prochaine activité sera inspirée d’une oeuvre de Ellsworth Kelly, elle se trouve sur votre droite.</p>';

//Astuce
var jeu1astuce1 = '<p>Cliquez sur chaque cases pour changer la couleur du carré.</p>';
//Astuce
var jeu1astuce2 = '<p>Pair : Noir<br>Impair : Blanc</p>';
//Astuce
var jeu1astuce3 = '<p>0 : Noir<br>1 : Blanc<br>2 : Noir<br>3 : Blanc<br>4 : Noir<br>5 : Blanc<br>6 : Noir<br>7 : Blanc<br>8 : Noir<br>9 : Blanc</p>';
//Astuce
var jeu1astuce4 = '<p>voici la réponse à vous de la recopier !</p>';

//Jeu 2

//Présentation
var jeu2a = '<h1>Présentation de l\'oeuvre</h1><p>Vous vous trouvez devant une oeuvre de Elisworth Kelly, Kite II. C’est en fait un assemblage bord à bord de carrés noir et colorés et de rectangles blancs. Il montre ici un rythme, un vide par le blanc, et un plein par la couleur et le noir. Les couleurs sont un mélange entre les couleurs primaires naturelles (rouge, bleu et jaune) et numérique (rouge, bleu et vert).</p>';

//Notion informatique
var jeu2b = '<h1>Explication de la notion abordée</h1><p>Vous allez ici être initié à la couleur. En numérique, ce n’est pas les couleurs primaires qui sont utilisées mais les couleurs additives, le RVB : Rouge, Vert et Bleu. Et c’est en additionnant ces couleurs que vous obtiendrez les autres couleurs.</p>';

//Explication du jeu
var jeu2c = '<h1>Explication du jeu</h1><p>Reproduisez le tableau en allumant ou en éteignant les boutons :<br>R : Rouge<br>V : Vert<br>B : Bleu</p>';

//Oeuvre suivante
var jeu2d = '<p>Bravo ! Vous avez réussi le mini-jeu !<br>Regardez sur votre droite, la prochaine activité vous attend ! Elle sera basé sur une oeuvre de François Morellet, et voilà à quoi elle ressemble :</p>';

//Astuce
var jeu2astuce1 = '<p>Voici le diagramme des couleurs additives.</p>';
//Astuce
var jeu2astuce2 = '<p>Voici comment créer les couleurs qui vous seront utiles :<br>Jaune : RV : allumés, B : éteins<br>Blanc : RVB : allumés<br>Noir : RVB : éteins</p>';
//Astuce
var jeu2astuce3 = '<p>Voici la réponse du jeu, à vous de la recopier !</p>';

//Jeu 3

//Présentation
var jeu3a = '<h1>Présentation de l\'oeuvre</h1><p>Vous voici devant une oeuvre de François Morollet, du jaune au violet. Ici, l’artiste nous montre qu’il y a deux manières de passer de la couleur jaune à la couleur violette, tout d’abord en passant par le vert et le bleu puis en passant par le orange et le rouge. Si vous y regardez de plus près, vous verrez même qu’il joue avec l’épaisseur de trait jaune, rouge et violet, ou jaune, bleu et vert, pour former ce dégradé.</p>';

//Notion informatique
var jeu3b = '<h1>Explication de la notion abordée</h1><p>Nous allons ici vous initier aux nuances de couleurs. C’est en fait en mélangeant trois couleurs numérique (Rouge, Vert et Bleu) que nous pouvons créer de nouvelles couleurs.</p>';

//Explication du jeu
var jeu3c = '<h1>Explication du jeu</h1><p>Vous allez devoir reproduire les différentes nuances de couleur du tableau, en jouant avec l’intensité de chaque couleur additives, pour au final réussir à reproduire un dégradé du jaune au violet !</p>';

//Oeuvre suivante
var jeu3d = '<p>Bravo ! Vous avez réussi le mini-jeu !<br>L’oeuvre suivante est une oeuvre de François Morellet. Elle se trouve sur votre droite. Voilà à quoi elle ressemble :</p>';

//Astuce
var jeu3astuce1 = '<p>Jouez sur l\intensité des couleurs RVB, de 0 à 255.</p>';
//Astuce
var jeu3astuce2 = '<p>Voici le diagramme des couleurs !</p>';
//Astuce
var jeu3astuce3 = '<p>Voici la réponse, à vous de récopier correctement pour passer à l\'étape suivante.</p>';

//Jeu 4

//Présentation
var jeu4a = '<h1>Présentation de l\'oeuvre</h1><p>L’oeuvre sur laquelle nous nous sommes basée pour cette activité est une oeuvre de François Morellet, intitulé 3*3. C’est une disposition de 9 carrés identiques, positionné de manière différente sur la toile. C’est cette notion de rotation et de déplacement qui nous a inspiré à la création de l’activité que nous vous proposons. </p>';

//Notion informatique
var jeu4b = '<h1>Explication de la notion abordée</h1><p>A partir de 9 images identiques superposées, vous devrez reproduire le tableau de Morellet en  modifiant le code informatique pour changer la position et la rotation des éléments. A vous de jouer !</p>';

//Explication du jeu
var jeu4c = '<h1>Explication du jeu</h1><p>Vous allez maintenant aborder la notion de motifs, de formes et de leur positionnement dans l’espace. <br>Comme vous le verrez, certaines lignes de code permettent d’appliquer des transformations mineures aux images telles que des rotations, des déplacements ou encore des redimensionnements. </p>';

//Oeuvre suivante
var jeu4d = '<p>Bravo !</p>';

//Astuce
var jeu4astuce1 = '<p></p>';
//Astuce
var jeu4astuce2 = '<p></p>';
//Astuce
var jeu4astuce3 = '<p></p>';


//Félicitation fin du jeu
var felicitation = '<p>Bravo ! Vous venez de finir la dernière activité ! Êtes-vous prêt à faire marcher votre imagination pour mettre en application les notions que vous venez de découvrir ? Rendez-vous dans la sandbox !</p>';

//Sandbox
var textsandbox = '<p>Vous avez complété toutes les activités ! Félicitations !</p> <p>Nous vous proposons une dernière animation pour résumer les connaissances que vous venez d\'acquérir.</p><p>Nous vous invitons maintenant à expérimenter toutes les notions que vous venez de découvrir, à votre guise et sans contraintes !</p>';

//FinSandbox
var finsandbox = '<p>Bravo ! Vous vous venez de compléter toutes les activités de notre atelier !</p> <p>Nous espérons que nous vous aurons permis d’apprendre et de comprendre les notions de base de l’informatique, et qui sait, de faire naître une nouvelle passion ! </p>';












