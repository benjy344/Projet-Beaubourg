function Swipe(t, n) {
    "use strict";

    function e() {
        h = E.children, w = Array(h.length), m = t.getBoundingClientRect().width || t.offsetWidth, E.style.width = h.length * m + "px";
        for (var n = h.length; n--;) {
            var e = h[n];
            e.style.width = m + "px", e.setAttribute("data-index", n), f.transitions && (e.style.left = n * -m + "px", a(n, b > n ? -m : n > b ? m : 0, 0))
        }
        f.transitions || (E.style.left = b * -m + "px"), t.style.visibility = "visible"
    }

    function i() {
        b ? r(b - 1) : n.continuous && r(h.length - 1)
    }

    function o() {
        h.length - 1 > b ? r(b + 1) : n.continuous && r(0)
    }

    function r(t, e) {
        if (b != t) {
            if (f.transitions) {
                for (var i = Math.abs(b - t) - 1, o = Math.abs(b - t) / (b - t); i--;) a((t > b ? t : b) - i - 1, m * o, 0);
                a(b, m * o, e || T), a(t, 0, e || T)
            } else d(b * -m, t * -m, e || T);
            b = t, v(n.callback && n.callback(b, h[b]))
        }
    }

    function a(t, n, e) {
        s(t, n, e), w[t] = n
    }

    function s(t, n, e) {
        var i = h[t],
            o = i && i.style;
        o && (o.webkitTransitionDuration = o.MozTransitionDuration = o.msTransitionDuration = o.OTransitionDuration = o.transitionDuration = e + "ms", o.webkitTransform = "translate(" + n + "px,0)" + "translateZ(0)", o.msTransform = o.MozTransform = o.OTransform = "translateX(" + n + "px)")
    }

    function d(t, e, i) {
        if (!i) return E.style.left = e + "px", void 0;
        var o = +new Date,
            r = setInterval(function() {
                var a = +new Date - o;
                return a > i ? (E.style.left = e + "px", y && c(), n.transitionEnd && n.transitionEnd.call(event, b, h[b]), clearInterval(r), void 0) : (E.style.left = (e - t) * (Math.floor(100 * (a / i)) / 100) + t + "px", void 0)
            }, 4)
    }

    function c() {
        p = setTimeout(o, y)
    }

    function u() {
        y = 0, clearTimeout(p)
    }
    var l = function() {},
        v = function(t) {
            setTimeout(t || l, 0)
        },
        f = {
            addEventListener: !!window.addEventListener,
            touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            transitions: function(t) {
                var n = ["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"];
                for (var e in n)
                    if (void 0 !== t.style[n[e]]) return !0;
                return !1
            }(document.createElement("swipe"))
        };
    if (t) {
        var h, w, m, E = t.children[0];
        n = n || {};
        var p, x, b = parseInt(n.startSlide, 10) || 0,
            T = n.speed || 300,
            y = n.auto || 0,
            L = {},
            g = {},
            k = {
                handleEvent: function(t) {
                    switch (t.type) {
                        case "touchstart":
                            this.start(t);
                            break;
                        case "touchmove":
                            this.move(t);
                            break;
                        case "touchend":
                            v(this.end(t));
                            break;
                        case "webkitTransitionEnd":
                        case "msTransitionEnd":
                        case "oTransitionEnd":
                        case "otransitionend":
                        case "transitionend":
                            v(this.transitionEnd(t));
                            break;
                        case "resize":
                            v(e.call())
                    }
                    n.stopPropagation && t.stopPropagation()
                },
                start: function(t) {
                    var n = t.touches[0];
                    L = {
                        x: n.pageX,
                        y: n.pageY,
                        time: +new Date
                    }, x = void 0, g = {}, E.addEventListener("touchmove", this, !1), E.addEventListener("touchend", this, !1)
                },
                move: function(t) {
                    if (!(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                        n.disableScroll && t.preventDefault();
                        var e = t.touches[0];
                        g = {
                            x: e.pageX - L.x,
                            y: e.pageY - L.y
                        }, x === void 0 && (x = !!(x || Math.abs(g.x) < Math.abs(g.y))), x || (t.preventDefault(), u(), g.x = g.x / (!b && g.x > 0 || b == h.length - 1 && 0 > g.x ? Math.abs(g.x) / m + 1 : 1), s(b - 1, g.x + w[b - 1], 0), s(b, g.x + w[b], 0), s(b + 1, g.x + w[b + 1], 0))
                    }
                },
                end: function() {
                    var t = +new Date - L.time,
                        e = 250 > Number(t) && Math.abs(g.x) > 20 || Math.abs(g.x) > m / 2,
                        i = !b && g.x > 0 || b == h.length - 1 && 0 > g.x,
                        o = 0 > g.x;
                    x || (e && !i ? (o ? (a(b - 1, -m, 0), a(b, w[b] - m, T), a(b + 1, w[b + 1] - m, T), b += 1) : (a(b + 1, m, 0), a(b, w[b] + m, T), a(b - 1, w[b - 1] + m, T), b += -1), n.callback && n.callback(b, h[b])) : (a(b - 1, -m, T), a(b, 0, T), a(b + 1, m, T))), E.removeEventListener("touchmove", k, !1), E.removeEventListener("touchend", k, !1)
                },
                transitionEnd: function(t) {
                    parseInt(t.target.getAttribute("data-index"), 10) == b && (y && c(), n.transitionEnd && n.transitionEnd.call(t, b, h[b]))
                }
            };
        return e(), y && c(), f.addEventListener ? (f.touch && E.addEventListener("touchstart", k, !1), f.transitions && (E.addEventListener("webkitTransitionEnd", k, !1), E.addEventListener("msTransitionEnd", k, !1), E.addEventListener("oTransitionEnd", k, !1), E.addEventListener("otransitionend", k, !1), E.addEventListener("transitionend", k, !1)), window.addEventListener("resize", k, !1)) : window.onresize = function() {
            e()
        }, {
            setup: function() {
                e()
            },
            slide: function(t, n) {
                r(t, n)
            },
            prev: function() {
                u(), i()
            },
            next: function() {
                u(), o()
            },
            getPos: function() {
                return b
            },
            kill: function() {
                u(), E.style.width = "auto", E.style.left = 0;
                for (var t = h.length; t--;) {
                    var n = h[t];
                    n.style.width = "100%", n.style.left = 0, f.transitions && s(t, 0, 0)
                }
                f.addEventListener ? (E.removeEventListener("touchstart", k, !1), E.removeEventListener("webkitTransitionEnd", k, !1), E.removeEventListener("msTransitionEnd", k, !1), E.removeEventListener("oTransitionEnd", k, !1), E.removeEventListener("otransitionend", k, !1), E.removeEventListener("transitionend", k, !1), window.removeEventListener("resize", k, !1)) : window.onresize = null
            }
        }
    }
}(window.jQuery || window.Zepto) && function(t) {
    t.fn.Swipe = function(n) {
        return this.each(function() {
            t(this).data("Swipe", new Swipe(t(this)[0], n))
        })
    }
}(window.jQuery || window.Zepto);