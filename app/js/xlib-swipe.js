function Slider($delete) {
    if ($delete) {
        this.deleted()
    } else {
        this.init()
    };
};

Slider.prototype = {

    init: function() {
        // swipe min
        + function() {
            function t(t, i) {
                var n = this;
                n.data = {}, n.node = $(t), n.options = i, n.node.on("mousedown", function(t) {
                    n.start(t, {
                        x: t.clientX,
                        y: t.clientY
                    })
                }), n.node.on("mousemove", function(t) {
                    n.move(t, {
                        x: t.clientX,
                        y: t.clientY
                    })
                }), $(window).on("mouseup", function(t) {
                    n.end(t)
                }), n.node.on("touchstart", function(t) {
                    n.start(t, {
                        x: t.originalEvent.touches[0].clientX,
                        y: t.originalEvent.touches[0].clientY
                    })
                }), n.node.on("touchmove", function(t) {
                    n.move(t, {
                        x: t.originalEvent.touches[0].clientX,
                        y: t.originalEvent.touches[0].clientY
                    })
                }), $(window).on("touchend", function(t) {
                    n.end(t)
                })
            }
            t.prototype = {
                constructor: t,
                swipeStart: !1,
                swiping: !1,
                data: null,
                node: null,
                start: function(t, i) {
                    this.swipeStart = !0, this.data.start = i
                },
                move: function(t, i) {
                    this.swipeStart && this.data.start && (this.data.current = i, this.data.delta = {
                        x: this.data.start.x - this.data.current.x,
                        y: this.data.start.y - this.data.current.y
                    }, this.data.currentTime = Date.now(), this.swiping || (this.data.startTime = Date.now(), this.node.trigger("swipestart", this.data)), this.swiping = !0, this.node.trigger("swipe", this.data), this.options.doNotScroll instanceof Function && this.options.doNotScroll.call(this) && t.preventDefault())
                },
                end: function() {
                    this.data.delta && "number" == typeof this.data.delta.x && "number" == typeof this.data.delta.y && (this.data.currentTime = Date.now(), this.node.trigger("swipeend", this.data)), this.swipeStart = !1, this.swiping = !1, this.data = {}
                }
            }, $.fn.swipe = function(i) {
                return this.each(function() {
                    $(this).data("swipe") instanceof t || $(this).data("swipe", new t(this, i))
                })
            }
        }();
        // slider max
        +
        function() {
            function e(e, t, i) {
                function r(e) {
                    var t = d.find("li"),
                        r = Array.prototype.slice.call(t),
                        n = (this.tagName || "").toLowerCase(),
                        l = "number" == typeof e ? e : r.indexOf("li" == n ? this : s),
                        o = t.not(".active");

                    if ("button" == n && ++l, (0 > l || l > r.length - 1) && (l = 0), s != r[l]) {
                        t.removeClass("active");
                        var c = parseFloat(o.css("width")),
                            p = parseFloat(o.css("marginRight")),
                            u = parseFloat(a[0].offsetWidth),
                            f = -((c + p) * l + u / 2);

                        d.css("marginLeft", f),
                            s = r[l],
                            t.eq(l).addClass("active"),
                            i instanceof Function && i(l)
                    }
                }
                var s,
                    n = $('<div class="dots"><button class="icon icon-next"></button><ul></ul></div>'),
                    a = n.find("button"),
                    d = n.find("ul");

                return a.on("click", r),
                    d.on("click", "li", r),

                    e.forEach(function(e, t) {
                        var i = $("<li></li>");
                        t || (i.addClass("active"),
                                s = i[0]),
                            d.append(i)
                    }),
                    t.append(n),
                    r(), r
            }

            function t(e) {
                this.wrapper = $(e),
                    this.render()
            }
            t.prototype = {
                constructor: t,
                backlashPercent: 10,
                notSwipePercent: 4,
                scrollPercent: 2,
                swipeTime: 1e4,

                getSlideTime: function() {
                    return parseFloat(this.wrapper.data("slideTime") || this.wrapper.attr("slide-time"))
                },

                render: function() {
                    var t = this;
                    
                    t.wrapper.hasClass("dot-mode") && (t.dotMode = e(Array.prototype.slice.call(t.wrapper.find(".slide")).map(function() {
                                return ""
                            }),

                            t.wrapper,

                            function(e) {
                                e != t.currentSlideIndex && t.setCurrentSlide(e)
                            })),
                        t.wrapper.swipe({
                            doNotScroll: function() {
                                return t.delta.x > t.scrollPercent
                            }
                        }).on("swipestart", function() {}).on("swipe", function(e, i) {
                            t.wrapper.hasClass("swipe-mode") && (t.swipeData = i, t.move(e), t.swipeTime < i.currentTime - i.startTime && t.wrapper.data("swipe").end())
                        }).on("swipeend", function(e, i) {
                            if (t.wrapper.hasClass("swipe-mode")) {
                                var r = t.swipeTime >= i.currentTime - i.startTime,
                                    s = t.delta.x > t.backlashPercent;
                                var total_child = $('.slide').length,
                                	_$current = $('.current');                                  
                                if ($('.popencyclo').hasClass('open')) {total_child = $('.popencyclo .slide').length;_$current = $('.popencyclo .current')}
                                var prelastchild = total_child-1;
                                	

                                if (_$current.is(':first-child') && t.sign === -1) {
                                	t.setCurrentSlide(0);
                                } else if(_$current.is(':nth-child('+total_child+')') && t.sign === 1) {
                                	t.setCurrentSlide(total_child-1);                           
                                } else {t.setCurrentSlide(t.currentSlideIndex + (r && s ? t.sign : 0))}                           
                            }
                        }), t.setCurrentSlide(0)
                },
                move: function() {
                    if (this.delta = {
                            x: Math.abs(100 * this.swipeData.delta.x / this.wrapper[0].offsetWidth),
                            y: Math.abs(100 * this.swipeData.delta.y / this.wrapper[0].offsetHeight)
                        }, this.sign = this.swipeData.delta.x < 0 ? -1 : 1, !(this.delta.x <= this.notSwipePercent)) {
                        this.wrapper.find(".slide").removeClass("animating");
                        var e = -this.sign * this.delta.x,
                            t = this.getPreviousSlide(),
                            i = this.getCurrentSlide(),
                            r = this.getNextSlide();
                        this.wrapper.hasClass("swipe-mode") && (t.css("transform", "translate3d(" + (-100 + e) + "%,0,0)").css("-webkit-transform", "translate3d(" + (-100 + e) + "%,0,0)"), i.css("transform", "translate3d(" + e + "%,0,0)").css("-webkit-transform", "translate3d(" + e + "%,0,0)"), r.css("transform", "translate3d(" + (100 + e) + "%,0,0)").css("-webkit-transform", "translate3d(" + (100 + e) + "%,0,0)"))
                    }
                },
                getSlideIndex: function(e) {
                    var t = this.wrapper.find(".slide").length - 1;
                    return 0 > e && (e = t), e > t && (e = 0), e
                },
                getSlideByIndex: function(e) {
                    return this.wrapper.find(".slide").eq(this.getSlideIndex(e))
                },
                getCurrentSlide: function() {
                    return this.getSlideByIndex(this.currentSlideIndex)
                },
                getPreviousSlide: function() {           
                    return this.getSlideByIndex(this.currentSlideIndex - 1).not(this.getCurrentSlide())
                },
                getNextSlide: function() {
                    return this.getSlideByIndex(this.currentSlideIndex + 1).not(this.getCurrentSlide())
                },
                setCurrentSlide: function(e) {

                    var t = this,
                        i = t.wrapper.find(".slide").length - 1,//max
                        r = t.currentSlideIndex;
                    t.currentSlideIndex = t.getSlideIndex(e);
                    $button = $('.dots button');  
                    if(t.currentSlideIndex == i) {
                    	$button.hide();
                    } else {$button.show();}
                    var s = t.wrapper.find(".slide").removeClass("previous").removeClass("current").removeClass("next").removeClass("animating");
                    if (s.css("opacity", ""), t.wrapper.hasClass("swipe-mode") && s.css("transform", "").css("-webkit-transform", ""), t.getCurrentSlide().addClass("current"), t.getPreviousSlide().addClass("previous"), t.getNextSlide().addClass("next"), "number" == typeof r) {
                        var n = 0 === r && t.currentSlideIndex === i,
                            a = r === i && 0 === t.currentSlideIndex,
                            d = r < t.currentSlideIndex,
                            l = t.wrapper.data("swipe").swiping ? t.sign > 0 : !n && d || a,
                            o = t.wrapper.data("swipe").swiping ? t.delta.x > t.backlashPercent : !0;
                        t.getCurrentSlide().addClass("animating"),t[l ? o ? "getPreviousSlide" : "getNextSlide" : o ? "getNextSlide" : "getPreviousSlide"]().addClass("animating")
                    }
                    clearTimeout(t.timer);
                    var c = t.getSlideTime();
                    c && (t.timer = setTimeout(function() {
                        t.setCurrentSlide(t.currentSlideIndex + 1)
                    }, c)), t.dotMode && t.dotMode(t.currentSlideIndex)
                }
            }, $.fn.slider = function() {
                return this.each(function() {
                    $(this).data("slider") instanceof t || $(this).data("slider", new t(this))
                })
            }
        }(), $().ready(function() {
            $(".slider").slider()
        });

    },
    deleted: function() {
        delete this;
        $('.dots').remove();
    }
};