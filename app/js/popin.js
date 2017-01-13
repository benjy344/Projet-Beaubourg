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
function Popin(options, override) {

    // this.open = this.defaultOpen(content);
    // this.close = this.defaultClose;
    if (!override) this.init(options);

}

Popin.prototype = {

    

    init: function(options) {
        this.$popin =      $(".js-popup");
        this.$ContentPopup = $('.content-popup');
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
        }
        //console.log(_default)
        //_default.$close = _default.$popin.find(".js-popin-close");
        //$.extend(this, _default);

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
            switch (_this.type) {
                    case 'popin':
                            _this.defaultOpen(); 
                        break;
                    case 'help':
                        _this.defaultOpen();
                        break;
                    case 'succes':
                        _this.defaultOpen();
                        break;
                    case 'encyclo':
                        _this.encycloOpen(content);
                        break;

                }
        }

        if (this.$close) {

            this.$close.off("click touch");
            this.$close.on( "click touch", function(e) { $.proxy(_this.defaultClose, _this, e)(); });

        }

        this.$overlay.off('click touch').on("click touch", function(e) {$.proxy(_this.defaultClose, _this, e)();});

        $(window).on("resize", $.proxy(this.resize, _this) );

    },

    updateOpenTriggers: function( $elements) {
        if (this.$open) {
            this.$open.off("click touch");
        }
        this.$open = $elements;
        var _this = this;
        this.$open.each(function() {
           $(this).on( "click touch", function(e) { 
                switch (_this.type) {
                    case 'popin':
                            _this.defaultOpen(); 
                        break;
                    case 'help':
                             _this.defaultOpen(); 
                        break;
                    case 'succes':
                             _this.defaultOpen(); 
                        break;
                    case 'encyclo':
                        _this.encycloOpen(content);
                        break;

                }
            });
        });
},

    /*
     * Builds the overlay and close button if necessary
     */
    buildElements: function() {

        if (!this.$close ) {

            this.$close = $("<div class='fleche js-fleche-popup' >c'est compris</div>");
            this.$popin.append(this.$close);

        }
        if (this.isSlider) {console.log('do slider')}

    },

    defaultOpen: function() {
        popinIsOpen = true;

        if (this.type === 'help') {
            isNewTip = true ;
            tipIsOpened = true;
            if ($('.help-button').hasClass('newTip')) {
                countip++;
                var title = 'Niveau '+countLevel+' Aide n°'+countip;
                addHelp(title, this.content);
                if (countip % 3 === 0) countip = 0;
                $('.help-button').removeClass('newTip');
            }
        }

        if (this.type === 'succes') {
            addSuccess(this.icon)
        }


        this.$ContentPopup.html(this.content);
        this.$overlay.removeClass("hide");
        this.$popin.removeClass("hide");
    },

    defaultClose: function(e) {
        if (popinIsOpen) {
            var _this = this;
            popinIsOpen = false;
            if (isNewTip) isNewTip=false;
            if (tipIsOpened) tipIsOpened=false;
            this.$ContentPopup.html('');
            this.$overlay.addClass("hide");
            this.$popin.addClass("hide");
            if (this.callback) eval(this.callback);
        }
    }

};

/*module.exports = modules.Popin = Popin;*/