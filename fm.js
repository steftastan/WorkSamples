function onYouTubeIframeAPIReady() {
    fm.ui.videoPlayer.youtube_api_ready = !0;
    for (var e in fm.ui.videoPlayer.youtube_api_queue)
        if (fm.ui.videoPlayer.youtube_api_queue.hasOwnProperty(e)) {
            var t = fm.ui.videoPlayer.youtube_api_queue[e];
            t.bind.player = new YT.Player(e, t.params)
        }
}
if (function(e, t) {
        "use strict";
        if ("function" != typeof e.createEvent) return !1;
        var n, a, s, i, o, l, r, _, d = "undefined" != typeof jQuery,
            E = function(e) {
                var t = e.toLowerCase(),
                    n = "MS" + e;
                return navigator.msPointerEnabled ? n : t
            },
            c = !!navigator.pointerEnabled || navigator.msPointerEnabled,
            u = function() {
                return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || c
            },
            m = function(e) {
                var t = u(),
                    n = /mouse/.test(e.type);
                return !n && t && /touch/.test(e.type) && !c || !n && t && !/touch/.test(e.type) && c || n && !t
            },
            S = {
                touchstart: E("PointerDown") + " touchstart",
                touchend: E("PointerUp") + " touchend",
                touchmove: E("PointerMove") + " touchmove"
            },
            C = function(e, t, n) {
                for (var a = t.split(" "), s = a.length; s--;) e.addEventListener(a[s], n, !1)
            },
            A = function(e) {
                return e.targetTouches ? e.targetTouches[0] : e
            },
            T = function() {
                return (new Date).getTime()
            },
            L = function(t, s, i, o) {
                var l = e.createEvent("Event");
                if (l.originalEvent = i, o = o || {}, o.x = n, o.y = a, o.distance = o.distance, d && (l = $.Event(s, {
                        originalEvent: i
                    }), jQuery(t).trigger(l, o)), l.initEvent) {
                    for (var r in o) l[r] = o[r];
                    l.initEvent(s, !0, !0), t.dispatchEvent(l)
                }
                t["on" + s] && t["on" + s](l)
            },
            p = function(e) {
                if (m(e)) {
                    var t = A(e);
                    s = n = t.pageX, i = a = t.pageY, _ = setTimeout(function() {
                        L(e.target, "longtap", e), l = e.target
                    }, v), o = T(), y++
                }
            },
            f = function(e) {
                if (m(e)) {
                    var t = [],
                        d = T(),
                        E = i - a,
                        c = s - n;
                    if (clearTimeout(r), clearTimeout(_), -I >= c && t.push("swiperight"), c >= I && t.push("swipeleft"), -I >= E && t.push("swipedown"), E >= I && t.push("swipeup"), t.length)
                        for (var u = 0; u < t.length; u++) {
                            var S = t[u];
                            L(e.target, S, e, {
                                distance: {
                                    x: Math.abs(c),
                                    y: Math.abs(E)
                                }
                            })
                        } else s >= n - O && n + O >= s && i >= a - O && a + O >= i && o + N - d >= 0 && (L(e.target, 2 === y && l === e.target ? "dbltap" : "tap", e), l = e.target), r = setTimeout(function() {
                            y = 0
                        }, g)
                }
            },
            h = function(e) {
                if (m(e)) {
                    var t = A(e);
                    n = t.pageX, a = t.pageY
                }
            },
            I = t.SWIPE_THRESHOLD || 100,
            N = t.TAP_THRESHOLD || 150,
            g = t.DBL_TAP_THRESHOLD || 200,
            v = t.LONG_TAP_THRESHOLD || 1e3,
            O = t.TAP_PRECISION / 2 || 30,
            R = t.JUST_ON_TOUCH_DEVICES,
            y = 0;
        C(e, S.touchstart + (R ? "" : " mousedown"), p), C(e, S.touchend + (R ? "" : " mouseup"), f), C(e, S.touchmove + (R ? "" : " mousemove"), h)
    }(document, window), Array.prototype.reduce || (Array.prototype.reduce = function(e) {
        "use strict";
        if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        var t, n = Object(this),
            a = n.length >>> 0,
            s = 0;
        if (2 == arguments.length) t = arguments[1];
        else {
            for (; a > s && !(s in n);) s++;
            if (s >= a) throw new TypeError("Reduce of empty array with no initial value");
            t = n[s++]
        }
        for (; a > s; s++) s in n && (t = e(t, n[s], s, n));
        return t
    }), Array.prototype.includes || (Array.prototype.includes = function(e) {
        "use strict";
        var t = Object(this),
            n = parseInt(t.length) || 0;
        if (0 === n) return !1;
        var a, s = parseInt(arguments[1]) || 0;
        s >= 0 ? a = s : (a = n + s, 0 > a && (a = 0));
        for (var i; n > a;) {
            if (i = t[a], e === i || e !== e && i !== i) return !0;
            a++
        }
        return !1
    }), Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector
}
if (function() {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
            var a = (new Date).getTime(),
                s = Math.max(0, 16 - (a - e)),
                i = window.setTimeout(function() {
                    t(a + s)
                }, s);
            return e = a + s, i
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }(), Element && !Element.prototype.closest) {
    var proto = Element.prototype;
    proto.closest = proto.closest || function(e) {
        for (var t = this; t.matches && !t.matches(e);) t = t.parentNode;
        return t.matches ? t : null
    }
}
if (Element && !Element.prototype.parents) {
    var proto = Element.prototype;
    proto.parents = proto.parents || function(e) {
        for (var t = this, n = []; t;) n.unshift(t), t = t.parentNode;
        return n
    }
}! function() {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
        var a = (new Date).getTime(),
            s = Math.max(0, 16 - (a - e)),
            i = window.setTimeout(function() {
                t(a + s)
            }, s);
        return e = a + s, i
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    })
}(), Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }),
    function(e, t) {
        function n(t, n, o, l) {
            t[a](i + n, "wheel" == s ? o : function(t) {
                t || (t = e.event);
                var n = {
                    originalEvent: t,
                    target: t.target || t.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == t.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        t.preventDefault ? t.preventDefault() : t.returnValue = !1
                    }
                };
                return "mousewheel" == s ? (n.deltaY = -1 / 40 * t.wheelDelta, t.wheelDeltaX && (n.deltaX = -1 / 40 * t.wheelDeltaX)) : n.deltaY = t.detail, o(n)
            }, l || !1)
        }
        var a, s, i = "";
        e.addEventListener ? a = "addEventListener" : (a = "attachEvent", i = "on"), s = "onwheel" in t.createElement("div") ? "wheel" : void 0 !== t.onmousewheel ? "mousewheel" : "DOMMouseScroll", e.addWheelListener = function(e, t, a) {
            n(e, s, t, a), "DOMMouseScroll" == s && n(e, "MozMousePixelScroll", t, a)
        }
    }(window, document);
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.constants = {
    MOBILE_MAX_SIZE: 767,
    TABLET_MIN_SIZE: 768,
    TABLET_MAX_SIZE: 1024,
    TABLET_LANDSCAPE_ZOOM: .88888,
    PLATFORM_DEFAULT_PLAYER_ID: "VTgqZUqHro0s",
    ACTIVE_CLASS: "active",
    FIXED_CLASS: "fixed",
    HIDDEN_CLASS: "hidden",
    LOADER_CLASS: "js-loader",
    ELLIPSIS_CLASS: "js-ellipsis",
    READ_MORE_CLASS: "js-more",
    CURRENT_SLIDE: "js-currentSlide",
    PAGE_CLASS: "page",
    PAGE_MODULE_ATTR: "data-page",
    MODULE_CLASS: "module",
    FB_API_VERSION: "v2.5"
};
var $ = $ || {},
    fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.utils = fm.ui.utils || {}, fm.ui.utils.initializeModules = function(e, t) {
        var n = "",
            a = "",
            s = 0,
            i = null,
            o = e ? e : document;
        for (i = o.getElementsByClassName(fm.ui.constants.MODULE_CLASS), s = 0; s < i.length; s++)
            if (n = i[s], (t || "true" !== n.dataset.moduleStarted) && (loadModule = n.dataset.moduleLoad, (t || "false" !== loadModule) && (a = n.dataset.module, n.dataset.moduleStarted = "true", a))) {
                var l = new fm.ui[a](n);
                l.init && (l.init(), fm.clicktrack.init(n))
            }
    }, fm.ui.utils.initializePage = function() {
        var e = document.getElementsByClassName(fm.ui.constants.PAGE_CLASS),
            t = "",
            n = "";
        e.length && (t = e[0], e[0].hasAttribute(fm.ui.constants.PAGE_MODULE_ATTR) && (n = t.getAttribute(fm.ui.constants.PAGE_MODULE_ATTR), void 0 !== n && null !== n && n && fm.ui[n].init()))
    }, fm.ui.utils.guid = function() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    },
    function(e) {
        e.documentReady = function(e) {
            document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
                document.removeEventListener("DOMContentLoaded", arguments.callee, !1), e()
            }, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function() {
                "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), e())
            })
        }, e.jsonp = {
            callbackCounter: 0,
            fetch: function(e, t) {
                var n = "JSONPCallback_" + this.callbackCounter++;
                window[n] = this.evalJSONP(t, n), e = e.replace("=JSONPCallback", "=" + n);
                var a = document.createElement("SCRIPT");
                a.src = e, document.getElementsByTagName("HEAD")[0].appendChild(a)
            },
            evalJSONP: function(e, t) {
                return function(n) {
                    var a = !1;
                    if ("string" == typeof n) try {
                        a = JSON.parse(n)
                    } catch (s) {} else a = JSON.parse(JSON.stringify(n)), console.warn("response data was not a JSON string");
                    if (!a) throw "JSONP call returned invalid or empty JSON";
                    e(a), window[t] = void 0
                }
            }
        }, e.formatTime = function(e) {
            var t = e.getHours(),
                n = e.getMinutes(),
                a = t >= 12 ? "pm" : "am";
            t %= 12, t = t ? t : 12, n = 10 > n ? "0" + n : n;
            var s = t + ":" + n + " " + a;
            return s
        }, e.addClass = function(e, t) {
            var n, a, s = function(e) {
                e.classList ? e.classList.contains(t) || e.classList.add(t) : e.className.match(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi")) || (e.className = e.className + " " + t)
            };
            if ("[object Array]" === Object.prototype.toString.call(e))
                for (var i = e, o = 0; o < i.length; o++)
                    if (e = i[o], e.length)
                        for (n = 0, a = e.length; a > n; n++) s(e[n]);
                    else s(e);
            else if ("[object Array]" !== Object.prototype.toString.call(e) && e instanceof HTMLElement) e.length || s(e);
            else
                for (n = 0, a = e.length; a > n; n++) s(e[n])
        }, e.fireEvent = function(e, t) {
            var n;
            return document.createEventObject ? (n = document.createEventObject(), e.fireEvent("on" + t, n)) : (n = document.createEvent("HTMLEvents"), n.initEvent(t, !0, !0), !e.dispatchEvent(n))
        }, e.hasClass = function(e, t) {
            return e.classList ? e.classList.contains(t) ? !0 : !1 : e.className.match(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi")) ? !0 : !1
        }, e.removeClass = function(e, t) {
            var n, a, s = function(e) {
                e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            };
            if ("[object Array]" === Object.prototype.toString.call(e))
                for (var i = e, o = 0; o < i.length; o++) {
                    if (e = i[o], 0 === e.length) return;
                    if (e.length)
                        for (n = 0, a = e.length; a > n; n++) s(e[n]);
                    else s(e)
                } else {
                    if (0 === e.length) return;
                    if ("[object Array]" !== Object.prototype.toString.call(e) && e instanceof HTMLElement) e.length || s(e);
                    else
                        for (n = 0, a = e.length; a > n; n++) s(e[n])
                }
        }, e.replaceClass = function(e, t, n) {
            if (e) {
                var a = function(e, t, n) {
                    e && (e.classList ? (e.classList.remove(n), e.classList.contains(t) || e.classList.add(t)) : (e.className = e.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " "), e.className.match(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi")) || (e.className = e.className + " " + t)))
                };
                if ("[object HTMLCollection]" === Object.prototype.toString.call(e))
                    for (var s = 0; s < e.length; s++) a(e[s], n, t);
                else a(e, n, t)
            }
        }, e.contains = function(e, t) {
            for (var n = e.length; n--;)
                if (e[n] === t) return !0;
            return !1
        }, e.extend = function() {
            for (var e = 1; e < arguments.length; e++)
                for (var t in arguments[e]) arguments[e].hasOwnProperty(t) && (arguments[0][t] = arguments[e][t]);
            return arguments[0]
        }, e.addEvent = function(e, t, n, a, s) {
            s = s || !1;
            for (var i = t.split(" "), o = 0; o < i.length; o++) e.addEventListener(i[o], function(t) {
                var s = t.target,
                    i = [];
                if ("[object Array]" === Object.prototype.toString.call(n)) {
                    for (var o = 0; o < n.length; o++) {
                        var l = e.querySelectorAll(n[o]);
                        0 !== l.length ? i.push(Array.prototype.slice.call(l)) : e.matches(n) && i.push(e)
                    }
                    for (var r = 0; r < i.length; r++) {
                        for (s = t.target; !i[r].includes(s) && s !== e.parentElement && s.parentElement;) s = s.parentElement;
                        if (i[r].includes(s)) break
                    }
                    r !== i.length && (a[r](s, t), t.preventDefault(), t.stopPropagation())
                } else {
                    for (i = Array.prototype.slice.call(e.querySelectorAll(n)), e.matches(n) && i.push(e); !i.includes(s) && s !== e.parentElement && s.parentElement;) s = s.parentElement;
                    s !== e.parentElement && (a(s, t), t.preventDefault(), t.stopPropagation())
                }
            }, s)
        }, e.addClickEvent = function(t, n) {
            if (e.isTouch()) {
                var a = !1;
                t.addEventListener("touchstart", function() {
                    a = !1
                }), t.addEventListener("touchmove", function() {
                    a = !0
                }), t.addEventListener("touchend", function(e) {
                    a || n(e), a = !1
                })
            } else t.addEventListener("click", n)
        }, e.addOrientationChangeEvent = function(e, t) {
            var n, a = t || 0;
            window.addEventListener("orientationchange", function() {
                clearTimeout(n), n = setTimeout(function() {
                    e(), n = null
                }, a)
            })
        }, e.stringify = function(e, t) {
            if (!e || "object" != typeof e) return "";
            var n = Object.keys(e),
                a = n.length;
            if (0 === a.length) return "";
            t = t && "string" == typeof t ? t : "&";
            for (var s = "", i = "", o = 0; a > o; o++) "string" == typeof e[n[o]] && (s += i + n[o] + "=" + e[n[o]], i = t);
            return s
        }, e.getQueryStringParameter = function(e) {
            for (var t, n = new RegExp("(?:\\?|&)" + e + "=(.*?)(?=&|$)", "gi"), a = []; null !== (t = n.exec(document.location.search));) a.push(t[1]);
            return a
        }, e.parseQueryString = function(e) {
            var t = {};
            return e.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function(e, n, a, s) {
                t[n] = s
            }), t
        }, e.getData = function(e, t, n, a, s) {
            var i, o = a || !1,
                l = new XMLHttpRequest,
                r = [],
                _ = "";
            if (s) {
                r.push(e), r.push("?");
                for (i in s) i && s.hasOwnProperty(i) && (r.push(i), r.push("="), r.push(s[i]), r.push("&"));
                r.pop(), _ = r.join(""), e = _
            }
            l.open("GET", e, !0), l.onload = function() {
                var e = "",
                    a = {
                        status: 0,
                        message: ""
                    };
                l.status >= 200 && l.status < 400 ? (e = o ? JSON.parse(l.responseText) : l.responseText, t(e)) : (a.status = l.status, a.message = l.response, n(a))
            }, l.onerror = function() {
                var e = {
                    status: 0,
                    message: ""
                };
                e.status = l.status, e.message = l.response, n(e)
            }, l.send()
        }, e.postData = function(e, t, n, a, s) {
            var i = s || !1,
                o = new XMLHttpRequest;
            o.open("POST", e, !0);
            new FormData;
            o.onload = function() {
                var e = "",
                    a = {
                        status: 0,
                        message: ""
                    };
                o.status >= 200 && o.status < 400 ? (e = i ? JSON.parse(o.responseText) : o.responseText, t(e)) : (a.status = o.status, a.message = o.response, n(a))
            }, o.onerror = function() {
                var e = {
                    status: 0,
                    message: ""
                };
                e.status = o.status, e.message = o.response, n(e)
            }, o.send(a)
        }, e.extend = function() {
            for (var e = 1; e < arguments.length; e++)
                for (var t in arguments[e]) arguments[e].hasOwnProperty(t) && (arguments[0][t] = arguments[e][t]);
            return arguments[0]
        }, e.isTouch = function() {
            var e = !!navigator.pointerEnabled || navigator.msPointerEnabled;
            return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || e
        }, e.isMobile = function() {
            var e = window.innerWidth;
            return e <= fm.ui.constants.MOBILE_MAX_SIZE
        }, e.isiPad = function() {
            var e = null !== navigator.userAgent.match(/iPad/i);
            return e
        }, e.isTablet = function() {
            var t = e.getCurrentWidth();
            return t >= fm.ui.constants.TABLET_MIN_SIZE && t <= fm.ui.constants.TABLET_MAX_SIZE
        }, e.isDesktop = function() {
            var t = window.innerWidth;
            return t >= fm.ui.constants.TABLET_MIN_SIZE && e.isLandscape() || t > fm.ui.constants.TABLET_MAX_SIZE ? !0 : !1
        }, e.isPortrait = function() {
            return window.innerHeight > window.innerWidth
        }, e.isLandscape = function() {
            return window.innerWidth > window.innerHeight
        }, e.isTabletAndPortrait = function() {
            return e.isPortrait() && e.isTablet()
        }, e.isTargetScrollableArea = function(e, t) {
            t = t ? t : 15;
            for (var n = 0; t > n && null !== e; n++) {
                if ("scroll" === window.getComputedStyle(e)["overflow-y"]) return !0;
                e = e.parentElement
            }
            return !1
        }, e.isPreview = function() {
            return window.location.href.indexOf("/preview") > -1
        }, e.killVideoPlayer = function(t, n, a, s, i, o) {
            o = o || !1;
            for (var l = o ? n : t, r = l.getElementsByTagName("iframe"), _ = r.length; _ >= 0;) r[_] && (s && s.length && (l.getElementsByClassName(s)[0].style.display = "block"), i && i.length && e.removeClass(l, i), r[_].parentElement.removeChild(r[_])), _--
        }, e.scrollToTopAnimation = function(e, t, n) {
            function a(e, a, s) {
                function i() {
                    var e, a;
                    c += 1 / 60, e = c / o, a = u[E](e), 1 > e ? (window.requestAnimationFrame(i), window.scrollTo(0, r + (_ - r) * a), t.scrollTop = r + (_ - r) * a) : (window.scrollTo(0, _), n && n())
                }
                var o, l, r = window.scrollY,
                    _ = e || 0,
                    d = a || 2e3,
                    E = s || "easeOutSine",
                    c = 0,
                    u = {};
                o = Math.max(.1, Math.min(Math.abs(r - _) / d, .8)), l = Math.PI / 2, u = {
                    easeOutSine: function(e) {
                        return Math.sin(e * (Math.PI / 2))
                    },
                    easeInOutSine: function(e) {
                        return -.5 * (Math.cos(Math.PI * e) - 1)
                    },
                    easeInOutQuint: function(e) {
                        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
                    }
                }, i()
            }
            t = t || window, a(e, 1500, "easeInOutQuint")
        }, e.getParameterByName = function(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
                n = t.exec(location.search);
            return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
        }, e.resize = function() {
            function e() {
                s || (s = !0, window.requestAnimationFrame ? window.requestAnimationFrame(t) : setTimeout(t, 66))
            }

            function t() {
                a.forEach(function(e) {
                    e()
                }), s = !1
            }

            function n(e) {
                e && a.push(e)
            }
            var a = [],
                s = !1;
            return {
                add: function(t) {
                    a.length || window.addEventListener("resize", e), n(t)
                }
            }
        }(), e.clickElsewhereToClose = function(e, t) {
            document.getElementsByTagName("body")[0].onclick = function(n) {
                var a = 0,
                    s = e.querySelectorAll("*");
                n.target !== e && (_.each(s, function(e) {
                    n.target === e && a++
                }), a || t())
            }
        }, e.ellipsis = function(t) {
            var n, a, s, i = {
                text: "",
                maxCharacters: 80,
                readMore: !1,
                summary: {}
            };
            options = e.extend({}, i, t);
            var o = options.maxCharacters,
                l = options.text.substring(o);
            if (options.text.length > options.maxCharacters) {
                var r = l.indexOf("."),
                    _ = l.indexOf(" "),
                    d = l.indexOf(",");
                r = r > 0 ? r : 0, _ = _ > 0 ? _ : 0, d = d > 0 ? d : 0, o += Math.max(Math.min(r, _, d), 0), n = options.text.substring(0, o) + '<span class="' + fm.ui.constants.ELLIPSIS_CLASS + '">... </span>', options.readMore && (n += '<a class="more ' + fm.ui.constants.READ_MORE_CLASS + '" href="#" data-more="' + encodeURI(options.text.substring(o)) + '">More</a>')
            } else n = options.text;
            options.summary.innerHTML = n, options.readMore && options.summary && (s = options.summary.getElementsByClassName(fm.ui.constants.ELLIPSIS_CLASS)[0], e.addEvent(options.summary, "click", ["." + fm.ui.constants.READ_MORE_CLASS], [function(e, t) {
                t.preventDefault(), e.dataset.more && (s.innerHTML = "", a = document.createElement("span"), a.innerHTML = decodeURI(e.dataset.more), e.parentNode.replaceChild(a, e))
            }]))
        }, e.getParents = function(e, t) {
            var n, a = [];
            for (t && (n = t.charAt(0)); e && e !== document; e = e.parentNode) t ? ("." === n && e.classList.contains(t.substr(1)) && a.push(e), "#" === n && e.id === t.substr(1) && a.push(e), "[" === n && e.hasAttribute(t.substr(1, t.length - 1)) && a.push(e), e.tagName.toLowerCase() === t && a.push(e)) : a.push(e);
            return a.length ? a : null
        }, e.getCurrentWidth = function() {
            var t = !!window.chrome,
                n = navigator.userAgent.indexOf("Safari") > -1 && !t;
            return n ? e.isPortrait() ? screen.width : screen.height : screen.width
        }
    }($);
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.adModule = function() {
    "use strict";
    var CONSTANTS = {
            FW_SCAN_DELAY: 500,
            FW_ALLOW_RESCAN_AFTER: 250,
            FW_SERVER: document.querySelector("meta[property='fw:server']").content,
            FW_NETWORK_ID: document.querySelector("meta[property='fw:networkId']").content,
            FW_PROFILE: "g_js",
            AD_SLOT_CLASS: "adSlot",
            CAPTION_CLASS: "js-adCaption",
            TOPIC_NAV_TITLE_HEADER: "js-topicNavTitleHeaderFixedHeader",
            MOBILE: "MOBILE",
            TABLET: "TABLET",
            DESKTOP: "DESKTOP",
            SHORT: {
                MOBILE: "300x250",
                TABLET: "300x250",
                DESKTOP: "300x250"
            },
            TALL: {
                MOBILE: "300x250",
                TABLET: "300x250",
                DESKTOP: "300x600"
            },
            LONG: {
                MOBILE: "320x50",
                TABLET: "728x90",
                DESKTOP: "728x90,960x60,970x66,970x90"
            },
            BOTH: {
                MOBILE: "300x250",
                TABLET: "300x250",
                DESKTOP: "300x250,300x600"
            },
            FM_PREFIX: "fm_",
            HOME_POSFIX: "_home",
            HUBS: ["", "shows", "latest", "events", "thecollective", "schedule", "search"]
        },
        defaults = {
            siteSectionId: "fm_ros"
        },
        AdModule = function AdModule($rootPanel, settings) {
            function loadAd() {
                if (checkDeviceAndVisibility(), $panel && options.adVisible) {
                    var cd = CONSTANTS[options.type.toUpperCase()][options.device],
                        size = cd.split(",")[0],
                        width = size.split("x")[0],
                        height = size.split("x")[1],
                        slid = options.containerClass + "AdSlot-" + Math.floor(1e5 * Math.random()),
                        slau = options.slau ? "&slau=" + options.slau : "",
                        slotHTML = document.createElement("div");
                    cd = "&cd=" + cd.replace(/,/g, "|").replace(/x/g, ",");
                    var adSource = "http://" + CONSTANTS.FW_SERVER + "/ad/g/1?resp=ad&prof=g_iframe_js&nw=" + CONSTANTS.FW_NETWORK_ID + "&csid=" + generateSiteSectionId() + "&flag=+rfod;" + generateKeyValue() + "&_fw_h_x_flash_version=11%2C9%2C900%2C0;slid=" + slid + "&ptgt=s&h=" + height + "&w=" + width + cd + "&slau=" + slau + "&flag=%2Bcmpn&prct=text%2Fhtml_lit_js_wc_nw";
                    slotHTML.className += CONSTANTS.AD_SLOT_CLASS, $panel.innerHTML = "", $panel.appendChild(slotHTML), $.getData(adSource, function(data) {
                        slotHTML.innerHTML = data;
                        var script = slotHTML.firstChild.getElementsByTagName("script")[0];
                        if (options.showCaption) {
                            var caption = document.createElement("div");
                            caption.className += CONSTANTS.CAPTION_CLASS, caption.innerHTML = "Advertisement", slotHTML.appendChild(caption)
                        }
                        script && eval(script.innerHTML)
                    }, function(e) {
                        console.log("Insert Ad Exception"), console.log(e)
                    }, !1)
                }
            }

            function checkDeviceAndVisibility() {
                $.isMobile() ? (options.device = CONSTANTS.MOBILE, options.adVisible = options.mobileTarget) : $.isTablet() ? (options.device = CONSTANTS.TABLET, options.adVisible = options.tabletTarget) : (options.device = CONSTANTS.DESKTOP, options.adVisible = options.desktopTarget)
            }

            function generateSiteSectionId() {
                var e = options.siteSectionId,
                    t = window.location.pathname.split("/"),
                    n = t[1],
                    a = t[2];
                if (CONSTANTS.HUBS.includes(n) && !a) {
                    var s = CONSTANTS.HOME_POSFIX;
                    "" === n && (s = s.replace("_", "")), e = CONSTANTS.FM_PREFIX + n + s
                } else if (CONSTANTS.HUBS.includes(n) && a) {
                    a = a.replace(/-/g, "_");
                    var i = t[3];
                    e = i ? CONSTANTS.FM_PREFIX + n + "_" + a + "_" + i : CONSTANTS.FM_PREFIX + n + "_" + a + CONSTANTS.HOME_POSFIX
                }
                return e
            }

            function normalize(e) {
                return e.toLowerCase().replace(" ", "-").replace(/^\s+|\s+$/g, "").replace(/[^a-z0-9-]/g, "-").replace(/[-]+/g, "-").replace(/^-+|-+$/g, "").replace(/[-]+/g, "-")
            }

            function generateKeyValue() {
                var e = window.location.hostname + window.location.pathname;
                e = "url=" + encodeURIComponent(e);
                var t = window.location.pathname.split("/"),
                    n = t[1];
                if (!CONSTANTS.HUBS.includes(n)) {
                    var a = document.getElementsByClassName(CONSTANTS.TOPIC_NAV_TITLE_HEADER);
                    if (a.length) {
                        var s = a[0];
                        s && (s = s.getAttribute("data-title") ? s.getAttribute("data-title").trim() : "", e = s ? "topic=" + normalize(s) : e)
                    }
                }
                return e
            }
            var $panel = $rootPanel,
                dataSettings = $rootPanel.dataset.moduleSettings ? JSON.parse($rootPanel.dataset.moduleSettings) : {},
                options = $.extend({}, defaults, dataSettings, settings);
            "complete" == document.readyState ? loadAd() : window.attachEvent ? window.attachEvent("onload", loadAd) : window.addEventListener("load", loadAd, !0), this.init = function() {}
        };
    return AdModule
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.instagramModule = function() {
    "use strict";
    var e = {
            OEMBED_ENDPOINT: "https://api.instagram.com/oembed/?url=",
            HIDE_CAPTION_PARAM: "&hidecaption=",
            JSONP_PARAM: "&callback=JSONPCallback",
            OMIT_SCRIPT_PARAM: "&omitscript=true"
        },
        t = function(t, n) {
            function a() {
                if (s) {
                    var t = i.url,
                        n = !1;
                    n = "true" === i.showCaption ? !1 : !0;
                    var a = e.OEMBED_ENDPOINT + t + e.HIDE_CAPTION_PARAM + n + e.OMIT_SCRIPT_PARAM + e.JSONP_PARAM,
                        o = document.createElement("div");
                    s.innerHTML = "", $.jsonp.fetch(a, function(e) {
                        o.innerHTML = e.html, s.appendChild(o), window.instgrm.Embeds.process()
                    })
                }
            }
            var s = t,
                i = t.dataset.moduleSettings ? JSON.parse(t.dataset.moduleSettings) : {};
            "complete" == document.readyState ? a() : window.attachEvent ? window.attachEvent("onload", a) : window.addEventListener("load", a, !0), this.init = function() {}
        };
    return t
}(), createTopicPath = function(e) {
    return e
}, CDN = function(e) {
    var t = window.cdnServer;
    return 0 !== e.indexOf("/") && (e = "/" + e), t ? t + e : e
}, formatFileImageName = function(e) {
    return e ? e.replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, "-").replace(/--/g, "-").toLowerCase() : e
}, formatImageAlt = function(e) {
    return e && "string" == typeof e ? e.substr(0, 125) : ""
};
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.AutoplayController = function() {
    function e() {
        var e = document.body.querySelectorAll('[data-player="theplatform"]') || [];
        e.constructor === NodeList ? S = e : S.push(e)
    }

    function t(e) {
        e.playerController.addEventListener("OnMediaStart", function() {
            _(e)
        }, [e.instanceName]), e.playerController.addEventListener("OnMediaPlay", function() {
            _(e)
        }, [e.instanceName]), e.playerController.addEventListener("OnMediaUnpause", function() {
            _(e)
        }, [e.instanceName]), e.playerController.addEventListener("OnMediaPause", function() {
            d(e)
        }, [e.instanceName]), e.playerController.addEventListener("OnMediaEnd", function() {
            d(e)
        }, [e.instanceName]), e.playerController.addEventListener("OnMediaError", function() {
            d(e)
        }, [e.instanceName])
    }

    function n(e) {
        var t = e.dataset.instance;
        if (t)
            if (s(e)) {
                var n = C.find(function(e) {
                    return e.instanceName == t
                });
                n && (n.isFirstPlay && !$.isTouch() && n.playerController.clickPlayButton([t]), e.removeAttribute("data-instance"))
            } else {
                var a = $.isTouch() ? "touchend" : "click",
                    i = new MouseEvent(a, {
                        view: window,
                        bubbles: !0,
                        cancelable: !0
                    });
                e.parentElement.dispatchEvent(i)
            }
    }

    function a(e) {
        var t = c.getBoundingClientRect(),
            n = e.getBoundingClientRect(),
            a = $.isMobile() ? u.MIN_PIXELS.MOBILE : u.MIN_PIXELS.DEFAULT,
            s = t.top + a,
            i = window.innerHeight - a,
            o = n.top,
            l = n.bottom;
        return l >= s && i >= o && l !== o
    }

    function s(e) {
        return e.getElementsByTagName("iframe").length > 0
    }

    function i() {
        if (!m)
            for (var e, t = 0; t < S.length; t++)
                if (e = S[t], e.hasAttribute("data-instance") && a(e) && !e.parentElement.parentElement.classList.contains("readMoreWrapper")) {
                    $.isDesktop() && (m = !0), setTimeout(function() {
                        n(e)
                    }, u.VIDEO_AUTOPLAY_DELAY);
                    break
                }
    }

    function o(e) {
        var a = $pdk.bind(e, !1);
        a.setIFrame(e, !0);
        var s = e.parentElement.dataset.instance,
            i = C.length,
            o = {};
        o.instanceName = s, o.index = i, o.playerController = a, o.isFirstPlay = !0, C.push(o), t(o), n(e.parentElement)
    }

    function l(t) {
        clearTimeout(T), T = setTimeout(function(t) {
            e(), i()
        }, u.SCROLL_DELAY)
    }

    function r() {
        var e = C[A];
        e && e.playerController.pause(!0, [e.instanceName])
    }

    function _(e) {
        var t = A;
        if (A = e.index, e.isFirstPlay = !1, m) {
            var n = C[t];
            n && n.playerController.pause(!0, [n.instanceName])
        }
        m = !0
    }

    function d(e) {
        e.index === A && (m = !1)
    }

    function E(e) {
        c = e, c.addEventListener("scroll", l)
    }
    var c, u = {
            SCROLL_DELAY: 900,
            VIDEO_AUTOPLAY_DELAY: 100,
            MIN_PIXELS: {
                MOBILE: 200,
                DEFAULT: 440
            }
        },
        m = !1,
        S = [],
        C = [],
        A = 0,
        T = 0;
    return {
        addMPX: o,
        pauseCurrentVideo: r,
        init: E
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.TopicNavModule = function() {
    var e, t, n, a, s, i, o, l, r, _, d = {
            FIXED_HEADER_CLASS: "js-topicNavTitleHeaderFixedContainer",
            MAIN_HEADER_CLASS: "js-topicNavTitleHeaderAbsolute",
            HEADER_CONTAINER_CLASS: "js-topicNavTitleHeader",
            HEADER_CONTROL_CLASS: "js-topicNavTitleHeaderControlHeader",
            HEADER_TEXT_CLASS: "js-topicNavTitleHeaderTitle",
            NAV_ITEM_CLASS: "js-topicNavItem",
            NAV_ITEM_SELECTED: "topicNav__item--selected",
            HEADER_CSS_SELECTOR: ".js-topicNavTitleHeaderContainer",
            ADVERTISEMENT_ITEM_CLASS: "js-topicNavAdvertisementItem",
            RELATED_TOPICS_CONTAINER_CLASS: "js-topicNavRelated",
            TOPICS_BY_PRIMARY_TAG: "/topics/tag/",
            HIDDEN_ANIMATE_CLASS: "topicNav__related--hiddenAnimate",
            SCROLL_EVENTS_FREQUENCY_DESKTOP: 0,
            NAV_PAGE_SIZE: 25,
            NAV_PAGES_BEFORE_LOAD_MORE: 10,
            NAV_LOADING_SCROLL_OFFSET: 800,
            FIRST_AD_INDEX: 4,
            AD_FREQUENCY: 24
        },
        E = null,
        c = !1,
        u = 2,
        m = !1,
        S = 0,
        C = function(C) {
            var A = this,
                T = function() {
                    E = C, _ = E.getElementsByClassName(d.NAV_ITEM_CLASS), $.addEvent(C.parentElement, "click touchend", d.HEADER_CSS_SELECTOR, A.showRelatedTopics), o = !1, m = !0, a = E.getElementsByClassName(d.MAIN_HEADER_CLASS)[0], A.addEllipsis(), f(), $.isDesktop() && (O(), M(), C.addEventListener("scroll", I), L()), c = !0
                },
                L = function() {
                    var e = new fm.ui.lazyLoader(C, {
                        showLoader: !1,
                        userTriggered: !1
                    });
                    e.init()
                },
                p = function() {
                    var e = C.getElementsByClassName(fm.ui.constants.LOADER_CLASS)[0];
                    e && e.parentElement.removeChild(e)
                },
                f = function() {
                    e = 0;
                    var t = _[e];
                    t && ($.addClass(t, d.NAV_ITEM_SELECTED), p())
                },
                h = function() {
                    var e = C.offsetHeight + C.scrollTop + d.NAV_LOADING_SCROLL_OFFSET >= C.scrollHeight;
                    o || !e || $.isPreview() || g()
                };
            r = h;
            var I = function(e) {
                    D(e), o || h(), setInterval(function() {
                        m = !0
                    }, d.SCROLL_EVENTS_FREQUENCY_DESKTOP), m && (m = !1, y()), S = C.scrollTop
                },
                N = function() {
                    var e = C.getElementsByClassName(d.HEADER_CONTAINER_CLASS).length - 1;
                    return C.getElementsByClassName(d.HEADER_CONTAINER_CLASS)[e].getAttribute("data-id")
                },
                g = function() {
                    o = !0;
                    var e = C.getElementsByClassName(d.HEADER_CONTAINER_CLASS)[0].getAttribute("data-id"),
                        t = N(),
                        n = d.TOPICS_BY_PRIMARY_TAG + e + "?page=" + u + "&size=" + d.NAV_PAGE_SIZE + "&latestTopicId=" + t;
                    u++, $.getData(n, function(e) {
                        e && (C.insertAdjacentHTML("beforeend", e), L(), M(), R()), p(), A.addEllipsis(), o = !1, l && (l(), l = null)
                    }.bind(this), function() {
                        o = !1
                    })
                },
                v = function() {
                    return "<li class='topicNav__advertisement__item js-topicNavAdvertisementItem'><div class='topicNav__advertisement__item__wrapper'>" + '<div class=\'topicNav__advertisement__item__area js-topicNavAdvertisementItemArea ad module\' data-module=\'adModule\'  data-module-load=\'false\' data-module-settings=\'{"type":"short", "containerClass":"js-topicNavAdvertisementItemArea", "slau":"", "showCaption": false, "mobileTarget":false, "tabletTarget":false, "desktopTarget": true}\'></div></div></li>'
                },
                O = function() {
                    if (0 === C.getElementsByClassName(d.ADVERTISEMENT_ITEM_CLASS).length && (n = _[d.FIRST_AD_INDEX], t = d.FIRST_AD_INDEX, n)) {
                        n.insertAdjacentHTML("afterend", v());
                        var e = C.getElementsByClassName(d.ADVERTISEMENT_ITEM_CLASS).length - 1,
                            a = C.getElementsByClassName(d.ADVERTISEMENT_ITEM_CLASS)[e];
                        fm.ui.utils.initializeModules(a, !0), t += d.AD_FREQUENCY
                    }
                },
                R = function() {
                    if (t)
                        for (;;) {
                            if (n = _[t], !n) break;
                            n.insertAdjacentHTML("afterend", v());
                            var e = C.getElementsByClassName(d.ADVERTISEMENT_ITEM_CLASS).length - 1,
                                a = C.getElementsByClassName(d.ADVERTISEMENT_ITEM_CLASS)[e];
                            fm.ui.utils.initializeModules(a, !0), t += d.AD_FREQUENCY
                        }
                },
                y = function() {
                    var e = C.parentElement.getElementsByClassName(d.RELATED_TOPICS_CONTAINER_CLASS);
                    $.addClass(e, d.HIDDEN_ANIMATE_CLASS)
                },
                D = function() {
                    if (s)
                        for (var e = 0, t = s.length; t > e; e++) {
                            var n = s[e],
                                a = n.parentElement.offsetTop;
                            if (a <= C.scrollTop) {
                                var o = null,
                                    l = 0;
                                t > e + 1 && (o = s[e + 1], l = o.parentElement.offsetTop - n.getAttribute("originalHeight")), $.addClass(n, "topicNav__title__header--fixedTop"), i.removeAttribute("style"), n.setAttribute("style", "top: " + C.scrollTop + "px"), o && n.offsetTop >= l && ($.addClass(n, "topicNav__title__header--absolute"), i.setAttribute("style", "display: none"), n.setAttribute("style", "top: " + l + "px")), n.getAttribute("data-title") !== i.getElementsByClassName(d.HEADER_CONTAINER_CLASS)[0].getAttribute("data-title") && (i.getElementsByClassName(d.HEADER_CONTAINER_CLASS)[0].setAttribute("data-title", n.getAttribute("data-title")), i.getElementsByClassName(d.HEADER_CONTAINER_CLASS)[0].setAttribute("title", n.getAttribute("data-title")), i.getElementsByClassName(d.HEADER_TEXT_CLASS)[0].textContent = "#" + n.getAttribute("data-title"))
                            } else {
                                var r = null;
                                e - 1 >= 0 && (r = s[e - 1]), $.removeClass(n, "topicNav__title__header--fixedTop"), C.scrollTop < n.parentElement.offsetTop && n.removeAttribute("style"), r && C.scrollTop <= n.parentElement.offsetTop - n.getAttribute("originalHeight") && ($.removeClass(r, "topicNav__title__header--absolute"), i.removeAttribute("style"))
                            }
                        }
                },
                M = function() {
                    s = C.getElementsByClassName(d.HEADER_CONTROL_CLASS), i = document.getElementsByClassName(d.FIXED_HEADER_CLASS)[0];
                    for (var e = 0, t = s.length; t > e; e++) {
                        var n = s[e];
                        n.setAttribute("originalHeight", n.offsetHeight)
                    }
                };
            this.showRelatedTopics = function(e, t) {
                t.preventDefault();
                var n = e.parentElement.getElementsByClassName(d.RELATED_TOPICS_CONTAINER_CLASS)[0];
                n.className.indexOf(d.HIDDEN_ANIMATE_CLASS) > -1 ? $.removeClass(n, d.HIDDEN_ANIMATE_CLASS) : $.addClass(n, d.HIDDEN_ANIMATE_CLASS)
            }, this.addEllipsis = function() {
                for (var e = C.getElementsByClassName(d.HEADER_CONTAINER_CLASS), t = 0; t < e.length; t++) {
                    var n = e[t].getAttribute("data-title");
                    n && n.length > 15 && (!$.isMobile() && $.isLandscape() ? e[t].getElementsByClassName(d.HEADER_TEXT_CLASS)[0].innerHTML = "#" + n.substring(0, 15) + "..." : e[t].getElementsByClassName(d.HEADER_TEXT_CLASS)[0].innerHTML = "#" + n)
                }
            }, T()
        };
    return C.prototype.getPageSize = function() {
        return d.NAV_PAGE_SIZE
    }, C.prototype.getHeaderCssSelector = function() {
        return d.HEADER_CSS_SELECTOR
    }, C.prototype.selectPage = function(e) {
        var t = E.getElementsByClassName(d.NAV_ITEM_SELECTED)[0];
        $.removeClass(t, d.NAV_ITEM_SELECTED);
        var n = document.getElementById(e);
        $.addClass(n, d.NAV_ITEM_SELECTED);
        var a = E.getElementsByClassName(d.HEADER_CONTAINER_CLASS)[0].clientHeight;
        E.scrollTop = n.offsetTop - a
    }, C.prototype.getPageId = function(e, t) {
        if (e < _.length) {
            var n = _[e];
            t(n.getAttribute("data-id")), e === _.length - d.NAV_PAGES_BEFORE_LOAD_MORE && r()
        } else l = function() {
            e < _.length ? this.getPageId(e, t) : t(null)
        }.bind(this), r()
    }, C.prototype.hideRelatedTopics = function() {
        var e = E.parentElement.getElementsByClassName(d.RELATED_TOPICS_CONTAINER_CLASS);
        $.addClass(e, d.HIDDEN_ANIMATE_CLASS)
    }, C.prototype.getPathById = function(e) {
        var t = document.getElementById(e);
        return t ? t.getAttribute("data-path") : null
    }, C
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.topicpage = function() {
    var e, t, n, a, s, i, o, l, r, _ = {
            LEFTNAV_CLASS: "js-topicNav",
            PAGE_CONTAINER_CLASS: "js-topicpage",
            BIG_SCROLL_AREA_CLASS: "js-topicScrollableArea",
            CONTENT_AREA_CLASS: "js-topicContent",
            CONTENT_LOADING_SCROLL_OFFSET: 4,
            CONTENT_PAGE_CLASS: "js-contentPageModule",
            DATA_ID_ATTRIBUTE: "data-id",
            PAGE_TAG_ID_ATTRIBUTE: "data-tagId",
            LOAD_MORE_PAGES_COUNT: 3,
            SCROLL_UP: "up",
            SCROLL_DOWN: "down",
            MOBILE_STICKY_ELEMENT_ID: "js-topNav__mobileStickyBox",
            CONTENT_AREA_WITHSCROLL_CLASS: "topicContent__scrollArea--withScroll",
            LEFT_NAV_SCROLL_OFFSET: 6,
            HIDE_SHOW_PAGES_GAP: 3,
            CONTENT_LOADER: "loader--topicContent",
            DELTAY_LINE_IN_PX: 20,
            SCREEN_OFFSET_PERCENT: .45
        },
        d = [],
        E = !1,
        c = !0,
        u = !1,
        m = function() {
            t = 0, l = document.getElementsByClassName(_.LEFTNAV_CLASS)[0], a = new fm.ui.TopicNavModule(l), s = document.getElementsByClassName(_.CONTENT_AREA_CLASS)[0], r = document.getElementsByClassName(_.CONTENT_LOADER)[0];
            var d = s.getElementsByClassName(_.CONTENT_PAGE_CLASS)[0];
            v(d), T(d), e = d.getAttribute(_.DATA_ID_ATTRIBUTE), n = e, S.init(), $.isDesktop() && fm.ui.AutoplayController.init(s);
            var E = document.getElementById(n);
            E && (i = E.getAttribute(_.PAGE_TAG_ID_ATTRIBUTE), o = document.getElementById(_.MOBILE_STICKY_ELEMENT_ID), C(), I(), twttr && twttr.widgets && twttr.widgets.load())
        },
        S = function() {
            function e() {
                var e = document.getElementsByClassName(_.PAGE_CONTAINER_CLASS)[0];
                t.visiblePositionWithOffset = Math.max(window.innerHeight * _.SCREEN_OFFSET_PERCENT, e.getBoundingClientRect().top), N()
            }
            var t = {
                    latestScrollTop: 0,
                    visiblePositionWithOffset: 0,
                    latestPageIndex: 0,
                    isTopnavSticky: !1,
                    leftNavPageSize: 0,
                    loadMorePagesLeftNav: 0,
                    $bigScrollableArea: null
                },
                n = function() {
                    return t.isTopnavSticky != fm.ui.topNavigation.isStickyMenu() ? (t.isTopnavSticky = fm.ui.topNavigation.isStickyMenu(), !0) : !1
                },
                i = function(e, t) {
                    return 0 === e ? t : t * _.DELTAY_LINE_IN_PX
                },
                o = function(e) {
                    var t, n = i(e.deltaMode, e.deltaY);
                    t = $.isTargetScrollableArea(e.target), t || (c ? (e.preventDefault(), e.stopPropagation(), window.scrollTo(0, (document.documentElement.scrollTop || document.body.scrollTop) + n)) : t || e.preventDefault(), l(e))
                },
                l = function(e) {
                    if (n() && t.isTopnavSticky && (c = !1, s.addEventListener("scroll", r), $.addClass(s, _.CONTENT_AREA_WITHSCROLL_CLASS), u = !0, addWheelListener(t.$bigScrollableArea, l)), t.isTopnavSticky && u && e.deltaY) {
                        var o = i(e.deltaMode, e.deltaY);
                        s.scrollTop += o, $.isPreview() || 0 !== s.scrollTop || (c = !0, $.removeClass(s, _.CONTENT_AREA_WITHSCROLL_CLASS), s.removeEventListener("scroll", r), u = !1, a.selectPage(d[0].id))
                    }
                },
                r = function() {
                    !$.isPreview() && 0 === s.scrollTop && t.latestScrollTop > 0 && (c = !0, $.removeClass(s, _.CONTENT_AREA_WITHSCROLL_CLASS), s.removeEventListener("scroll", r), u = !1, a.selectPage(d[0].id)), m()
                },
                m = function() {
                    a.hideRelatedTopics(), s.scrollTop > t.latestScrollTop ? S() : s.scrollTop < t.latestScrollTop && C(), t.latestScrollTop = s.scrollTop
                },
                S = function() {
                    N(_.SCROLL_DOWN);
                    var e = s.offsetHeight * _.CONTENT_LOADING_SCROLL_OFFSET;
                    s.scrollTop + e >= s.scrollHeight && (E || I())
                },
                C = function() {
                    N(_.SCROLL_UP)
                },
                N = function(e) {
                    for (var n = 0; n < d.length; n++)
                        if (t.latestPageIndex != n) {
                            var s = d[n],
                                i = s.element.parentElement.getBoundingClientRect();
                            if (i.top <= t.visiblePositionWithOffset && i.bottom > t.visiblePositionWithOffset) {
                                h(n), e === _.SCROLL_UP ? (a.selectPage(s.id), f(n + _.HIDE_SHOW_PAGES_GAP + 1), h(n - _.HIDE_SHOW_PAGES_GAP)) : e === _.SCROLL_DOWN && (a.selectPage(s.id), f(n - _.HIDE_SHOW_PAGES_GAP - 1), h(n + _.HIDE_SHOW_PAGES_GAP)), t.latestPageIndex = n, p(s.path, n), A(s), L(n), T(s.element);
                                break
                            }
                        }
                },
                g = function() {
                    t.leftNavPageSize = a.getPageSize(), t.loadMorePagesLeftNav = t.leftNavPageSize - _.LEFT_NAV_SCROLL_OFFSET, t.$bigScrollableArea = document.getElementsByClassName(_.BIG_SCROLL_AREA_CLASS)[0], e(), window.addEventListener("resize", e), $.isDesktop() ? addWheelListener(window.document.documentElement, o) : document.addEventListener("scroll", l)
                };
            return {
                init: g,
                checkPageVisibilityChange: N
            }
        }(),
        C = function() {
            var e = document.getElementById(i),
                t = e.cloneNode(!0);
            o.innerHTML = "", o.appendChild(t), $.addEvent(t, "touchend", a.getHeaderCssSelector(), a.showRelatedTopics)
        },
        A = function(e) {
            var t = document.getElementById(e.id),
                n = t.getAttribute(_.PAGE_TAG_ID_ATTRIBUTE);
            n != i && (i = n, C())
        },
        T = function(e) {
            lazyLoader = new fm.ui.lazyLoader(e, {
                userTriggered: !1
            }), lazyLoader.init()
        },
        L = function(e) {
            fm.pageContext && !d[e].tracked && d[e].pageContext && "undefined" !== d[e].pageContext && (fm.analytics.trackPageview({
                event: "load"
            }), d[e].tracked = !0)
        },
        p = function(e, t) {
            var n = "/" + e;
            window.location.pathname != n && (window.history.replaceState({}, "", n), fm.pageContext = d[t].pageContext && "undefined" !== d[t].pageContext ? d[t].pageContext : {}, fm.metatags.setPageContext(fm.pageContext), document.title = fm.pageContext.pageTitle || "")
        },
        f = function(e) {
            var t = d[e];
            if (t) {
                var n = window.getComputedStyle(t.element.parentElement, null);
                t.element.parentElement.style.height = n.getPropertyValue("height"), t.element.style.display = "none"
            }
        },
        h = function(e) {
            var t = d[e];
            t && (t.element.parentElement.style.height = "auto", t.element.style.display = "block")
        },
        I = function(e) {
            e = e || _.LOAD_MORE_PAGES_COUNT, E = !0, a.getPageId(t + 1, function(n) {
                if (!n) return void $.addClass(r, fm.ui.constants.HIDDEN_CLASS);
                var s = a.getPathById(n);
                N(s, null, function(n, a) {
                    t++, n ? console.error(n) : g(a), S.checkPageVisibilityChange(), e > 1 ? I(e - 1) : E = !1
                })
            })
        },
        N = function(e, t, n) {
            $.getData("/" + e + "?renderType=partial", function(e) {
                n(null, e, t)
            }, function(e) {
                n(e, null, t)
            })
        },
        g = function(e) {
            e && (newElement = document.createElement("div"), newElement.className = "topicContent__pageWrapper js-topicContent__pageWrapper", newElement.innerHTML += e, s.insertBefore(newElement, r), lastModuleIndex = document.getElementsByClassName(_.CONTENT_PAGE_CLASS).length - 1, v(document.getElementsByClassName(_.CONTENT_PAGE_CLASS)[lastModuleIndex]), fm.ui.utils.initializeModules(document.getElementsByClassName(_.CONTENT_PAGE_CLASS)[lastModuleIndex], !0), twttr && twttr.widgets && twttr.widgets.load(newElement))
        },
        v = function(t) {
            var n = t.getAttribute("data-pageContext") || null;
            n && "undefined" != n && (n = JSON.parse(n)), e = t.getAttribute("data-id"), $newElementObject = {
                element: t,
                path: t.getAttribute("data-url"),
                id: e,
                tracked: !1,
                pageContext: n
            }, d.push($newElementObject)
        };
    return {
        init: m
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.SliderModule = function() {
    var e = {
            VIDEO_SLIDE: "slide--videoList"
        },
        t = {
            sliderItem: ".js-sliderItem",
            nextBtn: ".js-sliderNextBtn",
            prevBtn: ".js-sliderPrevBtn",
            indicator: ".js-sliderPaginationItem",
            headline: ".js-sliderHeaderTitle",
            summary: ".js-sliderHeaderSummary",
            link: ".js-sliderLink",
            counter: ".js-sliderCounter",
            showHeaderInfo: !0,
            showIndicators: !0,
            showCounter: !0,
            autoPlay: !0,
            slideshow: !0,
            circular: !0,
            updateSliderHeight: !1,
            deepLink: !1,
            updateURL: !1,
            placeholders: [],
            adsContainers: [],
            beforeSliderInit: function(e) {},
            afterSliderInit: function(e) {},
            onSlideOutStart: function(e) {},
            onSlideOutFinish: function(e) {},
            onSlideInStart: function(e) {},
            onSlideInFinish: function(e) {}
        },
        n = function(e, n) {
            this.itemIndex = 0, this.newSlideIndex = 0, this.isAnimating = !1, this.countLength = 0, this.autoPlayTimeoutId = 0, this.$newSlide = null, this.$placeholders = {};
            var a = e.dataset.moduleSettings ? JSON.parse(e.dataset.moduleSettings) : {};
            this.options = $.extend({}, t, a, n), this.$slider = e, this.$slides = this.$slider.querySelectorAll(this.options.sliderItem), this.$indicators = this.$slider.querySelectorAll(this.options.indicator), this.options.showIndicators = this.$indicators.length ? this.options.showIndicators : !1, this.$headline = this.$slider.querySelectorAll(this.options.headline)[0], this.$summary = this.$slider.querySelectorAll(this.options.summary)[0], this.$link = this.$slider.querySelectorAll(this.options.link)[0], this.$counter = this.$slider.querySelectorAll(this.options.counter)[0], this.options.showCounter = this.$counter ? this.options.showCounter : !1;
            for (var s in this.options.placeholders) this.$placeholders[s] = this.$slider.getElementsByClassName(s);
            if (this.options.beforeSliderInit({
                    length: this.countLength,
                    slide: this.$slider
                }), this.autoPlaySlider(), this.$slides.length > 0) {
                var i;
                for (this.countLength = this.$slides.length, this.$currentSlide = this.$slides[0], this.$newSlide = this.$currentSlide, this.itemIndex = 0, this.newSlideIndex = 0, i = 1; i < this.countLength; i++) this.$slides[i].classList.add("slider__item--inactive");
                this.updateContent(), this.$slides.length > 1 && ($.addEvent(this.$slider, "click touchend", [this.options.prevBtn, this.options.nextBtn, this.options.indicator], [function(e, t) {
                    t.preventDefault(), this.animateSlides("prev", !0), t.stopPropagation()
                }.bind(this), function(e, t) {
                    t.preventDefault(), this.animateSlides("next", !0), t.stopPropagation()
                }.bind(this), function(e, t) {
                    t.preventDefault(), this.animateSlides(e.dataset.slide, !0), t.stopPropagation()
                }.bind(this)]), ($.isMobile() || $.isTablet()) && ($.addEvent(this.$slider, "swiperight", [this.options.sliderItem], [function() {
                    this.animateSlides("prev", !0)
                }.bind(this)]), $.addEvent(this.$slider, "swipeleft", [this.options.sliderItem], [function() {
                    this.animateSlides("next", !0)
                }.bind(this)]))), this.options.updateSliderHeight && (this.updateSliderHeight(), $.resize.add(function(e) {
                    clearTimeout(this.resizeTimeoutId), this.resizeTimeoutId = setTimeout(this.updateSliderHeight.bind(this), 50)
                }.bind(this)))
            }
            if (this.options.deepLink && document.location.hash) {
                var o = window.location.hash.substring(1);
                numSlide = isNaN(o) ? 1 : o, this.$slides.length >= numSlide && this.animateSlides(numSlide, !1)
            }
            this.options.afterSliderInit(this.returnObject())
        };
    return n.prototype.updateSliderHeight = function() {
        var e = this.$slider.getElementsByClassName("slider__list")[0],
            t = this.$slider.querySelector(".slider__item:not(.slider__item--inactive)");
        e && t && (e.style.minHeight = t.offsetHeight + "px")
    }, n.prototype.returnObject = function() {
        return {
            slider: this.$slider,
            slideIndex: this.itemIndex,
            newSlideIndex: this.newSlideIndex,
            length: this.countLength,
            currentSlide: this.$currentSlide,
            newSlide: this.$newSlide
        }
    }, n.prototype.animateSlides = function(e, t) {
        var n, a, s;
        return t ? clearTimeout(this.autoPlayTimeoutId) : this.autoPlaySlider(), this.isAnimating ? this : (this.isAnimating = !0, this.direction = e, s = this.setDirection(e), s ? (this.options.showIndicators && (this.$indicators[this.itemIndex].classList.remove("slider__pagination__item--active"), this.$indicators[this.newSlideIndex].classList.add("slider__pagination__item--active")), this.updateContent(), this.$newSlide.classList.remove("slider__item--inactive"), this.options.slideshow ? (this.$newSlide.style.left = "prev" === this.direction ? "-100%" : "100%", this.$currentSlide.style.left = "0%", this.animate(this.$newSlide, !0), this.animate(this.$currentSlide, !1)) : (this.options.onSlideInStart(this.returnObject()), this.options.onSlideOutStart(this.returnObject()), this.updateCurrentInfo(), this.options.onSlideInFinish(this.returnObject()), this.options.onSlideOutFinish(this.returnObject()))) : this.isAnimating = !1, this.options.deepLink && (n = this.$newSlide.dataset.num, document.location.hash = n), t && this.options.deepLink && this.options.updateURL && history.pushState && (a = this.$newSlide.querySelectorAll("[data-deeplink]")[0], history.pushState(null, null, a.dataset.deeplink)), this)
    }, n.prototype.updateAds = function() {
        for (var e = 0; e < this.options.adsContainers.length; e++) {
            var t = document.getElementsByClassName(this.options.adsContainers[e]);
            t.length && fm.ui.utils.initializeModules(t[e].parentElement, !0)
        }
    }, n.prototype.setDirection = function(e) {
        return "prev" === this.direction ? void 0 === this.$slides[this.itemIndex - 1] ? this.newSlideIndex = this.options.circular ? this.countLength - 1 : this.itemIndex : this.newSlideIndex = this.itemIndex - 1 : "next" === this.direction ? void 0 === this.$slides[this.itemIndex + 1] ? this.newSlideIndex = this.options.circular ? 0 : this.itemIndex : this.newSlideIndex = this.itemIndex + 1 : this.newSlideIndex = e - 1, this.itemIndex === this.newSlideIndex ? !1 : (this.$currentSlide = this.$slides[this.itemIndex], this.$newSlide = this.$slides[this.newSlideIndex], !0)
    }, n.prototype.updateCurrentInfo = function() {
        return this.isAnimating = !1, this.$currentSlide.classList.add("slider__item--inactive"), $.removeClass(this.$currentSlide, fm.ui.constants.CURRENT_SLIDE), this.$currentSlide = this.$newSlide, this.itemIndex = this.newSlideIndex, $.addClass(this.$currentSlide, fm.ui.constants.CURRENT_SLIDE), this
    }, n.prototype.animate = function(t, n) {
        var a = 0,
            s = 0,
            i = !0,
            o = $.hasClass(t, e.VIDEO_SLIDE) ? 25 : 50,
            l = $.hasClass(t, e.VIDEO_SLIDE) ? 14 : 7;
        n ? this.options.onSlideInStart(this.returnObject()) : this.options.onSlideOutStart(this.returnObject());
        var r = function(e) {
            clearInterval(s), e ? (this.options.onSlideInFinish(this.returnObject()), t.style.left = "0%") : (this.options.onSlideInFinish(this.returnObject()), this.updateCurrentInfo(), this.options.onSlideOutFinish(this.returnObject()))
        }.bind(this);
        return s = setInterval(function() {
            i && ("prev" === this.direction && this.options.slideshow ? t.style.left = parseInt(t.style.left) + 2 + "%" : "next" === this.direction && this.options.slideshow ? t.style.left = parseInt(t.style.left) - 2 + "%" : r(n), a++, a >= o && (i = !1, r(n)))
        }.bind(this), l), this
    }, n.prototype.autoPlaySlider = function() {
        return this.options.autoPlay && (this.autoPlayTimeoutId = setTimeout(function() {
            this.animateSlides("next", null)
        }.bind(this), 5e3)), this
    }, n.prototype.updateContent = function() {
        var e;
        this.options.showHeaderInfo && (this.$headline.innerHTML = this.$newSlide.dataset.headline, this.$summary.innerHTML = this.$newSlide.dataset.summary, this.$link.setAttribute("href", this.$newSlide.dataset.path), this.$link.setAttribute("target", this.$newSlide.dataset.target)), this.options.showCounter && (this.$counter.innerHTML = this.$newSlide.dataset.num + " / " + this.countLength);
        var t = function(e, t) {
            var n;
            if (e)
                for (n = 0; n < e.length; n++) e[n].innerHTML = t, fm.ui.utils.initializeModules(e[n], !0)
        };
        for (var n in this.options.placeholders) e = this.$newSlide.getElementsByClassName(this.options.placeholders[n]), e.length && e[0] ? t(this.$placeholders[n], e[0].innerHTML) : t(this.$placeholders[n], "");
        return this
    }, n
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.videoPlayer = fm.ui.videoPlayer || {};
var CONSTANTS = {
    TYPE_YOTUBE: "youtube",
    TYPE_PLATFORM: "theplatform",
    TYPE_VEVO: "vevo",
    VIDEO_LIST: ".js-videoList",
    VIDEO_PLAYER: "js-videoPlayer",
    VIDEO_PLAYER_IFRAME: "video__player__iframe",
    SLIDE_CONTAINER: "js-slide__container",
    VIDEO_PLAYER_TITLE_CLASS: "js-videoPlayer__title",
    VIDEO_PLAYER_SUMMARY_CLASS: "js-videoPlayer__description",
    VIDEO_TITLE_MOBILE: "js-videoTitle",
    VIDEO_ABOUT_MOBILE: "js-videoList__mobileAbout",
    VIDEO_SUMMARY_MOBILE: "js-summaryMobile"
};
fm.ui.videoPlayer.tag = document.createElement("script"), fm.ui.videoPlayer.tag.src = "https://www.youtube.com/iframe_api", fm.ui.videoPlayer.firstScriptTag = document.getElementsByTagName("script")[0], fm.ui.videoPlayer.firstScriptTag.parentNode.insertBefore(fm.ui.videoPlayer.tag, fm.ui.videoPlayer.firstScriptTag), fm.ui.videoPlayer.youtube_api_ready = !1, fm.ui.videoPlayer.youtube_api_queue = {}, fm.ui.videoPlayer.init = function(e, t, n, a, s) {
    var i, o, l, r, _, d, E, c, u, m = this,
        S = t.type || null,
        C = t.source || null,
        A = t.width || 960,
        T = t.height || 540,
        L = t.autoplay || !1,
        p = t.playerId || fm.ui.constants.PLATFORM_DEFAULT_PLAYER_ID,
        f = t.modifierClass || null,
        h = f ? " video__player__iframe--" + f : "",
        I = document.getElementsByClassName(fm.ui.constants.PAGE_CLASS)[0],
        N = I.getElementsByClassName(CONSTANTS.VIDEO_PLAYER_TITLE_CLASS)[0],
        g = I.getElementsByClassName(CONSTANTS.VIDEO_PLAYER_SUMMARY_CLASS)[0];
    a && a(), d = document.createElement("div"), d.className = CONSTANTS.VIDEO_PLAYER_IFRAME + h, e.appendChild(d), r = $.getParents(s, "." + CONSTANTS.SLIDE_CONTAINER), _ = r ? r[0] : null, e = s ? _.getElementsByClassName(CONSTANTS.VIDEO_PLAYER_IFRAME)[0] : document.getElementById(C);
    var v = function(e) {
            return E = document.createElement("iframe"), E.src = e.source, E.width = e.width, E.height = e.height, E.setAttribute("allowFullScreen", e.fullScreen), E.frameBorder = e.frameBorder, E.className = e["class"], E.onload = e.onload, E
        },
        O = function(t) {
            if (t && t.data && t.data.baseClip) {
                var n = t.data.baseClip.title,
                    a = t.data.baseClip.description;
                if (N.innerHTML = n || N.innerHTML, g.innerHTML = a || g.innerHTML, !$.isDesktop()) {
                    var s = $.getParents(e, CONSTANTS.VIDEO_LIST),
                        i = s[0].getElementsByClassName(CONSTANTS.VIDEO_TITLE_MOBILE)[0],
                        o = s[0].getElementsByClassName(CONSTANTS.VIDEO_ABOUT_MOBILE)[0],
                        l = o.getElementsByClassName(CONSTANTS.VIDEO_SUMMARY_MOBILE)[0];
                    i.innerHTML = n || i.innerHTML, l.innerHTML = a || l.innerHTML
                }
            }
        };
    S === CONSTANTS.TYPE_PLATFORM ? (u = "//player.theplatform.com/p/_r8IPC/" + p + "/select/media/" + C + "?form=html&videoWidth=1132&videoHeight=637&autoPlay=" + L, E = v(t = {
        source: u,
        width: A,
        height: T,
        fullScreen: !0,
        "class": "theplatform",
        frameBorder: "no",
        onload: function() {
            $pdk.bind(this, !0), $pdk.controller.setIFrame(this, !0), $pdk && $pdk.controller.addEventListener("OnMediaLoadStart", O)
        }
    }), E.setAttribute("seamless", "seamless"), E.setAttribute("id", C), d.appendChild(E)) : S === CONSTANTS.TYPE_YOTUBE ? (youTubePlaceHolder = document.createElement("div"), youTubePlaceHolder.id = C, d.appendChild(youTubePlaceHolder), o = {
        height: T,
        width: A,
        videoId: C,
        playerVars: {
            autoplay: L ? 1 : 0,
            controls: 1
        }
    }, fm.ui.videoPlayer.youtube_api_ready ? i = new YT.Player(C, o) : fm.ui.videoPlayer.youtube_api_queue[C] = {
        params: o,
        bind: m
    }) : S === CONSTANTS.TYPE_VEVO && (l = "https:" === document.location.protocol ? "https://scache.vevo.com" : "http://cache.vevo.com", c = L ? "1" : "0", u = l + "/assets/html/embed.html?video=" + C + "&sbId=ab130651-e862-4af1-8195-e2ab8bb72b5a&ssId=fuse_fuse.tv&playlist=false&autoplay=" + c, E = v(t = {
        source: u,
        width: A,
        height: T,
        fullScreen: !0,
        "class": "vevo",
        frameBorder: "no"
    }), E.scrolling = "no", d.appendChild(E)), e.parentElement && $.addClass(e.parentElement, CONSTANTS.VIDEO_PLAYER), n && n()
};
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.VideoElement = function() {
    var e = {
            VIDEO_DATA_ID: "data-video-id",
            VIDEO_DATA_TYPE: "data-video-type",
            VIDEO_PLAYER_ID: "data-player-id",
            VIDEO_PLAYER_CLASS: "js-videoElementPlayer",
            VIDEO_TRIGGER_PLAY: "js-videoElement__trigger",
            VIDEO_LOADER: "js-videoElement__loader",
            VIDEO_PLAY_ICON: "js-videoElement__playIcon"
        },
        t = function(n, a) {
            var s = (n.getElementsByClassName(e.VIDEO_TRIGGER_PLAY)[0], n.getElementsByClassName(e.VIDEO_PLAYER_CLASS)[0]),
                i = n.getElementsByClassName(e.VIDEO_LOADER)[0],
                o = n.getElementsByClassName(e.VIDEO_PLAY_ICON)[0],
                l = function() {
                    $.addEvent(n, "click touchend", "." + e.VIDEO_TRIGGER_PLAY, function(e) {
                        E(e, s), _(), d()
                    })
                },
                r = function() {
                    $.addClass(i, fm.ui.constants.HIDDEN_CLASS)
                },
                _ = function() {
                    $.removeClass(i, fm.ui.constants.HIDDEN_CLASS)
                },
                d = function() {
                    $.addClass(o, fm.ui.constants.HIDDEN_CLASS)
                },
                E = function(t, n) {
                    var a = "",
                        s = "",
                        i = "",
                        o = {};
                    t.hasAttribute(e.VIDEO_DATA_ID) && t.hasAttribute(e.VIDEO_DATA_TYPE) && (a = t.getAttribute(e.VIDEO_DATA_ID), s = t.getAttribute(e.VIDEO_DATA_TYPE), i = t.getAttribute(e.VIDEO_PLAYER_ID), null !== a && null !== s && (o.type = s, o.autoplay = !0, o.hideAd = !1, o.source = a, "theplatform" === s && "" === i ? o.playerId = fm.ui.constants.PLATFORM_DEFAULT_PLAYER_ID : o.playerId = i, o.width = "100%", o.height = "100%", n.innerHTML = "", fm.ui.videoPlayer.init(n, o, r)))
                };
            t.prototype.init = function() {
                l()
            }
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.CountdownModule = function() {
    "use strict";
    var e = {
            COUNTDOWN: "js-countdown",
            WRAPPER_CLASS: "js-countdownWrapper",
            DAYS: "js-countdown__days",
            HOURS: "js-countdown__hours",
            MINUTES: "js-countdown__minutes",
            SECONDS: "js-countdown__seconds"
        },
        t = function(t, n) {
            function a() {
                var e = s(i);
                l.innerHTML = e.days, r.innerHTML = e.hours, _.innerHTML = e.minutes, d.innerHTML = e.seconds, e.total <= 0 && ($.addClass(t, "hidden"), clearInterval(E)), e.total > 0 && $.hasClass(t, "hidden") && $.removeClass(t, "hidden")
            }

            function s(e) {
                var t = Date.parse(e) - Date.now(),
                    n = Math.floor(t / 1e3 % 60),
                    a = Math.floor(t / 6e4 % 60),
                    s = Math.floor(t / 36e5 % 24),
                    i = Math.floor(t / 864e5);
                return o = {
                    total: t,
                    days: i,
                    hours: s,
                    minutes: a,
                    seconds: n
                }
            }
            var i = t.dataset.countdown,
                o = {},
                l = t.getElementsByClassName(e.DAYS)[0],
                r = t.getElementsByClassName(e.HOURS)[0],
                _ = t.getElementsByClassName(e.MINUTES)[0],
                d = t.getElementsByClassName(e.SECONDS)[0],
                E = setInterval(a, 1e3)
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.tabletRotation = function() {
    var e, t = document.getElementById("viewport"),
        n = 3,
        a = function() {
            $.isTablet() && (s(), $.addOrientationChangeEvent(s))
        },
        s = function() {
            var a = $.isLandscape() ? .8888888 : 1;
            t.setAttribute("content", "width=device-width,maximum-scale=" + a), clearTimeout(e), e = setTimeout(function() {
                Math.abs(window.innerWidth - document.body.clientWidth) > n && (t.setAttribute("content", "width=device-width"), t.setAttribute("content", "width=device-width,maximum-scale=" + a))
            }, 300)
        };
    return {
        init: a
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.topNavigation = function() {
    function e(e) {
        e.preventDefault(), e.stopPropagation(), c = fm.ui.searchBar.isOpened(), C || ($.addClass(S, u.TOP_MENU_ACTIVE_CLASS), $.addClass(m, u.HAMBURGER_ACTIVE_CLASS), n(), C = !0), c && fm.ui.searchBar.closeSearchBox(e)
    }

    function t(e) {
        C && ($targetElement = e.target, ($targetElement === m || m.contains($targetElement) || $targetElement === L || A.contains($targetElement) && $targetElement !== T && !T.contains($targetElement)) && (e.preventDefault(), e.stopPropagation()), S.contains($targetElement) || ($.removeClass(S, u.TOP_MENU_ACTIVE_CLASS), setTimeout(function() {
            $.removeClass(m, u.HAMBURGER_ACTIVE_CLASS)
        }, 250), a(), C = !1))
    }

    function n() {
        m.removeEventListener("click", e), m.removeEventListener("touchend", e), R.addEventListener("click", t), R.addEventListener("touchend", t)
    }

    function a() {
        R.removeEventListener("click", t), R.removeEventListener("touchend", t), m.addEventListener("click", e), m.addEventListener("touchend", e)
    }

    function s(e) {
        var t = document.documentElement.clientWidth;
        c = fm.ui.searchBar.isOpened(), t >= fm.ui.constants.TABLET_MIN_SIZE && (e.preventDefault(), e.stopPropagation(), I || ($.addClass(p, u.POP_UP_ACTIVE_CLASS), o(), I = !0), c && fm.ui.searchBar.closeSearchBox(e))
    }

    function i(e) {
        I && ($targetElement = e.target, ($targetElement === p || $targetElement === h) && (e.preventDefault(), e.stopPropagation()), f.contains($targetElement) || ($.removeClass(p, u.POP_UP_ACTIVE_CLASS), l(), I = !1))
    }

    function o() {
        p.removeEventListener("click", s), p.removeEventListener("touchend", s), R.addEventListener("click", i), R.addEventListener("touchend", i)
    }

    function l() {
        R.removeEventListener("click", i), R.removeEventListener("touchend", i), p.addEventListener("click", s), p.addEventListener("touchend", s)
    }

    function r() {
        var e, t, n, a = 0;
        window.addEventListener("scroll", function(s) {
            t = window.scrollY, n = v.getBoundingClientRect().top, a = document.documentElement.clientWidth, 0 >= n ? (t > e ? ($.removeClass(N, u.EXPLORE_TOP_BAR_ACTIVE_CLASS), $.removeClass(y, u.TABLET_STICKY_BOX_EXPLORE_MORE_ACTIVE_CLASS), D && $.removeClass(D, u.TABLET_TOPIC_CONTENT_EXPLORE_MORE_ACTIVE_CLASS), e = t - 1) : ($.isDesktop() || ($.addClass(N, u.EXPLORE_TOP_BAR_ACTIVE_CLASS), $.addClass(y, u.TABLET_STICKY_BOX_EXPLORE_MORE_ACTIVE_CLASS), D && $.addClass(D, u.TABLET_TOPIC_CONTENT_EXPLORE_MORE_ACTIVE_CLASS)), e = t + 1), O || ($.addClass(g, u.TOPNAV_FIXED_CLASS), $.addClass(v, u.HEADER_SPACE_ACTIVE_CLASS), O = !0), $.isDesktop() && (g.style.left = 0 - window.scrollX + "px")) : O && ($.isDesktop() && (g.style.left = 0, g.style.top = 0), $.addClass(N, u.EXPLORE_TOP_BAR_ACTIVE_CLASS), $.addClass(y, u.TABLET_STICKY_BOX_EXPLORE_MORE_ACTIVE_CLASS), D && $.addClass(D, u.TABLET_TOPIC_CONTENT_EXPLORE_MORE_ACTIVE_CLASS), $.removeClass(g, u.TOPNAV_FIXED_CLASS), $.removeClass(v, u.HEADER_SPACE_ACTIVE_CLASS), O = !1), $.isDesktop() && $.hasClass(g, u.TOPNAV_FIXED_CLASS) && ($.addEvent(g, "mouseover", "." + u.TOPNAV_FIXED_CLASS, function() {
                $.addClass(N, u.EXPLORE_TOP_BAR_ACTIVE_CLASS), $.addClass(y, u.TABLET_STICKY_BOX_EXPLORE_MORE_ACTIVE_CLASS), D && $.addClass(D, u.TABLET_TOPIC_CONTENT_EXPLORE_MORE_ACTIVE_CLASS)
            }), $.addEvent(g, "mouseout", "." + u.TOPNAV_FIXED_CLASS, function() {
                $.removeClass(N, u.EXPLORE_TOP_BAR_ACTIVE_CLASS), $.removeClass(y, u.TABLET_STICKY_BOX_EXPLORE_MORE_ACTIVE_CLASS), D && $.removeClass(D, u.TABLET_TOPIC_CONTENT_EXPLORE_MORE_ACTIVE_CLASS)
            }))
        })
    }

    function _() {
        return O
    }

    function d() {
        var e;
        return e = $.isMobile() ? C : I
    }

    function E() {
        a(), l(), r()
    }
    var c, u = {
            HAMBURGER_ACTIVE_CLASS: "topNav__hamburger--active",
            TOP_MENU_ACTIVE_CLASS: "topMenu--active",
            POP_UP_ACTIVE_CLASS: "topMenu__otherLinks--active",
            TOPNAV_FIXED_CLASS: "topNav--fixed",
            HEADER_SPACE_ACTIVE_CLASS: "topNav__stickySpace--active",
            EXPLORE_TOP_BAR_ACTIVE_CLASS: "exploreTopBar__menu--active",
            MOBILE_STICKY_BOX_ID: "js-topNav__mobileStickyBox",
            TABLET_STICKY_BOX_EXPLORE_MORE_ACTIVE_CLASS: "topNav__mobileStickyBox--exploreMoreActive",
            TABLET_TOPIC_CONTENT_EXPLORE_MORE_ACTIVE_CLASS: "topicContent--exploreMoreActive",
            TOPNAV_CONTAINER: "js-topNav__container",
            DOTS_BUTTON: "js-dotsButton",
            SOCIAL_ICONS_LIST: "socialIcons__list",
            SOCIAL_ICONS_ITEM: "socialIcons__item"
        },
        m = document.getElementsByClassName("js-topNav__hamburger")[0],
        S = document.getElementsByClassName("js-topMenu")[0],
        C = !1,
        A = (document.getElementsByClassName(u.TOPNAV_CONTAINER)[0], document.getElementsByClassName("js-topNavAd")[0]),
        T = document.getElementsByClassName("js-advertLeaderboard")[0],
        L = document.getElementsByClassName("js-topNav__fmLogo")[0],
        p = document.getElementsByClassName("js-topMenu__otherLinks")[0],
        f = document.getElementsByClassName("js-topMenu__popUp")[0],
        h = document.getElementsByClassName(u.DOTS_BUTTON)[0],
        I = !1,
        N = document.getElementsByClassName("js-exploreTopBar__menu")[0],
        g = document.getElementsByClassName("js-topNav")[0],
        v = document.getElementsByClassName("js-topNav__stickySpace")[0],
        O = !1,
        R = document.getElementsByTagName("html")[0],
        y = document.getElementById(u.MOBILE_STICKY_BOX_ID),
        D = document.getElementsByClassName(u.TABLET_TOPIC_CONTENT_EXPLORE_MORE_ACTIVE_CLASS)[0];
    document.getElementsByClassName(u.SOCIAL_ICONS_LIST);
    return {
        init: E,
        isStickyMenu: _,
        closePopup: i,
        closeMobileMenu: t,
        isOpened: d
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.hubpage = function() {
    function e() {
        var e = document.getElementsByClassName(i.LOAD_MODULE_CLASS);
        void 0 !== e && null !== e && e.length && window.addEventListener("scroll", t)
    }

    function t(e) {
        var a = document.getElementsByClassName(i.LOAD_MODULE_CLASS)[0];
        if (null !== a) {
            var s = a.getBoundingClientRect().top;
            s <= window.innerHeight && (window.removeEventListener("scroll", t), n(a))
        }
    }

    function n(e) {
        var t = document.getElementsByClassName("js-moduleLoader")[0],
            n = t.getElementsByClassName(fm.ui.constants.LOADER_CLASS)[0],
            s = e.getAttribute(i.LOAD_MODULES_API_URL_ATTR);
        s += "/" + o, $.removeClass(n, fm.ui.constants.HIDDEN_CLASS), $.getData(s, function(t) {
            a(t, e, n)
        }, function(e) {
            $.addClass(n, fm.ui.constants.HIDDEN_CLASS)
        }, !1)
    }

    function a(e, n, a) {
        var s, l = n.getAttribute(i.PAGE_HUB_SELECTOR_ATTR),
            r = document.getElementsByClassName(l)[0],
            _ = document.createElement("div");
        _.innerHTML = e, r.appendChild(_), s = r.getElementsByClassName(i.PAGE_LATEST_PANEL_CLASS)[0], s || (window.addEventListener("scroll", t), o += i.PAGE_NUMBER_PANELS), $.addClass(a, fm.ui.constants.HIDDEN_CLASS), fm.ui.utils.initializeModules(r)
    }

    function s() {
        e()
    }
    var i = {
            LOAD_MODULE_CLASS: "load-more-hub-content",
            LOAD_MODULES_API_URL_ATTR: "data-stream",
            PAGE_HUB_SELECTOR_ATTR: "data-append-to",
            PAGE_LATEST_PANEL_CLASS: "js-latest",
            PAGE_NUMBER_PANELS: 3
        },
        o = i.PAGE_NUMBER_PANELS;
    return {
        init: s
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.TabModule = function() {
    var e = {
            TAB_CONTAINER_CLASS: "js-tabContainer",
            TAB_HEADER_CONTAINER_CLASS: "js-tabHeaderContainer",
            TAB_HEADER_CLASS: "js-tabHeader",
            TAB_HEADER_NAME_CLASS: "js-tabHeaderName",
            TAB_CLASS: "js-tab",
            TAB_HEADER_NUMBER_ATTR: "data-tab-number",
            TAB_MOBILE_ATTR: "data-mobile",
            TAB_TABLET_ATTR: "data-tablet",
            TAB_DESKTOP_ATTR: "data-desktop",
            TAB_AD_SHOW_LANDING: "ad--showLanding"
        },
        t = function(n) {
            var a = n.getElementsByClassName(e.TAB_HEADER_CONTAINER_CLASS)[0],
                s = function() {
                    var t, a = n.querySelectorAll("." + e.TAB_HEADER_CONTAINER_CLASS + " ." + e.TAB_HEADER_NAME_CLASS),
                        s = "",
                        i = 0,
                        l = 0;
                    for (l = 0, i = a.length; i > l; l++)
                        if (s = a[l], $.isMobile()) {
                            if (!s.hasAttribute(e.TAB_MOBILE_ATTR) || s.getAttribute(e.TAB_MOBILE_ATTR) !== fm.ui.constants.HIDDEN_CLASS) {
                                t = s.parentElement;
                                break
                            }
                        } else if ($.isTablet() && $.isPortrait()) {
                        if (!s.hasAttribute(e.TAB_TABLET_ATTR) || s.getAttribute(e.TAB_TABLET_ATTR) !== fm.ui.constants.HIDDEN_CLASS) {
                            t = s.parentElement;
                            break
                        }
                    } else if (!s.hasAttribute(e.TAB_DESKTOP_ATTR) || s.getAttribute(e.TAB_DESKTOP_ATTR) !== fm.ui.constants.HIDDEN_CLASS) {
                        t = s.parentElement;
                        break
                    }
                    o(t)
                },
                i = function(e) {
                    $.hasClass(e, fm.ui.constants.ACTIVE_CLASS) || o(e)
                },
                o = function(t) {
                    var s = t.getElementsByClassName(e.TAB_HEADER_NAME_CLASS)[0],
                        i = s.getAttribute(e.TAB_HEADER_NUMBER_ATTR),
                        o = a.getElementsByClassName(e.TAB_HEADER_CLASS + " " + fm.ui.constants.ACTIVE_CLASS)[0],
                        l = n.getElementsByClassName(e.TAB_CLASS + " " + fm.ui.constants.ACTIVE_CLASS)[0],
                        r = n.getElementsByClassName(e.TAB_CLASS)[i];
                    l && $.removeClass(l, fm.ui.constants.ACTIVE_CLASS), o && $.removeClass(o, fm.ui.constants.ACTIVE_CLASS), t && $.addClass(t, fm.ui.constants.ACTIVE_CLASS), r && ($.addClass(r, fm.ui.constants.ACTIVE_CLASS), fm.ui.utils.initializeModules(r.getElementsByClassName(e.TAB_AD_SHOW_LANDING)[0], !0))
                };
            t.prototype.init = function() {
                s(), $.addEvent(a, "click touchend", "." + e.TAB_HEADER_CLASS, function(e) {
                    i(e)
                })
            }
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.LatestModule = function() {
    var e = {
            LATEST_API_URL_ATTR: "data-stream",
            LATEST_GRID_SELECTOR_ATTR: "data-append-to",
            LATEST_LOAD_MORE_CLASS: "js-latestLoadMore",
            SHORT_AD_CONFIG: {
                resultsNumber: 7,
                adType: 1
            },
            TALL_AD_CONFIG: {
                resultsNumber: 6,
                adType: 2
            },
            NO_AD_CONFIG: {
                resultsNumber: 8,
                adType: 0
            }
        },
        t = function(n) {
            var a = e.SHORT_AD_CONFIG.resultsNumber,
                s = 1,
                i = 2,
                o = "",
                l = n,
                r = function(t) {
                    var n;
                    o = o || l.getElementsByClassName(e.LATEST_LOAD_MORE_CLASS)[0], null !== o && (n = o.getBoundingClientRect().top, n <= window.innerHeight && (window.removeEventListener("scroll", r), _(o)))
                },
                _ = function(t) {
                    var n = t,
                        o = n.parentElement.parentElement,
                        l = n.getElementsByClassName(fm.ui.constants.LOADER_CLASS)[0],
                        r = n.getAttribute(e.LATEST_API_URL_ATTR),
                        _ = {},
                        c = s % 3;
                    _ = 0 === c ? s % 6 === 0 ? e.SHORT_AD_CONFIG : e.TALL_AD_CONFIG : e.NO_AD_CONFIG, $.removeClass(l, fm.ui.constants.HIDDEN_CLASS), r += "/" + a, r += "/" + _.resultsNumber, r += "/" + _.adType, r += "/" + i, $.getData(r, function(e) {
                        d(e, n, o, l, _)
                    }, function(e) {
                        E(l)
                    }, !1)
                },
                d = function(t, n, i, o, l) {
                    if (null !== t && "" !== t) {
                        fm.analytics.trackPageview({
                            event: "load"
                        });
                        var _ = n.getAttribute(e.LATEST_GRID_SELECTOR_ATTR),
                            d = i.getElementsByClassName(_)[0],
                            c = document.createElement("div");
                        c.innerHTML = t, d.appendChild(c), E(o), s++, a += l.resultsNumber, fm.ui.utils.initializeModules(c, !0), fm.clicktrack.init(c), window.addEventListener("scroll", r)
                    } else E(o)
                },
                E = function(e) {
                    $.addClass(e, fm.ui.constants.HIDDEN_CLASS)
                };
            t.prototype.init = function() {
                window.addEventListener("scroll", r)
            }
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.SliderGridModule = function() {
    var e = {
            LOAD_MORE_BUTTON_SELECTOR: "js-sliderGridLoadMoreButton",
            SLIDER_BACK_ARROW: "js-sliderPrevBtn",
            SLIDER_NEXT_ARROW: "js-sliderNextBtn",
            SLIDER_HIDDEN_ARROW: "sliderArrow--hidden",
            SLIDE_CLASS: "js-sliderItem",
            SLIDE_INACTIVE_CLASS: "slider__item__mobile--inactive"
        },
        t = function(n) {
            var a = 1,
                s = 0,
                i = 1,
                o = 0,
                l = n.getElementsByClassName(e.SLIDER_BACK_ARROW)[0],
                r = n.getElementsByClassName(e.SLIDER_NEXT_ARROW)[0],
                _ = n.getElementsByClassName(e.LOAD_MORE_BUTTON_SELECTOR)[0],
                d = n.getElementsByClassName(e.SLIDE_CLASS),
                E = function() {
                    1 === i ? ($.addClass(l, e.SLIDER_HIDDEN_ARROW), $.removeClass(r, e.SLIDER_HIDDEN_ARROW)) : i === o ? ($.addClass(r, e.SLIDER_HIDDEN_ARROW), $.removeClass(l, e.SLIDER_HIDDEN_ARROW)) : ($.removeClass(l, e.SLIDER_HIDDEN_ARROW), $.removeClass(r, e.SLIDER_HIDDEN_ARROW))
                },
                c = function(t) {
                    t.preventDefault(), $.removeClass(d[a], e.SLIDE_INACTIVE_CLASS), a++, a === o && $.addClass(_, fm.ui.constants.HIDDEN_CLASS)
                },
                u = function() {
                    for (s = 1; o > s; s++) $.addClass(d[s], e.SLIDE_INACTIVE_CLASS)
                };
            t.prototype.init = function() {
                if (d.length > 1) {
                    new fm.ui.SliderModule(n, {
                        autoPlay: !1,
                        showHeader: !1,
                        slideshow: !1,
                        showCounter: !0,
                        showIndicators: !1,
                        showHeaderInfo: !1,
                        onSlideOutFinish: function(e) {
                            i = e.slideIndex + 1, E(), fm.ui.utils.initializeModules(e.currentSlide, !0)
                        },
                        afterSliderInit: function(e) {
                            o = e.length, E(), u()
                        }
                    });
                    _ && $.addClickEvent(_, c)
                }
            }
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.SliderListicleModule = function() {
    var e = {
            SLIDER: "js-slider",
            SLIDE_CLASS: "js-sliderItem",
            SLIDER_BACK_ARROW: "js-sliderPrevBtn",
            SLIDER_NEXT_ARROW: "js-sliderNextBtn",
            RENDER_TYPE_REQUEST_PARAMETER: "partial",
            LAZY_LOADING_CLASS: "js-lazyLoadingItem",
            VIDEO_THUMBNAIL_CLASS: "js-videoThumbnail",
            USER_TRIGGERED_CLASS: "js-lazyUserTriggered",
            LISTICLE_CONTAINER: "js-topicListicle",
            LISTICLE_CONTENT_HOLDER: "js-listicleContentHolder",
            LOADER: "js-loader--listicle",
            IFRAME_ELEMENT_CLASS: "topicMedia__iFrame",
            ARTICLE_AD: "article__ad",
            LISTICLE_HEADER_WRAPPER: "js-sectionHeader__wrapper",
            TOPIC_CONTENT_CLASS: "js-topicContent",
            TOP_NAV_CLASS: "js-topNav",
            TOPIC_NAV_CLASS: "js-topicNavTitleHeaderContainer",
            TOPIC_CONTENT: "js-topicContent__pageWrapper",
            LANDING_CONTENT_CLASS: "home-hub",
            LANDING_CONTENT: "listicle__wrapper"
        },
        t = function(n) {
            var a, s, i, o, l, r, _, d, E, c, u, m, S, C, A = 0,
                T = n.getElementsByClassName(e.SLIDE_CLASS),
                L = n.getElementsByClassName(e.SLIDER_BACK_ARROW),
                p = n.getElementsByClassName(e.SLIDER_NEXT_ARROW),
                f = n.dataset.pageurl,
                h = n.dataset.modifierClass || "",
                I = function(t) {
                    if (i = t.newSlide.dataset.num, o = t.newSlide, l = t.oldSlide, a = {
                            renderType: e.RENDER_TYPE_REQUEST_PARAMETER,
                            slide: i,
                            modifierClass: h
                        }, window.location.search) {
                        var s = $.parseQueryString(window.location.search);
                        a.token = s && s.token ? s.token : ""
                    }
                    f && $.getData(f, function(a) {
                        l.removeAttribute("data-active"), $.killVideoPlayer(n, l, e.IFRAME_ELEMENT_CLASS, "", "", !0), N(t, a)
                    }, function(e) {
                        console.log(e)
                    }, !1, a)
                },
                N = function(t, n) {
                    o = t.newSlide, l = t.oldSlide, newLoader = o.getElementsByClassName(e.LOADER)[0], oldLoader = l.getElementsByClassName(e.LOADER)[0], oldLoader && $.removeClass(oldLoader, fm.ui.constants.HIDDEN_CLASS), newLoader && $.addClass(newLoader, fm.ui.constants.HIDDEN_CLASS), "intro" !== o.dataset.num && (o.getElementsByClassName(e.LISTICLE_CONTENT_HOLDER)[0].innerHTML = n), lazyElements = o.getElementsByClassName(e.USER_TRIGGERED_CLASS);
                    for (var a = 0, i = lazyElements.length; i > a; a++) $.hasClass(lazyElements[a], e.USER_TRIGGERED_CLASS) && lazyElements[a].getElementsByClassName(e.VIDEO_THUMBNAIL_CLASS).length ? (lazyVideo = new fm.ui.LazyVideoModule(lazyElements[a]), lazyVideo.init()) : (s = new fm.ui.lazyLoader(o, {
                        userTriggered: !0,
                        showLoader: !0
                    }), s.init());
                    twttr && twttr.widgets && twttr.widgets.load(o)
                },
                g = function(e) {
                    o = e.newSlide, i = e.slideIndex, 0 === i ? ($.addClass(L, fm.ui.constants.HIDDEN_CLASS), $.removeClass(p, fm.ui.constants.HIDDEN_CLASS)) : i === A ? $.removeClass(L, fm.ui.constants.HIDDEN_CLASS) : ($.removeClass(L, fm.ui.constants.HIDDEN_CLASS), $.removeClass(p, fm.ui.constants.HIDDEN_CLASS)), o.dataset.active || (I(e), o.dataset.active = !0), fm.analytics.trackPageview({
                        pageNum: i || 1
                    })
                },
                v = function(t) {
                    if (r = document.getElementsByClassName(e.TOPIC_CONTENT_CLASS)[0] || document.getElementsByClassName(e.LANDING_CONTENT_CLASS)[0],
                        _ = t.parentElement.getElementsByClassName(e.LISTICLE_HEADER_WRAPPER)[0] ? t.parentElement.getElementsByClassName(e.LISTICLE_HEADER_WRAPPER)[0].clientHeight : 250, d = document.getElementsByClassName(e.TOP_NAV_CLASS)[0] ? document.getElementsByClassName(e.TOP_NAV_CLASS)[0].clientHeight : 50, E = document.getElementsByClassName(e.TOPIC_NAV_CLASS)[0] ? document.getElementsByClassName(e.TOPIC_NAV_CLASS)[0].clientHeight : 50, c = 0, S = t.getBoundingClientRect().top, C = document.body.getBoundingClientRect().top, $.hasClass(t, e.SLIDER)) {
                        if (u = t, $.isDesktop() || (m = $.isMobile() ? 40 : 0, c = d + E + m), $.hasClass(r, e.TOPIC_CONTENT_CLASS)) {
                            do u = u.parentNode; while (u.className && !$.hasClass(u, e.TOPIC_CONTENT));
                            r.scrollTop = u.offsetTop + _ - c
                        }
                        $.hasClass(r, e.LANDING_CONTENT_CLASS) && window.scroll(0, S - C - d)
                    }
                };
            t.prototype.init = function() {
                var t, a = {};
                if (T.length) {
                    t = n.dataset.sliderconfig, a = t ? JSON.parse(t) : {
                        autoPlay: !1,
                        showHeader: !1,
                        slideshow: !1,
                        showCounter: !1,
                        showIndicators: !1,
                        showHeaderInfo: !1,
                        placeholders: {
                            "js-listicleSlideCounter": "js-slideItemCounter"
                        }
                    }, a.onSlideInStart = function(t) {
                        var a = {
                                slideIndex: t.newSlideIndex,
                                newSlide: t.newSlide,
                                oldSlide: t.currentSlide
                            },
                            s = n.getElementsByClassName(e.ARTICLE_AD)[0];
                        s && fm.ui.utils.initializeModules(s, !0), g(a), o = a.newSlide
                    }, a.afterSliderInit = function(t) {
                        A = t.length - 1, o = t.currentSlide, lazyElements = o.getElementsByClassName(e.LAZY_LOADING_CLASS);
                        for (var n = 0, a = lazyElements.length; a > n; n++) $.hasClass(lazyElements[n], e.USER_TRIGGERED_CLASS) && lazyElements[n].getElementsByClassName(e.VIDEO_THUMBNAIL_CLASS).length ? (lazyVideo = new fm.ui.LazyVideoModule(lazyElements[n]), lazyVideo.init()) : (s = new fm.ui.lazyLoader(o, {
                            userTriggered: !0,
                            showLoader: !0
                        }), s.init())
                    }, a.onSlideInFinish = function(e) {
                        v(n)
                    };
                    new fm.ui.SliderModule(n, a)
                }
            }
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.userComments = function() {
    var e = {},
        t = !1,
        n = {
            COMMENTS_COUNT_API_URL: "https://graph.facebook.com/" + fm.ui.constants.FB_API_VERSION + "/?fields=share{comment_count}&id=",
            TOGGLE_ON_TXT: "Comments ",
            TOGGLE_OFF_TXT: "Hide comments",
            NO_COMMENTS_TXT: "Be the first to comment...",
            DEFAULT_CLASS: "model userComments ",
            BUTTON_CSS_CLASS: "js-userCommentsBtn",
            BUTTON_SELECTOR: ".js-userCommentsBtn"
        },
        a = function(a) {
            function s() {
                var e = fm.omniture.initPageData(),
                    t = (e.pageName || "").replace("fm|", ""),
                    n = "|click|center|comments",
                    a = {
                        title: "comments"
                    };
                a.events = ["event10"], a.info = {
                    prop40: t + n,
                    prop42: t + n + "|" + a.title,
                    prop43: e.prop4 + n,
                    prop45: e.prop4 + n + "|" + a.title,
                    eVar40: t + n,
                    eVar42: t + n + "|" + a.title,
                    eVar43: e.prop4 + n,
                    eVar45: e.prop4 + n + "|" + a.title
                }, C.trackingData = a
            }

            function i() {
                s(), fm.analytics.trackEvent(C.trackingData)
            }
            var o, l, r = this,
                _ = a,
                d = _.getElementsByClassName(n.BUTTON_CSS_CLASS)[0],
                E = _.getElementsByClassName("js-userComments")[0],
                c = 0,
                u = !1,
                m = E.dataset.href,
                S = document.createElement("span"),
                C = {},
                A = function() {
                    0 === c ? d.textContent = n.NO_COMMENTS_TXT : d.textContent = n.TOGGLE_ON_TXT + "(" + c + ")"
                },
                T = function() {
                    var e = function() {
                            if (!u) {
                                var e = JSON.parse(this.responseText);
                                c = e.share.comment_count, A()
                            }
                        },
                        t = new XMLHttpRequest;
                    t.addEventListener("load", e), t.open("GET", n.COMMENTS_COUNT_API_URL + m), t.send()
                },
                L = function() {
                    _.className = n.DEFAULT_CLASS, l.remove(), l = null, u = !1, A(), T(), d.disabled = !1
                },
                p = function() {
                    _.className = n.DEFAULT_CLASS + "userComments--on", u = !0, l = E.cloneNode(!0), _.appendChild(S), _.appendChild(l), d.textContent = n.TOGGLE_OFF_TXT, FB.XFBML.parse(_, function() {
                        S.remove(), d.disabled = !1
                    })
                };
            this.onToggleButtonClick = function(e) {
                e.preventDefault(), d.disabled || (d.disabled = !0, u ? L() : (p(), i()))
            };
            var f = function() {
                o = "userComments-" + fm.ui.utils.guid(), d.dataset.commentsId = o, e[o] = r, _.removeChild(E), E.className = "fb-comments", S.className = "loader", T(), t || (t = !0, $.addEvent(document.body, "click", [n.BUTTON_SELECTOR], [function(t, n) {
                    e[t.dataset.commentsId].onToggleButtonClick(n)
                }]))
            };
            f()
        };
    return a
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.showLanding = function() {
    function e() {
        fm.ui.galleryOverlay.init()
    }
    return {
        init: e
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.episodesMedia = function() {
    function e() {
        $pageElement = document.getElementsByClassName(fm.ui.constants.PAGE_CLASS)[0], t = $pageElement.getElementsByClassName(n.EPISODES_CONTAINER)[0], $slider = $pageElement.getElementsByClassName(n.VIDEO_CAROUSEL_PLAYER)[0], t && ($seasonDropdown = t.getElementsByClassName(n.SEASONS_LIST_FILTER_OPTIONS)[0], $seasonsContainer = t.getElementsByClassName(n.SEASON_CONTAINER), $seasonFilter = t.getElementsByClassName(n.SEASON_LIST_SELECTED_FILTER)[0], $dropdownArrow = t.getElementsByClassName(n.SEASON_LIST_DROPDOWN)[0]), t && $.addEvent(t, "click touchend", ["." + n.SEASON_FILTER_CONTAINER, "." + n.SEASONS_LIST_FILTER], [function(e, t) {
            a = s($seasonDropdown, $dropdownArrow, a)
        }, function(e, t) {
            for (var n = 0; n < $seasonsContainer.length; n++) $seasonsContainer[n].dataset.season == +e.dataset.season ? $.removeClass($seasonsContainer[n], "hidden") : $.addClass($seasonsContainer[n], "hidden");
            a = s($seasonDropdown, $dropdownArrow, a), $seasonFilter.innerHTML = e.firstChild.innerHTML
        }])
    }
    var t, n = {
            SEASON_FILTER_CONTAINER: "seasonsList__filterContainer",
            SEASONS_LIST_FILTER: "seasonsList__filter__optionsElement",
            EPISODES_CONTAINER: "episodesContainer",
            SEASONS_LIST_FILTER_OPTIONS: "seasonsList__filter__Options",
            SEASON_CONTAINER: "seasonContent__container",
            SEASON_LIST_SELECTED_FILTER: "seasonsList__filter--selectedFilter",
            SEASON_LIST_DROPDOWN: "seasonsList__filter__dropdown",
            SEASON_LIST_DROPDOWN_ON: "seasonsList__filter__dropdown--on",
            SEASON_LIST_DROPDOWN_OFF: "seasonsList__filter__dropdown--off"
        },
        a = !1,
        s = function(e, t, a) {
            return a ? $.addClass(e, fm.ui.constants.HIDDEN_CLASS) : $.removeClass(e, fm.ui.constants.HIDDEN_CLASS), a = !a, a ? ($.removeClass(t, n.SEASON_LIST_DROPDOWN_ON), $.addClass(t, n.SEASON_LIST_DROPDOWN_OFF)) : ($.removeClass(t, n.SEASON_LIST_DROPDOWN_OFF), $.addClass(t, n.SEASON_LIST_DROPDOWN_ON)), a
        };
    return {
        init: e
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.galleryOverlay = function() {
    var e = {
            PAGE_CLASS: "page",
            LINK_HEADER: "js-sectionHeader__link",
            TITLE_HEADER: "js-topicModuleTitle",
            SUMMARY_HEADER: "js-sectionHeader__summary",
            WRAPPER_HEADER: "js-sectionHeader__wrapper",
            RUBRIC_HEADER: "js-rubric--header",
            PAGES_GALLERY: "js-pagesGallery",
            OVERLAY_GALLERY_CLASS: "gallery--overlay",
            OVERLAY_GALLERY_ID: "overlayGallery",
            ICON_CLOSE_CLASS: "icon-close",
            OVERLAY_GALLERY_CONTAINER_CLASS: "galleryContainer--overlay",
            OVERLAY_GALLERY_CLOSE_CLASS: "galleryCloseIcon--overlay",
            TOPNAV_CLASS: "js-topNav",
            TOPNAV_CONTAINER_CLASS: "js-topNav__container",
            SLIDER_ITEM: "js-sliderItem",
            SLIDER_MODULE: "js-sliderModule"
        },
        t = function s(t, n) {
            var a = document.getElementById(e.OVERLAY_GALLERY_ID);
            a && a.remove(), t._$closeButton.removeEventListener("click", s.bind(t, t)), t._$topNavContainer.removeEventListener("click", s.bind(t, t))
        },
        n = function(n, a, s) {
            var i = "",
                o = "",
                l = "";
            l = document.createElement("div"), l.id = e.OVERLAY_GALLERY_ID, $.addClass(l, e.OVERLAY_GALLERY_CLASS), o = document.createElement("div"), $.addClass(o, e.OVERLAY_GALLERY_CONTAINER_CLASS), l.appendChild(o), i = "/" + n.dataset.path + "?renderType=content&overlay=true", $.getData(i, function(n) {
                s._$topNav.appendChild(l), o.innerHTML = n, s._$closeButton = document.createElement("button"), $.addClass(s._$closeButton, e.ICON_CLOSE_CLASS), $.addClass(s._$closeButton, e.OVERLAY_GALLERY_CLOSE_CLASS), o.insertBefore(s._$closeButton, o.firstElementChild), s._$closeButton.addEventListener("click", t.bind(s, s)), s._$topNavContainer.addEventListener("click", t.bind(s, s)), fm.ui.utils.initializeModules(l, !1)
            }, function(e) {}, !1)
        },
        a = function() {
            var t, a, s, i, o, l, r, _, d = {};
            _ = document.getElementsByClassName(e.PAGE_CLASS)[0], a = _.getElementsByClassName(e.PAGES_GALLERY)[0], a && ($slider = a.getElementsByClassName(e.SLIDER_MODULE)[0], d._$topNav = document.getElementsByClassName(e.TOPNAV_CLASS)[0], d._$topNavContainer = document.getElementsByClassName(e.TOPNAV_CONTAINER_CLASS)[0], s = a.getElementsByClassName(e.LINK_HEADER)[0], i = a.getElementsByClassName(e.TITLE_HEADER)[0], o = a.getElementsByClassName(e.SUMMARY_HEADER)[0], r = a.getElementsByClassName(e.WRAPPER_HEADER)[0], l = r.getElementsByClassName(e.RUBRIC_HEADER)[0], t = new fm.ui.SliderModule(a.getElementsByClassName(e.SLIDER_MODULE)[0], {
                onSlideInFinish: function(e) {
                    s.href = e.newSlide.dataset.path, i.innerHTML = e.newSlide.dataset.title, o.innerHTML = e.newSlide.dataset.summary, l.innerHTML = e.newSlide.dataset.rubric
                }
            }), $.addEvent($slider, "click", ["." + e.SLIDER_ITEM], [function(e, t) {
                n(e, t, d)
            }]))
        };
    return {
        init: a,
        displayGallery: n
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.eventLanding = function() {
    function e() {
        fm.ui.galleryOverlay.init()
    }
    return {
        init: e
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.videoHero = function() {
    "use strict";
    var e, t, n, a, s, i, o, l, r, d, E, c, u, m, S, C, A, T, L, p, f, h, I, N, g, v, O, R, y, D = {
            VIDEO_PLAYER_AREA: "js-videoPlayerArea",
            VIDEO_PLAYER_IFRAME: "video__player__iframe",
            VIDEO_PLAYER_TITLE_CLASS: "js-videoPlayer__title",
            VIDEO_PLAYER_SUMMARY_CLASS: "js-videoPlayer__description",
            VIDEO_PLAYER_EXPLORE_CLASS: "js-videoPlayer__explore",
            VIDEO_PLAYER_TAG_CONTAINER: "js-videoPlayer__tags",
            VIDEO_PLAYER_COMMENTS_CONTAINER: "js-videoPlayer__userComments",
            VIDEO_TILE_PLAYING_CLASS: "tile--playing",
            VIDEO_PLAYER_ICON_CLASS: "js-icon-play",
            VIDEO_ACTIVE_CLASS: "videoPlayer--active",
            VIDEO_DATA_PATH: "data-path",
            VIDEO_COMMENTS: "js-comments",
            VIDEO_URL_PATH_PARAMETER: "video",
            VIDEO_URL_SEASON_PARAMETER: "season",
            VIDEO_URL_EPISODE_PARAMETER: "episode",
            VIDEO_DESCRIPTION_MAX_CHAR: 360,
            VIDEO_CAROUSEL_PLAYER: "js-videoList",
            SLIDER_ITEM: "slider__item",
            ICON_PLAY_CLASS: "icon-video__control__play",
            ICON_PAUSE_CLASS: "icon-video__control__pause",
            SECTION_COLLECTIVE: "collective",
            SECTION_EVENTS: "events",
            SECTION_SHOWS: "shows"
        },
        M = function(M) {
            n = document.getElementsByClassName(fm.ui.constants.PAGE_CLASS)[0], g = M.dataset.section, m = g === D.SECTION_COLLECTIVE, S = g === D.SECTION_SHOWS;
            var P = function(e) {
                    d = n.getElementsByClassName(D.ICON_PAUSE_CLASS), E = e.getElementsByClassName(D.ICON_PLAY_CLASS), d && d.length && ($.removeClass(d, D.ICON_PAUSE_CLASS), $.addClass(d, D.ICON_PLAY_CLASS)), E && E.length && ($.removeClass(E, D.ICON_PAUSE_CLASS), $.addClass(E, D.ICON_PLAY_CLASS))
                },
                B = function(e, r, _) {
                    if (a = n.getElementsByClassName(D.VIDEO_PLAYER_TITLE_CLASS)[0], s = n.getElementsByClassName(D.VIDEO_PLAYER_SUMMARY_CLASS)[0], i = n.getElementsByClassName(D.VIDEO_PLAYER_EXPLORE_CLASS)[0], l = n.getElementsByClassName(D.VIDEO_PLAYER_TAG_CONTAINER)[0], p = "", f = 0, h = 0, L = {}, I = {}, P(e), a && e.dataset.title && (a.innerHTML = e.dataset.title), s && e.dataset.summary && (N = e.dataset.summary, N.length > D.VIDEO_DESCRIPTION_MAX_CHAR ? $.ellipsis({
                            text: N,
                            maxCharacters: D.VIDEO_DESCRIPTION_MAX_CHAR,
                            readMore: !0,
                            summary: s
                        }) : s.innerHTML = N), e.dataset.tags)
                        if (I = JSON.parse(e.dataset.tags), I.length) {
                            $.removeClass(i, fm.ui.constants.HIDDEN_CLASS);
                            var d = [];
                            for (l.innerHTML = "", f = 0, h = I.length; h > f; f++)
                                if (L = I[f], L.path && L.title) {
                                    var E = document.createElement("a");
                                    E.dataset.track = "item", $.addClass(E, "tag"), E.href = L.path, E.appendChild(document.createTextNode("#" + L.title)), d.push(E)
                                }
                            d.forEach(function(e) {
                                l.appendChild(e)
                            }), fm.clicktrack.init(l)
                        } else $.addClass(i, fm.ui.constants.HIDDEN_CLASS);
                    e.dataset.deeplink && (C = e.dataset.deeplink, history.pushState && history.pushState(null, null, C)), e.hasAttribute(D.VIDEO_DATA_PATH) && m && (t = e.getElementsByClassName(D.VIDEO_COMMENTS)[0].firstChild, t && (o = document.getElementsByClassName(D.VIDEO_PLAYER_COMMENTS_CONTAINER)[0], o.innerHTML = "", o.appendChild(t.cloneNode(!0)), fm.ui.utils.initializeModules(o, !0)))
                };
            this.init = function() {
                r = n.getElementsByClassName(D.VIDEO_CAROUSEL_PLAYER), c = n.getElementsByClassName(D.VIDEO_PLAYER_AREA)[0], y = document.getElementsByClassName(D.VIDEO_PLAYER_ICON_CLASS), window.location.hash || window.location.search ? (A = !1, T = "?video=" + $.getParameterByName(D.VIDEO_URL_PATH_PARAMETER) + "#" + window.location.hash.substring(1), O = $.getParameterByName(D.VIDEO_URL_SEASON_PARAMETER), R = $.getParameterByName(D.VIDEO_URL_EPISODE_PARAMETER), e = S && O && R ? n.querySelectorAll('[data-season="' + O + '"][data-episode="' + R + '"]')[0] : n.querySelectorAll('[data-deeplink="' + T + '"]')[0], ($.isDesktop() || $.isTablet() && $.isLandscape()) && fm.ui.deepLinkShare.init(null, A)) : A = !0, r && _.each(r, function(e) {
                    new fm.ui.SliderModule(e, {
                        onSlideOutStart: function(e) {
                            ($.isMobile() || $.isTablet() && $.isPortrait()) && ($.killVideoPlayer(n, e.currentSlide, D.VIDEO_PLAYER_IFRAME, D.VIDEO_PLAY_ICON_CLASS, D.VIDEO_ACTIVE_CLASS), _.each(y, function(e) {
                                e.style.display = "block"
                            }))
                        }
                    })
                }), c && (v = new fm.ui.VideoModule(n, {
                    onLoadFinish: function(e) {
                        B(e, A), A = !1
                    },
                    activeClass: D.VIDEO_TILE_PLAYING_CLASS
                }, e), v.init()), $.isMobile() || $.addOrientationChangeEvent(function() {
                    u = document.getElementsByClassName(D.SLIDER_ITEM), $.isTablet() && $.isLandscape() && (document.querySelector("body").scrollTop = 0), _.each(u, function(e) {
                        e.style.left = "0"
                    })
                })
            }
        };
    return M
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.VideoModule = function() {
    var e = {
            VIDEO_DATA_ID: "data-video-id",
            VIDEO_DATA_TYPE: "data-video-type",
            VIDEO_PLAYER_ID: "data-player-id",
            VIDEO_PLAYER_CLASS: "js-videoPlayer",
            VIDEO_PLAYER_CONTAINER: "js-videoPlayer__container",
            VIDEO_TRIGGER_PLAY: "js-videoPlayer__trigger",
            VIDEO_INFORMATION_CLASS: "js-videoPlayer__information",
            VIDEO_ACTIVE_CLASS: "videoPlayer--active",
            VIDEO_PLAYER_ICON_CLASS: "js-icon-play",
            VIDEO_PLAYER_IFRAME: "video__player__iframe",
            VIDEO_INNER_PLAY_ICON: "icon-video__control__play",
            SECTION_TITLE_CLASS: "sectionTitle",
            HEADER_CLASS: "topNav",
            SLIDE_CONTAINER: "js-slide__container",
            ACTIVE_SLIDER: "js-activeSlider",
            MEDIA_PAGE: "js-mediaPage"
        },
        t = {},
        n = function(a, s, i) {
            var o, l, r, d, E, c, u = document.getElementsByClassName(fm.ui.constants.PAGE_CLASS)[0],
                m = u.dataset.page || "videoHero",
                S = a.dataset.moduleSettings ? JSON.parse(a.dataset.moduleSettings) : {},
                C = $.extend({}, t, S, s),
                A = document.getElementsByClassName(e.SECTION_TITLE_CLASS)[0],
                T = document.getElementsByClassName(e.HEADER_CLASS)[0],
                L = document.getElementsByClassName(e.MEDIA_PAGE).length,
                p = C.activeClass || e.VIDEO_ACTIVE_CLASS,
                f = C.onLoadFinish || function() {},
                h = A ? A.clientHeight : 0;
            h += T ? T.clientHeight : 0;
            var I, N, g, v, O, R, y, D, M = function() {
                    $.addEvent(a, "mouseup", ["." + e.VIDEO_TRIGGER_PLAY], [function(e) {
                        P(e)
                    }]), $.isTablet() && $.addOrientationChangeEvent(function() {
                        d = u.getElementsByClassName(e.VIDEO_PLAYER_IFRAME)[0], $activeSlider = u.getElementsByClassName("js-activeSlider")[0], E = $activeSlider.getElementsByClassName(fm.ui.constants.CURRENT_SLIDE)[0], c = E.getElementsByClassName(e.VIDEO_TRIGGER_PLAY)[0], $isVideoActive = d.childNodes.length <= 0, $isVideoActive ? (R = c.getElementsByClassName(e.VIDEO_PLAYER_ICON_CLASS)[0], R.style.display = "none", $.isLandscape() && P(c)) : R.style.display = "none"
                    })
                },
                P = function(t) {
                    moduleSliders = u.getElementsByClassName(e.SLIDE_CONTAINER), g = t.getElementsByClassName(e.VIDEO_INFORMATION_CLASS)[0], l = $.getParents(t, "." + e.SLIDE_CONTAINER), r = l[0], o = a.getElementsByClassName(e.VIDEO_PLAYER_CONTAINER), N = r.getElementsByClassName(e.VIDEO_PLAYER_CONTAINER)[0], _.each(moduleSliders, function(t) {
                        $.removeClass(t, e.ACTIVE_SLIDER)
                    }), $.addClass(r, e.ACTIVE_SLIDER), N = L ? t.getElementsByClassName(e.VIDEO_PLAYER_CONTAINER)[0] : r.getElementsByClassName(e.VIDEO_PLAYER_CONTAINER)[0], _.each(o, function(e) {
                        e.innerHTML = "", $.addClass(e, fm.ui.constants.HIDDEN_CLASS)
                    }), g && (($.isDesktop() || $.isTablet() && $.isLandscape()) && fm.ui.deepLinkShare.init(g), w(g, N, function() {
                        f(g), B(t)
                    }, function() {
                        ($.isDesktop() || $.isTablet() && $.isLandscape()) && $.scrollToTopAnimation(g.children.offsetTop - h)
                    }, t))
                },
                B = function(t) {
                    O = a.getElementsByClassName(p), playersPlayIcon = a.getElementsByClassName(e.VIDEO_PLAYER_ICON_CLASS), R = t.getElementsByClassName(e.VIDEO_PLAYER_ICON_CLASS)[0], y = t.getElementsByClassName(e.VIDEO_INNER_PLAY_ICON)[0], l = $.getParents(t, "." + e.SLIDE_CONTAINER), r = l[0], D = r.getElementsByClassName(e.VIDEO_PLAYER_CONTAINER)[0], D = L ? t.getElementsByClassName(e.VIDEO_PLAYER_CONTAINER)[0] : r.getElementsByClassName(e.VIDEO_PLAYER_CONTAINER)[0], $.removeClass(D, fm.ui.constants.HIDDEN_CLASS), O.length && $.removeClass(O[0], p), $.addClass(t, p), $.hasClass(t, p) && ($.isMobile() || $.isTablet() && $.isPortrait()) && D && D.childNodes && D.childNodes.length && (_.each(playersPlayIcon, function(e) {
                        e.style.display = "block"
                    }), R.style.display = "none")
                },
                w = function(t, n, a, s, i) {
                    var o, l, r, _ = {};
                    s && s(), t && t.hasAttribute(e.VIDEO_DATA_ID) && t.hasAttribute(e.VIDEO_DATA_TYPE) && (o = t.getAttribute(e.VIDEO_DATA_ID), l = t.getAttribute(e.VIDEO_DATA_TYPE), r = t.getAttribute(e.VIDEO_PLAYER_ID), n.innerHTML = "", o && l && (_.type = l, _.autoplay = !0, _.hideAd = !1, _.source = o, _.width = "100%", _.height = "100%", _.modifierClass = m, r ? _.playerId = r : _.playerId = fm.ui.constants.PLATFORM_DEFAULT_PLAYER_ID, fm.ui.videoPlayer.init(n, _, a, s, i)))
                };
            n.prototype.init = function() {
                I = (window.location.hash || window.location.search) && i ? i : a.getElementsByClassName(e.VIDEO_INFORMATION_CLASS)[0], v = I.parentNode, P(v), M()
            }
        };
    return n
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.readMoreComponent = function() {
    var e = {},
        t = !1,
        n = {
            INLINE_IMAGE_CLASS: "js-inlineImage",
            BUTTON_SELECTOR: ".js-readMoreButton",
            WRAPPER_CLASS: "readMoreWrapper",
            CROPPABLE_TEXT_CLASS: "readMoreMainText",
            SCROLL_ELEMENT_SELECTOR: ".js-readMoreScrollArea",
            CROP_ACTIVE_BUTTON_LABEL: "Read more",
            CROP_INACTIVE_BUTTON_LABEL: "Show less",
            CROP_ACTIVE_BUTTON_MARGIN: "10px",
            CROP_INACTIVE_BUTTON_MARGIN: "30px",
            MOBILE_MAX_LINE_COUNT: 7,
            DEFAULT_MAX_LINE_COUNT: 4,
            RESIZE_EVENT_DELAY: 1e3
        },
        a = document.body,
        s = a.querySelector(n.SCROLL_ELEMENT_SELECTOR);
    s && (a = s);
    var i = function(s) {
        function i() {
            for (var e, t = p.childNodes.length, a = null, s = 0; t > s; s++) {
                var i = p.childNodes[s];
                if (a) h.appendChild(i), s--, t--;
                else if (i && i.childNodes.length && i.classList && i.classList.contains("text")) {
                    o(i);
                    var l = parseInt(window.getComputedStyle(i).height, 10);
                    E(i, !0) < l && (a = i, p.insertBefore(h, i), e && (h.appendChild(e), s--, t--), h.appendChild(i))
                } else($.isLandscape() || $.isTablet()) && i && i.childNodes.length && i.classList && i.classList.contains(n.INLINE_IMAGE_CLASS) && (e = i)
            }
            return a
        }

        function o(e) {
            if (N = window.getComputedStyle(e.firstChild)["line-height"], "normal" === N) {
                var t = window.getComputedStyle(e)["font-size"];
                N = 1.2 * parseInt(t, 10) + "px"
            }
            N = parseInt(N, 10)
        }

        function l(e) {
            $.addClass(T, n.CROPPABLE_TEXT_CLASS), p.style.overflow = "hidden", T.style.height = e + "px";
            var t = parseInt(window.getComputedStyle(p).height, 10);
            return T.style.height = null, p.style.overflow = null, $.removeClass(T, n.CROPPABLE_TEXT_CLASS), t
        }

        function r() {
            h.style.height = g, $.addClass(h, n.WRAPPER_CLASS), f.textContent = n.CROP_ACTIVE_BUTTON_LABEL, f.style["margin-top"] = n.CROP_ACTIVE_BUTTON_MARGIN, I = !0
        }

        function _() {
            h.style.height = null, $.removeClass(h, n.WRAPPER_CLASS), f.textContent = n.CROP_INACTIVE_BUTTON_LABEL, f.style["margin-top"] = n.CROP_INACTIVE_BUTTON_MARGIN, I = !1
        }

        function d(e) {
            g = e + "px", r(), p.parentNode.insertBefore(f, p.nextSibling)
        }

        function E(e, t) {
            o(e), v = $.isMobile() ? n.MOBILE_MAX_LINE_COUNT : n.DEFAULT_MAX_LINE_COUNT;
            var a = window.getComputedStyle(e.firstChild)["padding-top"];
            a = parseInt(a, 10);
            var s = window.getComputedStyle(e.firstChild)["margin-top"];
            s = parseInt(s, 10);
            var i = 0;
            return t && (i = window.getComputedStyle(e.firstChild)["padding-bottom"], i = parseInt(i, 10)), N * v + a + s + i
        }

        function c() {
            var e = E(T),
                t = window.getComputedStyle(T).height;
            if (t = parseInt(t, 10), t > e) d(e);
            else if (T !== p.lastElementChild) {
                var n = parseInt(window.getComputedStyle(p).height, 10),
                    a = l(e);
                n > a && d(e)
            }
        }

        function u(e) {
            var t = fm.omniture.initPageData(),
                n = (t.pageName || "").replace("fm|", ""),
                a = "|click|center|" + e,
                s = {
                    title: e
                };
            s.events = ["event27"], s.info = {
                prop40: n + a,
                prop42: n + a + "|" + s.title,
                prop43: t.prop4 + a,
                prop45: t.prop4 + a + "|" + s.title,
                eVar40: n + a,
                eVar42: n + a + "|" + s.title,
                eVar43: t.prop4 + a,
                eVar45: t.prop4 + a + "|" + s.title
            }, O.trackingData = s
        }

        function m(e) {
            u(e), fm.analytics.trackEvent(O.trackingData)
        }

        function S() {
            a === document.body && document.documentElement.scrollTop && (a = document.documentElement), a.scrollTop = a.scrollTop - y
        }

        function C() {
            var e;
            if ($.isPortrait()) {
                var t = h.firstChild;
                e = t && t.classList, e = e && t.classList.contains(n.INLINE_IMAGE_CLASS), e && p.insertBefore(h.firstChild, h)
            } else {
                var a = h.previousSibling;
                e = a && a.classList, e = e && a.classList.contains(n.INLINE_IMAGE_CLASS), e && h.insertBefore(a, h.firstChild)
            }
        }

        function A() {
            if (f.remove(), $.removeClass(f, fm.ui.constants.HIDDEN_CLASS), T = i()) {
                var a = "readmore-" + fm.ui.utils.guid();
                f.dataset.readMoreId = a, e[a] = L, c(), t || (t = !0, window.addEventListener("resize", function(t) {
                    for (var n in e) e[n].onOrientationChange(t)
                }), $.addEvent(document.body, "click", [n.BUTTON_SELECTOR], [function(t, n) {
                    e[t.dataset.readMoreId].onToggleClick(n)
                }]))
            }
        }
        var T, L = this,
            p = s.parentElement,
            f = s.childNodes[0],
            h = document.createElement("div"),
            I = !1,
            N = 0,
            g = "0px",
            v = $.isMobile() ? n.MOBILE_MAX_LINE_COUNT : n.DEFAULT_MAX_LINE_COUNT,
            O = {},
            R = 0,
            y = 0,
            D = parseInt(n.CROP_INACTIVE_BUTTON_MARGIN) - parseInt(n.CROP_ACTIVE_BUTTON_MARGIN);
        this.onToggleClick = function(e) {
            e.preventDefault(), I ? (R = p.scrollHeight, _(), m("readMore")) : (y = p.scrollHeight - R + D, S(), r(), m("showLess"))
        }, this.onOrientationChange = function(e) {
            var t;
            clearTimeout(t), t = setTimeout(function() {
                $.isMobile() && C();
                var e = I;
                _(), I = e;
                var t = E(T);
                g = t + "px", I ? r() : (r(), R = p.scrollHeight, _())
            }, n.RESIZE_EVENT_DELAY)
        }, A()
    };
    return i
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.twitterFeed = function() {
    var e = {
            TWEETS_PER_HASHTAG: 5,
            HASHTAGS_COUNT_START: 0,
            HASHTAGS_COUNT_END: 5,
            HASHTAGS_SEPARATOR: " ",
            HASHTAGS_REGEXP: /\s/g,
            API_CONTROLLER_PATH: "/api/twitter/search?",
            DEFAULT_LANG: "en",
            INCLUDE_ENTITIES: !0,
            URL_REGEXP: /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi,
            TEMPLATE_SELECTOR: "js-tweet",
            IMAGE_LINK_SELECTOR: "js-linkAuthorImage",
            TWEET_AUTHOR_SELECTOR: "js-author",
            TWEET_IMAGE_SELECTOR: "js-image",
            TWEET_CONTENT_SELECTOR: "js-tweetContent",
            TWEET_TIME_SELECTOR: "js-publishTime",
            TWITTER_MODULE: "js-twitterModule",
            TWITTER_URL: "http://www.twitter.com/",
            TWEET_VISIBLE_TIME: 5e3,
            TWEET_ANIMATED_CLASS: "twitterFeed--animated"
        },
        t = function(t) {
            function n() {
                a = t, s = d();
                var e = function(e) {
                        $.removeClass(l, "hidden"), $.removeClass(l, "js-tweet"), l.remove();
                        var t = JSON.parse(e);
                        A(t), c()
                    },
                    n = function() {};
                o && o.length && ($.removeClass(t, "hidden"), $.getData(s, e, n))
            }
            var a, s, i, o = t.dataset.query,
                l = document.getElementsByClassName(e.TEMPLATE_SELECTOR)[0],
                r = l.parentElement,
                _ = 0,
                d = function() {
                    var t, n, a = e.API_CONTROLLER_PATH;
                    return o ? (-1 !== o.indexOf(" ") && (t = E(o, " "), o = t.queryString, n = t.totalHashTags || 1, i = n * e.TWEETS_PER_HASHTAG), a += "q=" + encodeURIComponent(o), a += "&count=" + i, a += "&lang=" + e.DEFAULT_LANG, a += "&include_entities=" + e.INCLUDE_ENTITIES) : ""
                },
                E = function(t, n) {
                    var a = e.HASHTAGS_SEPARATOR,
                        s = e.HASHTAGS_COUNT_START,
                        i = e.HASHTAGS_COUNT_END,
                        o = t.split(a).slice(s, i),
                        l = o.join(a);
                    return t = l.replace(e.HASHTAGS_REGEXP, "+OR+"), {
                        queryString: t,
                        totalHashTags: o.length
                    }
                },
                c = function() {
                    var t = r.childNodes[0],
                        n = parseInt(getComputedStyle(t).width, 10),
                        a = t.cloneNode(!0);
                    r.appendChild(a), $.addOrientationChangeEvent(function() {
                        n = parseInt(getComputedStyle(t).width, 10), u(n)
                    });
                    setInterval(function() {
                        t = r.childNodes[0], n = parseInt(getComputedStyle(t).width, 10), $.addClass(r, e.TWEET_ANIMATED_CLASS), u(n)
                    }, e.TWEET_VISIBLE_TIME)
                },
                u = function(t) {
                    var n;
                    _ == i + 1 ? ($.removeClass(r, e.TWEET_ANIMATED_CLASS), n = 0, _ = 1) : (n = 0 - _ * t, _++), r.style.left = n + "px"
                },
                m = function(e) {
                    var t = (e.split(" "), moment(e, "dd MMM DD HH:mm:ss ZZ YYYY", "en")),
                        n = (new Date(t), new Date),
                        a = ~~((n.getTime() - t) / 1e3),
                        s = "";
                    return s = 1 >= a ? "1 second ago" : 60 > a ? a + " seconds ago" : 120 > a ? "1 minute ago" : 2700 > a ? ~~(a / 60) + " minutes ago" : 10800 > a ? "1 hour ago" : 86400 > a ? ~~(a / 3600) + " hours ago" : moment(e).format("MMM DD")
                },
                S = function(t, n) {
                    return t.replace(e.URL_REGEXP, function(e) {
                        for (var t = /^[a-z]+:/i.test(e) ? e : "http://" + e, a = e, s = 0; s < n.length; ++s) {
                            var i = n[s];
                            if (i.url === t && i.expanded_url) {
                                t = i.expanded_url, a = i.display_url;
                                break
                            }
                        }
                        return '<a href="' + t + "\" target='_blank'>" + a + "</a>"
                    })
                },
                C = function(t, n, a) {
                    var s, i = l.cloneNode(!0),
                        o = i.getElementsByClassName(e.IMAGE_LINK_SELECTOR)[0],
                        _ = i.getElementsByClassName(e.TWEET_AUTHOR_SELECTOR)[0],
                        d = i.getElementsByClassName(e.TWEET_IMAGE_SELECTOR)[0],
                        E = i.getElementsByClassName(e.TWEET_CONTENT_SELECTOR)[0],
                        c = i.getElementsByClassName(e.TWEET_TIME_SELECTOR)[0];
                    o.setAttribute("href", e.TWITTER_URL + t.user.screen_name), _.setAttribute("href", e.TWITTER_URL + t.user.screen_name), _.text = "@" + t.user.screen_name, d.setAttribute("src", t.user.profile_image_url.replace("normal", "bigger")), E.innerHTML = S(t.text, {
                        urlEntities: t.entities.urls
                    }), c.setAttribute("datetime", t.created_at), c.innerHTML = m(t.created_at), r.appendChild(i), s = r.childNodes[0], r.appendChild(s)
                },
                A = function(e) {
                    e.statuses.forEach(C)
                };
            n()
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.searchBar = function() {
    var e, t = {
            FORM: "js-form",
            SEARCH_CLOSE_BUTTON: "js-search__closeButton",
            SEARCH_CONTAINER: "js-topMenu__search",
            SEARCH_INPUT: "js-search__input",
            SEARCH_BOX: "search__box",
            SEARCH_DOSEARCH: "js-search__doSearch",
            SEARCH_LABEL: "js-search__label",
            SEARCH_FORM: "js-search__form",
            SEARCH_INPUT_ACTIVE: "search__input--active",
            SEARCH_BOX_ACTIVE: "search__box--active",
            SEARCH_FORM_ACTIVE: "search__form--active",
            SEARCH_CONTAINER_ACTIVE: "topMenu__search__container--active"
        },
        n = document.getElementsByClassName(t.SEARCH_CLOSE_BUTTON)[0],
        a = document.getElementsByClassName(t.SEARCH_CONTAINER)[0],
        s = document.getElementsByClassName(t.SEARCH_DOSEARCH)[0],
        i = document.getElementsByClassName(t.SEARCH_INPUT)[0],
        o = document.getElementsByClassName(t.SEARCH_BOX)[0],
        l = document.getElementsByClassName(t.SEARCH_LABEL)[0],
        r = document.getElementsByClassName(t.SEARCH_FORM)[0],
        _ = (document.getElementsByClassName(t.FORM)[0], !1),
        d = document.getElementsByTagName("html")[0],
        E = function() {
            d.addEventListener("click", m), d.addEventListener("touchend", m)
        },
        c = function() {
            d.removeEventListener("click", m), d.removeEventListener("touchend", m), s.addEventListener("click", u), s.addEventListener("touchend", u)
        },
        u = function T(l) {
            e = fm.ui.topNavigation.isOpened(), l.preventDefault(), l.stopPropagation(), _ || ($.addClass(s, fm.ui.constants.HIDDEN_CLASS), $.addClass(i, t.SEARCH_INPUT_ACTIVE), $.addClass(o, t.SEARCH_BOX_ACTIVE), $.addClass(a, t.SEARCH_CONTAINER_ACTIVE), $.removeClass(n, fm.ui.constants.HIDDEN_CLASS), $.addClass(r, t.SEARCH_FORM_ACTIVE), i.focus(), $.isMobile() ? S() : setTimeout(function() {
                S()
            }, 275), s.removeEventListener("click", T), s.removeEventListener("touchend", T), E(), _ = !0), e && ($.isMobile() === !0 ? fm.ui.topNavigation.closeMobileMenu(l) : fm.ui.topNavigation.closePopup(l))
        },
        m = function(e) {
            _ && ($targetElement = e.target, a.contains($targetElement) && $targetElement != l && (e.preventDefault(), e.stopPropagation()), $targetElement !== n && a.contains($targetElement) || ($.addClass(n, fm.ui.constants.HIDDEN_CLASS), $.addClass(l, fm.ui.constants.HIDDEN_CLASS), $.removeClass(s, fm.ui.constants.HIDDEN_CLASS), $.removeClass(i, t.SEARCH_INPUT_ACTIVE), $.removeClass(a, t.SEARCH_CONTAINER_ACTIVE), $.removeClass(o, t.SEARCH_BOX_ACTIVE), $.removeClass(r, t.SEARCH_FORM_ACTIVE), i.value = "", i.setAttribute("placeholder", ""), c(), i.blur(), _ = !1))
        },
        S = function() {
            $.removeClass(l, fm.ui.constants.HIDDEN_CLASS), i.setAttribute("placeholder", "SEARCH")
        },
        C = function() {
            return _
        },
        A = function() {
            c()
        };
    return {
        init: A,
        closeSearchBox: m,
        isOpened: C
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.searchLanding = function() {
    var e, t = {
            STREAM_URL: "/search/stream",
            LOAD_MORE: "js-searchLanding__loadMore",
            RESULTS_LIST: "js-searchLanding__resultsList",
            SEARCH_PANEL: "js-page__searchLanding"
        },
        n = 2,
        a = function(n) {
            var i, o;
            e = e || document.getElementsByClassName(t.LOAD_MORE)[0], e && (i = e.offsetTop, o = window.scrollY + window.innerHeight, o >= i && (window.removeEventListener("scroll", a), s(e)))
        },
        s = function() {
            var e = document.getElementsByClassName(fm.ui.constants.LOADER_CLASS)[0],
                a = document.getElementsByClassName(t.RESULTS_LIST)[0].dataset.searchQuery,
                s = t.STREAM_URL;
            $.removeClass(e, fm.ui.constants.HIDDEN_CLASS), s += "?q=" + encodeURIComponent(a), s += "&page=" + n, $.getData(s, function(t) {
                i(t, e)
            }, function(t) {
                o(e)
            }, !1)
        },
        i = function(e, s) {
            var i = document.getElementsByClassName(t.RESULTS_LIST)[0];
            e ? (i.insertAdjacentHTML("beforeend", e), o(s), n++, window.addEventListener("scroll", a)) : o(s)
        },
        o = function(e) {
            $.addClass(e, fm.ui.constants.HIDDEN_CLASS)
        },
        l = function() {
            window.addEventListener("scroll", a)
        };
    return {
        init: l
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.ShareModule = function() {
    "use strict";
    var e = {},
        t = !1,
        n = {
            FACEBOOKURL: "https://www.facebook.com/sharer/sharer.php?u=",
            TWITTER_URL: "https://twitter.com/intent/tweet",
            TWITTER_ACCOUNT: "FM_TV",
            TUMBLRURL: "http://www.tumblr.com/share/link?url=",
            TOOGLECLASS: "toggleInput",
            HIDDEN_ANIMATE_CLASS: "shareMessage--copied",
            MESSAGE_TIMEOUT: 2e3,
            COPY_CLIBOARD_CSS_CLASS: "js-shareClipboard",
            COPY_CLIBOARD_SELECTOR: ".js-shareClipboard",
            CLOSE_CLIPBOARD_CSS_CLASS: "js-copyTextCloseBtn",
            CLOSE_CLIPBOARD_SELECTOR: ".js-copyTextCloseBtn"
        },
        a = function(a) {
            function s() {
                var e = n.TWITTER_URL;
                e += "?text=" + E, e += "&url=" + escape(d), e += "&via=" + n.TWITTER_ACCOUNT, C.setAttribute("href", e)
            }
            var i, o = this,
                l = window.location.protocol + "//" + window.location.hostname + "/",
                r = a.parentNode.dataset.url || "",
                _ = r.startsWith("/") ? r.slice(1) : r,
                d = l + _,
                E = encodeURIComponent(a.parentNode.dataset.sharetitle),
                c = (n.CLOSE_CLIPBOARD_SELECTOR, a.getElementsByClassName("shareMessage")[0]),
                u = a.getElementsByClassName("js-copyTextInput")[0],
                m = a.getElementsByClassName("js-copyTextContainer")[0],
                S = a.getElementsByClassName("js-shareFacebook")[0],
                C = a.getElementsByClassName("js-shareTwitter")[0],
                A = a.getElementsByClassName("js-shareTumblr")[0],
                T = function() {
                    $.addClass(c, n.HIDDEN_ANIMATE_CLASS), setTimeout(function() {
                        $.removeClass(c, n.HIDDEN_ANIMATE_CLASS)
                    }, n.MESSAGE_TIMEOUT)
                };
            this.onclipboardItemClick = function(e) {
                var t;
                u.select();
                try {
                    t = document.execCommand("copy")
                } catch (a) {
                    t = !1
                }
                t ? T() : t || $.addClass(m, n.TOOGLECLASS)
            }, this.onCloseClipboardClick = function(e) {
                e.preventDefault(), u.blur(), $.removeClass(m, n.TOOGLECLASS)
            }, this.init = function() {
                i = "share-" + fm.ui.utils.guid();
                var l = a.getElementsByClassName(n.COPY_CLIBOARD_CSS_CLASS)[0];
                l.dataset.shareId = i;
                var r = a.getElementsByClassName(n.CLOSE_CLIPBOARD_CSS_CLASS)[0];
                r.dataset.shareId = i, e[i] = o, S.setAttribute("href", n.FACEBOOKURL + d), s(), A.setAttribute("href", n.TUMBLRURL + d), u.innerHTML = d, t || (t = !0, $.addEvent(document.body, "click touchend", n.COPY_CLIBOARD_SELECTOR, function(t, n) {
                    e[t.dataset.shareId] && e[t.dataset.shareId].onclipboardItemClick(n)
                }), $.addEvent(document.body, "click touchend", n.CLOSE_CLIPBOARD_SELECTOR, function(t, n) {
                    e[t.dataset.shareId] && e[t.dataset.shareId].onCloseClipboardClick(n)
                }))
            }
        };
    return a
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.deepLinkShare = function() {
    var e, t, n = {
            VIDEO_PLAYER_SHARE: "js-deepShare",
            SHARE_MODULE: "js-share",
            SHARE_CLIPBOARD: "js-copyTextInput"
        },
        a = document.getElementsByClassName(n.VIDEO_PLAYER_SHARE)[0],
        s = document.getElementsByClassName(n.SHARE_MODULE)[0],
        i = function(i, o) {
            var l = "";
            l = i ? i.dataset.deeplink : window.location.search, a.dataset.url = window.location.hostname + l, e = window.location.href.split("?"), t = document.getElementsByClassName(n.SHARE_CLIPBOARD)[0].innerHTML = e[0] + l, a.dataset.url = window.location.pathname.replace("/", "") + l, customShare = new fm.ui.ShareModule(s), customShare.init()
        };
    return {
        init: i
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.schedulePage = function() {
    function e() {
        var e = $.getQueryStringParameter("zipcode");
        e && e.length > 0 && (l(e[0]), r("", "")), o("Providers"), window.addEventListener("popstate", function(e) {
            if (location.href.indexOf("#providers") > 0) {
                var n = document.getElementsByClassName(g.inputZipCode).item(0);
                n.value = fm.ui.schedulePage.CACHE.zipCode, t()
            } else location.href.indexOf("#programs") > 0 && (fm.ui.schedulePage.OPTIONS.providerId = fm.ui.schedulePage.CACHE.providerId, fm.ui.schedulePage.OPTIONS.providerName = fm.ui.schedulePage.CACHE.providerName, o())
        });
        var n = document.getElementsByClassName(g.searchForm).item(0),
            a = document.getElementsByClassName(g.inputSearch).item(0);
        n.addEventListener("submit", function(e) {
            e.preventDefault(), t()
        }), a.addEventListener("click", function(e) {
            e.preventDefault(), t()
        })
    }

    function t() {
        var e = document.getElementsByClassName(g.inputZipCode).item(0),
            t = ~~Number(e.value);
        e.value && e.value == t && (fm.ui.schedulePage.OPTIONS.zipCode = e.value, fm.ui.schedulePage.OPTIONS.providerId = "", fm.ui.schedulePage.OPTIONS.providerName = "", l(e.value), r("", ""), o("Providers"))
    }

    function n(e) {
        e.preventDefault();
        var t = this.getAttribute(v.providerId),
            n = this.getAttribute(v.providerName);
        fm.ui.schedulePage.OPTIONS.providerId = t, fm.ui.schedulePage.OPTIONS.providerName = n, L(N.COOKIE_PROVIDERID, t), L(N.COOKIE_PROVIDERNAME, n), o()
    }

    function a(e) {
        e.preventDefault();
        var t = fm.ui.schedulePage.OPTIONS.date.valueOf(),
            n = new Date(t - N.TIME_PERIOD_RANGE);
        fm.ui.schedulePage.OPTIONS.date = n, o()
    }

    function s(e) {
        e.preventDefault();
        var t = fm.ui.schedulePage.OPTIONS.date.valueOf(),
            n = new Date(t + N.TIME_PERIOD_RANGE);
        fm.ui.schedulePage.OPTIONS.date = n, o()
    }

    function i(e) {
        e.preventDefault(), D = this.className.indexOf(g.channelSDLink) >= 0, d(this.className.indexOf(g.channelSDLink) >= 0)
    }

    function o(e) {
        var t = (document.location.hash, $.getQueryStringParameter("zipcode"),
                fm.ui.schedulePage.OPTIONS.zipCode || T(N.COOKIE_ZIPCODE) || N.DEFAULT_ZIPCODE),
            n = fm.ui.schedulePage.OPTIONS.providerId || T(N.COOKIE_PROVIDERID) || N.DEFAULT_PROVIDER,
            a = fm.ui.schedulePage.OPTIONS.providerName || T(N.COOKIE_PROVIDERNAME) || N.DEFAULT_PROVIDER_NAME;
        "Providers" === e ? E(t) : c(n, a)
    }

    function l(e) {
        fm.ui.schedulePage.OPTIONS.zipCode = e, e && (fm.ui.schedulePage.CACHE.zipCode = e), L(N.COOKIE_ZIPCODE, e, N.COOKIE_TTL)
    }

    function r(e, t) {
        fm.ui.schedulePage.OPTIONS.providerId = e, fm.ui.schedulePage.OPTIONS.providerName = t, e && t && (fm.ui.schedulePage.CACHE.providerId = e, fm.ui.schedulePage.CACHE.providerName = t), L(N.COOKIE_PROVIDERID, e), L(N.COOKIE_PROVIDERNAME, t)
    }

    function _(e, t) {
        e = e === !0, t = t === !0;
        var n, a = document.getElementsByClassName(g.providers).item(0),
            s = document.getElementsByClassName(g.providerChannel).item(0),
            i = /(?:^|\s)hidden(?!\S)/,
            o = /(?:^|\s)hidden(?!\S)/g;
        e ? a.className = a.className.replace(o, "").trim() : (n = a.className.match(i), n && 0 !== n.length || (a.className += " " + v.hideClass)), t ? s.className = s.className.replace(o, "").trim() : (n = s.className.match(i), n && 0 !== n.length || (s.className += " " + v.hideClass))
    }

    function d(e) {
        var t = /(?:^|\s)hidden(?!\S)/,
            n = /(?:^|\s)hidden(?!\S)/g,
            a = document.getElementsByClassName(g.channelSD).item(0),
            s = document.getElementsByClassName(g.channelHD).item(0),
            i = document.getElementsByClassName(g.channelBlockSD).item(0),
            o = document.getElementsByClassName(g.channelBlockHD).item(0);
        e ? (a.className.indexOf(v.active) < 0 && (a.className += " " + v.active), s.className = s.className.replace(v.active, "").trim(), match = o.className.match(t), match && 0 !== match.length || (o.className += " " + v.hideClass), i.className = i.className.replace(n, "").trim()) : (s.className.indexOf(v.active) < 0 && (s.className += " " + v.active), a.className = a.className.replace(v.active, "").trim(), match = i.className.match(t), match && 0 !== match.length || (i.className += " " + v.hideClass), o.className = o.className.replace(n, "").trim())
    }

    function E(e) {
        h(e, function(t, n) {
            "string" == typeof n && (n = JSON.parse(n));
            var a = document.getElementsByClassName(g.providers);
            if (0 !== a.length && 0 !== n.length) {
                for (var s = a.item(0).childNodes[0]; s.firstChild;) s.removeChild(s.firstChild);
                var i = document.createElement("div");
                i.setAttribute("class", "providers--container--title"), i.appendChild(document.createTextNode("Providers")), s.appendChild(i);
                for (var o = 0, r = n.length; r > o; o++) {
                    var d = n[o],
                        E = document.createElement("li"),
                        c = document.createElement("a"),
                        u = document.createTextNode(d.name);
                    c.appendChild(u), c.setAttribute(v.providerId, d.lineupId), c.setAttribute(v.providerName, d.name), c.setAttribute(v.providerType, d.type), c.setAttribute("class", g.providerLink), c.setAttribute("href", "#programs"), c.onclick = fm.ui.schedulePage.handlerProviderLink, E.appendChild(c), E.setAttribute("class", g.providerItem), s.appendChild(E)
                }
                l(e), _(!0, !1), window.location.hash = "providers"
            }
        })
    }

    function c(e, t) {
        var n = f(fm.ui.schedulePage.OPTIONS.date, 216e5),
            a = n[0],
            s = n[1];
        I(e, a, s, function(n) {
            "string" == typeof n && (n = JSON.parse(n));
            for (var a = document.getElementsByClassName("schedule-hub").item(0), s = document.getElementsByClassName(g.providerChannel).item(0), i = document.createElement("div"); i.firstChild;) i.removeChild(i.firstChild);
            r(e, t), _(!1, !0), window.location.hash = "programs";
            var o = (document.getElementsByClassName(g.inputZipCode).item(0), document.createElement("h3"));
            o.setAttribute("class", "provider--header");
            var l = document.createTextNode(t);
            o.appendChild(l), i.appendChild(o);
            var E = document.createElement("ul");
            E.setAttribute("class", "channels--navigator");
            for (var c = n.length, m = 0; c > m; m++) {
                var S, C = document.createElement("a");
                C.setAttribute("href", "#" + ("FM" == n[m].callSign ? "fm--sd" : "fm--hd"));
                var A = '<span class="channel--callsign">' + n[m].callSign + "</span>";
                n[m].hasOwnProperty("channel") && n[m].channel && (A += " " + n[m].channel);
                var T = document.createElement("li");
                switch (T.setAttribute("class", "channel--tab"), n[m].callSign) {
                    case "FM":
                        T.className += " " + g.channelSD, S = g.channelSDLink;
                        break;
                    case "FMHD":
                        T.className += " " + g.channelHD, S = g.channelHDLink
                }
                C.setAttribute("class", S), C.className += " channel--link", C.insertAdjacentHTML("afterbegin", A), C.onclick = fm.ui.schedulePage.handlerToogleChannel, T.appendChild(C), E.appendChild(T), i.appendChild(E)
            }
            var L = document.createElement("div");
            L.setAttribute("class", "channel--content");
            for (var p = 0; c > p; p++) L.appendChild(u(n[p]));
            i.appendChild(L), i.setAttribute("class", g.providerChannel), a.replaceChild(i, s), d(D)
        })
    }

    function u(e) {
        var t = document.createElement("div"),
            n = document.createElement("div");
        if (n.setAttribute("class", "programming--container"), "FM" == e.callSign ? (t.setAttribute("class", g.channelBlockSD), t.setAttribute("id", "fm--sd")) : (t.setAttribute("class", g.channelBlockHD), t.setAttribute("id", "fm--hd")), !m([e])) {
            var a = document.createElement("div");
            return a.setAttribute("class", g.noChannelSupprt), document.getElementsByClassName("FM" === e.callSign ? g.channelSD : g.channelHD).item(0).className += " channel--missing", a.appendChild(document.createTextNode("FM" === e.callSign ? O.noSDChannel : O.noHDChannel)), t.appendChild(a), t
        }
        var s = document.createElement("div");
        s.setAttribute("class", g.channelProgPrev);
        var i = document.createElement("a");
        i.setAttribute("href", "#"), i.setAttribute("class", g.channelProgPrevLink), i.className += " icon-arrow--left", i.onclick = fm.ui.schedulePage.handlerPrevDate, s.appendChild(i), n.appendChild(s);
        var o = document.createElement("div");
        o.setAttribute("class", "current--date"), o.appendChild(document.createTextNode(A(fm.ui.schedulePage.OPTIONS.date))), n.appendChild(o);
        var l = document.createElement("div");
        l.setAttribute("class", g.channelProgNext);
        var r = document.createElement("a");
        if (r.setAttribute("href", "#"), r.setAttribute("class", g.channelProgNextLink), r.className += " icon-arrow--right", r.onclick = fm.ui.schedulePage.handlerNextDate, l.appendChild(r), n.appendChild(l), t.appendChild(n), !e.hasOwnProperty("channel") || !e.channel) {
            var _;
            switch (e.callSign) {
                case "FM":
                    _ = O.noSDChannel;
                    break;
                case "FMHD":
                    _ = O.noHDChannel
            }
            var d = document.createElement("div");
            return d.setAttribute("class", g.noPrgrmChannel), d.appendChild(document.createTextNode(_)), t.appendChild(d), t
        }
        var E = document.createElement("table");
        E.setAttribute("class", "schedule--table");
        var c = document.createElement("thead");
        c.setAttribute("class", "schedule--head"), c.appendChild(S(["Time", "Channel", "Show Title"], "th"));
        var u = document.createElement("tbody");
        u.setAttribute("class", "schedule--body");
        for (var T = 0, L = e.airings.length; L > T; T++) {
            var p = e.airings[T],
                f = p.program,
                h = new Date(p.startTime);
            if (isNaN(h)) {
                var I = p.startTime.split(/\D/);
                h = new Date(Date.UTC(I[0], --I[1] || "", I[2] || "", I[3] || "", I[4] || "", I[5] || "", I[6] || ""))
            }
            var N = C(h);
            u.appendChild(S([N, e.channel, f.title], "td"))
        }
        return E.appendChild(c), E.appendChild(u), t.appendChild(E), t
    }

    function m(e) {
        for (var t = !1, n = 0, a = e.length; a > n; n++) {
            var s = e[n];
            s.hasOwnProperty("channel") && s.channel && (t = !0)
        }
        return t
    }

    function S(e, t) {
        var n = ["schedule--time", "schedule--channel", "schedule--show--title"],
            a = document.createElement("tr");
        a.setAttribute("class", "schedule--row");
        for (var s = 0, i = e.length; i > s; s++) {
            var o = document.createElement(t);
            o.setAttribute("class", n[s]), o.appendChild(document.createTextNode(e[s])), a.appendChild(o)
        }
        return a
    }

    function C(e) {
        var t = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
            n = e.getHours() > 12 ? e.getHours() - 12 : e.getHours(),
            a = e.getHours() < 12 ? "AM" : "PM",
            s = n + ":" + t + a;
        return s
    }

    function A(e) {
        var t = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            a = t[e.getDay()] + " " + n[e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear();
        return a
    }

    function T(e, t) {
        t || (t = null);
        for (var n = document.cookie.split(";"), a = 0, s = n.length; s > a; a++) {
            var i = n[a].trim(),
                o = e + "=";
            if (0 === i.indexOf(o)) return i.substring(o.length, i.length)
        }
        return t
    }

    function L(e, t) {
        var n = new Date;
        return n.setTime(n.getTime() + N.COOKIE_TTL), n = "; expires=" + n.toGMTString(), document.cookie = e + "=" + t + n + "; path=/", this
    }

    function p(e) {
        function t(e) {
            return 10 > e ? "0" + e : e
        }
        return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + "Z"
    }

    function f(e, t) {
        var n = e.valueOf(),
            a = p(new Date(n)),
            s = p(new Date(n + t));
        return [a, s]
    }

    function h(e, t) {
        var n = {
                api_key: N.GRACENOTE_APIKEY,
                postalCode: e,
                country: N.GRACENOTE_COUNTRY
            },
            a = N.GRACENOTE_URL + "?" + $.stringify(n);
        $.getData(a, function(e) {
            return t(null, e)
        }, function(e) {
            return t(e)
        })
    }

    function I(e, t, n, a) {
        var s = {
                api_key: N.GRACENOTE_APIKEY,
                stationId: N.GRACENOTE_STATION,
                startDateTime: t,
                endDateTime: n
            },
            i = N.GRACENOTE_URL + "/" + e + "/grid?" + $.stringify(s);
        $.getData(i, function(e) {
            return a(e)
        }, function(e) {})
    }
    var N = {
            GRACENOTE_URL: "//data.tmsapi.com/v1.1/lineups",
            GRACENOTE_APIKEY: "dcj3dywf96qkq5ex4s88t3as",
            GRACENOTE_STATION: "18262,72094",
            GRACENOTE_COUNTRY: "USA",
            COOKIE_ZIPCODE: "FMTV:SCHEDULE:ZIPCODE",
            COOKIE_PROVIDERID: "FMTV:SCHEDULE:PROVIDERID",
            COOKIE_PROVIDERNAME: "FMTV:SCHEDULE:PROVIDERNAME",
            COOKIE_TTL: 31536e6,
            TIME_PERIOD_RANGE: 216e5,
            DEFAULT_ZIPCODE: "91203",
            DEFAULT_PROVIDER: "USA-CA66511-X",
            DEFAULT_PROVIDER_NAME: "AT&T U-verse TV - Digital"
        },
        g = {
            providerChannel: "provider--program",
            providers: "providers",
            providerLink: "provider",
            providerItem: "provider--item",
            inputZipCode: "channelFinder__zipcode",
            inputSearch: "channelFinder__button",
            searchForm: "channelFinder__form",
            channelBlockSD: "channel--programming--sd",
            channelBlockHD: "channel--programming--hd",
            channelSD: "channel--sd",
            channelHD: "channel--hd",
            channelSelected: "channel__selected",
            channelSDLink: "channel--sd__link",
            channelHDLink: "channel--hd__link",
            channelProgDate: "programming--date",
            channelProgPrev: "programming--prev",
            channelProgNext: "programming--next",
            channelProgPrevLink: "programming--prev__link",
            channelProgNextLink: "programming--next__link",
            noPrgrmChannel: "channel--programming--nochannel",
            noChannelSupprt: "channel--programming--nosupport"
        },
        v = {
            hideClass: "hidden",
            active: "active",
            providerId: "data-provider-id",
            providerName: "data-provider-name",
            providerType: "data-provider-type"
        },
        O = {
            noFMChannels: "Contact your cable, telco or satellite provider to get FM",
            noHDChannel: "Contact your cable, telco or satellite provider to get FM HD",
            noSDChannel: "Contact your cable, telco or satellite provider to get FM"
        },
        R = {
            providerId: "",
            providerName: "",
            zipCode: "",
            date: new Date
        },
        y = {
            providerId: "",
            providerName: "",
            zipCode: ""
        },
        D = !0;
    return {
        OPTIONS: R,
        CACHE: y,
        handlerProviderLink: n,
        handlerPrevDate: a,
        handlerNextDate: s,
        handlerToogleChannel: i,
        init: e
    }
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.lazyLoader = function() {
    "use strict";
    var e = {
            LAZY_LOAD_ITEM_CLASS: "js-lazyLoadingItem",
            EMBEDLY_ITEM_CLASS: "js-embedlyMedia",
            SRC_ATTRIBUTE: "src",
            IFRAME_TYPE: "iframe",
            IMG_TYPE: "img",
            ACTION_INSERT_MEDIA: "js-lazyInsertMedia",
            ACTION_USER_TRIGGERED: "js-lazyUserTriggered",
            ACTION_BUILD_IFRAME: "js-lazyBuildIframe",
            ACTION_INSERT_SCRIPT_TAG: "js-lazyInsertScriptTag"
        },
        t = {
            showLoader: !0
        },
        n = function(n, a) {
            function s(e) {
                if (e) {
                    var t = e.parentElement,
                        n = t.getElementsByClassName(fm.ui.constants.LOADER_CLASS)[0];
                    n && $.addClass(n, "hidden")
                }
            }

            function i(t, n, a, i, o) {
                if (o === e.IFRAME_TYPE) var r = setInterval(function() {
                    a.getElementsByTagName(o).length > 0 && (i && s(a), $.removeClass(t, "hidden"), l.call(t, {
                        $itemElement: a,
                        itemSrc: n,
                        itemType: o
                    }), clearInterval(r))
                }, 1e3);
                else o === e.IMG_TYPE && (t.onload = function() {
                    i && s(a), l.call(this, {
                        $itemElement: a,
                        itemSrc: n,
                        itemType: o
                    })
                })
            }
            this._$section = n, this._callback = a.callback, this._showLoader = void 0 !== a.showLoader ? a.showLoader : t.showLoader, this._$items = "", this._itemsLoaded = 0, this._totalItems = 0, this._userTriggered = !!a.userTriggered, this._autoPlay = !!a.autoPlay;
            var o = n.dataset.moduleSettings ? JSON.parse(n.dataset.moduleSettings) : {};
            this.options = $.extend({}, t, o, a);
            var l = function(t) {
                    var n, a, s;
                    n = t.$itemElement, s = t.itemType, s === e.IMG_TYPE && (n = t.$itemElement, a = t.itemSrc, n.setAttribute(e.SRC_ATTRIBUTE, a)), $.removeClass(n, e.LAZY_LOAD_ITEM_CLASS), this._itemsLoaded++, this._itemsLoaded === this._totalItems && this.options.callback && this.options.callback()
                },
                r = function() {
                    var t, n, a, s, o = {},
                        l = this._autoPlay,
                        r = this._showLoader;
                    for (this._itemsLoaded = 0, n = 0; n < this._totalItems; n++) {
                        if (a = this._$items[n], o = {
                                "class": a.dataset["class"],
                                src: a.dataset.src,
                                type: a.dataset.type,
                                width: a.dataset.width,
                                height: a.dataset.height,
                                frameborder: a.dataset.frameborder,
                                player: a.dataset.player,
                                seamless: a.dataset.seamless,
                                autoplay: l,
                                allowFullScreen: a.dataset.allowfullscreen,
                                scrolling: a.dataset.scrolling,
                                onload: a.dataset.onload
                            }, o.type === e.IFRAME_TYPE) {
                            if ("youtube" == o.player ? s = "autoplay" : "theplatform" == o.player && (s = "autoPlay"), o.src = a.dataset.src + "&" + s + "=" + l, $.hasClass(a, e.ACTION_BUILD_IFRAME)) {
                                t = document.createElement(o.type), a.innerHTML = "";
                                for (var _ in o) {
                                    var d = o[_];
                                    d && d.length && "type" != _ ? t.setAttribute(_, d) : "allowFullScreen" === _ && "" === d && t.setAttribute(_, d)
                                }
                            }
                            $.hasClass(a, e.ACTION_INSERT_MEDIA) && (t = document.createElement("div")), $.hasClass(a, e.ACTION_INSERT_SCRIPT_TAG) && (t = document.createElement("script"), t.setAttribute("type", "text/javascript"), t.src = o.src)
                        } else o.type === e.IMG_TYPE && (t = new Image);
                        i(t, o.src, a, r, o.type), $.hasClass(a, e.ACTION_BUILD_IFRAME) && (!$.hasClass(a, e.ACTION_USER_TRIGGERED) && !this._userTriggered || $.hasClass(a, e.ACTION_USER_TRIGGERED) && this._userTriggered) && a.appendChild(t), $.hasClass(a, e.ACTION_INSERT_MEDIA) && (!$.hasClass(a, e.ACTION_USER_TRIGGERED) && !this._userTriggered || $.hasClass(a, e.ACTION_USER_TRIGGERED) && this._userTriggered) && (a.innerHTML = a.dataset.src), $.hasClass(a, e.ACTION_INSERT_SCRIPT_TAG) && (!$.hasClass(a, e.ACTION_USER_TRIGGERED) && !this._userTriggered || $.hasClass(a, e.ACTION_USER_TRIGGERED) && this._userTriggered) && a.appendChild(t), o.type === e.IMG_TYPE && (!$.hasClass(a, e.ACTION_USER_TRIGGERED) && !this._userTriggered || $.hasClass(a, e.ACTION_USER_TRIGGERED) && this._userTriggered) && (t.src = o.src)
                    }
                };
            this.init = function() {
                this._$items = this._$section.getElementsByClassName(e.LAZY_LOAD_ITEM_CLASS), this._totalItems = this._$items.length, r.call(this)
            }
        };
    return n
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.LazyVideoModule = function() {
    var e, t, n = {
            LAZY_LOAD_VIDEO_ELEMENT_CLASS: "js-topicMediaVideoContainer",
            VIDEO_THUMBNAIL_CLASS: "js-videoThumbnail",
            VIDEO_THUMBNAIL_IMAGE_CLASS: "topicMedia__video__container--thumbnail",
            USER_TRIGGERED_CLASS: "js-lazyUserTriggered"
        },
        a = 0,
        s = function(i) {
            var o = function() {
                fm.ui.AutoplayController.pauseCurrentVideo(), e = new fm.ui.lazyLoader(i, {
                    userTriggered: !0,
                    autoPlay: !0
                }), e.init(), t = i.getElementsByClassName(n.VIDEO_THUMBNAIL_CLASS)[0], t && ($.addClass(i.getElementsByClassName(n.VIDEO_THUMBNAIL_CLASS)[0], fm.ui.constants.HIDDEN_CLASS), $.removeClass(i, n.VIDEO_THUMBNAIL_IMAGE_CLASS))
            };
            s.prototype.init = function() {
                0 === a ? (e = new fm.ui.lazyLoader(i, {
                    userTriggered: !0,
                    autoPlay: !1
                }), e.init(), t = i.getElementsByClassName(n.VIDEO_THUMBNAIL_CLASS)[0], $.removeClass(i, n.VIDEO_THUMBNAIL_IMAGE_CLASS), t && $.addClass(i.getElementsByClassName(n.VIDEO_THUMBNAIL_CLASS)[0], fm.ui.constants.HIDDEN_CLASS)) : $.addClickEvent(i, o), a++
            }
        };
    return s
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.GalleryComponent = function() {
    "use strict";
    var e = {
            SLIDER_MODULE_CLASS: "js-sliderModule",
            MODULE_SETTINGS_ATTR: "module-settings",
            SLIDER_ITEM_CLASS: "js-sliderItem",
            MAX_CHARACTERS: 250,
            ARTICLE_AD: "article__ad",
            ELLIPSIS_EXCEPTIONS: ["js-galleryContent--topic"],
            TOP_NAV_CLASS: "js-topNav"
        },
        t = function(t, n) {
            this._$panel = t, this._totalImages = 0, this._$currentImage = "", this._$settings = n, this._currentImageNumber = 0, this._$images = "";
            var a = function() {
                var e, t, n;
                if (!this._$currentImage.dataset.initialized) {
                    if (0 === this._currentImageNumber) {
                        var a = this._$currentImage.getElementsByClassName(fm.ui.constants.LOADER_CLASS)[0];
                        $.addClass(a, "hidden"), t = this._$images[this._totalImages], e = this._$images[this._currentImageNumber + 1]
                    } else this._currentImageNumber === this._totalImages ? (t = this._$images[this._currentImageNumber], e = this._$images[0]) : (t = this._$images[this._currentImageNumber - 1], e = this._$images[this._currentImageNumber]);
                    t && t.dataset && !t.dataset.imageReady && (n = new fm.ui.lazyLoader(t, {
                        userTriggered: !0
                    }), n.init(), t.dataset.imageReady = !0), t !== e && e && e.dataset && !e.dataset.imageReady && (n = new fm.ui.lazyLoader(e, {
                        userTriggered: !0
                    }), n.init(), e.dataset.imageReady = !0), this._$currentImage.dataset.initialized = !0
                }
            };
            this.init = function() {
                var t = this,
                    n = this._$panel.getElementsByClassName(e.SLIDER_MODULE_CLASS)[0],
                    s = n.dataset.moduleSettings ? JSON.parse(n.dataset.moduleSettings) : {};
                this._$images = this._$panel.getElementsByClassName(e.SLIDER_ITEM_CLASS), this._topNavHeight = document.getElementsByClassName(e.TOP_NAV_CLASS)[0].offsetHeight;
                var i, o;
                this._$images.length >= 1 && (s.onSlideInStart = function(s) {
                    t._totalImages = s.length - 1, t._$currentImage = s.newSlide, t._currentImageNumber = s.newSlideIndex, a.call(t), o = n.parentElement.getElementsByClassName(e.ARTICLE_AD)[0], o && $.isDesktop() && fm.ui.utils.initializeModules(o, !0)
                }, s.afterSliderInit = function(e) {
                    var n;
                    t._totalImages = e.length - 1, t._$currentImage = e.currentSlide, s.deepLink ? (n = new fm.ui.lazyLoader(t._$currentImage, {}), n.init(), t._$currentImage.dataset.imageReady = !0) : t._currentImageNumber = 0, t._$images[0].dataset.imageReady = !0, t._totalImages >= 0 && a.call(t)
                }, s.onSlideInFinish = function(e) {
                    var a = n.getBoundingClientRect().top,
                        s = document.body.getBoundingClientRect().top;
                    a < t._topNavHeight && window.scroll(0, a - s - t._topNavHeight)
                }, i = new fm.ui.SliderModule(n, s))
            }
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.GalleryListModule = function() {
    var e = {
            TILE_VIEWING_CLASS: "tile--viewing",
            OVERLAY_GALLERY_CLASS: "gallery--overlay",
            OVERLAY_GALLERY_ID: "overlayGallery",
            ICON_CLOSE_CLASS: "icon-close",
            OVERLAY_GALLERY_CONTAINER_CLASS: "galleryContainer--overlay",
            OVERLAY_GALLERY_CLOSE_CLASS: "galleryCloseIcon--overlay",
            TOPNAV_CLASS: "js-topNav",
            TOPNAV_CONTAINER_CLASS: "js-topNav__container"
        },
        t = {},
        n = function(n, a) {
            function s(t, n) {
                var a = this._$topNav.offsetHeight;
                $.removeClass(this._$activeElement, e.TILE_VIEWING_CLASS), this._$activeElement = t, $.addClass(t, e.TILE_VIEWING_CLASS);
                var s = "/" + t.dataset.path + "?renderType=content";
                $.getData(s, function(e) {
                    var t, n;
                    l.innerHTML = e, fm.ui.utils.initializeModules(l, !1), t = l.getBoundingClientRect().top, n = document.body.getBoundingClientRect().top, window.scroll(0, t - n - a)
                }, function(e) {}, !1)
            }

            function i(e, t) {
                $.isMobile() || $.isTablet() && $.isPortrait() ? fm.ui.galleryOverlay.displayGallery.call(this, e, t, this) : s.call(this, e, t)
            }
            this._$panel = n, this._$topNav = document.getElementsByClassName(e.TOPNAV_CLASS)[0], this._$topNavContainer = document.getElementsByClassName(e.TOPNAV_CONTAINER_CLASS)[0], this._$activeElement = n.getElementsByClassName(e.TILE_VIEWING_CLASS), this._$closeButton = "";
            var o = n.dataset.moduleSettings ? JSON.parse(this._$panel.dataset.moduleSettings) : {};
            this.options = $.extend({}, t, o, a);
            var l = document.getElementsByClassName(this.options.containerClass)[0];
            if ($.addEvent(this._$panel, "click", ["." + this.options.itemClass], [i.bind(this)]), this.options.loadMoreEndpoint) {
                var r = new fm.ui.LoadMoreModule(n, {
                    url: this.options.loadMoreEndpoint
                });
                r.init()
            }
        };
    return n
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.GridNav = function() {
    "use strict";
    var e = {
            ITEM_COUNTER: "js-gridNav__counter",
            NEXT_ARROW: "js-next",
            PREV_ARROW: "js-prev",
            VIDEO_CAROUSEL: "slider__list--event",
            GALLERY_CAROUSEL: "js-galleryList",
            VIDEO_ITEM: "js-sliderItem",
            VIDEO_PLAYING: "tile--playing",
            GALLERY_ITEM: "js-galleryItem",
            DISABLE_STATE: "gridNav__link--disable",
            SLIDER_LIST: "js-slider__list",
            ACTIVE_SLIDER: "js-activeSlider"
        },
        t = function(t) {
            function n(t, n) {
                I > 1 && (I--, L.innerHTML = I + " / " + r, $.removeClass(p, e.DISABLE_STATE), o.style.left = parseInt(o.style.left.substr(0, o.style.left.length - 2)) + 1080 + "px", 1 === I && ($.addClass(t, e.DISABLE_STATE), $.removeClass(p, e.DISABLE_STATE)))
            }

            function a(t, n) {
                r > I && (I++, o.style.left = parseInt(o.style.left.substr(0, o.style.left.length - 2)) - 1080 + "px", L.innerHTML = I + " / " + r, $.removeClass(f, e.DISABLE_STATE), I === r && ($.addClass(t, e.DISABLE_STATE), $.removeClass(f, e.DISABLE_STATE)))
            }

            function s() {
                i.length && (m = document.getElementsByClassName(e.VIDEO_PLAYING)[0].parentNode.dataset.num, C = Math.ceil(m / 4), S = C - I, A = S >= 0 ? a : n, _.times(Math.abs(S), A))
            }
            var i, o, l, r, d, E, c, u, m, S, C, A, T = t,
                L = T.getElementsByClassName(e.ITEM_COUNTER)[0],
                p = T.getElementsByClassName(e.NEXT_ARROW)[0],
                f = T.getElementsByClassName(e.PREV_ARROW)[0],
                h = T.dataset.type,
                I = 1;
            u = T.nextSibling, o = u.getElementsByClassName(e.SLIDER_LIST)[0], i = u.getElementsByClassName(e.ACTIVE_SLIDER), $.addOrientationChangeEvent(function() {
                s()
            }), "video" === h ? (d = e.VIDEO_ITEM, o = o ? o : document.getElementsByClassName(e.VIDEO_CAROUSEL)[0]) : "gallery" === h && (d = e.GALLERY_ITEM, o = o ? o : document.getElementsByClassName(e.GALLERY_CAROUSEL)[0]), l = o.getElementsByClassName(d).length, r = Math.floor(l / 4) + (l % 4 ? 1 : 0), L.innerHTML = "1 / " + r, r > 1 && $.removeClass(p, e.DISABLE_STATE), E = o.getElementsByClassName(d)[0], c = parseInt(getComputedStyle(E).width, 10), o.style.left = "0px", $.addEvent(T, "click", ["." + e.PREV_ARROW, "." + e.NEXT_ARROW], [n, a]), this.init = function() {
                s()
            }
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.PollModule = function() {
    var e = {
            DATA_ID: "data-id",
            SELECTED_CLASS: "choice--selected",
            CHOICE_ELEMENT: "js-choice",
            CHOICE_CONTAINER: "js-poll__choice__container",
            CHOICE_VOTE_BUTTON: "js-pollVote",
            VIDEO_PLAYER_TRIGGER: "js-poll-videoTrigger",
            VIDEO_TARGET_ELEMENT: "poll__video__target",
            VIDEO_CLOSE: "poll__video__close",
            POLL_VIEW_RESULTS: "poll__viewResults",
            POLL_VIEW_CHOICES: "poll__viewChoices",
            TOO_MANY_RESQUESTS_ERROR: 429
        },
        t = function(t) {
            var n, a = t.getAttribute(e.DATA_ID),
                s = function() {
                    if (a) {
                        var e, t = "/api/poll/" + a;
                        $.getData(t, function(t) {
                            e = t.poll.type, i[e] || (e = "default"), i["default"].init(t)
                        }, function(e) {
                            console.log("Error: " + e)
                        }, !0)
                    }
                },
                i = {
                    "default": {
                        init: function(n) {
                            var a = {},
                                s = this;
                            n.poll.display && "untitled" != n.poll.display || (n.poll.display = n.poll.title || ""), a = {
                                pollTitle: n.poll.display
                            }, s.templates.poll(t, a), Date.parse(n.poll.endTime) > Date.now() ? s.render.choices(t, n, s.templates, s) : (s.results(t, n, s.templates, !1), t.getElementsByClassName(e.POLL_VIEW_RESULTS)[0].style.display = "none")
                        },
                        initVideoPlayer: function(e, n) {
                            var a, s = t.getElementsByClassName("poll__container")[0],
                                i = document.getElementsByClassName("topicContent__scrollArea")[0],
                                o = document.getElementsByClassName("topicNav__title__header_container")[0];
                            fm.ui.videoPlayer.init(e, n), pollVideo = document.getElementsByClassName("poll__video__container")[0], a = o ? o.clientHeight : 0, i.scrollTop = s.offsetTop - a
                        },
                        templates: {
                            poll: function(e, t) {
                                e.innerHTML = '<div class="poll__container"><h3 class="poll__title">' + t.pollTitle + '</h3><div class="poll__video__container"><div class="poll__video__target"></div><div class="btn-bar"><a href="#" style="display:none;" class="poll__video__close"><span>Close</span></a></div></div><ul class="poll__choice__container js-poll__choice__container"></ul><ul class="results-container"></ul><div class="poll__footer"><a href="#" data-track="item"  data-track-title="vote" class="poll__voteButton js-pollVote">Vote</a><span class="vote-status"></span><a href="#" data-track="item"  data-track-title="viewResults" class="poll__viewResults">View Results</a><a href="#" data-track="item"  data-track-title="voteAgain" class="poll__viewChoices" style="display:none;">Vote Again</a></div></div>'
                            },
                            text: function(e, t) {
                                return n = '<li class="js-choice choice--text" data-track="item" data-id="' + t.choiceId + '"><div class="poll__choice__textWrapper"><div class="icon-check">&nbsp;</div><span class="poll__choice__text">' + t.choiceTitle + "</span></div></li>"
                            },
                            video: function(e, t) {
                                return n = '<li class="js-choice choice--video" data-track="item" data-id="' + t.choiceId + '"><div class="js-poll-videoTrigger poll__video__area" data-source="' + t.video.id + '" data-player="' + t.video.playerId + '" data-type="' + t.video.type + '"><span class="icon-play icon-play--poll js-icon-play"><span class="icon-play__bg icon-play__background--poll"></span><span class="icon-play__border icon-play__border--poll"></span><span class="icon-play__arrow icon-play__arrow--poll"></span></span><div class="choice__image__container"><img class="poll__choice__image" src="/image/' + t.image._id + "/360/240/" + t.image.title + ' alt="' + t.image.description + '"/></div></div><div class="poll__choice__textWrapper"><div class="icon-check">&nbsp;</div><span class="poll__choice__text">' + t.choiceTitle + "</span></div></li>"
                            },
                            image: function(e, t) {
                                return n = '<li class="js-choice choice--image" data-track="item" data-id="' + t.choiceId + '"><div class="choice__image__container"><img src="/image/' + t.image._id + "/340/230/" + t.image.title + '.jpg" class="poll__choice__image" alt="' + t.image.description + '"></div><div class="poll__choice__textWrapper"><div class="icon-check">&nbsp;</div><span class="poll__choice__text">' + t.choiceTitle + "</span></div></li>"
                            },
                            result: function(e, t) {
                                return n = '<li class="poll__result__container"><div class="poll__result__text">' + t.title + '</div><div class="poll__result__percent"><div class="poll__result__bar" style="width:' + t.percent + '%;"></div><span class="poll__result__digit">' + t.percent + "%</span></div></li>"
                            }
                        },
                        render: {
                            choices: function(t, n, a, s) {
                                var i, o, l, r, _, d = t.getElementsByClassName(e.CHOICE_CONTAINER)[0],
                                    E = n.poll.choices.length;
                                d.innerHTML = "";
                                for (var c = 0; E > c; c++) {
                                    for (l = s.parseImageData(n.poll.choices[c]), l.content && l.content.video && l.content.video.id && l.content.video.type ? (o = {
                                            choiceId: l._id,
                                            choiceTitle: l.display || l.title,
                                            video: l.content.video,
                                            image: l.content.image
                                        }, r = l.content.image ? s.templates.video(t, o) : s.templates.text(t, o), d.innerHTML += r) : l.content && l.content.image ? (o = {
                                            choiceId: l._id,
                                            choiceTitle: l.display || l.title,
                                            image: l.content.image
                                        }, r = s.templates.image(t, o), d.innerHTML += r) : (o = {
                                            choiceId: l._id,
                                            choiceTitle: l.display || l.title
                                        }, r = s.templates.text(t, o), d.innerHTML += r), _ = t.getElementsByClassName(".poll-video"), l = 0, choices = _.length; l < choices; l++) s.initVideoPlayer(t, _[l])
                                }
                                i = t.getElementsByClassName(e.CHOICE_ELEMENT), $.addEvent(t, "click touchend", "." + e.CHOICE_ELEMENT, function(t) {
                                    for (l = 0, choices = i.length; l < choices; l++) $.removeClass(i[l], e.SELECTED_CLASS);
                                    $.addClass(t, e.SELECTED_CLASS)
                                }), $.addEvent(t, "click touchend", "." + e.CHOICE_VOTE_BUTTON, function(a, i) {
                                    var o, l = t.getElementsByClassName(e.SELECTED_CLASS)[0],
                                        r = l.getAttribute(e.DATA_ID);
                                    r ? (o = "/api/choice/" + r + "/vote?ts=" + (new Date).getTime(), $.postData(o, function(a) {
                                        a = JSON.parse(a), n.poll.choices = a.choices, s.results(t, n, s.templates, !1), t.getElementsByClassName(e.POLL_VIEW_RESULTS)[0].style.display = "none", t.getElementsByClassName(e.POLL_VIEW_CHOICES)[0].style.display = "block", t.getElementsByClassName(e.CHOICE_VOTE_BUTTON)[0].style.display = "hide"
                                    }, function(a) {
                                        if (a.status === e.TOO_MANY_RESQUESTS_ERROR) s.results(t, n, s.templates, !1), t.getElementsByClassName(e.POLL_VIEW_RESULTS)[0].style.display = "none", t.getElementsByClassName(e.POLL_VIEW_CHOICES)[0].style.display = "block", t.getElementsByClassName(e.CHOICE_VOTE_BUTTON)[0].style.display = "hide";
                                        else {
                                            console.log("error: " + res.message);
                                            t.getElementsByClassName("vote-status")[0];
                                            $statusMessage.css.display = "block", $statusMessage.innerHTML = res.message
                                        }
                                    }, "", !1)) : console.log("Error capturing vote."), i.preventDefault()
                                }), $.addEvent(t, "click touchend", "." + e.POLL_VIEW_RESULTS, function() {
                                    s.results(t, n, a, !1), t.getElementsByClassName(e.POLL_VIEW_RESULTS)[0].style.display = "none", t.getElementsByClassName(e.POLL_VIEW_CHOICES)[0].style.display = "block", t.getElementsByClassName(e.CHOICE_VOTE_BUTTON)[0].style.display = "none"
                                }), $.addEvent(t, "click touchend", "." + e.POLL_VIEW_CHOICES, function() {
                                    t.getElementsByClassName("vote-status")[0].style.display = "none", t.getElementsByClassName(e.POLL_VIEW_CHOICES)[0].style.display = "none", t.getElementsByClassName(e.CHOICE_VOTE_BUTTON)[0].style.display = "block", t.getElementsByClassName(e.POLL_VIEW_RESULTS)[0].style.display = "block", t.getElementsByClassName("results-container")[0].style.display = "none", d.style.display = "inline-block", t.getElementsByClassName(e.CHOICE_VOTE_BUTTON)[0].style.display = "block"
                                }), $.addEvent(t, "click touchend", "." + e.VIDEO_PLAYER_TRIGGER, function(n) {
                                    var a, i = t.getElementsByClassName(e.VIDEO_TARGET_ELEMENT)[0],
                                        o = {},
                                        l = "100%";
                                    if ($.hasClass(n, e.SELECTED_CLASS)) return !1;
                                    for (allVideos = t.getElementsByClassName(e.VIDEO_PLAYER_TRIGGER), videoTrigger = 0, videoTriggers = allVideos.length; videoTrigger < videoTriggers; videoTrigger++) $.removeClass(allVideos[videoTrigger], e.SELECTED_CLASS);
                                    $.addClass(n, e.SELECTED_CLASS), $.isMobile() && (a = "auto"), $.isTablet() && (a = "428px"), i.innerHTML = "", o = {
                                        width: l,
                                        height: a,
                                        source: n.getAttribute("data-source"),
                                        playerId: n.getAttribute("data-player"),
                                        type: n.getAttribute("data-type"),
                                        modifierClass: "poll"
                                    }, s.initVideoPlayer(i, o), t.getElementsByClassName("poll__video__container")[0].style.display = "block", t.getElementsByClassName(e.VIDEO_CLOSE)[0].style.display = "block"
                                }), $.addEvent(t, "click touchend", "." + e.VIDEO_CLOSE, function(e) {
                                    t.getElementsByClassName("poll__video__close")[0].style.display = "none", t.getElementsByClassName("poll__video__target")[0].innerHTML = ""
                                }), fm.clicktrack.init(t)
                            }
                        },
                        results: function(t, n, a, s) {
                            var i, o, l = t.getElementsByClassName("results-container")[0],
                                r = t.getElementsByClassName("poll__container")[0],
                                _ = document.getElementsByClassName("topicContent__scrollArea")[0],
                                d = document.getElementsByClassName("topicNav__title__header_container")[0],
                                E = document.getElementsByClassName("poll__video__container")[0],
                                c = n.poll.choices.length;
                            t.getElementsByClassName(e.CHOICE_CONTAINER)[0].style.display = "none", t.getElementsByClassName(e.CHOICE_VOTE_BUTTON)[0].style.display = "none", l.innerHTML = "", l.style.display = "block";
                            for (var u = 0; c > u; u++) l.innerHTML += a.result(t, n.poll.choices[u]);
                            i = d ? d.clientHeight : 0, o = E ? E.clientHeight : 0, _.scrollTop = r.offsetTop - i + o
                        },
                        parseImageData: function(e) {
                            return e.content && e.content.image && (e.content.image.description = e.content.image.description.substr(0, 125), e.content.image.title = e.content.image.title.replace(/[^a-zA-Z0-9 ]/g, "").replace(/ /g, "-").replace(/--/g, "-").toLowerCase()), e
                        }
                    }
                };
            s()
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.QuizModule = function() {
    "use strict";
    var e = {
            QUIZ_ROOT_CLASS: "quiz",
            ANSWERS_CLASS: "js-quizQuestionsSlideAnswers",
            ANSWER_CLASS: "js-quizQuestionsSlideAnswersAnswer",
            ANSWER_CORRECT_CLASS: "quiz__questions__slide__answers__answer--correct",
            ANSWER_WRONG_CLASS: "quiz__questions__slide__answers__answer--wrong",
            ANSWER_IMAGE_CLASS: "quiz__questions__slide__answers__answer--withImage",
            ANSWER_IMAGE_CORRECT_CLASS: "quiz__questions__slide__answers__answer--withImageCorrect",
            ANSWER_IMAGE_WRONG_CLASS: "quiz__questions__slide__answers__answer--withImageWrong",
            ANSWER_TEXT_CLASS: "quiz__questions__slide__answers__answer__text",
            ANSWER_TEXT_CORRECT_CLASS: "quiz__questions__slide__answers__answer__text--correct",
            ANSWER_TEXT_IMAGE_CORRECT_CLASS: "quiz__questions__slide__answers__answer__text--withImageCorrect",
            ANSWER_TEXT_WRONG_CLASS: "quiz__questions__slide__answers__answer__text--wrong",
            ANSWER_TEXT_IMAGE_WRONG_CLASS: "quiz__questions__slide__answers__answer__text--withImageWrong",
            ANSWER_IMAGE_ELEM_CLASS: "js-quizQuestionsSlideAnswersAnswerImage",
            ANSWER_IMAGE_ELEM_CORRECT_CLASS: "quiz__questions__slide__answers__answer__image--correct",
            ANSWER_IMAGE_ELEM_WRONG_CLASS: "quiz__questions__slide__answers__answer__image--wrong",
            CORRECT_ANSWER_CLASS: "js-quizQuestionsSlideCorrectAnswer",
            CORRECT_ANSWER_CORRECT_CLASS: "js-quizQuestionsSlideCorrectAnswerCorrect",
            CORRECT_ANSWER_WRONG_CLASS: "js-quizQuestionsSlideCorrectAnswerWrong",
            SLIDER_ARROW_PREV_CLASS: "js-sliderPrevBtn",
            SLIDER_ARROW_NEXT_CLASS: "js-sliderNextBtn",
            SLIDER_ARROW_DISABLED_CLASS: "btn__square--disabled",
            SLIDE_CLASS: "js-sliderItem",
            SLIDE_CONTROLS_CLASS: "js-quizControls",
            HIDDEN_QUESTIONS_CONTAINER_CLASS: "js-quizQuestions",
            CORRECT: "correct",
            WRONG: "wrong",
            SKIP: "skip",
            FINAL_RESULT_CLASS: "js-quizFinalResult",
            FINAL_RESULT_TITLE_CLASS: "js-quizFinalResultResult",
            FINAL_RESULT_DESCRIPTION_CLASS: "js-quizFinalResultResultDescription",
            FINAL_RESULT_SHARE_FACEBOOK: "js-shareFacebook",
            FINAL_RESULT_SHARE_TWITTER: "js-shareTwitter",
            FINAL_RESULT_IMAGE_CLASS: "js-quizFinalResultImage",
            FACEBOOKURL: "https://www.facebook.com/sharer/sharer.php?u=",
            TWITTERURL: "http://twitter.com/home?status=",
            SHAREMESSAGE: " via @fmtv "
        },
        t = function(t, n) {
            function a(e) {
                S = e.length
            }

            function s(n) {
                var a = t.getElementsByClassName(e.SLIDER_ARROW_PREV_CLASS),
                    s = t.getElementsByClassName(e.SLIDER_ARROW_NEXT_CLASS);
                0 === n.slideIndex ? $.addClass(a, e.SLIDER_ARROW_DISABLED_CLASS) : n.slideIndex === n.length - 1 ? $.addClass(s, e.SLIDER_ARROW_DISABLED_CLASS) : ($.removeClass(s, e.SLIDER_ARROW_DISABLED_CLASS), $.removeClass(a, e.SLIDER_ARROW_DISABLED_CLASS))
            }

            function i(n) {
                var a = window.location.hostname + "/",
                    s = t.parentNode.parentNode.parentNode.dataset.url,
                    i = a + s;
                t.getElementsByClassName(e.FINAL_RESULT_SHARE_FACEBOOK)[0].setAttribute("href", e.FACEBOOKURL + i),
                    t.getElementsByClassName(e.FINAL_RESULT_SHARE_TWITTER)[0].setAttribute("href", e.TWITTERURL + n + e.SHAREMESSAGE + i)
            }

            function o(n, a, s) {
                var i = window.location.hostname + "/",
                    o = t.parentNode.parentNode.parentNode.dataset.url,
                    l = i + o;
                t.getElementsByClassName(e.FINAL_RESULT_SHARE_TWITTER)[0].getAttribute("href");
                t.getElementsByClassName(e.FINAL_RESULT_SHARE_TWITTER)[0].setAttribute("href", e.TWITTERURL + n + " — " + a + e.SHAREMESSAGE + l)
            }

            function l() {
                var n, a, s = Object.keys(C).length,
                    i = "",
                    l = "";
                if (s !== S) return !1;
                if ("score" === u.quiztype) {
                    for (a = 0; S > a; a++)
                        if (!C[a].answered) return !1;
                    n = "You got " + m + "/" + S + " correct!", o(n, u.sharetitle, l)
                } else if ("personality" === u.quiztype) {
                    for (m = 0, a = 0; S > a; a++) {
                        if (!C[a].answered) return !1;
                        m += C[a].value
                    }
                    var r = t.getElementsByClassName(e.FINAL_RESULT_SHARE_TWITTER)[0];
                    r.setAttribute("href", r.getAttribute("href") + "&text=customTextTwitter");
                    var _, d = JSON.parse(u.results);
                    for (a = 0; a < d.length; a++)
                        if (m >= d[a].startValue && m <= d[a].endValue) {
                            _ = d[a];
                            break
                        }
                    t.getElementsByClassName(e.FINAL_RESULT_DESCRIPTION_CLASS)[0].innerText = _.text, i = _.share, _.image ? (l = "/image/" + _.image._id + "/732/488/" + _.image.filename, t.getElementsByClassName(e.FINAL_RESULT_IMAGE_CLASS)[0].setAttribute("src", l)) : $.addClass(t.getElementsByClassName(e.FINAL_RESULT_IMAGE_CLASS)[0], "hidden"), n = _.title, o(n, i, l)
                }
                t.getElementsByClassName(e.FINAL_RESULT_TITLE_CLASS)[0].innerText = n, $.removeClass(t.getElementsByClassName(e.FINAL_RESULT_CLASS)[0], "hidden")
            }

            function r(e, t) {
                var n = t.getAttribute("data-correct");
                return "true" === n ? !0 : !1
            }

            function _(t, n, a) {
                var s = parseInt(t.getAttribute("data-index"));
                "score" === u.quiztype && "number" == typeof s ? a === e.CORRECT ? (m++, C[s] = {
                    answered: !0,
                    correct: !0
                }) : a === e.WRONG ? C[s] = {
                    answered: !0,
                    correct: !1
                } : a === e.SKIP && (C[s] = {
                    answered: !1
                }) : "personality" === u.quiztype && "number" == typeof s && (a === e.CORRECT ? (m += parseInt(n.getAttribute("data-value")), C[s] = {
                    answered: !0,
                    value: parseInt(n.getAttribute("data-value"))
                }) : a === e.SKIP && (C[s] = {
                    answered: !1
                }))
            }

            function d(n, a) {
                var s = parseInt(n.getAttribute("data-index")),
                    i = t.getElementsByClassName(e.HIDDEN_QUESTIONS_CONTAINER_CLASS)[0].getElementsByClassName(e.SLIDE_CLASS)[s],
                    o = parseInt(a.getAttribute("data-questionindex")),
                    l = i.getElementsByClassName(e.ANSWER_TEXT_CLASS)[o],
                    r = i.getElementsByClassName(e.ANSWER_CLASS)[o],
                    _ = a.getElementsByClassName(e.ANSWER_TEXT_CLASS)[0],
                    d = i.getElementsByClassName(e.ANSWER_TEXT_CLASS),
                    E = i.getElementsByClassName(e.ANSWER_CLASS),
                    c = n.getElementsByClassName(e.ANSWER_CLASS),
                    m = n.getElementsByClassName(e.ANSWER_TEXT_CLASS);
                if ("image" === n.getAttribute("data-layout")) {
                    var S = i.getElementsByClassName(e.ANSWER_IMAGE_ELEM_CLASS)[o],
                        C = i.getElementsByClassName(e.ANSWER_IMAGE_ELEM_CLASS),
                        A = n.getElementsByClassName(e.ANSWER_IMAGE_ELEM_CLASS);
                    $.removeClass(E, e.ANSWER_IMAGE_CORRECT_CLASS), $.removeClass(c, e.ANSWER_IMAGE_CORRECT_CLASS), $.removeClass(m, e.ANSWER_TEXT_IMAGE_CORRECT_CLASS), $.removeClass(d, e.ANSWER_TEXT_IMAGE_CORRECT_CLASS), $.removeClass(C, e.ANSWER_IMAGE_ELEM_CORRECT_CLASS), $.removeClass(A, e.ANSWER_IMAGE_ELEM_CORRECT_CLASS), $.addClass([a, r], e.ANSWER_IMAGE_CORRECT_CLASS), $.addClass([_, l], e.ANSWER_TEXT_IMAGE_CORRECT_CLASS), $.addClass([a.getElementsByClassName(e.ANSWER_IMAGE_ELEM_CLASS)[0], S], e.ANSWER_IMAGE_ELEM_CORRECT_CLASS)
                } else "text" === n.getAttribute("data-layout") && ($.removeClass(E, e.ANSWER_CORRECT_CLASS), $.removeClass(c, e.ANSWER_CORRECT_CLASS), $.removeClass(m, e.ANSWER_CORRECT_CLASS), $.removeClass(d, e.ANSWER_CORRECT_CLASS), $.addClass([a, r], e.ANSWER_CORRECT_CLASS), $.addClass([_, l], e.ANSWER_TEXT_CORRECT_CLASS));
                if ("score" === u.quiztype) {
                    var T = n.parentElement.getElementsByClassName(e.CORRECT_ANSWER_CLASS)[0],
                        L = i.getElementsByClassName(e.CORRECT_ANSWER_CLASS)[0];
                    $.removeClass([T, L], "hidden"), $.removeClass([n.parentElement.getElementsByClassName(e.CORRECT_ANSWER_CORRECT_CLASS)[0], i.getElementsByClassName(e.CORRECT_ANSWER_CORRECT_CLASS)[0]], "hidden")
                }
            }

            function E(n, a) {
                var s = parseInt(n.getAttribute("data-index")),
                    i = t.getElementsByClassName(e.HIDDEN_QUESTIONS_CONTAINER_CLASS)[0].getElementsByClassName(e.SLIDE_CLASS)[s],
                    o = parseInt(a.getAttribute("data-questionindex")),
                    l = i.getElementsByClassName(e.ANSWER_TEXT_CLASS)[o],
                    r = i.getElementsByClassName(e.ANSWER_CLASS)[o],
                    _ = a.getElementsByClassName(e.ANSWER_TEXT_CLASS)[0];
                if ("image" === n.getAttribute("data-layout")) {
                    var d = i.getElementsByClassName(e.ANSWER_IMAGE_ELEM_CLASS)[o];
                    $.addClass([a, r], e.ANSWER_IMAGE_WRONG_CLASS), $.addClass([_, l], e.ANSWER_TEXT_IMAGE_WRONG_CLASS), $.addClass([a.getElementsByClassName(e.ANSWER_IMAGE_ELEM_CLASS)[0], d], e.ANSWER_IMAGE_ELEM_WRONG_CLASS)
                } else "text" === n.getAttribute("data-layout") && ($.addClass([a, r], e.ANSWER_WRONG_CLASS), $.addClass([_, l], e.ANSWER_TEXT_WRONG_CLASS));
                var E = n.parentElement.getElementsByClassName(e.CORRECT_ANSWER_CLASS)[0],
                    c = i.getElementsByClassName(e.CORRECT_ANSWER_CLASS)[0];
                $.removeClass([E, c], "hidden"), $.removeClass([n.parentElement.getElementsByClassName(e.CORRECT_ANSWER_WRONG_CLASS)[0], i.getElementsByClassName(e.CORRECT_ANSWER_WRONG_CLASS)[0]], "hidden")
            }

            function c(t, n) {
                n.preventDefault();
                var a = parseInt(t.getAttribute("data-index"));
                if (isNaN(a) || C[a] || (C[a] = {}), !(isNaN(a) || C[a].answered && "personality" !== u.quiztype)) {
                    for (var s = n.target; !$.hasClass(s, e.ANSWER_CLASS);) s = s.parentElement;
                    "score" === u.quiztype ? r(t, s) ? (_(t, s, e.CORRECT), d(t, s)) : (E(t, s), _(t, s, e.WRONG)) : "personality" === u.quiztype && (_(t, s, e.CORRECT), d(t, s)), t.setAttribute("data-answered", "true"), l()
                }
            }
            this._$panel = t;
            var u = t.dataset ? t.dataset : {},
                m = 0,
                S = 0,
                C = {};
            this._options = {
                placeholders: {
                    "js-credit": "js-slideImageCredit",
                    "js-answers": "js-slideAnswers",
                    "js-quizCounter": "js-sliderCounter"
                },
                autoPlay: !1,
                showIndicators: !1,
                slideshow: !1,
                showHeaderInfo: !1,
                showCounter: !1,
                afterSliderInit: a,
                onSlideInFinish: s,
                circular: !1
            };
            new fm.ui.SliderModule(this._$panel, this._options);
            s({
                slideIndex: 0,
                length: 1
            }), i(u.sharetitle), $.addEvent(t, "click touchend", "." + e.ANSWERS_CLASS, c)
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.LoadMoreModule = function() {
    "use strict";
    var e = {
            initialPageIndex: 2
        },
        t = function(t, n) {
            this._$panel = t, this._isLoading = !1;
            var a = t.dataset.moduleSettings ? JSON.parse(this._$panel.dataset.moduleSettings) : {};
            this.options = $.extend({}, e, a, n), this._actualPageIndex = this.options.initialPageIndex;
            var s = function() {
                    $.getData("/" + this.options.url + this._actualPageIndex, function(e) {
                        if (e) {
                            var t = document.createElement("div");
                            for (t.innerHTML = e; t.childNodes.length > 0;) this._$panel.appendChild(t.childNodes[0]);
                            fm.ui.utils.initializeModules(this._$panel, !1), this._actualPageIndex++
                        }
                        this._isLoading = !1
                    }.bind(this), function(e) {
                        this._isLoading = !1
                    }.bind(this), !1)
                },
                i = function(e) {
                    var t, n;
                    !this._isLoading && this._$panel && (t = this._$panel.offsetTop + this._$panel.offsetHeight, n = window.scrollY + window.innerHeight, n >= t && (this._isLoading = !0, window.removeEventListener("scroll", i.bind(this), !1), s.call(this)))
                };
            this.init = function() {
                window.addEventListener("scroll", i.bind(this), !1)
            }
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, fm.ui.EventFinder = function() {
    "use strict";
    var e = {
            EVENTS_PATH: "/events/finder/events",
            MAP_PLACEHOLDER: "js-eventFinderMap",
            MAP_MARKER: "M8.217,0C3.68,0,0,3.68,0,8.219c0,3.737,5.574,12.466,7.54,15.428c0.322,0.483,1.032,0.483,1.353,0c1.967-2.962,7.541-11.69,7.541-15.428C16.434,3.68,12.754,0,8.217,0 M8.217,12.108c-2.389,0-4.326-1.934-4.326-4.324c0-2.387,1.937-4.323,4.326-4.323c2.388,0,4.323,1.936,4.323,4.323C12.54,10.174,10.605,12.108,8.217,12.108",
            MAP_MARKER_COLOR: "#000",
            MAP_MARKER_SELECTED: "#5b52d0",
            MAP_TABLET_CLASS_NAME: "eventFinderMap--tabletLandscape",
            EVENTS_CONTAINER: "js-eventList",
            ITEM_LIST_ACTIVE_CLASS: "eventList__item--active",
            ITEM_LIST_SELECTED: "eventList__item--selected",
            LIST_ITEM: "js-listItem",
            LIST_ITEM_LOCATION: "eventList__item__location",
            BTN_FULLSCREEN: "js-fullScreenMap",
            FULLSCREEN_WRAPPER: "js-eventFinderMap__wrapper",
            FOOTER: "footer--festivals",
            FORM_CLASS: "js-eventFinder___form",
            FORM_NAME_INPUT_CLASS: "js-eventFinder__field--name",
            FORM_LOCATION_INPUT_CLASS: "js-eventFinder__field--location",
            FORM_DATE_INPUT_CLASS: "js-eventFinder__field--date",
            FORM_INPUT_CLASS: "js-eventFinder__field",
            FORM_INPUT_ACTIVE_CLASS: "eventFinder__field--active",
            FORM_INPUT_SELECTED_CLASS: "eventFinder__field--selected",
            FORM_EMPTY_RESULT_CLASS: "js-eventsFinder__noResults__wrapper",
            FORM_SHOW_LOCATION_RESULTS_CLASS: "js-eventsFinder__noResults--locationMarker",
            FORM_SHOW_DATE_RESULTS_CLASS: "js-eventsFinder__noResults--dateMarker",
            FORM_EMPTY_RESULTS_MARKER_CLASS: "js-eventsFinder__noResults--marker",
            FORM_EMPTY_RESULTS_CLOSE_CLASS: "js-eventsFinder__noResults__closeIcon",
            FORM_RESULTS_ITEM: "eventFinder__results--item",
            FORM_RESULTS_NAME_LIST: "js-eventFinder__resultsName--list",
            FORM_RESULTS_LOCATION_LIST: "js-eventFinder__resultsName--location",
            FORM_CLOSE_BUTTON: "js-eventFinder__closeButton",
            DROPDOWN_PLACEHOLDER: "js-datePlaceHolder"
        },
        t = function(t) {
            var n, a, s, i, o, l = document.getElementById(e.MAP_PLACEHOLDER),
                r = new google.maps.LatLng(37.09024, -95.712891),
                d = document.getElementsByClassName(e.EVENTS_CONTAINER)[0],
                E = document.getElementsByClassName(e.FOOTER)[0],
                c = document.getElementsByClassName(e.BTN_FULLSCREEN)[0],
                u = document.getElementsByClassName(e.LIST_ITEM),
                m = document.getElementsByClassName(e.FORM_CLASS)[0],
                S = document.getElementsByClassName(e.FORM_NAME_INPUT_CLASS)[0],
                C = document.getElementsByClassName(e.FORM_LOCATION_INPUT_CLASS)[0],
                A = document.getElementsByClassName(e.FORM_DATE_INPUT_CLASS)[0],
                T = document.getElementsByClassName(e.FORM_EMPTY_RESULT_CLASS)[0],
                L = document.getElementsByClassName(e.FORM_RESULTS_NAME_LIST)[0],
                p = document.getElementsByClassName(e.FORM_RESULTS_LOCATION_LIST)[0],
                f = document.getElementsByClassName(e.FULLSCREEN_WRAPPER)[0],
                h = document.getElementsByClassName(e.DROPDOWN_PLACEHOLDER)[0],
                I = null,
                N = null,
                g = [],
                v = [],
                O = {
                    path: e.MAP_MARKER,
                    fillColor: e.MAP_MARKER_COLOR,
                    fillOpacity: 1,
                    size: new google.maps.Size(24, 34),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(0, 34),
                    strokeWeight: 0
                },
                R = {
                    path: e.MAP_MARKER,
                    fillColor: e.MAP_MARKER_SELECTED,
                    fillOpacity: 1,
                    size: new google.maps.Size(24, 34),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(0, 34),
                    strokeWeight: 0
                },
                y = [{
                    textColor: "white",
                    textSize: "26",
                    fontFamily: "pill-gothic-300mg",
                    fontWeight: "700",
                    url: "../images/events/bg_cluster.png",
                    height: 38,
                    width: 38
                }],
                D = {
                    gridSize: 50,
                    styles: y,
                    maxZoom: 15
                },
                M = function() {
                    I = new google.maps.Map(l, {
                        center: r,
                        zoom: 2,
                        maxZoom: 15,
                        minZoom: 4,
                        mapTypeControl: !1,
                        scrollwheel: !0,
                        clickable: !0
                    })
                },
                P = function(e) {
                    n = new google.maps.Geocoder;
                    var t = "<h4>Could not find location: " + e + "</h4>";
                    n.geocode({
                        address: e
                    }, function(e, n) {
                        n === google.maps.GeocoderStatus.OK ? (I.setCenter(e[0].geometry.location), I.setZoom(15)) : ($.removeClass(T, fm.ui.constants.HIDDEN_CLASS), T.innerHTML = t)
                    })
                },
                B = function(e) {
                    _.each(d.childNodes, function(e, t) {
                        e.dataset.position && google.maps.event.trigger(g[e.dataset.position], "click")
                    })
                },
                w = function(t) {
                    t = t || {}, t.resourceType = "json", $.getData(e.EVENTS_PATH, function(e) {
                        $.addClass(T, fm.ui.constants.HIDDEN_CLASS), $.removeClass(d, fm.ui.constants.HIDDEN_CLASS), V(), d.innerHTML = "", v = e, v && v.length ? F(t) : b(t)
                    }, function(e) {}, !0, t)
                },
                b = function(e) {
                    var t, n, a, s, i, o = window.location.search.split("?"),
                        l = "",
                        r = [],
                        _ = "";
                    if (e) delete e.resourceType;
                    else if (o && o.length > 0)
                        for (e = {}, _ = o[1] ? o[1] : "", r = _.split("&"), t = 0, n = r.length; n > t; t++) a = r[t].split("="), s = a[0], i = a[1], s && (e[s] = i);
                    l += e.name ? '<h4 class="eventsFinder__noResults__title">No Events named "' + e.name + '"</h4><h6 class="eventsFinder__noResults__subtitle"> See <span class="eventsFinder__noResults__marker js-eventsFinder__noResults--marker ">All Events</span></h6>' : e.month && e.location ? '<h4 class="eventsFinder__noResults__title">No Events ' + e.location + " during " + moment().month(parseInt(e.month)).format("MMM, YYYY") + '"</h4><h6 class="eventsFinder__noResults__subtitle">See Results for <span class="eventsFinder__noResults__marker js-eventsFinder__noResults--marker js-eventsFinder__noResults--locationMarker" data-location="' + e.location + '">Location Only</span> or <span class="eventsFinder__noResults__marker js-eventsFinder__noResults--marker js-eventsFinder__noResults--dateMarker" data-date="' + e.month + '">Date Only</span></h6>' : e.month ? '<h4 class="eventsFinder__noResults__title">No Events during ' + moment().month(parseInt(e.month)).format("MMM, YYYY") + '</h4><h6 class="eventsFinder__noResults__subtitle">See <span class="eventsFinder__noResults__marker js-eventsFinder__noResults--marker ">All Events</span></h6>' : e.location ? '<h4 class="eventsFinder__noResults__title">No Events in "' + e.location + '"</h4><h6 class="eventsFinder__noResults__subtitle">See <span class="eventsFinder__noResults__marker js-eventsFinder__noResults--marker "> All Events</span></h6>' : '<h4 class="eventsFinder__noResults__title">No Events </h4>', l += '<a href="#", class="js-eventsFinder__noResults__closeIcon eventsFinder__noResults__closeIcon icon-close"></a>', T.innerHTML = l, $.removeClass(T, fm.ui.constants.HIDDEN_CLASS), $.addClass(d, fm.ui.constants.HIDDEN_CLASS), d.innerHTML = ""
                },
                H = function() {
                    a = document.getElementsByClassName(e.FORM_RESULTS_NAME_LIST)[0], s = document.getElementsByClassName(e.FORM_RESULTS_LOCATION_LIST)[0];
                    var t, n, i, o;
                    $.addEvent(s, "click touchend", "." + e.FORM_RESULTS_ITEM, function(a) {
                        t = document.getElementsByClassName(e.LIST_ITEM_LOCATION), n = a.innerHTML, C.value = a.innerHTML, p.innerHTML = "", G()
                    }), A.onchange = function() {
                        G()
                    }, $.addEvent(a, "click touchend", "." + e.FORM_RESULTS_ITEM, function(e) {
                        n = e.dataset.eventid, S.value = e.innerHTML, L.innerHTML = "", G()
                    }), $.addEvent(d, "click", "." + e.LIST_ITEM, function(t) {
                        for (n = t.dataset.position, $.addClass(t, e.ITEM_LIST_ACTIVE_CLASS), i = 0, o = u.length; o > i; i++) $.hasClass(u[i], e.ITEM_LIST_ACTIVE_CLASS) === !0 && u[i] != t && ($.removeClass(u[i], e.ITEM_LIST_ACTIVE_CLASS), $.addClass(t, e.ITEM_LIST_ACTIVE_CLASS));
                        google.maps.event.trigger(g[n], "click"), $.scrollToTopAnimation(150), $.addClass(t, e.ITEM_LIST_ACTIVE_CLASS)
                    }), $.addEvent(d, "mouseover", "." + e.LIST_ITEM, function(e) {
                        n = e.dataset.position, google.maps.event.trigger(g[n], "mouseover")
                    }), $.addEvent(d, "mouseout", "." + e.LIST_ITEM, function(e) {
                        n = e.dataset.position, google.maps.event.trigger(g[n], "mouseout")
                    })
                },
                V = function() {
                    var e = 0,
                        t = 0;
                    for (e = 0, t = g.length; t > e; e++) N && N.removeMarker(g[e]), g[e].setMap(null);
                    g = []
                },
                F = function(t) {
                    t = t || {};
                    var n = 0,
                        a = v.length;
                    for (n = 0; a > n; n++)
                        if (v[n] && v[n].geo && v[n].geo.latitude && v[n].geo.longitude) {
                            var s, i, o, l, _ = (new google.maps.LatLng(v[n].geo.latitude, v[n].geo.longitude), new google.maps.Marker({
                                    position: new google.maps.LatLng(v[n].geo.latitude, v[n].geo.longitude),
                                    map: I,
                                    icon: O,
                                    eventId: v[n]._id,
                                    eventName: v[n].name,
                                    festival: v[n].festival
                                })),
                                E = v[n].name,
                                c = v[n] ? v[n].location : "",
                                u = v[n].festival ? v[n].festival.path : "#",
                                m = v[n].festival ? "" : " hidden",
                                S = new Date(v[n].start),
                                C = v[n].startMonth,
                                A = S.getDate(),
                                T = S.getFullYear(),
                                L = $.formatTime(S);
                            i = '<div class="eventInfo__panel" data-event-name="' + E + '" data-event-location="' + c + '"><h4 class="eventInfo__panel__title">' + E + '</h4><p class="eventInfo__panel__location">' + c + '</p><p class="eventInfo_panel__date">' + C + " " + A + ", " + T + '<span class="eventInfo__hour"> ' + L + '</span></p><a class="eventInfo__panel__link' + m + '" data-track="item" href=' + u + "> More Info </a></div>", l = new google.maps.InfoWindow, o = document.createElement("li"), s = '<div class="eventList__item__left"><span class="eventList__item__date">' + C + " " + A + "</span></div>", s += '<div class="eventList__item__right"><span class="eventList__item__name">' + E + '</span><span class="' + e.LIST_ITEM_LOCATION + '">' + c + "</span></div>", $.addClass(o, "eventList__item"), $.addClass(o, e.LIST_ITEM), o.setAttribute("data-position", n), o.setAttribute("data-eventid", v[n]._id), o.innerHTML = s, d.appendChild(o), g.push(_), google.maps.event.addListener(_, "click", function(t, n, a) {
                                return function() {
                                    I.setZoom(15), I.setCenter(t.getPosition()), a.setContent(n), a.open(I, t), t.setIcon(R);
                                    var s = t.eventId,
                                        i = document.querySelectorAll('[data-eventid="' + s + '" ]');
                                    $.addClass(i, e.ITEM_LIST_ACTIVE_CLASS)
                                }
                            }(_, i, l)), google.maps.event.addListener(_, "mouseover", function(t, n, a) {
                                return function() {
                                    t.setIcon(R);
                                    var n = t.eventId,
                                        a = document.querySelectorAll('[data-eventid="' + n + '" ]');
                                    $.addClass(a, e.ITEM_LIST_ACTIVE_CLASS)
                                }
                            }(_, i, l)), google.maps.event.addListener(_, "mouseout", function(t, n) {
                                return function() {
                                    t.setIcon(O);
                                    var n = t.eventId,
                                        a = document.querySelectorAll('[data-eventid="' + n + '" ]');
                                    $.removeClass(a, e.ITEM_LIST_ACTIVE_CLASS)
                                }
                            }(_, i)), google.maps.event.addListener(l, "closeclick", function(e) {
                                return function() {
                                    I.setCenter(r), I.setZoom(2), e.setIcon(O)
                                }
                            }(_))
                        }
                    if (t && t.name ? B(t.name) : t && t.location ? P(t.location) : t && t.month && M(), N = new MarkerClusterer(I, g, D), window.location.href.indexOf("finder?name") > -1) {
                        var p = window.location.href.split("name=")[1];
                        if (p) {
                            p = decodeURI(p);
                            for (var f = 0, h = g.length; h > f; f++) g[f].festival && g[f].festival.title === p && google.maps.event.trigger(g[f], "click")
                        }
                    }
                },
                U = function(e) {
                    var t = I.getCenter();
                    e.classList.toggle("btn__mapExpand--close"), f.classList.toggle("eventFinderMap__wrapper--fullscreen"), l.classList.toggle("eventFinderMap--fullscreen"), d.classList.toggle("hidden"), E.classList.toggle("hidden"), google.maps.event.trigger(I, "resize"), I.setCenter(t)
                },
                j = function(e) {
                    var t = ["?"],
                        n = [],
                        a = "",
                        s = "";
                    e ? (e.name ? (t.push("name=" + e.name), t.push("&")) : (e.location && (t.push("location=" + e.location), t.push("&")), e.month && (t.push("month=" + e.month), t.push("&"))), t.pop(), s = t.join(""), n.push(window.location.href.split("?")[0]), n.push(s), a = n.join(""), window.history.replaceState({}, "", a)) : window.history.replaceState({}, "", window.location.href.split("?")[0]), w(e)
                },
                G = function(t) {
                    var n = {};
                    t && t.preventDefault(), (S && S.value || C && C.value || A && A.value) && (S && $.hasClass(S, e.FORM_INPUT_ACTIVE_CLASS) && S.value ? n.name = S.value : (C && $.hasClass(C, e.FORM_INPUT_ACTIVE_CLASS) && C.value && (n.location = C.value), A && $.hasClass(A, e.FORM_INPUT_ACTIVE_CLASS) && A.value && (n.month = A.value))), j(n), S.blur(), C.blur()
                },
                k = function() {
                    m.addEventListener ? m.addEventListener("submit", G, !1) : m.attachEvent && m.attachEvent("onsubmit", G)
                },
                x = function() {
                    i = m.getElementsByClassName(e.FORM_CLOSE_BUTTON)[0], $.addEvent(m, "focus", "." + e.FORM_INPUT_CLASS, function(t, n) {
                        $.addClass(t, e.FORM_INPUT_SELECTED_CLASS), $.hasClass(t, e.FORM_DATE_INPUT_CLASS) || $.removeClass(i, "hidden"), $.hasClass(t, e.FORM_NAME_INPUT_CLASS) ? ($.addClass(S, e.FORM_INPUT_ACTIVE_CLASS), $.removeClass(C, e.FORM_INPUT_ACTIVE_CLASS), A.classList.remove(e.FORM_INPUT_ACTIVE_CLASS), C.value = "", A.value = "") : ($.addClass(C, e.FORM_INPUT_ACTIVE_CLASS), A.classList.add(e.FORM_INPUT_ACTIVE_CLASS), $.removeClass(S, e.FORM_INPUT_ACTIVE_CLASS), S.value = "")
                    }, !0), $.addEvent(m, "blur", "." + e.FORM_INPUT_CLASS, function(t, n) {
                        $.removeClass(t, e.FORM_INPUT_SELECTED_CLASS), $.hasClass(t, e.FORM_DATE_INPUT_CLASS) || $.addClass(i, fm.ui.constants.HIDDEN_CLASS)
                    }, !0)
                },
                W = function() {
                    fm.allFestivalResults && fm.allFestivalResults.length && (S.addEventListener("keyup", function(e) {
                        var n = S.value;
                        t(n, "name")
                    }), C.addEventListener("keyup", function(e) {
                        var n = C.value;
                        t(n, "location")
                    }));
                    var t = function(t, n) {
                        var a, s = {},
                            i = "",
                            o = "";
                        t ? (s = Y(fm.allFestivalResults, n, t), a = _.uniq(s, !1, function(e) {
                            return e.location
                        }), _.each(a, function(t, a) {
                            o += '<li href="#" data-position="' + a + '" data-eventid="' + t._id + '" class="' + e.FORM_RESULTS_ITEM + '">' + t[n] + "</li>"
                        }), "name" === n ? (i = L, i.innerHTML = o) : "location" === n && (i = p, i.innerHTML = o), document.getElementsByTagName("body")[0].onclick = function(e) {
                            e.target !== i && (i.innerHTML = "")
                        }) : t || ("name" === n ? (i = L, i.innerHTML = "") : "location" === n && (i = p, i.innerHTML = ""))
                    }
                },
                Y = function(e, t, n) {
                    var a = {};
                    return a = _.filter(e, function(e) {
                        if (e.name) {
                            var a = new RegExp(n, "gi");
                            return a.exec(e[t])
                        }
                        return !1
                    })
                },
                z = function() {
                    $.addEvent(T, "click touchend", "." + e.FORM_EMPTY_RESULTS_MARKER_CLASS, function(t, n) {
                        o = {}, $.hasClass(t, e.FORM_SHOW_LOCATION_RESULTS_CLASS) ? (o.location = t.dataset.location, A.value = "") : $.hasClass(t, e.FORM_SHOW_DATE_RESULTS_CLASS) ? (o.month = t.dataset.date, C.value = "") : (A.value = "", C.value = ""), S.value = "", j(o)
                    }), $.addEvent(T, "click touchend", "." + e.FORM_EMPTY_RESULTS_CLOSE_CLASS, function(e, t) {
                        $.addClass(T, fm.ui.constants.HIDDEN_CLASS), o = {}, C.value = "", A.value = "", S.value = "", j(o)
                    })
                },
                X = function() {
                    $.addEvent(m, "touchend", "." + e.FORM_CLOSE_BUTTON, function(e, t) {
                        p.innerHTML = "", L.innerHTML = "", C.value = "", S.value = "", S.blur(), C.blur()
                    })
                };
            this.init = function() {
                fm.festivalResults && fm.festivalResults.length ? v = fm.festivalResults : b(), W(), z(), k(), x(), M(), F(), H(), $.isMobile() && (X(), h.label = "Year", c.addEventListener("click", function(e) {
                    event.preventDefault(), U(this)
                })), $.isTablet() && $.isLandscape() && l.classList.add(e.MAP_TABLET_CLASS_NAME), $.addOrientationChangeEvent(function() {
                    $.isTablet() && $.isLandscape() ? l.classList.add(e.MAP_TABLET_CLASS_NAME) : l.classList.remove(e.MAP_TABLET_CLASS_NAME)
                })
            }
        };
    return t
}();
var fm = fm || {};
fm.ui = fm.ui || {}, $.documentReady(function() {
    fm.ui.tabletRotation.init(), fm.ui.topNavigation.init(), fm.ui.searchBar.init(), fm.ui.utils.initializePage(), fm.ui.utils.initializeModules(), fm.chartbeat.init()
});
