/*
 * Tip is a module that constructs in an element and put it in the menu
 *
 * Args : object {
 *   $popin, $open, $close, $overlay, $popinWrapper :                   jQuery element
 *   closeButton :                                      true|false
 *   onOpen, onOpened, onClose, onClosed, onResize :    callback function
 *   type : popin|help\succes\encyclo
 * }
 *
 */

// $popin = new Tip({

//             content: 'blabla',
//             type: 'popin',
//             callback: 'loadIntro()'
//     });
function Tip(options) {
    //console.log(options.stop)
    if (options.stop) { this.stop(options)} else {this.init(options);}
}

Tip.prototype = {



    init: function(options) {
        this.duration = 42000;
        this.tips = "";
        this.number0fTips = 0;
        this.count = 0;
        this.$open = $('.help-button');
        this.setTimeOut = 0;
        this.level = 1;
        this.waitFor = 0;


        if (options) {
            if (options.tips) {
                this.tips = options.tips;
                this.number0fTips = Object.keys(this.tips).length;
            }
            if (options.duration) this.duration = options.duration;
            if (options.$open) this.$open = options.$open;
            if (options.level) this.level = options.level;
        }
        this.canIconstruct(this.tips[this.count]);
    },

    canIconstruct: function(tip) {
        var $this = this;
        if (this.level === countLevel ) {
            $this.waitFor = waitforPopinIsOpen(false, 500, 0, 'lunch constructTip false', $this.level, function() {
                $this.setTimeOut = setTimeout(function () {
                    $this.constructTip(tip)
                }, $this.duration)
            });

        } else {this.destroy()}

    },

    constructTip : function (tip) {
        var $this = this;
        if (this.level === countLevel ) {
            $this.waitFor = waitforPopinIsOpen(false, 500, 0, 'play->popinIsOpen false', $this.level, function() {
                $this.count++;
                $this.$open.show().addClass('newTip');
                if($this.$open.hasClass('first-tip')) {
                    var $explain = new Popin({
                        content: content['tipexplain'], 
                        callback: 'openFirstTip()'                   
                    });
                }
                isNewTip = true;
                title = isFr ? 'Aide n°' : 'Help n°'
                title += $this.count;
                var $popup = $popin = new Popin({
                    content: tip,
                    type: 'help',
                    helpTitle: title,
                    $popin: $('.js-popup-tip'),
                    $open: $this.$open
                });
                if($this.count<$this.number0fTips) { $this.canIconstruct($this.tips[$this.count])} else {$this.stop};
            });
        } else {this.destroy()}

    },

    stop : function (options) {
        var $this = this;
        clearTimeout($this.setTimeOut);
        $this.setTimeOut = 0;
        $this.waitFor = 0;
    },
    destroy: function(tip) {
        // Delete the variable that references the instance of the constructor.
        switch (tip) {
            case 'Tip1':
                clearTimeout(window.Tip1.setTimeOut);
                window.Tip1.setTimeOut = 0;
                window.Tip1 = undefined;
                delete window.Tip1;
                break;
            case 'Tip2':
                clearTimeout(window.Tip2.setTimeOut);
                window.Tip2.setTimeOut = 0;
                window.Tip2 = undefined;
                delete window.Tip2;
                break;
            case 'Tip3':
                clearTimeout(window.Tip3.setTimeOut);
                window.Tip3.setTimeOut = 0;
                window.Tip3 = undefined;
                delete window.Tip3;
                break;
            case 'Tip4':
                clearTimeout(window.Tip4.setTimeOut);
                window.Tip4.setTimeOut = 0;
                window.Tip4 = undefined;
                delete window.Tip4;
                break;
        }

    }

};

/*module.exports = modules.Popin = Popin;*/