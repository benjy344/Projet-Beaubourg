/**
* @file Define Popin prototype
* @author  Benjamin Demaizière
**/

/*
 * Popin is a module that fades in an element over #popin-overlay
 *
 * Args : object {
 *   $popin, $open, $close, $overlay, $popinWrapper : jQuery element
 *   type : popin | help | succes | encyclo | info
 *   callback : string to eval 
 * }
 *
 */

/* $popin = new Popin({
*             content: 'blabla',
*             type: 'popin',
*             callback: 'loadIntro()'
*     });
*/

/**
 * Popin is a module that fades in an element over #popin-overlay
 * @constructor
 * @param {object} options - list of options.
 */
function Popin(options) {
    this.init(options);
}

Popin.prototype = {

    /**
    * @function init
    * @description Initialise Popin's options
    **/    
    init: function(options) {
        this.$popin   = $(".js-popup");
        this.$open    = undefined;
        this.$overlay = $(".js-overlay");
        this.type     = 'popin';
        this.content  = '';
        this.isSlider = false;

        if (options) {
            if (options.type)      this.type = options.type;
            if (options.$popin)    this.$popin = options.$popin;
            if (options.content)   this.content = options.content;
            if (options.$open)     this.$open = options.$open;            
            if (options.callback)  this.callback = options.callback;            
            if (options.isSlider)  this.isSlider = options.isSlider;
            if (options.icon)      this.icon = options.icon;
            if (options.helpTitle) this.helpTitle = options.helpTitle;
            if (options.title)     this.title = options.title;
        }

        this.buildElements();
        this.addEventListeners();
    },

    /**
    * @function addEventListeners
    * @description Adds listeners for open / close 
    **/     
    addEventListeners: function() {
        var _this = this;
        if (this.$open) {
            this.updateOpenTriggers( this.$open );
        }else {
            _this.defaultOpen(); 
        }

        if (this.$close) {

            this.$close.off("click touch");
            this.$close.on( "click touch", function(e) { $.proxy(_this.defaultClose, _this, e)(); });

        }
    },
    
    /**
    * @function updateOpenTriggers
    * @description Update the Open Trigger
    * @param {jquery element} $element - the new trigger element.
    **/   
    updateOpenTriggers: function($element) {
        if (this.$open) {
            this.$open.off("click touch");
        }
        this.$open = $element;
        var _this = this;
        this.$open.each(function() {
            $(this).on( "click touch", function(e) { 
                _this.defaultOpen(); 
            });
        });
    },

    /**
    * @function buildElements
    * @description Builds the overlay and close button if necessary
    **/ 
    buildElements: function() {
        this.$ContentPopup = this.$popin.find('.js-content-popup');
        if(this.type === "help") this.$overlay = $(".js-overlay-tips");
        if(this.type === "info") this.$overlay = $(".js-overlay-info");
        this.$ContentPopup.html(this.content);
        this.$popin.find('.js-fleche-popup').remove();
        if (this.$ContentPopup.find('.js-close-popup-encyclo').length) {
            this.$close = this.$ContentPopup.find('.js-close-popup-encyclo');
        } else {
            if (isFr) {
                this.$close = $("<div class='fleche js-fleche-popup' >c'est compris</div>");
            } else {
                this.$close = $("<div class='fleche js-fleche-popup' >got it</div>");
            }
            this.$popin.append(this.$close);
        }  
    },

    /**
    * @function defaultOpen
    * @description Open the popin
    **/ 
    defaultOpen: function() {
        popinIsOpen = true;

        if (this.type === 'help') {
            isNewTip = true ;
            tipIsOpened = true;
            if ($('.help-button').hasClass('newTip')) {
                var title = isFr ? 'Niveau ' : 'Level ';
                title += countLevel+' '+this.helpTitle;
                addHelp(title, this.content);
                $countHelp++;
                $('.help-button').removeClass('newTip');
            }
        }

        if (this.type === 'succes') addSuccess(this.icon)

        if (this.type === 'encyclo') {
            if(this.title) {var title = this.title }else {var title = isFr ? 'Niveau ' : 'Level '
            title += countLevel};
            addEncyclo(title, this.content);
        }
        if (this.type === 'info') {
            if(this.title) {var title = this.title };
            addEncyclo(title, this.content);
        } 

        if (this.isSlider) $slider = new Slider()

        this.$overlay.removeClass("hide");
        this.$popin.removeClass("hide");
    },

    /**
    * @function defaultClose
    * @description Close the popin
    **/ 
    defaultClose: function(e) {
        if (popinIsOpen) {
            var _this = this;
            popinIsOpen = false;
            if (this.type === "help") {
                if (isNewTip) isNewTip=false;
                if (tipIsOpened) tipIsOpened=false;
            }
            this.$overlay.addClass("hide");
            this.$popin.addClass("hide");
            if (this.callback) eval(this.callback);
        }
    }

};

/*module.exports = modules.Popin = Popin;*/