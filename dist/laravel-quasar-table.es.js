var He = Object.defineProperty;
var Ie = (e, t, r) => t in e ? He(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var S = (e, t, r) => (Ie(e, typeof t != "symbol" ? t + "" : t, r), r);
function ye(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: qe } = Object.prototype, { getPrototypeOf: Y } = Object, I = ((e) => (t) => {
  const r = qe.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), T = (e) => (e = e.toLowerCase(), (t) => I(t) === e), q = (e) => (t) => typeof t === e, { isArray: C } = Array, B = q("undefined");
function Me(e) {
  return e !== null && !B(e) && e.constructor !== null && !B(e.constructor) && O(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const we = T("ArrayBuffer");
function ze(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && we(e.buffer), t;
}
const Je = q("string"), O = q("function"), be = q("number"), M = (e) => e !== null && typeof e == "object", $e = (e) => e === !0 || e === !1, U = (e) => {
  if (I(e) !== "object")
    return !1;
  const t = Y(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ve = T("Date"), We = T("File"), Ke = T("Blob"), Ge = T("FileList"), Xe = (e) => M(e) && O(e.pipe), ve = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || O(e.append) && ((t = I(e)) === "formdata" || // detect form-data instance
  t === "object" && O(e.toString) && e.toString() === "[object FormData]"));
}, Qe = T("URLSearchParams"), Ze = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function D(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), C(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let u;
    for (n = 0; n < i; n++)
      u = o[n], t.call(null, e[u], u, e);
  }
}
function Ee(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const Se = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Re = (e) => !B(e) && e !== Se;
function G() {
  const { caseless: e } = Re(this) && this || {}, t = {}, r = (n, s) => {
    const o = e && Ee(t, s) || s;
    U(t[o]) && U(n) ? t[o] = G(t[o], n) : U(n) ? t[o] = G({}, n) : C(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && D(arguments[n], r);
  return t;
}
const Ye = (e, t, r, { allOwnKeys: n } = {}) => (D(t, (s, o) => {
  r && O(s) ? e[o] = ye(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), et = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), tt = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, nt = (e, t, r, n) => {
  let s, o, i;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!n || n(i, e, t)) && !u[i] && (t[i] = e[i], u[i] = !0);
    e = r !== !1 && Y(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, rt = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, st = (e) => {
  if (!e)
    return null;
  if (C(e))
    return e;
  let t = e.length;
  if (!be(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ot = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Y(Uint8Array)), it = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, at = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, ct = T("HTMLFormElement"), ut = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), oe = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), lt = T("RegExp"), Oe = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  D(r, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (n[o] = i || s);
  }), Object.defineProperties(e, n);
}, ft = (e) => {
  Oe(e, (t, r) => {
    if (O(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (O(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, dt = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return C(e) ? n(e) : n(String(e).split(t)), r;
}, ht = () => {
}, pt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), $ = "abcdefghijklmnopqrstuvwxyz", ie = "0123456789", Ae = {
  DIGIT: ie,
  ALPHA: $,
  ALPHA_DIGIT: $ + $.toUpperCase() + ie
}, mt = (e = 16, t = Ae.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function yt(e) {
  return !!(e && O(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const wt = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (M(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = C(n) ? [] : {};
        return D(n, (i, u) => {
          const h = r(i, s + 1);
          !B(h) && (o[u] = h);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, bt = T("AsyncFunction"), Et = (e) => e && (M(e) || O(e)) && O(e.then) && O(e.catch), a = {
  isArray: C,
  isArrayBuffer: we,
  isBuffer: Me,
  isFormData: ve,
  isArrayBufferView: ze,
  isString: Je,
  isNumber: be,
  isBoolean: $e,
  isObject: M,
  isPlainObject: U,
  isUndefined: B,
  isDate: Ve,
  isFile: We,
  isBlob: Ke,
  isRegExp: lt,
  isFunction: O,
  isStream: Xe,
  isURLSearchParams: Qe,
  isTypedArray: ot,
  isFileList: Ge,
  forEach: D,
  merge: G,
  extend: Ye,
  trim: Ze,
  stripBOM: et,
  inherits: tt,
  toFlatObject: nt,
  kindOf: I,
  kindOfTest: T,
  endsWith: rt,
  toArray: st,
  forEachEntry: it,
  matchAll: at,
  isHTMLForm: ct,
  hasOwnProperty: oe,
  hasOwnProp: oe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Oe,
  freezeMethods: ft,
  toObjectSet: dt,
  toCamelCase: ut,
  noop: ht,
  toFiniteNumber: pt,
  findKey: Ee,
  global: Se,
  isContextDefined: Re,
  ALPHABET: Ae,
  generateString: mt,
  isSpecCompliantForm: yt,
  toJSONObject: wt,
  isAsyncFn: bt,
  isThenable: Et
};
function m(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Te = m.prototype, ge = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ge[e] = { value: e };
});
Object.defineProperties(m, ge);
Object.defineProperty(Te, "isAxiosError", { value: !0 });
m.from = (e, t, r, n, s, o) => {
  const i = Object.create(Te);
  return a.toFlatObject(e, i, function(h) {
    return h !== Error.prototype;
  }, (u) => u !== "isAxiosError"), m.call(i, e.message, t, r, n, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const St = null;
function X(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Fe(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ae(e, t, r) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Fe(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Rt(e) {
  return a.isArray(e) && !e.some(X);
}
const Ot = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function z(e, t, r) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = a.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(d, b) {
    return !a.isUndefined(b[d]);
  });
  const n = r.metaTokens, s = r.visitor || l, o = r.dots, i = r.indexes, h = (r.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function p(f) {
    if (f === null)
      return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!h && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? h && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, d, b) {
    let E = f;
    if (f && !b && typeof f == "object") {
      if (a.endsWith(d, "{}"))
        d = n ? d : d.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && Rt(f) || (a.isFileList(f) || a.endsWith(d, "[]")) && (E = a.toArray(f)))
        return d = Fe(d), E.forEach(function(P, je) {
          !(a.isUndefined(P) || P === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ae([d], je, o) : i === null ? d : d + "[]",
            p(P)
          );
        }), !1;
    }
    return X(f) ? !0 : (t.append(ae(b, d, o), p(f)), !1);
  }
  const c = [], w = Object.assign(Ot, {
    defaultVisitor: l,
    convertValue: p,
    isVisitable: X
  });
  function R(f, d) {
    if (!a.isUndefined(f)) {
      if (c.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      c.push(f), a.forEach(f, function(E, F) {
        (!(a.isUndefined(E) || E === null) && s.call(
          t,
          E,
          a.isString(F) ? F.trim() : F,
          d,
          w
        )) === !0 && R(E, d ? d.concat(F) : [F]);
      }), c.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return R(e), t;
}
function ce(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function ee(e, t) {
  this._pairs = [], e && z(e, this, t);
}
const Pe = ee.prototype;
Pe.append = function(t, r) {
  this._pairs.push([t, r]);
};
Pe.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ce);
  } : ce;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function At(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ne(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || At, s = r && r.serialize;
  let o;
  if (s ? o = s(t, r) : o = a.isURLSearchParams(t) ? t.toString() : new ee(t, r).toString(n), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Tt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ue = Tt, xe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gt = typeof URLSearchParams < "u" ? URLSearchParams : ee, Ft = typeof FormData < "u" ? FormData : null, Pt = typeof Blob < "u" ? Blob : null, Nt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gt,
    FormData: Ft,
    Blob: Pt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ce = typeof window < "u" && typeof document < "u", xt = ((e) => Ce && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Ct = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ce,
  hasStandardBrowserEnv: xt,
  hasStandardBrowserWebWorkerEnv: Ct
}, Symbol.toStringTag, { value: "Module" })), A = {
  ..._t,
  ...Nt
};
function Bt(e, t) {
  return z(e, new A.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, o) {
      return A.isNode && a.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Dt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Lt(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let o;
  for (n = 0; n < s; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function _e(e) {
  function t(r, n, s, o) {
    let i = r[o++];
    if (i === "__proto__")
      return !0;
    const u = Number.isFinite(+i), h = o >= r.length;
    return i = !i && a.isArray(s) ? s.length : i, h ? (a.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !u) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(r, n, s[i], o) && a.isArray(s[i]) && (s[i] = Lt(s[i])), !u);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const r = {};
    return a.forEachEntry(e, (n, s) => {
      t(Dt(n), s, r, 0);
    }), r;
  }
  return null;
}
function Ut(e, t, r) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const te = {
  transitional: xe,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(_e(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Bt(t, this.formSerializer).toString();
      if ((u = a.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return z(
          u ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || s ? (r.setContentType("application/json", !1), Ut(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || te.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (n && !this.responseType || s)) {
      const i = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (i)
          throw u.name === "SyntaxError" ? m.from(u, m.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  te.headers[e] = {};
});
const ne = te, kt = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), jt = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), r = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim(), !(!r || t[r] && kt[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, le = Symbol("internals");
function _(e) {
  return e && String(e).trim().toLowerCase();
}
function k(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(k) : String(e);
}
function Ht(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const It = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function V(e, t, r, n, s) {
  if (a.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!a.isString(t)) {
    if (a.isString(n))
      return t.indexOf(n) !== -1;
    if (a.isRegExp(n))
      return n.test(t);
  }
}
function qt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Mt(e, t) {
  const r = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, o, i) {
        return this[n].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class J {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function o(u, h, p) {
      const l = _(h);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const c = a.findKey(s, l);
      (!c || s[c] === void 0 || p === !0 || p === void 0 && s[c] !== !1) && (s[c || h] = k(u));
    }
    const i = (u, h) => a.forEach(u, (p, l) => o(p, l, h));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, r) : a.isString(t) && (t = t.trim()) && !It(t) ? i(jt(t), r) : t != null && o(r, t, n), this;
  }
  get(t, r) {
    if (t = _(t), t) {
      const n = a.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Ht(s);
        if (a.isFunction(r))
          return r.call(this, s, n);
        if (a.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = _(t), t) {
      const n = a.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || V(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function o(i) {
      if (i = _(i), i) {
        const u = a.findKey(n, i);
        u && (!r || V(n, n[u], u, r)) && (delete n[u], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || V(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(n, o);
      if (i) {
        r[i] = k(s), delete r[o];
        return;
      }
      const u = t ? qt(o) : String(o).trim();
      u !== o && delete r[o], r[u] = k(s), n[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && a.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[le] = this[le] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const u = _(i);
      n[u] || (Mt(s, i), n[u] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
J.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(J.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
a.freezeMethods(J);
const g = J;
function W(e, t) {
  const r = this || ne, n = t || r, s = g.from(n.headers);
  let o = n.data;
  return a.forEach(e, function(u) {
    o = u.call(r, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Be(e) {
  return !!(e && e.__CANCEL__);
}
function L(e, t, r) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, r), this.name = "CanceledError";
}
a.inherits(L, m, {
  __CANCEL__: !0
});
function zt(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new m(
    "Request failed with status code " + r.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Jt = A.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), a.isString(n) && i.push("path=" + n), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function $t(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Vt(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function De(e, t) {
  return e && !$t(t) ? Vt(e, t) : t;
}
const Wt = A.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function s(o) {
      let i = o;
      return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = s(window.location.href), function(i) {
      const u = a.isString(i) ? s(i) : i;
      return u.protocol === n.protocol && u.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Kt(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Gt(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const p = Date.now(), l = n[o];
    i || (i = p), r[s] = h, n[s] = p;
    let c = o, w = 0;
    for (; c !== s; )
      w += r[c++], c = c % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), p - i < t)
      return;
    const R = l && p - l;
    return R ? Math.round(w * 1e3 / R) : void 0;
  };
}
function fe(e, t) {
  let r = 0;
  const n = Gt(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, u = o - r, h = n(u), p = o <= i;
    r = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: u,
      rate: h || void 0,
      estimated: h && i && p ? (i - o) / h : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Xt = typeof XMLHttpRequest < "u", vt = Xt && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const o = g.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: u } = e, h;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(h), e.signal && e.signal.removeEventListener("abort", h);
    }
    let l;
    if (a.isFormData(s)) {
      if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((l = o.getContentType()) !== !1) {
        const [d, ...b] = l ? l.split(";").map((E) => E.trim()).filter(Boolean) : [];
        o.setContentType([d || "multipart/form-data", ...b].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const d = e.auth.username || "", b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(d + ":" + b));
    }
    const w = De(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Ne(w, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function R() {
      if (!c)
        return;
      const d = g.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), E = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: d,
        config: e,
        request: c
      };
      zt(function(P) {
        r(P), p();
      }, function(P) {
        n(P), p();
      }, E), c = null;
    }
    if ("onloadend" in c ? c.onloadend = R : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, c.onabort = function() {
      c && (n(new m("Request aborted", m.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new m("Network Error", m.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const E = e.transitional || xe;
      e.timeoutErrorMessage && (b = e.timeoutErrorMessage), n(new m(
        b,
        E.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        c
      )), c = null;
    }, A.hasStandardBrowserEnv && (u && a.isFunction(u) && (u = u(e)), u || u !== !1 && Wt(w))) {
      const d = e.xsrfHeaderName && e.xsrfCookieName && Jt.read(e.xsrfCookieName);
      d && o.set(e.xsrfHeaderName, d);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && a.forEach(o.toJSON(), function(b, E) {
      c.setRequestHeader(E, b);
    }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", fe(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", fe(e.onUploadProgress)), (e.cancelToken || e.signal) && (h = (d) => {
      c && (n(!d || d.type ? new L(null, e, c) : d), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(h), e.signal && (e.signal.aborted ? h() : e.signal.addEventListener("abort", h)));
    const f = Kt(w);
    if (f && A.protocols.indexOf(f) === -1) {
      n(new m("Unsupported protocol " + f + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, v = {
  http: St,
  xhr: vt
};
a.forEach(v, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const de = (e) => `- ${e}`, Qt = (e) => a.isFunction(e) || e === null || e === !1, Le = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let i;
      if (n = r, !Qt(r) && (n = v[(i = String(r)).toLowerCase()], n === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (n)
        break;
      s[i || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(s).map(
        ([u, h]) => `adapter ${u} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(de).join(`
`) : " " + de(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: v
};
function K(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new L(null, e);
}
function he(e) {
  return K(e), e.headers = g.from(e.headers), e.data = W.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Le.getAdapter(e.adapter || ne.adapter)(e).then(function(n) {
    return K(e), n.data = W.call(
      e,
      e.transformResponse,
      n
    ), n.headers = g.from(n.headers), n;
  }, function(n) {
    return Be(n) || (K(e), n && n.response && (n.response.data = W.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = g.from(n.response.headers))), Promise.reject(n);
  });
}
const pe = (e) => e instanceof g ? { ...e } : e;
function x(e, t) {
  t = t || {};
  const r = {};
  function n(p, l, c) {
    return a.isPlainObject(p) && a.isPlainObject(l) ? a.merge.call({ caseless: c }, p, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(p, l, c) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(p))
        return n(void 0, p, c);
    } else
      return n(p, l, c);
  }
  function o(p, l) {
    if (!a.isUndefined(l))
      return n(void 0, l);
  }
  function i(p, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(p))
        return n(void 0, p);
    } else
      return n(void 0, l);
  }
  function u(p, l, c) {
    if (c in t)
      return n(p, l);
    if (c in e)
      return n(void 0, p);
  }
  const h = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u,
    headers: (p, l) => s(pe(p), pe(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const c = h[l] || s, w = c(e[l], t[l], l);
    a.isUndefined(w) && c !== u || (r[l] = w);
  }), r;
}
const Ue = "1.6.8", re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  re[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const me = {};
re.transitional = function(t, r, n) {
  function s(o, i) {
    return "[Axios v" + Ue + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, u) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (r ? " in " + r : "")),
        m.ERR_DEPRECATED
      );
    return r && !me[i] && (me[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, i, u) : !0;
  };
};
function Zt(e, t, r) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], i = t[o];
    if (i) {
      const u = e[o], h = u === void 0 || i(u, o, e);
      if (h !== !0)
        throw new m("option " + o + " must be " + h, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const Q = {
  assertOptions: Zt,
  validators: re
}, N = Q.validators;
class H {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ue(),
      response: new ue()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = x(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && Q.assertOptions(n, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean)
    }, !1), s != null && (a.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : Q.assertOptions(s, {
      encode: N.function,
      serialize: N.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[r.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), r.headers = g.concat(i, o);
    const u = [];
    let h = !0;
    this.interceptors.request.forEach(function(d) {
      typeof d.runWhen == "function" && d.runWhen(r) === !1 || (h = h && d.synchronous, u.unshift(d.fulfilled, d.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(d) {
      p.push(d.fulfilled, d.rejected);
    });
    let l, c = 0, w;
    if (!h) {
      const f = [he.bind(this), void 0];
      for (f.unshift.apply(f, u), f.push.apply(f, p), w = f.length, l = Promise.resolve(r); c < w; )
        l = l.then(f[c++], f[c++]);
      return l;
    }
    w = u.length;
    let R = r;
    for (c = 0; c < w; ) {
      const f = u[c++], d = u[c++];
      try {
        R = f(R);
      } catch (b) {
        d.call(this, b);
        break;
      }
    }
    try {
      l = he.call(this, R);
    } catch (f) {
      return Promise.reject(f);
    }
    for (c = 0, w = p.length; c < w; )
      l = l.then(p[c++], p[c++]);
    return l;
  }
  getUri(t) {
    t = x(this.defaults, t);
    const r = De(t.baseURL, t.url);
    return Ne(r, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  H.prototype[t] = function(r, n) {
    return this.request(x(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, i, u) {
      return this.request(x(u || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  H.prototype[t] = r(), H.prototype[t + "Form"] = r(!0);
});
const j = H;
class se {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners)
        return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((u) => {
        n.subscribe(u), o = u;
      }).then(s);
      return i.cancel = function() {
        n.unsubscribe(o);
      }, i;
    }, t(function(o, i, u) {
      n.reason || (n.reason = new L(o, i, u), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new se(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Yt = se;
function en(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function tn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Z = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Z).forEach(([e, t]) => {
  Z[t] = e;
});
const nn = Z;
function ke(e) {
  const t = new j(e), r = ye(j.prototype.request, t);
  return a.extend(r, j.prototype, t, { allOwnKeys: !0 }), a.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return ke(x(e, s));
  }, r;
}
const y = ke(ne);
y.Axios = j;
y.CanceledError = L;
y.CancelToken = Yt;
y.isCancel = Be;
y.VERSION = Ue;
y.toFormData = z;
y.AxiosError = m;
y.Cancel = y.CanceledError;
y.all = function(t) {
  return Promise.all(t);
};
y.spread = en;
y.isAxiosError = tn;
y.mergeConfig = x;
y.AxiosHeaders = g;
y.formToJSON = (e) => _e(a.isHTMLForm(e) ? new FormData(e) : e);
y.getAdapter = Le.getAdapter;
y.HttpStatusCode = nn;
y.default = y;
const rn = y;
class on {
  /**
   * @param url
   * @param columns
   * @param config
   */
  constructor(t, r, n) {
    /**
     * @type boolean
     */
    S(this, "descending");
    /**
     * @type number
     */
    S(this, "page");
    /**
     * @type number
     */
    S(this, "rowsPerPage");
    /**
     * @type {number}
     */
    S(this, "rowsNumber");
    /**
     * @type string
     */
    S(this, "sortBy");
    /**
     * @type {[]}
     */
    S(this, "data");
    /**
     * @type {string}
     */
    S(this, "path");
    /**
     * @type {string}
     */
    S(this, "filter");
    /**
     * @type Column[]
     */
    S(this, "columns");
    /**
     * @type AxiosInstance
     */
    S(this, "client");
    /**
     * Launch when fetching data.
     */
    S(this, "onFetching");
    /**
     * Launch when fetch data.
     */
    S(this, "onFetch");
    /**
     * Launch when fetch data failed.
     */
    S(this, "onFailedFetch");
    this.columns = r, this.page = 1, this.rowsPerPage = (n == null ? void 0 : n.rowsPerPage) ?? 15, this.rowsNumber = 0, this.filter = (n == null ? void 0 : n.filter) ?? "", this.sortBy = (n == null ? void 0 : n.sortBy) ?? "", this.descending = (n == null ? void 0 : n.descending) ?? !1, this.data = [], this.path = t, this.client = (n == null ? void 0 : n.axiosInstance) ?? rn, this.onFetch = n == null ? void 0 : n.onFetch, this.onFailedFetch = n == null ? void 0 : n.onFailedFetch, this.onFetching = n == null ? void 0 : n.onFetching, this.onFetching && this.onFetching(), this.fetch({
      filter: this.filter,
      pagination: void 0
    }).then((s) => {
      this.onFetch && this.onFetch(s);
    }).catch((s) => {
      this.onFailedFetch && this.onFailedFetch(s);
    });
  }
  /**
   * Request table.
   *
   * @param props
   * @param args
   */
  async onRequest(t, r) {
    let n = null;
    this.onFetching && this.onFetching();
    try {
      n = await this.fetch(t, r);
    } catch (s) {
      this.onFailedFetch && this.onFailedFetch(s);
    }
    this.onFetch && n && this.onFetch(n);
  }
  buildRouterArgs(t, r) {
    const n = {};
    if (n.filter = t.filter, t.pagination) {
      let { page: s, sortBy: o, descending: i, rowsPerPage: u } = t.pagination;
      const h = [];
      for (const l of this.columns) {
        let c = this.getColumnName(l);
        c && (l.filterable || l.sortable) && h.push({
          name: c,
          filterable: l.filterable != null ? l.filterable : !1
        });
      }
      const p = this.columns.find((l) => l.name == o);
      p !== void 0 && (o = this.getColumnName(p)), n.page = s, n.sortBy = o, n.descending = i, n.perPage = u, n.columns = JSON.stringify(h);
    }
    return r && r.forEach((s, o) => {
      n[o] = s;
    }), n;
  }
  getColumnName(t) {
    return t.name;
  }
  async fetch(t, r) {
    const n = this.buildRouterArgs(t, r), o = (await this.client.get(this.path, {
      params: n
    })).data;
    return this.filter = o.filter, this.descending = o.descending ?? this.descending, this.sortBy = o.sortBy, this.page = o.pagination.current_page, this.rowsPerPage = o.pagination.per_page, this.rowsNumber = o.pagination.total, this.data = o.pagination.data, o;
  }
}
export {
  on as Paginator
};
