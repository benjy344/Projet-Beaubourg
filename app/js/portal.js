/**
* @file
* @author Benjamin Demaizière
**/

/*
 * Portal is a module that hide load of the next level
 *
 * Args : object {
 *   title : string 
 *   notion : string 
 *   callback : string to eval 
 * }
 *
 */

/* $popin = new Portal({
*         
*             title: 'Titre',
*             notion: 'Notion',
*             callback: 'loadIntro()'
*     });
*/
function Portal(options) {
    this.init(options);
}

Portal.prototype = {

	init: function(options) {
		var _this       =   this;
        this.$portal    =   $(".js-level-portal");
        this.$title     =   this.$portal.find('.js-portail-title');
        this.$notion 	=   this.$portal.find(".js-notion-title");

        if (options) {
            if (options.title) this.title = options.title;
            if (options.notion) this.notion = options.notion;
            if (options.callback) this.callback = options.callback;
            if (options.loadCallbackOnClose) this.loadCallbackOnClose = options.loadCallbackOnClose;
        }
        
        this.$title.text(this.title);
        this.$notion.text(this.notion);

        this.onOpen();
        this.$portal.on('click touch', function(e) { $.proxy(_this.onClose, _this, e)(); });
    },

    onOpen: function() {
    	this.$portal.addClass('show');
    	this.$title.addClass('fade-in');
    	this.$notion.addClass('fade-in');
        var $this = this;
    	if(!this.loadCallbackOnClose) {
            setTimeout(function(){eval($this.callback)}, 1000);
        }else {
            this.$portal.addClass('last-portal');
        }
    },
    onClose: function(e) {
		this.$portal.removeClass('show').removeClass('last-portal');
		this.$title.removeClass('fade-in');
		this.$notion.removeClass('fade-in');
        if(this.loadCallbackOnClose) {this.loadCallbackOnClose = false; eval(this.callback)};
        delete this;
    },

}
