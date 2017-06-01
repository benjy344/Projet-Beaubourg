/**
* @file All the functions used in the mini-games
* @author François-Xavier Bresson
**/

/**
* @function addPixel
* @description Add pixel - Sandbox
**/
function addPixel() {
    var pixel = $('<div class="pixel js-pixel"></div>');
    pixel.data('rvb', {
        red: 0, 
        green: 0, 
        blue: 0
    }).data('pos', {
        x: 0,
        y: 0,
        rot: 0,
        scale: 4
    }).data('name', 'pixel_'+$(this).index());
    $('.js-sandboxwrapper').append(pixel);
    pixel.trigger('click');
}

/**
* @function ColorPixelRVB
* @description Use .pixel-active rvb data to color it, with 0 or 255 values - Level 2
**/
function colorPixelRVB() {
    
    var pixel = $('.pixel-active').data('rvb'),
        red = pixel.red ? 255 : 0, 
        green = pixel.green ? 255 : 0, 
        blue = pixel.blue ? 255 : 0;
    $('.pixel-active').css('background-color', 'rgb(' + red + ', ' + green + ', ' + blue + ')');
    colorModel(red, green, blue);
}

/**
* @function colorPixel
* @description Use .pixel-active rvb data to color it - Level 3 & Sandbox
**/
function colorPixel() {    
    var pixel = $('.pixel-active').data('rvb')
    $('.pixel-active').css('background-color', 'rgb(' + pixel.red + ', ' + pixel.green + ', ' + pixel.blue + ')');
    colorModel(pixel.red, pixel.green, pixel.blue);
}

/**
* @function colorModel
* @description Color the preview pixel in the modal - Levels 2, 3 & Sandbox
* @param {number} r - Red color value
* @param {number} g - Green color value
* @param {number} b - Blue color value
**/
function colorModel(r, g, b) {
    $('.pixel-model').css('background-color', 'rgb(' + r + ', ' + g + ', ' + b + ')');
}

/**
* @function resetCodePixel
* @description Change text in the Code Mirror editor in the modal - Levels 2, 3 & Sandbox
* @param {string} id - Current active pixel's id
* @param {number} r - Red color value
* @param {number} g - Green color value
* @param {number} b - Blue color value
**/
function resetCodePixel(id, r, g, b) {
    codeMirror.setValue('var ' + id + ' = {\n\tred : ' + r + ',\n\tgreen : ' + g + ',\n\tblue : ' + b + '\n};\n');
    //Used in previous developer version
    codeMirror.markText({line: 0, ch: 0}, {line: 1, ch: 7}, {readOnly: true, inclusiveLeft: true});
    codeMirror.markText({line: 2, ch: 0}, {line: 2, ch: 9}, {readOnly: true, inclusiveLeft: true});
    codeMirror.markText({line: 3, ch: 0}, {line: 3, ch: 8}, {readOnly: true, inclusiveLeft: true});
    if (screen != 'sandbox') {
        codeMirror.markText({line: 4, ch: 0}, {line: 5, ch: 0}, {readOnly: true, inclusiveLeft: true});
    }
}

/**
* @function resetCheckboxes
* @description Reset checkboxes to current active pixel value - Level 2
* @param {number} r - Red color value
* @param {number} g - Green color value
* @param {number} b - Blue color value
**/
function resetCheckboxes(r, g, b) {
    var red = r ? 255 : 0, 
        green = g ? 255 : 0, 
        blue = b ? 255 : 0;
    $('input.red').prop('checked', r).parent().css('background-color', 'rgb(' + red + ', 0, 0)');
    $('input.green').prop('checked', g).parent().css('background-color', 'rgb(0, ' + green + ', 0)');
    $('input.blue').prop('checked', b).parent().css('background-color', 'rgb(0, 0, ' + blue + ')');
    colorModel(red, green, blue);
}

/**
* @function resetSliders
* @description Reset sliders to current active pixel values - Level 3 & Sandbox
* @param {number} r - Red color value
* @param {number} g - Green color value
* @param {number} b - Blue color value
**/
function resetSliders(r, g, b) {
    $('input.red').prop('disabled', '').val(r).parent().css('background-color', 'rgb('+r+', 0, 0)').removeClass('validated');
    $('input.green').prop('disabled', '').val(g).parent().css('background-color', 'rgb(0, '+g+', 0)').removeClass('validated');
    $('input.blue').prop('disabled', '').val(b).parent().css('background-color', 'rgb(0, 0, '+b+')').removeClass('validated');
    colorModel(r, g, b);
}

/**
* @function disableSliders
* @description Lock sliders if the correct color value has been applied - Level 3
* @param {object} validated - .pixel's data defining if the colors components have been valitaed or not 
**/
function disableSliders(validated) {
    $.each(validated, function(color, disabled) {
        if (disabled) {
            $('input.'+color).prop('disabled', 'disabled').parent().addClass('validated');
            if (!isFailedOnce) {
                isFailedOnce = true;
                popinExplainLevel3();
            }
        }
    });
}

/**
* @function reinitImg
* @description Reset level 4 - Level 4
**/
function reinitImg() {
    $('.js-framewrapper .js-image-object').each(function () {
        $(this).data('pos', {
            x: 0,
            y: 0,
            rot: 0
        });
        $(this).attr('style', '');
    });
}

/**
* @function reinitSandbox
* @description Reset sandbox - Sandbox
**/
function reinitSandbox() {
    $('#sandboxWrapper').empty(); 
}

/**
* @function addCode
* @description Add code and corresponding comment to Code Mirror Editor when pressing move, rotate or scale buttons - Level 4 & Sandbox
* @param {object} btn - Button HTML element
**/
function addCode(btn) {
    var cmContent = codeMirror.getValue(),
        fn = btn.html(),
        comment = '',
        deg = screen == 'sandbox' ? '22.5' : '90'; 

    switch (btn.attr('data-function')) {
        case 'left':
            comment = (isFr ? '//Déplacer de 1 case à gauche' : '//Move one square left' );
            break;
        case 'right':
            comment = (isFr ? '//Déplacer de 1 case à droite' : '//Move one square right' );
            break;
        case 'up':
            comment = (isFr ? '//Déplacer de 1 case en haut' : '//Move one square up' );
            break;
        case 'down':
            comment = (isFr ? '//Déplacer de 1 case en bas' : '//Move one square down' );
            break;
        case 'rotate':
            comment = (isFr ? '//Touner de '+deg+' degrés dans le sens horaire' : '//Rotate '+deg+' degrees clockwise' );
            break;
        case 'scaleUp':
            comment = (isFr ? '//Augmenter la taille' : '//Increase size' );
            break;
        case 'scaleDown':
            comment = (isFr ? '//Diminuer la taille' : '//Decrease size' );
            break;
        default:
            break;
    }
    codeMirror.setValue(cmContent + "\n" + comment + "\n" + fn);
}

/**
* @function moveLeft
* @description Move .img-active left
**/
function moveLeft() {
    var pos = $('.img-active').data('pos'); 
    pos.x--;
    $('.img-active').data('pos', pos);
}
/**
* @function moveRight
* @description Move .img-active right
**/
function moveRight() {
    var pos = $('.img-active').data('pos'); 
    pos.x++;
    $('.img-active').data('pos', pos);
}
/**
* @function moveUp
* @description Move .img-active up
**/
function moveUp() {
    var pos = $('.img-active').data('pos'); 
    pos.y--;
    $('.img-active').data('pos', pos);
}
/**
* @function moveDown
* @description Move .img-active down
**/
function moveDown() {
    var pos = $('.img-active').data('pos'); 
    pos.y++;
    $('.img-active').data('pos', pos);
}

/**
* @function rotate
* @description Rotate .img-active
* @param {number} deg - Numbre of degrees to rotate .img-active. If not specified, equals 90° if called in level 4 and 22.5 in the sandbox
**/
function rotate(deg) {
    deg = !deg ? screen == 'sandbox' ? 22.5 : 90 : deg
    var pos = $('.img-active').data('pos'); 
    pos.rot = pos.rot + deg;
    $('.img-active').data('pos', pos);
}

/**
* @function scaleUp
* @description Scale .img-active up
**/
function scaleUp() {
    var pos = $('.img-active').data('pos'); 
    pos.scale--;
    if (pos.scale < 2) {size = 2}
    $('.img-active').data('pos', pos);
}
/**
* @function scaleDown
* @description Scale .img-active down
**/
function scaleDown() {
    var pos = $('.img-active').data('pos'); 
    pos.scale++;
    if (pos.scale > 8) {size = 8}
    $('.img-active').data('pos', pos);
}

/**
* @function applyPosition
* @description Apply movement, rotation and scale to current active pixel - Level 4 & Sandbox
**/
function applyPosition() {
    var pos = $('.img-active').data('pos'); 

    if (screen == 'sandbox') {
        var scale = $('.img-active').data('pos', pos);
        scale = pos.scale;
        size = 100/scale;
        var sizepx = size + '%',
            posMax = scale - 1;
        //Limit position in the frame
        pos.x = pos.x > posMax ? posMax : (pos.x < 0) ? 0 : pos.x;
        pos.y = pos.y > posMax ? posMax : (pos.y < 0) ? 0 : pos.y;
        pos.rot %= 360;

        $('.img-active').css('width', sizepx).css('height', sizepx);
        $('.pixel-active')
            .css('transform', 'rotate('+pos.rot+'deg)')
            .css('left', pos.x * size + '%')
            .css('top', pos.y * size + '%');

    } else {
        //Limit position in the frame
        pos.x = pos.x > 1 ? 1 : (pos.x < -1) ? -1 : pos.x;
        pos.y = pos.y > 1 ? 1 : (pos.y < -1) ? -1 : pos.y;
        pos.rot %= 360;
        $('.img-active')
            .css('transform', 'rotate('+pos.rot+'deg)')
            .css('left', pos.x * 100 + '%')
            .css('top', pos.y * 100 + '%');
    }
}

/**
* @function resetCode
* @description Empty Code Mirror Editor
**/
function resetCode() {
    codeMirror.setValue('');
}

/**
* @function move
* @description Move the pixel
* @param {string} direction - Direction in which to move the pixel
* @param {number} repeat - Number of translations to apply
* @deprecated Was used to allow to move the pixels freely in developer mode
**/
function move(direction, repeat) {
    if (repeat && typeof repeat == 'number') {
        for (i = 0; i < repeat; i++) {
            move(direction);
        }
    } else {
        switch(direction) {
            case up:
            case haut:
                moveUp();
                break;
            case down:
            case bas:
                moveDown();
                break;
            case left:
            case gauche:
                moveLeft();
                break;
            case right:
            case droite:
                moveRight();
                break;
            default:
                
                break;
        }
    }
} 

/**
* @function setSelection
* @description Auto-select the next token to modify when pressing Enter
* @param {string} varType - Name of the type of the token to jump to
* @deprecated Code Mirror Editor is now in read-only
**/
function setSelection(varType) {
    var setPos = true,
        cm = codeMirror,
        currentPos = cm.getCursor(),
        line = currentPos.line,
        tokens,
        i; //Indice du token en cours

    //Commencer la recherche en début de ligne suivante si le curseur est en fin de ligne
    if (currentPos.ch == cm.getLine(line).length) {
        line++;
        currentPos.ch = 0;
    }
    tokens = cm.getLineTokens(line);
    i = 0; 
    //Commencer la recherche après la position actuelle du curseur
    while (tokens[i].end <= currentPos.ch) {
        i++;
    }
    //Commencer la recherche au token suivant si le token en cours est du bon type
    if (tokens[i].type == varType) {
        i++;
    }
    //Commencer la recherche a la ligne suivante si il n'y a plus de tokens sur la ligne
    if (typeof tokens[i] == 'undefined') {
        i = 0;
        line++;
        tokens = cm.getLineTokens(line);
    }

    //Début de la recherche
    //Tant que le token en cours n'est pas du bon type, on analyse le token suivant
    while (tokens[i].type != varType) {
        i++
        //Continuer la recherche a la ligne suivante si il n'y a plus de tokens sur la ligne
        if (typeof tokens[i] == 'undefined') {
            i = 0;
            line++;
            tokens = cm.getLineTokens(line);
        }
        //Il n'y a plus de tokens dans l'editeur. On arrete la boucle et !setPos pour ne pas effectuer les prochaines instructions
        if (line > codeMirror.lineCount()) {
            setPos = false;
            break;
        }
    }
    
    //Si on a trouvé un prochain token, le selectionne
    if (setPos) {
        cm.setSelection({
            line: line,
            ch: tokens[i].start
        }, {
            line: line,
            ch: tokens[i].end
        });
    } else {//Si on a pas trouvé de token, on vérifie qu'il y ait bien 3 tokens du bon type
        
        if ($('.cm-atom').length != 3) {
            alertErr();
        } else { //Si oui, unfocus l'editeur et lance le code
            if (screen == 'level2') {
                runCodeLevel2();
            } else if (screen == 'level3') {
                runCodeLevel3();
            }

            codeMirror.getInputField().blur();
        }
    }
}  

/**
* @function enterKeyMap
* @description Override the default actions when pressing Enter on the Code Mirror Editor
* @deprecated Code Mirror Editor is now in read-only
**/
function enterKeyMap() {
    var setPos = true,
        cm = codeMirror,
        currentPos = cm.getCursor(),
        line = currentPos.line,
        lineCount = cm.lineCount();

    if (line+1 != lineCount) {
        var linePos = line + 1,
            chPos = cm.getLine(linePos).length,
            lastChar = cm.getRange({line: linePos, ch: chPos-1}, {line: linePos, ch: chPos});

        if (lastChar == ',') {
            chPos -= 1;
        } 
        if (lastChar == ';') {
            if (screen != 'sandbox') {
                codeMirror.getInputField().blur();
            } else {
                cm.setCursor({line: 6, ch: 0})
            }

        } else {
            cm.setCursor({line: linePos, ch: chPos})
        }
    } else {
        CodeMirror.commands.newlineAndIndent(cm);
    }
}