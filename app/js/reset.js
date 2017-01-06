/********************
*
*   Fonctions de réinitialisation
*
*********************/

function resetCM() {

    if(codeMirror) {

        codeMirror.off();
        codeMirror.getWrapperElement().parentNode.removeChild(codeMirror.getWrapperElement());
        codeMirror=null;
        //console.log('cm = ' + codeMirror);
    }
}

function reinitMain() {
    //hidePopup();
    hideModal();
    resetCM();
    $('.hamburger').removeClass('is-active');
    $('#overlay').removeClass('open');
    $('.main-nav>ul').removeClass('childOpen');
    $('.main-nav .child').removeClass('isOpen');
    $('.help-button').hide();
    clearTimeout(timeOut);

    switch(screen) {
        case 'level1':
            resetLevel1(); 
            break;
        case 'level2':
            resetLevel2();
            break;
        case 'level3':
            resetLevel3();
            break;
        case 'level4':
            resetLevel4();
            break;
        case 'sandbox':
            resetSandbox();
            break;
        default:

    }
}

function resetLevel1() {

}

function resetLevel2() {
    $('.pixel').off()
    $('.runCode').off()
    $('.checkboxes input:checkbox').off();
}

function resetLevel3() {
    $('.square').off();
    $('.runCode').off()
    $('input[type=range]').off();
}

function resetLevel4() {
    $('.imageObject').off();
    $('.functions-btn .btn');
    $('.runCode').off()
    $('.reinitImg').off();

}

function resetSandbox() {

}

function reinitSandbox() {
    $('#sandboxWrapper').empty(); 
}
