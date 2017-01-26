/*
 * Popin is a module that fades in an element over #popin-overlay
 *
 * Args : object {
 *   $popin, $open, $close, $overlay, $popinWrapper :                   jQuery element
 *   closeButton :                                      true|false
 *   onOpen, onOpened, onClose, onClosed, onResize :    callback function
 *   type : popin|help\succes\encyclo
 * }
 *
 */

    // $popin = new Popin({
                
    //             content: 'blabla',
    //             type: 'popin',
    //             callback: 'loadIntro()'
    //     });
function Popin(options) {
    this.init(options);
}

Popin.prototype = {

    

    init: function(options) {
        this.$popin =      $(".js-popup");
        this.$ContentPopup = $('.js-content-popup');
        this.$open= undefined;
        this.$overlay= $(".hoverlay");
        this.type= 'popin';
        this.content = '';
        this.isSlider = false;

        if (options) {
            if (options.type) this.type = options.type;
            if (options.content) this.content = options.content;
            if (options.$open) this.$open = options.$open;            
            if (options.callback) this.callback = options.callback;            
            if (options.isSlider) this.isSlider = options.isSlider;
            if (options.icon) this.icon = options.icon;
            if (options.helpTitle) this.helpTitle = options.helpTitle;
        }
        
        this.buildElements();
        this.addEventListeners();
        

    },
    /*
     * Adds listeners for open / close 
     */
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

        this.$overlay.off('click touch').on("click touch", function(e) {$.proxy(_this.defaultClose, _this, e)();});

    },

    updateOpenTriggers: function( $elements) {
        if (this.$open) {
            this.$open.off("click touch");
        }
        this.$open = $elements;
        var _this = this;
        this.$open.each(function() {
           $(this).on( "click touch", function(e) { 
                _this.defaultOpen(); 
            });
        });
},

    /*
     * Builds the overlay and close button if necessary
     */
    buildElements: function() {
        this.$ContentPopup.html(this.content);
        this.$popin.find('.js-fleche-popup').remove();
        if (this.$ContentPopup.find('.js-close-popup-encyclo').length) {
            this.$close = this.$ContentPopup.find('.js-close-popup-encyclo');
        } else {
            this.$close = $("<div class='fleche js-fleche-popup' >c'est compris</div>");
            this.$popin.append(this.$close);
        }            
    },

    defaultOpen: function() {
        popinIsOpen = true;

        if (this.type === 'help') {
            isNewTip = true ;
            tipIsOpened = true;
            if ($('.help-button').hasClass('newTip')) {
                var title = 'Niveau '+countLevel+' '+this.helpTitle;
                addHelp(title, this.content);
                $('.help-button').removeClass('newTip');
            }
        }

        if (this.type === 'succes') addSuccess(this.icon)
        
        if (this.type === 'encyclo') {
            var title = 'Niveau '+countLevel;
            addEncyclo(title, this.content);
        } 

        if (this.isSlider) $slider = new Slider()

        this.$overlay.removeClass("hide");
        this.$popin.removeClass("hide");
    },

    defaultClose: function(e) {
        if (popinIsOpen) {
            var _this = this;
            popinIsOpen = false;
            if (isNewTip) isNewTip=false;
            if (tipIsOpened) tipIsOpened=false;
            //this.$ContentPopup.html('');
            this.$overlay.addClass("hide");
            this.$popin.addClass("hide");
            if (this.callback) eval(this.callback);
        }
    }

};

/*module.exports = modules.Popin = Popin;*/