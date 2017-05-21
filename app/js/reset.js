/**
* @file Functions to reset the level, the variables, and detach event listener
* @author François-Xavier Bresson
**/

/**
* @function resetCM
* @description Remove the Code Mirror Editor
**/
function resetCM() {
    if(codeMirror) {
        codeMirror.off();
        codeMirror.getWrapperElement().parentNode.removeChild(codeMirror.getWrapperElement());
        codeMirror=null;
    }
}

/**
* @function reinitMain
* @description Main reset function, handle modal, menu, timeouts, and call specific level reset function
**/
function reinitMain() {
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

/**
* @function resetLevel1
* @description Reset function for level 1
**/
function resetLevel1() {
    $('.tableau ul li div').off();
}

/**
* @function resetLevel2
* @description Reset function for level 2
**/
function resetLevel2() {
    $('.js-framewrapper .js-pixel').off()
    $('.js-run-code').off()
    $('.js-apply-color').off()
    $('.checkboxes input:checkbox').off();
}

/**
* @function resetLevel3
* @description Reset function for level 3
**/
function resetLevel3() {
    $('.square').off();
    $('.js-run-code').off()
    $('.apply-color').off()
    $('#chooseFrameLvl3 input[type="radio"]').off();
}

/**
* @function resetLevel4
* @description Reset function for level 4
**/
function resetLevel4() {
    $('.js-image-object').off();
    $('.functions-btn .btn').off();
    $('.js-run-code').off()
    $('.reinit-img').off();

}

/**
* @function resetSandbox
* @description Reset function for the sandbox
**/
function resetSandbox() {
    $(document).off('touch click', '.js-sandboxwrapper .js-pixel');
    $('.js-change-color').off();
    $('.js-change-position').off();
    $('.js-reinit-sandbox').off();
    $('.js-add-pixel').off();
    $('input[type=range]').off();
    $('.js-run-code').off()
    $('.js-apply-color').off()
    $('.functions-btn .btn').off();
}