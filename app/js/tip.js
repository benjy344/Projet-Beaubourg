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
        $this = this;
        ////console.log($this.canIconstruct())
        if (this.level === countLevel ) {

        $this.waitFor = waitforPopinIsOpen(false, 500, 0, 'play->popinIsOpen false', function() {
               $this.setTimeOut = setTimeout(function () {
                   $this.constructTip(tip)
               }, $this.duration)
            });
            
        } else {this.stop()}
            
    },

    constructTip : function (tip) {
        //console.log('constructTip')
        $this = this;
        if (this.level === countLevel ) {
        $this.waitFor = waitforPopinIsOpen(false, 500, 0, 'play->popinIsOpen false', function() {
                $this.count++;
                $this.$open.show().addClass('newTip');
                isNewTip = true;
                var $popup = $popin = new Popin({
                            content: tip,
                            type: 'help',
                            $open: $this.$open
                        });
                if($this.count<$this.number0fTips) {/*console.log('iteration ' + $this.count);*/$this.canIconstruct($this.tips[$this.count])} else {$this.stop};
                });
        } else {this.stop()}
        
    },

    stop : function (options) {
        $this = this;
        //console.log('stop');
        clearTimeout($this.setTimeOut);
        $this.setTimeOut = 0;
        $this.waitFor = 0;
    },
    destroy: function() {
        // Delete the variable that references the instance of the constructor.
        //console.log(Tip1)
        delete window.Tip1;
        window.Tip1.setTimeOut = 0;
        window.Tip1 = undefined;
        //console.log(Tip1)
      }

};

/*module.exports = modules.Popin = Popin;*/