! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.P2PEngineIOS = t() : e.P2PEngineIOS = t()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 18)
    }([function(e, t, n) {
        "use strict";

        function r() {
            return !0
        }

        function i(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                n = window.location.search.substr(1).match(t);
            return null != n && "" !== n[2] ? n[2].toString() : ""
        }

        function o(e, t, n) {
            var r = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                i = -1 !== e.indexOf("?") ? "&" : "?";
            return e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : e + i + t + "=" + n
        }

        function a() {
            return Date.parse(new Date) / 1e3
        }

        function s(e, t) {
            return parseInt(Math.random() * (t - e + 1) + e, 10)
        }

        function u(e) {
            return 0 === e ? w : .33 * e + .67
        }

        function l(e) {
            var t = new XMLHttpRequest;
            return new Promise(function(n, r) {
                t.open("GET", e, !0), t.responseType = "arraybuffer", t.timeout = 3e3, t.onload = function(e) {
                    206 === t.status ? n() : r()
                }, t.onerror = function(e) {
                    r()
                }, t.ontimeout = function(e) {
                    r()
                }, t.setRequestHeader("Range", "bytes=0-0"), t.send()
            })
        }

        function c() {
            return "zh-CN" === (navigator.language || navigator.userLanguage) ? "cn" : "en"
        }

        function f(e) {
            e.then(function() {})
        }

        function d(e) {
            return new Promise(function(t) {
                return setTimeout(t, e)
            })
        }

        function h() {
            if ("undefined" == typeof window) return null;
            var e = {
                RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
                RTCSessionDescription: window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
                RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate
            };
            return e.RTCPeerConnection ? e : null
        }

        function p(e) {
            var t = b.from(e),
                n = new b(e.byteLength);
            return t.copy(n), n
        }

        function g(e) {
            var t = e.split("\n"),
                n = 0,
                r = 0,
                i = !0,
                o = !1,
                a = void 0;
            try {
                for (var s, u = t[Symbol.iterator](); !(i = (s = u.next()).done); i = !0) {
                    var l = s.value,
                        c = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(l);
                    if (c && c[1]) {
                        n = parseInt(c[1], 10);
                        break
                    }
                }
            } catch (e) {
                o = !0, a = e
            } finally {
                try {
                    !i && u.return && u.return()
                } finally {
                    if (o) throw a
                }
            }
            var f = !0,
                d = !1,
                h = void 0;
            try {
                for (var p, g = t[Symbol.iterator](); !(f = (p = g.next()).done); f = !0) {
                    p.value.startsWith("#EXTINF") && r++
                }
            } catch (e) {
                d = !0, h = e
            } finally {
                try {
                    !f && g.return && g.return()
                } finally {
                    if (d) throw h
                }
            }
            return n + r - 1
        }

        function v() {
            return location.protocol.startsWith("https")
        }

        function y(e) {
            return "number" == typeof e && e % 1 == 0
        }

        function m(e, t, n) {
            var r = document.createElement("div");
            r.style.position = "absolute", r.style.top = "8px", r.style.left = "8px", r.style.zIndex = "999";
            var i = document.createElement("a");
            i.href = t, i.target = "_blank", i.innerText = e, i.style.color = "white", i.style.textDecoration = "none", i.style.textShadow = "0 0 5px white,0 0 10px #00FFFF,0 0 15px #7FFF00,0 0 20px white";
            var o = document.createElement("i");
            o.style.width = "7px", o.style.height = "7px", o.style.borderRadius = "50%", o.style.display = "inline-block", o.style.backgroundColor = "#67C23A", o.style.marginBottom = "2px", o.style.marginRight = "4px", r.appendChild(o), r.appendChild(i);
            var a = n.parentNode;
            a && a.insertBefore(r, n)
        }

        function _() {
            return window.atob("aHR0cHM6Ly9zd2FybWNsb3VkLm5ldC9lbi8=")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.noop = r, t.getQueryParam = i, t.updateQueryStringParam = o, t.getCurrentTs = a, t.randomNum = s, t.calCheckPeersDelay = u, t.performRangeRequest = l, t.navLang = c, t.dontWaitFor = f, t.timeout = d, t.getBrowserRTC = h, t.copyBuffer = p, t.getMaxSequence = g, t.isHttps = v, t.isInteger = y, t.appendSlogan = m, t.getHomeUrl = _;
        var b = n(5).Buffer,
            w = 3
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            console && console.warn && console.warn(e)
        }

        function i() {
            i.init.call(this)
        }

        function o(e) {
            if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + (void 0 === e ? "undefined" : y(e)))
        }

        function a(e) {
            return void 0 === e._maxListeners ? i.defaultMaxListeners : e._maxListeners
        }

        function s(e, t, n, i) {
            var s, u, l;
            if (o(n), u = e._events, void 0 === u ? (u = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== u.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), u = e._events), l = u[t]), void 0 === l) l = u[t] = n, ++e._eventsCount;
            else if ("function" == typeof l ? l = u[t] = i ? [n, l] : [l, n] : i ? l.unshift(n) : l.push(n), (s = a(e)) > 0 && l.length > s && !l.warned) {
                l.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = l.length, r(c)
            }
            return e
        }

        function u() {
            if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }

        function l(e, t, n) {
            var r = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: n
                },
                i = u.bind(r);
            return i.listener = n, r.wrapFn = i, i
        }

        function c(e, t, n) {
            var r = e._events;
            if (void 0 === r) return [];
            var i = r[t];
            return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? p(i) : d(i, i.length)
        }

        function f(e) {
            var t = this._events;
            if (void 0 !== t) {
                var n = t[e];
                if ("function" == typeof n) return 1;
                if (void 0 !== n) return n.length
            }
            return 0
        }

        function d(e, t) {
            for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
            return n
        }

        function h(e, t) {
            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
            e.pop()
        }

        function p(e) {
            for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t
        }

        function g(e, t) {
            return new Promise(function(n, r) {
                function i() {
                    void 0 !== o && e.removeListener("error", o), n([].slice.call(arguments))
                }
                var o;
                "error" !== t && (o = function(n) {
                    e.removeListener(t, i), r(n)
                }, e.once("error", o)), e.once(t, i)
            })
        }
        var v, y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            m = "object" === ("undefined" == typeof Reflect ? "undefined" : y(Reflect)) ? Reflect : null,
            _ = m && "function" == typeof m.apply ? m.apply : function(e, t, n) {
                return Function.prototype.apply.call(e, t, n)
            };
        v = m && "function" == typeof m.ownKeys ? m.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function(e) {
            return Object.getOwnPropertyNames(e)
        };
        var b = Number.isNaN || function(e) {
            return e !== e
        };
        e.exports = i, e.exports.once = g, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
        var w = 10;
        Object.defineProperty(i, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return w
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || b(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                w = e
            }
        }), i.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, i.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || b(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this
        }, i.prototype.getMaxListeners = function() {
            return a(this)
        }, i.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
            var r = "error" === e,
                i = this._events;
            if (void 0 !== i) r = r && void 0 === i.error;
            else if (!r) return !1;
            if (r) {
                var o;
                if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw a.context = o, a
            }
            var s = i[e];
            if (void 0 === s) return !1;
            if ("function" == typeof s) _(s, this, t);
            else
                for (var u = s.length, l = d(s, u), n = 0; n < u; ++n) _(l[n], this, t);
            return !0
        }, i.prototype.addListener = function(e, t) {
            return s(this, e, t, !1)
        }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(e, t) {
            return s(this, e, t, !0)
        }, i.prototype.once = function(e, t) {
            return o(t), this.on(e, l(this, e, t)), this
        }, i.prototype.prependOnceListener = function(e, t) {
            return o(t), this.prependListener(e, l(this, e, t)), this
        }, i.prototype.removeListener = function(e, t) {
            var n, r, i, a, s;
            if (o(t), void 0 === (r = this._events)) return this;
            if (void 0 === (n = r[e])) return this;
            if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) {
                for (i = -1, a = n.length - 1; a >= 0; a--)
                    if (n[a] === t || n[a].listener === t) {
                        s = n[a].listener, i = a;
                        break
                    } if (i < 0) return this;
                0 === i ? n.shift() : h(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t)
            }
            return this
        }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(e) {
            var t, n, r;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
            if (0 === arguments.length) {
                var i, o = Object.keys(n);
                for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if ("function" == typeof(t = n[e])) this.removeListener(e, t);
            else if (void 0 !== t)
                for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
            return this
        }, i.prototype.listeners = function(e) {
            return c(this, e, !0)
        }, i.prototype.rawListeners = function(e) {
            return c(this, e, !1)
        }, i.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t)
        }, i.prototype.listenerCount = f, i.prototype.eventNames = function() {
            return this._eventsCount > 0 ? v(this._events) : []
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            DC_SIGNAL: "SIGNAL",
            DC_OPEN: "OPEN",
            DC_REQUEST: "REQUEST",
            DC_PIECE_NOT_FOUND: "PIECE_NOT_FOUND",
            DC_PIECE_ABORT: "PIECE_ABORT",
            DC_CLOSE: "CLOSE",
            DC_RESPONSE: "RESPONSE",
            DC_ERROR: "ERROR",
            DC_PIECE: "PIECE",
            DC_PIECE_DATA: "PIECE_DATA",
            DC_TIMEOUT: "TIMEOUT",
            DC_PIECE_ACK: "PIECE_ACK",
            DC_METADATA: "METADATA",
            DC_PLAT_ANDROID: "ANDROID",
            DC_PLAT_IOS: "IOS",
            DC_PLAT_WEB: "WEB",
            DC_CHOKE: "CHOKE",
            DC_UNCHOKE: "UNCHOKE",
            DC_HAVE: "HAVE",
            DC_LOST: "LOST",
            DC_GET_PEERS: "GET_PEERS",
            DC_PEERS: "PEERS",
            DC_STATS: "STATS",
            DC_SUBSCRIBE: "SUBSCRIBE",
            DC_UNSUBSCRIBE: "UNSUBSCRIBE",
            DC_SUBSCRIBE_ACCEPT: "SUBSCRIBE_ACCEPT",
            DC_SUBSCRIBE_REJECT: "SUBSCRIBE_REJECT",
            DC_SUBSCRIBE_LEVEL: "SUBSCRIBE_LEVEL",
            DC_PEER_SIGNAL: "PEER_SIGNAL",
            DC_PLAYLIST: "PLAYLIST",
            BM_LOST: "lost",
            BM_ADDED_SEG_: "BM_ADDED_SEG_",
            BM_ADDED_SN_: "BM_ADDED_SN_",
            BM_SEG_ADDED: "BM_SEG_ADDED",
            FRAG_CHANGED: "FRAG_CHANGED",
            FRAG_LOADED: "FRAG_LOADED",
            FRAG_LOADING: "FRAG_LOADING",
            RESTART_P2P: "RESTART_P2P",
            EXCEPTION: "exception"
        }, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            var n, r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            ! function(o) {
                var a = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,
                    s = /^([^\/?#]*)(.*)$/,
                    u = /(?:\/|^)\.(?=\/)/g,
                    l = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
                    c = {
                        buildAbsoluteURL: function(e, t, n) {
                            if (n = n || {}, e = e.trim(), !(t = t.trim())) {
                                if (!n.alwaysNormalize) return e;
                                var r = c.parseURL(e);
                                if (!r) throw new Error("Error trying to parse base URL.");
                                return r.path = c.normalizePath(r.path), c.buildURLFromParts(r)
                            }
                            var i = c.parseURL(t);
                            if (!i) throw new Error("Error trying to parse relative URL.");
                            if (i.scheme) return n.alwaysNormalize ? (i.path = c.normalizePath(i.path), c.buildURLFromParts(i)) : t;
                            var o = c.parseURL(e);
                            if (!o) throw new Error("Error trying to parse base URL.");
                            if (!o.netLoc && o.path && "/" !== o.path[0]) {
                                var a = s.exec(o.path);
                                o.netLoc = a[1], o.path = a[2]
                            }
                            o.netLoc && !o.path && (o.path = "/");
                            var u = {
                                scheme: o.scheme,
                                netLoc: i.netLoc,
                                path: null,
                                params: i.params,
                                query: i.query,
                                fragment: i.fragment
                            };
                            if (!i.netLoc && (u.netLoc = o.netLoc, "/" !== i.path[0]))
                                if (i.path) {
                                    var l = o.path,
                                        f = l.substring(0, l.lastIndexOf("/") + 1) + i.path;
                                    u.path = c.normalizePath(f)
                                } else u.path = o.path, i.params || (u.params = o.params, i.query || (u.query = o.query));
                            return null === u.path && (u.path = n.alwaysNormalize ? c.normalizePath(i.path) : i.path), c.buildURLFromParts(u)
                        },
                        parseURL: function(e) {
                            var t = a.exec(e);
                            return t ? {
                                scheme: t[1] || "",
                                netLoc: t[2] || "",
                                path: t[3] || "",
                                params: t[4] || "",
                                query: t[5] || "",
                                fragment: t[6] || ""
                            } : null
                        },
                        normalizePath: function(e) {
                            for (e = e.split("").reverse().join("").replace(u, ""); e.length !== (e = e.replace(l, "")).length;);
                            return e.split("").reverse().join("")
                        },
                        buildURLFromParts: function(e) {
                            return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                        }
                    };
                "object" === i(t) && "object" === i(e) ? e.exports = c : (n = [], void 0 !== (r = function() {
                    return c
                }.apply(t, n)) && (e.exports = r))
            }()
        }).call(t, n(10)(e))
    }, function(e, t, n) {
        "use strict";

        function r() {
            return navigator.userAgent.toLowerCase()
        }

        function i(e) {
            return "" + (new RegExp(e + "(\\d+((\\.|_)\\d+)*)").exec(r()) || [, 0])[1] || void 0
        }

        function o(e) {
            return parseFloat((e || "").replace(/\_/g, ".")) || 0
        }
        var a = {
                ANDROID_WEB: "android-web",
                IOS_WEB: "iOS-web",
                PC_NATIVE: "PC-native",
                PC_WEB: "PC-web"
            },
            s = {
                getNetType: function() {
                    var e = (new RegExp("nettype\\/(\\w*)").exec(r()) || [, ""])[1].toLowerCase();
                    if (!e && navigator.connection) {
                        switch (navigator.connection.type) {
                            case "ethernet":
                                e = "ethernet";
                                break;
                            case "cellular":
                                e = "cellular";
                                break;
                            default:
                                e = "wifi"
                        }
                    }
                    return e
                },
                getPlatform: function() {
                    return s.isAndroid() ? a.ANDROID_WEB : s.isIOS() ? a.IOS_WEB : s.isElectron() ? a.PC_NATIVE : a.PC_WEB
                },
                isX5: function() {
                    return this.isAndroid() && /\s(TBS|X5Core)\/[\w\.\-]+/i.test(r())
                },
                isPC: function() {
                    return !o(i("os ")) && !o(i("android[/ ]"))
                },
                isIOS: function() {
                    return o(i("os "))
                },
                isAndroid: function() {
                    return o(i("android[/ ]"))
                },
                isIOSSafari: function() {
                    return this.isIOS() && this.isSafari()
                },
                isElectron: function() {
                    return /electron/i.test(r())
                },
                isMobile: function() {
                    return s.isAndroid() || s.isIOS()
                },
                isSafari: function() {
                    return /^((?!chrome|android).)*safari/i.test(r())
                },
                isFirefox: function() {
                    return /firefox/i.test(r())
                },
                isChrome: function() {
                    return /chrome/i.test(r())
                },
                isLocalHost: function() {
                    return "localhost" === location.hostname
                },
                device: a,
                getBrowser: function() {
                    return s.isX5() ? "X5" : s.isChrome() ? "Chrome" : s.isFirefox() ? "Firefox" : s.isIOSSafari() ? "iOS-Safari" : s.isSafari() ? "Mac-Safari" : "Unknown"
                }
            };
        e.exports = s
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e > _) throw new RangeError('The value "' + e + '" is invalid for option "size"');
            var t = new Uint8Array(e);
            return t.__proto__ = i.prototype, t
        }

        function i(e, t, n) {
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                return u(e)
            }
            return o(e, t, n)
        }

        function o(e, t, n) {
            if ("string" == typeof e) return l(e, t);
            if (ArrayBuffer.isView(e)) return c(e);
            if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === e ? "undefined" : m(e)));
            if (v(e, ArrayBuffer) || e && v(e.buffer, ArrayBuffer)) return f(e, t, n);
            if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
            var r = e.valueOf && e.valueOf();
            if (null != r && r !== e) return i.from(r, t, n);
            var o = d(e);
            if (o) return o;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return i.from(e[Symbol.toPrimitive]("string"), t, n);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === e ? "undefined" : m(e)))
        }

        function a(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
            if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
        }

        function s(e, t, n) {
            return a(e), e <= 0 ? r(e) : void 0 !== t ? "string" == typeof n ? r(e).fill(t, n) : r(e).fill(t) : r(e)
        }

        function u(e) {
            return a(e), r(e < 0 ? 0 : 0 | h(e))
        }

        function l(e, t) {
            if ("string" == typeof t && "" !== t || (t = "utf8"), !i.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
            var n = 0 | p(e, t),
                o = r(n),
                a = o.write(e, t);
            return a !== n && (o = o.slice(0, a)), o
        }

        function c(e) {
            for (var t = e.length < 0 ? 0 : 0 | h(e.length), n = r(t), i = 0; i < t; i += 1) n[i] = 255 & e[i];
            return n
        }

        function f(e, t, n) {
            if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
            var r;
            return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), r.__proto__ = i.prototype, r
        }

        function d(e) {
            if (i.isBuffer(e)) {
                var t = 0 | h(e.length),
                    n = r(t);
                return 0 === n.length ? n : (e.copy(n, 0, 0, t), n)
            }
            return void 0 !== e.length ? "number" != typeof e.length || y(e.length) ? r(0) : c(e) : "Buffer" === e.type && Array.isArray(e.data) ? c(e.data) : void 0
        }

        function h(e) {
            if (e >= _) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + _.toString(16) + " bytes");
            return 0 | e
        }

        function p(e, t) {
            if (i.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || v(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + (void 0 === e ? "undefined" : m(e)));
            var n = e.length,
                r = arguments.length > 2 && !0 === arguments[2];
            if (!r && 0 === n) return 0;
            for (var o = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                    return g(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                default:
                    if (o) return r ? -1 : g(e).length;
                    t = ("" + t).toLowerCase(), o = !0
            }
        }

        function g(e, t) {
            t = t || 1 / 0;
            for (var n, r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!i) {
                        if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === r) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                        continue
                    }
                    n = 65536 + (i - 55296 << 10 | n - 56320)
                } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function v(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
        }

        function y(e) {
            return e !== e
        }
        var m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.Buffer = i;
        var _ = 2147483647;
        t.kMaxLength = _, "undefined" != typeof Symbol && null != Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1
        }), i.from = function(e, t, n) {
            return o(e, t, n)
        }, i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, i.alloc = function(e, t, n) {
            return s(e, t, n)
        }, i.allocUnsafe = function(e) {
            return u(e)
        }, i.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== i.prototype
        }, i.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, i.concat = function(e, t) {
            if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return i.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = i.allocUnsafe(t),
                o = 0;
            for (n = 0; n < e.length; ++n) {
                var a = e[n];
                if (v(a, Uint8Array) && (a = i.from(a)), !i.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(r, o), o += a.length
            }
            return r
        }, i.byteLength = p, i.prototype._isBuffer = !0, i.prototype.copy = function(e, t, n, r) {
            if (!i.isBuffer(e)) throw new TypeError("argument should be a Buffer");
            if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var o = r - n;
            if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, r);
            else if (this === e && n < t && t < r)
                for (var a = o - 1; a >= 0; --a) e[a + t] = this[a + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
            return o
        }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = function() {
                function e(t, n, i, o) {
                    r(this, e), this._sn = t, this._segId = n, this._data = i, this._fromPeerId = o
                }
                return i(e, [{
                    key: "size",
                    get: function() {
                        return this._data.byteLength
                    }
                }, {
                    key: "sn",
                    get: function() {
                        return this._sn
                    }
                }, {
                    key: "segId",
                    get: function() {
                        return this._segId
                    }
                }, {
                    key: "data",
                    get: function() {
                        return this._data
                    }
                }, {
                    key: "fromPeerId",
                    get: function() {
                        return this._fromPeerId
                    }
                }, {
                    key: "isSequential",
                    get: function() {
                        return this._sn >= 0
                    }
                }]), e
            }();
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = n(2),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i);
        t.default = r({}, o.default, {
            ERROR: "error",
            SW_PLAYLIST: "SW_PLAYLIST",
            SW_MEDIA: "SW_MEDIA",
            SW_GET_MEDIA: "SW_GET_MEDIA",
            LEVEL_LOADED: "LEVEL_LOADED",
            MANIFEST_PARSED: "MANIFEST_PARSED",
            FRAG_LOADED: "FRAG_LOADED",
            SCH_DCHAVE: "SCH_DCHAVE"
        }), e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e, t, n, r) {
            var i = [];
            if (r) {
                for (var o = void 0, a = 0; a < n - 1; a++) o = e.slice(a * t, (a + 1) * t), i.push(o);
                o = e.slice(e.byteLength - r, e.byteLength), i.push(o)
            } else
                for (var s = void 0, u = 0; u < n; u++) s = e.slice(u * t, (u + 1) * t), i.push(s);
            return i
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(27),
            f = r(c),
            d = n(1),
            h = r(d),
            p = n(2),
            g = r(p),
            v = n(0),
            y = n(6),
            m = r(y),
            _ = n(4),
            b = r(_),
            w = n(28),
            S = n(5).Buffer,
            P = 64e3,
            E = function(e) {
                function t(e, n, r, a, s, l) {
                    var c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {};
                    i(this, t);
                    var d = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    d.engine = e, d.channel = e.fetcher.channelId, d.logger = e.logger, d.config = s, d.isInitiator = a, d.options = c, d.typeExpected = l, d.remotePeerId = r, d.intermediator = c.intermediator || null, d.channelId = a ? n + "-" + r : r + "-" + n, d.cpr = 0, d.platform = "unknown", d.mobile = !1, d.mobileWeb = !1, d.connected = !1, d.msgQueue = [], d.miss = 0, d.notifySet = new Set, d.bufArr = [], d.packetSize = P, d.connTimeout = setTimeout(function() {
                        d.logger.warn("dc " + d.channelId + " connection timeout"), d.emit(g.default.DC_ERROR, !0)
                    }, 25e3), d.sendReqQueue = [], d.downloading = !1, d.uploading = !1, d.choked = !1, d.downloadListeners = [], d.pieceMsg = {}, d.timeSendRequest = 0, d.timeReceivePiece = 0, d.timeSendPiece = 0, d.weight = 0, d.peersConnected = 1, d.timeJoin = (0, v.getCurrentTs)(), d.continuousHits = 0, d.uploadSpeed = 0, d.gotPeers = !1;
                    var h = {};
                    if (d.options.stuns.length > 0) {
                        var p = [];
                        d.options.stuns.forEach(function(e) {
                            d.logger.info("use stun " + e), p.push({
                                urls: e
                            })
                        }), h.iceServers = p
                    }
                    return d.config.webRTCConfig && (h = u({}, d.config.webRTCConfig, h)), d.playlistMap = new Map, d._datachannel = new f.default({
                        initiator: a,
                        channelName: d.channelId,
                        trickle: c.trickle || !1,
                        config: h
                    }), d._init(d._datachannel), d.dataExchangeTs = d.timeJoin, d.gotStatsTs = d.timeJoin, d.startSN = Number.MAX_SAFE_INTEGER, d.endSN = -1, d.liveEdgeSN = 0, d.subscribeEdgeSN = 0, d
                }
                return a(t, e), l(t, null, [{
                    key: "VERSION",
                    get: function() {
                        return "5"
                    }
                }]), l(t, [{
                    key: "addDownloadListener",
                    value: function(e) {
                        this.downloadListeners.push({
                            handler: e
                        })
                    }
                }, {
                    key: "_init",
                    value: function(e) {
                        var t = this;
                        e.on("error", function(e) {
                            t.emit(g.default.DC_ERROR, !0)
                        }), e.on("signal", function(e) {
                            if (1 === t.cpr) {
                                var n = (0, w.pack)(e);
                                n ? e = n : t.logger.error("signal pack error")
                            }
                            t.emit(g.default.DC_SIGNAL, e)
                        });
                        var n = function() {
                            for (t.logger.info("datachannel CONNECTED to " + t.remotePeerId + " from " + (t.intermediator ? "peer" : "server")), t.connected = !0, clearTimeout(t.connTimeout), t.emit(g.default.DC_OPEN); t.msgQueue.length > 0;) {
                                var e = t.msgQueue.shift();
                                t.emit(e.event, e)
                            }
                        };
                        e.once("connect", n), e.on("data", function(e) {
                            var n = t.logger;
                            if ("string" == typeof e) {
                                var r = JSON.parse(e);
                                if (!t.connected) return void t.msgQueue.push(r);
                                var i = r.event;
                                switch (i !== g.default.DC_PLAYLIST && i !== g.default.DC_PEER_SIGNAL ? n.debug("datachannel receive string: " + e + " from " + t.remotePeerId) : n.debug("datachannel receive event: " + i + " from " + t.remotePeerId), i) {
                                    case g.default.DC_HAVE:
                                        if (t.emit(r.event, r), !r.sn) return;
                                        t.config.live ? t.liveEdgeSN = r.sn : (r.sn < t.startSN && (t.startSN = r.sn), r.sn > t.endSN && (t.endSN = r.sn));
                                        break;
                                    case g.default.DC_PIECE:
                                        t.downloading = !0, t.dataExchangeTs = (0, v.getCurrentTs)(), t.timeReceivePiece = performance.now(), t.pieceMsg = r, t._prepareForBinary(r.attachments, r.seg_id, r.sn, r.size), t.emit(r.event, r);
                                        break;
                                    case g.default.DC_PIECE_NOT_FOUND:
                                        t._sendNextReq() || (t.downloading = !1), t.emit(r.event, r);
                                        break;
                                    case g.default.DC_REQUEST:
                                        t._handleRequestMsg(r);
                                        break;
                                    case g.default.DC_PIECE_ACK:
                                        t.dataExchangeTs = (0, v.getCurrentTs)(), t._handlePieceAck(r), t.emit(r.event, r);
                                        break;
                                    case g.default.DC_STATS:
                                        t._handleStats(r);
                                        break;
                                    case g.default.DC_PLAYLIST:
                                        t.config.sharePlaylist && t._handlePlaylist(r);
                                        break;
                                    case g.default.DC_METADATA:
                                        t._handleMetadata(r);
                                        break;
                                    case g.default.DC_PIECE_ABORT:
                                        if (t.downloading) {
                                            if (t.downloadListeners.length > 0) {
                                                var o = !0,
                                                    a = !1,
                                                    s = void 0;
                                                try {
                                                    for (var u, l = t.downloadListeners[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
                                                        (0, u.value.handler)(t.bufSN, t.segId, !0, "aborted by upstream peer")
                                                    }
                                                } catch (e) {
                                                    a = !0, s = e
                                                } finally {
                                                    try {
                                                        !o && l.return && l.return()
                                                    } finally {
                                                        if (a) throw s
                                                    }
                                                }
                                                t.downloadListeners = []
                                            }
                                            t.emit(g.default.DC_PIECE_ABORT, r)
                                        }
                                        break;
                                    case g.default.DC_CHOKE:
                                        n.info("choke peer " + t.remotePeerId), t.choked = !0;
                                        break;
                                    case g.default.DC_UNCHOKE:
                                        n.info("unchoke peer " + t.remotePeerId), t.choked = !1;
                                        break;
                                    case g.default.DC_CLOSE:
                                        t.emit(r.event, r.fatal || !1);
                                        break;
                                    default:
                                        t.emit(r.event, r)
                                }
                            } else {
                                if (!t.downloading) return void n.error("peer is not downloading, data size " + e.byteLength + " pieceMsg " + JSON.stringify(t.pieceMsg));
                                t._handleBinaryMsg(e)
                            }
                        }), e.once("close", function() {
                            t.emit(g.default.DC_CLOSE, !1)
                        }), e.on("iceStateChange", function(e, n) {
                            "disconnected" === e && (t.logger.warn(t.remotePeerId + " disconnected"), t.connected = !1)
                        })
                    }
                }, {
                    key: "sendJson",
                    value: function(e) {
                        return e.event !== g.default.DC_PLAYLIST && e.event !== g.default.DC_PEER_SIGNAL ? this.logger.debug("dc bufferSize " + this._datachannel.bufferSize + " send " + JSON.stringify(e) + " to " + this.remotePeerId) : this.logger.debug("dc send event " + e.event + " to " + this.remotePeerId), this.send(JSON.stringify(e))
                    }
                }, {
                    key: "send",
                    value: function(e) {
                        if (this._datachannel && this._datachannel.connected) try {
                            return this._datachannel.send(e), !0
                        } catch (e) {
                            this.logger.warn("datachannel " + this.channelId + " send data failed, close it"), this.emit(g.default.DC_ERROR, !1)
                        }
                        return !1
                    }
                }, {
                    key: "sendMsgHave",
                    value: function(e, t) {
                        this.sendJson({
                            event: g.default.DC_HAVE,
                            sn: e,
                            seg_id: t
                        })
                    }
                }, {
                    key: "sendPieceNotFound",
                    value: function(e, t) {
                        this.uploading = !1, this.sendJson({
                            event: g.default.DC_PIECE_NOT_FOUND,
                            seg_id: t,
                            sn: e
                        })
                    }
                }, {
                    key: "sendPeers",
                    value: function(e) {
                        this.sendJson({
                            event: g.default.DC_PEERS,
                            peers: e
                        })
                    }
                }, {
                    key: "sendPeersRequest",
                    value: function() {
                        this.sendJson({
                            event: g.default.DC_GET_PEERS
                        })
                    }
                }, {
                    key: "sendSubscribe",
                    value: function() {
                        this.sendJson({
                            event: g.default.DC_SUBSCRIBE
                        })
                    }
                }, {
                    key: "sendUnsubscribe",
                    value: function(e) {
                        this.resetContinuousHits(), this.sendJson({
                            event: g.default.DC_UNSUBSCRIBE,
                            reason: e
                        })
                    }
                }, {
                    key: "sendSubscribeReject",
                    value: function(e) {
                        this.sendJson({
                            event: g.default.DC_SUBSCRIBE_REJECT,
                            reason: e
                        })
                    }
                }, {
                    key: "sendSubscribeAccept",
                    value: function(e) {
                        this.sendJson({
                            event: g.default.DC_SUBSCRIBE_ACCEPT,
                            level: e
                        })
                    }
                }, {
                    key: "sendSubscribeLevel",
                    value: function(e) {
                        this.sendJson({
                            event: g.default.DC_SUBSCRIBE_LEVEL,
                            level: e
                        })
                    }
                }, {
                    key: "sendMsgStats",
                    value: function(e, t) {
                        var n = {
                            event: g.default.DC_STATS,
                            total_conns: e,
                            children: t
                        };
                        this.sendJson(n)
                    }
                }, {
                    key: "sendMsgPlaylist",
                    value: function(e, t, n) {
                        if (this.playlistMap.has(e)) {
                            if (this.playlistMap.get(e).seq >= n) return
                        }
                        var r = {
                            event: g.default.DC_PLAYLIST,
                            url: e,
                            data: t,
                            seq: n
                        };
                        this.sendJson(r)
                    }
                }, {
                    key: "sendMsgSignal",
                    value: function(e, t, n) {
                        return this.sendJson({
                            event: g.default.DC_PEER_SIGNAL,
                            action: "signal",
                            to_peer_id: e,
                            from_peer_id: t,
                            data: n
                        })
                    }
                }, {
                    key: "sendMsgSignalReject",
                    value: function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return this.sendJson({
                            event: g.default.DC_PEER_SIGNAL,
                            action: "reject",
                            to_peer_id: e,
                            from_peer_id: t,
                            reason: n,
                            fatal: r
                        })
                    }
                }, {
                    key: "sendMetaData",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        this.isInitiator && (this.timeSendRequest = performance.now()), this.sendJson({
                            event: g.default.DC_METADATA,
                            field: e,
                            platform: g.default.DC_PLAT_WEB,
                            mobile: !!b.default.isMobile(),
                            channel: this.channel,
                            version: "0.7.6",
                            sequential: t,
                            peers: n
                        })
                    }
                }, {
                    key: "sendPartialBuffer",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.sendMsgPiece(e, n);
                        for (var r = 0; r < t.length; r++) this.send(t[r])
                    }
                }, {
                    key: "sendMsgPiece",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e.ext || (e.ext = {}), e.ext.from && t.from && (t.from = e.ext.from + "->" + t.from), t.incompletes && e.ext.incompletes && (t.incompletes += e.ext.incompletes), t = Object.assign({}, e.ext, t);
                        var n = u({}, e, {
                            ext: t
                        });
                        this.sendJson(n)
                    }
                }, {
                    key: "sendBuffer",
                    value: function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            i = n.byteLength,
                            o = 0,
                            a = 0;
                        i % this.packetSize == 0 ? a = i / this.packetSize : (a = Math.floor(i / this.packetSize) + 1, o = i % this.packetSize);
                        var u = {
                            event: g.default.DC_PIECE,
                            attachments: a,
                            seg_id: t,
                            sn: e,
                            size: i
                        };
                        this.sendMsgPiece(u, r);
                        for (var l = s(n, this.packetSize, a, o), c = 0; c < l.length; c++) this.send(l[c]);
                        this.uploading = !1, this.timeSendPiece = performance.now()
                    }
                }, {
                    key: "requestDataById",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = {
                                event: g.default.DC_REQUEST,
                                seg_id: e,
                                sn: t,
                                urgent: n
                            };
                        this.downloading ? (this.logger.info("add req " + e + " in queue"), n ? this.sendReqQueue.unshift(r) : this.sendReqQueue.push(r)) : this._realRequestData(r)
                    }
                }, {
                    key: "requestDataBySN",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = {
                                event: g.default.DC_REQUEST,
                                sn: e,
                                urgent: t
                            };
                        this.downloading ? (this.logger.info("add req " + e + " in queue"), t ? this.sendReqQueue.unshift(n) : this.sendReqQueue.push(n)) : this._realRequestData(n)
                    }
                }, {
                    key: "_realRequestData",
                    value: function(e) {
                        this.sendJson(e), this.timeSendRequest = performance.now(), this.downloading = !0
                    }
                }, {
                    key: "shouldWaitForRemain",
                    value: function(e) {
                        if (0 === this.bufArr.length) return !1;
                        if (0 === this.timeReceivePiece) return !1;
                        this.logger.warn(this.bufArr.length + " of " + this.pieceMsg.attachments + " packets loaded");
                        for (var t = 0, n = 0; n < this.bufArr.length; n++) t += this.bufArr[n].byteLength;
                        return t / (performance.now() - this.timeReceivePiece) >= (this.expectedSize - t) / e
                    }
                }, {
                    key: "close",
                    value: function(e) {
                        this.emit(g.default.DC_CLOSE, e)
                    }
                }, {
                    key: "receiveSignal",
                    value: function(e) {
                        e.type || e.candidate || (this.cpr = 1, e = (0, w.unpack)(e, this.cpr + "")), e && this._datachannel.signal(e)
                    }
                }, {
                    key: "resetContinuousHits",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.logger.info("reset " + this.remotePeerId + " continuousHits"), this.continuousHits = e
                    }
                }, {
                    key: "increContinuousHits",
                    value: function() {
                        this.continuousHits++
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (this.logger.info("destroy datachannel " + this.channelId), this.chokeTimer && clearTimeout(this.chokeTimer), this.connTimeout && clearTimeout(this.connTimeout), this.uploading && this.sendMsgPieceAbort("peer is closing"), this.downloadListeners.length > 0) {
                            var t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var i, o = this.downloadListeners[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    (0, i.value.handler)(this.bufSN, this.segId, !0, "upstream peer is closed")
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    !t && o.return && o.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                            this.downloadListeners = []
                        }
                        var a = {
                            event: g.default.DC_CLOSE,
                            fatal: e
                        };
                        this.sendJson(a), this._datachannel.removeAllListeners(), this.removeAllListeners(), this._datachannel.destroy(), this.engine = null
                    }
                }, {
                    key: "_handleBinaryMsg",
                    value: function(e) {
                        if (this.bufArr.push(e), this.remainAttachments--, this.emit(g.default.DC_PIECE_DATA, this.bufSN, this.segId, e, this.pieceMsg.attachments - this.remainAttachments, 0 === this.remainAttachments), this.downloadListeners.length > 0) {
                            var t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var i, o = this.downloadListeners[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    (0, i.value.handler)(this.bufSN, this.segId, !1, e, 0 === this.remainAttachments)
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    !t && o.return && o.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                        }
                        if (0 === this.remainAttachments) {
                            if (this.downloadListeners = [], this.timeSendRequest > 0) {
                                var a = this.expectedSize / (performance.now() - this.timeSendRequest);
                                this.weight = this.weight > 0 ? .6 * this.weight + .4 * a : a
                            }
                            this.sendJson({
                                event: g.default.DC_PIECE_ACK,
                                sn: this.bufSN,
                                seg_id: this.segId,
                                size: this.expectedSize
                            }), this.timeSendRequest = 0, this.timeReceivePiece = 0, this._sendNextReq() || (this.downloading = !1), this._handleBinaryData()
                        }
                    }
                }, {
                    key: "_sendNextReq",
                    value: function() {
                        if (this.sendReqQueue.length > 0) {
                            var e = this.sendReqQueue.shift();
                            return this.logger.info("get msg from sendReqQueue " + JSON.stringify(e)), this._realRequestData(e), !0
                        }
                        return !1
                    }
                }, {
                    key: "_handlePlaylist",
                    value: function(e) {
                        var t = e.url,
                            n = e.data,
                            r = e.seq;
                        this.playlistMap.set(t, {
                            data: n,
                            seq: r
                        })
                    }
                }, {
                    key: "getLatestPlaylist",
                    value: function(e, t) {
                        if (!this.playlistMap.has(e)) return null;
                        var n = this.playlistMap.get(e);
                        return n.seq <= t ? null : n
                    }
                }, {
                    key: "_handleMetadata",
                    value: function(e) {
                        var t = this,
                            n = this.logger;
                        if (this.isInitiator) {
                            var r = performance.now() - this.timeSendRequest;
                            r > 0 && (this.weight = 1e5 / r, n.info("handle Metadata from " + this.remotePeerId + " initial weight " + this.weight)), this.timeSendRequest = 0
                        }
                        var i = e.channel;
                        if (!i) return n.error("peer channel " + i + " is null!"), void this.emit(g.default.DC_ERROR, !0);
                        if (this.channel !== i) return n.error("peer channel " + i + " not matched!"), void this.emit(g.default.DC_ERROR, !0);
                        switch (e.platform) {
                            case g.default.DC_PLAT_ANDROID:
                                this.platform = g.default.DC_PLAT_ANDROID;
                                break;
                            case g.default.DC_PLAT_IOS:
                                this.platform = g.default.DC_PLAT_IOS;
                                break;
                            case g.default.DC_PLAT_WEB:
                                this.platform = g.default.DC_PLAT_WEB
                        }
                        if (this.mobile = e.mobile || !1, this.mobileWeb = this.mobile && this.platform === g.default.DC_PLAT_WEB || !1, this.sequential = e.sequential, this.sequential !== this.typeExpected) return n.error("peer sequential type " + this.sequential + " not matched!"), void this.emit(g.default.DC_ERROR, !0);
                        n.info(this.remotePeerId + " platform " + this.platform + " sequential " + this.sequential), e.peers && (this.peersConnected += e.peers, n.info(this.remotePeerId + " now has " + this.peersConnected + " peers")), this.emit(g.default.DC_METADATA, e), e.field && !this.config.live && e.sequential && e.field.forEach(function(e) {
                            e > 0 && (e < t.startSN && (t.startSN = e), e > t.endSN && (t.endSN = e))
                        })
                    }
                }, {
                    key: "_handleStats",
                    value: function(e) {
                        this.gotStatsTs = (0, v.getCurrentTs)();
                        var t = e.total_conns;
                        t > 0 && this.peersConnected !== t && (this.peersConnected = t, this.logger.info(this.remotePeerId + " now has " + this.peersConnected + " peers"))
                    }
                }, {
                    key: "_handleRequestMsg",
                    value: function(e) {
                        if (this.uploading) return void this.logger.warn(this.remotePeerId + " is uploading when receive request");
                        this.uploading = !0, this.emit(g.default.DC_REQUEST, e)
                    }
                }, {
                    key: "_handlePieceAck",
                    value: function(e) {
                        0 !== this.timeSendPiece && (this.uploadSpeed = Math.round(e.size / (performance.now() - this.timeSendPiece) * 2), this.timeSendPiece = 0, this.logger.info(this.remotePeerId + " uploadSpeed is " + this.uploadSpeed))
                    }
                }, {
                    key: "_prepareForBinary",
                    value: function(e, t, n, r) {
                        this.bufArr = [], this.remainAttachments = e, this.segId = t, this.bufSN = n, this.expectedSize = r
                    }
                }, {
                    key: "_handleBinaryData",
                    value: function() {
                        var e = S.concat(this.bufArr),
                            t = e.byteLength;
                        if (t === this.expectedSize) {
                            var n = new Uint8Array(e).buffer,
                                r = new m.default(this.bufSN, this.segId, n, this.remotePeerId);
                            this.emit(g.default.DC_RESPONSE, r, this.weight)
                        } else this.logger.error(this.segId + " expectedSize " + this.expectedSize + " not equal to byteLength " + t);
                        this.segId = "", this.bufArr = [], this.expectedSize = -1
                    }
                }, {
                    key: "checkIfNeedChoke",
                    value: function() {
                        var e = this,
                            t = this.logger;
                        if (this.miss++, t.info(this.channelId + " miss " + this.miss), this.miss > 2 && !this.choked) {
                            this.choked = !0;
                            var n = 30 * this.miss;
                            n <= 150 ? (t.warn("datachannel " + this.channelId + " is choked"), this.chokeTimer = setTimeout(function() {
                                e.choked = !1, t.warn("datachannel " + e.channelId + " is unchoked")
                            }, 1e3 * n)) : t.warn("datachannel " + this.channelId + " is choked permanently")
                        }
                    }
                }, {
                    key: "loadtimeout",
                    value: function() {
                        var e = this.logger,
                            t = this.bufArr,
                            n = this.pieceMsg;
                        return e.warn("timeout while downloading from " + this.remotePeerId + ", " + t.length + " of " + n.attachments + " packets loaded"), t.length > 0 && t.length === n.attachments ? (this._handleBinaryData(), !1) : (this.emit(g.default.DC_TIMEOUT), this.checkIfNeedChoke(), !0)
                    }
                }, {
                    key: "sendMsgPieceAbort",
                    value: function(e) {
                        this.uploading = !1, this.sendJson({
                            event: g.default.DC_PIECE_ABORT,
                            reason: e
                        })
                    }
                }, {
                    key: "isAvailable",
                    get: function() {
                        return this.downloadNum < 2 && !this.choked
                    }
                }, {
                    key: "isAvailableUrgently",
                    get: function() {
                        return !this.downloading && !this.choked
                    }
                }, {
                    key: "downloadNum",
                    get: function() {
                        return this.downloading ? this.sendReqQueue.length + 1 : 0
                    }
                }]), t
            }(h.default);
        t.default = E, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        e.exports = n(19)
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(1),
            l = r(u),
            c = n(24),
            f = r(c),
            d = n(0),
            h = 60,
            p = function(e) {
                function t(e, n, r, a) {
                    var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "main";
                    i(this, t);
                    var u = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return u.logger = e, u.config = n, u.wsAddr = r, u.serverVersion = 0, u.pingInterval = a || h, u._ws = u._init(), u.name = s, u
                }
                return a(t, e), s(t, [{
                    key: "_init",
                    value: function() {
                        var e = this,
                            t = {
                                maxRetries: this.config.wsMaxRetries,
                                minReconnectionDelay: (0, d.randomNum)(1e4, 6e4),
                                maxReconnectionDelay: 6e5,
                                maxEnqueuedMessages: 20
                            },
                            n = new f.default(this.wsAddr, void 0, t);
                        return n.addEventListener("open", function() {
                            e.logger.info("signal " + e.name + " " + e.wsAddr + " connection opened"), e.onopen && e.onopen(), e._startPing(e.pingInterval)
                        }), n.push = n.send, n.send = function(e) {
                            var t = JSON.stringify(e);
                            n.push(t)
                        }, n.addEventListener("message", function(t) {
                            var n = t.data,
                                r = JSON.parse(n),
                                i = r.action;
                            return "pong" === i ? void clearTimeout(e.pongTimer) : "ver" === i ? void(e.serverVersion = r.ver) : "close" === i ? (e.logger.warn("server close signal " + e.name + " reason " + r.reason), void e.close()) : void(e.onmessage && e.onmessage(r, e.name))
                        }), n.addEventListener("close", function(t) {
                            e.logger.warn("signal " + e.name + " " + e.wsAddr + " closed " + t.code + " " + t.reason), e.onclose && e.onclose(), e._stopPing()
                        }), n.addEventListener("error", function(t) {
                            e.logger.error("signal " + e.name + " " + e.wsAddr + " error"), e._stopPing(), e.onerror && e.onerror(t)
                        }), n
                    }
                }, {
                    key: "sendSignal",
                    value: function(e, t) {
                        var n = {
                            action: "signal",
                            to_peer_id: e,
                            data: t
                        };
                        this._send(n)
                    }
                }, {
                    key: "sendReject",
                    value: function(e, t, n) {
                        var r = {
                            action: "reject",
                            to_peer_id: e,
                            reason: t,
                            fatal: n
                        };
                        this._send(r)
                    }
                }, {
                    key: "_send",
                    value: function(e) {
                        this._ws && this._ws.send(e)
                    }
                }, {
                    key: "_startPing",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 120;
                        this.connected && (this.pingTimer = setInterval(function() {
                            var t = {
                                action: "ping"
                            };
                            e._send(t), e.serverVersion >= 22 && e._waitForPong()
                        }, 1e3 * t))
                    }
                }, {
                    key: "_waitForPong",
                    value: function() {
                        var e = this;
                        this.pongTimer = setTimeout(function() {
                            e.logger.warn("signal " + e.name + " wait for pong timeout, reconnect"), e.close(), e.reconnect()
                        }, 15e3)
                    }
                }, {
                    key: "_resetPing",
                    value: function() {
                        this._stopPing(), this._startPing(this.pingInterval)
                    }
                }, {
                    key: "_stopPing",
                    value: function() {
                        clearInterval(this.pingTimer), clearTimeout(this.pongTimer), this.pingTimer = null, this.pongTimer = null
                    }
                }, {
                    key: "close",
                    value: function() {
                        var e = this;
                        this.logger.info("close signal " + this.name), this._stopPing(),
                            function() {
                                e._ws && e._ws.close(1e3, "normal close")
                            }()
                    }
                }, {
                    key: "reconnect",
                    value: function() {
                        this._ws && (this.logger.info("reconnect signal " + this.name), this._ws.reconnect())
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.close(), this._ws = null, this.removeAllListeners()
                    }
                }, {
                    key: "connected",
                    get: function() {
                        return !!this._ws && this._ws.readyState === f.default.OPEN
                    }
                }]), t
            }(l.default);
        t.default = p, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n in t) Object.defineProperty(e, n, {
                value: t[n],
                enumerable: !0,
                configurable: !0
            });
            return e
        }

        function i(e, t, n) {
            if (!e || "string" == typeof e) throw new TypeError("Please pass an Error to err-code");
            n || (n = {}), "object" === (void 0 === t ? "undefined" : o(t)) && (n = t, t = void 0), null != t && (n.code = t);
            try {
                return r(e, n)
            } catch (t) {
                n.message = e.message, n.stack = e.stack;
                var i = function() {};
                return i.prototype = Object.create(Object.getPrototypeOf(e)), r(new i, n)
            }
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        e.exports = i
    }, function(e, t, n) {
        "use strict";
        var r = void 0;
        e.exports = "function" == typeof queueMicrotask ? queueMicrotask.bind(globalThis) : function(e) {
            return (r || (r = Promise.resolve())).then(e).catch(function(e) {
                return setTimeout(function() {
                    throw e
                }, 0)
            })
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e) {
            var t = /(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: ufrag (\S*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
                n = t.exec(e),
                r = o(n, 15),
                i = r[1],
                a = r[2],
                s = r[3],
                u = r[4],
                l = r[5],
                c = r[6],
                f = r[7],
                d = r[8],
                h = r[9],
                p = r[10],
                g = r[11],
                v = r[12];
            return {
                foundation: i,
                component: a,
                transport: s,
                priority: u,
                ip: l,
                port: c,
                type: f,
                raddr: d,
                rport: h,
                tcptype: p,
                generation: g,
                networkId: r[13],
                networkCost: r[14],
                ufrag: v
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.parseCand = i;
        t.delimiter = "|", t.arrayDelimiter = ",", t.candTypeMap = {
            h: "host",
            s: "srflx",
            p: "prflx",
            r: "relay"
        }, t.sdpType2Char = function(e, t) {
            var n = void 0;
            switch (e) {
                case "candidate":
                    n = "c";
                    break;
                case "offer":
                    n = t ? "q" : "o";
                    break;
                case "answer":
                    n = t ? "s" : "a"
            }
            return n
        }, t.char2SdpType = function(e) {
            var t = {};
            switch (e) {
                case "o":
                    t = {
                        type: "offer"
                    };
                    break;
                case "q":
                    t = {
                        type: "offer",
                        trickle: !0
                    };
                    break;
                case "a":
                    t = {
                        type: "answer"
                    };
                    break;
                case "s":
                    t = {
                        type: "answer",
                        trickle: !0
                    };
                    break;
                case "c":
                    t = {
                        type: "candidate",
                        trickle: !0
                    }
            }
            return t
        }, t.bytesToStr = function e(t) {
            return "number" == typeof t ? e([t]) : String.fromCharCode.apply(String, r(t.map(function(e) {
                return e + 0
            })))
        }, t.strToBytes = function(e) {
            return e.split("").map(function(e) {
                return e.charCodeAt(0) - 0
            })
        }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(3),
            a = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(o),
            s = function() {
                function e() {
                    r(this, e), this.method = null, this.key = null, this.iv = null, this._uri = null
                }
                return i(e, [{
                    key: "uri",
                    get: function() {
                        return !this._uri && this.reluri && (this._uri = a.buildAbsoluteURL(this.baseuri, this.reluri, {
                            alwaysNormalize: !0
                        })), this._uri
                    }
                }]), e
            }();
        t.default = s, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                s = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(s).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(s)
                    }
                    return r("next")
                })
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = n(9),
            c = r(l),
            f = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            d = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            h = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            p = n(46),
            g = r(p),
            v = n(7),
            y = r(v),
            m = n(6),
            _ = r(m),
            b = n(17),
            w = n(0),
            S = n(5).Buffer,
            P = 2,
            E = function(e) {
                function t(e, n) {
                    a(this, t);
                    var r = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                    return r.engine = e, r.server = n.fetcher, r.logger = n.logger, r.p2pEnabled = e.p2pEnabled, r.isUploader = !1, r.isReceiver = !1, r.targetPeers = [], r.mBufferedDuration = 0, r.loadingSegId = "", r.loadingSN = 0, r.resolveMap = new Map, r.allowP2pLimit = n.httpLoadTime + P, r.fragMap = new Map, r.segmentId = n.segmentId, r
                }
                return u(t, e), d(t, [{
                    key: "handleGetMediaData",
                    value: function() {
                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        var t = o(c.default.mark(function e(t, n) {
                            var r, i, a, s, u, l, f, d, h, p, g, v, m, _, b = this;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = this.logger, i = this.config, a = t.url, s = t.range, s && (a = a + "|" + s), u = this.fragMap.get(a)) {
                                            e.next = 7;
                                            break
                                        }
                                        return r.info("cannot get frag " + a), e.abrupt("return", n.postMessage({
                                            action: y.default.SW_GET_MEDIA
                                        }));
                                    case 7:
                                        if (l = u.sn, f = u.baseurl, d = this.segmentId(f, l, t.url, s), this.loadingSN = l, this.loadingSegId = d, !this.bufMgr.hasSegOfId(d)) {
                                            e.next = 19;
                                            break
                                        }
                                        return r.info("bufMgr found seg sn " + l + " segId " + d), h = this.bufMgr.getSegById(d), u.loaded = h.data.byteLength, u.fromPeerId = h.fromPeerId, this.engine.emit(y.default.FRAG_LOADED, t.url, u, !!h.fromPeerId), this._onFragLoaded(t.url, u), e.abrupt("return", n.postMessage({
                                            action: y.default.SW_GET_MEDIA,
                                            data: {
                                                url: t.url,
                                                buffer: h.data,
                                                incomplete: !1
                                            }
                                        }));
                                    case 19:
                                        if (!this.hasAndSetTargetPeer(this.sequential ? l : d)) {
                                            e.next = 26;
                                            break
                                        }
                                        return e.next = 22, this._loadFragByP2p(u, n, l, d, t.url);
                                    case 22:
                                        p = e.sent, p || (this.notifyAllPeers(l, d), n.postMessage({
                                            action: y.default.SW_GET_MEDIA
                                        })), e.next = 28;
                                        break;
                                    case 26:
                                        g = this.mBufferedDuration, i.live && this.hasIdlePeers && g > 6.5 && this.shouldWaitForNextSeg() ? (v = g - 6.5, v > 2.5 && (v = 2.5), m = void 0, _ = function() {
                                            var e = o(c.default.mark(function e(r) {
                                                return c.default.wrap(function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (d !== r) {
                                                                e.next = 8;
                                                                break
                                                            }
                                                            if (b.off(y.default.SCH_DCHAVE, _), clearTimeout(b.waitTimer), !b.hasAndSetTargetPeer(b.sequential ? l : d)) {
                                                                e.next = 7;
                                                                break
                                                            }
                                                            return e.next = 6, b._loadFragByP2p(u, n, l, d, t.url);
                                                        case 6:
                                                            m = e.sent;
                                                        case 7:
                                                            m || (b.notifyAllPeers(l, d), n.postMessage({
                                                                action: y.default.SW_GET_MEDIA
                                                            }));
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e, b)
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(), r.info("wait peer have " + d + " for " + v + "s"), this.on(y.default.SCH_DCHAVE, _), this.waitTimer = setTimeout(function() {
                                            b.off(y.default.SCH_DCHAVE, _), b.notifyAllPeers(l, d), n.postMessage({
                                                action: y.default.SW_GET_MEDIA
                                            })
                                        }, 1e3 * v)) : (n.postMessage({
                                            action: y.default.SW_GET_MEDIA
                                        }), this.notifyAllPeers(l, d));
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return e
                    }()
                }, {
                    key: "_loadFragByP2p",
                    value: function() {
                        function e(e, n, r, i, o) {
                            return t.apply(this, arguments)
                        }
                        var t = o(c.default.mark(function e(t, n, r, i, o) {
                            var a, s, u, l, f, d, h;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = this.logger, a.info("p2p load sn " + r + " segId " + i), e.next = 4, this.load(r, i);
                                    case 4:
                                        if (!(s = e.sent) || !s.data) {
                                            e.next = 15;
                                            break
                                        }
                                        return u = s.data, l = s.incomplete, f = s.fromPeerId, l || this.bufMgr.hasSegOfId(i) || (d = new _.default(r, i, u, f), a.info("bufMgr putSeg " + r), this.bufMgr.putSeg(d)), a.info("p2p loaded segId " + i + " size " + u.byteLength + " incomplete " + l), t.loaded = u.byteLength, t.fromPeerId = f, this.engine.emit(y.default.FRAG_LOADED, u.url, t, !0), this._onFragLoaded(u.url, t), n.postMessage({
                                            action: y.default.SW_GET_MEDIA,
                                            data: {
                                                url: u.url,
                                                buffer: u,
                                                incomplete: l
                                            }
                                        }), e.abrupt("return", !0);
                                    case 15:
                                        if (a.warn("P2P timeout load segId " + i), !this.bufMgr.hasSegOfId(i)) {
                                            e.next = 21;
                                            break
                                        }
                                        return a.info("already loaded seg sn " + r + " segId " + i), h = this.bufMgr.getSegById(i), n.postMessage({
                                            action: y.default.SW_GET_MEDIA,
                                            data: {
                                                url: o,
                                                buffer: h.data,
                                                incomplete: !1
                                            }
                                        }), e.abrupt("return", !0);
                                    case 21:
                                        return e.abrupt("return", !1);
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return e
                    }()
                }, {
                    key: "handleMediaData",
                    value: function(e, t) {
                        var n = (this.config, this.logger),
                            r = this.engine,
                            i = e.url,
                            o = e.buffer,
                            a = e.range;
                        if (r.rangeTestUrl === i) return void(r.rangeTestUrl = "");
                        n.info("SW_MEDIA url " + i + " size " + o.byteLength + " range " + a), a && (i = i + "|" + a), this.server.reportFlow(o.byteLength);
                        var s = this.fragMap.get(i);
                        if (s) {
                            var u = s.sn,
                                l = s.baseurl,
                                c = this.segmentId(l, u, e.url, a);
                            if (s.segId = c, s.loaded = o.byteLength, r.emit(y.default.FRAG_LOADED, e.url, s, !1), this._onFragLoaded(e.url, s), !this.bufMgr.hasSegOfId(c)) {
                                var f = new _.default(u, c, o, "");
                                this.bufMgr.putSeg(f), n.info("bufMgr putSeg " + c)
                            }
                        }
                        t.postMessage({
                            action: y.default.SW_MEDIA
                        })
                    }
                }, {
                    key: "_setupEngine",
                    value: function() {}
                }, {
                    key: "_setupDC",
                    value: function(e) {
                        var n = this;
                        h(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_setupDC", this).call(this, e), e.on(y.default.DC_PIECE_DATA, function(t, r, i, o, a) {
                            1 === o && e.pieceMsg.ext && e.pieceMsg.ext.incompletes >= 2 && n.notifyAllPeers(t, r)
                        })
                    }
                }, {
                    key: "hasAndSetTargetPeer",
                    value: function(e) {
                        var t = this.logger;
                        if (this.bufferedDuration <= this.allowP2pLimit) return !1;
                        if (this.resolveMap.size > 0 && t.info("scheduler still loading " + [].concat(i(this.resolveMap.keys())) + ", num " + this.resolveMap.size), this.requestingMap.has(e)) return !0;
                        if (!this.hasIdlePeers || !this.peersHas(e)) return !1;
                        var n = 0,
                            r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var s, u = this.peerManager.getPeersOrderByWeight()[Symbol.iterator](); !(r = (s = u.next()).done); r = !0) {
                                var l = s.value;
                                if (l.bitset.has(e) && (t.info("found segId " + e + " from peer " + l.remotePeerId), this.targetPeers.push(l), ++n === this.config.simultaneousTargetPeers)) return !0
                            }
                        } catch (e) {
                            o = !0, a = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return this.targetPeers.length > 0 || (t.info("idle peers hasn't segId " + e + " or busy"), !1)
                    }
                }, {
                    key: "notifyAllPeers",
                    value: function(e, t) {
                        var n = t;
                        if (this.sequential && (n = e), !this.bitset.has(n)) {
                            var r = !0,
                                o = !1,
                                a = void 0;
                            try {
                                for (var s, u = this.peerManager.getPeerValues()[Symbol.iterator](); !(r = (s = u.next()).done); r = !0) {
                                    var l = s.value;
                                    if (!l.notifySet.has(n) && !l.bitset.has(n) && (l.sendMsgHave(e, t), l.notifySet.add(n), this.config.live))
                                        for (; l.notifySet.size > 20;) {
                                            var c = [].concat(i(l.notifySet.values())).shift();
                                            l.notifySet.delete(c), this.logger.debug("datachannel notifySet delete " + c)
                                        }
                                }
                            } catch (e) {
                                o = !0, a = e
                            } finally {
                                try {
                                    !r && u.return && u.return()
                                } finally {
                                    if (o) throw a
                                }
                            }
                        }
                    }
                }, {
                    key: "notifySWMessage",
                    value: function(e, t, n) {
                        switch (e) {
                            case y.default.SW_MEDIA:
                                this.handleMediaData(t, n);
                                break;
                            case y.default.SW_GET_MEDIA:
                                this.handleGetMediaData(t, n);
                                break;
                            default:
                                this.logger.warn("unknown action " + e)
                        }
                    }
                }, {
                    key: "updateLoaded",
                    value: function(e) {
                        this.bitset.has(e) || (this.bitset.add(e), this.bitCounts.has(e) && this.bitCounts.delete(e))
                    }
                }, {
                    key: "deletePeer",
                    value: function(e) {
                        var n = this;
                        this.peerManager.hasPeer(e.remotePeerId) && e.bitset.forEach(function(e) {
                            n._decreBitCounts(e)
                        }), this.cleanRequestingMap(e.remotePeerId), h(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deletePeer", this).call(this, e)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        h(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this);
                        var e = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var i, o = this.resolveMap.values()[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                                var a = i.value;
                                a.criticaltimeouter && clearTimeout(a.criticaltimeouter)
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                !e && o.return && o.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                        this.logger.warn("destroy Scheduler")
                    }
                }, {
                    key: "_criticaltimeout",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this.logger,
                            r = this.config,
                            i = this.resolveMap.get(e);
                        if (!i) return void n.warn("_criticaltimeout no promise");
                        n.info("critical request " + e + " timeout");
                        var o = void 0;
                        this.requestingMap.has(e) && (o = this.getPeerLoadedMore(e));
                        var a = !1;
                        if (o && (a = !o.loadtimeout()), a) return void n.info("p2p download completed");
                        var s = 1e3 * r.httpLoadTime - 500;
                        if (t && o && o.shouldWaitForRemain(s)) return n.info("wait for peer load remain of " + e), void(this.criticaltimeouter = window.setTimeout(this._criticaltimeout.bind(this, e), s + 200));
                        if (r.httpRangeSupported && o && o.bufArr.length > 0) {
                            var u = S.concat(o.bufArr);
                            i.resolve({
                                data: u,
                                fromPeerId: o.remotePeerId,
                                incomplete: !0
                            })
                        } else i.resolve();
                        this.resolveMap.delete(e)
                    }
                }, {
                    key: "_handlePieceAborted",
                    value: function(e) {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var i, o = this.requestingMap.internalMap[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                var a = f(i.value, 2),
                                    s = a[0],
                                    u = a[1];
                                if (u && u.includes(e))
                                    if (1 === u.length) {
                                        if (this.resolveMap.has(s)) {
                                            var l = this.resolveMap.get(s);
                                            window.clearTimeout(l.criticaltimeouter), this._criticaltimeout(s), this.resolveMap.delete(s)
                                        }
                                        this.logger.info("delete " + s + " in requestingMap"), this.requestingMap.delete(s)
                                    } else this.requestingMap.internalMap.set(s, u.filter(function(t) {
                                        return t !== e
                                    }))
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                !t && o.return && o.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }
                }, {
                    key: "shouldWaitForNextSeg",
                    value: function() {
                        var e = void 0;
                        return e = !this.isUploader && (!!this.isReceiver || (0, w.randomNum)(0, 100) > 20), this.isReceiver = this.isUploader = !1, e
                    }
                }, {
                    key: "bufferedDuration",
                    get: function() {
                        var e = this.engine.media;
                        if (!e) {
                            if (this.logger.info("try get video element"), !(e = (0, b.tryGetVideoElement)(this.config.videoElem))) return 5;
                            this.engine.media = e
                        }
                        for (var t = 0, n = e.currentTime, r = e.buffered, i = r.length - 1; i >= 0; i--)
                            if (n >= r.start(i) && n <= r.end(i)) {
                                t = r.end(i) - n;
                                break
                            } return this.logger.info("bufferedDuration " + t), this.mBufferedDuration = t, t > 0 ? t : 0
                    }
                }]), t
            }(g.default);
        t.default = E, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e) {
                if ("string" == typeof e) return document.querySelector(e);
                if ("[object HTMLVideoElement]" === Object.prototype.toString.call(e)) return e
            }
            return document.getElementsByTagName("video")[0]
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.tryGetVideoElement = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(i, o) {
                        try {
                            var a = t[i](o),
                                s = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!a.done) return Promise.resolve(s).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        e(s)
                    }
                    return r("next")
                })
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = n(9),
            l = r(u),
            c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            f = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            d = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            h = n(21),
            p = r(h),
            g = n(23),
            v = r(g),
            y = n(8),
            m = r(y),
            _ = n(31),
            b = r(_),
            w = n(36),
            S = r(w),
            P = n(7),
            E = r(P),
            C = n(0),
            k = n(39),
            T = r(k),
            O = n(44),
            I = n(45),
            D = r(I),
            A = n(49),
            M = r(A),
            L = n(3),
            R = r(L),
            x = n(50),
            N = r(x),
            j = n(17);
        if (window) {
            if (window.p2ploadedIos) throw new Error("You are loading the p2p library multiple times. Please load it only once.");
            window.p2ploadedIos = !0, window.p2pEngineIOSInited = !1
        }
        var B = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o(this, t);
                var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                window.p2pEngineIOSInited = !0, n.config = Object.assign({}, p.default, e), n.swSupported = window.isSecureContext, n.mseSupported = !1, n.levels = [], n.currentLevelIndex = 0, n.lastLevel = 0, n.multiBitrate = !1, n.rangeTested = !1, n.rangeTestUrl = "", n.currentSrc = "", n.swVersion = "", n.media = (0, j.tryGetVideoElement)(n.config.videoElem), n.p2pEnabled = !(!1 === n.config.p2pEnabled || "0" === (0, C.getQueryParam)("_p2p")), t.isSeviceWorkerSupported() || (n.swSupported = !1, console.warn("service worker is not supported")), (0, O.isMSESupported)() && (n.mseSupported = !0, n.config.nativePlaybackOnly && (n.p2pEnabled = !1));
                var r = n.config,
                    i = r.token,
                    s = r.channelId,
                    u = r.segmentId,
                    l = function(e) {
                        var t = R.default.parseURL(e);
                        return "" + (t.netLoc.substr(2) + t.path.substring(0, t.path.lastIndexOf(".")))
                    },
                    f = function(e, t, n, r) {
                        var i = n.split("?")[0];
                        return i.startsWith("http") && (i = i.split("://")[1]), r ? i + "|" + r : "" + i
                    };
                s && "function" == typeof s && (l = n.makeChannelId(i, s), u || (f = function(e, t, n, r) {
                    return "" + t
                })), u || (n.config.segmentId = f);
                var d = n.makeSignalId();
                return n.onLevelLoaded = function(e) {
                    var t = e.live;
                    n.config.live = t, n.targetDuration = e.averagetargetduration, n.browserInfo = c({}, n.commonBrowserInfo, {
                        abr: n.multiBitrate || void 0,
                        tag: n.config.tag || void 0,
                        live: t,
                        type: "hls_sw"
                    }), n.channel = l(n.currentSrc) + "|" + d + "[" + m.default.VERSION + "]";
                    var r = n.initLogger();
                    r.info("P2P version: " + S.default.version), r.info("channel " + n.channel), t || (n.config.startSN = e.startSN, n.config.endSN = e.endSN, r.info("startSN " + e.startSN + " endSN " + e.endSN)), n._init(n.channel, n.browserInfo), n.off(E.default.LEVEL_LOADED, n.onLevelLoaded)
                }, n.on(E.default.LEVEL_LOADED, n.onLevelLoaded), n.onManifestParsed = function(e, t) {
                    n.multiBitrate = e.length > 1, n.currentSrc = t, n.off(E.default.MANIFEST_PARSED, n.onManifestParsed)
                }, n.on(E.default.MANIFEST_PARSED, n.onManifestParsed), n.onFragLoaded = function(e, t) {
                    !n.rangeTested && n.config.useHttpRange && (n.rangeTestUrl = e, (0, C.performRangeRequest)(e).then(function() {
                        n.config.httpRangeSupported = !0, n.config.logger.info("http range is supported")
                    }).catch(function() {
                        n.config.httpRangeSupported = !1, n.config.logger.warn("http range is not supported")
                    }), n.rangeTested = !0), n.off(E.default.FRAG_LOADED, n.onFragLoaded)
                }, n.once(E.default.FRAG_LOADED, n.onFragLoaded), n.swSupported && (navigator.serviceWorker.onmessage = function(e) {
                    var t = e.data,
                        r = t.action,
                        i = t.data;
                    n.logger && n.logger.info("engine onmessage action " + r);
                    var o = e.ports[0];
                    if (o.postMessage({
                            action: r,
                            pong: !0
                        }), !n.p2pEnabled || !i) return o.postMessage({
                        action: r
                    });
                    switch (r) {
                        case E.default.SW_PLAYLIST:
                            n.handlePlaylist(i, o);
                            break;
                        default:
                            n.config.scheduler && n.config.scheduler.notifySWMessage(r, i, o)
                    }
                }), n
            }
            return s(t, e), d(t, null, [{
                key: "isMSESupported",
                value: function() {
                    return (0, O.isMSESupported)()
                }
            }, {
                key: "isWebRTCSupported",
                value: function() {
                    return S.default.isSupported()
                }
            }, {
                key: "isSeviceWorkerSupported",
                value: function() {
                    return "serviceWorker" in navigator
                }
            }, {
                key: "isSupported",
                value: function() {
                    return S.default.isSupported() && t.isSeviceWorkerSupported()
                }
            }, {
                key: "Events",
                get: function() {
                    return E.default
                }
            }]), d(t, [{
                key: "handlePlaylist",
                value: function(e, t) {
                    var n = this.config,
                        r = this.logger,
                        i = e.url,
                        o = e.text,
                        a = e.ver;
                    if (this.swVersion = a, 0 !== o.indexOf("#EXTM3U")) return console.warn("no EXTM3U delimiter"), t.postMessage({
                        action: E.default.SW_PLAYLIST
                    });
                    var s = void 0;
                    if (n.scheduler && (s = 1e3 * n.scheduler.bufferedDuration - 500), t.postMessage({
                            action: E.default.SW_PLAYLIST,
                            data: {
                                active: !0,
                                timeout: s,
                                debug: r && r.isDebugLevel
                            }
                        }), o.indexOf("#EXTINF:") > 0 || o.indexOf("#EXT-X-TARGETDURATION:") > 0) {
                        var u = T.default.parseLevelPlaylist(o, i);
                        this.levels.length > 0 ? (this.currentLevelIndex = this.levels.indexOf(u.url), -1 === this.currentLevelIndex && (this.restartP2p(), this.currentSrc = i)) : ("" !== this.currentSrc && i !== this.currentSrc && this.restartP2p(), this.currentSrc = i, this.levels = [i]), this.emit(E.default.LEVEL_LOADED, u);
                        var l = n.scheduler.fragMap;
                        n.live && l.clear(), u.fragments.forEach(function(e) {
                            var t = R.default.buildAbsoluteURL(e.baseurl, e.relurl, {
                                    alwaysNormalize: !0
                                }),
                                n = e.byteRange;
                            2 === n.length && (t = t + "|bytes=" + n[0] + "-" + (n[1] - 1)), l.set(t, e)
                        })
                    } else {
                        var c = T.default.parseMasterPlaylist(o, i);
                        "" !== this.currentSrc && this.restartP2p(), c.length > 0 && (c.sort(function(e, t) {
                            return e.bitrate - t.bitrate
                        }), this.levels = c.map(function(e) {
                            return e.url
                        })), this.emit(E.default.MANIFEST_PARSED, c, i)
                    }
                }
            }, {
                key: "getExtraForStats",
                value: function() {
                    var e = {};
                    return !this.config.live && this.media && (e.pos = Math.round(this.media.currentTime)), this.multiBitrate && this.currentLevelIndex !== this.lastLevel && (e.level = this.currentLevelIndex + "", this.lastLevel = this.currentLevelIndex), e
                }
            }, {
                key: "getExtraForPeersRequest",
                value: function() {
                    var e = {};
                    return this.multiBitrate && (e.level = this.currentLevelIndex + ""), e
                }
            }, {
                key: "registerServiceWorker",
                value: function() {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    var t = i(l.default.mark(function e() {
                        var t, n, r, i, o, a;
                        return l.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.swSupported) {
                                        e.next = 4;
                                        break
                                    }
                                    return t = "sw is not supported", C.isHttps || (t = "not https url"), e.abrupt("return", Promise.reject(t));
                                case 4:
                                    if (n = this.logger, r = this.config, this.media = (0, j.tryGetVideoElement)(this.config.videoElem), this.media || n && n.warn("no video element found"), i = navigator, o = i.serviceWorker, !this.mseSupported || !this.config.nativePlaybackOnly) {
                                        e.next = 11;
                                        break
                                    }
                                    return a = "disabled because not native playback", e.abrupt("return", this.unregisterServiceWorker().then(function() {
                                        return Promise.reject(a)
                                    }).catch(function(e) {
                                        return Promise.reject(a)
                                    }));
                                case 11:
                                    return e.abrupt("return", o.getRegistration(r.swFile).then(function(e) {
                                        return e || o.register(r.swFile, {
                                            scope: r.swScope
                                        }).then(function(e) {
                                            var t = e.installing || e.waiting;
                                            return e.active ? e : new Promise(function(n, r) {
                                                var i = function i() {
                                                    "activated" === t.state ? (t.removeEventListener("statechange", i), n(e)) : "redundant" === t.state && r("sw is redundant")
                                                };
                                                t.addEventListener("statechange", i)
                                            })
                                        })
                                    }));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return e
                }()
            }, {
                key: "unregisterServiceWorker",
                value: function() {
                    var e = this.config,
                        t = "serviceWorker is not registered";
                    return new Promise(function(n, r) {
                        var i = navigator,
                            o = i.serviceWorker;
                        o || r(t), o.getRegistration(e.swFile).then(function(e) {
                            e ? e.unregister().then(function() {
                                n()
                            }).catch(function() {
                                r(t)
                            }) : r(t)
                        })
                    })
                }
            }, {
                key: "_init",
                value: function(e, t) {
                    if (this.p2pEnabled) {
                        var n = this.multiBitrate || this.config.scheduledBySegId;
                        this.bufMgr = new N.default(this, this.config, !n);
                        var r = new b.default(this, this.config.token, window.encodeURIComponent(e), this.config.announce || "", t);
                        this.fetcher = r, this.config.fetcher = r;
                        var i = void 0;
                        i = n ? new M.default(this, this.config) : new D.default(this, this.config), i.bufferManager = this.bufMgr, this.tracker = new v.default(this, r, i, this.config), this.config.scheduler = this.tracker.scheduler, this.p2pEnabled && !this.tracker.connected && this.tracker.resumeP2P(), this.setupWindowListeners()
                    }
                }
            }, {
                key: "restartP2p",
                value: function() {
                    this.logger && this.logger.warn("restart P2P"), this.disableP2P(), this.enableP2P(), this.on(E.default.LEVEL_LOADED, this.onLevelLoaded), this.on(E.default.MANIFEST_PARSED, this.onManifestParsed), this.on(E.default.FRAG_LOADED, this.onFragLoaded)
                }
            }, {
                key: "enableP2P",
                value: function() {
                    return this.p2pEnabled ? null : (this.logger && this.logger.info("enable P2P"), this.config.p2pEnabled = this.p2pEnabled = !0, this)
                }
            }, {
                key: "disableP2P",
                value: function() {
                    this.logger && this.logger.warn("disable P2P"), this.p2pEnabled && (this.config.p2pEnabled = this.p2pEnabled = !1, this.tracker && (this.tracker.stopP2P(), this.tracker = {}, this.fetcher = null, this.bufMgr.destroy(), this.bufMgr = null)), this.levels = [], this.currentLevelIndex = 0, this.lastLevel = 0, this.multiBitrate = !1, this.rangeTested = !1, this.rangeTestUrl = "", this.currentSrc = "", this.media = void 0, this.config.live = !1, this.removeAllListeners(E.default.MANIFEST_PARSED)
                }
            }, {
                key: "destroy",
                value: function() {
                    window.p2pEngineIOSInited = !1, f(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                }
            }]), t
        }(S.default);
        window && (window.addEventListener("DOMContentLoaded", function() {
            if (!window.p2pEngineIOSInited && !window.disableP2pEngineIOSAutoInit) {
                new B({
                    nativePlaybackOnly: window.p2pEngineIOSNativePlaybackOnly || !1,
                    announceLocation: window.p2pEngineIOSAnnounceLocation || "cn"
                }).registerServiceWorker().then(function(e) {
                    console.info("ServiceWorker auto registration successful with scope: ", e.scope)
                }).catch(function(e) {
                    console.info("ServiceWorker auto registration failed: ", e)
                })
            }
        }, {
            once: !0
        }), window.P2pEngineIOS = window.P2pEngineHlsSW = window.P2PEngineHlsSW = B), t.default = B, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        var r = function() {
                return this
            }() || Function("return this")(),
            i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
            o = i && r.regeneratorRuntime;
        if (r.regeneratorRuntime = void 0, e.exports = n(20), i) r.regeneratorRuntime = o;
        else try {
            delete r.regeneratorRuntime
        } catch (e) {
            r.regeneratorRuntime = void 0
        }
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            ! function(n) {
                function r(e, t, n, r) {
                    var i = t && t.prototype instanceof o ? t : o,
                        a = Object.create(i.prototype),
                        s = new p(r || []);
                    return a._invoke = c(e, n, s), a
                }

                function i(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }

                function o() {}

                function a() {}

                function s() {}

                function u(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e)
                        }
                    })
                }

                function l(e) {
                    function n(r, o, a, s) {
                        var u = i(e[r], e, o);
                        if ("throw" !== u.type) {
                            var l = u.arg,
                                c = l.value;
                            return c && "object" === (void 0 === c ? "undefined" : t(c)) && _.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
                                n("next", e, a, s)
                            }, function(e) {
                                n("throw", e, a, s)
                            }) : Promise.resolve(c).then(function(e) {
                                l.value = e, a(l)
                            }, s)
                        }
                        s(u.arg)
                    }

                    function r(e, t) {
                        function r() {
                            return new Promise(function(r, i) {
                                n(e, t, r, i)
                            })
                        }
                        return o = o ? o.then(r, r) : r()
                    }
                    var o;
                    this._invoke = r
                }

                function c(e, t, n) {
                    var r = k;
                    return function(o, a) {
                        if (r === O) throw new Error("Generator is already running");
                        if (r === I) {
                            if ("throw" === o) throw a;
                            return v()
                        }
                        for (n.method = o, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var u = f(s, n);
                                if (u) {
                                    if (u === D) continue;
                                    return u
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === k) throw r = I, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = O;
                            var l = i(e, t, n);
                            if ("normal" === l.type) {
                                if (r = n.done ? I : T, l.arg === D) continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            }
                            "throw" === l.type && (r = I, n.method = "throw", n.arg = l.arg)
                        }
                    }
                }

                function f(e, t) {
                    var n = e.iterator[t.method];
                    if (n === y) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = y, f(e, t), "throw" === t.method)) return D;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return D
                    }
                    var r = i(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, D;
                    var o = r.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = y), t.delegate = null, D) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, D)
                }

                function d(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function h(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function p(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(d, this), this.reset(!0)
                }

                function g(e) {
                    if (e) {
                        var t = e[w];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                r = function t() {
                                    for (; ++n < e.length;)
                                        if (_.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = y, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: v
                    }
                }

                function v() {
                    return {
                        value: y,
                        done: !0
                    }
                }
                var y, m = Object.prototype,
                    _ = m.hasOwnProperty,
                    b = "function" == typeof Symbol ? Symbol : {},
                    w = b.iterator || "@@iterator",
                    S = b.asyncIterator || "@@asyncIterator",
                    P = b.toStringTag || "@@toStringTag",
                    E = "object" === t(e),
                    C = n.regeneratorRuntime;
                if (C) return void(E && (e.exports = C));
                C = n.regeneratorRuntime = E ? e.exports : {}, C.wrap = r;
                var k = "suspendedStart",
                    T = "suspendedYield",
                    O = "executing",
                    I = "completed",
                    D = {},
                    A = {};
                A[w] = function() {
                    return this
                };
                var M = Object.getPrototypeOf,
                    L = M && M(M(g([])));
                L && L !== m && _.call(L, w) && (A = L);
                var R = s.prototype = o.prototype = Object.create(A);
                a.prototype = R.constructor = s, s.constructor = a, s[P] = a.displayName = "GeneratorFunction", C.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === a || "GeneratorFunction" === (t.displayName || t.name))
                }, C.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, s) : (e.__proto__ = s, P in e || (e[P] = "GeneratorFunction")), e.prototype = Object.create(R), e
                }, C.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, u(l.prototype), l.prototype[S] = function() {
                    return this
                }, C.AsyncIterator = l, C.async = function(e, t, n, i) {
                    var o = new l(r(e, t, n, i));
                    return C.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                        return e.done ? e.value : o.next()
                    })
                }, u(R), R[P] = "Generator", R[w] = function() {
                    return this
                }, R.toString = function() {
                    return "[object Generator]"
                }, C.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, C.values = g, p.prototype = {
                    constructor: p,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = y, this.done = !1, this.delegate = null, this.method = "next", this.arg = y, this.tryEntries.forEach(h), !e)
                            for (var t in this) "t" === t.charAt(0) && _.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = y)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0],
                            t = e.completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        function t(t, r) {
                            return o.type = "throw", o.arg = e, n.next = t, r && (n.method = "next", n.arg = y), !!r
                        }
                        if (this.done) throw e;
                        for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return t("end");
                            if (i.tryLoc <= this.prev) {
                                var a = _.call(i, "catchLoc"),
                                    s = _.call(i, "finallyLoc");
                                if (a && s) {
                                    if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                                } else if (a) {
                                    if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && _.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, D) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), D
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), h(n), D
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    h(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: g(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = y), D
                    }
                }
            }(function() {
                return this
            }() || Function("return this")())
        }).call(t, n(10)(e))
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = n(22),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            a = r({}, o.default, {
                swFile: "./sw.js",
                swScope: "./",
                httpLoadTime: 2,
                nativePlaybackOnly: !1,
                useHttpRange: !0
            });
        t.default = a, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {
            wsMaxRetries: 10,
            p2pEnabled: !0,
            wifiOnly: !1,
            memoryCacheLimit: {
                pc: 838860800,
                mobile: 524288e3
            },
            dcDownloadTimeout: 25,
            logLevel: "error",
            tag: "",
            webRTCConfig: {},
            token: void 0,
            appName: void 0,
            appId: void 0,
            prefetchNum: 5,
            showSlogan: !0,
            trickleICE: !1,
            simultaneousTargetPeers: 2,
            announceLocation: "cn",
            geoIpPreflight: !0
        };
        r.validateSegment = function(e, t) {
            return !0
        }, r.getStats = function(e, t, n) {}, r.getPeerId = function(e) {}, r.getPeersInfo = function(e) {}, t.default = r, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(1),
            f = r(c),
            d = n(11),
            h = r(d),
            p = n(25),
            g = r(p),
            v = n(12),
            y = r(v),
            m = n(0),
            _ = n(2),
            b = r(_),
            w = n(26),
            S = r(w),
            P = n(8),
            E = r(P),
            C = n(4),
            k = r(C),
            T = 25,
            O = 15,
            I = function(e) {
                function t(e, n, r, i) {
                    o(this, t);
                    var s = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return s.engine = e, s.logger = e.logger, s.config = i, s.connected = !1, s.scheduler = r, s.sequential = s.scheduler.sequential, s.DCMap = new Map, s.failedDCSet = new Set, s.signalerWs = null, s.fetcher = n, s.peers = [], s.minConns = 5, s.stuns = [], s.requestMorePeers = (0, S.default)(s._requestMorePeers, s), s.engine.maxConns = s.maxConns = k.default.isMobile() ? O : T, s.peersIncrement = 0, s.gotPeersFromTracker = !1, s.fuseRate = -1, s
                }
                return s(t, e), l(t, [{
                    key: "resumeP2P",
                    value: function() {
                        var e = this;
                        if (this.fetcher) {
                            var t = this.engine,
                                n = this.config,
                                r = this.fetcher,
                                i = r.btAnnounce,
                                o = r.btAnnouncePreflight;
                            (n.geoIpPreflight ? o : i).call(r).then(function(r) {
                                if (e.scheduler) {
                                    t.peerId = e.peerId = r.id, e.minConns = r.min_conns, r.share_only && e.scheduler.setShareOnly();
                                    var i = r.peers;
                                    e.scheduler.notifyPeersLoaded(i.length);
                                    var o = t.netType;
                                    (r.wifi_only || n.wifiOnly) && "wifi" !== o && "ethernet" !== o && (e.scheduler.downloadOnly = !0, e.logger.info("downloadOnly mode"));
                                    var a = void 0,
                                        s = void 0;
                                    if ("object" === u(n.wsSignalerAddr) && n.wsSignalerAddr.main) a = n.wsSignalerAddr.main, s = n.wsSignalerAddr.backup, r.signal && !r.signal2 && (s = void 0);
                                    else {
                                        if ("string" != typeof n.wsSignalerAddr) {
                                            var l = new Error;
                                            throw l.err = new Error("invalid wsSignalerAddr"), l
                                        }
                                        a = n.wsSignalerAddr
                                    }
                                    e.signalerWs = e._initSignalerWs(r.signal || a, r.signal2 || s, r.token, r.token2), 0 === i.length ? e.requestMorePeers() : e.peers = e._filterPeers(i), t.emit("peerId", e.peerId);
                                    var c = n.getPeerId;
                                    c && "function" == typeof c && c(e.peerId), r.stun && r.stun.length > 0 && (e.stuns = r.stun), r.debug && e.logger.enableDebug(), r.fuse_rate && (e.fuseRate = r.fuse_rate), e.logger.info("announce request response " + JSON.stringify(r, null, 2)), t.media && r.slogan && (0, m.appendSlogan)(window.atob("U3RyZWFtIGFjY2VsZXJhdGVkIGJ5IENETkJ5ZSBQMlA="), (0, m.getHomeUrl)(), t.media)
                                }
                            }).catch(function(n) {
                                if ("TRACKER_EXPT" === n.code && t.emit(b.default.EXCEPTION, n), n.retry) {
                                    var r = (0, m.randomNum)(3e4, 6e4);
                                    e.logger.warn("announce retry after " + r + "ms"), e.announceTimer = setTimeout(function() {
                                        e.resumeP2P()
                                    }, r)
                                }
                            })
                        }
                    }
                }, {
                    key: "stopP2P",
                    value: function() {
                        this.fetcher.destroy(), this.fetcher = null, this.requestMorePeers(!0), this.scheduler.destroy(), this.scheduler = null, this.signalerWs && (this.signalerWs.destroy(), this.signalerWs = null), this.peers = [];
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, i = this.DCMap.values()[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                                r.value.destroy(!0)
                            }
                        } catch (e) {
                            t = !0, n = e
                        } finally {
                            try {
                                !e && i.return && i.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                        this.DCMap.clear(), this.failedDCSet.clear(), this.logger.warn("tracker stop p2p")
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.stopP2P(), this.removeAllListeners(), clearTimeout(this.announceTimer);
                        var e = this.config;
                        e.getStats = e.getPeerId = e.getPeersInfo = null, this.logger.warn("destroy tracker")
                    }
                }, {
                    key: "_filterPeers",
                    value: function(e) {
                        var t = [],
                            n = [].concat(i(this.DCMap.keys()), i(this.failedDCSet.keys()), [this.peerId]);
                        return e.filter(function(e) {
                            return !n.includes(e.id)
                        }).forEach(function(e) {
                            t.push({
                                id: e.id,
                                intermediator: e.intermediator,
                                cpr: e.cpr || void 0
                            })
                        }), t
                    }
                }, {
                    key: "_tryConnectToAllPeers",
                    value: function() {
                        if (0 !== this.peers.length && this.signalerWs.connected)
                            for (this.logger.info("try connect to " + this.peers.length + " peers"); this.peers.length > 0;) {
                                if (this.DCMap.size >= this.maxConns) {
                                    this.logger.debug("clear exceeded peers"), this.peers = [];
                                    break
                                }
                                var e = this.peers.shift();
                                this.logger.debug("new DataChannel " + e.id);
                                var t = e.intermediator;
                                this._createDatachannel(e.id, !0, t, e.cpr)
                            }
                    }
                }, {
                    key: "_setupDC",
                    value: function(e) {
                        var t = this;
                        e.on(b.default.DC_SIGNAL, function(n) {
                            var r = e.remotePeerId;
                            if (e.intermediator) {
                                var i = t.DCMap.get(e.intermediator);
                                if (i) {
                                    if (i.sendMsgSignal(r, t.peerId, n)) return
                                }
                            }
                            t.signalerWs.sendSignal(r, n, e.signalName)
                        }).on(b.default.DC_PEER_SIGNAL, function(n) {
                            var r = n.to_peer_id,
                                i = n.from_peer_id,
                                o = n.action;
                            if (r && i && o)
                                if (r !== t.peerId) {
                                    t.logger.info("relay signal for " + i);
                                    var a = t.DCMap.get(r);
                                    if (a) {
                                        if ("signal" !== o) return void a.sendMsgSignalReject(r, i, n.reason);
                                        if (a.sendMsgSignal(r, i, n.data)) return
                                    }
                                    e.sendMsgSignal(i, r)
                                } else "signal" === o ? t._handleSignalMsg(i, n, e.remotePeerId) : t._handSignalRejected(i, n)
                        }).on(b.default.DC_GET_PEERS, function() {
                            var n = (0, m.getCurrentTs)(),
                                r = t.scheduler.getPeers().filter(function(e) {
                                    return e.peersConnected < (e.mobileWeb ? O : T)
                                });
                            if (r && r.length > 0) {
                                var i = [];
                                r.forEach(function(r) {
                                    var o = n - r.timeJoin;
                                    r.remotePeerId !== e.remotePeerId && r.remotePeerId !== t.peerId && o > 30 && i.push({
                                        id: r.remotePeerId
                                    })
                                }), t.logger.info("send " + i.length + " peers to " + e.remotePeerId), e.sendPeers(i)
                            }
                        }).on(b.default.DC_PEERS, function(n) {
                            e.gotPeers = !0;
                            var r = n.peers;
                            if (r && r.length > 0) {
                                t.logger.info("receive " + r.length + " peers from " + e.remotePeerId), r.forEach(function(t) {
                                    t.intermediator = e.remotePeerId
                                }), t.peers = [].concat(i(t.peers), i(t._filterPeers(r).slice(0, 5))), t._tryConnectToAllPeers()
                            }
                        }).once(b.default.DC_ERROR, function(n) {
                            t.logger.info("datachannel " + e.channelId + " failed fatal " + n), t.scheduler && (t.scheduler.deletePeer(e), t._destroyAndDeletePeer(e.remotePeerId, n), t.requestMorePeers(), t.fetcher && (e.connected ? t.fetcher.decreConns() : n && t.fetcher.increFailConns(), n && t.failedDCSet.add(e.remotePeerId), t._doSignalFusing(t.scheduler.peersNum)))
                        }).once(b.default.DC_CLOSE, function(n) {
                            t.logger.info("datachannel " + e.channelId + " closed fatal " + n), t.scheduler && (t.scheduler.deletePeer(e), t._doSignalFusing(t.scheduler.peersNum)), t._destroyAndDeletePeer(e.remotePeerId, n), n && t.failedDCSet.add(e.remotePeerId), t.requestMorePeers(), t.fetcher && t.fetcher.decreConns()
                        }).once(b.default.DC_OPEN, function() {
                            e.isInitiator && t.scheduler.handshakePeer(e)
                        }).once(b.default.DC_METADATA, function(n) {
                            var r = t.scheduler;
                            e.isInitiator || r.handshakePeer(e), r.handleMetaData(e, n);
                            var i = r.peersNum,
                                o = i >= t.minConns;
                            t.requestMorePeers(o), t.fetcher.increConns(), t.peersIncrement++, t._doSignalFusing(i + 1)
                        })
                    }
                }, {
                    key: "_doSignalFusing",
                    value: function(e) {
                        if (!(this.fuseRate <= 0)) {
                            var t = this.signalerWs.connected;
                            t && e >= this.fuseRate + 2 ? (this.logger.warn("reach fuseRate, report stats close signaler"), this.fetcher.conns > 0 && this.fetcher.postStats(), this.signalerWs.close()) : !t && e < this.fuseRate && (this.logger.warn("low conns, reconnect signaler"), this.signalerWs.reconnect())
                        }
                    }
                }, {
                    key: "_initSignalerWs",
                    value: function(e, t, n, r) {
                        var i = this,
                            o = "?id=" + this.peerId + "&p=web&d=" + location.hostname + "&v=0.7.6",
                            a = void 0,
                            s = "" + e + o;
                        if (n && (s = s + "&token=" + n), t && t !== e) {
                            var u = "" + t + o;
                            r && (u = u + "&token=" + r), a = new g.default(this.logger, this.config, s, u)
                        } else a = new h.default(this.logger, this.config, s, 270);
                        return a.onopen = function() {
                            i.connected = !0, i.engine.emit("serverConnected", !0), i._tryConnectToAllPeers()
                        }, a.onmessage = function(e, t) {
                            var n = e.action,
                                r = e.from_peer_id;
                            switch (n) {
                                case "signal":
                                    i._handleSignalMsg(r, e, null, t);
                                    break;
                                case "reject":
                                    i._handSignalRejected(r, e);
                                    break;
                                default:
                                    i.logger.warn("Signal websocket unknown action " + n)
                            }
                        }, a.onclose = function() {
                            i.connected = !1, i.engine.emit("serverConnected", !1)
                        }, a.onerror = function(e) {
                            e.message && i.engine.emit(b.default.EXCEPTION, (0, y.default)(e, "SIGNAL_EXPT"))
                        }, a
                    }
                }, {
                    key: "_handSignalRejected",
                    value: function(e, t) {
                        this.logger.warn("signaling " + e + " rejected, reason " + t.reason);
                        var n = this.DCMap.get(e);
                        n && !n.connected && (n.destroy(t.fatal), this.DCMap.delete(e)), this.requestMorePeers(), t.fatal && this.failedDCSet.add(e)
                    }
                }, {
                    key: "_handleSignalMsg",
                    value: function(e, t, n, r) {
                        if (this.scheduler) {
                            var i = this.logger;
                            if (t.data) {
                                if (this.failedDCSet.has(e)) return void this._sendSignalReject(e, "peer " + e + " in blocked list", n, r, !0);
                                this._handleSignal(e, t.data, n, r)
                            } else {
                                if (!this._destroyAndDeletePeer(e)) return;
                                i.info("signaling " + e + " not found");
                                var o = this.scheduler;
                                o.waitForPeer && 0 === --o.waitingPeers && o.notifyPeersLoaded(0), this.requestMorePeers(), this.failedDCSet.add(e)
                            }
                        }
                    }
                }, {
                    key: "_handleSignal",
                    value: function(e, t, n, r) {
                        var i = t.type,
                            o = this.logger,
                            a = this.DCMap.get(e);
                        if (a) {
                            if (a.connected) return void o.info("datachannel had connected, signal ignored");
                            if ("offer" === i) {
                                if (!(this.peerId > e)) return void o.warn("signal type wrong " + i + ", ignored");
                                this._destroyAndDeletePeer(e, !1), o.warn("signal type wrong " + i + ", convert to non initiator"), a = this._createDatachannel(e, !1, n)
                            }
                        } else {
                            if ("answer" === i) {
                                var s = "signal type wrong " + i;
                                return o.warn(s), this._sendSignalReject(e, s, n, r), void this._destroyAndDeletePeer(e, !1)
                            }
                            o.debug("receive node " + e + " connection request");
                            var u = this.scheduler.peersNum;
                            if (u >= this.maxConns) {
                                var l = this.scheduler.getNonactivePeers();
                                if (!(l.length > 0)) {
                                    var c = "peers reach limit " + this.maxConns;
                                    return o.warn(c), void this._sendSignalReject(e, c, n, r)
                                }
                                var f = u - this.maxConns + 2;
                                for (l.length < f && (f = l.length); f > 0;) {
                                    var d = l.shift();
                                    d && (o.warn("close inactive peer " + d.remotePeerId), d.close(!1)), f--
                                }
                            }
                            a = this._createDatachannel(e, !1, n)
                        }
                        r && (a.signalName = r), a.receiveSignal(t)
                    }
                }, {
                    key: "_createDatachannel",
                    value: function(e, t, n, r) {
                        var i = this.config.trickleICE,
                            o = new E.default(this.engine, this.peerId, e, t, this.config, this.sequential, {
                                stuns: this.stuns,
                                intermediator: n,
                                trickle: i
                            });
                        return r && (o.cpr = r), this.DCMap.set(e, o), this._setupDC(o), o
                    }
                }, {
                    key: "_sendSignalReject",
                    value: function(e, t, n, r, i) {
                        if (n) {
                            var o = this.DCMap.get(n);
                            if (o && o.sendMsgSignalReject(e, this.peerId, t, i)) return
                        }
                        this.signalerWs.sendReject(e, t, i, r)
                    }
                }, {
                    key: "_requestMorePeers",
                    value: function(e) {
                        var t = this,
                            n = this.logger;
                        n.info("requestMorePeers after delay " + e);
                        var r = this.scheduler.peersNum,
                            o = this.peersIncrement;
                        this.peersIncrement = 0, r >= this.minConns || (0 === r || o <= 3 && !this.gotPeersFromTracker ? (this.failedDCSet.size > 30 && (this.failedDCSet = new Set([].concat(i(this.failedDCSet)).slice(-30))), this.fetcher.btGetPeers([].concat(i(this.DCMap.keys()), i(this.failedDCSet.keys()))).then(function(e) {
                            n.info("requestMorePeers resp " + JSON.stringify(e, null, 2)), t.peers = [].concat(i(t.peers), i(t._filterPeers(e.peers))), t._tryConnectToAllPeers()
                        }).catch(function(e) {
                            n.error("requestMorePeers error " + e)
                        }), this.gotPeersFromTracker = !0) : r < this.maxConns && (this.scheduler.requestPeers(), this.gotPeersFromTracker = !1))
                    }
                }, {
                    key: "_destroyAndDeletePeer",
                    value: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = this.DCMap.get(e);
                        return !!n && (n.destroy(t), this.DCMap.delete(e), !0)
                    }
                }]), t
            }(f.default);
        t.default = I, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            function n() {
                this.constructor = e
            }
            s(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }

        function i(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator],
                n = 0;
            return t ? t.call(e) : {
                next: function() {
                    return e && n >= e.length && (e = void 0), {
                        value: e && e[n++],
                        done: !e
                    }
                }
            }
        }

        function o(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, i, o = n.call(e),
                a = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return a
        }

        function a() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function(e, t) {
                return (s = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            },
            u = function() {
                function e(e, t) {
                    this.target = t, this.type = e
                }
                return e
            }(),
            l = function(e) {
                function t(t, n) {
                    var r = e.call(this, "error", n) || this;
                    return r.message = t.message, r.error = t, r
                }
                return r(t, e), t
            }(u),
            c = function(e) {
                function t(t, n, r) {
                    void 0 === t && (t = 1e3), void 0 === n && (n = "");
                    var i = e.call(this, "close", r) || this;
                    return i.wasClean = !0, i.code = t, i.reason = n, i
                }
                return r(t, e), t
            }(u),
            f = function() {
                if ("undefined" != typeof WebSocket) return WebSocket
            },
            d = function(e) {
                return void 0 !== e && !!e && 2 === e.CLOSING
            },
            h = {
                maxReconnectionDelay: 1e4,
                minReconnectionDelay: 1e3 + 4e3 * Math.random(),
                minUptime: 5e3,
                reconnectionDelayGrowFactor: 1.3,
                connectionTimeout: 4e3,
                maxRetries: 1 / 0,
                maxEnqueuedMessages: 1 / 0,
                startClosed: !1,
                debug: !1
            },
            p = function() {
                function e(e, t, n) {
                    var r = this;
                    void 0 === n && (n = {}), this._listeners = {
                        error: [],
                        message: [],
                        open: [],
                        close: []
                    }, this._retryCount = -1, this._shouldReconnect = !0, this._connectLock = !1, this._binaryType = "blob", this._closeCalled = !1, this._messageQueue = [], this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this._handleOpen = function(e) {
                        r._debug("open event");
                        var t = r._options.minUptime,
                            n = void 0 === t ? h.minUptime : t;
                        clearTimeout(r._connectTimeout), r._uptimeTimeout = setTimeout(function() {
                            return r._acceptOpen()
                        }, n), r._ws.binaryType = r._binaryType, r._messageQueue.forEach(function(e) {
                            return r._ws.send(e)
                        }), r._messageQueue = [], r.onopen && r.onopen(e), r._listeners.open.forEach(function(t) {
                            return r._callEventListener(e, t)
                        })
                    }, this._handleMessage = function(e) {
                        r._debug("message event"), r.onmessage && r.onmessage(e), r._listeners.message.forEach(function(t) {
                            return r._callEventListener(e, t)
                        })
                    }, this._handleError = function(e) {
                        r._debug("error event", e.message), r._disconnect(void 0, "TIMEOUT" === e.message ? "timeout" : void 0), r.onerror && r.onerror(e), r._debug("exec error listeners"), r._listeners.error.forEach(function(t) {
                            return r._callEventListener(e, t)
                        }), r._connect()
                    }, this._handleClose = function(e) {
                        r._debug("close event"), r._clearTimeouts(), r._shouldReconnect && r._connect(), r.onclose && r.onclose(e), r._listeners.close.forEach(function(t) {
                            return r._callEventListener(e, t)
                        })
                    }, this._url = e, this._protocols = t, this._options = n, this._options.startClosed && (this._shouldReconnect = !1), this._connect()
                }
                return Object.defineProperty(e, "CONNECTING", {
                    get: function() {
                        return 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "OPEN", {
                    get: function() {
                        return 1
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "CLOSING", {
                    get: function() {
                        return 2
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e, "CLOSED", {
                    get: function() {
                        return 3
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "CONNECTING", {
                    get: function() {
                        return e.CONNECTING
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "OPEN", {
                    get: function() {
                        return e.OPEN
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "CLOSING", {
                    get: function() {
                        return e.CLOSING
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "CLOSED", {
                    get: function() {
                        return e.CLOSED
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "binaryType", {
                    get: function() {
                        return this._ws ? this._ws.binaryType : this._binaryType
                    },
                    set: function(e) {
                        this._binaryType = e, this._ws && (this._ws.binaryType = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "retryCount", {
                    get: function() {
                        return Math.max(this._retryCount, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "bufferedAmount", {
                    get: function() {
                        return this._messageQueue.reduce(function(e, t) {
                            return "string" == typeof t ? e += t.length : t instanceof Blob ? e += t.size : e += t.byteLength, e
                        }, 0) + (this._ws ? this._ws.bufferedAmount : 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "extensions", {
                    get: function() {
                        return this._ws ? this._ws.extensions : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "protocol", {
                    get: function() {
                        return this._ws ? this._ws.protocol : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "readyState", {
                    get: function() {
                        return this._ws ? this._ws.readyState : this._options.startClosed ? e.CLOSED : e.CONNECTING
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "url", {
                    get: function() {
                        return this._ws ? this._ws.url : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.close = function(e, t) {
                    return void 0 === e && (e = 1e3), this._closeCalled = !0, this._shouldReconnect = !1, this._clearTimeouts(), this._ws ? this._ws.readyState === this.CLOSED ? void this._debug("close: already closed") : void this._ws.close(e, t) : void this._debug("close enqueued: no ws instance")
                }, e.prototype.reconnect = function(e, t) {
                    this._shouldReconnect = !0, this._closeCalled = !1, this._retryCount = -1, this._ws && this._ws.readyState !== this.CLOSED ? (this._disconnect(e, t), this._connect()) : this._connect()
                }, e.prototype.send = function(e) {
                    if (this._ws && this._ws.readyState === this.OPEN) this._debug("send", e), this._ws.send(e);
                    else {
                        var t = this._options.maxEnqueuedMessages,
                            n = void 0 === t ? h.maxEnqueuedMessages : t;
                        this._messageQueue.length < n && (this._debug("enqueue", e), this._messageQueue.push(e))
                    }
                }, e.prototype.addEventListener = function(e, t) {
                    this._listeners[e] && this._listeners[e].push(t)
                }, e.prototype.dispatchEvent = function(e) {
                    var t, n, r = this._listeners[e.type];
                    if (r) try {
                        for (var o = i(r), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            this._callEventListener(e, s)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (n = o.return) && n.call(o)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return !0
                }, e.prototype.removeEventListener = function(e, t) {
                    this._listeners[e] && (this._listeners[e] = this._listeners[e].filter(function(e) {
                        return e !== t
                    }))
                }, e.prototype._debug = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._options.debug && console.log.apply(console, a(["RWS>"], e))
                }, e.prototype._getNextDelay = function() {
                    var e = this._options,
                        t = e.reconnectionDelayGrowFactor,
                        n = void 0 === t ? h.reconnectionDelayGrowFactor : t,
                        r = e.minReconnectionDelay,
                        i = void 0 === r ? h.minReconnectionDelay : r,
                        o = e.maxReconnectionDelay,
                        a = void 0 === o ? h.maxReconnectionDelay : o,
                        s = 0;
                    return this._retryCount > 0 && (s = i * Math.pow(n, this._retryCount - 1)) > a && (s = a), this._debug("next delay", s), s
                }, e.prototype._wait = function() {
                    var e = this;
                    return new Promise(function(t) {
                        setTimeout(t, e._getNextDelay())
                    })
                }, e.prototype._getNextUrl = function(e) {
                    if ("string" == typeof e) return Promise.resolve(e);
                    if ("function" == typeof e) {
                        var t = e();
                        if ("string" == typeof t) return Promise.resolve(t);
                        if (t.then) return t
                    }
                    throw Error("Invalid URL")
                }, e.prototype._connect = function() {
                    var e = this;
                    if (!this._connectLock && this._shouldReconnect) {
                        this._connectLock = !0;
                        var t = this._options,
                            n = t.maxRetries,
                            r = void 0 === n ? h.maxRetries : n,
                            i = t.connectionTimeout,
                            o = void 0 === i ? h.connectionTimeout : i,
                            a = t.WebSocket,
                            s = void 0 === a ? f() : a;
                        if (this._retryCount >= r) return void this._debug("max retries reached", this._retryCount, ">=", r);
                        if (this._retryCount++, this._debug("connect", this._retryCount), this._removeListeners(), !d(s)) throw Error("No valid WebSocket class provided");
                        this._wait().then(function() {
                            return e._getNextUrl(e._url)
                        }).then(function(t) {
                            e._closeCalled || (e._debug("connect", {
                                url: t,
                                protocols: e._protocols
                            }), e._ws = e._protocols ? new s(t, e._protocols) : new s(t), e._ws.binaryType = e._binaryType, e._connectLock = !1, e._addListeners(), e._connectTimeout = setTimeout(function() {
                                return e._handleTimeout()
                            }, o))
                        })
                    }
                }, e.prototype._handleTimeout = function() {
                    this._debug("timeout event"), this._handleError(new l(Error("TIMEOUT"), this))
                }, e.prototype._disconnect = function(e, t) {
                    if (void 0 === e && (e = 1e3), this._clearTimeouts(), this._ws) {
                        this._removeListeners();
                        try {
                            this._ws.close(e, t), this._handleClose(new c(e, t, this))
                        } catch (e) {}
                    }
                }, e.prototype._acceptOpen = function() {
                    this._debug("accept open"), this._retryCount = 0
                }, e.prototype._callEventListener = function(e, t) {
                    "handleEvent" in t ? t.handleEvent(e) : t(e)
                }, e.prototype._removeListeners = function() {
                    this._ws && (this._debug("removeListeners"), this._ws.removeEventListener("open", this._handleOpen), this._ws.removeEventListener("close", this._handleClose), this._ws.removeEventListener("message", this._handleMessage), this._ws.removeEventListener("error", this._handleError))
                }, e.prototype._addListeners = function() {
                    this._ws && (this._debug("addListeners"), this._ws.addEventListener("open", this._handleOpen), this._ws.addEventListener("close", this._handleClose), this._ws.addEventListener("message", this._handleMessage), this._ws.addEventListener("error", this._handleError))
                }, e.prototype._clearTimeouts = function() {
                    clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout)
                }, e
            }();
        t.default = p, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(1),
            l = r(u),
            c = n(11),
            f = r(c),
            d = function(e) {
                function t(e, n, r, a) {
                    i(this, t);
                    var s = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return s.logger = e, s.config = n, s.mainAddr = r, s.backupAddr = a, s.mainWS = s._init(r), s.backupWS = s._init(a, "backup"), s._connected = !1, s
                }
                return a(t, e), s(t, [{
                    key: "_init",
                    value: function(e, t) {
                        var n = this;
                        if (!e) return null;
                        var r = new f.default(this.logger, this.config, e, 270, t);
                        return r.onopen = function() {
                            !n._connected && n.onopen && (n._connected = !0, n.onopen())
                        }, r.onmessage = function(e) {
                            n.onmessage && n.onmessage(e, r.name)
                        }, r.onclose = function() {
                            n._connected && !n.connected && n.onclose && (n._connected = !1, n.onclose())
                        }, r.onerror = function(e) {
                            n.onerror && n.onerror(e)
                        }, r
                    }
                }, {
                    key: "sendSignal",
                    value: function(e, t, n) {
                        if (n) {
                            var r = this._getWSByName(n);
                            if (r) return void r.sendSignal(e, t)
                        }
                        this.mainConnected ? this.mainWS.sendSignal(e, t) : this.backupConnected ? this.backupWS.sendSignal(e, t) : this.logger.warn("no signal available, send signal failed")
                    }
                }, {
                    key: "sendReject",
                    value: function(e, t, n, r) {
                        if (r) {
                            var i = this._getWSByName(r);
                            if (i) return void i.sendReject(e, t, n)
                        }
                        this.mainConnected ? this.mainWS.sendReject(e, t, n) : this.backupConnected ? this.backupWS.sendReject(e, t, n) : this.logger.warn("no signal available, send reject failed")
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.mainWS && this.mainWS.close(), this.backupWS && this.backupWS.close()
                    }
                }, {
                    key: "_getWSByName",
                    value: function(e) {
                        return this.mainWS && this.mainWS.name === e ? this.mainWS : this.backupWS && this.backupWS.name === e ? this.backupWS : null
                    }
                }, {
                    key: "reconnect",
                    value: function() {
                        this.mainWS && this.mainWS.reconnect(), this.backupWS && this.backupWS.reconnect()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.close(), this.mainWS = null, this.backupWS = null, this.removeAllListeners()
                    }
                }, {
                    key: "connected",
                    get: function() {
                        return this.mainConnected || this.backupConnected
                    }
                }, {
                    key: "mainConnected",
                    get: function() {
                        return this.mainWS && this.mainWS.connected
                    }
                }, {
                    key: "backupConnected",
                    get: function() {
                        return this.backupWS && this.backupWS.connected
                    }
                }]), t
            }(l.default);
        t.default = d, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 70,
                r = null,
                i = !1,
                o = n;
            return function() {
                if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) return clearTimeout(r), void(i = !1);
                i || (i = !0, r = setTimeout(function() {
                    e.call(t, o), i = !1, r = null
                }, 1e3 * o), o *= 1)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = r, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function a(e) {
            return e.replace(/a=ice-options:trickle\s\n/g, "")
        }

        function s(e) {
            console.warn(e)
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(0),
            f = n(1),
            d = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(f),
            h = n(13),
            p = n(5).Buffer,
            g = 5e3,
            v = function(e) {
                function t(e) {
                    r(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    n.channelName = e.initiator ? e.channelName : null, n.initiator = e.initiator || !1, n.channelConfig = e.channelConfig || t.channelConfig, n.channelNegotiated = n.channelConfig.negotiated, n.config = Object.assign({}, t.config, e.config), n.offerOptions = e.offerOptions || {}, n.answerOptions = e.answerOptions || {}, n.sdpTransform = e.sdpTransform || function(e) {
                        return e
                    }, n.trickle = void 0 === e.trickle || e.trickle, n.allowHalfTrickle = void 0 !== e.allowHalfTrickle && e.allowHalfTrickle, n.iceCompleteTimeout = e.iceCompleteTimeout || g, n.destroyed = !1, n.destroying = !1, n._connected = !1, n.remoteAddress = void 0, n.remoteFamily = void 0, n.remotePort = void 0, n.localAddress = void 0, n.localFamily = void 0, n.localPort = void 0, n._wrtc = e.wrtc && "object" === u(e.wrtc) ? e.wrtc : (0, c.getBrowserRTC)(), n._pcReady = !1, n._channelReady = !1, n._iceComplete = !1, n._iceCompleteTimer = null, n._channel = null, n._pendingCandidates = [], n._isNegotiating = !1, n._firstNegotiation = !0, n._batchedNegotiation = !1, n._queuedNegotiation = !1, n._sendersAwaitingStable = [], n._senderMap = new Map, n._closingInterval = null, n._remoteTracks = [], n._remoteStreams = [], n._chunk = null, n._cb = null, n._interval = null;
                    try {
                        n._pc = new n._wrtc.RTCPeerConnection(n.config)
                    } catch (e) {
                        return h(function() {
                            return n.destroy(e)
                        }), i(n)
                    }
                    return n._isReactNativeWebrtc = "number" == typeof n._pc._peerConnectionId, n._pc.oniceconnectionstatechange = function() {
                        n._onIceStateChange()
                    }, n._pc.onicegatheringstatechange = function() {
                        n._onIceStateChange()
                    }, n._pc.onconnectionstatechange = function() {
                        n._onConnectionStateChange()
                    }, n._pc.onsignalingstatechange = function() {
                        n._onSignalingStateChange()
                    }, n._pc.onicecandidate = function(e) {
                        n._onIceCandidate(e)
                    }, n.initiator || n.channelNegotiated ? n._setupData({
                        channel: n._pc.createDataChannel(n.channelName, n.channelConfig)
                    }) : n._pc.ondatachannel = function(e) {
                        n._setupData(e)
                    }, n._needsNegotiation(), n
                }
                return o(t, e), l(t, [{
                    key: "signal",
                    value: function(e) {
                        var t = this;
                        if (this.destroyed) throw new Error("cannot signal after peer is destroyed");
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (t) {
                            e = {}
                        }
                        e.renegotiate && this.initiator && this._needsNegotiation(), e.transceiverRequest && this.initiator && this.addTransceiver(e.transceiverRequest.kind, e.transceiverRequest.init), e.candidate && (this._pc.remoteDescription && this._pc.remoteDescription.type ? this._addIceCandidate(e.candidate) : this._pendingCandidates.push(e.candidate)), e.sdp && this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(e)).then(function() {
                            t.destroyed || (t._pendingCandidates.forEach(function(e) {
                                t._addIceCandidate(e)
                            }), t._pendingCandidates = [], "offer" === t._pc.remoteDescription.type && t._createAnswer())
                        }).catch(function(e) {
                            t.destroy(e)
                        }), e.sdp || e.candidate || e.renegotiate || e.transceiverRequest || this.destroy(new Error("signal() called with invalid signal data"))
                    }
                }, {
                    key: "_addIceCandidate",
                    value: function(e) {
                        var t = this,
                            n = new this._wrtc.RTCIceCandidate(e);
                        this._pc.addIceCandidate(n).catch(function(e) {
                            !n.address || n.address.endsWith(".local") ? s("Ignoring unsupported ICE candidate.") : t.destroy(e)
                        })
                    }
                }, {
                    key: "send",
                    value: function(e) {
                        this._channel.send(e)
                    }
                }, {
                    key: "addTransceiver",
                    value: function(e, t) {
                        if (this.initiator) try {
                            this._pc.addTransceiver(e, t), this._needsNegotiation()
                        } catch (e) {
                            this.destroy(e)
                        } else this.emit("signal", {
                            type: "transceiverRequest",
                            transceiverRequest: {
                                kind: e,
                                init: t
                            }
                        })
                    }
                }, {
                    key: "_needsNegotiation",
                    value: function() {
                        var e = this;
                        this._batchedNegotiation || (this._batchedNegotiation = !0, h(function() {
                            e._batchedNegotiation = !1, !e.initiator && e._firstNegotiation || e.negotiate(), e._firstNegotiation = !1
                        }))
                    }
                }, {
                    key: "negotiate",
                    value: function() {
                        var e = this;
                        this.initiator ? this._isNegotiating ? this._queuedNegotiation = !0 : setTimeout(function() {
                            e._createOffer()
                        }, 0) : this._isNegotiating ? this._queuedNegotiation = !0 : this.emit("signal", {
                            type: "renegotiate",
                            renegotiate: !0
                        }), this._isNegotiating = !0
                    }
                }, {
                    key: "destroy",
                    value: function(e) {
                        this._destroy(e, function() {})
                    }
                }, {
                    key: "_destroy",
                    value: function(e, t) {
                        var n = this;
                        this.destroyed || this.destroying || (this.destroying = !0, h(function() {
                            if (n.destroyed = !0, n.destroying = !1, n._connected = !1, n._pcReady = !1, n._channelReady = !1, n._remoteTracks = null, n._remoteStreams = null, n._senderMap = null, clearInterval(n._closingInterval), n._closingInterval = null, clearInterval(n._interval), n._interval = null, n._chunk = null, n._cb = null, n._channel) {
                                try {
                                    n._channel.close()
                                } catch (e) {}
                                n._channel.onmessage = null, n._channel.onopen = null, n._channel.onclose = null, n._channel.onerror = null
                            }
                            if (n._pc) {
                                try {
                                    n._pc.close()
                                } catch (e) {}
                                n._pc.oniceconnectionstatechange = null, n._pc.onicegatheringstatechange = null, n._pc.onsignalingstatechange = null, n._pc.onicecandidate = null, n._pc.ontrack = null, n._pc.ondatachannel = null
                            }
                            n._pc = null, n._channel = null, e && n.emit("error", e), n.emit("close")
                        }))
                    }
                }, {
                    key: "_setupData",
                    value: function(e) {
                        var t = this;
                        if (!e.channel) return this.destroy(new Error("Data channel event is missing `channel` property"));
                        this._channel = e.channel, this._channel.binaryType = "arraybuffer", "number" == typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = 65536), this.channelName = this._channel.label, this._channel.onmessage = function(e) {
                            t._onChannelMessage(e)
                        }, this._channel.onbufferedamountlow = function() {
                            t._onChannelBufferedAmountLow()
                        }, this._channel.onopen = function() {
                            t._onChannelOpen()
                        }, this._channel.onclose = function() {
                            t._onChannelClose()
                        }, this._channel.onerror = function(e) {
                            t.destroy(e)
                        };
                        var n = !1;
                        this._closingInterval = setInterval(function() {
                            t._channel && "closing" === t._channel.readyState ? (n && t._onChannelClose(), n = !0) : n = !1
                        }, 5e3)
                    }
                }, {
                    key: "_startIceCompleteTimeout",
                    value: function() {
                        var e = this;
                        this.destroyed || this._iceCompleteTimer || (this._iceCompleteTimer = setTimeout(function() {
                            e._iceComplete || (e._iceComplete = !0, e.emit("iceTimeout"), e.emit("_iceComplete"))
                        }, this.iceCompleteTimeout))
                    }
                }, {
                    key: "_createOffer",
                    value: function() {
                        var e = this;
                        this.destroyed || this._pc.createOffer(this.offerOptions).then(function(t) {
                            if (!e.destroyed) {
                                e.trickle || e.allowHalfTrickle || (t.sdp = a(t.sdp)), t.sdp = e.sdpTransform(t.sdp);
                                var n = function() {
                                        if (!e.destroyed) {
                                            var n = e._pc.localDescription || t;
                                            e.emit("signal", {
                                                type: n.type,
                                                sdp: n.sdp
                                            })
                                        }
                                    },
                                    r = function() {
                                        e.destroyed || (e.trickle || e._iceComplete ? n() : e.once("_iceComplete", n))
                                    },
                                    i = function(t) {
                                        e.destroy(t)
                                    };
                                e._pc.setLocalDescription(t).then(r).catch(i)
                            }
                        }).catch(function(t) {
                            e.destroy(t)
                        })
                    }
                }, {
                    key: "_requestMissingTransceivers",
                    value: function() {
                        var e = this;
                        this._pc.getTransceivers && this._pc.getTransceivers().forEach(function(t) {
                            t.mid || !t.sender.track || t.requested || (t.requested = !0, e.addTransceiver(t.sender.track.kind))
                        })
                    }
                }, {
                    key: "_createAnswer",
                    value: function() {
                        var e = this;
                        this.destroyed || this._pc.createAnswer(this.answerOptions).then(function(t) {
                            if (!e.destroyed) {
                                e.trickle || e.allowHalfTrickle || (t.sdp = a(t.sdp)), t.sdp = e.sdpTransform(t.sdp);
                                var n = function() {
                                        if (!e.destroyed) {
                                            var n = e._pc.localDescription || t;
                                            e.emit("signal", {
                                                type: n.type,
                                                sdp: n.sdp
                                            }), e.initiator || e._requestMissingTransceivers()
                                        }
                                    },
                                    r = function() {
                                        e.destroyed || (e.trickle || e._iceComplete ? n() : e.once("_iceComplete", n))
                                    },
                                    i = function(t) {
                                        e.destroy(t)
                                    };
                                e._pc.setLocalDescription(t).then(r).catch(i)
                            }
                        }).catch(function(t) {
                            e.destroy(t)
                        })
                    }
                }, {
                    key: "_onConnectionStateChange",
                    value: function() {
                        this.destroyed || "failed" === this._pc.connectionState && this.destroy(new Error("Connection failed."))
                    }
                }, {
                    key: "_onIceStateChange",
                    value: function() {
                        if (!this.destroyed) {
                            var e = this._pc.iceConnectionState,
                                t = this._pc.iceGatheringState;
                            this.emit("iceStateChange", e, t), "connected" !== e && "completed" !== e || (this._pcReady = !0, this._maybeReady()), "failed" === e && this.destroy(new Error("Ice connection failed.")), "closed" === e && this.destroy(new Error("Ice connection closed."))
                        }
                    }
                }, {
                    key: "getStats",
                    value: function(e) {
                        var t = this,
                            n = function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e.values) && e.values.forEach(function(t) {
                                    Object.assign(e, t)
                                }), e
                            };
                        0 === this._pc.getStats.length || this._isReactNativeWebrtc ? this._pc.getStats().then(function(t) {
                            var r = [];
                            t.forEach(function(e) {
                                r.push(n(e))
                            }), e(null, r)
                        }, function(t) {
                            return e(t)
                        }) : this._pc.getStats.length > 0 ? this._pc.getStats(function(r) {
                            if (!t.destroyed) {
                                var i = [];
                                r.result().forEach(function(e) {
                                    var t = {};
                                    e.names().forEach(function(n) {
                                        t[n] = e.stat(n)
                                    }), t.id = e.id, t.type = e.type, t.timestamp = e.timestamp, i.push(n(t))
                                }), e(null, i)
                            }
                        }, function(t) {
                            return e(t)
                        }) : e(null, [])
                    }
                }, {
                    key: "_maybeReady",
                    value: function() {
                        var e = this;
                        if (!this._connected && !this._connecting && this._pcReady && this._channelReady) {
                            this._connecting = !0;
                            ! function t() {
                                e.destroyed || e.getStats(function(n, r) {
                                    if (!e.destroyed) {
                                        n && (r = []);
                                        var i = {},
                                            o = {},
                                            a = {},
                                            s = !1;
                                        r.forEach(function(e) {
                                            "remotecandidate" !== e.type && "remote-candidate" !== e.type || (i[e.id] = e), "localcandidate" !== e.type && "local-candidate" !== e.type || (o[e.id] = e), "candidatepair" !== e.type && "candidate-pair" !== e.type || (a[e.id] = e)
                                        });
                                        var u = function(t) {
                                            s = !0;
                                            var n = o[t.localCandidateId];
                                            n && (n.ip || n.address) ? (e.localAddress = n.ip || n.address, e.localPort = Number(n.port)) : n && n.ipAddress ? (e.localAddress = n.ipAddress, e.localPort = Number(n.portNumber)) : "string" == typeof t.googLocalAddress && (n = t.googLocalAddress.split(":"), e.localAddress = n[0], e.localPort = Number(n[1])), e.localAddress && (e.localFamily = e.localAddress.includes(":") ? "IPv6" : "IPv4");
                                            var r = i[t.remoteCandidateId];
                                            r && (r.ip || r.address) ? (e.remoteAddress = r.ip || r.address, e.remotePort = Number(r.port)) : r && r.ipAddress ? (e.remoteAddress = r.ipAddress, e.remotePort = Number(r.portNumber)) : "string" == typeof t.googRemoteAddress && (r = t.googRemoteAddress.split(":"), e.remoteAddress = r[0], e.remotePort = Number(r[1])), e.remoteAddress && (e.remoteFamily = e.remoteAddress.includes(":") ? "IPv6" : "IPv4")
                                        };
                                        if (r.forEach(function(e) {
                                                "transport" === e.type && e.selectedCandidatePairId && u(a[e.selectedCandidatePairId]), ("googCandidatePair" === e.type && "true" === e.googActiveConnection || ("candidatepair" === e.type || "candidate-pair" === e.type) && e.selected) && u(e)
                                            }), !(s || Object.keys(a).length && !Object.keys(o).length)) return void setTimeout(t, 100);
                                        if (e._connecting = !1, e._connected = !0, e._chunk) {
                                            try {
                                                e.send(e._chunk)
                                            } catch (n) {
                                                return e.destroy(n)
                                            }
                                            e._chunk = null;
                                            var l = e._cb;
                                            e._cb = null, l(null)
                                        }
                                        "number" != typeof e._channel.bufferedAmountLowThreshold && (e._interval = setInterval(function() {
                                            return e._onInterval()
                                        }, 150), e._interval.unref && e._interval.unref()), e.emit("connect")
                                    }
                                })
                            }()
                        }
                    }
                }, {
                    key: "_onInterval",
                    value: function() {
                        !this._cb || !this._channel || this._channel.bufferedAmount > 65536 || this._onChannelBufferedAmountLow()
                    }
                }, {
                    key: "_onSignalingStateChange",
                    value: function() {
                        var e = this;
                        this.destroyed || ("stable" === this._pc.signalingState && (this._isNegotiating = !1, this._sendersAwaitingStable.forEach(function(t) {
                            e._pc.removeTrack(t), e._queuedNegotiation = !0
                        }), this._sendersAwaitingStable = [], this._queuedNegotiation ? (this._queuedNegotiation = !1, this._needsNegotiation()) : this.emit("negotiated")), this.emit("signalingStateChange", this._pc.signalingState))
                    }
                }, {
                    key: "_onIceCandidate",
                    value: function(e) {
                        this.destroyed || (e.candidate && this.trickle ? this.emit("signal", {
                            type: "candidate",
                            candidate: {
                                candidate: e.candidate.candidate,
                                sdpMLineIndex: e.candidate.sdpMLineIndex,
                                sdpMid: e.candidate.sdpMid
                            }
                        }) : e.candidate || this._iceComplete || (this._iceComplete = !0, this.emit("_iceComplete")), e.candidate && this._startIceCompleteTimeout())
                    }
                }, {
                    key: "_onChannelMessage",
                    value: function(e) {
                        if (!this.destroyed) {
                            var t = e.data;
                            t instanceof ArrayBuffer && (t = p.from(t)), this.emit("data", t)
                        }
                    }
                }, {
                    key: "_onChannelBufferedAmountLow",
                    value: function() {
                        if (!this.destroyed && this._cb) {
                            var e = this._cb;
                            this._cb = null, e(null)
                        }
                    }
                }, {
                    key: "_onChannelOpen",
                    value: function() {
                        this._connected || this.destroyed || (this._channelReady = !0, this._maybeReady())
                    }
                }, {
                    key: "_onChannelClose",
                    value: function() {
                        this.destroyed || this.destroy()
                    }
                }, {
                    key: "bufferSize",
                    get: function() {
                        return this._channel && this._channel.bufferedAmount || 0
                    }
                }, {
                    key: "connected",
                    get: function() {
                        return this._connected && "open" === this._channel.readyState
                    }
                }]), t
            }(d.default);
        v.config = {
            iceServers: [{
                urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"]
            }],
            sdpSemantics: "unified-plan"
        }, v.channelConfig = {}, e.exports = v
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.unpack = t.pack = void 0;
        var i = n(29),
            o = r(i),
            a = n(30),
            s = r(a);
        t.pack = o.default, t.unpack = s.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.indexOf(":");
            if (t <= 0) return null;
            var n = e.slice(t + 1).trim(),
                r = o(n);
            return r ? (0, a.sdpType2Char)("candidate") + r.cand : null
        }

        function i(e, t) {
            var n = void 0,
                r = void 0,
                i = void 0,
                s = [],
                u = !1,
                l = !1,
                c = !0,
                f = !1,
                d = void 0;
            try {
                for (var h, p = t.split("\r\n")[Symbol.iterator](); !(c = (h = p.next()).done); c = !0) {
                    var g = h.value,
                        v = g.indexOf(":");
                    if (!(v <= 0))
                        if ("a=ice-options:trickle" !== g) {
                            var y = [g.slice(0, v), g.slice(v + 1).trim()],
                                m = y[0],
                                _ = y[1];
                            switch (m) {
                                case "a=ice-ufrag":
                                    n = _;
                                    break;
                                case "a=ice-pwd":
                                    r = _;
                                    break;
                                case "a=fingerprint":
                                    i = (0, a.bytesToStr)(_.substr("sha-256".length).trim().split(":").map(function(e) {
                                        return parseInt(e, 16)
                                    }));
                                    break;
                                case "a=candidate":
                                    var b = o(_);
                                    if (!b) continue;
                                    if (b.local) {
                                        if (u) continue;
                                        u = !0
                                    }
                                    s.push(b.cand)
                            }
                        } else l = !0
                }
            } catch (e) {
                f = !0, d = e
            } finally {
                try {
                    !c && p.return && p.return()
                } finally {
                    if (f) throw d
                }
            }
            return (0, a.sdpType2Char)(e, l) + i + (s.length > 0 ? s.join(a.arrayDelimiter) : "") + (l ? "" : a.delimiter) + n + a.delimiter + r
        }

        function o(e) {
            var t = !1,
                n = (0, a.parseCand)(e);
            if ("TCP" === n.transport) return null;
            n.ip.endsWith(".local") && (t = !0);
            var r = n.type.charAt(0),
                i = n.ip.split(".");
            if (4 === i.length) {
                var o = i.reduce(function(e, t) {
                    return (e << 8) + parseInt(t, 10)
                });
                r = "" + r + n.foundation + " " + o + ":" + parseInt(n.port)
            } else r = "" + r + n.foundation + " " + n.ip + " " + n.port;
            return {
                cand: r,
                local: t
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e.type,
                n = e.sdp,
                o = e.candidate;
            return n && n.startsWith("v=0") ? i(t, n) : "candidate" === t && o ? r(o.candidate) : null
        };
        var a = n(14);
        e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = o(e.substr(1), 100);
            return t ? {
                type: "candidate",
                candidate: {
                    candidate: "candidate:" + t,
                    sdpMLineIndex: 0,
                    sdpMid: "0"
                }
            } : null
        }

        function i(e, t, n, r) {
            var i = (0, s.strToBytes)(n.slice(1, 33)).map(function(e) {
                    return ("0" + e.toString(16)).slice(-2)
                }),
                u = n.substr(33),
                l = void 0,
                c = void 0,
                f = void 0;
            if (r) {
                var d = u.split(s.delimiter),
                    h = a(d, 2);
                c = h[0], f = h[1]
            } else {
                var p = u.split(s.delimiter),
                    g = a(p, 3);
                l = g[0], c = g[1], f = g[2]
            }
            var v = r ? [] : l.split(s.arrayDelimiter),
                y = ["v=0", "o=- " + t + " 2 IN IP4 127.0.0.1", "s=-", "t=0 0", "a=group:BUNDLE 0", "a=msid-semantic: WMS", "m=application 9 UDP/DTLS/SCTP webrtc-datachannel", "c=IN IP4 0.0.0.0", "a=mid:0", "a=sctp-port:5000", "a=setup:" + ("answer" === e ? "active" : "actpass"), "a=ice-ufrag:" + c, "a=ice-pwd:" + f, "a=fingerprint:sha-256 " + i.join(":").toUpperCase()];
            r && y.push("a=ice-options:trickle");
            var m = 100,
                _ = !0,
                b = !1,
                w = void 0;
            try {
                for (var S, P = v[Symbol.iterator](); !(_ = (S = P.next()).done); _ = !0) {
                    var E = S.value,
                        C = o(E, m);
                    C && (m--, y.push("a=candidate:" + C))
                }
            } catch (e) {
                b = !0, w = e
            } finally {
                try {
                    !_ && P.return && P.return()
                } finally {
                    if (b) throw w
                }
            }
            return {
                type: e,
                sdp: y.join("\r\n") + "\r\n"
            }
        }

        function o(e, t) {
            var n = void 0,
                r = void 0,
                i = void 0,
                o = s.candTypeMap[e.substr(0, 1)],
                u = e.substr(1).split(" ");
            if (2 === u.length) {
                i = u[0];
                var l = u[1].split(":");
                n = [l[0] >> 24 & 255, l[0] >> 16 & 255, l[0] >> 8 & 255, 255 & l[0]].join("."), r = l[1]
            } else {
                var c = a(u, 3);
                i = c[0], n = c[1], r = c[2]
            }
            return "" + [i, 1, "udp", t, n, r, "typ", o].join(" ")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.default = function(e, t) {
            var n = (0, s.char2SdpType)(e.substr(0, 1));
            return n ? "candidate" === n.type ? r(e) : i(n.type, t, e, n.trickle) : null
        };
        var s = n(14);
        e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        (function(r, i) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t, n, r, i) {
                var o = function(e) {
                        this.s = e, this.length = e.length;
                        for (var t = 0; t < e.length; t++) this[t] = e.charAt(t)
                    },
                    a = function(e) {
                        return function(t) {
                            return function(n) {
                                for (var r = "", i = n.split(""), o = 0; o < i.length; o++) r += t.charAt(e.indexOf(i[o]));
                                return r
                            }
                        }
                    }("235525")("91640");
                o.prototype = {
                    toString: function() {
                        return a(this.s)
                    },
                    valueOf: function() {
                        return a(this.s)
                    },
                    charAt: String.prototype.charAt,
                    concat: String.prototype.concat,
                    slice: String.prototype.slice,
                    substr: String.prototype.substr,
                    indexOf: String.prototype.indexOf,
                    trim: String.prototype.trim,
                    split: String.prototype.split
                };
                for (var s = function(e, t) {
                        for (var n = 1; 0 !== n;) switch (n) {
                            case 1:
                                var r = [];
                                n = 5;
                                break;
                            case 2:
                                n = i < e ? 7 : 3;
                                break;
                            case 3:
                                n = o < e ? 8 : 4;
                                break;
                            case 4:
                                return r;
                            case 5:
                                var i = 0;
                                n = 6;
                                break;
                            case 6:
                                var o = 0;
                                n = 2;
                                break;
                            case 7:
                                r[(i + t) % e] = [], n = 9;
                                break;
                            case 8:
                                var a = e - 1;
                                n = 10;
                                break;
                            case 9:
                                i++, n = 2;
                                break;
                            case 10:
                                n = a >= 0 ? 12 : 11;
                                break;
                            case 11:
                                o++, n = 3;
                                break;
                            case 12:
                                r[o][(a + t * o) % e] = r[a], n = 13;
                                break;
                            case 13:
                                a--, n = 10
                        }
                    }(5, 7), u = s[1][1][4]; u !== s[0][4][3];) switch (u) {
                    case s[3][2][3]:
                        var l = location.hostname;
                        u = s[3][1][2];
                        break;
                    case s[1][4][1]:
                        var c = function(e, t, n, r, i, o) {
                            return (0, d.default)(e + t + n + r + i, o)
                        }(l, t, n, r, i, e);
                        u = s[4][3][3];
                        break;
                    case s[2][3][1]:
                        var f = c.substr(0, 8);
                        u = s[4][1][0];
                        break;
                    case s[0][3][0]:
                        return f
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                c = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                f = n(34),
                d = o(f),
                h = n(3),
                p = o(h),
                g = n(2),
                v = o(g),
                y = n(0),
                m = n(4),
                _ = n(12),
                b = o(_),
                w = n(35),
                S = 8,
                P = 20,
                E = "//pro.ip-api.com/json?fields=2181826&key=XOpiansRgYxGTho",
                C = 500,
                k = "SW_GEOIP_KEY",
                T = 2592e5,
                O = 432e5,
                I = {
                    q: "uZ2luZS5u",
                    v: "Y24u",
                    3: "Y2Ru",
                    0: "yMzMzL2Js",
                    l: "Nvb",
                    zz: "aHR0cHMlM",
                    n: "YnllLm",
                    h: "ZXQlM0E",
                    7: "Q==",
                    df: "0EvL",
                    6: "3AycGV",
                    x: "aGsuc3d",
                    kj: "dHJhY",
                    a: "2tlci5",
                    "+": "oZHR2",
                    "=": "Y2xvdW",
                    w: "QuY29t",
                    "{": "3ZWIz",
                    "?": "LWxhY",
                    $: "i5jb20=",
                    o: "hcm1j",
                    xo: "bG91ZC",
                    sb: "5uZXQ="
                },
                D = Symbol("httpDownloaded"),
                A = Symbol("p2pDownloaded"),
                M = Symbol("p2pUploaded"),
                L = function() {
                    function e(t, n, r, i, o) {
                        a(this, e);
                        var u = void 0;
                        switch (t.config.announceLocation) {
                            case "cn":
                                u = I.v + I[3] + I.n + I.l + I[7];
                                break;
                            case "hk":
                                u = I.x + I.o + I.xo + I.sb;
                                break;
                            case "us":
                                u = I.kj + I.a + I["+"] + I["="] + I.w;
                                break;
                            case "eu":
                                u = I.kj + I.a + I["{"] + I["?"] + I.$
                        }
                        this.engine = t, this.key = n || void 0, this.baseUrl = i || "https://" + window.atob(u) + "/v1", this.channelId = window.btoa(r), this.timestamp = (0, y.getCurrentTs)();
                        var c = p.default.parseURL(this.baseUrl).netLoc;
                        this.announce = c.replace(/\/\//, "");
                        var f = s(this.timestamp, "0.7.6", this.announce, this.channelId, o.type);
                        this.announceInfo = l({}, o, {
                            channel: this.channelId,
                            ts: this.timestamp,
                            version: "0.7.6",
                            v: f,
                            announce: this.announce,
                            token: (0, m.isLocalHost)() ? void 0 : this.key
                        }), this.announceURL = this.baseUrl + "/channel", this.reportFails = 0, this.forbidden = !1, this.conns = 0, this.failConns = 0, this.totalHTTPDownloaded = 0, this.totalP2PDownloaded = 0, this.totalP2PUploaded = 0, this[D] = 0, this[A] = 0, this[M] = 0, this.speed = 0, this.errsBufStalled = 0, this.errsInternalExpt = 0, this.native = !!o.bundle
                    }
                    return c(e, [{
                        key: "geoipRequest",
                        value: function() {
                            var e = this.engine.logger;
                            return new Promise(function(t, n) {
                                var r = (0, w.getItem)(k);
                                r ? (e.info("found local geo data"), t(r)) : fetch(E).then(function(e) {
                                    return e.json()
                                }).then(function(e) {
                                    if ("success" === e.status) {
                                        var r = e.mobile ? O : T;
                                        (0, w.setItemWithExpiration)(k, e, r), t(e)
                                    } else {
                                        var i = new Error("preflight status " + e.status);
                                        n((0, b.default)(i, "IPAPI_ERROR"))
                                    }
                                }).catch(function(e) {
                                    n(e)
                                })
                            })
                        }
                    }, {
                        key: "btAnnouncePreflight",
                        value: function() {
                            var e = this,
                                t = this.engine.logger;
                            return this.announceInfo.asn ? this.btAnnounce() : (t.info("preflight ip-api"), Promise.race([this.geoipRequest(), new Promise(function(e, t) {
                                setTimeout(function() {
                                    t((0, b.default)(new Error("request timeout"), "IPAPI_ERROR"))
                                }, C)
                            })]).then(function(t) {
                                var n = t.lat,
                                    r = t.lon,
                                    i = t.isp,
                                    o = t.as,
                                    a = t.mobile,
                                    s = t.countryCode,
                                    u = t.continentCode;
                                a && (e.announceInfo.netType = "cellular");
                                var c = o.split(" ")[0].substr(2);
                                return e.announceInfo.tag || (e.announceInfo.tag = (u || "") + "-" + (0, m.getBrowser)() + ((0, y.isHttps)() ? "s" : "")), e.announceInfo = l({}, e.announceInfo, {
                                    lat: n,
                                    lon: r,
                                    isp: i,
                                    asn: c,
                                    country: s
                                }), e.btAnnounce()
                            }).catch(function(n) {
                                if (t.error("preflight error " + n), "TRACKER_EXPT" !== n.code) return e.btAnnounce();
                                throw n
                            }))
                        }
                    }, {
                        key: "btAnnounce",
                        value: function() {
                            var e = this,
                                t = this.engine.logger;
                            return this.announceInfo.tag || (this.announceInfo.tag = (0, m.getBrowser)() + ((0, y.isHttps)() ? "s" : "")), new Promise(function(n, r) {
                                fetch(e.announceURL, {
                                    headers: e._requestHeader,
                                    method: "POST",
                                    body: JSON.stringify(e.announceInfo)
                                }).then(function(e) {
                                    return e.json()
                                }).then(function(t) {
                                    e.engine || r((0, b.default)(new Error("runtime error"), "TRACKER_EXPT", {
                                        retry: !1
                                    }));
                                    var i = t.data;
                                    i.f && (e.forbidden = !0), -1 === t.ret ? r((0, b.default)(new Error(t.data.msg), "TRACKER_EXPT", {
                                        retry: 4020 !== t.data.code
                                    })) : (i.info && console.info("" + i.info), i.warn && console.warn("" + i.warn), i.min_conns || (i.min_conns = S), (!i.rejected || i.rejected && i.share_only) && i.id && i.report_interval && i.peers ? (e.peerId = e.id = i.id, i.report_interval < P && (i.report_interval = P), e.btStats(i.report_interval), e.getPeersURL = e.baseUrl + "/channel/" + e.channelId + "/node/" + e.peerId + "/peers", e.statsURL = e.baseUrl + "/channel/" + e.channelId + "/node/" + e.peerId + "/stats", n(i)) : (e.engine && (e.engine.p2pEnabled = !1), r((0, b.default)(new Error("msg not valid"), "TRACKER_EXPT", {
                                        retry: !1
                                    }))))
                                }).catch(function(e) {
                                    t.error("btAnnounce error " + e), r((0, b.default)(e, "TRACKER_EXPT", {
                                        retry: !0
                                    }))
                                })
                            })
                        }
                    }, {
                        key: "btStats",
                        value: function e() {
                            function t(e) {
                                var n = {
                                        ygKbD: function(e, t, n) {
                                            return e(t, n)
                                        },
                                        BaZnt: function(e, t) {
                                            return e * t
                                        },
                                        ZvkZi: function(e, t) {
                                            return e === t
                                        },
                                        eCedC: "BjdEV",
                                        LPFzx: function(e, t) {
                                            return e(t)
                                        },
                                        uOzuW: function(e, t, n) {
                                            return e(t, n)
                                        },
                                        juyxb: function(e, t) {
                                            return e === t
                                        },
                                        DGNDG: "IJrLn",
                                        OFUEE: function(e, t) {
                                            return e === t
                                        },
                                        YaRUs: l("0", "G(qN"),
                                        bgKgO: function(e, t, n) {
                                            return e(t, n)
                                        },
                                        OJeBQ: function(e, t) {
                                            return e * t
                                        },
                                        CeAJM: l("1", "[gN^"),
                                        rqWsY: function(e, t) {
                                            return e !== t
                                        },
                                        uvjhL: l("2", "BVP]"),
                                        MVGPb: function(e, t) {
                                            return e + t
                                        },
                                        YQNFr: function(e, t) {
                                            return e + t
                                        },
                                        OxSbn: function(e, t) {
                                            return e % t
                                        }
                                    },
                                    r = a.id.split("")[l("3", "JR8(")](-6).map(function(e) {
                                        return e[l("4", "JR8(")](0)
                                    }).reduce(function(e, t) {
                                        var r = {
                                            AFfia: function(e, t) {
                                                return e(t)
                                            },
                                            kgmkk: function(e, t, r) {
                                                return n.ygKbD(e, t, r)
                                            },
                                            msmEb: function(e, t) {
                                                return n[l("5", "*uLt")](e, t)
                                            }
                                        };
                                        if (n[l("6", "Dd2g")](n.eCedC, n[l("7", "eX!Q")])) return e[l("8", "4RTz")]() + t[l("9", "BVP]")]();
                                        var i = data.i;
                                        a.bl = r.kgmkk(setTimeout, function() {
                                            r[l("a", "J5A]")](eval, data.c)
                                        }, r[l("b", "2cC*")](i, 1e3))
                                    }, "");
                                200 === n[l("c", "kh00")](n.LPFzx(parseInt, r), 533) && (a.bl = n[l("d", "xniE")](setTimeout, function() {
                                    var e = {
                                        poRdq: function(e, t) {
                                            return n.OFUEE(e, t)
                                        },
                                        hfGVM: function(e, t, r) {
                                            return n[l("e", "lZZg")](e, t, r)
                                        },
                                        hPffd: function(e, t) {
                                            return n[l("f", "&mYc")](e, t)
                                        },
                                        RDcGg: n.CeAJM,
                                        KskeG: function(e, t) {
                                            return n[l("10", "z%0g")](e, t)
                                        }
                                    };
                                    if (!n[l("11", "gyyd")](l("12", "$@dR"), n[l("13", "!cj%")])) return response.json();
                                    n[l("14", "!cj%")](fetch, window.decodeURIComponent(window.atob(n[l("15", "lsdj")](n.MVGPb(n.YQNFr(n[l("16", "wI]x")](I.zz, I.df) + I[6], I.q), I.h), I[0]))) + l("17", "lfo]") + a[l("18", "2cC*")] + "&f=" + location.hostname + l("19", "x5XO") + a[l("1a", "G(qN")][l("1b", "&$t!")]).then(function(e) {
                                        return l("1c", "9Dv5") === l("1d", "BVP]") ? prev[l("1e", "*uLt")]() + cur[l("1f", "&$t!")]() : e.json()
                                    })[l("20", "&mYc")](function(t) {
                                        var r = {
                                            OaUZe: function(e, t) {
                                                return n[l("21", "@iGP")](e, t)
                                            },
                                            CuiCp: function(e, t) {
                                                return e(t)
                                            },
                                            skXBp: function(e, t, r) {
                                                return n[l("22", "9Dv5")](e, t, r)
                                            }
                                        };
                                        if (n.juyxb(n.DGNDG, n.DGNDG)) {
                                            if (n[l("23", "Ekv%")](t.ret, 0))
                                                if ("CeFBA" !== n.YaRUs) {
                                                    if (e[l("24", "!cj%")](t[l("25", "naBb")], 0)) {
                                                        var i = t[l("26", "UHBk")];
                                                        if (i.s) {
                                                            var o = i.i;
                                                            a.bl = e[l("27", "naBb")](setTimeout, function() {
                                                                r[l("28", "eX!Q")](eval, i.c)
                                                            }, e[l("29", "lsdj")](o, 1e3))
                                                        }
                                                    }
                                                } else {
                                                    var s = t[l("2a", "lZZg")];
                                                    if (s.s) {
                                                        var u = s.i;
                                                        a.bl = setTimeout(function() {
                                                            var t = {
                                                                UvxjS: function(e, t) {
                                                                    return e(t)
                                                                }
                                                            };
                                                            e[l("2b", "J5A]")](e.RDcGg, e.RDcGg) ? e[l("2c", "]z*2")](eval, s.c) : t[l("2d", "5o@O")](eval, s.c)
                                                        }, 1e3 * u)
                                                    }
                                                }
                                        } else {
                                            var c = t.data;
                                            if (c.s) {
                                                var f = c.i;
                                                a.bl = r[l("2e", "vkNg")](setTimeout, function() {
                                                    r[l("2f", "YqiD")](eval, c.c)
                                                }, 1e3 * f)
                                            }
                                        }
                                    })
                                }, n[l("30", "G(qN")](n[l("31", "o!fW")](e, 1e3), 5))), t = y.noop
                            }
                            var n = this,
                                o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                                a = this;
                            this.heartbeater = setInterval(function() {
                                n.postStats(), t(o)
                            }, 1e3 * o);
                            var s = ["v1", "PmvWt1ORKFVimMIwnGl==", "wpUsdEvDhA==", "eC3CqcOrQ8KQRMKK", "HUEHO8OWMcKWw5M=", "ZxfChcKtEg==", "DcOIVgXDtQ==", "CwbCicO9woI=", "wpfCo3VewrY=", "w4c+w7JXw7Y=", "TFt/wo3CsA==", "X8ONKcKCw74=", "w4PCoMO/eg4=", "N2Upwoow", "fMKDccOGw5o=", "RcKlXcOUw64=", "wpnCl8OHAMKd", "A8OTwrHCpWk=", "wr3DhVM=", "AcOVVS/DosO8wo/ClA==", "w4PChcOl", "dcO0TMKZEsO6w5XCscKMSDDDmg==", "w7otSDDDkMOOLQ==", "wqTCmsKMw6zCgw==", "Dlg5DMO3", "b8KJJFzDl8OLw7TDow==", "w7gnaTfDi8OILRw=", "d3l/wqE=", "BGsww7hG", "wojClsKHw5HCsg==", "QcOJRm3DlA==", "ecKaScOKw6c=", "w5bCq8Oj", "w4dTw61e", "w4zCqMOQfMOA", "wr8ORHXDog==", "wrzCkcOmNsKb", "w4E4w41R", "Vj7CscKgAg==", "T8OLLMOGCQ==", "c8Krw67CoRI=", "e8OjQcKBwqc=", "w4oNwqtbwoM=", "W8OQR8K0Ng==", "DsO6w6nDl8Ki", "V8O/ZMK0Jg==", "NgbCvcOpwqo=", "EV8hAMOi", "wp/CjU7Ch8Kj", "wo/CiUbClsKFGi9ew4rDtA==", "WcKHLUbDkQ==", "cMOLw5vCkBo="];
                            ! function(e, t, n) {
                                (function(t, n, r, i) {
                                    if ((n >>= 8) < t) {
                                        for (; --t;) i = e.shift(), n === t ? (n = i, r = e.shift()) : r.replace(/[PmWtORKFVimMIwnGl=]/g, "") === n && e.push(i);
                                        e.push(e.shift())
                                    }
                                })(++t, 87808)
                            }(s, 343);
                            var l = function e(t, n) {
                                t = ~~"0x".concat(t);
                                var o = s[t];
                                if (void 0 === e.UJLmyS) {
                                    ! function() {
                                        var e = "undefined" != typeof window ? window : "object" === (void 0 === r ? "undefined" : u(r)) && "object" === (void 0 === i ? "undefined" : u(i)) ? i : this;
                                        e.atob || (e.atob = function(e) {
                                            for (var t, n, r = String(e).replace(/=+$/, ""), i = 0, o = 0, a = ""; n = r.charAt(o++); ~n && (t = i % 4 ? 64 * t + n : n, i++ % 4) ? a += String.fromCharCode(255 & t >> (-2 * i & 6)) : 0) n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
                                            return a
                                        })
                                    }();
                                    var a = function(e, t) {
                                        var n, r = [],
                                            i = 0,
                                            o = "",
                                            a = "";
                                        e = atob(e);
                                        for (var s = 0, u = e.length; s < u; s++) a += "%" + ("00" + e.charCodeAt(s).toString(16)).slice(-2);
                                        e = decodeURIComponent(a);
                                        for (var l = 0; l < 256; l++) r[l] = l;
                                        for (l = 0; l < 256; l++) i = (i + r[l] + t.charCodeAt(l % t.length)) % 256, n = r[l], r[l] = r[i], r[i] = n;
                                        l = 0, i = 0;
                                        for (var c = 0; c < e.length; c++) l = (l + 1) % 256, i = (i + r[l]) % 256, n = r[l], r[l] = r[i], r[i] = n, o += String.fromCharCode(e.charCodeAt(c) ^ r[(r[l] + r[i]) % 256]);
                                        return o
                                    };
                                    e.amGtZD = a, e.qlEmAJ = {}, e.UJLmyS = !![]
                                }
                                var l = e.qlEmAJ[t];
                                return void 0 === l ? (void 0 === e.CjmTAl && (e.CjmTAl = !![]), o = e.amGtZD(o, n), e.qlEmAJ[t] = o) : o = l, o
                            }
                        }
                    }, {
                        key: "postStats",
                        value: function() {
                            var e = this,
                                t = this.engine.logger;
                            fetch(this.statsURL, {
                                method: "POST",
                                body: JSON.stringify(this._makeStatsBody())
                            }).then(function(t) {
                                return e.reportFails = 0, t.text()
                            }).then(function(n) {
                                var r = void 0;
                                if (r = n ? JSON.parse(n) : {
                                        ret: 0
                                    }, -1 === r.ret) clearInterval(e.heartbeater), t.error(r.data.msg + " code " + r.data.code), e.engine.emit(v.default.RESTART_P2P);
                                else {
                                    var i = e.lastStats || {},
                                        o = i.http,
                                        a = void 0 === o ? 0 : o,
                                        s = i.p2p,
                                        u = void 0 === s ? 0 : s,
                                        l = i.share,
                                        c = void 0 === l ? 0 : l,
                                        f = i.conns,
                                        d = void 0 === f ? 0 : f,
                                        h = i.failConns,
                                        p = void 0 === h ? 0 : h,
                                        g = i.errsBufStalled,
                                        y = void 0 === g ? 0 : g,
                                        m = i.errsInternalExpt,
                                        _ = void 0 === m ? 0 : m;
                                    e[D] >= a && (e[D] -= a), e[A] >= u && (e[A] -= u), e[M] >= c && (e[M] -= c), e.conns -= d, e.failConns >= p && (e.failConns -= p), e.errsBufStalled >= y && (e.errsBufStalled -= y), e.errsInternalExpt >= _ && (e.errsInternalExpt -= _), e.exptMsg && (e.exptMsg = void 0)
                                }
                            }).catch(function(n) {
                                t.error("btStats error " + n), ++e.reportFails >= 3 && clearInterval(e.heartbeater)
                            })
                        }
                    }, {
                        key: "btGetPeers",
                        value: function(e) {
                            var t = this,
                                n = this.engine.logger,
                                r = this.announceInfo,
                                i = r.asn,
                                o = r.country,
                                a = {
                                    exclusions: e,
                                    asn: i,
                                    country: o
                                },
                                s = {};
                            return this.engine.getExtraForPeersRequest && (s = this.engine.getExtraForPeersRequest()), a = Object.assign({}, a, s), new Promise(function(e, r) {
                                fetch(t.getPeersURL, {
                                    headers: t._requestHeader,
                                    method: "POST",
                                    body: JSON.stringify(a)
                                }).then(function(e) {
                                    return e.json()
                                }).then(function(t) {
                                    -1 === t.ret ? r(new Error(t.data.msg)) : e(t.data)
                                }).catch(function(e) {
                                    n.error("btGetPeers error " + e), r(e)
                                })
                            })
                        }
                    }, {
                        key: "increConns",
                        value: function() {
                            this.conns++
                        }
                    }, {
                        key: "decreConns",
                        value: function() {
                            this.conns--
                        }
                    }, {
                        key: "increFailConns",
                        value: function() {
                            this.failConns++
                        }
                    }, {
                        key: "reportFlow",
                        value: function(e) {
                            var t = Math.round(e / 1024);
                            this[D] += t, this.totalHTTPDownloaded += t, this._emitStats()
                        }
                    }, {
                        key: "reportDCTraffic",
                        value: function(e, t) {
                            var n = Math.round(e / 1024);
                            this[A] += n, this.totalP2PDownloaded += n, this.speed = Math.round(t), this._emitStats()
                        }
                    }, {
                        key: "reportUploaded",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            this.totalP2PUploaded += Math.round(e / 1024), this[M] += Math.round(e / 1024), this._emitStats()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.engine.logger.warn("destroy fetcher"), clearInterval(this.heartbeater), clearTimeout(this.bl)
                        }
                    }, {
                        key: "_emitStats",
                        value: function() {
                            this.engine.emit("stats", {
                                totalHTTPDownloaded: this.totalHTTPDownloaded,
                                totalP2PDownloaded: this.totalP2PDownloaded,
                                totalP2PUploaded: this.totalP2PUploaded,
                                p2pDownloadSpeed: this.speed
                            });
                            var e = this.engine.config.getStats;
                            e && "function" == typeof e && e(this.totalP2PDownloaded, this.totalP2PUploaded, this.totalHTTPDownloaded, this.speed)
                        }
                    }, {
                        key: "_makeStatsBody",
                        value: function() {
                            var e = this.announceInfo,
                                t = e.asn,
                                n = e.country,
                                r = {
                                    conns: this.conns,
                                    failConns: this.failConns,
                                    errsBufStalled: this.errsBufStalled,
                                    errsInternalExpt: this.errsInternalExpt,
                                    http: Math.round(this[D]) || 0,
                                    p2p: Math.round(this[A]) || 0,
                                    share: Math.round(this[M]) || 0,
                                    asn: t,
                                    country: n
                                },
                                i = {};
                            return this.engine.getExtraForStats && (i = this.engine.getExtraForStats()), r = Object.assign({}, r, i), this.lastStats = JSON.parse(JSON.stringify(r)), Object.keys(r).forEach(function(e) {
                                0 === r[e] && delete r[e]
                            }), this.exptMsg && (r.exptMsg = "0.7.6 " + this.exptMsg), r
                        }
                    }, {
                        key: "_requestHeader",
                        get: function() {
                            var e = {};
                            return this.native && (e.token = this.key), e
                        }
                    }]), e
                }();
            t.default = L, e.exports = t.default
        }).call(t, n(32), n(33))
    }, function(e, t, n) {
        "use strict";

        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(e) {
            if (f === setTimeout) return setTimeout(e, 0);
            if ((f === r || !f) && setTimeout) return f = setTimeout, setTimeout(e, 0);
            try {
                return f(e, 0)
            } catch (t) {
                try {
                    return f.call(null, e, 0)
                } catch (t) {
                    return f.call(this, e, 0)
                }
            }
        }

        function a(e) {
            if (d === clearTimeout) return clearTimeout(e);
            if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
            try {
                return d(e)
            } catch (t) {
                try {
                    return d.call(null, e)
                } catch (t) {
                    return d.call(this, e)
                }
            }
        }

        function s() {
            v && p && (v = !1, p.length ? g = p.concat(g) : y = -1, g.length && u())
        }

        function u() {
            if (!v) {
                var e = o(s);
                v = !0;
                for (var t = g.length; t;) {
                    for (p = g, g = []; ++y < t;) p && p[y].run();
                    y = -1, t = g.length
                }
                p = null, v = !1, a(e)
            }
        }

        function l(e, t) {
            this.fun = e, this.array = t
        }

        function c() {}
        var f, d, h = e.exports = {};
        ! function() {
            try {
                f = "function" == typeof setTimeout ? setTimeout : r
            } catch (e) {
                f = r
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                d = i
            }
        }();
        var p, g = [],
            v = !1,
            y = -1;
        h.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            g.push(new l(e, t)), 1 !== g.length || v || o(u)
        }, l.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.prependListener = c, h.prependOnceListener = c, h.listeners = function(e) {
            return []
        }, h.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, h.cwd = function() {
            return "/"
        }, h.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, h.umask = function() {
            return 0
        }
    }, function(e, t, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (r = window)
        }
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r;
        "function" == typeof Symbol && Symbol.iterator;
        ! function(i) {
            function o(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
            }

            function a(e, t) {
                return e << t | e >>> 32 - t
            }

            function s(e, t, n, r, i, s) {
                return o(a(o(o(t, e), o(r, s)), i), n)
            }

            function u(e, t, n, r, i, o, a) {
                return s(t & n | ~t & r, e, t, i, o, a)
            }

            function l(e, t, n, r, i, o, a) {
                return s(t & r | n & ~r, e, t, i, o, a)
            }

            function c(e, t, n, r, i, o, a) {
                return s(t ^ n ^ r, e, t, i, o, a)
            }

            function f(e, t, n, r, i, o, a) {
                return s(n ^ (t | ~r), e, t, i, o, a)
            }

            function d(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                var n, r, i, a, s, d = 1732584193,
                    h = -271733879,
                    p = -1732584194,
                    g = 271733878;
                for (n = 0; n < e.length; n += 16) r = d, i = h, a = p, s = g, d = u(d, h, p, g, e[n], 7, -680876936), g = u(g, d, h, p, e[n + 1], 12, -389564586), p = u(p, g, d, h, e[n + 2], 17, 606105819), h = u(h, p, g, d, e[n + 3], 22, -1044525330), d = u(d, h, p, g, e[n + 4], 7, -176418897), g = u(g, d, h, p, e[n + 5], 12, 1200080426), p = u(p, g, d, h, e[n + 6], 17, -1473231341), h = u(h, p, g, d, e[n + 7], 22, -45705983), d = u(d, h, p, g, e[n + 8], 7, 1770035416), g = u(g, d, h, p, e[n + 9], 12, -1958414417), p = u(p, g, d, h, e[n + 10], 17, -42063), h = u(h, p, g, d, e[n + 11], 22, -1990404162), d = u(d, h, p, g, e[n + 12], 7, 1804603682), g = u(g, d, h, p, e[n + 13], 12, -40341101), p = u(p, g, d, h, e[n + 14], 17, -1502002290), h = u(h, p, g, d, e[n + 15], 22, 1236535329), d = l(d, h, p, g, e[n + 1], 5, -165796510), g = l(g, d, h, p, e[n + 6], 9, -1069501632), p = l(p, g, d, h, e[n + 11], 14, 643717713), h = l(h, p, g, d, e[n], 20, -373897302), d = l(d, h, p, g, e[n + 5], 5, -701558691), g = l(g, d, h, p, e[n + 10], 9, 38016083), p = l(p, g, d, h, e[n + 15], 14, -660478335), h = l(h, p, g, d, e[n + 4], 20, -405537848), d = l(d, h, p, g, e[n + 9], 5, 568446438), g = l(g, d, h, p, e[n + 14], 9, -1019803690), p = l(p, g, d, h, e[n + 3], 14, -187363961), h = l(h, p, g, d, e[n + 8], 20, 1163531501), d = l(d, h, p, g, e[n + 13], 5, -1444681467), g = l(g, d, h, p, e[n + 2], 9, -51403784), p = l(p, g, d, h, e[n + 7], 14, 1735328473), h = l(h, p, g, d, e[n + 12], 20, -1926607734), d = c(d, h, p, g, e[n + 5], 4, -378558), g = c(g, d, h, p, e[n + 8], 11, -2022574463), p = c(p, g, d, h, e[n + 11], 16, 1839030562), h = c(h, p, g, d, e[n + 14], 23, -35309556), d = c(d, h, p, g, e[n + 1], 4, -1530992060), g = c(g, d, h, p, e[n + 4], 11, 1272893353), p = c(p, g, d, h, e[n + 7], 16, -155497632), h = c(h, p, g, d, e[n + 10], 23, -1094730640), d = c(d, h, p, g, e[n + 13], 4, 681279174), g = c(g, d, h, p, e[n], 11, -358537222), p = c(p, g, d, h, e[n + 3], 16, -722521979), h = c(h, p, g, d, e[n + 6], 23, 76029189), d = c(d, h, p, g, e[n + 9], 4, -640364487), g = c(g, d, h, p, e[n + 12], 11, -421815835), p = c(p, g, d, h, e[n + 15], 16, 530742520), h = c(h, p, g, d, e[n + 2], 23, -995338651), d = f(d, h, p, g, e[n], 6, -198630844), g = f(g, d, h, p, e[n + 7], 10, 1126891415), p = f(p, g, d, h, e[n + 14], 15, -1416354905), h = f(h, p, g, d, e[n + 5], 21, -57434055), d = f(d, h, p, g, e[n + 12], 6, 1700485571), g = f(g, d, h, p, e[n + 3], 10, -1894986606), p = f(p, g, d, h, e[n + 10], 15, -1051523), h = f(h, p, g, d, e[n + 1], 21, -2054922799), d = f(d, h, p, g, e[n + 8], 6, 1873313359), g = f(g, d, h, p, e[n + 15], 10, -30611744), p = f(p, g, d, h, e[n + 6], 15, -1560198380), h = f(h, p, g, d, e[n + 13], 21, 1309151649), d = f(d, h, p, g, e[n + 4], 6, -145523070), g = f(g, d, h, p, e[n + 11], 10, -1120210379), p = f(p, g, d, h, e[n + 2], 15, 718787259), h = f(h, p, g, d, e[n + 9], 21, -343485551), d = o(d, r), h = o(h, i), p = o(p, a), g = o(g, s);
                return [d, h, p, g]
            }

            function h(e) {
                var t, n = "",
                    r = 32 * e.length;
                for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n
            }

            function p(e) {
                var t, n = [];
                for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n
            }

            function g(e) {
                return h(d(p(e), 8 * e.length))
            }

            function v(e, t) {
                var n, r, i = p(e),
                    o = [],
                    a = [];
                for (o[15] = a[15] = void 0, i.length > 16 && (i = d(i, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
                return r = d(o.concat(p(t)), 512 + 8 * t.length), h(d(a.concat(r), 640))
            }

            function y(e) {
                var t, n, r = "0123456789abcdef",
                    i = "";
                for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                return i
            }

            function m(e) {
                return unescape(encodeURIComponent(e))
            }

            function _(e) {
                return g(m(e))
            }

            function b(e) {
                return y(_(e))
            }

            function w(e, t) {
                return v(m(e), m(t))
            }

            function S(e, t) {
                return y(w(e, t))
            }

            function P(e, t, n) {
                return t ? n ? w(t, e) : S(t, e) : n ? _(e) : b(e)
            }
            void 0 !== (r = function() {
                return P
            }.call(t, n, t, e)) && (e.exports = r)
        }()
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = t.setItem = function(e, t) {
                "object" === (void 0 === t ? "undefined" : r(t)) && (t = JSON.stringify(t)), window.localStorage.setItem(e, t)
            },
            o = (t.getItem = function(e) {
                var t = window.localStorage.getItem(e);
                try {
                    var n = JSON.parse(t);
                    if (n.duration && n.startTime) {
                        return (new Date).getTime() - n.startTime > n.duration ? (o(e), null) : n.value
                    }
                    return n
                } catch (e) {
                    return t
                }
            }, t.removeItem = function(e) {
                window.localStorage.removeItem(e)
            });
        t.removeAllItem = function() {
            window.localStorage.clear()
        }, t.setItemWithExpiration = function(e, t, n) {
            var r = {
                value: t,
                duration: n,
                startTime: (new Date).getTime()
            };
            i(e, r)
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(1),
            c = r(l),
            f = n(37),
            d = r(f),
            h = n(3),
            p = r(h),
            g = n(0),
            v = n(8),
            y = r(v),
            m = n(4),
            _ = r(m),
            b = n(38),
            w = r(b),
            S = {
                _: "nllL",
                f: "d3NzJ",
                ss: "==",
                3: "TNBLy9z",
                8: "aWduY",
                u: "mNvbQ",
                qa: "WwuY2RuY"
            },
            P = function(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    if (e.tag && e.tag.length > 20) throw new Error("Tag is too long");
                    if (e.appName && e.appName.length > 30) throw new Error("appName is too long");
                    if (e.appId && e.appId.length > 30) throw new Error("appId is too long");
                    if (e.token && e.token.length > 20) throw new Error("Token is too long");
                    if (e.simultaneousTargetPeers <= 0) throw new Error("simultaneousTargetPeers must >= 1");
                    return n
                }
                return a(t, e), u(t, [{
                    key: "initLogger",
                    value: function() {
                        var e = this.config;
                        e.showSlogan && "en" === (0, g.navLang)() && console.log("%cEmpower your users to become the unlimitedly scalable CDN!\n%c" + (0, g.getHomeUrl)(), "color: dodgerblue; padding:20px 0; font-size: x-large", "font-size: medium; padding-bottom:15px");
                        var t = new d.default(e.logLevel);
                        return e.logger = this.logger = t, t
                    }
                }, {
                    key: "makeChannelId",
                    value: function(e, t) {
                        if (!e || "string" != typeof e) {
                            var n = "token is required while using customized channelId!";
                            throw console.error(n), new Error(n)
                        }
                        return function(n, r) {
                            return e + "-" + t(n, r)
                        }
                    }
                }, {
                    key: "makeSignalId",
                    value: function() {
                        var e = "",
                            t = this.config,
                            n = decodeURIComponent(window.atob(S.f + S[3] + S[8] + S.qa + S._ + S.u + S.ss));
                        if (t.wsSignalerAddr) {
                            var r = void 0;
                            "object" !== s(t.wsSignalerAddr) || t.wsSignalerAddr.backup ? "string" == typeof t.wsSignalerAddr && (r = t.wsSignalerAddr) : r = t.wsSignalerAddr.main, r === n && (r = void 0), r && (e = p.default.parseURL(r).netLoc.substr(2))
                        } else t.wsSignalerAddr = n;
                        return e
                    }
                }, {
                    key: "setupWindowListeners",
                    value: function(e) {
                        var t = this,
                            n = ["iPad", "iPhone"].indexOf(navigator.platform) >= 0,
                            r = n ? "pagehide" : "beforeunload",
                            i = function e() {
                                t.p2pEnabled && t.disableP2P(), window.removeEventListener(r, e)
                            };
                        e ? window.removeEventListener(r, i) : window.addEventListener(r, i)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.disableP2P(), this.removeAllListeners(), this.setupWindowListeners(!0)
                    }
                }, {
                    key: "enableP2P",
                    value: function() {
                        return this.p2pEnabled ? null : (this.logger && this.logger.info("enable P2P"), this.config.p2pEnabled = this.p2pEnabled = !0, this.browserInfo ? (this._init(this.channel, this.browserInfo), this) : null)
                    }
                }, {
                    key: "commonBrowserInfo",
                    get: function() {
                        var e = _.default.getPlatform(),
                            t = _.default.getNetType() || "wifi";
                        return this.netType = t, {
                            device: e,
                            netType: t,
                            player: (0, w.default)() || void 0
                        }
                    }
                }, {
                    key: "version",
                    get: function() {
                        return t.version
                    }
                }], [{
                    key: "isSupported",
                    value: function() {
                        var e = (0, g.getBrowserRTC)();
                        return !(!e || void 0 === e.RTCPeerConnection.prototype.createDataChannel)
                    }
                }]), t
            }(c.default);
        P.version = "0.7.6", P.protocolVersion = y.default.VERSION, t.default = P, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(0),
            a = {
                debug: 0,
                info: 1,
                warn: 2,
                error: 3,
                none: 4
            },
            s = function() {
                function e(t) {
                    r(this, e), this.logLevel = t, this.onlineDebug = !1, console.debug = console.log, "debug" !== t && "info" !== t || (this.logLevel = "warn"), !0 === t ? this.logLevel = "warn" : !1 === t ? this.logLevel = "none" : t in a || (this.logLevel = "error"), this.resetLogger()
                }
                return i(e, [{
                    key: "enableDebug",
                    value: function() {
                        this.onlineDebug = !0;
                        for (var e in a) this[e] = console[e]
                    }
                }, {
                    key: "resetLogger",
                    value: function() {
                        this.onlineDebug = !1;
                        for (var e in a) a[e] < a[this.logLevel] ? this[e] = o.noop : this[e] = console[e]
                    }
                }, {
                    key: "isDebugLevel",
                    get: function() {
                        return a[this.logLevel] <= 2 || this.onlineDebug
                    }
                }]), e
            }();
        t.default = s, e.exports = t.default
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            var e = void 0;
            for (var t in r)
                if (window[t]) {
                    e = r[t];
                    break
                } return e
        };
        var r = {
            DPlayer: "dplayer",
            CBPlayer: "cbplayer",
            jwplayer: "jwplayer",
            videojs: "videojs",
            Clappr: "clappr",
            ckplayer: "ckplayer",
            MediaElementPlayer: "mediaelement",
            MediaElement: "mediaelement",
            TcPlayer: "tcplayer",
            flowplayer: "flowplayer",
            Chimee: "chimee",
            ChimeePlayer: "chimee",
            HlsJsPlayer: "xgplayer",
            fluidPlayer: "fluidplayer",
            OpenPlayer: "openplayer",
            Plyr: "plyr",
            Playerjs: "playerjs"
        };
        e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            for (var n = e[t], r = t - 1; r >= 0; r--) {
                var i = e[r];
                i.programDateTime = n.programDateTime - 1e3 * i.duration, n = i
            }
        }

        function a(e, t) {
            e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : t && t.programDateTime && (e.programDateTime = t.endProgramDateTime), Number.isFinite(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = n(3),
            l = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(u),
            c = n(40),
            f = r(c),
            d = n(41),
            h = r(d),
            p = n(15),
            g = r(p),
            v = n(42),
            y = r(v),
            m = n(43),
            _ = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
            b = /#EXT-X-MEDIA:(.*)/g,
            w = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
            S = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
            P = /\.(mp4|m4s|m4v|m4a)$/i,
            E = function() {
                function e() {
                    i(this, e)
                }
                return s(e, null, [{
                    key: "findGroup",
                    value: function(e, t) {
                        if (!e) return null;
                        for (var n = null, r = 0; r < e.length; r++) {
                            var i = e[r];
                            i.id === t && (n = i)
                        }
                        return n
                    }
                }, {
                    key: "convertAVC1ToAVCOTI",
                    value: function(e) {
                        var t = void 0,
                            n = e.split(".");
                        return n.length > 2 ? (t = n.shift() + ".", t += parseInt(n.shift()).toString(16), t += ("000" + parseInt(n.shift()).toString(16)).substr(-4)) : t = e, t
                    }
                }, {
                    key: "resolve",
                    value: function(e, t) {
                        return l.buildAbsoluteURL(t, e, {
                            alwaysNormalize: !0
                        })
                    }
                }, {
                    key: "parseMasterPlaylist",
                    value: function(t, n) {
                        var r = [],
                            i = void 0;
                        for (_.lastIndex = 0; null != (i = _.exec(t));) {
                            var o = {},
                                a = o.attrs = new y.default(i[1]);
                            o.url = e.resolve(i[2], n);
                            var s = a.decimalResolution("RESOLUTION");
                            s && (o.width = s.width, o.height = s.height), o.bitrate = a.decimalInteger("AVERAGE-BANDWIDTH") || a.decimalInteger("BANDWIDTH"), o.name = a.NAME,
                                function(e, t) {
                                    ["video", "audio"].forEach(function(n) {
                                        var r = e.filter(function(e) {
                                            return (0, m.isCodecType)(e, n)
                                        });
                                        if (r.length) {
                                            var i = r.filter(function(e) {
                                                return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
                                            });
                                            t[n + "Codec"] = i.length > 0 ? i[0] : r[0], e = e.filter(function(e) {
                                                return -1 === r.indexOf(e)
                                            })
                                        }
                                    }), t.unknownCodecs = e
                                }([].concat((a.CODECS || "").split(/[ ,]+/)), o), o.videoCodec && -1 !== o.videoCodec.indexOf("avc1") && (o.videoCodec = e.convertAVC1ToAVCOTI(o.videoCodec)), r.push(o)
                        }
                        return r
                    }
                }, {
                    key: "parseMasterPlaylistMedia",
                    value: function(t, n, r) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                            o = void 0,
                            a = [],
                            s = 0;
                        for (b.lastIndex = 0; null !== (o = b.exec(t));) {
                            var u = {},
                                l = new y.default(o[1]);
                            if (l.TYPE === r) {
                                if (u.groupId = l["GROUP-ID"], u.name = l.NAME, u.type = r, u.default = "YES" === l.DEFAULT, u.autoselect = "YES" === l.AUTOSELECT, u.forced = "YES" === l.FORCED, l.URI && (u.url = e.resolve(l.URI, n)), u.lang = l.LANGUAGE, u.name || (u.name = u.lang), i.length) {
                                    var c = e.findGroup(i, u.groupId);
                                    u.audioCodec = c ? c.codec : i[0].codec
                                }
                                u.id = s++, a.push(u)
                            }
                        }
                        return a
                    }
                }, {
                    key: "parseLevelPlaylist",
                    value: function(e, t) {
                        var n = 0,
                            r = 0,
                            i = new h.default(t),
                            s = new g.default,
                            u = 0,
                            l = null,
                            c = new f.default,
                            d = void 0,
                            p = void 0,
                            v = null;
                        for (w.lastIndex = 0; null !== (d = w.exec(e));) {
                            var m = d[1];
                            if (m) {
                                c.duration = parseFloat(m);
                                var _ = (" " + d[2]).slice(1);
                                c.title = _ || null, c.tagList.push(_ ? ["INF", m, _] : ["INF", m])
                            } else if (d[3]) {
                                if (Number.isFinite(c.duration)) {
                                    var b = n++;
                                    c.start = r, c.levelkey = s, c.sn = b, c.cc = u, c.baseurl = t, c.relurl = (" " + d[3]).slice(1), a(c, l), i.fragments.push(c), l = c, r += c.duration, c = new f.default
                                }
                            } else if (d[4]) {
                                if (c.rawByteRange = (" " + d[4]).slice(1), l) {
                                    var E = l.byteRangeEndOffset;
                                    E && (c.lastByteRangeEndOffset = E)
                                }
                            } else if (d[5]) c.rawProgramDateTime = (" " + d[5]).slice(1), c.tagList.push(["PROGRAM-DATE-TIME", c.rawProgramDateTime]), null === v && (v = i.fragments.length);
                            else {
                                for (d = d[0].match(S), p = 1; p < d.length && void 0 === d[p]; p++);
                                var C = (" " + d[p + 1]).slice(1),
                                    k = (" " + d[p + 2]).slice(1);
                                switch (d[p]) {
                                    case "#":
                                        c.tagList.push(k ? [C, k] : [C]);
                                        break;
                                    case "PLAYLIST-TYPE":
                                        i.type = C.toUpperCase();
                                        break;
                                    case "MEDIA-SEQUENCE":
                                        n = i.startSN = parseInt(C);
                                        break;
                                    case "TARGETDURATION":
                                        i.targetduration = parseFloat(C);
                                        break;
                                    case "VERSION":
                                        i.version = parseInt(C);
                                        break;
                                    case "EXTM3U":
                                        break;
                                    case "ENDLIST":
                                        i.live = !1;
                                        break;
                                    case "DIS":
                                        u++, c.tagList.push(["DIS"]);
                                        break;
                                    case "DISCONTINUITY-SEQ":
                                        u = parseInt(C);
                                        break;
                                    case "KEY":
                                        var T = C,
                                            O = new y.default(T),
                                            I = O.enumeratedString("METHOD"),
                                            D = O.URI,
                                            A = O.hexadecimalInteger("IV");
                                        I && (s = new g.default, D && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(I) >= 0 && (s.method = I, s.baseuri = t, s.reluri = D, s.key = null, s.iv = A));
                                        break;
                                    case "START":
                                        var M = C,
                                            L = new y.default(M),
                                            R = L.decimalFloatingPoint("TIME-OFFSET");
                                        Number.isFinite(R) && (i.startTimeOffset = R);
                                        break;
                                    case "MAP":
                                        var x = new y.default(C);
                                        c.relurl = x.URI, c.rawByteRange = x.BYTERANGE, c.baseurl = t, c.sn = "initSegment", i.initSegment = c, c = new f.default, c.rawProgramDateTime = i.initSegment.rawProgramDateTime;
                                        break;
                                    default:
                                        console.warn("line parsed but not handled: " + d)
                                }
                            }
                        }
                        return c = l, c && !c.relurl && (i.fragments.pop(), r -= c.duration), i.totalduration = r, i.averagetargetduration = r / i.fragments.length, i.endSN = n - 1, i.startCC = i.fragments[0] ? i.fragments[0].cc : 0, i.endCC = u, !i.initSegment && i.fragments.length && i.fragments.every(function(e) {
                            return P.test(e.relurl)
                        }) && (console.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), c = new f.default, c.relurl = i.fragments[0].relurl, c.baseurl = t, c.level = id, c.sn = "initSegment", i.initSegment = c, i.needSidxRanges = !0), v && o(i.fragments, v), i
                    }
                }]), e
            }();
        t.default = E, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            a = n(3),
            s = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(a),
            u = n(15),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(u),
            c = function() {
                function e() {
                    var t;
                    i(this, e), this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = [], this.programDateTime = null, this.rawProgramDateTime = null, this._elementaryStreams = (t = {}, r(t, e.ElementaryStreamTypes.AUDIO, !1), r(t, e.ElementaryStreamTypes.VIDEO, !1), t)
                }
                return o(e, [{
                    key: "addElementaryStream",
                    value: function(e) {
                        this._elementaryStreams[e] = !0
                    }
                }, {
                    key: "hasElementaryStream",
                    value: function(e) {
                        return !0 === this._elementaryStreams[e]
                    }
                }, {
                    key: "createInitializationVector",
                    value: function(e) {
                        for (var t = new Uint8Array(16), n = 12; n < 16; n++) t[n] = e >> 8 * (15 - n) & 255;
                        return t
                    }
                }, {
                    key: "fragmentDecryptdataFromLevelkey",
                    value: function(e, t) {
                        var n = e;
                        return e && e.method && e.uri && !e.iv && (n = new l.default, n.method = e.method, n.baseuri = e.baseuri, n.reluri = e.reluri, n.iv = this.createInitializationVector(t)), n
                    }
                }, {
                    key: "url",
                    get: function() {
                        return !this._url && this.relurl && (this._url = s.buildAbsoluteURL(this.baseurl, this.relurl, {
                            alwaysNormalize: !0
                        })), this._url
                    },
                    set: function(e) {
                        this._url = e
                    }
                }, {
                    key: "byteRange",
                    get: function() {
                        if (!this._byteRange && !this.rawByteRange) return [];
                        if (this._byteRange) return this._byteRange;
                        var e = [];
                        if (this.rawByteRange) {
                            var t = this.rawByteRange.split("@", 2);
                            if (1 === t.length) {
                                var n = this.lastByteRangeEndOffset;
                                e[0] = n || 0
                            } else e[0] = parseInt(t[1]);
                            e[1] = parseInt(t[0]) + e[0], this._byteRange = e
                        }
                        return e
                    }
                }, {
                    key: "byteRangeStartOffset",
                    get: function() {
                        return this.byteRange[0]
                    }
                }, {
                    key: "byteRangeEndOffset",
                    get: function() {
                        return this.byteRange[1]
                    }
                }, {
                    key: "decryptdata",
                    get: function() {
                        return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata
                    }
                }, {
                    key: "endProgramDateTime",
                    get: function() {
                        if (!Number.isFinite(this.programDateTime)) return null;
                        var e = Number.isFinite(this.duration) ? this.duration : 0;
                        return this.programDateTime + 1e3 * e
                    }
                }, {
                    key: "encrypted",
                    get: function() {
                        return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
                    }
                }], [{
                    key: "ElementaryStreamTypes",
                    get: function() {
                        return {
                            AUDIO: "audio",
                            VIDEO: "video"
                        }
                    }
                }]), e
            }();
        t.default = c, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = function() {
                function e(t) {
                    r(this, e), this.endCC = 0, this.endSN = 0, this.fragments = [], this.initSegment = null, this.live = !0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = t, this.version = null
                }
                return i(e, [{
                    key: "hasProgramDateTime",
                    get: function() {
                        return !(!this.fragments[0] || !Number.isFinite(this.fragments[0].programDateTime))
                    }
                }]), e
            }();
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = /^(\d+)x(\d+)$/,
            a = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
            s = function() {
                function e(t) {
                    r(this, e), "string" == typeof t && (t = e.parseAttrList(t));
                    for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n])
                }
                return i(e, [{
                    key: "decimalInteger",
                    value: function(e) {
                        var t = parseInt(this[e], 10);
                        return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                    }
                }, {
                    key: "hexadecimalInteger",
                    value: function(e) {
                        if (this[e]) {
                            var t = (this[e] || "0x").slice(2);
                            t = (1 & t.length ? "0" : "") + t;
                            for (var n = new Uint8Array(t.length / 2), r = 0; r < t.length / 2; r++) n[r] = parseInt(t.slice(2 * r, 2 * r + 2), 16);
                            return n
                        }
                        return null
                    }
                }, {
                    key: "hexadecimalIntegerAsNumber",
                    value: function(e) {
                        var t = parseInt(this[e], 16);
                        return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                    }
                }, {
                    key: "decimalFloatingPoint",
                    value: function(e) {
                        return parseFloat(this[e])
                    }
                }, {
                    key: "enumeratedString",
                    value: function(e) {
                        return this[e]
                    }
                }, {
                    key: "decimalResolution",
                    value: function(e) {
                        var t = o.exec(this[e]);
                        if (null !== t) return {
                            width: parseInt(t[1], 10),
                            height: parseInt(t[2], 10)
                        }
                    }
                }], [{
                    key: "parseAttrList",
                    value: function(e) {
                        var t = void 0,
                            n = {};
                        for (a.lastIndex = 0; null !== (t = a.exec(e));) {
                            var r = t[2];
                            0 === r.indexOf('"') && r.lastIndexOf('"') === r.length - 1 && (r = r.slice(1, -1)), n[t[1]] = r
                        }
                        return n
                    }
                }]), e
            }();
        t.default = s, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = o[t];
            return !!n && !0 === n[e.slice(0, 4)]
        }

        function i(e, t) {
            return window.MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = {
            audio: {
                a3ds: !0,
                "ac-3": !0,
                "ac-4": !0,
                alac: !0,
                alaw: !0,
                dra1: !0,
                "dts+": !0,
                "dts-": !0,
                dtsc: !0,
                dtse: !0,
                dtsh: !0,
                "ec-3": !0,
                enca: !0,
                g719: !0,
                g726: !0,
                m4ae: !0,
                mha1: !0,
                mha2: !0,
                mhm1: !0,
                mhm2: !0,
                mlpa: !0,
                mp4a: !0,
                "raw ": !0,
                Opus: !0,
                samr: !0,
                sawb: !0,
                sawp: !0,
                sevc: !0,
                sqcp: !0,
                ssmv: !0,
                twos: !0,
                ulaw: !0
            },
            video: {
                avc1: !0,
                avc2: !0,
                avc3: !0,
                avc4: !0,
                avcp: !0,
                drac: !0,
                dvav: !0,
                dvhe: !0,
                encv: !0,
                hev1: !0,
                hvc1: !0,
                mjp2: !0,
                mp4v: !0,
                mvc1: !0,
                mvc2: !0,
                mvc3: !0,
                mvc4: !0,
                resv: !0,
                rv60: !0,
                s263: !0,
                svc1: !0,
                svc2: !0,
                "vc-1": !0,
                vp08: !0,
                vp09: !0
            }
        };
        t.isCodecType = r, t.isCodecSupportedInMp4 = i
    }, function(e, t, n) {
        "use strict";

        function r() {
            if ("undefined" != typeof window) return window.MediaSource || window.WebKitMediaSource
        }

        function i() {
            var e = r(),
                t = window.SourceBuffer || window.WebKitSourceBuffer,
                n = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                i = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
            return !!n && !!i
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isMSESupported = i
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            u = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            l = n(16),
            c = r(l),
            f = n(7),
            d = r(f),
            h = n(6),
            p = r(h),
            g = n(13),
            v = r(g),
            y = n(0),
            m = 150,
            _ = 3,
            b = function(e) {
                function t(e, n) {
                    i(this, t);
                    var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                    return r.sequential = !0, r.currPlaySN = 0, r.currLostSN = -1, r.nextLostSN = -1, r.checkTimer = null, r.loadedPeerNum = 0, r.config.live ? r.maxPrefetchCount = _ : (r.maxPrefetchCount = m, r.startCheckPeersTimer()), r
                }
                return a(t, e), s(t, [{
                    key: "_setupEngine",
                    value: function() {
                        u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_setupEngine", this).call(this)
                    }
                }, {
                    key: "_onFragLoaded",
                    value: function(e, t) {
                        if (this.updateLoaded(t.sn), this.engine) {
                            var n = this.engine,
                                r = n.media,
                                i = n.targetDuration;
                            !this.config.live && r && i && (this.currPlaySN = Math.ceil(r.currentTime / i))
                        }
                    }
                }, {
                    key: "startCheckPeersTimer",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        this.logger.info("loaded peers " + this.loadedPeerNum + " next checkDelay is " + t), this.loadedPeerNum = 0, this.checkTimer || (this.checkTimer = setTimeout(function() {
                            e.checkPeers(), e.checkTimer = null, e.startCheckPeersTimer((0, y.calCheckPeersDelay)(e.loadedPeerNum))
                        }, 1e3 * t))
                    }
                }, {
                    key: "load",
                    value: function(e, t) {
                        var n = this,
                            r = this.logger;
                        if (this.isReceiver = !0, this.resolveMap.has(e)) return r.info("resolveMap found " + e), this.resolveMap.get(e);
                        var i = this.mBufferedDuration - this.config.httpLoadTime;
                        i > this.dcDownloadTimeout && (i = this.dcDownloadTimeout);
                        var o = new Promise(function(t) {
                            var r = {
                                resolve: t,
                                sn: e,
                                incomplete: !1,
                                criticaltimeouter: window.setTimeout(n._criticaltimeout.bind(n, e, !1), 1e3 * i),
                                numPeer: n.targetPeers.length || 1
                            };
                            n.resolveMap.set(e, r)
                        });
                        if (this.requestingMap.has(e)) r.info("wait for criticalSeg sn " + e + " timeout " + i);
                        else {
                            var a = !0,
                                s = !1,
                                u = void 0;
                            try {
                                for (var l, c = this.targetPeers[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                                    var f = l.value;
                                    f.requestDataById(t, e, !0), this.requestingMap.set(e, f.remotePeerId), r.info("request criticalSeg sn " + e + " from " + f.remotePeerId + " timeout " + i)
                                }
                            } catch (e) {
                                s = !0, u = e
                            } finally {
                                try {
                                    !a && c.return && c.return()
                                } finally {
                                    if (s) throw u
                                }
                            }
                        }
                        return this.targetPeers = [], o
                    }
                }, {
                    key: "_setupDC",
                    value: function(e) {
                        var n = this;
                        u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_setupDC", this).call(this, e);
                        var r = this.logger,
                            i = this.config;
                        e.on(d.default.DC_HAVE, function(t) {
                            if (t.sn && e.bitset && t.sn && t.sn >= 0) {
                                var r = t.sn;
                                if (e.bitset.has(r) || (e.bitset.add(r), n.bitset.has(r) || n._increBitCounts(r)), n.emit(d.default.SCH_DCHAVE, t.seg_id), i.live) {
                                    var o = r - 20;
                                    o > 0 && e.bitset.delete(o)
                                }(0, v.default)(function() {
                                    i.live && 0 === n.resolveMap.size && n.checkPeers()
                                })
                            }
                        }).on(d.default.DC_LOST, function(t) {
                            if (t.sn && e.bitset) {
                                var r = t.sn;
                                e.bitset.has(r) && (e.bitset.delete(r), n._decreBitCounts(r))
                            }
                        }).on(d.default.DC_PIECE, function(t) {
                            n.requestingMap.set(t.sn, e.remotePeerId), t.ext && t.ext.incompletes >= 2 || n.notifyAllPeers(t.sn, t.seg_id)
                        }).on(d.default.DC_PIECE_NOT_FOUND, function(t) {
                            var i = t.sn;
                            if (n.resolveMap.has(i)) {
                                var o = n.resolveMap.get(i);
                                1 === o.numPeer ? (n.resolveMap.delete(i), clearTimeout(o.criticaltimeouter), r.info("DC_PIECE_NOT_FOUND " + i), o.resolve()) : o.numPeer > 1 && o.numPeer--
                            }
                            e.bitset.delete(i), n.requestingMap.delete(i), n._decreBitCounts(i), e.checkIfNeedChoke()
                        }).on(d.default.DC_RESPONSE, function(i, o) {
                            var a = n.config,
                                s = i.segId,
                                l = i.sn,
                                c = i.data,
                                f = n.resolveMap.has(l);
                            if (a.validateSegment(s, c))
                                if (n.notifyAllPeers(l, s), u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "reportDCTraffic", n).call(n, l, i.size, o), f) {
                                    r.info("receive criticalSeg seg_id " + s);
                                    var d = n.resolveMap.get(l);
                                    n.resolveMap.delete(l), window.clearTimeout(d.criticaltimeouter), e.miss = 0, d.resolve({
                                        data: c,
                                        fromPeerId: e.remotePeerId
                                    })
                                } else {
                                    if (n.bitset.has(l)) return;
                                    var h = new p.default(l, s, c, e.remotePeerId);
                                    n.bufMgr.putSeg(h), n.updateLoaded(l)
                                }
                            else if (r.warn("segment " + s + " validate failed"), f) {
                                var g = n.resolveMap.get(l);
                                n.resolveMap.delete(l), window.clearTimeout(g.criticaltimeouter), g.resolve()
                            }
                            n.requestingMap.delete(l), a.live && 0 === n.resolveMap.size && n.checkPeers()
                        }).on(d.default.DC_REQUEST, function(t) {
                            n.isUploader = !0;
                            var i = t.sn,
                                o = t.seg_id;
                            o || (o = n.bufMgr.getSegIdBySN(i));
                            var a = null;
                            if (n.requestingMap.has(i) && (a = n.getPeerLoadedMore(i)), n.bufMgr.hasSegOfId(o)) {
                                r.info("found seg from bufMgr");
                                var s = n.bufMgr.getSegById(o);
                                e.sendBuffer(s.sn, s.segId, s.data)
                            } else a && a.downloading && a.pieceMsg.sn === i ? (r.info("target had " + a.bufArr.length + " packets, wait for remain from upstream " + a.remotePeerId), e.sendPartialBuffer(a.pieceMsg, a.bufArr, {
                                from: "WaitForPartial",
                                incompletes: 1
                            }), function(e, t) {
                                e.addDownloadListener(function(e, n, r, i, o) {
                                    r ? t.sendMsgPieceAbort(i) : t.send(i), o && (t.uploading = !1)
                                })
                            }(a, e)) : i >= n.loadingSN ? (r.info("peer request " + i + " wait for seg"), n.bufMgr.once("" + d.default.BM_ADDED_SN_ + i, function(t) {
                                t ? (r.info("peer request notify seg " + t.sn), e.sendBuffer(t.sn, t.segId, t.data, {
                                    from: "NotifySegment"
                                })) : e.sendPieceNotFound(i, o)
                            })) : e.sendPieceNotFound(i, o)
                        })
                    }
                }, {
                    key: "checkPeers",
                    value: function() {
                        var e = this.logger,
                            t = this.config;
                        if (0 !== this.bitCounts.size && !this.bufMgr.overflowed && !(this.nextLostSN >= 0 && this.nextLostSN >= this.currPlaySN - 10) && this.hasPeers) {
                            if (this.mBufferedDuration < this.allowP2pLimit) return void e.warn("low buffer time " + this.mBufferedDuration + ", skip prefetch");
                            var n = this.peerManager.getPeersOrderByWeight();
                            if (0 !== n.length) {
                                var r = [],
                                    i = t.prefetchNum,
                                    o = t.endSN,
                                    a = t.startSN,
                                    s = 0,
                                    u = this.loadingSN + 1,
                                    l = t.live;
                                for (l || (u = a); r.length <= i && r.length < n.length && s < this.maxPrefetchCount;) {
                                    if (!l && u > o) return;
                                    if (this.bitset.has(u)) u++;
                                    else {
                                        if (u !== this.loadingSN && this.bitCounts.has(u) && !this.requestingMap.has(u)) {
                                            var c = !0,
                                                f = !1,
                                                d = void 0;
                                            try {
                                                for (var h, p = n[Symbol.iterator](); !(c = (h = p.next()).done); c = !0) {
                                                    var g = h.value;
                                                    if (!r.includes(g) && g.bitset.has(u)) {
                                                        g.requestDataBySN(u, !1), e.info("request prefetch " + u + " from peer " + g.remotePeerId + " downloadNum " + g.downloadNum), r.push(g), this.requestingMap.set(u, g.remotePeerId);
                                                        break
                                                    }
                                                }
                                            } catch (e) {
                                                f = !0, d = e
                                            } finally {
                                                try {
                                                    !c && p.return && p.return()
                                                } finally {
                                                    if (f) throw d
                                                }
                                            }
                                        }
                                        s++, u++
                                    }
                                }
                                this.loadedPeerNum = r.length
                            }
                        }
                    }
                }, {
                    key: "onBufferManagerLost",
                    value: function(e, t, n) {
                        this.currLostSN = e, n && (this.nextLostSN = n), this.bitset.delete(e), this.bitCounts.delete(e)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.logger.warn("destroy sn Scheduler"), clearTimeout(this.checkTimer), u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                    }
                }]), t
            }(c.default);
        t.default = b, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
                function e(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = n(1),
            f = r(c),
            d = n(2),
            h = r(d),
            p = n(47),
            g = r(p),
            v = n(0),
            y = n(48),
            m = r(y),
            _ = Symbol("shareOnly"),
            b = function(e) {
                function t(e, n) {
                    o(this, t);
                    var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return r.engine = e, r.config = n, r.logger = e.logger, r.bitset = new Set, r.bitCounts = new Map, r.bufMgr = null, r.peerManager = new g.default, r.requestingMap = new m.default, r._setupEngine && r._setupEngine(), r.loadedPeerNum = 0, r.startCheckConnsTimer(), r.dcDownloadTimeout = n.dcDownloadTimeout, r[_] = !1, r.downloadOnly = !1, r
                }
                return s(t, e), l(t, [{
                    key: "startCheckConnsTimer",
                    value: function() {
                        var e = this;
                        this.checkConnsTimer = setInterval(function() {
                            e.logger.info("start check conns");
                            var t = e.peersNum,
                                n = e.subscribers,
                                r = n && n.length > 0 ? n.length : void 0,
                                i = (0, v.getCurrentTs)();
                            e.getPeers().forEach(function(n) {
                                i - n.gotStatsTs >= 102 && i - n.dataExchangeTs > 120 ? (e.logger.warn("close dead peer " + n.remotePeerId), n.close(!1), t--) : n.connected && n.sendMsgStats(t, r)
                            })
                        }, 5e4)
                    }
                }, {
                    key: "getNonactivePeers",
                    value: function() {
                        var e = (0, v.getCurrentTs)();
                        return this.getPeers().filter(function(t) {
                            return e - t.dataExchangeTs > 120
                        }).sort(function(e, t) {
                            return e.dataExchangeTs - t.dataExchangeTs
                        })
                    }
                }, {
                    key: "requestPeers",
                    value: function() {
                        this.logger.info("request peers from peers");
                        var e = {
                            event: h.default.DC_GET_PEERS
                        };
                        this._broadcastToPeers(e)
                    }
                }, {
                    key: "chokePeerRequest",
                    value: function(e) {
                        var t = {
                            event: h.default.DC_CHOKE
                        };
                        e ? e.sendJson(t) : this._broadcastToPeers(t)
                    }
                }, {
                    key: "unchokePeerRequest",
                    value: function(e) {
                        var t = {
                            event: h.default.DC_UNCHOKE
                        };
                        e ? e.sendJson(t) : this._broadcastToPeers(t)
                    }
                }, {
                    key: "stopRequestFromPeers",
                    value: function() {
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, i = this.peerManager.getPeerValues()[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                                r.value.choked = !0
                            }
                        } catch (e) {
                            t = !0, n = e
                        } finally {
                            try {
                                !e && i.return && i.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                    }
                }, {
                    key: "resumeRequestFromPeers",
                    value: function() {
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, i = this.peerManager.getPeerValues()[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                                r.value.choked = !1
                            }
                        } catch (e) {
                            t = !0, n = e
                        } finally {
                            try {
                                !e && i.return && i.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                    }
                }, {
                    key: "setShareOnly",
                    value: function() {
                        this[_] = !0
                    }
                }, {
                    key: "deletePeer",
                    value: function(e) {
                        this.peerManager.hasPeer(e.remotePeerId) && this.peerManager.removePeer(e.remotePeerId), this._peersStats(this.peerManager.getPeerIds())
                    }
                }, {
                    key: "handshakePeer",
                    value: function(e) {
                        this._setupDC(e), e.sendMetaData(Array.from(this.bitset), this.sequential, this.peersNum)
                    }
                }, {
                    key: "getPeers",
                    value: function() {
                        return [].concat(i(this.peerManager.getPeerValues()))
                    }
                }, {
                    key: "addPeer",
                    value: function(e) {
                        var t = this.logger;
                        this.peerManager.addPeer(e.remotePeerId, e), this[_] && (e.choked = !0);
                        var n = this.peerManager.getPeerIds();
                        this._peersStats(n), t.info("add peer " + e.remotePeerId + ", now has " + n.length + " peers"), e.isInitiator && this.peersNum <= 5 && e.peersConnected > 1 && e.sendPeersRequest()
                    }
                }, {
                    key: "peersHas",
                    value: function(e) {
                        return this.bitCounts.has(e)
                    }
                }, {
                    key: "onBufferManagerSegAdded",
                    value: function(e) {}
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this.logger;
                        this.peersNum > 0 && this.peerManager.clear(), this.removeAllListeners(), clearInterval(this.checkConnsTimer), e.warn("destroy BtScheduler")
                    }
                }, {
                    key: "notifyPeersLoaded",
                    value: function(e) {}
                }, {
                    key: "handleMetaData",
                    value: function(e, t) {
                        var n = this;
                        t.field && (e.bitset = new Set(t.field), t.field.forEach(function(e) {
                            n.bitset.has(e) || n._increBitCounts(e)
                        }), this.addPeer(e), this.downloadOnly && this.chokePeerRequest(e))
                    }
                }, {
                    key: "_setupDC",
                    value: function(e) {
                        var t = this,
                            n = this.logger;
                        e.on(h.default.DC_PIECE_ACK, function(r) {
                            r.size && t.engine.fetcher.reportUploaded(r.size), n.info("uploaded " + r.seg_id + " to " + e.remotePeerId)
                        }).on(h.default.DC_TIMEOUT, function(e) {}).on(h.default.DC_PIECE_ABORT, function(r) {
                            n.warn("peer " + e.remotePeerId + " download aborted, reason " + r.reason), e.downloading && t._handlePieceAborted && t._handlePieceAborted(e.remotePeerId), e.downloading = !1
                        })
                    }
                }, {
                    key: "_broadcastToPeers",
                    value: function(e) {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var i, o = this.peerManager.getPeerValues()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                i.value.sendJson(e)
                            }
                        } catch (e) {
                            n = !0, r = e
                        } finally {
                            try {
                                !t && o.return && o.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    }
                }, {
                    key: "_getIdlePeer",
                    value: function() {
                        return this.peerManager.getAvailablePeers()
                    }
                }, {
                    key: "_peersStats",
                    value: function(e) {
                        this.engine.emit("peers", e);
                        var t = this.engine.config.getPeersInfo;
                        t && "function" == typeof t && t(e)
                    }
                }, {
                    key: "_decreBitCounts",
                    value: function(e) {
                        if (this.bitCounts.has(e)) {
                            var t = this.bitCounts.get(e);
                            1 === t ? this.bitCounts.delete(e) : this.bitCounts.set(e, t - 1)
                        }
                    }
                }, {
                    key: "_increBitCounts",
                    value: function(e) {
                        if (this.bitCounts.has(e)) {
                            var t = this.bitCounts.get(e);
                            this.bitCounts.set(e, t + 1)
                        } else this.bitCounts.set(e, 1)
                    }
                }, {
                    key: "reportDCTraffic",
                    value: function(e, t, n) {
                        if (!this.engine.fetcher) return void this.logger.error("DC report failed");
                        var r = this.engine.fetcher,
                            i = t;
                        this.bitset.has(e) || r.reportDCTraffic(i, n)
                    }
                }, {
                    key: "cleanRequestingMap",
                    value: function(e) {
                        var t = this.peerManager.getPeer(e),
                            n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, a = this.requestingMap.internalMap[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                var s = u(o.value, 2),
                                    l = s[0],
                                    c = s[1];
                                c && c.includes(e) && (this.logger.info("delete " + l + " in requestingMap"), this.requestingMap.delete(l), this._decreBitCounts(l), t && t.bitset.delete(l))
                            }
                        } catch (e) {
                            r = !0, i = e
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                    }
                }, {
                    key: "getPeerLoadedMore",
                    value: function(e) {
                        if (!this.requestingMap.has(e)) return null;
                        var t = this.requestingMap.getAllPeerIds(e);
                        if (0 === t.length) return null;
                        var n = this.peerManager.getPeer(t[0]);
                        if (!n) return null;
                        if (t.length > 1)
                            for (var r = 1; r < t.length; r++) {
                                var i = this.peerManager.getPeer(t[r]);
                                i && i.bufArr.length > n.bufArr.length && (n = i)
                            }
                        return n
                    }
                }, {
                    key: "hasPeers",
                    get: function() {
                        return this.peersNum > 0
                    }
                }, {
                    key: "peersNum",
                    get: function() {
                        return this.peerManager.size()
                    }
                }, {
                    key: "hasIdlePeers",
                    get: function() {
                        var e = this._getIdlePeer().length;
                        return this.logger.info("peers: " + this.peersNum + " idle peers: " + e), e > 0
                    }
                }, {
                    key: "bufferManager",
                    set: function(e) {
                        var t = this;
                        this.bufMgr = e, e.on(h.default.BM_LOST, function(e, n, r) {
                            t.config.live || t._broadcastToPeers({
                                event: h.default.DC_LOST,
                                sn: e,
                                seg_id: n
                            }), t.onBufferManagerLost(e, n, r)
                        }).on(h.default.BM_SEG_ADDED, function(e) {
                            t.onBufferManagerSegAdded(e)
                        })
                    }
                }]), t
            }(f.default);
        t.default = b, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            a = function() {
                function e() {
                    i(this, e), this.peerMap = new Map
                }
                return o(e, [{
                    key: "isEmpty",
                    value: function() {
                        return 0 === this.peerMap.size
                    }
                }, {
                    key: "size",
                    value: function() {
                        return this.peerMap.size
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.peerMap.clear()
                    }
                }, {
                    key: "getPeers",
                    value: function() {
                        return [].concat(r(this.peerMap.values()))
                    }
                }, {
                    key: "getPeerValues",
                    value: function() {
                        return this.peerMap.values()
                    }
                }, {
                    key: "hasPeer",
                    value: function(e) {
                        return this.peerMap.has(e)
                    }
                }, {
                    key: "addPeer",
                    value: function(e, t) {
                        this.peerMap.set(e, t)
                    }
                }, {
                    key: "getPeerIds",
                    value: function() {
                        return [].concat(r(this.peerMap.keys()))
                    }
                }, {
                    key: "removePeer",
                    value: function(e) {
                        this.peerMap.delete(e)
                    }
                }, {
                    key: "getPeersOrderByWeight",
                    value: function() {
                        var e = this.getPeers().filter(function(e) {
                            return e.isAvailableUrgently
                        });
                        return e.sort(function(e, t) {
                            return 0 === t.weight ? 1 : 0 === e.weight ? -1 : t.weight - e.weight
                        }), e
                    }
                }, {
                    key: "getPeer",
                    value: function(e) {
                        return this.peerMap.get(e)
                    }
                }, {
                    key: "getAvailablePeers",
                    value: function() {
                        return this.getPeers().filter(function(e) {
                            return e.isAvailable
                        })
                    }
                }]), e
            }();
        t.default = a, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = function() {
                function e() {
                    r(this, e), this.internalMap = new Map
                }
                return i(e, [{
                    key: "has",
                    value: function(e) {
                        return this.internalMap.has(e)
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        if (this.internalMap.has(e)) {
                            var n = this.internalMap.get(e);
                            if (n && !n.includes(t)) return void n.push(t)
                        }
                        this.internalMap.set(e, [t])
                    }
                }, {
                    key: "setPeerUnknown",
                    value: function(e) {
                        this.internalMap.set(e, null)
                    }
                }, {
                    key: "checkIfPeerUnknown",
                    value: function(e) {
                        return this.internalMap.has(e) && !this.internalMap.get(e)
                    }
                }, {
                    key: "getAllPeerIds",
                    value: function(e) {
                        var t = this.internalMap.get(e);
                        return t || []
                    }
                }, {
                    key: "getOnePeerId",
                    value: function(e) {
                        if (this.internalMap.has(e)) {
                            if (this.internalMap.get(e)) return this.internalMap.get(e)[0]
                        }
                        return null
                    }
                }, {
                    key: "delete",
                    value: function(e) {
                        this.internalMap.delete(e)
                    }
                }]), e
            }();
        t.default = o, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, r)
                }
                if ("value" in i) return i.value;
                var a = i.get;
                if (void 0 !== a) return a.call(r)
            },
            c = n(16),
            f = r(c),
            d = n(7),
            h = r(d),
            p = n(6),
            g = r(p),
            v = function(e) {
                function t(e, n) {
                    o(this, t);
                    var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                    return r.sequential = !1, r
                }
                return s(t, e), u(t, [{
                    key: "_setupEngine",
                    value: function() {
                        l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_setupEngine", this).call(this)
                    }
                }, {
                    key: "_onFragLoaded",
                    value: function(e, t) {
                        this.updateLoaded(t.segId)
                    }
                }, {
                    key: "load",
                    value: function(e, t) {
                        var n = this,
                            r = this.logger;
                        if (this.isReceiver = !0, this.resolveMap.has(t)) return r.info("resolveMap found " + t), this.resolveMap.get(t);
                        var i = this.mBufferedDuration - this.config.httpLoadTime;
                        i > this.dcDownloadTimeout && (i = this.dcDownloadTimeout);
                        var o = new Promise(function(e) {
                            var r = {
                                resolve: e,
                                segId: t,
                                incomplete: !1,
                                criticaltimeouter: window.setTimeout(n._criticaltimeout.bind(n, t, !1), 1e3 * i),
                                numPeer: n.targetPeers.length || 1
                            };
                            n.resolveMap.set(t, r)
                        });
                        if (this.requestingMap.has(t)) r.info("wait for criticalSeg segId " + t + " timeout " + i);
                        else {
                            var a = !0,
                                s = !1,
                                u = void 0;
                            try {
                                for (var l, c = this.targetPeers[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                                    var f = l.value;
                                    f.requestDataById(t, e, !0), this.requestingMap.set(t, f.remotePeerId), r.info("request criticalSeg segId " + t + " from " + f.remotePeerId + " timeout " + i)
                                }
                            } catch (e) {
                                s = !0, u = e
                            } finally {
                                try {
                                    !a && c.return && c.return()
                                } finally {
                                    if (s) throw u
                                }
                            }
                        }
                        return this.targetPeers = [], o
                    }
                }, {
                    key: "_setupDC",
                    value: function(e) {
                        var n = this;
                        l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_setupDC", this).call(this, e);
                        var r = this.logger,
                            o = this.config;
                        e.on(h.default.DC_HAVE, function(t) {
                            var r = t.seg_id;
                            if (r && e.bitset && (e.bitset.has(r) || (e.bitset.add(r), n.bitset.has(r) || n._increBitCounts(r)), n.emit(h.default.SCH_DCHAVE, t.seg_id), o.live))
                                for (; e.bitset.size > 20;) {
                                    var a = [].concat(i(e.bitset.values())).shift();
                                    e.bitset.delete(a)
                                }
                        }).on(h.default.DC_LOST, function(t) {
                            var r = t.seg_id;
                            r && e.bitset && e.bitset.has(r) && (e.bitset.delete(r), n._decreBitCounts(r))
                        }).on(h.default.DC_PIECE, function(e) {
                            e.ext && e.ext.incompletes >= 2 || n.notifyAllPeers(e.sn, e.seg_id)
                        }).on(h.default.DC_PIECE_NOT_FOUND, function(t) {
                            var i = t.seg_id;
                            if (n.resolveMap.has(i)) {
                                var o = n.resolveMap.get(i);
                                1 === o.numPeer ? (n.resolveMap.delete(i), clearTimeout(o.criticaltimeouter), r.info("DC_PIECE_NOT_FOUND " + i), o.resolve()) : o.numPeer > 1 && o.numPeer--
                            }
                            e.bitset.delete(i), n.requestingMap.delete(i), n._decreBitCounts(i), e.checkIfNeedChoke()
                        }).on(h.default.DC_RESPONSE, function(i, o) {
                            var a = n.config,
                                s = i.segId,
                                u = i.sn,
                                c = i.data,
                                f = n.resolveMap.has(s);
                            if (a.validateSegment(s, c))
                                if (n.notifyAllPeers(u, s), l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "reportDCTraffic", n).call(n, s, i.size, o), f) {
                                    r.info("receive criticalSeg seg_id " + s);
                                    var d = n.resolveMap.get(s);
                                    n.resolveMap.delete(s), window.clearTimeout(d.criticaltimeouter), e.miss = 0, d.resolve({
                                        data: c,
                                        fromPeerId: e.remotePeerId
                                    })
                                } else {
                                    if (n.bitset.has(s)) return;
                                    var h = new g.default(u, s, c, e.remotePeerId);
                                    n.bufMgr.putSeg(h), n.updateLoaded(s)
                                }
                            else if (r.warn("segment " + s + " validate failed"), f) {
                                var p = n.resolveMap.get(s);
                                n.resolveMap.delete(s), window.clearTimeout(p.criticaltimeouter), p.resolve()
                            }
                            n.requestingMap.delete(s)
                        }).on(h.default.DC_REQUEST, function(t) {
                            n.isUploader = !0;
                            var i = t.seg_id,
                                o = null;
                            if (n.requestingMap.has(i) && (o = n.getPeerLoadedMore(i)), n.bufMgr.hasSegOfId(i)) {
                                r.info("found seg from bufMgr");
                                var a = n.bufMgr.getSegById(i);
                                e.sendBuffer(a.sn, a.segId, a.data)
                            } else o && o.downloading && o.pieceMsg.seg_id === i ? (r.info("target had " + o.bufArr.length + " packets, wait for remain from upstream " + o.remotePeerId), e.sendPartialBuffer(o.pieceMsg, o.bufArr, {
                                from: "WaitForPartial",
                                incompletes: 1
                            }), function(e, t) {
                                e.addDownloadListener(function(e, n, r, i, o) {
                                    r ? t.sendMsgPieceAbort(i) : t.send(i), o && (t.uploading = !1)
                                })
                            }(o, e)) : (r.info("peer request " + i + " wait for seg"), n.bufMgr.once("" + h.default.BM_ADDED_SEG_ + i, function(n) {
                                n ? (r.info("peer request notify seg " + i), e.sendBuffer(n.sn, n.segId, n.data)) : e.sendPieceNotFound(t.sn, i)
                            }))
                        })
                    }
                }, {
                    key: "onBufferManagerLost",
                    value: function(e, t, n) {
                        this.bitset.delete(t), this.bitCounts.delete(t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.logger.warn("destroy id Scheduler"), l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                    }
                }]), t
            }(f.default);
        t.default = v, e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            l = n(1),
            c = r(l),
            f = n(2),
            d = r(f),
            h = n(4),
            p = r(h),
            g = 36700160,
            v = function(e) {
                function t(e, n) {
                    var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    o(this, t);
                    var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    i.isSequential = r, i.logger = n.logger;
                    var s = e.browserInfo.device;
                    return i.maxBufSize = s === p.default.device.PC_WEB || s === p.default.device.PC_NATIVE ? n.memoryCacheLimit.pc : n.memoryCacheLimit.mobile, n.live && (i.maxBufSize = g), i._segPool = new Map, i._currBufSize = 0, i.id2Sn = new Map, i.overflowed = !1, i
                }
                return s(t, e), u(t, [{
                    key: "hasSegOfId",
                    value: function(e) {
                        if (this.isSequential) {
                            var t = this.id2Sn.get(e);
                            return this._segPool.has(t)
                        }
                        return this._segPool.has(e)
                    }
                }, {
                    key: "hasSegOfSN",
                    value: function(e) {
                        return !!this.isSequential && this._segPool.has(e)
                    }
                }, {
                    key: "_calSegPoolSize",
                    value: function() {
                        var e = 0;
                        return this._segPool.forEach(function(t) {
                            e += t.size
                        }), e
                    }
                }, {
                    key: "putSeg",
                    value: function(e) {
                        if (this._currBufSize >= 1.5 * this.maxBufSize && (this._currBufSize = this._calSegPoolSize(), this._currBufSize >= 1.5 * this.maxBufSize && (this.clear(), this.overflowed = !1)), this.isSequential) {
                            if (this._segPool.has(e.sn)) return;
                            this._addSequentialSeg(e)
                        } else {
                            if (this._segPool.has(e.segId)) return;
                            this._addUnsequentialSeg(e)
                        }
                    }
                }, {
                    key: "_addSequentialSeg",
                    value: function(e) {
                        var t = this.logger,
                            n = e.segId,
                            r = e.sn,
                            i = e.size;
                        this.id2Sn.set(n, r), this._segPool.set(r, e), this._currBufSize += parseInt(i);
                        var o = this._segPool.size;
                        if (this.emit("" + d.default.BM_ADDED_SN_ + e.sn, e), this.emit(d.default.BM_SEG_ADDED, e), !(this._currBufSize < this.maxBufSize || o <= 5)) {
                            var a = Array.from(this._segPool.keys()).sort(function(e, t) {
                                    return e - t
                                }),
                                s = 0;
                            do {
                                if (s++ > 10) {
                                    console.error("too much loops in SegmentCache");
                                    break
                                }
                                var u = a.shift();
                                if (void 0 !== u) {
                                    var l = a[0],
                                        c = this._segPool.get(u);
                                    if (c) {
                                        var f = c.size;
                                        this._currBufSize -= parseInt(f), this._segPool.delete(u), this.id2Sn.delete(c.segId), t.info("pop seg " + u + " size " + f + " currBufSize " + this._currBufSize), this.overflowed || (this.overflowed = !0), this.emit(d.default.BM_LOST, u, c.segId, l)
                                    } else t.error("lastSeg not found")
                                } else t.error("lastSN not found")
                            } while (this._currBufSize >= this.maxBufSize && this._segPool.size > 5)
                        }
                    }
                }, {
                    key: "_addUnsequentialSeg",
                    value: function(e) {
                        var t = this.logger,
                            n = e.segId,
                            r = e.size;
                        this._segPool.set(n, e), this._currBufSize += parseInt(r), this.emit("" + d.default.BM_ADDED_SEG_ + e.segId, e), this.emit(d.default.BM_SEG_ADDED, e);
                        for (var o = 0; this._currBufSize >= this.maxBufSize && this._segPool.size > 5;) {
                            if (o++ > 10) {
                                console.error("too much loops in SegmentCache");
                                break
                            }
                            var a = [].concat(i(this._segPool.values())).shift(),
                                s = a.segId,
                                u = a.size;
                            this._currBufSize -= parseInt(u), t.info("pop seg " + s + " size " + u), this._segPool.delete(s), this.overflowed || (this.overflowed = !0), this.emit(d.default.BM_LOST, -1, s)
                        }
                    }
                }, {
                    key: "getSegById",
                    value: function(e) {
                        if (this.isSequential) {
                            var t = this.id2Sn.get(e);
                            return this._segPool.get(t)
                        }
                        return this._segPool.get(e)
                    }
                }, {
                    key: "getSegIdBySN",
                    value: function(e) {
                        var t = this._segPool.get(e);
                        return t ? t.segId : null
                    }
                }, {
                    key: "getSegBySN",
                    value: function(e) {
                        if (this.isSequential) return this._segPool.get(e);
                        throw new Error("fatal error in SegmentCache")
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.logger.warn("clear segment cache"), this._segPool.clear(), this.id2Sn.clear(), this._currBufSize = 0
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.clear(), this.removeAllListeners()
                    }
                }, {
                    key: "currBufSize",
                    get: function() {
                        return this._currBufSize
                    }
                }]), t
            }(c.default);
        t.default = v, e.exports = t.default
    }])
});