// add pixel
function addPixel() {
    var pixel = $('<div class="pixel js-pixel"></div>');

    pixel.data('rvb', {
        red: 0, 
        green: 0, 
        blue: 0
    })
        .data('pos', {
        x: 0,
        y: 0,
        rot: 0,
        scale: 4,
    }).data('name', 'pixel_'+$(this).index());

    $('.js-sandboxwrapper').append(pixel);
}

function colorPixelRVB() {
    //console.log(pixel)
    var pixel = $('.pixel-active').data('rvb')
    var red = 0,
        green = 0,
        blue = 0;
    if (pixel.red) {
        red = 255;
    }
    if (pixel.green) {
        green = 255;
    }
    if (pixel.blue) {
        blue = 255;
    }
    $('.pixel-active').css('background-color', 'rgb(' + red + ', ' + green + ', ' + blue + ')');

    colorModel(red, green, blue);
}

function colorPixel() {    
    var pixel = $('.pixel-active').data('rvb')

    $('.pixel-active').css('background-color', 'rgb(' + pixel.red + ', ' + pixel.green + ', ' + pixel.blue + ')');

    colorModel(pixel.red, pixel.green, pixel.blue);
}

function colorModel(r, g, b) {
    $('.pixel-model').css('background-color', 'rgb(' + r + ', ' + g + ', ' + b + ')')
}

function resetCodePixel(id, r, g, b) {
    codeMirror.setValue('var ' + id + ' = {\n\tred : ' + r + ',\n\tgreen : ' + g + ',\n\tblue : ' + b + '\n};\n');
    codeMirror.markText({line: 0, ch: 0}, {line: 1, ch: 7}, {readOnly: true, inclusiveLeft: true});
    codeMirror.markText({line: 2, ch: 0}, {line: 2, ch: 9}, {readOnly: true, inclusiveLeft: true});
    codeMirror.markText({line: 3, ch: 0}, {line: 3, ch: 8}, {readOnly: true, inclusiveLeft: true});
    if (screen != 'sandbox') {
        codeMirror.markText({line: 4, ch: 0}, {line: 5, ch: 0}, {readOnly: true, inclusiveLeft: true});
    }
}

function resetCheckboxes(r, g, b) {
    var valR, valG, valB;
    if (r) {valR = 255} else {valR = 0}
    if (g) {valG = 255} else {valG = 0}
    if (b) {valB = 255} else {valB = 0}
    $('input.red').prop('checked', r).parent().css('background-color', 'rgb(' + valR + ', 0, 0)')
    $('input.green').prop('checked', g).parent().css('background-color', 'rgb(0, ' + valG + ', 0)')
    $('input.blue').prop('checked', b).parent().css('background-color', 'rgb(0, 0, ' + valB + ')')

    colorModel(valR, valG, valB)
}

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
        line++
        tokens = cm.getLineTokens(line)
    }

    //Début de la recherche
    //Tant que le token en cours n'est pas du bon type, on analyse le token suivant
    while (tokens[i].type != varType) {
        i++
        //Continuer la recherche a la ligne suivante si il n'y a plus de tokens sur la ligne
        if (typeof tokens[i] == 'undefined') {
            i = 0;
            line++
            tokens = cm.getLineTokens(line)
        }
        //Il n'y a plus de tokens dans l'editeur. On arrete la boucle et !setPos pour ne pas effectuer les prochaines instructions
        if (line > codeMirror.lineCount()) {
            setPos = false;
            //console.log('should run code')
            break;
        }
    }
    //console.log('oui')
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
        //console.log('runcode')
        if ($('.cm-atom').length != 3) {
            alertErr();
            //console.log('nope')
        } else { //Si oui, unfocus l'editeur et lance le code
            if (screen == 'level2') {
                runCodeLevel2();
            } else if (screen == 'level3') {
                runCodeLevel3();
            }

            codeMirror.getInputField().blur();
        }
    }
    //console.log(tokens[i])
}

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
        CodeMirror.commands.newlineAndIndent(cm)
    }




    //var token = cm.getLineTokens(linePos);
    //    if (token.length < 2) {
    //        codeMirror.getInputField().blur();
    //    } else {
    //        cm.setCursor({line: linePos, ch: chPos})
    //    }
}

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

function addCode(btn) {
    var cmContent = codeMirror.getValue();

    var fn = btn.html();
    var comment = ''

    switch (btn.attr('data-function')) {
        case 'left':
            comment = '//Déplacer de 1 case à gauche';
            break;
        case 'right':
            comment = '//Déplacer de 1 case à droite';
            break;
        case 'up':
            comment = '//Déplacer de 1 case en haut';
            break;
        case 'down':
            comment = '//Déplacer de 1 case en bas';
            break;
        case 'rotate':
            comment = '//Touner de 90 degrés dans le sens horaire';
            break;
        case 'scaleUp':
            comment = '//Augmenter la taille'
            break;
        case 'scaleDown':
            comment = '//Diminuer la taille'
            break;
        default:
            break;
    }

    //console.log(cmContent, fn, comment);

    codeMirror.setValue(cmContent + "\n" + comment + "\n" + fn);
}

function moveLeft() {
    var pos = $('.img-active').data('pos'); 
    pos.x--;
    $('.img-active').data('pos', pos)
}
function moveRight() {
    var pos = $('.img-active').data('pos'); 
    pos.x++;
    $('.img-active').data('pos', pos)
}
function moveUp() {
    var pos = $('.img-active').data('pos'); 
    pos.y--;
    $('.img-active').data('pos', pos)
}
function moveDown() {
    //console.log('GOOOOOIIING DOOOWN')
    var pos = $('.img-active').data('pos'); 
    pos.y++;
    $('.img-active').data('pos', pos)
}
function rotate(deg) {

    if (screen == 'sandbox' && !deg) {
        deg = 22.5
    } else if (!deg) {
        deg = 90;
    }  
    var pos = $('.img-active').data('pos'); 
    pos.rot = pos.rot + deg;
    $('.img-active').data('pos', pos)
}
function move(direction, repeat) {
    if (repeat && typeof repeat == 'number') {
        for (i = 0; i < repeat; i++) {
            move(direction);
        }
    } else {
        //console.log('moving')
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
                console.log("error") //{DEV}   
                break;
        }
    }
} 
function scaleUp() {
    var pos = $('.img-active').data('pos'); 
    pos.scale--;
    if (pos.scale < 2) {size = 2}
    $('.img-active').data('pos', pos)
}
function scaleDown() {
    var pos = $('.img-active').data('pos'); 
    pos.scale++;
    if (pos.scale > 8) {size = 8}
    $('.img-active').data('pos', pos)
}

function applyPosition() {
    var pos = $('.img-active').data('pos'); 

    if (screen == 'sandbox') {

        var scale = $('.img-active').data('pos', pos);
        scale = pos.scale;
        size = 100/scale;
        var sizepx = size + '%'
        console.log(size)

        var posMax = scale - 1;
        console.log(posMax, posMax);
        pos.x = pos.x > posMax ? posMax : (pos.x < 0) ? 0 : pos.x;
        pos.y = pos.y > posMax ? posMax : (pos.y < 0) ? 0 : pos.y;
        pos.rot %= 360;
        console.log(pos.x, pos.y);

        $('.img-active').css('width', sizepx);
        $('.img-active').css('height', sizepx);
        $('.pixel-active').css('transform', 'rotate('+pos.rot+'deg)');
        $('.pixel-active').css('left', pos.x * size + '%');
        $('.pixel-active').css('top', pos.y * size + '%');

    } else {


        pos.x = pos.x > 1 ? 1 : (pos.x < -1) ? -1 : pos.x;
        pos.y = pos.y > 1 ? 1 : (pos.y < -1) ? -1 : pos.y;
        pos.rot %= 360;

        //console.log(pos.rot)

        $('.img-active').css('transform', 'rotate('+pos.rot+'deg)');

        $('.img-active').css('left', pos.x * 100 + '%');
        $('.img-active').css('top', pos.y * 100 + '%');
    }
}

function resetCode() {
    codeMirror.setValue('');
}

function resetSliders(r, g, b) {
    $('input.red').prop('disabled', '').val(r).parent().css('background-color', 'rgb('+r+', 0, 0)')
    $('input.green').prop('disabled', '').val(g).parent().css('background-color', 'rgb(0, '+g+', 0)')
    $('input.blue').prop('disabled', '').val(b).parent().css('background-color', 'rgb(0, 0, '+b+')')

    colorModel(r, g, b)
}

function disableSliders(validated) {
    $.each(validated, function(color, disabled) {
        console.log(color, disabled)
        if (disabled) {
            $('input.'+color).prop('disabled', 'disabled');
        }
    });
}

