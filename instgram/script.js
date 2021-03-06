parcelRequire = function (e, r, n, t) {
    var i = "function" == typeof parcelRequire && parcelRequire
        , o = "function" == typeof require && require;
    function u(n, t) {
        if (!r[n]) {
            if (!e[n]) {
                var f = "function" == typeof parcelRequire && parcelRequire;
                if (!t && f)
                    return f(n, !0);
                if (i)
                    return i(n, !0);
                if (o && "string" == typeof n)
                    return o(n);
                var c = new Error("Cannot find module '" + n + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            p.resolve = function (r) {
                return e[n][1][r] || r
            }
                ,
                p.cache = {};
            var l = r[n] = new u.Module(n);
            e[n][0].call(l.exports, p, l, l.exports, this)
        }
        return r[n].exports;
        function p(e) {
            return u(p.resolve(e))
        }
    }
    u.isParcelRequire = !0,
        u.Module = function (e) {
            this.id = e,
                this.bundle = u,
                this.exports = {}
        }
        ,
        u.modules = e,
        u.cache = r,
        u.parent = i,
        u.register = function (r, n) {
            e[r] = [function (e, r) {
                r.exports = n
            }
                , {}]
        }
        ;
    for (var f = 0; f < n.length; f++)
        u(n[f]);
    if (n.length) {
        var c = u(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
            return c
        }) : t && (this[t] = c)
    }
    return u
}({
    "cpTA": [function (require, module, exports) {
        !function (t) {
            "use strict";
            if (!t.fetch) {
                var e = {
                    searchParams: "URLSearchParams" in t,
                    iterable: "Symbol" in t && "iterator" in Symbol,
                    blob: "FileReader" in t && "Blob" in t && function () {
                        try {
                            return new Blob,
                                !0
                        } catch (t) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in t,
                    arrayBuffer: "ArrayBuffer" in t
                };
                if (e.arrayBuffer)
                    var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                        , o = function (t) {
                            return t && DataView.prototype.isPrototypeOf(t)
                        }
                        , n = ArrayBuffer.isView || function (t) {
                            return t && r.indexOf(Object.prototype.toString.call(t)) > -1
                        }
                        ;
                f.prototype.append = function (t, e) {
                    t = a(t),
                        e = h(e);
                    var r = this.map[t];
                    this.map[t] = r ? r + "," + e : e
                }
                    ,
                    f.prototype.delete = function (t) {
                        delete this.map[a(t)]
                    }
                    ,
                    f.prototype.get = function (t) {
                        return t = a(t),
                            this.has(t) ? this.map[t] : null
                    }
                    ,
                    f.prototype.has = function (t) {
                        return this.map.hasOwnProperty(a(t))
                    }
                    ,
                    f.prototype.set = function (t, e) {
                        this.map[a(t)] = h(e)
                    }
                    ,
                    f.prototype.forEach = function (t, e) {
                        for (var r in this.map)
                            this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
                    }
                    ,
                    f.prototype.keys = function () {
                        var t = [];
                        return this.forEach(function (e, r) {
                            t.push(r)
                        }),
                            u(t)
                    }
                    ,
                    f.prototype.values = function () {
                        var t = [];
                        return this.forEach(function (e) {
                            t.push(e)
                        }),
                            u(t)
                    }
                    ,
                    f.prototype.entries = function () {
                        var t = [];
                        return this.forEach(function (e, r) {
                            t.push([r, e])
                        }),
                            u(t)
                    }
                    ,
                    e.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
                var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                b.prototype.clone = function () {
                    return new b(this, {
                        body: this._bodyInit
                    })
                }
                    ,
                    c.call(b.prototype),
                    c.call(w.prototype),
                    w.prototype.clone = function () {
                        return new w(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new f(this.headers),
                            url: this.url
                        })
                    }
                    ,
                    w.error = function () {
                        var t = new w(null, {
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error",
                            t
                    }
                    ;
                var s = [301, 302, 303, 307, 308];
                w.redirect = function (t, e) {
                    if (-1 === s.indexOf(e))
                        throw new RangeError("Invalid status code");
                    return new w(null, {
                        status: e,
                        headers: {
                            location: t
                        }
                    })
                }
                    ,
                    t.Headers = f,
                    t.Request = b,
                    t.Response = w,
                    t.fetch = function (t, r) {
                        return new Promise(function (o, n) {
                            var i = new b(t, r)
                                , s = new XMLHttpRequest;
                            s.onload = function () {
                                var t, e, r = {
                                    status: s.status,
                                    statusText: s.statusText,
                                    headers: (t = s.getAllResponseHeaders() || "",
                                        e = new f,
                                        t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (t) {
                                            var r = t.split(":")
                                                , o = r.shift().trim();
                                            if (o) {
                                                var n = r.join(":").trim();
                                                e.append(o, n)
                                            }
                                        }),
                                        e)
                                };
                                r.url = "responseURL" in s ? s.responseURL : r.headers.get("X-Request-URL");
                                var n = "response" in s ? s.response : s.responseText;
                                o(new w(n, r))
                            }
                                ,
                                s.onerror = function () {
                                    n(new TypeError("Network request failed"))
                                }
                                ,
                                s.ontimeout = function () {
                                    n(new TypeError("Network request failed"))
                                }
                                ,
                                s.open(i.method, i.url, !0),
                                "include" === i.credentials ? s.withCredentials = !0 : "omit" === i.credentials && (s.withCredentials = !1),
                                "responseType" in s && e.blob && (s.responseType = "blob"),
                                i.headers.forEach(function (t, e) {
                                    s.setRequestHeader(e, t)
                                }),
                                s.send(void 0 === i._bodyInit ? null : i._bodyInit)
                        }
                        )
                    }
                    ,
                    t.fetch.polyfill = !0
            }
            function a(t) {
                if ("string" != typeof t && (t = String(t)),
                    /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                    throw new TypeError("Invalid character in header field name");
                return t.toLowerCase()
            }
            function h(t) {
                return "string" != typeof t && (t = String(t)),
                    t
            }
            function u(t) {
                var r = {
                    next: function () {
                        var e = t.shift();
                        return {
                            done: void 0 === e,
                            value: e
                        }
                    }
                };
                return e.iterable && (r[Symbol.iterator] = function () {
                    return r
                }
                ),
                    r
            }
            function f(t) {
                this.map = {},
                    t instanceof f ? t.forEach(function (t, e) {
                        this.append(e, t)
                    }, this) : Array.isArray(t) ? t.forEach(function (t) {
                        this.append(t[0], t[1])
                    }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
                        this.append(e, t[e])
                    }, this)
            }
            function d(t) {
                if (t.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                t.bodyUsed = !0
            }
            function y(t) {
                return new Promise(function (e, r) {
                    t.onload = function () {
                        e(t.result)
                    }
                        ,
                        t.onerror = function () {
                            r(t.error)
                        }
                }
                )
            }
            function l(t) {
                var e = new FileReader
                    , r = y(e);
                return e.readAsArrayBuffer(t),
                    r
            }
            function p(t) {
                if (t.slice)
                    return t.slice(0);
                var e = new Uint8Array(t.byteLength);
                return e.set(new Uint8Array(t)),
                    e.buffer
            }
            function c() {
                return this.bodyUsed = !1,
                    this._initBody = function (t) {
                        if (this._bodyInit = t,
                            t)
                            if ("string" == typeof t)
                                this._bodyText = t;
                            else if (e.blob && Blob.prototype.isPrototypeOf(t))
                                this._bodyBlob = t;
                            else if (e.formData && FormData.prototype.isPrototypeOf(t))
                                this._bodyFormData = t;
                            else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
                                this._bodyText = t.toString();
                            else if (e.arrayBuffer && e.blob && o(t))
                                this._bodyArrayBuffer = p(t.buffer),
                                    this._bodyInit = new Blob([this._bodyArrayBuffer]);
                            else {
                                if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !n(t))
                                    throw new Error("unsupported BodyInit type");
                                this._bodyArrayBuffer = p(t)
                            }
                        else
                            this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }
                    ,
                    e.blob && (this.blob = function () {
                        var t = d(this);
                        if (t)
                            return t;
                        if (this._bodyBlob)
                            return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }
                        ,
                        this.arrayBuffer = function () {
                            return this._bodyArrayBuffer ? d(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l)
                        }
                    ),
                    this.text = function () {
                        var t, e, r, o = d(this);
                        if (o)
                            return o;
                        if (this._bodyBlob)
                            return t = this._bodyBlob,
                                e = new FileReader,
                                r = y(e),
                                e.readAsText(t),
                                r;
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(function (t) {
                                for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++)
                                    r[o] = String.fromCharCode(e[o]);
                                return r.join("")
                            }(this._bodyArrayBuffer));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }
                    ,
                    e.formData && (this.formData = function () {
                        return this.text().then(m)
                    }
                    ),
                    this.json = function () {
                        return this.text().then(JSON.parse)
                    }
                    ,
                    this
            }
            function b(t, e) {
                var r, o, n = (e = e || {}).body;
                if (t instanceof b) {
                    if (t.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = t.url,
                        this.credentials = t.credentials,
                        e.headers || (this.headers = new f(t.headers)),
                        this.method = t.method,
                        this.mode = t.mode,
                        n || null == t._bodyInit || (n = t._bodyInit,
                            t.bodyUsed = !0)
                } else
                    this.url = String(t);
                if (this.credentials = e.credentials || this.credentials || "omit",
                    !e.headers && this.headers || (this.headers = new f(e.headers)),
                    this.method = (r = e.method || this.method || "GET",
                        o = r.toUpperCase(),
                        i.indexOf(o) > -1 ? o : r),
                    this.mode = e.mode || this.mode || null,
                    this.referrer = null,
                    ("GET" === this.method || "HEAD" === this.method) && n)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(n)
            }
            function m(t) {
                var e = new FormData;
                return t.trim().split("&").forEach(function (t) {
                    if (t) {
                        var r = t.split("=")
                            , o = r.shift().replace(/\+/g, " ")
                            , n = r.join("=").replace(/\+/g, " ");
                        e.append(decodeURIComponent(o), decodeURIComponent(n))
                    }
                }),
                    e
            }
            function w(t, e) {
                e || (e = {}),
                    this.type = "default",
                    this.status = void 0 === e.status ? 200 : e.status,
                    this.ok = this.status >= 200 && this.status < 300,
                    this.statusText = "statusText" in e ? e.statusText : "OK",
                    this.headers = new f(e.headers),
                    this.url = e.url || "",
                    this._initBody(t)
            }
        }("undefined" != typeof self ? self : this);
    }
        , {}],
    "wGjj": [function (require, module, exports) {
        var global = arguments[3];
        var t = arguments[3];
        require("whatwg-fetch");
        var n = setTimeout;
        function e() { }
        function r(t, n) {
            return function () {
                t.apply(n, arguments)
            }
        }
        function o(t) {
            if (!(this instanceof o))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t)
                throw new TypeError("not a function");
            this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                s(t, this)
        }
        function i(t, n) {
            for (; 3 === t._state;)
                t = t._value;
            0 !== t._state ? (t._handled = !0,
                o._immediateFn(function () {
                    var e = 1 === t._state ? n.onFulfilled : n.onRejected;
                    if (null !== e) {
                        var r;
                        try {
                            r = e(t._value)
                        } catch (o) {
                            return void c(n.promise, o)
                        }
                        u(n.promise, r)
                    } else
                        (1 === t._state ? u : c)(n.promise, t._value)
                })) : t._deferreds.push(n)
        }
        function u(t, n) {
            try {
                if (n === t)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (n && ("object" == typeof n || "function" == typeof n)) {
                    var e = n.then;
                    if (n instanceof o)
                        return t._state = 3,
                            t._value = n,
                            void f(t);
                    if ("function" == typeof e)
                        return void s(r(e, n), t)
                }
                t._state = 1,
                    t._value = n,
                    f(t)
            } catch (i) {
                c(t, i)
            }
        }
        function c(t, n) {
            t._state = 2,
                t._value = n,
                f(t)
        }
        function f(t) {
            2 === t._state && 0 === t._deferreds.length && o._immediateFn(function () {
                t._handled || o._unhandledRejectionFn(t._value)
            });
            for (var n = 0, e = t._deferreds.length; n < e; n++)
                i(t, t._deferreds[n]);
            t._deferreds = null
        }
        function a(t, n, e) {
            this.onFulfilled = "function" == typeof t ? t : null,
                this.onRejected = "function" == typeof n ? n : null,
                this.promise = e
        }
        function s(t, n) {
            var e = !1;
            try {
                t(function (t) {
                    e || (e = !0,
                        u(n, t))
                }, function (t) {
                    e || (e = !0,
                        c(n, t))
                })
            } catch (r) {
                if (e)
                    return;
                e = !0,
                    c(n, r)
            }
        }
        o.prototype.catch = function (t) {
            return this.then(null, t)
        }
            ,
            o.prototype.then = function (t, n) {
                var r = new this.constructor(e);
                return i(this, new a(t, n, r)),
                    r
            }
            ,
            o.prototype.finally = function (t) {
                var n = this.constructor;
                return this.then(function (e) {
                    return n.resolve(t()).then(function () {
                        return e
                    })
                }, function (e) {
                    return n.resolve(t()).then(function () {
                        return n.reject(e)
                    })
                })
            }
            ,
            o.all = function (t) {
                return new o(function (n, e) {
                    if (!t || void 0 === t.length)
                        throw new TypeError("Promise.all accepts an array");
                    var r = Array.prototype.slice.call(t);
                    if (0 === r.length)
                        return n([]);
                    var o = r.length;
                    function i(t, u) {
                        try {
                            if (u && ("object" == typeof u || "function" == typeof u)) {
                                var c = u.then;
                                if ("function" == typeof c)
                                    return void c.call(u, function (n) {
                                        i(t, n)
                                    }, e)
                            }
                            r[t] = u,
                                0 == --o && n(r)
                        } catch (f) {
                            e(f)
                        }
                    }
                    for (var u = 0; u < r.length; u++)
                        i(u, r[u])
                }
                )
            }
            ,
            o.resolve = function (t) {
                return t && "object" == typeof t && t.constructor === o ? t : new o(function (n) {
                    n(t)
                }
                )
            }
            ,
            o.reject = function (t) {
                return new o(function (n, e) {
                    e(t)
                }
                )
            }
            ,
            o.race = function (t) {
                return new o(function (n, e) {
                    for (var r = 0, o = t.length; r < o; r++)
                        t[r].then(n, e)
                }
                )
            }
            ,
            o._immediateFn = "function" == typeof setImmediate && function (t) {
                setImmediate(t)
            }
            || function (t) {
                n(t, 0)
            }
            ,
            o._unhandledRejectionFn = function (t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            }
            ;
        var l = function () {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if (void 0 !== t)
                return t;
            throw new Error("unable to locate global object")
        }();
        function p(t, n) {
            return t(n = {
                exports: {}
            }, n.exports),
                n.exports
        }
        l.Promise || (l.Promise = o);
        var h = p(function (t) {
            var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        })
            , y = p(function (t) {
                var n = t.exports = {
                    version: "2.5.5"
                };
                "number" == typeof __e && (__e = n)
            })
            , v = y.version
            , d = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
            , g = function (t) {
                if (!d(t))
                    throw TypeError(t + " is not an object!");
                return t
            }
            , m = function (t) {
                try {
                    return !!t()
                } catch (n) {
                    return !0
                }
            }
            , b = !m(function () {
                return 7 != Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
            , S = h.document
            , w = d(S) && d(S.createElement)
            , _ = function (t) {
                return w ? S.createElement(t) : {}
            }
            , O = !b && !m(function () {
                return 7 != Object.defineProperty(_("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
            , j = function (t, n) {
                if (!d(t))
                    return t;
                var e, r;
                if (n && "function" == typeof (e = t.toString) && !d(r = e.call(t)))
                    return r;
                if ("function" == typeof (e = t.valueOf) && !d(r = e.call(t)))
                    return r;
                if (!n && "function" == typeof (e = t.toString) && !d(r = e.call(t)))
                    return r;
                throw TypeError("Can't convert object to primitive value")
            }
            , P = Object.defineProperty
            , E = b ? Object.defineProperty : function (t, n, e) {
                if (g(t),
                    n = j(n, !0),
                    g(e),
                    O)
                    try {
                        return P(t, n, e)
                    } catch (r) { }
                if ("get" in e || "set" in e)
                    throw TypeError("Accessors not supported!");
                return "value" in e && (t[n] = e.value),
                    t
            }
            , T = {
                f: E
            }
            , A = function (t, n) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: n
                }
            }
            , F = b ? function (t, n, e) {
                return T.f(t, n, A(1, e))
            }
                : function (t, n, e) {
                    return t[n] = e,
                        t
                }
            , L = {}.hasOwnProperty
            , M = function (t, n) {
                return L.call(t, n)
            }
            , k = 0
            , x = Math.random()
            , I = function (t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++k + x).toString(36))
            }
            , N = p(function (t) {
                var n = I("src")
                    , e = Function.toString
                    , r = ("" + e).split("toString");
                y.inspectSource = function (t) {
                    return e.call(t)
                }
                    ,
                    (t.exports = function (t, e, o, i) {
                        var u = "function" == typeof o;
                        u && (M(o, "name") || F(o, "name", e)),
                            t[e] !== o && (u && (M(o, n) || F(o, n, t[e] ? "" + t[e] : r.join(String(e)))),
                                t === h ? t[e] = o : i ? t[e] ? t[e] = o : F(t, e, o) : (delete t[e],
                                    F(t, e, o)))
                    }
                    )(Function.prototype, "toString", function () {
                        return "function" == typeof this && this[n] || e.call(this)
                    })
            })
            , C = function (t) {
                if ("function" != typeof t)
                    throw TypeError(t + " is not a function!");
                return t
            }
            , R = function (t, n, e) {
                if (C(t),
                    void 0 === n)
                    return t;
                switch (e) {
                    case 1:
                        return function (e) {
                            return t.call(n, e)
                        }
                            ;
                    case 2:
                        return function (e, r) {
                            return t.call(n, e, r)
                        }
                            ;
                    case 3:
                        return function (e, r, o) {
                            return t.call(n, e, r, o)
                        }
                }
                return function () {
                    return t.apply(n, arguments)
                }
            }
            , D = "prototype"
            , G = function (t, n, e) {
                var r, o, i, u, c = t & G.F, f = t & G.G, a = t & G.S, s = t & G.P, l = t & G.B, p = f ? h : a ? h[n] || (h[n] = {}) : (h[n] || {})[D], v = f ? y : y[n] || (y[n] = {}), d = v[D] || (v[D] = {});
                for (r in f && (e = n),
                    e)
                    i = ((o = !c && p && void 0 !== p[r]) ? p : e)[r],
                        u = l && o ? R(i, h) : s && "function" == typeof i ? R(Function.call, i) : i,
                        p && N(p, r, i, t & G.U),
                        v[r] != i && F(v, r, u),
                        s && d[r] != i && (d[r] = i)
            };
        h.core = y,
            G.F = 1,
            G.G = 2,
            G.S = 4,
            G.P = 8,
            G.B = 16,
            G.W = 32,
            G.U = 64,
            G.R = 128;
        var W = G
            , V = {}.toString
            , z = function (t) {
                return V.call(t).slice(8, -1)
            }
            , K = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
                return "String" == z(t) ? t.split("") : Object(t)
            }
            , H = function (t) {
                if (null == t)
                    throw TypeError("Can't call method on  " + t);
                return t
            }
            , J = function (t) {
                return Object(H(t))
            }
            , U = Math.ceil
            , q = Math.floor
            , B = function (t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? q : U)(t)
            }
            , Y = Math.min
            , Q = function (t) {
                return t > 0 ? Y(B(t), 9007199254740991) : 0
            }
            , X = Array.isArray || function (t) {
                return "Array" == z(t)
            }
            , Z = "__core-js_shared__"
            , $ = h[Z] || (h[Z] = {})
            , tt = function (t) {
                return $[t] || ($[t] = {})
            }
            , nt = p(function (t) {
                var n = tt("wks")
                    , e = h.Symbol
                    , r = "function" == typeof e;
                (t.exports = function (t) {
                    return n[t] || (n[t] = r && e[t] || (r ? e : I)("Symbol." + t))
                }
                ).store = n
            })
            , et = nt("species")
            , rt = function (t) {
                var n;
                return X(t) && ("function" != typeof (n = t.constructor) || n !== Array && !X(n.prototype) || (n = void 0),
                    d(n) && null === (n = n[et]) && (n = void 0)),
                    void 0 === n ? Array : n
            }
            , ot = function (t, n) {
                return new (rt(t))(n)
            }
            , it = function (t, n) {
                var e = 1 == t
                    , r = 2 == t
                    , o = 3 == t
                    , i = 4 == t
                    , u = 6 == t
                    , c = 5 == t || u
                    , f = n || ot;
                return function (n, a, s) {
                    for (var l, p, h = J(n), y = K(h), v = R(a, s, 3), d = Q(y.length), g = 0, m = e ? f(n, d) : r ? f(n, 0) : void 0; d > g; g++)
                        if ((c || g in y) && (p = v(l = y[g], g, h),
                            t))
                            if (e)
                                m[g] = p;
                            else if (p)
                                switch (t) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return l;
                                    case 6:
                                        return g;
                                    case 2:
                                        m.push(l)
                                }
                            else if (i)
                                return !1;
                    return u ? -1 : o || i ? i : m
                }
            }
            , ut = nt("unscopables")
            , ct = Array.prototype;
        null == ct[ut] && F(ct, ut, {});
        var ft = function (t) {
            ct[ut][t] = !0
        }
            , at = it(5)
            , st = "find"
            , lt = !0;
        st in [] && Array(1)[st](function () {
            lt = !1
        }),
            W(W.P + W.F * lt, "Array", {
                find: function (t) {
                    return at(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }),
            ft(st);
        var pt = y.Array.find
            , ht = it(6)
            , yt = "findIndex"
            , vt = !0;
        yt in [] && Array(1)[yt](function () {
            vt = !1
        }),
            W(W.P + W.F * vt, "Array", {
                findIndex: function (t) {
                    return ht(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }),
            ft(yt);
        var dt = y.Array.findIndex
            , gt = function (t) {
                return K(H(t))
            }
            , mt = Math.max
            , bt = Math.min
            , St = function (t, n) {
                return (t = B(t)) < 0 ? mt(t + n, 0) : bt(t, n)
            }
            , wt = function (t) {
                return function (n, e, r) {
                    var o, i = gt(n), u = Q(i.length), c = St(r, u);
                    if (t && e != e) {
                        for (; u > c;)
                            if ((o = i[c++]) != o)
                                return !0
                    } else
                        for (; u > c; c++)
                            if ((t || c in i) && i[c] === e)
                                return t || c || 0;
                    return !t && -1
                }
            }
            , _t = tt("keys")
            , Ot = function (t) {
                return _t[t] || (_t[t] = I(t))
            }
            , jt = wt(!1)
            , Pt = Ot("IE_PROTO")
            , Et = function (t, n) {
                var e, r = gt(t), o = 0, i = [];
                for (e in r)
                    e != Pt && M(r, e) && i.push(e);
                for (; n.length > o;)
                    M(r, e = n[o++]) && (~jt(i, e) || i.push(e));
                return i
            }
            , Tt = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
            , At = Object.keys || function (t) {
                return Et(t, Tt)
            }
            , Ft = Object.getOwnPropertySymbols
            , Lt = {
                f: Ft
            }
            , Mt = {}.propertyIsEnumerable
            , kt = {
                f: Mt
            }
            , xt = Object.assign
            , It = !xt || m(function () {
                var t = {}
                    , n = {}
                    , e = Symbol()
                    , r = "abcdefghijklmnopqrst";
                return t[e] = 7,
                    r.split("").forEach(function (t) {
                        n[t] = t
                    }),
                    7 != xt({}, t)[e] || Object.keys(xt({}, n)).join("") != r
            }) ? function (t, n) {
                for (var e = J(t), r = arguments.length, o = 1, i = Lt.f, u = kt.f; r > o;)
                    for (var c, f = K(arguments[o++]), a = i ? At(f).concat(i(f)) : At(f), s = a.length, l = 0; s > l;)
                        u.call(f, c = a[l++]) && (e[c] = f[c]);
                return e
            }
                : xt;
        W(W.S + W.F, "Object", {
            assign: It
        });
        var Nt = y.Object.assign
            , Ct = nt("match")
            , Rt = function (t) {
                var n;
                return d(t) && (void 0 !== (n = t[Ct]) ? !!n : "RegExp" == z(t))
            }
            , Dt = function (t, n, e) {
                if (Rt(n))
                    throw TypeError("String#" + e + " doesn't accept regex!");
                return String(H(t))
            }
            , Gt = nt("match")
            , Wt = function (t) {
                var n = /./;
                try {
                    "/./"[t](n)
                } catch (e) {
                    try {
                        return n[Gt] = !1,
                            !"/./"[t](n)
                    } catch (E) { }
                }
                return !0
            }
            , Vt = "startsWith"
            , zt = ""[Vt];
        W(W.P + W.F * Wt(Vt), "String", {
            startsWith: function (t) {
                var n = Dt(this, t, Vt)
                    , e = Q(Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length))
                    , r = String(t);
                return zt ? zt.call(n, r, e) : n.slice(e, e + r.length) === r
            }
        });
        var Kt = y.String.startsWith
            , Ht = function (t) {
                var n = String(H(this))
                    , e = ""
                    , r = B(t);
                if (r < 0 || r == 1 / 0)
                    throw RangeError("Count can't be negative");
                for (; r > 0; (r >>>= 1) && (n += n))
                    1 & r && (e += n);
                return e
            };
        W(W.P, "String", {
            repeat: Ht
        });
        var Jt = y.String.repeat
            , Ut = p(function (t) {
                var n = I("meta")
                    , e = T.f
                    , r = 0
                    , o = Object.isExtensible || function () {
                        return !0
                    }
                    , i = !m(function () {
                        return o(Object.preventExtensions({}))
                    })
                    , u = function (t) {
                        e(t, n, {
                            value: {
                                i: "O" + ++r,
                                w: {}
                            }
                        })
                    }
                    , c = t.exports = {
                        KEY: n,
                        NEED: !1,
                        fastKey: function (t, e) {
                            if (!d(t))
                                return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                            if (!M(t, n)) {
                                if (!o(t))
                                    return "F";
                                if (!e)
                                    return "E";
                                u(t)
                            }
                            return t[n].i
                        },
                        getWeak: function (t, e) {
                            if (!M(t, n)) {
                                if (!o(t))
                                    return !0;
                                if (!e)
                                    return !1;
                                u(t)
                            }
                            return t[n].w
                        },
                        onFreeze: function (t) {
                            return i && c.NEED && o(t) && !M(t, n) && u(t),
                                t
                        }
                    }
            })
            , qt = Ut.KEY
            , Bt = Ut.NEED
            , Yt = Ut.fastKey
            , Qt = Ut.getWeak
            , Xt = Ut.onFreeze
            , Zt = T.f
            , $t = nt("toStringTag")
            , tn = function (t, n, e) {
                t && !M(t = e ? t : t.prototype, $t) && Zt(t, $t, {
                    configurable: !0,
                    value: n
                })
            }
            , nn = nt
            , en = {
                f: nn
            }
            , rn = !1
            , on = T.f
            , un = function (t) {
                var n = y.Symbol || (y.Symbol = rn ? {} : h.Symbol || {});
                "_" == t.charAt(0) || t in n || on(n, t, {
                    value: en.f(t)
                })
            }
            , cn = function (t) {
                var n = At(t)
                    , e = Lt.f;
                if (e)
                    for (var r, o = e(t), i = kt.f, u = 0; o.length > u;)
                        i.call(t, r = o[u++]) && n.push(r);
                return n
            }
            , fn = b ? Object.defineProperties : function (t, n) {
                g(t);
                for (var e, r = At(n), o = r.length, i = 0; o > i;)
                    T.f(t, e = r[i++], n[e]);
                return t
            }
            , an = h.document
            , sn = an && an.documentElement
            , ln = Ot("IE_PROTO")
            , pn = function () { }
            , hn = "prototype"
            , yn = function () {
                var t, n = _("iframe"), e = Tt.length;
                for (n.style.display = "none",
                    sn.appendChild(n),
                    n.src = "javascript:",
                    (t = n.contentWindow.document).open(),
                    t.write("<script>document.F=Object<\/script>"),
                    t.close(),
                    yn = t.F; e--;)
                    delete yn[hn][Tt[e]];
                return yn()
            }
            , vn = Object.create || function (t, n) {
                var e;
                return null !== t ? (pn[hn] = g(t),
                    e = new pn,
                    pn[hn] = null,
                    e[ln] = t) : e = yn(),
                    void 0 === n ? e : fn(e, n)
            }
            , dn = Tt.concat("length", "prototype")
            , gn = Object.getOwnPropertyNames || function (t) {
                return Et(t, dn)
            }
            , mn = {
                f: gn
            }
            , bn = mn.f
            , Sn = {}.toString
            , wn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
            , _n = function (t) {
                try {
                    return bn(t)
                } catch (n) {
                    return wn.slice()
                }
            }
            , On = function (t) {
                return wn && "[object Window]" == Sn.call(t) ? _n(t) : bn(gt(t))
            }
            , jn = {
                f: On
            }
            , Pn = Object.getOwnPropertyDescriptor
            , En = b ? Pn : function (t, n) {
                if (t = gt(t),
                    n = j(n, !0),
                    O)
                    try {
                        return Pn(t, n)
                    } catch (e) { }
                if (M(t, n))
                    return A(!kt.f.call(t, n), t[n])
            }
            , Tn = {
                f: En
            }
            , An = Ut.KEY
            , Fn = Tn.f
            , Ln = T.f
            , Mn = jn.f
            , kn = h.Symbol
            , xn = h.JSON
            , In = xn && xn.stringify
            , Nn = "prototype"
            , Cn = nt("_hidden")
            , Rn = nt("toPrimitive")
            , Dn = {}.propertyIsEnumerable
            , Gn = tt("symbol-registry")
            , Wn = tt("symbols")
            , Vn = tt("op-symbols")
            , zn = Object[Nn]
            , Kn = "function" == typeof kn
            , Hn = h.QObject
            , Jn = !Hn || !Hn[Nn] || !Hn[Nn].findChild
            , Un = b && m(function () {
                return 7 != vn(Ln({}, "a", {
                    get: function () {
                        return Ln(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function (t, n, e) {
                var r = Fn(zn, n);
                r && delete zn[n],
                    Ln(t, n, e),
                    r && t !== zn && Ln(zn, n, r)
            }
                : Ln
            , qn = function (t) {
                var n = Wn[t] = vn(kn[Nn]);
                return n._k = t,
                    n
            }
            , Bn = Kn && "symbol" == typeof kn.iterator ? function (t) {
                return "symbol" == typeof t
            }
                : function (t) {
                    return t instanceof kn
                }
            , Yn = function (t, n, e) {
                return t === zn && Yn(Vn, n, e),
                    g(t),
                    n = j(n, !0),
                    g(e),
                    M(Wn, n) ? (e.enumerable ? (M(t, Cn) && t[Cn][n] && (t[Cn][n] = !1),
                        e = vn(e, {
                            enumerable: A(0, !1)
                        })) : (M(t, Cn) || Ln(t, Cn, A(1, {})),
                            t[Cn][n] = !0),
                        Un(t, n, e)) : Ln(t, n, e)
            }
            , Qn = function (t, n) {
                g(t);
                for (var e, r = cn(n = gt(n)), o = 0, i = r.length; i > o;)
                    Yn(t, e = r[o++], n[e]);
                return t
            }
            , Xn = function (t, n) {
                return void 0 === n ? vn(t) : Qn(vn(t), n)
            }
            , Zn = function (t) {
                var n = Dn.call(this, t = j(t, !0));
                return !(this === zn && M(Wn, t) && !M(Vn, t)) && (!(n || !M(this, t) || !M(Wn, t) || M(this, Cn) && this[Cn][t]) || n)
            }
            , $n = function (t, n) {
                if (t = gt(t),
                    n = j(n, !0),
                    t !== zn || !M(Wn, n) || M(Vn, n)) {
                    var e = Fn(t, n);
                    return !e || !M(Wn, n) || M(t, Cn) && t[Cn][n] || (e.enumerable = !0),
                        e
                }
            }
            , te = function (t) {
                for (var n, e = Mn(gt(t)), r = [], o = 0; e.length > o;)
                    M(Wn, n = e[o++]) || n == Cn || n == An || r.push(n);
                return r
            }
            , ne = function (t) {
                for (var n, e = t === zn, r = Mn(e ? Vn : gt(t)), o = [], i = 0; r.length > i;)
                    !M(Wn, n = r[i++]) || e && !M(zn, n) || o.push(Wn[n]);
                return o
            };
        Kn || (N((kn = function () {
            if (this instanceof kn)
                throw TypeError("Symbol is not a constructor!");
            var t = I(arguments.length > 0 ? arguments[0] : void 0)
                , n = function (e) {
                    this === zn && n.call(Vn, e),
                        M(this, Cn) && M(this[Cn], t) && (this[Cn][t] = !1),
                        Un(this, t, A(1, e))
                };
            return b && Jn && Un(zn, t, {
                configurable: !0,
                set: n
            }),
                qn(t)
        }
        )[Nn], "toString", function () {
            return this._k
        }),
            Tn.f = $n,
            T.f = Yn,
            mn.f = jn.f = te,
            kt.f = Zn,
            Lt.f = ne,
            b && !rn && N(zn, "propertyIsEnumerable", Zn, !0),
            en.f = function (t) {
                return qn(nt(t))
            }
        ),
            W(W.G + W.W + W.F * !Kn, {
                Symbol: kn
            });
        for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; ee.length > re;)
            nt(ee[re++]);
        for (var oe = At(nt.store), ie = 0; oe.length > ie;)
            un(oe[ie++]);
        W(W.S + W.F * !Kn, "Symbol", {
            for: function (t) {
                return M(Gn, t += "") ? Gn[t] : Gn[t] = kn(t)
            },
            keyFor: function (t) {
                if (!Bn(t))
                    throw TypeError(t + " is not a symbol!");
                for (var n in Gn)
                    if (Gn[n] === t)
                        return n
            },
            useSetter: function () {
                Jn = !0
            },
            useSimple: function () {
                Jn = !1
            }
        }),
            W(W.S + W.F * !Kn, "Object", {
                create: Xn,
                defineProperty: Yn,
                defineProperties: Qn,
                getOwnPropertyDescriptor: $n,
                getOwnPropertyNames: te,
                getOwnPropertySymbols: ne
            }),
            xn && W(W.S + W.F * (!Kn || m(function () {
                var t = kn();
                return "[null]" != In([t]) || "{}" != In({
                    a: t
                }) || "{}" != In(Object(t))
            })), "JSON", {
                stringify: function (t) {
                    for (var n, e, r = [t], o = 1; arguments.length > o;)
                        r.push(arguments[o++]);
                    if (e = n = r[1],
                        (d(n) || void 0 !== t) && !Bn(t))
                        return X(n) || (n = function (t, n) {
                            if ("function" == typeof e && (n = e.call(this, t, n)),
                                !Bn(n))
                                return n
                        }
                        ),
                            r[1] = n,
                            In.apply(xn, r)
                }
            }),
            kn[Nn][Rn] || F(kn[Nn], Rn, kn[Nn].valueOf),
            tn(kn, "Symbol"),
            tn(Math, "Math", !0),
            tn(h.JSON, "JSON", !0);
        var ue = nt("toStringTag")
            , ce = "Arguments" == z(function () {
                return arguments
            }())
            , fe = function (t, n) {
                try {
                    return t[n]
                } catch (e) { }
            }
            , ae = function (t) {
                var n, e, r;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = fe(n = Object(t), ue)) ? e : ce ? z(n) : "Object" == (r = z(n)) && "function" == typeof n.callee ? "Arguments" : r
            }
            , se = {};
        se[nt("toStringTag")] = "z",
            se + "" != "[object z]" && N(Object.prototype, "toString", function () {
                return "[object " + ae(this) + "]"
            }, !0),
            un("asyncIterator"),
            un("observable");
        var le = y.Symbol
            , pe = function (t) {
                return function (n, e) {
                    var r, o, i = String(H(n)), u = B(e), c = i.length;
                    return u < 0 || u >= c ? t ? "" : void 0 : (r = i.charCodeAt(u)) < 55296 || r > 56319 || u + 1 === c || (o = i.charCodeAt(u + 1)) < 56320 || o > 57343 ? t ? i.charAt(u) : r : t ? i.slice(u, u + 2) : o - 56320 + (r - 55296 << 10) + 65536
                }
            }
            , he = {}
            , ye = {};
        F(ye, nt("iterator"), function () {
            return this
        });
        var ve = function (t, n, e) {
            t.prototype = vn(ye, {
                next: A(1, e)
            }),
                tn(t, n + " Iterator")
        }
            , de = Ot("IE_PROTO")
            , ge = Object.prototype
            , me = Object.getPrototypeOf || function (t) {
                return t = J(t),
                    M(t, de) ? t[de] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? ge : null
            }
            , be = nt("iterator")
            , Se = !([].keys && "next" in [].keys())
            , we = "@@iterator"
            , _e = "keys"
            , Oe = "values"
            , je = function () {
                return this
            }
            , Pe = function (t, n, e, r, o, i, u) {
                ve(e, n, r);
                var c, f, a, s = function (t) {
                    if (!Se && t in y)
                        return y[t];
                    switch (t) {
                        case _e:
                        case Oe:
                            return function () {
                                return new e(this, t)
                            }
                    }
                    return function () {
                        return new e(this, t)
                    }
                }, l = n + " Iterator", p = o == Oe, h = !1, y = t.prototype, v = y[be] || y[we] || o && y[o], d = v || s(o), g = o ? p ? s("entries") : d : void 0, m = "Array" == n && y.entries || v;
                if (m && (a = me(m.call(new t))) !== Object.prototype && a.next && (tn(a, l, !0),
                    rn || "function" == typeof a[be] || F(a, be, je)),
                    p && v && v.name !== Oe && (h = !0,
                        d = function () {
                            return v.call(this)
                        }
                    ),
                    rn && !u || !Se && !h && y[be] || F(y, be, d),
                    he[n] = d,
                    he[l] = je,
                    o)
                    if (c = {
                        values: p ? d : s(Oe),
                        keys: i ? d : s(_e),
                        entries: g
                    },
                        u)
                        for (f in c)
                            f in y || N(y, f, c[f]);
                    else
                        W(W.P + W.F * (Se || h), n, c);
                return c
            }
            , Ee = pe(!0);
        Pe(String, "String", function (t) {
            this._t = String(t),
                this._i = 0
        }, function () {
            var t, n = this._t, e = this._i;
            return e >= n.length ? {
                value: void 0,
                done: !0
            } : (t = Ee(n, e),
                this._i += t.length,
            {
                value: t,
                done: !1
            })
        });
        var Te = function (t, n) {
            return {
                value: n,
                done: !!t
            }
        }
            , Ae = Pe(Array, "Array", function (t, n) {
                this._t = gt(t),
                    this._i = 0,
                    this._k = n
            }, function () {
                var t = this._t
                    , n = this._k
                    , e = this._i++;
                return !t || e >= t.length ? (this._t = void 0,
                    Te(1)) : Te(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]])
            }, "values");
        he.Arguments = he.Array,
            ft("keys"),
            ft("values"),
            ft("entries");
        for (var Fe = nt("iterator"), Le = nt("toStringTag"), Me = he.Array, ke = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, xe = At(ke), Ie = 0; Ie < xe.length; Ie++) {
            var Ne, Ce = xe[Ie], Re = ke[Ce], De = h[Ce], Ge = De && De.prototype;
            if (Ge && (Ge[Fe] || F(Ge, Fe, Me),
                Ge[Le] || F(Ge, Le, Ce),
                he[Ce] = Me,
                Re))
                for (Ne in Ae)
                    Ge[Ne] || N(Ge, Ne, Ae[Ne], !0)
        }
        var We = en.f("iterator");
    }
        , {
        "whatwg-fetch": "cpTA"
    }],
    "vCxL": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
            exports.__extends = e,
            exports.__rest = n,
            exports.__decorate = o,
            exports.__param = a,
            exports.__metadata = c,
            exports.__awaiter = i,
            exports.__generator = u,
            exports.__exportStar = f,
            exports.__values = l,
            exports.__read = s,
            exports.__spread = p,
            exports.__await = y,
            exports.__asyncGenerator = _,
            exports.__asyncDelegator = h,
            exports.__asyncValues = b,
            exports.__makeTemplateObject = v,
            exports.__importStar = d,
            exports.__importDefault = x,
            exports.__assign = void 0;
        var t = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, e) {
            t.__proto__ = e
        }
            || function (t, e) {
                for (var r in e)
                    e.hasOwnProperty(r) && (t[r] = e[r])
            }
            ;
        function e(e, r) {
            function n() {
                this.constructor = e
            }
            t(e, r),
                e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                    new n)
        }
        var r = Object.assign || function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in e = arguments[r])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
            ;
        function n(t, e) {
            var r = {};
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
                    e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]])
            }
            return r
        }
        function o(t, e, r, n) {
            var o, a = arguments.length, c = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                c = Reflect.decorate(t, e, r, n);
            else
                for (var i = t.length - 1; i >= 0; i--)
                    (o = t[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(e, r, c) : o(e, r)) || c);
            return a > 3 && c && Object.defineProperty(e, r, c),
                c
        }
        function a(t, e) {
            return function (r, n) {
                e(r, n, t)
            }
        }
        function c(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
        }
        function i(t, e, r, n) {
            return new (r || (r = Promise))(function (o, a) {
                function c(t) {
                    try {
                        u(n.next(t))
                    } catch (e) {
                        a(e)
                    }
                }
                function i(t) {
                    try {
                        u(n.throw(t))
                    } catch (e) {
                        a(e)
                    }
                }
                function u(t) {
                    t.done ? o(t.value) : new r(function (e) {
                        e(t.value)
                    }
                    ).then(c, i)
                }
                u((n = n.apply(t, e || [])).next())
            }
            )
        }
        function u(t, e) {
            var r, n, o, a, c = {
                label: 0,
                sent: function () {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: i(0),
                throw: i(1),
                return: i(2)
            },
                "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                    return this
                }
                ),
                a;
            function i(a) {
                return function (i) {
                    return function (a) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; c;)
                            try {
                                if (r = 1,
                                    n && (o = n[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(o = o.call(n, a[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (a = [0, o.value]),
                                a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return c.label++,
                                        {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        c.label++,
                                            n = a[1],
                                            a = [0];
                                        continue;
                                    case 7:
                                        a = c.ops.pop(),
                                            c.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            c = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            c.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && c.label < o[1]) {
                                            c.label = o[1],
                                                o = a;
                                            break
                                        }
                                        if (o && c.label < o[2]) {
                                            c.label = o[2],
                                                c.ops.push(a);
                                            break
                                        }
                                        o[2] && c.ops.pop(),
                                            c.trys.pop();
                                        continue
                                }
                                a = e.call(t, c)
                            } catch (i) {
                                a = [6, i],
                                    n = 0
                            } finally {
                                r = o = 0
                            }
                        if (5 & a[0])
                            throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, i])
                }
            }
        }
        function f(t, e) {
            for (var r in t)
                e.hasOwnProperty(r) || (e[r] = t[r])
        }
        function l(t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator]
                , r = 0;
            return e ? e.call(t) : {
                next: function () {
                    return t && r >= t.length && (t = void 0),
                    {
                        value: t && t[r++],
                        done: !t
                    }
                }
            }
        }
        function s(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r)
                return t;
            var n, o, a = r.call(t), c = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = a.next()).done;)
                    c.push(n.value)
            } catch (i) {
                o = {
                    error: i
                }
            } finally {
                try {
                    n && !n.done && (r = a.return) && r.call(a)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return c
        }
        function p() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t = t.concat(s(arguments[e]));
            return t
        }
        function y(t) {
            return this instanceof y ? (this.v = t,
                this) : new y(t)
        }
        function _(t, e, r) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, o = r.apply(t, e || []), a = [];
            return n = {},
                c("next"),
                c("throw"),
                c("return"),
                n[Symbol.asyncIterator] = function () {
                    return this
                }
                ,
                n;
            function c(t) {
                o[t] && (n[t] = function (e) {
                    return new Promise(function (r, n) {
                        a.push([t, e, r, n]) > 1 || i(t, e)
                    }
                    )
                }
                )
            }
            function i(t, e) {
                try {
                    (r = o[t](e)).value instanceof y ? Promise.resolve(r.value.v).then(u, f) : l(a[0][2], r)
                } catch (n) {
                    l(a[0][3], n)
                }
                var r
            }
            function u(t) {
                i("next", t)
            }
            function f(t) {
                i("throw", t)
            }
            function l(t, e) {
                t(e),
                    a.shift(),
                    a.length && i(a[0][0], a[0][1])
            }
        }
        function h(t) {
            var e, r;
            return e = {},
                n("next"),
                n("throw", function (t) {
                    throw t
                }),
                n("return"),
                e[Symbol.iterator] = function () {
                    return this
                }
                ,
                e;
            function n(n, o) {
                t[n] && (e[n] = function (e) {
                    return (r = !r) ? {
                        value: y(t[n](e)),
                        done: "return" === n
                    } : o ? o(e) : e
                }
                )
            }
        }
        function b(t) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var e = t[Symbol.asyncIterator];
            return e ? e.call(t) : "function" == typeof l ? l(t) : t[Symbol.iterator]()
        }
        function v(t, e) {
            return Object.defineProperty ? Object.defineProperty(t, "raw", {
                value: e
            }) : t.raw = e,
                t
        }
        function d(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var r in t)
                    Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t,
                e
        }
        function x(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        exports.__assign = r;
    }
        , {}],
    "58xA": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var t = require("tslib")
            , r = {
                NODE_CLIENT: !1,
                NODE_ADMIN: !1,
                SDK_VERSION: "${JSCORE_VERSION}"
            }
            , e = function (t, r) {
                if (!t)
                    throw o(r)
            }
            , o = function (t) {
                return new Error("Firebase Database (" + r.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t)
            }
            , n = function (t) {
                for (var r = [], e = 0, o = 0; o < t.length; o++) {
                    var n = t.charCodeAt(o);
                    n < 128 ? r[e++] = n : n < 2048 ? (r[e++] = n >> 6 | 192,
                        r[e++] = 63 & n | 128) : 55296 == (64512 & n) && o + 1 < t.length && 56320 == (64512 & t.charCodeAt(o + 1)) ? (n = 65536 + ((1023 & n) << 10) + (1023 & t.charCodeAt(++o)),
                            r[e++] = n >> 18 | 240,
                            r[e++] = n >> 12 & 63 | 128,
                            r[e++] = n >> 6 & 63 | 128,
                            r[e++] = 63 & n | 128) : (r[e++] = n >> 12 | 224,
                                r[e++] = n >> 6 & 63 | 128,
                                r[e++] = 63 & n | 128)
                }
                return r
            }
            , i = function (t) {
                for (var r = [], e = 0, o = 0; e < t.length;) {
                    var n = t[e++];
                    if (n < 128)
                        r[o++] = String.fromCharCode(n);
                    else if (n > 191 && n < 224) {
                        var i = t[e++];
                        r[o++] = String.fromCharCode((31 & n) << 6 | 63 & i)
                    } else if (n > 239 && n < 365) {
                        var a = ((7 & n) << 18 | (63 & (i = t[e++])) << 12 | (63 & (s = t[e++])) << 6 | 63 & t[e++]) - 65536;
                        r[o++] = String.fromCharCode(55296 + (a >> 10)),
                            r[o++] = String.fromCharCode(56320 + (1023 & a))
                    } else {
                        i = t[e++];
                        var s = t[e++];
                        r[o++] = String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | 63 & s)
                    }
                }
                return r.join("")
            }
            , a = {
                byteToCharMap_: null,
                charToByteMap_: null,
                byteToCharMapWebSafe_: null,
                charToByteMapWebSafe_: null,
                ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                get ENCODED_VALS() {
                    return this.ENCODED_VALS_BASE + "+/="
                },
                get ENCODED_VALS_WEBSAFE() {
                    return this.ENCODED_VALS_BASE + "-_."
                },
                HAS_NATIVE_SUPPORT: "function" == typeof atob,
                encodeByteArray: function (t, r) {
                    if (!Array.isArray(t))
                        throw Error("encodeByteArray takes an array as a parameter");
                    this.init_();
                    for (var e = r ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, o = [], n = 0; n < t.length; n += 3) {
                        var i = t[n]
                            , a = n + 1 < t.length
                            , s = a ? t[n + 1] : 0
                            , c = n + 2 < t.length
                            , h = c ? t[n + 2] : 0
                            , u = i >> 2
                            , f = (3 & i) << 4 | s >> 4
                            , p = (15 & s) << 2 | h >> 6
                            , l = 63 & h;
                        c || (l = 64,
                            a || (p = 64)),
                            o.push(e[u], e[f], e[p], e[l])
                    }
                    return o.join("")
                },
                encodeString: function (t, r) {
                    return this.HAS_NATIVE_SUPPORT && !r ? btoa(t) : this.encodeByteArray(n(t), r)
                },
                decodeString: function (t, r) {
                    return this.HAS_NATIVE_SUPPORT && !r ? atob(t) : i(this.decodeStringToByteArray(t, r))
                },
                decodeStringToByteArray: function (t, r) {
                    this.init_();
                    for (var e = r ? this.charToByteMapWebSafe_ : this.charToByteMap_, o = [], n = 0; n < t.length;) {
                        var i = e[t.charAt(n++)]
                            , a = n < t.length ? e[t.charAt(n)] : 0
                            , s = ++n < t.length ? e[t.charAt(n)] : 64
                            , c = ++n < t.length ? e[t.charAt(n)] : 64;
                        if (++n,
                            null == i || null == a || null == s || null == c)
                            throw Error();
                        var h = i << 2 | a >> 4;
                        if (o.push(h),
                            64 != s) {
                            var u = a << 4 & 240 | s >> 2;
                            if (o.push(u),
                                64 != c) {
                                var f = s << 6 & 192 | c;
                                o.push(f)
                            }
                        }
                    }
                    return o
                },
                init_: function () {
                    if (!this.byteToCharMap_) {
                        this.byteToCharMap_ = {},
                            this.charToByteMap_ = {},
                            this.byteToCharMapWebSafe_ = {},
                            this.charToByteMapWebSafe_ = {};
                        for (var t = 0; t < this.ENCODED_VALS.length; t++)
                            this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t),
                                this.charToByteMap_[this.byteToCharMap_[t]] = t,
                                this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t),
                                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t,
                                t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t,
                                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t)
                    }
                }
            }
            , s = function (t) {
                var r = n(t);
                return a.encodeByteArray(r, !0)
            }
            , c = function (t) {
                try {
                    return a.decodeString(t, !0)
                } catch (r) {
                    console.error("base64Decode failed: ", r)
                }
                return null
            };
        function h(t) {
            return u(void 0, t)
        }
        function u(t, r) {
            if (!(r instanceof Object))
                return r;
            switch (r.constructor) {
                case Date:
                    return new Date(r.getTime());
                case Object:
                    void 0 === t && (t = {});
                    break;
                case Array:
                    t = [];
                    break;
                default:
                    return r
            }
            for (var e in r)
                r.hasOwnProperty(e) && (t[e] = u(t[e], r[e]));
            return t
        }
        function f(t, r, e) {
            t[r] = e
        }
        var p = function () {
            function t() {
                var t = this;
                this.promise = new Promise(function (r, e) {
                    t.resolve = r,
                        t.reject = e
                }
                )
            }
            return t.prototype.wrapCallback = function (t) {
                var r = this;
                return function (e, o) {
                    e ? r.reject(e) : r.resolve(o),
                        "function" == typeof t && (r.promise.catch(function () { }),
                            1 === t.length ? t(e) : t(e, o))
                }
            }
                ,
                t
        }()
            , l = function () {
                return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
            }
            , v = function () {
                return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())
            }
            , d = function () {
                return "object" == typeof navigator && "ReactNative" === navigator.product
            }
            , b = function () {
                return !0 === r.NODE_CLIENT || !0 === r.NODE_ADMIN
            }
            , y = "FirebaseError"
            , _ = Error.captureStackTrace;
        function E(t) {
            var r = _;
            return _ = t,
                r
        }
        var g = function () {
            return function (t, r) {
                if (this.code = t,
                    this.message = r,
                    _)
                    _(this, S.prototype.create);
                else
                    try {
                        throw Error.apply(this, arguments)
                    } catch (e) {
                        this.name = y,
                            Object.defineProperty(this, "stack", {
                                get: function () {
                                    return e.stack
                                }
                            })
                    }
            }
        }();
        g.prototype = Object.create(Error.prototype),
            g.prototype.constructor = g,
            g.prototype.name = y;
        var S = function () {
            function t(t, r, e) {
                this.service = t,
                    this.serviceName = r,
                    this.errors = e,
                    this.pattern = /\{\$([^}]+)}/g
            }
            return t.prototype.create = function (t, r) {
                void 0 === r && (r = {});
                var e, o = this.errors[t], n = this.service + "/" + t;
                e = void 0 === o ? "Error" : o.replace(this.pattern, function (t, e) {
                    var o = r[e];
                    return void 0 !== o ? o.toString() : "<" + e + "?>"
                }),
                    e = this.serviceName + ": " + e + " (" + n + ").";
                var i = new g(n, e);
                for (var a in r)
                    r.hasOwnProperty(a) && "_" !== a.slice(-1) && (i[a] = r[a]);
                return i
            }
                ,
                t
        }();
        function A(t) {
            return JSON.parse(t)
        }
        function x(t) {
            return JSON.stringify(t)
        }
        var C = function (t) {
            var r = {}
                , e = {}
                , o = {}
                , n = "";
            try {
                var i = t.split(".");
                r = A(c(i[0]) || ""),
                    e = A(c(i[1]) || ""),
                    n = i[2],
                    o = e.d || {},
                    delete e.d
            } catch (a) { }
            return {
                header: r,
                claims: e,
                data: o,
                signature: n
            }
        }
            , m = function (t) {
                var r, e, o = C(t).claims, n = Math.floor((new Date).getTime() / 1e3);
                return "object" == typeof o && (o.hasOwnProperty("nbf") ? r = o.nbf : o.hasOwnProperty("iat") && (r = o.iat),
                    e = o.hasOwnProperty("exp") ? o.exp : r + 86400),
                    n && r && e && n >= r && n <= e
            }
            , O = function (t) {
                var r = C(t).claims;
                return "object" == typeof r && r.hasOwnProperty("iat") ? r.iat : null
            }
            , w = function (t) {
                var r = C(t).claims;
                return !!r && "object" == typeof r && r.hasOwnProperty("iat")
            }
            , N = function (t) {
                var r = C(t).claims;
                return "object" == typeof r && !0 === r.admin
            }
            , T = function (t, r) {
                return Object.prototype.hasOwnProperty.call(t, r)
            }
            , D = function (t, r) {
                if (Object.prototype.hasOwnProperty.call(t, r))
                    return t[r]
            }
            , k = function (t, r) {
                for (var e in t)
                    Object.prototype.hasOwnProperty.call(t, e) && r(e, t[e])
            }
            , M = function (t, r) {
                return k(r, function (r, e) {
                    t[r] = e
                }),
                    t
            }
            , j = function (t) {
                return M({}, t)
            }
            , P = function (t) {
                return "object" == typeof t && null !== t
            }
            , B = function (t) {
                for (var r in t)
                    return !1;
                return !0
            }
            , V = function (t) {
                var r = 0;
                for (var e in t)
                    r++;
                return r
            }
            , I = function (t, r, e) {
                var o = {};
                for (var n in t)
                    o[n] = r.call(e, t[n], n, t);
                return o
            }
            , L = function (t, r, e) {
                for (var o in t)
                    if (r.call(e, t[o], o, t))
                        return o
            }
            , W = function (t, r, e) {
                var o = L(t, r, e);
                return o && t[o]
            }
            , R = function (t) {
                for (var r in t)
                    return r
            }
            , z = function (t) {
                var r = []
                    , e = 0;
                for (var o in t)
                    r[e++] = t[o];
                return r
            }
            , F = function (t, r) {
                for (var e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e) && !r(e, t[e]))
                        return !1;
                return !0
            }
            , U = function (t) {
                var r = [];
                return k(t, function (t, e) {
                    Array.isArray(e) ? e.forEach(function (e) {
                        r.push(encodeURIComponent(t) + "=" + encodeURIComponent(e))
                    }) : r.push(encodeURIComponent(t) + "=" + encodeURIComponent(e))
                }),
                    r.length ? "&" + r.join("&") : ""
            }
            , K = function (t) {
                var r = {};
                return t.replace(/^\?/, "").split("&").forEach(function (t) {
                    if (t) {
                        var e = t.split("=");
                        r[e[0]] = e[1]
                    }
                }),
                    r
            }
            , q = function () {
                return function () {
                    this.blockSize = -1
                }
            }()
            , H = function (r) {
                function e() {
                    var t = r.call(this) || this;
                    t.chain_ = [],
                        t.buf_ = [],
                        t.W_ = [],
                        t.pad_ = [],
                        t.inbuf_ = 0,
                        t.total_ = 0,
                        t.blockSize = 64,
                        t.pad_[0] = 128;
                    for (var e = 1; e < t.blockSize; ++e)
                        t.pad_[e] = 0;
                    return t.reset(),
                        t
                }
                return t.__extends(e, r),
                    e.prototype.reset = function () {
                        this.chain_[0] = 1732584193,
                            this.chain_[1] = 4023233417,
                            this.chain_[2] = 2562383102,
                            this.chain_[3] = 271733878,
                            this.chain_[4] = 3285377520,
                            this.inbuf_ = 0,
                            this.total_ = 0
                    }
                    ,
                    e.prototype.compress_ = function (t, r) {
                        r || (r = 0);
                        var e = this.W_;
                        if ("string" == typeof t)
                            for (var o = 0; o < 16; o++)
                                e[o] = t.charCodeAt(r) << 24 | t.charCodeAt(r + 1) << 16 | t.charCodeAt(r + 2) << 8 | t.charCodeAt(r + 3),
                                    r += 4;
                        else
                            for (o = 0; o < 16; o++)
                                e[o] = t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3],
                                    r += 4;
                        for (o = 16; o < 80; o++) {
                            var n = e[o - 3] ^ e[o - 8] ^ e[o - 14] ^ e[o - 16];
                            e[o] = 4294967295 & (n << 1 | n >>> 31)
                        }
                        var i, a, s = this.chain_[0], c = this.chain_[1], h = this.chain_[2], u = this.chain_[3], f = this.chain_[4];
                        for (o = 0; o < 80; o++) {
                            o < 40 ? o < 20 ? (i = u ^ c & (h ^ u),
                                a = 1518500249) : (i = c ^ h ^ u,
                                    a = 1859775393) : o < 60 ? (i = c & h | u & (c | h),
                                        a = 2400959708) : (i = c ^ h ^ u,
                                            a = 3395469782);
                            n = (s << 5 | s >>> 27) + i + f + a + e[o] & 4294967295;
                            f = u,
                                u = h,
                                h = 4294967295 & (c << 30 | c >>> 2),
                                c = s,
                                s = n
                        }
                        this.chain_[0] = this.chain_[0] + s & 4294967295,
                            this.chain_[1] = this.chain_[1] + c & 4294967295,
                            this.chain_[2] = this.chain_[2] + h & 4294967295,
                            this.chain_[3] = this.chain_[3] + u & 4294967295,
                            this.chain_[4] = this.chain_[4] + f & 4294967295
                    }
                    ,
                    e.prototype.update = function (t, r) {
                        if (null != t) {
                            void 0 === r && (r = t.length);
                            for (var e = r - this.blockSize, o = 0, n = this.buf_, i = this.inbuf_; o < r;) {
                                if (0 == i)
                                    for (; o <= e;)
                                        this.compress_(t, o),
                                            o += this.blockSize;
                                if ("string" == typeof t) {
                                    for (; o < r;)
                                        if (n[i] = t.charCodeAt(o),
                                            ++o,
                                            ++i == this.blockSize) {
                                            this.compress_(n),
                                                i = 0;
                                            break
                                        }
                                } else
                                    for (; o < r;)
                                        if (n[i] = t[o],
                                            ++o,
                                            ++i == this.blockSize) {
                                            this.compress_(n),
                                                i = 0;
                                            break
                                        }
                            }
                            this.inbuf_ = i,
                                this.total_ += r
                        }
                    }
                    ,
                    e.prototype.digest = function () {
                        var t = []
                            , r = 8 * this.total_;
                        this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                        for (var e = this.blockSize - 1; e >= 56; e--)
                            this.buf_[e] = 255 & r,
                                r /= 256;
                        this.compress_(this.buf_);
                        var o = 0;
                        for (e = 0; e < 5; e++)
                            for (var n = 24; n >= 0; n -= 8)
                                t[o] = this.chain_[e] >> n & 255,
                                    ++o;
                        return t
                    }
                    ,
                    e
            }(q);
        function J(t, r) {
            var e = new G(t, r);
            return e.subscribe.bind(e)
        }
        var G = function () {
            function t(t, r) {
                var e = this;
                this.observers = [],
                    this.unsubscribes = [],
                    this.observerCount = 0,
                    this.task = Promise.resolve(),
                    this.finalized = !1,
                    this.onNoObservers = r,
                    this.task.then(function () {
                        t(e)
                    }).catch(function (t) {
                        e.error(t)
                    })
            }
            return t.prototype.next = function (t) {
                this.forEachObserver(function (r) {
                    r.next(t)
                })
            }
                ,
                t.prototype.error = function (t) {
                    this.forEachObserver(function (r) {
                        r.error(t)
                    }),
                        this.close(t)
                }
                ,
                t.prototype.complete = function () {
                    this.forEachObserver(function (t) {
                        t.complete()
                    }),
                        this.close()
                }
                ,
                t.prototype.subscribe = function (t, r, e) {
                    var o, n = this;
                    if (void 0 === t && void 0 === r && void 0 === e)
                        throw new Error("Missing Observer.");
                    void 0 === (o = Q(t, ["next", "error", "complete"]) ? t : {
                        next: t,
                        error: r,
                        complete: e
                    }).next && (o.next = X),
                        void 0 === o.error && (o.error = X),
                        void 0 === o.complete && (o.complete = X);
                    var i = this.unsubscribeOne.bind(this, this.observers.length);
                    return this.finalized && this.task.then(function () {
                        try {
                            n.finalError ? o.error(n.finalError) : o.complete()
                        } catch (t) { }
                    }),
                        this.observers.push(o),
                        i
                }
                ,
                t.prototype.unsubscribeOne = function (t) {
                    void 0 !== this.observers && void 0 !== this.observers[t] && (delete this.observers[t],
                        this.observerCount -= 1,
                        0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                }
                ,
                t.prototype.forEachObserver = function (t) {
                    if (!this.finalized)
                        for (var r = 0; r < this.observers.length; r++)
                            this.sendOne(r, t)
                }
                ,
                t.prototype.sendOne = function (t, r) {
                    var e = this;
                    this.task.then(function () {
                        if (void 0 !== e.observers && void 0 !== e.observers[t])
                            try {
                                r(e.observers[t])
                            } catch (o) {
                                "undefined" != typeof console && console.error && console.error(o)
                            }
                    })
                }
                ,
                t.prototype.close = function (t) {
                    var r = this;
                    this.finalized || (this.finalized = !0,
                        void 0 !== t && (this.finalError = t),
                        this.task.then(function () {
                            r.observers = void 0,
                                r.onNoObservers = void 0
                        }))
                }
                ,
                t
        }();
        function $(t, r) {
            return function () {
                for (var e = [], o = 0; o < arguments.length; o++)
                    e[o] = arguments[o];
                Promise.resolve(!0).then(function () {
                    t.apply(void 0, e)
                }).catch(function (t) {
                    r && r(t)
                })
            }
        }
        function Q(t, r) {
            if ("object" != typeof t || null === t)
                return !1;
            for (var e = 0, o = r; e < o.length; e++) {
                var n = o[e];
                if (n in t && "function" == typeof t[n])
                    return !0
            }
            return !1
        }
        function X() { }
        var Y = function (t, r, e, o) {
            var n;
            if (o < r ? n = "at least " + r : o > e && (n = 0 === e ? "none" : "no more than " + e),
                n)
                throw new Error(t + " failed: Was called with " + o + (1 === o ? " argument." : " arguments.") + " Expects " + n + ".")
        };
        function Z(t, r, e) {
            var o = "";
            switch (r) {
                case 1:
                    o = e ? "first" : "First";
                    break;
                case 2:
                    o = e ? "second" : "Second";
                    break;
                case 3:
                    o = e ? "third" : "Third";
                    break;
                case 4:
                    o = e ? "fourth" : "Fourth";
                    break;
                default:
                    throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
            }
            var n = t + " failed: ";
            return n += o + " argument "
        }
        function tt(t, r, e, o) {
            if ((!o || e) && "string" != typeof e)
                throw new Error(Z(t, r, o) + "must be a valid firebase namespace.")
        }
        function rt(t, r, e, o) {
            if ((!o || e) && "function" != typeof e)
                throw new Error(Z(t, r, o) + "must be a valid function.")
        }
        function et(t, r, e, o) {
            if ((!o || e) && ("object" != typeof e || null === e))
                throw new Error(Z(t, r, o) + "must be a valid context object.")
        }
        var ot = function (t) {
            for (var r = [], o = 0, n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n);
                if (i >= 55296 && i <= 56319) {
                    var a = i - 55296;
                    e(++n < t.length, "Surrogate pair missing trail surrogate."),
                        i = 65536 + (a << 10) + (t.charCodeAt(n) - 56320)
                }
                i < 128 ? r[o++] = i : i < 2048 ? (r[o++] = i >> 6 | 192,
                    r[o++] = 63 & i | 128) : i < 65536 ? (r[o++] = i >> 12 | 224,
                        r[o++] = i >> 6 & 63 | 128,
                        r[o++] = 63 & i | 128) : (r[o++] = i >> 18 | 240,
                            r[o++] = i >> 12 & 63 | 128,
                            r[o++] = i >> 6 & 63 | 128,
                            r[o++] = 63 & i | 128)
            }
            return r
        }
            , nt = function (t) {
                for (var r = 0, e = 0; e < t.length; e++) {
                    var o = t.charCodeAt(e);
                    o < 128 ? r++ : o < 2048 ? r += 2 : o >= 55296 && o <= 56319 ? (r += 4,
                        e++) : r += 3
                }
                return r
            };
        exports.assert = e,
            exports.assertionError = o,
            exports.base64 = a,
            exports.base64Decode = c,
            exports.base64Encode = s,
            exports.CONSTANTS = r,
            exports.deepCopy = h,
            exports.deepExtend = u,
            exports.patchProperty = f,
            exports.Deferred = p,
            exports.getUA = l,
            exports.isMobileCordova = v,
            exports.isNodeSdk = b,
            exports.isReactNative = d,
            exports.ErrorFactory = S,
            exports.FirebaseError = g,
            exports.patchCapture = E,
            exports.jsonEval = A,
            exports.stringify = x,
            exports.decode = C,
            exports.isAdmin = N,
            exports.issuedAtTime = O,
            exports.isValidFormat = w,
            exports.isValidTimestamp = m,
            exports.clone = j,
            exports.contains = T,
            exports.every = F,
            exports.extend = M,
            exports.findKey = L,
            exports.findValue = W,
            exports.forEach = k,
            exports.getAnyKey = R,
            exports.getCount = V,
            exports.getValues = z,
            exports.isEmpty = B,
            exports.isNonNullObject = P,
            exports.map = I,
            exports.safeGet = D,
            exports.querystring = U,
            exports.querystringDecode = K,
            exports.Sha1 = H,
            exports.async = $,
            exports.createSubscribe = J,
            exports.errorPrefix = Z,
            exports.validateArgCount = Y,
            exports.validateCallback = rt,
            exports.validateContextObject = et,
            exports.validateNamespace = tt,
            exports.stringLength = nt,
            exports.stringToByteArray = ot;
    }
        , {
        "tslib": "vCxL"
    }],
    "dP58": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var e = require("@firebase/util")
            , t = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            , n = "[DEFAULT]"
            , i = []
            , r = function () {
                function t(t, n, r) {
                    this.firebase_ = r,
                        this.isDeleted_ = !1,
                        this.services_ = {},
                        this.name_ = n.name,
                        this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled || !1,
                        this.options_ = e.deepCopy(t),
                        this.INTERNAL = {
                            getUid: function () {
                                return null
                            },
                            getToken: function () {
                                return Promise.resolve(null)
                            },
                            addAuthTokenListener: function (e) {
                                i.push(e),
                                    setTimeout(function () {
                                        return e(null)
                                    }, 0)
                            },
                            removeAuthTokenListener: function (e) {
                                i = i.filter(function (t) {
                                    return t !== e
                                })
                            }
                        }
                }
                return Object.defineProperty(t.prototype, "automaticDataCollectionEnabled", {
                    get: function () {
                        return this.checkDestroyed_(),
                            this._automaticDataCollectionEnabled
                    },
                    set: function (e) {
                        this.checkDestroyed_(),
                            this._automaticDataCollectionEnabled = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                    Object.defineProperty(t.prototype, "name", {
                        get: function () {
                            return this.checkDestroyed_(),
                                this.name_
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "options", {
                        get: function () {
                            return this.checkDestroyed_(),
                                this.options_
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t.prototype.delete = function () {
                        var e = this;
                        return new Promise(function (t) {
                            e.checkDestroyed_(),
                                t()
                        }
                        ).then(function () {
                            e.firebase_.INTERNAL.removeApp(e.name_);
                            var t = [];
                            return Object.keys(e.services_).forEach(function (n) {
                                Object.keys(e.services_[n]).forEach(function (i) {
                                    t.push(e.services_[n][i])
                                })
                            }),
                                Promise.all(t.map(function (e) {
                                    return e.INTERNAL.delete()
                                }))
                        }).then(function () {
                            e.isDeleted_ = !0,
                                e.services_ = {}
                        })
                    }
                    ,
                    t.prototype._getService = function (e, t) {
                        if (void 0 === t && (t = n),
                            this.checkDestroyed_(),
                            this.services_[e] || (this.services_[e] = {}),
                            !this.services_[e][t]) {
                            var i = t !== n ? t : void 0
                                , r = this.firebase_.INTERNAL.factories[e](this, this.extendApp.bind(this), i);
                            this.services_[e][t] = r
                        }
                        return this.services_[e][t]
                    }
                    ,
                    t.prototype.extendApp = function (t) {
                        var n = this;
                        e.deepExtend(this, t),
                            t.INTERNAL && t.INTERNAL.addAuthTokenListener && (i.forEach(function (e) {
                                n.INTERNAL.addAuthTokenListener(e)
                            }),
                                i = [])
                    }
                    ,
                    t.prototype.checkDestroyed_ = function () {
                        this.isDeleted_ && o("app-deleted", {
                            name: this.name_
                        })
                    }
                    ,
                    t
            }();
        function a() {
            var i = {}
                , s = {}
                , c = {}
                , p = {
                    __esModule: !0,
                    initializeApp: function (e, a) {
                        void 0 === a && (a = {});
                        if ("object" != typeof a || null === a) {
                            var s = a;
                            a = {
                                name: s
                            }
                        }
                        var c = a;
                        void 0 === c.name && (c.name = n);
                        var u = c.name;
                        "string" == typeof u && u || o("bad-app-name", {
                            name: u + ""
                        });
                        t(i, u) && o("duplicate-app", {
                            name: u
                        });
                        var d = new r(e, c, p);
                        return i[u] = d,
                            l(d, "create"),
                            d
                    },
                    app: u,
                    apps: null,
                    Promise: Promise,
                    SDK_VERSION: "5.5.0",
                    INTERNAL: {
                        registerService: function (t, n, i, a, l) {
                            s[t] && o("duplicate-service", {
                                name: t
                            });
                            s[t] = n,
                                a && (c[t] = a,
                                    d().forEach(function (e) {
                                        a("create", e)
                                    }));
                            var f = function (e) {
                                return void 0 === e && (e = u()),
                                    "function" != typeof e[t] && o("invalid-app-argument", {
                                        name: t
                                    }),
                                    e[t]()
                            };
                            void 0 !== i && e.deepExtend(f, i);
                            return p[t] = f,
                                r.prototype[t] = function () {
                                    for (var e = [], n = 0; n < arguments.length; n++)
                                        e[n] = arguments[n];
                                    return this._getService.bind(this, t).apply(this, l ? e : [])
                                }
                                ,
                                f
                        },
                        createFirebaseNamespace: a,
                        extendNamespace: function (t) {
                            e.deepExtend(p, t)
                        },
                        createSubscribe: e.createSubscribe,
                        ErrorFactory: e.ErrorFactory,
                        removeApp: function (e) {
                            l(i[e], "delete"),
                                delete i[e]
                        },
                        factories: s,
                        useAsService: f,
                        Promise: Promise,
                        deepExtend: e.deepExtend
                    }
                };
            function u(e) {
                return t(i, e = e || n) || o("no-app", {
                    name: e
                }),
                    i[e]
            }
            function d() {
                return Object.keys(i).map(function (e) {
                    return i[e]
                })
            }
            function l(e, t) {
                Object.keys(s).forEach(function (n) {
                    var i = f(e, n);
                    null !== i && c[i] && c[i](t, e)
                })
            }
            function f(e, t) {
                if ("serverAuth" === t)
                    return null;
                var n = t;
                e.options;
                return n
            }
            return e.patchProperty(p, "default", p),
                Object.defineProperty(p, "apps", {
                    get: d
                }),
                e.patchProperty(u, "App", r),
                p
        }
        function o(e, t) {
            throw c.create(e, t)
        }
        r.prototype.name && r.prototype.options || r.prototype.delete || console.log("dc");
        var s = {
            "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
            "bad-app-name": "Illegal App name: '{$name}",
            "duplicate-app": "Firebase App named '{$name}' already exists",
            "app-deleted": "Firebase App named '{$name}' already deleted",
            "duplicate-service": "Firebase service named '{$name}' already registered",
            "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain",
            "invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance."
        }
            , c = new e.ErrorFactory("app", "Firebase", s)
            , p = a();
        exports.firebase = p,
            exports.default = p;
    }
        , {
        "@firebase/util": "58xA"
    }],
    "ZUoI": [function (require, module, exports) {
        "use strict";
        function e(e) {
            return e && "object" == typeof e && "default" in e ? e.default : e
        }
        require("@firebase/polyfill");
        var r = e(require("@firebase/app"));
        module.exports = r;
    }
        , {
        "@firebase/polyfill": "wGjj",
        "@firebase/app": "dP58"
    }],
    "TUpU": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
            exports.setLogLevel = l,
            exports.LogLevel = exports.Logger = void 0;
        var e, o = [];
        exports.LogLevel = e,
            function (e) {
                e[e.DEBUG = 0] = "DEBUG",
                    e[e.VERBOSE = 1] = "VERBOSE",
                    e[e.INFO = 2] = "INFO",
                    e[e.WARN = 3] = "WARN",
                    e[e.ERROR = 4] = "ERROR",
                    e[e.SILENT = 5] = "SILENT"
            }(e || (exports.LogLevel = e = {}));
        var t = e.INFO
            , n = function (o, t) {
                for (var n = [], r = 2; r < arguments.length; r++)
                    n[r - 2] = arguments[r];
                if (!(t < o.logLevel)) {
                    var l = (new Date).toISOString();
                    switch (t) {
                        case e.DEBUG:
                        case e.VERBOSE:
                            console.log.apply(console, ["[" + l + "]  " + o.name + ":"].concat(n));
                            break;
                        case e.INFO:
                            console.info.apply(console, ["[" + l + "]  " + o.name + ":"].concat(n));
                            break;
                        case e.WARN:
                            console.warn.apply(console, ["[" + l + "]  " + o.name + ":"].concat(n));
                            break;
                        case e.ERROR:
                            console.error.apply(console, ["[" + l + "]  " + o.name + ":"].concat(n));
                            break;
                        default:
                            throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")")
                    }
                }
            }
            , r = function () {
                function r(e) {
                    this.name = e,
                        this._logLevel = t,
                        this._logHandler = n,
                        o.push(this)
                }
                return Object.defineProperty(r.prototype, "logLevel", {
                    get: function () {
                        return this._logLevel
                    },
                    set: function (o) {
                        if (!(o in e))
                            throw new TypeError("Invalid value assigned to `logLevel`");
                        this._logLevel = o
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                    Object.defineProperty(r.prototype, "logHandler", {
                        get: function () {
                            return this._logHandler
                        },
                        set: function (e) {
                            if ("function" != typeof e)
                                throw new TypeError("Value assigned to `logHandler` must be a function");
                            this._logHandler = e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    r.prototype.debug = function () {
                        for (var o = [], t = 0; t < arguments.length; t++)
                            o[t] = arguments[t];
                        this._logHandler.apply(this, [this, e.DEBUG].concat(o))
                    }
                    ,
                    r.prototype.log = function () {
                        for (var o = [], t = 0; t < arguments.length; t++)
                            o[t] = arguments[t];
                        this._logHandler.apply(this, [this, e.VERBOSE].concat(o))
                    }
                    ,
                    r.prototype.info = function () {
                        for (var o = [], t = 0; t < arguments.length; t++)
                            o[t] = arguments[t];
                        this._logHandler.apply(this, [this, e.INFO].concat(o))
                    }
                    ,
                    r.prototype.warn = function () {
                        for (var o = [], t = 0; t < arguments.length; t++)
                            o[t] = arguments[t];
                        this._logHandler.apply(this, [this, e.WARN].concat(o))
                    }
                    ,
                    r.prototype.error = function () {
                        for (var o = [], t = 0; t < arguments.length; t++)
                            o[t] = arguments[t];
                        this._logHandler.apply(this, [this, e.ERROR].concat(o))
                    }
                    ,
                    r
            }();
        function l(e) {
            o.forEach(function (o) {
                o.logLevel = e
            })
        }
        exports.Logger = r;
    }
        , {}],
    "pBGv": [function (require, module, exports) {

        var t, e, n = module.exports = {};
        function r() {
            throw new Error("setTimeout has not been defined")
        }
        function o() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(e) {
            if (t === setTimeout)
                return setTimeout(e, 0);
            if ((t === r || !t) && setTimeout)
                return t = setTimeout,
                    setTimeout(e, 0);
            try {
                return t(e, 0)
            } catch (n) {
                try {
                    return t.call(null, e, 0)
                } catch (n) {
                    return t.call(this, e, 0)
                }
            }
        }
        function u(t) {
            if (e === clearTimeout)
                return clearTimeout(t);
            if ((e === o || !e) && clearTimeout)
                return e = clearTimeout,
                    clearTimeout(t);
            try {
                return e(t)
            } catch (n) {
                try {
                    return e.call(null, t)
                } catch (n) {
                    return e.call(this, t)
                }
            }
        }
        !function () {
            try {
                t = "function" == typeof setTimeout ? setTimeout : r
            } catch (n) {
                t = r
            }
            try {
                e = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (n) {
                e = o
            }
        }();
        var c, s = [], l = !1, a = -1;
        function f() {
            l && c && (l = !1,
                c.length ? s = c.concat(s) : a = -1,
                s.length && h())
        }
        function h() {
            if (!l) {
                var t = i(f);
                l = !0;
                for (var e = s.length; e;) {
                    for (c = s,
                        s = []; ++a < e;)
                        c && c[a].run();
                    a = -1,
                        e = s.length
                }
                c = null,
                    l = !1,
                    u(t)
            }
        }
        function m(t, e) {
            this.fun = t,
                this.array = e
        }
        function p() { }
        n.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            s.push(new m(t, e)),
                1 !== s.length || l || i(h)
        }
            ,
            m.prototype.run = function () {
                this.fun.apply(null, this.array)
            }
            ,
            n.title = "browser",
            n.browser = !0,
            n.env = {},
            n.argv = [],
            n.version = "",
            n.versions = {},
            n.on = p,
            n.addListener = p,
            n.once = p,
            n.off = p,
            n.removeListener = p,
            n.removeAllListeners = p,
            n.emit = p,
            n.prependListener = p,
            n.prependOnceListener = p,
            n.listeners = function (t) {
                return []
            }
            ,
            n.binding = function (t) {
                throw new Error("process.binding is not supported")
            }
            ,
            n.cwd = function () {
                return "/"
            }
            ,
            n.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }
            ,
            n.umask = function () {
                return 0
            }
            ;
    }
        , {}],
    "2vmM": [function (require, module, exports) {
        var process = require("process");
        var t = require("process");
        function e(t) {
            return t && "object" == typeof t && "default" in t ? t.default : t
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var n = require("@firebase/util")
            , r = require("@firebase/logger")
            , i = require("tslib")
            , o = e(require("@firebase/app"))
            , s = function () {
                function t(t) {
                    this.domStorage_ = t,
                        this.prefix_ = "firebase:"
                }
                return t.prototype.set = function (t, e) {
                    null == e ? this.domStorage_.removeItem(this.prefixedName_(t)) : this.domStorage_.setItem(this.prefixedName_(t), n.stringify(e))
                }
                    ,
                    t.prototype.get = function (t) {
                        var e = this.domStorage_.getItem(this.prefixedName_(t));
                        return null == e ? null : n.jsonEval(e)
                    }
                    ,
                    t.prototype.remove = function (t) {
                        this.domStorage_.removeItem(this.prefixedName_(t))
                    }
                    ,
                    t.prototype.prefixedName_ = function (t) {
                        return this.prefix_ + t
                    }
                    ,
                    t.prototype.toString = function () {
                        return this.domStorage_.toString()
                    }
                    ,
                    t
            }()
            , a = function () {
                function t() {
                    this.cache_ = {},
                        this.isInMemoryStorage = !0
                }
                return t.prototype.set = function (t, e) {
                    null == e ? delete this.cache_[t] : this.cache_[t] = e
                }
                    ,
                    t.prototype.get = function (t) {
                        return n.contains(this.cache_, t) ? this.cache_[t] : null
                    }
                    ,
                    t.prototype.remove = function (t) {
                        delete this.cache_[t]
                    }
                    ,
                    t
            }()
            , h = function (t) {
                try {
                    if ("undefined" != typeof window && void 0 !== window[t]) {
                        var e = window[t];
                        return e.setItem("firebase:sentinel", "cache"),
                            e.removeItem("firebase:sentinel"),
                            new s(e)
                    }
                } catch (n) { }
                return new a
            }
            , u = h("localStorage")
            , l = h("sessionStorage")
            , c = new r.Logger("@firebase/database")
            , p = function () {
                var t = 1;
                return function () {
                    return t++
                }
            }()
            , d = function (t) {
                var e = n.stringToByteArray(t)
                    , r = new n.Sha1;
                r.update(e);
                var i = r.digest();
                return n.base64.encodeByteArray(i)
            }
            , f = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                for (var r = "", i = 0; i < t.length; i++)
                    Array.isArray(t[i]) || t[i] && "object" == typeof t[i] && "number" == typeof t[i].length ? r += f.apply(null, t[i]) : "object" == typeof t[i] ? r += n.stringify(t[i]) : r += t[i],
                        r += " ";
                return r
            }
            , _ = null
            , y = !0
            , v = function (t, e) {
                n.assert(!e || !0 === t || !1 === t, "Can't turn on custom loggers persistently."),
                    !0 === t ? (c.logLevel = r.LogLevel.VERBOSE,
                        _ = c.log.bind(c),
                        e && l.set("logging_enabled", !0)) : "function" == typeof t ? _ = t : (_ = null,
                            l.remove("logging_enabled"))
            }
            , g = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                if (!0 === y && (y = !1,
                    null === _ && !0 === l.get("logging_enabled") && v(!0)),
                    _) {
                    var n = f.apply(null, t);
                    _(n)
                }
            }
            , m = function (t) {
                return function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    g.apply(void 0, [t].concat(e))
                }
            }
            , C = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = "FIREBASE INTERNAL ERROR: " + f.apply(void 0, t);
                c.error(n)
            }
            , E = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = "FIREBASE FATAL ERROR: " + f.apply(void 0, t);
                throw c.error(n),
                new Error(n)
            }
            , w = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n = "FIREBASE WARNING: " + f.apply(void 0, t);
                c.warn(n)
            }
            , T = function () {
                "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && w("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
            }
            , b = function (t) {
                return "number" == typeof t && (t != t || t == Number.POSITIVE_INFINITY || t == Number.NEGATIVE_INFINITY)
            }
            , S = function (t) {
                if (n.isNodeSdk() || "complete" === document.readyState)
                    t();
                else {
                    var e = !1
                        , r = function () {
                            document.body ? e || (e = !0,
                                t()) : setTimeout(r, Math.floor(10))
                        };
                    document.addEventListener ? (document.addEventListener("DOMContentLoaded", r, !1),
                        window.addEventListener("load", r, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
                            "complete" === document.readyState && r()
                        }),
                            window.attachEvent("onload", r))
                }
            }
            , N = "[MIN_NAME]"
            , I = "[MAX_NAME]"
            , R = function (t, e) {
                if (t === e)
                    return 0;
                if (t === N || e === I)
                    return -1;
                if (e === N || t === I)
                    return 1;
                var n = q(t)
                    , r = q(e);
                return null !== n ? null !== r ? n - r == 0 ? t.length - e.length : n - r : -1 : null !== r ? 1 : t < e ? -1 : 1
            }
            , P = function (t, e) {
                return t === e ? 0 : t < e ? -1 : 1
            }
            , D = function (t, e) {
                if (e && t in e)
                    return e[t];
                throw new Error("Missing required key (" + t + ") in object: " + n.stringify(e))
            }
            , x = function (t) {
                if ("object" != typeof t || null === t)
                    return n.stringify(t);
                var e = [];
                for (var r in t)
                    e.push(r);
                e.sort();
                for (var i = "{", o = 0; o < e.length; o++)
                    0 !== o && (i += ","),
                        i += n.stringify(e[o]),
                        i += ":",
                        i += x(t[e[o]]);
                return i += "}"
            }
            , k = function (t, e) {
                var n = t.length;
                if (n <= e)
                    return [t];
                for (var r = [], i = 0; i < n; i += e)
                    i + e > n ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e));
                return r
            }
            , O = function (t, e) {
                if (Array.isArray(t))
                    for (var r = 0; r < t.length; ++r)
                        e(r, t[r]);
                else
                    n.forEach(t, function (t, n) {
                        return e(n, t)
                    })
            }
            , F = function (t) {
                n.assert(!b(t), "Invalid JSON number");
                var e, r, i, o, s, a, h;
                for (0 === t ? (r = 0,
                    i = 0,
                    e = 1 / t == -1 / 0 ? 1 : 0) : (e = t < 0,
                        (t = Math.abs(t)) >= Math.pow(2, -1022) ? (r = (o = Math.min(Math.floor(Math.log(t) / Math.LN2), 1023)) + 1023,
                            i = Math.round(t * Math.pow(2, 52 - o) - Math.pow(2, 52))) : (r = 0,
                                i = Math.round(t / Math.pow(2, -1074)))),
                    a = [],
                    s = 52; s; s -= 1)
                    a.push(i % 2 ? 1 : 0),
                        i = Math.floor(i / 2);
                for (s = 11; s; s -= 1)
                    a.push(r % 2 ? 1 : 0),
                        r = Math.floor(r / 2);
                a.push(e ? 1 : 0),
                    a.reverse(),
                    h = a.join("");
                var u = "";
                for (s = 0; s < 64; s += 8) {
                    var l = parseInt(h.substr(s, 8), 2).toString(16);
                    1 === l.length && (l = "0" + l),
                        u += l
                }
                return u.toLowerCase()
            }
            , A = function () {
                return !("object" != typeof window || !window.chrome || !window.chrome.extension || /^chrome/.test(window.location.href))
            }
            , L = function () {
                return "object" == typeof Windows && "object" == typeof Windows.UI
            }
            , M = function (t, e) {
                var n = "Unknown Error";
                "too_big" === t ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == t ? n = "Client doesn't have permission to access the desired data." : "unavailable" == t && (n = "The service is unavailable");
                var r = new Error(t + " at " + e.path.toString() + ": " + n);
                return r.code = t.toUpperCase(),
                    r
            }
            , W = new RegExp("^-?\\d{1,10}$")
            , q = function (t) {
                if (W.test(t)) {
                    var e = Number(t);
                    if (e >= -2147483648 && e <= 2147483647)
                        return e
                }
                return null
            }
            , Q = function (t) {
                try {
                    t()
                } catch (e) {
                    setTimeout(function () {
                        var t = e.stack || "";
                        throw w("Exception was thrown by user callback.", t),
                        e
                    }, Math.floor(0))
                }
            }
            , U = function () {
                return ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0
            }
            , V = function (t, e) {
                var n = setTimeout(t, e);
                return "object" == typeof n && n.unref && n.unref(),
                    n
            }
            , H = function () {
                function t(t, e) {
                    if (void 0 === e) {
                        this.pieces_ = t.split("/");
                        for (var n = 0, r = 0; r < this.pieces_.length; r++)
                            this.pieces_[r].length > 0 && (this.pieces_[n] = this.pieces_[r],
                                n++);
                        this.pieces_.length = n,
                            this.pieceNum_ = 0
                    } else
                        this.pieces_ = t,
                            this.pieceNum_ = e
                }
                return Object.defineProperty(t, "Empty", {
                    get: function () {
                        return new t("")
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                    t.prototype.getFront = function () {
                        return this.pieceNum_ >= this.pieces_.length ? null : this.pieces_[this.pieceNum_]
                    }
                    ,
                    t.prototype.getLength = function () {
                        return this.pieces_.length - this.pieceNum_
                    }
                    ,
                    t.prototype.popFront = function () {
                        var e = this.pieceNum_;
                        return e < this.pieces_.length && e++,
                            new t(this.pieces_, e)
                    }
                    ,
                    t.prototype.getBack = function () {
                        return this.pieceNum_ < this.pieces_.length ? this.pieces_[this.pieces_.length - 1] : null
                    }
                    ,
                    t.prototype.toString = function () {
                        for (var t = "", e = this.pieceNum_; e < this.pieces_.length; e++)
                            "" !== this.pieces_[e] && (t += "/" + this.pieces_[e]);
                        return t || "/"
                    }
                    ,
                    t.prototype.toUrlEncodedString = function () {
                        for (var t = "", e = this.pieceNum_; e < this.pieces_.length; e++)
                            "" !== this.pieces_[e] && (t += "/" + encodeURIComponent(String(this.pieces_[e])));
                        return t || "/"
                    }
                    ,
                    t.prototype.slice = function (t) {
                        return void 0 === t && (t = 0),
                            this.pieces_.slice(this.pieceNum_ + t)
                    }
                    ,
                    t.prototype.parent = function () {
                        if (this.pieceNum_ >= this.pieces_.length)
                            return null;
                        for (var e = [], n = this.pieceNum_; n < this.pieces_.length - 1; n++)
                            e.push(this.pieces_[n]);
                        return new t(e, 0)
                    }
                    ,
                    t.prototype.child = function (e) {
                        for (var n = [], r = this.pieceNum_; r < this.pieces_.length; r++)
                            n.push(this.pieces_[r]);
                        if (e instanceof t)
                            for (r = e.pieceNum_; r < e.pieces_.length; r++)
                                n.push(e.pieces_[r]);
                        else {
                            var i = e.split("/");
                            for (r = 0; r < i.length; r++)
                                i[r].length > 0 && n.push(i[r])
                        }
                        return new t(n, 0)
                    }
                    ,
                    t.prototype.isEmpty = function () {
                        return this.pieceNum_ >= this.pieces_.length
                    }
                    ,
                    t.relativePath = function (e, n) {
                        var r = e.getFront()
                            , i = n.getFront();
                        if (null === r)
                            return n;
                        if (r === i)
                            return t.relativePath(e.popFront(), n.popFront());
                        throw new Error("INTERNAL ERROR: innerPath (" + n + ") is not within outerPath (" + e + ")")
                    }
                    ,
                    t.comparePaths = function (t, e) {
                        for (var n = t.slice(), r = e.slice(), i = 0; i < n.length && i < r.length; i++) {
                            var o = R(n[i], r[i]);
                            if (0 !== o)
                                return o
                        }
                        return n.length === r.length ? 0 : n.length < r.length ? -1 : 1
                    }
                    ,
                    t.prototype.equals = function (t) {
                        if (this.getLength() !== t.getLength())
                            return !1;
                        for (var e = this.pieceNum_, n = t.pieceNum_; e <= this.pieces_.length; e++,
                            n++)
                            if (this.pieces_[e] !== t.pieces_[n])
                                return !1;
                        return !0
                    }
                    ,
                    t.prototype.contains = function (t) {
                        var e = this.pieceNum_
                            , n = t.pieceNum_;
                        if (this.getLength() > t.getLength())
                            return !1;
                        for (; e < this.pieces_.length;) {
                            if (this.pieces_[e] !== t.pieces_[n])
                                return !1;
                            ++e,
                                ++n
                        }
                        return !0
                    }
                    ,
                    t
            }()
            , B = function () {
                function t(t, e) {
                    this.errorPrefix_ = e,
                        this.parts_ = t.slice(),
                        this.byteLength_ = Math.max(1, this.parts_.length);
                    for (var r = 0; r < this.parts_.length; r++)
                        this.byteLength_ += n.stringLength(this.parts_[r]);
                    this.checkValid_()
                }
                return Object.defineProperty(t, "MAX_PATH_DEPTH", {
                    get: function () {
                        return 32
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                    Object.defineProperty(t, "MAX_PATH_LENGTH_BYTES", {
                        get: function () {
                            return 768
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t.prototype.push = function (t) {
                        this.parts_.length > 0 && (this.byteLength_ += 1),
                            this.parts_.push(t),
                            this.byteLength_ += n.stringLength(t),
                            this.checkValid_()
                    }
                    ,
                    t.prototype.pop = function () {
                        var t = this.parts_.pop();
                        this.byteLength_ -= n.stringLength(t),
                            this.parts_.length > 0 && (this.byteLength_ -= 1)
                    }
                    ,
                    t.prototype.checkValid_ = function () {
                        if (this.byteLength_ > t.MAX_PATH_LENGTH_BYTES)
                            throw new Error(this.errorPrefix_ + "has a key path longer than " + t.MAX_PATH_LENGTH_BYTES + " bytes (" + this.byteLength_ + ").");
                        if (this.parts_.length > t.MAX_PATH_DEPTH)
                            throw new Error(this.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + t.MAX_PATH_DEPTH + ") or object contains a cycle " + this.toErrorString())
                    }
                    ,
                    t.prototype.toErrorString = function () {
                        return 0 == this.parts_.length ? "" : "in property '" + this.parts_.join(".") + "'"
                    }
                    ,
                    t
            }()
            , j = "5"
            , K = "v"
            , Y = "s"
            , z = "r"
            , G = "f"
            , X = "firebaseio.com"
            , $ = "ls"
            , J = "websocket"
            , Z = "long_polling"
            , tt = function () {
                function t(t, e, n, r, i) {
                    void 0 === i && (i = ""),
                        this.secure = e,
                        this.namespace = n,
                        this.webSocketOnly = r,
                        this.persistenceKey = i,
                        this.host = t.toLowerCase(),
                        this.domain = this.host.substr(this.host.indexOf(".") + 1),
                        this.internalHost = u.get("host:" + t) || this.host
                }
                return t.prototype.needsQueryParam = function () {
                    return this.host !== this.internalHost || this.isCustomHost()
                }
                    ,
                    t.prototype.isCacheableHost = function () {
                        return "s-" === this.internalHost.substr(0, 2)
                    }
                    ,
                    t.prototype.isDemoHost = function () {
                        return "firebaseio-demo.com" === this.domain
                    }
                    ,
                    t.prototype.isCustomHost = function () {
                        return "firebaseio.com" !== this.domain && "firebaseio-demo.com" !== this.domain
                    }
                    ,
                    t.prototype.updateHost = function (t) {
                        t !== this.internalHost && (this.internalHost = t,
                            this.isCacheableHost() && u.set("host:" + this.host, this.internalHost))
                    }
                    ,
                    t.prototype.connectionURL = function (t, e) {
                        var r;
                        if (n.assert("string" == typeof t, "typeof type must == string"),
                            n.assert("object" == typeof e, "typeof params must == object"),
                            t === J)
                            r = (this.secure ? "wss://" : "ws://") + this.internalHost + "/.ws?";
                        else {
                            if (t !== Z)
                                throw new Error("Unknown connection type: " + t);
                            r = (this.secure ? "https://" : "http://") + this.internalHost + "/.lp?"
                        }
                        this.needsQueryParam() && (e.ns = this.namespace);
                        var i = [];
                        return n.forEach(e, function (t, e) {
                            i.push(t + "=" + e)
                        }),
                            r + i.join("&")
                    }
                    ,
                    t.prototype.toString = function () {
                        var t = this.toURLString();
                        return this.persistenceKey && (t += "<" + this.persistenceKey + ">"),
                            t
                    }
                    ,
                    t.prototype.toURLString = function () {
                        return (this.secure ? "https://" : "http://") + this.host
                    }
                    ,
                    t
            }();
        function et(t) {
            for (var e = "", n = t.split("/"), r = 0; r < n.length; r++)
                if (n[r].length > 0) {
                    var i = n[r];
                    try {
                        i = decodeURIComponent(i.replace(/\+/g, " "))
                    } catch (o) { }
                    e += "/" + i
                }
            return e
        }
        function nt(t) {
            var e = {};
            "?" === t.charAt(0) && (t = t.substring(1));
            for (var n = 0, r = t.split("&"); n < r.length; n++) {
                var i = r[n];
                if (0 !== i.length) {
                    var o = i.split("=");
                    2 === o.length ? e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]) : w("Invalid query segment '" + i + "' in query '" + t + "'")
                }
            }
            return e
        }
        var rt, it, ot = function (t) {
            var e = st(t)
                , n = e.subdomain;
            "firebase" === e.domain && E(e.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),
                n && "undefined" != n || "localhost" === e.domain || E("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),
                e.secure || T();
            var r = "ws" === e.scheme || "wss" === e.scheme;
            return {
                repoInfo: new tt(e.host, e.secure, n, r),
                path: new H(e.pathString)
            }
        }, st = function (t) {
            var e = ""
                , n = ""
                , r = ""
                , i = ""
                , o = !0
                , s = "https"
                , a = 443;
            if ("string" == typeof t) {
                var h = t.indexOf("//");
                h >= 0 && (s = t.substring(0, h - 1),
                    t = t.substring(h + 2));
                var u = t.indexOf("/");
                -1 === u && (u = t.length);
                var l = t.indexOf("?");
                -1 === l && (l = t.length),
                    e = t.substring(0, Math.min(u, l)),
                    u < l && (i = et(t.substring(u, l)));
                var c = nt(t.substring(Math.min(t.length, l)));
                (h = e.indexOf(":")) >= 0 ? (o = "https" === s || "wss" === s,
                    a = parseInt(e.substring(h + 1), 10)) : h = t.length;
                var p = e.split(".");
                3 === p.length ? (n = p[1],
                    r = p[0].toLowerCase()) : 2 === p.length ? n = p[0] : "localhost" === p[0].slice(0, h).toLowerCase() && (n = "localhost"),
                    "" === r && "ns" in c && (r = c.ns)
            }
            return {
                host: e,
                port: a,
                domain: n,
                subdomain: r,
                secure: o,
                scheme: s,
                pathString: i
            }
        }, at = /[\[\].#$\/\u0000-\u001F\u007F]/, ht = /[\[\].#$\u0000-\u001F\u007F]/, ut = 10485760, lt = function (t) {
            return "string" == typeof t && 0 !== t.length && !at.test(t)
        }, ct = function (t) {
            return "string" == typeof t && 0 !== t.length && !ht.test(t)
        }, pt = function (t) {
            return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")),
                ct(t)
        }, dt = function (t) {
            return null === t || "string" == typeof t || "number" == typeof t && !b(t) || t && "object" == typeof t && n.contains(t, ".sv")
        }, ft = function (t, e, r, i, o) {
            o && void 0 === r || _t(n.errorPrefix(t, e, o), r, i)
        }, _t = function (t, e, r) {
            var i = r instanceof H ? new B(r, t) : r;
            if (void 0 === e)
                throw new Error(t + "contains undefined " + i.toErrorString());
            if ("function" == typeof e)
                throw new Error(t + "contains a function " + i.toErrorString() + " with contents = " + e.toString());
            if (b(e))
                throw new Error(t + "contains " + e.toString() + " " + i.toErrorString());
            if ("string" == typeof e && e.length > ut / 3 && n.stringLength(e) > ut)
                throw new Error(t + "contains a string greater than " + ut + " utf8 bytes " + i.toErrorString() + " ('" + e.substring(0, 50) + "...')");
            if (e && "object" == typeof e) {
                var o = !1
                    , s = !1;
                if (n.forEach(e, function (e, n) {
                    if (".value" === e)
                        o = !0;
                    else if (".priority" !== e && ".sv" !== e && (s = !0,
                        !lt(e)))
                        throw new Error(t + " contains an invalid key (" + e + ") " + i.toErrorString() + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                    i.push(e),
                        _t(t, n, i),
                        i.pop()
                }),
                    o && s)
                    throw new Error(t + ' contains ".value" child ' + i.toErrorString() + " in addition to actual children.")
            }
        }, yt = function (t, e) {
            var n, r;
            for (n = 0; n < e.length; n++)
                for (var i = (r = e[n]).slice(), o = 0; o < i.length; o++)
                    if (".priority" === i[o] && o === i.length - 1)
                        ;
                    else if (!lt(i[o]))
                        throw new Error(t + "contains an invalid key (" + i[o] + ") in path " + r.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
            e.sort(H.comparePaths);
            var s = null;
            for (n = 0; n < e.length; n++) {
                if (r = e[n],
                    null !== s && s.contains(r))
                    throw new Error(t + "contains a path " + s.toString() + " that is ancestor of another path " + r.toString());
                s = r
            }
        }, vt = function (t, e, r, i, o) {
            if (!o || void 0 !== r) {
                var s = n.errorPrefix(t, e, o);
                if (!r || "object" != typeof r || Array.isArray(r))
                    throw new Error(s + " must be an object containing the children to replace.");
                var a = [];
                n.forEach(r, function (t, e) {
                    var n = new H(t);
                    if (_t(s, e, i.child(n)),
                        ".priority" === n.getBack() && !dt(e))
                        throw new Error(s + "contains an invalid value for '" + n.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                    a.push(n)
                }),
                    yt(s, a)
            }
        }, gt = function (t, e, r, i) {
            if (!i || void 0 !== r) {
                if (b(r))
                    throw new Error(n.errorPrefix(t, e, i) + "is " + r.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
                if (!dt(r))
                    throw new Error(n.errorPrefix(t, e, i) + "must be a valid Firebase priority (a string, finite number, server value, or null).")
            }
        }, mt = function (t, e, r, i) {
            if (!i || void 0 !== r)
                switch (r) {
                    case "value":
                    case "child_added":
                    case "child_removed":
                    case "child_changed":
                    case "child_moved":
                        break;
                    default:
                        throw new Error(n.errorPrefix(t, e, i) + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                }
        }, Ct = function (t, e, r, i) {
            if (!(i && void 0 === r || lt(r)))
                throw new Error(n.errorPrefix(t, e, i) + 'was an invalid key = "' + r + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
        }, Et = function (t, e, r, i) {
            if (!(i && void 0 === r || ct(r)))
                throw new Error(n.errorPrefix(t, e, i) + 'was an invalid path = "' + r + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
        }, wt = function (t, e, n, r) {
            n && (n = n.replace(/^\/*\.info(\/|$)/, "/")),
                Et(t, e, n, r)
        }, Tt = function (t, e) {
            if (".info" === e.getFront())
                throw new Error(t + " failed = Can't modify data under /.info/")
        }, bt = function (t, e, r) {
            var i = r.path.toString();
            if ("string" != typeof r.repoInfo.host || 0 === r.repoInfo.host.length || !lt(r.repoInfo.namespace) && "localhost" !== r.repoInfo.host.split(":")[0] || 0 !== i.length && !pt(i))
                throw new Error(n.errorPrefix(t, e, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
        }, St = function (t, e, r, i) {
            if ((!i || void 0 !== r) && "boolean" != typeof r)
                throw new Error(n.errorPrefix(t, e, i) + "must be a boolean.")
        }, Nt = function () {
            function t(t, e) {
                this.repo_ = t,
                    this.path_ = e
            }
            return t.prototype.cancel = function (t) {
                n.validateArgCount("OnDisconnect.cancel", 0, 1, arguments.length),
                    n.validateCallback("OnDisconnect.cancel", 1, t, !0);
                var e = new n.Deferred;
                return this.repo_.onDisconnectCancel(this.path_, e.wrapCallback(t)),
                    e.promise
            }
                ,
                t.prototype.remove = function (t) {
                    n.validateArgCount("OnDisconnect.remove", 0, 1, arguments.length),
                        Tt("OnDisconnect.remove", this.path_),
                        n.validateCallback("OnDisconnect.remove", 1, t, !0);
                    var e = new n.Deferred;
                    return this.repo_.onDisconnectSet(this.path_, null, e.wrapCallback(t)),
                        e.promise
                }
                ,
                t.prototype.set = function (t, e) {
                    n.validateArgCount("OnDisconnect.set", 1, 2, arguments.length),
                        Tt("OnDisconnect.set", this.path_),
                        ft("OnDisconnect.set", 1, t, this.path_, !1),
                        n.validateCallback("OnDisconnect.set", 2, e, !0);
                    var r = new n.Deferred;
                    return this.repo_.onDisconnectSet(this.path_, t, r.wrapCallback(e)),
                        r.promise
                }
                ,
                t.prototype.setWithPriority = function (t, e, r) {
                    n.validateArgCount("OnDisconnect.setWithPriority", 2, 3, arguments.length),
                        Tt("OnDisconnect.setWithPriority", this.path_),
                        ft("OnDisconnect.setWithPriority", 1, t, this.path_, !1),
                        gt("OnDisconnect.setWithPriority", 2, e, !1),
                        n.validateCallback("OnDisconnect.setWithPriority", 3, r, !0);
                    var i = new n.Deferred;
                    return this.repo_.onDisconnectSetWithPriority(this.path_, t, e, i.wrapCallback(r)),
                        i.promise
                }
                ,
                t.prototype.update = function (t, e) {
                    if (n.validateArgCount("OnDisconnect.update", 1, 2, arguments.length),
                        Tt("OnDisconnect.update", this.path_),
                        Array.isArray(t)) {
                        for (var r = {}, i = 0; i < t.length; ++i)
                            r["" + i] = t[i];
                        t = r,
                            w("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                    }
                    vt("OnDisconnect.update", 1, t, this.path_, !1),
                        n.validateCallback("OnDisconnect.update", 2, e, !0);
                    var o = new n.Deferred;
                    return this.repo_.onDisconnectUpdate(this.path_, t, o.wrapCallback(e)),
                        o.promise
                }
                ,
                t
        }(), It = function () {
            function t(t, e) {
                this.committed = t,
                    this.snapshot = e
            }
            return t.prototype.toJSON = function () {
                return n.validateArgCount("TransactionResult.toJSON", 0, 1, arguments.length),
                {
                    committed: this.committed,
                    snapshot: this.snapshot.toJSON()
                }
            }
                ,
                t
        }(), Rt = function () {
            var t = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"
                , e = 0
                , r = [];
            return function (i) {
                var o, s = i === e;
                e = i;
                var a = new Array(8);
                for (o = 7; o >= 0; o--)
                    a[o] = t.charAt(i % 64),
                        i = Math.floor(i / 64);
                n.assert(0 === i, "Cannot push at time == 0");
                var h = a.join("");
                if (s) {
                    for (o = 11; o >= 0 && 63 === r[o]; o--)
                        r[o] = 0;
                    r[o]++
                } else
                    for (o = 0; o < 12; o++)
                        r[o] = Math.floor(64 * Math.random());
                for (o = 0; o < 12; o++)
                    h += t.charAt(r[o]);
                return n.assert(20 === h.length, "nextPushId: Length should be 20."),
                    h
            }
        }(), Pt = function () {
            function t(t, e) {
                this.name = t,
                    this.node = e
            }
            return t.Wrap = function (e, n) {
                return new t(e, n)
            }
                ,
                t
        }(), Dt = function () {
            function t() { }
            return t.prototype.getCompare = function () {
                return this.compare.bind(this)
            }
                ,
                t.prototype.indexedValueChanged = function (t, e) {
                    var n = new Pt(N, t)
                        , r = new Pt(N, e);
                    return 0 !== this.compare(n, r)
                }
                ,
                t.prototype.minPost = function () {
                    return Pt.MIN
                }
                ,
                t
        }(), xt = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
                Object.defineProperty(e, "__EMPTY_NODE", {
                    get: function () {
                        return rt
                    },
                    set: function (t) {
                        rt = t
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype.compare = function (t, e) {
                    return R(t.name, e.name)
                }
                ,
                e.prototype.isDefinedOn = function (t) {
                    throw n.assertionError("KeyIndex.isDefinedOn not expected to be called.")
                }
                ,
                e.prototype.indexedValueChanged = function (t, e) {
                    return !1
                }
                ,
                e.prototype.minPost = function () {
                    return Pt.MIN
                }
                ,
                e.prototype.maxPost = function () {
                    return new Pt(I, rt)
                }
                ,
                e.prototype.makePost = function (t, e) {
                    return n.assert("string" == typeof t, "KeyIndex indexValue must always be a string."),
                        new Pt(t, rt)
                }
                ,
                e.prototype.toString = function () {
                    return ".key"
                }
                ,
                e
        }(Dt), kt = new xt;
        function Ot(t) {
            it = t
        }
        var Ft, At, Lt, Mt = function (t) {
            return "number" == typeof t ? "number:" + F(t) : "string:" + t
        }, Wt = function (t) {
            if (t.isLeafNode()) {
                var e = t.val();
                n.assert("string" == typeof e || "number" == typeof e || "object" == typeof e && n.contains(e, ".sv"), "Priority must be a string or number.")
            } else
                n.assert(t === it || t.isEmpty(), "priority of unexpected type.");
            n.assert(t === it || t.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
        }, qt = function () {
            function t(e, r) {
                void 0 === r && (r = t.__childrenNodeConstructor.EMPTY_NODE),
                    this.value_ = e,
                    this.priorityNode_ = r,
                    this.lazyHash_ = null,
                    n.assert(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."),
                    Wt(this.priorityNode_)
            }
            return Object.defineProperty(t, "__childrenNodeConstructor", {
                get: function () {
                    return Ft
                },
                set: function (t) {
                    Ft = t
                },
                enumerable: !0,
                configurable: !0
            }),
                t.prototype.isLeafNode = function () {
                    return !0
                }
                ,
                t.prototype.getPriority = function () {
                    return this.priorityNode_
                }
                ,
                t.prototype.updatePriority = function (e) {
                    return new t(this.value_, e)
                }
                ,
                t.prototype.getImmediateChild = function (e) {
                    return ".priority" === e ? this.priorityNode_ : t.__childrenNodeConstructor.EMPTY_NODE
                }
                ,
                t.prototype.getChild = function (e) {
                    return e.isEmpty() ? this : ".priority" === e.getFront() ? this.priorityNode_ : t.__childrenNodeConstructor.EMPTY_NODE
                }
                ,
                t.prototype.hasChild = function () {
                    return !1
                }
                ,
                t.prototype.getPredecessorChildName = function (t, e) {
                    return null
                }
                ,
                t.prototype.updateImmediateChild = function (e, n) {
                    return ".priority" === e ? this.updatePriority(n) : n.isEmpty() && ".priority" !== e ? this : t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, n).updatePriority(this.priorityNode_)
                }
                ,
                t.prototype.updateChild = function (e, r) {
                    var i = e.getFront();
                    return null === i ? r : r.isEmpty() && ".priority" !== i ? this : (n.assert(".priority" !== i || 1 === e.getLength(), ".priority must be the last token in a path"),
                        this.updateImmediateChild(i, t.__childrenNodeConstructor.EMPTY_NODE.updateChild(e.popFront(), r)))
                }
                ,
                t.prototype.isEmpty = function () {
                    return !1
                }
                ,
                t.prototype.numChildren = function () {
                    return 0
                }
                ,
                t.prototype.forEachChild = function (t, e) {
                    return !1
                }
                ,
                t.prototype.val = function (t) {
                    return t && !this.getPriority().isEmpty() ? {
                        ".value": this.getValue(),
                        ".priority": this.getPriority().val()
                    } : this.getValue()
                }
                ,
                t.prototype.hash = function () {
                    if (null === this.lazyHash_) {
                        var t = "";
                        this.priorityNode_.isEmpty() || (t += "priority:" + Mt(this.priorityNode_.val()) + ":");
                        var e = typeof this.value_;
                        t += e + ":",
                            t += "number" === e ? F(this.value_) : this.value_,
                            this.lazyHash_ = d(t)
                    }
                    return this.lazyHash_
                }
                ,
                t.prototype.getValue = function () {
                    return this.value_
                }
                ,
                t.prototype.compareTo = function (e) {
                    return e === t.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof t.__childrenNodeConstructor ? -1 : (n.assert(e.isLeafNode(), "Unknown node type"),
                        this.compareToLeafNode_(e))
                }
                ,
                t.prototype.compareToLeafNode_ = function (e) {
                    var r = typeof e.value_
                        , i = typeof this.value_
                        , o = t.VALUE_TYPE_ORDER.indexOf(r)
                        , s = t.VALUE_TYPE_ORDER.indexOf(i);
                    return n.assert(o >= 0, "Unknown leaf type: " + r),
                        n.assert(s >= 0, "Unknown leaf type: " + i),
                        o === s ? "object" === i ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : s - o
                }
                ,
                t.prototype.withIndex = function () {
                    return this
                }
                ,
                t.prototype.isIndexed = function () {
                    return !0
                }
                ,
                t.prototype.equals = function (t) {
                    if (t === this)
                        return !0;
                    if (t.isLeafNode()) {
                        var e = t;
                        return this.value_ === e.value_ && this.priorityNode_.equals(e.priorityNode_)
                    }
                    return !1
                }
                ,
                t.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"],
                t
        }();
        function Qt(t) {
            At = t
        }
        function Ut(t) {
            Lt = t
        }
        var Vt, Ht, Bt = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
                e.prototype.compare = function (t, e) {
                    var n = t.node.getPriority()
                        , r = e.node.getPriority()
                        , i = n.compareTo(r);
                    return 0 === i ? R(t.name, e.name) : i
                }
                ,
                e.prototype.isDefinedOn = function (t) {
                    return !t.getPriority().isEmpty()
                }
                ,
                e.prototype.indexedValueChanged = function (t, e) {
                    return !t.getPriority().equals(e.getPriority())
                }
                ,
                e.prototype.minPost = function () {
                    return Pt.MIN
                }
                ,
                e.prototype.maxPost = function () {
                    return new Pt(I, new qt("[PRIORITY-POST]", Lt))
                }
                ,
                e.prototype.makePost = function (t, e) {
                    var n = At(t);
                    return new Pt(e, new qt("[PRIORITY-POST]", n))
                }
                ,
                e.prototype.toString = function () {
                    return ".priority"
                }
                ,
                e
        }(Dt), jt = new Bt, Kt = function () {
            function t(t, e, n, r, i) {
                void 0 === i && (i = null),
                    this.isReverse_ = r,
                    this.resultGenerator_ = i,
                    this.nodeStack_ = [];
                for (var o = 1; !t.isEmpty();)
                    if (t = t,
                        o = e ? n(t.key, e) : 1,
                        r && (o *= -1),
                        o < 0)
                        t = this.isReverse_ ? t.left : t.right;
                    else {
                        if (0 === o) {
                            this.nodeStack_.push(t);
                            break
                        }
                        this.nodeStack_.push(t),
                            t = this.isReverse_ ? t.right : t.left
                    }
            }
            return t.prototype.getNext = function () {
                if (0 === this.nodeStack_.length)
                    return null;
                var t, e = this.nodeStack_.pop();
                if (t = this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
                    key: e.key,
                    value: e.value
                },
                    this.isReverse_)
                    for (e = e.left; !e.isEmpty();)
                        this.nodeStack_.push(e),
                            e = e.right;
                else
                    for (e = e.right; !e.isEmpty();)
                        this.nodeStack_.push(e),
                            e = e.left;
                return t
            }
                ,
                t.prototype.hasNext = function () {
                    return this.nodeStack_.length > 0
                }
                ,
                t.prototype.peek = function () {
                    if (0 === this.nodeStack_.length)
                        return null;
                    var t = this.nodeStack_[this.nodeStack_.length - 1];
                    return this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                        key: t.key,
                        value: t.value
                    }
                }
                ,
                t
        }(), Yt = function () {
            function t(e, n, r, i, o) {
                this.key = e,
                    this.value = n,
                    this.color = null != r ? r : t.RED,
                    this.left = null != i ? i : Gt.EMPTY_NODE,
                    this.right = null != o ? o : Gt.EMPTY_NODE
            }
            return t.prototype.copy = function (e, n, r, i, o) {
                return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right)
            }
                ,
                t.prototype.count = function () {
                    return this.left.count() + 1 + this.right.count()
                }
                ,
                t.prototype.isEmpty = function () {
                    return !1
                }
                ,
                t.prototype.inorderTraversal = function (t) {
                    return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t)
                }
                ,
                t.prototype.reverseTraversal = function (t) {
                    return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t)
                }
                ,
                t.prototype.min_ = function () {
                    return this.left.isEmpty() ? this : this.left.min_()
                }
                ,
                t.prototype.minKey = function () {
                    return this.min_().key
                }
                ,
                t.prototype.maxKey = function () {
                    return this.right.isEmpty() ? this.key : this.right.maxKey()
                }
                ,
                t.prototype.insert = function (t, e, n) {
                    var r, i;
                    return (i = (r = n(t, (i = this).key)) < 0 ? i.copy(null, null, null, i.left.insert(t, e, n), null) : 0 === r ? i.copy(null, e, null, null, null) : i.copy(null, null, null, null, i.right.insert(t, e, n))).fixUp_()
                }
                ,
                t.prototype.removeMin_ = function () {
                    if (this.left.isEmpty())
                        return Gt.EMPTY_NODE;
                    var t = this;
                    return t.left.isRed_() || t.left.left.isRed_() || (t = t.moveRedLeft_()),
                        (t = t.copy(null, null, null, t.left.removeMin_(), null)).fixUp_()
                }
                ,
                t.prototype.remove = function (t, e) {
                    var n, r;
                    if (e(t, (n = this).key) < 0)
                        n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()),
                            n = n.copy(null, null, null, n.left.remove(t, e), null);
                    else {
                        if (n.left.isRed_() && (n = n.rotateRight_()),
                            n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()),
                            0 === e(t, n.key)) {
                            if (n.right.isEmpty())
                                return Gt.EMPTY_NODE;
                            r = n.right.min_(),
                                n = n.copy(r.key, r.value, null, null, n.right.removeMin_())
                        }
                        n = n.copy(null, null, null, null, n.right.remove(t, e))
                    }
                    return n.fixUp_()
                }
                ,
                t.prototype.isRed_ = function () {
                    return this.color
                }
                ,
                t.prototype.fixUp_ = function () {
                    var t = this;
                    return t.right.isRed_() && !t.left.isRed_() && (t = t.rotateLeft_()),
                        t.left.isRed_() && t.left.left.isRed_() && (t = t.rotateRight_()),
                        t.left.isRed_() && t.right.isRed_() && (t = t.colorFlip_()),
                        t
                }
                ,
                t.prototype.moveRedLeft_ = function () {
                    var t = this.colorFlip_();
                    return t.right.left.isRed_() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight_())).rotateLeft_()).colorFlip_()),
                        t
                }
                ,
                t.prototype.moveRedRight_ = function () {
                    var t = this.colorFlip_();
                    return t.left.left.isRed_() && (t = (t = t.rotateRight_()).colorFlip_()),
                        t
                }
                ,
                t.prototype.rotateLeft_ = function () {
                    var e = this.copy(null, null, t.RED, null, this.right.left);
                    return this.right.copy(null, null, this.color, e, null)
                }
                ,
                t.prototype.rotateRight_ = function () {
                    var e = this.copy(null, null, t.RED, this.left.right, null);
                    return this.left.copy(null, null, this.color, null, e)
                }
                ,
                t.prototype.colorFlip_ = function () {
                    var t = this.left.copy(null, null, !this.left.color, null, null)
                        , e = this.right.copy(null, null, !this.right.color, null, null);
                    return this.copy(null, null, !this.color, t, e)
                }
                ,
                t.prototype.checkMaxDepth_ = function () {
                    var t = this.check_();
                    return Math.pow(2, t) <= this.count() + 1
                }
                ,
                t.prototype.check_ = function () {
                    var t;
                    if (this.isRed_() && this.left.isRed_())
                        throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
                    if (this.right.isRed_())
                        throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
                    if ((t = this.left.check_()) !== this.right.check_())
                        throw new Error("Black depths differ");
                    return t + (this.isRed_() ? 0 : 1)
                }
                ,
                t.RED = !0,
                t.BLACK = !1,
                t
        }(), zt = function () {
            function t() { }
            return t.prototype.copy = function (t, e, n, r, i) {
                return this
            }
                ,
                t.prototype.insert = function (t, e, n) {
                    return new Yt(t, e, null)
                }
                ,
                t.prototype.remove = function (t, e) {
                    return this
                }
                ,
                t.prototype.count = function () {
                    return 0
                }
                ,
                t.prototype.isEmpty = function () {
                    return !0
                }
                ,
                t.prototype.inorderTraversal = function (t) {
                    return !1
                }
                ,
                t.prototype.reverseTraversal = function (t) {
                    return !1
                }
                ,
                t.prototype.minKey = function () {
                    return null
                }
                ,
                t.prototype.maxKey = function () {
                    return null
                }
                ,
                t.prototype.check_ = function () {
                    return 0
                }
                ,
                t.prototype.isRed_ = function () {
                    return !1
                }
                ,
                t
        }(), Gt = function () {
            function t(e, n) {
                void 0 === n && (n = t.EMPTY_NODE),
                    this.comparator_ = e,
                    this.root_ = n
            }
            return t.prototype.insert = function (e, n) {
                return new t(this.comparator_, this.root_.insert(e, n, this.comparator_).copy(null, null, Yt.BLACK, null, null))
            }
                ,
                t.prototype.remove = function (e) {
                    return new t(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, Yt.BLACK, null, null))
                }
                ,
                t.prototype.get = function (t) {
                    for (var e, n = this.root_; !n.isEmpty();) {
                        if (0 === (e = this.comparator_(t, n.key)))
                            return n.value;
                        e < 0 ? n = n.left : e > 0 && (n = n.right)
                    }
                    return null
                }
                ,
                t.prototype.getPredecessorKey = function (t) {
                    for (var e, n = this.root_, r = null; !n.isEmpty();) {
                        if (0 === (e = this.comparator_(t, n.key))) {
                            if (n.left.isEmpty())
                                return r ? r.key : null;
                            for (n = n.left; !n.right.isEmpty();)
                                n = n.right;
                            return n.key
                        }
                        e < 0 ? n = n.left : e > 0 && (r = n,
                            n = n.right)
                    }
                    throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
                }
                ,
                t.prototype.isEmpty = function () {
                    return this.root_.isEmpty()
                }
                ,
                t.prototype.count = function () {
                    return this.root_.count()
                }
                ,
                t.prototype.minKey = function () {
                    return this.root_.minKey()
                }
                ,
                t.prototype.maxKey = function () {
                    return this.root_.maxKey()
                }
                ,
                t.prototype.inorderTraversal = function (t) {
                    return this.root_.inorderTraversal(t)
                }
                ,
                t.prototype.reverseTraversal = function (t) {
                    return this.root_.reverseTraversal(t)
                }
                ,
                t.prototype.getIterator = function (t) {
                    return new Kt(this.root_, null, this.comparator_, !1, t)
                }
                ,
                t.prototype.getIteratorFrom = function (t, e) {
                    return new Kt(this.root_, t, this.comparator_, !1, e)
                }
                ,
                t.prototype.getReverseIteratorFrom = function (t, e) {
                    return new Kt(this.root_, t, this.comparator_, !0, e)
                }
                ,
                t.prototype.getReverseIterator = function (t) {
                    return new Kt(this.root_, null, this.comparator_, !0, t)
                }
                ,
                t.EMPTY_NODE = new zt,
                t
        }(), Xt = Math.log(2), $t = function () {
            function t(t) {
                var e;
                this.count = (e = t + 1,
                    parseInt(Math.log(e) / Xt, 10)),
                    this.current_ = this.count - 1;
                var n, r = (n = this.count,
                    parseInt(Array(n + 1).join("1"), 2));
                this.bits_ = t + 1 & r
            }
            return t.prototype.nextBitIsOne = function () {
                var t = !(this.bits_ & 1 << this.current_);
                return this.current_--,
                    t
            }
                ,
                t
        }(), Jt = function (t, e, n, r) {
            t.sort(e);
            var i = function (e, r) {
                var o, s, a = r - e;
                if (0 == a)
                    return null;
                if (1 == a)
                    return o = t[e],
                        s = n ? n(o) : o,
                        new Yt(s, o.node, Yt.BLACK, null, null);
                var h = parseInt(a / 2, 10) + e
                    , u = i(e, h)
                    , l = i(h + 1, r);
                return o = t[h],
                    s = n ? n(o) : o,
                    new Yt(s, o.node, Yt.BLACK, u, l)
            }
                , o = function (e) {
                    for (var r = null, o = null, s = t.length, a = function (e, r) {
                        var o = s - e
                            , a = s;
                        s -= e;
                        var u = i(o + 1, a)
                            , l = t[o]
                            , c = n ? n(l) : l;
                        h(new Yt(c, l.node, r, null, u))
                    }, h = function (t) {
                        r ? (r.left = t,
                            r = t) : (o = t,
                                r = t)
                    }, u = 0; u < e.count; ++u) {
                        var l = e.nextBitIsOne()
                            , c = Math.pow(2, e.count - (u + 1));
                        l ? a(c, Yt.BLACK) : (a(c, Yt.BLACK),
                            a(c, Yt.RED))
                    }
                    return o
                }(new $t(t.length));
            return new Gt(r || e, o)
        }, Zt = {}, te = function () {
            function t(t, e) {
                this.indexes_ = t,
                    this.indexSet_ = e
            }
            return Object.defineProperty(t, "Default", {
                get: function () {
                    return n.assert(Zt && jt, "ChildrenNode.ts has not been loaded"),
                        Vt = Vt || new t({
                            ".priority": Zt
                        }, {
                            ".priority": jt
                        })
                },
                enumerable: !0,
                configurable: !0
            }),
                t.prototype.get = function (t) {
                    var e = n.safeGet(this.indexes_, t);
                    if (!e)
                        throw new Error("No index defined for " + t);
                    return e === Zt ? null : e
                }
                ,
                t.prototype.hasIndex = function (t) {
                    return n.contains(this.indexSet_, t.toString())
                }
                ,
                t.prototype.addIndex = function (e, r) {
                    n.assert(e !== kt, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                    for (var i, o = [], s = !1, a = r.getIterator(Pt.Wrap), h = a.getNext(); h;)
                        s = s || e.isDefinedOn(h.node),
                            o.push(h),
                            h = a.getNext();
                    i = s ? Jt(o, e.getCompare()) : Zt;
                    var u = e.toString()
                        , l = n.clone(this.indexSet_);
                    l[u] = e;
                    var c = n.clone(this.indexes_);
                    return c[u] = i,
                        new t(c, l)
                }
                ,
                t.prototype.addToIndexes = function (e, r) {
                    var i = this;
                    return new t(n.map(this.indexes_, function (t, o) {
                        var s = n.safeGet(i.indexSet_, o);
                        if (n.assert(s, "Missing index implementation for " + o),
                            t === Zt) {
                            if (s.isDefinedOn(e.node)) {
                                for (var a = [], h = r.getIterator(Pt.Wrap), u = h.getNext(); u;)
                                    u.name != e.name && a.push(u),
                                        u = h.getNext();
                                return a.push(e),
                                    Jt(a, s.getCompare())
                            }
                            return Zt
                        }
                        var l = r.get(e.name)
                            , c = t;
                        return l && (c = c.remove(new Pt(e.name, l))),
                            c.insert(e, e.node)
                    }), this.indexSet_)
                }
                ,
                t.prototype.removeFromIndexes = function (e, r) {
                    return new t(n.map(this.indexes_, function (t) {
                        if (t === Zt)
                            return t;
                        var n = r.get(e.name);
                        return n ? t.remove(new Pt(e.name, n)) : t
                    }), this.indexSet_)
                }
                ,
                t
        }();
        function ee(t, e) {
            return R(t.name, e.name)
        }
        function ne(t, e) {
            return R(t, e)
        }
        var re = function () {
            function t(t, e, r) {
                this.children_ = t,
                    this.priorityNode_ = e,
                    this.indexMap_ = r,
                    this.lazyHash_ = null,
                    this.priorityNode_ && Wt(this.priorityNode_),
                    this.children_.isEmpty() && n.assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
            }
            return Object.defineProperty(t, "EMPTY_NODE", {
                get: function () {
                    return Ht || (Ht = new t(new Gt(ne), null, te.Default))
                },
                enumerable: !0,
                configurable: !0
            }),
                t.prototype.isLeafNode = function () {
                    return !1
                }
                ,
                t.prototype.getPriority = function () {
                    return this.priorityNode_ || Ht
                }
                ,
                t.prototype.updatePriority = function (e) {
                    return this.children_.isEmpty() ? this : new t(this.children_, e, this.indexMap_)
                }
                ,
                t.prototype.getImmediateChild = function (t) {
                    if (".priority" === t)
                        return this.getPriority();
                    var e = this.children_.get(t);
                    return null === e ? Ht : e
                }
                ,
                t.prototype.getChild = function (t) {
                    var e = t.getFront();
                    return null === e ? this : this.getImmediateChild(e).getChild(t.popFront())
                }
                ,
                t.prototype.hasChild = function (t) {
                    return null !== this.children_.get(t)
                }
                ,
                t.prototype.updateImmediateChild = function (e, r) {
                    if (n.assert(r, "We should always be passing snapshot nodes"),
                        ".priority" === e)
                        return this.updatePriority(r);
                    var i, o = new Pt(e, r), s = void 0, a = void 0;
                    return r.isEmpty() ? (s = this.children_.remove(e),
                        a = this.indexMap_.removeFromIndexes(o, this.children_)) : (s = this.children_.insert(e, r),
                            a = this.indexMap_.addToIndexes(o, this.children_)),
                        i = s.isEmpty() ? Ht : this.priorityNode_,
                        new t(s, i, a)
                }
                ,
                t.prototype.updateChild = function (t, e) {
                    var r = t.getFront();
                    if (null === r)
                        return e;
                    n.assert(".priority" !== t.getFront() || 1 === t.getLength(), ".priority must be the last token in a path");
                    var i = this.getImmediateChild(r).updateChild(t.popFront(), e);
                    return this.updateImmediateChild(r, i)
                }
                ,
                t.prototype.isEmpty = function () {
                    return this.children_.isEmpty()
                }
                ,
                t.prototype.numChildren = function () {
                    return this.children_.count()
                }
                ,
                t.prototype.val = function (e) {
                    if (this.isEmpty())
                        return null;
                    var n = {}
                        , r = 0
                        , i = 0
                        , o = !0;
                    if (this.forEachChild(jt, function (s, a) {
                        n[s] = a.val(e),
                            r++,
                            o && t.INTEGER_REGEXP_.test(s) ? i = Math.max(i, Number(s)) : o = !1
                    }),
                        !e && o && i < 2 * r) {
                        var s = [];
                        for (var a in n)
                            s[a] = n[a];
                        return s
                    }
                    return e && !this.getPriority().isEmpty() && (n[".priority"] = this.getPriority().val()),
                        n
                }
                ,
                t.prototype.hash = function () {
                    if (null === this.lazyHash_) {
                        var t = "";
                        this.getPriority().isEmpty() || (t += "priority:" + Mt(this.getPriority().val()) + ":"),
                            this.forEachChild(jt, function (e, n) {
                                var r = n.hash();
                                "" !== r && (t += ":" + e + ":" + r)
                            }),
                            this.lazyHash_ = "" === t ? "" : d(t)
                    }
                    return this.lazyHash_
                }
                ,
                t.prototype.getPredecessorChildName = function (t, e, n) {
                    var r = this.resolveIndex_(n);
                    if (r) {
                        var i = r.getPredecessorKey(new Pt(t, e));
                        return i ? i.name : null
                    }
                    return this.children_.getPredecessorKey(t)
                }
                ,
                t.prototype.getFirstChildName = function (t) {
                    var e = this.resolveIndex_(t);
                    if (e) {
                        var n = e.minKey();
                        return n && n.name
                    }
                    return this.children_.minKey()
                }
                ,
                t.prototype.getFirstChild = function (t) {
                    var e = this.getFirstChildName(t);
                    return e ? new Pt(e, this.children_.get(e)) : null
                }
                ,
                t.prototype.getLastChildName = function (t) {
                    var e = this.resolveIndex_(t);
                    if (e) {
                        var n = e.maxKey();
                        return n && n.name
                    }
                    return this.children_.maxKey()
                }
                ,
                t.prototype.getLastChild = function (t) {
                    var e = this.getLastChildName(t);
                    return e ? new Pt(e, this.children_.get(e)) : null
                }
                ,
                t.prototype.forEachChild = function (t, e) {
                    var n = this.resolveIndex_(t);
                    return n ? n.inorderTraversal(function (t) {
                        return e(t.name, t.node)
                    }) : this.children_.inorderTraversal(e)
                }
                ,
                t.prototype.getIterator = function (t) {
                    return this.getIteratorFrom(t.minPost(), t)
                }
                ,
                t.prototype.getIteratorFrom = function (t, e) {
                    var n = this.resolveIndex_(e);
                    if (n)
                        return n.getIteratorFrom(t, function (t) {
                            return t
                        });
                    for (var r = this.children_.getIteratorFrom(t.name, Pt.Wrap), i = r.peek(); null != i && e.compare(i, t) < 0;)
                        r.getNext(),
                            i = r.peek();
                    return r
                }
                ,
                t.prototype.getReverseIterator = function (t) {
                    return this.getReverseIteratorFrom(t.maxPost(), t)
                }
                ,
                t.prototype.getReverseIteratorFrom = function (t, e) {
                    var n = this.resolveIndex_(e);
                    if (n)
                        return n.getReverseIteratorFrom(t, function (t) {
                            return t
                        });
                    for (var r = this.children_.getReverseIteratorFrom(t.name, Pt.Wrap), i = r.peek(); null != i && e.compare(i, t) > 0;)
                        r.getNext(),
                            i = r.peek();
                    return r
                }
                ,
                t.prototype.compareTo = function (t) {
                    return this.isEmpty() ? t.isEmpty() ? 0 : -1 : t.isLeafNode() || t.isEmpty() ? 1 : t === oe ? -1 : 0
                }
                ,
                t.prototype.withIndex = function (e) {
                    if (e === kt || this.indexMap_.hasIndex(e))
                        return this;
                    var n = this.indexMap_.addIndex(e, this.children_);
                    return new t(this.children_, this.priorityNode_, n)
                }
                ,
                t.prototype.isIndexed = function (t) {
                    return t === kt || this.indexMap_.hasIndex(t)
                }
                ,
                t.prototype.equals = function (t) {
                    if (t === this)
                        return !0;
                    if (t.isLeafNode())
                        return !1;
                    var e = t;
                    if (this.getPriority().equals(e.getPriority())) {
                        if (this.children_.count() === e.children_.count()) {
                            for (var n = this.getIterator(jt), r = e.getIterator(jt), i = n.getNext(), o = r.getNext(); i && o;) {
                                if (i.name !== o.name || !i.node.equals(o.node))
                                    return !1;
                                i = n.getNext(),
                                    o = r.getNext()
                            }
                            return null === i && null === o
                        }
                        return !1
                    }
                    return !1
                }
                ,
                t.prototype.resolveIndex_ = function (t) {
                    return t === kt ? null : this.indexMap_.get(t.toString())
                }
                ,
                t.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/,
                t
        }()
            , ie = function (t) {
                function e() {
                    return t.call(this, new Gt(ne), re.EMPTY_NODE, te.Default) || this
                }
                return i.__extends(e, t),
                    e.prototype.compareTo = function (t) {
                        return t === this ? 0 : 1
                    }
                    ,
                    e.prototype.equals = function (t) {
                        return t === this
                    }
                    ,
                    e.prototype.getPriority = function () {
                        return this
                    }
                    ,
                    e.prototype.getImmediateChild = function (t) {
                        return re.EMPTY_NODE
                    }
                    ,
                    e.prototype.isEmpty = function () {
                        return !1
                    }
                    ,
                    e
            }(re)
            , oe = new ie;
        Object.defineProperties(Pt, {
            MIN: {
                value: new Pt(N, re.EMPTY_NODE)
            },
            MAX: {
                value: new Pt(I, oe)
            }
        }),
            xt.__EMPTY_NODE = re.EMPTY_NODE,
            qt.__childrenNodeConstructor = re,
            Ot(oe),
            Ut(oe);
        var se = !0;
        function ae(t, e) {
            if (void 0 === e && (e = null),
                null === t)
                return re.EMPTY_NODE;
            if ("object" == typeof t && ".priority" in t && (e = t[".priority"]),
                n.assert(null === e || "string" == typeof e || "number" == typeof e || "object" == typeof e && ".sv" in e, "Invalid priority type found: " + typeof e),
                "object" == typeof t && ".value" in t && null !== t[".value"] && (t = t[".value"]),
                "object" != typeof t || ".sv" in t)
                return new qt(t, ae(e));
            if (t instanceof Array || !se) {
                var r = re.EMPTY_NODE
                    , i = t;
                return n.forEach(i, function (t, e) {
                    if (n.contains(i, t) && "." !== t.substring(0, 1)) {
                        var o = ae(e);
                        !o.isLeafNode() && o.isEmpty() || (r = r.updateImmediateChild(t, o))
                    }
                }),
                    r.updatePriority(ae(e))
            }
            var o = []
                , s = !1
                , a = t;
            if (n.forEach(a, function (t, e) {
                if ("string" != typeof t || "." !== t.substring(0, 1)) {
                    var n = ae(a[t]);
                    n.isEmpty() || (s = s || !n.getPriority().isEmpty(),
                        o.push(new Pt(t, n)))
                }
            }),
                0 == o.length)
                return re.EMPTY_NODE;
            var h = Jt(o, ee, function (t) {
                return t.name
            }, ne);
            if (s) {
                var u = Jt(o, jt.getCompare());
                return new re(h, ae(e), new te({
                    ".priority": u
                }, {
                    ".priority": jt
                }))
            }
            return new re(h, ae(e), te.Default)
        }
        Qt(ae);
        var he, ue, le = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i.__extends(e, t),
                e.prototype.compare = function (t, e) {
                    var n = t.node.compareTo(e.node);
                    return 0 === n ? R(t.name, e.name) : n
                }
                ,
                e.prototype.isDefinedOn = function (t) {
                    return !0
                }
                ,
                e.prototype.indexedValueChanged = function (t, e) {
                    return !t.equals(e)
                }
                ,
                e.prototype.minPost = function () {
                    return Pt.MIN
                }
                ,
                e.prototype.maxPost = function () {
                    return Pt.MAX
                }
                ,
                e.prototype.makePost = function (t, e) {
                    var n = ae(t);
                    return new Pt(e, n)
                }
                ,
                e.prototype.toString = function () {
                    return ".value"
                }
                ,
                e
        }(Dt), ce = new le, pe = function (t) {
            function e(e) {
                var r = t.call(this) || this;
                return r.indexPath_ = e,
                    n.assert(!e.isEmpty() && ".priority" !== e.getFront(), "Can't create PathIndex with empty path or .priority key"),
                    r
            }
            return i.__extends(e, t),
                e.prototype.extractChild = function (t) {
                    return t.getChild(this.indexPath_)
                }
                ,
                e.prototype.isDefinedOn = function (t) {
                    return !t.getChild(this.indexPath_).isEmpty()
                }
                ,
                e.prototype.compare = function (t, e) {
                    var n = this.extractChild(t.node)
                        , r = this.extractChild(e.node)
                        , i = n.compareTo(r);
                    return 0 === i ? R(t.name, e.name) : i
                }
                ,
                e.prototype.makePost = function (t, e) {
                    var n = ae(t)
                        , r = re.EMPTY_NODE.updateChild(this.indexPath_, n);
                    return new Pt(e, r)
                }
                ,
                e.prototype.maxPost = function () {
                    var t = re.EMPTY_NODE.updateChild(this.indexPath_, oe);
                    return new Pt(I, t)
                }
                ,
                e.prototype.toString = function () {
                    return this.indexPath_.slice().join("/")
                }
                ,
                e
        }(Dt), de = function () {
            function t(t, e, n) {
                this.node_ = t,
                    this.ref_ = e,
                    this.index_ = n
            }
            return t.prototype.val = function () {
                return n.validateArgCount("DataSnapshot.val", 0, 0, arguments.length),
                    this.node_.val()
            }
                ,
                t.prototype.exportVal = function () {
                    return n.validateArgCount("DataSnapshot.exportVal", 0, 0, arguments.length),
                        this.node_.val(!0)
                }
                ,
                t.prototype.toJSON = function () {
                    return n.validateArgCount("DataSnapshot.toJSON", 0, 1, arguments.length),
                        this.exportVal()
                }
                ,
                t.prototype.exists = function () {
                    return n.validateArgCount("DataSnapshot.exists", 0, 0, arguments.length),
                        !this.node_.isEmpty()
                }
                ,
                t.prototype.child = function (e) {
                    n.validateArgCount("DataSnapshot.child", 0, 1, arguments.length),
                        e = String(e),
                        Et("DataSnapshot.child", 1, e, !1);
                    var r = new H(e)
                        , i = this.ref_.child(r);
                    return new t(this.node_.getChild(r), i, jt)
                }
                ,
                t.prototype.hasChild = function (t) {
                    n.validateArgCount("DataSnapshot.hasChild", 1, 1, arguments.length),
                        Et("DataSnapshot.hasChild", 1, t, !1);
                    var e = new H(t);
                    return !this.node_.getChild(e).isEmpty()
                }
                ,
                t.prototype.getPriority = function () {
                    return n.validateArgCount("DataSnapshot.getPriority", 0, 0, arguments.length),
                        this.node_.getPriority().val()
                }
                ,
                t.prototype.forEach = function (e) {
                    var r = this;
                    return n.validateArgCount("DataSnapshot.forEach", 1, 1, arguments.length),
                        n.validateCallback("DataSnapshot.forEach", 1, e, !1),
                        !this.node_.isLeafNode() && !!this.node_.forEachChild(this.index_, function (n, i) {
                            return e(new t(i, r.ref_.child(n), jt))
                        })
                }
                ,
                t.prototype.hasChildren = function () {
                    return n.validateArgCount("DataSnapshot.hasChildren", 0, 0, arguments.length),
                        !this.node_.isLeafNode() && !this.node_.isEmpty()
                }
                ,
                Object.defineProperty(t.prototype, "key", {
                    get: function () {
                        return this.ref_.getKey()
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.numChildren = function () {
                    return n.validateArgCount("DataSnapshot.numChildren", 0, 0, arguments.length),
                        this.node_.numChildren()
                }
                ,
                t.prototype.getRef = function () {
                    return n.validateArgCount("DataSnapshot.ref", 0, 0, arguments.length),
                        this.ref_
                }
                ,
                Object.defineProperty(t.prototype, "ref", {
                    get: function () {
                        return this.getRef()
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t
        }(), fe = function () {
            function t(t, e, n, r) {
                this.eventType = t,
                    this.eventRegistration = e,
                    this.snapshot = n,
                    this.prevName = r
            }
            return t.prototype.getPath = function () {
                var t = this.snapshot.getRef();
                return "value" === this.eventType ? t.path : t.getParent().path
            }
                ,
                t.prototype.getEventType = function () {
                    return this.eventType
                }
                ,
                t.prototype.getEventRunner = function () {
                    return this.eventRegistration.getEventRunner(this)
                }
                ,
                t.prototype.toString = function () {
                    return this.getPath().toString() + ":" + this.eventType + ":" + n.stringify(this.snapshot.exportVal())
                }
                ,
                t
        }(), _e = function () {
            function t(t, e, n) {
                this.eventRegistration = t,
                    this.error = e,
                    this.path = n
            }
            return t.prototype.getPath = function () {
                return this.path
            }
                ,
                t.prototype.getEventType = function () {
                    return "cancel"
                }
                ,
                t.prototype.getEventRunner = function () {
                    return this.eventRegistration.getEventRunner(this)
                }
                ,
                t.prototype.toString = function () {
                    return this.path.toString() + ":cancel"
                }
                ,
                t
        }(), ye = function () {
            function t(t, e, n) {
                this.callback_ = t,
                    this.cancelCallback_ = e,
                    this.context_ = n
            }
            return t.prototype.respondsTo = function (t) {
                return "value" === t
            }
                ,
                t.prototype.createEvent = function (t, e) {
                    var n = e.getQueryParams().getIndex();
                    return new fe("value", this, new de(t.snapshotNode, e.getRef(), n))
                }
                ,
                t.prototype.getEventRunner = function (t) {
                    var e = this.context_;
                    if ("cancel" === t.getEventType()) {
                        n.assert(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
                        var r = this.cancelCallback_;
                        return function () {
                            r.call(e, t.error)
                        }
                    }
                    var i = this.callback_;
                    return function () {
                        i.call(e, t.snapshot)
                    }
                }
                ,
                t.prototype.createCancelEvent = function (t, e) {
                    return this.cancelCallback_ ? new _e(this, t, e) : null
                }
                ,
                t.prototype.matches = function (e) {
                    return e instanceof t && (!e.callback_ || !this.callback_ || e.callback_ === this.callback_ && e.context_ === this.context_)
                }
                ,
                t.prototype.hasAnyCallback = function () {
                    return null !== this.callback_
                }
                ,
                t
        }(), ve = function () {
            function t(t, e, n) {
                this.callbacks_ = t,
                    this.cancelCallback_ = e,
                    this.context_ = n
            }
            return t.prototype.respondsTo = function (t) {
                var e = "children_added" === t ? "child_added" : t;
                return e = "children_removed" === e ? "child_removed" : e,
                    n.contains(this.callbacks_, e)
            }
                ,
                t.prototype.createCancelEvent = function (t, e) {
                    return this.cancelCallback_ ? new _e(this, t, e) : null
                }
                ,
                t.prototype.createEvent = function (t, e) {
                    n.assert(null != t.childName, "Child events should have a childName.");
                    var r = e.getRef().child(t.childName)
                        , i = e.getQueryParams().getIndex();
                    return new fe(t.type, this, new de(t.snapshotNode, r, i), t.prevName)
                }
                ,
                t.prototype.getEventRunner = function (t) {
                    var e = this.context_;
                    if ("cancel" === t.getEventType()) {
                        n.assert(this.cancelCallback_, "Raising a cancel event on a listener with no cancel callback");
                        var r = this.cancelCallback_;
                        return function () {
                            r.call(e, t.error)
                        }
                    }
                    var i = this.callbacks_[t.eventType];
                    return function () {
                        i.call(e, t.snapshot, t.prevName)
                    }
                }
                ,
                t.prototype.matches = function (e) {
                    if (e instanceof t) {
                        if (!this.callbacks_ || !e.callbacks_)
                            return !0;
                        if (this.context_ === e.context_) {
                            var r = n.getCount(e.callbacks_);
                            if (r === n.getCount(this.callbacks_)) {
                                if (1 === r) {
                                    var i = n.getAnyKey(e.callbacks_)
                                        , o = n.getAnyKey(this.callbacks_);
                                    return !(o !== i || e.callbacks_[i] && this.callbacks_[o] && e.callbacks_[i] !== this.callbacks_[o])
                                }
                                return n.every(this.callbacks_, function (t, n) {
                                    return e.callbacks_[t] === n
                                })
                            }
                        }
                    }
                    return !1
                }
                ,
                t.prototype.hasAnyCallback = function () {
                    return null !== this.callbacks_
                }
                ,
                t
        }(), ge = function () {
            function t(t, e, n, r) {
                this.repo = t,
                    this.path = e,
                    this.queryParams_ = n,
                    this.orderByCalled_ = r
            }
            return Object.defineProperty(t, "__referenceConstructor", {
                get: function () {
                    return n.assert(he, "Reference.ts has not been loaded"),
                        he
                },
                set: function (t) {
                    he = t
                },
                enumerable: !0,
                configurable: !0
            }),
                t.validateQueryEndpoints_ = function (t) {
                    var e = null
                        , r = null;
                    if (t.hasStart() && (e = t.getIndexStartValue()),
                        t.hasEnd() && (r = t.getIndexEndValue()),
                        t.getIndex() === kt) {
                        var i = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo()."
                            , o = "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";
                        if (t.hasStart()) {
                            if (t.getIndexStartName() != N)
                                throw new Error(i);
                            if ("string" != typeof e)
                                throw new Error(o)
                        }
                        if (t.hasEnd()) {
                            if (t.getIndexEndName() != I)
                                throw new Error(i);
                            if ("string" != typeof r)
                                throw new Error(o)
                        }
                    } else if (t.getIndex() === jt) {
                        if (null != e && !dt(e) || null != r && !dt(r))
                            throw new Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")
                    } else if (n.assert(t.getIndex() instanceof pe || t.getIndex() === ce, "unknown index type."),
                        null != e && "object" == typeof e || null != r && "object" == typeof r)
                        throw new Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")
                }
                ,
                t.validateLimit_ = function (t) {
                    if (t.hasStart() && t.hasEnd() && t.hasLimit() && !t.hasAnchoredLimit())
                        throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")
                }
                ,
                t.prototype.validateNoPreviousOrderByCall_ = function (t) {
                    if (!0 === this.orderByCalled_)
                        throw new Error(t + ": You can't combine multiple orderBy calls.")
                }
                ,
                t.prototype.getQueryParams = function () {
                    return this.queryParams_
                }
                ,
                t.prototype.getRef = function () {
                    return n.validateArgCount("Query.ref", 0, 0, arguments.length),
                        new t.__referenceConstructor(this.repo, this.path)
                }
                ,
                t.prototype.on = function (e, r, i, o) {
                    n.validateArgCount("Query.on", 2, 4, arguments.length),
                        mt("Query.on", 1, e, !1),
                        n.validateCallback("Query.on", 2, r, !1);
                    var s = t.getCancelAndContextArgs_("Query.on", i, o);
                    if ("value" === e)
                        this.onValueEvent(r, s.cancel, s.context);
                    else {
                        var a = {};
                        a[e] = r,
                            this.onChildEvent(a, s.cancel, s.context)
                    }
                    return r
                }
                ,
                t.prototype.onValueEvent = function (t, e, n) {
                    var r = new ye(t, e || null, n || null);
                    this.repo.addEventCallbackForQuery(this, r)
                }
                ,
                t.prototype.onChildEvent = function (t, e, n) {
                    var r = new ve(t, e, n);
                    this.repo.addEventCallbackForQuery(this, r)
                }
                ,
                t.prototype.off = function (t, e, r) {
                    n.validateArgCount("Query.off", 0, 3, arguments.length),
                        mt("Query.off", 1, t, !0),
                        n.validateCallback("Query.off", 2, e, !0),
                        n.validateContextObject("Query.off", 3, r, !0);
                    var i = null
                        , o = null;
                    "value" === t ? i = new ye(e || null, null, r || null) : t && (e && ((o = {})[t] = e),
                        i = new ve(o, null, r || null));
                    this.repo.removeEventCallbackForQuery(this, i)
                }
                ,
                t.prototype.once = function (e, r, i, o) {
                    var s = this;
                    n.validateArgCount("Query.once", 1, 4, arguments.length),
                        mt("Query.once", 1, e, !1),
                        n.validateCallback("Query.once", 2, r, !0);
                    var a = t.getCancelAndContextArgs_("Query.once", i, o)
                        , h = !0
                        , u = new n.Deferred;
                    u.promise.catch(function () { });
                    var l = function (t) {
                        h && (h = !1,
                            s.off(e, l),
                            r && r.bind(a.context)(t),
                            u.resolve(t))
                    };
                    return this.on(e, l, function (t) {
                        s.off(e, l),
                            a.cancel && a.cancel.bind(a.context)(t),
                            u.reject(t)
                    }),
                        u.promise
                }
                ,
                t.prototype.limitToFirst = function (e) {
                    if (n.validateArgCount("Query.limitToFirst", 1, 1, arguments.length),
                        "number" != typeof e || Math.floor(e) !== e || e <= 0)
                        throw new Error("Query.limitToFirst: First argument must be a positive integer.");
                    if (this.queryParams_.hasLimit())
                        throw new Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                    return new t(this.repo, this.path, this.queryParams_.limitToFirst(e), this.orderByCalled_)
                }
                ,
                t.prototype.limitToLast = function (e) {
                    if (n.validateArgCount("Query.limitToLast", 1, 1, arguments.length),
                        "number" != typeof e || Math.floor(e) !== e || e <= 0)
                        throw new Error("Query.limitToLast: First argument must be a positive integer.");
                    if (this.queryParams_.hasLimit())
                        throw new Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
                    return new t(this.repo, this.path, this.queryParams_.limitToLast(e), this.orderByCalled_)
                }
                ,
                t.prototype.orderByChild = function (e) {
                    if (n.validateArgCount("Query.orderByChild", 1, 1, arguments.length),
                        "$key" === e)
                        throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
                    if ("$priority" === e)
                        throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
                    if ("$value" === e)
                        throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
                    Et("Query.orderByChild", 1, e, !1),
                        this.validateNoPreviousOrderByCall_("Query.orderByChild");
                    var r = new H(e);
                    if (r.isEmpty())
                        throw new Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
                    var i = new pe(r)
                        , o = this.queryParams_.orderBy(i);
                    return t.validateQueryEndpoints_(o),
                        new t(this.repo, this.path, o, !0)
                }
                ,
                t.prototype.orderByKey = function () {
                    n.validateArgCount("Query.orderByKey", 0, 0, arguments.length),
                        this.validateNoPreviousOrderByCall_("Query.orderByKey");
                    var e = this.queryParams_.orderBy(kt);
                    return t.validateQueryEndpoints_(e),
                        new t(this.repo, this.path, e, !0)
                }
                ,
                t.prototype.orderByPriority = function () {
                    n.validateArgCount("Query.orderByPriority", 0, 0, arguments.length),
                        this.validateNoPreviousOrderByCall_("Query.orderByPriority");
                    var e = this.queryParams_.orderBy(jt);
                    return t.validateQueryEndpoints_(e),
                        new t(this.repo, this.path, e, !0)
                }
                ,
                t.prototype.orderByValue = function () {
                    n.validateArgCount("Query.orderByValue", 0, 0, arguments.length),
                        this.validateNoPreviousOrderByCall_("Query.orderByValue");
                    var e = this.queryParams_.orderBy(ce);
                    return t.validateQueryEndpoints_(e),
                        new t(this.repo, this.path, e, !0)
                }
                ,
                t.prototype.startAt = function (e, r) {
                    void 0 === e && (e = null),
                        n.validateArgCount("Query.startAt", 0, 2, arguments.length),
                        ft("Query.startAt", 1, e, this.path, !0),
                        Ct("Query.startAt", 2, r, !0);
                    var i = this.queryParams_.startAt(e, r);
                    if (t.validateLimit_(i),
                        t.validateQueryEndpoints_(i),
                        this.queryParams_.hasStart())
                        throw new Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
                    return void 0 === e && (e = null,
                        r = null),
                        new t(this.repo, this.path, i, this.orderByCalled_)
                }
                ,
                t.prototype.endAt = function (e, r) {
                    void 0 === e && (e = null),
                        n.validateArgCount("Query.endAt", 0, 2, arguments.length),
                        ft("Query.endAt", 1, e, this.path, !0),
                        Ct("Query.endAt", 2, r, !0);
                    var i = this.queryParams_.endAt(e, r);
                    if (t.validateLimit_(i),
                        t.validateQueryEndpoints_(i),
                        this.queryParams_.hasEnd())
                        throw new Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
                    return new t(this.repo, this.path, i, this.orderByCalled_)
                }
                ,
                t.prototype.equalTo = function (t, e) {
                    if (n.validateArgCount("Query.equalTo", 1, 2, arguments.length),
                        ft("Query.equalTo", 1, t, this.path, !1),
                        Ct("Query.equalTo", 2, e, !0),
                        this.queryParams_.hasStart())
                        throw new Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");
                    if (this.queryParams_.hasEnd())
                        throw new Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
                    return this.startAt(t, e).endAt(t, e)
                }
                ,
                t.prototype.toString = function () {
                    return n.validateArgCount("Query.toString", 0, 0, arguments.length),
                        this.repo.toString() + this.path.toUrlEncodedString()
                }
                ,
                t.prototype.toJSON = function () {
                    return n.validateArgCount("Query.toJSON", 0, 1, arguments.length),
                        this.toString()
                }
                ,
                t.prototype.queryObject = function () {
                    return this.queryParams_.getQueryObject()
                }
                ,
                t.prototype.queryIdentifier = function () {
                    var t = this.queryObject()
                        , e = x(t);
                    return "{}" === e ? "default" : e
                }
                ,
                t.prototype.isEqual = function (e) {
                    if (n.validateArgCount("Query.isEqual", 1, 1, arguments.length),
                        !(e instanceof t)) {
                        throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")
                    }
                    var r = this.repo === e.repo
                        , i = this.path.equals(e.path)
                        , o = this.queryIdentifier() === e.queryIdentifier();
                    return r && i && o
                }
                ,
                t.getCancelAndContextArgs_ = function (t, e, r) {
                    var i = {
                        cancel: null,
                        context: null
                    };
                    if (e && r)
                        i.cancel = e,
                            n.validateCallback(t, 3, i.cancel, !0),
                            i.context = r,
                            n.validateContextObject(t, 4, i.context, !0);
                    else if (e)
                        if ("object" == typeof e && null !== e)
                            i.context = e;
                        else {
                            if ("function" != typeof e)
                                throw new Error(n.errorPrefix(t, 3, !0) + " must either be a cancel callback or a context object.");
                            i.cancel = e
                        }
                    return i
                }
                ,
                Object.defineProperty(t.prototype, "ref", {
                    get: function () {
                        return this.getRef()
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t
        }(), me = function () {
            function t() {
                this.set = {}
            }
            return t.prototype.add = function (t, e) {
                this.set[t] = null === e || e
            }
                ,
                t.prototype.contains = function (t) {
                    return n.contains(this.set, t)
                }
                ,
                t.prototype.get = function (t) {
                    return this.contains(t) ? this.set[t] : void 0
                }
                ,
                t.prototype.remove = function (t) {
                    delete this.set[t]
                }
                ,
                t.prototype.clear = function () {
                    this.set = {}
                }
                ,
                t.prototype.isEmpty = function () {
                    return n.isEmpty(this.set)
                }
                ,
                t.prototype.count = function () {
                    return n.getCount(this.set)
                }
                ,
                t.prototype.each = function (t) {
                    n.forEach(this.set, function (e, n) {
                        return t(e, n)
                    })
                }
                ,
                t.prototype.keys = function () {
                    var t = [];
                    return n.forEach(this.set, function (e) {
                        t.push(e)
                    }),
                        t
                }
                ,
                t
        }(), Ce = function () {
            function t() {
                this.value_ = null,
                    this.children_ = null
            }
            return t.prototype.find = function (t) {
                if (null != this.value_)
                    return this.value_.getChild(t);
                if (t.isEmpty() || null == this.children_)
                    return null;
                var e = t.getFront();
                return t = t.popFront(),
                    this.children_.contains(e) ? this.children_.get(e).find(t) : null
            }
                ,
                t.prototype.remember = function (e, n) {
                    if (e.isEmpty())
                        this.value_ = n,
                            this.children_ = null;
                    else if (null !== this.value_)
                        this.value_ = this.value_.updateChild(e, n);
                    else {
                        null == this.children_ && (this.children_ = new me);
                        var r = e.getFront();
                        this.children_.contains(r) || this.children_.add(r, new t);
                        var i = this.children_.get(r);
                        e = e.popFront(),
                            i.remember(e, n)
                    }
                }
                ,
                t.prototype.forget = function (t) {
                    if (t.isEmpty())
                        return this.value_ = null,
                            this.children_ = null,
                            !0;
                    if (null !== this.value_) {
                        if (this.value_.isLeafNode())
                            return !1;
                        var e = this.value_;
                        this.value_ = null;
                        var n = this;
                        return e.forEachChild(jt, function (t, e) {
                            n.remember(new H(t), e)
                        }),
                            this.forget(t)
                    }
                    if (null !== this.children_) {
                        var r = t.getFront();
                        if (t = t.popFront(),
                            this.children_.contains(r))
                            this.children_.get(r).forget(t) && this.children_.remove(r);
                        return !!this.children_.isEmpty() && (this.children_ = null,
                            !0)
                    }
                    return !0
                }
                ,
                t.prototype.forEachTree = function (t, e) {
                    null !== this.value_ ? e(t, this.value_) : this.forEachChild(function (n, r) {
                        var i = new H(t.toString() + "/" + n);
                        r.forEachTree(i, e)
                    })
                }
                ,
                t.prototype.forEachChild = function (t) {
                    null !== this.children_ && this.children_.each(function (e, n) {
                        t(e, n)
                    })
                }
                ,
                t
        }(), Ee = function (t) {
            return (t = t || {}).timestamp = t.timestamp || (new Date).getTime(),
                t
        }, we = function (t, e) {
            return t && "object" == typeof t ? (n.assert(".sv" in t, "Unexpected leaf node or priority contents"),
                e[t[".sv"]]) : t
        }, Te = function (t, e) {
            var n = new Ce;
            return t.forEachTree(new H(""), function (t, r) {
                n.remember(t, be(r, e))
            }),
                n
        }, be = function (t, e) {
            var n, r = t.getPriority().val(), i = we(r, e);
            if (t.isLeafNode()) {
                var o = t
                    , s = we(o.getValue(), e);
                return s !== o.getValue() || i !== o.getPriority().val() ? new qt(s, ae(i)) : t
            }
            var a = t;
            return n = a,
                i !== a.getPriority().val() && (n = n.updatePriority(new qt(i))),
                a.forEachChild(jt, function (t, r) {
                    var i = be(r, e);
                    i !== r && (n = n.updateImmediateChild(t, i))
                }),
                n
        };
        !function (t) {
            t[t.OVERWRITE = 0] = "OVERWRITE",
                t[t.MERGE = 1] = "MERGE",
                t[t.ACK_USER_WRITE = 2] = "ACK_USER_WRITE",
                t[t.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
        }(ue || (ue = {}));
        var Se, Ne, Ie = function () {
            function t(t, e, r, i) {
                this.fromUser = t,
                    this.fromServer = e,
                    this.queryId = r,
                    this.tagged = i,
                    n.assert(!i || e, "Tagged queries must be from server.")
            }
            return t.User = new t(!0, !1, null, !1),
                t.Server = new t(!1, !0, null, !1),
                t.forServerTaggedQuery = function (e) {
                    return new t(!1, !0, e, !0)
                }
                ,
                t
        }(), Re = function () {
            function t(t, e, n) {
                this.path = t,
                    this.affectedTree = e,
                    this.revert = n,
                    this.type = ue.ACK_USER_WRITE,
                    this.source = Ie.User
            }
            return t.prototype.operationForChild = function (e) {
                if (this.path.isEmpty()) {
                    if (null != this.affectedTree.value)
                        return n.assert(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."),
                            this;
                    var r = this.affectedTree.subtree(new H(e));
                    return new t(H.Empty, r, this.revert)
                }
                return n.assert(this.path.getFront() === e, "operationForChild called for unrelated child."),
                    new t(this.path.popFront(), this.affectedTree, this.revert)
            }
                ,
                t
        }(), Pe = function () {
            return Se || (Se = new Gt(P)),
                Se
        }, De = function () {
            function t(t, e) {
                void 0 === e && (e = Pe()),
                    this.value = t,
                    this.children = e
            }
            return t.fromObject = function (e) {
                var r = t.Empty;
                return n.forEach(e, function (t, e) {
                    r = r.set(new H(t), e)
                }),
                    r
            }
                ,
                t.prototype.isEmpty = function () {
                    return null === this.value && this.children.isEmpty()
                }
                ,
                t.prototype.findRootMostMatchingPathAndValue = function (t, e) {
                    if (null != this.value && e(this.value))
                        return {
                            path: H.Empty,
                            value: this.value
                        };
                    if (t.isEmpty())
                        return null;
                    var n = t.getFront()
                        , r = this.children.get(n);
                    if (null !== r) {
                        var i = r.findRootMostMatchingPathAndValue(t.popFront(), e);
                        return null != i ? {
                            path: new H(n).child(i.path),
                            value: i.value
                        } : null
                    }
                    return null
                }
                ,
                t.prototype.findRootMostValueAndPath = function (t) {
                    return this.findRootMostMatchingPathAndValue(t, function () {
                        return !0
                    })
                }
                ,
                t.prototype.subtree = function (e) {
                    if (e.isEmpty())
                        return this;
                    var n = e.getFront()
                        , r = this.children.get(n);
                    return null !== r ? r.subtree(e.popFront()) : t.Empty
                }
                ,
                t.prototype.set = function (e, n) {
                    if (e.isEmpty())
                        return new t(n, this.children);
                    var r = e.getFront()
                        , i = (this.children.get(r) || t.Empty).set(e.popFront(), n)
                        , o = this.children.insert(r, i);
                    return new t(this.value, o)
                }
                ,
                t.prototype.remove = function (e) {
                    if (e.isEmpty())
                        return this.children.isEmpty() ? t.Empty : new t(null, this.children);
                    var n = e.getFront()
                        , r = this.children.get(n);
                    if (r) {
                        var i = r.remove(e.popFront())
                            , o = void 0;
                        return o = i.isEmpty() ? this.children.remove(n) : this.children.insert(n, i),
                            null === this.value && o.isEmpty() ? t.Empty : new t(this.value, o)
                    }
                    return this
                }
                ,
                t.prototype.get = function (t) {
                    if (t.isEmpty())
                        return this.value;
                    var e = t.getFront()
                        , n = this.children.get(e);
                    return n ? n.get(t.popFront()) : null
                }
                ,
                t.prototype.setTree = function (e, n) {
                    if (e.isEmpty())
                        return n;
                    var r = e.getFront()
                        , i = (this.children.get(r) || t.Empty).setTree(e.popFront(), n)
                        , o = void 0;
                    return o = i.isEmpty() ? this.children.remove(r) : this.children.insert(r, i),
                        new t(this.value, o)
                }
                ,
                t.prototype.fold = function (t) {
                    return this.fold_(H.Empty, t)
                }
                ,
                t.prototype.fold_ = function (t, e) {
                    var n = {};
                    return this.children.inorderTraversal(function (r, i) {
                        n[r] = i.fold_(t.child(r), e)
                    }),
                        e(t, this.value, n)
                }
                ,
                t.prototype.findOnPath = function (t, e) {
                    return this.findOnPath_(t, H.Empty, e)
                }
                ,
                t.prototype.findOnPath_ = function (t, e, n) {
                    var r = !!this.value && n(e, this.value);
                    if (r)
                        return r;
                    if (t.isEmpty())
                        return null;
                    var i = t.getFront()
                        , o = this.children.get(i);
                    return o ? o.findOnPath_(t.popFront(), e.child(i), n) : null
                }
                ,
                t.prototype.foreachOnPath = function (t, e) {
                    return this.foreachOnPath_(t, H.Empty, e)
                }
                ,
                t.prototype.foreachOnPath_ = function (e, n, r) {
                    if (e.isEmpty())
                        return this;
                    this.value && r(n, this.value);
                    var i = e.getFront()
                        , o = this.children.get(i);
                    return o ? o.foreachOnPath_(e.popFront(), n.child(i), r) : t.Empty
                }
                ,
                t.prototype.foreach = function (t) {
                    this.foreach_(H.Empty, t)
                }
                ,
                t.prototype.foreach_ = function (t, e) {
                    this.children.inorderTraversal(function (n, r) {
                        r.foreach_(t.child(n), e)
                    }),
                        this.value && e(t, this.value)
                }
                ,
                t.prototype.foreachChild = function (t) {
                    this.children.inorderTraversal(function (e, n) {
                        n.value && t(e, n.value)
                    })
                }
                ,
                t.Empty = new t(null),
                t
        }(), xe = function () {
            function t(t, e) {
                this.source = t,
                    this.path = e,
                    this.type = ue.LISTEN_COMPLETE
            }
            return t.prototype.operationForChild = function (e) {
                return this.path.isEmpty() ? new t(this.source, H.Empty) : new t(this.source, this.path.popFront())
            }
                ,
                t
        }(), ke = function () {
            function t(t, e, n) {
                this.source = t,
                    this.path = e,
                    this.snap = n,
                    this.type = ue.OVERWRITE
            }
            return t.prototype.operationForChild = function (e) {
                return this.path.isEmpty() ? new t(this.source, H.Empty, this.snap.getImmediateChild(e)) : new t(this.source, this.path.popFront(), this.snap)
            }
                ,
                t
        }(), Oe = function () {
            function t(t, e, n) {
                this.source = t,
                    this.path = e,
                    this.children = n,
                    this.type = ue.MERGE
            }
            return t.prototype.operationForChild = function (e) {
                if (this.path.isEmpty()) {
                    var r = this.children.subtree(new H(e));
                    return r.isEmpty() ? null : r.value ? new ke(this.source, H.Empty, r.value) : new t(this.source, H.Empty, r)
                }
                return n.assert(this.path.getFront() === e, "Can't get a merge for a child not on the path of the operation"),
                    new t(this.source, this.path.popFront(), this.children)
            }
                ,
                t.prototype.toString = function () {
                    return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
                }
                ,
                t
        }(), Fe = function () {
            function t(t, e, n) {
                this.node_ = t,
                    this.fullyInitialized_ = e,
                    this.filtered_ = n
            }
            return t.prototype.isFullyInitialized = function () {
                return this.fullyInitialized_
            }
                ,
                t.prototype.isFiltered = function () {
                    return this.filtered_
                }
                ,
                t.prototype.isCompleteForPath = function (t) {
                    if (t.isEmpty())
                        return this.isFullyInitialized() && !this.filtered_;
                    var e = t.getFront();
                    return this.isCompleteForChild(e)
                }
                ,
                t.prototype.isCompleteForChild = function (t) {
                    return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(t)
                }
                ,
                t.prototype.getNode = function () {
                    return this.node_
                }
                ,
                t
        }(), Ae = function () {
            function t(t, e) {
                this.eventCache_ = t,
                    this.serverCache_ = e
            }
            return t.prototype.updateEventSnap = function (e, n, r) {
                return new t(new Fe(e, n, r), this.serverCache_)
            }
                ,
                t.prototype.updateServerSnap = function (e, n, r) {
                    return new t(this.eventCache_, new Fe(e, n, r))
                }
                ,
                t.prototype.getEventCache = function () {
                    return this.eventCache_
                }
                ,
                t.prototype.getCompleteEventSnap = function () {
                    return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null
                }
                ,
                t.prototype.getServerCache = function () {
                    return this.serverCache_
                }
                ,
                t.prototype.getCompleteServerSnap = function () {
                    return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null
                }
                ,
                t.Empty = new t(new Fe(re.EMPTY_NODE, !1, !1), new Fe(re.EMPTY_NODE, !1, !1)),
                t
        }(), Le = function () {
            function t(t, e, n, r, i) {
                this.type = t,
                    this.snapshotNode = e,
                    this.childName = n,
                    this.oldSnap = r,
                    this.prevName = i
            }
            return t.valueChange = function (e) {
                return new t(t.VALUE, e)
            }
                ,
                t.childAddedChange = function (e, n) {
                    return new t(t.CHILD_ADDED, n, e)
                }
                ,
                t.childRemovedChange = function (e, n) {
                    return new t(t.CHILD_REMOVED, n, e)
                }
                ,
                t.childChangedChange = function (e, n, r) {
                    return new t(t.CHILD_CHANGED, n, e, r)
                }
                ,
                t.childMovedChange = function (e, n) {
                    return new t(t.CHILD_MOVED, n, e)
                }
                ,
                t.CHILD_ADDED = "child_added",
                t.CHILD_REMOVED = "child_removed",
                t.CHILD_CHANGED = "child_changed",
                t.CHILD_MOVED = "child_moved",
                t.VALUE = "value",
                t
        }(), Me = function () {
            function t(t) {
                this.index_ = t
            }
            return t.prototype.updateChild = function (t, e, r, i, o, s) {
                n.assert(t.isIndexed(this.index_), "A node must be indexed if only a child is updated");
                var a = t.getImmediateChild(e);
                return a.getChild(i).equals(r.getChild(i)) && a.isEmpty() == r.isEmpty() ? t : (null != s && (r.isEmpty() ? t.hasChild(e) ? s.trackChildChange(Le.childRemovedChange(e, a)) : n.assert(t.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? s.trackChildChange(Le.childAddedChange(e, r)) : s.trackChildChange(Le.childChangedChange(e, r, a))),
                    t.isLeafNode() && r.isEmpty() ? t : t.updateImmediateChild(e, r).withIndex(this.index_))
            }
                ,
                t.prototype.updateFullNode = function (t, e, n) {
                    return null != n && (t.isLeafNode() || t.forEachChild(jt, function (t, r) {
                        e.hasChild(t) || n.trackChildChange(Le.childRemovedChange(t, r))
                    }),
                        e.isLeafNode() || e.forEachChild(jt, function (e, r) {
                            if (t.hasChild(e)) {
                                var i = t.getImmediateChild(e);
                                i.equals(r) || n.trackChildChange(Le.childChangedChange(e, r, i))
                            } else
                                n.trackChildChange(Le.childAddedChange(e, r))
                        })),
                        e.withIndex(this.index_)
                }
                ,
                t.prototype.updatePriority = function (t, e) {
                    return t.isEmpty() ? re.EMPTY_NODE : t.updatePriority(e)
                }
                ,
                t.prototype.filtersNodes = function () {
                    return !1
                }
                ,
                t.prototype.getIndexedFilter = function () {
                    return this
                }
                ,
                t.prototype.getIndex = function () {
                    return this.index_
                }
                ,
                t
        }(), We = function () {
            function t() {
                this.changeMap_ = {}
            }
            return t.prototype.trackChildChange = function (t) {
                var e = t.type
                    , r = t.childName;
                n.assert(e == Le.CHILD_ADDED || e == Le.CHILD_CHANGED || e == Le.CHILD_REMOVED, "Only child changes supported for tracking"),
                    n.assert(".priority" !== r, "Only non-priority child changes can be tracked.");
                var i = n.safeGet(this.changeMap_, r);
                if (i) {
                    var o = i.type;
                    if (e == Le.CHILD_ADDED && o == Le.CHILD_REMOVED)
                        this.changeMap_[r] = Le.childChangedChange(r, t.snapshotNode, i.snapshotNode);
                    else if (e == Le.CHILD_REMOVED && o == Le.CHILD_ADDED)
                        delete this.changeMap_[r];
                    else if (e == Le.CHILD_REMOVED && o == Le.CHILD_CHANGED)
                        this.changeMap_[r] = Le.childRemovedChange(r, i.oldSnap);
                    else if (e == Le.CHILD_CHANGED && o == Le.CHILD_ADDED)
                        this.changeMap_[r] = Le.childAddedChange(r, t.snapshotNode);
                    else {
                        if (e != Le.CHILD_CHANGED || o != Le.CHILD_CHANGED)
                            throw n.assertionError("Illegal combination of changes: " + t + " occurred after " + i);
                        this.changeMap_[r] = Le.childChangedChange(r, t.snapshotNode, i.oldSnap)
                    }
                } else
                    this.changeMap_[r] = t
            }
                ,
                t.prototype.getChanges = function () {
                    return n.getValues(this.changeMap_)
                }
                ,
                t
        }(), qe = function () {
            function t() { }
            return t.prototype.getCompleteChild = function (t) {
                return null
            }
                ,
                t.prototype.getChildAfterChild = function (t, e, n) {
                    return null
                }
                ,
                t
        }(), Qe = new qe, Ue = function () {
            function t(t, e, n) {
                void 0 === n && (n = null),
                    this.writes_ = t,
                    this.viewCache_ = e,
                    this.optCompleteServerCache_ = n
            }
            return t.prototype.getCompleteChild = function (t) {
                var e = this.viewCache_.getEventCache();
                if (e.isCompleteForChild(t))
                    return e.getNode().getImmediateChild(t);
                var n = null != this.optCompleteServerCache_ ? new Fe(this.optCompleteServerCache_, !0, !1) : this.viewCache_.getServerCache();
                return this.writes_.calcCompleteChild(t, n)
            }
                ,
                t.prototype.getChildAfterChild = function (t, e, n) {
                    var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap()
                        , i = this.writes_.calcIndexedSlice(r, e, 1, n, t);
                    return 0 === i.length ? null : i[0]
                }
                ,
                t
        }(), Ve = function () {
            return function (t, e) {
                this.viewCache = t,
                    this.changes = e
            }
        }(), He = function () {
            function t(t) {
                this.filter_ = t
            }
            return t.prototype.assertIndexed = function (t) {
                n.assert(t.getEventCache().getNode().isIndexed(this.filter_.getIndex()), "Event snap not indexed"),
                    n.assert(t.getServerCache().getNode().isIndexed(this.filter_.getIndex()), "Server snap not indexed")
            }
                ,
                t.prototype.applyOperation = function (e, r, i, o) {
                    var s, a, h = new We;
                    if (r.type === ue.OVERWRITE) {
                        var u = r;
                        u.source.fromUser ? s = this.applyUserOverwrite_(e, u.path, u.snap, i, o, h) : (n.assert(u.source.fromServer, "Unknown source."),
                            a = u.source.tagged || e.getServerCache().isFiltered() && !u.path.isEmpty(),
                            s = this.applyServerOverwrite_(e, u.path, u.snap, i, o, a, h))
                    } else if (r.type === ue.MERGE) {
                        var l = r;
                        l.source.fromUser ? s = this.applyUserMerge_(e, l.path, l.children, i, o, h) : (n.assert(l.source.fromServer, "Unknown source."),
                            a = l.source.tagged || e.getServerCache().isFiltered(),
                            s = this.applyServerMerge_(e, l.path, l.children, i, o, a, h))
                    } else if (r.type === ue.ACK_USER_WRITE) {
                        var c = r;
                        s = c.revert ? this.revertUserWrite_(e, c.path, i, o, h) : this.ackUserWrite_(e, c.path, c.affectedTree, i, o, h)
                    } else {
                        if (r.type !== ue.LISTEN_COMPLETE)
                            throw n.assertionError("Unknown operation type: " + r.type);
                        s = this.listenComplete_(e, r.path, i, h)
                    }
                    var p = h.getChanges();
                    return t.maybeAddValueEvent_(e, s, p),
                        new Ve(s, p)
                }
                ,
                t.maybeAddValueEvent_ = function (t, e, n) {
                    var r = e.getEventCache();
                    if (r.isFullyInitialized()) {
                        var i = r.getNode().isLeafNode() || r.getNode().isEmpty()
                            , o = t.getCompleteEventSnap();
                        (n.length > 0 || !t.getEventCache().isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(Le.valueChange(e.getCompleteEventSnap()))
                    }
                }
                ,
                t.prototype.generateEventCacheAfterServerEvent_ = function (t, e, r, i, o) {
                    var s = t.getEventCache();
                    if (null != r.shadowingWrite(e))
                        return t;
                    var a = void 0
                        , h = void 0;
                    if (e.isEmpty())
                        if (n.assert(t.getServerCache().isFullyInitialized(), "If change path is empty, we must have complete server data"),
                            t.getServerCache().isFiltered()) {
                            var u = t.getCompleteServerSnap()
                                , l = u instanceof re ? u : re.EMPTY_NODE
                                , c = r.calcCompleteEventChildren(l);
                            a = this.filter_.updateFullNode(t.getEventCache().getNode(), c, o)
                        } else {
                            var p = r.calcCompleteEventCache(t.getCompleteServerSnap());
                            a = this.filter_.updateFullNode(t.getEventCache().getNode(), p, o)
                        }
                    else {
                        var d = e.getFront();
                        if (".priority" == d) {
                            n.assert(1 == e.getLength(), "Can't have a priority with additional path components");
                            var f = s.getNode();
                            h = t.getServerCache().getNode();
                            var _ = r.calcEventCacheAfterServerOverwrite(e, f, h);
                            a = null != _ ? this.filter_.updatePriority(f, _) : s.getNode()
                        } else {
                            var y = e.popFront()
                                , v = void 0;
                            if (s.isCompleteForChild(d)) {
                                h = t.getServerCache().getNode();
                                var g = r.calcEventCacheAfterServerOverwrite(e, s.getNode(), h);
                                v = null != g ? s.getNode().getImmediateChild(d).updateChild(y, g) : s.getNode().getImmediateChild(d)
                            } else
                                v = r.calcCompleteChild(d, t.getServerCache());
                            a = null != v ? this.filter_.updateChild(s.getNode(), d, v, y, i, o) : s.getNode()
                        }
                    }
                    return t.updateEventSnap(a, s.isFullyInitialized() || e.isEmpty(), this.filter_.filtersNodes())
                }
                ,
                t.prototype.applyServerOverwrite_ = function (t, e, n, r, i, o, s) {
                    var a, h = t.getServerCache(), u = o ? this.filter_ : this.filter_.getIndexedFilter();
                    if (e.isEmpty())
                        a = u.updateFullNode(h.getNode(), n, null);
                    else if (u.filtersNodes() && !h.isFiltered()) {
                        var l = h.getNode().updateChild(e, n);
                        a = u.updateFullNode(h.getNode(), l, null)
                    } else {
                        var c = e.getFront();
                        if (!h.isCompleteForPath(e) && e.getLength() > 1)
                            return t;
                        var p = e.popFront()
                            , d = h.getNode().getImmediateChild(c).updateChild(p, n);
                        a = ".priority" == c ? u.updatePriority(h.getNode(), d) : u.updateChild(h.getNode(), c, d, p, Qe, null)
                    }
                    var f = t.updateServerSnap(a, h.isFullyInitialized() || e.isEmpty(), u.filtersNodes())
                        , _ = new Ue(r, f, i);
                    return this.generateEventCacheAfterServerEvent_(f, e, r, _, s)
                }
                ,
                t.prototype.applyUserOverwrite_ = function (t, e, n, r, i, o) {
                    var s, a, h = t.getEventCache(), u = new Ue(r, t, i);
                    if (e.isEmpty())
                        a = this.filter_.updateFullNode(t.getEventCache().getNode(), n, o),
                            s = t.updateEventSnap(a, !0, this.filter_.filtersNodes());
                    else {
                        var l = e.getFront();
                        if (".priority" === l)
                            a = this.filter_.updatePriority(t.getEventCache().getNode(), n),
                                s = t.updateEventSnap(a, h.isFullyInitialized(), h.isFiltered());
                        else {
                            var c = e.popFront()
                                , p = h.getNode().getImmediateChild(l)
                                , d = void 0;
                            if (c.isEmpty())
                                d = n;
                            else {
                                var f = u.getCompleteChild(l);
                                d = null != f ? ".priority" === c.getBack() && f.getChild(c.parent()).isEmpty() ? f : f.updateChild(c, n) : re.EMPTY_NODE
                            }
                            if (p.equals(d))
                                s = t;
                            else {
                                var _ = this.filter_.updateChild(h.getNode(), l, d, c, u, o);
                                s = t.updateEventSnap(_, h.isFullyInitialized(), this.filter_.filtersNodes())
                            }
                        }
                    }
                    return s
                }
                ,
                t.cacheHasChild_ = function (t, e) {
                    return t.getEventCache().isCompleteForChild(e)
                }
                ,
                t.prototype.applyUserMerge_ = function (e, n, r, i, o, s) {
                    var a = this
                        , h = e;
                    return r.foreach(function (r, u) {
                        var l = n.child(r);
                        t.cacheHasChild_(e, l.getFront()) && (h = a.applyUserOverwrite_(h, l, u, i, o, s))
                    }),
                        r.foreach(function (r, u) {
                            var l = n.child(r);
                            t.cacheHasChild_(e, l.getFront()) || (h = a.applyUserOverwrite_(h, l, u, i, o, s))
                        }),
                        h
                }
                ,
                t.prototype.applyMerge_ = function (t, e) {
                    return e.foreach(function (e, n) {
                        t = t.updateChild(e, n)
                    }),
                        t
                }
                ,
                t.prototype.applyServerMerge_ = function (t, e, n, r, i, o, s) {
                    var a = this;
                    if (t.getServerCache().getNode().isEmpty() && !t.getServerCache().isFullyInitialized())
                        return t;
                    var h, u = t;
                    h = e.isEmpty() ? n : De.Empty.setTree(e, n);
                    var l = t.getServerCache().getNode();
                    return h.children.inorderTraversal(function (e, n) {
                        if (l.hasChild(e)) {
                            var h = t.getServerCache().getNode().getImmediateChild(e)
                                , c = a.applyMerge_(h, n);
                            u = a.applyServerOverwrite_(u, new H(e), c, r, i, o, s)
                        }
                    }),
                        h.children.inorderTraversal(function (e, n) {
                            var h = !t.getServerCache().isCompleteForChild(e) && null == n.value;
                            if (!l.hasChild(e) && !h) {
                                var c = t.getServerCache().getNode().getImmediateChild(e)
                                    , p = a.applyMerge_(c, n);
                                u = a.applyServerOverwrite_(u, new H(e), p, r, i, o, s)
                            }
                        }),
                        u
                }
                ,
                t.prototype.ackUserWrite_ = function (t, e, n, r, i, o) {
                    if (null != r.shadowingWrite(e))
                        return t;
                    var s = t.getServerCache().isFiltered()
                        , a = t.getServerCache();
                    if (null != n.value) {
                        if (e.isEmpty() && a.isFullyInitialized() || a.isCompleteForPath(e))
                            return this.applyServerOverwrite_(t, e, a.getNode().getChild(e), r, i, s, o);
                        if (e.isEmpty()) {
                            var h = De.Empty;
                            return a.getNode().forEachChild(kt, function (t, e) {
                                h = h.set(new H(t), e)
                            }),
                                this.applyServerMerge_(t, e, h, r, i, s, o)
                        }
                        return t
                    }
                    var u = De.Empty;
                    return n.foreach(function (t, n) {
                        var r = e.child(t);
                        a.isCompleteForPath(r) && (u = u.set(t, a.getNode().getChild(r)))
                    }),
                        this.applyServerMerge_(t, e, u, r, i, s, o)
                }
                ,
                t.prototype.listenComplete_ = function (t, e, n, r) {
                    var i = t.getServerCache()
                        , o = t.updateServerSnap(i.getNode(), i.isFullyInitialized() || e.isEmpty(), i.isFiltered());
                    return this.generateEventCacheAfterServerEvent_(o, e, n, Qe, r)
                }
                ,
                t.prototype.revertUserWrite_ = function (t, e, r, i, o) {
                    var s;
                    if (null != r.shadowingWrite(e))
                        return t;
                    var a = new Ue(r, t, i)
                        , h = t.getEventCache().getNode()
                        , u = void 0;
                    if (e.isEmpty() || ".priority" === e.getFront()) {
                        var l = void 0;
                        if (t.getServerCache().isFullyInitialized())
                            l = r.calcCompleteEventCache(t.getCompleteServerSnap());
                        else {
                            var c = t.getServerCache().getNode();
                            n.assert(c instanceof re, "serverChildren would be complete if leaf node"),
                                l = r.calcCompleteEventChildren(c)
                        }
                        l = l,
                            u = this.filter_.updateFullNode(h, l, o)
                    } else {
                        var p = e.getFront()
                            , d = r.calcCompleteChild(p, t.getServerCache());
                        null == d && t.getServerCache().isCompleteForChild(p) && (d = h.getImmediateChild(p)),
                            (u = null != d ? this.filter_.updateChild(h, p, d, e.popFront(), a, o) : t.getEventCache().getNode().hasChild(p) ? this.filter_.updateChild(h, p, re.EMPTY_NODE, e.popFront(), a, o) : h).isEmpty() && t.getServerCache().isFullyInitialized() && (s = r.calcCompleteEventCache(t.getCompleteServerSnap())).isLeafNode() && (u = this.filter_.updateFullNode(u, s, o))
                    }
                    return s = t.getServerCache().isFullyInitialized() || null != r.shadowingWrite(H.Empty),
                        t.updateEventSnap(u, s, this.filter_.filtersNodes())
                }
                ,
                t
        }(), Be = function () {
            function t(t) {
                this.query_ = t,
                    this.index_ = this.query_.getQueryParams().getIndex()
            }
            return t.prototype.generateEventsForChanges = function (t, e, n) {
                var r = this
                    , i = []
                    , o = [];
                return t.forEach(function (t) {
                    t.type === Le.CHILD_CHANGED && r.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) && o.push(Le.childMovedChange(t.childName, t.snapshotNode))
                }),
                    this.generateEventsForType_(i, Le.CHILD_REMOVED, t, n, e),
                    this.generateEventsForType_(i, Le.CHILD_ADDED, t, n, e),
                    this.generateEventsForType_(i, Le.CHILD_MOVED, o, n, e),
                    this.generateEventsForType_(i, Le.CHILD_CHANGED, t, n, e),
                    this.generateEventsForType_(i, Le.VALUE, t, n, e),
                    i
            }
                ,
                t.prototype.generateEventsForType_ = function (t, e, n, r, i) {
                    var o = this
                        , s = n.filter(function (t) {
                            return t.type === e
                        });
                    s.sort(this.compareChanges_.bind(this)),
                        s.forEach(function (e) {
                            var n = o.materializeSingleChange_(e, i);
                            r.forEach(function (r) {
                                r.respondsTo(e.type) && t.push(r.createEvent(n, o.query_))
                            })
                        })
                }
                ,
                t.prototype.materializeSingleChange_ = function (t, e) {
                    return "value" === t.type || "child_removed" === t.type ? t : (t.prevName = e.getPredecessorChildName(t.childName, t.snapshotNode, this.index_),
                        t)
                }
                ,
                t.prototype.compareChanges_ = function (t, e) {
                    if (null == t.childName || null == e.childName)
                        throw n.assertionError("Should only compare child_ events.");
                    var r = new Pt(t.childName, t.snapshotNode)
                        , i = new Pt(e.childName, e.snapshotNode);
                    return this.index_.compare(r, i)
                }
                ,
                t
        }(), je = function () {
            function t(t, e) {
                this.query_ = t,
                    this.eventRegistrations_ = [];
                var n = this.query_.getQueryParams()
                    , r = new Me(n.getIndex())
                    , i = n.getNodeFilter();
                this.processor_ = new He(i);
                var o = e.getServerCache()
                    , s = e.getEventCache()
                    , a = r.updateFullNode(re.EMPTY_NODE, o.getNode(), null)
                    , h = i.updateFullNode(re.EMPTY_NODE, s.getNode(), null)
                    , u = new Fe(a, o.isFullyInitialized(), r.filtersNodes())
                    , l = new Fe(h, s.isFullyInitialized(), i.filtersNodes());
                this.viewCache_ = new Ae(l, u),
                    this.eventGenerator_ = new Be(this.query_)
            }
            return t.prototype.getQuery = function () {
                return this.query_
            }
                ,
                t.prototype.getServerCache = function () {
                    return this.viewCache_.getServerCache().getNode()
                }
                ,
                t.prototype.getCompleteServerCache = function (t) {
                    var e = this.viewCache_.getCompleteServerSnap();
                    return e && (this.query_.getQueryParams().loadsAllData() || !t.isEmpty() && !e.getImmediateChild(t.getFront()).isEmpty()) ? e.getChild(t) : null
                }
                ,
                t.prototype.isEmpty = function () {
                    return 0 === this.eventRegistrations_.length
                }
                ,
                t.prototype.addEventRegistration = function (t) {
                    this.eventRegistrations_.push(t)
                }
                ,
                t.prototype.removeEventRegistration = function (t, e) {
                    var r = [];
                    if (e) {
                        n.assert(null == t, "A cancel should cancel all event registrations.");
                        var i = this.query_.path;
                        this.eventRegistrations_.forEach(function (t) {
                            e = e;
                            var n = t.createCancelEvent(e, i);
                            n && r.push(n)
                        })
                    }
                    if (t) {
                        for (var o = [], s = 0; s < this.eventRegistrations_.length; ++s) {
                            var a = this.eventRegistrations_[s];
                            if (a.matches(t)) {
                                if (t.hasAnyCallback()) {
                                    o = o.concat(this.eventRegistrations_.slice(s + 1));
                                    break
                                }
                            } else
                                o.push(a)
                        }
                        this.eventRegistrations_ = o
                    } else
                        this.eventRegistrations_ = [];
                    return r
                }
                ,
                t.prototype.applyOperation = function (t, e, r) {
                    t.type === ue.MERGE && null !== t.source.queryId && (n.assert(this.viewCache_.getCompleteServerSnap(), "We should always have a full cache before handling merges"),
                        n.assert(this.viewCache_.getCompleteEventSnap(), "Missing event cache, even though we have a server cache"));
                    var i = this.viewCache_
                        , o = this.processor_.applyOperation(i, t, e, r);
                    return this.processor_.assertIndexed(o.viewCache),
                        n.assert(o.viewCache.getServerCache().isFullyInitialized() || !i.getServerCache().isFullyInitialized(), "Once a server snap is complete, it should never go back"),
                        this.viewCache_ = o.viewCache,
                        this.generateEventsForChanges_(o.changes, o.viewCache.getEventCache().getNode(), null)
                }
                ,
                t.prototype.getInitialEvents = function (t) {
                    var e = this.viewCache_.getEventCache()
                        , n = [];
                    e.getNode().isLeafNode() || e.getNode().forEachChild(jt, function (t, e) {
                        n.push(Le.childAddedChange(t, e))
                    });
                    return e.isFullyInitialized() && n.push(Le.valueChange(e.getNode())),
                        this.generateEventsForChanges_(n, e.getNode(), t)
                }
                ,
                t.prototype.generateEventsForChanges_ = function (t, e, n) {
                    var r = n ? [n] : this.eventRegistrations_;
                    return this.eventGenerator_.generateEventsForChanges(t, e, r)
                }
                ,
                t
        }(), Ke = function () {
            function t() {
                this.views_ = {}
            }
            return Object.defineProperty(t, "__referenceConstructor", {
                get: function () {
                    return n.assert(Ne, "Reference.ts has not been loaded"),
                        Ne
                },
                set: function (t) {
                    n.assert(!Ne, "__referenceConstructor has already been defined"),
                        Ne = t
                },
                enumerable: !0,
                configurable: !0
            }),
                t.prototype.isEmpty = function () {
                    return n.isEmpty(this.views_)
                }
                ,
                t.prototype.applyOperation = function (t, e, r) {
                    var i = t.source.queryId;
                    if (null !== i) {
                        var o = n.safeGet(this.views_, i);
                        return n.assert(null != o, "SyncTree gave us an op for an invalid query."),
                            o.applyOperation(t, e, r)
                    }
                    var s = [];
                    return n.forEach(this.views_, function (n, i) {
                        s = s.concat(i.applyOperation(t, e, r))
                    }),
                        s
                }
                ,
                t.prototype.addEventRegistration = function (t, e, r, i, o) {
                    var s = t.queryIdentifier()
                        , a = n.safeGet(this.views_, s);
                    if (!a) {
                        var h = r.calcCompleteEventCache(o ? i : null)
                            , u = !1;
                        h ? u = !0 : i instanceof re ? (h = r.calcCompleteEventChildren(i),
                            u = !1) : (h = re.EMPTY_NODE,
                                u = !1);
                        var l = new Ae(new Fe(h, u, !1), new Fe(i, o, !1));
                        a = new je(t, l),
                            this.views_[s] = a
                    }
                    return a.addEventRegistration(e),
                        a.getInitialEvents(e)
                }
                ,
                t.prototype.removeEventRegistration = function (e, r, i) {
                    var o = e.queryIdentifier()
                        , s = []
                        , a = []
                        , h = this.hasCompleteView();
                    if ("default" === o) {
                        var u = this;
                        n.forEach(this.views_, function (t, e) {
                            a = a.concat(e.removeEventRegistration(r, i)),
                                e.isEmpty() && (delete u.views_[t],
                                    e.getQuery().getQueryParams().loadsAllData() || s.push(e.getQuery()))
                        })
                    } else {
                        var l = n.safeGet(this.views_, o);
                        l && (a = a.concat(l.removeEventRegistration(r, i)),
                            l.isEmpty() && (delete this.views_[o],
                                l.getQuery().getQueryParams().loadsAllData() || s.push(l.getQuery())))
                    }
                    return h && !this.hasCompleteView() && s.push(new t.__referenceConstructor(e.repo, e.path)),
                    {
                        removed: s,
                        events: a
                    }
                }
                ,
                t.prototype.getQueryViews = function () {
                    var t = this;
                    return Object.keys(this.views_).map(function (e) {
                        return t.views_[e]
                    }).filter(function (t) {
                        return !t.getQuery().getQueryParams().loadsAllData()
                    })
                }
                ,
                t.prototype.getCompleteServerCache = function (t) {
                    var e = null;
                    return n.forEach(this.views_, function (n, r) {
                        e = e || r.getCompleteServerCache(t)
                    }),
                        e
                }
                ,
                t.prototype.viewForQuery = function (t) {
                    if (t.getQueryParams().loadsAllData())
                        return this.getCompleteView();
                    var e = t.queryIdentifier();
                    return n.safeGet(this.views_, e)
                }
                ,
                t.prototype.viewExistsForQuery = function (t) {
                    return null != this.viewForQuery(t)
                }
                ,
                t.prototype.hasCompleteView = function () {
                    return null != this.getCompleteView()
                }
                ,
                t.prototype.getCompleteView = function () {
                    return n.findValue(this.views_, function (t) {
                        return t.getQuery().getQueryParams().loadsAllData()
                    }) || null
                }
                ,
                t
        }(), Ye = function () {
            function t(t) {
                this.writeTree_ = t
            }
            return t.prototype.addWrite = function (e, n) {
                if (e.isEmpty())
                    return new t(new De(n));
                var r = this.writeTree_.findRootMostValueAndPath(e);
                if (null != r) {
                    var i = r.path
                        , o = r.value
                        , s = H.relativePath(i, e);
                    return o = o.updateChild(s, n),
                        new t(this.writeTree_.set(i, o))
                }
                var a = new De(n);
                return new t(this.writeTree_.setTree(e, a))
            }
                ,
                t.prototype.addWrites = function (t, e) {
                    var r = this;
                    return n.forEach(e, function (e, n) {
                        r = r.addWrite(t.child(e), n)
                    }),
                        r
                }
                ,
                t.prototype.removeWrite = function (e) {
                    return e.isEmpty() ? t.Empty : new t(this.writeTree_.setTree(e, De.Empty))
                }
                ,
                t.prototype.hasCompleteWrite = function (t) {
                    return null != this.getCompleteNode(t)
                }
                ,
                t.prototype.getCompleteNode = function (t) {
                    var e = this.writeTree_.findRootMostValueAndPath(t);
                    return null != e ? this.writeTree_.get(e.path).getChild(H.relativePath(e.path, t)) : null
                }
                ,
                t.prototype.getCompleteChildren = function () {
                    var t = []
                        , e = this.writeTree_.value;
                    return null != e ? e.isLeafNode() || e.forEachChild(jt, function (e, n) {
                        t.push(new Pt(e, n))
                    }) : this.writeTree_.children.inorderTraversal(function (e, n) {
                        null != n.value && t.push(new Pt(e, n.value))
                    }),
                        t
                }
                ,
                t.prototype.childCompoundWrite = function (e) {
                    if (e.isEmpty())
                        return this;
                    var n = this.getCompleteNode(e);
                    return new t(null != n ? new De(n) : this.writeTree_.subtree(e))
                }
                ,
                t.prototype.isEmpty = function () {
                    return this.writeTree_.isEmpty()
                }
                ,
                t.prototype.apply = function (e) {
                    return t.applySubtreeWrite_(H.Empty, this.writeTree_, e)
                }
                ,
                t.Empty = new t(new De(null)),
                t.applySubtreeWrite_ = function (e, r, i) {
                    if (null != r.value)
                        return i.updateChild(e, r.value);
                    var o = null;
                    return r.children.inorderTraversal(function (r, s) {
                        ".priority" === r ? (n.assert(null !== s.value, "Priority writes must always be leaf nodes"),
                            o = s.value) : i = t.applySubtreeWrite_(e.child(r), s, i)
                    }),
                        i.getChild(e).isEmpty() || null === o || (i = i.updateChild(e.child(".priority"), o)),
                        i
                }
                ,
                t
        }(), ze = function () {
            function t() {
                this.visibleWrites_ = Ye.Empty,
                    this.allWrites_ = [],
                    this.lastWriteId_ = -1
            }
            return t.prototype.childWrites = function (t) {
                return new Ge(t, this)
            }
                ,
                t.prototype.addOverwrite = function (t, e, r, i) {
                    n.assert(r > this.lastWriteId_, "Stacking an older write on top of newer ones"),
                        void 0 === i && (i = !0),
                        this.allWrites_.push({
                            path: t,
                            snap: e,
                            writeId: r,
                            visible: i
                        }),
                        i && (this.visibleWrites_ = this.visibleWrites_.addWrite(t, e)),
                        this.lastWriteId_ = r
                }
                ,
                t.prototype.addMerge = function (t, e, r) {
                    n.assert(r > this.lastWriteId_, "Stacking an older merge on top of newer ones"),
                        this.allWrites_.push({
                            path: t,
                            children: e,
                            writeId: r,
                            visible: !0
                        }),
                        this.visibleWrites_ = this.visibleWrites_.addWrites(t, e),
                        this.lastWriteId_ = r
                }
                ,
                t.prototype.getWrite = function (t) {
                    for (var e = 0; e < this.allWrites_.length; e++) {
                        var n = this.allWrites_[e];
                        if (n.writeId === t)
                            return n
                    }
                    return null
                }
                ,
                t.prototype.removeWrite = function (t) {
                    var e = this
                        , r = this.allWrites_.findIndex(function (e) {
                            return e.writeId === t
                        });
                    n.assert(r >= 0, "removeWrite called with nonexistent writeId.");
                    var i = this.allWrites_[r];
                    this.allWrites_.splice(r, 1);
                    for (var o = i.visible, s = !1, a = this.allWrites_.length - 1; o && a >= 0;) {
                        var h = this.allWrites_[a];
                        h.visible && (a >= r && this.recordContainsPath_(h, i.path) ? o = !1 : i.path.contains(h.path) && (s = !0)),
                            a--
                    }
                    if (o) {
                        if (s)
                            return this.resetTree_(),
                                !0;
                        if (i.snap)
                            this.visibleWrites_ = this.visibleWrites_.removeWrite(i.path);
                        else {
                            var u = i.children;
                            n.forEach(u, function (t) {
                                e.visibleWrites_ = e.visibleWrites_.removeWrite(i.path.child(t))
                            })
                        }
                        return !0
                    }
                    return !1
                }
                ,
                t.prototype.getCompleteWriteData = function (t) {
                    return this.visibleWrites_.getCompleteNode(t)
                }
                ,
                t.prototype.calcCompleteEventCache = function (e, n, r, i) {
                    if (r || i) {
                        var o = this.visibleWrites_.childCompoundWrite(e);
                        if (!i && o.isEmpty())
                            return n;
                        if (i || null != n || o.hasCompleteWrite(H.Empty)) {
                            var s = t.layerTree_(this.allWrites_, function (t) {
                                return (t.visible || i) && (!r || !~r.indexOf(t.writeId)) && (t.path.contains(e) || e.contains(t.path))
                            }, e);
                            u = n || re.EMPTY_NODE;
                            return s.apply(u)
                        }
                        return null
                    }
                    var a = this.visibleWrites_.getCompleteNode(e);
                    if (null != a)
                        return a;
                    var h = this.visibleWrites_.childCompoundWrite(e);
                    if (h.isEmpty())
                        return n;
                    if (null != n || h.hasCompleteWrite(H.Empty)) {
                        var u = n || re.EMPTY_NODE;
                        return h.apply(u)
                    }
                    return null
                }
                ,
                t.prototype.calcCompleteEventChildren = function (t, e) {
                    var n = re.EMPTY_NODE
                        , r = this.visibleWrites_.getCompleteNode(t);
                    if (r)
                        return r.isLeafNode() || r.forEachChild(jt, function (t, e) {
                            n = n.updateImmediateChild(t, e)
                        }),
                            n;
                    if (e) {
                        var i = this.visibleWrites_.childCompoundWrite(t);
                        return e.forEachChild(jt, function (t, e) {
                            var r = i.childCompoundWrite(new H(t)).apply(e);
                            n = n.updateImmediateChild(t, r)
                        }),
                            i.getCompleteChildren().forEach(function (t) {
                                n = n.updateImmediateChild(t.name, t.node)
                            }),
                            n
                    }
                    return this.visibleWrites_.childCompoundWrite(t).getCompleteChildren().forEach(function (t) {
                        n = n.updateImmediateChild(t.name, t.node)
                    }),
                        n
                }
                ,
                t.prototype.calcEventCacheAfterServerOverwrite = function (t, e, r, i) {
                    n.assert(r || i, "Either existingEventSnap or existingServerSnap must exist");
                    var o = t.child(e);
                    if (this.visibleWrites_.hasCompleteWrite(o))
                        return null;
                    var s = this.visibleWrites_.childCompoundWrite(o);
                    return s.isEmpty() ? i.getChild(e) : s.apply(i.getChild(e))
                }
                ,
                t.prototype.calcCompleteChild = function (t, e, n) {
                    var r = t.child(e)
                        , i = this.visibleWrites_.getCompleteNode(r);
                    return null != i ? i : n.isCompleteForChild(e) ? this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(e)) : null
                }
                ,
                t.prototype.shadowingWrite = function (t) {
                    return this.visibleWrites_.getCompleteNode(t)
                }
                ,
                t.prototype.calcIndexedSlice = function (t, e, n, r, i, o) {
                    var s, a = this.visibleWrites_.childCompoundWrite(t), h = a.getCompleteNode(H.Empty);
                    if (null != h)
                        s = h;
                    else {
                        if (null == e)
                            return [];
                        s = a.apply(e)
                    }
                    if ((s = s.withIndex(o)).isEmpty() || s.isLeafNode())
                        return [];
                    for (var u = [], l = o.getCompare(), c = i ? s.getReverseIteratorFrom(n, o) : s.getIteratorFrom(n, o), p = c.getNext(); p && u.length < r;)
                        0 !== l(p, n) && u.push(p),
                            p = c.getNext();
                    return u
                }
                ,
                t.prototype.recordContainsPath_ = function (t, e) {
                    return t.snap ? t.path.contains(e) : !!n.findKey(t.children, function (n, r) {
                        return t.path.child(r).contains(e)
                    })
                }
                ,
                t.prototype.resetTree_ = function () {
                    this.visibleWrites_ = t.layerTree_(this.allWrites_, t.DefaultFilter_, H.Empty),
                        this.allWrites_.length > 0 ? this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId : this.lastWriteId_ = -1
                }
                ,
                t.DefaultFilter_ = function (t) {
                    return t.visible
                }
                ,
                t.layerTree_ = function (t, e, r) {
                    for (var i = Ye.Empty, o = 0; o < t.length; ++o) {
                        var s = t[o];
                        if (e(s)) {
                            var a = s.path
                                , h = void 0;
                            if (s.snap)
                                r.contains(a) ? (h = H.relativePath(r, a),
                                    i = i.addWrite(h, s.snap)) : a.contains(r) && (h = H.relativePath(a, r),
                                        i = i.addWrite(H.Empty, s.snap.getChild(h)));
                            else {
                                if (!s.children)
                                    throw n.assertionError("WriteRecord should have .snap or .children");
                                if (r.contains(a))
                                    h = H.relativePath(r, a),
                                        i = i.addWrites(h, s.children);
                                else if (a.contains(r))
                                    if ((h = H.relativePath(a, r)).isEmpty())
                                        i = i.addWrites(H.Empty, s.children);
                                    else {
                                        var u = n.safeGet(s.children, h.getFront());
                                        if (u) {
                                            var l = u.getChild(h.popFront());
                                            i = i.addWrite(H.Empty, l)
                                        }
                                    }
                            }
                        }
                    }
                    return i
                }
                ,
                t
        }(), Ge = function () {
            function t(t, e) {
                this.treePath_ = t,
                    this.writeTree_ = e
            }
            return t.prototype.calcCompleteEventCache = function (t, e, n) {
                return this.writeTree_.calcCompleteEventCache(this.treePath_, t, e, n)
            }
                ,
                t.prototype.calcCompleteEventChildren = function (t) {
                    return this.writeTree_.calcCompleteEventChildren(this.treePath_, t)
                }
                ,
                t.prototype.calcEventCacheAfterServerOverwrite = function (t, e, n) {
                    return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, t, e, n)
                }
                ,
                t.prototype.shadowingWrite = function (t) {
                    return this.writeTree_.shadowingWrite(this.treePath_.child(t))
                }
                ,
                t.prototype.calcIndexedSlice = function (t, e, n, r, i) {
                    return this.writeTree_.calcIndexedSlice(this.treePath_, t, e, n, r, i)
                }
                ,
                t.prototype.calcCompleteChild = function (t, e) {
                    return this.writeTree_.calcCompleteChild(this.treePath_, t, e)
                }
                ,
                t.prototype.child = function (e) {
                    return new t(this.treePath_.child(e), this.writeTree_)
                }
                ,
                t
        }(), Xe = function () {
            function t(t) {
                this.listenProvider_ = t,
                    this.syncPointTree_ = De.Empty,
                    this.pendingWriteTree_ = new ze,
                    this.tagToQueryMap_ = {},
                    this.queryToTagMap_ = {}
            }
            return t.prototype.applyUserOverwrite = function (t, e, n, r) {
                return this.pendingWriteTree_.addOverwrite(t, e, n, r),
                    r ? this.applyOperationToSyncPoints_(new ke(Ie.User, t, e)) : []
            }
                ,
                t.prototype.applyUserMerge = function (t, e, n) {
                    this.pendingWriteTree_.addMerge(t, e, n);
                    var r = De.fromObject(e);
                    return this.applyOperationToSyncPoints_(new Oe(Ie.User, t, r))
                }
                ,
                t.prototype.ackUserWrite = function (t, e) {
                    void 0 === e && (e = !1);
                    var r = this.pendingWriteTree_.getWrite(t);
                    if (this.pendingWriteTree_.removeWrite(t)) {
                        var i = De.Empty;
                        return null != r.snap ? i = i.set(H.Empty, !0) : n.forEach(r.children, function (t, e) {
                            i = i.set(new H(t), e)
                        }),
                            this.applyOperationToSyncPoints_(new Re(r.path, i, e))
                    }
                    return []
                }
                ,
                t.prototype.applyServerOverwrite = function (t, e) {
                    return this.applyOperationToSyncPoints_(new ke(Ie.Server, t, e))
                }
                ,
                t.prototype.applyServerMerge = function (t, e) {
                    var n = De.fromObject(e);
                    return this.applyOperationToSyncPoints_(new Oe(Ie.Server, t, n))
                }
                ,
                t.prototype.applyListenComplete = function (t) {
                    return this.applyOperationToSyncPoints_(new xe(Ie.Server, t))
                }
                ,
                t.prototype.applyTaggedQueryOverwrite = function (e, n, r) {
                    var i = this.queryKeyForTag_(r);
                    if (null != i) {
                        var o = t.parseQueryKey_(i)
                            , s = o.path
                            , a = o.queryId
                            , h = H.relativePath(s, e)
                            , u = new ke(Ie.forServerTaggedQuery(a), h, n);
                        return this.applyTaggedOperation_(s, u)
                    }
                    return []
                }
                ,
                t.prototype.applyTaggedQueryMerge = function (e, n, r) {
                    var i = this.queryKeyForTag_(r);
                    if (i) {
                        var o = t.parseQueryKey_(i)
                            , s = o.path
                            , a = o.queryId
                            , h = H.relativePath(s, e)
                            , u = De.fromObject(n)
                            , l = new Oe(Ie.forServerTaggedQuery(a), h, u);
                        return this.applyTaggedOperation_(s, l)
                    }
                    return []
                }
                ,
                t.prototype.applyTaggedListenComplete = function (e, n) {
                    var r = this.queryKeyForTag_(n);
                    if (r) {
                        var i = t.parseQueryKey_(r)
                            , o = i.path
                            , s = i.queryId
                            , a = H.relativePath(o, e)
                            , h = new xe(Ie.forServerTaggedQuery(s), a);
                        return this.applyTaggedOperation_(o, h)
                    }
                    return []
                }
                ,
                t.prototype.addEventRegistration = function (e, r) {
                    var i = e.path
                        , o = null
                        , s = !1;
                    this.syncPointTree_.foreachOnPath(i, function (t, e) {
                        var n = H.relativePath(t, i);
                        o = o || e.getCompleteServerCache(n),
                            s = s || e.hasCompleteView()
                    });
                    var a, h = this.syncPointTree_.get(i);
                    (h ? (s = s || h.hasCompleteView(),
                        o = o || h.getCompleteServerCache(H.Empty)) : (h = new Ke,
                            this.syncPointTree_ = this.syncPointTree_.set(i, h)),
                        null != o) ? a = !0 : (a = !1,
                            o = re.EMPTY_NODE,
                            this.syncPointTree_.subtree(i).foreachChild(function (t, e) {
                                var n = e.getCompleteServerCache(H.Empty);
                                n && (o = o.updateImmediateChild(t, n))
                            }));
                    var u = h.viewExistsForQuery(e);
                    if (!u && !e.getQueryParams().loadsAllData()) {
                        var l = t.makeQueryKey_(e);
                        n.assert(!(l in this.queryToTagMap_), "View does not exist, but we have a tag");
                        var c = t.getNextQueryTag_();
                        this.queryToTagMap_[l] = c,
                            this.tagToQueryMap_["_" + c] = l
                    }
                    var p = this.pendingWriteTree_.childWrites(i)
                        , d = h.addEventRegistration(e, r, p, o, a);
                    if (!u && !s) {
                        var f = h.viewForQuery(e);
                        d = d.concat(this.setupListener_(e, f))
                    }
                    return d
                }
                ,
                t.prototype.removeEventRegistration = function (e, n, r) {
                    var i = this
                        , o = e.path
                        , s = this.syncPointTree_.get(o)
                        , a = [];
                    if (s && ("default" === e.queryIdentifier() || s.viewExistsForQuery(e))) {
                        var h = s.removeEventRegistration(e, n, r);
                        s.isEmpty() && (this.syncPointTree_ = this.syncPointTree_.remove(o));
                        var u = h.removed;
                        a = h.events;
                        var l = -1 !== u.findIndex(function (t) {
                            return t.getQueryParams().loadsAllData()
                        })
                            , c = this.syncPointTree_.findOnPath(o, function (t, e) {
                                return e.hasCompleteView()
                            });
                        if (l && !c) {
                            var p = this.syncPointTree_.subtree(o);
                            if (!p.isEmpty())
                                for (var d = this.collectDistinctViewsForSubTree_(p), f = 0; f < d.length; ++f) {
                                    var _ = d[f]
                                        , y = _.getQuery()
                                        , v = this.createListenerForView_(_);
                                    this.listenProvider_.startListening(t.queryForListening_(y), this.tagForQuery_(y), v.hashFn, v.onComplete)
                                }
                        }
                        if (!c && u.length > 0 && !r)
                            if (l) {
                                this.listenProvider_.stopListening(t.queryForListening_(e), null)
                            } else
                                u.forEach(function (e) {
                                    var n = i.queryToTagMap_[t.makeQueryKey_(e)];
                                    i.listenProvider_.stopListening(t.queryForListening_(e), n)
                                });
                        this.removeTags_(u)
                    }
                    return a
                }
                ,
                t.prototype.calcCompleteEventCache = function (t, e) {
                    var n = this.pendingWriteTree_
                        , r = this.syncPointTree_.findOnPath(t, function (e, n) {
                            var r = H.relativePath(e, t)
                                , i = n.getCompleteServerCache(r);
                            if (i)
                                return i
                        });
                    return n.calcCompleteEventCache(t, r, e, !0)
                }
                ,
                t.prototype.collectDistinctViewsForSubTree_ = function (t) {
                    return t.fold(function (t, e, r) {
                        if (e && e.hasCompleteView())
                            return [e.getCompleteView()];
                        var i = [];
                        return e && (i = e.getQueryViews()),
                            n.forEach(r, function (t, e) {
                                i = i.concat(e)
                            }),
                            i
                    })
                }
                ,
                t.prototype.removeTags_ = function (e) {
                    for (var n = 0; n < e.length; ++n) {
                        var r = e[n];
                        if (!r.getQueryParams().loadsAllData()) {
                            var i = t.makeQueryKey_(r)
                                , o = this.queryToTagMap_[i];
                            delete this.queryToTagMap_[i],
                                delete this.tagToQueryMap_["_" + o]
                        }
                    }
                }
                ,
                t.queryForListening_ = function (t) {
                    return t.getQueryParams().loadsAllData() && !t.getQueryParams().isDefault() ? t.getRef() : t
                }
                ,
                t.prototype.setupListener_ = function (e, r) {
                    var i = e.path
                        , o = this.tagForQuery_(e)
                        , s = this.createListenerForView_(r)
                        , a = this.listenProvider_.startListening(t.queryForListening_(e), o, s.hashFn, s.onComplete)
                        , h = this.syncPointTree_.subtree(i);
                    if (o)
                        n.assert(!h.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
                    else
                        for (var u = h.fold(function (t, e, r) {
                            if (!t.isEmpty() && e && e.hasCompleteView())
                                return [e.getCompleteView().getQuery()];
                            var i = [];
                            return e && (i = i.concat(e.getQueryViews().map(function (t) {
                                return t.getQuery()
                            }))),
                                n.forEach(r, function (t, e) {
                                    i = i.concat(e)
                                }),
                                i
                        }), l = 0; l < u.length; ++l) {
                            var c = u[l];
                            this.listenProvider_.stopListening(t.queryForListening_(c), this.tagForQuery_(c))
                        }
                    return a
                }
                ,
                t.prototype.createListenerForView_ = function (t) {
                    var e = this
                        , n = t.getQuery()
                        , r = this.tagForQuery_(n);
                    return {
                        hashFn: function () {
                            return (t.getServerCache() || re.EMPTY_NODE).hash()
                        },
                        onComplete: function (t) {
                            if ("ok" === t)
                                return r ? e.applyTaggedListenComplete(n.path, r) : e.applyListenComplete(n.path);
                            var i = M(t, n);
                            return e.removeEventRegistration(n, null, i)
                        }
                    }
                }
                ,
                t.makeQueryKey_ = function (t) {
                    return t.path.toString() + "$" + t.queryIdentifier()
                }
                ,
                t.parseQueryKey_ = function (t) {
                    var e = t.indexOf("$");
                    return n.assert(-1 !== e && e < t.length - 1, "Bad queryKey."),
                    {
                        queryId: t.substr(e + 1),
                        path: new H(t.substr(0, e))
                    }
                }
                ,
                t.prototype.queryKeyForTag_ = function (t) {
                    return this.tagToQueryMap_["_" + t]
                }
                ,
                t.prototype.tagForQuery_ = function (e) {
                    var r = t.makeQueryKey_(e);
                    return n.safeGet(this.queryToTagMap_, r)
                }
                ,
                t.getNextQueryTag_ = function () {
                    return t.nextQueryTag_++
                }
                ,
                t.prototype.applyTaggedOperation_ = function (t, e) {
                    var r = this.syncPointTree_.get(t);
                    n.assert(r, "Missing sync point for query tag that we're tracking");
                    var i = this.pendingWriteTree_.childWrites(t);
                    return r.applyOperation(e, i, null)
                }
                ,
                t.prototype.applyOperationToSyncPoints_ = function (t) {
                    return this.applyOperationHelper_(t, this.syncPointTree_, null, this.pendingWriteTree_.childWrites(H.Empty))
                }
                ,
                t.prototype.applyOperationHelper_ = function (t, e, n, r) {
                    if (t.path.isEmpty())
                        return this.applyOperationDescendantsHelper_(t, e, n, r);
                    var i = e.get(H.Empty);
                    null == n && null != i && (n = i.getCompleteServerCache(H.Empty));
                    var o = []
                        , s = t.path.getFront()
                        , a = t.operationForChild(s)
                        , h = e.children.get(s);
                    if (h && a) {
                        var u = n ? n.getImmediateChild(s) : null
                            , l = r.child(s);
                        o = o.concat(this.applyOperationHelper_(a, h, u, l))
                    }
                    return i && (o = o.concat(i.applyOperation(t, r, n))),
                        o
                }
                ,
                t.prototype.applyOperationDescendantsHelper_ = function (t, e, n, r) {
                    var i = this
                        , o = e.get(H.Empty);
                    null == n && null != o && (n = o.getCompleteServerCache(H.Empty));
                    var s = [];
                    return e.children.inorderTraversal(function (e, o) {
                        var a = n ? n.getImmediateChild(e) : null
                            , h = r.child(e)
                            , u = t.operationForChild(e);
                        u && (s = s.concat(i.applyOperationDescendantsHelper_(u, o, a, h)))
                    }),
                        o && (s = s.concat(o.applyOperation(t, r, n))),
                        s
                }
                ,
                t.nextQueryTag_ = 1,
                t
        }(), $e = function () {
            function t() {
                this.rootNode_ = re.EMPTY_NODE
            }
            return t.prototype.getNode = function (t) {
                return this.rootNode_.getChild(t)
            }
                ,
                t.prototype.updateSnapshot = function (t, e) {
                    this.rootNode_ = this.rootNode_.updateChild(t, e)
                }
                ,
                t
        }(), Je = function () {
            function t(t) {
                this.app_ = t
            }
            return t.prototype.getToken = function (t) {
                return this.app_.INTERNAL.getToken(t).then(null, function (t) {
                    return t && "auth/token-not-initialized" === t.code ? (g("Got auth/token-not-initialized error.  Treating as null token."),
                        null) : Promise.reject(t)
                })
            }
                ,
                t.prototype.addTokenChangeListener = function (t) {
                    this.app_.INTERNAL.addAuthTokenListener(t)
                }
                ,
                t.prototype.removeTokenChangeListener = function (t) {
                    this.app_.INTERNAL.removeAuthTokenListener(t)
                }
                ,
                t.prototype.notifyForInvalidToken = function () {
                    var t = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not initialized correctly. ';
                    "credential" in this.app_.options ? t += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.app_.options ? t += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : t += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',
                        w(t)
                }
                ,
                t
        }(), Ze = function () {
            function t() {
                this.counters_ = {}
            }
            return t.prototype.incrementCounter = function (t, e) {
                void 0 === e && (e = 1),
                    n.contains(this.counters_, t) || (this.counters_[t] = 0),
                    this.counters_[t] += e
            }
                ,
                t.prototype.get = function () {
                    return n.deepCopy(this.counters_)
                }
                ,
                t
        }(), tn = function () {
            function t() { }
            return t.getCollection = function (t) {
                var e = t.toString();
                return this.collections_[e] || (this.collections_[e] = new Ze),
                    this.collections_[e]
            }
                ,
                t.getOrCreateReporter = function (t, e) {
                    var n = t.toString();
                    return this.reporters_[n] || (this.reporters_[n] = e()),
                        this.reporters_[n]
                }
                ,
                t.collections_ = {},
                t.reporters_ = {},
                t
        }(), en = function () {
            function t(t) {
                this.collection_ = t,
                    this.last_ = null
            }
            return t.prototype.get = function () {
                var t = this.collection_.get()
                    , e = n.clone(t);
                return this.last_ && n.forEach(this.last_, function (t, n) {
                    e[t] = e[t] - n
                }),
                    this.last_ = t,
                    e
            }
                ,
                t
        }(), nn = 1e4, rn = 3e4, on = 3e5, sn = function () {
            function t(t, e) {
                this.server_ = e,
                    this.statsToReport_ = {},
                    this.statsListener_ = new en(t);
                var n = nn + (rn - nn) * Math.random();
                V(this.reportStats_.bind(this), Math.floor(n))
            }
            return t.prototype.includeStat = function (t) {
                this.statsToReport_[t] = !0
            }
                ,
                t.prototype.reportStats_ = function () {
                    var t = this
                        , e = this.statsListener_.get()
                        , r = {}
                        , i = !1;
                    n.forEach(e, function (e, o) {
                        o > 0 && n.contains(t.statsToReport_, e) && (r[e] = o,
                            i = !0)
                    }),
                        i && this.server_.reportStats(r),
                        V(this.reportStats_.bind(this), Math.floor(2 * Math.random() * on))
                }
                ,
                t
        }(), an = function () {
            function t() {
                this.eventLists_ = [],
                    this.recursionDepth_ = 0
            }
            return t.prototype.queueEvents = function (t) {
                for (var e = null, n = 0; n < t.length; n++) {
                    var r = t[n]
                        , i = r.getPath();
                    null === e || i.equals(e.getPath()) || (this.eventLists_.push(e),
                        e = null),
                        null === e && (e = new hn(i)),
                        e.add(r)
                }
                e && this.eventLists_.push(e)
            }
                ,
                t.prototype.raiseEventsAtPath = function (t, e) {
                    this.queueEvents(e),
                        this.raiseQueuedEventsMatchingPredicate_(function (e) {
                            return e.equals(t)
                        })
                }
                ,
                t.prototype.raiseEventsForChangedPath = function (t, e) {
                    this.queueEvents(e),
                        this.raiseQueuedEventsMatchingPredicate_(function (e) {
                            return e.contains(t) || t.contains(e)
                        })
                }
                ,
                t.prototype.raiseQueuedEventsMatchingPredicate_ = function (t) {
                    this.recursionDepth_++;
                    for (var e = !0, n = 0; n < this.eventLists_.length; n++) {
                        var r = this.eventLists_[n];
                        if (r)
                            t(r.getPath()) ? (this.eventLists_[n].raise(),
                                this.eventLists_[n] = null) : e = !1
                    }
                    e && (this.eventLists_ = []),
                        this.recursionDepth_--
                }
                ,
                t
        }(), hn = function () {
            function t(t) {
                this.path_ = t,
                    this.events_ = []
            }
            return t.prototype.add = function (t) {
                this.events_.push(t)
            }
                ,
                t.prototype.raise = function () {
                    for (var t = 0; t < this.events_.length; t++) {
                        var e = this.events_[t];
                        if (null !== e) {
                            this.events_[t] = null;
                            var n = e.getEventRunner();
                            _ && g("event: " + e.toString()),
                                Q(n)
                        }
                    }
                }
                ,
                t.prototype.getPath = function () {
                    return this.path_
                }
                ,
                t
        }(), un = function () {
            function t(t) {
                this.allowedEvents_ = t,
                    this.listeners_ = {},
                    n.assert(Array.isArray(t) && t.length > 0, "Requires a non-empty array")
            }
            return t.prototype.trigger = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                if (Array.isArray(this.listeners_[t]))
                    for (var r = this.listeners_[t].slice(), i = 0; i < r.length; i++)
                        r[i].callback.apply(r[i].context, e)
            }
                ,
                t.prototype.on = function (t, e, n) {
                    this.validateEventType_(t),
                        this.listeners_[t] = this.listeners_[t] || [],
                        this.listeners_[t].push({
                            callback: e,
                            context: n
                        });
                    var r = this.getInitialEvent(t);
                    r && e.apply(n, r)
                }
                ,
                t.prototype.off = function (t, e, n) {
                    this.validateEventType_(t);
                    for (var r = this.listeners_[t] || [], i = 0; i < r.length; i++)
                        if (r[i].callback === e && (!n || n === r[i].context))
                            return void r.splice(i, 1)
                }
                ,
                t.prototype.validateEventType_ = function (t) {
                    n.assert(this.allowedEvents_.find(function (e) {
                        return e === t
                    }), "Unknown event: " + t)
                }
                ,
                t
        }(), ln = function (t) {
            function e() {
                var e, n, r = t.call(this, ["visible"]) || this;
                return "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (n = "visibilitychange",
                    e = "hidden") : void 0 !== document.mozHidden ? (n = "mozvisibilitychange",
                        e = "mozHidden") : void 0 !== document.msHidden ? (n = "msvisibilitychange",
                            e = "msHidden") : void 0 !== document.webkitHidden && (n = "webkitvisibilitychange",
                                e = "webkitHidden")),
                    r.visible_ = !0,
                    n && document.addEventListener(n, function () {
                        var t = !document[e];
                        t !== r.visible_ && (r.visible_ = t,
                            r.trigger("visible", t))
                    }, !1),
                    r
            }
            return i.__extends(e, t),
                e.getInstance = function () {
                    return new e
                }
                ,
                e.prototype.getInitialEvent = function (t) {
                    return n.assert("visible" === t, "Unknown event type: " + t),
                        [this.visible_]
                }
                ,
                e
        }(un), cn = function (t) {
            function e() {
                var e = t.call(this, ["online"]) || this;
                return e.online_ = !0,
                    "undefined" == typeof window || void 0 === window.addEventListener || n.isMobileCordova() || (window.addEventListener("online", function () {
                        e.online_ || (e.online_ = !0,
                            e.trigger("online", !0))
                    }, !1),
                        window.addEventListener("offline", function () {
                            e.online_ && (e.online_ = !1,
                                e.trigger("online", !1))
                        }, !1)),
                    e
            }
            return i.__extends(e, t),
                e.getInstance = function () {
                    return new e
                }
                ,
                e.prototype.getInitialEvent = function (t) {
                    return n.assert("online" === t, "Unknown event type: " + t),
                        [this.online_]
                }
                ,
                e.prototype.currentlyOnline = function () {
                    return this.online_
                }
                ,
                e
        }(un), pn = function () {
            function t(t) {
                this.onMessage_ = t,
                    this.pendingResponses = [],
                    this.currentResponseNum = 0,
                    this.closeAfterResponse = -1,
                    this.onClose = null
            }
            return t.prototype.closeAfter = function (t, e) {
                this.closeAfterResponse = t,
                    this.onClose = e,
                    this.closeAfterResponse < this.currentResponseNum && (this.onClose(),
                        this.onClose = null)
            }
                ,
                t.prototype.handleResponse = function (t, e) {
                    var n = this;
                    this.pendingResponses[t] = e;
                    for (var r = function () {
                        var t = i.pendingResponses[i.currentResponseNum];
                        delete i.pendingResponses[i.currentResponseNum];
                        for (var e = function (e) {
                            t[e] && Q(function () {
                                n.onMessage_(t[e])
                            })
                        }, r = 0; r < t.length; ++r)
                            e(r);
                        if (i.currentResponseNum === i.closeAfterResponse)
                            return i.onClose && (i.onClose(),
                                i.onClose = null),
                                "break";
                        i.currentResponseNum++
                    }, i = this; this.pendingResponses[this.currentResponseNum];) {
                        if ("break" === r())
                            break
                    }
                }
                ,
                t
        }(), dn = "start", fn = "close", _n = "pLPCommand", yn = "pRTLPCB", vn = "id", gn = "pw", mn = "ser", Cn = "cb", En = "seg", wn = "ts", Tn = "d", bn = "disconn", Sn = "dframe", Nn = 1870, In = 30, Rn = Nn - In, Pn = 25e3, Dn = 3e4, xn = function () {
            function t(t, e, n, r) {
                this.connId = t,
                    this.repoInfo = e,
                    this.transportSessionId = n,
                    this.lastSessionId = r,
                    this.bytesSent = 0,
                    this.bytesReceived = 0,
                    this.everConnected_ = !1,
                    this.log_ = m(t),
                    this.stats_ = tn.getCollection(e),
                    this.urlFn = function (t) {
                        return e.connectionURL(Z, t)
                    }
            }
            return t.prototype.open = function (t, e) {
                var r = this;
                this.curSegmentNum = 0,
                    this.onDisconnect_ = e,
                    this.myPacketOrderer = new pn(t),
                    this.isClosed_ = !1,
                    this.connectTimeoutTimer_ = setTimeout(function () {
                        r.log_("Timed out trying to connect."),
                            r.onClosed_(),
                            r.connectTimeoutTimer_ = null
                    }, Math.floor(Dn)),
                    S(function () {
                        if (!r.isClosed_) {
                            r.scriptTagHolder = new kn(function () {
                                for (var t = [], e = 0; e < arguments.length; e++)
                                    t[e] = arguments[e];
                                var n = t[0]
                                    , i = t[1]
                                    , o = t[2];
                                if (r.incrementIncomingBytes_(t),
                                    r.scriptTagHolder)
                                    if (r.connectTimeoutTimer_ && (clearTimeout(r.connectTimeoutTimer_),
                                        r.connectTimeoutTimer_ = null),
                                        r.everConnected_ = !0,
                                        n == dn)
                                        r.id = i,
                                            r.password = o;
                                    else {
                                        if (n !== fn)
                                            throw new Error("Unrecognized command received: " + n);
                                        i ? (r.scriptTagHolder.sendNewPolls = !1,
                                            r.myPacketOrderer.closeAfter(i, function () {
                                                r.onClosed_()
                                            })) : r.onClosed_()
                                    }
                            }
                                , function () {
                                    for (var t = [], e = 0; e < arguments.length; e++)
                                        t[e] = arguments[e];
                                    var n = t[0]
                                        , i = t[1];
                                    r.incrementIncomingBytes_(t),
                                        r.myPacketOrderer.handleResponse(n, i)
                                }
                                , function () {
                                    r.onClosed_()
                                }
                                , r.urlFn);
                            var t = {};
                            t[dn] = "t",
                                t[mn] = Math.floor(1e8 * Math.random()),
                                r.scriptTagHolder.uniqueCallbackIdentifier && (t[Cn] = r.scriptTagHolder.uniqueCallbackIdentifier),
                                t[K] = j,
                                r.transportSessionId && (t[Y] = r.transportSessionId),
                                r.lastSessionId && (t[$] = r.lastSessionId),
                                !n.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(X) && (t[z] = G);
                            var e = r.urlFn(t);
                            r.log_("Connecting via long-poll to " + e),
                                r.scriptTagHolder.addTag(e, function () { })
                        }
                    })
            }
                ,
                t.prototype.start = function () {
                    this.scriptTagHolder.startLongPoll(this.id, this.password),
                        this.addDisconnectPingFrame(this.id, this.password)
                }
                ,
                t.forceAllow = function () {
                    t.forceAllow_ = !0
                }
                ,
                t.forceDisallow = function () {
                    t.forceDisallow_ = !0
                }
                ,
                t.isAvailable = function () {
                    return t.forceAllow_ || !t.forceDisallow_ && "undefined" != typeof document && null != document.createElement && !A() && !L() && !n.isNodeSdk()
                }
                ,
                t.prototype.markConnectionHealthy = function () { }
                ,
                t.prototype.shutdown_ = function () {
                    this.isClosed_ = !0,
                        this.scriptTagHolder && (this.scriptTagHolder.close(),
                            this.scriptTagHolder = null),
                        this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame),
                            this.myDisconnFrame = null),
                        this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_),
                            this.connectTimeoutTimer_ = null)
                }
                ,
                t.prototype.onClosed_ = function () {
                    this.isClosed_ || (this.log_("Longpoll is closing itself"),
                        this.shutdown_(),
                        this.onDisconnect_ && (this.onDisconnect_(this.everConnected_),
                            this.onDisconnect_ = null))
                }
                ,
                t.prototype.close = function () {
                    this.isClosed_ || (this.log_("Longpoll is being closed."),
                        this.shutdown_())
                }
                ,
                t.prototype.send = function (t) {
                    var e = n.stringify(t);
                    this.bytesSent += e.length,
                        this.stats_.incrementCounter("bytes_sent", e.length);
                    for (var r = n.base64Encode(e), i = k(r, Rn), o = 0; o < i.length; o++)
                        this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[o]),
                            this.curSegmentNum++
                }
                ,
                t.prototype.addDisconnectPingFrame = function (t, e) {
                    if (!n.isNodeSdk()) {
                        this.myDisconnFrame = document.createElement("iframe");
                        var r = {};
                        r[Sn] = "t",
                            r[vn] = t,
                            r[gn] = e,
                            this.myDisconnFrame.src = this.urlFn(r),
                            this.myDisconnFrame.style.display = "none",
                            document.body.appendChild(this.myDisconnFrame)
                    }
                }
                ,
                t.prototype.incrementIncomingBytes_ = function (t) {
                    var e = n.stringify(t).length;
                    this.bytesReceived += e,
                        this.stats_.incrementCounter("bytes_received", e)
                }
                ,
                t
        }(), kn = function () {
            function t(e, r, i, o) {
                if (this.onDisconnect = i,
                    this.urlFn = o,
                    this.outstandingRequests = new me,
                    this.pendingSegs = [],
                    this.currentSerial = Math.floor(1e8 * Math.random()),
                    this.sendNewPolls = !0,
                    n.isNodeSdk())
                    this.commandCB = e,
                        this.onMessageCB = r;
                else {
                    this.uniqueCallbackIdentifier = p(),
                        window[_n + this.uniqueCallbackIdentifier] = e,
                        window[yn + this.uniqueCallbackIdentifier] = r,
                        this.myIFrame = t.createIFrame_();
                    var s = "";
                    if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length))
                        s = '<script>document.domain="' + document.domain + '";<\/script>';
                    var a = "<html><body>" + s + "</body></html>";
                    try {
                        this.myIFrame.doc.open(),
                            this.myIFrame.doc.write(a),
                            this.myIFrame.doc.close()
                    } catch (h) {
                        g("frame writing exception"),
                            h.stack && g(h.stack),
                            g(h)
                    }
                }
            }
            return t.createIFrame_ = function () {
                var t = document.createElement("iframe");
                if (t.style.display = "none",
                    !document.body)
                    throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                document.body.appendChild(t);
                try {
                    t.contentWindow.document || g("No IE domain setting required")
                } catch (n) {
                    var e = document.domain;
                    t.src = "javascript:void((function(){document.open();document.domain='" + e + "';document.close();})())"
                }
                return t.contentDocument ? t.doc = t.contentDocument : t.contentWindow ? t.doc = t.contentWindow.document : t.document && (t.doc = t.document),
                    t
            }
                ,
                t.prototype.close = function () {
                    var e = this;
                    if (this.alive = !1,
                        this.myIFrame && (this.myIFrame.doc.body.innerHTML = "",
                            setTimeout(function () {
                                null !== e.myIFrame && (document.body.removeChild(e.myIFrame),
                                    e.myIFrame = null)
                            }, Math.floor(0))),
                        n.isNodeSdk() && this.myID) {
                        var r = {};
                        r[bn] = "t",
                            r[vn] = this.myID,
                            r[gn] = this.myPW;
                        var i = this.urlFn(r);
                        t.nodeRestRequest(i)
                    }
                    var o = this.onDisconnect;
                    o && (this.onDisconnect = null,
                        o())
                }
                ,
                t.prototype.startLongPoll = function (t, e) {
                    for (this.myID = t,
                        this.myPW = e,
                        this.alive = !0; this.newRequest_();)
                        ;
                }
                ,
                t.prototype.newRequest_ = function () {
                    if (this.alive && this.sendNewPolls && this.outstandingRequests.count() < (this.pendingSegs.length > 0 ? 2 : 1)) {
                        this.currentSerial++;
                        var t = {};
                        t[vn] = this.myID,
                            t[gn] = this.myPW,
                            t[mn] = this.currentSerial;
                        for (var e = this.urlFn(t), n = "", r = 0; this.pendingSegs.length > 0;) {
                            if (!(this.pendingSegs[0].d.length + In + n.length <= Nn))
                                break;
                            var i = this.pendingSegs.shift();
                            n = n + "&" + En + r + "=" + i.seg + "&" + wn + r + "=" + i.ts + "&" + Tn + r + "=" + i.d,
                                r++
                        }
                        return e += n,
                            this.addLongPollTag_(e, this.currentSerial),
                            !0
                    }
                    return !1
                }
                ,
                t.prototype.enqueueSegment = function (t, e, n) {
                    this.pendingSegs.push({
                        seg: t,
                        ts: e,
                        d: n
                    }),
                        this.alive && this.newRequest_()
                }
                ,
                t.prototype.addLongPollTag_ = function (t, e) {
                    var n = this;
                    this.outstandingRequests.add(e, 1);
                    var r = function () {
                        n.outstandingRequests.remove(e),
                            n.newRequest_()
                    }
                        , i = setTimeout(r, Math.floor(Pn));
                    this.addTag(t, function () {
                        clearTimeout(i),
                            r()
                    })
                }
                ,
                t.prototype.addTag = function (t, e) {
                    var r = this;
                    n.isNodeSdk() ? this.doNodeLongPoll(t, e) : setTimeout(function () {
                        try {
                            if (!r.sendNewPolls)
                                return;
                            var n = r.myIFrame.doc.createElement("script");
                            n.type = "text/javascript",
                                n.async = !0,
                                n.src = t,
                                n.onload = n.onreadystatechange = function () {
                                    var t = n.readyState;
                                    t && "loaded" !== t && "complete" !== t || (n.onload = n.onreadystatechange = null,
                                        n.parentNode && n.parentNode.removeChild(n),
                                        e())
                                }
                                ,
                                n.onerror = function () {
                                    g("Long-poll script failed to load: " + t),
                                        r.sendNewPolls = !1,
                                        r.close()
                                }
                                ,
                                r.myIFrame.doc.body.appendChild(n)
                        } catch (i) { }
                    }, Math.floor(1))
                }
                ,
                t
        }(), On = 16384, Fn = 45e3, An = null;
        "undefined" != typeof MozWebSocket ? An = MozWebSocket : "undefined" != typeof WebSocket && (An = WebSocket);
        var Ln = function () {
            function e(t, n, r, i) {
                this.connId = t,
                    this.keepaliveTimer = null,
                    this.frames = null,
                    this.totalFrames = 0,
                    this.bytesSent = 0,
                    this.bytesReceived = 0,
                    this.log_ = m(this.connId),
                    this.stats_ = tn.getCollection(n),
                    this.connURL = e.connectionURL_(n, r, i)
            }
            return e.connectionURL_ = function (t, e, r) {
                var i = {};
                return i[K] = j,
                    !n.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(X) && (i[z] = G),
                    e && (i[Y] = e),
                    r && (i[$] = r),
                    t.connectionURL(J, i)
            }
                ,
                e.prototype.open = function (e, r) {
                    var i = this;
                    this.onDisconnect = r,
                        this.onMessage = e,
                        this.log_("Websocket connecting to " + this.connURL),
                        this.everConnected_ = !1,
                        u.set("previous_websocket_failure", !0);
                    try {
                        if (n.isNodeSdk()) {
                            var s = n.CONSTANTS.NODE_ADMIN ? "AdminNode" : "Node"
                                , a = {
                                    headers: {
                                        "User-Agent": "Firebase/" + j + "/" + o.SDK_VERSION + "/" + t.platform + "/" + s
                                    }
                                }
                                , h = t.env
                                , l = 0 == this.connURL.indexOf("wss://") ? h.HTTPS_PROXY || h.https_proxy : h.HTTP_PROXY || h.http_proxy;
                            l && (a.proxy = {
                                origin: l
                            }),
                                this.mySock = new An(this.connURL, [], a)
                        } else
                            this.mySock = new An(this.connURL)
                    } catch (p) {
                        this.log_("Error instantiating WebSocket.");
                        var c = p.message || p.data;
                        return c && this.log_(c),
                            void this.onClosed_()
                    }
                    this.mySock.onopen = function () {
                        i.log_("Websocket connected."),
                            i.everConnected_ = !0
                    }
                        ,
                        this.mySock.onclose = function () {
                            i.log_("Websocket connection was disconnected."),
                                i.mySock = null,
                                i.onClosed_()
                        }
                        ,
                        this.mySock.onmessage = function (t) {
                            i.handleIncomingFrame(t)
                        }
                        ,
                        this.mySock.onerror = function (t) {
                            i.log_("WebSocket error.  Closing connection.");
                            var e = t.message || t.data;
                            e && i.log_(e),
                                i.onClosed_()
                        }
                }
                ,
                e.prototype.start = function () { }
                ,
                e.forceDisallow = function () {
                    e.forceDisallow_ = !0
                }
                ,
                e.isAvailable = function () {
                    var t = !1;
                    if ("undefined" != typeof navigator && navigator.userAgent) {
                        var n = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
                        n && n.length > 1 && parseFloat(n[1]) < 4.4 && (t = !0)
                    }
                    return !t && null !== An && !e.forceDisallow_
                }
                ,
                e.previouslyFailed = function () {
                    return u.isInMemoryStorage || !0 === u.get("previous_websocket_failure")
                }
                ,
                e.prototype.markConnectionHealthy = function () {
                    u.remove("previous_websocket_failure")
                }
                ,
                e.prototype.appendFrame_ = function (t) {
                    if (this.frames.push(t),
                        this.frames.length == this.totalFrames) {
                        var e = this.frames.join("");
                        this.frames = null;
                        var r = n.jsonEval(e);
                        this.onMessage(r)
                    }
                }
                ,
                e.prototype.handleNewFrameCount_ = function (t) {
                    this.totalFrames = t,
                        this.frames = []
                }
                ,
                e.prototype.extractFrameCount_ = function (t) {
                    if (n.assert(null === this.frames, "We already have a frame buffer"),
                        t.length <= 6) {
                        var e = Number(t);
                        if (!isNaN(e))
                            return this.handleNewFrameCount_(e),
                                null
                    }
                    return this.handleNewFrameCount_(1),
                        t
                }
                ,
                e.prototype.handleIncomingFrame = function (t) {
                    if (null !== this.mySock) {
                        var e = t.data;
                        if (this.bytesReceived += e.length,
                            this.stats_.incrementCounter("bytes_received", e.length),
                            this.resetKeepAlive(),
                            null !== this.frames)
                            this.appendFrame_(e);
                        else {
                            var n = this.extractFrameCount_(e);
                            null !== n && this.appendFrame_(n)
                        }
                    }
                }
                ,
                e.prototype.send = function (t) {
                    this.resetKeepAlive();
                    var e = n.stringify(t);
                    this.bytesSent += e.length,
                        this.stats_.incrementCounter("bytes_sent", e.length);
                    var r = k(e, On);
                    r.length > 1 && this.sendString_(String(r.length));
                    for (var i = 0; i < r.length; i++)
                        this.sendString_(r[i])
                }
                ,
                e.prototype.shutdown_ = function () {
                    this.isClosed_ = !0,
                        this.keepaliveTimer && (clearInterval(this.keepaliveTimer),
                            this.keepaliveTimer = null),
                        this.mySock && (this.mySock.close(),
                            this.mySock = null)
                }
                ,
                e.prototype.onClosed_ = function () {
                    this.isClosed_ || (this.log_("WebSocket is closing itself"),
                        this.shutdown_(),
                        this.onDisconnect && (this.onDisconnect(this.everConnected_),
                            this.onDisconnect = null))
                }
                ,
                e.prototype.close = function () {
                    this.isClosed_ || (this.log_("WebSocket is being closed"),
                        this.shutdown_())
                }
                ,
                e.prototype.resetKeepAlive = function () {
                    var t = this;
                    clearInterval(this.keepaliveTimer),
                        this.keepaliveTimer = setInterval(function () {
                            t.mySock && t.sendString_("0"),
                                t.resetKeepAlive()
                        }, Math.floor(Fn))
                }
                ,
                e.prototype.sendString_ = function (t) {
                    try {
                        this.mySock.send(t)
                    } catch (e) {
                        this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."),
                            setTimeout(this.onClosed_.bind(this), 0)
                    }
                }
                ,
                e.responsesRequiredToBeHealthy = 2,
                e.healthyTimeout = 3e4,
                e
        }()
            , Mn = function () {
                function t(t) {
                    this.initTransports_(t)
                }
                return Object.defineProperty(t, "ALL_TRANSPORTS", {
                    get: function () {
                        return [xn, Ln]
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                    t.prototype.initTransports_ = function (e) {
                        var n = Ln && Ln.isAvailable()
                            , r = n && !Ln.previouslyFailed();
                        if (e.webSocketOnly && (n || w("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),
                            r = !0),
                            r)
                            this.transports_ = [Ln];
                        else {
                            var i = this.transports_ = [];
                            O(t.ALL_TRANSPORTS, function (t, e) {
                                e && e.isAvailable() && i.push(e)
                            })
                        }
                    }
                    ,
                    t.prototype.initialTransport = function () {
                        if (this.transports_.length > 0)
                            return this.transports_[0];
                        throw new Error("No transports available")
                    }
                    ,
                    t.prototype.upgradeTransport = function () {
                        return this.transports_.length > 1 ? this.transports_[1] : null
                    }
                    ,
                    t
            }()
            , Wn = 6e4
            , qn = 5e3
            , Qn = 10240
            , Un = 102400
            , Vn = "t"
            , Hn = "d"
            , Bn = "s"
            , jn = "r"
            , Kn = "e"
            , Yn = "o"
            , zn = "a"
            , Gn = "n"
            , Xn = "p"
            , $n = "h"
            , Jn = function () {
                function t(t, e, n, r, i, o, s) {
                    this.id = t,
                        this.repoInfo_ = e,
                        this.onMessage_ = n,
                        this.onReady_ = r,
                        this.onDisconnect_ = i,
                        this.onKill_ = o,
                        this.lastSessionId = s,
                        this.connectionCount = 0,
                        this.pendingDataMessages = [],
                        this.state_ = 0,
                        this.log_ = m("c:" + this.id + ":"),
                        this.transportManager_ = new Mn(e),
                        this.log_("Connection created"),
                        this.start_()
                }
                return t.prototype.start_ = function () {
                    var t = this
                        , e = this.transportManager_.initialTransport();
                    this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, void 0, this.lastSessionId),
                        this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
                    var n = this.connReceiver_(this.conn_)
                        , r = this.disconnReceiver_(this.conn_);
                    this.tx_ = this.conn_,
                        this.rx_ = this.conn_,
                        this.secondaryConn_ = null,
                        this.isHealthy_ = !1,
                        setTimeout(function () {
                            t.conn_ && t.conn_.open(n, r)
                        }, Math.floor(0));
                    var i = e.healthyTimeout || 0;
                    i > 0 && (this.healthyTimeout_ = V(function () {
                        t.healthyTimeout_ = null,
                            t.isHealthy_ || (t.conn_ && t.conn_.bytesReceived > Un ? (t.log_("Connection exceeded healthy timeout but has received " + t.conn_.bytesReceived + " bytes.  Marking connection healthy."),
                                t.isHealthy_ = !0,
                                t.conn_.markConnectionHealthy()) : t.conn_ && t.conn_.bytesSent > Qn ? t.log_("Connection exceeded healthy timeout but has sent " + t.conn_.bytesSent + " bytes.  Leaving connection alive.") : (t.log_("Closing unhealthy connection after timeout."),
                                    t.close()))
                    }, Math.floor(i)))
                }
                    ,
                    t.prototype.nextTransportId_ = function () {
                        return "c:" + this.id + ":" + this.connectionCount++
                    }
                    ,
                    t.prototype.disconnReceiver_ = function (t) {
                        var e = this;
                        return function (n) {
                            t === e.conn_ ? e.onConnectionLost_(n) : t === e.secondaryConn_ ? (e.log_("Secondary connection lost."),
                                e.onSecondaryConnectionLost_()) : e.log_("closing an old connection")
                        }
                    }
                    ,
                    t.prototype.connReceiver_ = function (t) {
                        var e = this;
                        return function (n) {
                            2 != e.state_ && (t === e.rx_ ? e.onPrimaryMessageReceived_(n) : t === e.secondaryConn_ ? e.onSecondaryMessageReceived_(n) : e.log_("message on old connection"))
                        }
                    }
                    ,
                    t.prototype.sendRequest = function (t) {
                        var e = {
                            t: "d",
                            d: t
                        };
                        this.sendData_(e)
                    }
                    ,
                    t.prototype.tryCleanupConnection = function () {
                        this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId),
                            this.conn_ = this.secondaryConn_,
                            this.secondaryConn_ = null)
                    }
                    ,
                    t.prototype.onSecondaryControl_ = function (t) {
                        if (Vn in t) {
                            var e = t[Vn];
                            e === zn ? this.upgradeIfSecondaryHealthy_() : e === jn ? (this.log_("Got a reset on secondary, closing it"),
                                this.secondaryConn_.close(),
                                this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : e === Yn && (this.log_("got pong on secondary."),
                                    this.secondaryResponsesRequired_--,
                                    this.upgradeIfSecondaryHealthy_())
                        }
                    }
                    ,
                    t.prototype.onSecondaryMessageReceived_ = function (t) {
                        var e = D("t", t)
                            , n = D("d", t);
                        if ("c" == e)
                            this.onSecondaryControl_(n);
                        else {
                            if ("d" != e)
                                throw new Error("Unknown protocol layer: " + e);
                            this.pendingDataMessages.push(n)
                        }
                    }
                    ,
                    t.prototype.upgradeIfSecondaryHealthy_ = function () {
                        this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."),
                            this.isHealthy_ = !0,
                            this.secondaryConn_.markConnectionHealthy(),
                            this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."),
                                this.secondaryConn_.send({
                                    t: "c",
                                    d: {
                                        t: Xn,
                                        d: {}
                                    }
                                }))
                    }
                    ,
                    t.prototype.proceedWithUpgrade_ = function () {
                        this.secondaryConn_.start(),
                            this.log_("sending client ack on secondary"),
                            this.secondaryConn_.send({
                                t: "c",
                                d: {
                                    t: zn,
                                    d: {}
                                }
                            }),
                            this.log_("Ending transmission on primary"),
                            this.conn_.send({
                                t: "c",
                                d: {
                                    t: Gn,
                                    d: {}
                                }
                            }),
                            this.tx_ = this.secondaryConn_,
                            this.tryCleanupConnection()
                    }
                    ,
                    t.prototype.onPrimaryMessageReceived_ = function (t) {
                        var e = D("t", t)
                            , n = D("d", t);
                        "c" == e ? this.onControl_(n) : "d" == e && this.onDataMessage_(n)
                    }
                    ,
                    t.prototype.onDataMessage_ = function (t) {
                        this.onPrimaryResponse_(),
                            this.onMessage_(t)
                    }
                    ,
                    t.prototype.onPrimaryResponse_ = function () {
                        this.isHealthy_ || (this.primaryResponsesRequired_--,
                            this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."),
                                this.isHealthy_ = !0,
                                this.conn_.markConnectionHealthy()))
                    }
                    ,
                    t.prototype.onControl_ = function (t) {
                        var e = D(Vn, t);
                        if (Hn in t) {
                            var n = t[Hn];
                            if (e === $n)
                                this.onHandshake_(n);
                            else if (e === Gn) {
                                this.log_("recvd end transmission on primary"),
                                    this.rx_ = this.secondaryConn_;
                                for (var r = 0; r < this.pendingDataMessages.length; ++r)
                                    this.onDataMessage_(this.pendingDataMessages[r]);
                                this.pendingDataMessages = [],
                                    this.tryCleanupConnection()
                            } else
                                e === Bn ? this.onConnectionShutdown_(n) : e === jn ? this.onReset_(n) : e === Kn ? C("Server Error: " + n) : e === Yn ? (this.log_("got pong on primary."),
                                    this.onPrimaryResponse_(),
                                    this.sendPingOnPrimaryIfNecessary_()) : C("Unknown control packet command: " + e)
                        }
                    }
                    ,
                    t.prototype.onHandshake_ = function (t) {
                        var e = t.ts
                            , n = t.v
                            , r = t.h;
                        this.sessionId = t.s,
                            this.repoInfo_.updateHost(r),
                            0 == this.state_ && (this.conn_.start(),
                                this.onConnectionEstablished_(this.conn_, e),
                                j !== n && w("Protocol version mismatch detected"),
                                this.tryStartUpgrade_())
                    }
                    ,
                    t.prototype.tryStartUpgrade_ = function () {
                        var t = this.transportManager_.upgradeTransport();
                        t && this.startUpgrade_(t)
                    }
                    ,
                    t.prototype.startUpgrade_ = function (t) {
                        var e = this;
                        this.secondaryConn_ = new t(this.nextTransportId_(), this.repoInfo_, this.sessionId),
                            this.secondaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
                        var n = this.connReceiver_(this.secondaryConn_)
                            , r = this.disconnReceiver_(this.secondaryConn_);
                        this.secondaryConn_.open(n, r),
                            V(function () {
                                e.secondaryConn_ && (e.log_("Timed out trying to upgrade."),
                                    e.secondaryConn_.close())
                            }, Math.floor(Wn))
                    }
                    ,
                    t.prototype.onReset_ = function (t) {
                        this.log_("Reset packet received.  New host: " + t),
                            this.repoInfo_.updateHost(t),
                            1 === this.state_ ? this.close() : (this.closeConnections_(),
                                this.start_())
                    }
                    ,
                    t.prototype.onConnectionEstablished_ = function (t, e) {
                        var n = this;
                        this.log_("Realtime connection established."),
                            this.conn_ = t,
                            this.state_ = 1,
                            this.onReady_ && (this.onReady_(e, this.sessionId),
                                this.onReady_ = null),
                            0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."),
                                this.isHealthy_ = !0) : V(function () {
                                    n.sendPingOnPrimaryIfNecessary_()
                                }, Math.floor(qn))
                    }
                    ,
                    t.prototype.sendPingOnPrimaryIfNecessary_ = function () {
                        this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."),
                            this.sendData_({
                                t: "c",
                                d: {
                                    t: Xn,
                                    d: {}
                                }
                            }))
                    }
                    ,
                    t.prototype.onSecondaryConnectionLost_ = function () {
                        var t = this.secondaryConn_;
                        this.secondaryConn_ = null,
                            this.tx_ !== t && this.rx_ !== t || this.close()
                    }
                    ,
                    t.prototype.onConnectionLost_ = function (t) {
                        this.conn_ = null,
                            t || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."),
                                this.repoInfo_.isCacheableHost() && (u.remove("host:" + this.repoInfo_.host),
                                    this.repoInfo_.internalHost = this.repoInfo_.host)),
                            this.close()
                    }
                    ,
                    t.prototype.onConnectionShutdown_ = function (t) {
                        this.log_("Connection shutdown command received. Shutting down..."),
                            this.onKill_ && (this.onKill_(t),
                                this.onKill_ = null),
                            this.onDisconnect_ = null,
                            this.close()
                    }
                    ,
                    t.prototype.sendData_ = function (t) {
                        if (1 !== this.state_)
                            throw "Connection is not connected";
                        this.tx_.send(t)
                    }
                    ,
                    t.prototype.close = function () {
                        2 !== this.state_ && (this.log_("Closing realtime connection."),
                            this.state_ = 2,
                            this.closeConnections_(),
                            this.onDisconnect_ && (this.onDisconnect_(),
                                this.onDisconnect_ = null))
                    }
                    ,
                    t.prototype.closeConnections_ = function () {
                        this.log_("Shutting down all connections"),
                            this.conn_ && (this.conn_.close(),
                                this.conn_ = null),
                            this.secondaryConn_ && (this.secondaryConn_.close(),
                                this.secondaryConn_ = null),
                            this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_),
                                this.healthyTimeout_ = null)
                    }
                    ,
                    t
            }()
            , Zn = function () {
                function t() { }
                return t.prototype.put = function (t, e, n, r) { }
                    ,
                    t.prototype.merge = function (t, e, n, r) { }
                    ,
                    t.prototype.refreshAuthToken = function (t) { }
                    ,
                    t.prototype.onDisconnectPut = function (t, e, n) { }
                    ,
                    t.prototype.onDisconnectMerge = function (t, e, n) { }
                    ,
                    t.prototype.onDisconnectCancel = function (t, e) { }
                    ,
                    t.prototype.reportStats = function (t) { }
                    ,
                    t
            }()
            , tr = 1e3
            , er = 3e5
            , nr = 3e4
            , rr = 1.3
            , ir = 3e4
            , or = "server_kill"
            , sr = 3
            , ar = function (t) {
                function e(r, i, o, s, a, h) {
                    var u = t.call(this) || this;
                    if (u.repoInfo_ = r,
                        u.onDataUpdate_ = i,
                        u.onConnectStatus_ = o,
                        u.onServerInfoUpdate_ = s,
                        u.authTokenProvider_ = a,
                        u.authOverride_ = h,
                        u.id = e.nextPersistentConnectionId_++,
                        u.log_ = m("p:" + u.id + ":"),
                        u.interruptReasons_ = {},
                        u.listens_ = {},
                        u.outstandingPuts_ = [],
                        u.outstandingPutCount_ = 0,
                        u.onDisconnectRequestQueue_ = [],
                        u.connected_ = !1,
                        u.reconnectDelay_ = tr,
                        u.maxReconnectDelay_ = er,
                        u.securityDebugCallback_ = null,
                        u.lastSessionId = null,
                        u.establishConnectionTimer_ = null,
                        u.visible_ = !1,
                        u.requestCBHash_ = {},
                        u.requestNumber_ = 0,
                        u.realtime_ = null,
                        u.authToken_ = null,
                        u.forceTokenRefresh_ = !1,
                        u.invalidAuthTokenCount_ = 0,
                        u.firstConnection_ = !0,
                        u.lastConnectionAttemptTime_ = null,
                        u.lastConnectionEstablishedTime_ = null,
                        h && !n.isNodeSdk())
                        throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
                    return u.scheduleConnect_(0),
                        ln.getInstance().on("visible", u.onVisible_, u),
                        -1 === r.host.indexOf("fblocal") && cn.getInstance().on("online", u.onOnline_, u),
                        u
                }
                return i.__extends(e, t),
                    e.prototype.sendRequest = function (t, e, r) {
                        var i = ++this.requestNumber_
                            , o = {
                                r: i,
                                a: t,
                                b: e
                            };
                        this.log_(n.stringify(o)),
                            n.assert(this.connected_, "sendRequest call when we're not connected not allowed."),
                            this.realtime_.sendRequest(o),
                            r && (this.requestCBHash_[i] = r)
                    }
                    ,
                    e.prototype.listen = function (t, e, r, i) {
                        var o = t.queryIdentifier()
                            , s = t.path.toString();
                        this.log_("Listen called for " + s + " " + o),
                            this.listens_[s] = this.listens_[s] || {},
                            n.assert(t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(), "listen() called for non-default but complete query"),
                            n.assert(!this.listens_[s][o], "listen() called twice for same path/queryId.");
                        var a = {
                            onComplete: i,
                            hashFn: e,
                            query: t,
                            tag: r
                        };
                        this.listens_[s][o] = a,
                            this.connected_ && this.sendListen_(a)
                    }
                    ,
                    e.prototype.sendListen_ = function (t) {
                        var n = this
                            , r = t.query
                            , i = r.path.toString()
                            , o = r.queryIdentifier();
                        this.log_("Listen on " + i + " for " + o);
                        var s = {
                            p: i
                        };
                        t.tag && (s.q = r.queryObject(),
                            s.t = t.tag),
                            s.h = t.hashFn(),
                            this.sendRequest("q", s, function (s) {
                                var a = s.d
                                    , h = s.s;
                                e.warnOnListenWarnings_(a, r),
                                    (n.listens_[i] && n.listens_[i][o]) === t && (n.log_("listen response", s),
                                        "ok" !== h && n.removeListen_(i, o),
                                        t.onComplete && t.onComplete(h, a))
                            })
                    }
                    ,
                    e.warnOnListenWarnings_ = function (t, e) {
                        if (t && "object" == typeof t && n.contains(t, "w")) {
                            var r = n.safeGet(t, "w");
                            if (Array.isArray(r) && ~r.indexOf("no_index")) {
                                var i = '".indexOn": "' + e.getQueryParams().getIndex().toString() + '"'
                                    , o = e.path.toString();
                                w("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + i + " at " + o + " to your security rules for better performance.")
                            }
                        }
                    }
                    ,
                    e.prototype.refreshAuthToken = function (t) {
                        this.authToken_ = t,
                            this.log_("Auth token refreshed"),
                            this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, function () { }),
                            this.reduceReconnectDelayIfAdminCredential_(t)
                    }
                    ,
                    e.prototype.reduceReconnectDelayIfAdminCredential_ = function (t) {
                        (t && 40 === t.length || n.isAdmin(t)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."),
                            this.maxReconnectDelay_ = nr)
                    }
                    ,
                    e.prototype.tryAuth = function () {
                        var t = this;
                        if (this.connected_ && this.authToken_) {
                            var e = this.authToken_
                                , r = n.isValidFormat(e) ? "auth" : "gauth"
                                , i = {
                                    cred: e
                                };
                            null === this.authOverride_ ? i.noauth = !0 : "object" == typeof this.authOverride_ && (i.authvar = this.authOverride_),
                                this.sendRequest(r, i, function (n) {
                                    var r = n.s
                                        , i = n.d || "error";
                                    t.authToken_ === e && ("ok" === r ? t.invalidAuthTokenCount_ = 0 : t.onAuthRevoked_(r, i))
                                })
                        }
                    }
                    ,
                    e.prototype.unlisten = function (t, e) {
                        var r = t.path.toString()
                            , i = t.queryIdentifier();
                        this.log_("Unlisten called for " + r + " " + i),
                            n.assert(t.getQueryParams().isDefault() || !t.getQueryParams().loadsAllData(), "unlisten() called for non-default but complete query"),
                            this.removeListen_(r, i) && this.connected_ && this.sendUnlisten_(r, i, t.queryObject(), e)
                    }
                    ,
                    e.prototype.sendUnlisten_ = function (t, e, n, r) {
                        this.log_("Unlisten on " + t + " for " + e);
                        var i = {
                            p: t
                        };
                        r && (i.q = n,
                            i.t = r),
                            this.sendRequest("n", i)
                    }
                    ,
                    e.prototype.onDisconnectPut = function (t, e, n) {
                        this.connected_ ? this.sendOnDisconnect_("o", t, e, n) : this.onDisconnectRequestQueue_.push({
                            pathString: t,
                            action: "o",
                            data: e,
                            onComplete: n
                        })
                    }
                    ,
                    e.prototype.onDisconnectMerge = function (t, e, n) {
                        this.connected_ ? this.sendOnDisconnect_("om", t, e, n) : this.onDisconnectRequestQueue_.push({
                            pathString: t,
                            action: "om",
                            data: e,
                            onComplete: n
                        })
                    }
                    ,
                    e.prototype.onDisconnectCancel = function (t, e) {
                        this.connected_ ? this.sendOnDisconnect_("oc", t, null, e) : this.onDisconnectRequestQueue_.push({
                            pathString: t,
                            action: "oc",
                            data: null,
                            onComplete: e
                        })
                    }
                    ,
                    e.prototype.sendOnDisconnect_ = function (t, e, n, r) {
                        var i = {
                            p: e,
                            d: n
                        };
                        this.log_("onDisconnect " + t, i),
                            this.sendRequest(t, i, function (t) {
                                r && setTimeout(function () {
                                    r(t.s, t.d)
                                }, Math.floor(0))
                            })
                    }
                    ,
                    e.prototype.put = function (t, e, n, r) {
                        this.putInternal("p", t, e, n, r)
                    }
                    ,
                    e.prototype.merge = function (t, e, n, r) {
                        this.putInternal("m", t, e, n, r)
                    }
                    ,
                    e.prototype.putInternal = function (t, e, n, r, i) {
                        var o = {
                            p: e,
                            d: n
                        };
                        void 0 !== i && (o.h = i),
                            this.outstandingPuts_.push({
                                action: t,
                                request: o,
                                onComplete: r
                            }),
                            this.outstandingPutCount_++;
                        var s = this.outstandingPuts_.length - 1;
                        this.connected_ ? this.sendPut_(s) : this.log_("Buffering put: " + e)
                    }
                    ,
                    e.prototype.sendPut_ = function (t) {
                        var e = this
                            , n = this.outstandingPuts_[t].action
                            , r = this.outstandingPuts_[t].request
                            , i = this.outstandingPuts_[t].onComplete;
                        this.outstandingPuts_[t].queued = this.connected_,
                            this.sendRequest(n, r, function (r) {
                                e.log_(n + " response", r),
                                    delete e.outstandingPuts_[t],
                                    e.outstandingPutCount_--,
                                    0 === e.outstandingPutCount_ && (e.outstandingPuts_ = []),
                                    i && i(r.s, r.d)
                            })
                    }
                    ,
                    e.prototype.reportStats = function (t) {
                        var e = this;
                        if (this.connected_) {
                            var n = {
                                c: t
                            };
                            this.log_("reportStats", n),
                                this.sendRequest("s", n, function (t) {
                                    if ("ok" !== t.s) {
                                        var n = t.d;
                                        e.log_("reportStats", "Error sending stats: " + n)
                                    }
                                })
                        }
                    }
                    ,
                    e.prototype.onDataMessage_ = function (t) {
                        if ("r" in t) {
                            this.log_("from server: " + n.stringify(t));
                            var e = t.r
                                , r = this.requestCBHash_[e];
                            r && (delete this.requestCBHash_[e],
                                r(t.b))
                        } else {
                            if ("error" in t)
                                throw "A server-side error has occurred: " + t.error;
                            "a" in t && this.onDataPush_(t.a, t.b)
                        }
                    }
                    ,
                    e.prototype.onDataPush_ = function (t, e) {
                        this.log_("handleServerMessage", t, e),
                            "d" === t ? this.onDataUpdate_(e.p, e.d, !1, e.t) : "m" === t ? this.onDataUpdate_(e.p, e.d, !0, e.t) : "c" === t ? this.onListenRevoked_(e.p, e.q) : "ac" === t ? this.onAuthRevoked_(e.s, e.d) : "sd" === t ? this.onSecurityDebugPacket_(e) : C("Unrecognized action received from server: " + n.stringify(t) + "\nAre you using the latest client?")
                    }
                    ,
                    e.prototype.onReady_ = function (t, e) {
                        this.log_("connection ready"),
                            this.connected_ = !0,
                            this.lastConnectionEstablishedTime_ = (new Date).getTime(),
                            this.handleTimestamp_(t),
                            this.lastSessionId = e,
                            this.firstConnection_ && this.sendConnectStats_(),
                            this.restoreState_(),
                            this.firstConnection_ = !1,
                            this.onConnectStatus_(!0)
                    }
                    ,
                    e.prototype.scheduleConnect_ = function (t) {
                        var e = this;
                        n.assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?"),
                            this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_),
                            this.establishConnectionTimer_ = setTimeout(function () {
                                e.establishConnectionTimer_ = null,
                                    e.establishConnection_()
                            }, Math.floor(t))
                    }
                    ,
                    e.prototype.onVisible_ = function (t) {
                        t && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."),
                            this.reconnectDelay_ = tr,
                            this.realtime_ || this.scheduleConnect_(0)),
                            this.visible_ = t
                    }
                    ,
                    e.prototype.onOnline_ = function (t) {
                        t ? (this.log_("Browser went online."),
                            this.reconnectDelay_ = tr,
                            this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."),
                                this.realtime_ && this.realtime_.close())
                    }
                    ,
                    e.prototype.onRealtimeDisconnect_ = function () {
                        if (this.log_("data client disconnected"),
                            this.connected_ = !1,
                            this.realtime_ = null,
                            this.cancelSentTransactions_(),
                            this.requestCBHash_ = {},
                            this.shouldReconnect_()) {
                            if (this.visible_) {
                                if (this.lastConnectionEstablishedTime_) {
                                    (new Date).getTime() - this.lastConnectionEstablishedTime_ > ir && (this.reconnectDelay_ = tr),
                                        this.lastConnectionEstablishedTime_ = null
                                }
                            } else
                                this.log_("Window isn't visible.  Delaying reconnect."),
                                    this.reconnectDelay_ = this.maxReconnectDelay_,
                                    this.lastConnectionAttemptTime_ = (new Date).getTime();
                            var t = (new Date).getTime() - this.lastConnectionAttemptTime_
                                , e = Math.max(0, this.reconnectDelay_ - t);
                            e = Math.random() * e,
                                this.log_("Trying to reconnect in " + e + "ms"),
                                this.scheduleConnect_(e),
                                this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * rr)
                        }
                        this.onConnectStatus_(!1)
                    }
                    ,
                    e.prototype.establishConnection_ = function () {
                        if (this.shouldReconnect_()) {
                            this.log_("Making a connection attempt"),
                                this.lastConnectionAttemptTime_ = (new Date).getTime(),
                                this.lastConnectionEstablishedTime_ = null;
                            var t = this.onDataMessage_.bind(this)
                                , r = this.onReady_.bind(this)
                                , i = this.onRealtimeDisconnect_.bind(this)
                                , o = this.id + ":" + e.nextConnectionId_++
                                , s = this
                                , a = this.lastSessionId
                                , h = !1
                                , u = null
                                , l = function () {
                                    u ? u.close() : (h = !0,
                                        i())
                                };
                            this.realtime_ = {
                                close: l,
                                sendRequest: function (t) {
                                    n.assert(u, "sendRequest call when we're not connected not allowed."),
                                        u.sendRequest(t)
                                }
                            };
                            var c = this.forceTokenRefresh_;
                            this.forceTokenRefresh_ = !1,
                                this.authTokenProvider_.getToken(c).then(function (e) {
                                    h ? g("getToken() completed but was canceled") : (g("getToken() completed. Creating connection."),
                                        s.authToken_ = e && e.accessToken,
                                        u = new Jn(o, s.repoInfo_, t, r, i, function (t) {
                                            w(t + " (" + s.repoInfo_.toString() + ")"),
                                                s.interrupt(or)
                                        }
                                            , a))
                                }).then(null, function (t) {
                                    s.log_("Failed to get token: " + t),
                                        h || (n.CONSTANTS.NODE_ADMIN && w(t),
                                            l())
                                })
                        }
                    }
                    ,
                    e.prototype.interrupt = function (t) {
                        g("Interrupting connection for reason: " + t),
                            this.interruptReasons_[t] = !0,
                            this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_),
                                this.establishConnectionTimer_ = null),
                                this.connected_ && this.onRealtimeDisconnect_())
                    }
                    ,
                    e.prototype.resume = function (t) {
                        g("Resuming connection for reason: " + t),
                            delete this.interruptReasons_[t],
                            n.isEmpty(this.interruptReasons_) && (this.reconnectDelay_ = tr,
                                this.realtime_ || this.scheduleConnect_(0))
                    }
                    ,
                    e.prototype.handleTimestamp_ = function (t) {
                        var e = t - (new Date).getTime();
                        this.onServerInfoUpdate_({
                            serverTimeOffset: e
                        })
                    }
                    ,
                    e.prototype.cancelSentTransactions_ = function () {
                        for (var t = 0; t < this.outstandingPuts_.length; t++) {
                            var e = this.outstandingPuts_[t];
                            e && "h" in e.request && e.queued && (e.onComplete && e.onComplete("disconnect"),
                                delete this.outstandingPuts_[t],
                                this.outstandingPutCount_--)
                        }
                        0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
                    }
                    ,
                    e.prototype.onListenRevoked_ = function (t, e) {
                        var n;
                        n = e ? e.map(function (t) {
                            return x(t)
                        }).join("$") : "default";
                        var r = this.removeListen_(t, n);
                        r && r.onComplete && r.onComplete("permission_denied")
                    }
                    ,
                    e.prototype.removeListen_ = function (t, e) {
                        var r, i = new H(t).toString();
                        return void 0 !== this.listens_[i] ? (r = this.listens_[i][e],
                            delete this.listens_[i][e],
                            0 === n.getCount(this.listens_[i]) && delete this.listens_[i]) : r = void 0,
                            r
                    }
                    ,
                    e.prototype.onAuthRevoked_ = function (t, e) {
                        g("Auth token revoked: " + t + "/" + e),
                            this.authToken_ = null,
                            this.forceTokenRefresh_ = !0,
                            this.realtime_.close(),
                            "invalid_token" !== t && "permission_denied" !== t || (this.invalidAuthTokenCount_++,
                                this.invalidAuthTokenCount_ >= sr && (this.reconnectDelay_ = nr,
                                    this.authTokenProvider_.notifyForInvalidToken()))
                    }
                    ,
                    e.prototype.onSecurityDebugPacket_ = function (t) {
                        this.securityDebugCallback_ ? this.securityDebugCallback_(t) : "msg" in t && console.log("FIREBASE: " + t.msg.replace("\n", "\nFIREBASE: "))
                    }
                    ,
                    e.prototype.restoreState_ = function () {
                        var t = this;
                        this.tryAuth(),
                            n.forEach(this.listens_, function (e, r) {
                                n.forEach(r, function (e, n) {
                                    t.sendListen_(n)
                                })
                            });
                        for (var e = 0; e < this.outstandingPuts_.length; e++)
                            this.outstandingPuts_[e] && this.sendPut_(e);
                        for (; this.onDisconnectRequestQueue_.length;) {
                            var r = this.onDisconnectRequestQueue_.shift();
                            this.sendOnDisconnect_(r.action, r.pathString, r.data, r.onComplete)
                        }
                    }
                    ,
                    e.prototype.sendConnectStats_ = function () {
                        var t = {}
                            , e = "js";
                        n.CONSTANTS.NODE_ADMIN ? e = "admin_node" : n.CONSTANTS.NODE_CLIENT && (e = "node"),
                            t["sdk." + e + "." + o.SDK_VERSION.replace(/\./g, "-")] = 1,
                            n.isMobileCordova() ? t["framework.cordova"] = 1 : n.isReactNative() && (t["framework.reactnative"] = 1),
                            this.reportStats(t)
                    }
                    ,
                    e.prototype.shouldReconnect_ = function () {
                        var t = cn.getInstance().currentlyOnline();
                        return n.isEmpty(this.interruptReasons_) && t
                    }
                    ,
                    e.nextPersistentConnectionId_ = 0,
                    e.nextConnectionId_ = 0,
                    e
            }(Zn)
            , hr = function (t) {
                function e(e, n, r) {
                    var i = t.call(this) || this;
                    return i.repoInfo_ = e,
                        i.onDataUpdate_ = n,
                        i.authTokenProvider_ = r,
                        i.log_ = m("p:rest:"),
                        i.listens_ = {},
                        i
                }
                return i.__extends(e, t),
                    e.prototype.reportStats = function (t) {
                        throw new Error("Method not implemented.")
                    }
                    ,
                    e.getListenId_ = function (t, e) {
                        return void 0 !== e ? "tag$" + e : (n.assert(t.getQueryParams().isDefault(), "should have a tag if it's not a default query."),
                            t.path.toString())
                    }
                    ,
                    e.prototype.listen = function (t, r, i, o) {
                        var s = this
                            , a = t.path.toString();
                        this.log_("Listen called for " + a + " " + t.queryIdentifier());
                        var h = e.getListenId_(t, i)
                            , u = {};
                        this.listens_[h] = u;
                        var l = t.getQueryParams().toRestQueryStringParameters();
                        this.restRequest_(a + ".json", l, function (t, e) {
                            var r = e;
                            (404 === t && (r = null,
                                t = null),
                                null === t && s.onDataUpdate_(a, r, !1, i),
                                n.safeGet(s.listens_, h) === u) && o(t ? 401 == t ? "permission_denied" : "rest_error:" + t : "ok", null)
                        })
                    }
                    ,
                    e.prototype.unlisten = function (t, n) {
                        var r = e.getListenId_(t, n);
                        delete this.listens_[r]
                    }
                    ,
                    e.prototype.refreshAuthToken = function (t) { }
                    ,
                    e.prototype.restRequest_ = function (t, e, r) {
                        var i = this;
                        void 0 === e && (e = {}),
                            e.format = "export",
                            this.authTokenProvider_.getToken(!1).then(function (o) {
                                var s = o && o.accessToken;
                                s && (e.auth = s);
                                var a = (i.repoInfo_.secure ? "https://" : "http://") + i.repoInfo_.host + t + "?" + n.querystring(e);
                                i.log_("Sending REST request for " + a);
                                var h = new XMLHttpRequest;
                                h.onreadystatechange = function () {
                                    if (r && 4 === h.readyState) {
                                        i.log_("REST Response for " + a + " received. status:", h.status, "response:", h.responseText);
                                        var t = null;
                                        if (h.status >= 200 && h.status < 300) {
                                            try {
                                                t = n.jsonEval(h.responseText)
                                            } catch (e) {
                                                w("Failed to parse JSON response for " + a + ": " + h.responseText)
                                            }
                                            r(null, t)
                                        } else
                                            401 !== h.status && 404 !== h.status && w("Got unsuccessful REST response for " + a + " Status: " + h.status),
                                                r(h.status);
                                        r = null
                                    }
                                }
                                    ,
                                    h.open("GET", a, !0),
                                    h.send()
                            })
                    }
                    ,
                    e
            }(Zn)
            , ur = "repo_interrupt"
            , lr = function () {
                function t(t, e, r) {
                    var i = this;
                    this.repoInfo_ = t,
                        this.app = r,
                        this.dataUpdateCount = 0,
                        this.statsListener_ = null,
                        this.eventQueue_ = new an,
                        this.nextWriteId_ = 1,
                        this.interceptServerDataCallback_ = null,
                        this.onDisconnect_ = new Ce,
                        this.persistentConnection_ = null;
                    var o = new Je(r);
                    if (this.stats_ = tn.getCollection(t),
                        e || U())
                        this.server_ = new hr(this.repoInfo_, this.onDataUpdate_.bind(this), o),
                            setTimeout(this.onConnectStatus_.bind(this, !0), 0);
                    else {
                        var s = r.options.databaseAuthVariableOverride;
                        if (null != s) {
                            if ("object" != typeof s)
                                throw new Error("Only objects are supported for option databaseAuthVariableOverride");
                            try {
                                n.stringify(s)
                            } catch (a) {
                                throw new Error("Invalid authOverride provided: " + a)
                            }
                        }
                        this.persistentConnection_ = new ar(this.repoInfo_, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), o, s),
                            this.server_ = this.persistentConnection_
                    }
                    o.addTokenChangeListener(function (t) {
                        i.server_.refreshAuthToken(t)
                    }),
                        this.statsReporter_ = tn.getOrCreateReporter(t, function () {
                            return new sn(i.stats_, i.server_)
                        }),
                        this.transactions_init_(),
                        this.infoData_ = new $e,
                        this.infoSyncTree_ = new Xe({
                            startListening: function (t, e, n, r) {
                                var o = []
                                    , s = i.infoData_.getNode(t.path);
                                return s.isEmpty() || (o = i.infoSyncTree_.applyServerOverwrite(t.path, s),
                                    setTimeout(function () {
                                        r("ok")
                                    }, 0)),
                                    o
                            },
                            stopListening: function () { }
                        }),
                        this.updateInfo_("connected", !1),
                        this.serverSyncTree_ = new Xe({
                            startListening: function (t, e, n, r) {
                                return i.server_.listen(t, n, e, function (e, n) {
                                    var o = r(e, n);
                                    i.eventQueue_.raiseEventsForChangedPath(t.path, o)
                                }),
                                    []
                            },
                            stopListening: function (t, e) {
                                i.server_.unlisten(t, e)
                            }
                        })
                }
                return t.prototype.toString = function () {
                    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
                }
                    ,
                    t.prototype.name = function () {
                        return this.repoInfo_.namespace
                    }
                    ,
                    t.prototype.serverTime = function () {
                        var t = this.infoData_.getNode(new H(".info/serverTimeOffset")).val() || 0;
                        return (new Date).getTime() + t
                    }
                    ,
                    t.prototype.generateServerValues = function () {
                        return Ee({
                            timestamp: this.serverTime()
                        })
                    }
                    ,
                    t.prototype.onDataUpdate_ = function (t, e, r, i) {
                        this.dataUpdateCount++;
                        var o = new H(t);
                        e = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(t, e) : e;
                        var s = [];
                        if (i)
                            if (r) {
                                var a = n.map(e, function (t) {
                                    return ae(t)
                                });
                                s = this.serverSyncTree_.applyTaggedQueryMerge(o, a, i)
                            } else {
                                var h = ae(e);
                                s = this.serverSyncTree_.applyTaggedQueryOverwrite(o, h, i)
                            }
                        else if (r) {
                            var u = n.map(e, function (t) {
                                return ae(t)
                            });
                            s = this.serverSyncTree_.applyServerMerge(o, u)
                        } else {
                            var l = ae(e);
                            s = this.serverSyncTree_.applyServerOverwrite(o, l)
                        }
                        var c = o;
                        s.length > 0 && (c = this.rerunTransactions_(o)),
                            this.eventQueue_.raiseEventsForChangedPath(c, s)
                    }
                    ,
                    t.prototype.interceptServerData_ = function (t) {
                        this.interceptServerDataCallback_ = t
                    }
                    ,
                    t.prototype.onConnectStatus_ = function (t) {
                        this.updateInfo_("connected", t),
                            !1 === t && this.runOnDisconnectEvents_()
                    }
                    ,
                    t.prototype.onServerInfoUpdate_ = function (t) {
                        var e = this;
                        O(t, function (t, n) {
                            e.updateInfo_(n, t)
                        })
                    }
                    ,
                    t.prototype.updateInfo_ = function (t, e) {
                        var n = new H("/.info/" + t)
                            , r = ae(e);
                        this.infoData_.updateSnapshot(n, r);
                        var i = this.infoSyncTree_.applyServerOverwrite(n, r);
                        this.eventQueue_.raiseEventsForChangedPath(n, i)
                    }
                    ,
                    t.prototype.getNextWriteId_ = function () {
                        return this.nextWriteId_++
                    }
                    ,
                    t.prototype.setWithPriority = function (t, e, n, r) {
                        var i = this;
                        this.log_("set", {
                            path: t.toString(),
                            value: e,
                            priority: n
                        });
                        var o = this.generateServerValues()
                            , s = ae(e, n)
                            , a = be(s, o)
                            , h = this.getNextWriteId_()
                            , u = this.serverSyncTree_.applyUserOverwrite(t, a, h, !0);
                        this.eventQueue_.queueEvents(u),
                            this.server_.put(t.toString(), s.val(!0), function (e, n) {
                                var o = "ok" === e;
                                o || w("set at " + t + " failed: " + e);
                                var s = i.serverSyncTree_.ackUserWrite(h, !o);
                                i.eventQueue_.raiseEventsForChangedPath(t, s),
                                    i.callOnCompleteCallback(r, e, n)
                            });
                        var l = this.abortTransactions_(t);
                        this.rerunTransactions_(l),
                            this.eventQueue_.raiseEventsForChangedPath(l, [])
                    }
                    ,
                    t.prototype.update = function (t, e, r) {
                        var i = this;
                        this.log_("update", {
                            path: t.toString(),
                            value: e
                        });
                        var o = !0
                            , s = this.generateServerValues()
                            , a = {};
                        if (n.forEach(e, function (t, e) {
                            o = !1;
                            var n = ae(e);
                            a[t] = be(n, s)
                        }),
                            o)
                            g("update() called with empty data.  Don't do anything."),
                                this.callOnCompleteCallback(r, "ok");
                        else {
                            var h = this.getNextWriteId_()
                                , u = this.serverSyncTree_.applyUserMerge(t, a, h);
                            this.eventQueue_.queueEvents(u),
                                this.server_.merge(t.toString(), e, function (e, n) {
                                    var o = "ok" === e;
                                    o || w("update at " + t + " failed: " + e);
                                    var s = i.serverSyncTree_.ackUserWrite(h, !o)
                                        , a = s.length > 0 ? i.rerunTransactions_(t) : t;
                                    i.eventQueue_.raiseEventsForChangedPath(a, s),
                                        i.callOnCompleteCallback(r, e, n)
                                }),
                                n.forEach(e, function (e) {
                                    var n = i.abortTransactions_(t.child(e));
                                    i.rerunTransactions_(n)
                                }),
                                this.eventQueue_.raiseEventsForChangedPath(t, [])
                        }
                    }
                    ,
                    t.prototype.runOnDisconnectEvents_ = function () {
                        var t = this;
                        this.log_("onDisconnectEvents");
                        var e = this.generateServerValues()
                            , n = Te(this.onDisconnect_, e)
                            , r = [];
                        n.forEachTree(H.Empty, function (e, n) {
                            r = r.concat(t.serverSyncTree_.applyServerOverwrite(e, n));
                            var i = t.abortTransactions_(e);
                            t.rerunTransactions_(i)
                        }),
                            this.onDisconnect_ = new Ce,
                            this.eventQueue_.raiseEventsForChangedPath(H.Empty, r)
                    }
                    ,
                    t.prototype.onDisconnectCancel = function (t, e) {
                        var n = this;
                        this.server_.onDisconnectCancel(t.toString(), function (r, i) {
                            "ok" === r && n.onDisconnect_.forget(t),
                                n.callOnCompleteCallback(e, r, i)
                        })
                    }
                    ,
                    t.prototype.onDisconnectSet = function (t, e, n) {
                        var r = this
                            , i = ae(e);
                        this.server_.onDisconnectPut(t.toString(), i.val(!0), function (e, o) {
                            "ok" === e && r.onDisconnect_.remember(t, i),
                                r.callOnCompleteCallback(n, e, o)
                        })
                    }
                    ,
                    t.prototype.onDisconnectSetWithPriority = function (t, e, n, r) {
                        var i = this
                            , o = ae(e, n);
                        this.server_.onDisconnectPut(t.toString(), o.val(!0), function (e, n) {
                            "ok" === e && i.onDisconnect_.remember(t, o),
                                i.callOnCompleteCallback(r, e, n)
                        })
                    }
                    ,
                    t.prototype.onDisconnectUpdate = function (t, e, r) {
                        var i = this;
                        if (n.isEmpty(e))
                            return g("onDisconnect().update() called with empty data.  Don't do anything."),
                                void this.callOnCompleteCallback(r, "ok");
                        this.server_.onDisconnectMerge(t.toString(), e, function (o, s) {
                            "ok" === o && n.forEach(e, function (e, n) {
                                var r = ae(n);
                                i.onDisconnect_.remember(t.child(e), r)
                            }),
                                i.callOnCompleteCallback(r, o, s)
                        })
                    }
                    ,
                    t.prototype.addEventCallbackForQuery = function (t, e) {
                        var n;
                        n = ".info" === t.path.getFront() ? this.infoSyncTree_.addEventRegistration(t, e) : this.serverSyncTree_.addEventRegistration(t, e),
                            this.eventQueue_.raiseEventsAtPath(t.path, n)
                    }
                    ,
                    t.prototype.removeEventCallbackForQuery = function (t, e) {
                        var n;
                        n = ".info" === t.path.getFront() ? this.infoSyncTree_.removeEventRegistration(t, e) : this.serverSyncTree_.removeEventRegistration(t, e),
                            this.eventQueue_.raiseEventsAtPath(t.path, n)
                    }
                    ,
                    t.prototype.interrupt = function () {
                        this.persistentConnection_ && this.persistentConnection_.interrupt(ur)
                    }
                    ,
                    t.prototype.resume = function () {
                        this.persistentConnection_ && this.persistentConnection_.resume(ur)
                    }
                    ,
                    t.prototype.stats = function (t) {
                        if (void 0 === t && (t = !1),
                            "undefined" != typeof console) {
                            var e;
                            t ? (this.statsListener_ || (this.statsListener_ = new en(this.stats_)),
                                e = this.statsListener_.get()) : e = this.stats_.get();
                            var r = Object.keys(e).reduce(function (t, e) {
                                return Math.max(e.length, t)
                            }, 0);
                            n.forEach(e, function (t, e) {
                                for (var n = t.length; n < r + 2; n++)
                                    t += " ";
                                console.log(t + e)
                            })
                        }
                    }
                    ,
                    t.prototype.statsIncrementCounter = function (t) {
                        this.stats_.incrementCounter(t),
                            this.statsReporter_.includeStat(t)
                    }
                    ,
                    t.prototype.log_ = function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                            t[e] = arguments[e];
                        var n = "";
                        this.persistentConnection_ && (n = this.persistentConnection_.id + ":"),
                            g.apply(void 0, [n].concat(t))
                    }
                    ,
                    t.prototype.callOnCompleteCallback = function (t, e, n) {
                        t && Q(function () {
                            if ("ok" == e)
                                t(null);
                            else {
                                var r = (e || "error").toUpperCase()
                                    , i = r;
                                n && (i += ": " + n);
                                var o = new Error(i);
                                o.code = r,
                                    t(o)
                            }
                        })
                    }
                    ,
                    Object.defineProperty(t.prototype, "database", {
                        get: function () {
                            return this.__database || (this.__database = new Er(this))
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t
            }()
            , cr = function () {
                function t(e) {
                    this.indexedFilter_ = new Me(e.getIndex()),
                        this.index_ = e.getIndex(),
                        this.startPost_ = t.getStartPost_(e),
                        this.endPost_ = t.getEndPost_(e)
                }
                return t.prototype.getStartPost = function () {
                    return this.startPost_
                }
                    ,
                    t.prototype.getEndPost = function () {
                        return this.endPost_
                    }
                    ,
                    t.prototype.matches = function (t) {
                        return this.index_.compare(this.getStartPost(), t) <= 0 && this.index_.compare(t, this.getEndPost()) <= 0
                    }
                    ,
                    t.prototype.updateChild = function (t, e, n, r, i, o) {
                        return this.matches(new Pt(e, n)) || (n = re.EMPTY_NODE),
                            this.indexedFilter_.updateChild(t, e, n, r, i, o)
                    }
                    ,
                    t.prototype.updateFullNode = function (t, e, n) {
                        e.isLeafNode() && (e = re.EMPTY_NODE);
                        var r = e.withIndex(this.index_);
                        r = r.updatePriority(re.EMPTY_NODE);
                        var i = this;
                        return e.forEachChild(jt, function (t, e) {
                            i.matches(new Pt(t, e)) || (r = r.updateImmediateChild(t, re.EMPTY_NODE))
                        }),
                            this.indexedFilter_.updateFullNode(t, r, n)
                    }
                    ,
                    t.prototype.updatePriority = function (t, e) {
                        return t
                    }
                    ,
                    t.prototype.filtersNodes = function () {
                        return !0
                    }
                    ,
                    t.prototype.getIndexedFilter = function () {
                        return this.indexedFilter_
                    }
                    ,
                    t.prototype.getIndex = function () {
                        return this.index_
                    }
                    ,
                    t.getStartPost_ = function (t) {
                        if (t.hasStart()) {
                            var e = t.getIndexStartName();
                            return t.getIndex().makePost(t.getIndexStartValue(), e)
                        }
                        return t.getIndex().minPost()
                    }
                    ,
                    t.getEndPost_ = function (t) {
                        if (t.hasEnd()) {
                            var e = t.getIndexEndName();
                            return t.getIndex().makePost(t.getIndexEndValue(), e)
                        }
                        return t.getIndex().maxPost()
                    }
                    ,
                    t
            }()
            , pr = function () {
                function t(t) {
                    this.rangedFilter_ = new cr(t),
                        this.index_ = t.getIndex(),
                        this.limit_ = t.getLimit(),
                        this.reverse_ = !t.isViewFromLeft()
                }
                return t.prototype.updateChild = function (t, e, n, r, i, o) {
                    return this.rangedFilter_.matches(new Pt(e, n)) || (n = re.EMPTY_NODE),
                        t.getImmediateChild(e).equals(n) ? t : t.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(t, e, n, r, i, o) : this.fullLimitUpdateChild_(t, e, n, i, o)
                }
                    ,
                    t.prototype.updateFullNode = function (t, e, n) {
                        var r;
                        if (e.isLeafNode() || e.isEmpty())
                            r = re.EMPTY_NODE.withIndex(this.index_);
                        else if (2 * this.limit_ < e.numChildren() && e.isIndexed(this.index_)) {
                            r = re.EMPTY_NODE.withIndex(this.index_);
                            var i = void 0;
                            i = this.reverse_ ? e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : e.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                            for (var o = 0; i.hasNext() && o < this.limit_;) {
                                var s = i.getNext();
                                if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), s) <= 0 : this.index_.compare(s, this.rangedFilter_.getEndPost()) <= 0))
                                    break;
                                r = r.updateImmediateChild(s.name, s.node),
                                    o++
                            }
                        } else {
                            r = (r = e.withIndex(this.index_)).updatePriority(re.EMPTY_NODE);
                            var a = void 0
                                , h = void 0
                                , u = void 0;
                            i = void 0;
                            if (this.reverse_) {
                                i = r.getReverseIterator(this.index_),
                                    a = this.rangedFilter_.getEndPost(),
                                    h = this.rangedFilter_.getStartPost();
                                var l = this.index_.getCompare();
                                u = function (t, e) {
                                    return l(e, t)
                                }
                            } else
                                i = r.getIterator(this.index_),
                                    a = this.rangedFilter_.getStartPost(),
                                    h = this.rangedFilter_.getEndPost(),
                                    u = this.index_.getCompare();
                            o = 0;
                            for (var c = !1; i.hasNext();) {
                                s = i.getNext();
                                !c && u(a, s) <= 0 && (c = !0),
                                    c && o < this.limit_ && u(s, h) <= 0 ? o++ : r = r.updateImmediateChild(s.name, re.EMPTY_NODE)
                            }
                        }
                        return this.rangedFilter_.getIndexedFilter().updateFullNode(t, r, n)
                    }
                    ,
                    t.prototype.updatePriority = function (t, e) {
                        return t
                    }
                    ,
                    t.prototype.filtersNodes = function () {
                        return !0
                    }
                    ,
                    t.prototype.getIndexedFilter = function () {
                        return this.rangedFilter_.getIndexedFilter()
                    }
                    ,
                    t.prototype.getIndex = function () {
                        return this.index_
                    }
                    ,
                    t.prototype.fullLimitUpdateChild_ = function (t, e, r, i, o) {
                        var s;
                        if (this.reverse_) {
                            var a = this.index_.getCompare();
                            s = function (t, e) {
                                return a(e, t)
                            }
                        } else
                            s = this.index_.getCompare();
                        var h = t;
                        n.assert(h.numChildren() == this.limit_, "");
                        var u = new Pt(e, r)
                            , l = this.reverse_ ? h.getFirstChild(this.index_) : h.getLastChild(this.index_)
                            , c = this.rangedFilter_.matches(u);
                        if (h.hasChild(e)) {
                            for (var p = h.getImmediateChild(e), d = i.getChildAfterChild(this.index_, l, this.reverse_); null != d && (d.name == e || h.hasChild(d.name));)
                                d = i.getChildAfterChild(this.index_, d, this.reverse_);
                            var f = null == d ? 1 : s(d, u);
                            if (c && !r.isEmpty() && f >= 0)
                                return null != o && o.trackChildChange(Le.childChangedChange(e, r, p)),
                                    h.updateImmediateChild(e, r);
                            null != o && o.trackChildChange(Le.childRemovedChange(e, p));
                            var _ = h.updateImmediateChild(e, re.EMPTY_NODE);
                            return null != d && this.rangedFilter_.matches(d) ? (null != o && o.trackChildChange(Le.childAddedChange(d.name, d.node)),
                                _.updateImmediateChild(d.name, d.node)) : _
                        }
                        return r.isEmpty() ? t : c && s(l, u) >= 0 ? (null != o && (o.trackChildChange(Le.childRemovedChange(l.name, l.node)),
                            o.trackChildChange(Le.childAddedChange(e, r))),
                            h.updateImmediateChild(e, r).updateImmediateChild(l.name, re.EMPTY_NODE)) : t
                    }
                    ,
                    t
            }()
            , dr = function () {
                function t() {
                    this.limitSet_ = !1,
                        this.startSet_ = !1,
                        this.startNameSet_ = !1,
                        this.endSet_ = !1,
                        this.endNameSet_ = !1,
                        this.limit_ = 0,
                        this.viewFrom_ = "",
                        this.indexStartValue_ = null,
                        this.indexStartName_ = "",
                        this.indexEndValue_ = null,
                        this.indexEndName_ = "",
                        this.index_ = jt
                }
                return t.prototype.hasStart = function () {
                    return this.startSet_
                }
                    ,
                    t.prototype.isViewFromLeft = function () {
                        return "" === this.viewFrom_ ? this.startSet_ : this.viewFrom_ === t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT
                    }
                    ,
                    t.prototype.getIndexStartValue = function () {
                        return n.assert(this.startSet_, "Only valid if start has been set"),
                            this.indexStartValue_
                    }
                    ,
                    t.prototype.getIndexStartName = function () {
                        return n.assert(this.startSet_, "Only valid if start has been set"),
                            this.startNameSet_ ? this.indexStartName_ : N
                    }
                    ,
                    t.prototype.hasEnd = function () {
                        return this.endSet_
                    }
                    ,
                    t.prototype.getIndexEndValue = function () {
                        return n.assert(this.endSet_, "Only valid if end has been set"),
                            this.indexEndValue_
                    }
                    ,
                    t.prototype.getIndexEndName = function () {
                        return n.assert(this.endSet_, "Only valid if end has been set"),
                            this.endNameSet_ ? this.indexEndName_ : I
                    }
                    ,
                    t.prototype.hasLimit = function () {
                        return this.limitSet_
                    }
                    ,
                    t.prototype.hasAnchoredLimit = function () {
                        return this.limitSet_ && "" !== this.viewFrom_
                    }
                    ,
                    t.prototype.getLimit = function () {
                        return n.assert(this.limitSet_, "Only valid if limit has been set"),
                            this.limit_
                    }
                    ,
                    t.prototype.getIndex = function () {
                        return this.index_
                    }
                    ,
                    t.prototype.copy_ = function () {
                        var e = new t;
                        return e.limitSet_ = this.limitSet_,
                            e.limit_ = this.limit_,
                            e.startSet_ = this.startSet_,
                            e.indexStartValue_ = this.indexStartValue_,
                            e.startNameSet_ = this.startNameSet_,
                            e.indexStartName_ = this.indexStartName_,
                            e.endSet_ = this.endSet_,
                            e.indexEndValue_ = this.indexEndValue_,
                            e.endNameSet_ = this.endNameSet_,
                            e.indexEndName_ = this.indexEndName_,
                            e.index_ = this.index_,
                            e.viewFrom_ = this.viewFrom_,
                            e
                    }
                    ,
                    t.prototype.limit = function (t) {
                        var e = this.copy_();
                        return e.limitSet_ = !0,
                            e.limit_ = t,
                            e.viewFrom_ = "",
                            e
                    }
                    ,
                    t.prototype.limitToFirst = function (e) {
                        var n = this.copy_();
                        return n.limitSet_ = !0,
                            n.limit_ = e,
                            n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT,
                            n
                    }
                    ,
                    t.prototype.limitToLast = function (e) {
                        var n = this.copy_();
                        return n.limitSet_ = !0,
                            n.limit_ = e,
                            n.viewFrom_ = t.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT,
                            n
                    }
                    ,
                    t.prototype.startAt = function (t, e) {
                        var n = this.copy_();
                        return n.startSet_ = !0,
                            void 0 === t && (t = null),
                            n.indexStartValue_ = t,
                            null != e ? (n.startNameSet_ = !0,
                                n.indexStartName_ = e) : (n.startNameSet_ = !1,
                                    n.indexStartName_ = ""),
                            n
                    }
                    ,
                    t.prototype.endAt = function (t, e) {
                        var n = this.copy_();
                        return n.endSet_ = !0,
                            void 0 === t && (t = null),
                            n.indexEndValue_ = t,
                            void 0 !== e ? (n.endNameSet_ = !0,
                                n.indexEndName_ = e) : (n.endNameSet_ = !1,
                                    n.indexEndName_ = ""),
                            n
                    }
                    ,
                    t.prototype.orderBy = function (t) {
                        var e = this.copy_();
                        return e.index_ = t,
                            e
                    }
                    ,
                    t.prototype.getQueryObject = function () {
                        var e = t.WIRE_PROTOCOL_CONSTANTS_
                            , n = {};
                        if (this.startSet_ && (n[e.INDEX_START_VALUE] = this.indexStartValue_,
                            this.startNameSet_ && (n[e.INDEX_START_NAME] = this.indexStartName_)),
                            this.endSet_ && (n[e.INDEX_END_VALUE] = this.indexEndValue_,
                                this.endNameSet_ && (n[e.INDEX_END_NAME] = this.indexEndName_)),
                            this.limitSet_) {
                            n[e.LIMIT] = this.limit_;
                            var r = this.viewFrom_;
                            "" === r && (r = this.isViewFromLeft() ? e.VIEW_FROM_LEFT : e.VIEW_FROM_RIGHT),
                                n[e.VIEW_FROM] = r
                        }
                        return this.index_ !== jt && (n[e.INDEX] = this.index_.toString()),
                            n
                    }
                    ,
                    t.prototype.loadsAllData = function () {
                        return !(this.startSet_ || this.endSet_ || this.limitSet_)
                    }
                    ,
                    t.prototype.isDefault = function () {
                        return this.loadsAllData() && this.index_ == jt
                    }
                    ,
                    t.prototype.getNodeFilter = function () {
                        return this.loadsAllData() ? new Me(this.getIndex()) : this.hasLimit() ? new pr(this) : new cr(this)
                    }
                    ,
                    t.prototype.toRestQueryStringParameters = function () {
                        var e, r = t.REST_QUERY_CONSTANTS_, i = {};
                        return this.isDefault() ? i : (this.index_ === jt ? e = r.PRIORITY_INDEX : this.index_ === ce ? e = r.VALUE_INDEX : this.index_ === kt ? e = r.KEY_INDEX : (n.assert(this.index_ instanceof pe, "Unrecognized index type!"),
                            e = this.index_.toString()),
                            i[r.ORDER_BY] = n.stringify(e),
                            this.startSet_ && (i[r.START_AT] = n.stringify(this.indexStartValue_),
                                this.startNameSet_ && (i[r.START_AT] += "," + n.stringify(this.indexStartName_))),
                            this.endSet_ && (i[r.END_AT] = n.stringify(this.indexEndValue_),
                                this.endNameSet_ && (i[r.END_AT] += "," + n.stringify(this.indexEndName_))),
                            this.limitSet_ && (this.isViewFromLeft() ? i[r.LIMIT_TO_FIRST] = this.limit_ : i[r.LIMIT_TO_LAST] = this.limit_),
                            i)
                    }
                    ,
                    t.WIRE_PROTOCOL_CONSTANTS_ = {
                        INDEX_START_VALUE: "sp",
                        INDEX_START_NAME: "sn",
                        INDEX_END_VALUE: "ep",
                        INDEX_END_NAME: "en",
                        LIMIT: "l",
                        VIEW_FROM: "vf",
                        VIEW_FROM_LEFT: "l",
                        VIEW_FROM_RIGHT: "r",
                        INDEX: "i"
                    },
                    t.REST_QUERY_CONSTANTS_ = {
                        ORDER_BY: "orderBy",
                        PRIORITY_INDEX: "$priority",
                        VALUE_INDEX: "$value",
                        KEY_INDEX: "$key",
                        START_AT: "startAt",
                        END_AT: "endAt",
                        LIMIT_TO_FIRST: "limitToFirst",
                        LIMIT_TO_LAST: "limitToLast"
                    },
                    t.DEFAULT = new t,
                    t
            }()
            , fr = function (t) {
                function e(e, n) {
                    if (!(e instanceof lr))
                        throw new Error("new Reference() no longer supported - use app.database().");
                    return t.call(this, e, n, dr.DEFAULT, !1) || this
                }
                return i.__extends(e, t),
                    e.prototype.getKey = function () {
                        return n.validateArgCount("Reference.key", 0, 0, arguments.length),
                            this.path.isEmpty() ? null : this.path.getBack()
                    }
                    ,
                    e.prototype.child = function (t) {
                        return n.validateArgCount("Reference.child", 1, 1, arguments.length),
                            "number" == typeof t ? t = String(t) : t instanceof H || (null === this.path.getFront() ? wt("Reference.child", 1, t, !1) : Et("Reference.child", 1, t, !1)),
                            new e(this.repo, this.path.child(t))
                    }
                    ,
                    e.prototype.getParent = function () {
                        n.validateArgCount("Reference.parent", 0, 0, arguments.length);
                        var t = this.path.parent();
                        return null === t ? null : new e(this.repo, t)
                    }
                    ,
                    e.prototype.getRoot = function () {
                        n.validateArgCount("Reference.root", 0, 0, arguments.length);
                        for (var t = this; null !== t.getParent();)
                            t = t.getParent();
                        return t
                    }
                    ,
                    e.prototype.databaseProp = function () {
                        return this.repo.database
                    }
                    ,
                    e.prototype.set = function (t, e) {
                        n.validateArgCount("Reference.set", 1, 2, arguments.length),
                            Tt("Reference.set", this.path),
                            ft("Reference.set", 1, t, this.path, !1),
                            n.validateCallback("Reference.set", 2, e, !0);
                        var r = new n.Deferred;
                        return this.repo.setWithPriority(this.path, t, null, r.wrapCallback(e)),
                            r.promise
                    }
                    ,
                    e.prototype.update = function (t, e) {
                        if (n.validateArgCount("Reference.update", 1, 2, arguments.length),
                            Tt("Reference.update", this.path),
                            Array.isArray(t)) {
                            for (var r = {}, i = 0; i < t.length; ++i)
                                r["" + i] = t[i];
                            t = r,
                                w("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                        }
                        vt("Reference.update", 1, t, this.path, !1),
                            n.validateCallback("Reference.update", 2, e, !0);
                        var o = new n.Deferred;
                        return this.repo.update(this.path, t, o.wrapCallback(e)),
                            o.promise
                    }
                    ,
                    e.prototype.setWithPriority = function (t, e, r) {
                        if (n.validateArgCount("Reference.setWithPriority", 2, 3, arguments.length),
                            Tt("Reference.setWithPriority", this.path),
                            ft("Reference.setWithPriority", 1, t, this.path, !1),
                            gt("Reference.setWithPriority", 2, e, !1),
                            n.validateCallback("Reference.setWithPriority", 3, r, !0),
                            ".length" === this.getKey() || ".keys" === this.getKey())
                            throw "Reference.setWithPriority failed: " + this.getKey() + " is a read-only object.";
                        var i = new n.Deferred;
                        return this.repo.setWithPriority(this.path, t, e, i.wrapCallback(r)),
                            i.promise
                    }
                    ,
                    e.prototype.remove = function (t) {
                        return n.validateArgCount("Reference.remove", 0, 1, arguments.length),
                            Tt("Reference.remove", this.path),
                            n.validateCallback("Reference.remove", 1, t, !0),
                            this.set(null, t)
                    }
                    ,
                    e.prototype.transaction = function (t, e, r) {
                        if (n.validateArgCount("Reference.transaction", 1, 3, arguments.length),
                            Tt("Reference.transaction", this.path),
                            n.validateCallback("Reference.transaction", 1, t, !1),
                            n.validateCallback("Reference.transaction", 2, e, !0),
                            St("Reference.transaction", 3, r, !0),
                            ".length" === this.getKey() || ".keys" === this.getKey())
                            throw "Reference.transaction failed: " + this.getKey() + " is a read-only object.";
                        void 0 === r && (r = !0);
                        var i = new n.Deferred;
                        "function" == typeof e && i.promise.catch(function () { });
                        return this.repo.startTransaction(this.path, t, function (t, n, r) {
                            t ? i.reject(t) : i.resolve(new It(n, r)),
                                "function" == typeof e && e(t, n, r)
                        }, r),
                            i.promise
                    }
                    ,
                    e.prototype.setPriority = function (t, e) {
                        n.validateArgCount("Reference.setPriority", 1, 2, arguments.length),
                            Tt("Reference.setPriority", this.path),
                            gt("Reference.setPriority", 1, t, !1),
                            n.validateCallback("Reference.setPriority", 2, e, !0);
                        var r = new n.Deferred;
                        return this.repo.setWithPriority(this.path.child(".priority"), t, null, r.wrapCallback(e)),
                            r.promise
                    }
                    ,
                    e.prototype.push = function (t, e) {
                        n.validateArgCount("Reference.push", 0, 2, arguments.length),
                            Tt("Reference.push", this.path),
                            ft("Reference.push", 1, t, this.path, !0),
                            n.validateCallback("Reference.push", 2, e, !0);
                        var r, i = this.repo.serverTime(), o = Rt(i), s = this.child(o), a = this.child(o);
                        return r = null != t ? s.set(t, e).then(function () {
                            return a
                        }) : Promise.resolve(a),
                            s.then = r.then.bind(r),
                            s.catch = r.then.bind(r, void 0),
                            "function" == typeof e && r.catch(function () { }),
                            s
                    }
                    ,
                    e.prototype.onDisconnect = function () {
                        return Tt("Reference.onDisconnect", this.path),
                            new Nt(this.repo, this.path)
                    }
                    ,
                    Object.defineProperty(e.prototype, "database", {
                        get: function () {
                            return this.databaseProp()
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "key", {
                        get: function () {
                            return this.getKey()
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "parent", {
                        get: function () {
                            return this.getParent()
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "root", {
                        get: function () {
                            return this.getRoot()
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    e
            }(ge);
        ge.__referenceConstructor = fr,
            Ke.__referenceConstructor = fr;
        var _r, yr = function () {
            return function () {
                this.children = {},
                    this.childCount = 0,
                    this.value = null
            }
        }(), vr = function () {
            function t(t, e, n) {
                void 0 === t && (t = ""),
                    void 0 === e && (e = null),
                    void 0 === n && (n = new yr),
                    this.name_ = t,
                    this.parent_ = e,
                    this.node_ = n
            }
            return t.prototype.subTree = function (e) {
                for (var r, i = e instanceof H ? e : new H(e), o = this; null !== (r = i.getFront());) {
                    o = new t(r, o, n.safeGet(o.node_.children, r) || new yr),
                        i = i.popFront()
                }
                return o
            }
                ,
                t.prototype.getValue = function () {
                    return this.node_.value
                }
                ,
                t.prototype.setValue = function (t) {
                    n.assert(void 0 !== t, "Cannot set value to undefined"),
                        this.node_.value = t,
                        this.updateParents_()
                }
                ,
                t.prototype.clear = function () {
                    this.node_.value = null,
                        this.node_.children = {},
                        this.node_.childCount = 0,
                        this.updateParents_()
                }
                ,
                t.prototype.hasChildren = function () {
                    return this.node_.childCount > 0
                }
                ,
                t.prototype.isEmpty = function () {
                    return null === this.getValue() && !this.hasChildren()
                }
                ,
                t.prototype.forEachChild = function (e) {
                    var r = this;
                    n.forEach(this.node_.children, function (n, i) {
                        e(new t(n, r, i))
                    })
                }
                ,
                t.prototype.forEachDescendant = function (t, e, n) {
                    e && !n && t(this),
                        this.forEachChild(function (e) {
                            e.forEachDescendant(t, !0, n)
                        }),
                        e && n && t(this)
                }
                ,
                t.prototype.forEachAncestor = function (t, e) {
                    for (var n = e ? this : this.parent(); null !== n;) {
                        if (t(n))
                            return !0;
                        n = n.parent()
                    }
                    return !1
                }
                ,
                t.prototype.forEachImmediateDescendantWithValue = function (t) {
                    this.forEachChild(function (e) {
                        null !== e.getValue() ? t(e) : e.forEachImmediateDescendantWithValue(t)
                    })
                }
                ,
                t.prototype.path = function () {
                    return new H(null === this.parent_ ? this.name_ : this.parent_.path() + "/" + this.name_)
                }
                ,
                t.prototype.name = function () {
                    return this.name_
                }
                ,
                t.prototype.parent = function () {
                    return this.parent_
                }
                ,
                t.prototype.updateParents_ = function () {
                    null !== this.parent_ && this.parent_.updateChild_(this.name_, this)
                }
                ,
                t.prototype.updateChild_ = function (t, e) {
                    var r = e.isEmpty()
                        , i = n.contains(this.node_.children, t);
                    r && i ? (delete this.node_.children[t],
                        this.node_.childCount--,
                        this.updateParents_()) : r || i || (this.node_.children[t] = e.node_,
                            this.node_.childCount++,
                            this.updateParents_())
                }
                ,
                t
        }();
        !function (t) {
            t[t.RUN = 0] = "RUN",
                t[t.SENT = 1] = "SENT",
                t[t.COMPLETED = 2] = "COMPLETED",
                t[t.SENT_NEEDS_ABORT = 3] = "SENT_NEEDS_ABORT",
                t[t.NEEDS_ABORT = 4] = "NEEDS_ABORT"
        }(_r || (_r = {})),
            lr.MAX_TRANSACTION_RETRIES_ = 25,
            lr.prototype.transactions_init_ = function () {
                this.transactionQueueTree_ = new vr
            }
            ,
            lr.prototype.startTransaction = function (t, e, r, i) {
                this.log_("transaction on " + t);
                var o = function () { }
                    , s = new fr(this, t);
                s.on("value", o);
                var a = {
                    path: t,
                    update: e,
                    onComplete: r,
                    status: null,
                    order: p(),
                    applyLocally: i,
                    retryCount: 0,
                    unwatcher: function () {
                        s.off("value", o)
                    },
                    abortReason: null,
                    currentWriteId: null,
                    currentInputSnapshot: null,
                    currentOutputSnapshotRaw: null,
                    currentOutputSnapshotResolved: null
                }
                    , h = this.getLatestState_(t);
                a.currentInputSnapshot = h;
                var u = a.update(h.val());
                if (void 0 === u) {
                    if (a.unwatcher(),
                        a.currentOutputSnapshotRaw = null,
                        a.currentOutputSnapshotResolved = null,
                        a.onComplete) {
                        var l = new de(a.currentInputSnapshot, new fr(this, a.path), jt);
                        a.onComplete(null, !1, l)
                    }
                } else {
                    _t("transaction failed: Data returned ", u, a.path),
                        a.status = _r.RUN;
                    var c = this.transactionQueueTree_.subTree(t)
                        , d = c.getValue() || [];
                    d.push(a),
                        c.setValue(d);
                    var f = void 0;
                    if ("object" == typeof u && null !== u && n.contains(u, ".priority"))
                        f = n.safeGet(u, ".priority"),
                            n.assert(dt(f), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");
                    else
                        f = (this.serverSyncTree_.calcCompleteEventCache(t) || re.EMPTY_NODE).getPriority().val();
                    f = f;
                    var _ = this.generateServerValues()
                        , y = ae(u, f)
                        , v = be(y, _);
                    a.currentOutputSnapshotRaw = y,
                        a.currentOutputSnapshotResolved = v,
                        a.currentWriteId = this.getNextWriteId_();
                    var g = this.serverSyncTree_.applyUserOverwrite(t, v, a.currentWriteId, a.applyLocally);
                    this.eventQueue_.raiseEventsForChangedPath(t, g),
                        this.sendReadyTransactions_()
                }
            }
            ,
            lr.prototype.getLatestState_ = function (t, e) {
                return this.serverSyncTree_.calcCompleteEventCache(t, e) || re.EMPTY_NODE
            }
            ,
            lr.prototype.sendReadyTransactions_ = function (t) {
                var e = this;
                if (void 0 === t && (t = this.transactionQueueTree_),
                    t || this.pruneCompletedTransactionsBelowNode_(t),
                    null !== t.getValue()) {
                    var r = this.buildTransactionQueue_(t);
                    n.assert(r.length > 0, "Sending zero length transaction queue"),
                        r.every(function (t) {
                            return t.status === _r.RUN
                        }) && this.sendTransactionQueue_(t.path(), r)
                } else
                    t.hasChildren() && t.forEachChild(function (t) {
                        e.sendReadyTransactions_(t)
                    })
            }
            ,
            lr.prototype.sendTransactionQueue_ = function (t, e) {
                for (var r = this, i = e.map(function (t) {
                    return t.currentWriteId
                }), o = this.getLatestState_(t, i), s = o, a = o.hash(), h = 0; h < e.length; h++) {
                    var u = e[h];
                    n.assert(u.status === _r.RUN, "tryToSendTransactionQueue_: items in queue should all be run."),
                        u.status = _r.SENT,
                        u.retryCount++;
                    var l = H.relativePath(t, u.path);
                    s = s.updateChild(l, u.currentOutputSnapshotRaw)
                }
                var c = s.val(!0)
                    , p = t;
                this.server_.put(p.toString(), c, function (n) {
                    r.log_("transaction put response", {
                        path: p.toString(),
                        status: n
                    });
                    var i = [];
                    if ("ok" === n) {
                        for (var o = [], s = 0; s < e.length; s++) {
                            if (e[s].status = _r.COMPLETED,
                                i = i.concat(r.serverSyncTree_.ackUserWrite(e[s].currentWriteId)),
                                e[s].onComplete) {
                                var a = e[s].currentOutputSnapshotResolved
                                    , h = new fr(r, e[s].path)
                                    , u = new de(a, h, jt);
                                o.push(e[s].onComplete.bind(null, null, !0, u))
                            }
                            e[s].unwatcher()
                        }
                        r.pruneCompletedTransactionsBelowNode_(r.transactionQueueTree_.subTree(t)),
                            r.sendReadyTransactions_(),
                            r.eventQueue_.raiseEventsForChangedPath(t, i);
                        for (s = 0; s < o.length; s++)
                            Q(o[s])
                    } else {
                        if ("datastale" === n)
                            for (s = 0; s < e.length; s++)
                                e[s].status === _r.SENT_NEEDS_ABORT ? e[s].status = _r.NEEDS_ABORT : e[s].status = _r.RUN;
                        else {
                            w("transaction at " + p.toString() + " failed: " + n);
                            for (s = 0; s < e.length; s++)
                                e[s].status = _r.NEEDS_ABORT,
                                    e[s].abortReason = n
                        }
                        r.rerunTransactions_(t)
                    }
                }, a)
            }
            ,
            lr.prototype.rerunTransactions_ = function (t) {
                var e = this.getAncestorTransactionNode_(t)
                    , n = e.path()
                    , r = this.buildTransactionQueue_(e);
                return this.rerunTransactionQueue_(r, n),
                    n
            }
            ,
            lr.prototype.rerunTransactionQueue_ = function (t, e) {
                if (0 !== t.length) {
                    for (var r, i = [], o = [], s = t.filter(function (t) {
                        return t.status === _r.RUN
                    }).map(function (t) {
                        return t.currentWriteId
                    }), a = 0; a < t.length; a++) {
                        var h = t[a]
                            , u = H.relativePath(e, h.path)
                            , l = !1
                            , c = void 0;
                        if (n.assert(null !== u, "rerunTransactionsUnderNode_: relativePath should not be null."),
                            h.status === _r.NEEDS_ABORT)
                            l = !0,
                                c = h.abortReason,
                                o = o.concat(this.serverSyncTree_.ackUserWrite(h.currentWriteId, !0));
                        else if (h.status === _r.RUN)
                            if (h.retryCount >= lr.MAX_TRANSACTION_RETRIES_)
                                l = !0,
                                    c = "maxretry",
                                    o = o.concat(this.serverSyncTree_.ackUserWrite(h.currentWriteId, !0));
                            else {
                                var p = this.getLatestState_(h.path, s);
                                h.currentInputSnapshot = p;
                                var d = t[a].update(p.val());
                                if (void 0 !== d) {
                                    _t("transaction failed: Data returned ", d, h.path);
                                    var f = ae(d);
                                    "object" == typeof d && null != d && n.contains(d, ".priority") || (f = f.updatePriority(p.getPriority()));
                                    var _ = h.currentWriteId
                                        , y = this.generateServerValues()
                                        , v = be(f, y);
                                    h.currentOutputSnapshotRaw = f,
                                        h.currentOutputSnapshotResolved = v,
                                        h.currentWriteId = this.getNextWriteId_(),
                                        s.splice(s.indexOf(_), 1),
                                        o = (o = o.concat(this.serverSyncTree_.applyUserOverwrite(h.path, v, h.currentWriteId, h.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(_, !0))
                                } else
                                    l = !0,
                                        c = "nodata",
                                        o = o.concat(this.serverSyncTree_.ackUserWrite(h.currentWriteId, !0))
                            }
                        if (this.eventQueue_.raiseEventsForChangedPath(e, o),
                            o = [],
                            l && (t[a].status = _r.COMPLETED,
                                r = t[a].unwatcher,
                                setTimeout(r, Math.floor(0)),
                                t[a].onComplete))
                            if ("nodata" === c) {
                                var g = new fr(this, t[a].path)
                                    , m = t[a].currentInputSnapshot
                                    , C = new de(m, g, jt);
                                i.push(t[a].onComplete.bind(null, null, !1, C))
                            } else
                                i.push(t[a].onComplete.bind(null, new Error(c), !1, null))
                    }
                    this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
                    for (a = 0; a < i.length; a++)
                        Q(i[a]);
                    this.sendReadyTransactions_()
                }
            }
            ,
            lr.prototype.getAncestorTransactionNode_ = function (t) {
                for (var e, n = this.transactionQueueTree_; null !== (e = t.getFront()) && null === n.getValue();)
                    n = n.subTree(e),
                        t = t.popFront();
                return n
            }
            ,
            lr.prototype.buildTransactionQueue_ = function (t) {
                var e = [];
                return this.aggregateTransactionQueuesForNode_(t, e),
                    e.sort(function (t, e) {
                        return t.order - e.order
                    }),
                    e
            }
            ,
            lr.prototype.aggregateTransactionQueuesForNode_ = function (t, e) {
                var n = this
                    , r = t.getValue();
                if (null !== r)
                    for (var i = 0; i < r.length; i++)
                        e.push(r[i]);
                t.forEachChild(function (t) {
                    n.aggregateTransactionQueuesForNode_(t, e)
                })
            }
            ,
            lr.prototype.pruneCompletedTransactionsBelowNode_ = function (t) {
                var e = this
                    , n = t.getValue();
                if (n) {
                    for (var r = 0, i = 0; i < n.length; i++)
                        n[i].status !== _r.COMPLETED && (n[r] = n[i],
                            r++);
                    n.length = r,
                        t.setValue(n.length > 0 ? n : null)
                }
                t.forEachChild(function (t) {
                    e.pruneCompletedTransactionsBelowNode_(t)
                })
            }
            ,
            lr.prototype.abortTransactions_ = function (t) {
                var e = this
                    , n = this.getAncestorTransactionNode_(t).path()
                    , r = this.transactionQueueTree_.subTree(t);
                return r.forEachAncestor(function (t) {
                    e.abortTransactionsOnNode_(t)
                }),
                    this.abortTransactionsOnNode_(r),
                    r.forEachDescendant(function (t) {
                        e.abortTransactionsOnNode_(t)
                    }),
                    n
            }
            ,
            lr.prototype.abortTransactionsOnNode_ = function (t) {
                var e = t.getValue();
                if (null !== e) {
                    for (var r = [], i = [], o = -1, s = 0; s < e.length; s++)
                        if (e[s].status === _r.SENT_NEEDS_ABORT)
                            ;
                        else if (e[s].status === _r.SENT)
                            n.assert(o === s - 1, "All SENT items should be at beginning of queue."),
                                o = s,
                                e[s].status = _r.SENT_NEEDS_ABORT,
                                e[s].abortReason = "set";
                        else if (n.assert(e[s].status === _r.RUN, "Unexpected transaction status in abort"),
                            e[s].unwatcher(),
                            i = i.concat(this.serverSyncTree_.ackUserWrite(e[s].currentWriteId, !0)),
                            e[s].onComplete) {
                            r.push(e[s].onComplete.bind(null, new Error("set"), !1, null))
                        }
                    -1 === o ? t.setValue(null) : e.length = o + 1,
                        this.eventQueue_.raiseEventsForChangedPath(t.path(), i);
                    for (s = 0; s < r.length; s++)
                        Q(r[s])
                }
            }
            ;
        var gr, mr = "databaseURL", Cr = function () {
            function t() {
                this.repos_ = {},
                    this.useRestClient_ = !1
            }
            return t.getInstance = function () {
                return gr || (gr = new t),
                    gr
            }
                ,
                t.prototype.interrupt = function () {
                    for (var t in this.repos_)
                        for (var e in this.repos_[t])
                            this.repos_[t][e].interrupt()
                }
                ,
                t.prototype.resume = function () {
                    for (var t in this.repos_)
                        for (var e in this.repos_[t])
                            this.repos_[t][e].resume()
                }
                ,
                t.prototype.databaseFromApp = function (t, e) {
                    var n = e || t.options[mr];
                    void 0 === n && E("Can't determine Firebase Database URL.  Be sure to include " + mr + " option when calling firebase.initializeApp().");
                    var r = ot(n)
                        , i = r.repoInfo;
                    return bt("Invalid Firebase Database URL", 1, r),
                        r.path.isEmpty() || E("Database URL must point to the root of a Firebase Database (not including a child path)."),
                        this.createRepo(i, t).database
                }
                ,
                t.prototype.deleteRepo = function (t) {
                    var e = n.safeGet(this.repos_, t.app.name);
                    e && n.safeGet(e, t.repoInfo_.toURLString()) === t || E("Database " + t.app.name + "(" + t.repoInfo_ + ") has already been deleted."),
                        t.interrupt(),
                        delete e[t.repoInfo_.toURLString()]
                }
                ,
                t.prototype.createRepo = function (t, e) {
                    var r = n.safeGet(this.repos_, e.name);
                    r || (r = {},
                        this.repos_[e.name] = r);
                    var i = n.safeGet(r, t.toURLString());
                    return i && E("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),
                        i = new lr(t, this.useRestClient_, e),
                        r[t.toURLString()] = i,
                        i
                }
                ,
                t.prototype.forceRestClient = function (t) {
                    this.useRestClient_ = t
                }
                ,
                t
        }(), Er = function () {
            function t(t) {
                this.repo_ = t,
                    t instanceof lr || E("Don't call new Database() directly - please use firebase.database()."),
                    this.root_ = new fr(t, H.Empty),
                    this.INTERNAL = new wr(this)
            }
            return Object.defineProperty(t.prototype, "app", {
                get: function () {
                    return this.repo_.app
                },
                enumerable: !0,
                configurable: !0
            }),
                t.prototype.ref = function (t) {
                    return this.checkDeleted_("ref"),
                        n.validateArgCount("database.ref", 0, 1, arguments.length),
                        t instanceof fr ? this.refFromURL(t.toString()) : void 0 !== t ? this.root_.child(t) : this.root_
                }
                ,
                t.prototype.refFromURL = function (t) {
                    var e = "database.refFromURL";
                    this.checkDeleted_(e),
                        n.validateArgCount(e, 1, 1, arguments.length);
                    var r = ot(t);
                    bt(e, 1, r);
                    var i = r.repoInfo;
                    return i.host !== this.repo_.repoInfo_.host && E(e + ": Host name does not match the current database: (found " + i.host + " but expected " + this.repo_.repoInfo_.host + ")"),
                        this.ref(r.path.toString())
                }
                ,
                t.prototype.checkDeleted_ = function (t) {
                    null === this.repo_ && E("Cannot call " + t + " on a deleted database.")
                }
                ,
                t.prototype.goOffline = function () {
                    n.validateArgCount("database.goOffline", 0, 0, arguments.length),
                        this.checkDeleted_("goOffline"),
                        this.repo_.interrupt()
                }
                ,
                t.prototype.goOnline = function () {
                    n.validateArgCount("database.goOnline", 0, 0, arguments.length),
                        this.checkDeleted_("goOnline"),
                        this.repo_.resume()
                }
                ,
                t.ServerValue = {
                    TIMESTAMP: {
                        ".sv": "timestamp"
                    }
                },
                t
        }(), wr = function () {
            function t(t) {
                this.database = t
            }
            return t.prototype.delete = function () {
                return i.__awaiter(this, void 0, void 0, function () {
                    return i.__generator(this, function (t) {
                        return this.database.checkDeleted_("delete"),
                            Cr.getInstance().deleteRepo(this.database.repo_),
                            this.database.repo_ = null,
                            this.database.root_ = null,
                            this.database.INTERNAL = null,
                            this.database = null,
                            [2]
                    })
                })
            }
                ,
                t
        }(), Tr = function () {
            Ln.forceDisallow(),
                xn.forceAllow()
        }, br = function () {
            xn.forceDisallow()
        }, Sr = function () {
            return Ln.isAvailable()
        }, Nr = function (t, e) {
            t.repo.persistentConnection_.securityDebugCallback_ = e
        }, Ir = function (t, e) {
            t.repo.stats(e)
        }, Rr = function (t, e) {
            t.repo.statsIncrementCounter(e)
        }, Pr = function (t) {
            return t.repo.dataUpdateCount
        }, Dr = function (t, e) {
            return t.repo.interceptServerData_(e)
        }, xr = Object.freeze({
            forceLongPolling: Tr,
            forceWebSockets: br,
            isWebSocketsAvailable: Sr,
            setSecurityDebugCallback: Nr,
            stats: Ir,
            statsIncrementCounter: Rr,
            dataUpdateCount: Pr,
            interceptServerData: Dr
        }), kr = ar;
        ar.prototype.simpleListen = function (t, e) {
            this.sendRequest("q", {
                p: t
            }, e)
        }
            ,
            ar.prototype.echo = function (t, e) {
                this.sendRequest("echo", {
                    d: t
                }, e)
            }
            ;
        var Or = Jn
            , Fr = function (t) {
                var e = ar.prototype.put;
                return ar.prototype.put = function (n, r, i, o) {
                    void 0 !== o && (o = t()),
                        e.call(this, n, r, i, o)
                }
                    ,
                    function () {
                        ar.prototype.put = e
                    }
            }
            , Ar = tt
            , Lr = function (t) {
                return t.queryIdentifier()
            }
            , Mr = function (t) {
                return t.repo.persistentConnection_.listens_
            }
            , Wr = function (t) {
                Cr.getInstance().forceRestClient(t)
            }
            , qr = Object.freeze({
                DataConnection: kr,
                RealTimeConnection: Or,
                hijackHash: Fr,
                ConnectionTarget: Ar,
                queryIdentifier: Lr,
                listens: Mr,
                forceRestClient: Wr
            })
            , Qr = Er.ServerValue;
        function Ur(t) {
            var e = t.INTERNAL.registerService("database", function (t, e, n) {
                return Cr.getInstance().databaseFromApp(t, n)
            }, {
                Reference: fr,
                Query: ge,
                Database: Er,
                enableLogging: v,
                INTERNAL: xr,
                ServerValue: Qr,
                TEST_ACCESS: qr
            }, null, !0);
            n.isNodeSdk() && (module.exports = e)
        }
        Ur(o),
            exports.registerDatabase = Ur,
            exports.Database = Er,
            exports.Query = ge,
            exports.Reference = fr,
            exports.enableLogging = v,
            exports.ServerValue = Qr,
            exports.DataSnapshot = de,
            exports.OnDisconnect = Nt;
    }
        , {
        "@firebase/util": "58xA",
        "@firebase/logger": "TUpU",
        "tslib": "vCxL",
        "@firebase/app": "dP58",
        "process": "pBGv"
    }],
    "Uuoh": [function (require, module, exports) {
        "use strict";
        require("@firebase/database");
    }
        , {
        "@firebase/database": "2vmM"
    }],
    "PizS": [function (require, module, exports) {
        "use strict";
        var e = a(require("firebase/app"));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        require("firebase/database");
        var t = {
            apiKey: "AIzaSyBtF6UvkTZw5zD5vsmzdE46a92xA4aBbyk",
            authDomain: "instgrm-example.firebaseapp.com",
            databaseURL: "https://instgrm-example.firebaseio.com",
            projectId: "instgrm-example",
            storageBucket: "instgrm-example.appspot.com",
            messagingSenderId: "1002808885677"
        };
        e.default.apps.length || e.default.initializeApp(t);
        var s = e.default.database();
        s.ref("users").set({
            name: "Bond, James Bond"
        });
    }
        , {
        "firebase/app": "ZUoI",
        "firebase/database": "Uuoh"
    }],
    "6Hyr": [function (require, module, exports) {
    }
        , {
        "dog.jpg": [["dog.jpg", "nnfu"], "nnfu"]
    }],
    "wS45": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
            exports.likesCount = exports.commentCard = exports.commentInput = exports.verticalLine = exports.logoTitle = exports.header = exports.likeHeart = void 0;
        var e = document.querySelector(".header-nav ");
        exports.header = e;
        var t = document.querySelector(".logo-group__title");
        exports.logoTitle = t;
        var r = document.querySelector(".vertical-line");
        exports.verticalLine = r;
        var o = document.querySelector(".comment-input");
        exports.commentInput = o;
        var c = document.querySelector(".card__comments");
        exports.commentCard = c;
        var l = document.querySelector(".like-heart");
        exports.likeHeart = l;
        var n = document.querySelector(".likes-count");
        exports.likesCount = n;
    }
        , {}],
    "rHhB": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
            exports.renderComments = exports.renderLikes = void 0;
        var e = require("./constants")
            , t = function (t) {
                t.liked && e.likeHeart.classList.toggle("like-heart--active"),
                    e.likesCount.textContent = t.likes
            };
        exports.renderLikes = t;
        var n = function (t) {
            e.commentCard.innerHTML = "",
                t.forEach(function (t) {
                    var n = document.createElement("div");
                    n.setAttribute("class", "card__comments_comment"),
                        n.innerHTML = '<span class="bold">'.concat(t.author, "</span> ").concat(t.message),
                        e.commentCard.appendChild(n)
                })
        };
        exports.renderComments = n;
    }
        , {
        "./constants": "wS45"
    }],
    "Kmjh": [function (require, module, exports) {
        "use strict";
        function e(e) {
            for (var r = 1; r < arguments.length; r++) {
                var o = null != arguments[r] ? arguments[r] : {}
                    , n = Object.keys(o);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable
                }))),
                    n.forEach(function (r) {
                        t(e, r, o[r])
                    })
            }
            return e
        }
        function t(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
                e
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }),
            exports.getFromLocalStorage = exports.saveLocalStorage = void 0;
        var r = function (e) {
            localStorage.setItem("state", JSON.stringify(e))
        };
        exports.saveLocalStorage = r;
        var o = function (t) {
            var r = localStorage.getItem("state");
            return e({}, t, JSON.parse(r))
        };
        exports.getFromLocalStorage = o;
    }
        , {}],
    "A2T1": [function (require, module, exports) {
        "use strict";
        require("../firebase.js"),
            require("./styles/styles.scss");
        var e = require("./components/constants")
            , t = require("./components/functions")
            , r = require("./components/local-storage");
        function n(e) {
            return a(e) || i(e) || o()
        }
        function o() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
        function i(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                return Array.from(e)
        }
        function a(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = new Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                return r
            }
        }
        var s = {
            liked: !1,
            likes: 0,
            msgArr: []
        }
            , l = (0,
                r.getFromLocalStorage)(s);
        e.likeHeart.addEventListener("click", function () {
            e.likeHeart.classList.toggle("like-heart--active"),
                l.liked ? (l.liked = !1,
                    l.likes--) : (l.liked = !0,
                        l.likes++),
                e.likesCount.textContent = l.likes,
                (0,
                    r.saveLocalStorage)(l)
        }),
            window.addEventListener("scroll", function () {
                window.scrollY > 50 ? (e.header.style.height = "52px",
                    [e.verticalLine, e.logoTitle].forEach(function (e) {
                        return e.style.opacity = "0"
                    })) : (e.header.style.height = "77px",
                        [e.verticalLine, e.logoTitle].forEach(function (e) {
                            return e.style.opacity = "1"
                        }))
            }),
            e.commentInput.addEventListener("keypress", function (o) {
                if ("Enter" === o.key) {
                    var i = o.target.value
                        , a = prompt("enter your name");
                    if (a.trim().length < 1 || i.trim().length < 1)
                        return alert("please provides author name and message text"),
                            null;
                    l.msgArr = n(l.msgArr).concat([{
                        message: i,
                        author: a
                    }]),
                        (0,
                            r.saveLocalStorage)(l),
                        (0,
                            t.renderComments)(l.msgArr),
                        e.commentInput.value = ""
                }
            });
        var c = function () {
            (0,
                t.renderComments)(l.msgArr),
                (0,
                    t.renderLikes)(l)
        };
        c();
    }
        , {
        "../firebase.js": "PizS",
        "./styles/styles.scss": "6Hyr",
        "./components/constants": "wS45",
        "./components/functions": "rHhB",
        "./components/local-storage": "Kmjh"
    }]
}, {}, ["A2T1"], null)
