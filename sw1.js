! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.HlsProxy = t() : e.HlsProxy = t()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.d = function(e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(r, "a", r), r
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/src/", t(t.s = 2)
    }([function(e, t, r) {
        "use strict";
        e.exports = r(3)
    }, function(e, t, r) {
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
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, r) {
                    function n(o, i) {
                        try {
                            var a = t[o](i),
                                u = a.value
                        } catch (e) {
                            return void r(e)
                        }
                        if (!a.done) return Promise.resolve(u).then(function(e) {
                            n("next", e)
                        }, function(e) {
                            n("throw", e)
                        });
                        e(u)
                    }
                    return n("next")
                })
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e) {
            var t = e.request,
                r = e.clientId;
            if ("GET" === t.method) {
                var n = t.url;
                L && console.info("sw onFetch " + n);
                var o = (0, m.getUrlSuffix)(n);
                if (b.includes(o)) return L && console.info(e.request.url), e.respondWith(l(t, r));
                if (S.includes(o)) {
                    if (L && console.info(e.request.url), x) return void(L && console.warn("sw is loading, skip ts request"));
                    if (R.has(r)) {
                        var i = t.headers,
                            a = t.url,
                            f = i.get("range") || void 0,
                            s = (0, m.parseRangeHeader)(f),
                            c = s.start,
                            h = s.end;
                        if (0 === c && h === c) return;
                        return e.respondWith(u(a, i, R.get(r), f, c, h))
                    }
                    L && console.warn("windowClient not exist when get media")
                }
            }
        }

        function u(e, t, r, n, i, a) {
            var u = this,
                s = function() {
                    var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    L && console.info("request " + e + " from network"), x = !0;
                    var a = (0, m.makeHeadersWithRangeOnly)(n);
                    return D && (L && console.info("set additional header for " + e), D(e, a, t)), fetch(new Request(e, {
                        headers: a,
                        mode: "cors"
                    })).then(function() {
                        var t = o(c.default.mark(function t(o) {
                            return c.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (x = !1, i || !o.ok || !r) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.t0 = T, t.t1 = r, t.t2 = g.default.SW_MEDIA, t.t3 = e, t.next = 8, o.clone().arrayBuffer();
                                    case 8:
                                        t.t4 = t.sent, t.t5 = n, t.t6 = {
                                            url: t.t3,
                                            buffer: t.t4,
                                            range: t.t5
                                        }, t.t7 = {
                                            action: t.t2,
                                            data: t.t6
                                        }, t.t8 = _, t.t9 = function(e) {
                                            L && console.warn(e)
                                        }, t.t0.sendMessageToClient.call(t.t0, t.t1, t.t7, t.t8).catch(t.t9);
                                    case 15:
                                        return t.abrupt("return", o);
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, u)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()).catch(function(e) {
                        return x = !1, L && console.warn(e), new Response(null, {
                            status: 403,
                            statusText: "Forbidden"
                        })
                    })
                };
            return i || a || (n = void 0), x = !0, T.sendMessageToClient(r, {
                action: g.default.SW_GET_MEDIA,
                data: {
                    url: e,
                    range: n
                }
            }, A).then(function() {
                var n = o(c.default.mark(function n(o) {
                    var l, h, p, d, y;
                    return c.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (x = !1, !(o && o.data && o.data.buffer)) {
                                    n.next = 16;
                                    break
                                }
                                if (l = o.data, h = l.buffer, p = l.incomplete, L && console.info("hit cache " + e), d = void 0, p) {
                                    n.next = 10;
                                    break
                                }
                                d = l.buffer, n.next = 13;
                                break;
                            case 10:
                                return n.next = 12, f(r, e, t, h, i, a);
                            case 12:
                                d = n.sent;
                            case 13:
                                return y = {
                                    status: i ? 206 : 200,
                                    statusText: i ? "Partial Content" : "OK",
                                    headers: {
                                        "Accept-Ranges": "bytes",
                                        "Content-Length": d.byteLength
                                    }
                                }, i && (y.headers["Content-Range"] = "bytes " + i + "-" + a + "/" + d.byteLength), n.abrupt("return", new Response(d, y));
                            case 16:
                                return n.abrupt("return", s());
                            case 17:
                            case "end":
                                return n.stop()
                        }
                    }, n, u)
                }));
                return function(e) {
                    return n.apply(this, arguments)
                }
            }()).catch(function(e) {
                return x = !1, L && console.warn(e), s()
            })
        }

        function f(e, t, r, n, o, i) {
            var a = "bytes=";
            o ? (L && console.info("rangeStart " + o + " rangeEnd " + i), a = "" + a + (o + n.byteLength) + "-" + i) : a = "" + a + n.byteLength + "-", L && console.info("continue download from " + t + " range: " + a);
            var u = (0, m.makeHeadersWithRangeOnly)(a);
            return D && (L && console.info("set additional header for " + t), D(t, u, r)), fetch(t, {
                headers: u,
                mode: "cors"
            }).then(function(e) {
                return e.arrayBuffer()
            }).then(function(r) {
                var a = void 0;
                o && (a = "bytes=" + o + "-" + i);
                var u = E.from(r),
                    f = E.concat([n, u]),
                    s = new Uint8Array(f).buffer;
                return T.sendMessageToClient(e, {
                    action: g.default.SW_MEDIA,
                    data: {
                        url: t,
                        buffer: s,
                        range: a
                    }
                }, _).catch(function(e) {
                    L && console.warn(e)
                }), s
            }).catch(function(e) {
                console.error("http partial download error " + e)
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = r(0),
            c = n(s),
            l = function() {
                var e = o(c.default.mark(function e(t, r) {
                    var n, i, a = this;
                    return c.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return R.size > 50 && R.clear(), e.next = 3, clients.get(r);
                            case 3:
                                return n = e.sent, i = void 0, C && (L && console.info("set additional header for " + t.url), i = new Headers, C(t.url, i, t.headers)), e.abrupt("return", fetch(new Request(t.url, {
                                    mode: "cors",
                                    headers: i
                                })).then(function() {
                                    var e = o(c.default.mark(function e(o) {
                                        var i, u, f, s;
                                        return c.default.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!o.ok || !n) {
                                                        e.next = 21;
                                                        break
                                                    }
                                                    return e.prev = 1, e.next = 4, o.clone().text();
                                                case 4:
                                                    return i = e.sent, e.next = 7, T.sendMessageToClient(n, {
                                                        action: g.default.SW_PLAYLIST,
                                                        data: {
                                                            url: t.url,
                                                            ver: "0.7.6",
                                                            text: i
                                                        }
                                                    }, w);
                                                case 7:
                                                    if (u = e.sent, f = u.data, L = f && f.debug, f && f.timeout > 0 && (A = f.timeout), f.active ? R.set(r, n) : (L && console.warn("window client is not active"), R.delete(r)), !O || i.endsWith("#EXT-X-ENDLIST\n")) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    return s = y.default.insertTimeOffsetTag(i, 100), e.abrupt("return", new Response(s, {
                                                        status: 200,
                                                        statusText: "OK",
                                                        headers: o.headers
                                                    }));
                                                case 15:
                                                    e.next = 21;
                                                    break;
                                                case 17:
                                                    e.prev = 17, e.t0 = e.catch(1), L && console.warn(e.t0), R.delete(r);
                                                case 21:
                                                    return e.abrupt("return", o);
                                                case 22:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, e, a, [
                                            [1, 17]
                                        ])
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                }));
                return function(t, r) {
                    return e.apply(this, arguments)
                }
            }(),
            h = r(5),
            p = n(h),
            d = r(6),
            y = n(d),
            v = r(7),
            g = n(v),
            m = r(9),
            E = r(11).Buffer,
            b = ["m3u8","txt"],
            w = 200,
            _ = 1500,
            S = ["ts","txt", "mp4", "m4s"],
            A = 7e3,
            L = !1,
            R = new Map,
            T = new p.default,
            x = !1,
            C = null,
            D = null,
            O = !1,
            P = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, e), C = t.httpHeadersForPlaylist ? t.httpHeadersForPlaylist : null, D = t.httpHeadersForMediaFile ? t.httpHeadersForMediaFile : null, O = !!t.insertTimeOffsetTag
            };
        t.default = P, self.addEventListener("install", function() {
            self.skipWaiting()
        }), self.addEventListener("activate", function(e) {
            return e.waitUntil(self.clients.claim())
        }), self.addEventListener("fetch", a), P.version = "0.7.6", e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        var n = function() {
                return this
            }() || Function("return this")(),
            o = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
            i = o && n.regeneratorRuntime;
        if (n.regeneratorRuntime = void 0, e.exports = r(4), o) n.regeneratorRuntime = i;
        else try {
            delete n.regeneratorRuntime
        } catch (e) {
            n.regeneratorRuntime = void 0
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            ! function(r) {
                function n(e, t, r, n) {
                    var o = t && t.prototype instanceof i ? t : i,
                        a = Object.create(o.prototype),
                        u = new d(n || []);
                    return a._invoke = c(e, r, u), a
                }

                function o(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }

                function i() {}

                function a() {}

                function u() {}

                function f(e) {
                    ["next", "throw", "return"].forEach(function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e)
                        }
                    })
                }

                function s(e) {
                    function r(n, i, a, u) {
                        var f = o(e[n], e, i);
                        if ("throw" !== f.type) {
                            var s = f.arg,
                                c = s.value;
                            return c && "object" === (void 0 === c ? "undefined" : t(c)) && E.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) {
                                r("next", e, a, u)
                            }, function(e) {
                                r("throw", e, a, u)
                            }) : Promise.resolve(c).then(function(e) {
                                s.value = e, a(s)
                            }, u)
                        }
                        u(f.arg)
                    }

                    function n(e, t) {
                        function n() {
                            return new Promise(function(n, o) {
                                r(e, t, n, o)
                            })
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                    var i;
                    this._invoke = n
                }

                function c(e, t, r) {
                    var n = R;
                    return function(i, a) {
                        if (n === x) throw new Error("Generator is already running");
                        if (n === C) {
                            if ("throw" === i) throw a;
                            return v()
                        }
                        for (r.method = i, r.arg = a;;) {
                            var u = r.delegate;
                            if (u) {
                                var f = l(u, r);
                                if (f) {
                                    if (f === D) continue;
                                    return f
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (n === R) throw n = C, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = x;
                            var s = o(e, t, r);
                            if ("normal" === s.type) {
                                if (n = r.done ? C : T, s.arg === D) continue;
                                return {
                                    value: s.arg,
                                    done: r.done
                                }
                            }
                            "throw" === s.type && (n = C, r.method = "throw", r.arg = s.arg)
                        }
                    }
                }

                function l(e, t) {
                    var r = e.iterator[t.method];
                    if (r === g) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = g, l(e, t), "throw" === t.method)) return D;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return D
                    }
                    var n = o(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, D;
                    var i = n.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = g), t.delegate = null, D) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, D)
                }

                function h(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function p(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function d(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(h, this), this.reset(!0)
                }

                function y(e) {
                    if (e) {
                        var t = e[w];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                n = function t() {
                                    for (; ++r < e.length;)
                                        if (E.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = g, t.done = !0, t
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: v
                    }
                }

                function v() {
                    return {
                        value: g,
                        done: !0
                    }
                }
                var g, m = Object.prototype,
                    E = m.hasOwnProperty,
                    b = "function" == typeof Symbol ? Symbol : {},
                    w = b.iterator || "@@iterator",
                    _ = b.asyncIterator || "@@asyncIterator",
                    S = b.toStringTag || "@@toStringTag",
                    A = "object" === t(e),
                    L = r.regeneratorRuntime;
                if (L) return void(A && (e.exports = L));
                L = r.regeneratorRuntime = A ? e.exports : {}, L.wrap = n;
                var R = "suspendedStart",
                    T = "suspendedYield",
                    x = "executing",
                    C = "completed",
                    D = {},
                    O = {};
                O[w] = function() {
                    return this
                };
                var P = Object.getPrototypeOf,
                    B = P && P(P(y([])));
                B && B !== m && E.call(B, w) && (O = B);
                var I = u.prototype = i.prototype = Object.create(O);
                a.prototype = I.constructor = u, u.constructor = a, u[S] = a.displayName = "GeneratorFunction", L.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === a || "GeneratorFunction" === (t.displayName || t.name))
                }, L.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, S in e || (e[S] = "GeneratorFunction")), e.prototype = Object.create(I), e
                }, L.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, f(s.prototype), s.prototype[_] = function() {
                    return this
                }, L.AsyncIterator = s, L.async = function(e, t, r, o) {
                    var i = new s(n(e, t, r, o));
                    return L.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                        return e.done ? e.value : i.next()
                    })
                }, f(I), I[S] = "Generator", I[w] = function() {
                    return this
                }, I.toString = function() {
                    return "[object Generator]"
                }, L.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, L.values = y, d.prototype = {
                    constructor: d,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = g, this.done = !1, this.delegate = null, this.method = "next", this.arg = g, this.tryEntries.forEach(p), !e)
                            for (var t in this) "t" === t.charAt(0) && E.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = g)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0],
                            t = e.completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        function t(t, n) {
                            return i.type = "throw", i.arg = e, r.next = t, n && (r.method = "next", r.arg = g), !!n
                        }
                        if (this.done) throw e;
                        for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n],
                                i = o.completion;
                            if ("root" === o.tryLoc) return t("end");
                            if (o.tryLoc <= this.prev) {
                                var a = E.call(o, "catchLoc"),
                                    u = E.call(o, "finallyLoc");
                                if (a && u) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                                } else if (a) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && E.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, D) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), D
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), p(r), D
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    p(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: y(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = g), D
                    }
                }
            }(function() {
                return this
            }() || Function("return this")())
        }).call(t, r(1)(e))
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, r) {
                    function n(o, i) {
                        try {
                            var a = t[o](i),
                                u = a.value
                        } catch (e) {
                            return void r(e)
                        }
                        if (!a.done) return Promise.resolve(u).then(function(e) {
                            n("next", e)
                        }, function(e) {
                            n("throw", e)
                        });
                        e(u)
                    }
                    return n("next")
                })
            }
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(0),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            u = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            f = function() {
                function e() {
                    o(this, e), this.sendMessageToClient = this.sendMessageToClient.bind(this)
                }
                return u(e, [{
                    key: "sendMessageToClient",
                    value: function() {
                        function e(e, r, n) {
                            return t.apply(this, arguments)
                        }
                        var t = n(a.default.mark(function e(t, r, n) {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", Promise.reject("client is null"));
                                    case 2:
                                        return e.abrupt("return", new Promise(function(e, o) {
                                            var i = new MessageChannel,
                                                a = void 0,
                                                u = function(e, t) {
                                                    return setTimeout(function() {
                                                        i.port1.close(), i.port2.close(), o("MessageChannel " + t + " timed out after " + e + " ms")
                                                    }, e)
                                                };
                                            i.port1.onmessage = function(t) {
                                                var i = t.data;
                                                i ? i.pong ? (clearTimeout(a), a = u(n, r.action + "-data")) : e({
                                                    data: i.data
                                                }) : o("no data in event")
                                            }, i.port1.onmessageerror = function(e) {
                                                o(e)
                                            }, t.postMessage(r, [i.port2]), a = u(50, r.action + "-pong")
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return e
                    }()
                }]), e
            }();
        t.default = f, e.exports = t.default
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
            i = function() {
                function e() {
                    n(this, e)
                }
                return o(e, null, [{
                    key: "insertTimeOffsetTag",
                    value: function(e, t) {
                        for (var r = e.split("\n"), n = 0; n < r.length; n++)
                            if (r[n].startsWith("#EXT-X-VERSION")) {
                                r[n] = r[n] + "\n#EXT-X-START:TIME-OFFSET=-" + t;
                                break
                            } return r.join("\n")
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            o = r(8),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o);
        t.default = n({}, i.default, {
            ERROR: "error",
            SW_PLAYLIST: "SW_PLAYLIST",
            SW_MEDIA: "SW_MEDIA",
            SW_GET_MEDIA: "SW_GET_MEDIA",
            LEVEL_LOADED: "LEVEL_LOADED",
            MANIFEST_PARSED: "MANIFEST_PARSED",
            FRAG_LOADED: "FRAG_LOADED",
            SCH_DCHAVE: "SCH_DCHAVE"
        }), e.exports = t.default
    }, function(e, t, r) {
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
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            if (!e) return {};
            var t = e.trim().toLowerCase();
            if (!t.startsWith("bytes=")) throw new Error("unit-must-be-bytes", {
                normalizedRangeHeader: t
            });
            if (t.includes(",")) throw new Error("single-range-only", {
                normalizedRangeHeader: t
            });
            var r = /(\d*)-(\d*)/.exec(t);
            if (!r || !r[1] && !r[2]) throw new Error("invalid-range-values", {
                normalizedRangeHeader: t
            });
            return {
                start: "" === r[1] ? void 0 : Number(r[1]),
                end: "" === r[2] ? void 0 : Number(r[2])
            }
        }

        function o(e) {
            var t = s.parseURL(e);
            return t.path.substring(t.path.lastIndexOf(".") + 1)
        }

        function i(e) {
            var t = new Headers;
            return e.forEach(function(e, r) {
                t.set(r, e)
            }), t
        }

        function a(e, t) {
            var r = i(e);
            return t && r.set("Range", t), r
        }

        function u(e) {
            var t = new Headers;
            return e && t.set("range", e), t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseRangeHeader = n, t.getUrlSuffix = o, t.copyHeaders = i, t.makeHeadersWithRange = a, t.makeHeadersWithRangeOnly = u;
        var f = r(10),
            s = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }(f)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var r, n, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            ! function(i) {
                var a = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,
                    u = /^([^\/?#]*)(.*)$/,
                    f = /(?:\/|^)\.(?=\/)/g,
                    s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
                    c = {
                        buildAbsoluteURL: function(e, t, r) {
                            if (r = r || {}, e = e.trim(), !(t = t.trim())) {
                                if (!r.alwaysNormalize) return e;
                                var n = c.parseURL(e);
                                if (!n) throw new Error("Error trying to parse base URL.");
                                return n.path = c.normalizePath(n.path), c.buildURLFromParts(n)
                            }
                            var o = c.parseURL(t);
                            if (!o) throw new Error("Error trying to parse relative URL.");
                            if (o.scheme) return r.alwaysNormalize ? (o.path = c.normalizePath(o.path), c.buildURLFromParts(o)) : t;
                            var i = c.parseURL(e);
                            if (!i) throw new Error("Error trying to parse base URL.");
                            if (!i.netLoc && i.path && "/" !== i.path[0]) {
                                var a = u.exec(i.path);
                                i.netLoc = a[1], i.path = a[2]
                            }
                            i.netLoc && !i.path && (i.path = "/");
                            var f = {
                                scheme: i.scheme,
                                netLoc: o.netLoc,
                                path: null,
                                params: o.params,
                                query: o.query,
                                fragment: o.fragment
                            };
                            if (!o.netLoc && (f.netLoc = i.netLoc, "/" !== o.path[0]))
                                if (o.path) {
                                    var s = i.path,
                                        l = s.substring(0, s.lastIndexOf("/") + 1) + o.path;
                                    f.path = c.normalizePath(l)
                                } else f.path = i.path, o.params || (f.params = i.params, o.query || (f.query = i.query));
                            return null === f.path && (f.path = r.alwaysNormalize ? c.normalizePath(o.path) : o.path), c.buildURLFromParts(f)
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
                            for (e = e.split("").reverse().join("").replace(f, ""); e.length !== (e = e.replace(s, "")).length;);
                            return e.split("").reverse().join("")
                        },
                        buildURLFromParts: function(e) {
                            return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                        }
                    };
                "object" === o(t) && "object" === o(e) ? e.exports = c : (r = [], void 0 !== (n = function() {
                    return c
                }.apply(t, r)) && (e.exports = n))
            }()
        }).call(t, r(1)(e))
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            if (e > E) throw new RangeError('The value "' + e + '" is invalid for option "size"');
            var t = new Uint8Array(e);
            return t.__proto__ = o.prototype, t
        }

        function o(e, t, r) {
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                return f(e)
            }
            return i(e, t, r)
        }

        function i(e, t, r) {
            if ("string" == typeof e) return s(e, t);
            if (ArrayBuffer.isView(e)) return c(e);
            if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === e ? "undefined" : m(e)));
            if (v(e, ArrayBuffer) || e && v(e.buffer, ArrayBuffer)) return l(e, t, r);
            if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
            var n = e.valueOf && e.valueOf();
            if (null != n && n !== e) return o.from(n, t, r);
            var i = h(e);
            if (i) return i;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return o.from(e[Symbol.toPrimitive]("string"), t, r);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === e ? "undefined" : m(e)))
        }

        function a(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
            if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
        }

        function u(e, t, r) {
            return a(e), e <= 0 ? n(e) : void 0 !== t ? "string" == typeof r ? n(e).fill(t, r) : n(e).fill(t) : n(e)
        }

        function f(e) {
            return a(e), n(e < 0 ? 0 : 0 | p(e))
        }

        function s(e, t) {
            if ("string" == typeof t && "" !== t || (t = "utf8"), !o.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
            var r = 0 | d(e, t),
                i = n(r),
                a = i.write(e, t);
            return a !== r && (i = i.slice(0, a)), i
        }

        function c(e) {
            for (var t = e.length < 0 ? 0 : 0 | p(e.length), r = n(t), o = 0; o < t; o += 1) r[o] = 255 & e[o];
            return r
        }

        function l(e, t, r) {
            if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
            var n;
            return n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), n.__proto__ = o.prototype, n
        }

        function h(e) {
            if (o.isBuffer(e)) {
                var t = 0 | p(e.length),
                    r = n(t);
                return 0 === r.length ? r : (e.copy(r, 0, 0, t), r)
            }
            return void 0 !== e.length ? "number" != typeof e.length || g(e.length) ? n(0) : c(e) : "Buffer" === e.type && Array.isArray(e.data) ? c(e.data) : void 0
        }

        function p(e) {
            if (e >= E) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + E.toString(16) + " bytes");
            return 0 | e
        }

        function d(e, t) {
            if (o.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || v(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + (void 0 === e ? "undefined" : m(e)));
            var r = e.length,
                n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            for (var i = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                    return y(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                default:
                    if (i) return n ? -1 : y(e).length;
                    t = ("" + t).toLowerCase(), i = !0
            }
        }

        function y(e, t) {
            t = t || 1 / 0;
            for (var r, n = e.length, o = null, i = [], a = 0; a < n; ++a) {
                if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!o) {
                        if (r > 56319) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === n) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        o = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                        continue
                    }
                    r = 65536 + (o - 55296 << 10 | r - 56320)
                } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                if (o = null, r < 128) {
                    if ((t -= 1) < 0) break;
                    i.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    i.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return i
        }

        function v(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
        }

        function g(e) {
            return e !== e
        }
        var m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.Buffer = o;
        var E = 2147483647;
        t.kMaxLength = E, "undefined" != typeof Symbol && null != Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1
        }), o.from = function(e, t, r) {
            return i(e, t, r)
        }, o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, o.alloc = function(e, t, r) {
            return u(e, t, r)
        }, o.allocUnsafe = function(e) {
            return f(e)
        }, o.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== o.prototype
        }, o.isEncoding = function(e) {
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
        }, o.concat = function(e, t) {
            if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return o.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var n = o.allocUnsafe(t),
                i = 0;
            for (r = 0; r < e.length; ++r) {
                var a = e[r];
                if (v(a, Uint8Array) && (a = o.from(a)), !o.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(n, i), i += a.length
            }
            return n
        }, o.byteLength = d, o.prototype._isBuffer = !0, o.prototype.copy = function(e, t, r, n) {
            if (!o.isBuffer(e)) throw new TypeError("argument should be a Buffer");
            if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
            var i = n - r;
            if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);
            else if (this === e && r < t && t < n)
                for (var a = i - 1; a >= 0; --a) e[a + t] = this[a + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
            return i
        }
    }])
});