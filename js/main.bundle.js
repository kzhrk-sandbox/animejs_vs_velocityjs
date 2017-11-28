/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var getNumber = exports.getNumber = function getNumber(string) {
	return parseInt(string, 10);
};

var isSpView = exports.isSpView = function isSpView() {
	return matchMedia('(max-width: 768px)').matches;
};

var enablePassiveEventListeners = exports.enablePassiveEventListeners = function enablePassiveEventListeners() {
	var result = false;

	var opts = Object.defineProperty && Object.defineProperty({}, 'passive', {
		get: function get() {
			result = true;
		}
	});

	document.addEventListener('test', function () {}, opts);

	return result;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp = { scope: {} };$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, r, p) {
  if (p.get || p.set) throw new TypeError("ES3 does not support getters and setters.");e != Array.prototype && e != Object.prototype && (e[r] = p.value);
};$jscomp.getGlobal = function (e) {
  return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e;
};$jscomp.global = $jscomp.getGlobal(undefined);$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};$jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};$jscomp.symbolCounter_ = 0;$jscomp.Symbol = function (e) {
  return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++;
};
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();var e = $jscomp.global.Symbol.iterator;e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));"function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, { configurable: !0, writable: !0, value: function value() {
      return $jscomp.arrayIterator(this);
    } });$jscomp.initSymbolIterator = function () {};
};$jscomp.arrayIterator = function (e) {
  var r = 0;return $jscomp.iteratorPrototype(function () {
    return r < e.length ? { done: !1, value: e[r++] } : { done: !0 };
  });
};
$jscomp.iteratorPrototype = function (e) {
  $jscomp.initSymbolIterator();e = { next: e };e[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };return e;
};$jscomp.array = $jscomp.array || {};$jscomp.iteratorFromArray = function (e, r) {
  $jscomp.initSymbolIterator();e instanceof String && (e += "");var p = 0,
      m = { next: function next() {
      if (p < e.length) {
        var u = p++;return { value: r(u, e[u]), done: !1 };
      }m.next = function () {
        return { done: !0, value: void 0 };
      };return m.next();
    } };m[Symbol.iterator] = function () {
    return m;
  };return m;
};
$jscomp.polyfill = function (e, r, p, m) {
  if (r) {
    p = $jscomp.global;e = e.split(".");for (m = 0; m < e.length - 1; m++) {
      var u = e[m];u in p || (p[u] = {});p = p[u];
    }e = e[e.length - 1];m = p[e];r = r(m);r != m && null != r && $jscomp.defineProperty(p, e, { configurable: !0, writable: !0, value: r });
  }
};$jscomp.polyfill("Array.prototype.keys", function (e) {
  return e ? e : function () {
    return $jscomp.iteratorFromArray(this, function (e) {
      return e;
    });
  };
}, "es6-impl", "es3");var $jscomp$this = undefined;
(function (e, r) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = r() : e.anime = r();
})(undefined, function () {
  function e(a) {
    if (!h.col(a)) try {
      return document.querySelectorAll(a);
    } catch (c) {}
  }function r(a, c) {
    for (var d = a.length, b = 2 <= arguments.length ? arguments[1] : void 0, f = [], n = 0; n < d; n++) {
      if (n in a) {
        var k = a[n];c.call(b, k, n, a) && f.push(k);
      }
    }return f;
  }function p(a) {
    return a.reduce(function (a, d) {
      return a.concat(h.arr(d) ? p(d) : d);
    }, []);
  }function m(a) {
    if (h.arr(a)) return a;
    h.str(a) && (a = e(a) || a);return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
  }function u(a, c) {
    return a.some(function (a) {
      return a === c;
    });
  }function C(a) {
    var c = {},
        d;for (d in a) {
      c[d] = a[d];
    }return c;
  }function D(a, c) {
    var d = C(a),
        b;for (b in a) {
      d[b] = c.hasOwnProperty(b) ? c[b] : a[b];
    }return d;
  }function z(a, c) {
    var d = C(a),
        b;for (b in c) {
      d[b] = h.und(a[b]) ? c[b] : a[b];
    }return d;
  }function T(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, d, k) {
      return c + c + d + d + k + k;
    });var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    a = parseInt(c[1], 16);var d = parseInt(c[2], 16),
        c = parseInt(c[3], 16);return "rgba(" + a + "," + d + "," + c + ",1)";
  }function U(a) {
    function c(a, c, b) {
      0 > b && (b += 1);1 < b && --b;return b < 1 / 6 ? a + 6 * (c - a) * b : .5 > b ? c : b < 2 / 3 ? a + (c - a) * (2 / 3 - b) * 6 : a;
    }var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a = parseInt(d[1]) / 360;var b = parseInt(d[2]) / 100,
        f = parseInt(d[3]) / 100,
        d = d[4] || 1;if (0 == b) f = b = a = f;else {
      var n = .5 > f ? f * (1 + b) : f + b - f * b,
          k = 2 * f - n,
          f = c(k, n, a + 1 / 3),
          b = c(k, n, a);a = c(k, n, a - 1 / 3);
    }return "rgba(" + 255 * f + "," + 255 * b + "," + 255 * a + "," + d + ")";
  }function y(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a)) return a[2];
  }function V(a) {
    if (-1 < a.indexOf("translate") || "perspective" === a) return "px";if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg";
  }function I(a, c) {
    return h.fnc(a) ? a(c.target, c.id, c.total) : a;
  }function E(a, c) {
    if (c in a.style) return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
  }function J(a, c) {
    if (h.dom(a) && u(W, c)) return "transform";if (h.dom(a) && (a.getAttribute(c) || h.svg(a) && a[c])) return "attribute";if (h.dom(a) && "transform" !== c && E(a, c)) return "css";if (null != a[c]) return "object";
  }function X(a, c) {
    var d = V(c),
        d = -1 < c.indexOf("scale") ? 1 : 0 + d;a = a.style.transform;if (!a) return d;for (var b = [], f = [], n = [], k = /(\w+)\((.+?)\)/g; b = k.exec(a);) {
      f.push(b[1]), n.push(b[2]);
    }a = r(n, function (a, b) {
      return f[b] === c;
    });return a.length ? a[0] : d;
  }function K(a, c) {
    switch (J(a, c)) {case "transform":
        return X(a, c);case "css":
        return E(a, c);case "attribute":
        return a.getAttribute(c);}return a[c] || 0;
  }function L(a, c) {
    var d = /^(\*=|\+=|-=)/.exec(a);if (!d) return a;var b = y(a) || 0;c = parseFloat(c);a = parseFloat(a.replace(d[0], ""));switch (d[0][0]) {case "+":
        return c + a + b;case "-":
        return c - a + b;case "*":
        return c * a + b;}
  }function F(a, c) {
    return Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2));
  }function M(a) {
    a = a.points;for (var c = 0, d, b = 0; b < a.numberOfItems; b++) {
      var f = a.getItem(b);0 < b && (c += F(d, f));d = f;
    }return c;
  }function N(a) {
    if (a.getTotalLength) return a.getTotalLength();switch (a.tagName.toLowerCase()) {case "circle":
        return 2 * Math.PI * a.getAttribute("r");case "rect":
        return 2 * a.getAttribute("width") + 2 * a.getAttribute("height");case "line":
        return F({ x: a.getAttribute("x1"), y: a.getAttribute("y1") }, { x: a.getAttribute("x2"), y: a.getAttribute("y2") });case "polyline":
        return M(a);case "polygon":
        var c = a.points;return M(a) + F(c.getItem(c.numberOfItems - 1), c.getItem(0));}
  }function Y(a, c) {
    function d(b) {
      b = void 0 === b ? 0 : b;return a.el.getPointAtLength(1 <= c + b ? c + b : 0);
    }var b = d(),
        f = d(-1),
        n = d(1);switch (a.property) {case "x":
        return b.x;case "y":
        return b.y;
      case "angle":
        return 180 * Math.atan2(n.y - f.y, n.x - f.x) / Math.PI;}
  }function O(a, c) {
    var d = /-?\d*\.?\d+/g,
        b;b = h.pth(a) ? a.totalLength : a;if (h.col(b)) {
      if (h.rgb(b)) {
        var f = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b = f ? "rgba(" + f[1] + ",1)" : b;
      } else b = h.hex(b) ? T(b) : h.hsl(b) ? U(b) : void 0;
    } else f = (f = y(b)) ? b.substr(0, b.length - f.length) : b, b = c && !/\s/g.test(b) ? f + c : f;b += "";return { original: b, numbers: b.match(d) ? b.match(d).map(Number) : [0], strings: h.str(a) || c ? b.split(d) : [] };
  }function P(a) {
    a = a ? p(h.arr(a) ? a.map(m) : m(a)) : [];return r(a, function (a, d, b) {
      return b.indexOf(a) === d;
    });
  }function Z(a) {
    var c = P(a);return c.map(function (a, b) {
      return { target: a, id: b, total: c.length };
    });
  }function aa(a, c) {
    var d = C(c);if (h.arr(a)) {
      var b = a.length;2 !== b || h.obj(a[0]) ? h.fnc(c.duration) || (d.duration = c.duration / b) : a = { value: a };
    }return m(a).map(function (a, b) {
      b = b ? 0 : c.delay;a = h.obj(a) && !h.pth(a) ? a : { value: a };h.und(a.delay) && (a.delay = b);return a;
    }).map(function (a) {
      return z(a, d);
    });
  }function ba(a, c) {
    var d = {},
        b;for (b in a) {
      var f = I(a[b], c);h.arr(f) && (f = f.map(function (a) {
        return I(a, c);
      }), 1 === f.length && (f = f[0]));d[b] = f;
    }d.duration = parseFloat(d.duration);d.delay = parseFloat(d.delay);return d;
  }function ca(a) {
    return h.arr(a) ? A.apply(this, a) : Q[a];
  }function da(a, c) {
    var d;return a.tweens.map(function (b) {
      b = ba(b, c);var f = b.value,
          e = K(c.target, a.name),
          k = d ? d.to.original : e,
          k = h.arr(f) ? f[0] : k,
          w = L(h.arr(f) ? f[1] : f, k),
          e = y(w) || y(k) || y(e);b.from = O(k, e);b.to = O(w, e);b.start = d ? d.end : a.offset;b.end = b.start + b.delay + b.duration;b.easing = ca(b.easing);b.elasticity = (1E3 - Math.min(Math.max(b.elasticity, 1), 999)) / 1E3;b.isPath = h.pth(f);b.isColor = h.col(b.from.original);b.isColor && (b.round = 1);return d = b;
    });
  }function ea(a, c) {
    return r(p(a.map(function (a) {
      return c.map(function (b) {
        var c = J(a.target, b.name);if (c) {
          var d = da(b, a);b = { type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay };
        } else b = void 0;return b;
      });
    })), function (a) {
      return !h.und(a);
    });
  }function R(a, c, d, b) {
    var f = "delay" === a;return c.length ? (f ? Math.min : Math.max).apply(Math, c.map(function (b) {
      return b[a];
    })) : f ? b.delay : d.offset + b.delay + b.duration;
  }function fa(a) {
    var c = D(ga, a),
        d = D(S, a),
        b = Z(a.targets),
        f = [],
        e = z(c, d),
        k;for (k in a) {
      e.hasOwnProperty(k) || "targets" === k || f.push({ name: k, offset: e.offset, tweens: aa(a[k], d) });
    }a = ea(b, f);return z(c, { children: [], animatables: b, animations: a, duration: R("duration", a, c, d), delay: R("delay", a, c, d) });
  }function q(a) {
    function c() {
      return window.Promise && new Promise(function (a) {
        return p = a;
      });
    }function d(a) {
      return g.reversed ? g.duration - a : a;
    }function b(a) {
      for (var b = 0, c = {}, d = g.animations, f = d.length; b < f;) {
        var e = d[b],
            k = e.animatable,
            h = e.tweens,
            n = h.length - 1,
            l = h[n];n && (l = r(h, function (b) {
          return a < b.end;
        })[0] || l);for (var h = Math.min(Math.max(a - l.start - l.delay, 0), l.duration) / l.duration, w = isNaN(h) ? 1 : l.easing(h, l.elasticity), h = l.to.strings, p = l.round, n = [], m = void 0, m = l.to.numbers.length, t = 0; t < m; t++) {
          var x = void 0,
              x = l.to.numbers[t],
              q = l.from.numbers[t],
              x = l.isPath ? Y(l.value, w * x) : q + w * (x - q);p && (l.isColor && 2 < t || (x = Math.round(x * p) / p));n.push(x);
        }if (l = h.length) for (m = h[0], w = 0; w < l; w++) {
          p = h[w + 1], t = n[w], isNaN(t) || (m = p ? m + (t + p) : m + (t + " "));
        } else m = n[0];ha[e.type](k.target, e.property, m, c, k.id);e.currentValue = m;b++;
      }if (b = Object.keys(c).length) for (d = 0; d < b; d++) {
        H || (H = E(document.body, "transform") ? "transform" : "-webkit-transform"), g.animatables[d].target.style[H] = c[d].join(" ");
      }g.currentTime = a;g.progress = a / g.duration * 100;
    }function f(a) {
      if (g[a]) g[a](g);
    }function e() {
      g.remaining && !0 !== g.remaining && g.remaining--;
    }function k(a) {
      var k = g.duration,
          n = g.offset,
          w = n + g.delay,
          r = g.currentTime,
          x = g.reversed,
          q = d(a);if (g.children.length) {
        var u = g.children,
            v = u.length;
        if (q >= g.currentTime) for (var G = 0; G < v; G++) {
          u[G].seek(q);
        } else for (; v--;) {
          u[v].seek(q);
        }
      }if (q >= w || !k) g.began || (g.began = !0, f("begin")), f("run");if (q > n && q < k) b(q);else if (q <= n && 0 !== r && (b(0), x && e()), q >= k && r !== k || !k) b(k), x || e();f("update");a >= k && (g.remaining ? (t = h, "alternate" === g.direction && (g.reversed = !g.reversed)) : (g.pause(), g.completed || (g.completed = !0, f("complete"), "Promise" in window && (p(), m = c()))), l = 0);
    }a = void 0 === a ? {} : a;var h,
        t,
        l = 0,
        p = null,
        m = c(),
        g = fa(a);g.reset = function () {
      var a = g.direction,
          c = g.loop;g.currentTime = 0;g.progress = 0;g.paused = !0;g.began = !1;g.completed = !1;g.reversed = "reverse" === a;g.remaining = "alternate" === a && 1 === c ? 2 : c;b(0);for (a = g.children.length; a--;) {
        g.children[a].reset();
      }
    };g.tick = function (a) {
      h = a;t || (t = h);k((l + h - t) * q.speed);
    };g.seek = function (a) {
      k(d(a));
    };g.pause = function () {
      var a = v.indexOf(g);-1 < a && v.splice(a, 1);g.paused = !0;
    };g.play = function () {
      g.paused && (g.paused = !1, t = 0, l = d(g.currentTime), v.push(g), B || ia());
    };g.reverse = function () {
      g.reversed = !g.reversed;t = 0;l = d(g.currentTime);
    };g.restart = function () {
      g.pause();
      g.reset();g.play();
    };g.finished = m;g.reset();g.autoplay && g.play();return g;
  }var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: !0, offset: 0 },
      S = { duration: 1E3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 },
      W = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
      H,
      h = { arr: function arr(a) {
      return Array.isArray(a);
    }, obj: function obj(a) {
      return -1 < Object.prototype.toString.call(a).indexOf("Object");
    },
    pth: function pth(a) {
      return h.obj(a) && a.hasOwnProperty("totalLength");
    }, svg: function svg(a) {
      return a instanceof SVGElement;
    }, dom: function dom(a) {
      return a.nodeType || h.svg(a);
    }, str: function str(a) {
      return "string" === typeof a;
    }, fnc: function fnc(a) {
      return "function" === typeof a;
    }, und: function und(a) {
      return "undefined" === typeof a;
    }, hex: function hex(a) {
      return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
      );
    }, rgb: function rgb(a) {
      return (/^rgb/.test(a)
      );
    }, hsl: function hsl(a) {
      return (/^hsl/.test(a)
      );
    }, col: function col(a) {
      return h.hex(a) || h.rgb(a) || h.hsl(a);
    } },
      A = function () {
    function a(a, d, b) {
      return (((1 - 3 * b + 3 * d) * a + (3 * b - 6 * d)) * a + 3 * d) * a;
    }return function (c, d, b, f) {
      if (0 <= c && 1 >= c && 0 <= b && 1 >= b) {
        var e = new Float32Array(11);if (c !== d || b !== f) for (var k = 0; 11 > k; ++k) {
          e[k] = a(.1 * k, c, b);
        }return function (k) {
          if (c === d && b === f) return k;if (0 === k) return 0;if (1 === k) return 1;for (var h = 0, l = 1; 10 !== l && e[l] <= k; ++l) {
            h += .1;
          }--l;var l = h + (k - e[l]) / (e[l + 1] - e[l]) * .1,
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (.001 <= n) {
            for (h = 0; 4 > h; ++h) {
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (0 === n) break;var m = a(l, c, b) - k,
                  l = l - m / n;
            }k = l;
          } else if (0 === n) k = l;else {
            var l = h,
                h = h + .1,
                g = 0;do {
              m = l + (h - l) / 2, n = a(m, c, b) - k, 0 < n ? h = m : l = m;
            } while (1e-7 < Math.abs(n) && 10 > ++g);k = m;
          }return a(k, d, f);
        };
      }
    };
  }(),
      Q = function () {
    function a(a, b) {
      return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b);
    }var c = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        d = { In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], a], Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (b, c) {
        return 1 - a(1 - b, c);
      }], InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (b, c) {
        return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2;
      }] },
        b = { linear: A(.25, .25, .75, .75) },
        f = {},
        e;for (e in d) {
      f.type = e, d[f.type].forEach(function (a) {
        return function (d, f) {
          b["ease" + a.type + c[f]] = h.fnc(d) ? d : A.apply($jscomp$this, d);
        };
      }(f)), f = { type: f.type };
    }return b;
  }(),
      ha = { css: function css(a, c, d) {
      return a.style[c] = d;
    }, attribute: function attribute(a, c, d) {
      return a.setAttribute(c, d);
    }, object: function object(a, c, d) {
      return a[c] = d;
    }, transform: function transform(a, c, d, b, f) {
      b[f] || (b[f] = []);b[f].push(c + "(" + d + ")");
    } },
      v = [],
      B = 0,
      ia = function () {
    function a() {
      B = requestAnimationFrame(c);
    }function c(c) {
      var b = v.length;if (b) {
        for (var d = 0; d < b;) {
          v[d] && v[d].tick(c), d++;
        }a();
      } else cancelAnimationFrame(B), B = 0;
    }return a;
  }();q.version = "2.2.0";q.speed = 1;q.running = v;q.remove = function (a) {
    a = P(a);for (var c = v.length; c--;) {
      for (var d = v[c], b = d.animations, f = b.length; f--;) {
        u(a, b[f].animatable.target) && (b.splice(f, 1), b.length || d.pause());
      }
    }
  };q.getValue = K;q.path = function (a, c) {
    var d = h.str(a) ? e(a)[0] : a,
        b = c || 100;return function (a) {
      return { el: d, property: a, totalLength: N(d) * (b / 100) };
    };
  };q.setDashoffset = function (a) {
    var c = N(a);a.setAttribute("stroke-dasharray", c);return c;
  };q.bezier = A;q.easings = Q;q.timeline = function (a) {
    var c = q(a);c.pause();c.duration = 0;c.add = function (d) {
      c.children.forEach(function (a) {
        a.began = !0;a.completed = !0;
      });m(d).forEach(function (b) {
        var d = z(b, D(S, a || {}));d.targets = d.targets || a.targets;b = c.duration;var e = d.offset;d.autoplay = !1;d.direction = c.direction;d.offset = h.und(e) ? b : L(e, b);c.began = !0;c.completed = !0;c.seek(d.offset);d = q(d);d.began = !0;d.completed = !0;d.duration > b && (c.duration = d.duration);c.children.push(d);
      });c.seek(0);c.reset();c.autoplay && c.restart();return c;
    };return c;
  };q.random = function (a, c) {
    return Math.floor(Math.random() * (c - a + 1)) + a;
  };return q;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(184)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(185);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (modal, modal_overlay) {pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes([`${modal_overlay} js-modal-overlay`], [true]), false, true)) + "\u003E\u003Cdiv" + (pug.attr("class", pug.classes([`${modal} js-modal`], [true]), false, true)) + "\u003E\u003Cp\u003Emodal contents\u003C\u002Fp\u003E\u003Cbutton class=\"js-modal-close\"\u003ECLOSE\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"modal" in locals_for_with?locals_for_with.modal:typeof modal!=="undefined"?modal:undefined,"modal_overlay" in locals_for_with?locals_for_with.modal_overlay:typeof modal_overlay!=="undefined"?modal_overlay:undefined));;return pug_html;};
module.exports = template;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(189)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./modal.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./modal.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _highlight = __webpack_require__(5);

var _highlight2 = _interopRequireDefault(_highlight);

var _util = __webpack_require__(0);

var _animeModalNg = __webpack_require__(183);

var _animeModalNg2 = _interopRequireDefault(_animeModalNg);

var _animeModalGood = __webpack_require__(191);

var _animeModalGood2 = _interopRequireDefault(_animeModalGood);

var _velocityModal = __webpack_require__(192);

var _velocityModal2 = _interopRequireDefault(_velocityModal);

var _scrollTop = __webpack_require__(195);

var _scrollTop2 = _interopRequireDefault(_scrollTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = (0, _util.enablePassiveEventListeners)() ? {
  passive: true
} : false;

window.addEventListener('load', function () {
  var animeModalGood = new _animeModalGood2.default();
  var animeModalNg = new _animeModalNg2.default();
  var velocityModal = new _velocityModal2.default();
  var scrollTop = new _scrollTop2.default();

  // syntax highlight
  var codeElements = document.querySelectorAll('code');

  [].forEach.call(codeElements, function (code) {
    _highlight2.default.highlightBlock(code);
  });

  animeModalGood.init();
  animeModalGood.addEvent();

  animeModalNg.init();
  animeModalNg.addEvent();

  velocityModal.init();
  velocityModal.addEvent();

  scrollTop.addEvent();
}, options);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hljs = __webpack_require__(6);

hljs.registerLanguage('1c', __webpack_require__(7));
hljs.registerLanguage('abnf', __webpack_require__(8));
hljs.registerLanguage('accesslog', __webpack_require__(9));
hljs.registerLanguage('actionscript', __webpack_require__(10));
hljs.registerLanguage('ada', __webpack_require__(11));
hljs.registerLanguage('apache', __webpack_require__(12));
hljs.registerLanguage('applescript', __webpack_require__(13));
hljs.registerLanguage('cpp', __webpack_require__(14));
hljs.registerLanguage('arduino', __webpack_require__(15));
hljs.registerLanguage('armasm', __webpack_require__(16));
hljs.registerLanguage('xml', __webpack_require__(17));
hljs.registerLanguage('asciidoc', __webpack_require__(18));
hljs.registerLanguage('aspectj', __webpack_require__(19));
hljs.registerLanguage('autohotkey', __webpack_require__(20));
hljs.registerLanguage('autoit', __webpack_require__(21));
hljs.registerLanguage('avrasm', __webpack_require__(22));
hljs.registerLanguage('awk', __webpack_require__(23));
hljs.registerLanguage('axapta', __webpack_require__(24));
hljs.registerLanguage('bash', __webpack_require__(25));
hljs.registerLanguage('basic', __webpack_require__(26));
hljs.registerLanguage('bnf', __webpack_require__(27));
hljs.registerLanguage('brainfuck', __webpack_require__(28));
hljs.registerLanguage('cal', __webpack_require__(29));
hljs.registerLanguage('capnproto', __webpack_require__(30));
hljs.registerLanguage('ceylon', __webpack_require__(31));
hljs.registerLanguage('clean', __webpack_require__(32));
hljs.registerLanguage('clojure', __webpack_require__(33));
hljs.registerLanguage('clojure-repl', __webpack_require__(34));
hljs.registerLanguage('cmake', __webpack_require__(35));
hljs.registerLanguage('coffeescript', __webpack_require__(36));
hljs.registerLanguage('coq', __webpack_require__(37));
hljs.registerLanguage('cos', __webpack_require__(38));
hljs.registerLanguage('crmsh', __webpack_require__(39));
hljs.registerLanguage('crystal', __webpack_require__(40));
hljs.registerLanguage('cs', __webpack_require__(41));
hljs.registerLanguage('csp', __webpack_require__(42));
hljs.registerLanguage('css', __webpack_require__(43));
hljs.registerLanguage('d', __webpack_require__(44));
hljs.registerLanguage('markdown', __webpack_require__(45));
hljs.registerLanguage('dart', __webpack_require__(46));
hljs.registerLanguage('delphi', __webpack_require__(47));
hljs.registerLanguage('diff', __webpack_require__(48));
hljs.registerLanguage('django', __webpack_require__(49));
hljs.registerLanguage('dns', __webpack_require__(50));
hljs.registerLanguage('dockerfile', __webpack_require__(51));
hljs.registerLanguage('dos', __webpack_require__(52));
hljs.registerLanguage('dsconfig', __webpack_require__(53));
hljs.registerLanguage('dts', __webpack_require__(54));
hljs.registerLanguage('dust', __webpack_require__(55));
hljs.registerLanguage('ebnf', __webpack_require__(56));
hljs.registerLanguage('elixir', __webpack_require__(57));
hljs.registerLanguage('elm', __webpack_require__(58));
hljs.registerLanguage('ruby', __webpack_require__(59));
hljs.registerLanguage('erb', __webpack_require__(60));
hljs.registerLanguage('erlang-repl', __webpack_require__(61));
hljs.registerLanguage('erlang', __webpack_require__(62));
hljs.registerLanguage('excel', __webpack_require__(63));
hljs.registerLanguage('fix', __webpack_require__(64));
hljs.registerLanguage('flix', __webpack_require__(65));
hljs.registerLanguage('fortran', __webpack_require__(66));
hljs.registerLanguage('fsharp', __webpack_require__(67));
hljs.registerLanguage('gams', __webpack_require__(68));
hljs.registerLanguage('gauss', __webpack_require__(69));
hljs.registerLanguage('gcode', __webpack_require__(70));
hljs.registerLanguage('gherkin', __webpack_require__(71));
hljs.registerLanguage('glsl', __webpack_require__(72));
hljs.registerLanguage('go', __webpack_require__(73));
hljs.registerLanguage('golo', __webpack_require__(74));
hljs.registerLanguage('gradle', __webpack_require__(75));
hljs.registerLanguage('groovy', __webpack_require__(76));
hljs.registerLanguage('haml', __webpack_require__(77));
hljs.registerLanguage('handlebars', __webpack_require__(78));
hljs.registerLanguage('haskell', __webpack_require__(79));
hljs.registerLanguage('haxe', __webpack_require__(80));
hljs.registerLanguage('hsp', __webpack_require__(81));
hljs.registerLanguage('htmlbars', __webpack_require__(82));
hljs.registerLanguage('http', __webpack_require__(83));
hljs.registerLanguage('hy', __webpack_require__(84));
hljs.registerLanguage('inform7', __webpack_require__(85));
hljs.registerLanguage('ini', __webpack_require__(86));
hljs.registerLanguage('irpf90', __webpack_require__(87));
hljs.registerLanguage('java', __webpack_require__(88));
hljs.registerLanguage('javascript', __webpack_require__(89));
hljs.registerLanguage('jboss-cli', __webpack_require__(90));
hljs.registerLanguage('json', __webpack_require__(91));
hljs.registerLanguage('julia', __webpack_require__(92));
hljs.registerLanguage('julia-repl', __webpack_require__(93));
hljs.registerLanguage('kotlin', __webpack_require__(94));
hljs.registerLanguage('lasso', __webpack_require__(95));
hljs.registerLanguage('ldif', __webpack_require__(96));
hljs.registerLanguage('leaf', __webpack_require__(97));
hljs.registerLanguage('less', __webpack_require__(98));
hljs.registerLanguage('lisp', __webpack_require__(99));
hljs.registerLanguage('livecodeserver', __webpack_require__(100));
hljs.registerLanguage('livescript', __webpack_require__(101));
hljs.registerLanguage('llvm', __webpack_require__(102));
hljs.registerLanguage('lsl', __webpack_require__(103));
hljs.registerLanguage('lua', __webpack_require__(104));
hljs.registerLanguage('makefile', __webpack_require__(105));
hljs.registerLanguage('mathematica', __webpack_require__(106));
hljs.registerLanguage('matlab', __webpack_require__(107));
hljs.registerLanguage('maxima', __webpack_require__(108));
hljs.registerLanguage('mel', __webpack_require__(109));
hljs.registerLanguage('mercury', __webpack_require__(110));
hljs.registerLanguage('mipsasm', __webpack_require__(111));
hljs.registerLanguage('mizar', __webpack_require__(112));
hljs.registerLanguage('perl', __webpack_require__(113));
hljs.registerLanguage('mojolicious', __webpack_require__(114));
hljs.registerLanguage('monkey', __webpack_require__(115));
hljs.registerLanguage('moonscript', __webpack_require__(116));
hljs.registerLanguage('n1ql', __webpack_require__(117));
hljs.registerLanguage('nginx', __webpack_require__(118));
hljs.registerLanguage('nimrod', __webpack_require__(119));
hljs.registerLanguage('nix', __webpack_require__(120));
hljs.registerLanguage('nsis', __webpack_require__(121));
hljs.registerLanguage('objectivec', __webpack_require__(122));
hljs.registerLanguage('ocaml', __webpack_require__(123));
hljs.registerLanguage('openscad', __webpack_require__(124));
hljs.registerLanguage('oxygene', __webpack_require__(125));
hljs.registerLanguage('parser3', __webpack_require__(126));
hljs.registerLanguage('pf', __webpack_require__(127));
hljs.registerLanguage('php', __webpack_require__(128));
hljs.registerLanguage('pony', __webpack_require__(129));
hljs.registerLanguage('powershell', __webpack_require__(130));
hljs.registerLanguage('processing', __webpack_require__(131));
hljs.registerLanguage('profile', __webpack_require__(132));
hljs.registerLanguage('prolog', __webpack_require__(133));
hljs.registerLanguage('protobuf', __webpack_require__(134));
hljs.registerLanguage('puppet', __webpack_require__(135));
hljs.registerLanguage('purebasic', __webpack_require__(136));
hljs.registerLanguage('python', __webpack_require__(137));
hljs.registerLanguage('q', __webpack_require__(138));
hljs.registerLanguage('qml', __webpack_require__(139));
hljs.registerLanguage('r', __webpack_require__(140));
hljs.registerLanguage('rib', __webpack_require__(141));
hljs.registerLanguage('roboconf', __webpack_require__(142));
hljs.registerLanguage('routeros', __webpack_require__(143));
hljs.registerLanguage('rsl', __webpack_require__(144));
hljs.registerLanguage('ruleslanguage', __webpack_require__(145));
hljs.registerLanguage('rust', __webpack_require__(146));
hljs.registerLanguage('scala', __webpack_require__(147));
hljs.registerLanguage('scheme', __webpack_require__(148));
hljs.registerLanguage('scilab', __webpack_require__(149));
hljs.registerLanguage('scss', __webpack_require__(150));
hljs.registerLanguage('shell', __webpack_require__(151));
hljs.registerLanguage('smali', __webpack_require__(152));
hljs.registerLanguage('smalltalk', __webpack_require__(153));
hljs.registerLanguage('sml', __webpack_require__(154));
hljs.registerLanguage('sqf', __webpack_require__(155));
hljs.registerLanguage('sql', __webpack_require__(156));
hljs.registerLanguage('stan', __webpack_require__(157));
hljs.registerLanguage('stata', __webpack_require__(158));
hljs.registerLanguage('step21', __webpack_require__(159));
hljs.registerLanguage('stylus', __webpack_require__(160));
hljs.registerLanguage('subunit', __webpack_require__(161));
hljs.registerLanguage('swift', __webpack_require__(162));
hljs.registerLanguage('taggerscript', __webpack_require__(163));
hljs.registerLanguage('yaml', __webpack_require__(164));
hljs.registerLanguage('tap', __webpack_require__(165));
hljs.registerLanguage('tcl', __webpack_require__(166));
hljs.registerLanguage('tex', __webpack_require__(167));
hljs.registerLanguage('thrift', __webpack_require__(168));
hljs.registerLanguage('tp', __webpack_require__(169));
hljs.registerLanguage('twig', __webpack_require__(170));
hljs.registerLanguage('typescript', __webpack_require__(171));
hljs.registerLanguage('vala', __webpack_require__(172));
hljs.registerLanguage('vbnet', __webpack_require__(173));
hljs.registerLanguage('vbscript', __webpack_require__(174));
hljs.registerLanguage('vbscript-html', __webpack_require__(175));
hljs.registerLanguage('verilog', __webpack_require__(176));
hljs.registerLanguage('vhdl', __webpack_require__(177));
hljs.registerLanguage('vim', __webpack_require__(178));
hljs.registerLanguage('x86asm', __webpack_require__(179));
hljs.registerLanguage('xl', __webpack_require__(180));
hljs.registerLanguage('xquery', __webpack_require__(181));
hljs.registerLanguage('zephir', __webpack_require__(182));

module.exports = hljs;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function (factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window || (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  if (true) {
    factory(exports);
  } else if (globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});

    // Finally register the global hljs with AMD.
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return globalObject.hljs;
      });
    }
  }
})(function (hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases = {};

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  var spanEndTag = '</span>';

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };

  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i];

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  function inherit(parent) {
    // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent) {
      result[key] = parent[key];
    }objects.forEach(function (obj) {
      for (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3) offset += child.nodeValue.length;else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return original[0].offset < highlighted[0].offset ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:
       if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;
       ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {
        return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';
      }
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function expand_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function (variant) {
        return inherit(mode, { variants: null }, variant);
      });
    }
    return mode.cached_variants || mode.endsWithParent && [inherit(mode)] || [mode];
  }

  function compileLanguage(language) {

    function reStr(re) {
      return re && re.source || re;
    }

    function langRe(value, global) {
      return new RegExp(reStr(value), 'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : ''));
    }

    function compileMode(mode, parent) {
      if (mode.compiled) return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function flatten(className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function (kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords === 'string') {
          // string
          flatten('keyword', mode.keywords);
        } else {
          objectKeys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin) mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
        if (mode.end) mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end) mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal) mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null) mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function (c) {
        return expand_mode(c === 'self' ? mode : c);
      }));
      mode.contains.forEach(function (c) {
        compileMode(c, mode);
      });

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators = mode.contains.map(function (c) {
        return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
      }).concat([mode.terminator_end, mode.illegal]).map(reStr).filter(Boolean);
      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : { exec: function exec() /*s*/{
          return null;
        } };
    }

    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:
   - relevance (int)
  - value (an HTML string with highlighting markup)
   */
  function highlight(name, value, ignore_illegals, continuation) {

    function subMode(lexeme, mode) {
      var i, length;

      for (i = 0, length = mode.contains.length; i < length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan = '<span class="' + classPrefix,
          closeSpan = leaveOpen ? '' : spanEndTag;

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords) return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ? highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) : highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += top.subLanguage != null ? processSubLanguage() : processKeywords();
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className ? buildSpan(mode.className, '', true) : '';
      top = Object.create(mode, { parent: { value: top } });
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += spanEndTag;
          }
          if (!top.skip) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== end_mode.parent);
        if (end_mode.starts) {
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top)) throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '',
        current;
    for (current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match,
          count,
          index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match) break;
        count = processLexeme(value.substring(index, match.index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for (current = top; current.parent; current = current.parent) {
        // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message && e.message.indexOf('Illegal') !== -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:
   - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)
   */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).forEach(function (name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:
   - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers
   */
  function fixMarkup(value) {
    return !(options.tabReplace || options.useBR) ? value : value.replace(fixMarkupRe, function (match, p1) {
      if (options.useBR && match === '\n') {
        return '<br>';
      } else if (options.tabReplace) {
        return p1.replace(/\t/g, options.tabReplace);
      }
      return '';
    });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language)) return;

    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called) return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    if (lang.aliases) {
      lang.aliases.forEach(function (alias) {
        aliases[alias] = name;
      });
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit({
      className: 'comment',
      begin: begin, end: end,
      contains: []
    }, inherits || {});
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' + '%|em|ex|ch|rem' + '|vw|vh|vmin|vmax' + '|cm|mm|in|pt|pc|px' + '|deg|grad|rad|turn' + '|s|ms' + '|Hz|kHz' + '|dpi|dpcm|dppx' + ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [hljs.BACKSLASH_ESCAPE, {
      begin: /\[/, end: /\]/,
      relevance: 0,
      contains: [hljs.BACKSLASH_ESCAPE]
    }]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {

  // общий паттерн для определения идентификаторов
  var UNDERSCORE_IDENT_RE = '[A-Za-zА-Яа-яёЁ_][A-Za-zА-Яа-яёЁ_0-9]+';

  // v7 уникальные ключевые слова, отсутствующие в v8 ==> keyword
  var v7_keywords = 'далее ';

  // v8 ключевые слова ==> keyword
  var v8_keywords = 'возврат вызватьисключение выполнить для если и из или иначе иначеесли исключение каждого конецесли ' + 'конецпопытки конеццикла не новый перейти перем по пока попытка прервать продолжить тогда цикл экспорт ';

  // keyword : ключевые слова
  var KEYWORD = v7_keywords + v8_keywords;

  // v7 уникальные директивы, отсутствующие в v8 ==> meta-keyword
  var v7_meta_keywords = 'загрузитьизфайла ';

  // v8 ключевые слова в инструкциях препроцессора, директивах компиляции, аннотациях ==> meta-keyword
  var v8_meta_keywords = 'вебклиент вместо внешнеесоединение клиент конецобласти мобильноеприложениеклиент мобильноеприложениесервер ' + 'наклиенте наклиентенасервере наклиентенасерверебезконтекста насервере насерверебезконтекста область перед ' + 'после сервер толстыйклиентобычноеприложение толстыйклиентуправляемоеприложение тонкийклиент ';

  // meta-keyword : ключевые слова в инструкциях препроцессора, директивах компиляции, аннотациях
  var METAKEYWORD = v7_meta_keywords + v8_meta_keywords;

  // v7 системные константы ==> built_in
  var v7_system_constants = 'разделительстраниц разделительстрок символтабуляции ';

  // v7 уникальные методы глобального контекста, отсутствующие в v8 ==> built_in
  var v7_global_context_methods = 'ansitooem oemtoansi ввестивидсубконто ввестиперечисление ввестипериод ввестиплансчетов выбранныйплансчетов ' + 'датагод датамесяц датачисло заголовоксистемы значениевстроку значениеизстроки каталогиб каталогпользователя ' + 'кодсимв конгода конецпериодаби конецрассчитанногопериодаби конецстандартногоинтервала конквартала конмесяца ' + 'коннедели лог лог10 максимальноеколичествосубконто названиеинтерфейса названиенабораправ назначитьвид ' + 'назначитьсчет найтиссылки началопериодаби началостандартногоинтервала начгода начквартала начмесяца ' + 'начнедели номерднягода номерднянедели номернеделигода обработкаожидания основнойжурналрасчетов ' + 'основнойплансчетов основнойязык очиститьокносообщений периодстр получитьвремята получитьдатута ' + 'получитьдокументта получитьзначенияотбора получитьпозициюта получитьпустоезначение получитьта ' + 'префиксавтонумерации пропись пустоезначение разм разобратьпозициюдокумента рассчитатьрегистрына ' + 'рассчитатьрегистрыпо симв создатьобъект статусвозврата стрколичествострок сформироватьпозициюдокумента ' + 'счетпокоду текущеевремя типзначения типзначениястр установитьтана установитьтапо фиксшаблон шаблон ';

  // v8 методы глобального контекста ==> built_in
  var v8_global_context_methods = 'acos asin atan base64значение base64строка cos exp log log10 pow sin sqrt tan xmlзначение xmlстрока ' + 'xmlтип xmlтипзнч активноеокно безопасныйрежим безопасныйрежимразделенияданных булево ввестидату ввестизначение ' + 'ввестистроку ввестичисло возможностьчтенияxml вопрос восстановитьзначение врег выгрузитьжурналрегистрации ' + 'выполнитьобработкуоповещения выполнитьпроверкуправдоступа вычислить год данныеформывзначение дата день деньгода ' + 'деньнедели добавитьмесяц заблокироватьданныедляредактирования заблокироватьработупользователя завершитьработусистемы ' + 'загрузитьвнешнююкомпоненту закрытьсправку записатьjson записатьxml записатьдатуjson записьжурналарегистрации ' + 'заполнитьзначениясвойств запроситьразрешениепользователя запуститьприложение запуститьсистему зафиксироватьтранзакцию ' + 'значениевданныеформы значениевстрокувнутр значениевфайл значениезаполнено значениеизстрокивнутр значениеизфайла ' + 'изxmlтипа импортмоделиxdto имякомпьютера имяпользователя инициализироватьпредопределенныеданные информацияобошибке ' + 'каталогбиблиотекимобильногоустройства каталогвременныхфайлов каталогдокументов каталогпрограммы кодироватьстроку ' + 'кодлокализацииинформационнойбазы кодсимвола командасистемы конецгода конецдня конецквартала конецмесяца конецминуты ' + 'конецнедели конецчаса конфигурациябазыданныхизмененадинамически конфигурацияизменена копироватьданныеформы ' + 'копироватьфайл краткоепредставлениеошибки лев макс местноевремя месяц мин минута монопольныйрежим найти ' + 'найтинедопустимыесимволыxml найтиокнопонавигационнойссылке найтипомеченныенаудаление найтипоссылкам найтифайлы ' + 'началогода началодня началоквартала началомесяца началоминуты началонедели началочаса начатьзапросразрешенияпользователя ' + 'начатьзапускприложения начатькопированиефайла начатьперемещениефайла начатьподключениевнешнейкомпоненты ' + 'начатьподключениерасширенияработыскриптографией начатьподключениерасширенияработысфайлами начатьпоискфайлов ' + 'начатьполучениекаталогавременныхфайлов начатьполучениекаталогадокументов начатьполучениерабочегокаталогаданныхпользователя ' + 'начатьполучениефайлов начатьпомещениефайла начатьпомещениефайлов начатьсозданиедвоичныхданныхизфайла начатьсозданиекаталога ' + 'начатьтранзакцию начатьудалениефайлов начатьустановкувнешнейкомпоненты начатьустановкурасширенияработыскриптографией ' + 'начатьустановкурасширенияработысфайлами неделягода необходимостьзавершениясоединения номерсеансаинформационнойбазы ' + 'номерсоединенияинформационнойбазы нрег нстр обновитьинтерфейс обновитьнумерациюобъектов обновитьповторноиспользуемыезначения ' + 'обработкапрерыванияпользователя объединитьфайлы окр описаниеошибки оповестить оповеститьобизменении ' + 'отключитьобработчикзапросанастроекклиенталицензирования отключитьобработчикожидания отключитьобработчикоповещения ' + 'открытьзначение открытьиндекссправки открытьсодержаниесправки открытьсправку открытьформу открытьформумодально ' + 'отменитьтранзакцию очиститьжурналрегистрации очиститьнастройкипользователя очиститьсообщения параметрыдоступа ' + 'перейтипонавигационнойссылке переместитьфайл подключитьвнешнююкомпоненту ' + 'подключитьобработчикзапросанастроекклиенталицензирования подключитьобработчикожидания подключитьобработчикоповещения ' + 'подключитьрасширениеработыскриптографией подключитьрасширениеработысфайлами подробноепредставлениеошибки ' + 'показатьвводдаты показатьвводзначения показатьвводстроки показатьвводчисла показатьвопрос показатьзначение ' + 'показатьинформациюобошибке показатьнакарте показатьоповещениепользователя показатьпредупреждение полноеимяпользователя ' + 'получитьcomобъект получитьxmlтип получитьадреспоместоположению получитьблокировкусеансов получитьвремязавершенияспящегосеанса ' + 'получитьвремязасыпанияпассивногосеанса получитьвремяожиданияблокировкиданных получитьданныевыбора ' + 'получитьдополнительныйпараметрклиенталицензирования получитьдопустимыекодылокализации получитьдопустимыечасовыепояса ' + 'получитьзаголовокклиентскогоприложения получитьзаголовоксистемы получитьзначенияотборажурналарегистрации ' + 'получитьидентификаторконфигурации получитьизвременногохранилища получитьимявременногофайла ' + 'получитьимяклиенталицензирования получитьинформациюэкрановклиента получитьиспользованиежурналарегистрации ' + 'получитьиспользованиесобытияжурналарегистрации получитькраткийзаголовокприложения получитьмакетоформления ' + 'получитьмаскувсефайлы получитьмаскувсефайлыклиента получитьмаскувсефайлысервера получитьместоположениепоадресу ' + 'получитьминимальнуюдлинупаролейпользователей получитьнавигационнуюссылку получитьнавигационнуюссылкуинформационнойбазы ' + 'получитьобновлениеконфигурациибазыданных получитьобновлениепредопределенныхданныхинформационнойбазы получитьобщиймакет ' + 'получитьобщуюформу получитьокна получитьоперативнуюотметкувремени получитьотключениебезопасногорежима ' + 'получитьпараметрыфункциональныхопцийинтерфейса получитьполноеимяпредопределенногозначения ' + 'получитьпредставлениянавигационныхссылок получитьпроверкусложностипаролейпользователей получитьразделительпути ' + 'получитьразделительпутиклиента получитьразделительпутисервера получитьсеансыинформационнойбазы ' + 'получитьскоростьклиентскогосоединения получитьсоединенияинформационнойбазы получитьсообщенияпользователю ' + 'получитьсоответствиеобъектаиформы получитьсоставстандартногоинтерфейсаodata получитьструктурухранениябазыданных ' + 'получитьтекущийсеансинформационнойбазы получитьфайл получитьфайлы получитьформу получитьфункциональнуюопцию ' + 'получитьфункциональнуюопциюинтерфейса получитьчасовойпоясинформационнойбазы пользователиос поместитьвовременноехранилище ' + 'поместитьфайл поместитьфайлы прав праводоступа предопределенноезначение представлениекодалокализации представлениепериода ' + 'представлениеправа представлениеприложения представлениесобытияжурналарегистрации представлениечасовогопояса предупреждение ' + 'прекратитьработусистемы привилегированныйрежим продолжитьвызов прочитатьjson прочитатьxml прочитатьдатуjson пустаястрока ' + 'рабочийкаталогданныхпользователя разблокироватьданныедляредактирования разделитьфайл разорватьсоединениесвнешнимисточникомданных ' + 'раскодироватьстроку рольдоступна секунда сигнал символ скопироватьжурналрегистрации смещениелетнеговремени ' + 'смещениестандартноговремени соединитьбуферыдвоичныхданных создатькаталог создатьфабрикуxdto сокрл сокрлп сокрп сообщить ' + 'состояние сохранитьзначение сохранитьнастройкипользователя сред стрдлина стрзаканчиваетсяна стрзаменить стрнайти стрначинаетсяс ' + 'строка строкасоединенияинформационнойбазы стрполучитьстроку стрразделить стрсоединить стрсравнить стрчисловхождений ' + 'стрчислострок стршаблон текущаядата текущаядатасеанса текущаяуниверсальнаядата текущаяуниверсальнаядатавмиллисекундах ' + 'текущийвариантинтерфейсаклиентскогоприложения текущийвариантосновногошрифтаклиентскогоприложения текущийкодлокализации ' + 'текущийрежимзапуска текущийязык текущийязыксистемы тип типзнч транзакцияактивна трег удалитьданныеинформационнойбазы ' + 'удалитьизвременногохранилища удалитьобъекты удалитьфайлы универсальноевремя установитьбезопасныйрежим ' + 'установитьбезопасныйрежимразделенияданных установитьблокировкусеансов установитьвнешнююкомпоненту ' + 'установитьвремязавершенияспящегосеанса установитьвремязасыпанияпассивногосеанса установитьвремяожиданияблокировкиданных ' + 'установитьзаголовокклиентскогоприложения установитьзаголовоксистемы установитьиспользованиежурналарегистрации ' + 'установитьиспользованиесобытияжурналарегистрации установитькраткийзаголовокприложения ' + 'установитьминимальнуюдлинупаролейпользователей установитьмонопольныйрежим установитьнастройкиклиенталицензирования ' + 'установитьобновлениепредопределенныхданныхинформационнойбазы установитьотключениебезопасногорежима ' + 'установитьпараметрыфункциональныхопцийинтерфейса установитьпривилегированныйрежим ' + 'установитьпроверкусложностипаролейпользователей установитьрасширениеработыскриптографией ' + 'установитьрасширениеработысфайлами установитьсоединениесвнешнимисточникомданных установитьсоответствиеобъектаиформы ' + 'установитьсоставстандартногоинтерфейсаodata установитьчасовойпоясинформационнойбазы установитьчасовойпояссеанса ' + 'формат цел час часовойпояс часовойпояссеанса число числопрописью этоадресвременногохранилища ';

  // v8 свойства глобального контекста ==> built_in
  var v8_global_context_property = 'wsссылки библиотекакартинок библиотекамакетовоформлениякомпоновкиданных библиотекастилей бизнеспроцессы ' + 'внешниеисточникиданных внешниеобработки внешниеотчеты встроенныепокупки главныйинтерфейс главныйстиль ' + 'документы доставляемыеуведомления журналыдокументов задачи информацияобинтернетсоединении использованиерабочейдаты ' + 'историяработыпользователя константы критерииотбора метаданные обработки отображениерекламы отправкадоставляемыхуведомлений ' + 'отчеты панельзадачос параметрзапуска параметрысеанса перечисления планывидоврасчета планывидовхарактеристик ' + 'планыобмена планысчетов полнотекстовыйпоиск пользователиинформационнойбазы последовательности проверкавстроенныхпокупок ' + 'рабочаядата расширенияконфигурации регистрыбухгалтерии регистрынакопления регистрырасчета регистрысведений ' + 'регламентныезадания сериализаторxdto справочники средствагеопозиционирования средствакриптографии средствамультимедиа ' + 'средстваотображениярекламы средствапочты средствателефонии фабрикаxdto файловыепотоки фоновыезадания хранилищанастроек ' + 'хранилищевариантовотчетов хранилищенастроекданныхформ хранилищеобщихнастроек хранилищепользовательскихнастроекдинамическихсписков ' + 'хранилищепользовательскихнастроекотчетов хранилищесистемныхнастроек ';

  // built_in : встроенные или библиотечные объекты (константы, классы, функции)
  var BUILTIN = v7_system_constants + v7_global_context_methods + v8_global_context_methods + v8_global_context_property;

  // v8 системные наборы значений ==> class
  var v8_system_sets_of_values = 'webцвета windowsцвета windowsшрифты библиотекакартинок рамкистиля символы цветастиля шрифтыстиля ';

  // v8 системные перечисления - интерфейсные ==> class
  var v8_system_enums_interface = 'автоматическоесохранениеданныхформывнастройках автонумерациявформе автораздвижениесерий ' + 'анимациядиаграммы вариантвыравниванияэлементовизаголовков вариантуправлениявысотойтаблицы ' + 'вертикальнаяпрокруткаформы вертикальноеположение вертикальноеположениеэлемента видгруппыформы ' + 'виддекорацииформы виддополненияэлементаформы видизмененияданных видкнопкиформы видпереключателя ' + 'видподписейкдиаграмме видполяформы видфлажка влияниеразмеранапузырекдиаграммы горизонтальноеположение ' + 'горизонтальноеположениеэлемента группировкаколонок группировкаподчиненныхэлементовформы ' + 'группыиэлементы действиеперетаскивания дополнительныйрежимотображения допустимыедействияперетаскивания ' + 'интервалмеждуэлементамиформы использованиевывода использованиеполосыпрокрутки ' + 'используемоезначениеточкибиржевойдиаграммы историявыборапривводе источникзначенийоситочекдиаграммы ' + 'источникзначенияразмерапузырькадиаграммы категориягруппыкоманд максимумсерий начальноеотображениедерева ' + 'начальноеотображениесписка обновлениетекстаредактирования ориентациядендрограммы ориентациядиаграммы ' + 'ориентацияметокдиаграммы ориентацияметоксводнойдиаграммы ориентацияэлементаформы отображениевдиаграмме ' + 'отображениевлегендедиаграммы отображениегруппыкнопок отображениезаголовкашкалыдиаграммы ' + 'отображениезначенийсводнойдиаграммы отображениезначенияизмерительнойдиаграммы ' + 'отображениеинтерваладиаграммыганта отображениекнопки отображениекнопкивыбора отображениеобсужденийформы ' + 'отображениеобычнойгруппы отображениеотрицательныхзначенийпузырьковойдиаграммы отображениепанелипоиска ' + 'отображениеподсказки отображениепредупрежденияприредактировании отображениеразметкиполосырегулирования ' + 'отображениестраницформы отображениетаблицы отображениетекстазначениядиаграммыганта ' + 'отображениеуправленияобычнойгруппы отображениефигурыкнопки палитрацветовдиаграммы поведениеобычнойгруппы ' + 'поддержкамасштабадендрограммы поддержкамасштабадиаграммыганта поддержкамасштабасводнойдиаграммы ' + 'поисквтаблицепривводе положениезаголовкаэлементаформы положениекартинкикнопкиформы ' + 'положениекартинкиэлементаграфическойсхемы положениекоманднойпанелиформы положениекоманднойпанелиэлементаформы ' + 'положениеопорнойточкиотрисовки положениеподписейкдиаграмме положениеподписейшкалызначенийизмерительнойдиаграммы ' + 'положениесостоянияпросмотра положениестрокипоиска положениетекстасоединительнойлинии положениеуправленияпоиском ' + 'положениешкалывремени порядокотображенияточекгоризонтальнойгистограммы порядоксерийвлегендедиаграммы ' + 'размеркартинки расположениезаголовкашкалыдиаграммы растягиваниеповертикалидиаграммыганта ' + 'режимавтоотображениясостояния режимвводастроктаблицы режимвыборанезаполненного режимвыделениядаты ' + 'режимвыделениястрокитаблицы режимвыделениятаблицы режимизмененияразмера режимизменениясвязанногозначения ' + 'режимиспользованиядиалогапечати режимиспользованияпараметракоманды режиммасштабированияпросмотра ' + 'режимосновногоокнаклиентскогоприложения режимоткрытияокнаформы режимотображениявыделения ' + 'режимотображениягеографическойсхемы режимотображениязначенийсерии режимотрисовкисеткиграфическойсхемы ' + 'режимполупрозрачностидиаграммы режимпробеловдиаграммы режимразмещениянастранице режимредактированияколонки ' + 'режимсглаживаниядиаграммы режимсглаживанияиндикатора режимсписказадач сквозноевыравнивание ' + 'сохранениеданныхформывнастройках способзаполнениятекстазаголовкашкалыдиаграммы ' + 'способопределенияограничивающегозначениядиаграммы стандартнаягруппакоманд стандартноеоформление ' + 'статусоповещенияпользователя стильстрелки типаппроксимациилиниитрендадиаграммы типдиаграммы ' + 'типединицышкалывремени типимпортасерийслоягеографическойсхемы типлиниигеографическойсхемы типлиниидиаграммы ' + 'типмаркерагеографическойсхемы типмаркерадиаграммы типобластиоформления ' + 'типорганизацииисточникаданныхгеографическойсхемы типотображениясериислоягеографическойсхемы ' + 'типотображенияточечногообъектагеографическойсхемы типотображенияшкалыэлементалегендыгеографическойсхемы ' + 'типпоискаобъектовгеографическойсхемы типпроекциигеографическойсхемы типразмещенияизмерений ' + 'типразмещенияреквизитовизмерений типрамкиэлементауправления типсводнойдиаграммы ' + 'типсвязидиаграммыганта типсоединениязначенийпосериямдиаграммы типсоединенияточекдиаграммы ' + 'типсоединительнойлинии типстороныэлементаграфическойсхемы типформыотчета типшкалырадарнойдиаграммы ' + 'факторлиниитрендадиаграммы фигуракнопки фигурыграфическойсхемы фиксациявтаблице форматдняшкалывремени ' + 'форматкартинки ширинаподчиненныхэлементовформы ';

  // v8 системные перечисления - свойства прикладных объектов ==> class
  var v8_system_enums_objects_properties = 'виддвижениябухгалтерии виддвижениянакопления видпериодарегистрарасчета видсчета видточкимаршрутабизнеспроцесса ' + 'использованиеагрегатарегистранакопления использованиегруппиэлементов использованиережимапроведения ' + 'использованиесреза периодичностьагрегатарегистранакопления режимавтовремя режимзаписидокумента режимпроведениядокумента ';

  // v8 системные перечисления - планы обмена ==> class
  var v8_system_enums_exchange_plans = 'авторегистрацияизменений допустимыйномерсообщения отправкаэлементаданных получениеэлементаданных ';

  // v8 системные перечисления - табличный документ ==> class
  var v8_system_enums_tabular_document = 'использованиерасшифровкитабличногодокумента ориентациястраницы положениеитоговколоноксводнойтаблицы ' + 'положениеитоговстроксводнойтаблицы положениетекстаотносительнокартинки расположениезаголовкагруппировкитабличногодокумента ' + 'способчтениязначенийтабличногодокумента типдвустороннейпечати типзаполненияобластитабличногодокумента ' + 'типкурсоровтабличногодокумента типлиниирисункатабличногодокумента типлинииячейкитабличногодокумента ' + 'типнаправленияпереходатабличногодокумента типотображениявыделениятабличногодокумента типотображениялинийсводнойтаблицы ' + 'типразмещениятекстатабличногодокумента типрисункатабличногодокумента типсмещениятабличногодокумента ' + 'типузоратабличногодокумента типфайлатабличногодокумента точностьпечати чередованиерасположениястраниц ';

  // v8 системные перечисления - планировщик ==> class
  var v8_system_enums_sheduler = 'отображениевремениэлементовпланировщика ';

  // v8 системные перечисления - форматированный документ ==> class
  var v8_system_enums_formatted_document = 'типфайлаформатированногодокумента ';

  // v8 системные перечисления - запрос ==> class
  var v8_system_enums_query = 'обходрезультатазапроса типзаписизапроса ';

  // v8 системные перечисления - построитель отчета ==> class
  var v8_system_enums_report_builder = 'видзаполнениярасшифровкипостроителяотчета типдобавленияпредставлений типизмеренияпостроителяотчета типразмещенияитогов ';

  // v8 системные перечисления - работа с файлами ==> class
  var v8_system_enums_files = 'доступкфайлу режимдиалогавыборафайла режимоткрытияфайла ';

  // v8 системные перечисления - построитель запроса ==> class
  var v8_system_enums_query_builder = 'типизмеренияпостроителязапроса ';

  // v8 системные перечисления - анализ данных ==> class
  var v8_system_enums_data_analysis = 'видданныханализа методкластеризации типединицыинтервалавременианализаданных типзаполнениятаблицырезультатаанализаданных ' + 'типиспользованиячисловыхзначенийанализаданных типисточникаданныхпоискаассоциаций типколонкианализаданныхдереворешений ' + 'типколонкианализаданныхкластеризация типколонкианализаданныхобщаястатистика типколонкианализаданныхпоискассоциаций ' + 'типколонкианализаданныхпоискпоследовательностей типколонкимоделипрогноза типмерырасстоянияанализаданных ' + 'типотсеченияправилассоциации типполяанализаданных типстандартизациианализаданных типупорядочиванияправилассоциациианализаданных ' + 'типупорядочиванияшаблоновпоследовательностейанализаданных типупрощениядереварешений ';

  // v8 системные перечисления - xml, json, xs, dom, xdto, web-сервисы ==> class
  var v8_system_enums_xml_json_xs_dom_xdto_ws = 'wsнаправлениепараметра вариантxpathxs вариантзаписидатыjson вариантпростоготипаxs видгруппымоделиxs видфасетаxdto ' + 'действиепостроителяdom завершенностьпростоготипаxs завершенностьсоставноготипаxs завершенностьсхемыxs запрещенныеподстановкиxs ' + 'исключениягруппподстановкиxs категорияиспользованияатрибутаxs категорияограниченияидентичностиxs категорияограниченияпространствименxs ' + 'методнаследованияxs модельсодержимогоxs назначениетипаxml недопустимыеподстановкиxs обработкапробельныхсимволовxs обработкасодержимогоxs ' + 'ограничениезначенияxs параметрыотбораузловdom переносстрокjson позициявдокументеdom пробельныесимволыxml типатрибутаxml типзначенияjson ' + 'типканоническогоxml типкомпонентыxs типпроверкиxml типрезультатаdomxpath типузлаdom типузлаxml формаxml формапредставленияxs ' + 'форматдатыjson экранированиесимволовjson ';

  // v8 системные перечисления - система компоновки данных ==> class
  var v8_system_enums_data_composition_system = 'видсравнениякомпоновкиданных действиеобработкирасшифровкикомпоновкиданных направлениесортировкикомпоновкиданных ' + 'расположениевложенныхэлементоврезультатакомпоновкиданных расположениеитоговкомпоновкиданных расположениегруппировкикомпоновкиданных ' + 'расположениеполейгруппировкикомпоновкиданных расположениеполякомпоновкиданных расположениереквизитовкомпоновкиданных ' + 'расположениересурсовкомпоновкиданных типбухгалтерскогоостаткакомпоновкиданных типвыводатекстакомпоновкиданных ' + 'типгруппировкикомпоновкиданных типгруппыэлементовотборакомпоновкиданных типдополненияпериодакомпоновкиданных ' + 'типзаголовкаполейкомпоновкиданных типмакетагруппировкикомпоновкиданных типмакетаобластикомпоновкиданных типостаткакомпоновкиданных ' + 'типпериодакомпоновкиданных типразмещениятекстакомпоновкиданных типсвязинаборовданныхкомпоновкиданных типэлементарезультатакомпоновкиданных ' + 'расположениелегендыдиаграммыкомпоновкиданных типпримененияотборакомпоновкиданных режимотображенияэлементанастройкикомпоновкиданных ' + 'режимотображениянастроеккомпоновкиданных состояниеэлементанастройкикомпоновкиданных способвосстановлениянастроеккомпоновкиданных ' + 'режимкомпоновкирезультата использованиепараметракомпоновкиданных автопозицияресурсовкомпоновкиданных ' + 'вариантиспользованиягруппировкикомпоновкиданных расположениересурсоввдиаграммекомпоновкиданных фиксациякомпоновкиданных ' + 'использованиеусловногооформлениякомпоновкиданных ';

  // v8 системные перечисления - почта ==> class
  var v8_system_enums_email = 'важностьинтернетпочтовогосообщения обработкатекстаинтернетпочтовогосообщения способкодированияинтернетпочтовоговложения ' + 'способкодированиянеasciiсимволовинтернетпочтовогосообщения типтекстапочтовогосообщения протоколинтернетпочты ' + 'статусразборапочтовогосообщения ';

  // v8 системные перечисления - журнал регистрации ==> class
  var v8_system_enums_logbook = 'режимтранзакциизаписижурналарегистрации статустранзакциизаписижурналарегистрации уровеньжурналарегистрации ';

  // v8 системные перечисления - криптография ==> class
  var v8_system_enums_cryptography = 'расположениехранилищасертификатовкриптографии режимвключениясертификатовкриптографии режимпроверкисертификатакриптографии ' + 'типхранилищасертификатовкриптографии ';

  // v8 системные перечисления - ZIP ==> class
  var v8_system_enums_zip = 'кодировкаименфайловвzipфайле методсжатияzip методшифрованияzip режимвосстановленияпутейфайловzip режимобработкиподкаталоговzip ' + 'режимсохраненияпутейzip уровеньсжатияzip ';

  // v8 системные перечисления - 
  // Блокировка данных, Фоновые задания, Автоматизированное тестирование,
  // Доставляемые уведомления, Встроенные покупки, Интернет, Работа с двоичными данными ==> class
  var v8_system_enums_other = 'звуковоеоповещение направлениепереходакстроке позициявпотоке порядокбайтов режимблокировкиданных режимуправленияблокировкойданных ' + 'сервисвстроенныхпокупок состояниефоновогозадания типподписчикадоставляемыхуведомлений уровеньиспользованиязащищенногосоединенияftp ';

  // v8 системные перечисления - схема запроса ==> class
  var v8_system_enums_request_schema = 'направлениепорядкасхемызапроса типдополненияпериодамисхемызапроса типконтрольнойточкисхемызапроса типобъединениясхемызапроса ' + 'типпараметрадоступнойтаблицысхемызапроса типсоединениясхемызапроса ';

  // v8 системные перечисления - свойства объектов метаданных ==> class
  var v8_system_enums_properties_of_metadata_objects = 'httpметод автоиспользованиеобщегореквизита автопрефиксномеразадачи вариантвстроенногоязыка видиерархии видрегистранакопления ' + 'видтаблицывнешнегоисточникаданных записьдвиженийприпроведении заполнениепоследовательностей индексирование ' + 'использованиебазыпланавидоврасчета использованиебыстроговыбора использованиеобщегореквизита использованиеподчинения ' + 'использованиеполнотекстовогопоиска использованиеразделяемыхданныхобщегореквизита использованиереквизита ' + 'назначениеиспользованияприложения назначениерасширенияконфигурации направлениепередачи обновлениепредопределенныхданных ' + 'оперативноепроведение основноепредставлениевидарасчета основноепредставлениевидахарактеристики основноепредставлениезадачи ' + 'основноепредставлениепланаобмена основноепредставлениесправочника основноепредставлениесчета перемещениеграницыприпроведении ' + 'периодичностьномерабизнеспроцесса периодичностьномерадокумента периодичностьрегистрарасчета периодичностьрегистрасведений ' + 'повторноеиспользованиевозвращаемыхзначений полнотекстовыйпоискпривводепостроке принадлежностьобъекта проведение ' + 'разделениеаутентификацииобщегореквизита разделениеданныхобщегореквизита разделениерасширенийконфигурацииобщегореквизита ' + 'режимавтонумерацииобъектов режимзаписирегистра режимиспользованиямодальности ' + 'режимиспользованиясинхронныхвызововрасширенийплатформыивнешнихкомпонент режимповторногоиспользованиясеансов ' + 'режимполученияданныхвыборапривводепостроке режимсовместимости режимсовместимостиинтерфейса ' + 'режимуправленияблокировкойданныхпоумолчанию сериикодовпланавидовхарактеристик сериикодовпланасчетов ' + 'сериикодовсправочника созданиепривводе способвыбора способпоискастрокипривводепостроке способредактирования ' + 'типданныхтаблицывнешнегоисточникаданных типкодапланавидоврасчета типкодасправочника типмакета типномерабизнеспроцесса ' + 'типномерадокумента типномеразадачи типформы удалениедвижений ';

  // v8 системные перечисления - разные ==> class
  var v8_system_enums_differents = 'важностьпроблемыприменениярасширенияконфигурации вариантинтерфейсаклиентскогоприложения вариантмасштабаформклиентскогоприложения ' + 'вариантосновногошрифтаклиентскогоприложения вариантстандартногопериода вариантстандартнойдатыначала видграницы видкартинки ' + 'видотображенияполнотекстовогопоиска видрамки видсравнения видцвета видчисловогозначения видшрифта допустимаядлина допустимыйзнак ' + 'использованиеbyteordermark использованиеметаданныхполнотекстовогопоиска источникрасширенийконфигурации клавиша кодвозвратадиалога ' + 'кодировкаxbase кодировкатекста направлениепоиска направлениесортировки обновлениепредопределенныхданных обновлениеприизмененииданных ' + 'отображениепанелиразделов проверказаполнения режимдиалогавопрос режимзапускаклиентскогоприложения режимокругления режимоткрытияформприложения ' + 'режимполнотекстовогопоиска скоростьклиентскогосоединения состояниевнешнегоисточникаданных состояниеобновленияконфигурациибазыданных ' + 'способвыборасертификатаwindows способкодированиястроки статуссообщения типвнешнейкомпоненты типплатформы типповеденияклавишиenter ' + 'типэлементаинформацииовыполненииобновленияконфигурациибазыданных уровеньизоляциитранзакций хешфункция частидаты';

  // class: встроенные наборы значений, системные перечисления (содержат дочерние значения, обращения к которым через разыменование)
  var CLASS = v8_system_sets_of_values + v8_system_enums_interface + v8_system_enums_objects_properties + v8_system_enums_exchange_plans + v8_system_enums_tabular_document + v8_system_enums_sheduler + v8_system_enums_formatted_document + v8_system_enums_query + v8_system_enums_report_builder + v8_system_enums_files + v8_system_enums_query_builder + v8_system_enums_data_analysis + v8_system_enums_xml_json_xs_dom_xdto_ws + v8_system_enums_data_composition_system + v8_system_enums_email + v8_system_enums_logbook + v8_system_enums_cryptography + v8_system_enums_zip + v8_system_enums_other + v8_system_enums_request_schema + v8_system_enums_properties_of_metadata_objects + v8_system_enums_differents;

  // v8 общие объекты (у объектов есть конструктор, экземпляры создаются методом НОВЫЙ) ==> type
  var v8_shared_object = 'comобъект ftpсоединение httpзапрос httpсервисответ httpсоединение wsопределения wsпрокси xbase анализданных аннотацияxs ' + 'блокировкаданных буфердвоичныхданных включениеxs выражениекомпоновкиданных генераторслучайныхчисел географическаясхема ' + 'географическиекоординаты графическаясхема группамоделиxs данныерасшифровкикомпоновкиданных двоичныеданные дендрограмма ' + 'диаграмма диаграммаганта диалогвыборафайла диалогвыборацвета диалогвыборашрифта диалограсписаниярегламентногозадания ' + 'диалогредактированиястандартногопериода диапазон документdom документhtml документацияxs доставляемоеуведомление ' + 'записьdom записьfastinfoset записьhtml записьjson записьxml записьzipфайла записьданных записьтекста записьузловdom ' + 'запрос защищенноесоединениеopenssl значенияполейрасшифровкикомпоновкиданных извлечениетекста импортxs интернетпочта ' + 'интернетпочтовоесообщение интернетпочтовыйпрофиль интернетпрокси интернетсоединение информациядляприложенияxs ' + 'использованиеатрибутаxs использованиесобытияжурналарегистрации источникдоступныхнастроеккомпоновкиданных ' + 'итераторузловdom картинка квалификаторыдаты квалификаторыдвоичныхданных квалификаторыстроки квалификаторычисла ' + 'компоновщикмакетакомпоновкиданных компоновщикнастроеккомпоновкиданных конструктормакетаоформлениякомпоновкиданных ' + 'конструкторнастроеккомпоновкиданных конструкторформатнойстроки линия макеткомпоновкиданных макетобластикомпоновкиданных ' + 'макетоформлениякомпоновкиданных маскаxs менеджеркриптографии наборсхемxml настройкикомпоновкиданных настройкисериализацииjson ' + 'обработкакартинок обработкарасшифровкикомпоновкиданных обходдереваdom объявлениеатрибутаxs объявлениенотацииxs ' + 'объявлениеэлементаxs описаниеиспользованиясобытиядоступжурналарегистрации ' + 'описаниеиспользованиясобытияотказвдоступежурналарегистрации описаниеобработкирасшифровкикомпоновкиданных ' + 'описаниепередаваемогофайла описаниетипов определениегруппыатрибутовxs определениегруппымоделиxs ' + 'определениеограниченияидентичностиxs определениепростоготипаxs определениесоставноготипаxs определениетипадокументаdom ' + 'определенияxpathxs отборкомпоновкиданных пакетотображаемыхдокументов параметрвыбора параметркомпоновкиданных ' + 'параметрызаписиjson параметрызаписиxml параметрычтенияxml переопределениеxs планировщик полеанализаданных ' + 'полекомпоновкиданных построительdom построительзапроса построительотчета построительотчетаанализаданных ' + 'построительсхемxml поток потоквпамяти почта почтовоесообщение преобразованиеxsl преобразованиекканоническомуxml ' + 'процессорвыводарезультатакомпоновкиданныхвколлекциюзначений процессорвыводарезультатакомпоновкиданныхвтабличныйдокумент ' + 'процессоркомпоновкиданных разыменовательпространствименdom рамка расписаниерегламентногозадания расширенноеимяxml ' + 'результатчтенияданных своднаядиаграмма связьпараметравыбора связьпотипу связьпотипукомпоновкиданных сериализаторxdto ' + 'сертификатклиентаwindows сертификатклиентафайл сертификаткриптографии сертификатыудостоверяющихцентровwindows ' + 'сертификатыудостоверяющихцентровфайл сжатиеданных системнаяинформация сообщениепользователю сочетаниеклавиш ' + 'сравнениезначений стандартнаядатаначала стандартныйпериод схемаxml схемакомпоновкиданных табличныйдокумент ' + 'текстовыйдокумент тестируемоеприложение типданныхxml уникальныйидентификатор фабрикаxdto файл файловыйпоток ' + 'фасетдлиныxs фасетколичестваразрядовдробнойчастиxs фасетмаксимальноговключающегозначенияxs ' + 'фасетмаксимальногоисключающегозначенияxs фасетмаксимальнойдлиныxs фасетминимальноговключающегозначенияxs ' + 'фасетминимальногоисключающегозначенияxs фасетминимальнойдлиныxs фасетобразцаxs фасетобщегоколичестваразрядовxs ' + 'фасетперечисленияxs фасетпробельныхсимволовxs фильтрузловdom форматированнаястрока форматированныйдокумент ' + 'фрагментxs хешированиеданных хранилищезначения цвет чтениеfastinfoset чтениеhtml чтениеjson чтениеxml чтениеzipфайла ' + 'чтениеданных чтениетекста чтениеузловdom шрифт элементрезультатакомпоновкиданных ';

  // v8 универсальные коллекции значений ==> type
  var v8_universal_collection = 'comsafearray деревозначений массив соответствие списокзначений структура таблицазначений фиксированнаяструктура ' + 'фиксированноесоответствие фиксированныймассив ';

  // type : встроенные типы
  var TYPE = v8_shared_object + v8_universal_collection;

  // literal : примитивные типы
  var LITERAL = 'null истина ложь неопределено';

  // number : числа
  var NUMBERS = hljs.inherit(hljs.NUMBER_MODE);

  // string : строки
  var STRINGS = {
    className: 'string',
    begin: '"|\\|', end: '"|$',
    contains: [{ begin: '""' }]
  };

  // number : даты
  var DATE = {
    begin: "'", end: "'", excludeBegin: true, excludeEnd: true,
    contains: [{
      className: 'number',
      begin: '\\d{4}([\\.\\\\/:-]?\\d{2}){0,5}'
    }]
  };

  // comment : комментарии
  var COMMENTS = hljs.inherit(hljs.C_LINE_COMMENT_MODE);

  // meta : инструкции препроцессора, директивы компиляции
  var META = {
    className: 'meta',
    lexemes: UNDERSCORE_IDENT_RE,
    begin: '#|&', end: '$',
    keywords: { 'meta-keyword': KEYWORD + METAKEYWORD },
    contains: [COMMENTS]
  };

  // symbol : метка goto
  var SYMBOL = {
    className: 'symbol',
    begin: '~', end: ';|:', excludeEnd: true
  };

  // function : объявление процедур и функций
  var FUNCTION = {
    className: 'function',
    lexemes: UNDERSCORE_IDENT_RE,
    variants: [{ begin: 'процедура|функция', end: '\\)', keywords: 'процедура функция' }, { begin: 'конецпроцедуры|конецфункции', keywords: 'конецпроцедуры конецфункции' }],
    contains: [{
      begin: '\\(', end: '\\)', endsParent: true,
      contains: [{
        className: 'params',
        lexemes: UNDERSCORE_IDENT_RE,
        begin: UNDERSCORE_IDENT_RE, end: ',', excludeEnd: true, endsWithParent: true,
        keywords: {
          keyword: 'знач',
          literal: LITERAL
        },
        contains: [NUMBERS, STRINGS, DATE]
      }, COMMENTS]
    }, hljs.inherit(hljs.TITLE_MODE, { begin: UNDERSCORE_IDENT_RE })]
  };

  return {
    case_insensitive: true,
    lexemes: UNDERSCORE_IDENT_RE,
    keywords: {
      keyword: KEYWORD,
      built_in: BUILTIN,
      class: CLASS,
      type: TYPE,
      literal: LITERAL
    },
    contains: [META, FUNCTION, COMMENTS, SYMBOL, NUMBERS, STRINGS, DATE]
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
    var regexes = {
        ruleDeclaration: "^[a-zA-Z][a-zA-Z0-9-]*",
        unexpectedChars: "[!@#$^&',?+~`|:]"
    };

    var keywords = ["ALPHA", "BIT", "CHAR", "CR", "CRLF", "CTL", "DIGIT", "DQUOTE", "HEXDIG", "HTAB", "LF", "LWSP", "OCTET", "SP", "VCHAR", "WSP"];

    var commentMode = hljs.COMMENT(";", "$");

    var terminalBinaryMode = {
        className: "symbol",
        begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
    };

    var terminalDecimalMode = {
        className: "symbol",
        begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
    };

    var terminalHexadecimalMode = {
        className: "symbol",
        begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/
    };

    var caseSensitivityIndicatorMode = {
        className: "symbol",
        begin: /%[si]/
    };

    var ruleDeclarationMode = {
        begin: regexes.ruleDeclaration + '\\s*=',
        returnBegin: true,
        end: /=/,
        relevance: 0,
        contains: [{ className: "attribute", begin: regexes.ruleDeclaration }]
    };

    return {
        illegal: regexes.unexpectedChars,
        keywords: keywords.join(" "),
        contains: [ruleDeclarationMode, commentMode, terminalBinaryMode, terminalDecimalMode, terminalHexadecimalMode, caseSensitivityIndicatorMode, hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE]
    };
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    contains: [
    // IP
    {
      className: 'number',
      begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
    },
    // Other numbers
    {
      className: 'number',
      begin: '\\b\\d+\\b',
      relevance: 0
    },
    // Requests
    {
      className: 'string',
      begin: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)', end: '"',
      keywords: 'GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE',
      illegal: '\\n',
      relevance: 10
    },
    // Dates
    {
      className: 'string',
      begin: /\[/, end: /\]/,
      illegal: '\\n'
    },
    // Strings
    {
      className: 'string',
      begin: '"', end: '"',
      illegal: '\\n'
    }]
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

  var AS3_REST_ARG_MODE = {
    className: 'rest_arg',
    begin: '[.]{3}', end: IDENT_RE,
    relevance: 10
  };

  return {
    aliases: ['as'],
    keywords: {
      keyword: 'as break case catch class const continue default delete do dynamic each ' + 'else extends final finally for function get if implements import in include ' + 'instanceof interface internal is namespace native new override package private ' + 'protected public return set static super switch this throw try typeof use var void ' + 'while with',
      literal: 'true false null undefined'
    },
    contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.C_NUMBER_MODE, {
      className: 'class',
      beginKeywords: 'package', end: '{',
      contains: [hljs.TITLE_MODE]
    }, {
      className: 'class',
      beginKeywords: 'class interface', end: '{', excludeEnd: true,
      contains: [{
        beginKeywords: 'extends implements'
      }, hljs.TITLE_MODE]
    }, {
      className: 'meta',
      beginKeywords: 'import include', end: ';',
      keywords: { 'meta-keyword': 'import include' }
    }, {
      className: 'function',
      beginKeywords: 'function', end: '[{;]', excludeEnd: true,
      illegal: '\\S',
      contains: [hljs.TITLE_MODE, {
        className: 'params',
        begin: '\\(', end: '\\)',
        contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, AS3_REST_ARG_MODE]
      }, {
        begin: ':\\s*' + IDENT_FUNC_RETURN_TYPE_RE
      }]
    }, hljs.METHOD_GUARD],
    illegal: /#/
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = // We try to support full Ada2012
//
// We highlight all appearances of types, keywords, literals (string, char, number, bool)
// and titles (user defined function/procedure/package)
// CSS classes are set accordingly
//
// Languages causing problems for language detection:
// xml (broken by Foo : Bar type), elm (broken by Foo : Bar type), vbscript-html (broken by body keyword)
// sql (ada default.txt has a lot of sql keywords)

function (hljs) {
    // Regular expression for Ada numeric literals.
    // stolen form the VHDL highlighter

    // Decimal literal:
    var INTEGER_RE = '\\d(_|\\d)*';
    var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
    var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';

    // Based literal:
    var BASED_INTEGER_RE = '\\w+';
    var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

    var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

    // Identifier regex
    var ID_REGEX = '[A-Za-z](_?[A-Za-z0-9.])*';

    // bad chars, only allowed in literals
    var BAD_CHARS = '[]{}%#\'\"';

    // Ada doesn't have block comments, only line comments
    var COMMENTS = hljs.COMMENT('--', '$');

    // variable declarations of the form
    // Foo : Bar := Baz;
    // where only Bar will be highlighted
    var VAR_DECLS = {
        // TODO: These spaces are not required by the Ada syntax
        // however, I have yet to see handwritten Ada code where
        // someone does not put spaces around :
        begin: '\\s+:\\s+', end: '\\s*(:=|;|\\)|=>|$)',
        // endsWithParent: true,
        // returnBegin: true,
        illegal: BAD_CHARS,
        contains: [{
            // workaround to avoid highlighting
            // named loops and declare blocks
            beginKeywords: 'loop for declare others',
            endsParent: true
        }, {
            // properly highlight all modifiers
            className: 'keyword',
            beginKeywords: 'not null constant access function procedure in out aliased exception'
        }, {
            className: 'type',
            begin: ID_REGEX,
            endsParent: true,
            relevance: 0
        }]
    };

    return {
        case_insensitive: true,
        keywords: {
            keyword: 'abort else new return abs elsif not reverse abstract end ' + 'accept entry select access exception of separate aliased exit or some ' + 'all others subtype and for out synchronized array function overriding ' + 'at tagged generic package task begin goto pragma terminate ' + 'body private then if procedure type case in protected constant interface ' + 'is raise use declare range delay limited record when delta loop rem while ' + 'digits renames with do mod requeue xor',
            literal: 'True False'
        },
        contains: [COMMENTS,
        // strings "foobar"
        {
            className: 'string',
            begin: /"/, end: /"/,
            contains: [{ begin: /""/, relevance: 0 }]
        },
        // characters ''
        {
            // character literals always contain one char
            className: 'string',
            begin: /'.'/
        }, {
            // number literals
            className: 'number',
            begin: NUMBER_RE,
            relevance: 0
        }, {
            // Attributes
            className: 'symbol',
            begin: "'" + ID_REGEX
        }, {
            // package definition, maybe inside generic
            className: 'title',
            begin: '(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?', end: '(is|$)',
            keywords: 'package body',
            excludeBegin: true,
            excludeEnd: true,
            illegal: BAD_CHARS
        }, {
            // function/procedure declaration/definition
            // maybe inside generic
            begin: '(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+', end: '(\\bis|\\bwith|\\brenames|\\)\\s*;)',
            keywords: 'overriding function procedure with is renames return',
            // we need to re-match the 'function' keyword, so that
            // the title mode below matches only exactly once
            returnBegin: true,
            contains: [COMMENTS, {
                // name of the function/procedure
                className: 'title',
                begin: '(\\bwith\\s+)?\\b(function|procedure)\\s+',
                end: '(\\(|\\s+|$)',
                excludeBegin: true,
                excludeEnd: true,
                illegal: BAD_CHARS
            },
            // 'self'
            // // parameter types
            VAR_DECLS, {
                // return type
                className: 'type',
                begin: '\\breturn\\s+', end: '(\\s+|;|$)',
                keywords: 'return',
                excludeBegin: true,
                excludeEnd: true,
                // we are done with functions
                endsParent: true,
                illegal: BAD_CHARS

            }]
        }, {
            // new type declarations
            // maybe inside generic
            className: 'type',
            begin: '\\b(sub)?type\\s+', end: '\\s+',
            keywords: 'type',
            excludeBegin: true,
            illegal: BAD_CHARS
        },

        // see comment above the definition
        VAR_DECLS]
    };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var NUMBER = { className: 'number', begin: '[\\$%]\\d+' };
  return {
    aliases: ['apacheconf'],
    case_insensitive: true,
    contains: [hljs.HASH_COMMENT_MODE, { className: 'section', begin: '</?', end: '>' }, {
      className: 'attribute',
      begin: /\w+/,
      relevance: 0,
      // keywords aren’t needed for highlighting per se, they only boost relevance
      // for a very generally defined mode (starts with a word, ends with line-end
      keywords: {
        nomarkup: 'order deny allow setenv rewriterule rewriteengine rewritecond documentroot ' + 'sethandler errordocument loadmodule options header listen serverroot ' + 'servername'
      },
      starts: {
        end: /$/,
        relevance: 0,
        keywords: {
          literal: 'on off all'
        },
        contains: [{
          className: 'meta',
          begin: '\\s\\[', end: '\\]$'
        }, {
          className: 'variable',
          begin: '[\\$%]\\{', end: '\\}',
          contains: ['self', NUMBER]
        }, NUMBER, hljs.QUOTE_STRING_MODE]
      }
    }],
    illegal: /\S/
  };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: '' });
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)',
    contains: ['self', hljs.C_NUMBER_MODE, STRING]
  };
  var COMMENT_MODE_1 = hljs.COMMENT('--', '$');
  var COMMENT_MODE_2 = hljs.COMMENT('\\(\\*', '\\*\\)', {
    contains: ['self', COMMENT_MODE_1] //allow nesting
  });
  var COMMENTS = [COMMENT_MODE_1, COMMENT_MODE_2, hljs.HASH_COMMENT_MODE];

  return {
    aliases: ['osascript'],
    keywords: {
      keyword: 'about above after against and around as at back before beginning ' + 'behind below beneath beside between but by considering ' + 'contain contains continue copy div does eighth else end equal ' + 'equals error every exit fifth first for fourth from front ' + 'get given global if ignoring in into is it its last local me ' + 'middle mod my ninth not of on onto or over prop property put ref ' + 'reference repeat returning script second set seventh since ' + 'sixth some tell tenth that the|0 then third through thru ' + 'timeout times to transaction try until where while whose with ' + 'without',
      literal: 'AppleScript false linefeed return pi quote result space tab true',
      built_in: 'alias application boolean class constant date file integer list ' + 'number real record string text ' + 'activate beep count delay launch log offset read round ' + 'run say summarize write ' + 'character characters contents day frontmost id item length ' + 'month name paragraph paragraphs rest reverse running time version ' + 'weekday word words year'
    },
    contains: [STRING, hljs.C_NUMBER_MODE, {
      className: 'built_in',
      begin: '\\b(clipboard info|the clipboard|info for|list (disks|folder)|' + 'mount volume|path to|(close|open for) access|(get|set) eof|' + 'current date|do shell script|get volume settings|random number|' + 'set volume|system attribute|system info|time to GMT|' + '(load|run|store) script|scripting components|' + 'ASCII (character|number)|localized string|' + 'choose (application|color|file|file name|' + 'folder|from list|remote application|URL)|' + 'display (alert|dialog))\\b|^\\s*return\\b'
    }, {
      className: 'literal',
      begin: '\\b(text item delimiters|current application|missing value)\\b'
    }, {
      className: 'keyword',
      begin: '\\b(apart from|aside from|instead of|out of|greater than|' + "isn't|(doesn't|does not) (equal|come before|come after|contain)|" + '(greater|less) than( or equal)?|(starts?|ends|begins?) with|' + 'contained by|comes (before|after)|a (ref|reference)|POSIX file|' + 'POSIX path|(date|time) string|quoted form)\\b'
    }, {
      beginKeywords: 'on',
      illegal: '[${=;\\n]',
      contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
    }].concat(COMMENTS),
    illegal: '//|->|=>|\\[\\['
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var CPP_PRIMITIVE_TYPES = {
    className: 'keyword',
    begin: '\\b[a-z\\d_]*_t\\b'
  };

  var STRINGS = {
    className: 'string',
    variants: [{
      begin: '(u8?|U)?L?"', end: '"',
      illegal: '\\n',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: '(u8?|U)?R"', end: '"',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: '\'\\\\?.', end: '\'',
      illegal: '.'
    }]
  };

  var NUMBERS = {
    className: 'number',
    variants: [{ begin: '\\b(0b[01\']+)' }, { begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)(u|U|l|L|ul|UL|f|F|b|B)' }, { begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)' }],
    relevance: 0
  };

  var PREPROCESSOR = {
    className: 'meta',
    begin: /#\s*[a-z]+\b/, end: /$/,
    keywords: {
      'meta-keyword': 'if else elif endif define undef warning error line ' + 'pragma ifdef ifndef include'
    },
    contains: [{
      begin: /\\\n/, relevance: 0
    }, hljs.inherit(STRINGS, { className: 'meta-string' }), {
      className: 'meta-string',
      begin: /<[^\n>]*>/, end: /$/,
      illegal: '\\n'
    }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
  };

  var FUNCTION_TITLE = hljs.IDENT_RE + '\\s*\\(';

  var CPP_KEYWORDS = {
    keyword: 'int float while private char catch import module export virtual operator sizeof ' + 'dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace ' + 'unsigned long volatile static protected bool template mutable if public friend ' + 'do goto auto void enum else break extern using asm case typeid ' + 'short reinterpret_cast|10 default double register explicit signed typename try this ' + 'switch continue inline delete alignof constexpr decltype ' + 'noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary ' + 'atomic_bool atomic_char atomic_schar ' + 'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' + 'atomic_ullong new throw return ' + 'and or not',
    built_in: 'std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream ' + 'auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set ' + 'unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos ' + 'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' + 'fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' + 'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow ' + 'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' + 'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' + 'vfprintf vprintf vsprintf endl initializer_list unique_ptr',
    literal: 'true false nullptr NULL'
  };

  var EXPRESSION_CONTAINS = [CPP_PRIMITIVE_TYPES, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBERS, STRINGS];

  return {
    aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp'],
    keywords: CPP_KEYWORDS,
    illegal: '</',
    contains: EXPRESSION_CONTAINS.concat([PREPROCESSOR, {
      begin: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<', end: '>',
      keywords: CPP_KEYWORDS,
      contains: ['self', CPP_PRIMITIVE_TYPES]
    }, {
      begin: hljs.IDENT_RE + '::',
      keywords: CPP_KEYWORDS
    }, {
      // This mode covers expression context where we can't expect a function
      // definition and shouldn't highlight anything that looks like one:
      // `return some()`, `else if()`, `(x*sum(1, 2))`
      variants: [{ begin: /=/, end: /;/ }, { begin: /\(/, end: /\)/ }, { beginKeywords: 'new throw return else', end: /;/ }],
      keywords: CPP_KEYWORDS,
      contains: EXPRESSION_CONTAINS.concat([{
        begin: /\(/, end: /\)/,
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat(['self']),
        relevance: 0
      }]),
      relevance: 0
    }, {
      className: 'function',
      begin: '(' + hljs.IDENT_RE + '[\\*&\\s]+)+' + FUNCTION_TITLE,
      returnBegin: true, end: /[{;=]/,
      excludeEnd: true,
      keywords: CPP_KEYWORDS,
      illegal: /[^\w\s\*&]/,
      contains: [{
        begin: FUNCTION_TITLE, returnBegin: true,
        contains: [hljs.TITLE_MODE],
        relevance: 0
      }, {
        className: 'params',
        begin: /\(/, end: /\)/,
        keywords: CPP_KEYWORDS,
        relevance: 0,
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRINGS, NUMBERS, CPP_PRIMITIVE_TYPES]
      }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, PREPROCESSOR]
    }, {
      className: 'class',
      beginKeywords: 'class struct', end: /[{;:]/,
      contains: [{ begin: /</, end: />/, contains: ['self'] }, // skip generic stuff
      hljs.TITLE_MODE]
    }]),
    exports: {
      preprocessor: PREPROCESSOR,
      strings: STRINGS,
      keywords: CPP_KEYWORDS
    }
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var CPP = hljs.getLanguage('cpp').exports;
  return {
    keywords: {
      keyword: 'boolean byte word string String array ' + CPP.keywords.keyword,
      built_in: 'setup loop while catch for if do goto try switch case else ' + 'default break continue return ' + 'KeyboardController MouseController SoftwareSerial ' + 'EthernetServer EthernetClient LiquidCrystal ' + 'RobotControl GSMVoiceCall EthernetUDP EsploraTFT ' + 'HttpClient RobotMotor WiFiClient GSMScanner ' + 'FileSystem Scheduler GSMServer YunClient YunServer ' + 'IPAddress GSMClient GSMModem Keyboard Ethernet ' + 'Console GSMBand Esplora Stepper Process ' + 'WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage ' + 'Client Server GSMPIN FileIO Bridge Serial ' + 'EEPROM Stream Mouse Audio Servo File Task ' + 'GPRS WiFi Wire TFT GSM SPI SD ' + 'runShellCommandAsynchronously analogWriteResolution ' + 'retrieveCallingNumber printFirmwareVersion ' + 'analogReadResolution sendDigitalPortPair ' + 'noListenOnLocalhost readJoystickButton setFirmwareVersion ' + 'readJoystickSwitch scrollDisplayRight getVoiceCallStatus ' + 'scrollDisplayLeft writeMicroseconds delayMicroseconds ' + 'beginTransmission getSignalStrength runAsynchronously ' + 'getAsynchronously listenOnLocalhost getCurrentCarrier ' + 'readAccelerometer messageAvailable sendDigitalPorts ' + 'lineFollowConfig countryNameWrite runShellCommand ' + 'readStringUntil rewindDirectory readTemperature ' + 'setClockDivider readLightSensor endTransmission ' + 'analogReference detachInterrupt countryNameRead ' + 'attachInterrupt encryptionType readBytesUntil ' + 'robotNameWrite readMicrophone robotNameRead cityNameWrite ' + 'userNameWrite readJoystickY readJoystickX mouseReleased ' + 'openNextFile scanNetworks noInterrupts digitalWrite ' + 'beginSpeaker mousePressed isActionDone mouseDragged ' + 'displayLogos noAutoscroll addParameter remoteNumber ' + 'getModifiers keyboardRead userNameRead waitContinue ' + 'processInput parseCommand printVersion readNetworks ' + 'writeMessage blinkVersion cityNameRead readMessage ' + 'setDataMode parsePacket isListening setBitOrder ' + 'beginPacket isDirectory motorsWrite drawCompass ' + 'digitalRead clearScreen serialEvent rightToLeft ' + 'setTextSize leftToRight requestFrom keyReleased ' + 'compassRead analogWrite interrupts WiFiServer ' + 'disconnect playMelody parseFloat autoscroll ' + 'getPINUsed setPINUsed setTimeout sendAnalog ' + 'readSlider analogRead beginWrite createChar ' + 'motorsStop keyPressed tempoWrite readButton ' + 'subnetMask debugPrint macAddress writeGreen ' + 'randomSeed attachGPRS readString sendString ' + 'remotePort releaseAll mouseMoved background ' + 'getXChange getYChange answerCall getResult ' + 'voiceCall endPacket constrain getSocket writeJSON ' + 'getButton available connected findUntil readBytes ' + 'exitValue readGreen writeBlue startLoop IPAddress ' + 'isPressed sendSysex pauseMode gatewayIP setCursor ' + 'getOemKey tuneWrite noDisplay loadImage switchPIN ' + 'onRequest onReceive changePIN playFile noBuffer ' + 'parseInt overflow checkPIN knobRead beginTFT ' + 'bitClear updateIR bitWrite position writeRGB ' + 'highByte writeRed setSpeed readBlue noStroke ' + 'remoteIP transfer shutdown hangCall beginSMS ' + 'endWrite attached maintain noCursor checkReg ' + 'checkPUK shiftOut isValid shiftIn pulseIn ' + 'connect println localIP pinMode getIMEI ' + 'display noBlink process getBand running beginSD ' + 'drawBMP lowByte setBand release bitRead prepare ' + 'pointTo readRed setMode noFill remove listen ' + 'stroke detach attach noTone exists buffer ' + 'height bitSet circle config cursor random ' + 'IRread setDNS endSMS getKey micros ' + 'millis begin print write ready flush width ' + 'isPIN blink clear press mkdir rmdir close ' + 'point yield image BSSID click delay ' + 'read text move peek beep rect line open ' + 'seek fill size turn stop home find ' + 'step tone sqrt RSSI SSID ' + 'end bit tan cos sin pow map abs max ' + 'min get run put',
      literal: 'DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE ' + 'REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP ' + 'SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN ' + 'INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL ' + 'DEFAULT OUTPUT INPUT HIGH LOW'
    },
    contains: [CPP.preprocessor, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE]
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  //local labels: %?[FB]?[AT]?\d{1,2}\w+
  return {
    case_insensitive: true,
    aliases: ['arm'],
    lexemes: '\\.?' + hljs.IDENT_RE,
    keywords: {
      meta:
      //GNU preprocs
      '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ' +
      //ARM directives
      'ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ',
      built_in: 'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 ' + //standard registers
      'pc lr sp ip sl sb fp ' + //typical regs plus backward compatibility
      'a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 ' + //more regs and fp
      'p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 ' + //coprocessor regs
      'c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 ' + //more coproc
      'q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 ' + //advanced SIMD NEON regs

      //program status registers
      'cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf ' + 'spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf ' +

      //NEON and VFP registers
      's0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 ' + 's16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 ' + 'd0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 ' + 'd16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 ' + '{PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @'
    },
    contains: [{
      className: 'keyword',
      begin: '\\b(' + //mnemonics
      'adc|' + '(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|' + 'and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|' + 'bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|' + 'setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|' + 'ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|' + 'mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|' + 'mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|' + 'mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|' + 'rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|' + 'stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|' + '[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|' + 'wfe|wfi|yield' + ')' + '(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?' + //condition codes
      '[sptrx]?', //legal postfixes
      end: '\\s'
    }, hljs.COMMENT('[;@]', '$', { relevance: 0 }), hljs.C_BLOCK_COMMENT_MODE, hljs.QUOTE_STRING_MODE, {
      className: 'string',
      begin: '\'',
      end: '[^\\\\]\'',
      relevance: 0
    }, {
      className: 'title',
      begin: '\\|', end: '\\|',
      illegal: '\\n',
      relevance: 0
    }, {
      className: 'number',
      variants: [{ begin: '[#$=]?0x[0-9a-f]+' }, //hex
      { begin: '[#$=]?0b[01]+' }, //bin
      { begin: '[#$=]\\d+' }, //literal
      { begin: '\\b\\d+' //bare number
      }],
      relevance: 0
    }, {
      className: 'symbol',
      variants: [{ begin: '^[a-z_\\.\\$][a-z0-9_\\.\\$]+' }, //ARM syntax
      { begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:' }, //GNU ARM syntax
      { begin: '[=#]\\w+' //label reference
      }],
      relevance: 0
    }]
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [{
      className: 'attr',
      begin: XML_IDENT_RE,
      relevance: 0
    }, {
      begin: /=\s*/,
      relevance: 0,
      contains: [{
        className: 'string',
        endsParent: true,
        variants: [{ begin: /"/, end: /"/ }, { begin: /'/, end: /'/ }, { begin: /[^\s"'=<>`]+/ }]
      }]
    }]
  };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
    case_insensitive: true,
    contains: [{
      className: 'meta',
      begin: '<!DOCTYPE', end: '>',
      relevance: 10,
      contains: [{ begin: '\\[', end: '\\]' }]
    }, hljs.COMMENT('<!--', '-->', {
      relevance: 10
    }), {
      begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
      relevance: 10
    }, {
      begin: /<\?(php)?/, end: /\?>/,
      subLanguage: 'php',
      contains: [{ begin: '/\\*', end: '\\*/', skip: true }]
    }, {
      className: 'tag',
      /*
      The lookahead pattern (?=...) ensures that 'begin' only matches
      '<style' as a single word, followed by a whitespace or an
      ending braket. The '$' is needed for the lexeme to be recognized
      by hljs.subMode() that tests lexemes outside the stream.
      */
      begin: '<style(?=\\s|>|$)', end: '>',
      keywords: { name: 'style' },
      contains: [TAG_INTERNALS],
      starts: {
        end: '</style>', returnEnd: true,
        subLanguage: ['css', 'xml']
      }
    }, {
      className: 'tag',
      // See the comment in the <style tag about the lookahead pattern
      begin: '<script(?=\\s|>|$)', end: '>',
      keywords: { name: 'script' },
      contains: [TAG_INTERNALS],
      starts: {
        end: '\<\/script\>', returnEnd: true,
        subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
      }
    }, {
      className: 'meta',
      variants: [{ begin: /<\?xml/, end: /\?>/, relevance: 10 }, { begin: /<\?\w+/, end: /\?>/ }]
    }, {
      className: 'tag',
      begin: '</?', end: '/?>',
      contains: [{
        className: 'name', begin: /[^\/><\s]+/, relevance: 0
      }, TAG_INTERNALS]
    }]
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['adoc'],
    contains: [
    // block comment
    hljs.COMMENT('^/{4,}\\n', '\\n/{4,}$',
    // can also be done as...
    //'^/{4,}$',
    //'^/{4,}$',
    {
      relevance: 10
    }),
    // line comment
    hljs.COMMENT('^//', '$', {
      relevance: 0
    }),
    // title
    {
      className: 'title',
      begin: '^\\.\\w.*$'
    },
    // example, admonition & sidebar blocks
    {
      begin: '^[=\\*]{4,}\\n',
      end: '\\n^[=\\*]{4,}$',
      relevance: 10
    },
    // headings
    {
      className: 'section',
      relevance: 10,
      variants: [{ begin: '^(={1,5}) .+?( \\1)?$' }, { begin: '^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$' }]
    },
    // document attributes
    {
      className: 'meta',
      begin: '^:.+?:',
      end: '\\s',
      excludeEnd: true,
      relevance: 10
    },
    // block attributes
    {
      className: 'meta',
      begin: '^\\[.+?\\]$',
      relevance: 0
    },
    // quoteblocks
    {
      className: 'quote',
      begin: '^_{4,}\\n',
      end: '\\n_{4,}$',
      relevance: 10
    },
    // listing and literal blocks
    {
      className: 'code',
      begin: '^[\\-\\.]{4,}\\n',
      end: '\\n[\\-\\.]{4,}$',
      relevance: 10
    },
    // passthrough blocks
    {
      begin: '^\\+{4,}\\n',
      end: '\\n\\+{4,}$',
      contains: [{
        begin: '<', end: '>',
        subLanguage: 'xml',
        relevance: 0
      }],
      relevance: 10
    },
    // lists (can only capture indicators)
    {
      className: 'bullet',
      begin: '^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+'
    },
    // admonition
    {
      className: 'symbol',
      begin: '^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+',
      relevance: 10
    },
    // inline strong
    {
      className: 'strong',
      // must not follow a word character or be followed by an asterisk or space
      begin: '\\B\\*(?![\\*\\s])',
      end: '(\\n{2}|\\*)',
      // allow escaped asterisk followed by word char
      contains: [{
        begin: '\\\\*\\w',
        relevance: 0
      }]
    },
    // inline emphasis
    {
      className: 'emphasis',
      // must not follow a word character or be followed by a single quote or space
      begin: '\\B\'(?![\'\\s])',
      end: '(\\n{2}|\')',
      // allow escaped single quote followed by word char
      contains: [{
        begin: '\\\\\'\\w',
        relevance: 0
      }],
      relevance: 0
    },
    // inline emphasis (alt)
    {
      className: 'emphasis',
      // must not follow a word character or be followed by an underline or space
      begin: '_(?![_\\s])',
      end: '(\\n{2}|_)',
      relevance: 0
    },
    // inline smart quotes
    {
      className: 'string',
      variants: [{ begin: "``.+?''" }, { begin: "`.+?'" }]
    },
    // inline code snippets (TODO should get same treatment as strong and emphasis)
    {
      className: 'code',
      begin: '(`.+?`|\\+.+?\\+)',
      relevance: 0
    },
    // indented literal block
    {
      className: 'code',
      begin: '^[ \\t]',
      end: '$',
      relevance: 0
    },
    // horizontal rules
    {
      begin: '^\'{3,}[ \\t]*$',
      relevance: 10
    },
    // images and links
    {
      begin: '(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]',
      returnBegin: true,
      contains: [{
        begin: '(link|image:?):',
        relevance: 0
      }, {
        className: 'link',
        begin: '\\w',
        end: '[^\\[]+',
        relevance: 0
      }, {
        className: 'string',
        begin: '\\[',
        end: '\\]',
        excludeBegin: true,
        excludeEnd: true,
        relevance: 0
      }],
      relevance: 10
    }]
  };
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = 'false synchronized int abstract float private char boolean static null if const ' + 'for true while long throw strictfp finally protected import native final return void ' + 'enum else extends implements break transient new catch instanceof byte super volatile case ' + 'assert short package default double public try this switch continue throws privileged ' + 'aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization ' + 'staticinitialization withincode target within execution getWithinTypeName handler ' + 'thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents ' + 'warning error soft precedence thisAspectInstance';
  var SHORTKEYS = 'get set args call';
  return {
    keywords: KEYWORDS,
    illegal: /<\/|#/,
    contains: [hljs.COMMENT('/\\*\\*', '\\*/', {
      relevance: 0,
      contains: [{
        // eat up @'s in emails to prevent them to be recognized as doctags
        begin: /\w+@/, relevance: 0
      }, {
        className: 'doctag',
        begin: '@[A-Za-z]+'
      }]
    }), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, {
      className: 'class',
      beginKeywords: 'aspect',
      end: /[{;=]/,
      excludeEnd: true,
      illegal: /[:;"\[\]]/,
      contains: [{
        beginKeywords: 'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'
      }, hljs.UNDERSCORE_TITLE_MODE, {
        begin: /\([^\)]*/,
        end: /[)]+/,
        keywords: KEYWORDS + ' ' + SHORTKEYS,
        excludeEnd: false
      }]
    }, {
      className: 'class',
      beginKeywords: 'class interface',
      end: /[{;=]/,
      excludeEnd: true,
      relevance: 0,
      keywords: 'class interface',
      illegal: /[:"\[\]]/,
      contains: [{ beginKeywords: 'extends implements' }, hljs.UNDERSCORE_TITLE_MODE]
    }, {
      // AspectJ Constructs
      beginKeywords: 'pointcut after before around throwing returning',
      end: /[)]/,
      excludeEnd: false,
      illegal: /["\[\]]/,
      contains: [{
        begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
        returnBegin: true,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      }]
    }, {
      begin: /[:]/,
      returnBegin: true,
      end: /[{;]/,
      relevance: 0,
      excludeEnd: false,
      keywords: KEYWORDS,
      illegal: /["\[\]]/,
      contains: [{
        begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
        keywords: KEYWORDS + ' ' + SHORTKEYS,
        relevance: 0
      }, hljs.QUOTE_STRING_MODE]
    }, {
      // this prevents 'new Name(...), or throw ...' from being recognized as a function definition
      beginKeywords: 'new throw',
      relevance: 0
    }, {
      // the function class is a bit different for AspectJ compared to the Java language
      className: 'function',
      begin: /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
      returnBegin: true,
      end: /[{;=]/,
      keywords: KEYWORDS,
      excludeEnd: true,
      contains: [{
        begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
        returnBegin: true,
        relevance: 0,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      }, {
        className: 'params',
        begin: /\(/, end: /\)/,
        relevance: 0,
        keywords: KEYWORDS,
        contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE]
      }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
    }, hljs.C_NUMBER_MODE, {
      // annotation is also used in this language
      className: 'meta',
      begin: '@[A-Za-z]+'
    }]
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var BACKTICK_ESCAPE = {
    begin: '`[\\s\\S]'
  };

  return {
    case_insensitive: true,
    aliases: ['ahk'],
    keywords: {
      keyword: 'Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group',
      literal: 'A|0 true false NOT AND OR',
      built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel'
    },
    contains: [{
      className: 'built_in',
      begin: 'A_[a-zA-Z0-9]+'
    }, BACKTICK_ESCAPE, hljs.inherit(hljs.QUOTE_STRING_MODE, { contains: [BACKTICK_ESCAPE] }), hljs.COMMENT(';', '$', { relevance: 0 }), hljs.C_BLOCK_COMMENT_MODE, {
      className: 'number',
      begin: hljs.NUMBER_RE,
      relevance: 0
    }, {
      className: 'subst', // FIXED
      begin: '%(?=[a-zA-Z0-9#_$@])', end: '%',
      illegal: '[^a-zA-Z0-9#_$@]'
    }, {
      className: 'built_in',
      begin: '^\\s*\\w+\\s*,'
      //I don't really know if this is totally relevant
    }, {
      className: 'meta',
      begin: '^\\s*#\w+', end: '$',
      relevance: 0
    }, {
      className: 'symbol',
      contains: [BACKTICK_ESCAPE],
      variants: [{ begin: '^[^\\n";]+::(?!=)' }, { begin: '^[^\\n";]+:(?!=)', relevance: 0 // zero relevance as it catches a lot of things
        // followed by a single ':' in many languages
      }]
    }, {
      // consecutive commas, not for highlighting but just for relevance
      begin: ',\\s*,'
    }]
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
    var KEYWORDS = 'ByRef Case Const ContinueCase ContinueLoop ' + 'Default Dim Do Else ElseIf EndFunc EndIf EndSelect ' + 'EndSwitch EndWith Enum Exit ExitLoop For Func ' + 'Global If In Local Next ReDim Return Select Static ' + 'Step Switch Then To Until Volatile WEnd While With',
        LITERAL = 'True False And Null Not Or',
        BUILT_IN = 'Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait',
        COMMENT = {
        variants: [hljs.COMMENT(';', '$', { relevance: 0 }), hljs.COMMENT('#cs', '#ce'), hljs.COMMENT('#comments-start', '#comments-end')]
    },
        VARIABLE = {
        begin: '\\$[A-z0-9_]+'
    },
        STRING = {
        className: 'string',
        variants: [{
            begin: /"/,
            end: /"/,
            contains: [{
                begin: /""/,
                relevance: 0
            }]
        }, {
            begin: /'/,
            end: /'/,
            contains: [{
                begin: /''/,
                relevance: 0
            }]
        }]
    },
        NUMBER = {
        variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
    },
        PREPROCESSOR = {
        className: 'meta',
        begin: '#',
        end: '$',
        keywords: { 'meta-keyword': 'comments include include-once NoTrayIcon OnAutoItStartRegister pragma compile RequireAdmin' },
        contains: [{
            begin: /\\\n/,
            relevance: 0
        }, {
            beginKeywords: 'include',
            keywords: { 'meta-keyword': 'include' },
            end: '$',
            contains: [STRING, {
                className: 'meta-string',
                variants: [{
                    begin: '<',
                    end: '>'
                }, {
                    begin: /"/,
                    end: /"/,
                    contains: [{
                        begin: /""/,
                        relevance: 0
                    }]
                }, {
                    begin: /'/,
                    end: /'/,
                    contains: [{
                        begin: /''/,
                        relevance: 0
                    }]
                }]
            }]
        }, STRING, COMMENT]
    },
        CONSTANT = {
        className: 'symbol',
        // begin: '@',
        // end: '$',
        // keywords: 'AppDataCommonDir AppDataDir AutoItExe AutoItPID AutoItVersion AutoItX64 COM_EventObj CommonFilesDir Compiled ComputerName ComSpec CPUArch CR CRLF DesktopCommonDir DesktopDepth DesktopDir DesktopHeight DesktopRefresh DesktopWidth DocumentsCommonDir error exitCode exitMethod extended FavoritesCommonDir FavoritesDir GUI_CtrlHandle GUI_CtrlId GUI_DragFile GUI_DragId GUI_DropId GUI_WinHandle HomeDrive HomePath HomeShare HotKeyPressed HOUR IPAddress1 IPAddress2 IPAddress3 IPAddress4 KBLayout LF LocalAppDataDir LogonDNSDomain LogonDomain LogonServer MDAY MIN MON MSEC MUILang MyDocumentsDir NumParams OSArch OSBuild OSLang OSServicePack OSType OSVersion ProgramFilesDir ProgramsCommonDir ProgramsDir ScriptDir ScriptFullPath ScriptLineNumber ScriptName SEC StartMenuCommonDir StartMenuDir StartupCommonDir StartupDir SW_DISABLE SW_ENABLE SW_HIDE SW_LOCK SW_MAXIMIZE SW_MINIMIZE SW_RESTORE SW_SHOW SW_SHOWDEFAULT SW_SHOWMAXIMIZED SW_SHOWMINIMIZED SW_SHOWMINNOACTIVE SW_SHOWNA SW_SHOWNOACTIVATE SW_SHOWNORMAL SW_UNLOCK SystemDir TAB TempDir TRAY_ID TrayIconFlashing TrayIconVisible UserName UserProfileDir WDAY WindowsDir WorkingDir YDAY YEAR',
        // relevance: 5
        begin: '@[A-z0-9_]+'
    },
        FUNCTION = {
        className: 'function',
        beginKeywords: 'Func',
        end: '$',
        illegal: '\\$|\\[|%',
        contains: [hljs.UNDERSCORE_TITLE_MODE, {
            className: 'params',
            begin: '\\(',
            end: '\\)',
            contains: [VARIABLE, STRING, NUMBER]
        }]
    };

    return {
        case_insensitive: true,
        illegal: /\/\*/,
        keywords: {
            keyword: KEYWORDS,
            built_in: BUILT_IN,
            literal: LITERAL
        },
        contains: [COMMENT, VARIABLE, STRING, NUMBER, PREPROCESSOR, CONSTANT, FUNCTION]
    };
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    case_insensitive: true,
    lexemes: '\\.?' + hljs.IDENT_RE,
    keywords: {
      keyword:
      /* mnemonic */
      'adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs ' + 'brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr ' + 'clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor ' + 'fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul ' + 'muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs ' + 'sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub ' + 'subi swap tst wdr',
      built_in:
      /* general purpose registers */
      'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 ' + 'r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ' +
      /* IO Registers (ATMega128) */
      'ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h ' + 'tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ' + 'ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ' + 'ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk ' + 'tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ' + 'ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr ' + 'porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ' + 'ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf',
      meta: '.byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list ' + '.listmac .macro .nolist .org .set'
    },
    contains: [hljs.C_BLOCK_COMMENT_MODE, hljs.COMMENT(';', '$', {
      relevance: 0
    }), hljs.C_NUMBER_MODE, // 0x..., decimal, float
    hljs.BINARY_NUMBER_MODE, // 0b...
    {
      className: 'number',
      begin: '\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)' // $..., 0o...
    }, hljs.QUOTE_STRING_MODE, {
      className: 'string',
      begin: '\'', end: '[^\\\\]\'',
      illegal: '[^\\\\][^\']'
    }, { className: 'symbol', begin: '^[A-Za-z0-9_.$]+:' }, { className: 'meta', begin: '#', end: '$' }, { // подстановка в «.macro»
      className: 'subst',
      begin: '@[0-9]+'
    }]
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var VARIABLE = {
    className: 'variable',
    variants: [{ begin: /\$[\w\d#@][\w\d_]*/ }, { begin: /\$\{(.*?)}/ }]
  };
  var KEYWORDS = 'BEGIN END if else while do for in break continue delete next nextfile function func exit|10';
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [{
      begin: /(u|b)?r?'''/, end: /'''/,
      relevance: 10
    }, {
      begin: /(u|b)?r?"""/, end: /"""/,
      relevance: 10
    }, {
      begin: /(u|r|ur)'/, end: /'/,
      relevance: 10
    }, {
      begin: /(u|r|ur)"/, end: /"/,
      relevance: 10
    }, {
      begin: /(b|br)'/, end: /'/
    }, {
      begin: /(b|br)"/, end: /"/
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
  };
  return {
    keywords: {
      keyword: KEYWORDS
    },
    contains: [VARIABLE, STRING, hljs.REGEXP_MODE, hljs.HASH_COMMENT_MODE, hljs.NUMBER_MODE]
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: 'false int abstract private char boolean static null if for true ' + 'while long throw finally protected final return void enum else ' + 'break new catch byte super case short default double public try this switch ' + 'continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count ' + 'order group by asc desc index hint like dispaly edit client server ttsbegin ' + 'ttscommit str real date container anytype common div mod',
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, {
      className: 'meta',
      begin: '#', end: '$'
    }, {
      className: 'class',
      beginKeywords: 'class interface', end: '{', excludeEnd: true,
      illegal: ':',
      contains: [{ beginKeywords: 'extends implements' }, hljs.UNDERSCORE_TITLE_MODE]
    }]
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var VAR = {
    className: 'variable',
    variants: [{ begin: /\$[\w\d#@][\w\d_]*/ }, { begin: /\$\{(.*?)}/ }]
  };
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [hljs.BACKSLASH_ESCAPE, VAR, {
      className: 'variable',
      begin: /\$\(/, end: /\)/,
      contains: [hljs.BACKSLASH_ESCAPE]
    }]
  };
  var APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };

  return {
    aliases: ['sh', 'zsh'],
    lexemes: /\b-?[a-z\._]+\b/,
    keywords: {
      keyword: 'if then else elif fi for while in do done case esac function',
      literal: 'true false',
      built_in:
      // Shell built-ins
      // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
      'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' + 'trap umask unset ' +
      // Bash built-ins
      'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' + 'read readarray source type typeset ulimit unalias ' +
      // Shell modifiers
      'set shopt ' +
      // Zsh built-ins
      'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' + 'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' + 'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' + 'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' + 'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' + 'zpty zregexparse zsocket zstyle ztcp',
      _: '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
    },
    contains: [{
      className: 'meta',
      begin: /^#![^\n]+sh\s*$/,
      relevance: 10
    }, {
      className: 'function',
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: true,
      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
      relevance: 0
    }, hljs.HASH_COMMENT_MODE, QUOTE_STRING, APOS_STRING, VAR]
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    case_insensitive: true,
    illegal: '^\.',
    // Support explicitely typed variables that end with $%! or #.
    lexemes: '[a-zA-Z][a-zA-Z0-9_\$\%\!\#]*',
    keywords: {
      keyword: 'ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE ' + 'CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ ' + 'DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ ' + 'EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO ' + 'HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON ' + 'OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET ' + 'MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION ' + 'BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET ' + 'PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET ' + 'RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP ' + 'SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE ' + 'WEND WIDTH WINDOW WRITE XOR'
    },
    contains: [hljs.QUOTE_STRING_MODE, hljs.COMMENT('REM', '$', { relevance: 10 }), hljs.COMMENT('\'', '$', { relevance: 0 }), {
      // Match line numbers
      className: 'symbol',
      begin: '^[0-9]+\ ',
      relevance: 10
    }, {
      // Match typed numeric constants (1000, 12.34!, 1.2e5, 1.5#, 1.2D2)
      className: 'number',
      begin: '\\b([0-9]+[0-9edED\.]*[#\!]?)',
      relevance: 0
    }, {
      // Match hexadecimal numbers (&Hxxxx)
      className: 'number',
      begin: '(\&[hH][0-9a-fA-F]{1,4})'
    }, {
      // Match octal numbers (&Oxxxxxx)
      className: 'number',
      begin: '(\&[oO][0-7]{1,6})'
    }]
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    contains: [
    // Attribute
    {
      className: 'attribute',
      begin: /</, end: />/
    },
    // Specific
    {
      begin: /::=/,
      starts: {
        end: /$/,
        contains: [{
          begin: /</, end: />/
        },
        // Common
        hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
      }
    }]
  };
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var LITERAL = {
    className: 'literal',
    begin: '[\\+\\-]',
    relevance: 0
  };
  return {
    aliases: ['bf'],
    contains: [hljs.COMMENT('[^\\[\\]\\.,\\+\\-<> \r\n]', '[\\[\\]\\.,\\+\\-<> \r\n]', {
      returnEnd: true,
      relevance: 0
    }), {
      className: 'title',
      begin: '[\\[\\]]',
      relevance: 0
    }, {
      className: 'string',
      begin: '[\\.,]',
      relevance: 0
    }, {
      // this mode works as the only relevance counter
      begin: /\+\+|\-\-/, returnBegin: true,
      contains: [LITERAL]
    }, LITERAL]
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = 'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to ' + 'until while with var';
  var LITERALS = 'false true';
  var COMMENT_MODES = [hljs.C_LINE_COMMENT_MODE, hljs.COMMENT(/\{/, /\}/, {
    relevance: 0
  }), hljs.COMMENT(/\(\*/, /\*\)/, {
    relevance: 10
  })];
  var STRING = {
    className: 'string',
    begin: /'/, end: /'/,
    contains: [{ begin: /''/ }]
  };
  var CHAR_STRING = {
    className: 'string', begin: /(#\d+)+/
  };
  var DATE = {
    className: 'number',
    begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
    relevance: 0
  };
  var DBL_QUOTED_VARIABLE = {
    className: 'string', // not a string technically but makes sense to be highlighted in the same style
    begin: '"',
    end: '"'
  };

  var PROCEDURE = {
    className: 'function',
    beginKeywords: 'procedure', end: /[:;]/,
    keywords: 'procedure|10',
    contains: [hljs.TITLE_MODE, {
      className: 'params',
      begin: /\(/, end: /\)/,
      keywords: KEYWORDS,
      contains: [STRING, CHAR_STRING]
    }].concat(COMMENT_MODES)
  };

  var OBJECT = {
    className: 'class',
    begin: 'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)',
    returnBegin: true,
    contains: [hljs.TITLE_MODE, PROCEDURE]
  };

  return {
    case_insensitive: true,
    keywords: { keyword: KEYWORDS, literal: LITERALS },
    illegal: /\/\*/,
    contains: [STRING, CHAR_STRING, DATE, DBL_QUOTED_VARIABLE, hljs.NUMBER_MODE, OBJECT, PROCEDURE]
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['capnp'],
    keywords: {
      keyword: 'struct enum interface union group import using const annotation extends in of on as with from fixed',
      built_in: 'Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 ' + 'Text Data AnyPointer AnyStruct Capability List',
      literal: 'true false'
    },
    contains: [hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE, hljs.HASH_COMMENT_MODE, {
      className: 'meta',
      begin: /@0x[\w\d]{16};/,
      illegal: /\n/
    }, {
      className: 'symbol',
      begin: /@\d+\b/
    }, {
      className: 'class',
      beginKeywords: 'struct enum', end: /\{/,
      illegal: /\n/,
      contains: [hljs.inherit(hljs.TITLE_MODE, {
        starts: { endsWithParent: true, excludeEnd: true // hack: eating everything after the first title
        } })]
    }, {
      className: 'class',
      beginKeywords: 'interface', end: /\{/,
      illegal: /\n/,
      contains: [hljs.inherit(hljs.TITLE_MODE, {
        starts: { endsWithParent: true, excludeEnd: true // hack: eating everything after the first title
        } })]
    }]
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  // 2.3. Identifiers and keywords
  var KEYWORDS = 'assembly module package import alias class interface object given value ' + 'assign void function new of extends satisfies abstracts in out return ' + 'break continue throw assert dynamic if else switch case for while try ' + 'catch finally then let this outer super is exists nonempty';
  // 7.4.1 Declaration Modifiers
  var DECLARATION_MODIFIERS = 'shared abstract formal default actual variable late native deprecated' + 'final sealed annotation suppressWarnings small';
  // 7.4.2 Documentation
  var DOCUMENTATION = 'doc by license see throws tagged';
  var SUBST = {
    className: 'subst', excludeBegin: true, excludeEnd: true,
    begin: /``/, end: /``/,
    keywords: KEYWORDS,
    relevance: 10
  };
  var EXPRESSIONS = [{
    // verbatim string
    className: 'string',
    begin: '"""',
    end: '"""',
    relevance: 10
  }, {
    // string literal or template
    className: 'string',
    begin: '"', end: '"',
    contains: [SUBST]
  }, {
    // character literal
    className: 'string',
    begin: "'",
    end: "'"
  }, {
    // numeric literal
    className: 'number',
    begin: '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
    relevance: 0
  }];
  SUBST.contains = EXPRESSIONS;

  return {
    keywords: {
      keyword: KEYWORDS + ' ' + DECLARATION_MODIFIERS,
      meta: DOCUMENTATION
    },
    illegal: '\\$[^01]|#[^0-9a-fA-F]',
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.COMMENT('/\\*', '\\*/', { contains: ['self'] }), {
      // compiler annotation
      className: 'meta',
      begin: '@[a-z]\\w*(?:\\:\"[^\"]*\")?'
    }].concat(EXPRESSIONS)
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['clean', 'icl', 'dcl'],
    keywords: {
      keyword: 'if let in with where case of class instance otherwise ' + 'implementation definition system module from import qualified as ' + 'special code inline foreign export ccall stdcall generic derive ' + 'infix infixl infixr',
      literal: 'True False'
    },
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, { begin: '->|<-[|:]?|::|#!?|>>=|\\{\\||\\|\\}|:==|=:|\\.\\.|<>|`' // relevance booster
    }]
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var keywords = {
    'builtin-name':
    // Clojure keywords
    'def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem ' + 'quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? ' + 'set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? ' + 'class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? ' + 'string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . ' + 'inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last ' + 'drop-while while intern condp case reduced cycle split-at split-with repeat replicate ' + 'iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext ' + 'nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends ' + 'add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler ' + 'set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter ' + 'monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or ' + 'when when-not when-let comp juxt partial sequence memoize constantly complement identity assert ' + 'peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast ' + 'sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import ' + 'refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! ' + 'assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger ' + 'bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline ' + 'flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking ' + 'assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! ' + 'reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! ' + 'new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty ' + 'hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list ' + 'disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer ' + 'chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate ' + 'unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta ' + 'lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize'
  };

  var SYMBOLSTART = 'a-zA-Z_\\-!.?+*=<>&#\'';
  var SYMBOL_RE = '[' + SYMBOLSTART + '][' + SYMBOLSTART + '0-9/;:]*';
  var SIMPLE_NUMBER_RE = '[-+]?\\d+(\\.\\d+)?';

  var SYMBOL = {
    begin: SYMBOL_RE,
    relevance: 0
  };
  var NUMBER = {
    className: 'number', begin: SIMPLE_NUMBER_RE,
    relevance: 0
  };
  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null });
  var COMMENT = hljs.COMMENT(';', '$', {
    relevance: 0
  });
  var LITERAL = {
    className: 'literal',
    begin: /\b(true|false|nil)\b/
  };
  var COLLECTION = {
    begin: '[\\[\\{]', end: '[\\]\\}]'
  };
  var HINT = {
    className: 'comment',
    begin: '\\^' + SYMBOL_RE
  };
  var HINT_COL = hljs.COMMENT('\\^\\{', '\\}');
  var KEY = {
    className: 'symbol',
    begin: '[:]{1,2}' + SYMBOL_RE
  };
  var LIST = {
    begin: '\\(', end: '\\)'
  };
  var BODY = {
    endsWithParent: true,
    relevance: 0
  };
  var NAME = {
    keywords: keywords,
    lexemes: SYMBOL_RE,
    className: 'name', begin: SYMBOL_RE,
    starts: BODY
  };
  var DEFAULT_CONTAINS = [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL, SYMBOL];

  LIST.contains = [hljs.COMMENT('comment', ''), NAME, BODY];
  BODY.contains = DEFAULT_CONTAINS;
  COLLECTION.contains = DEFAULT_CONTAINS;
  HINT_COL.contains = [COLLECTION];

  return {
    aliases: ['clj'],
    illegal: /\S/,
    contains: [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL]
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    contains: [{
      className: 'meta',
      begin: /^([\w.-]+|\s*#_)=>/,
      starts: {
        end: /$/,
        subLanguage: 'clojure'
      }
    }]
  };
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['cmake.in'],
    case_insensitive: true,
    keywords: {
      keyword: 'add_custom_command add_custom_target add_definitions add_dependencies ' + 'add_executable add_library add_subdirectory add_test aux_source_directory ' + 'break build_command cmake_minimum_required cmake_policy configure_file ' + 'create_test_sourcelist define_property else elseif enable_language enable_testing ' + 'endforeach endfunction endif endmacro endwhile execute_process export find_file ' + 'find_library find_package find_path find_program fltk_wrap_ui foreach function ' + 'get_cmake_property get_directory_property get_filename_component get_property ' + 'get_source_file_property get_target_property get_test_property if include ' + 'include_directories include_external_msproject include_regular_expression install ' + 'link_directories load_cache load_command macro mark_as_advanced message option ' + 'output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return ' + 'separate_arguments set set_directory_properties set_property ' + 'set_source_files_properties set_target_properties set_tests_properties site_name ' + 'source_group string target_link_libraries try_compile try_run unset variable_watch ' + 'while build_name exec_program export_library_dependencies install_files ' + 'install_programs install_targets link_libraries make_directory remove subdir_depends ' + 'subdirs use_mangled_mesa utility_source variable_requires write_file ' + 'qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or ' + 'equal less greater strless strgreater strequal matches'
    },
    contains: [{
      className: 'variable',
      begin: '\\${', end: '}'
    }, hljs.HASH_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE]
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    keyword:
    // JS keywords
    'in if for while finally new do return else break catch instanceof throw try this ' + 'switch continue typeof delete debugger super yield import export from as default await ' +
    // Coffee keywords
    'then unless until loop of by when and or is isnt not',
    literal:
    // JS literals
    'true false null undefined ' +
    // Coffee literals
    'yes no on off',
    built_in: 'npm require console print module global window document'
  };
  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var SUBST = {
    className: 'subst',
    begin: /#\{/, end: /}/,
    keywords: KEYWORDS
  };
  var EXPRESSIONS = [hljs.BINARY_NUMBER_MODE, hljs.inherit(hljs.C_NUMBER_MODE, { starts: { end: '(\\s*/)?', relevance: 0 } }), // a number tries to eat the following slash to prevent treating it as a regexp
  {
    className: 'string',
    variants: [{
      begin: /'''/, end: /'''/,
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: /'/, end: /'/,
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: /"""/, end: /"""/,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST]
    }, {
      begin: /"/, end: /"/,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST]
    }]
  }, {
    className: 'regexp',
    variants: [{
      begin: '///', end: '///',
      contains: [SUBST, hljs.HASH_COMMENT_MODE]
    }, {
      begin: '//[gim]*',
      relevance: 0
    }, {
      // regex can't start with space to parse x / 2 / 3 as two divisions
      // regex can't start with *, and it supports an "illegal" in the main mode
      begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
    }]
  }, {
    begin: '@' + JS_IDENT_RE // relevance booster
  }, {
    subLanguage: 'javascript',
    excludeBegin: true, excludeEnd: true,
    variants: [{
      begin: '```', end: '```'
    }, {
      begin: '`', end: '`'
    }]
  }];
  SUBST.contains = EXPRESSIONS;

  var TITLE = hljs.inherit(hljs.TITLE_MODE, { begin: JS_IDENT_RE });
  var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
  var PARAMS = {
    className: 'params',
    begin: '\\([^\\(]', returnBegin: true,
    /* We need another contained nameless mode to not have every nested
    pair of parens to be called "params" */
    contains: [{
      begin: /\(/, end: /\)/,
      keywords: KEYWORDS,
      contains: ['self'].concat(EXPRESSIONS)
    }]
  };

  return {
    aliases: ['coffee', 'cson', 'iced'],
    keywords: KEYWORDS,
    illegal: /\/\*/,
    contains: EXPRESSIONS.concat([hljs.COMMENT('###', '###'), hljs.HASH_COMMENT_MODE, {
      className: 'function',
      begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE, end: '[-=]>',
      returnBegin: true,
      contains: [TITLE, PARAMS]
    }, {
      // anonymous function start
      begin: /[:\(,=]\s*/,
      relevance: 0,
      contains: [{
        className: 'function',
        begin: PARAMS_RE, end: '[-=]>',
        returnBegin: true,
        contains: [PARAMS]
      }]
    }, {
      className: 'class',
      beginKeywords: 'class',
      end: '$',
      illegal: /[:="\[\]]/,
      contains: [{
        beginKeywords: 'extends',
        endsWithParent: true,
        illegal: /[:="\[\]]/,
        contains: [TITLE]
      }, TITLE]
    }, {
      begin: JS_IDENT_RE + ':', end: ':',
      returnBegin: true, returnEnd: true,
      relevance: 0
    }])
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: {
      keyword: '_ as at cofix else end exists exists2 fix for forall fun if IF in let ' + 'match mod Prop return Set then Type using where with ' + 'Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo ' + 'Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion ' + 'Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture ' + 'Conjectures Constant constr Constraint Constructors Context Corollary ' + 'CreateHintDb Cut Declare Defined Definition Delimit Dependencies Dependent' + 'Derive Drop eauto End Equality Eval Example Existential Existentials ' + 'Existing Export exporting Extern Extract Extraction Fact Field Fields File ' + 'Fixpoint Focus for From Function Functional Generalizable Global Goal Grab ' + 'Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident ' + 'Identity If Immediate Implicit Import Include Inductive Infix Info Initial ' + 'Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear ' + 'Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML ' + 'Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation ' + 'Obligations Opaque Open Optimize Options Parameter Parameters Parametric ' + 'Path Paths pattern Polymorphic Preterm Print Printing Program Projections ' + 'Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark ' + 'Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save ' + 'Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern ' + 'SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies ' + 'Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time ' + 'Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused ' + 'Unfold Universe Universes Unset Unshelve using Variable Variables Variant ' + 'Verbose Visibility where with',
      built_in: 'abstract absurd admit after apply as assert assumption at auto autorewrite ' + 'autounfold before bottom btauto by case case_eq cbn cbv change ' + 'classical_left classical_right clear clearbody cofix compare compute ' + 'congruence constr_eq constructor contradict contradiction cut cutrewrite ' + 'cycle decide decompose dependent destruct destruction dintuition ' + 'discriminate discrR do double dtauto eapply eassumption eauto ecase ' + 'econstructor edestruct ediscriminate eelim eexact eexists einduction ' + 'einjection eleft elim elimtype enough equality erewrite eright ' + 'esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail ' + 'field field_simplify field_simplify_eq first firstorder fix fold fourier ' + 'functional generalize generalizing gfail give_up has_evar hnf idtac in ' + 'induction injection instantiate intro intro_pattern intros intuition ' + 'inversion inversion_clear is_evar is_var lapply lazy left lia lra move ' + 'native_compute nia nsatz omega once pattern pose progress proof psatz quote ' + 'record red refine reflexivity remember rename repeat replace revert ' + 'revgoals rewrite rewrite_strat right ring ring_simplify rtauto set ' + 'setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry ' + 'setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve ' + 'specialize split split_Rabs split_Rmult stepl stepr subst sum swap ' + 'symmetry tactic tauto time timeout top transitivity trivial try tryif ' + 'unfold unify until using vm_compute with'
    },
    contains: [hljs.QUOTE_STRING_MODE, hljs.COMMENT('\\(\\*', '\\*\\)'), hljs.C_NUMBER_MODE, {
      className: 'type',
      excludeBegin: true,
      begin: '\\|\\s*',
      end: '\\w+'
    }, { begin: /[-=]>/ // relevance booster
    }]
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function cos(hljs) {

  var STRINGS = {
    className: 'string',
    variants: [{
      begin: '"',
      end: '"',
      contains: [{ // escaped
        begin: "\"\"",
        relevance: 0
      }]
    }]
  };

  var NUMBERS = {
    className: "number",
    begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
    relevance: 0
  };

  var COS_KEYWORDS = 'property parameter class classmethod clientmethod extends as break ' + 'catch close continue do d|0 else elseif for goto halt hang h|0 if job ' + 'j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 ' + 'tcommit throw trollback try tstart use view while write w|0 xecute x|0 ' + 'zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert ' + 'zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit ' + 'zsync ascii';

  // registered function - no need in them due to all functions are highlighted,
  // but I'll just leave this here.

  //"$bit", "$bitcount",
  //"$bitfind", "$bitlogic", "$case", "$char", "$classmethod", "$classname",
  //"$compile", "$data", "$decimal", "$double", "$extract", "$factor",
  //"$find", "$fnumber", "$get", "$increment", "$inumber", "$isobject",
  //"$isvaliddouble", "$isvalidnum", "$justify", "$length", "$list",
  //"$listbuild", "$listdata", "$listfind", "$listfromstring", "$listget",
  //"$listlength", "$listnext", "$listsame", "$listtostring", "$listvalid",
  //"$locate", "$match", "$method", "$name", "$nconvert", "$next",
  //"$normalize", "$now", "$number", "$order", "$parameter", "$piece",
  //"$prefetchoff", "$prefetchon", "$property", "$qlength", "$qsubscript",
  //"$query", "$random", "$replace", "$reverse", "$sconvert", "$select",
  //"$sortbegin", "$sortend", "$stack", "$text", "$translate", "$view",
  //"$wascii", "$wchar", "$wextract", "$wfind", "$wiswide", "$wlength",
  //"$wreverse", "$xecute", "$zabs", "$zarccos", "$zarcsin", "$zarctan",
  //"$zcos", "$zcot", "$zcsc", "$zdate", "$zdateh", "$zdatetime",
  //"$zdatetimeh", "$zexp", "$zhex", "$zln", "$zlog", "$zpower", "$zsec",
  //"$zsin", "$zsqr", "$ztan", "$ztime", "$ztimeh", "$zboolean",
  //"$zconvert", "$zcrc", "$zcyc", "$zdascii", "$zdchar", "$zf",
  //"$ziswide", "$zlascii", "$zlchar", "$zname", "$zposition", "$zqascii",
  //"$zqchar", "$zsearch", "$zseek", "$zstrip", "$zwascii", "$zwchar",
  //"$zwidth", "$zwpack", "$zwbpack", "$zwunpack", "$zwbunpack", "$zzenkaku",
  //"$change", "$mv", "$mvat", "$mvfmt", "$mvfmts", "$mviconv",
  //"$mviconvs", "$mvinmat", "$mvlover", "$mvoconv", "$mvoconvs", "$mvraise",
  //"$mvtrans", "$mvv", "$mvname", "$zbitand", "$zbitcount", "$zbitfind",
  //"$zbitget", "$zbitlen", "$zbitnot", "$zbitor", "$zbitset", "$zbitstr",
  //"$zbitxor", "$zincrement", "$znext", "$zorder", "$zprevious", "$zsort",
  //"device", "$ecode", "$estack", "$etrap", "$halt", "$horolog",
  //"$io", "$job", "$key", "$namespace", "$principal", "$quit", "$roles",
  //"$storage", "$system", "$test", "$this", "$tlevel", "$username",
  //"$x", "$y", "$za", "$zb", "$zchild", "$zeof", "$zeos", "$zerror",
  //"$zhorolog", "$zio", "$zjob", "$zmode", "$znspace", "$zparent", "$zpi",
  //"$zpos", "$zreference", "$zstorage", "$ztimestamp", "$ztimezone",
  //"$ztrap", "$zversion"

  return {
    case_insensitive: true,
    aliases: ["cos", "cls"],
    keywords: COS_KEYWORDS,
    contains: [NUMBERS, STRINGS, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
      className: "comment",
      begin: /;/, end: "$",
      relevance: 0
    }, { // Functions and user-defined functions: write $ztime(60*60*3), $$myFunc(10), $$^Val(1)
      className: "built_in",
      begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
    }, { // Macro command: quit $$$OK
      className: "built_in",
      begin: /\$\$\$[a-zA-Z]+/
    }, { // Special (global) variables: write %request.Content; Built-in classes: %Library.Integer
      className: "built_in",
      begin: /%[a-z]+(?:\.[a-z]+)*/
    }, { // Global variable: set ^globalName = 12 write ^globalName
      className: "symbol",
      begin: /\^%?[a-zA-Z][\w]*/
    }, { // Some control constructions: do ##class(Package.ClassName).Method(), ##super()
      className: "keyword",
      begin: /##class|##super|#define|#dim/
    },

    // sub-languages: are not fully supported by hljs by 11/15/2015
    // left for the future implementation.
    {
      begin: /&sql\(/, end: /\)/,
      excludeBegin: true, excludeEnd: true,
      subLanguage: "sql"
    }, {
      begin: /&(js|jscript|javascript)</, end: />/,
      excludeBegin: true, excludeEnd: true,
      subLanguage: "javascript"
    }, {
      // this brakes first and last tag, but this is the only way to embed a valid html
      begin: /&html<\s*</, end: />\s*>/,
      subLanguage: "xml"
    }]
  };
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var RESOURCES = 'primitive rsc_template';

  var COMMANDS = 'group clone ms master location colocation order fencing_topology ' + 'rsc_ticket acl_target acl_group user role ' + 'tag xml';

  var PROPERTY_SETS = 'property rsc_defaults op_defaults';

  var KEYWORDS = 'params meta operations op rule attributes utilization';

  var OPERATORS = 'read write deny defined not_defined in_range date spec in ' + 'ref reference attribute type xpath version and or lt gt tag ' + 'lte gte eq ne \\';

  var TYPES = 'number string';

  var LITERALS = 'Master Started Slave Stopped start promote demote stop monitor true false';

  return {
    aliases: ['crm', 'pcmk'],
    case_insensitive: true,
    keywords: {
      keyword: KEYWORDS + ' ' + OPERATORS + ' ' + TYPES,
      literal: LITERALS
    },
    contains: [hljs.HASH_COMMENT_MODE, {
      beginKeywords: 'node',
      starts: {
        end: '\\s*([\\w_-]+:)?',
        starts: {
          className: 'title',
          end: '\\s*[\\$\\w_][\\w_-]*'
        }
      }
    }, {
      beginKeywords: RESOURCES,
      starts: {
        className: 'title',
        end: '\\s*[\\$\\w_][\\w_-]*',
        starts: {
          end: '\\s*@?[\\w_][\\w_\\.:-]*'
        }
      }
    }, {
      begin: '\\b(' + COMMANDS.split(' ').join('|') + ')\\s+',
      keywords: COMMANDS,
      starts: {
        className: 'title',
        end: '[\\$\\w_][\\w_-]*'
      }
    }, {
      beginKeywords: PROPERTY_SETS,
      starts: {
        className: 'title',
        end: '\\s*([\\w_-]+:)?'
      }
    }, hljs.QUOTE_STRING_MODE, {
      className: 'meta',
      begin: '(ocf|systemd|service|lsb):[\\w_:-]+',
      relevance: 0
    }, {
      className: 'number',
      begin: '\\b\\d+(\\.\\d+)?(ms|s|h|m)?',
      relevance: 0
    }, {
      className: 'literal',
      begin: '[-]?(infinity|inf)',
      relevance: 0
    }, {
      className: 'attr',
      begin: /([A-Za-z\$_\#][\w_-]+)=/,
      relevance: 0
    }, {
      className: 'tag',
      begin: '</?',
      end: '/?>',
      relevance: 0
    }]
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var NUM_SUFFIX = '(_[uif](8|16|32|64))?';
  var CRYSTAL_IDENT_RE = '[a-zA-Z_]\\w*[!?=]?';
  var RE_STARTER = '!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|' + '>>|>|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';
  var CRYSTAL_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\][=?]?';
  var CRYSTAL_KEYWORDS = {
    keyword: 'abstract alias as as? asm begin break case class def do else elsif end ensure enum extend for fun if ' + 'include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? ' + 'return require select self sizeof struct super then type typeof union uninitialized unless until when while with yield ' + '__DIR__ __END_LINE__ __FILE__ __LINE__',
    literal: 'false nil true'
  };
  var SUBST = {
    className: 'subst',
    begin: '#{', end: '}',
    keywords: CRYSTAL_KEYWORDS
  };
  var EXPANSION = {
    className: 'template-variable',
    variants: [{ begin: '\\{\\{', end: '\\}\\}' }, { begin: '\\{%', end: '%\\}' }],
    keywords: CRYSTAL_KEYWORDS
  };

  function recursiveParen(begin, end) {
    var contains = [{ begin: begin, end: end }];
    contains[0].contains = contains;
    return contains;
  }
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
    variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /`/, end: /`/ }, { begin: '%w?\\(', end: '\\)', contains: recursiveParen('\\(', '\\)') }, { begin: '%w?\\[', end: '\\]', contains: recursiveParen('\\[', '\\]') }, { begin: '%w?{', end: '}', contains: recursiveParen('{', '}') }, { begin: '%w?<', end: '>', contains: recursiveParen('<', '>') }, { begin: '%w?/', end: '/' }, { begin: '%w?%', end: '%' }, { begin: '%w?-', end: '-' }, { begin: '%w?\\|', end: '\\|' }, { begin: /<<-\w+$/, end: /^\s*\w+$/ }],
    relevance: 0
  };
  var Q_STRING = {
    className: 'string',
    variants: [{ begin: '%q\\(', end: '\\)', contains: recursiveParen('\\(', '\\)') }, { begin: '%q\\[', end: '\\]', contains: recursiveParen('\\[', '\\]') }, { begin: '%q{', end: '}', contains: recursiveParen('{', '}') }, { begin: '%q<', end: '>', contains: recursiveParen('<', '>') }, { begin: '%q/', end: '/' }, { begin: '%q%', end: '%' }, { begin: '%q-', end: '-' }, { begin: '%q\\|', end: '\\|' }, { begin: /<<-'\w+'$/, end: /^\s*\w+$/ }],
    relevance: 0
  };
  var REGEXP = {
    begin: '(' + RE_STARTER + ')\\s*',
    contains: [{
      className: 'regexp',
      contains: [hljs.BACKSLASH_ESCAPE, SUBST],
      variants: [{ begin: '//[a-z]*', relevance: 0 }, { begin: '/', end: '/[a-z]*' }, { begin: '%r\\(', end: '\\)', contains: recursiveParen('\\(', '\\)') }, { begin: '%r\\[', end: '\\]', contains: recursiveParen('\\[', '\\]') }, { begin: '%r{', end: '}', contains: recursiveParen('{', '}') }, { begin: '%r<', end: '>', contains: recursiveParen('<', '>') }, { begin: '%r/', end: '/' }, { begin: '%r%', end: '%' }, { begin: '%r-', end: '-' }, { begin: '%r\\|', end: '\\|' }]
    }],
    relevance: 0
  };
  var REGEXP2 = {
    className: 'regexp',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
    variants: [{ begin: '%r\\(', end: '\\)', contains: recursiveParen('\\(', '\\)') }, { begin: '%r\\[', end: '\\]', contains: recursiveParen('\\[', '\\]') }, { begin: '%r{', end: '}', contains: recursiveParen('{', '}') }, { begin: '%r<', end: '>', contains: recursiveParen('<', '>') }, { begin: '%r/', end: '/' }, { begin: '%r%', end: '%' }, { begin: '%r-', end: '-' }, { begin: '%r\\|', end: '\\|' }],
    relevance: 0
  };
  var ATTRIBUTE = {
    className: 'meta',
    begin: '@\\[', end: '\\]',
    contains: [hljs.inherit(hljs.QUOTE_STRING_MODE, { className: 'meta-string' })]
  };
  var CRYSTAL_DEFAULT_CONTAINS = [EXPANSION, STRING, Q_STRING, REGEXP, REGEXP2, ATTRIBUTE, hljs.HASH_COMMENT_MODE, {
    className: 'class',
    beginKeywords: 'class module struct', end: '$|;',
    illegal: /=/,
    contains: [hljs.HASH_COMMENT_MODE, hljs.inherit(hljs.TITLE_MODE, { begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?' }), { begin: '<' // relevance booster for inheritance
    }]
  }, {
    className: 'class',
    beginKeywords: 'lib enum union', end: '$|;',
    illegal: /=/,
    contains: [hljs.HASH_COMMENT_MODE, hljs.inherit(hljs.TITLE_MODE, { begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?' })],
    relevance: 10
  }, {
    className: 'function',
    beginKeywords: 'def', end: /\B\b/,
    contains: [hljs.inherit(hljs.TITLE_MODE, {
      begin: CRYSTAL_METHOD_RE,
      endsParent: true
    })]
  }, {
    className: 'function',
    beginKeywords: 'fun macro', end: /\B\b/,
    contains: [hljs.inherit(hljs.TITLE_MODE, {
      begin: CRYSTAL_METHOD_RE,
      endsParent: true
    })],
    relevance: 5
  }, {
    className: 'symbol',
    begin: hljs.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
    relevance: 0
  }, {
    className: 'symbol',
    begin: ':',
    contains: [STRING, { begin: CRYSTAL_METHOD_RE }],
    relevance: 0
  }, {
    className: 'number',
    variants: [{ begin: '\\b0b([01_]*[01])' + NUM_SUFFIX }, { begin: '\\b0o([0-7_]*[0-7])' + NUM_SUFFIX }, { begin: '\\b0x([A-Fa-f0-9_]*[A-Fa-f0-9])' + NUM_SUFFIX }, { begin: '\\b(([0-9][0-9_]*[0-9]|[0-9])(\\.[0-9_]*[0-9])?([eE][+-]?[0-9_]*[0-9])?)' + NUM_SUFFIX }],
    relevance: 0
  }];
  SUBST.contains = CRYSTAL_DEFAULT_CONTAINS;
  EXPANSION.contains = CRYSTAL_DEFAULT_CONTAINS.slice(1); // without EXPANSION

  return {
    aliases: ['cr'],
    lexemes: CRYSTAL_IDENT_RE,
    keywords: CRYSTAL_KEYWORDS,
    contains: CRYSTAL_DEFAULT_CONTAINS
  };
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    keyword:
    // Normal keywords.
    'abstract as base bool break byte case catch char checked const continue decimal ' + 'default delegate do double enum event explicit extern finally fixed float ' + 'for foreach goto if implicit in int interface internal is lock long nameof ' + 'object operator out override params private protected public readonly ref sbyte ' + 'sealed short sizeof stackalloc static string struct switch this try typeof ' + 'uint ulong unchecked unsafe ushort using virtual void volatile while ' +
    // Contextual keywords.
    'add alias ascending async await by descending dynamic equals from get global group into join ' + 'let on orderby partial remove select set value var where yield',
    literal: 'null false true'
  };

  var VERBATIM_STRING = {
    className: 'string',
    begin: '@"', end: '"',
    contains: [{ begin: '""' }]
  };
  var VERBATIM_STRING_NO_LF = hljs.inherit(VERBATIM_STRING, { illegal: /\n/ });
  var SUBST = {
    className: 'subst',
    begin: '{', end: '}',
    keywords: KEYWORDS
  };
  var SUBST_NO_LF = hljs.inherit(SUBST, { illegal: /\n/ });
  var INTERPOLATED_STRING = {
    className: 'string',
    begin: /\$"/, end: '"',
    illegal: /\n/,
    contains: [{ begin: '{{' }, { begin: '}}' }, hljs.BACKSLASH_ESCAPE, SUBST_NO_LF]
  };
  var INTERPOLATED_VERBATIM_STRING = {
    className: 'string',
    begin: /\$@"/, end: '"',
    contains: [{ begin: '{{' }, { begin: '}}' }, { begin: '""' }, SUBST]
  };
  var INTERPOLATED_VERBATIM_STRING_NO_LF = hljs.inherit(INTERPOLATED_VERBATIM_STRING, {
    illegal: /\n/,
    contains: [{ begin: '{{' }, { begin: '}}' }, { begin: '""' }, SUBST_NO_LF]
  });
  SUBST.contains = [INTERPOLATED_VERBATIM_STRING, INTERPOLATED_STRING, VERBATIM_STRING, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE];
  SUBST_NO_LF.contains = [INTERPOLATED_VERBATIM_STRING_NO_LF, INTERPOLATED_STRING, VERBATIM_STRING_NO_LF, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })];
  var STRING = {
    variants: [INTERPOLATED_VERBATIM_STRING, INTERPOLATED_STRING, VERBATIM_STRING, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
  };

  var TYPE_IDENT_RE = hljs.IDENT_RE + '(<' + hljs.IDENT_RE + '(\\s*,\\s*' + hljs.IDENT_RE + ')*>)?(\\[\\])?';

  return {
    aliases: ['csharp'],
    keywords: KEYWORDS,
    illegal: /::/,
    contains: [hljs.COMMENT('///', '$', {
      returnBegin: true,
      contains: [{
        className: 'doctag',
        variants: [{
          begin: '///', relevance: 0
        }, {
          begin: '<!--|-->'
        }, {
          begin: '</?', end: '>'
        }]
      }]
    }), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
      className: 'meta',
      begin: '#', end: '$',
      keywords: {
        'meta-keyword': 'if else elif endif define undef warning error line region endregion pragma checksum'
      }
    }, STRING, hljs.C_NUMBER_MODE, {
      beginKeywords: 'class interface', end: /[{;=]/,
      illegal: /[^\s:]/,
      contains: [hljs.TITLE_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
    }, {
      beginKeywords: 'namespace', end: /[{;=]/,
      illegal: /[^\s:]/,
      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: '[a-zA-Z](\\.?\\w)*' }), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
    }, {
      // [Attributes("")]
      className: 'meta',
      begin: '^\\s*\\[', excludeBegin: true, end: '\\]', excludeEnd: true,
      contains: [{ className: 'meta-string', begin: /"/, end: /"/ }]
    }, {
      // Expression keywords prevent 'keyword Name(...)' from being
      // recognized as a function definition
      beginKeywords: 'new return throw await else',
      relevance: 0
    }, {
      className: 'function',
      begin: '(' + TYPE_IDENT_RE + '\\s+)+' + hljs.IDENT_RE + '\\s*\\(', returnBegin: true,
      end: /[{;=]/, excludeEnd: true,
      keywords: KEYWORDS,
      contains: [{
        begin: hljs.IDENT_RE + '\\s*\\(', returnBegin: true,
        contains: [hljs.TITLE_MODE],
        relevance: 0
      }, {
        className: 'params',
        begin: /\(/, end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        relevance: 0,
        contains: [STRING, hljs.C_NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE]
      }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
    }]
  };
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    case_insensitive: false,
    lexemes: '[a-zA-Z][a-zA-Z0-9_-]*',
    keywords: {
      keyword: 'base-uri child-src connect-src default-src font-src form-action' + ' frame-ancestors frame-src img-src media-src object-src plugin-types' + ' report-uri sandbox script-src style-src'
    },
    contains: [{
      className: 'string',
      begin: "'", end: "'"
    }, {
      className: 'attribute',
      begin: '^Content', end: ':', excludeEnd: true
    }]
  };
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  var RULE = {
    begin: /[A-Z\_\.\-]+\s*:/, returnBegin: true, end: ';', endsWithParent: true,
    contains: [{
      className: 'attribute',
      begin: /\S/, end: ':', excludeEnd: true,
      starts: {
        endsWithParent: true, excludeEnd: true,
        contains: [{
          begin: /[\w-]+\(/, returnBegin: true,
          contains: [{
            className: 'built_in',
            begin: /[\w-]+/
          }, {
            begin: /\(/, end: /\)/,
            contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
          }]
        }, hljs.CSS_NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_BLOCK_COMMENT_MODE, {
          className: 'number', begin: '#[0-9A-Fa-f]+'
        }, {
          className: 'meta', begin: '!important'
        }]
      }
    }]
  };

  return {
    case_insensitive: true,
    illegal: /[=\/|'\$]/,
    contains: [hljs.C_BLOCK_COMMENT_MODE, {
      className: 'selector-id', begin: /#[A-Za-z0-9_-]+/
    }, {
      className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/
    }, {
      className: 'selector-attr',
      begin: /\[/, end: /\]/,
      illegal: '$'
    }, {
      className: 'selector-pseudo',
      begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
    }, {
      begin: '@(font-face|page)',
      lexemes: '[a-z-]+',
      keywords: 'font-face page'
    }, {
      begin: '@', end: '[{;]', // at_rule eating first "{" is a good thing
      // because it doesn’t let it to be parsed as
      // a rule set but instead drops parser into
      // the default mode which is how it should be.
      illegal: /:/, // break on Less variables @var: ...
      contains: [{
        className: 'keyword',
        begin: /\w+/
      }, {
        begin: /\s/, endsWithParent: true, excludeEnd: true,
        relevance: 0,
        contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.CSS_NUMBER_MODE]
      }]
    }, {
      className: 'selector-tag', begin: IDENT_RE,
      relevance: 0
    }, {
      begin: '{', end: '}',
      illegal: /\S/,
      contains: [hljs.C_BLOCK_COMMENT_MODE, RULE]
    }]
  };
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = /**
                 * Known issues:
                 *
                 * - invalid hex string literals will be recognized as a double quoted strings
                 *   but 'x' at the beginning of string will not be matched
                 *
                 * - delimited string literals are not checked for matching end delimiter
                 *   (not possible to do with js regexp)
                 *
                 * - content of token string is colored as a string (i.e. no keyword coloring inside a token string)
                 *   also, content of token string is not validated to contain only valid D tokens
                 *
                 * - special token sequence rule is not strictly following D grammar (anything following #line
                 *   up to the end of line is matched as special token sequence)
                 */

function (hljs) {
  /**
   * Language keywords
   *
   * @type {Object}
   */
  var D_KEYWORDS = {
    keyword: 'abstract alias align asm assert auto body break byte case cast catch class ' + 'const continue debug default delete deprecated do else enum export extern final ' + 'finally for foreach foreach_reverse|10 goto if immutable import in inout int ' + 'interface invariant is lazy macro mixin module new nothrow out override package ' + 'pragma private protected public pure ref return scope shared static struct ' + 'super switch synchronized template this throw try typedef typeid typeof union ' + 'unittest version void volatile while with __FILE__ __LINE__ __gshared|10 ' + '__thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',
    built_in: 'bool cdouble cent cfloat char creal dchar delegate double dstring float function ' + 'idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar ' + 'wstring',
    literal: 'false null true'
  };

  /**
   * Number literal regexps
   *
   * @type {String}
   */
  var decimal_integer_re = '(0|[1-9][\\d_]*)',
      decimal_integer_nosus_re = '(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)',
      binary_integer_re = '0[bB][01_]+',
      hexadecimal_digits_re = '([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)',
      hexadecimal_integer_re = '0[xX]' + hexadecimal_digits_re,
      decimal_exponent_re = '([eE][+-]?' + decimal_integer_nosus_re + ')',
      decimal_float_re = '(' + decimal_integer_nosus_re + '(\\.\\d*|' + decimal_exponent_re + ')|' + '\\d+\\.' + decimal_integer_nosus_re + decimal_integer_nosus_re + '|' + '\\.' + decimal_integer_re + decimal_exponent_re + '?' + ')',
      hexadecimal_float_re = '(0[xX](' + hexadecimal_digits_re + '\\.' + hexadecimal_digits_re + '|' + '\\.?' + hexadecimal_digits_re + ')[pP][+-]?' + decimal_integer_nosus_re + ')',
      integer_re = '(' + decimal_integer_re + '|' + binary_integer_re + '|' + hexadecimal_integer_re + ')',
      float_re = '(' + hexadecimal_float_re + '|' + decimal_float_re + ')';

  /**
   * Escape sequence supported in D string and character literals
   *
   * @type {String}
   */
  var escape_sequence_re = '\\\\(' + '[\'"\\?\\\\abfnrtv]|' + // common escapes
  'u[\\dA-Fa-f]{4}|' + // four hex digit unicode codepoint
  '[0-7]{1,3}|' + // one to three octal digit ascii char code
  'x[\\dA-Fa-f]{2}|' + // two hex digit ascii char code
  'U[\\dA-Fa-f]{8}' + // eight hex digit unicode codepoint
  ')|' + '&[a-zA-Z\\d]{2,};'; // named character entity

  /**
   * D integer number literals
   *
   * @type {Object}
   */
  var D_INTEGER_MODE = {
    className: 'number',
    begin: '\\b' + integer_re + '(L|u|U|Lu|LU|uL|UL)?',
    relevance: 0
  };

  /**
   * [D_FLOAT_MODE description]
   * @type {Object}
   */
  var D_FLOAT_MODE = {
    className: 'number',
    begin: '\\b(' + float_re + '([fF]|L|i|[fF]i|Li)?|' + integer_re + '(i|[fF]i|Li)' + ')',
    relevance: 0
  };

  /**
   * D character literal
   *
   * @type {Object}
   */
  var D_CHARACTER_MODE = {
    className: 'string',
    begin: '\'(' + escape_sequence_re + '|.)', end: '\'',
    illegal: '.'
  };

  /**
   * D string escape sequence
   *
   * @type {Object}
   */
  var D_ESCAPE_SEQUENCE = {
    begin: escape_sequence_re,
    relevance: 0
  };

  /**
   * D double quoted string literal
   *
   * @type {Object}
   */
  var D_STRING_MODE = {
    className: 'string',
    begin: '"',
    contains: [D_ESCAPE_SEQUENCE],
    end: '"[cwd]?'
  };

  /**
   * D wysiwyg and delimited string literals
   *
   * @type {Object}
   */
  var D_WYSIWYG_DELIMITED_STRING_MODE = {
    className: 'string',
    begin: '[rq]"',
    end: '"[cwd]?',
    relevance: 5
  };

  /**
   * D alternate wysiwyg string literal
   *
   * @type {Object}
   */
  var D_ALTERNATE_WYSIWYG_STRING_MODE = {
    className: 'string',
    begin: '`',
    end: '`[cwd]?'
  };

  /**
   * D hexadecimal string literal
   *
   * @type {Object}
   */
  var D_HEX_STRING_MODE = {
    className: 'string',
    begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
    relevance: 10
  };

  /**
   * D delimited string literal
   *
   * @type {Object}
   */
  var D_TOKEN_STRING_MODE = {
    className: 'string',
    begin: 'q"\\{',
    end: '\\}"'
  };

  /**
   * Hashbang support
   *
   * @type {Object}
   */
  var D_HASHBANG_MODE = {
    className: 'meta',
    begin: '^#!',
    end: '$',
    relevance: 5
  };

  /**
   * D special token sequence
   *
   * @type {Object}
   */
  var D_SPECIAL_TOKEN_SEQUENCE_MODE = {
    className: 'meta',
    begin: '#(line)',
    end: '$',
    relevance: 5
  };

  /**
   * D attributes
   *
   * @type {Object}
   */
  var D_ATTRIBUTE_MODE = {
    className: 'keyword',
    begin: '@[a-zA-Z_][a-zA-Z_\\d]*'
  };

  /**
   * D nesting comment
   *
   * @type {Object}
   */
  var D_NESTING_COMMENT_MODE = hljs.COMMENT('\\/\\+', '\\+\\/', {
    contains: ['self'],
    relevance: 10
  });

  return {
    lexemes: hljs.UNDERSCORE_IDENT_RE,
    keywords: D_KEYWORDS,
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, D_NESTING_COMMENT_MODE, D_HEX_STRING_MODE, D_STRING_MODE, D_WYSIWYG_DELIMITED_STRING_MODE, D_ALTERNATE_WYSIWYG_STRING_MODE, D_TOKEN_STRING_MODE, D_FLOAT_MODE, D_INTEGER_MODE, D_CHARACTER_MODE, D_HASHBANG_MODE, D_SPECIAL_TOKEN_SEQUENCE_MODE, D_ATTRIBUTE_MODE]
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['md', 'mkdown', 'mkd'],
    contains: [
    // highlight headers
    {
      className: 'section',
      variants: [{ begin: '^#{1,6}', end: '$' }, { begin: '^.+?\\n[=-]{2,}$' }]
    },
    // inline html
    {
      begin: '<', end: '>',
      subLanguage: 'xml',
      relevance: 0
    },
    // lists (indicators only)
    {
      className: 'bullet',
      begin: '^([*+-]|(\\d+\\.))\\s+'
    },
    // strong segments
    {
      className: 'strong',
      begin: '[*_]{2}.+?[*_]{2}'
    },
    // emphasis segments
    {
      className: 'emphasis',
      variants: [{ begin: '\\*.+?\\*' }, { begin: '_.+?_',
        relevance: 0
      }]
    },
    // blockquotes
    {
      className: 'quote',
      begin: '^>\\s+', end: '$'
    },
    // code snippets
    {
      className: 'code',
      variants: [{
        begin: '^```\w*\s*$', end: '^```\s*$'
      }, {
        begin: '`.+?`'
      }, {
        begin: '^( {4}|\t)', end: '$',
        relevance: 0
      }]
    },
    // horizontal rules
    {
      begin: '^[-\\*]{3,}', end: '$'
    },
    // using links - title and link
    {
      begin: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
      returnBegin: true,
      contains: [{
        className: 'string',
        begin: '\\[', end: '\\]',
        excludeBegin: true,
        returnEnd: true,
        relevance: 0
      }, {
        className: 'link',
        begin: '\\]\\(', end: '\\)',
        excludeBegin: true, excludeEnd: true
      }, {
        className: 'symbol',
        begin: '\\]\\[', end: '\\]',
        excludeBegin: true, excludeEnd: true
      }],
      relevance: 10
    }, {
      begin: /^\[[^\n]+\]:/,
      returnBegin: true,
      contains: [{
        className: 'symbol',
        begin: /\[/, end: /\]/,
        excludeBegin: true, excludeEnd: true
      }, {
        className: 'link',
        begin: /:\s*/, end: /$/,
        excludeBegin: true
      }]
    }]
  };
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '}',
    keywords: 'true false null this is new super'
  };

  var STRING = {
    className: 'string',
    variants: [{
      begin: 'r\'\'\'', end: '\'\'\''
    }, {
      begin: 'r"""', end: '"""'
    }, {
      begin: 'r\'', end: '\'',
      illegal: '\\n'
    }, {
      begin: 'r"', end: '"',
      illegal: '\\n'
    }, {
      begin: '\'\'\'', end: '\'\'\'',
      contains: [hljs.BACKSLASH_ESCAPE, SUBST]
    }, {
      begin: '"""', end: '"""',
      contains: [hljs.BACKSLASH_ESCAPE, SUBST]
    }, {
      begin: '\'', end: '\'',
      illegal: '\\n',
      contains: [hljs.BACKSLASH_ESCAPE, SUBST]
    }, {
      begin: '"', end: '"',
      illegal: '\\n',
      contains: [hljs.BACKSLASH_ESCAPE, SUBST]
    }]
  };
  SUBST.contains = [hljs.C_NUMBER_MODE, STRING];

  var KEYWORDS = {
    keyword: 'assert async await break case catch class const continue default do else enum extends false final ' + 'finally for if in is new null rethrow return super switch sync this throw true try var void while with yield ' + 'abstract as dynamic export external factory get implements import library operator part set static typedef',
    built_in:
    // dart:core
    'print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set ' + 'Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num ' +
    // dart:html
    'document window querySelector querySelectorAll Element ElementList'
  };

  return {
    keywords: KEYWORDS,
    contains: [STRING, hljs.COMMENT('/\\*\\*', '\\*/', {
      subLanguage: 'markdown'
    }), hljs.COMMENT('///', '$', {
      subLanguage: 'markdown'
    }), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
      className: 'class',
      beginKeywords: 'class interface', end: '{', excludeEnd: true,
      contains: [{
        beginKeywords: 'extends implements'
      }, hljs.UNDERSCORE_TITLE_MODE]
    }, hljs.C_NUMBER_MODE, {
      className: 'meta', begin: '@[A-Za-z]+'
    }, {
      begin: '=>' // No markup, just a relevance booster
    }]
  };
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = 'exports register file shl array record property for mod while set ally label uses raise not ' + 'stored class safecall var interface or private static exit index inherited to else stdcall ' + 'override shr asm far resourcestring finalization packed virtual out and protected library do ' + 'xorwrite goto near function end div overload object unit begin string on inline repeat until ' + 'destructor write message program with read initialization except default nil if case cdecl in ' + 'downto threadvar of try pascal const external constructor type public then implementation ' + 'finally published procedure absolute reintroduce operator as is abstract alias assembler ' + 'bitpacked break continue cppdecl cvar enumerator experimental platform deprecated ' + 'unimplemented dynamic export far16 forward generic helper implements interrupt iochecks ' + 'local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat ' + 'specialize strict unaligned varargs ';
  var COMMENT_MODES = [hljs.C_LINE_COMMENT_MODE, hljs.COMMENT(/\{/, /\}/, { relevance: 0 }), hljs.COMMENT(/\(\*/, /\*\)/, { relevance: 10 })];
  var DIRECTIVE = {
    className: 'meta',
    variants: [{ begin: /\{\$/, end: /\}/ }, { begin: /\(\*\$/, end: /\*\)/ }]
  };
  var STRING = {
    className: 'string',
    begin: /'/, end: /'/,
    contains: [{ begin: /''/ }]
  };
  var CHAR_STRING = {
    className: 'string', begin: /(#\d+)+/
  };
  var CLASS = {
    begin: hljs.IDENT_RE + '\\s*=\\s*class\\s*\\(', returnBegin: true,
    contains: [hljs.TITLE_MODE]
  };
  var FUNCTION = {
    className: 'function',
    beginKeywords: 'function constructor destructor procedure', end: /[:;]/,
    keywords: 'function constructor|10 destructor|10 procedure|10',
    contains: [hljs.TITLE_MODE, {
      className: 'params',
      begin: /\(/, end: /\)/,
      keywords: KEYWORDS,
      contains: [STRING, CHAR_STRING, DIRECTIVE].concat(COMMENT_MODES)
    }, DIRECTIVE].concat(COMMENT_MODES)
  };
  return {
    aliases: ['dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm'],
    case_insensitive: true,
    keywords: KEYWORDS,
    illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
    contains: [STRING, CHAR_STRING, hljs.NUMBER_MODE, CLASS, FUNCTION, DIRECTIVE].concat(COMMENT_MODES)
  };
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['patch'],
    contains: [{
      className: 'meta',
      relevance: 10,
      variants: [{ begin: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ }, { begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ }, { begin: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ }]
    }, {
      className: 'comment',
      variants: [{ begin: /Index: /, end: /$/ }, { begin: /={3,}/, end: /$/ }, { begin: /^\-{3}/, end: /$/ }, { begin: /^\*{3} /, end: /$/ }, { begin: /^\+{3}/, end: /$/ }, { begin: /\*{5}/, end: /\*{5}$/ }]
    }, {
      className: 'addition',
      begin: '^\\+', end: '$'
    }, {
      className: 'deletion',
      begin: '^\\-', end: '$'
    }, {
      className: 'addition',
      begin: '^\\!', end: '$'
    }]
  };
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var FILTER = {
    begin: /\|[A-Za-z]+:?/,
    keywords: {
      name: 'truncatewords removetags linebreaksbr yesno get_digit timesince random striptags ' + 'filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands ' + 'title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode ' + 'timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort ' + 'dictsortreversed default_if_none pluralize lower join center default ' + 'truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first ' + 'escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize ' + 'localtime utc timezone'
    },
    contains: [hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE]
  };

  return {
    aliases: ['jinja'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [hljs.COMMENT(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/), hljs.COMMENT(/\{#/, /#}/), {
      className: 'template-tag',
      begin: /\{%/, end: /%}/,
      contains: [{
        className: 'name',
        begin: /\w+/,
        keywords: {
          name: 'comment endcomment load templatetag ifchanged endifchanged if endif firstof for ' + 'endfor ifnotequal endifnotequal widthratio extends include spaceless ' + 'endspaceless regroup ifequal endifequal ssi now with cycle url filter ' + 'endfilter debug block endblock else autoescape endautoescape csrf_token empty elif ' + 'endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix ' + 'plural get_current_language language get_available_languages ' + 'get_current_language_bidi get_language_info get_language_info_list localize ' + 'endlocalize localtime endlocaltime timezone endtimezone get_current_timezone ' + 'verbatim'
        },
        starts: {
          endsWithParent: true,
          keywords: 'in by as',
          contains: [FILTER],
          relevance: 0
        }
      }]
    }, {
      className: 'template-variable',
      begin: /\{\{/, end: /}}/,
      contains: [FILTER]
    }]
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['bind', 'zone'],
    keywords: {
      keyword: 'IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX ' + 'LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT'
    },
    contains: [hljs.COMMENT(';', '$', { relevance: 0 }), {
      className: 'meta',
      begin: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
    },
    // IPv6
    {
      className: 'number',
      begin: '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b'
    },
    // IPv4
    {
      className: 'number',
      begin: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b'
    }, hljs.inherit(hljs.NUMBER_MODE, { begin: /\b\d+[dhwm]?/ })]
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['docker'],
    case_insensitive: true,
    keywords: 'from maintainer expose env arg user onbuild stopsignal',
    contains: [hljs.HASH_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE, {
      beginKeywords: 'run cmd entrypoint volume add copy workdir label healthcheck shell',
      starts: {
        end: /[^\\]\n/,
        subLanguage: 'bash'
      }
    }],
    illegal: '</'
  };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var COMMENT = hljs.COMMENT(/^\s*@?rem\b/, /$/, {
    relevance: 10
  });
  var LABEL = {
    className: 'symbol',
    begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
    relevance: 0
  };
  return {
    aliases: ['bat', 'cmd'],
    case_insensitive: true,
    illegal: /\/\*/,
    keywords: {
      keyword: 'if else goto for in do call exit not exist errorlevel defined ' + 'equ neq lss leq gtr geq',
      built_in: 'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux ' + 'shift cd dir echo setlocal endlocal set pause copy ' + 'append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color ' + 'comp compact convert date dir diskcomp diskcopy doskey erase fs ' + 'find findstr format ftype graftabl help keyb label md mkdir mode more move path ' + 'pause print popd pushd promt rd recover rem rename replace restore rmdir shift' + 'sort start subst time title tree type ver verify vol ' +
      // winutils
      'ping net ipconfig taskkill xcopy ren del'
    },
    contains: [{
      className: 'variable', begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
    }, {
      className: 'function',
      begin: LABEL.begin, end: 'goto:eof',
      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*' }), COMMENT]
    }, {
      className: 'number', begin: '\\b\\d+',
      relevance: 0
    }, COMMENT]
  };
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var QUOTED_PROPERTY = {
    className: 'string',
    begin: /"/, end: /"/
  };
  var APOS_PROPERTY = {
    className: 'string',
    begin: /'/, end: /'/
  };
  var UNQUOTED_PROPERTY = {
    className: 'string',
    begin: '[\\w-?]+:\\w+', end: '\\W',
    relevance: 0
  };
  var VALUELESS_PROPERTY = {
    className: 'string',
    begin: '\\w+-?\\w+', end: '\\W',
    relevance: 0
  };

  return {
    keywords: 'dsconfig',
    contains: [{
      className: 'keyword',
      begin: '^dsconfig', end: '\\s', excludeEnd: true,
      relevance: 10
    }, {
      className: 'built_in',
      begin: '(list|create|get|set|delete)-(\\w+)', end: '\\s', excludeEnd: true,
      illegal: '!@#$%^&*()',
      relevance: 10
    }, {
      className: 'built_in',
      begin: '--(\\w+)', end: '\\s', excludeEnd: true
    }, QUOTED_PROPERTY, APOS_PROPERTY, UNQUOTED_PROPERTY, VALUELESS_PROPERTY, hljs.HASH_COMMENT_MODE]
  };
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var STRINGS = {
    className: 'string',
    variants: [hljs.inherit(hljs.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?"' }), {
      begin: '(u8?|U)?R"', end: '"',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: '\'\\\\?.', end: '\'',
      illegal: '.'
    }]
  };

  var NUMBERS = {
    className: 'number',
    variants: [{ begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)' }, { begin: hljs.C_NUMBER_RE }],
    relevance: 0
  };

  var PREPROCESSOR = {
    className: 'meta',
    begin: '#', end: '$',
    keywords: { 'meta-keyword': 'if else elif endif define undef ifdef ifndef' },
    contains: [{
      begin: /\\\n/, relevance: 0
    }, {
      beginKeywords: 'include', end: '$',
      keywords: { 'meta-keyword': 'include' },
      contains: [hljs.inherit(STRINGS, { className: 'meta-string' }), {
        className: 'meta-string',
        begin: '<', end: '>',
        illegal: '\\n'
      }]
    }, STRINGS, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
  };

  var DTS_REFERENCE = {
    className: 'variable',
    begin: '\\&[a-z\\d_]*\\b'
  };

  var DTS_KEYWORD = {
    className: 'meta-keyword',
    begin: '/[a-z][a-z\\d-]*/'
  };

  var DTS_LABEL = {
    className: 'symbol',
    begin: '^\\s*[a-zA-Z_][a-zA-Z\\d_]*:'
  };

  var DTS_CELL_PROPERTY = {
    className: 'params',
    begin: '<',
    end: '>',
    contains: [NUMBERS, DTS_REFERENCE]
  };

  var DTS_NODE = {
    className: 'class',
    begin: /[a-zA-Z_][a-zA-Z\d_@]*\s{/,
    end: /[{;=]/,
    returnBegin: true,
    excludeEnd: true
  };

  var DTS_ROOT_NODE = {
    className: 'class',
    begin: '/\\s*{',
    end: '};',
    relevance: 10,
    contains: [DTS_REFERENCE, DTS_KEYWORD, DTS_LABEL, DTS_NODE, DTS_CELL_PROPERTY, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBERS, STRINGS]
  };

  return {
    keywords: "",
    contains: [DTS_ROOT_NODE, DTS_REFERENCE, DTS_KEYWORD, DTS_LABEL, DTS_NODE, DTS_CELL_PROPERTY, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBERS, STRINGS, PREPROCESSOR, {
      begin: hljs.IDENT_RE + '::',
      keywords: ""
    }]
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';
  return {
    aliases: ['dst'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [{
      className: 'template-tag',
      begin: /\{[#\/]/, end: /\}/, illegal: /;/,
      contains: [{
        className: 'name',
        begin: /[a-zA-Z\.-]+/,
        starts: {
          endsWithParent: true, relevance: 0,
          contains: [hljs.QUOTE_STRING_MODE]
        }
      }]
    }, {
      className: 'template-variable',
      begin: /\{/, end: /\}/, illegal: /;/,
      keywords: EXPRESSION_KEYWORDS
    }]
  };
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
    var commentMode = hljs.COMMENT(/\(\*/, /\*\)/);

    var nonTerminalMode = {
        className: "attribute",
        begin: /^[ ]*[a-zA-Z][a-zA-Z-]*([\s-]+[a-zA-Z][a-zA-Z]*)*/
    };

    var specialSequenceMode = {
        className: "meta",
        begin: /\?.*\?/
    };

    var ruleBodyMode = {
        begin: /=/, end: /;/,
        contains: [commentMode, specialSequenceMode,
        // terminals
        hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
    };

    return {
        illegal: /\S/,
        contains: [commentMode, nonTerminalMode, ruleBodyMode]
    };
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var ELIXIR_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?';
  var ELIXIR_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
  var ELIXIR_KEYWORDS = 'and false then defined module in return redo retry end for true self when ' + 'next until do begin unless nil break not case cond alias while ensure or ' + 'include use alias fn quote';
  var SUBST = {
    className: 'subst',
    begin: '#\\{', end: '}',
    lexemes: ELIXIR_IDENT_RE,
    keywords: ELIXIR_KEYWORDS
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
    variants: [{
      begin: /'/, end: /'/
    }, {
      begin: /"/, end: /"/
    }]
  };
  var FUNCTION = {
    className: 'function',
    beginKeywords: 'def defp defmacro', end: /\B\b/, // the mode is ended by the title
    contains: [hljs.inherit(hljs.TITLE_MODE, {
      begin: ELIXIR_IDENT_RE,
      endsParent: true
    })]
  };
  var CLASS = hljs.inherit(FUNCTION, {
    className: 'class',
    beginKeywords: 'defimpl defmodule defprotocol defrecord', end: /\bdo\b|$|;/
  });
  var ELIXIR_DEFAULT_CONTAINS = [STRING, hljs.HASH_COMMENT_MODE, CLASS, FUNCTION, {
    className: 'symbol',
    begin: ':(?!\\s)',
    contains: [STRING, { begin: ELIXIR_METHOD_RE }],
    relevance: 0
  }, {
    className: 'symbol',
    begin: ELIXIR_IDENT_RE + ':',
    relevance: 0
  }, {
    className: 'number',
    begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
    relevance: 0
  }, {
    className: 'variable',
    begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))'
  }, {
    begin: '->'
  }, { // regexp container
    begin: '(' + hljs.RE_STARTERS_RE + ')\\s*',
    contains: [hljs.HASH_COMMENT_MODE, {
      className: 'regexp',
      illegal: '\\n',
      contains: [hljs.BACKSLASH_ESCAPE, SUBST],
      variants: [{
        begin: '/', end: '/[a-z]*'
      }, {
        begin: '%r\\[', end: '\\][a-z]*'
      }]
    }],
    relevance: 0
  }];
  SUBST.contains = ELIXIR_DEFAULT_CONTAINS;

  return {
    lexemes: ELIXIR_IDENT_RE,
    keywords: ELIXIR_KEYWORDS,
    contains: ELIXIR_DEFAULT_CONTAINS
  };
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var COMMENT = {
    variants: [hljs.COMMENT('--', '$'), hljs.COMMENT('{-', '-}', {
      contains: ['self']
    })]
  };

  var CONSTRUCTOR = {
    className: 'type',
    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (built-in, infix).
    relevance: 0
  };

  var LIST = {
    begin: '\\(', end: '\\)',
    illegal: '"',
    contains: [{ className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?' }, COMMENT]
  };

  var RECORD = {
    begin: '{', end: '}',
    contains: LIST.contains
  };

  return {
    keywords: 'let in if then else case of where module import exposing ' + 'type alias as infix infixl infixr port effect command subscription',
    contains: [

    // Top-level constructions.

    {
      beginKeywords: 'port effect module', end: 'exposing',
      keywords: 'port effect module where command subscription exposing',
      contains: [LIST, COMMENT],
      illegal: '\\W\\.|;'
    }, {
      begin: 'import', end: '$',
      keywords: 'import as exposing',
      contains: [LIST, COMMENT],
      illegal: '\\W\\.|;'
    }, {
      begin: 'type', end: '$',
      keywords: 'type alias',
      contains: [CONSTRUCTOR, LIST, RECORD, COMMENT]
    }, {
      beginKeywords: 'infix infixl infixr', end: '$',
      contains: [hljs.C_NUMBER_MODE, COMMENT]
    }, {
      begin: 'port', end: '$',
      keywords: 'port',
      contains: [COMMENT]
    },

    // Literals and names.

    // TODO: characters.
    hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, CONSTRUCTOR, hljs.inherit(hljs.TITLE_MODE, { begin: '^[_a-z][\\w\']*' }), COMMENT, { begin: '->|<-' // No markup, relevance booster
    }],
    illegal: /;/
  };
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var RUBY_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
  var RUBY_KEYWORDS = {
    keyword: 'and then defined module in return redo if BEGIN retry end for self when ' + 'next until do begin unless END rescue else break undef not super class case ' + 'require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor',
    literal: 'true false nil'
  };
  var YARDOCTAG = {
    className: 'doctag',
    begin: '@[A-Za-z]+'
  };
  var IRB_OBJECT = {
    begin: '#<', end: '>'
  };
  var COMMENT_MODES = [hljs.COMMENT('#', '$', {
    contains: [YARDOCTAG]
  }), hljs.COMMENT('^\\=begin', '^\\=end', {
    contains: [YARDOCTAG],
    relevance: 10
  }), hljs.COMMENT('^__END__', '\\n$')];
  var SUBST = {
    className: 'subst',
    begin: '#\\{', end: '}',
    keywords: RUBY_KEYWORDS
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
    variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /`/, end: /`/ }, { begin: '%[qQwWx]?\\(', end: '\\)' }, { begin: '%[qQwWx]?\\[', end: '\\]' }, { begin: '%[qQwWx]?{', end: '}' }, { begin: '%[qQwWx]?<', end: '>' }, { begin: '%[qQwWx]?/', end: '/' }, { begin: '%[qQwWx]?%', end: '%' }, { begin: '%[qQwWx]?-', end: '-' }, { begin: '%[qQwWx]?\\|', end: '\\|' }, {
      // \B in the beginning suppresses recognition of ?-sequences where ?
      // is the last character of a preceding identifier, as in: `func?4`
      begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
    }, {
      begin: /<<(-?)\w+$/, end: /^\s*\w+$/
    }]
  };
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)', endsParent: true,
    keywords: RUBY_KEYWORDS
  };

  var RUBY_DEFAULT_CONTAINS = [STRING, IRB_OBJECT, {
    className: 'class',
    beginKeywords: 'class module', end: '$|;',
    illegal: /=/,
    contains: [hljs.inherit(hljs.TITLE_MODE, { begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?' }), {
      begin: '<\\s*',
      contains: [{
        begin: '(' + hljs.IDENT_RE + '::)?' + hljs.IDENT_RE
      }]
    }].concat(COMMENT_MODES)
  }, {
    className: 'function',
    beginKeywords: 'def', end: '$|;',
    contains: [hljs.inherit(hljs.TITLE_MODE, { begin: RUBY_METHOD_RE }), PARAMS].concat(COMMENT_MODES)
  }, {
    // swallow namespace qualifiers before symbols
    begin: hljs.IDENT_RE + '::'
  }, {
    className: 'symbol',
    begin: hljs.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
    relevance: 0
  }, {
    className: 'symbol',
    begin: ':(?!\\s)',
    contains: [STRING, { begin: RUBY_METHOD_RE }],
    relevance: 0
  }, {
    className: 'number',
    begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
    relevance: 0
  }, {
    begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))' // variables
  }, {
    className: 'params',
    begin: /\|/, end: /\|/,
    keywords: RUBY_KEYWORDS
  }, { // regexp container
    begin: '(' + hljs.RE_STARTERS_RE + '|unless)\\s*',
    keywords: 'unless',
    contains: [IRB_OBJECT, {
      className: 'regexp',
      contains: [hljs.BACKSLASH_ESCAPE, SUBST],
      illegal: /\n/,
      variants: [{ begin: '/', end: '/[a-z]*' }, { begin: '%r{', end: '}[a-z]*' }, { begin: '%r\\(', end: '\\)[a-z]*' }, { begin: '%r!', end: '![a-z]*' }, { begin: '%r\\[', end: '\\][a-z]*' }]
    }].concat(COMMENT_MODES),
    relevance: 0
  }].concat(COMMENT_MODES);

  SUBST.contains = RUBY_DEFAULT_CONTAINS;
  PARAMS.contains = RUBY_DEFAULT_CONTAINS;

  var SIMPLE_PROMPT = "[>?]>";
  var DEFAULT_PROMPT = "[\\w#]+\\(\\w+\\):\\d+:\\d+>";
  var RVM_PROMPT = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>";

  var IRB_DEFAULT = [{
    begin: /^\s*=>/,
    starts: {
      end: '$', contains: RUBY_DEFAULT_CONTAINS
    }
  }, {
    className: 'meta',
    begin: '^(' + SIMPLE_PROMPT + "|" + DEFAULT_PROMPT + '|' + RVM_PROMPT + ')',
    starts: {
      end: '$', contains: RUBY_DEFAULT_CONTAINS
    }
  }];

  return {
    aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
    keywords: RUBY_KEYWORDS,
    illegal: /\/\*/,
    contains: COMMENT_MODES.concat(IRB_DEFAULT).concat(RUBY_DEFAULT_CONTAINS)
  };
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    subLanguage: 'xml',
    contains: [hljs.COMMENT('<%#', '%>'), {
      begin: '<%[%=-]?', end: '[%-]?%>',
      subLanguage: 'ruby',
      excludeBegin: true,
      excludeEnd: true
    }]
  };
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: {
      built_in: 'spawn spawn_link self',
      keyword: 'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if ' + 'let not of or orelse|10 query receive rem try when xor'
    },
    contains: [{
      className: 'meta', begin: '^[0-9]+> ',
      relevance: 10
    }, hljs.COMMENT('%', '$'), {
      className: 'number',
      begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
      relevance: 0
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, {
      begin: '\\?(::)?([A-Z]\\w*(::)?)+'
    }, {
      begin: '->'
    }, {
      begin: 'ok'
    }, {
      begin: '!'
    }, {
      begin: '(\\b[a-z\'][a-zA-Z0-9_\']*:[a-z\'][a-zA-Z0-9_\']*)|(\\b[a-z\'][a-zA-Z0-9_\']*)',
      relevance: 0
    }, {
      begin: '[A-Z][a-zA-Z0-9_\']*',
      relevance: 0
    }]
  };
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var BASIC_ATOM_RE = '[a-z\'][a-zA-Z0-9_\']*';
  var FUNCTION_NAME_RE = '(' + BASIC_ATOM_RE + ':' + BASIC_ATOM_RE + '|' + BASIC_ATOM_RE + ')';
  var ERLANG_RESERVED = {
    keyword: 'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if ' + 'let not of orelse|10 query receive rem try when xor',
    literal: 'false true'
  };

  var COMMENT = hljs.COMMENT('%', '$');
  var NUMBER = {
    className: 'number',
    begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
    relevance: 0
  };
  var NAMED_FUN = {
    begin: 'fun\\s+' + BASIC_ATOM_RE + '/\\d+'
  };
  var FUNCTION_CALL = {
    begin: FUNCTION_NAME_RE + '\\(', end: '\\)',
    returnBegin: true,
    relevance: 0,
    contains: [{
      begin: FUNCTION_NAME_RE, relevance: 0
    }, {
      begin: '\\(', end: '\\)', endsWithParent: true,
      returnEnd: true,
      relevance: 0
      // "contains" defined later
    }]
  };
  var TUPLE = {
    begin: '{', end: '}',
    relevance: 0
    // "contains" defined later
  };
  var VAR1 = {
    begin: '\\b_([A-Z][A-Za-z0-9_]*)?',
    relevance: 0
  };
  var VAR2 = {
    begin: '[A-Z][a-zA-Z0-9_]*',
    relevance: 0
  };
  var RECORD_ACCESS = {
    begin: '#' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0,
    returnBegin: true,
    contains: [{
      begin: '#' + hljs.UNDERSCORE_IDENT_RE,
      relevance: 0
    }, {
      begin: '{', end: '}',
      relevance: 0
      // "contains" defined later
    }]
  };

  var BLOCK_STATEMENTS = {
    beginKeywords: 'fun receive if try case', end: 'end',
    keywords: ERLANG_RESERVED
  };
  BLOCK_STATEMENTS.contains = [COMMENT, NAMED_FUN, hljs.inherit(hljs.APOS_STRING_MODE, { className: '' }), BLOCK_STATEMENTS, FUNCTION_CALL, hljs.QUOTE_STRING_MODE, NUMBER, TUPLE, VAR1, VAR2, RECORD_ACCESS];

  var BASIC_MODES = [COMMENT, NAMED_FUN, BLOCK_STATEMENTS, FUNCTION_CALL, hljs.QUOTE_STRING_MODE, NUMBER, TUPLE, VAR1, VAR2, RECORD_ACCESS];
  FUNCTION_CALL.contains[1].contains = BASIC_MODES;
  TUPLE.contains = BASIC_MODES;
  RECORD_ACCESS.contains[1].contains = BASIC_MODES;

  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)',
    contains: BASIC_MODES
  };
  return {
    aliases: ['erl'],
    keywords: ERLANG_RESERVED,
    illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
    contains: [{
      className: 'function',
      begin: '^' + BASIC_ATOM_RE + '\\s*\\(', end: '->',
      returnBegin: true,
      illegal: '\\(|#|//|/\\*|\\\\|:|;',
      contains: [PARAMS, hljs.inherit(hljs.TITLE_MODE, { begin: BASIC_ATOM_RE })],
      starts: {
        end: ';|\\.',
        keywords: ERLANG_RESERVED,
        contains: BASIC_MODES
      }
    }, COMMENT, {
      begin: '^-', end: '\\.',
      relevance: 0,
      excludeEnd: true,
      returnBegin: true,
      lexemes: '-' + hljs.IDENT_RE,
      keywords: '-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn ' + '-import -include -include_lib -compile -define -else -endif -file -behaviour ' + '-behavior -spec',
      contains: [PARAMS]
    }, NUMBER, hljs.QUOTE_STRING_MODE, RECORD_ACCESS, VAR1, VAR2, TUPLE, { begin: /\.$/ // relevance booster
    }]
  };
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['xlsx', 'xls'],
    case_insensitive: true,
    lexemes: /[a-zA-Z][\w\.]*/,
    // built-in functions imported from https://web.archive.org/web/20160513042710/https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188
    keywords: {
      built_in: 'ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF|0 IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST'
    },
    contains: [{
      /* matches a beginning equal sign found in Excel formula examples */
      begin: /^=/,
      end: /[^=]/, returnEnd: true, illegal: /=/, /* only allow single equal sign at front of line */
      relevance: 10
    },
    /* technically, there can be more than 2 letters in column names, but this prevents conflict with some keywords */
    {
      /* matches a reference to a single cell */
      className: 'symbol',
      begin: /\b[A-Z]{1,2}\d+\b/,
      end: /[^\d]/, excludeEnd: true,
      relevance: 0
    }, {
      /* matches a reference to a range of cells */
      className: 'symbol',
      begin: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,
      relevance: 0
    }, hljs.BACKSLASH_ESCAPE, hljs.QUOTE_STRING_MODE, {
      className: 'number',
      begin: hljs.NUMBER_RE + '(%)?',
      relevance: 0
    },
    /* Excel formula comments are done by putting the comment in a function call to N() */
    hljs.COMMENT(/\bN\(/, /\)/, {
      excludeBegin: true,
      excludeEnd: true,
      illegal: /\n/
    })]
  };
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    contains: [{
      begin: /[^\u2401\u0001]+/,
      end: /[\u2401\u0001]/,
      excludeEnd: true,
      returnBegin: true,
      returnEnd: false,
      contains: [{
        begin: /([^\u2401\u0001=]+)/,
        end: /=([^\u2401\u0001=]+)/,
        returnEnd: true,
        returnBegin: false,
        className: 'attr'
      }, {
        begin: /=/,
        end: /([\u2401\u0001])/,
        excludeEnd: true,
        excludeBegin: true,
        className: 'string'
      }]
    }],
    case_insensitive: true
  };
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {

    var CHAR = {
        className: 'string',
        begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
    };

    var STRING = {
        className: 'string',
        variants: [{
            begin: '"', end: '"'
        }]
    };

    var NAME = {
        className: 'title',
        begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
    };

    var METHOD = {
        className: 'function',
        beginKeywords: 'def',
        end: /[:={\[(\n;]/,
        excludeEnd: true,
        contains: [NAME]
    };

    return {
        keywords: {
            literal: 'true false',
            keyword: 'case class def else enum if impl import in lat rel index let match namespace switch type yield with'
        },
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, CHAR, STRING, METHOD, hljs.C_NUMBER_MODE]
    };
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)'
  };

  var F_KEYWORDS = {
    literal: '.False. .True.',
    keyword: 'kind do while private call intrinsic where elsewhere ' + 'type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then ' + 'public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. ' + 'goto save else use module select case ' + 'access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit ' + 'continue format pause cycle exit ' + 'c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg ' + 'synchronous nopass non_overridable pass protected volatile abstract extends import ' + 'non_intrinsic value deferred generic final enumerator class associate bind enum ' + 'c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t ' + 'c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double ' + 'c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr ' + 'c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer ' + 'c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor ' + 'numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ' + 'ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive ' + 'pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure ' + 'integer real character complex logical dimension allocatable|10 parameter ' + 'external implicit|10 none double precision assign intent optional pointer ' + 'target in out common equivalence data',
    built_in: 'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint ' + 'dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl ' + 'algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama ' + 'iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod ' + 'qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log ' + 'log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate ' + 'adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product ' + 'eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul ' + 'maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product ' + 'radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind ' + 'set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer ' + 'dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ' + 'ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode ' + 'is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of' + 'acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 ' + 'atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits ' + 'bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr ' + 'num_images parity popcnt poppar shifta shiftl shiftr this_image'
  };
  return {
    case_insensitive: true,
    aliases: ['f90', 'f95'],
    keywords: F_KEYWORDS,
    illegal: /\/\*/,
    contains: [hljs.inherit(hljs.APOS_STRING_MODE, { className: 'string', relevance: 0 }), hljs.inherit(hljs.QUOTE_STRING_MODE, { className: 'string', relevance: 0 }), {
      className: 'function',
      beginKeywords: 'subroutine function program',
      illegal: '[${=\\n]',
      contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
    }, hljs.COMMENT('!', '$', { relevance: 0 }), {
      className: 'number',
      begin: '(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?',
      relevance: 0
    }]
  };
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var TYPEPARAM = {
    begin: '<', end: '>',
    contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /'[a-zA-Z0-9_]+/ })]
  };

  return {
    aliases: ['fs'],
    keywords: 'abstract and as assert base begin class default delegate do done ' + 'downcast downto elif else end exception extern false finally for ' + 'fun function global if in inherit inline interface internal lazy let ' + 'match member module mutable namespace new null of open or ' + 'override private public rec return sig static struct then to ' + 'true try type upcast use val void when while with yield',
    illegal: /\/\*/,
    contains: [{
      // monad builder keywords (matches before non-bang kws)
      className: 'keyword',
      begin: /\b(yield|return|let|do)!/
    }, {
      className: 'string',
      begin: '@"', end: '"',
      contains: [{ begin: '""' }]
    }, {
      className: 'string',
      begin: '"""', end: '"""'
    }, hljs.COMMENT('\\(\\*', '\\*\\)'), {
      className: 'class',
      beginKeywords: 'type', end: '\\(|=|$', excludeEnd: true,
      contains: [hljs.UNDERSCORE_TITLE_MODE, TYPEPARAM]
    }, {
      className: 'meta',
      begin: '\\[<', end: '>\\]',
      relevance: 10
    }, {
      className: 'symbol',
      begin: '\\B(\'[A-Za-z])\\b',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, hljs.C_LINE_COMMENT_MODE, hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null }), hljs.C_NUMBER_MODE]
  };
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    'keyword': 'abort acronym acronyms alias all and assign binary card diag display ' + 'else eq file files for free ge gt if integer le loop lt maximizing ' + 'minimizing model models ne negative no not option options or ord ' + 'positive prod put putpage puttl repeat sameas semicont semiint smax ' + 'smin solve sos1 sos2 sum system table then until using while xor yes',
    'literal': 'eps inf na',
    'built-in': 'abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy ' + 'cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact ' + 'floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max ' + 'min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power ' + 'randBinomial randLinear randTriangle round rPower sigmoid sign ' + 'signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt ' + 'tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp ' + 'bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt ' + 'rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear ' + 'jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion ' + 'handleCollect handleDelete handleStatus handleSubmit heapFree ' + 'heapLimit heapSize jobHandle jobKill jobStatus jobTerminate ' + 'licenseLevel licenseStatus maxExecError sleep timeClose timeComp ' + 'timeElapsed timeExec timeStart'
  };
  var PARAMS = {
    className: 'params',
    begin: /\(/, end: /\)/,
    excludeBegin: true,
    excludeEnd: true
  };
  var SYMBOLS = {
    className: 'symbol',
    variants: [{ begin: /\=[lgenxc]=/ }, { begin: /\$/ }]
  };
  var QSTR = { // One-line quoted comment string
    className: 'comment',
    variants: [{ begin: '\'', end: '\'' }, { begin: '"', end: '"' }],
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  var ASSIGNMENT = {
    begin: '/',
    end: '/',
    keywords: KEYWORDS,
    contains: [QSTR, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_NUMBER_MODE]
  };
  var DESCTEXT = { // Parameter/set/variable description text
    begin: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
    excludeBegin: true,
    end: '$',
    endsWithParent: true,
    contains: [QSTR, ASSIGNMENT, {
      className: 'comment',
      begin: /([ ]*[a-z0-9&#*=?@>\\<:\-,()$\[\]_.{}!+%^]+)+/,
      relevance: 0
    }]
  };

  return {
    aliases: ['gms'],
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [hljs.COMMENT(/^\$ontext/, /^\$offtext/), {
      className: 'meta',
      begin: '^\\$[a-z0-9]+',
      end: '$',
      returnBegin: true,
      contains: [{
        className: 'meta-keyword',
        begin: '^\\$[a-z0-9]+'
      }]
    }, hljs.COMMENT('^\\*', '$'), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE,
    // Declarations
    {
      beginKeywords: 'set sets parameter parameters variable variables ' + 'scalar scalars equation equations',
      end: ';',
      contains: [hljs.COMMENT('^\\*', '$'), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, ASSIGNMENT, DESCTEXT]
    }, { // table environment
      beginKeywords: 'table',
      end: ';',
      returnBegin: true,
      contains: [{ // table header row
        beginKeywords: 'table',
        end: '$',
        contains: [DESCTEXT]
      }, hljs.COMMENT('^\\*', '$'), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_NUMBER_MODE]
    },
    // Function definitions
    {
      className: 'function',
      begin: /^[a-z][a-z0-9_,\-+' ()$]+\.{2}/,
      returnBegin: true,
      contains: [{ // Function title
        className: 'title',
        begin: /^[a-z0-9_]+/
      }, PARAMS, SYMBOLS]
    }, hljs.C_NUMBER_MODE, SYMBOLS]
  };
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    keyword: 'and bool break call callexe checkinterrupt clear clearg closeall cls comlog compile ' + 'continue create debug declare delete disable dlibrary dllcall do dos ed edit else ' + 'elseif enable end endfor endif endp endo errorlog errorlogat expr external fn ' + 'for format goto gosub graph if keyword let lib library line load loadarray loadexe ' + 'loadf loadk loadm loadp loads loadx local locate loopnextindex lprint lpwidth lshow ' + 'matrix msym ndpclex new not open or output outwidth plot plotsym pop prcsn print ' + 'printdos proc push retp return rndcon rndmod rndmult rndseed run save saveall screen ' + 'scroll setarray show sparse stop string struct system trace trap threadfor ' + 'threadendfor threadbegin threadjoin threadstat threadend until use while winprint',
    built_in: 'abs acf aconcat aeye amax amean AmericanBinomCall AmericanBinomCall_Greeks AmericanBinomCall_ImpVol ' + 'AmericanBinomPut AmericanBinomPut_Greeks AmericanBinomPut_ImpVol AmericanBSCall AmericanBSCall_Greeks ' + 'AmericanBSCall_ImpVol AmericanBSPut AmericanBSPut_Greeks AmericanBSPut_ImpVol amin amult annotationGetDefaults ' + 'annotationSetBkd annotationSetFont annotationSetLineColor annotationSetLineStyle annotationSetLineThickness ' + 'annualTradingDays arccos arcsin areshape arrayalloc arrayindex arrayinit arraytomat asciiload asclabel astd ' + 'astds asum atan atan2 atranspose axmargin balance band bandchol bandcholsol bandltsol bandrv bandsolpd bar ' + 'base10 begwind besselj bessely beta box boxcox cdfBeta cdfBetaInv cdfBinomial cdfBinomialInv cdfBvn cdfBvn2 ' + 'cdfBvn2e cdfCauchy cdfCauchyInv cdfChic cdfChii cdfChinc cdfChincInv cdfExp cdfExpInv cdfFc cdfFnc cdfFncInv ' + 'cdfGam cdfGenPareto cdfHyperGeo cdfLaplace cdfLaplaceInv cdfLogistic cdfLogisticInv cdfmControlCreate cdfMvn ' + 'cdfMvn2e cdfMvnce cdfMvne cdfMvt2e cdfMvtce cdfMvte cdfN cdfN2 cdfNc cdfNegBinomial cdfNegBinomialInv cdfNi ' + 'cdfPoisson cdfPoissonInv cdfRayleigh cdfRayleighInv cdfTc cdfTci cdfTnc cdfTvn cdfWeibull cdfWeibullInv cdir ' + 'ceil ChangeDir chdir chiBarSquare chol choldn cholsol cholup chrs close code cols colsf combinate combinated ' + 'complex con cond conj cons ConScore contour conv convertsatostr convertstrtosa corrm corrms corrvc corrx corrxs ' + 'cos cosh counts countwts crossprd crout croutp csrcol csrlin csvReadM csvReadSA cumprodc cumsumc curve cvtos ' + 'datacreate datacreatecomplex datalist dataload dataloop dataopen datasave date datestr datestring datestrymd ' + 'dayinyr dayofweek dbAddDatabase dbClose dbCommit dbCreateQuery dbExecQuery dbGetConnectOptions dbGetDatabaseName ' + 'dbGetDriverName dbGetDrivers dbGetHostName dbGetLastErrorNum dbGetLastErrorText dbGetNumericalPrecPolicy ' + 'dbGetPassword dbGetPort dbGetTableHeaders dbGetTables dbGetUserName dbHasFeature dbIsDriverAvailable dbIsOpen ' + 'dbIsOpenError dbOpen dbQueryBindValue dbQueryClear dbQueryCols dbQueryExecPrepared dbQueryFetchAllM dbQueryFetchAllSA ' + 'dbQueryFetchOneM dbQueryFetchOneSA dbQueryFinish dbQueryGetBoundValue dbQueryGetBoundValues dbQueryGetField ' + 'dbQueryGetLastErrorNum dbQueryGetLastErrorText dbQueryGetLastInsertID dbQueryGetLastQuery dbQueryGetPosition ' + 'dbQueryIsActive dbQueryIsForwardOnly dbQueryIsNull dbQueryIsSelect dbQueryIsValid dbQueryPrepare dbQueryRows ' + 'dbQuerySeek dbQuerySeekFirst dbQuerySeekLast dbQuerySeekNext dbQuerySeekPrevious dbQuerySetForwardOnly ' + 'dbRemoveDatabase dbRollback dbSetConnectOptions dbSetDatabaseName dbSetHostName dbSetNumericalPrecPolicy ' + 'dbSetPort dbSetUserName dbTransaction DeleteFile delif delrows denseToSp denseToSpRE denToZero design det detl ' + 'dfft dffti diag diagrv digamma doswin DOSWinCloseall DOSWinOpen dotfeq dotfeqmt dotfge dotfgemt dotfgt dotfgtmt ' + 'dotfle dotflemt dotflt dotfltmt dotfne dotfnemt draw drop dsCreate dstat dstatmt dstatmtControlCreate dtdate dtday ' + 'dttime dttodtv dttostr dttoutc dtvnormal dtvtodt dtvtoutc dummy dummybr dummydn eig eigh eighv eigv elapsedTradingDays ' + 'endwind envget eof eqSolve eqSolvemt eqSolvemtControlCreate eqSolvemtOutCreate eqSolveset erf erfc erfccplx erfcplx error ' + 'etdays ethsec etstr EuropeanBinomCall EuropeanBinomCall_Greeks EuropeanBinomCall_ImpVol EuropeanBinomPut ' + 'EuropeanBinomPut_Greeks EuropeanBinomPut_ImpVol EuropeanBSCall EuropeanBSCall_Greeks EuropeanBSCall_ImpVol ' + 'EuropeanBSPut EuropeanBSPut_Greeks EuropeanBSPut_ImpVol exctsmpl exec execbg exp extern eye fcheckerr fclearerr feq ' + 'feqmt fflush fft ffti fftm fftmi fftn fge fgemt fgets fgetsa fgetsat fgetst fgt fgtmt fileinfo filesa fle flemt ' + 'floor flt fltmt fmod fne fnemt fonts fopen formatcv formatnv fputs fputst fseek fstrerror ftell ftocv ftos ftostrC ' + 'gamma gammacplx gammaii gausset gdaAppend gdaCreate gdaDStat gdaDStatMat gdaGetIndex gdaGetName gdaGetNames gdaGetOrders ' + 'gdaGetType gdaGetTypes gdaGetVarInfo gdaIsCplx gdaLoad gdaPack gdaRead gdaReadByIndex gdaReadSome gdaReadSparse ' + 'gdaReadStruct gdaReportVarInfo gdaSave gdaUpdate gdaUpdateAndPack gdaVars gdaWrite gdaWrite32 gdaWriteSome getarray ' + 'getdims getf getGAUSShome getmatrix getmatrix4D getname getnamef getNextTradingDay getNextWeekDay getnr getorders ' + 'getpath getPreviousTradingDay getPreviousWeekDay getRow getscalar3D getscalar4D getTrRow getwind glm gradcplx gradMT ' + 'gradMTm gradMTT gradMTTm gradp graphprt graphset hasimag header headermt hess hessMT hessMTg hessMTgw hessMTm ' + 'hessMTmw hessMTT hessMTTg hessMTTgw hessMTTm hessMTw hessp hist histf histp hsec imag indcv indexcat indices indices2 ' + 'indicesf indicesfn indnv indsav integrate1d integrateControlCreate intgrat2 intgrat3 inthp1 inthp2 inthp3 inthp4 ' + 'inthpControlCreate intquad1 intquad2 intquad3 intrleav intrleavsa intrsect intsimp inv invpd invswp iscplx iscplxf ' + 'isden isinfnanmiss ismiss key keyav keyw lag lag1 lagn lapEighb lapEighi lapEighvb lapEighvi lapgEig lapgEigh lapgEighv ' + 'lapgEigv lapgSchur lapgSvdcst lapgSvds lapgSvdst lapSvdcusv lapSvds lapSvdusv ldlp ldlsol linSolve listwise ln lncdfbvn ' + 'lncdfbvn2 lncdfmvn lncdfn lncdfn2 lncdfnc lnfact lngammacplx lnpdfmvn lnpdfmvt lnpdfn lnpdft loadd loadstruct loadwind ' + 'loess loessmt loessmtControlCreate log loglog logx logy lower lowmat lowmat1 ltrisol lu lusol machEpsilon make makevars ' + 'makewind margin matalloc matinit mattoarray maxbytes maxc maxindc maxv maxvec mbesselei mbesselei0 mbesselei1 mbesseli ' + 'mbesseli0 mbesseli1 meanc median mergeby mergevar minc minindc minv miss missex missrv moment momentd movingave ' + 'movingaveExpwgt movingaveWgt nextindex nextn nextnevn nextwind ntos null null1 numCombinations ols olsmt olsmtControlCreate ' + 'olsqr olsqr2 olsqrmt ones optn optnevn orth outtyp pacf packedToSp packr parse pause pdfCauchy pdfChi pdfExp pdfGenPareto ' + 'pdfHyperGeo pdfLaplace pdfLogistic pdfn pdfPoisson pdfRayleigh pdfWeibull pi pinv pinvmt plotAddArrow plotAddBar plotAddBox ' + 'plotAddHist plotAddHistF plotAddHistP plotAddPolar plotAddScatter plotAddShape plotAddTextbox plotAddTS plotAddXY plotArea ' + 'plotBar plotBox plotClearLayout plotContour plotCustomLayout plotGetDefaults plotHist plotHistF plotHistP plotLayout ' + 'plotLogLog plotLogX plotLogY plotOpenWindow plotPolar plotSave plotScatter plotSetAxesPen plotSetBar plotSetBarFill ' + 'plotSetBarStacked plotSetBkdColor plotSetFill plotSetGrid plotSetLegend plotSetLineColor plotSetLineStyle plotSetLineSymbol ' + 'plotSetLineThickness plotSetNewWindow plotSetTitle plotSetWhichYAxis plotSetXAxisShow plotSetXLabel plotSetXRange ' + 'plotSetXTicInterval plotSetXTicLabel plotSetYAxisShow plotSetYLabel plotSetYRange plotSetZAxisShow plotSetZLabel ' + 'plotSurface plotTS plotXY polar polychar polyeval polygamma polyint polymake polymat polymroot polymult polyroot ' + 'pqgwin previousindex princomp printfm printfmt prodc psi putarray putf putvals pvCreate pvGetIndex pvGetParNames ' + 'pvGetParVector pvLength pvList pvPack pvPacki pvPackm pvPackmi pvPacks pvPacksi pvPacksm pvPacksmi pvPutParVector ' + 'pvTest pvUnpack QNewton QNewtonmt QNewtonmtControlCreate QNewtonmtOutCreate QNewtonSet QProg QProgmt QProgmtInCreate ' + 'qqr qqre qqrep qr qre qrep qrsol qrtsol qtyr qtyre qtyrep quantile quantiled qyr qyre qyrep qz rank rankindx readr ' + 'real reclassify reclassifyCuts recode recserar recsercp recserrc rerun rescale reshape rets rev rfft rffti rfftip rfftn ' + 'rfftnp rfftp rndBernoulli rndBeta rndBinomial rndCauchy rndChiSquare rndCon rndCreateState rndExp rndGamma rndGeo rndGumbel ' + 'rndHyperGeo rndi rndKMbeta rndKMgam rndKMi rndKMn rndKMnb rndKMp rndKMu rndKMvm rndLaplace rndLCbeta rndLCgam rndLCi rndLCn ' + 'rndLCnb rndLCp rndLCu rndLCvm rndLogNorm rndMTu rndMVn rndMVt rndn rndnb rndNegBinomial rndp rndPoisson rndRayleigh ' + 'rndStateSkip rndu rndvm rndWeibull rndWishart rotater round rows rowsf rref sampleData satostrC saved saveStruct savewind ' + 'scale scale3d scalerr scalinfnanmiss scalmiss schtoc schur searchsourcepath seekr select selif seqa seqm setdif setdifsa ' + 'setvars setvwrmode setwind shell shiftr sin singleindex sinh sleep solpd sortc sortcc sortd sorthc sorthcc sortind ' + 'sortindc sortmc sortr sortrc spBiconjGradSol spChol spConjGradSol spCreate spDenseSubmat spDiagRvMat spEigv spEye spLDL ' + 'spline spLU spNumNZE spOnes spreadSheetReadM spreadSheetReadSA spreadSheetWrite spScale spSubmat spToDense spTrTDense ' + 'spTScalar spZeros sqpSolve sqpSolveMT sqpSolveMTControlCreate sqpSolveMTlagrangeCreate sqpSolveMToutCreate sqpSolveSet ' + 'sqrt statements stdc stdsc stocv stof strcombine strindx strlen strput strrindx strsect strsplit strsplitPad strtodt ' + 'strtof strtofcplx strtriml strtrimr strtrunc strtruncl strtruncpad strtruncr submat subscat substute subvec sumc sumr ' + 'surface svd svd1 svd2 svdcusv svds svdusv sysstate tab tan tanh tempname threadBegin threadEnd threadEndFor threadFor ' + 'threadJoin threadStat time timedt timestr timeutc title tkf2eps tkf2ps tocart todaydt toeplitz token topolar trapchk ' + 'trigamma trimr trunc type typecv typef union unionsa uniqindx uniqindxsa unique uniquesa upmat upmat1 upper utctodt ' + 'utctodtv utrisol vals varCovMS varCovXS varget vargetl varmall varmares varput varputl vartypef vcm vcms vcx vcxs ' + 'vec vech vecr vector vget view viewxyz vlist vnamecv volume vput vread vtypecv wait waitc walkindex where window ' + 'writer xlabel xlsGetSheetCount xlsGetSheetSize xlsGetSheetTypes xlsMakeRange xlsReadM xlsReadSA xlsWrite xlsWriteM ' + 'xlsWriteSA xpnd xtics xy xyz ylabel ytics zeros zeta zlabel ztics cdfEmpirical dot h5create h5open h5read h5readAttribute ' + 'h5write h5writeAttribute ldl plotAddErrorBar plotAddSurface plotCDFEmpirical plotSetColormap plotSetContourLabels ' + 'plotSetLegendFont plotSetTextInterpreter plotSetXTicCount plotSetYTicCount plotSetZLevels powerm strjoin strtrim sylvester',
    literal: 'DB_AFTER_LAST_ROW DB_ALL_TABLES DB_BATCH_OPERATIONS DB_BEFORE_FIRST_ROW DB_BLOB DB_EVENT_NOTIFICATIONS ' + 'DB_FINISH_QUERY DB_HIGH_PRECISION DB_LAST_INSERT_ID DB_LOW_PRECISION_DOUBLE DB_LOW_PRECISION_INT32 ' + 'DB_LOW_PRECISION_INT64 DB_LOW_PRECISION_NUMBERS DB_MULTIPLE_RESULT_SETS DB_NAMED_PLACEHOLDERS ' + 'DB_POSITIONAL_PLACEHOLDERS DB_PREPARED_QUERIES DB_QUERY_SIZE DB_SIMPLE_LOCKING DB_SYSTEM_TABLES DB_TABLES ' + 'DB_TRANSACTIONS DB_UNICODE DB_VIEWS'
  };

  var PREPROCESSOR = {
    className: 'meta',
    begin: '#', end: '$',
    keywords: { 'meta-keyword': 'define definecs|10 undef ifdef ifndef iflight ifdllcall ifmac ifos2win ifunix else endif lineson linesoff srcfile srcline' },
    contains: [{
      begin: /\\\n/, relevance: 0
    }, {
      beginKeywords: 'include', end: '$',
      keywords: { 'meta-keyword': 'include' },
      contains: [{
        className: 'meta-string',
        begin: '"', end: '"',
        illegal: '\\n'
      }]
    }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
  };

  var FUNCTION_TITLE = hljs.UNDERSCORE_IDENT_RE + '\\s*\\(?';
  var PARSE_PARAMS = [{
    className: 'params',
    begin: /\(/, end: /\)/,
    keywords: KEYWORDS,
    relevance: 0,
    contains: [hljs.C_NUMBER_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
  }];

  return {
    aliases: ['gss'],
    case_insensitive: true, // language is case-insensitive
    keywords: KEYWORDS,
    illegal: '(\\{[%#]|[%#]\\})',
    contains: [hljs.C_NUMBER_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.COMMENT('@', '@'), PREPROCESSOR, {
      className: 'string',
      begin: '"', end: '"',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      className: 'function',
      beginKeywords: 'proc keyword',
      end: ';',
      excludeEnd: true,
      keywords: KEYWORDS,
      contains: [{
        begin: FUNCTION_TITLE, returnBegin: true,
        contains: [hljs.UNDERSCORE_TITLE_MODE],
        relevance: 0
      }, hljs.C_NUMBER_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, PREPROCESSOR].concat(PARSE_PARAMS)
    }, {
      className: 'function',
      beginKeywords: 'fn',
      end: ';',
      excludeEnd: true,
      keywords: KEYWORDS,
      contains: [{
        begin: FUNCTION_TITLE + hljs.IDENT_RE + '\\)?\\s*\\=\\s*', returnBegin: true,
        contains: [hljs.UNDERSCORE_TITLE_MODE],
        relevance: 0
      }, hljs.C_NUMBER_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE].concat(PARSE_PARAMS)
    }, {
      className: 'function',
      begin: '\\bexternal (proc|keyword|fn)\\s+',
      end: ';',
      excludeEnd: true,
      keywords: KEYWORDS,
      contains: [{
        begin: FUNCTION_TITLE, returnBegin: true,
        contains: [hljs.UNDERSCORE_TITLE_MODE],
        relevance: 0
      }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
    }, {
      className: 'function',
      begin: '\\bexternal (matrix|string|array|sparse matrix|struct ' + hljs.IDENT_RE + ')\\s+',
      end: ';',
      excludeEnd: true,
      keywords: KEYWORDS,
      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
    }]
  };
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
    var GCODE_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
    var GCODE_CLOSE_RE = '\\%';
    var GCODE_KEYWORDS = 'IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT ' + 'EQ LT GT NE GE LE OR XOR';
    var GCODE_START = {
        className: 'meta',
        begin: '([O])([0-9]+)'
    };
    var GCODE_CODE = [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.COMMENT(/\(/, /\)/), hljs.inherit(hljs.C_NUMBER_MODE, { begin: '([-+]?([0-9]*\\.?[0-9]+\\.?))|' + hljs.C_NUMBER_RE }), hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null }), hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null }), {
        className: 'name',
        begin: '([G])([0-9]+\\.?[0-9]?)'
    }, {
        className: 'name',
        begin: '([M])([0-9]+\\.?[0-9]?)'
    }, {
        className: 'attr',
        begin: '(VC|VS|#)',
        end: '(\\d+)'
    }, {
        className: 'attr',
        begin: '(VZOFX|VZOFY|VZOFZ)'
    }, {
        className: 'built_in',
        begin: '(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)',
        end: '([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])'
    }, {
        className: 'symbol',
        variants: [{
            begin: 'N', end: '\\d+',
            illegal: '\\W'
        }]
    }];

    return {
        aliases: ['nc'],
        // Some implementations (CNC controls) of G-code are interoperable with uppercase and lowercase letters seamlessly.
        // However, most prefer all uppercase and uppercase is customary.
        case_insensitive: true,
        lexemes: GCODE_IDENT_RE,
        keywords: GCODE_KEYWORDS,
        contains: [{
            className: 'meta',
            begin: GCODE_CLOSE_RE
        }, GCODE_START].concat(GCODE_CODE)
    };
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['feature'],
    keywords: 'Feature Background Ability Business\ Need Scenario Scenarios Scenario\ Outline Scenario\ Template Examples Given And Then But When',
    contains: [{
      className: 'symbol',
      begin: '\\*',
      relevance: 0
    }, {
      className: 'meta',
      begin: '@[^@\\s]+'
    }, {
      begin: '\\|', end: '\\|\\w*$',
      contains: [{
        className: 'string',
        begin: '[^|]+'
      }]
    }, {
      className: 'variable',
      begin: '<', end: '>'
    }, hljs.HASH_COMMENT_MODE, {
      className: 'string',
      begin: '"""', end: '"""'
    }, hljs.QUOTE_STRING_MODE]
  };
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: {
      keyword:
      // Statements
      'break continue discard do else for if return while switch case default ' +
      // Qualifiers
      'attribute binding buffer ccw centroid centroid varying coherent column_major const cw ' + 'depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing ' + 'flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant ' + 'invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y ' + 'local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left ' + 'out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f ' + 'r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict ' + 'rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 ' + 'rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 ' + 'rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip ' + 'triangles triangles_adjacency uniform varying vertices volatile writeonly',
      type: 'atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 ' + 'dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray ' + 'iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer' + 'iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray ' + 'image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray ' + 'isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D ' + 'isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 ' + 'mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray ' + 'sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow ' + 'sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D ' + 'samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow ' + 'image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect ' + 'uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray ' + 'usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D ' + 'samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void',
      built_in:
      // Constants
      'gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes ' + 'gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms ' + 'gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers ' + 'gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits ' + 'gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize ' + 'gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters ' + 'gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors ' + 'gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers ' + 'gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents ' + 'gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits ' + 'gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents ' + 'gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset ' + 'gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms ' + 'gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits ' + 'gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents ' + 'gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters ' + 'gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents ' + 'gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents ' + 'gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits ' + 'gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors ' + 'gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms ' + 'gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits ' + 'gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset ' +
      // Variables
      'gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial ' + 'gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color ' + 'gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord ' + 'gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor ' + 'gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial ' + 'gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel ' + 'gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix ' + 'gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose ' + 'gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose ' + 'gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 ' + 'gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 ' + 'gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ ' + 'gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord ' + 'gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse ' + 'gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask ' + 'gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter ' + 'gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose ' + 'gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out ' +
      // Functions
      'EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin ' + 'asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement ' + 'atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier ' + 'bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross ' + 'dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB ' + 'floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan ' + 'greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap ' + 'imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad ' + 'imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset ' + 'interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log ' + 'log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer ' + 'memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 ' + 'normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 ' + 'packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod ' + 'shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh ' + 'smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod ' + 'texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod ' + 'texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod ' + 'textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset ' + 'textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset ' + 'textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod ' + 'textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 ' + 'unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow',
      literal: 'true false'
    },
    illegal: '"',
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.C_NUMBER_MODE, {
      className: 'meta',
      begin: '#', end: '$'
    }]
  };
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var GO_KEYWORDS = {
    keyword: 'break default func interface select case map struct chan else goto package switch ' + 'const fallthrough if range type continue for import return var go defer ' + 'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' + 'uint16 uint32 uint64 int uint uintptr rune',
    literal: 'true false iota nil',
    built_in: 'append cap close complex copy imag len make new panic print println real recover delete'
  };
  return {
    aliases: ['golang'],
    keywords: GO_KEYWORDS,
    illegal: '</',
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
      className: 'string',
      variants: [hljs.QUOTE_STRING_MODE, { begin: '\'', end: '[^\\\\]\'' }, { begin: '`', end: '`' }]
    }, {
      className: 'number',
      variants: [{ begin: hljs.C_NUMBER_RE + '[dflsi]', relevance: 1 }, hljs.C_NUMBER_MODE]
    }, {
      begin: /:=/ // relevance booster
    }, {
      className: 'function',
      beginKeywords: 'func', end: /\s*\{/, excludeEnd: true,
      contains: [hljs.TITLE_MODE, {
        className: 'params',
        begin: /\(/, end: /\)/,
        keywords: GO_KEYWORDS,
        illegal: /["']/
      }]
    }]
  };
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: {
      keyword: 'println readln print import module function local return let var ' + 'while for foreach times in case when match with break continue ' + 'augment augmentation each find filter reduce ' + 'if then else otherwise try catch finally raise throw orIfNull ' + 'DynamicObject|10 DynamicVariable struct Observable map set vector list array',
      literal: 'true false null'
    },
    contains: [hljs.HASH_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, {
      className: 'meta', begin: '@[A-Za-z]+'
    }]
  };
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    case_insensitive: true,
    keywords: {
      keyword: 'task project allprojects subprojects artifacts buildscript configurations ' + 'dependencies repositories sourceSets description delete from into include ' + 'exclude source classpath destinationDir includes options sourceCompatibility ' + 'targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant ' + 'def abstract break case catch continue default do else extends final finally ' + 'for if implements instanceof native new private protected public return static ' + 'switch synchronized throw throws transient try volatile while strictfp package ' + 'import false null super this true antlrtask checkstyle codenarc copy boolean ' + 'byte char class double float int interface long short void compile runTime ' + 'file fileTree abs any append asList asWritable call collect compareTo count ' + 'div dump each eachByte eachFile eachLine every find findAll flatten getAt ' + 'getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods ' + 'isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter ' + 'newReader newWriter next plus pop power previous print println push putAt read ' + 'readBytes readLines reverse reverseEach round size sort splitEachLine step subMap ' + 'times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader ' + 'withStream withWriter withWriterAppend write writeLine'
    },
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE, hljs.REGEXP_MODE]
  };
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
    return {
        keywords: {
            literal: 'true false null',
            keyword: 'byte short char int long boolean float double void ' +
            // groovy specific keywords
            'def as in assert trait ' +
            // common keywords with Java
            'super this abstract static volatile transient public private protected synchronized final ' + 'class interface enum if else for while switch case break default continue ' + 'throw throws try catch finally implements extends new import package return instanceof'
        },

        contains: [hljs.COMMENT('/\\*\\*', '\\*/', {
            relevance: 0,
            contains: [{
                // eat up @'s in emails to prevent them to be recognized as doctags
                begin: /\w+@/, relevance: 0
            }, {
                className: 'doctag',
                begin: '@[A-Za-z]+'
            }]
        }), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
            className: 'string',
            begin: '"""', end: '"""'
        }, {
            className: 'string',
            begin: "'''", end: "'''"
        }, {
            className: 'string',
            begin: "\\$/", end: "/\\$",
            relevance: 10
        }, hljs.APOS_STRING_MODE, {
            className: 'regexp',
            begin: /~?\/[^\/\n]+\//,
            contains: [hljs.BACKSLASH_ESCAPE]
        }, hljs.QUOTE_STRING_MODE, {
            className: 'meta',
            begin: "^#!/usr/bin/env", end: '$',
            illegal: '\n'
        }, hljs.BINARY_NUMBER_MODE, {
            className: 'class',
            beginKeywords: 'class interface trait enum', end: '{',
            illegal: ':',
            contains: [{ beginKeywords: 'extends implements' }, hljs.UNDERSCORE_TITLE_MODE]
        }, hljs.C_NUMBER_MODE, {
            className: 'meta', begin: '@[A-Za-z]+'
        }, {
            // highlight map keys and named parameters as strings
            className: 'string', begin: /[^\?]{0}[A-Za-z0-9_$]+ *:/
        }, {
            // catch middle element of the ternary operator
            // to avoid highlight it as a label, named parameter, or map key
            begin: /\?/, end: /\:/
        }, {
            // highlight labeled statements
            className: 'symbol', begin: '^\\s*[A-Za-z0-9_$]+:',
            relevance: 0
        }],
        illegal: /#|<\//
    };
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = // TODO support filter tags like :javascript, support inline HTML
function (hljs) {
  return {
    case_insensitive: true,
    contains: [{
      className: 'meta',
      begin: '^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$',
      relevance: 10
    },
    // FIXME these comments should be allowed to span indented lines
    hljs.COMMENT('^\\s*(!=#|=#|-#|/).*$', false, {
      relevance: 0
    }), {
      begin: '^\\s*(-|=|!=)(?!#)',
      starts: {
        end: '\\n',
        subLanguage: 'ruby'
      }
    }, {
      className: 'tag',
      begin: '^\\s*%',
      contains: [{
        className: 'selector-tag',
        begin: '\\w+'
      }, {
        className: 'selector-id',
        begin: '#[\\w-]+'
      }, {
        className: 'selector-class',
        begin: '\\.[\\w-]+'
      }, {
        begin: '{\\s*',
        end: '\\s*}',
        contains: [{
          begin: ':\\w+\\s*=>',
          end: ',\\s+',
          returnBegin: true,
          endsWithParent: true,
          contains: [{
            className: 'attr',
            begin: ':\\w+'
          }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, {
            begin: '\\w+',
            relevance: 0
          }]
        }]
      }, {
        begin: '\\(\\s*',
        end: '\\s*\\)',
        excludeEnd: true,
        contains: [{
          begin: '\\w+\\s*=',
          end: '\\s+',
          returnBegin: true,
          endsWithParent: true,
          contains: [{
            className: 'attr',
            begin: '\\w+',
            relevance: 0
          }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, {
            begin: '\\w+',
            relevance: 0
          }]
        }]
      }]
    }, {
      begin: '^\\s*[=~]\\s*'
    }, {
      begin: '#{',
      starts: {
        end: '}',
        subLanguage: 'ruby'
      }
    }]
  };
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var BUILT_INS = { 'builtin-name': 'each in with if else unless bindattr action collection debugger log outlet template unbound view yield' };
  return {
    aliases: ['hbs', 'html.hbs', 'html.handlebars'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [hljs.COMMENT('{{!(--)?', '(--)?}}'), {
      className: 'template-tag',
      begin: /\{\{[#\/]/, end: /\}\}/,
      contains: [{
        className: 'name',
        begin: /[a-zA-Z\.-]+/,
        keywords: BUILT_INS,
        starts: {
          endsWithParent: true, relevance: 0,
          contains: [hljs.QUOTE_STRING_MODE]
        }
      }]
    }, {
      className: 'template-variable',
      begin: /\{\{/, end: /\}\}/,
      keywords: BUILT_INS
    }]
  };
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var COMMENT = {
    variants: [hljs.COMMENT('--', '$'), hljs.COMMENT('{-', '-}', {
      contains: ['self']
    })]
  };

  var PRAGMA = {
    className: 'meta',
    begin: '{-#', end: '#-}'
  };

  var PREPROCESSOR = {
    className: 'meta',
    begin: '^#', end: '$'
  };

  var CONSTRUCTOR = {
    className: 'type',
    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (build-in, infix).
    relevance: 0
  };

  var LIST = {
    begin: '\\(', end: '\\)',
    illegal: '"',
    contains: [PRAGMA, PREPROCESSOR, { className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?' }, hljs.inherit(hljs.TITLE_MODE, { begin: '[_a-z][\\w\']*' }), COMMENT]
  };

  var RECORD = {
    begin: '{', end: '}',
    contains: LIST.contains
  };

  return {
    aliases: ['hs'],
    keywords: 'let in if then else case of where do module import hiding ' + 'qualified type data newtype deriving class instance as default ' + 'infix infixl infixr foreign export ccall stdcall cplusplus ' + 'jvm dotnet safe unsafe family forall mdo proc rec',
    contains: [

    // Top-level constructions.

    {
      beginKeywords: 'module', end: 'where',
      keywords: 'module where',
      contains: [LIST, COMMENT],
      illegal: '\\W\\.|;'
    }, {
      begin: '\\bimport\\b', end: '$',
      keywords: 'import qualified as hiding',
      contains: [LIST, COMMENT],
      illegal: '\\W\\.|;'
    }, {
      className: 'class',
      begin: '^(\\s*)?(class|instance)\\b', end: 'where',
      keywords: 'class family instance where',
      contains: [CONSTRUCTOR, LIST, COMMENT]
    }, {
      className: 'class',
      begin: '\\b(data|(new)?type)\\b', end: '$',
      keywords: 'data family type newtype deriving',
      contains: [PRAGMA, CONSTRUCTOR, LIST, RECORD, COMMENT]
    }, {
      beginKeywords: 'default', end: '$',
      contains: [CONSTRUCTOR, LIST, COMMENT]
    }, {
      beginKeywords: 'infix infixl infixr', end: '$',
      contains: [hljs.C_NUMBER_MODE, COMMENT]
    }, {
      begin: '\\bforeign\\b', end: '$',
      keywords: 'foreign import export ccall stdcall cplusplus jvm ' + 'dotnet safe unsafe',
      contains: [CONSTRUCTOR, hljs.QUOTE_STRING_MODE, COMMENT]
    }, {
      className: 'meta',
      begin: '#!\\/usr\\/bin\\/env\ runhaskell', end: '$'
    },

    // "Whitespaces".

    PRAGMA, PREPROCESSOR,

    // Literals and names.

    // TODO: characters.
    hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, CONSTRUCTOR, hljs.inherit(hljs.TITLE_MODE, { begin: '^[_a-z][\\w\']*' }), COMMENT, { begin: '->|<-' // No markup, relevance booster
    }]
  };
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

  var HAXE_BASIC_TYPES = 'Int Float String Bool Dynamic Void Array ';

  return {
    aliases: ['hx'],
    keywords: {
      keyword: 'break case cast catch continue default do dynamic else enum extern ' + 'for function here if import in inline never new override package private get set ' + 'public return static super switch this throw trace try typedef untyped using var while ' + HAXE_BASIC_TYPES,
      built_in: 'trace this',
      literal: 'true false null _'
    },
    contains: [{ className: 'string', // interpolate-able strings
      begin: '\'', end: '\'',
      contains: [hljs.BACKSLASH_ESCAPE, { className: 'subst', // interpolation
        begin: '\\$\\{', end: '\\}'
      }, { className: 'subst', // interpolation
        begin: '\\$', end: '\\W}'
      }]
    }, hljs.QUOTE_STRING_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.C_NUMBER_MODE, { className: 'meta', // compiler meta
      begin: '@:', end: '$'
    }, { className: 'meta', // compiler conditionals
      begin: '#', end: '$',
      keywords: { 'meta-keyword': 'if else elseif end error' }
    }, { className: 'type', // function types
      begin: ':[ \t]*', end: '[^A-Za-z0-9_ \t\\->]',
      excludeBegin: true, excludeEnd: true,
      relevance: 0
    }, { className: 'type', // types
      begin: ':[ \t]*', end: '\\W',
      excludeBegin: true, excludeEnd: true
    }, { className: 'type', // instantiation
      begin: 'new *', end: '\\W',
      excludeBegin: true, excludeEnd: true
    }, { className: 'class', // enums
      beginKeywords: 'enum', end: '\\{',
      contains: [hljs.TITLE_MODE]
    }, { className: 'class', // abstracts
      beginKeywords: 'abstract', end: '[\\{$]',
      contains: [{ className: 'type',
        begin: '\\(', end: '\\)',
        excludeBegin: true, excludeEnd: true
      }, { className: 'type',
        begin: 'from +', end: '\\W',
        excludeBegin: true, excludeEnd: true
      }, { className: 'type',
        begin: 'to +', end: '\\W',
        excludeBegin: true, excludeEnd: true
      }, hljs.TITLE_MODE],
      keywords: {
        keyword: 'abstract from to'
      }
    }, { className: 'class', // classes
      begin: '\\b(class|interface) +', end: '[\\{$]', excludeEnd: true,
      keywords: 'class interface',
      contains: [{ className: 'keyword',
        begin: '\\b(extends|implements) +',
        keywords: 'extends implements',
        contains: [{
          className: 'type',
          begin: hljs.IDENT_RE,
          relevance: 0
        }]
      }, hljs.TITLE_MODE]
    }, { className: 'function',
      beginKeywords: 'function', end: '\\(', excludeEnd: true,
      illegal: '\\S',
      contains: [hljs.TITLE_MODE]
    }],
    illegal: /<\//
  };
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    case_insensitive: true,
    lexemes: /[\w\._]+/,
    keywords: 'goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop',
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, {
      // multi-line string
      className: 'string',
      begin: '{"', end: '"}',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, hljs.COMMENT(';', '$', { relevance: 0 }), {
      // pre-processor
      className: 'meta',
      begin: '#', end: '$',
      keywords: { 'meta-keyword': 'addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib' },
      contains: [hljs.inherit(hljs.QUOTE_STRING_MODE, { className: 'meta-string' }), hljs.NUMBER_MODE, hljs.C_NUMBER_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
    }, {
      // label
      className: 'symbol',
      begin: '^\\*(\\w+|@)'
    }, hljs.NUMBER_MODE, hljs.C_NUMBER_MODE]
  };
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var BUILT_INS = 'action collection component concat debugger each each-in else get hash if input link-to loc log mut outlet partial query-params render textarea unbound unless with yield view';

  var ATTR_ASSIGNMENT = {
    illegal: /\}\}/,
    begin: /[a-zA-Z0-9_]+=/,
    returnBegin: true,
    relevance: 0,
    contains: [{
      className: 'attr', begin: /[a-zA-Z0-9_]+/
    }]
  };

  var SUB_EXPR = {
    illegal: /\}\}/,
    begin: /\)/, end: /\)/,
    contains: [{
      begin: /[a-zA-Z\.\-]+/,
      keywords: { built_in: BUILT_INS },
      starts: {
        endsWithParent: true, relevance: 0,
        contains: [hljs.QUOTE_STRING_MODE]
      }
    }]
  };

  var TAG_INNARDS = {
    endsWithParent: true, relevance: 0,
    keywords: { keyword: 'as', built_in: BUILT_INS },
    contains: [hljs.QUOTE_STRING_MODE, ATTR_ASSIGNMENT, hljs.NUMBER_MODE]
  };

  return {
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [hljs.COMMENT('{{!(--)?', '(--)?}}'), {
      className: 'template-tag',
      begin: /\{\{[#\/]/, end: /\}\}/,
      contains: [{
        className: 'name',
        begin: /[a-zA-Z\.\-]+/,
        keywords: { 'builtin-name': BUILT_INS },
        starts: TAG_INNARDS
      }]
    }, {
      className: 'template-variable',
      begin: /\{\{[a-zA-Z][a-zA-Z\-]+/, end: /\}\}/,
      keywords: { keyword: 'as', built_in: BUILT_INS },
      contains: [hljs.QUOTE_STRING_MODE]
    }]
  };
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var VERSION = 'HTTP/[0-9\\.]+';
  return {
    aliases: ['https'],
    illegal: '\\S',
    contains: [{
      begin: '^' + VERSION, end: '$',
      contains: [{ className: 'number', begin: '\\b\\d{3}\\b' }]
    }, {
      begin: '^[A-Z]+ (.*?) ' + VERSION + '$', returnBegin: true, end: '$',
      contains: [{
        className: 'string',
        begin: ' ', end: ' ',
        excludeBegin: true, excludeEnd: true
      }, {
        begin: VERSION
      }, {
        className: 'keyword',
        begin: '[A-Z]+'
      }]
    }, {
      className: 'attribute',
      begin: '^\\w', end: ': ', excludeEnd: true,
      illegal: '\\n|\\s|=',
      starts: { end: '$', relevance: 0 }
    }, {
      begin: '\\n\\n',
      starts: { subLanguage: [], endsWithParent: true }
    }]
  };
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var keywords = {
    'builtin-name':
    // keywords
    '!= % %= & &= * ** **= *= *map ' + '+ += , --build-class-- --import-- -= . / // //= ' + '/= < << <<= <= = > >= >> >>= ' + '@ @= ^ ^= abs accumulate all and any ap-compose ' + 'ap-dotimes ap-each ap-each-while ap-filter ap-first ap-if ap-last ap-map ap-map-when ap-pipe ' + 'ap-reduce ap-reject apply as-> ascii assert assoc bin break butlast ' + 'callable calling-module-name car case cdr chain chr coll? combinations compile ' + 'compress cond cons cons? continue count curry cut cycle dec ' + 'def default-method defclass defmacro defmacro-alias defmacro/g! defmain defmethod defmulti defn ' + 'defn-alias defnc defnr defreader defseq del delattr delete-route dict-comp dir ' + 'disassemble dispatch-reader-macro distinct divmod do doto drop drop-last drop-while empty? ' + 'end-sequence eval eval-and-compile eval-when-compile even? every? except exec filter first ' + 'flatten float? fn fnc fnr for for* format fraction genexpr ' + 'gensym get getattr global globals group-by hasattr hash hex id ' + 'identity if if* if-not if-python2 import in inc input instance? ' + 'integer integer-char? integer? interleave interpose is is-coll is-cons is-empty is-even ' + 'is-every is-float is-instance is-integer is-integer-char is-iterable is-iterator is-keyword is-neg is-none ' + 'is-not is-numeric is-odd is-pos is-string is-symbol is-zero isinstance islice issubclass ' + 'iter iterable? iterate iterator? keyword keyword? lambda last len let ' + 'lif lif-not list* list-comp locals loop macro-error macroexpand macroexpand-1 macroexpand-all ' + 'map max merge-with method-decorator min multi-decorator multicombinations name neg? next ' + 'none? nonlocal not not-in not? nth numeric? oct odd? open ' + 'or ord partition permutations pos? post-route postwalk pow prewalk print ' + 'product profile/calls profile/cpu put-route quasiquote quote raise range read read-str ' + 'recursive-replace reduce remove repeat repeatedly repr require rest round route ' + 'route-with-methods rwm second seq set-comp setattr setv some sorted string ' + 'string? sum switch symbol? take take-nth take-while tee try unless ' + 'unquote unquote-splicing vars walk when while with with* with-decorator with-gensyms ' + 'xi xor yield yield-from zero? zip zip-longest | |= ~'
  };

  var SYMBOLSTART = 'a-zA-Z_\\-!.?+*=<>&#\'';
  var SYMBOL_RE = '[' + SYMBOLSTART + '][' + SYMBOLSTART + '0-9/;:]*';
  var SIMPLE_NUMBER_RE = '[-+]?\\d+(\\.\\d+)?';

  var SHEBANG = {
    className: 'meta',
    begin: '^#!', end: '$'
  };

  var SYMBOL = {
    begin: SYMBOL_RE,
    relevance: 0
  };
  var NUMBER = {
    className: 'number', begin: SIMPLE_NUMBER_RE,
    relevance: 0
  };
  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null });
  var COMMENT = hljs.COMMENT(';', '$', {
    relevance: 0
  });
  var LITERAL = {
    className: 'literal',
    begin: /\b([Tt]rue|[Ff]alse|nil|None)\b/
  };
  var COLLECTION = {
    begin: '[\\[\\{]', end: '[\\]\\}]'
  };
  var HINT = {
    className: 'comment',
    begin: '\\^' + SYMBOL_RE
  };
  var HINT_COL = hljs.COMMENT('\\^\\{', '\\}');
  var KEY = {
    className: 'symbol',
    begin: '[:]{1,2}' + SYMBOL_RE
  };
  var LIST = {
    begin: '\\(', end: '\\)'
  };
  var BODY = {
    endsWithParent: true,
    relevance: 0
  };
  var NAME = {
    keywords: keywords,
    lexemes: SYMBOL_RE,
    className: 'name', begin: SYMBOL_RE,
    starts: BODY
  };
  var DEFAULT_CONTAINS = [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL, SYMBOL];

  LIST.contains = [hljs.COMMENT('comment', ''), NAME, BODY];
  BODY.contains = DEFAULT_CONTAINS;
  COLLECTION.contains = DEFAULT_CONTAINS;

  return {
    aliases: ['hylang'],
    illegal: /\S/,
    contains: [SHEBANG, LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL]
  };
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var START_BRACKET = '\\[';
  var END_BRACKET = '\\]';
  return {
    aliases: ['i7'],
    case_insensitive: true,
    keywords: {
      // Some keywords more or less unique to I7, for relevance.
      keyword:
      // kind:
      'thing room person man woman animal container ' + 'supporter backdrop door ' +
      // characteristic:
      'scenery open closed locked inside gender ' +
      // verb:
      'is are say understand ' +
      // misc keyword:
      'kind of rule'
    },
    contains: [{
      className: 'string',
      begin: '"', end: '"',
      relevance: 0,
      contains: [{
        className: 'subst',
        begin: START_BRACKET, end: END_BRACKET
      }]
    }, {
      className: 'section',
      begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
      end: '$'
    }, {
      // Rule definition
      // This is here for relevance.
      begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
      end: ':',
      contains: [{
        //Rule name
        begin: '\\(This', end: '\\)'
      }]
    }, {
      className: 'comment',
      begin: START_BRACKET, end: END_BRACKET,
      contains: ['self']
    }]
  };
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var STRING = {
    className: "string",
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [{
      begin: "'''", end: "'''",
      relevance: 10
    }, {
      begin: '"""', end: '"""',
      relevance: 10
    }, {
      begin: '"', end: '"'
    }, {
      begin: "'", end: "'"
    }]
  };
  return {
    aliases: ['toml'],
    case_insensitive: true,
    illegal: /\S/,
    contains: [hljs.COMMENT(';', '$'), hljs.HASH_COMMENT_MODE, {
      className: 'section',
      begin: /^\s*\[+/, end: /\]+/
    }, {
      begin: /^[a-z0-9\[\]_-]+\s*=\s*/, end: '$',
      returnBegin: true,
      contains: [{
        className: 'attr',
        begin: /[a-z0-9\[\]_-]+/
      }, {
        begin: /=/, endsWithParent: true,
        relevance: 0,
        contains: [{
          className: 'literal',
          begin: /\bon|off|true|false|yes|no\b/
        }, {
          className: 'variable',
          variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)}/ }]
        }, STRING, {
          className: 'number',
          begin: /([\+\-]+)?[\d]+_[\d_]+/
        }, hljs.NUMBER_MODE]
      }]
    }]
  };
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)'
  };

  var F_KEYWORDS = {
    literal: '.False. .True.',
    keyword: 'kind do while private call intrinsic where elsewhere ' + 'type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then ' + 'public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. ' + 'goto save else use module select case ' + 'access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit ' + 'continue format pause cycle exit ' + 'c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg ' + 'synchronous nopass non_overridable pass protected volatile abstract extends import ' + 'non_intrinsic value deferred generic final enumerator class associate bind enum ' + 'c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t ' + 'c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double ' + 'c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr ' + 'c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer ' + 'c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor ' + 'numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ' + 'ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive ' + 'pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure ' + 'integer real character complex logical dimension allocatable|10 parameter ' + 'external implicit|10 none double precision assign intent optional pointer ' + 'target in out common equivalence data ' +
    // IRPF90 special keywords
    'begin_provider &begin_provider end_provider begin_shell end_shell begin_template end_template subst assert touch ' + 'soft_touch provide no_dep free irp_if irp_else irp_endif irp_write irp_read',
    built_in: 'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint ' + 'dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl ' + 'algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama ' + 'iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod ' + 'qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log ' + 'log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate ' + 'adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product ' + 'eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul ' + 'maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product ' + 'radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind ' + 'set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer ' + 'dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ' + 'ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode ' + 'is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of' + 'acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 ' + 'atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits ' + 'bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr ' + 'num_images parity popcnt poppar shifta shiftl shiftr this_image ' +
    // IRPF90 special built_ins
    'IRP_ALIGN irp_here'
  };
  return {
    case_insensitive: true,
    keywords: F_KEYWORDS,
    illegal: /\/\*/,
    contains: [hljs.inherit(hljs.APOS_STRING_MODE, { className: 'string', relevance: 0 }), hljs.inherit(hljs.QUOTE_STRING_MODE, { className: 'string', relevance: 0 }), {
      className: 'function',
      beginKeywords: 'subroutine function program',
      illegal: '[${=\\n]',
      contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
    }, hljs.COMMENT('!', '$', { relevance: 0 }), hljs.COMMENT('begin_doc', 'end_doc', { relevance: 10 }), {
      className: 'number',
      begin: '(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?',
      relevance: 0
    }]
  };
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var JAVA_IDENT_RE = '[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*';
  var GENERIC_IDENT_RE = JAVA_IDENT_RE + '(<' + JAVA_IDENT_RE + '(\\s*,\\s*' + JAVA_IDENT_RE + ')*>)?';
  var KEYWORDS = 'false synchronized int abstract float private char boolean static null if const ' + 'for true while long strictfp finally protected import native final void ' + 'enum else break transient catch instanceof byte super volatile case assert short ' + 'package default double public try this switch continue throws protected public private ' + 'module requires exports do';

  // https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html
  var JAVA_NUMBER_RE = '\\b' + '(' + '0[bB]([01]+[01_]+[01]+|[01]+)' + // 0b...
  '|' + '0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)' + // 0x...
  '|' + '(' + '([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?' + '|' + '\\.([\\d]+[\\d_]+[\\d]+|[\\d]+)' + ')' + '([eE][-+]?\\d+)?' + // octal, decimal, float
  ')' + '[lLfF]?';
  var JAVA_NUMBER_MODE = {
    className: 'number',
    begin: JAVA_NUMBER_RE,
    relevance: 0
  };

  return {
    aliases: ['jsp'],
    keywords: KEYWORDS,
    illegal: /<\/|#/,
    contains: [hljs.COMMENT('/\\*\\*', '\\*/', {
      relevance: 0,
      contains: [{
        // eat up @'s in emails to prevent them to be recognized as doctags
        begin: /\w+@/, relevance: 0
      }, {
        className: 'doctag',
        begin: '@[A-Za-z]+'
      }]
    }), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, {
      className: 'class',
      beginKeywords: 'class interface', end: /[{;=]/, excludeEnd: true,
      keywords: 'class interface',
      illegal: /[:"\[\]]/,
      contains: [{ beginKeywords: 'extends implements' }, hljs.UNDERSCORE_TITLE_MODE]
    }, {
      // Expression keywords prevent 'keyword Name(...)' from being
      // recognized as a function definition
      beginKeywords: 'new throw return else',
      relevance: 0
    }, {
      className: 'function',
      begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
      excludeEnd: true,
      keywords: KEYWORDS,
      contains: [{
        begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
        relevance: 0,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      }, {
        className: 'params',
        begin: /\(/, end: /\)/,
        keywords: KEYWORDS,
        relevance: 0,
        contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE]
      }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
    }, JAVA_NUMBER_MODE, {
      className: 'meta', begin: '@[A-Za-z]+'
    }]
  };
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword: 'in of if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const export super debugger as async await static ' +
    // ECMAScript 6 modules import
    'import from as',

    literal: 'true false null undefined NaN Infinity',
    built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' + 'Promise'
  };
  var EXPRESSIONS;
  var NUMBER = {
    className: 'number',
    variants: [{ begin: '\\b(0[bB][01]+)' }, { begin: '\\b(0[oO][0-7]+)' }, { begin: hljs.C_NUMBER_RE }],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: [] // defined later
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST]
  };
  SUBST.contains = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
  var PARAMS_CONTAINS = SUBST.contains.concat([hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE]);

  return {
    aliases: ['js', 'jsx'],
    keywords: KEYWORDS,
    contains: [{
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, {
      className: 'meta',
      begin: /^#!/, end: /$/
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, TEMPLATE_STRING, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBER, { // object attr container
      begin: /[{,]\s*/, relevance: 0,
      contains: [{
        begin: IDENT_RE + '\\s*:', returnBegin: true,
        relevance: 0,
        contains: [{ className: 'attr', begin: IDENT_RE, relevance: 0 }]
      }]
    }, { // "value" container
      begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
      keywords: 'return throw case',
      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, {
        className: 'function',
        begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
        end: '\\s*=>',
        contains: [{
          className: 'params',
          variants: [{
            begin: IDENT_RE
          }, {
            begin: /\(\s*\)/
          }, {
            begin: /\(/, end: /\)/,
            excludeBegin: true, excludeEnd: true,
            keywords: KEYWORDS,
            contains: PARAMS_CONTAINS
          }]
        }]
      }, { // E4X / JSX
        begin: /</, end: /(\/\w+|\w+\/)>/,
        subLanguage: 'xml',
        contains: [{ begin: /<\w+\s*\/>/, skip: true }, {
          begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
          contains: [{ begin: /<\w+\s*\/>/, skip: true }, 'self']
        }]
      }],
      relevance: 0
    }, {
      className: 'function',
      beginKeywords: 'function', end: /\{/, excludeEnd: true,
      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE }), {
        className: 'params',
        begin: /\(/, end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        contains: PARAMS_CONTAINS
      }],
      illegal: /\[|%/
    }, {
      begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
    }, hljs.METHOD_GUARD, { // ES6 class
      className: 'class',
      beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
      illegal: /[:"\[\]]/,
      contains: [{ beginKeywords: 'extends' }, hljs.UNDERSCORE_TITLE_MODE]
    }, {
      beginKeywords: 'constructor', end: /\{/, excludeEnd: true
    }],
    illegal: /#(?!!)/
  };
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var PARAM = {
    begin: /[\w-]+ *=/, returnBegin: true,
    relevance: 0,
    contains: [{ className: 'attr', begin: /[\w-]+/ }]
  };
  var PARAMSBLOCK = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    contains: [PARAM],
    relevance: 0
  };
  var OPERATION = {
    className: 'function',
    begin: /:[\w\-.]+/,
    relevance: 0
  };
  var PATH = {
    className: 'string',
    begin: /\B(([\/.])[\w\-.\/=]+)+/
  };
  var COMMAND_PARAMS = {
    className: 'params',
    begin: /--[\w\-=\/]+/
  };
  return {
    aliases: ['wildfly-cli'],
    lexemes: '[a-z\-]+',
    keywords: {
      keyword: 'alias batch cd clear command connect connection-factory connection-info data-source deploy ' + 'deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls ' + 'patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias ' + 'undeploy unset version xa-data-source', // module
      literal: 'true false'
    },
    contains: [hljs.HASH_COMMENT_MODE, hljs.QUOTE_STRING_MODE, COMMAND_PARAMS, OPERATION, PATH, PARAMSBLOCK]
  };
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var LITERALS = { literal: 'true false null' };
  var TYPES = [hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE];
  var VALUE_CONTAINER = {
    end: ',', endsWithParent: true, excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
  };
  var OBJECT = {
    begin: '{', end: '}',
    contains: [{
      className: 'attr',
      begin: /"/, end: /"/,
      contains: [hljs.BACKSLASH_ESCAPE],
      illegal: '\\n'
    }, hljs.inherit(VALUE_CONTAINER, { begin: /:/ })],
    illegal: '\\S'
  };
  var ARRAY = {
    begin: '\\[', end: '\\]',
    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
  };
  TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);
  return {
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
  };
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  // Since there are numerous special names in Julia, it is too much trouble
  // to maintain them by hand. Hence these names (i.e. keywords, literals and
  // built-ins) are automatically generated from Julia v0.6 itself through
  // the following scripts for each.

  var KEYWORDS = {
    // # keyword generator, multi-word keywords handled manually below
    // foreach(println, ["in", "isa", "where"])
    // for kw in Base.REPLCompletions.complete_keyword("")
    //     if !(contains(kw, " ") || kw == "struct")
    //         println(kw)
    //     end
    // end
    keyword: 'in isa where ' + 'baremodule begin break catch ccall const continue do else elseif end export false finally for function ' + 'global if import importall let local macro module quote return true try using while ' +
    // legacy, to be deprecated in the next release
    'type immutable abstract bitstype typealias ',

    // # literal generator
    // println("true")
    // println("false")
    // for name in Base.REPLCompletions.completions("", 0)[1]
    //     try
    //         v = eval(Symbol(name))
    //         if !(v isa Function || v isa Type || v isa TypeVar || v isa Module || v isa Colon)
    //             println(name)
    //         end
    //     end
    // end
    literal: 'true false ' + 'ARGS C_NULL DevNull ENDIAN_BOM ENV I Inf Inf16 Inf32 Inf64 InsertionSort JULIA_HOME LOAD_PATH MergeSort ' + 'NaN NaN16 NaN32 NaN64 PROGRAM_FILE QuickSort RoundDown RoundFromZero RoundNearest RoundNearestTiesAway ' + 'RoundNearestTiesUp RoundToZero RoundUp STDERR STDIN STDOUT VERSION catalan e|0 eu|0 eulergamma golden im ' + 'nothing pi γ π φ ',

    // # built_in generator:
    // for name in Base.REPLCompletions.completions("", 0)[1]
    //     try
    //         v = eval(Symbol(name))
    //         if v isa Type || v isa TypeVar
    //             println(name)
    //         end
    //     end
    // end
    built_in: 'ANY AbstractArray AbstractChannel AbstractFloat AbstractMatrix AbstractRNG AbstractSerializer AbstractSet ' + 'AbstractSparseArray AbstractSparseMatrix AbstractSparseVector AbstractString AbstractUnitRange AbstractVecOrMat ' + 'AbstractVector Any ArgumentError Array AssertionError Associative Base64DecodePipe Base64EncodePipe Bidiagonal ' + 'BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError BufferStream CachingPool CapturedException ' + 'CartesianIndex CartesianRange Cchar Cdouble Cfloat Channel Char Cint Cintmax_t Clong Clonglong ClusterManager ' + 'Cmd CodeInfo Colon Complex Complex128 Complex32 Complex64 CompositeException Condition ConjArray ConjMatrix ' + 'ConjVector Cptrdiff_t Cshort Csize_t Cssize_t Cstring Cuchar Cuint Cuintmax_t Culong Culonglong Cushort Cwchar_t ' + 'Cwstring DataType Date DateFormat DateTime DenseArray DenseMatrix DenseVecOrMat DenseVector Diagonal Dict ' + 'DimensionMismatch Dims DirectIndexString Display DivideError DomainError EOFError EachLine Enum Enumerate ' + 'ErrorException Exception ExponentialBackOff Expr Factorization FileMonitor Float16 Float32 Float64 Function ' + 'Future GlobalRef GotoNode HTML Hermitian IO IOBuffer IOContext IOStream IPAddr IPv4 IPv6 IndexCartesian IndexLinear ' + 'IndexStyle InexactError InitError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException ' + 'InvalidStateException Irrational KeyError LabelNode LinSpace LineNumberNode LoadError LowerTriangular MIME Matrix ' + 'MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode NullException Nullable Number ObjectIdDict ' + 'OrdinalRange OutOfMemoryError OverflowError Pair ParseError PartialQuickSort PermutedDimsArray Pipe ' + 'PollingFileWatcher ProcessExitedException Ptr QuoteNode RandomDevice Range RangeIndex Rational RawFD ' + 'ReadOnlyMemoryError Real ReentrantLock Ref Regex RegexMatch RemoteChannel RemoteException RevString RoundingMode ' + 'RowVector SSAValue SegmentationFault SerializationState Set SharedArray SharedMatrix SharedVector Signed ' + 'SimpleVector Slot SlotNumber SparseMatrixCSC SparseVector StackFrame StackOverflowError StackTrace StepRange ' + 'StepRangeLen StridedArray StridedMatrix StridedVecOrMat StridedVector String SubArray SubString SymTridiagonal ' + 'Symbol Symmetric SystemError TCPSocket Task Text TextDisplay Timer Tridiagonal Tuple Type TypeError TypeMapEntry ' + 'TypeMapLevel TypeName TypeVar TypedSlot UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UndefRefError UndefVarError ' + 'UnicodeError UniformScaling Union UnionAll UnitRange Unsigned UpperTriangular Val Vararg VecElement VecOrMat Vector ' + 'VersionNumber Void WeakKeyDict WeakRef WorkerConfig WorkerPool '
  };

  // ref: http://julia.readthedocs.org/en/latest/manual/variables/#allowed-variable-names
  var VARIABLE_NAME_RE = '[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*';

  // placeholder for recursive self-reference
  var DEFAULT = {
    lexemes: VARIABLE_NAME_RE, keywords: KEYWORDS, illegal: /<\//
  };

  // ref: http://julia.readthedocs.org/en/latest/manual/integers-and-floating-point-numbers/
  var NUMBER = {
    className: 'number',
    // supported numeric literals:
    //  * binary literal (e.g. 0x10)
    //  * octal literal (e.g. 0o76543210)
    //  * hexadecimal literal (e.g. 0xfedcba876543210)
    //  * hexadecimal floating point literal (e.g. 0x1p0, 0x1.2p2)
    //  * decimal literal (e.g. 9876543210, 100_000_000)
    //  * floating pointe literal (e.g. 1.2, 1.2f, .2, 1., 1.2e10, 1.2e-10)
    begin: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
    relevance: 0
  };

  var CHAR = {
    className: 'string',
    begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
  };

  var INTERPOLATION = {
    className: 'subst',
    begin: /\$\(/, end: /\)/,
    keywords: KEYWORDS
  };

  var INTERPOLATED_VARIABLE = {
    className: 'variable',
    begin: '\\$' + VARIABLE_NAME_RE
  };

  // TODO: neatly escape normal code in string literal
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
    variants: [{ begin: /\w*"""/, end: /"""\w*/, relevance: 10 }, { begin: /\w*"/, end: /"\w*/ }]
  };

  var COMMAND = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
    begin: '`', end: '`'
  };

  var MACROCALL = {
    className: 'meta',
    begin: '@' + VARIABLE_NAME_RE
  };

  var COMMENT = {
    className: 'comment',
    variants: [{ begin: '#=', end: '=#', relevance: 10 }, { begin: '#', end: '$' }]
  };

  DEFAULT.contains = [NUMBER, CHAR, STRING, COMMAND, MACROCALL, COMMENT, hljs.HASH_COMMENT_MODE, {
    className: 'keyword',
    begin: '\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b'
  }, { begin: /<:/ // relevance booster
  }];
  INTERPOLATION.contains = DEFAULT.contains;

  return DEFAULT;
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    contains: [{
      className: 'meta',
      begin: /^julia>/,
      relevance: 10,
      starts: {
        // end the highlighting if we are on a new line and the line does not have at
        // least six spaces in the beginning
        end: /^(?![ ]{6})/,
        subLanguage: 'julia'
      },
      // jldoctest Markdown blocks are used in the Julia manual and package docs indicate
      // code snippets that should be verified when the documentation is built. They can be
      // either REPL-like or script-like, but are usually REPL-like and therefore we apply
      // julia-repl highlighting to them. More information can be found in Documenter's
      // manual: https://juliadocs.github.io/Documenter.jl/latest/man/doctests.html
      aliases: ['jldoctest']
    }]
  };
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    keyword: 'abstract as val var vararg get set class object open private protected public noinline ' + 'crossinline dynamic final enum if else do while for when throw try catch finally ' + 'import package is in fun override companion reified inline lateinit init' + 'interface annotation data sealed internal infix operator out by constructor super ' +
    // to be deleted soon
    'trait volatile transient native default',
    built_in: 'Byte Short Char Int Long Boolean Float Double Void Unit Nothing',
    literal: 'true false null'
  };
  var KEYWORDS_WITH_LABEL = {
    className: 'keyword',
    begin: /\b(break|continue|return|this)\b/,
    starts: {
      contains: [{
        className: 'symbol',
        begin: /@\w+/
      }]
    }
  };
  var LABEL = {
    className: 'symbol', begin: hljs.UNDERSCORE_IDENT_RE + '@'
  };

  // for string templates
  var SUBST = {
    className: 'subst',
    begin: '\\${', end: '}', contains: [hljs.APOS_STRING_MODE, hljs.C_NUMBER_MODE]
  };
  var VARIABLE = {
    className: 'variable', begin: '\\$' + hljs.UNDERSCORE_IDENT_RE
  };
  var STRING = {
    className: 'string',
    variants: [{
      begin: '"""', end: '"""',
      contains: [VARIABLE, SUBST]
    },
    // Can't use built-in modes easily, as we want to use STRING in the meta
    // context as 'meta-string' and there's no syntax to remove explicitly set
    // classNames in built-in modes.
    {
      begin: '\'', end: '\'',
      illegal: /\n/,
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: '"', end: '"',
      illegal: /\n/,
      contains: [hljs.BACKSLASH_ESCAPE, VARIABLE, SUBST]
    }]
  };

  var ANNOTATION_USE_SITE = {
    className: 'meta', begin: '@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*' + hljs.UNDERSCORE_IDENT_RE + ')?'
  };
  var ANNOTATION = {
    className: 'meta', begin: '@' + hljs.UNDERSCORE_IDENT_RE,
    contains: [{
      begin: /\(/, end: /\)/,
      contains: [hljs.inherit(STRING, { className: 'meta-string' })]
    }]
  };

  return {
    keywords: KEYWORDS,
    contains: [hljs.COMMENT('/\\*\\*', '\\*/', {
      relevance: 0,
      contains: [{
        className: 'doctag',
        begin: '@[A-Za-z]+'
      }]
    }), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, KEYWORDS_WITH_LABEL, LABEL, ANNOTATION_USE_SITE, ANNOTATION, {
      className: 'function',
      beginKeywords: 'fun', end: '[(]|$',
      returnBegin: true,
      excludeEnd: true,
      keywords: KEYWORDS,
      illegal: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
      relevance: 5,
      contains: [{
        begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
        relevance: 0,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      }, {
        className: 'type',
        begin: /</, end: />/, keywords: 'reified',
        relevance: 0
      }, {
        className: 'params',
        begin: /\(/, end: /\)/,
        endsParent: true,
        keywords: KEYWORDS,
        relevance: 0,
        contains: [{
          begin: /:/, end: /[=,\/]/, endsWithParent: true,
          contains: [{ className: 'type', begin: hljs.UNDERSCORE_IDENT_RE }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE],
          relevance: 0
        }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, ANNOTATION_USE_SITE, ANNOTATION, STRING, hljs.C_NUMBER_MODE]
      }, hljs.C_BLOCK_COMMENT_MODE]
    }, {
      className: 'class',
      beginKeywords: 'class interface trait', end: /[:\{(]|$/, // remove 'trait' when removed from KEYWORDS
      excludeEnd: true,
      illegal: 'extends implements',
      contains: [{ beginKeywords: 'public protected internal private constructor' }, hljs.UNDERSCORE_TITLE_MODE, {
        className: 'type',
        begin: /</, end: />/, excludeBegin: true, excludeEnd: true,
        relevance: 0
      }, {
        className: 'type',
        begin: /[,:]\s*/, end: /[<\(,]|$/, excludeBegin: true, returnEnd: true
      }, ANNOTATION_USE_SITE, ANNOTATION]
    }, STRING, {
      className: 'meta',
      begin: "^#!/usr/bin/env", end: '$',
      illegal: '\n'
    }, hljs.C_NUMBER_MODE]
  };
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var LASSO_IDENT_RE = '[a-zA-Z_][\\w.]*';
  var LASSO_ANGLE_RE = '<\\?(lasso(script)?|=)';
  var LASSO_CLOSE_RE = '\\]|\\?>';
  var LASSO_KEYWORDS = {
    literal: 'true false none minimal full all void and or not ' + 'bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft',
    built_in: 'array date decimal duration integer map pair string tag xml null ' + 'boolean bytes keyword list locale queue set stack staticarray ' + 'local var variable global data self inherited currentcapture givenblock',
    keyword: 'cache database_names database_schemanames database_tablenames ' + 'define_tag define_type email_batch encode_set html_comment handle ' + 'handle_error header if inline iterate ljax_target link ' + 'link_currentaction link_currentgroup link_currentrecord link_detail ' + 'link_firstgroup link_firstrecord link_lastgroup link_lastrecord ' + 'link_nextgroup link_nextrecord link_prevgroup link_prevrecord log ' + 'loop namespace_using output_none portal private protect records ' + 'referer referrer repeating resultset rows search_args ' + 'search_arguments select sort_args sort_arguments thread_atomic ' + 'value_list while abort case else fail_if fail_ifnot fail if_empty ' + 'if_false if_null if_true loop_abort loop_continue loop_count params ' + 'params_up return return_value run_children soap_definetag ' + 'soap_lastrequest soap_lastresponse tag_name ascending average by ' + 'define descending do equals frozen group handle_failure import in ' + 'into join let match max min on order parent protected provide public ' + 'require returnhome skip split_thread sum take thread to trait type ' + 'where with yield yieldhome'
  };
  var HTML_COMMENT = hljs.COMMENT('<!--', '-->', {
    relevance: 0
  });
  var LASSO_NOPROCESS = {
    className: 'meta',
    begin: '\\[noprocess\\]',
    starts: {
      end: '\\[/noprocess\\]',
      returnEnd: true,
      contains: [HTML_COMMENT]
    }
  };
  var LASSO_START = {
    className: 'meta',
    begin: '\\[/noprocess|' + LASSO_ANGLE_RE
  };
  var LASSO_DATAMEMBER = {
    className: 'symbol',
    begin: '\'' + LASSO_IDENT_RE + '\''
  };
  var LASSO_CODE = [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.inherit(hljs.C_NUMBER_MODE, { begin: hljs.C_NUMBER_RE + '|(-?infinity|NaN)\\b' }), hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null }), hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null }), {
    className: 'string',
    begin: '`', end: '`'
  }, { // variables
    variants: [{
      begin: '[#$]' + LASSO_IDENT_RE
    }, {
      begin: '#', end: '\\d+',
      illegal: '\\W'
    }]
  }, {
    className: 'type',
    begin: '::\\s*', end: LASSO_IDENT_RE,
    illegal: '\\W'
  }, {
    className: 'params',
    variants: [{
      begin: '-(?!infinity)' + LASSO_IDENT_RE,
      relevance: 0
    }, {
      begin: '(\\.\\.\\.)'
    }]
  }, {
    begin: /(->|\.)\s*/,
    relevance: 0,
    contains: [LASSO_DATAMEMBER]
  }, {
    className: 'class',
    beginKeywords: 'define',
    returnEnd: true, end: '\\(|=>',
    contains: [hljs.inherit(hljs.TITLE_MODE, { begin: LASSO_IDENT_RE + '(=(?!>))?|[-+*/%](?!>)' })]
  }];
  return {
    aliases: ['ls', 'lassoscript'],
    case_insensitive: true,
    lexemes: LASSO_IDENT_RE + '|&[lg]t;',
    keywords: LASSO_KEYWORDS,
    contains: [{
      className: 'meta',
      begin: LASSO_CLOSE_RE,
      relevance: 0,
      starts: { // markup
        end: '\\[|' + LASSO_ANGLE_RE,
        returnEnd: true,
        relevance: 0,
        contains: [HTML_COMMENT]
      }
    }, LASSO_NOPROCESS, LASSO_START, {
      className: 'meta',
      begin: '\\[no_square_brackets',
      starts: {
        end: '\\[/no_square_brackets\\]', // not implemented in the language
        lexemes: LASSO_IDENT_RE + '|&[lg]t;',
        keywords: LASSO_KEYWORDS,
        contains: [{
          className: 'meta',
          begin: LASSO_CLOSE_RE,
          relevance: 0,
          starts: {
            end: '\\[noprocess\\]|' + LASSO_ANGLE_RE,
            returnEnd: true,
            contains: [HTML_COMMENT]
          }
        }, LASSO_NOPROCESS, LASSO_START].concat(LASSO_CODE)
      }
    }, {
      className: 'meta',
      begin: '\\[',
      relevance: 0
    }, {
      className: 'meta',
      begin: '^#!', end: 'lasso9$',
      relevance: 10
    }].concat(LASSO_CODE)
  };
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    contains: [{
      className: 'attribute',
      begin: '^dn', end: ': ', excludeEnd: true,
      starts: { end: '$', relevance: 0 },
      relevance: 10
    }, {
      className: 'attribute',
      begin: '^\\w', end: ': ', excludeEnd: true,
      starts: { end: '$', relevance: 0 }
    }, {
      className: 'literal',
      begin: '^-', end: '$'
    }, hljs.HASH_COMMENT_MODE]
  };
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    contains: [{
      className: 'function',
      begin: '#+' + '[A-Za-z_0-9]*' + '\\(',
      end: ' {',
      returnBegin: true,
      excludeEnd: true,
      contains: [{
        className: 'keyword',
        begin: '#+'
      }, {
        className: 'title',
        begin: '[A-Za-z_][A-Za-z_0-9]*'
      }, {
        className: 'params',
        begin: '\\(', end: '\\)',
        endsParent: true,
        contains: [{
          className: 'string',
          begin: '"',
          end: '"'
        }, {
          className: 'variable',
          begin: '[A-Za-z_][A-Za-z_0-9]*'
        }]
      }]
    }]
  };
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var IDENT_RE = '[\\w-]+'; // yes, Less identifiers may begin with a digit
  var INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})';

  /* Generic Modes */

  var RULES = [],
      VALUE = []; // forward def. for recursive modes

  var STRING_MODE = function STRING_MODE(c) {
    return {
      // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
      className: 'string', begin: '~?' + c + '.*?' + c
    };
  };

  var IDENT_MODE = function IDENT_MODE(name, begin, relevance) {
    return {
      className: name, begin: begin, relevance: relevance
    };
  };

  var PARENS_MODE = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: '\\(', end: '\\)', contains: VALUE, relevance: 0
  };

  // generic Less highlighter (used almost everywhere except selectors):
  VALUE.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRING_MODE("'"), STRING_MODE('"'), hljs.CSS_NUMBER_MODE, // fixme: it does not include dot for numbers like .5em :(
  {
    begin: '(url|data-uri)\\(',
    starts: { className: 'string', end: '[\\)\\n]', excludeEnd: true }
  }, IDENT_MODE('number', '#[0-9A-Fa-f]+\\b'), PARENS_MODE, IDENT_MODE('variable', '@@?' + IDENT_RE, 10), IDENT_MODE('variable', '@{' + IDENT_RE + '}'), IDENT_MODE('built_in', '~?`[^`]*?`'), // inline javascript (or whatever host language) *multiline* string
  { // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
    className: 'attribute', begin: IDENT_RE + '\\s*:', end: ':', returnBegin: true, excludeEnd: true
  }, {
    className: 'meta',
    begin: '!important'
  });

  var VALUE_WITH_RULESETS = VALUE.concat({
    begin: '{', end: '}', contains: RULES
  });

  var MIXIN_GUARD_MODE = {
    beginKeywords: 'when', endsWithParent: true,
    contains: [{ beginKeywords: 'and not' }].concat(VALUE) // using this form to override VALUE’s 'function' match
  };

  /* Rule-Level Modes */

  var RULE_MODE = {
    begin: INTERP_IDENT_RE + '\\s*:', returnBegin: true, end: '[;}]',
    relevance: 0,
    contains: [{
      className: 'attribute',
      begin: INTERP_IDENT_RE, end: ':', excludeEnd: true,
      starts: {
        endsWithParent: true, illegal: '[<=$]',
        relevance: 0,
        contains: VALUE
      }
    }]
  };

  var AT_RULE_MODE = {
    className: 'keyword',
    begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
    starts: { end: '[;{}]', returnEnd: true, contains: VALUE, relevance: 0 }
  };

  // variable definitions and calls
  var VAR_RULE_MODE = {
    className: 'variable',
    variants: [
    // using more strict pattern for higher relevance to increase chances of Less detection.
    // this is *the only* Less specific statement used in most of the sources, so...
    // (we’ll still often loose to the css-parser unless there's '//' comment,
    // simply because 1 variable just can't beat 99 properties :)
    { begin: '@' + IDENT_RE + '\\s*:', relevance: 15 }, { begin: '@' + IDENT_RE }],
    starts: { end: '[;}]', returnEnd: true, contains: VALUE_WITH_RULESETS }
  };

  var SELECTOR_MODE = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [{
      begin: '[\\.#:&\\[>]', end: '[;{}]' // mixin calls end with ';'
    }, {
      begin: INTERP_IDENT_RE, end: '{'
    }],
    returnBegin: true,
    returnEnd: true,
    illegal: '[<=\'$"]',
    relevance: 0,
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, MIXIN_GUARD_MODE, IDENT_MODE('keyword', 'all\\b'), IDENT_MODE('variable', '@{' + IDENT_RE + '}'), // otherwise it’s identified as tag
    IDENT_MODE('selector-tag', INTERP_IDENT_RE + '%?', 0), // '%' for more consistent coloring of @keyframes "tags"
    IDENT_MODE('selector-id', '#' + INTERP_IDENT_RE), IDENT_MODE('selector-class', '\\.' + INTERP_IDENT_RE, 0), IDENT_MODE('selector-tag', '&', 0), { className: 'selector-attr', begin: '\\[', end: '\\]' }, { className: 'selector-pseudo', begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ }, { begin: '\\(', end: '\\)', contains: VALUE_WITH_RULESETS }, // argument list of parametric mixins
    { begin: '!important' // eat !important after mixin call or it will be colored as tag
    }]
  };

  RULES.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, AT_RULE_MODE, VAR_RULE_MODE, RULE_MODE, SELECTOR_MODE);

  return {
    case_insensitive: true,
    illegal: '[=>\'/<($"]',
    contains: RULES
  };
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var LISP_IDENT_RE = '[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*';
  var MEC_RE = '\\|[^]*?\\|';
  var LISP_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?';
  var SHEBANG = {
    className: 'meta',
    begin: '^#!', end: '$'
  };
  var LITERAL = {
    className: 'literal',
    begin: '\\b(t{1}|nil)\\b'
  };
  var NUMBER = {
    className: 'number',
    variants: [{ begin: LISP_SIMPLE_NUMBER_RE, relevance: 0 }, { begin: '#(b|B)[0-1]+(/[0-1]+)?' }, { begin: '#(o|O)[0-7]+(/[0-7]+)?' }, { begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?' }, { begin: '#(c|C)\\(' + LISP_SIMPLE_NUMBER_RE + ' +' + LISP_SIMPLE_NUMBER_RE, end: '\\)' }]
  };
  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null });
  var COMMENT = hljs.COMMENT(';', '$', {
    relevance: 0
  });
  var VARIABLE = {
    begin: '\\*', end: '\\*'
  };
  var KEYWORD = {
    className: 'symbol',
    begin: '[:&]' + LISP_IDENT_RE
  };
  var IDENT = {
    begin: LISP_IDENT_RE,
    relevance: 0
  };
  var MEC = {
    begin: MEC_RE
  };
  var QUOTED_LIST = {
    begin: '\\(', end: '\\)',
    contains: ['self', LITERAL, STRING, NUMBER, IDENT]
  };
  var QUOTED = {
    contains: [NUMBER, STRING, VARIABLE, KEYWORD, QUOTED_LIST, IDENT],
    variants: [{
      begin: '[\'`]\\(', end: '\\)'
    }, {
      begin: '\\(quote ', end: '\\)',
      keywords: { name: 'quote' }
    }, {
      begin: '\'' + MEC_RE
    }]
  };
  var QUOTED_ATOM = {
    variants: [{ begin: '\'' + LISP_IDENT_RE }, { begin: '#\'' + LISP_IDENT_RE + '(::' + LISP_IDENT_RE + ')*' }]
  };
  var LIST = {
    begin: '\\(\\s*', end: '\\)'
  };
  var BODY = {
    endsWithParent: true,
    relevance: 0
  };
  LIST.contains = [{
    className: 'name',
    variants: [{ begin: LISP_IDENT_RE }, { begin: MEC_RE }]
  }, BODY];
  BODY.contains = [QUOTED, QUOTED_ATOM, LIST, LITERAL, NUMBER, STRING, COMMENT, VARIABLE, KEYWORD, MEC, IDENT];

  return {
    illegal: /\S/,
    contains: [NUMBER, SHEBANG, LITERAL, STRING, COMMENT, QUOTED, QUOTED_ATOM, LIST, IDENT]
  };
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var VARIABLE = {
    begin: '\\b[gtps][A-Z]+[A-Za-z0-9_\\-]*\\b|\\$_[A-Z]+',
    relevance: 0
  };
  var COMMENT_MODES = [hljs.C_BLOCK_COMMENT_MODE, hljs.HASH_COMMENT_MODE, hljs.COMMENT('--', '$'), hljs.COMMENT('[^:]//', '$')];
  var TITLE1 = hljs.inherit(hljs.TITLE_MODE, {
    variants: [{ begin: '\\b_*rig[A-Z]+[A-Za-z0-9_\\-]*' }, { begin: '\\b_[a-z0-9\\-]+' }]
  });
  var TITLE2 = hljs.inherit(hljs.TITLE_MODE, { begin: '\\b([A-Za-z0-9_\\-]+)\\b' });
  return {
    case_insensitive: false,
    keywords: {
      keyword: '$_COOKIE $_FILES $_GET $_GET_BINARY $_GET_RAW $_POST $_POST_BINARY $_POST_RAW $_SESSION $_SERVER ' + 'codepoint codepoints segment segments codeunit codeunits sentence sentences trueWord trueWords paragraph ' + 'after byte bytes english the until http forever descending using line real8 with seventh ' + 'for stdout finally element word words fourth before black ninth sixth characters chars stderr ' + 'uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid ' + 'at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 ' + 'int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat ' + 'end repeat URL in try into switch to words https token binfile each tenth as ticks tick ' + 'system real4 by dateItems without char character ascending eighth whole dateTime numeric short ' + 'first ftp integer abbreviated abbr abbrev private case while if ' + 'div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within ' + 'contains ends with begins the keys of keys',
      literal: 'SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE ' + 'QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO ' + 'six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five ' + 'quote empty one true return cr linefeed right backslash null seven tab three two ' + 'RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK ' + 'FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK',
      built_in: 'put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg avgDev base64Decode ' + 'base64Encode baseConvert binaryDecode binaryEncode byteOffset byteToNum cachedURL cachedURLs charToNum ' + 'cipherNames codepointOffset codepointProperty codepointToNum codeunitOffset commandNames compound compress ' + 'constantNames cos date dateFormat decompress directories ' + 'diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames geometricMean global ' + 'globals hasMemory harmonicMean hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset ' + 'keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders ' + 'libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 ' + 'longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge millisec ' + 'millisecs millisecond milliseconds min monthNames nativeCharToNum normalizeText num number numToByte numToChar ' + 'numToCodepoint numToNativeChar offset open openfiles openProcesses openProcessIDs openSockets ' + 'paragraphOffset paramCount param params peerAddress pendingMessages platform popStdDev populationStandardDeviation ' + 'populationVariance popVariance processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile ' + 'revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull ' + 'revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered ' + 'revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames ' + 'revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull ' + 'revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections ' + 'revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype ' + 'revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext ' + 'revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames ' + 'revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase ' + 'revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute ' + 'revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLCreateTreeFromFileWithNamespaces ' + 'revXMLCreateTreeWithNamespaces revXMLDataFromXPathQuery revXMLEvaluateXPath revXMLFirstChild revXMLMatchingNode ' + 'revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling ' + 'revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error ' + 'revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_Execute ' + 'revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort ' + 'revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree ' + 'revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sampVariance ' + 'sec secs seconds sentenceOffset sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound ' + 'stdDev sum sysError systemVersion tan tempName textDecode textEncode tick ticks time to tokenOffset toLower toUpper ' + 'transpose truewordOffset trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus uuid value variableNames ' + 'variance version waitDepth weekdayNames wordOffset xsltApplyStylesheet xsltApplyStylesheetFromFile xsltLoadStylesheet ' + 'xsltLoadStylesheetFromFile add breakpoint cancel clear local variable file word line folder directory URL close socket process ' + 'combine constant convert create new alias folder directory decrypt delete variable word line folder ' + 'directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile ' + 'libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback ' + 'libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime ' + 'libURLSetStatusCallback load multiply socket prepare process post seek rel relative read from process rename ' + 'replace require resetAll resolve revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase ' + 'revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees ' + 'revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord ' + 'revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase ' + 'revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD ' + 'revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost ' + 'revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData ' + 'revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel ' + 'revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback ' + 'revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split start stop ' + 'subtract union unload wait write'
    },
    contains: [VARIABLE, {
      className: 'keyword',
      begin: '\\bend\\sif\\b'
    }, {
      className: 'function',
      beginKeywords: 'function', end: '$',
      contains: [VARIABLE, TITLE2, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE, TITLE1]
    }, {
      className: 'function',
      begin: '\\bend\\s+', end: '$',
      keywords: 'end',
      contains: [TITLE2, TITLE1],
      relevance: 0
    }, {
      beginKeywords: 'command on', end: '$',
      contains: [VARIABLE, TITLE2, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE, TITLE1]
    }, {
      className: 'meta',
      variants: [{
        begin: '<\\?(rev|lc|livecode)',
        relevance: 10
      }, { begin: '<\\?' }, { begin: '\\?>' }]
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE, TITLE1].concat(COMMENT_MODES),
    illegal: ';$|^\\[|^=|&|{'
  };
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    keyword:
    // JS keywords
    'in if for while finally new do return else break catch instanceof throw try this ' + 'switch continue typeof delete debugger case default function var with ' +
    // LiveScript keywords
    'then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super ' + 'case default function var void const let enum export import native ' + '__hasProp __extends __slice __bind __indexOf',
    literal:
    // JS literals
    'true false null undefined ' +
    // LiveScript literals
    'yes no on off it that void',
    built_in: 'npm require console print module global window document'
  };
  var JS_IDENT_RE = '[A-Za-z$_](?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*';
  var TITLE = hljs.inherit(hljs.TITLE_MODE, { begin: JS_IDENT_RE });
  var SUBST = {
    className: 'subst',
    begin: /#\{/, end: /}/,
    keywords: KEYWORDS
  };
  var SUBST_SIMPLE = {
    className: 'subst',
    begin: /#[A-Za-z$_]/, end: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
    keywords: KEYWORDS
  };
  var EXPRESSIONS = [hljs.BINARY_NUMBER_MODE, {
    className: 'number',
    begin: '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
    relevance: 0,
    starts: { end: '(\\s*/)?', relevance: 0 // a number tries to eat the following slash to prevent treating it as a regexp
    } }, {
    className: 'string',
    variants: [{
      begin: /'''/, end: /'''/,
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: /'/, end: /'/,
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: /"""/, end: /"""/,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
    }, {
      begin: /"/, end: /"/,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
    }, {
      begin: /\\/, end: /(\s|$)/,
      excludeEnd: true
    }]
  }, {
    className: 'regexp',
    variants: [{
      begin: '//', end: '//[gim]*',
      contains: [SUBST, hljs.HASH_COMMENT_MODE]
    }, {
      // regex can't start with space to parse x / 2 / 3 as two divisions
      // regex can't start with *, and it supports an "illegal" in the main mode
      begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
    }]
  }, {
    begin: '@' + JS_IDENT_RE
  }, {
    begin: '``', end: '``',
    excludeBegin: true, excludeEnd: true,
    subLanguage: 'javascript'
  }];
  SUBST.contains = EXPRESSIONS;

  var PARAMS = {
    className: 'params',
    begin: '\\(', returnBegin: true,
    /* We need another contained nameless mode to not have every nested
    pair of parens to be called "params" */
    contains: [{
      begin: /\(/, end: /\)/,
      keywords: KEYWORDS,
      contains: ['self'].concat(EXPRESSIONS)
    }]
  };

  return {
    aliases: ['ls'],
    keywords: KEYWORDS,
    illegal: /\/\*/,
    contains: EXPRESSIONS.concat([hljs.COMMENT('\\/\\*', '\\*\\/'), hljs.HASH_COMMENT_MODE, {
      className: 'function',
      contains: [TITLE, PARAMS],
      returnBegin: true,
      variants: [{
        begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?', end: '\\->\\*?'
      }, {
        begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?', end: '[-~]{1,2}>\\*?'
      }, {
        begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?', end: '!?[-~]{1,2}>\\*?'
      }]
    }, {
      className: 'class',
      beginKeywords: 'class',
      end: '$',
      illegal: /[:="\[\]]/,
      contains: [{
        beginKeywords: 'extends',
        endsWithParent: true,
        illegal: /[:="\[\]]/,
        contains: [TITLE]
      }, TITLE]
    }, {
      begin: JS_IDENT_RE + ':', end: ':',
      returnBegin: true, returnEnd: true,
      relevance: 0
    }])
  };
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var identifier = '([-a-zA-Z$._][\\w\\-$.]*)';
  return {
    //lexemes: '[.%]?' + hljs.IDENT_RE,
    keywords: 'begin end true false declare define global ' + 'constant private linker_private internal ' + 'available_externally linkonce linkonce_odr weak ' + 'weak_odr appending dllimport dllexport common ' + 'default hidden protected extern_weak external ' + 'thread_local zeroinitializer undef null to tail ' + 'target triple datalayout volatile nuw nsw nnan ' + 'ninf nsz arcp fast exact inbounds align ' + 'addrspace section alias module asm sideeffect ' + 'gc dbg linker_private_weak attributes blockaddress ' + 'initialexec localdynamic localexec prefix unnamed_addr ' + 'ccc fastcc coldcc x86_stdcallcc x86_fastcallcc ' + 'arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ' + 'ptx_kernel intel_ocl_bicc msp430_intrcc spir_func ' + 'spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc ' + 'cc c signext zeroext inreg sret nounwind ' + 'noreturn noalias nocapture byval nest readnone ' + 'readonly inlinehint noinline alwaysinline optsize ssp ' + 'sspreq noredzone noimplicitfloat naked builtin cold ' + 'nobuiltin noduplicate nonlazybind optnone returns_twice ' + 'sanitize_address sanitize_memory sanitize_thread sspstrong ' + 'uwtable returned type opaque eq ne slt sgt ' + 'sle sge ult ugt ule uge oeq one olt ogt ' + 'ole oge ord uno ueq une x acq_rel acquire ' + 'alignstack atomic catch cleanup filter inteldialect ' + 'max min monotonic nand personality release seq_cst ' + 'singlethread umax umin unordered xchg add fadd ' + 'sub fsub mul fmul udiv sdiv fdiv urem srem ' + 'frem shl lshr ashr and or xor icmp fcmp ' + 'phi call trunc zext sext fptrunc fpext uitofp ' + 'sitofp fptoui fptosi inttoptr ptrtoint bitcast ' + 'addrspacecast select va_arg ret br switch invoke ' + 'unwind unreachable indirectbr landingpad resume ' + 'malloc alloca free load store getelementptr ' + 'extractelement insertelement shufflevector getresult ' + 'extractvalue insertvalue atomicrmw cmpxchg fence ' + 'argmemonly double',
    contains: [{
      className: 'keyword',
      begin: 'i\\d+'
    }, hljs.COMMENT(';', '\\n', { relevance: 0 }),
    // Double quote string
    hljs.QUOTE_STRING_MODE, {
      className: 'string',
      variants: [
      // Double-quoted string
      { begin: '"', end: '[^\\\\]"' }],
      relevance: 0
    }, {
      className: 'title',
      variants: [{ begin: '@' + identifier }, { begin: '@\\d+' }, { begin: '!' + identifier }, { begin: '!\\d+' + identifier }]
    }, {
      className: 'symbol',
      variants: [{ begin: '%' + identifier }, { begin: '%\\d+' }, { begin: '#\\d+' }]
    }, {
      className: 'number',
      variants: [{ begin: '0[xX][a-fA-F0-9]+' }, { begin: '-?\\d+(?:[.]\\d+)?(?:[eE][-+]?\\d+(?:[.]\\d+)?)?' }],
      relevance: 0
    }]
  };
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {

    var LSL_STRING_ESCAPE_CHARS = {
        className: 'subst',
        begin: /\\[tn"\\]/
    };

    var LSL_STRINGS = {
        className: 'string',
        begin: '"',
        end: '"',
        contains: [LSL_STRING_ESCAPE_CHARS]
    };

    var LSL_NUMBERS = {
        className: 'number',
        begin: hljs.C_NUMBER_RE
    };

    var LSL_CONSTANTS = {
        className: 'literal',
        variants: [{
            begin: '\\b(?:PI|TWO_PI|PI_BY_TWO|DEG_TO_RAD|RAD_TO_DEG|SQRT2)\\b'
        }, {
            begin: '\\b(?:XP_ERROR_(?:EXPERIENCES_DISABLED|EXPERIENCE_(?:DISABLED|SUSPENDED)|INVALID_(?:EXPERIENCE|PARAMETERS)|KEY_NOT_FOUND|MATURITY_EXCEEDED|NONE|NOT_(?:FOUND|PERMITTED(?:_LAND)?)|NO_EXPERIENCE|QUOTA_EXCEEDED|RETRY_UPDATE|STORAGE_EXCEPTION|STORE_DISABLED|THROTTLED|UNKNOWN_ERROR)|JSON_APPEND|STATUS_(?:PHYSICS|ROTATE_[XYZ]|PHANTOM|SANDBOX|BLOCK_GRAB(?:_OBJECT)?|(?:DIE|RETURN)_AT_EDGE|CAST_SHADOWS|OK|MALFORMED_PARAMS|TYPE_MISMATCH|BOUNDS_ERROR|NOT_(?:FOUND|SUPPORTED)|INTERNAL_ERROR|WHITELIST_FAILED)|AGENT(?:_(?:BY_(?:LEGACY_|USER)NAME|FLYING|ATTACHMENTS|SCRIPTED|MOUSELOOK|SITTING|ON_OBJECT|AWAY|WALKING|IN_AIR|TYPING|CROUCHING|BUSY|ALWAYS_RUN|AUTOPILOT|LIST_(?:PARCEL(?:_OWNER)?|REGION)))?|CAMERA_(?:PITCH|DISTANCE|BEHINDNESS_(?:ANGLE|LAG)|(?:FOCUS|POSITION)(?:_(?:THRESHOLD|LOCKED|LAG))?|FOCUS_OFFSET|ACTIVE)|ANIM_ON|LOOP|REVERSE|PING_PONG|SMOOTH|ROTATE|SCALE|ALL_SIDES|LINK_(?:ROOT|SET|ALL_(?:OTHERS|CHILDREN)|THIS)|ACTIVE|PASS(?:IVE|_(?:ALWAYS|IF_NOT_HANDLED|NEVER))|SCRIPTED|CONTROL_(?:FWD|BACK|(?:ROT_)?(?:LEFT|RIGHT)|UP|DOWN|(?:ML_)?LBUTTON)|PERMISSION_(?:RETURN_OBJECTS|DEBIT|OVERRIDE_ANIMATIONS|SILENT_ESTATE_MANAGEMENT|TAKE_CONTROLS|TRIGGER_ANIMATION|ATTACH|CHANGE_LINKS|(?:CONTROL|TRACK)_CAMERA|TELEPORT)|INVENTORY_(?:TEXTURE|SOUND|OBJECT|SCRIPT|LANDMARK|CLOTHING|NOTECARD|BODYPART|ANIMATION|GESTURE|ALL|NONE)|CHANGED_(?:INVENTORY|COLOR|SHAPE|SCALE|TEXTURE|LINK|ALLOWED_DROP|OWNER|REGION(?:_START)?|TELEPORT|MEDIA)|OBJECT_(?:CLICK_ACTION|HOVER_HEIGHT|LAST_OWNER_ID|(?:PHYSICS|SERVER|STREAMING)_COST|UNKNOWN_DETAIL|CHARACTER_TIME|PHANTOM|PHYSICS|TEMP_ON_REZ|NAME|DESC|POS|PRIM_(?:COUNT|EQUIVALENCE)|RETURN_(?:PARCEL(?:_OWNER)?|REGION)|REZZER_KEY|ROO?T|VELOCITY|OMEGA|OWNER|GROUP|CREATOR|ATTACHED_POINT|RENDER_WEIGHT|(?:BODY_SHAPE|PATHFINDING)_TYPE|(?:RUNNING|TOTAL)_SCRIPT_COUNT|TOTAL_INVENTORY_COUNT|SCRIPT_(?:MEMORY|TIME))|TYPE_(?:INTEGER|FLOAT|STRING|KEY|VECTOR|ROTATION|INVALID)|(?:DEBUG|PUBLIC)_CHANNEL|ATTACH_(?:AVATAR_CENTER|CHEST|HEAD|BACK|PELVIS|MOUTH|CHIN|NECK|NOSE|BELLY|[LR](?:SHOULDER|HAND|FOOT|EAR|EYE|[UL](?:ARM|LEG)|HIP)|(?:LEFT|RIGHT)_PEC|HUD_(?:CENTER_[12]|TOP_(?:RIGHT|CENTER|LEFT)|BOTTOM(?:_(?:RIGHT|LEFT))?)|[LR]HAND_RING1|TAIL_(?:BASE|TIP)|[LR]WING|FACE_(?:JAW|[LR]EAR|[LR]EYE|TOUNGE)|GROIN|HIND_[LR]FOOT)|LAND_(?:LEVEL|RAISE|LOWER|SMOOTH|NOISE|REVERT)|DATA_(?:ONLINE|NAME|BORN|SIM_(?:POS|STATUS|RATING)|PAYINFO)|PAYMENT_INFO_(?:ON_FILE|USED)|REMOTE_DATA_(?:CHANNEL|REQUEST|REPLY)|PSYS_(?:PART_(?:BF_(?:ZERO|ONE(?:_MINUS_(?:DEST_COLOR|SOURCE_(ALPHA|COLOR)))?|DEST_COLOR|SOURCE_(ALPHA|COLOR))|BLEND_FUNC_(DEST|SOURCE)|FLAGS|(?:START|END)_(?:COLOR|ALPHA|SCALE|GLOW)|MAX_AGE|(?:RIBBON|WIND|INTERP_(?:COLOR|SCALE)|BOUNCE|FOLLOW_(?:SRC|VELOCITY)|TARGET_(?:POS|LINEAR)|EMISSIVE)_MASK)|SRC_(?:MAX_AGE|PATTERN|ANGLE_(?:BEGIN|END)|BURST_(?:RATE|PART_COUNT|RADIUS|SPEED_(?:MIN|MAX))|ACCEL|TEXTURE|TARGET_KEY|OMEGA|PATTERN_(?:DROP|EXPLODE|ANGLE(?:_CONE(?:_EMPTY)?)?)))|VEHICLE_(?:REFERENCE_FRAME|TYPE_(?:NONE|SLED|CAR|BOAT|AIRPLANE|BALLOON)|(?:LINEAR|ANGULAR)_(?:FRICTION_TIMESCALE|MOTOR_DIRECTION)|LINEAR_MOTOR_OFFSET|HOVER_(?:HEIGHT|EFFICIENCY|TIMESCALE)|BUOYANCY|(?:LINEAR|ANGULAR)_(?:DEFLECTION_(?:EFFICIENCY|TIMESCALE)|MOTOR_(?:DECAY_)?TIMESCALE)|VERTICAL_ATTRACTION_(?:EFFICIENCY|TIMESCALE)|BANKING_(?:EFFICIENCY|MIX|TIMESCALE)|FLAG_(?:NO_DEFLECTION_UP|LIMIT_(?:ROLL_ONLY|MOTOR_UP)|HOVER_(?:(?:WATER|TERRAIN|UP)_ONLY|GLOBAL_HEIGHT)|MOUSELOOK_(?:STEER|BANK)|CAMERA_DECOUPLED))|PRIM_(?:ALPHA_MODE(?:_(?:BLEND|EMISSIVE|MASK|NONE))?|NORMAL|SPECULAR|TYPE(?:_(?:BOX|CYLINDER|PRISM|SPHERE|TORUS|TUBE|RING|SCULPT))?|HOLE_(?:DEFAULT|CIRCLE|SQUARE|TRIANGLE)|MATERIAL(?:_(?:STONE|METAL|GLASS|WOOD|FLESH|PLASTIC|RUBBER))?|SHINY_(?:NONE|LOW|MEDIUM|HIGH)|BUMP_(?:NONE|BRIGHT|DARK|WOOD|BARK|BRICKS|CHECKER|CONCRETE|TILE|STONE|DISKS|GRAVEL|BLOBS|SIDING|LARGETILE|STUCCO|SUCTION|WEAVE)|TEXGEN_(?:DEFAULT|PLANAR)|SCULPT_(?:TYPE_(?:SPHERE|TORUS|PLANE|CYLINDER|MASK)|FLAG_(?:MIRROR|INVERT))|PHYSICS(?:_(?:SHAPE_(?:CONVEX|NONE|PRIM|TYPE)))?|(?:POS|ROT)_LOCAL|SLICE|TEXT|FLEXIBLE|POINT_LIGHT|TEMP_ON_REZ|PHANTOM|POSITION|SIZE|ROTATION|TEXTURE|NAME|OMEGA|DESC|LINK_TARGET|COLOR|BUMP_SHINY|FULLBRIGHT|TEXGEN|GLOW|MEDIA_(?:ALT_IMAGE_ENABLE|CONTROLS|(?:CURRENT|HOME)_URL|AUTO_(?:LOOP|PLAY|SCALE|ZOOM)|FIRST_CLICK_INTERACT|(?:WIDTH|HEIGHT)_PIXELS|WHITELIST(?:_ENABLE)?|PERMS_(?:INTERACT|CONTROL)|PARAM_MAX|CONTROLS_(?:STANDARD|MINI)|PERM_(?:NONE|OWNER|GROUP|ANYONE)|MAX_(?:URL_LENGTH|WHITELIST_(?:SIZE|COUNT)|(?:WIDTH|HEIGHT)_PIXELS)))|MASK_(?:BASE|OWNER|GROUP|EVERYONE|NEXT)|PERM_(?:TRANSFER|MODIFY|COPY|MOVE|ALL)|PARCEL_(?:MEDIA_COMMAND_(?:STOP|PAUSE|PLAY|LOOP|TEXTURE|URL|TIME|AGENT|UNLOAD|AUTO_ALIGN|TYPE|SIZE|DESC|LOOP_SET)|FLAG_(?:ALLOW_(?:FLY|(?:GROUP_)?SCRIPTS|LANDMARK|TERRAFORM|DAMAGE|CREATE_(?:GROUP_)?OBJECTS)|USE_(?:ACCESS_(?:GROUP|LIST)|BAN_LIST|LAND_PASS_LIST)|LOCAL_SOUND_ONLY|RESTRICT_PUSHOBJECT|ALLOW_(?:GROUP|ALL)_OBJECT_ENTRY)|COUNT_(?:TOTAL|OWNER|GROUP|OTHER|SELECTED|TEMP)|DETAILS_(?:NAME|DESC|OWNER|GROUP|AREA|ID|SEE_AVATARS))|LIST_STAT_(?:MAX|MIN|MEAN|MEDIAN|STD_DEV|SUM(?:_SQUARES)?|NUM_COUNT|GEOMETRIC_MEAN|RANGE)|PAY_(?:HIDE|DEFAULT)|REGION_FLAG_(?:ALLOW_DAMAGE|FIXED_SUN|BLOCK_TERRAFORM|SANDBOX|DISABLE_(?:COLLISIONS|PHYSICS)|BLOCK_FLY|ALLOW_DIRECT_TELEPORT|RESTRICT_PUSHOBJECT)|HTTP_(?:METHOD|MIMETYPE|BODY_(?:MAXLENGTH|TRUNCATED)|CUSTOM_HEADER|PRAGMA_NO_CACHE|VERBOSE_THROTTLE|VERIFY_CERT)|STRING_(?:TRIM(?:_(?:HEAD|TAIL))?)|CLICK_ACTION_(?:NONE|TOUCH|SIT|BUY|PAY|OPEN(?:_MEDIA)?|PLAY|ZOOM)|TOUCH_INVALID_FACE|PROFILE_(?:NONE|SCRIPT_MEMORY)|RC_(?:DATA_FLAGS|DETECT_PHANTOM|GET_(?:LINK_NUM|NORMAL|ROOT_KEY)|MAX_HITS|REJECT_(?:TYPES|AGENTS|(?:NON)?PHYSICAL|LAND))|RCERR_(?:CAST_TIME_EXCEEDED|SIM_PERF_LOW|UNKNOWN)|ESTATE_ACCESS_(?:ALLOWED_(?:AGENT|GROUP)_(?:ADD|REMOVE)|BANNED_AGENT_(?:ADD|REMOVE))|DENSITY|FRICTION|RESTITUTION|GRAVITY_MULTIPLIER|KFM_(?:COMMAND|CMD_(?:PLAY|STOP|PAUSE)|MODE|FORWARD|LOOP|PING_PONG|REVERSE|DATA|ROTATION|TRANSLATION)|ERR_(?:GENERIC|PARCEL_PERMISSIONS|MALFORMED_PARAMS|RUNTIME_PERMISSIONS|THROTTLED)|CHARACTER_(?:CMD_(?:(?:SMOOTH_)?STOP|JUMP)|DESIRED_(?:TURN_)?SPEED|RADIUS|STAY_WITHIN_PARCEL|LENGTH|ORIENTATION|ACCOUNT_FOR_SKIPPED_FRAMES|AVOIDANCE_MODE|TYPE(?:_(?:[ABCD]|NONE))?|MAX_(?:DECEL|TURN_RADIUS|(?:ACCEL|SPEED)))|PURSUIT_(?:OFFSET|FUZZ_FACTOR|GOAL_TOLERANCE|INTERCEPT)|REQUIRE_LINE_OF_SIGHT|FORCE_DIRECT_PATH|VERTICAL|HORIZONTAL|AVOID_(?:CHARACTERS|DYNAMIC_OBSTACLES|NONE)|PU_(?:EVADE_(?:HIDDEN|SPOTTED)|FAILURE_(?:DYNAMIC_PATHFINDING_DISABLED|INVALID_(?:GOAL|START)|NO_(?:NAVMESH|VALID_DESTINATION)|OTHER|TARGET_GONE|(?:PARCEL_)?UNREACHABLE)|(?:GOAL|SLOWDOWN_DISTANCE)_REACHED)|TRAVERSAL_TYPE(?:_(?:FAST|NONE|SLOW))?|CONTENT_TYPE_(?:ATOM|FORM|HTML|JSON|LLSD|RSS|TEXT|XHTML|XML)|GCNP_(?:RADIUS|STATIC)|(?:PATROL|WANDER)_PAUSE_AT_WAYPOINTS|OPT_(?:AVATAR|CHARACTER|EXCLUSION_VOLUME|LEGACY_LINKSET|MATERIAL_VOLUME|OTHER|STATIC_OBSTACLE|WALKABLE)|SIM_STAT_PCT_CHARS_STEPPED)\\b'
        }, {
            begin: '\\b(?:FALSE|TRUE)\\b'
        }, {
            begin: '\\b(?:ZERO_ROTATION)\\b'
        }, {
            begin: '\\b(?:EOF|JSON_(?:ARRAY|DELETE|FALSE|INVALID|NULL|NUMBER|OBJECT|STRING|TRUE)|NULL_KEY|TEXTURE_(?:BLANK|DEFAULT|MEDIA|PLYWOOD|TRANSPARENT)|URL_REQUEST_(?:GRANTED|DENIED))\\b'
        }, {
            begin: '\\b(?:ZERO_VECTOR|TOUCH_INVALID_(?:TEXCOORD|VECTOR))\\b'
        }]
    };

    var LSL_FUNCTIONS = {
        className: 'built_in',
        begin: '\\b(?:ll(?:AgentInExperience|(?:Create|DataSize|Delete|KeyCount|Keys|Read|Update)KeyValue|GetExperience(?:Details|ErrorMessage)|ReturnObjectsBy(?:ID|Owner)|Json(?:2List|[GS]etValue|ValueType)|Sin|Cos|Tan|Atan2|Sqrt|Pow|Abs|Fabs|Frand|Floor|Ceil|Round|Vec(?:Mag|Norm|Dist)|Rot(?:Between|2(?:Euler|Fwd|Left|Up))|(?:Euler|Axes)2Rot|Whisper|(?:Region|Owner)?Say|Shout|Listen(?:Control|Remove)?|Sensor(?:Repeat|Remove)?|Detected(?:Name|Key|Owner|Type|Pos|Vel|Grab|Rot|Group|LinkNumber)|Die|Ground|Wind|(?:[GS]et)(?:AnimationOverride|MemoryLimit|PrimMediaParams|ParcelMusicURL|Object(?:Desc|Name)|PhysicsMaterial|Status|Scale|Color|Alpha|Texture|Pos|Rot|Force|Torque)|ResetAnimationOverride|(?:Scale|Offset|Rotate)Texture|(?:Rot)?Target(?:Remove)?|(?:Stop)?MoveToTarget|Apply(?:Rotational)?Impulse|Set(?:KeyframedMotion|ContentType|RegionPos|(?:Angular)?Velocity|Buoyancy|HoverHeight|ForceAndTorque|TimerEvent|ScriptState|Damage|TextureAnim|Sound(?:Queueing|Radius)|Vehicle(?:Type|(?:Float|Vector|Rotation)Param)|(?:Touch|Sit)?Text|Camera(?:Eye|At)Offset|PrimitiveParams|ClickAction|Link(?:Alpha|Color|PrimitiveParams(?:Fast)?|Texture(?:Anim)?|Camera|Media)|RemoteScriptAccessPin|PayPrice|LocalRot)|ScaleByFactor|Get(?:(?:Max|Min)ScaleFactor|ClosestNavPoint|StaticPath|SimStats|Env|PrimitiveParams|Link(?:PrimitiveParams|Number(?:OfSides)?|Key|Name|Media)|HTTPHeader|FreeURLs|Object(?:Details|PermMask|PrimCount)|Parcel(?:MaxPrims|Details|Prim(?:Count|Owners))|Attached(?:List)?|(?:SPMax|Free|Used)Memory|Region(?:Name|TimeDilation|FPS|Corner|AgentCount)|Root(?:Position|Rotation)|UnixTime|(?:Parcel|Region)Flags|(?:Wall|GMT)clock|SimulatorHostname|BoundingBox|GeometricCenter|Creator|NumberOf(?:Prims|NotecardLines|Sides)|Animation(?:List)?|(?:Camera|Local)(?:Pos|Rot)|Vel|Accel|Omega|Time(?:stamp|OfDay)|(?:Object|CenterOf)?Mass|MassMKS|Energy|Owner|(?:Owner)?Key|SunDirection|Texture(?:Offset|Scale|Rot)|Inventory(?:Number|Name|Key|Type|Creator|PermMask)|Permissions(?:Key)?|StartParameter|List(?:Length|EntryType)|Date|Agent(?:Size|Info|Language|List)|LandOwnerAt|NotecardLine|Script(?:Name|State))|(?:Get|Reset|GetAndReset)Time|PlaySound(?:Slave)?|LoopSound(?:Master|Slave)?|(?:Trigger|Stop|Preload)Sound|(?:(?:Get|Delete)Sub|Insert)String|To(?:Upper|Lower)|Give(?:InventoryList|Money)|RezObject|(?:Stop)?LookAt|Sleep|CollisionFilter|(?:Take|Release)Controls|DetachFromAvatar|AttachToAvatar(?:Temp)?|InstantMessage|(?:GetNext)?Email|StopHover|MinEventDelay|RotLookAt|String(?:Length|Trim)|(?:Start|Stop)Animation|TargetOmega|Request(?:Experience)?Permissions|(?:Create|Break)Link|BreakAllLinks|(?:Give|Remove)Inventory|Water|PassTouches|Request(?:Agent|Inventory)Data|TeleportAgent(?:Home|GlobalCoords)?|ModifyLand|CollisionSound|ResetScript|MessageLinked|PushObject|PassCollisions|AxisAngle2Rot|Rot2(?:Axis|Angle)|A(?:cos|sin)|AngleBetween|AllowInventoryDrop|SubStringIndex|List2(?:CSV|Integer|Json|Float|String|Key|Vector|Rot|List(?:Strided)?)|DeleteSubList|List(?:Statistics|Sort|Randomize|(?:Insert|Find|Replace)List)|EdgeOfWorld|AdjustSoundVolume|Key2Name|TriggerSoundLimited|EjectFromLand|(?:CSV|ParseString)2List|OverMyLand|SameGroup|UnSit|Ground(?:Slope|Normal|Contour)|GroundRepel|(?:Set|Remove)VehicleFlags|(?:AvatarOn)?(?:Link)?SitTarget|Script(?:Danger|Profiler)|Dialog|VolumeDetect|ResetOtherScript|RemoteLoadScriptPin|(?:Open|Close)RemoteDataChannel|SendRemoteData|RemoteDataReply|(?:Integer|String)ToBase64|XorBase64|Log(?:10)?|Base64To(?:String|Integer)|ParseStringKeepNulls|RezAtRoot|RequestSimulatorData|ForceMouselook|(?:Load|Release|(?:E|Une)scape)URL|ParcelMedia(?:CommandList|Query)|ModPow|MapDestination|(?:RemoveFrom|AddTo|Reset)Land(?:Pass|Ban)List|(?:Set|Clear)CameraParams|HTTP(?:Request|Response)|TextBox|DetectedTouch(?:UV|Face|Pos|(?:N|Bin)ormal|ST)|(?:MD5|SHA1|DumpList2)String|Request(?:Secure)?URL|Clear(?:Prim|Link)Media|(?:Link)?ParticleSystem|(?:Get|Request)(?:Username|DisplayName)|RegionSayTo|CastRay|GenerateKey|TransferLindenDollars|ManageEstateAccess|(?:Create|Delete)Character|ExecCharacterCmd|Evade|FleeFrom|NavigateTo|PatrolPoints|Pursue|UpdateCharacter|WanderWithin))\\b'
    };

    return {
        illegal: ':',
        contains: [LSL_STRINGS, {
            className: 'comment',
            variants: [hljs.COMMENT('//', '$'), hljs.COMMENT('/\\*', '\\*/')]
        }, LSL_NUMBERS, {
            className: 'section',
            variants: [{
                begin: '\\b(?:state|default)\\b'
            }, {
                begin: '\\b(?:state_(?:entry|exit)|touch(?:_(?:start|end))?|(?:land_)?collision(?:_(?:start|end))?|timer|listen|(?:no_)?sensor|control|(?:not_)?at_(?:rot_)?target|money|email|experience_permissions(?:_denied)?|run_time_permissions|changed|attach|dataserver|moving_(?:start|end)|link_message|(?:on|object)_rez|remote_data|http_re(?:sponse|quest)|path_update|transaction_result)\\b'
            }]
        }, LSL_FUNCTIONS, LSL_CONSTANTS, {
            className: 'type',
            begin: '\\b(?:integer|float|string|key|vector|quaternion|rotation|list)\\b'
        }]
    };
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var OPENING_LONG_BRACKET = '\\[=*\\[';
  var CLOSING_LONG_BRACKET = '\\]=*\\]';
  var LONG_BRACKETS = {
    begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
    contains: ['self']
  };
  var COMMENTS = [hljs.COMMENT('--(?!' + OPENING_LONG_BRACKET + ')', '$'), hljs.COMMENT('--' + OPENING_LONG_BRACKET, CLOSING_LONG_BRACKET, {
    contains: [LONG_BRACKETS],
    relevance: 10
  })];
  return {
    lexemes: hljs.UNDERSCORE_IDENT_RE,
    keywords: {
      literal: "true false nil",
      keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
      built_in:
      //Metatags and globals:
      '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len ' + '__gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert ' +
      //Standard methods and properties:
      'collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring' + 'module next pairs pcall print rawequal rawget rawset require select setfenv' + 'setmetatable tonumber tostring type unpack xpcall arg self' +
      //Library methods and properties (one line per library):
      'coroutine resume yield status wrap create running debug getupvalue ' + 'debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv ' + 'io lines write close flush open output type read stderr stdin input stdout popen tmpfile ' + 'math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan ' + 'os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall ' + 'string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower ' + 'table setn insert getn foreachi maxn foreach concat sort remove'
    },
    contains: COMMENTS.concat([{
      className: 'function',
      beginKeywords: 'function', end: '\\)',
      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*' }), {
        className: 'params',
        begin: '\\(', endsWithParent: true,
        contains: COMMENTS
      }].concat(COMMENTS)
    }, hljs.C_NUMBER_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, {
      className: 'string',
      begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
      contains: [LONG_BRACKETS],
      relevance: 5
    }])
  };
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  /* Variables: simple (eg $(var)) and special (eg $@) */
  var VARIABLE = {
    className: 'variable',
    variants: [{
      begin: '\\$\\(' + hljs.UNDERSCORE_IDENT_RE + '\\)',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: /\$[@%<?\^\+\*]/
    }]
  };
  /* Quoted string with variables inside */
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [hljs.BACKSLASH_ESCAPE, VARIABLE]
  };
  /* Function: $(func arg,...) */
  var FUNC = {
    className: 'variable',
    begin: /\$\([\w-]+\s/, end: /\)/,
    keywords: {
      built_in: 'subst patsubst strip findstring filter filter-out sort ' + 'word wordlist firstword lastword dir notdir suffix basename ' + 'addsuffix addprefix join wildcard realpath abspath error warning ' + 'shell origin flavor foreach if or and call eval file value'
    },
    contains: [VARIABLE]
  };
  /* Variable assignment */
  var VAR_ASSIG = {
    begin: '^' + hljs.UNDERSCORE_IDENT_RE + '\\s*[:+?]?=',
    illegal: '\\n',
    returnBegin: true,
    contains: [{
      begin: '^' + hljs.UNDERSCORE_IDENT_RE, end: '[:+?]?=',
      excludeEnd: true
    }]
  };
  /* Meta targets (.PHONY) */
  var META = {
    className: 'meta',
    begin: /^\.PHONY:/, end: /$/,
    keywords: { 'meta-keyword': '.PHONY' },
    lexemes: /[\.\w]+/
  };
  /* Targets */
  var TARGET = {
    className: 'section',
    begin: /^[^\s]+:/, end: /$/,
    contains: [VARIABLE]
  };
  return {
    aliases: ['mk', 'mak'],
    keywords: 'define endef undefine ifdef ifndef ifeq ifneq else endif ' + 'include -include sinclude override export unexport private vpath',
    lexemes: /[\w-]+/,
    contains: [hljs.HASH_COMMENT_MODE, VARIABLE, QUOTE_STRING, FUNC, VAR_ASSIG, META, TARGET]
  };
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['mma'],
    lexemes: '(\\$|\\b)' + hljs.IDENT_RE + '\\b',
    keywords: 'AbelianGroup Abort AbortKernels AbortProtect Above Abs Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Active ActiveItem ActiveStyle AcyclicGraphQ AddOnHelpPath AddTo AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AffineTransform After AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowedDimensions AllowGroupClose AllowInlineCells AllowKernelInitialization AllowReverseGroupClose AllowScriptLevelChange AlphaChannel AlternatingGroup AlternativeHypothesis Alternatives AmbientLight Analytic AnchoredSearch And AndersonDarlingTest AngerJ AngleBracket AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotation Annuity AnnuityDue Antialiasing Antisymmetric Apart ApartSquareFree Appearance AppearanceElements AppellF1 Append AppendTo Apply ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess ARProcess Array ArrayComponents ArrayDepth ArrayFlatten ArrayPad ArrayPlot ArrayQ ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads AspectRatio AspectRatioFixed Assert Assuming Assumptions AstronomicalData Asynchronous AsynchronousTaskObject AsynchronousTasks AtomQ Attributes AugmentedSymmetricPolynomial AutoAction AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords Axes AxesEdge AxesLabel AxesOrigin AxesStyle Axis ' + 'BabyMonsterGroupB Back Background BackgroundTasksSettings Backslash Backsubstitution Backward Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseForm Baseline BaselinePosition BaseStyle BatesDistribution BattleLemarieWavelet Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized BetweennessCentrality BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms Booleans BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryStyle Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BubbleChart BubbleChart3D BubbleScale BubbleSizes BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteCount ByteOrdering ' + 'C CachedValue CacheGraphics CalendarData CalendarType CallPacket CanberraDistance Cancel CancelButton CandlestickChart Cap CapForm CapitalDifferentialD CardinalBSplineBasis CarmichaelLambda Cases Cashflow Casoratian Catalan CatalanNumber Catch CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterDot CentralMoment CentralMomentGeneratingFunction CForm ChampernowneNumber ChanVeseBinarize Character CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop Circle CircleBox CircleDot CircleMinus CirclePlus CircleTimes CirculantGraph CityData Clear ClearAll ClearAttributes ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent ClusteringComponents CMYKColor Coarse Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorCombine ColorConvert ColorData ColorDataFunction ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorSpace Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CommonDefaultFormatTypes Commonest CommonestFilter CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledFunction Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComponentMeasurements ' + 'ComponentwiseContextMenu Compose ComposeList ComposeSeries Composition CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath Congruent Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphQ ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray Constants ConstrainedMax ConstrainedMin ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFilename ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean Control ControlActive ControlAlignment ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateDialog CreateDirectory CreateDocument CreateIntermediateDirectories CreatePalette CreatePalettePacket CreateScheduledTask CreateTemporary CreateWindow CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossingDetect CrossMatrix Csc Csch CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrentImage CurrentlySpeakingPacket CurrentValue CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition ' + 'D DagumDistribution DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DataCompression DataDistribution DataRange DataReversed Date DateDelimiters DateDifference DateFunction DateList DateListLogPlot DateListPlot DatePattern DatePlus DateRange DateString DateTicksFormat DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayMatchQ DayName DayPlus DayRange DayRound DeBruijnGraph Debug DebugTag Decimal DeclareKnownSymbols DeclarePackage Decompose Decrement DedekindEta Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic Deinitialization Del Deletable Delete DeleteBorderComponents DeleteCases DeleteContents DeleteDirectory DeleteDuplicates DeleteFile DeleteSmallComponents DeleteWithContents DeletionWarning Delimiter DelimiterFlashTime DelimiterMatching Delimiters Denominator DensityGraphics DensityHistogram DensityPlot DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DescriptorStateSpace DesignMatrix Det DGaussianWavelet DiacriticalPositioning Diagonal DiagonalMatrix Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DifferenceDelta DifferenceOrder DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralGroup Dilation Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletCharacter DirichletConvolve DirichletDistribution DirichletL DirichletTransform DirichletWindow DisableConsolePrintPacket DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform ' + 'DiscreteWaveletTransform Discriminant Disjunction Disk DiskBox DiskMatrix Dispatch DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentNotebook DominantColors DOSTextFormat Dot DotDashed DotEqual Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DSolve Dt DualLinearProgramming DualSystemsModel DumpGet DumpSave DuplicateFreeQ Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions ' + 'E EccentricityCentrality EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeCost EdgeCount EdgeCoverQ EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData Eliminate EliminationOrder EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EnableConsolePrintPacket Enabled Encode End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfFile EndOfLine EndOfString EndPackage EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entropy EntropyFilter Environment Epilog Equal EqualColumns EqualRows EqualTilde EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerE EulerGamma EulerianGraphQ EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluationCell EvaluationCompletionAction EvaluationElements EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpToTrig ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalCall ExternalDataCharacterEncoding Extract ExtractArchive ExtremeValueDistribution ' + 'FaceForm FaceGrids FaceGridsStyle Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail FailureDistribution False FARIMAProcess FEDisableConsolePrintPacket FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket Fibonacci FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileDate FileExistsQ FileExtension FileFormat FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileType FilledCurve FilledCurveBox Filling FillingStyle FillingTransform FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindArgMax FindArgMin FindClique FindClusters FindCurvePath FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEulerianCycle FindFaces FindFile FindFit FindGeneratingFunction FindGeoLocation FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMaximum FindMaximumFlow FindMaxValue FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindPermutation FindPostmanTour FindProcessParameters FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindThreshold FindVertexCover FindVertexCut Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstPassageTimeDistribution FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FittedModel FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlatTopWindow FlipView Floor FlushPrintOutputPacket Fold FoldList Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrequencySamplingFilterKernel FresnelC FresnelS Friday FrobeniusNumber FrobeniusSolve ' + 'FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullOptions FullSimplify Function FunctionExpand FunctionInterpolation FunctionSpace FussellVeselyImportance ' + 'GaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins Gamma GammaDistribution GammaRegularized GapPenalty Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateConditions GeneratedCell GeneratedParameters GeneratingFunction Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDistance GeoGridPosition GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoPosition GeoPositionENU GeoPositionXYZ GeoProjectionData GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter Graph GraphAssortativity GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion ' + 'GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel GreatCircleDistance Greater GreaterEqual GreaterEqualLess GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterTilde Green Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain Gudermannian GumbelDistribution ' + 'HaarWavelet HadamardMatrix HalfNormalDistribution HamiltonianGraphQ HammingDistance HammingWindow HankelH1 HankelH2 HankelMatrix HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash HashTable Haversine HazardFunction Head HeadCompose Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenSurface HighlightGraph HighlightImage HighpassFilter HigmanSimsGroupHS HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HitMissTransform HITSCentrality HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HotellingTSquareDistribution HoytDistribution HTMLSave Hue HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData ' + 'I Identity IdentityMatrix If IgnoreCase Im Image Image3D Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageAspectRatio ImageAssemble ImageCache ImageCacheValid ImageCapture ImageChannels ImageClip ImageColorSpace ImageCompose ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDataPacket ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDistance ImageEffect ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageForestingComponents ImageForwardTransformation ImageHistogram ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarkers ImageMeasurements ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImageQ ImageRangeCache ImageReflect ImageRegion ImageResize ImageResolution ImageRotate ImageRotated ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions Implies Import ImportAutoReplacements ImportString ImprovementImportance In IncidenceGraph IncidenceList IncidenceMatrix IncludeConstantBasis IncludeFileExtension IncludePods IncludeSingularTerm Increment Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentUnit IndependentVertexSetQ Indeterminate IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers Infinity Infix Information Inherited InheritScope Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InlineCounterAssignments InlineCounterIncrements InlineRules Inner Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionPointObject InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Install InstallService InString Integer IntegerDigits IntegerExponent IntegerLength IntegerPart IntegerPartitions IntegerQ Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction ' + 'InterpretTemplate InterquartileRange Interrupt InterruptSettings Intersection Interval IntervalIntersection IntervalMemberQ IntervalUnion Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHaversine InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InversePermutation InverseRadon InverseSeries InverseSurvivalFunction InverseWaveletTransform InverseWeierstrassP InverseZTransform Invisible InvisibleApplication InvisibleTimes IrreduciblePolynomialQ IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess ' + 'JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join Joined JoinedCurve JoinedCurveBox JoinForm JordanDecomposition JordanModelDecomposition ' + 'K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelMixtureDistribution KernelObject Kernels Ket Khinchin KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnightTourGraph KnotData KnownUnitQ KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter ' + 'Label Labeled LabeledSlider LabelingFunction LabelStyle LaguerreL LambdaComponents LambertW LanczosWindow LandauDistribution Language LanguageCategory LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCM LeafCount LeapYearQ LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessFullEqual LessGreater LessLess LessSlantEqual LessTilde LetterCharacter LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox LinearFilter LinearFractionalTransform LinearModelFit LinearOffsetFunction LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBreak LinebreakAdjustments LineBreakChart LineBreakWithin LineColor LineForm LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRead LinkReadHeld LinkReadyQ Links LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot Listen ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalClusteringCoefficient LocalizeVariables LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions ' + 'LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestAscendingSequence LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow Loopback LoopFreeGraphQ LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LyapunovSolve LyonsGroupLy ' + 'MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules MangoldtLambda ManhattanDistance Manipulate Manipulator MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixPlot MatrixPower MatrixQ MatrixRank Max MaxBend MaxDetect MaxExtraBandwidths MaxExtraConditions MaxFeatures MaxFilter Maximize MaxIterations MaxMemoryUsed MaxMixtureKernels MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxValue MaxwellDistribution McLaughlinGroupMcL Mean MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter Median MedianDeviation MedianFilter Medium MeijerG MeixnerDistribution MemberQ MemoryConstrained MemoryInUse Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuPacket MenuSortingValue MenuStyle MenuView MergeDifferences Mesh MeshFunctions MeshRange MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation Method MethodOptions MexicanHatWavelet MeyerWavelet Min MinDetect MinFilter MinimalPolynomial MinimalStateSpaceModel Minimize Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingDataMethod MittagLefflerE MixedRadix MixedRadixQuantity MixtureDistribution Mod Modal Mode Modular ModularLambda Module Modulus MoebiusMu Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction Monday Monitor MonomialList MonomialOrder MonsterGroupM MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform Most MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovingAverage MovingMedian MoyalDistribution MultiedgeStyle MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution ' + 'N NakagamiDistribution NameQ Names NamespaceBox Nand NArgMax NArgMin NBernoulliB NCache NDSolve NDSolveValue Nearest NearestFunction NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeMultinomialDistribution NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestList NestWhile NestWhileList NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextPrime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants None NonlinearModelFit NonlocalMeansFilter NonNegative NonPositive Nor NorlundB Norm Normal NormalDistribution NormalGrouping Normalize NormalizedSquaredEuclideanDistance NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde NotHumpDownHump NotHumpEqual NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms Null NullRecords NullSpace NullWords Number NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator ' + 'NumberSigns NumberString Numerator NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot ' + 'O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OddQ Off Offset OLEData On ONanGroupON OneIdentity Opacity Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering Orderless OrnsteinUhlenbeckProcess Orthogonalize Out Outer OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OwenT OwnValues ' + 'PackingMethod PaddedForm Padding PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageWidth PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParetoDistribution Part PartialCorrelationFunction PartialD ParticleData Partition PartitionsP PartitionsQ ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PerformanceGoal PeriodicInterpolation Periodogram PeriodogramArray PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PERTDistribution PetersenGraph PhaseMargins Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest Pink Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarGraphQ Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangePadding PlotRegion PlotStyle Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox PointBox PointFigureChart PointForm PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonBox PolygonBoxOptions PolygonHoleScale PolygonIntersections PolygonScale PolyhedronData PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position Positive PositiveDefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList ' + 'PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement PredictionRoot PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependTo PreserveImageOptions Previous PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitiveRoot PrincipalComponents PrincipalValue Print PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessEstimator ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions ' + 'QBinomial QFactorial QGamma QHypergeometricPFQ QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ Quantile QuantilePlot Quantity QuantityForm QuantityMagnitude QuantityQ QuantityUnit Quartics QuartileDeviation Quartiles QuartileSkewness QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder ' + 'RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Random RandomChoice RandomComplex RandomFunction RandomGraph RandomImage RandomInteger RandomPermutation RandomPrime RandomReal RandomSample RandomSeed RandomVariate RandomWalkProcess Range RangeFilter RangeSpecification RankedMax RankedMin Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios Raw RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadList ReadProtected Real RealBlockDiagonalForm RealDigits RealExponent Reals Reap Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate RegionBinarize RegionFunction RegionPlot RegionPlot3D RegularExpression Regularization Reinstall Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot Remove RemoveAlphaChannel RemoveAsynchronousTask Removed RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart Repeated RepeatedNull RepeatedString Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated Resampling Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask Residue Resolve Rest Resultant ResumePacket Return ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulerUnits Run RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity ' + 'SameQ SameTest SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveDefinitions SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTaskActiveQ ScheduledTaskData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition Sec Sech SechDistribution SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemialgebraicComponentInstances SendMail Sequence SequenceAlignment SequenceForm SequenceHold SequenceLimit Series SeriesCoefficient SeriesData SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPrecision SetProperty SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share Sharpen ShearingMatrix ShearingTransform ShenCastanMatrix Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortUpArrow Show ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiegelTheta SiegelTukeyTest Sign Signature SignedRankTest SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution Skip SliceDistribution Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDelayCompensator SmithWatermanSimilarity ' + 'SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SocialMediaData Socket SokalSneathDissimilarity Solve SolveAlways SolveDelayed Sort SortBy Sound SoundAndGraphics SoundNote SoundVolume Sow Space SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution Speak SpeakTextPacket SpearmanRankTest SpearmanRho Spectrogram SpectrogramArray Specularity SpellingCorrection SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackInhibit StandardDeviation StandardDeviationFilter StandardForm Standardize StandbyDistribution Star StarGraph StartAsynchronousTask StartingStepSize StartOfLine StartOfString StartScheduledTask StartupSound StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringCount StringDrop StringExpression StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPosition StringQ StringReplace StringReplaceList StringReplacePart StringReverse StringRotateLeft StringRotateRight StringSkeleton StringSplit StringTake StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleBoxOptions StyleData StyleDefinitions StyleForm StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders ' + 'SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subset SubsetEqual Subsets SubStar Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde SuchThat Sum SumConvergence Sunday SuperDagger SuperMinus SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceColor SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SystemDialogInput SystemException SystemHelpPath SystemInformation SystemInformationData SystemOpen SystemOptions SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemStub ' + 'Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeWhile Tally Tan Tanh TargetFunctions TargetUnits TautologyQ TelegraphProcess TemplateBox TemplateBoxOptions TemplateSlotSequence TemporalData Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCell TextClipboardType TextData TextForm TextJustification TextLine TextPacket TextParagraph TextRecognize TextRendering TextStyle Texture TextureCoordinateFunction TextureCoordinateScaling Therefore ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreeJSymbol Threshold Through Throw Thumbnail Thursday Ticks TicksStyle Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint Times TimesBy TimeSeriesForecast TimeSeriesInvertibility TimeUsed TimeValue TimeZone Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate ToDiscreteTimeModel ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform TopologicalSort ToRadicals ToRules ToString Total TotalHeight TotalVariationFilter TotalWidth TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField Translate TranslationTransform TransparentColor Transpose TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle TriangleWave TriangularDistribution Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean True TrueQ TruncatedDistribution TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow Tuples TuranGraph TuringMachine ' + 'Transparent ' + 'UnateQ Uncompress Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UndirectedEdge UndirectedGraph UndirectedGraphQ UndocumentedTestFEParserPacket UndocumentedTestGetSelectionPacket Unequal Unevaluated UniformDistribution UniformGraphDistribution UniformSumDistribution Uninstall Union UnionPlus Unique UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitTriangle UnitVector Unprotect UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpValues URL URLFetch URLFetchAsynchronous URLSave URLSaveAsynchronous UseGraphicsRange Using UsingFrontEnd ' + 'V2Get ValidationLength Value ValueBox ValueBoxOptions ValueForm ValueQ ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerifyConvergence VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoigtDistribution VonMisesDistribution ' + 'WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeberE Wedge Wednesday WeibullDistribution WeierstrassHalfPeriods WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WilksW WilksWTest WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult Word WordBoundary WordCharacter WordData WordSearch WordSeparators WorkingPrecision Write WriteString Wronskian ' + 'XMLElement XMLObject Xnor Xor ' + 'Yellow YuleDissimilarity ' + 'ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZipfDistribution ZTest ZTransform ' + '$Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AssertFunction $Assumptions $AsynchronousTask $BaseDirectory $BatchInput $BatchOutput $BoxForms $ByteOrdering $Canceled $CharacterEncoding $CharacterEncodings $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $CreationDate $CurrentLink $DateStringFormat $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $Epilog $ExportFormats $Failed $FinancialDataSource $FormatType $FrontEnd $FrontEndSession $GeoLocation $HistoryLength $HomeDirectory $HTTPCookies $IgnoreEOF $ImagingDevices $ImportFormats $InitialDirectory $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $ModuleNumber $NetworkLicense $NewMessage $NewSymbol $Notebooks $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $PipeSupported $Post $Pre $PreferencesDirectory $PrePrint $PreRead $PrintForms $PrintLiteral $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $RandomState $RecursionLimit $ReleaseNumber $RootDirectory $ScheduledTask $ScriptCommandLine $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemWordLength $TemporaryDirectory $TemporaryPrefix $TextStyle $TimedOut $TimeUnit $TimeZone $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $Urgent $UserAddOnsDirectory $UserBaseDirectory $UserDocumentsDirectory $UserName $Version $VersionNumber',
    contains: [{
      className: 'comment',
      begin: /\(\*/, end: /\*\)/
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, {
      begin: /\{/, end: /\}/,
      illegal: /:/
    }]
  };
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var COMMON_CONTAINS = [hljs.C_NUMBER_MODE, {
    className: 'string',
    begin: '\'', end: '\'',
    contains: [hljs.BACKSLASH_ESCAPE, { begin: '\'\'' }]
  }];
  var TRANSPOSE = {
    relevance: 0,
    contains: [{
      begin: /'['\.]*/
    }]
  };

  return {
    keywords: {
      keyword: 'break case catch classdef continue else elseif end enumerated events for function ' + 'global if methods otherwise parfor persistent properties return spmd switch try while',
      built_in: 'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan ' + 'atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot ' + 'cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog ' + 'realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal ' + 'cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli ' + 'besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma ' + 'gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms ' + 'nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones ' + 'eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ' + 'ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril ' + 'triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute ' + 'shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan ' + 'isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal ' + 'rosser toeplitz vander wilkinson'
    },
    illegal: '(//|"|#|/\\*|\\s+/\\w+)',
    contains: [{
      className: 'function',
      beginKeywords: 'function', end: '$',
      contains: [hljs.UNDERSCORE_TITLE_MODE, {
        className: 'params',
        variants: [{ begin: '\\(', end: '\\)' }, { begin: '\\[', end: '\\]' }]
      }]
    }, {
      begin: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
      returnBegin: true,
      relevance: 0,
      contains: [{ begin: /[a-zA-Z_][a-zA-Z_0-9]*/, relevance: 0 }, TRANSPOSE.contains[0]]
    }, {
      begin: '\\[', end: '\\]',
      contains: COMMON_CONTAINS,
      relevance: 0,
      starts: TRANSPOSE
    }, {
      begin: '\\{', end: /}/,
      contains: COMMON_CONTAINS,
      relevance: 0,
      starts: TRANSPOSE
    }, {
      // transpose operators at the end of a function call
      begin: /\)/,
      relevance: 0,
      starts: TRANSPOSE
    }, hljs.COMMENT('^\\s*\\%\\{\\s*$', '^\\s*\\%\\}\\s*$'), hljs.COMMENT('\\%', '$')].concat(COMMON_CONTAINS)
  };
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = 'if then else elseif for thru do while unless step in and or not';
  var LITERALS = 'true false unknown inf minf ind und %e %i %pi %phi %gamma';
  var BUILTIN_FUNCTIONS = ' abasep abs absint absolute_real_time acos acosh acot acoth acsc acsch activate' + ' addcol add_edge add_edges addmatrices addrow add_vertex add_vertices adjacency_matrix' + ' adjoin adjoint af agd airy airy_ai airy_bi airy_dai airy_dbi algsys alg_type' + ' alias allroots alphacharp alphanumericp amortization %and annuity_fv' + ' annuity_pv antid antidiff AntiDifference append appendfile apply apply1 apply2' + ' applyb1 apropos args arit_amortization arithmetic arithsum array arrayapply' + ' arrayinfo arraymake arraysetapply ascii asec asech asin asinh askinteger' + ' asksign assoc assoc_legendre_p assoc_legendre_q assume assume_external_byte_order' + ' asympa at atan atan2 atanh atensimp atom atvalue augcoefmatrix augmented_lagrangian_method' + ' av average_degree backtrace bars barsplot barsplot_description base64 base64_decode' + ' bashindices batch batchload bc2 bdvac belln benefit_cost bern bernpoly bernstein_approx' + ' bernstein_expand bernstein_poly bessel bessel_i bessel_j bessel_k bessel_simplify' + ' bessel_y beta beta_incomplete beta_incomplete_generalized beta_incomplete_regularized' + ' bezout bfallroots bffac bf_find_root bf_fmin_cobyla bfhzeta bfloat bfloatp' + ' bfpsi bfpsi0 bfzeta biconnected_components bimetric binomial bipartition' + ' block blockmatrixp bode_gain bode_phase bothcoef box boxplot boxplot_description' + ' break bug_report build_info|10 buildq build_sample burn cabs canform canten' + ' cardinality carg cartan cartesian_product catch cauchy_matrix cbffac cdf_bernoulli' + ' cdf_beta cdf_binomial cdf_cauchy cdf_chi2 cdf_continuous_uniform cdf_discrete_uniform' + ' cdf_exp cdf_f cdf_gamma cdf_general_finite_discrete cdf_geometric cdf_gumbel' + ' cdf_hypergeometric cdf_laplace cdf_logistic cdf_lognormal cdf_negative_binomial' + ' cdf_noncentral_chi2 cdf_noncentral_student_t cdf_normal cdf_pareto cdf_poisson' + ' cdf_rank_sum cdf_rayleigh cdf_signed_rank cdf_student_t cdf_weibull cdisplay' + ' ceiling central_moment cequal cequalignore cf cfdisrep cfexpand cgeodesic' + ' cgreaterp cgreaterpignore changename changevar chaosgame charat charfun charfun2' + ' charlist charp charpoly chdir chebyshev_t chebyshev_u checkdiv check_overlaps' + ' chinese cholesky christof chromatic_index chromatic_number cint circulant_graph' + ' clear_edge_weight clear_rules clear_vertex_label clebsch_gordan clebsch_graph' + ' clessp clesspignore close closefile cmetric coeff coefmatrix cograd col collapse' + ' collectterms columnop columnspace columnswap columnvector combination combine' + ' comp2pui compare compfile compile compile_file complement_graph complete_bipartite_graph' + ' complete_graph complex_number_p components compose_functions concan concat' + ' conjugate conmetderiv connected_components connect_vertices cons constant' + ' constantp constituent constvalue cont2part content continuous_freq contortion' + ' contour_plot contract contract_edge contragrad contrib_ode convert coord' + ' copy copy_file copy_graph copylist copymatrix cor cos cosh cot coth cov cov1' + ' covdiff covect covers crc24sum create_graph create_list csc csch csetup cspline' + ' ctaylor ct_coordsys ctransform ctranspose cube_graph cuboctahedron_graph' + ' cunlisp cv cycle_digraph cycle_graph cylindrical days360 dblint deactivate' + ' declare declare_constvalue declare_dimensions declare_fundamental_dimensions' + ' declare_fundamental_units declare_qty declare_translated declare_unit_conversion' + ' declare_units declare_weights decsym defcon define define_alt_display define_variable' + ' defint defmatch defrule defstruct deftaylor degree_sequence del delete deleten' + ' delta demo demoivre denom depends derivdegree derivlist describe desolve' + ' determinant dfloat dgauss_a dgauss_b dgeev dgemm dgeqrf dgesv dgesvd diag' + ' diagmatrix diag_matrix diagmatrixp diameter diff digitcharp dimacs_export' + ' dimacs_import dimension dimensionless dimensions dimensions_as_list direct' + ' directory discrete_freq disjoin disjointp disolate disp dispcon dispform' + ' dispfun dispJordan display disprule dispterms distrib divide divisors divsum' + ' dkummer_m dkummer_u dlange dodecahedron_graph dotproduct dotsimp dpart' + ' draw draw2d draw3d drawdf draw_file draw_graph dscalar echelon edge_coloring' + ' edge_connectivity edges eigens_by_jacobi eigenvalues eigenvectors eighth' + ' einstein eivals eivects elapsed_real_time elapsed_run_time ele2comp ele2polynome' + ' ele2pui elem elementp elevation_grid elim elim_allbut eliminate eliminate_using' + ' ellipse elliptic_e elliptic_ec elliptic_eu elliptic_f elliptic_kc elliptic_pi' + ' ematrix empty_graph emptyp endcons entermatrix entertensor entier equal equalp' + ' equiv_classes erf erfc erf_generalized erfi errcatch error errormsg errors' + ' euler ev eval_string evenp every evolution evolution2d evundiff example exp' + ' expand expandwrt expandwrt_factored expint expintegral_chi expintegral_ci' + ' expintegral_e expintegral_e1 expintegral_ei expintegral_e_simplify expintegral_li' + ' expintegral_shi expintegral_si explicit explose exponentialize express expt' + ' exsec extdiff extract_linear_equations extremal_subset ezgcd %f f90 facsum' + ' factcomb factor factorfacsum factorial factorout factorsum facts fast_central_elements' + ' fast_linsolve fasttimes featurep fernfale fft fib fibtophi fifth filename_merge' + ' file_search file_type fillarray findde find_root find_root_abs find_root_error' + ' find_root_rel first fix flatten flength float floatnump floor flower_snark' + ' flush flush1deriv flushd flushnd flush_output fmin_cobyla forget fortran' + ' fourcos fourexpand fourier fourier_elim fourint fourintcos fourintsin foursimp' + ' foursin fourth fposition frame_bracket freeof freshline fresnel_c fresnel_s' + ' from_adjacency_matrix frucht_graph full_listify fullmap fullmapl fullratsimp' + ' fullratsubst fullsetify funcsolve fundamental_dimensions fundamental_units' + ' fundef funmake funp fv g0 g1 gamma gamma_greek gamma_incomplete gamma_incomplete_generalized' + ' gamma_incomplete_regularized gauss gauss_a gauss_b gaussprob gcd gcdex gcdivide' + ' gcfac gcfactor gd generalized_lambert_w genfact gen_laguerre genmatrix gensym' + ' geo_amortization geo_annuity_fv geo_annuity_pv geomap geometric geometric_mean' + ' geosum get getcurrentdirectory get_edge_weight getenv get_lu_factors get_output_stream_string' + ' get_pixel get_plot_option get_tex_environment get_tex_environment_default' + ' get_vertex_label gfactor gfactorsum ggf girth global_variances gn gnuplot_close' + ' gnuplot_replot gnuplot_reset gnuplot_restart gnuplot_start go Gosper GosperSum' + ' gr2d gr3d gradef gramschmidt graph6_decode graph6_encode graph6_export graph6_import' + ' graph_center graph_charpoly graph_eigenvalues graph_flow graph_order graph_periphery' + ' graph_product graph_size graph_union great_rhombicosidodecahedron_graph great_rhombicuboctahedron_graph' + ' grid_graph grind grobner_basis grotzch_graph hamilton_cycle hamilton_path' + ' hankel hankel_1 hankel_2 harmonic harmonic_mean hav heawood_graph hermite' + ' hessian hgfred hilbertmap hilbert_matrix hipow histogram histogram_description' + ' hodge horner hypergeometric i0 i1 %ibes ic1 ic2 ic_convert ichr1 ichr2 icosahedron_graph' + ' icosidodecahedron_graph icurvature ident identfor identity idiff idim idummy' + ' ieqn %if ifactors iframes ifs igcdex igeodesic_coords ilt image imagpart' + ' imetric implicit implicit_derivative implicit_plot indexed_tensor indices' + ' induced_subgraph inferencep inference_result infix info_display init_atensor' + ' init_ctensor in_neighbors innerproduct inpart inprod inrt integerp integer_partitions' + ' integrate intersect intersection intervalp intopois intosum invariant1 invariant2' + ' inverse_fft inverse_jacobi_cd inverse_jacobi_cn inverse_jacobi_cs inverse_jacobi_dc' + ' inverse_jacobi_dn inverse_jacobi_ds inverse_jacobi_nc inverse_jacobi_nd inverse_jacobi_ns' + ' inverse_jacobi_sc inverse_jacobi_sd inverse_jacobi_sn invert invert_by_adjoint' + ' invert_by_lu inv_mod irr is is_biconnected is_bipartite is_connected is_digraph' + ' is_edge_in_graph is_graph is_graph_or_digraph ishow is_isomorphic isolate' + ' isomorphism is_planar isqrt isreal_p is_sconnected is_tree is_vertex_in_graph' + ' items_inference %j j0 j1 jacobi jacobian jacobi_cd jacobi_cn jacobi_cs jacobi_dc' + ' jacobi_dn jacobi_ds jacobi_nc jacobi_nd jacobi_ns jacobi_p jacobi_sc jacobi_sd' + ' jacobi_sn JF jn join jordan julia julia_set julia_sin %k kdels kdelta kill' + ' killcontext kostka kron_delta kronecker_product kummer_m kummer_u kurtosis' + ' kurtosis_bernoulli kurtosis_beta kurtosis_binomial kurtosis_chi2 kurtosis_continuous_uniform' + ' kurtosis_discrete_uniform kurtosis_exp kurtosis_f kurtosis_gamma kurtosis_general_finite_discrete' + ' kurtosis_geometric kurtosis_gumbel kurtosis_hypergeometric kurtosis_laplace' + ' kurtosis_logistic kurtosis_lognormal kurtosis_negative_binomial kurtosis_noncentral_chi2' + ' kurtosis_noncentral_student_t kurtosis_normal kurtosis_pareto kurtosis_poisson' + ' kurtosis_rayleigh kurtosis_student_t kurtosis_weibull label labels lagrange' + ' laguerre lambda lambert_w laplace laplacian_matrix last lbfgs lc2kdt lcharp' + ' lc_l lcm lc_u ldefint ldisp ldisplay legendre_p legendre_q leinstein length' + ' let letrules letsimp levi_civita lfreeof lgtreillis lhs li liediff limit' + ' Lindstedt linear linearinterpol linear_program linear_regression line_graph' + ' linsolve listarray list_correlations listify list_matrix_entries list_nc_monomials' + ' listoftens listofvars listp lmax lmin load loadfile local locate_matrix_entry' + ' log logcontract log_gamma lopow lorentz_gauge lowercasep lpart lratsubst' + ' lreduce lriemann lsquares_estimates lsquares_estimates_approximate lsquares_estimates_exact' + ' lsquares_mse lsquares_residual_mse lsquares_residuals lsum ltreillis lu_backsub' + ' lucas lu_factor %m macroexpand macroexpand1 make_array makebox makefact makegamma' + ' make_graph make_level_picture makelist makeOrders make_poly_continent make_poly_country' + ' make_polygon make_random_state make_rgb_picture makeset make_string_input_stream' + ' make_string_output_stream make_transform mandelbrot mandelbrot_set map mapatom' + ' maplist matchdeclare matchfix mat_cond mat_fullunblocker mat_function mathml_display' + ' mat_norm matrix matrixmap matrixp matrix_size mattrace mat_trace mat_unblocker' + ' max max_clique max_degree max_flow maximize_lp max_independent_set max_matching' + ' maybe md5sum mean mean_bernoulli mean_beta mean_binomial mean_chi2 mean_continuous_uniform' + ' mean_deviation mean_discrete_uniform mean_exp mean_f mean_gamma mean_general_finite_discrete' + ' mean_geometric mean_gumbel mean_hypergeometric mean_laplace mean_logistic' + ' mean_lognormal mean_negative_binomial mean_noncentral_chi2 mean_noncentral_student_t' + ' mean_normal mean_pareto mean_poisson mean_rayleigh mean_student_t mean_weibull' + ' median median_deviation member mesh metricexpandall mgf1_sha1 min min_degree' + ' min_edge_cut minfactorial minimalPoly minimize_lp minimum_spanning_tree minor' + ' minpack_lsquares minpack_solve min_vertex_cover min_vertex_cut mkdir mnewton' + ' mod mode_declare mode_identity ModeMatrix moebius mon2schur mono monomial_dimensions' + ' multibernstein_poly multi_display_for_texinfo multi_elem multinomial multinomial_coeff' + ' multi_orbit multiplot_mode multi_pui multsym multthru mycielski_graph nary' + ' natural_unit nc_degree ncexpt ncharpoly negative_picture neighbors new newcontext' + ' newdet new_graph newline newton new_variable next_prime nicedummies niceindices' + ' ninth nofix nonarray noncentral_moment nonmetricity nonnegintegerp nonscalarp' + ' nonzeroandfreeof notequal nounify nptetrad npv nroots nterms ntermst' + ' nthroot nullity nullspace num numbered_boundaries numberp number_to_octets' + ' num_distinct_partitions numerval numfactor num_partitions nusum nzeta nzetai' + ' nzetar octets_to_number octets_to_oid odd_girth oddp ode2 ode_check odelin' + ' oid_to_octets op opena opena_binary openr openr_binary openw openw_binary' + ' operatorp opsubst optimize %or orbit orbits ordergreat ordergreatp orderless' + ' orderlessp orthogonal_complement orthopoly_recur orthopoly_weight outermap' + ' out_neighbors outofpois pade parabolic_cylinder_d parametric parametric_surface' + ' parg parGosper parse_string parse_timedate part part2cont partfrac partition' + ' partition_set partpol path_digraph path_graph pathname_directory pathname_name' + ' pathname_type pdf_bernoulli pdf_beta pdf_binomial pdf_cauchy pdf_chi2 pdf_continuous_uniform' + ' pdf_discrete_uniform pdf_exp pdf_f pdf_gamma pdf_general_finite_discrete' + ' pdf_geometric pdf_gumbel pdf_hypergeometric pdf_laplace pdf_logistic pdf_lognormal' + ' pdf_negative_binomial pdf_noncentral_chi2 pdf_noncentral_student_t pdf_normal' + ' pdf_pareto pdf_poisson pdf_rank_sum pdf_rayleigh pdf_signed_rank pdf_student_t' + ' pdf_weibull pearson_skewness permanent permut permutation permutations petersen_graph' + ' petrov pickapart picture_equalp picturep piechart piechart_description planar_embedding' + ' playback plog plot2d plot3d plotdf ploteq plsquares pochhammer points poisdiff' + ' poisexpt poisint poismap poisplus poissimp poissubst poistimes poistrim polar' + ' polarform polartorect polar_to_xy poly_add poly_buchberger poly_buchberger_criterion' + ' poly_colon_ideal poly_content polydecomp poly_depends_p poly_elimination_ideal' + ' poly_exact_divide poly_expand poly_expt poly_gcd polygon poly_grobner poly_grobner_equal' + ' poly_grobner_member poly_grobner_subsetp poly_ideal_intersection poly_ideal_polysaturation' + ' poly_ideal_polysaturation1 poly_ideal_saturation poly_ideal_saturation1 poly_lcm' + ' poly_minimization polymod poly_multiply polynome2ele polynomialp poly_normal_form' + ' poly_normalize poly_normalize_list poly_polysaturation_extension poly_primitive_part' + ' poly_pseudo_divide poly_reduced_grobner poly_reduction poly_saturation_extension' + ' poly_s_polynomial poly_subtract polytocompanion pop postfix potential power_mod' + ' powerseries powerset prefix prev_prime primep primes principal_components' + ' print printf printfile print_graph printpois printprops prodrac product properties' + ' propvars psi psubst ptriangularize pui pui2comp pui2ele pui2polynome pui_direct' + ' puireduc push put pv qput qrange qty quad_control quad_qag quad_qagi quad_qagp' + ' quad_qags quad_qawc quad_qawf quad_qawo quad_qaws quadrilateral quantile' + ' quantile_bernoulli quantile_beta quantile_binomial quantile_cauchy quantile_chi2' + ' quantile_continuous_uniform quantile_discrete_uniform quantile_exp quantile_f' + ' quantile_gamma quantile_general_finite_discrete quantile_geometric quantile_gumbel' + ' quantile_hypergeometric quantile_laplace quantile_logistic quantile_lognormal' + ' quantile_negative_binomial quantile_noncentral_chi2 quantile_noncentral_student_t' + ' quantile_normal quantile_pareto quantile_poisson quantile_rayleigh quantile_student_t' + ' quantile_weibull quartile_skewness quit qunit quotient racah_v racah_w radcan' + ' radius random random_bernoulli random_beta random_binomial random_bipartite_graph' + ' random_cauchy random_chi2 random_continuous_uniform random_digraph random_discrete_uniform' + ' random_exp random_f random_gamma random_general_finite_discrete random_geometric' + ' random_graph random_graph1 random_gumbel random_hypergeometric random_laplace' + ' random_logistic random_lognormal random_negative_binomial random_network' + ' random_noncentral_chi2 random_noncentral_student_t random_normal random_pareto' + ' random_permutation random_poisson random_rayleigh random_regular_graph random_student_t' + ' random_tournament random_tree random_weibull range rank rat ratcoef ratdenom' + ' ratdiff ratdisrep ratexpand ratinterpol rational rationalize ratnumer ratnump' + ' ratp ratsimp ratsubst ratvars ratweight read read_array read_binary_array' + ' read_binary_list read_binary_matrix readbyte readchar read_hashed_array readline' + ' read_list read_matrix read_nested_list readonly read_xpm real_imagpart_to_conjugate' + ' realpart realroots rearray rectangle rectform rectform_log_if_constant recttopolar' + ' rediff reduce_consts reduce_order region region_boundaries region_boundaries_plus' + ' rem remainder remarray rembox remcomps remcon remcoord remfun remfunction' + ' remlet remove remove_constvalue remove_dimensions remove_edge remove_fundamental_dimensions' + ' remove_fundamental_units remove_plot_option remove_vertex rempart remrule' + ' remsym remvalue rename rename_file reset reset_displays residue resolvante' + ' resolvante_alternee1 resolvante_bipartite resolvante_diedrale resolvante_klein' + ' resolvante_klein3 resolvante_produit_sym resolvante_unitaire resolvante_vierer' + ' rest resultant return reveal reverse revert revert2 rgb2level rhs ricci riemann' + ' rinvariant risch rk rmdir rncombine romberg room rootscontract round row' + ' rowop rowswap rreduce run_testsuite %s save saving scalarp scaled_bessel_i' + ' scaled_bessel_i0 scaled_bessel_i1 scalefactors scanmap scatterplot scatterplot_description' + ' scene schur2comp sconcat scopy scsimp scurvature sdowncase sec sech second' + ' sequal sequalignore set_alt_display setdifference set_draw_defaults set_edge_weight' + ' setelmx setequalp setify setp set_partitions set_plot_option set_prompt set_random_state' + ' set_tex_environment set_tex_environment_default setunits setup_autoload set_up_dot_simplifications' + ' set_vertex_label seventh sexplode sf sha1sum sha256sum shortest_path shortest_weighted_path' + ' show showcomps showratvars sierpinskiale sierpinskimap sign signum similaritytransform' + ' simp_inequality simplify_sum simplode simpmetderiv simtran sin sinh sinsert' + ' sinvertcase sixth skewness skewness_bernoulli skewness_beta skewness_binomial' + ' skewness_chi2 skewness_continuous_uniform skewness_discrete_uniform skewness_exp' + ' skewness_f skewness_gamma skewness_general_finite_discrete skewness_geometric' + ' skewness_gumbel skewness_hypergeometric skewness_laplace skewness_logistic' + ' skewness_lognormal skewness_negative_binomial skewness_noncentral_chi2 skewness_noncentral_student_t' + ' skewness_normal skewness_pareto skewness_poisson skewness_rayleigh skewness_student_t' + ' skewness_weibull slength smake small_rhombicosidodecahedron_graph small_rhombicuboctahedron_graph' + ' smax smin smismatch snowmap snub_cube_graph snub_dodecahedron_graph solve' + ' solve_rec solve_rec_rat some somrac sort sparse6_decode sparse6_encode sparse6_export' + ' sparse6_import specint spherical spherical_bessel_j spherical_bessel_y spherical_hankel1' + ' spherical_hankel2 spherical_harmonic spherical_to_xyz splice split sposition' + ' sprint sqfr sqrt sqrtdenest sremove sremovefirst sreverse ssearch ssort sstatus' + ' ssubst ssubstfirst staircase standardize standardize_inverse_trig starplot' + ' starplot_description status std std1 std_bernoulli std_beta std_binomial' + ' std_chi2 std_continuous_uniform std_discrete_uniform std_exp std_f std_gamma' + ' std_general_finite_discrete std_geometric std_gumbel std_hypergeometric std_laplace' + ' std_logistic std_lognormal std_negative_binomial std_noncentral_chi2 std_noncentral_student_t' + ' std_normal std_pareto std_poisson std_rayleigh std_student_t std_weibull' + ' stemplot stirling stirling1 stirling2 strim striml strimr string stringout' + ' stringp strong_components struve_h struve_l sublis sublist sublist_indices' + ' submatrix subsample subset subsetp subst substinpart subst_parallel substpart' + ' substring subvar subvarp sum sumcontract summand_to_rec supcase supcontext' + ' symbolp symmdifference symmetricp system take_channel take_inference tan' + ' tanh taylor taylorinfo taylorp taylor_simplifier taytorat tcl_output tcontract' + ' tellrat tellsimp tellsimpafter tentex tenth test_mean test_means_difference' + ' test_normality test_proportion test_proportions_difference test_rank_sum' + ' test_sign test_signed_rank test_variance test_variance_ratio tex tex1 tex_display' + ' texput %th third throw time timedate timer timer_info tldefint tlimit todd_coxeter' + ' toeplitz tokens to_lisp topological_sort to_poly to_poly_solve totaldisrep' + ' totalfourier totient tpartpol trace tracematrix trace_options transform_sample' + ' translate translate_file transpose treefale tree_reduce treillis treinat' + ' triangle triangularize trigexpand trigrat trigreduce trigsimp trunc truncate' + ' truncated_cube_graph truncated_dodecahedron_graph truncated_icosahedron_graph' + ' truncated_tetrahedron_graph tr_warnings_get tube tutte_graph ueivects uforget' + ' ultraspherical underlying_graph undiff union unique uniteigenvectors unitp' + ' units unit_step unitvector unorder unsum untellrat untimer' + ' untrace uppercasep uricci uriemann uvect vandermonde_matrix var var1 var_bernoulli' + ' var_beta var_binomial var_chi2 var_continuous_uniform var_discrete_uniform' + ' var_exp var_f var_gamma var_general_finite_discrete var_geometric var_gumbel' + ' var_hypergeometric var_laplace var_logistic var_lognormal var_negative_binomial' + ' var_noncentral_chi2 var_noncentral_student_t var_normal var_pareto var_poisson' + ' var_rayleigh var_student_t var_weibull vector vectorpotential vectorsimp' + ' verbify vers vertex_coloring vertex_connectivity vertex_degree vertex_distance' + ' vertex_eccentricity vertex_in_degree vertex_out_degree vertices vertices_to_cycle' + ' vertices_to_path %w weyl wheel_graph wiener_index wigner_3j wigner_6j' + ' wigner_9j with_stdout write_binary_data writebyte write_data writefile wronskian' + ' xreduce xthru %y Zeilberger zeroequiv zerofor zeromatrix zeromatrixp zeta' + ' zgeev zheev zlange zn_add_table zn_carmichael_lambda zn_characteristic_factors' + ' zn_determinant zn_factor_generators zn_invert_by_lu zn_log zn_mult_table' + ' absboxchar activecontexts adapt_depth additive adim aform algebraic' + ' algepsilon algexact aliases allbut all_dotsimp_denoms allocation allsym alphabetic' + ' animation antisymmetric arrays askexp assume_pos assume_pos_pred assumescalar' + ' asymbol atomgrad atrig1 axes axis_3d axis_bottom axis_left axis_right axis_top' + ' azimuth background background_color backsubst berlefact bernstein_explicit' + ' besselexpand beta_args_sum_to_integer beta_expand bftorat bftrunc bindtest' + ' border boundaries_array box boxchar breakup %c capping cauchysum cbrange' + ' cbtics center cflength cframe_flag cnonmet_flag color color_bar color_bar_tics' + ' colorbox columns commutative complex cone context contexts contour contour_levels' + ' cosnpiflag ctaypov ctaypt ctayswitch ctayvar ct_coords ctorsion_flag ctrgsimp' + ' cube current_let_rule_package cylinder data_file_name debugmode decreasing' + ' default_let_rule_package delay dependencies derivabbrev derivsubst detout' + ' diagmetric diff dim dimensions dispflag display2d|10 display_format_internal' + ' distribute_over doallmxops domain domxexpt domxmxops domxnctimes dontfactor' + ' doscmxops doscmxplus dot0nscsimp dot0simp dot1simp dotassoc dotconstrules' + ' dotdistrib dotexptsimp dotident dotscrules draw_graph_program draw_realpart' + ' edge_color edge_coloring edge_partition edge_type edge_width %edispflag' + ' elevation %emode endphi endtheta engineering_format_floats enhanced3d %enumer' + ' epsilon_lp erfflag erf_representation errormsg error_size error_syms error_type' + ' %e_to_numlog eval even evenfun evflag evfun ev_point expandwrt_denom expintexpand' + ' expintrep expon expop exptdispflag exptisolate exptsubst facexpand facsum_combine' + ' factlim factorflag factorial_expand factors_only fb feature features' + ' file_name file_output_append file_search_demo file_search_lisp file_search_maxima|10' + ' file_search_tests file_search_usage file_type_lisp file_type_maxima|10 fill_color' + ' fill_density filled_func fixed_vertices flipflag float2bf font font_size' + ' fortindent fortspaces fpprec fpprintprec functions gamma_expand gammalim' + ' gdet genindex gensumnum GGFCFMAX GGFINFINITY globalsolve gnuplot_command' + ' gnuplot_curve_styles gnuplot_curve_titles gnuplot_default_term_command gnuplot_dumb_term_command' + ' gnuplot_file_args gnuplot_file_name gnuplot_out_file gnuplot_pdf_term_command' + ' gnuplot_pm3d gnuplot_png_term_command gnuplot_postamble gnuplot_preamble' + ' gnuplot_ps_term_command gnuplot_svg_term_command gnuplot_term gnuplot_view_args' + ' Gosper_in_Zeilberger gradefs grid grid2d grind halfangles head_angle head_both' + ' head_length head_type height hypergeometric_representation %iargs ibase' + ' icc1 icc2 icounter idummyx ieqnprint ifb ifc1 ifc2 ifg ifgi ifr iframe_bracket_form' + ' ifri igeowedge_flag ikt1 ikt2 imaginary inchar increasing infeval' + ' infinity inflag infolists inm inmc1 inmc2 intanalysis integer integervalued' + ' integrate_use_rootsof integration_constant integration_constant_counter interpolate_color' + ' intfaclim ip_grid ip_grid_in irrational isolate_wrt_times iterations itr' + ' julia_parameter %k1 %k2 keepfloat key key_pos kinvariant kt label label_alignment' + ' label_orientation labels lassociative lbfgs_ncorrections lbfgs_nfeval_max' + ' leftjust legend letrat let_rule_packages lfg lg lhospitallim limsubst linear' + ' linear_solver linechar linel|10 linenum line_type linewidth line_width linsolve_params' + ' linsolvewarn lispdisp listarith listconstvars listdummyvars lmxchar load_pathname' + ' loadprint logabs logarc logcb logconcoeffp logexpand lognegint logsimp logx' + ' logx_secondary logy logy_secondary logz lriem m1pbranch macroexpansion macros' + ' mainvar manual_demo maperror mapprint matrix_element_add matrix_element_mult' + ' matrix_element_transpose maxapplydepth maxapplyheight maxima_tempdir|10 maxima_userdir|10' + ' maxnegex MAX_ORD maxposex maxpsifracdenom maxpsifracnum maxpsinegint maxpsiposint' + ' maxtayorder mesh_lines_color method mod_big_prime mode_check_errorp' + ' mode_checkp mode_check_warnp mod_test mod_threshold modular_linear_solver' + ' modulus multiplicative multiplicities myoptions nary negdistrib negsumdispflag' + ' newline newtonepsilon newtonmaxiter nextlayerfactor niceindicespref nm nmc' + ' noeval nolabels nonegative_lp noninteger nonscalar noun noundisp nouns np' + ' npi nticks ntrig numer numer_pbranch obase odd oddfun opacity opproperties' + ' opsubst optimprefix optionset orientation origin orthopoly_returns_intervals' + ' outative outchar packagefile palette partswitch pdf_file pfeformat phiresolution' + ' %piargs piece pivot_count_sx pivot_max_sx plot_format plot_options plot_realpart' + ' png_file pochhammer_max_index points pointsize point_size points_joined point_type' + ' poislim poisson poly_coefficient_ring poly_elimination_order polyfactor poly_grobner_algorithm' + ' poly_grobner_debug poly_monomial_order poly_primary_elimination_order poly_return_term_list' + ' poly_secondary_elimination_order poly_top_reduction_only posfun position' + ' powerdisp pred prederror primep_number_of_tests product_use_gamma program' + ' programmode promote_float_to_bigfloat prompt proportional_axes props psexpand' + ' ps_file radexpand radius radsubstflag rassociative ratalgdenom ratchristof' + ' ratdenomdivide rateinstein ratepsilon ratfac rational ratmx ratprint ratriemann' + ' ratsimpexpons ratvarswitch ratweights ratweyl ratwtlvl real realonly redraw' + ' refcheck resolution restart resultant ric riem rmxchar %rnum_list rombergabs' + ' rombergit rombergmin rombergtol rootsconmode rootsepsilon run_viewer same_xy' + ' same_xyz savedef savefactors scalar scalarmatrixp scale scale_lp setcheck' + ' setcheckbreak setval show_edge_color show_edges show_edge_type show_edge_width' + ' show_id show_label showtime show_vertex_color show_vertex_size show_vertex_type' + ' show_vertices show_weight simp simplified_output simplify_products simpproduct' + ' simpsum sinnpiflag solvedecomposes solveexplicit solvefactors solvenullwarn' + ' solveradcan solvetrigwarn space sparse sphere spring_embedding_depth sqrtdispflag' + ' stardisp startphi starttheta stats_numer stringdisp structures style sublis_apply_lambda' + ' subnumsimp sumexpand sumsplitfact surface surface_hide svg_file symmetric' + ' tab taylordepth taylor_logexpand taylor_order_coefficients taylor_truncate_polynomials' + ' tensorkill terminal testsuite_files thetaresolution timer_devalue title tlimswitch' + ' tr track transcompile transform transform_xy translate_fast_arrays transparent' + ' transrun tr_array_as_ref tr_bound_function_applyp tr_file_tty_messagesp tr_float_can_branch_complex' + ' tr_function_call_default trigexpandplus trigexpandtimes triginverses trigsign' + ' trivial_solutions tr_numer tr_optimize_max_loop tr_semicompile tr_state_vars' + ' tr_warn_bad_function_calls tr_warn_fexpr tr_warn_meval tr_warn_mode' + ' tr_warn_undeclared tr_warn_undefined_variable tstep ttyoff tube_extremes' + ' ufg ug %unitexpand unit_vectors uric uriem use_fast_arrays user_preamble' + ' usersetunits values vect_cross verbose vertex_color vertex_coloring vertex_partition' + ' vertex_size vertex_type view warnings weyl width windowname windowtitle wired_surface' + ' wireframe xaxis xaxis_color xaxis_secondary xaxis_type xaxis_width xlabel' + ' xlabel_secondary xlength xrange xrange_secondary xtics xtics_axis xtics_rotate' + ' xtics_rotate_secondary xtics_secondary xtics_secondary_axis xu_grid x_voxel' + ' xy_file xyplane xy_scale yaxis yaxis_color yaxis_secondary yaxis_type yaxis_width' + ' ylabel ylabel_secondary ylength yrange yrange_secondary ytics ytics_axis' + ' ytics_rotate ytics_rotate_secondary ytics_secondary ytics_secondary_axis' + ' yv_grid y_voxel yx_ratio zaxis zaxis_color zaxis_type zaxis_width zeroa zerob' + ' zerobern zeta%pi zlabel zlabel_rotate zlength zmin zn_primroot_limit zn_primroot_pretest';
  var SYMBOLS = '_ __ %|0 %%|0';

  return {
    lexemes: '[A-Za-z_%][0-9A-Za-z_%]*',
    keywords: {
      keyword: KEYWORDS,
      literal: LITERALS,
      built_in: BUILTIN_FUNCTIONS,
      symbol: SYMBOLS
    },
    contains: [{
      className: 'comment',
      begin: '/\\*',
      end: '\\*/',
      contains: ['self']
    }, hljs.QUOTE_STRING_MODE, {
      className: 'number',
      relevance: 0,
      variants: [{
        // float number w/ exponent
        // hmm, I wonder if we ought to include other exponent markers?
        begin: '\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Ee][-+]?\\d+\\b'
      }, {
        // bigfloat number
        begin: '\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Bb][-+]?\\d+\\b',
        relevance: 10
      }, {
        // float number w/out exponent
        // Doesn't seem to recognize floats which start with '.'
        begin: '\\b(\\.\\d+|\\d+\\.\\d+)\\b'
      }, {
        // integer in base up to 36
        // Doesn't seem to recognize integers which end with '.'
        begin: '\\b(\\d+|0[0-9A-Za-z]+)\\.?\\b'
      }]
    }],
    illegal: /@/
  };
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: 'int float string vector matrix if else switch case default while do for in break ' + 'continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic ' + 'addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey ' + 'affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve ' + 'alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor ' + 'animDisplay animView annotate appendStringArray applicationName applyAttrPreset ' + 'applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx ' + 'artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu ' + 'artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand ' + 'assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface ' + 'attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu ' + 'attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp ' + 'attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery ' + 'autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults ' + 'bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership ' + 'bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType ' + 'boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu ' + 'buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge ' + 'cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch ' + 'catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox ' + 'character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp ' + 'checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip ' + 'clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore ' + 'closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter ' + 'cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color ' + 'colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp ' + 'colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem ' + 'componentEditor compositingInterop computePolysetVolume condition cone confirmDialog ' + 'connectAttr connectControl connectDynamic connectJoint connectionInfo constrain ' + 'constrainValue constructionHistory container containsMultibyte contextInfo control ' + 'convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation ' + 'convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache ' + 'cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel ' + 'cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver ' + 'cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor ' + 'createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer ' + 'createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse ' + 'currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx ' + 'curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface ' + 'curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox ' + 'defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete ' + 'deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes ' + 'delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo ' + 'dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable ' + 'disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected ' + 'displayColor displayCull displayLevelOfDetail displayPref displayRGBColor ' + 'displaySmoothness displayStats displayString displaySurface distanceDimContext ' + 'distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct ' + 'doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator ' + 'duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression ' + 'dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor ' + 'dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers ' + 'editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor ' + 'editorTemplate effector emit emitter enableDevice encodeString endString endsWith env ' + 'equivalent equivalentTol erf error eval evalDeferred evalEcho event ' + 'exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp ' + 'expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof ' + 'fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo ' + 'filetest filletCurve filter filterCurve filterExpand filterStudioImport ' + 'findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster ' + 'finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar ' + 'floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo ' + 'fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint ' + 'frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss ' + 'geometryConstraint getApplicationVersionAsFloat getAttr getClassification ' + 'getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes ' + 'getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender ' + 'glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl ' + 'gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid ' + 'gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap ' + 'HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor ' + 'HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached ' + 'HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel ' + 'headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey ' + 'hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender ' + 'hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox ' + 'iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ' + 'ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ' + 'ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform ' + 'insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance ' + 'instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp ' + 'interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf ' + 'isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect ' + 'itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx ' + 'jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner ' + 'keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx ' + 'keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx ' + 'keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx ' + 'keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor ' + 'layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList ' + 'lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep ' + 'listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory ' + 'listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation ' + 'listNodeTypes listPanelCategories listRelatives listSets listTransforms ' + 'listUnselected listerEditor loadFluid loadNewShelf loadPlugin ' + 'loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log ' + 'longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive ' + 'makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext ' + 'manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx ' + 'manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout ' + 'menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp ' + 'mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move ' + 'moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute ' + 'nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast ' + 'nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint ' + 'normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect ' + 'nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref ' + 'nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType ' + 'objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface ' + 'offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit ' + 'orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier ' + 'paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration ' + 'panelHistory paramDimContext paramDimension paramLocator parent parentConstraint ' + 'particle particleExists particleInstancer particleRenderInfo partition pasteKey ' + 'pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture ' + 'pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo ' + 'pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult ' + 'pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend ' + 'polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal ' + 'polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge ' + 'polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge ' + 'polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet ' + 'polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet ' + 'polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection ' + 'polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge ' + 'polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet ' + 'polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix ' + 'polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut ' + 'polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet ' + 'polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge ' + 'polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex ' + 'polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection ' + 'polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection ' + 'polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint ' + 'polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate ' + 'polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge ' + 'polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing ' + 'polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet ' + 'polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace ' + 'popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer ' + 'projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx ' + 'propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd ' + 'python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection ' + 'radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl ' + 'readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference ' + 'referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE ' + 'registerPluginResource rehash reloadImage removeJoint removeMultiInstance ' + 'removePanelCategory rename renameAttr renameSelectionList renameUI render ' + 'renderGlobalsNode renderInfo renderLayerButton renderLayerParent ' + 'renderLayerPostProcess renderLayerUnparent renderManip renderPartition ' + 'renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor ' + 'renderWindowSelectContext renderer reorder reorderDeformers requires reroot ' + 'resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget ' + 'reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx ' + 'rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout ' + 'runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage ' + 'saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale ' + 'scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor ' + 'sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable ' + 'scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt ' + 'searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey ' + 'selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType ' + 'selectedNodes selectionConnection separator setAttr setAttrEnumResource ' + 'setAttrMapping setAttrNiceNameResource setConstraintRestPosition ' + 'setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr ' + 'setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe ' + 'setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag ' + 'setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject ' + 'setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets ' + 'shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare ' + 'shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField ' + 'shortNameOf showHelp showHidden showManipCtx showSelectionInTitle ' + 'showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface ' + 'size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep ' + 'snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound ' + 'soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort ' + 'spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString ' + 'startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp ' + 'stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex ' + 'stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex ' + 'stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString ' + 'stringToStringArray strip stripPrefixFromName stroke subdAutoProjection ' + 'subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV ' + 'subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror ' + 'subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease ' + 'subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring ' + 'surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton ' + 'symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext ' + 'texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext ' + 'texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text ' + 'textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList ' + 'textToShelf textureDisplacePlane textureHairColor texturePlacementContext ' + 'textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath ' + 'toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower ' + 'toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper ' + 'trace track trackCtx transferAttributes transformCompare transformLimits translator ' + 'trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence ' + 'twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit ' + 'unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink ' + 'uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane ' + 'viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex ' + 'waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire ' + 'wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform',
    illegal: '</',
    contains: [hljs.C_NUMBER_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, {
      className: 'string',
      begin: '`', end: '`',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, { // eats variables
      begin: '[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)'
    }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
  };
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    keyword: 'module use_module import_module include_module end_module initialise ' + 'mutable initialize finalize finalise interface implementation pred ' + 'mode func type inst solver any_pred any_func is semidet det nondet ' + 'multi erroneous failure cc_nondet cc_multi typeclass instance where ' + 'pragma promise external trace atomic or_else require_complete_switch ' + 'require_det require_semidet require_multi require_nondet ' + 'require_cc_multi require_cc_nondet require_erroneous require_failure',
    meta:
    // pragma
    'inline no_inline type_spec source_file fact_table obsolete memo ' + 'loop_check minimal_model terminates does_not_terminate ' + 'check_termination promise_equivalent_clauses ' +
    // preprocessor
    'foreign_proc foreign_decl foreign_code foreign_type ' + 'foreign_import_module foreign_export_enum foreign_export ' + 'foreign_enum may_call_mercury will_not_call_mercury thread_safe ' + 'not_thread_safe maybe_thread_safe promise_pure promise_semipure ' + 'tabled_for_io local untrailed trailed attach_to_io_state ' + 'can_pass_as_mercury_type stable will_not_throw_exception ' + 'may_modify_trail will_not_modify_trail may_duplicate ' + 'may_not_duplicate affects_liveness does_not_affect_liveness ' + 'doesnt_affect_liveness no_sharing unknown_sharing sharing',
    built_in: 'some all not if then else true fail false try catch catch_any ' + 'semidet_true semidet_false semidet_fail impure_true impure semipure'
  };

  var COMMENT = hljs.COMMENT('%', '$');

  var NUMCODE = {
    className: 'number',
    begin: "0'.\\|0[box][0-9a-fA-F]*"
  };

  var ATOM = hljs.inherit(hljs.APOS_STRING_MODE, { relevance: 0 });
  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, { relevance: 0 });
  var STRING_FMT = {
    className: 'subst',
    begin: '\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]',
    relevance: 0
  };
  STRING.contains.push(STRING_FMT);

  var IMPLICATION = {
    className: 'built_in',
    variants: [{ begin: '<=>' }, { begin: '<=', relevance: 0 }, { begin: '=>', relevance: 0 }, { begin: '/\\\\' }, { begin: '\\\\/' }]
  };

  var HEAD_BODY_CONJUNCTION = {
    className: 'built_in',
    variants: [{ begin: ':-\\|-->' }, { begin: '=', relevance: 0 }]
  };

  return {
    aliases: ['m', 'moo'],
    keywords: KEYWORDS,
    contains: [IMPLICATION, HEAD_BODY_CONJUNCTION, COMMENT, hljs.C_BLOCK_COMMENT_MODE, NUMCODE, hljs.NUMBER_MODE, ATOM, STRING, { begin: /:-/ // relevance booster
    }]
  };
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  //local labels: %?[FB]?[AT]?\d{1,2}\w+
  return {
    case_insensitive: true,
    aliases: ['mips'],
    lexemes: '\\.?' + hljs.IDENT_RE,
    keywords: {
      meta:
      //GNU preprocs
      '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ',
      built_in: '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 ' + // integer registers
      '$16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 ' + // integer registers
      'zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 ' + // integer register aliases
      't0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 ' + // integer register aliases
      'k0 k1 gp sp fp ra ' + // integer register aliases
      '$f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 ' + // floating-point registers
      '$f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 ' + // floating-point registers
      'Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi ' + // Coprocessor 0 registers
      'HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId ' + // Coprocessor 0 registers
      'EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ' + // Coprocessor 0 registers
      'ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt ' // Coprocessor 0 registers
    },
    contains: [{
      className: 'keyword',
      begin: '\\b(' + //mnemonics
      // 32-bit integer instructions
      'addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|' + 'bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(\.hb)?|jr(\.hb)?|lbu?|lhu?|' + 'll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|' + 'multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|' + 'srlv?|subu?|sw[lr]?|xori?|wsbh|' +
      // floating-point instructions
      'abs\.[sd]|add\.[sd]|alnv.ps|bc1[ft]l?|' + 'c\.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et])\.[sd]|' + '(ceil|floor|round|trunc)\.[lw]\.[sd]|cfc1|cvt\.d\.[lsw]|' + 'cvt\.l\.[dsw]|cvt\.ps\.s|cvt\.s\.[dlw]|cvt\.s\.p[lu]|cvt\.w\.[dls]|' + 'div\.[ds]|ldx?c1|luxc1|lwx?c1|madd\.[sd]|mfc1|mov[fntz]?\.[ds]|' + 'msub\.[sd]|mth?c1|mul\.[ds]|neg\.[ds]|nmadd\.[ds]|nmsub\.[ds]|' + 'p[lu][lu]\.ps|recip\.fmt|r?sqrt\.[ds]|sdx?c1|sub\.[ds]|suxc1|' + 'swx?c1|' +
      // system control instructions
      'break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|' + 'rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|' + 'tlti?u?|tnei?|wait|wrpgpr' + ')',
      end: '\\s'
    }, hljs.COMMENT('[;#]', '$'), hljs.C_BLOCK_COMMENT_MODE, hljs.QUOTE_STRING_MODE, {
      className: 'string',
      begin: '\'',
      end: '[^\\\\]\'',
      relevance: 0
    }, {
      className: 'title',
      begin: '\\|', end: '\\|',
      illegal: '\\n',
      relevance: 0
    }, {
      className: 'number',
      variants: [{ begin: '0x[0-9a-f]+' }, //hex
      { begin: '\\b-?\\d+' //bare number
      }],
      relevance: 0
    }, {
      className: 'symbol',
      variants: [{ begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:' }, //GNU MIPS syntax
      { begin: '^\\s*[0-9]+:' }, // numbered local labels
      { begin: '[0-9]+[bf]' // number local label reference (backwards, forwards)
      }],
      relevance: 0
    }],
    illegal: '\/'
  };
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: 'environ vocabularies notations constructors definitions ' + 'registrations theorems schemes requirements begin end definition ' + 'registration cluster existence pred func defpred deffunc theorem ' + 'proof let take assume then thus hence ex for st holds consider ' + 'reconsider such that and in provided of as from be being by means ' + 'equals implies iff redefine define now not or attr is mode ' + 'suppose per cases set thesis contradiction scheme reserve struct ' + 'correctness compatibility coherence symmetry assymetry ' + 'reflexivity irreflexivity connectedness uniqueness commutativity ' + 'idempotence involutiveness projectivity',
    contains: [hljs.COMMENT('::', '$')]
  };
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var PERL_KEYWORDS = 'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ' + 'ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime ' + 'readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq' + 'fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent ' + 'shutdown dump chomp connect getsockname die socketpair close flock exists index shmget' + 'sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr ' + 'unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 ' + 'getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline ' + 'endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand ' + 'mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink ' + 'getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr ' + 'untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link ' + 'getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller ' + 'lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and ' + 'sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 ' + 'chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach ' + 'tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir' + 'ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe ' + 'atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when';
  var SUBST = {
    className: 'subst',
    begin: '[$@]\\{', end: '\\}',
    keywords: PERL_KEYWORDS
  };
  var METHOD = {
    begin: '->{', end: '}'
    // contains defined later
  };
  var VAR = {
    variants: [{ begin: /\$\d/ }, { begin: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ }, { begin: /[\$%@][^\s\w{]/, relevance: 0 }]
  };
  var STRING_CONTAINS = [hljs.BACKSLASH_ESCAPE, SUBST, VAR];
  var PERL_DEFAULT_CONTAINS = [VAR, hljs.HASH_COMMENT_MODE, hljs.COMMENT('^\\=\\w', '\\=cut', {
    endsWithParent: true
  }), METHOD, {
    className: 'string',
    contains: STRING_CONTAINS,
    variants: [{
      begin: 'q[qwxr]?\\s*\\(', end: '\\)',
      relevance: 5
    }, {
      begin: 'q[qwxr]?\\s*\\[', end: '\\]',
      relevance: 5
    }, {
      begin: 'q[qwxr]?\\s*\\{', end: '\\}',
      relevance: 5
    }, {
      begin: 'q[qwxr]?\\s*\\|', end: '\\|',
      relevance: 5
    }, {
      begin: 'q[qwxr]?\\s*\\<', end: '\\>',
      relevance: 5
    }, {
      begin: 'qw\\s+q', end: 'q',
      relevance: 5
    }, {
      begin: '\'', end: '\'',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: '"', end: '"'
    }, {
      begin: '`', end: '`',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: '{\\w+}',
      contains: [],
      relevance: 0
    }, {
      begin: '\-?\\w+\\s*\\=\\>',
      contains: [],
      relevance: 0
    }]
  }, {
    className: 'number',
    begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
    relevance: 0
  }, { // regexp container
    begin: '(\\/\\/|' + hljs.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
    keywords: 'split return print reverse grep',
    relevance: 0,
    contains: [hljs.HASH_COMMENT_MODE, {
      className: 'regexp',
      begin: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
      relevance: 10
    }, {
      className: 'regexp',
      begin: '(m|qr)?/', end: '/[a-z]*',
      contains: [hljs.BACKSLASH_ESCAPE],
      relevance: 0 // allows empty "//" which is a common comment delimiter in other languages
    }]
  }, {
    className: 'function',
    beginKeywords: 'sub', end: '(\\s*\\(.*?\\))?[;{]', excludeEnd: true,
    relevance: 5,
    contains: [hljs.TITLE_MODE]
  }, {
    begin: '-\\w\\b',
    relevance: 0
  }, {
    begin: "^__DATA__$",
    end: "^__END__$",
    subLanguage: 'mojolicious',
    contains: [{
      begin: "^@@.*",
      end: "$",
      className: "comment"
    }]
  }];
  SUBST.contains = PERL_DEFAULT_CONTAINS;
  METHOD.contains = PERL_DEFAULT_CONTAINS;

  return {
    aliases: ['pl', 'pm'],
    lexemes: /[\w\.]+/,
    keywords: PERL_KEYWORDS,
    contains: PERL_DEFAULT_CONTAINS
  };
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    subLanguage: 'xml',
    contains: [{
      className: 'meta',
      begin: '^__(END|DATA)__$'
    },
    // mojolicious line
    {
      begin: "^\\s*%{1,2}={0,2}", end: '$',
      subLanguage: 'perl'
    },
    // mojolicious block
    {
      begin: "<%{1,2}={0,2}",
      end: "={0,1}%>",
      subLanguage: 'perl',
      excludeBegin: true,
      excludeEnd: true
    }]
  };
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var NUMBER = {
    className: 'number', relevance: 0,
    variants: [{
      begin: '[$][a-fA-F0-9]+'
    }, hljs.NUMBER_MODE]
  };

  return {
    case_insensitive: true,
    keywords: {
      keyword: 'public private property continue exit extern new try catch ' + 'eachin not abstract final select case default const local global field ' + 'end if then else elseif endif while wend repeat until forever for ' + 'to step next return module inline throw import',

      built_in: 'DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil ' + 'Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI',

      literal: 'true false null and or shl shr mod'
    },
    illegal: /\/\*/,
    contains: [hljs.COMMENT('#rem', '#end'), hljs.COMMENT("'", '$', {
      relevance: 0
    }), {
      className: 'function',
      beginKeywords: 'function method', end: '[(=:]|$',
      illegal: /\n/,
      contains: [hljs.UNDERSCORE_TITLE_MODE]
    }, {
      className: 'class',
      beginKeywords: 'class interface', end: '$',
      contains: [{
        beginKeywords: 'extends implements'
      }, hljs.UNDERSCORE_TITLE_MODE]
    }, {
      className: 'built_in',
      begin: '\\b(self|super)\\b'
    }, {
      className: 'meta',
      begin: '\\s*#', end: '$',
      keywords: { 'meta-keyword': 'if else elseif endif end then' }
    }, {
      className: 'meta',
      begin: '^\\s*strict\\b'
    }, {
      beginKeywords: 'alias', end: '=',
      contains: [hljs.UNDERSCORE_TITLE_MODE]
    }, hljs.QUOTE_STRING_MODE, NUMBER]
  };
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    keyword:
    // Moonscript keywords
    'if then not for in while do return else elseif break continue switch and or ' + 'unless when class extends super local import export from using',
    literal: 'true false nil',
    built_in: '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load ' + 'loadfile loadstring module next pairs pcall print rawequal rawget rawset require ' + 'select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug ' + 'io math os package string table'
  };
  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var SUBST = {
    className: 'subst',
    begin: /#\{/, end: /}/,
    keywords: KEYWORDS
  };
  var EXPRESSIONS = [hljs.inherit(hljs.C_NUMBER_MODE, { starts: { end: '(\\s*/)?', relevance: 0 } }), // a number tries to eat the following slash to prevent treating it as a regexp
  {
    className: 'string',
    variants: [{
      begin: /'/, end: /'/,
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: /"/, end: /"/,
      contains: [hljs.BACKSLASH_ESCAPE, SUBST]
    }]
  }, {
    className: 'built_in',
    begin: '@__' + hljs.IDENT_RE
  }, {
    begin: '@' + hljs.IDENT_RE // relevance booster on par with CoffeeScript
  }, {
    begin: hljs.IDENT_RE + '\\\\' + hljs.IDENT_RE // inst\method
  }];
  SUBST.contains = EXPRESSIONS;

  var TITLE = hljs.inherit(hljs.TITLE_MODE, { begin: JS_IDENT_RE });
  var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
  var PARAMS = {
    className: 'params',
    begin: '\\([^\\(]', returnBegin: true,
    /* We need another contained nameless mode to not have every nested
    pair of parens to be called "params" */
    contains: [{
      begin: /\(/, end: /\)/,
      keywords: KEYWORDS,
      contains: ['self'].concat(EXPRESSIONS)
    }]
  };

  return {
    aliases: ['moon'],
    keywords: KEYWORDS,
    illegal: /\/\*/,
    contains: EXPRESSIONS.concat([hljs.COMMENT('--', '$'), {
      className: 'function', // function: -> =>
      begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE, end: '[-=]>',
      returnBegin: true,
      contains: [TITLE, PARAMS]
    }, {
      begin: /[\(,:=]\s*/, // anonymous function start
      relevance: 0,
      contains: [{
        className: 'function',
        begin: PARAMS_RE, end: '[-=]>',
        returnBegin: true,
        contains: [PARAMS]
      }]
    }, {
      className: 'class',
      beginKeywords: 'class',
      end: '$',
      illegal: /[:="\[\]]/,
      contains: [{
        beginKeywords: 'extends',
        endsWithParent: true,
        illegal: /[:="\[\]]/,
        contains: [TITLE]
      }, TITLE]
    }, {
      className: 'name', // table
      begin: JS_IDENT_RE + ':', end: ':',
      returnBegin: true, returnEnd: true,
      relevance: 0
    }])
  };
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    case_insensitive: true,
    contains: [{
      beginKeywords: 'build create index delete drop explain infer|10 insert merge prepare select update upsert|10',
      end: /;/, endsWithParent: true,
      keywords: {
        // Taken from http://developer.couchbase.com/documentation/server/current/n1ql/n1ql-language-reference/reservedwords.html
        keyword: 'all alter analyze and any array as asc begin between binary boolean break bucket build by call ' + 'case cast cluster collate collection commit connect continue correlate cover create database ' + 'dataset datastore declare decrement delete derived desc describe distinct do drop each element ' + 'else end every except exclude execute exists explain fetch first flatten for force from ' + 'function grant group gsi having if ignore ilike in include increment index infer inline inner ' + 'insert intersect into is join key keys keyspace known last left let letting like limit lsm map ' + 'mapping matched materialized merge minus namespace nest not number object offset on ' + 'option or order outer over parse partition password path pool prepare primary private privilege ' + 'procedure public raw realm reduce rename return returning revoke right role rollback satisfies ' + 'schema select self semi set show some start statistics string system then to transaction trigger ' + 'truncate under union unique unknown unnest unset update upsert use user using validate value ' + 'valued values via view when where while with within work xor',
        // Taken from http://developer.couchbase.com/documentation/server/4.5/n1ql/n1ql-language-reference/literals.html
        literal: 'true false null missing|5',
        // Taken from http://developer.couchbase.com/documentation/server/4.5/n1ql/n1ql-language-reference/functions.html
        built_in: 'array_agg array_append array_concat array_contains array_count array_distinct array_ifnull array_length ' + 'array_max array_min array_position array_prepend array_put array_range array_remove array_repeat array_replace ' + 'array_reverse array_sort array_sum avg count max min sum greatest least ifmissing ifmissingornull ifnull ' + 'missingif nullif ifinf ifnan ifnanorinf naninf neginfif posinfif clock_millis clock_str date_add_millis ' + 'date_add_str date_diff_millis date_diff_str date_part_millis date_part_str date_trunc_millis date_trunc_str ' + 'duration_to_str millis str_to_millis millis_to_str millis_to_utc millis_to_zone_name now_millis now_str ' + 'str_to_duration str_to_utc str_to_zone_name decode_json encode_json encoded_size poly_length base64 base64_encode ' + 'base64_decode meta uuid abs acos asin atan atan2 ceil cos degrees e exp ln log floor pi power radians random ' + 'round sign sin sqrt tan trunc object_length object_names object_pairs object_inner_pairs object_values ' + 'object_inner_values object_add object_put object_remove object_unwrap regexp_contains regexp_like regexp_position ' + 'regexp_replace contains initcap length lower ltrim position repeat replace rtrim split substr title trim upper ' + 'isarray isatom isboolean isnumber isobject isstring type toarray toatom toboolean tonumber toobject tostring'
      },
      contains: [{
        className: 'string',
        begin: '\'', end: '\'',
        contains: [hljs.BACKSLASH_ESCAPE],
        relevance: 0
      }, {
        className: 'string',
        begin: '"', end: '"',
        contains: [hljs.BACKSLASH_ESCAPE],
        relevance: 0
      }, {
        className: 'symbol',
        begin: '`', end: '`',
        contains: [hljs.BACKSLASH_ESCAPE],
        relevance: 2
      }, hljs.C_NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE]
    }, hljs.C_BLOCK_COMMENT_MODE]
  };
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var VAR = {
    className: 'variable',
    variants: [{ begin: /\$\d+/ }, { begin: /\$\{/, end: /}/ }, { begin: '[\\$\\@]' + hljs.UNDERSCORE_IDENT_RE }]
  };
  var DEFAULT = {
    endsWithParent: true,
    lexemes: '[a-z/_]+',
    keywords: {
      literal: 'on off yes no true false none blocked debug info notice warn error crit ' + 'select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
    },
    relevance: 0,
    illegal: '=>',
    contains: [hljs.HASH_COMMENT_MODE, {
      className: 'string',
      contains: [hljs.BACKSLASH_ESCAPE, VAR],
      variants: [{ begin: /"/, end: /"/ }, { begin: /'/, end: /'/ }]
    },
    // this swallows entire URLs to avoid detecting numbers within
    {
      begin: '([a-z]+):/', end: '\\s', endsWithParent: true, excludeEnd: true,
      contains: [VAR]
    }, {
      className: 'regexp',
      contains: [hljs.BACKSLASH_ESCAPE, VAR],
      variants: [{ begin: "\\s\\^", end: "\\s|{|;", returnEnd: true },
      // regexp locations (~, ~*)
      { begin: "~\\*?\\s+", end: "\\s|{|;", returnEnd: true },
      // *.example.com
      { begin: "\\*(\\.[a-z\\-]+)+" },
      // sub.example.*
      { begin: "([a-z\\-]+\\.)+\\*" }]
    },
    // IP
    {
      className: 'number',
      begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
    },
    // units
    {
      className: 'number',
      begin: '\\b\\d+[kKmMgGdshdwy]*\\b',
      relevance: 0
    }, VAR]
  };

  return {
    aliases: ['nginxconf'],
    contains: [hljs.HASH_COMMENT_MODE, {
      begin: hljs.UNDERSCORE_IDENT_RE + '\\s+{', returnBegin: true,
      end: '{',
      contains: [{
        className: 'section',
        begin: hljs.UNDERSCORE_IDENT_RE
      }],
      relevance: 0
    }, {
      begin: hljs.UNDERSCORE_IDENT_RE + '\\s', end: ';|{', returnBegin: true,
      contains: [{
        className: 'attribute',
        begin: hljs.UNDERSCORE_IDENT_RE,
        starts: DEFAULT
      }],
      relevance: 0
    }],
    illegal: '[^\\s\\}]'
  };
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['nim'],
    keywords: {
      keyword: 'addr and as asm bind block break case cast const continue converter ' + 'discard distinct div do elif else end enum except export finally ' + 'for from generic if import in include interface is isnot iterator ' + 'let macro method mixin mod nil not notin object of or out proc ptr ' + 'raise ref return shl shr static template try tuple type using var ' + 'when while with without xor yield',
      literal: 'shared guarded stdin stdout stderr result true false',
      built_in: 'int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float ' + 'float32 float64 bool char string cstring pointer expr stmt void ' + 'auto any range array openarray varargs seq set clong culong cchar ' + 'cschar cshort cint csize clonglong cfloat cdouble clongdouble ' + 'cuchar cushort cuint culonglong cstringarray semistatic'
    },
    contains: [{
      className: 'meta', // Actually pragma
      begin: /{\./,
      end: /\.}/,
      relevance: 10
    }, {
      className: 'string',
      begin: /[a-zA-Z]\w*"/,
      end: /"/,
      contains: [{ begin: /""/ }]
    }, {
      className: 'string',
      begin: /([a-zA-Z]\w*)?"""/,
      end: /"""/
    }, hljs.QUOTE_STRING_MODE, {
      className: 'type',
      begin: /\b[A-Z]\w+\b/,
      relevance: 0
    }, {
      className: 'number',
      relevance: 0,
      variants: [{ begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/ }, { begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/ }, { begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/ }, { begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/ }]
    }, hljs.HASH_COMMENT_MODE]
  };
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var NIX_KEYWORDS = {
    keyword: 'rec with let in inherit assert if else then',
    literal: 'true false or and null',
    built_in: 'import abort baseNameOf dirOf isNull builtins map removeAttrs throw ' + 'toString derivation'
  };
  var ANTIQUOTE = {
    className: 'subst',
    begin: /\$\{/,
    end: /}/,
    keywords: NIX_KEYWORDS
  };
  var ATTRS = {
    begin: /[a-zA-Z0-9-_]+(\s*=)/, returnBegin: true,
    relevance: 0,
    contains: [{
      className: 'attr',
      begin: /\S+/
    }]
  };
  var STRING = {
    className: 'string',
    contains: [ANTIQUOTE],
    variants: [{ begin: "''", end: "''" }, { begin: '"', end: '"' }]
  };
  var EXPRESSIONS = [hljs.NUMBER_MODE, hljs.HASH_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRING, ATTRS];
  ANTIQUOTE.contains = EXPRESSIONS;
  return {
    aliases: ["nixos"],
    keywords: NIX_KEYWORDS,
    contains: EXPRESSIONS
  };
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var CONSTANTS = {
    className: 'variable',
    begin: /\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)/
  };

  var DEFINES = {
    // ${defines}
    className: 'variable',
    begin: /\$+{[\w\.:-]+}/
  };

  var VARIABLES = {
    // $variables
    className: 'variable',
    begin: /\$+\w+/,
    illegal: /\(\){}/
  };

  var LANGUAGES = {
    // $(language_strings)
    className: 'variable',
    begin: /\$+\([\w\^\.:-]+\)/
  };

  var PARAMETERS = {
    // command parameters
    className: 'params',
    begin: '(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)'
  };

  var COMPILER = {
    // !compiler_flags
    className: 'keyword',
    begin: /\!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)/
  };

  var METACHARS = {
    // $\n, $\r, $\t, $$
    className: 'subst',
    begin: /\$(\\[nrt]|\$)/
  };

  var PLUGINS = {
    // plug::ins
    className: 'class',
    begin: /\w+\:\:\w+/
  };

  var STRING = {
    className: 'string',
    variants: [{
      begin: '"', end: '"'
    }, {
      begin: '\'', end: '\''
    }, {
      begin: '`', end: '`'
    }],
    illegal: /\n/,
    contains: [METACHARS, CONSTANTS, DEFINES, VARIABLES, LANGUAGES]
  };

  return {
    case_insensitive: false,
    keywords: {
      keyword: 'Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileSeek FileWrite FileWriteByte FileWriteUTF16LE FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI FunctionEnd GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText IntCmp IntCmpU IntFmt IntOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PageExEnd Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionEnd SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionGroupEnd SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegStr WriteUninstaller XPStyle',
      literal: 'admin all auto both bottom bzip2 colored components current custom directory false force hide highest ifdiff ifnewer instfiles lastused leave left license listonly lzma nevershow none normal notset off on open print right show silent silentlog smooth textonly top true try un.components un.custom un.directory un.instfiles un.license uninstConfirm user Win10 Win7 Win8 WinVista zlib'
    },
    contains: [hljs.HASH_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.COMMENT(';', '$', {
      relevance: 0
    }), {
      className: 'function',
      beginKeywords: 'Function PageEx Section SectionGroup', end: '$'
    }, STRING, COMPILER, DEFINES, VARIABLES, LANGUAGES, PARAMETERS, PLUGINS, hljs.NUMBER_MODE]
  };
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var API_CLASS = {
    className: 'built_in',
    begin: '\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+'
  };
  var OBJC_KEYWORDS = {
    keyword: 'int float while char export sizeof typedef const struct for union ' + 'unsigned long volatile static bool mutable if do return goto void ' + 'enum else break extern asm case short default double register explicit ' + 'signed typename this switch continue wchar_t inline readonly assign ' + 'readwrite self @synchronized id typeof ' + 'nonatomic super unichar IBOutlet IBAction strong weak copy ' + 'in out inout bycopy byref oneway __strong __weak __block __autoreleasing ' + '@private @protected @public @try @property @end @throw @catch @finally ' + '@autoreleasepool @synthesize @dynamic @selector @optional @required ' + '@encode @package @import @defs @compatibility_alias ' + '__bridge __bridge_transfer __bridge_retained __bridge_retain ' + '__covariant __contravariant __kindof ' + '_Nonnull _Nullable _Null_unspecified ' + '__FUNCTION__ __PRETTY_FUNCTION__ __attribute__ ' + 'getter setter retain unsafe_unretained ' + 'nonnull nullable null_unspecified null_resettable class instancetype ' + 'NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER ' + 'NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED ' + 'NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE ' + 'NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END ' + 'NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW ' + 'NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN',
    literal: 'false true FALSE TRUE nil YES NO NULL',
    built_in: 'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
  };
  var LEXEMES = /[a-zA-Z@][a-zA-Z0-9_]*/;
  var CLASS_KEYWORDS = '@interface @class @protocol @implementation';
  return {
    aliases: ['mm', 'objc', 'obj-c'],
    keywords: OBJC_KEYWORDS,
    lexemes: LEXEMES,
    illegal: '</',
    contains: [API_CLASS, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.C_NUMBER_MODE, hljs.QUOTE_STRING_MODE, {
      className: 'string',
      variants: [{
        begin: '@"', end: '"',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      }, {
        begin: '\'', end: '[^\\\\]\'',
        illegal: '[^\\\\][^\']'
      }]
    }, {
      className: 'meta',
      begin: '#',
      end: '$',
      contains: [{
        className: 'meta-string',
        variants: [{ begin: '\"', end: '\"' }, { begin: '<', end: '>' }]
      }]
    }, {
      className: 'class',
      begin: '(' + CLASS_KEYWORDS.split(' ').join('|') + ')\\b', end: '({|$)', excludeEnd: true,
      keywords: CLASS_KEYWORDS, lexemes: LEXEMES,
      contains: [hljs.UNDERSCORE_TITLE_MODE]
    }, {
      begin: '\\.' + hljs.UNDERSCORE_IDENT_RE,
      relevance: 0
    }]
  };
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  /* missing support for heredoc-like string (OCaml 4.0.2+) */
  return {
    aliases: ['ml'],
    keywords: {
      keyword: 'and as assert asr begin class constraint do done downto else end ' + 'exception external for fun function functor if in include ' + 'inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method ' + 'mod module mutable new object of open! open or private rec sig struct ' + 'then to try type val! val virtual when while with ' +
      /* camlp4 */
      'parser value',
      built_in:
      /* built-in types */
      'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit ' +
      /* (some) types in Pervasives */
      'in_channel out_channel ref',
      literal: 'true false'
    },
    illegal: /\/\/|>>/,
    lexemes: '[a-z_]\\w*!?',
    contains: [{
      className: 'literal',
      begin: '\\[(\\|\\|)?\\]|\\(\\)',
      relevance: 0
    }, hljs.COMMENT('\\(\\*', '\\*\\)', {
      contains: ['self']
    }), { /* type variable */
      className: 'symbol',
      begin: '\'[A-Za-z_](?!\')[\\w\']*'
      /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
    }, { /* polymorphic variant */
      className: 'type',
      begin: '`[A-Z][\\w\']*'
    }, { /* module or constructor */
      className: 'type',
      begin: '\\b[A-Z][\\w\']*',
      relevance: 0
    }, { /* don't color identifiers, but safely catch all identifiers with '*/
      begin: '[a-z_]\\w*\'[\\w\']*', relevance: 0
    }, hljs.inherit(hljs.APOS_STRING_MODE, { className: 'string', relevance: 0 }), hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null }), {
      className: 'number',
      begin: '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' + '0[oO][0-7_]+[Lln]?|' + '0[bB][01_]+[Lln]?|' + '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
      relevance: 0
    }, {
      begin: /[-=]>/ // relevance booster
    }]
  };
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
	var SPECIAL_VARS = {
		className: 'keyword',
		begin: '\\$(f[asn]|t|vp[rtd]|children)'
	},
	    LITERALS = {
		className: 'literal',
		begin: 'false|true|PI|undef'
	},
	    NUMBERS = {
		className: 'number',
		begin: '\\b\\d+(\\.\\d+)?(e-?\\d+)?', //adds 1e5, 1e-10
		relevance: 0
	},
	    STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null }),
	    PREPRO = {
		className: 'meta',
		keywords: { 'meta-keyword': 'include use' },
		begin: 'include|use <',
		end: '>'
	},
	    PARAMS = {
		className: 'params',
		begin: '\\(', end: '\\)',
		contains: ['self', NUMBERS, STRING, SPECIAL_VARS, LITERALS]
	},
	    MODIFIERS = {
		begin: '[*!#%]',
		relevance: 0
	},
	    FUNCTIONS = {
		className: 'function',
		beginKeywords: 'module function',
		end: '\\=|\\{',
		contains: [PARAMS, hljs.UNDERSCORE_TITLE_MODE]
	};

	return {
		aliases: ['scad'],
		keywords: {
			keyword: 'function module include use for intersection_for if else \\%',
			literal: 'false true PI undef',
			built_in: 'circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign'
		},
		contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBERS, PREPRO, STRING, SPECIAL_VARS, MODIFIERS, FUNCTIONS]
	};
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var OXYGENE_KEYWORDS = 'abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue ' + 'create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false ' + 'final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited ' + 'inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of ' + 'old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly ' + 'record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple ' + 'type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal ' + 'register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained';
  var CURLY_COMMENT = hljs.COMMENT('{', '}', {
    relevance: 0
  });
  var PAREN_COMMENT = hljs.COMMENT('\\(\\*', '\\*\\)', {
    relevance: 10
  });
  var STRING = {
    className: 'string',
    begin: '\'', end: '\'',
    contains: [{ begin: '\'\'' }]
  };
  var CHAR_STRING = {
    className: 'string', begin: '(#\\d+)+'
  };
  var FUNCTION = {
    className: 'function',
    beginKeywords: 'function constructor destructor procedure method', end: '[:;]',
    keywords: 'function constructor|10 destructor|10 procedure|10 method|10',
    contains: [hljs.TITLE_MODE, {
      className: 'params',
      begin: '\\(', end: '\\)',
      keywords: OXYGENE_KEYWORDS,
      contains: [STRING, CHAR_STRING]
    }, CURLY_COMMENT, PAREN_COMMENT]
  };
  return {
    case_insensitive: true,
    lexemes: /\.?\w+/,
    keywords: OXYGENE_KEYWORDS,
    illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
    contains: [CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE, STRING, CHAR_STRING, hljs.NUMBER_MODE, FUNCTION, {
      className: 'class',
      begin: '=\\bclass\\b', end: 'end;',
      keywords: OXYGENE_KEYWORDS,
      contains: [STRING, CHAR_STRING, CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE, FUNCTION]
    }]
  };
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var CURLY_SUBCOMMENT = hljs.COMMENT('{', '}', {
    contains: ['self']
  });
  return {
    subLanguage: 'xml', relevance: 0,
    contains: [hljs.COMMENT('^#', '$'), hljs.COMMENT('\\^rem{', '}', {
      relevance: 10,
      contains: [CURLY_SUBCOMMENT]
    }), {
      className: 'meta',
      begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',
      relevance: 10
    }, {
      className: 'title',
      begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$'
    }, {
      className: 'variable',
      begin: '\\$\\{?[\\w\\-\\.\\:]+\\}?'
    }, {
      className: 'keyword',
      begin: '\\^[\\w\\-\\.\\:]+'
    }, {
      className: 'number',
      begin: '\\^#[0-9a-fA-F]+'
    }, hljs.C_NUMBER_MODE]
  };
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var MACRO = {
    className: 'variable',
    begin: /\$[\w\d#@][\w\d_]*/
  };
  var TABLE = {
    className: 'variable',
    begin: /<(?!\/)/, end: />/
  };
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/
  };

  return {
    aliases: ['pf.conf'],
    lexemes: /[a-z0-9_<>-]+/,
    keywords: {
      built_in: /* block match pass are "actions" in pf.conf(5), the rest are
                 * lexically similar top-level commands.
                 */
      'block match pass load anchor|5 antispoof|10 set table',
      keyword: 'in out log quick on rdomain inet inet6 proto from port os to route' + 'allow-opts divert-packet divert-reply divert-to flags group icmp-type' + 'icmp6-type label once probability recieved-on rtable prio queue' + 'tos tag tagged user keep fragment for os drop' + 'af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin' + 'source-hash static-port' + 'dup-to reply-to route-to' + 'parent bandwidth default min max qlimit' + 'block-policy debug fingerprints hostid limit loginterface optimization' + 'reassemble ruleset-optimization basic none profile skip state-defaults' + 'state-policy timeout' + 'const counters persist' + 'no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy' + 'source-track global rule max-src-nodes max-src-states max-src-conn' + 'max-src-conn-rate overload flush' + 'scrub|5 max-mss min-ttl no-df|10 random-id',
      literal: 'all any no-route self urpf-failed egress|5 unknown'
    },
    contains: [hljs.HASH_COMMENT_MODE, hljs.NUMBER_MODE, hljs.QUOTE_STRING_MODE, MACRO, TABLE]
  };
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var VARIABLE = {
    begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
  };
  var PREPROCESSOR = {
    className: 'meta', begin: /<\?(php)?|\?>/
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
    variants: [{
      begin: 'b"', end: '"'
    }, {
      begin: 'b\'', end: '\''
    }, hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null }), hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null })]
  };
  var NUMBER = { variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE] };
  return {
    aliases: ['php3', 'php4', 'php5', 'php6'],
    case_insensitive: true,
    keywords: 'and include_once list abstract global private echo interface as static endswitch ' + 'array null if endwhile or const for endforeach self var while isset public ' + 'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' + 'return parent clone use __CLASS__ __LINE__ else break print eval new ' + 'catch __METHOD__ case exception default die require __FUNCTION__ ' + 'enddeclare final try switch continue endfor endif declare unset true false ' + 'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' + 'yield finally',
    contains: [hljs.HASH_COMMENT_MODE, hljs.COMMENT('//', '$', { contains: [PREPROCESSOR] }), hljs.COMMENT('/\\*', '\\*/', {
      contains: [{
        className: 'doctag',
        begin: '@[A-Za-z]+'
      }]
    }), hljs.COMMENT('__halt_compiler.+?;', false, {
      endsWithParent: true,
      keywords: '__halt_compiler',
      lexemes: hljs.UNDERSCORE_IDENT_RE
    }), {
      className: 'string',
      begin: /<<<['"]?\w+['"]?$/, end: /^\w+;?$/,
      contains: [hljs.BACKSLASH_ESCAPE, {
        className: 'subst',
        variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }]
      }]
    }, PREPROCESSOR, {
      className: 'keyword', begin: /\$this\b/
    }, VARIABLE, {
      // swallow composed identifiers to avoid parsing them as keywords
      begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
    }, {
      className: 'function',
      beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
      illegal: '\\$|\\[|%',
      contains: [hljs.UNDERSCORE_TITLE_MODE, {
        className: 'params',
        begin: '\\(', end: '\\)',
        contains: ['self', VARIABLE, hljs.C_BLOCK_COMMENT_MODE, STRING, NUMBER]
      }]
    }, {
      className: 'class',
      beginKeywords: 'class interface', end: '{', excludeEnd: true,
      illegal: /[:\(\$"]/,
      contains: [{ beginKeywords: 'extends implements' }, hljs.UNDERSCORE_TITLE_MODE]
    }, {
      beginKeywords: 'namespace', end: ';',
      illegal: /[\.']/,
      contains: [hljs.UNDERSCORE_TITLE_MODE]
    }, {
      beginKeywords: 'use', end: ';',
      contains: [hljs.UNDERSCORE_TITLE_MODE]
    }, {
      begin: '=>' // No markup, just a relevance booster
    }, STRING, NUMBER]
  };
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    keyword: 'actor addressof and as be break class compile_error compile_intrinsic' + 'consume continue delegate digestof do else elseif embed end error' + 'for fun if ifdef in interface is isnt lambda let match new not object' + 'or primitive recover repeat return struct then trait try type until ' + 'use var where while with xor',
    meta: 'iso val tag trn box ref',
    literal: 'this false true'
  };

  var TRIPLE_QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"""', end: '"""',
    relevance: 10
  };

  var QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    contains: [hljs.BACKSLASH_ESCAPE]
  };

  var SINGLE_QUOTE_CHAR_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    contains: [hljs.BACKSLASH_ESCAPE],
    relevance: 0
  };

  var TYPE_NAME = {
    className: 'type',
    begin: '\\b_?[A-Z][\\w]*',
    relevance: 0
  };

  var PRIMED_NAME = {
    begin: hljs.IDENT_RE + '\'', relevance: 0
  };

  var CLASS = {
    className: 'class',
    beginKeywords: 'class actor', end: '$',
    contains: [hljs.TITLE_MODE, hljs.C_LINE_COMMENT_MODE]
  };

  var FUNCTION = {
    className: 'function',
    beginKeywords: 'new fun', end: '=>',
    contains: [hljs.TITLE_MODE, {
      begin: /\(/, end: /\)/,
      contains: [TYPE_NAME, PRIMED_NAME, hljs.C_NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE]
    }, {
      begin: /:/, endsWithParent: true,
      contains: [TYPE_NAME]
    }, hljs.C_LINE_COMMENT_MODE]
  };

  return {
    keywords: KEYWORDS,
    contains: [CLASS, FUNCTION, TYPE_NAME, TRIPLE_QUOTE_STRING_MODE, QUOTE_STRING_MODE, SINGLE_QUOTE_CHAR_MODE, PRIMED_NAME, hljs.C_NUMBER_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
  };
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var BACKTICK_ESCAPE = {
    begin: '`[\\s\\S]',
    relevance: 0
  };
  var VAR = {
    className: 'variable',
    variants: [{ begin: /\$[\w\d][\w\d_:]*/ }]
  };
  var LITERAL = {
    className: 'literal',
    begin: /\$(null|true|false)\b/
  };
  var QUOTE_STRING = {
    className: 'string',
    variants: [{ begin: /"/, end: /"/ }, { begin: /@"/, end: /^"@/ }],
    contains: [BACKTICK_ESCAPE, VAR, {
      className: 'variable',
      begin: /\$[A-z]/, end: /[^A-z]/
    }]
  };
  var APOS_STRING = {
    className: 'string',
    variants: [{ begin: /'/, end: /'/ }, { begin: /@'/, end: /^'@/ }]
  };

  var PS_HELPTAGS = {
    className: 'doctag',
    variants: [
    /* no paramater help tags */
    { begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/ },
    /* one parameter help tags */
    { begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/ }]
  };
  var PS_COMMENT = hljs.inherit(hljs.COMMENT(null, null), {
    variants: [
    /* single-line comment */
    { begin: /#/, end: /$/ },
    /* multi-line comment */
    { begin: /<#/, end: /#>/ }],
    contains: [PS_HELPTAGS]
  });

  return {
    aliases: ['ps'],
    lexemes: /-?[A-z\.\-]+/,
    case_insensitive: true,
    keywords: {
      keyword: 'if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch',
      built_in: 'Add-Computer Add-Content Add-History Add-JobTrigger Add-Member Add-PSSnapin Add-Type Checkpoint-Computer Clear-Content Clear-EventLog Clear-History Clear-Host Clear-Item Clear-ItemProperty Clear-Variable Compare-Object Complete-Transaction Connect-PSSession Connect-WSMan Convert-Path ConvertFrom-Csv ConvertFrom-Json ConvertFrom-SecureString ConvertFrom-StringData ConvertTo-Csv ConvertTo-Html ConvertTo-Json ConvertTo-SecureString ConvertTo-Xml Copy-Item Copy-ItemProperty Debug-Process Disable-ComputerRestore Disable-JobTrigger Disable-PSBreakpoint Disable-PSRemoting Disable-PSSessionConfiguration Disable-WSManCredSSP Disconnect-PSSession Disconnect-WSMan Disable-ScheduledJob Enable-ComputerRestore Enable-JobTrigger Enable-PSBreakpoint Enable-PSRemoting Enable-PSSessionConfiguration Enable-ScheduledJob Enable-WSManCredSSP Enter-PSSession Exit-PSSession Export-Alias Export-Clixml Export-Console Export-Counter Export-Csv Export-FormatData Export-ModuleMember Export-PSSession ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-ComputerRestorePoint Get-Content Get-ControlPanelItem Get-Counter Get-Credential Get-Culture Get-Date Get-Event Get-EventLog Get-EventSubscriber Get-ExecutionPolicy Get-FormatData Get-Host Get-HotFix Get-Help Get-History Get-IseSnippet Get-Item Get-ItemProperty Get-Job Get-JobTrigger Get-Location Get-Member Get-Module Get-PfxCertificate Get-Process Get-PSBreakpoint Get-PSCallStack Get-PSDrive Get-PSProvider Get-PSSession Get-PSSessionConfiguration Get-PSSnapin Get-Random Get-ScheduledJob Get-ScheduledJobOption Get-Service Get-TraceSource Get-Transaction Get-TypeData Get-UICulture Get-Unique Get-Variable Get-Verb Get-WinEvent Get-WmiObject Get-WSManCredSSP Get-WSManInstance Group-Object Import-Alias Import-Clixml Import-Counter Import-Csv Import-IseSnippet Import-LocalizedData Import-PSSession Import-Module Invoke-AsWorkflow Invoke-Command Invoke-Expression Invoke-History Invoke-Item Invoke-RestMethod Invoke-WebRequest Invoke-WmiMethod Invoke-WSManAction Join-Path Limit-EventLog Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Event New-EventLog New-IseSnippet New-Item New-ItemProperty New-JobTrigger New-Object New-Module New-ModuleManifest New-PSDrive New-PSSession New-PSSessionConfigurationFile New-PSSessionOption New-PSTransportOption New-PSWorkflowExecutionOption New-PSWorkflowSession New-ScheduledJobOption New-Service New-TimeSpan New-Variable New-WebServiceProxy New-WinEvent New-WSManInstance New-WSManSessionOption Out-Default Out-File Out-GridView Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Receive-Job Register-EngineEvent Register-ObjectEvent Register-PSSessionConfiguration Register-ScheduledJob Register-WmiEvent Remove-Computer Remove-Event Remove-EventLog Remove-Item Remove-ItemProperty Remove-Job Remove-JobTrigger Remove-Module Remove-PSBreakpoint Remove-PSDrive Remove-PSSession Remove-PSSnapin Remove-TypeData Remove-Variable Remove-WmiObject Remove-WSManInstance Rename-Computer Rename-Item Rename-ItemProperty Reset-ComputerMachinePassword Resolve-Path Restart-Computer Restart-Service Restore-Computer Resume-Job Resume-Service Save-Help Select-Object Select-String Select-Xml Send-MailMessage Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-JobTrigger Set-Location Set-PSBreakpoint Set-PSDebug Set-PSSessionConfiguration Set-ScheduledJob Set-ScheduledJobOption Set-Service Set-StrictMode Set-TraceSource Set-Variable Set-WmiInstance Set-WSManInstance Set-WSManQuickConfig Show-Command Show-ControlPanelItem Show-EventLog Sort-Object Split-Path Start-Job Start-Process Start-Service Start-Sleep Start-Transaction Start-Transcript Stop-Computer Stop-Job Stop-Process Stop-Service Stop-Transcript Suspend-Job Suspend-Service Tee-Object Test-ComputerSecureChannel Test-Connection Test-ModuleManifest Test-Path Test-PSSessionConfigurationFile Trace-Command Unblock-File Undo-Transaction Unregister-Event Unregister-PSSessionConfiguration Unregister-ScheduledJob Update-FormatData Update-Help Update-List Update-TypeData Use-Transaction Wait-Event Wait-Job Wait-Process Where-Object Write-Debug Write-Error Write-EventLog Write-Host Write-Output Write-Progress Write-Verbose Write-Warning Add-MDTPersistentDrive Disable-MDTMonitorService Enable-MDTMonitorService Get-MDTDeploymentShareStatistics Get-MDTMonitorData Get-MDTOperatingSystemCatalog Get-MDTPersistentDrive Import-MDTApplication Import-MDTDriver Import-MDTOperatingSystem Import-MDTPackage Import-MDTTaskSequence New-MDTDatabase Remove-MDTMonitorData Remove-MDTPersistentDrive Restore-MDTPersistentDrive Set-MDTMonitorData Test-MDTDeploymentShare Test-MDTMonitorData Update-MDTDatabaseSchema Update-MDTDeploymentShare Update-MDTLinkedDS Update-MDTMedia Update-MDTMedia Add-VamtProductKey Export-VamtData Find-VamtManagedMachine Get-VamtConfirmationId Get-VamtProduct Get-VamtProductKey Import-VamtData Initialize-VamtData Install-VamtConfirmationId Install-VamtProductActivation Install-VamtProductKey Update-VamtProduct',
      nomarkup: '-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace'
    },
    contains: [BACKTICK_ESCAPE, hljs.NUMBER_MODE, QUOTE_STRING, APOS_STRING, LITERAL, VAR, PS_COMMENT]
  };
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: {
      keyword: 'BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color ' + 'double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject ' + 'Object StringDict StringList Table TableRow XML ' +
      // Java keywords
      'false synchronized int abstract float private char boolean static null if const ' + 'for true while long throw strictfp finally protected import native final return void ' + 'enum else break transient new catch instanceof byte super volatile case assert short ' + 'package default double public try this switch continue throws protected public private',
      literal: 'P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI',
      title: 'setup draw',
      built_in: 'displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key ' + 'keyCode pixels focused frameCount frameRate height width ' + 'size createGraphics beginDraw createShape loadShape PShape arc ellipse line point ' + 'quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint ' + 'curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex ' + 'endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap ' + 'strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased ' + 'mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour ' + 'millis minute month second year background clear colorMode fill noFill noStroke stroke alpha ' + 'blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY ' + 'screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ' + 'ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle ' + 'pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf ' + 'nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset ' + 'box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings ' + 'loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput ' + 'createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings ' + 'saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale ' + 'shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal ' + 'pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap ' + 'blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont ' + 'loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil ' + 'constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees ' + 'radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed'
    },
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE]
  };
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    contains: [hljs.C_NUMBER_MODE, {
      begin: '[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}', end: ':',
      excludeEnd: true
    }, {
      begin: '(ncalls|tottime|cumtime)', end: '$',
      keywords: 'ncalls tottime|10 cumtime|10 filename',
      relevance: 10
    }, {
      begin: 'function calls', end: '$',
      contains: [hljs.C_NUMBER_MODE],
      relevance: 10
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, {
      className: 'string',
      begin: '\\(', end: '\\)$',
      excludeBegin: true, excludeEnd: true,
      relevance: 0
    }]
  };
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {

  var ATOM = {

    begin: /[a-z][A-Za-z0-9_]*/,
    relevance: 0
  };

  var VAR = {

    className: 'symbol',
    variants: [{ begin: /[A-Z][a-zA-Z0-9_]*/ }, { begin: /_[A-Za-z0-9_]*/ }],
    relevance: 0
  };

  var PARENTED = {

    begin: /\(/,
    end: /\)/,
    relevance: 0
  };

  var LIST = {

    begin: /\[/,
    end: /\]/
  };

  var LINE_COMMENT = {

    className: 'comment',
    begin: /%/, end: /$/,
    contains: [hljs.PHRASAL_WORDS_MODE]
  };

  var BACKTICK_STRING = {

    className: 'string',
    begin: /`/, end: /`/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };

  var CHAR_CODE = {

    className: 'string', // 0'a etc.
    begin: /0\'(\\\'|.)/
  };

  var SPACE_CODE = {

    className: 'string',
    begin: /0\'\\s/ // 0'\s
  };

  var PRED_OP = { // relevance booster
    begin: /:-/
  };

  var inner = [ATOM, VAR, PARENTED, PRED_OP, LIST, LINE_COMMENT, hljs.C_BLOCK_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, BACKTICK_STRING, CHAR_CODE, SPACE_CODE, hljs.C_NUMBER_MODE];

  PARENTED.contains = inner;
  LIST.contains = inner;

  return {
    contains: inner.concat([{ begin: /\.$/ // relevance booster
    }])
  };
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: {
      keyword: 'package import option optional required repeated group',
      built_in: 'double float int32 int64 uint32 uint64 sint32 sint64 ' + 'fixed32 fixed64 sfixed32 sfixed64 bool string bytes',
      literal: 'true false'
    },
    contains: [hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE, hljs.C_LINE_COMMENT_MODE, {
      className: 'class',
      beginKeywords: 'message enum service', end: /\{/,
      illegal: /\n/,
      contains: [hljs.inherit(hljs.TITLE_MODE, {
        starts: { endsWithParent: true, excludeEnd: true // hack: eating everything after the first title
        } })]
    }, {
      className: 'function',
      beginKeywords: 'rpc',
      end: /;/, excludeEnd: true,
      keywords: 'rpc returns'
    }, {
      begin: /^\s*[A-Z_]+/,
      end: /\s*=/, excludeEnd: true
    }]
  };
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {

  var PUPPET_KEYWORDS = {
    keyword:
    /* language keywords */
    'and case default else elsif false if in import enherits node or true undef unless main settings $string ',
    literal:
    /* metaparameters */
    'alias audit before loglevel noop require subscribe tag ' +
    /* normal attributes */
    'owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check ' + 'en_address ip_address realname command environment hour monute month monthday special target weekday ' + 'creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore ' + 'links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source ' + 'souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ' + 'ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel ' + 'native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options ' + 'device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use ' + 'message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform ' + 'responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running ' + 'start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age ' + 'password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled ' + 'enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist ' + 'priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey ' + 'sslverify mounted',
    built_in:
    /* core facts */
    'architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers ' + 'domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ' + 'ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion ' + 'kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease ' + 'lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major ' + 'macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease ' + 'operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion ' + 'rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced ' + 'selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime ' + 'uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version'
  };

  var COMMENT = hljs.COMMENT('#', '$');

  var IDENT_RE = '([A-Za-z_]|::)(\\w|::)*';

  var TITLE = hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE });

  var VARIABLE = { className: 'variable', begin: '\\$' + IDENT_RE };

  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, VARIABLE],
    variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }]
  };

  return {
    aliases: ['pp'],
    contains: [COMMENT, VARIABLE, STRING, {
      beginKeywords: 'class', end: '\\{|;',
      illegal: /=/,
      contains: [TITLE, COMMENT]
    }, {
      beginKeywords: 'define', end: /\{/,
      contains: [{
        className: 'section', begin: hljs.IDENT_RE, endsParent: true
      }]
    }, {
      begin: hljs.IDENT_RE + '\\s+\\{', returnBegin: true,
      end: /\S/,
      contains: [{
        className: 'keyword',
        begin: hljs.IDENT_RE
      }, {
        begin: /\{/, end: /\}/,
        keywords: PUPPET_KEYWORDS,
        relevance: 0,
        contains: [STRING, COMMENT, {
          begin: '[a-zA-Z_]+\\s*=>',
          returnBegin: true, end: '=>',
          contains: [{
            className: 'attr',
            begin: hljs.IDENT_RE
          }]
        }, {
          className: 'number',
          begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
          relevance: 0
        }, VARIABLE]
      }],
      relevance: 0
    }]
  };
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = // Base deafult colors in PB IDE: background: #FFFFDF; foreground: #000000;

function (hljs) {
  var STRINGS = { // PB IDE color: #0080FF (Azure Radiance)
    className: 'string',
    begin: '(~)?"', end: '"',
    illegal: '\\n'
  };
  var CONSTANTS = { // PB IDE color: #924B72 (Cannon Pink)
    //  "#" + a letter or underscore + letters, digits or underscores + (optional) "$"
    className: 'symbol',
    begin: '#[a-zA-Z_]\\w*\\$?'
  };

  return {
    aliases: ['pb', 'pbi'],
    keywords: // PB IDE color: #006666 (Blue Stone) + Bold
    // The following keywords list was taken and adapted from GuShH's PureBasic language file for GeSHi...
    'And As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerEndIf CompilerEndSelect ' + 'CompilerError CompilerIf CompilerSelect Continue Data DataSection EndDataSection Debug DebugLevel ' + 'Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM ' + 'EnableDebugger EnableExplicit End EndEnumeration EndIf EndImport EndInterface EndMacro EndProcedure ' + 'EndSelect EndStructure EndStructureUnion EndWith Enumeration Extends FakeReturn For Next ForEach ' + 'ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface Macro ' + 'NewList Not Or ProcedureReturn Protected Prototype ' + 'PrototypeC Read ReDim Repeat Until Restore Return Select Shared Static Step Structure StructureUnion ' + 'Swap To Wend While With XIncludeFile XOr ' + 'Procedure ProcedureC ProcedureCDLL ProcedureDLL Declare DeclareC DeclareCDLL DeclareDLL',
    contains: [
    // COMMENTS | PB IDE color: #00AAAA (Persian Green)
    hljs.COMMENT(';', '$', { relevance: 0 }), { // PROCEDURES DEFINITIONS
      className: 'function',
      begin: '\\b(Procedure|Declare)(C|CDLL|DLL)?\\b',
      end: '\\(',
      excludeEnd: true,
      returnBegin: true,
      contains: [{ // PROCEDURE KEYWORDS | PB IDE color: #006666 (Blue Stone) + Bold
        className: 'keyword',
        begin: '(Procedure|Declare)(C|CDLL|DLL)?',
        excludeEnd: true
      }, { // PROCEDURE RETURN TYPE SETTING | PB IDE color: #000000 (Black)
        className: 'type',
        begin: '\\.\\w*'
        // end: ' ',
      }, hljs.UNDERSCORE_TITLE_MODE // PROCEDURE NAME | PB IDE color: #006666 (Blue Stone)
      ]
    }, STRINGS, CONSTANTS]
  };
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    keyword: 'and elif is global as in if from raise for except finally print import pass return ' + 'exec else break not with class assert yield try while continue del or def lambda ' + 'async await nonlocal|10 None True False',
    built_in: 'Ellipsis NotImplemented'
  };
  var PROMPT = {
    className: 'meta', begin: /^(>>>|\.\.\.) /
  };
  var SUBST = {
    className: 'subst',
    begin: /\{/, end: /\}/,
    keywords: KEYWORDS,
    illegal: /#/
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [{
      begin: /(u|b)?r?'''/, end: /'''/,
      contains: [PROMPT],
      relevance: 10
    }, {
      begin: /(u|b)?r?"""/, end: /"""/,
      contains: [PROMPT],
      relevance: 10
    }, {
      begin: /(fr|rf|f)'''/, end: /'''/,
      contains: [PROMPT, SUBST]
    }, {
      begin: /(fr|rf|f)"""/, end: /"""/,
      contains: [PROMPT, SUBST]
    }, {
      begin: /(u|r|ur)'/, end: /'/,
      relevance: 10
    }, {
      begin: /(u|r|ur)"/, end: /"/,
      relevance: 10
    }, {
      begin: /(b|br)'/, end: /'/
    }, {
      begin: /(b|br)"/, end: /"/
    }, {
      begin: /(fr|rf|f)'/, end: /'/,
      contains: [SUBST]
    }, {
      begin: /(fr|rf|f)"/, end: /"/,
      contains: [SUBST]
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
  };
  var NUMBER = {
    className: 'number', relevance: 0,
    variants: [{ begin: hljs.BINARY_NUMBER_RE + '[lLjJ]?' }, { begin: '\\b(0o[0-7]+)[lLjJ]?' }, { begin: hljs.C_NUMBER_RE + '[lLjJ]?' }]
  };
  var PARAMS = {
    className: 'params',
    begin: /\(/, end: /\)/,
    contains: ['self', PROMPT, NUMBER, STRING]
  };
  SUBST.contains = [STRING, NUMBER, PROMPT];
  return {
    aliases: ['py', 'gyp'],
    keywords: KEYWORDS,
    illegal: /(<\/|->|\?)|=>/,
    contains: [PROMPT, NUMBER, STRING, hljs.HASH_COMMENT_MODE, {
      variants: [{ className: 'function', beginKeywords: 'def' }, { className: 'class', beginKeywords: 'class' }],
      end: /:/,
      illegal: /[${=;\n,]/,
      contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS, {
        begin: /->/, endsWithParent: true,
        keywords: 'None'
      }]
    }, {
      className: 'meta',
      begin: /^[\t ]*@/, end: /$/
    }, {
      begin: /\b(print|exec)\(/ // don’t highlight keywords-turned-functions in Python 3
    }]
  };
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var Q_KEYWORDS = {
    keyword: 'do while select delete by update from',
    literal: '0b 1b',
    built_in: 'neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum',
    type: '`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid'
  };
  return {
    aliases: ['k', 'kdb'],
    keywords: Q_KEYWORDS,
    lexemes: /(`?)[A-Za-z0-9_]+\b/,
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE]
  };
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    keyword: 'in of on if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const export super debugger as async await import',
    literal: 'true false null undefined NaN Infinity',
    built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' + 'Behavior bool color coordinate date double enumeration font geocircle georectangle ' + 'geoshape int list matrix4x4 parent point quaternion real rect ' + 'size string url variant vector2d vector3d vector4d' + 'Promise'
  };

  var QML_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9\\._]*';

  // Isolate property statements. Ends at a :, =, ;, ,, a comment or end of line.
  // Use property class.
  var PROPERTY = {
    className: 'keyword',
    begin: '\\bproperty\\b',
    starts: {
      className: 'string',
      end: '(:|=|;|,|//|/\\*|$)',
      returnEnd: true
    }
  };

  // Isolate signal statements. Ends at a ) a comment or end of line.
  // Use property class.
  var SIGNAL = {
    className: 'keyword',
    begin: '\\bsignal\\b',
    starts: {
      className: 'string',
      end: '(\\(|:|=|;|,|//|/\\*|$)',
      returnEnd: true
    }
  };

  // id: is special in QML. When we see id: we want to mark the id: as attribute and
  // emphasize the token following.
  var ID_ID = {
    className: 'attribute',
    begin: '\\bid\\s*:',
    starts: {
      className: 'string',
      end: QML_IDENT_RE,
      returnEnd: false
    }
  };

  // Find QML object attribute. An attribute is a QML identifier followed by :.
  // Unfortunately it's hard to know where it ends, as it may contain scalars,
  // objects, object definitions, or javascript. The true end is either when the parent
  // ends or the next attribute is detected.
  var QML_ATTRIBUTE = {
    begin: QML_IDENT_RE + '\\s*:',
    returnBegin: true,
    contains: [{
      className: 'attribute',
      begin: QML_IDENT_RE,
      end: '\\s*:',
      excludeEnd: true,
      relevance: 0
    }],
    relevance: 0
  };

  // Find QML object. A QML object is a QML identifier followed by { and ends at the matching }.
  // All we really care about is finding IDENT followed by { and just mark up the IDENT and ignore the {.
  var QML_OBJECT = {
    begin: QML_IDENT_RE + '\\s*{', end: '{',
    returnBegin: true,
    relevance: 0,
    contains: [hljs.inherit(hljs.TITLE_MODE, { begin: QML_IDENT_RE })]
  };

  return {
    aliases: ['qt'],
    case_insensitive: false,
    keywords: KEYWORDS,
    contains: [{
      className: 'meta',
      begin: /^\s*['"]use (strict|asm)['"]/
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, { // template string
      className: 'string',
      begin: '`', end: '`',
      contains: [hljs.BACKSLASH_ESCAPE, {
        className: 'subst',
        begin: '\\$\\{', end: '\\}'
      }]
    }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
      className: 'number',
      variants: [{ begin: '\\b(0[bB][01]+)' }, { begin: '\\b(0[oO][0-7]+)' }, { begin: hljs.C_NUMBER_RE }],
      relevance: 0
    }, { // "value" container
      begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
      keywords: 'return throw case',
      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, { // E4X / JSX
        begin: /</, end: />\s*[);\]]/,
        relevance: 0,
        subLanguage: 'xml'
      }],
      relevance: 0
    }, SIGNAL, PROPERTY, {
      className: 'function',
      beginKeywords: 'function', end: /\{/, excludeEnd: true,
      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/ }), {
        className: 'params',
        begin: /\(/, end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
      }],
      illegal: /\[|%/
    }, {
      begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
    }, ID_ID, QML_ATTRIBUTE, QML_OBJECT],
    illegal: /#/
  };
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var IDENT_RE = '([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*';

  return {
    contains: [hljs.HASH_COMMENT_MODE, {
      begin: IDENT_RE,
      lexemes: IDENT_RE,
      keywords: {
        keyword: 'function if in break next repeat else for return switch while try tryCatch ' + 'stop warning require library attach detach source setMethod setGeneric ' + 'setGroupGeneric setClass ...',
        literal: 'NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 ' + 'NA_complex_|10'
      },
      relevance: 0
    }, {
      // hex value
      className: 'number',
      begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
      relevance: 0
    }, {
      // explicit integer
      className: 'number',
      begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
      relevance: 0
    }, {
      // number with trailing decimal
      className: 'number',
      begin: "\\d+\\.(?!\\d)(?:i\\b)?",
      relevance: 0
    }, {
      // number
      className: 'number',
      begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
      relevance: 0
    }, {
      // number with leading decimal
      className: 'number',
      begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
      relevance: 0
    }, {
      // escaped identifier
      begin: '`',
      end: '`',
      relevance: 0
    }, {
      className: 'string',
      contains: [hljs.BACKSLASH_ESCAPE],
      variants: [{ begin: '"', end: '"' }, { begin: "'", end: "'" }]
    }]
  };
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: 'ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis ' + 'Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone ' + 'CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail ' + 'DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format ' + 'FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry ' + 'Hider Hyperboloid Identity Illuminate Imager Interior LightSource ' + 'MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte ' + 'MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option ' + 'Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples ' + 'PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection ' + 'Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ' + 'ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere ' + 'SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd ' + 'TransformPoints Translate TrimCurve WorldBegin WorldEnd',
    illegal: '</',
    contains: [hljs.HASH_COMMENT_MODE, hljs.C_NUMBER_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
  };
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var IDENTIFIER = '[a-zA-Z-_][^\\n{]+\\{';

  var PROPERTY = {
    className: 'attribute',
    begin: /[a-zA-Z-_]+/, end: /\s*:/, excludeEnd: true,
    starts: {
      end: ';',
      relevance: 0,
      contains: [{
        className: 'variable',
        begin: /\.[a-zA-Z-_]+/
      }, {
        className: 'keyword',
        begin: /\(optional\)/
      }]
    }
  };

  return {
    aliases: ['graph', 'instances'],
    case_insensitive: true,
    keywords: 'import',
    contains: [
    // Facet sections
    {
      begin: '^facet ' + IDENTIFIER,
      end: '}',
      keywords: 'facet',
      contains: [PROPERTY, hljs.HASH_COMMENT_MODE]
    },

    // Instance sections
    {
      begin: '^\\s*instance of ' + IDENTIFIER,
      end: '}',
      keywords: 'name count channels instance-data instance-state instance of',
      illegal: /\S/,
      contains: ['self', PROPERTY, hljs.HASH_COMMENT_MODE]
    },

    // Component sections
    {
      begin: '^' + IDENTIFIER,
      end: '}',
      contains: [PROPERTY, hljs.HASH_COMMENT_MODE]
    },

    // Comments
    hljs.HASH_COMMENT_MODE]
  };
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = // Colors from RouterOS terminal:
//   green        - #0E9A00
//   teal         - #0C9A9A
//   purple       - #99069A
//   light-brown  - #9A9900

function (hljs) {

  var STATEMENTS = 'foreach do while for if from to step else on-error and or not in';

  // Global commands: Every global command should start with ":" token, otherwise it will be treated as variable.
  var GLOBAL_COMMANDS = 'global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime';

  // Common commands: Following commands available from most sub-menus:
  var COMMON_COMMANDS = 'add remove enable disable set get print export edit find run debug error info warning';

  var LITERALS = 'true false yes no nothing nil null';

  var OBJECTS = 'traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firewall firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw';

  // print parameters
  // Several parameters are available for print command:
  // ToDo: var PARAMETERS_PRINT = 'append as-value brief detail count-only file follow follow-only from interval terse value-list without-paging where info';
  // ToDo: var OPERATORS = '&& and ! not || or in ~ ^ & << >> + - * /';
  // ToDo: var TYPES = 'num number bool boolean str string ip ip6-prefix id time array';
  // ToDo: The following tokens serve as delimiters in the grammar: ()  []  {}  :   ;   $   / 

  var VAR_PREFIX = 'global local set for foreach';

  var VAR = {
    className: 'variable',
    variants: [{ begin: /\$[\w\d#@][\w\d_]*/ }, { begin: /\$\{(.*?)}/ }]
  };

  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [hljs.BACKSLASH_ESCAPE, VAR, {
      className: 'variable',
      begin: /\$\(/, end: /\)/,
      contains: [hljs.BACKSLASH_ESCAPE]
    }]
  };

  var APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };

  var IPADDR = '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b';
  var IPADDR_wBITMASK = IPADDR + '/(3[0-2]|[1-2][0-9]|\\d)';
  //////////////////////////////////////////////////////////////////////
  return {
    aliases: ['routeros', 'mikrotik'],
    case_insensitive: true,
    lexemes: /:?[\w-]+/,
    keywords: {
      literal: LITERALS,
      keyword: STATEMENTS + ' :' + STATEMENTS.split(' ').join(' :') + ' :' + GLOBAL_COMMANDS.split(' ').join(' :')
    },
    contains: [{ // недопустимые конструкции
      variants: [{ begin: /^@/, end: /$/ }, // dns
      { begin: /\/\*/, end: /\*\// }, // -- comment
      { begin: /%%/, end: /$/ }, // -- comment
      { begin: /^'/, end: /$/ }, // Monkey one line comment
      { begin: /^\s*\/[\w-]+=/, end: /$/ }, // jboss-cli
      { begin: /\/\//, end: /$/ }, // Stan comment
      { begin: /^\[\</, end: /\>\]$/ }, // F# class declaration?
      { begin: /<\//, end: />/ }, // HTML tags
      { begin: /^facet /, end: /\}/ }, // roboconf - лютый костыль )))
      { begin: '^1\\.\\.(\\d+)$', end: /$/ }],
      illegal: /./
    }, hljs.COMMENT('^#', '$'), QUOTE_STRING, APOS_STRING, VAR, { // attribute=value
      begin: /[\w-]+\=([^\s\{\}\[\]\(\)]+)/,
      relevance: 0,
      returnBegin: true,
      contains: [{
        className: 'attribute',
        begin: /[^=]+/
      }, {
        begin: /=/,
        endsWithParent: true,
        relevance: 0,
        contains: [QUOTE_STRING, APOS_STRING, VAR, {
          className: 'literal',
          begin: '\\b(' + LITERALS.split(' ').join('|') + ')\\b'
        },
        /*{
          // IPv4 addresses and subnets
          className: 'number',
          variants: [
            {begin: IPADDR_wBITMASK+'(,'+IPADDR_wBITMASK+')*'}, //192.168.0.0/24,1.2.3.0/24
            {begin: IPADDR+'-'+IPADDR},       // 192.168.0.1-192.168.0.3
            {begin: IPADDR+'(,'+IPADDR+')*'}, // 192.168.0.1,192.168.0.34,192.168.24.1,192.168.0.1
          ]
        }, // */
        /*{
          // MAC addresses and DHCP Client IDs
          className: 'number',
          begin: /\b(1:)?([0-9A-Fa-f]{1,2}[:-]){5}([0-9A-Fa-f]){1,2}\b/,
        }, //*/
        {
          // Не форматировать не классифицированные значения. Необходимо для исключения подсветки значений как built_in.
          // className: 'number',  
          begin: /("[^"]*"|[^\s\{\}\[\]]+)/
        }] //*/
      }]
    }, //*/
    {
      // HEX values
      className: 'number',
      begin: /\*[0-9a-fA-F]+/
    }, //*/

    {
      begin: '\\b(' + COMMON_COMMANDS.split(' ').join('|') + ')([\\s\[\(]|\])',
      returnBegin: true,
      contains: [{
        className: 'builtin-name', //'function',
        begin: /\w+/
      }]
    }, {
      className: 'built_in',
      variants: [{ begin: '(\\.\\./|/|\\s)((' + OBJECTS.split(' ').join('|') + ');?\\s)+', relevance: 10 }, { begin: /\.\./ }]
    }]
  };
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: {
      keyword: 'float color point normal vector matrix while for if do return else break extern continue',
      built_in: 'abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise ' + 'clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp ' + 'faceforward filterstep floor format fresnel incident length lightsource log match ' + 'max min mod noise normalize ntransform opposite option phong pnoise pow printf ' + 'ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp ' + 'setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan ' + 'texture textureinfo trace transform vtransform xcomp ycomp zcomp'
    },
    illegal: '</',
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_NUMBER_MODE, {
      className: 'meta',
      begin: '#', end: '$'
    }, {
      className: 'class',
      beginKeywords: 'surface displacement light volume imager', end: '\\('
    }, {
      beginKeywords: 'illuminate illuminance gather', end: '\\('
    }]
  };
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: {
      keyword: 'BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE ' + 'INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 ' + 'INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 ' + 'INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 ' + 'INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 ' + 'INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 ' + 'INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 ' + 'INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 ' + 'INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 ' + 'INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 ' + 'INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 ' + 'INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 ' + 'INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 ' + 'INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 ' + 'INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 ' + 'MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER ' + 'OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE ' + 'NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH ' + 'IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND ' + 'UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ' + 'ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE ' + 'GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE ' + 'SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING ' + 'DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF ' + 'MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY ' + 'YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE ' + 'COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR ' + 'READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ' + 'ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE ' + 'EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE ' + 'SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL ' + 'COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN ' + 'MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING ' + 'FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM ' + 'NUMDAYS READ_DATE STAGING',
      built_in: 'IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML ' + 'DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT ' + 'DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE ' + 'DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT ' + 'DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME'
    },
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, {
      className: 'literal',
      variants: [{ begin: '#\\s+[a-zA-Z\\ \\.]*', relevance: 0 }, // looks like #-comment
      { begin: '#[a-zA-Z\\ \\.]+' }]
    }]
  };
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var NUM_SUFFIX = '([ui](8|16|32|64|128|size)|f(32|64))\?';
  var KEYWORDS = 'alignof as be box break const continue crate do else enum extern ' + 'false fn for if impl in let loop match mod mut offsetof once priv ' + 'proc pub pure ref return self Self sizeof static struct super trait true ' + 'type typeof unsafe unsized use virtual while where yield move default';
  var BUILTINS =
  // functions
  'drop ' +
  // types
  'i8 i16 i32 i64 i128 isize ' + 'u8 u16 u32 u64 u128 usize ' + 'f32 f64 ' + 'str char bool ' + 'Box Option Result String Vec ' +
  // traits
  'Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug ' + 'PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator ' + 'Extend IntoIterator DoubleEndedIterator ExactSizeIterator ' + 'SliceConcatExt ToString ' +
  // macros
  'assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! ' + 'debug_assert! debug_assert_eq! env! panic! file! format! format_args! ' + 'include_bin! include_str! line! local_data_key! module_path! ' + 'option_env! print! println! select! stringify! try! unimplemented! ' + 'unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!';
  return {
    aliases: ['rs'],
    keywords: {
      keyword: KEYWORDS,
      literal: 'true false Some None Ok Err',
      built_in: BUILTINS
    },
    lexemes: hljs.IDENT_RE + '!?',
    illegal: '</',
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.COMMENT('/\\*', '\\*/', { contains: ['self'] }), hljs.inherit(hljs.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }), {
      className: 'string',
      variants: [{ begin: /r(#*)"(.|\n)*?"\1(?!#)/ }, { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }]
    }, {
      className: 'symbol',
      begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
    }, {
      className: 'number',
      variants: [{ begin: '\\b0b([01_]+)' + NUM_SUFFIX }, { begin: '\\b0o([0-7_]+)' + NUM_SUFFIX }, { begin: '\\b0x([A-Fa-f0-9_]+)' + NUM_SUFFIX }, { begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' + NUM_SUFFIX
      }],
      relevance: 0
    }, {
      className: 'function',
      beginKeywords: 'fn', end: '(\\(|<)', excludeEnd: true,
      contains: [hljs.UNDERSCORE_TITLE_MODE]
    }, {
      className: 'meta',
      begin: '#\\!?\\[', end: '\\]',
      contains: [{
        className: 'meta-string',
        begin: /"/, end: /"/
      }]
    }, {
      className: 'class',
      beginKeywords: 'type', end: ';',
      contains: [hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, { endsParent: true })],
      illegal: '\\S'
    }, {
      className: 'class',
      beginKeywords: 'trait enum struct union', end: '{',
      contains: [hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, { endsParent: true })],
      illegal: '[\\w\\d]'
    }, {
      begin: hljs.IDENT_RE + '::',
      keywords: { built_in: BUILTINS }
    }, {
      begin: '->'
    }]
  };
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {

  var ANNOTATION = { className: 'meta', begin: '@[A-Za-z]+' };

  // used in strings for escaping/interpolation/substitution
  var SUBST = {
    className: 'subst',
    variants: [{ begin: '\\$[A-Za-z0-9_]+' }, { begin: '\\${', end: '}' }]
  };

  var STRING = {
    className: 'string',
    variants: [{
      begin: '"', end: '"',
      illegal: '\\n',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      begin: '"""', end: '"""',
      relevance: 10
    }, {
      begin: '[a-z]+"', end: '"',
      illegal: '\\n',
      contains: [hljs.BACKSLASH_ESCAPE, SUBST]
    }, {
      className: 'string',
      begin: '[a-z]+"""', end: '"""',
      contains: [SUBST],
      relevance: 10
    }]

  };

  var SYMBOL = {
    className: 'symbol',
    begin: '\'\\w[\\w\\d_]*(?!\')'
  };

  var TYPE = {
    className: 'type',
    begin: '\\b[A-Z][A-Za-z0-9_]*',
    relevance: 0
  };

  var NAME = {
    className: 'title',
    begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
    relevance: 0
  };

  var CLASS = {
    className: 'class',
    beginKeywords: 'class object trait type',
    end: /[:={\[\n;]/,
    excludeEnd: true,
    contains: [{
      beginKeywords: 'extends with',
      relevance: 10
    }, {
      begin: /\[/,
      end: /\]/,
      excludeBegin: true,
      excludeEnd: true,
      relevance: 0,
      contains: [TYPE]
    }, {
      className: 'params',
      begin: /\(/,
      end: /\)/,
      excludeBegin: true,
      excludeEnd: true,
      relevance: 0,
      contains: [TYPE]
    }, NAME]
  };

  var METHOD = {
    className: 'function',
    beginKeywords: 'def',
    end: /[:={\[(\n;]/,
    excludeEnd: true,
    contains: [NAME]
  };

  return {
    keywords: {
      literal: 'true false null',
      keyword: 'type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit'
    },
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRING, SYMBOL, TYPE, METHOD, CLASS, hljs.C_NUMBER_MODE, ANNOTATION]
  };
};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var SCHEME_IDENT_RE = '[^\\(\\)\\[\\]\\{\\}",\'`;#|\\\\\\s]+';
  var SCHEME_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+([./]\\d+)?';
  var SCHEME_COMPLEX_NUMBER_RE = SCHEME_SIMPLE_NUMBER_RE + '[+\\-]' + SCHEME_SIMPLE_NUMBER_RE + 'i';
  var BUILTINS = {
    'builtin-name': 'case-lambda call/cc class define-class exit-handler field import ' + 'inherit init-field interface let*-values let-values let/ec mixin ' + 'opt-lambda override protect provide public rename require ' + 'require-for-syntax syntax syntax-case syntax-error unit/sig unless ' + 'when with-syntax and begin call-with-current-continuation ' + 'call-with-input-file call-with-output-file case cond define ' + 'define-syntax delay do dynamic-wind else for-each if lambda let let* ' + 'let-syntax letrec letrec-syntax map or syntax-rules \' * + , ,@ - ... / ' + '; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan ' + 'boolean? caar cadr call-with-input-file call-with-output-file ' + 'call-with-values car cdddar cddddr cdr ceiling char->integer ' + 'char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? ' + 'char-downcase char-lower-case? char-numeric? char-ready? char-upcase ' + 'char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? ' + 'char? close-input-port close-output-port complex? cons cos ' + 'current-input-port current-output-port denominator display eof-object? ' + 'eq? equal? eqv? eval even? exact->inexact exact? exp expt floor ' + 'force gcd imag-part inexact->exact inexact? input-port? integer->char ' + 'integer? interaction-environment lcm length list list->string ' + 'list->vector list-ref list-tail list? load log magnitude make-polar ' + 'make-rectangular make-string make-vector max member memq memv min ' + 'modulo negative? newline not null-environment null? number->string ' + 'number? numerator odd? open-input-file open-output-file output-port? ' + 'pair? peek-char port? positive? procedure? quasiquote quote quotient ' + 'rational? rationalize read read-char real-part real? remainder reverse ' + 'round scheme-report-environment set! set-car! set-cdr! sin sqrt string ' + 'string->list string->number string->symbol string-append string-ci<=? ' + 'string-ci<? string-ci=? string-ci>=? string-ci>? string-copy ' + 'string-fill! string-length string-ref string-set! string<=? string<? ' + 'string=? string>=? string>? string? substring symbol->string symbol? ' + 'tan transcript-off transcript-on truncate values vector ' + 'vector->list vector-fill! vector-length vector-ref vector-set! ' + 'with-input-from-file with-output-to-file write write-char zero?'
  };

  var SHEBANG = {
    className: 'meta',
    begin: '^#!',
    end: '$'
  };

  var LITERAL = {
    className: 'literal',
    begin: '(#t|#f|#\\\\' + SCHEME_IDENT_RE + '|#\\\\.)'
  };

  var NUMBER = {
    className: 'number',
    variants: [{ begin: SCHEME_SIMPLE_NUMBER_RE, relevance: 0 }, { begin: SCHEME_COMPLEX_NUMBER_RE, relevance: 0 }, { begin: '#b[0-1]+(/[0-1]+)?' }, { begin: '#o[0-7]+(/[0-7]+)?' }, { begin: '#x[0-9a-f]+(/[0-9a-f]+)?' }]
  };

  var STRING = hljs.QUOTE_STRING_MODE;

  var REGULAR_EXPRESSION = {
    className: 'regexp',
    begin: '#[pr]x"',
    end: '[^\\\\]"'
  };

  var COMMENT_MODES = [hljs.COMMENT(';', '$', {
    relevance: 0
  }), hljs.COMMENT('#\\|', '\\|#')];

  var IDENT = {
    begin: SCHEME_IDENT_RE,
    relevance: 0
  };

  var QUOTED_IDENT = {
    className: 'symbol',
    begin: '\'' + SCHEME_IDENT_RE
  };

  var BODY = {
    endsWithParent: true,
    relevance: 0
  };

  var QUOTED_LIST = {
    variants: [{ begin: /'/ }, { begin: '`' }],
    contains: [{
      begin: '\\(', end: '\\)',
      contains: ['self', LITERAL, STRING, NUMBER, IDENT, QUOTED_IDENT]
    }]
  };

  var NAME = {
    className: 'name',
    begin: SCHEME_IDENT_RE,
    lexemes: SCHEME_IDENT_RE,
    keywords: BUILTINS
  };

  var LAMBDA = {
    begin: /lambda/, endsWithParent: true, returnBegin: true,
    contains: [NAME, {
      begin: /\(/, end: /\)/, endsParent: true,
      contains: [IDENT]
    }]
  };

  var LIST = {
    variants: [{ begin: '\\(', end: '\\)' }, { begin: '\\[', end: '\\]' }],
    contains: [LAMBDA, NAME, BODY]
  };

  BODY.contains = [LITERAL, NUMBER, STRING, IDENT, QUOTED_IDENT, QUOTED_LIST, LIST].concat(COMMENT_MODES);

  return {
    illegal: /\S/,
    contains: [SHEBANG, NUMBER, STRING, QUOTED_IDENT, QUOTED_LIST, LIST].concat(COMMENT_MODES)
  };
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {

  var COMMON_CONTAINS = [hljs.C_NUMBER_MODE, {
    className: 'string',
    begin: '\'|\"', end: '\'|\"',
    contains: [hljs.BACKSLASH_ESCAPE, { begin: '\'\'' }]
  }];

  return {
    aliases: ['sci'],
    lexemes: /%?\w+/,
    keywords: {
      keyword: 'abort break case clear catch continue do elseif else endfunction end for function ' + 'global if pause return resume select try then while',
      literal: '%f %F %t %T %pi %eps %inf %nan %e %i %z %s',
      built_in: // Scilab has more than 2000 functions. Just list the most commons
      'abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error ' + 'exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty ' + 'isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log ' + 'max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real ' + 'round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan ' + 'type typename warning zeros matrix'
    },
    illegal: '("|#|/\\*|\\s+/\\w+)',
    contains: [{
      className: 'function',
      beginKeywords: 'function', end: '$',
      contains: [hljs.UNDERSCORE_TITLE_MODE, {
        className: 'params',
        begin: '\\(', end: '\\)'
      }]
    }, {
      begin: '[a-zA-Z_][a-zA-Z_0-9]*(\'+[\\.\']*|[\\.\']+)', end: '',
      relevance: 0
    }, {
      begin: '\\[', end: '\\]\'*[\\.\']*',
      relevance: 0,
      contains: COMMON_CONTAINS
    }, hljs.COMMENT('//', '$')].concat(COMMON_CONTAINS)
  };
};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  var VARIABLE = {
    className: 'variable',
    begin: '(\\$' + IDENT_RE + ')\\b'
  };
  var HEXCOLOR = {
    className: 'number', begin: '#[0-9A-Fa-f]+'
  };
  var DEF_INTERNALS = {
    className: 'attribute',
    begin: '[A-Z\\_\\.\\-]+', end: ':',
    excludeEnd: true,
    illegal: '[^\\s]',
    starts: {
      endsWithParent: true, excludeEnd: true,
      contains: [HEXCOLOR, hljs.CSS_NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, hljs.C_BLOCK_COMMENT_MODE, {
        className: 'meta', begin: '!important'
      }]
    }
  };
  return {
    case_insensitive: true,
    illegal: '[=/|\']',
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
      className: 'selector-id', begin: '\\#[A-Za-z0-9_-]+',
      relevance: 0
    }, {
      className: 'selector-class', begin: '\\.[A-Za-z0-9_-]+',
      relevance: 0
    }, {
      className: 'selector-attr', begin: '\\[', end: '\\]',
      illegal: '$'
    }, {
      className: 'selector-tag', // begin: IDENT_RE, end: '[,|\\s]'
      begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
      relevance: 0
    }, {
      begin: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
    }, {
      begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
    }, VARIABLE, {
      className: 'attribute',
      begin: '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
      illegal: '[^\\s]'
    }, {
      begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
    }, {
      begin: ':', end: ';',
      contains: [VARIABLE, HEXCOLOR, hljs.CSS_NUMBER_MODE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, {
        className: 'meta', begin: '!important'
      }]
    }, {
      begin: '@', end: '[{;]',
      keywords: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
      contains: [VARIABLE, hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE, HEXCOLOR, hljs.CSS_NUMBER_MODE, {
        begin: '\\s[A-Za-z0-9_.-]+',
        relevance: 0
      }]
    }]
  };
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['console'],
    contains: [{
      className: 'meta',
      begin: '^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]',
      starts: {
        end: '$', subLanguage: 'bash'
      }
    }]
  };
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var smali_instr_low_prio = ['add', 'and', 'cmp', 'cmpg', 'cmpl', 'const', 'div', 'double', 'float', 'goto', 'if', 'int', 'long', 'move', 'mul', 'neg', 'new', 'nop', 'not', 'or', 'rem', 'return', 'shl', 'shr', 'sput', 'sub', 'throw', 'ushr', 'xor'];
  var smali_instr_high_prio = ['aget', 'aput', 'array', 'check', 'execute', 'fill', 'filled', 'goto/16', 'goto/32', 'iget', 'instance', 'invoke', 'iput', 'monitor', 'packed', 'sget', 'sparse'];
  var smali_keywords = ['transient', 'constructor', 'abstract', 'final', 'synthetic', 'public', 'private', 'protected', 'static', 'bridge', 'system'];
  return {
    aliases: ['smali'],
    contains: [{
      className: 'string',
      begin: '"', end: '"',
      relevance: 0
    }, hljs.COMMENT('#', '$', {
      relevance: 0
    }), {
      className: 'keyword',
      variants: [{ begin: '\\s*\\.end\\s[a-zA-Z0-9]*' }, { begin: '^[ ]*\\.[a-zA-Z]*', relevance: 0 }, { begin: '\\s:[a-zA-Z_0-9]*', relevance: 0 }, { begin: '\\s(' + smali_keywords.join('|') + ')' }]
    }, {
      className: 'built_in',
      variants: [{
        begin: '\\s(' + smali_instr_low_prio.join('|') + ')\\s'
      }, {
        begin: '\\s(' + smali_instr_low_prio.join('|') + ')((\\-|/)[a-zA-Z0-9]+)+\\s',
        relevance: 10
      }, {
        begin: '\\s(' + smali_instr_high_prio.join('|') + ')((\\-|/)[a-zA-Z0-9]+)*\\s',
        relevance: 10
      }]
    }, {
      className: 'class',
      begin: 'L[^\(;:\n]*;',
      relevance: 0
    }, {
      begin: '[vp][0-9]+'
    }]
  };
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';
  var CHAR = {
    className: 'string',
    begin: '\\$.{1}'
  };
  var SYMBOL = {
    className: 'symbol',
    begin: '#' + hljs.UNDERSCORE_IDENT_RE
  };
  return {
    aliases: ['st'],
    keywords: 'self super nil true false thisContext', // only 6
    contains: [hljs.COMMENT('"', '"'), hljs.APOS_STRING_MODE, {
      className: 'type',
      begin: '\\b[A-Z][A-Za-z0-9_]*',
      relevance: 0
    }, {
      begin: VAR_IDENT_RE + ':',
      relevance: 0
    }, hljs.C_NUMBER_MODE, SYMBOL, CHAR, {
      // This looks more complicated than needed to avoid combinatorial
      // explosion under V8. It effectively means `| var1 var2 ... |` with
      // whitespace adjacent to `|` being optional.
      begin: '\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\|',
      returnBegin: true, end: /\|/,
      illegal: /\S/,
      contains: [{ begin: '(\\|[ ]*)?' + VAR_IDENT_RE }]
    }, {
      begin: '\\#\\(', end: '\\)',
      contains: [hljs.APOS_STRING_MODE, CHAR, hljs.C_NUMBER_MODE, SYMBOL]
    }]
  };
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['ml'],
    keywords: {
      keyword:
      /* according to Definition of Standard ML 97  */
      'abstype and andalso as case datatype do else end eqtype ' + 'exception fn fun functor handle if in include infix infixr ' + 'let local nonfix of op open orelse raise rec sharing sig ' + 'signature struct structure then type val with withtype where while',
      built_in:
      /* built-in types according to basis library */
      'array bool char exn int list option order real ref string substring vector unit word',
      literal: 'true false NONE SOME LESS EQUAL GREATER nil'
    },
    illegal: /\/\/|>>/,
    lexemes: '[a-z_]\\w*!?',
    contains: [{
      className: 'literal',
      begin: /\[(\|\|)?\]|\(\)/,
      relevance: 0
    }, hljs.COMMENT('\\(\\*', '\\*\\)', {
      contains: ['self']
    }), { /* type variable */
      className: 'symbol',
      begin: '\'[A-Za-z_](?!\')[\\w\']*'
      /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
    }, { /* polymorphic variant */
      className: 'type',
      begin: '`[A-Z][\\w\']*'
    }, { /* module or constructor */
      className: 'type',
      begin: '\\b[A-Z][\\w\']*',
      relevance: 0
    }, { /* don't color identifiers, but safely catch all identifiers with '*/
      begin: '[a-z_]\\w*\'[\\w\']*'
    }, hljs.inherit(hljs.APOS_STRING_MODE, { className: 'string', relevance: 0 }), hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null }), {
      className: 'number',
      begin: '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' + '0[oO][0-7_]+[Lln]?|' + '0[bB][01_]+[Lln]?|' + '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
      relevance: 0
    }, {
      begin: /[-=]>/ // relevance booster
    }]
  };
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var CPP = hljs.getLanguage('cpp').exports;

  // In SQF, a variable start with _
  var VARIABLE = {
    className: 'variable',
    begin: /\b_+[a-zA-Z_]\w*/
  };

  // In SQF, a function should fit myTag_fnc_myFunction pattern
  // https://community.bistudio.com/wiki/Functions_Library_(Arma_3)#Adding_a_Function
  var FUNCTION = {
    className: 'title',
    begin: /[a-zA-Z][a-zA-Z0-9]+_fnc_\w*/
  };

  // In SQF strings, quotes matching the start are escaped by adding a consecutive.
  // Example of single escaped quotes: " "" " and  ' '' '.
  var STRINGS = {
    className: 'string',
    variants: [{
      begin: '"',
      end: '"',
      contains: [{ begin: '""', relevance: 0 }]
    }, {
      begin: '\'',
      end: '\'',
      contains: [{ begin: '\'\'', relevance: 0 }]
    }]
  };

  return {
    aliases: ['sqf'],
    case_insensitive: true,
    keywords: {
      keyword: 'case catch default do else exit exitWith for forEach from if ' + 'switch then throw to try waitUntil while with',
      built_in: 'abs accTime acos action actionIDs actionKeys actionKeysImages actionKeysNames ' + 'actionKeysNamesArray actionName actionParams activateAddons activatedAddons activateKey ' + 'add3DENConnection add3DENEventHandler add3DENLayer addAction addBackpack addBackpackCargo ' + 'addBackpackCargoGlobal addBackpackGlobal addCamShake addCuratorAddons addCuratorCameraArea ' + 'addCuratorEditableObjects addCuratorEditingArea addCuratorPoints addEditorObject addEventHandler ' + 'addGoggles addGroupIcon addHandgunItem addHeadgear addItem addItemCargo addItemCargoGlobal ' + 'addItemPool addItemToBackpack addItemToUniform addItemToVest addLiveStats addMagazine ' + 'addMagazineAmmoCargo addMagazineCargo addMagazineCargoGlobal addMagazineGlobal addMagazinePool ' + 'addMagazines addMagazineTurret addMenu addMenuItem addMissionEventHandler addMPEventHandler ' + 'addMusicEventHandler addOwnedMine addPlayerScores addPrimaryWeaponItem ' + 'addPublicVariableEventHandler addRating addResources addScore addScoreSide addSecondaryWeaponItem ' + 'addSwitchableUnit addTeamMember addToRemainsCollector addUniform addVehicle addVest addWaypoint ' + 'addWeapon addWeaponCargo addWeaponCargoGlobal addWeaponGlobal addWeaponItem addWeaponPool ' + 'addWeaponTurret agent agents AGLToASL aimedAtTarget aimPos airDensityRTD airportSide ' + 'AISFinishHeal alive all3DENEntities allControls allCurators allCutLayers allDead allDeadMen ' + 'allDisplays allGroups allMapMarkers allMines allMissionObjects allow3DMode allowCrewInImmobile ' + 'allowCuratorLogicIgnoreAreas allowDamage allowDammage allowFileOperations allowFleeing allowGetIn ' + 'allowSprint allPlayers allSites allTurrets allUnits allUnitsUAV allVariables ammo and animate ' + 'animateDoor animateSource animationNames animationPhase animationSourcePhase animationState ' + 'append apply armoryPoints arrayIntersect asin ASLToAGL ASLToATL assert assignAsCargo ' + 'assignAsCargoIndex assignAsCommander assignAsDriver assignAsGunner assignAsTurret assignCurator ' + 'assignedCargo assignedCommander assignedDriver assignedGunner assignedItems assignedTarget ' + 'assignedTeam assignedVehicle assignedVehicleRole assignItem assignTeam assignToAirport atan atan2 ' + 'atg ATLToASL attachedObject attachedObjects attachedTo attachObject attachTo attackEnabled ' + 'backpack backpackCargo backpackContainer backpackItems backpackMagazines backpackSpaceFor ' + 'behaviour benchmark binocular blufor boundingBox boundingBoxReal boundingCenter breakOut breakTo ' + 'briefingName buildingExit buildingPos buttonAction buttonSetAction cadetMode call callExtension ' + 'camCommand camCommit camCommitPrepared camCommitted camConstuctionSetParams camCreate camDestroy ' + 'cameraEffect cameraEffectEnableHUD cameraInterest cameraOn cameraView campaignConfigFile ' + 'camPreload camPreloaded camPrepareBank camPrepareDir camPrepareDive camPrepareFocus camPrepareFov ' + 'camPrepareFovRange camPreparePos camPrepareRelPos camPrepareTarget camSetBank camSetDir ' + 'camSetDive camSetFocus camSetFov camSetFovRange camSetPos camSetRelPos camSetTarget camTarget ' + 'camUseNVG canAdd canAddItemToBackpack canAddItemToUniform canAddItemToVest ' + 'cancelSimpleTaskDestination canFire canMove canSlingLoad canStand canSuspend canUnloadInCombat ' + 'canVehicleCargo captive captiveNum cbChecked cbSetChecked ceil channelEnabled cheatsEnabled ' + 'checkAIFeature checkVisibility civilian className clearAllItemsFromBackpack clearBackpackCargo ' + 'clearBackpackCargoGlobal clearGroupIcons clearItemCargo clearItemCargoGlobal clearItemPool ' + 'clearMagazineCargo clearMagazineCargoGlobal clearMagazinePool clearOverlay clearRadio ' + 'clearWeaponCargo clearWeaponCargoGlobal clearWeaponPool clientOwner closeDialog closeDisplay ' + 'closeOverlay collapseObjectTree collect3DENHistory combatMode commandArtilleryFire commandChat ' + 'commander commandFire commandFollow commandFSM commandGetOut commandingMenu commandMove ' + 'commandRadio commandStop commandSuppressiveFire commandTarget commandWatch comment commitOverlay ' + 'compile compileFinal completedFSM composeText configClasses configFile configHierarchy configName ' + 'configNull configProperties configSourceAddonList configSourceMod configSourceModList ' + 'connectTerminalToUAV controlNull controlsGroupCtrl copyFromClipboard copyToClipboard ' + 'copyWaypoints cos count countEnemy countFriendly countSide countType countUnknown ' + 'create3DENComposition create3DENEntity createAgent createCenter createDialog createDiaryLink ' + 'createDiaryRecord createDiarySubject createDisplay createGearDialog createGroup ' + 'createGuardedPoint createLocation createMarker createMarkerLocal createMenu createMine ' + 'createMissionDisplay createMPCampaignDisplay createSimpleObject createSimpleTask createSite ' + 'createSoundSource createTask createTeam createTrigger createUnit createVehicle createVehicleCrew ' + 'createVehicleLocal crew ctrlActivate ctrlAddEventHandler ctrlAngle ctrlAutoScrollDelay ' + 'ctrlAutoScrollRewind ctrlAutoScrollSpeed ctrlChecked ctrlClassName ctrlCommit ctrlCommitted ' + 'ctrlCreate ctrlDelete ctrlEnable ctrlEnabled ctrlFade ctrlHTMLLoaded ctrlIDC ctrlIDD ' + 'ctrlMapAnimAdd ctrlMapAnimClear ctrlMapAnimCommit ctrlMapAnimDone ctrlMapCursor ctrlMapMouseOver ' + 'ctrlMapScale ctrlMapScreenToWorld ctrlMapWorldToScreen ctrlModel ctrlModelDirAndUp ctrlModelScale ' + 'ctrlParent ctrlParentControlsGroup ctrlPosition ctrlRemoveAllEventHandlers ctrlRemoveEventHandler ' + 'ctrlScale ctrlSetActiveColor ctrlSetAngle ctrlSetAutoScrollDelay ctrlSetAutoScrollRewind ' + 'ctrlSetAutoScrollSpeed ctrlSetBackgroundColor ctrlSetChecked ctrlSetEventHandler ctrlSetFade ' + 'ctrlSetFocus ctrlSetFont ctrlSetFontH1 ctrlSetFontH1B ctrlSetFontH2 ctrlSetFontH2B ctrlSetFontH3 ' + 'ctrlSetFontH3B ctrlSetFontH4 ctrlSetFontH4B ctrlSetFontH5 ctrlSetFontH5B ctrlSetFontH6 ' + 'ctrlSetFontH6B ctrlSetFontHeight ctrlSetFontHeightH1 ctrlSetFontHeightH2 ctrlSetFontHeightH3 ' + 'ctrlSetFontHeightH4 ctrlSetFontHeightH5 ctrlSetFontHeightH6 ctrlSetFontHeightSecondary ' + 'ctrlSetFontP ctrlSetFontPB ctrlSetFontSecondary ctrlSetForegroundColor ctrlSetModel ' + 'ctrlSetModelDirAndUp ctrlSetModelScale ctrlSetPosition ctrlSetScale ctrlSetStructuredText ' + 'ctrlSetText ctrlSetTextColor ctrlSetTooltip ctrlSetTooltipColorBox ctrlSetTooltipColorShade ' + 'ctrlSetTooltipColorText ctrlShow ctrlShown ctrlText ctrlTextHeight ctrlType ctrlVisible ' + 'curatorAddons curatorCamera curatorCameraArea curatorCameraAreaCeiling curatorCoef ' + 'curatorEditableObjects curatorEditingArea curatorEditingAreaType curatorMouseOver curatorPoints ' + 'curatorRegisteredObjects curatorSelected curatorWaypointCost current3DENOperation currentChannel ' + 'currentCommand currentMagazine currentMagazineDetail currentMagazineDetailTurret ' + 'currentMagazineTurret currentMuzzle currentNamespace currentTask currentTasks currentThrowable ' + 'currentVisionMode currentWaypoint currentWeapon currentWeaponMode currentWeaponTurret ' + 'currentZeroing cursorObject cursorTarget customChat customRadio cutFadeOut cutObj cutRsc cutText ' + 'damage date dateToNumber daytime deActivateKey debriefingText debugFSM debugLog deg ' + 'delete3DENEntities deleteAt deleteCenter deleteCollection deleteEditorObject deleteGroup ' + 'deleteIdentity deleteLocation deleteMarker deleteMarkerLocal deleteRange deleteResources ' + 'deleteSite deleteStatus deleteTeam deleteVehicle deleteVehicleCrew deleteWaypoint detach ' + 'detectedMines diag_activeMissionFSMs diag_activeScripts diag_activeSQFScripts ' + 'diag_activeSQSScripts diag_captureFrame diag_captureSlowFrame diag_codePerformance diag_drawMode ' + 'diag_enable diag_enabled diag_fps diag_fpsMin diag_frameNo diag_list diag_log diag_logSlowFrame ' + 'diag_mergeConfigFile diag_recordTurretLimits diag_tickTime diag_toggle dialog diarySubjectExists ' + 'didJIP didJIPOwner difficulty difficultyEnabled difficultyEnabledRTD difficultyOption direction ' + 'directSay disableAI disableCollisionWith disableConversation disableDebriefingStats ' + 'disableNVGEquipment disableRemoteSensors disableSerialization disableTIEquipment ' + 'disableUAVConnectability disableUserInput displayAddEventHandler displayCtrl displayNull ' + 'displayParent displayRemoveAllEventHandlers displayRemoveEventHandler displaySetEventHandler ' + 'dissolveTeam distance distance2D distanceSqr distributionRegion do3DENAction doArtilleryFire ' + 'doFire doFollow doFSM doGetOut doMove doorPhase doStop doSuppressiveFire doTarget doWatch ' + 'drawArrow drawEllipse drawIcon drawIcon3D drawLine drawLine3D drawLink drawLocation drawPolygon ' + 'drawRectangle driver drop east echo edit3DENMissionAttributes editObject editorSetEventHandler ' + 'effectiveCommander emptyPositions enableAI enableAIFeature enableAimPrecision enableAttack ' + 'enableAudioFeature enableCamShake enableCaustics enableChannel enableCollisionWith enableCopilot ' + 'enableDebriefingStats enableDiagLegend enableEndDialog enableEngineArtillery enableEnvironment ' + 'enableFatigue enableGunLights enableIRLasers enableMimics enablePersonTurret enableRadio ' + 'enableReload enableRopeAttach enableSatNormalOnDetail enableSaving enableSentences ' + 'enableSimulation enableSimulationGlobal enableStamina enableTeamSwitch enableUAVConnectability ' + 'enableUAVWaypoints enableVehicleCargo endLoadingScreen endMission engineOn enginesIsOnRTD ' + 'enginesRpmRTD enginesTorqueRTD entities estimatedEndServerTime estimatedTimeLeft ' + 'evalObjectArgument everyBackpack everyContainer exec execEditorScript execFSM execVM exp ' + 'expectedDestination exportJIPMessages eyeDirection eyePos face faction fadeMusic fadeRadio ' + 'fadeSound fadeSpeech failMission fillWeaponsFromPool find findCover findDisplay findEditorObject ' + 'findEmptyPosition findEmptyPositionReady findNearestEnemy finishMissionInit finite fire ' + 'fireAtTarget firstBackpack flag flagOwner flagSide flagTexture fleeing floor flyInHeight ' + 'flyInHeightASL fog fogForecast fogParams forceAddUniform forcedMap forceEnd forceMap forceRespawn ' + 'forceSpeed forceWalk forceWeaponFire forceWeatherChange forEachMember forEachMemberAgent ' + 'forEachMemberTeam format formation formationDirection formationLeader formationMembers ' + 'formationPosition formationTask formatText formLeader freeLook fromEditor fuel fullCrew ' + 'gearIDCAmmoCount gearSlotAmmoCount gearSlotData get3DENActionState get3DENAttribute get3DENCamera ' + 'get3DENConnections get3DENEntity get3DENEntityID get3DENGrid get3DENIconsVisible ' + 'get3DENLayerEntities get3DENLinesVisible get3DENMissionAttribute get3DENMouseOver get3DENSelected ' + 'getAimingCoef getAllHitPointsDamage getAllOwnedMines getAmmoCargo getAnimAimPrecision ' + 'getAnimSpeedCoef getArray getArtilleryAmmo getArtilleryComputerSettings getArtilleryETA ' + 'getAssignedCuratorLogic getAssignedCuratorUnit getBackpackCargo getBleedingRemaining ' + 'getBurningValue getCameraViewDirection getCargoIndex getCenterOfMass getClientState ' + 'getClientStateNumber getConnectedUAV getCustomAimingCoef getDammage getDescription getDir ' + 'getDirVisual getDLCs getEditorCamera getEditorMode getEditorObjectScope getElevationOffset ' + 'getFatigue getFriend getFSMVariable getFuelCargo getGroupIcon getGroupIconParams getGroupIcons ' + 'getHideFrom getHit getHitIndex getHitPointDamage getItemCargo getMagazineCargo getMarkerColor ' + 'getMarkerPos getMarkerSize getMarkerType getMass getMissionConfig getMissionConfigValue ' + 'getMissionDLCs getMissionLayerEntities getModelInfo getMousePosition getNumber getObjectArgument ' + 'getObjectChildren getObjectDLC getObjectMaterials getObjectProxy getObjectTextures getObjectType ' + 'getObjectViewDistance getOxygenRemaining getPersonUsedDLCs getPilotCameraDirection ' + 'getPilotCameraPosition getPilotCameraRotation getPilotCameraTarget getPlayerChannel ' + 'getPlayerScores getPlayerUID getPos getPosASL getPosASLVisual getPosASLW getPosATL ' + 'getPosATLVisual getPosVisual getPosWorld getRelDir getRelPos getRemoteSensorsDisabled ' + 'getRepairCargo getResolution getShadowDistance getShotParents getSlingLoad getSpeed getStamina ' + 'getStatValue getSuppression getTerrainHeightASL getText getUnitLoadout getUnitTrait getVariable ' + 'getVehicleCargo getWeaponCargo getWeaponSway getWPPos glanceAt globalChat globalRadio goggles ' + 'goto group groupChat groupFromNetId groupIconSelectable groupIconsVisible groupId groupOwner ' + 'groupRadio groupSelectedUnits groupSelectUnit grpNull gunner gusts halt handgunItems ' + 'handgunMagazine handgunWeapon handsHit hasInterface hasPilotCamera hasWeapon hcAllGroups ' + 'hcGroupParams hcLeader hcRemoveAllGroups hcRemoveGroup hcSelected hcSelectGroup hcSetGroup ' + 'hcShowBar hcShownBar headgear hideBody hideObject hideObjectGlobal hideSelection hint hintC ' + 'hintCadet hintSilent hmd hostMission htmlLoad HUDMovementLevels humidity image importAllGroups ' + 'importance in inArea inAreaArray incapacitatedState independent inflame inflamed ' + 'inGameUISetEventHandler inheritsFrom initAmbientLife inPolygon inputAction inRangeOfArtillery ' + 'insertEditorObject intersect is3DEN is3DENMultiplayer isAbleToBreathe isAgent isArray ' + 'isAutoHoverOn isAutonomous isAutotest isBleeding isBurning isClass isCollisionLightOn ' + 'isCopilotEnabled isDedicated isDLCAvailable isEngineOn isEqualTo isEqualType isEqualTypeAll ' + 'isEqualTypeAny isEqualTypeArray isEqualTypeParams isFilePatchingEnabled isFlashlightOn ' + 'isFlatEmpty isForcedWalk isFormationLeader isHidden isInRemainsCollector ' + 'isInstructorFigureEnabled isIRLaserOn isKeyActive isKindOf isLightOn isLocalized isManualFire ' + 'isMarkedForCollection isMultiplayer isMultiplayerSolo isNil isNull isNumber isObjectHidden ' + 'isObjectRTD isOnRoad isPipEnabled isPlayer isRealTime isRemoteExecuted isRemoteExecutedJIP ' + 'isServer isShowing3DIcons isSprintAllowed isStaminaEnabled isSteamMission ' + 'isStreamFriendlyUIEnabled isText isTouchingGround isTurnedOut isTutHintsEnabled isUAVConnectable ' + 'isUAVConnected isUniformAllowed isVehicleCargo isWalking isWeaponDeployed isWeaponRested ' + 'itemCargo items itemsWithMagazines join joinAs joinAsSilent joinSilent joinString kbAddDatabase ' + 'kbAddDatabaseTargets kbAddTopic kbHasTopic kbReact kbRemoveTopic kbTell kbWasSaid keyImage ' + 'keyName knowsAbout land landAt landResult language laserTarget lbAdd lbClear lbColor lbCurSel ' + 'lbData lbDelete lbIsSelected lbPicture lbSelection lbSetColor lbSetCurSel lbSetData lbSetPicture ' + 'lbSetPictureColor lbSetPictureColorDisabled lbSetPictureColorSelected lbSetSelectColor ' + 'lbSetSelectColorRight lbSetSelected lbSetTooltip lbSetValue lbSize lbSort lbSortByValue lbText ' + 'lbValue leader leaderboardDeInit leaderboardGetRows leaderboardInit leaveVehicle libraryCredits ' + 'libraryDisclaimers lifeState lightAttachObject lightDetachObject lightIsOn lightnings limitSpeed ' + 'linearConversion lineBreak lineIntersects lineIntersectsObjs lineIntersectsSurfaces ' + 'lineIntersectsWith linkItem list listObjects ln lnbAddArray lnbAddColumn lnbAddRow lnbClear ' + 'lnbColor lnbCurSelRow lnbData lnbDeleteColumn lnbDeleteRow lnbGetColumnsPosition lnbPicture ' + 'lnbSetColor lnbSetColumnsPos lnbSetCurSelRow lnbSetData lnbSetPicture lnbSetText lnbSetValue ' + 'lnbSize lnbText lnbValue load loadAbs loadBackpack loadFile loadGame loadIdentity loadMagazine ' + 'loadOverlay loadStatus loadUniform loadVest local localize locationNull locationPosition lock ' + 'lockCameraTo lockCargo lockDriver locked lockedCargo lockedDriver lockedTurret lockIdentity ' + 'lockTurret lockWP log logEntities logNetwork logNetworkTerminate lookAt lookAtPos magazineCargo ' + 'magazines magazinesAllTurrets magazinesAmmo magazinesAmmoCargo magazinesAmmoFull magazinesDetail ' + 'magazinesDetailBackpack magazinesDetailUniform magazinesDetailVest magazinesTurret ' + 'magazineTurretAmmo mapAnimAdd mapAnimClear mapAnimCommit mapAnimDone mapCenterOnCamera ' + 'mapGridPosition markAsFinishedOnSteam markerAlpha markerBrush markerColor markerDir markerPos ' + 'markerShape markerSize markerText markerType max members menuAction menuAdd menuChecked menuClear ' + 'menuCollapse menuData menuDelete menuEnable menuEnabled menuExpand menuHover menuPicture ' + 'menuSetAction menuSetCheck menuSetData menuSetPicture menuSetValue menuShortcut menuShortcutText ' + 'menuSize menuSort menuText menuURL menuValue min mineActive mineDetectedBy missionConfigFile ' + 'missionDifficulty missionName missionNamespace missionStart missionVersion mod modelToWorld ' + 'modelToWorldVisual modParams moonIntensity moonPhase morale move move3DENCamera moveInAny ' + 'moveInCargo moveInCommander moveInDriver moveInGunner moveInTurret moveObjectToEnd moveOut ' + 'moveTime moveTo moveToCompleted moveToFailed musicVolume name nameSound nearEntities ' + 'nearestBuilding nearestLocation nearestLocations nearestLocationWithDubbing nearestObject ' + 'nearestObjects nearestTerrainObjects nearObjects nearObjectsReady nearRoads nearSupplies ' + 'nearTargets needReload netId netObjNull newOverlay nextMenuItemIndex nextWeatherChange nMenuItems ' + 'not numberToDate objectCurators objectFromNetId objectParent objNull objStatus onBriefingGroup ' + 'onBriefingNotes onBriefingPlan onBriefingTeamSwitch onCommandModeChanged onDoubleClick ' + 'onEachFrame onGroupIconClick onGroupIconOverEnter onGroupIconOverLeave onHCGroupSelectionChanged ' + 'onMapSingleClick onPlayerConnected onPlayerDisconnected onPreloadFinished onPreloadStarted ' + 'onShowNewObject onTeamSwitch openCuratorInterface openDLCPage openMap openYoutubeVideo opfor or ' + 'orderGetIn overcast overcastForecast owner param params parseNumber parseText parsingNamespace ' + 'particlesQuality pi pickWeaponPool pitch pixelGrid pixelGridBase pixelGridNoUIScale pixelH pixelW ' + 'playableSlotsNumber playableUnits playAction playActionNow player playerRespawnTime playerSide ' + 'playersNumber playGesture playMission playMove playMoveNow playMusic playScriptedMission ' + 'playSound playSound3D position positionCameraToWorld posScreenToWorld posWorldToScreen ' + 'ppEffectAdjust ppEffectCommit ppEffectCommitted ppEffectCreate ppEffectDestroy ppEffectEnable ' + 'ppEffectEnabled ppEffectForceInNVG precision preloadCamera preloadObject preloadSound ' + 'preloadTitleObj preloadTitleRsc preprocessFile preprocessFileLineNumbers primaryWeapon ' + 'primaryWeaponItems primaryWeaponMagazine priority private processDiaryLink productVersion ' + 'profileName profileNamespace profileNameSteam progressLoadingScreen progressPosition ' + 'progressSetPosition publicVariable publicVariableClient publicVariableServer pushBack ' + 'pushBackUnique putWeaponPool queryItemsPool queryMagazinePool queryWeaponPool rad radioChannelAdd ' + 'radioChannelCreate radioChannelRemove radioChannelSetCallSign radioChannelSetLabel radioVolume ' + 'rain rainbow random rank rankId rating rectangular registeredTasks registerTask reload ' + 'reloadEnabled remoteControl remoteExec remoteExecCall remove3DENConnection remove3DENEventHandler ' + 'remove3DENLayer removeAction removeAll3DENEventHandlers removeAllActions removeAllAssignedItems ' + 'removeAllContainers removeAllCuratorAddons removeAllCuratorCameraAreas ' + 'removeAllCuratorEditingAreas removeAllEventHandlers removeAllHandgunItems removeAllItems ' + 'removeAllItemsWithMagazines removeAllMissionEventHandlers removeAllMPEventHandlers ' + 'removeAllMusicEventHandlers removeAllOwnedMines removeAllPrimaryWeaponItems removeAllWeapons ' + 'removeBackpack removeBackpackGlobal removeCuratorAddons removeCuratorCameraArea ' + 'removeCuratorEditableObjects removeCuratorEditingArea removeDrawIcon removeDrawLinks ' + 'removeEventHandler removeFromRemainsCollector removeGoggles removeGroupIcon removeHandgunItem ' + 'removeHeadgear removeItem removeItemFromBackpack removeItemFromUniform removeItemFromVest ' + 'removeItems removeMagazine removeMagazineGlobal removeMagazines removeMagazinesTurret ' + 'removeMagazineTurret removeMenuItem removeMissionEventHandler removeMPEventHandler ' + 'removeMusicEventHandler removeOwnedMine removePrimaryWeaponItem removeSecondaryWeaponItem ' + 'removeSimpleTask removeSwitchableUnit removeTeamMember removeUniform removeVest removeWeapon ' + 'removeWeaponGlobal removeWeaponTurret requiredVersion resetCamShake resetSubgroupDirection ' + 'resistance resize resources respawnVehicle restartEditorCamera reveal revealMine reverse ' + 'reversedMouseY roadAt roadsConnectedTo roleDescription ropeAttachedObjects ropeAttachedTo ' + 'ropeAttachEnabled ropeAttachTo ropeCreate ropeCut ropeDestroy ropeDetach ropeEndPosition ' + 'ropeLength ropes ropeUnwind ropeUnwound rotorsForcesRTD rotorsRpmRTD round runInitScript ' + 'safeZoneH safeZoneW safeZoneWAbs safeZoneX safeZoneXAbs safeZoneY save3DENInventory saveGame ' + 'saveIdentity saveJoysticks saveOverlay saveProfileNamespace saveStatus saveVar savingEnabled say ' + 'say2D say3D scopeName score scoreSide screenshot screenToWorld scriptDone scriptName scriptNull ' + 'scudState secondaryWeapon secondaryWeaponItems secondaryWeaponMagazine select selectBestPlaces ' + 'selectDiarySubject selectedEditorObjects selectEditorObject selectionNames selectionPosition ' + 'selectLeader selectMax selectMin selectNoPlayer selectPlayer selectRandom selectWeapon ' + 'selectWeaponTurret sendAUMessage sendSimpleCommand sendTask sendTaskResult sendUDPMessage ' + 'serverCommand serverCommandAvailable serverCommandExecutable serverName serverTime set ' + 'set3DENAttribute set3DENAttributes set3DENGrid set3DENIconsVisible set3DENLayer ' + 'set3DENLinesVisible set3DENMissionAttributes set3DENModelsVisible set3DENObjectType ' + 'set3DENSelected setAccTime setAirportSide setAmmo setAmmoCargo setAnimSpeedCoef setAperture ' + 'setApertureNew setArmoryPoints setAttributes setAutonomous setBehaviour setBleedingRemaining ' + 'setCameraInterest setCamShakeDefParams setCamShakeParams setCamUseTi setCaptive setCenterOfMass ' + 'setCollisionLight setCombatMode setCompassOscillation setCuratorCameraAreaCeiling setCuratorCoef ' + 'setCuratorEditingAreaType setCuratorWaypointCost setCurrentChannel setCurrentTask ' + 'setCurrentWaypoint setCustomAimCoef setDamage setDammage setDate setDebriefingText ' + 'setDefaultCamera setDestination setDetailMapBlendPars setDir setDirection setDrawIcon ' + 'setDropInterval setEditorMode setEditorObjectScope setEffectCondition setFace setFaceAnimation ' + 'setFatigue setFlagOwner setFlagSide setFlagTexture setFog setFormation setFormationTask ' + 'setFormDir setFriend setFromEditor setFSMVariable setFuel setFuelCargo setGroupIcon ' + 'setGroupIconParams setGroupIconsSelectable setGroupIconsVisible setGroupId setGroupIdGlobal ' + 'setGroupOwner setGusts setHideBehind setHit setHitIndex setHitPointDamage setHorizonParallaxCoef ' + 'setHUDMovementLevels setIdentity setImportance setLeader setLightAmbient setLightAttenuation ' + 'setLightBrightness setLightColor setLightDayLight setLightFlareMaxDistance setLightFlareSize ' + 'setLightIntensity setLightnings setLightUseFlare setLocalWindParams setMagazineTurretAmmo ' + 'setMarkerAlpha setMarkerAlphaLocal setMarkerBrush setMarkerBrushLocal setMarkerColor ' + 'setMarkerColorLocal setMarkerDir setMarkerDirLocal setMarkerPos setMarkerPosLocal setMarkerShape ' + 'setMarkerShapeLocal setMarkerSize setMarkerSizeLocal setMarkerText setMarkerTextLocal ' + 'setMarkerType setMarkerTypeLocal setMass setMimic setMousePosition setMusicEffect ' + 'setMusicEventHandler setName setNameSound setObjectArguments setObjectMaterial ' + 'setObjectMaterialGlobal setObjectProxy setObjectTexture setObjectTextureGlobal ' + 'setObjectViewDistance setOvercast setOwner setOxygenRemaining setParticleCircle setParticleClass ' + 'setParticleFire setParticleParams setParticleRandom setPilotCameraDirection ' + 'setPilotCameraRotation setPilotCameraTarget setPilotLight setPiPEffect setPitch setPlayable ' + 'setPlayerRespawnTime setPos setPosASL setPosASL2 setPosASLW setPosATL setPosition setPosWorld ' + 'setRadioMsg setRain setRainbow setRandomLip setRank setRectangular setRepairCargo ' + 'setShadowDistance setShotParents setSide setSimpleTaskAlwaysVisible setSimpleTaskCustomData ' + 'setSimpleTaskDescription setSimpleTaskDestination setSimpleTaskTarget setSimpleTaskType ' + 'setSimulWeatherLayers setSize setSkill setSlingLoad setSoundEffect setSpeaker setSpeech ' + 'setSpeedMode setStamina setStaminaScheme setStatValue setSuppression setSystemOfUnits ' + 'setTargetAge setTaskResult setTaskState setTerrainGrid setText setTimeMultiplier setTitleEffect ' + 'setTriggerActivation setTriggerArea setTriggerStatements setTriggerText setTriggerTimeout ' + 'setTriggerType setType setUnconscious setUnitAbility setUnitLoadout setUnitPos setUnitPosWeak ' + 'setUnitRank setUnitRecoilCoefficient setUnitTrait setUnloadInCombat setUserActionText setVariable ' + 'setVectorDir setVectorDirAndUp setVectorUp setVehicleAmmo setVehicleAmmoDef setVehicleArmor ' + 'setVehicleCargo setVehicleId setVehicleLock setVehiclePosition setVehicleTiPars setVehicleVarName ' + 'setVelocity setVelocityTransformation setViewDistance setVisibleIfTreeCollapsed setWaves ' + 'setWaypointBehaviour setWaypointCombatMode setWaypointCompletionRadius setWaypointDescription ' + 'setWaypointForceBehaviour setWaypointFormation setWaypointHousePosition setWaypointLoiterRadius ' + 'setWaypointLoiterType setWaypointName setWaypointPosition setWaypointScript setWaypointSpeed ' + 'setWaypointStatements setWaypointTimeout setWaypointType setWaypointVisible ' + 'setWeaponReloadingTime setWind setWindDir setWindForce setWindStr setWPPos show3DIcons showChat ' + 'showCinemaBorder showCommandingMenu showCompass showCuratorCompass showGPS showHUD showLegend ' + 'showMap shownArtilleryComputer shownChat shownCompass shownCuratorCompass showNewEditorObject ' + 'shownGPS shownHUD shownMap shownPad shownRadio shownScoretable shownUAVFeed shownWarrant ' + 'shownWatch showPad showRadio showScoretable showSubtitles showUAVFeed showWarrant showWatch ' + 'showWaypoint showWaypoints side sideAmbientLife sideChat sideEmpty sideEnemy sideFriendly ' + 'sideLogic sideRadio sideUnknown simpleTasks simulationEnabled simulCloudDensity ' + 'simulCloudOcclusion simulInClouds simulWeatherSync sin size sizeOf skill skillFinal skipTime ' + 'sleep sliderPosition sliderRange sliderSetPosition sliderSetRange sliderSetSpeed sliderSpeed ' + 'slingLoadAssistantShown soldierMagazines someAmmo sort soundVolume spawn speaker speed speedMode ' + 'splitString sqrt squadParams stance startLoadingScreen step stop stopEngineRTD stopped str ' + 'sunOrMoon supportInfo suppressFor surfaceIsWater surfaceNormal surfaceType swimInDepth ' + 'switchableUnits switchAction switchCamera switchGesture switchLight switchMove ' + 'synchronizedObjects synchronizedTriggers synchronizedWaypoints synchronizeObjectsAdd ' + 'synchronizeObjectsRemove synchronizeTrigger synchronizeWaypoint systemChat systemOfUnits tan ' + 'targetKnowledge targetsAggregate targetsQuery taskAlwaysVisible taskChildren taskCompleted ' + 'taskCustomData taskDescription taskDestination taskHint taskMarkerOffset taskNull taskParent ' + 'taskResult taskState taskType teamMember teamMemberNull teamName teams teamSwitch ' + 'teamSwitchEnabled teamType terminate terrainIntersect terrainIntersectASL text textLog ' + 'textLogFormat tg time timeMultiplier titleCut titleFadeOut titleObj titleRsc titleText toArray ' + 'toFixed toLower toString toUpper triggerActivated triggerActivation triggerArea ' + 'triggerAttachedVehicle triggerAttachObject triggerAttachVehicle triggerStatements triggerText ' + 'triggerTimeout triggerTimeoutCurrent triggerType turretLocal turretOwner turretUnit tvAdd tvClear ' + 'tvCollapse tvCount tvCurSel tvData tvDelete tvExpand tvPicture tvSetCurSel tvSetData tvSetPicture ' + 'tvSetPictureColor tvSetPictureColorDisabled tvSetPictureColorSelected tvSetPictureRight ' + 'tvSetPictureRightColor tvSetPictureRightColorDisabled tvSetPictureRightColorSelected tvSetText ' + 'tvSetTooltip tvSetValue tvSort tvSortByValue tvText tvTooltip tvValue type typeName typeOf ' + 'UAVControl uiNamespace uiSleep unassignCurator unassignItem unassignTeam unassignVehicle ' + 'underwater uniform uniformContainer uniformItems uniformMagazines unitAddons unitAimPosition ' + 'unitAimPositionVisual unitBackpack unitIsUAV unitPos unitReady unitRecoilCoefficient units ' + 'unitsBelowHeight unlinkItem unlockAchievement unregisterTask updateDrawIcon updateMenuItem ' + 'updateObjectTree useAISteeringComponent useAudioTimeForMoves vectorAdd vectorCos ' + 'vectorCrossProduct vectorDiff vectorDir vectorDirVisual vectorDistance vectorDistanceSqr ' + 'vectorDotProduct vectorFromTo vectorMagnitude vectorMagnitudeSqr vectorMultiply vectorNormalized ' + 'vectorUp vectorUpVisual vehicle vehicleCargoEnabled vehicleChat vehicleRadio vehicles ' + 'vehicleVarName velocity velocityModelSpace verifySignature vest vestContainer vestItems ' + 'vestMagazines viewDistance visibleCompass visibleGPS visibleMap visiblePosition ' + 'visiblePositionASL visibleScoretable visibleWatch waves waypointAttachedObject ' + 'waypointAttachedVehicle waypointAttachObject waypointAttachVehicle waypointBehaviour ' + 'waypointCombatMode waypointCompletionRadius waypointDescription waypointForceBehaviour ' + 'waypointFormation waypointHousePosition waypointLoiterRadius waypointLoiterType waypointName ' + 'waypointPosition waypoints waypointScript waypointsEnabledUAV waypointShow waypointSpeed ' + 'waypointStatements waypointTimeout waypointTimeoutCurrent waypointType waypointVisible ' + 'weaponAccessories weaponAccessoriesCargo weaponCargo weaponDirection weaponInertia weaponLowered ' + 'weapons weaponsItems weaponsItemsCargo weaponState weaponsTurret weightRTD west WFSideText wind',
      literal: 'true false nil'
    },
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.NUMBER_MODE, VARIABLE, FUNCTION, STRINGS, CPP.preprocessor],
    illegal: /#/
  };
};

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var COMMENT_MODE = hljs.COMMENT('--', '$');
  return {
    case_insensitive: true,
    illegal: /[<>{}*#]/,
    contains: [{
      beginKeywords: 'begin end start commit rollback savepoint lock alter create drop rename call ' + 'delete do handler insert load replace select truncate update set show pragma grant ' + 'merge describe use explain help declare prepare execute deallocate release ' + 'unlock purge reset change stop analyze cache flush optimize repair kill ' + 'install uninstall checksum restore check backup revoke comment',
      end: /;/, endsWithParent: true,
      lexemes: /[\w\.]+/,
      keywords: {
        keyword: 'abort abs absolute acc acce accep accept access accessed accessible account acos action activate add ' + 'addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias ' + 'allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply ' + 'archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan ' + 'atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid ' + 'authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile ' + 'before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float ' + 'binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound ' + 'buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel ' + 'capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base ' + 'char_length character_length characters characterset charindex charset charsetform charsetid check ' + 'checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close ' + 'cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation ' + 'collect colu colum column column_value columns columns_updated comment commit compact compatibility ' + 'compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn ' + 'connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection ' + 'consider consistent constant constraint constraints constructor container content contents context ' + 'contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost ' + 'count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation ' + 'critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user ' + 'cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add ' + 'date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts ' + 'day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate ' + 'declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults ' + 'deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank ' + 'depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor ' + 'deterministic diagnostics difference dimension direct_load directory disable disable_all ' + 'disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div ' + 'do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable ' + 'editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt ' + 'end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors ' + 'escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding ' + 'execu execut execute exempt exists exit exp expire explain export export_set extended extent external ' + 'external_1 external_2 externally extract failed failed_login_attempts failover failure far fast ' + 'feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final ' + 'finish first first_value fixed flash_cache flashback floor flush following follows for forall force ' + 'form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ' + 'ftp full function general generated get get_format get_lock getdate getutcdate global global_name ' + 'globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups ' + 'gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex ' + 'hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified ' + 'identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment ' + 'index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile ' + 'initial initialized initially initrans inmemory inner innodb input insert install instance instantiable ' + 'instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat ' + 'is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists ' + 'keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase ' + 'lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit ' + 'lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate ' + 'locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call ' + 'logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime ' + 'managed management manual map mapping mask master master_pos_wait match matched materialized max ' + 'maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans ' + 'md5 measures median medium member memcompress memory merge microsecond mid migration min minextents ' + 'minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month ' + 'months mount move movement multiset mutex name name_const names nan national native natural nav nchar ' + 'nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile ' + 'nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile ' + 'nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder ' + 'nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck ' + 'noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe ' + 'nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ' + 'ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old ' + 'on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date ' + 'oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary ' + 'out outer outfile outline output over overflow overriding package pad parallel parallel_enable ' + 'parameters parent parse partial partition partitions pascal passing password password_grace_time ' + 'password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex ' + 'pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc ' + 'performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin ' + 'policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction ' + 'prediction_cost prediction_details prediction_probability prediction_set prepare present preserve ' + 'prior priority private private_sga privileges procedural procedure procedure_analyze processlist ' + 'profiles project prompt protection public publishingservername purge quarter query quick quiesce quota ' + 'quotename radians raise rand range rank raw read reads readsize rebuild record records ' + 'recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh ' + 'regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy ' + 'reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename ' + 'repair repeat replace replicate replication required reset resetlogs resize resource respect restore ' + 'restricted result result_cache resumable resume retention return returning returns reuse reverse revoke ' + 'right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows ' + 'rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll ' + 'sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select ' + 'self sequence sequential serializable server servererror session session_user sessions_per_user set ' + 'sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor ' + 'si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin ' + 'size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex ' + 'source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows ' + 'sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone ' + 'standby start starting startup statement static statistics stats_binomial_test stats_crosstab ' + 'stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep ' + 'stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev ' + 'stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate ' + 'subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum ' + 'suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate ' + 'sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo ' + 'template temporary terminated tertiary_weights test than then thread through tier ties time time_format ' + 'time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr ' + 'timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking ' + 'transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate ' + 'try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress ' + 'under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot ' + 'unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert ' + 'url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date ' + 'utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var ' + 'var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray ' + 'verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear ' + 'wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped ' + 'xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces ' + 'xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
        literal: 'true false null',
        built_in: 'array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number ' + 'numeric real record serial serial8 smallint text varchar varying void'
      },
      contains: [{
        className: 'string',
        begin: '\'', end: '\'',
        contains: [hljs.BACKSLASH_ESCAPE, { begin: '\'\'' }]
      }, {
        className: 'string',
        begin: '"', end: '"',
        contains: [hljs.BACKSLASH_ESCAPE, { begin: '""' }]
      }, {
        className: 'string',
        begin: '`', end: '`',
        contains: [hljs.BACKSLASH_ESCAPE]
      }, hljs.C_NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE, COMMENT_MODE]
    }, hljs.C_BLOCK_COMMENT_MODE, COMMENT_MODE]
  };
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    contains: [hljs.HASH_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
      begin: hljs.UNDERSCORE_IDENT_RE,
      lexemes: hljs.UNDERSCORE_IDENT_RE,
      keywords: {
        // Stan's keywords
        name: 'for in while repeat until if then else',
        // Stan's probablity distributions (less beta and gamma, as commonly
        // used for parameter names). So far, _log and _rng variants are not
        // included
        symbol: 'bernoulli bernoulli_logit binomial binomial_logit ' + 'beta_binomial hypergeometric categorical categorical_logit ' + 'ordered_logistic neg_binomial neg_binomial_2 ' + 'neg_binomial_2_log poisson poisson_log multinomial normal ' + 'exp_mod_normal skew_normal student_t cauchy double_exponential ' + 'logistic gumbel lognormal chi_square inv_chi_square ' + 'scaled_inv_chi_square exponential inv_gamma weibull frechet ' + 'rayleigh wiener pareto pareto_type_2 von_mises uniform ' + 'multi_normal multi_normal_prec multi_normal_cholesky multi_gp ' + 'multi_gp_cholesky multi_student_t gaussian_dlm_obs dirichlet ' + 'lkj_corr lkj_corr_cholesky wishart inv_wishart',
        // Stan's data types
        'selector-tag': 'int real vector simplex unit_vector ordered positive_ordered ' + 'row_vector matrix cholesky_factor_corr cholesky_factor_cov ' + 'corr_matrix cov_matrix',
        // Stan's model blocks
        title: 'functions model data parameters quantities transformed ' + 'generated',
        literal: 'true false'
      },
      relevance: 0
    },
    // The below is all taken from the R language definition
    {
      // hex value
      className: 'number',
      begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
      relevance: 0
    }, {
      // hex value
      className: 'number',
      begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
      relevance: 0
    }, {
      // explicit integer
      className: 'number',
      begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
      relevance: 0
    }, {
      // number with trailing decimal
      className: 'number',
      begin: "\\d+\\.(?!\\d)(?:i\\b)?",
      relevance: 0
    }, {
      // number
      className: 'number',
      begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
      relevance: 0
    }, {
      // number with leading decimal
      className: 'number',
      begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
      relevance: 0
    }]
  };
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['do', 'ado'],
    case_insensitive: true,
    keywords: 'if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d|0 datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e|0 ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate g|0 gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h|0 hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l|0 la lab labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m|0 ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize meqparse mer merg merge mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n|0 nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u|0 unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5',
    contains: [{
      className: 'symbol',
      begin: /`[a-zA-Z0-9_]+'/
    }, {
      className: 'variable',
      begin: /\$\{?[a-zA-Z0-9_]+\}?/
    }, {
      className: 'string',
      variants: [{ begin: '`"[^\r\n]*?"\'' }, { begin: '"[^\r\n"]*"' }]
    }, {
      className: 'built_in',
      variants: [{
        begin: '\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\(|$)'
      }]
    }, hljs.COMMENT('^[ \t]*\\*.*$', false), hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
  };
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
  var STEP21_KEYWORDS = {
    keyword: 'HEADER ENDSEC DATA'
  };
  var STEP21_START = {
    className: 'meta',
    begin: 'ISO-10303-21;',
    relevance: 10
  };
  var STEP21_CLOSE = {
    className: 'meta',
    begin: 'END-ISO-10303-21;',
    relevance: 10
  };

  return {
    aliases: ['p21', 'step', 'stp'],
    case_insensitive: true, // STEP 21 is case insensitive in theory, in practice all non-comments are capitalized.
    lexemes: STEP21_IDENT_RE,
    keywords: STEP21_KEYWORDS,
    contains: [STEP21_START, STEP21_CLOSE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.COMMENT('/\\*\\*!', '\\*/'), hljs.C_NUMBER_MODE, hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null }), hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null }), {
      className: 'string',
      begin: "'", end: "'"
    }, {
      className: 'symbol',
      variants: [{
        begin: '#', end: '\\d+',
        illegal: '\\W'
      }]
    }]
  };
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {

  var VARIABLE = {
    className: 'variable',
    begin: '\\$' + hljs.IDENT_RE
  };

  var HEX_COLOR = {
    className: 'number',
    begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
  };

  var AT_KEYWORDS = ['charset', 'css', 'debug', 'extend', 'font-face', 'for', 'import', 'include', 'media', 'mixin', 'page', 'warn', 'while'];

  var PSEUDO_SELECTORS = ['after', 'before', 'first-letter', 'first-line', 'active', 'first-child', 'focus', 'hover', 'lang', 'link', 'visited'];

  var TAGS = ['a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'mark', 'menu', 'nav', 'object', 'ol', 'p', 'q', 'quote', 'samp', 'section', 'span', 'strong', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'ul', 'var', 'video'];

  var TAG_END = '[\\.\\s\\n\\[\\:,]';

  var ATTRIBUTES = ['align-content', 'align-items', 'align-self', 'animation', 'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function', 'auto', 'backface-visibility', 'background', 'background-attachment', 'background-clip', 'background-color', 'background-image', 'background-origin', 'background-position', 'background-repeat', 'background-size', 'border', 'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-style', 'border-bottom-width', 'border-collapse', 'border-color', 'border-image', 'border-image-outset', 'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-radius', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width', 'border-spacing', 'border-style', 'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-style', 'border-top-width', 'border-width', 'bottom', 'box-decoration-break', 'box-shadow', 'box-sizing', 'break-after', 'break-before', 'break-inside', 'caption-side', 'clear', 'clip', 'clip-path', 'color', 'column-count', 'column-fill', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 'column-width', 'columns', 'content', 'counter-increment', 'counter-reset', 'cursor', 'direction', 'display', 'empty-cells', 'filter', 'flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap', 'float', 'font', 'font-family', 'font-feature-settings', 'font-kerning', 'font-language-override', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-variant-ligatures', 'font-weight', 'height', 'hyphens', 'icon', 'image-orientation', 'image-rendering', 'image-resolution', 'ime-mode', 'inherit', 'initial', 'justify-content', 'left', 'letter-spacing', 'line-height', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', 'margin', 'margin-bottom', 'margin-left', 'margin-right', 'margin-top', 'marks', 'mask', 'max-height', 'max-width', 'min-height', 'min-width', 'nav-down', 'nav-index', 'nav-left', 'nav-right', 'nav-up', 'none', 'normal', 'object-fit', 'object-position', 'opacity', 'order', 'orphans', 'outline', 'outline-color', 'outline-offset', 'outline-style', 'outline-width', 'overflow', 'overflow-wrap', 'overflow-x', 'overflow-y', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top', 'page-break-after', 'page-break-before', 'page-break-inside', 'perspective', 'perspective-origin', 'pointer-events', 'position', 'quotes', 'resize', 'right', 'tab-size', 'table-layout', 'text-align', 'text-align-last', 'text-decoration', 'text-decoration-color', 'text-decoration-line', 'text-decoration-style', 'text-indent', 'text-overflow', 'text-rendering', 'text-shadow', 'text-transform', 'text-underline-position', 'top', 'transform', 'transform-origin', 'transform-style', 'transition', 'transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function', 'unicode-bidi', 'vertical-align', 'visibility', 'white-space', 'widows', 'width', 'word-break', 'word-spacing', 'word-wrap', 'z-index'];

  // illegals
  var ILLEGAL = ['\\?', '(\\bReturn\\b)', // monkey
  '(\\bEnd\\b)', // monkey
  '(\\bend\\b)', // vbscript
  '(\\bdef\\b)', // gradle
  ';', // a whole lot of languages
  '#\\s', // markdown
  '\\*\\s', // markdown
  '===\\s', // markdown
  '\\|', '%'];

  return {
    aliases: ['styl'],
    case_insensitive: false,
    keywords: 'if else for in',
    illegal: '(' + ILLEGAL.join('|') + ')',
    contains: [

    // strings
    hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE,

    // comments
    hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE,

    // hex colors
    HEX_COLOR,

    // class tag
    {
      begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*' + TAG_END,
      returnBegin: true,
      contains: [{ className: 'selector-class', begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*' }]
    },

    // id tag
    {
      begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*' + TAG_END,
      returnBegin: true,
      contains: [{ className: 'selector-id', begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*' }]
    },

    // tags
    {
      begin: '\\b(' + TAGS.join('|') + ')' + TAG_END,
      returnBegin: true,
      contains: [{ className: 'selector-tag', begin: '\\b[a-zA-Z][a-zA-Z0-9_-]*' }]
    },

    // psuedo selectors
    {
      begin: '&?:?:\\b(' + PSEUDO_SELECTORS.join('|') + ')' + TAG_END
    },

    // @ keywords
    {
      begin: '\@(' + AT_KEYWORDS.join('|') + ')\\b'
    },

    // variables
    VARIABLE,

    // dimension
    hljs.CSS_NUMBER_MODE,

    // number
    hljs.NUMBER_MODE,

    // functions
    //  - only from beginning of line + whitespace
    {
      className: 'function',
      begin: '^[a-zA-Z][a-zA-Z0-9_\-]*\\(.*\\)',
      illegal: '[\\n]',
      returnBegin: true,
      contains: [{ className: 'title', begin: '\\b[a-zA-Z][a-zA-Z0-9_\-]*' }, {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        contains: [HEX_COLOR, VARIABLE, hljs.APOS_STRING_MODE, hljs.CSS_NUMBER_MODE, hljs.NUMBER_MODE, hljs.QUOTE_STRING_MODE]
      }]
    },

    // attributes
    //  - only from beginning of line + whitespace
    //  - must have whitespace after it
    {
      className: 'attribute',
      begin: '\\b(' + ATTRIBUTES.reverse().join('|') + ')\\b',
      starts: {
        // value container
        end: /;|$/,
        contains: [HEX_COLOR, VARIABLE, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.CSS_NUMBER_MODE, hljs.NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE],
        illegal: /\./,
        relevance: 0
      }
    }]
  };
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var DETAILS = {
    className: 'string',
    begin: '\\[\n(multipart)?', end: '\\]\n'
  };
  var TIME = {
    className: 'string',
    begin: '\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}\.\\d+Z'
  };
  var PROGRESSVALUE = {
    className: 'string',
    begin: '(\\+|-)\\d+'
  };
  var KEYWORDS = {
    className: 'keyword',
    relevance: 10,
    variants: [{ begin: '^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?' }, { begin: '^progress(:?)(\\s+)?(pop|push)?' }, { begin: '^tags:' }, { begin: '^time:' }]
  };
  return {
    case_insensitive: true,
    contains: [DETAILS, TIME, PROGRESSVALUE, KEYWORDS]
  };
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var SWIFT_KEYWORDS = {
    keyword: '__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity ' + 'break case catch class continue convenience default defer deinit didSet do ' + 'dynamic dynamicType else enum extension fallthrough false fileprivate final for func ' + 'get guard if import in indirect infix init inout internal is lazy left let ' + 'mutating nil none nonmutating open operator optional override postfix precedence ' + 'prefix private protocol Protocol public repeat required rethrows return ' + 'right self Self set static struct subscript super switch throw throws true ' + 'try try! try? Type typealias unowned var weak where while willSet',
    literal: 'true false nil',
    built_in: 'abs advance alignof alignofValue anyGenerator assert assertionFailure ' + 'bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC ' + 'bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros ' + 'debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords ' + 'enumerate equal fatalError filter find getBridgedObjectiveCType getVaList ' + 'indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC ' + 'isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare ' + 'map max maxElement min minElement numericCast overlaps partition posix ' + 'precondition preconditionFailure print println quickSort readLine reduce reflect ' + 'reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split ' + 'startsWith stride strideof strideofValue swap toString transcode ' + 'underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap ' + 'unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer ' + 'withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers ' + 'withUnsafePointer withUnsafePointers withVaList zip'
  };

  var TYPE = {
    className: 'type',
    begin: '\\b[A-Z][\\w\xC0-\u02B8\']*',
    relevance: 0
  };
  var BLOCK_COMMENT = hljs.COMMENT('/\\*', '\\*/', {
    contains: ['self']
  });
  var SUBST = {
    className: 'subst',
    begin: /\\\(/, end: '\\)',
    keywords: SWIFT_KEYWORDS,
    contains: [] // assigned later
  };
  var NUMBERS = {
    className: 'number',
    begin: '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
    relevance: 0
  };
  var QUOTE_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    contains: [SUBST, hljs.BACKSLASH_ESCAPE]
  });
  SUBST.contains = [NUMBERS];

  return {
    keywords: SWIFT_KEYWORDS,
    contains: [QUOTE_STRING_MODE, hljs.C_LINE_COMMENT_MODE, BLOCK_COMMENT, TYPE, NUMBERS, {
      className: 'function',
      beginKeywords: 'func', end: '{', excludeEnd: true,
      contains: [hljs.inherit(hljs.TITLE_MODE, {
        begin: /[A-Za-z$_][0-9A-Za-z$_]*/
      }), {
        begin: /</, end: />/
      }, {
        className: 'params',
        begin: /\(/, end: /\)/, endsParent: true,
        keywords: SWIFT_KEYWORDS,
        contains: ['self', NUMBERS, QUOTE_STRING_MODE, hljs.C_BLOCK_COMMENT_MODE, { begin: ':' // relevance booster
        }],
        illegal: /["']/
      }],
      illegal: /\[|%/
    }, {
      className: 'class',
      beginKeywords: 'struct protocol class extension enum',
      keywords: SWIFT_KEYWORDS,
      end: '\\{',
      excludeEnd: true,
      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/ })]
    }, {
      className: 'meta', // @attributes
      begin: '(@warn_unused_result|@exported|@lazy|@noescape|' + '@NSCopying|@NSManaged|@objc|@convention|@required|' + '@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|' + '@infix|@prefix|@postfix|@autoclosure|@testable|@available|' + '@nonobjc|@NSApplicationMain|@UIApplicationMain)'

    }, {
      beginKeywords: 'import', end: /$/,
      contains: [hljs.C_LINE_COMMENT_MODE, BLOCK_COMMENT]
    }]
  };
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {

  var COMMENT = {
    className: 'comment',
    begin: /\$noop\(/,
    end: /\)/,
    contains: [{
      begin: /\(/,
      end: /\)/,
      contains: ['self', {
        begin: /\\./
      }]
    }],
    relevance: 10
  };

  var FUNCTION = {
    className: 'keyword',
    begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
    end: /\(/,
    excludeEnd: true
  };

  var VARIABLE = {
    className: 'variable',
    begin: /%[_a-zA-Z0-9:]*/,
    end: '%'
  };

  var ESCAPE_SEQUENCE = {
    className: 'symbol',
    begin: /\\./
  };

  return {
    contains: [COMMENT, FUNCTION, VARIABLE, ESCAPE_SEQUENCE]
  };
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var LITERALS = 'true false yes no null';

  var keyPrefix = '^[ \\-]*';
  var keyName = '[a-zA-Z_][\\w\\-]*';
  var KEY = {
    className: 'attr',
    variants: [{ begin: keyPrefix + keyName + ":" }, { begin: keyPrefix + '"' + keyName + '"' + ":" }, { begin: keyPrefix + "'" + keyName + "'" + ":" }]
  };

  var TEMPLATE_VARIABLES = {
    className: 'template-variable',
    variants: [{ begin: '\{\{', end: '\}\}' }, // jinja templates Ansible
    { begin: '%\{', end: '\}' // Ruby i18n
    }]
  };
  var STRING = {
    className: 'string',
    relevance: 0,
    variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /\S+/ }],
    contains: [hljs.BACKSLASH_ESCAPE, TEMPLATE_VARIABLES]
  };

  return {
    case_insensitive: true,
    aliases: ['yml', 'YAML', 'yaml'],
    contains: [KEY, {
      className: 'meta',
      begin: '^---\s*$',
      relevance: 10
    }, { // multi line string
      className: 'string',
      begin: '[\\|>] *$',
      returnEnd: true,
      contains: STRING.contains,
      // very simple termination: next hash key
      end: KEY.variants[0].begin
    }, { // Ruby/Rails erb
      begin: '<%[%=-]?', end: '[%-]?%>',
      subLanguage: 'ruby',
      excludeBegin: true,
      excludeEnd: true,
      relevance: 0
    }, { // data type
      className: 'type',
      begin: '!!' + hljs.UNDERSCORE_IDENT_RE
    }, { // fragment id &ref
      className: 'meta',
      begin: '&' + hljs.UNDERSCORE_IDENT_RE + '$'
    }, { // fragment reference *ref
      className: 'meta',
      begin: '\\*' + hljs.UNDERSCORE_IDENT_RE + '$'
    }, { // array listing
      className: 'bullet',
      begin: '^ *-',
      relevance: 0
    }, hljs.HASH_COMMENT_MODE, {
      beginKeywords: LITERALS,
      keywords: { literal: LITERALS }
    }, hljs.C_NUMBER_MODE, STRING]
  };
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    case_insensitive: true,
    contains: [hljs.HASH_COMMENT_MODE,
    // version of format and total amount of testcases
    {
      className: 'meta',
      variants: [{ begin: '^TAP version (\\d+)$' }, { begin: '^1\\.\\.(\\d+)$' }]
    },
    // YAML block
    {
      begin: '(\s+)?---$', end: '\\.\\.\\.$',
      subLanguage: 'yaml',
      relevance: 0
    },
    // testcase number
    {
      className: 'number',
      begin: ' (\\d+) '
    },
    // testcase status and description
    {
      className: 'symbol',
      variants: [{ begin: '^ok' }, { begin: '^not ok' }]
    }]
  };
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['tk'],
    keywords: 'after append apply array auto_execok auto_import auto_load auto_mkindex ' + 'auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock ' + 'close concat continue dde dict encoding eof error eval exec exit expr fblocked ' + 'fconfigure fcopy file fileevent filename flush for foreach format gets glob global ' + 'history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list ' + 'llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 ' + 'mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex ' + 'platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename ' + 'return safe scan seek set socket source split string subst switch tcl_endOfWord ' + 'tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter ' + 'tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update ' + 'uplevel upvar variable vwait while',
    contains: [hljs.COMMENT(';[ \\t]*#', '$'), hljs.COMMENT('^[ \\t]*#', '$'), {
      beginKeywords: 'proc',
      end: '[\\{]',
      excludeEnd: true,
      contains: [{
        className: 'title',
        begin: '[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
        end: '[ \\t\\n\\r]',
        endsWithParent: true,
        excludeEnd: true
      }]
    }, {
      excludeEnd: true,
      variants: [{
        begin: '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*\\(([a-zA-Z0-9_])*\\)',
        end: '[^a-zA-Z0-9_\\}\\$]'
      }, {
        begin: '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
        end: '(\\))?[^a-zA-Z0-9_\\}\\$]'
      }]
    }, {
      className: 'string',
      contains: [hljs.BACKSLASH_ESCAPE],
      variants: [hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null }), hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null })]
    }, {
      className: 'number',
      variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
    }]
  };
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var COMMAND = {
    className: 'tag',
    begin: /\\/,
    relevance: 0,
    contains: [{
      className: 'name',
      variants: [{ begin: /[a-zA-Zа-яА-я]+[*]?/ }, { begin: /[^a-zA-Zа-яА-я0-9]/ }],
      starts: {
        endsWithParent: true,
        relevance: 0,
        contains: [{
          className: 'string', // because it looks like attributes in HTML tags
          variants: [{ begin: /\[/, end: /\]/ }, { begin: /\{/, end: /\}/ }]
        }, {
          begin: /\s*=\s*/, endsWithParent: true,
          relevance: 0,
          contains: [{
            className: 'number',
            begin: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/
          }]
        }]
      }
    }]
  };

  return {
    contains: [COMMAND, {
      className: 'formula',
      contains: [COMMAND],
      relevance: 0,
      variants: [{ begin: /\$\$/, end: /\$\$/ }, { begin: /\$/, end: /\$/ }]
    }, hljs.COMMENT('%', '$', {
      relevance: 0
    })]
  };
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var BUILT_IN_TYPES = 'bool byte i16 i32 i64 double string binary';
  return {
    keywords: {
      keyword: 'namespace const typedef struct enum service exception void oneway set list map required optional',
      built_in: BUILT_IN_TYPES,
      literal: 'true false'
    },
    contains: [hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
      className: 'class',
      beginKeywords: 'struct enum service exception', end: /\{/,
      illegal: /\n/,
      contains: [hljs.inherit(hljs.TITLE_MODE, {
        starts: { endsWithParent: true, excludeEnd: true // hack: eating everything after the first title
        } })]
    }, {
      begin: '\\b(set|list|map)\\s*<', end: '>',
      keywords: BUILT_IN_TYPES,
      contains: ['self']
    }]
  };
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var TPID = {
    className: 'number',
    begin: '[1-9][0-9]*', /* no leading zeros */
    relevance: 0
  };
  var TPLABEL = {
    className: 'symbol',
    begin: ':[^\\]]+'
  };
  var TPDATA = {
    className: 'built_in',
    begin: '(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|\
    TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[', end: '\\]',
    contains: ['self', TPID, TPLABEL]
  };
  var TPIO = {
    className: 'built_in',
    begin: '(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[', end: '\\]',
    contains: ['self', TPID, hljs.QUOTE_STRING_MODE, /* for pos section at bottom */
    TPLABEL]
  };

  return {
    keywords: {
      keyword: 'ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB ' + 'DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC ' + 'IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE ' + 'PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET ' + 'Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN ' + 'SUBSTR FINDSTR VOFFSET PROG ATTR MN POS',
      literal: 'ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET'
    },
    contains: [TPDATA, TPIO, {
      className: 'keyword',
      begin: '/(PROG|ATTR|MN|POS|END)\\b'
    }, {
      /* this is for cases like ,CALL */
      className: 'keyword',
      begin: '(CALL|RUN|POINT_LOGIC|LBL)\\b'
    }, {
      /* this is for cases like CNT100 where the default lexemes do not
       * separate the keyword and the number */
      className: 'keyword',
      begin: '\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)'
    }, {
      /* to catch numbers that do not have a word boundary on the left */
      className: 'number',
      begin: '\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b',
      relevance: 0
    }, hljs.COMMENT('//', '[;$]'), hljs.COMMENT('!', '[;$]'), hljs.COMMENT('--eg:', '$'), hljs.QUOTE_STRING_MODE, {
      className: 'string',
      begin: '\'', end: '\''
    }, hljs.C_NUMBER_MODE, {
      className: 'variable',
      begin: '\\$[A-Za-z0-9_]+'
    }]
  };
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)'
  };

  var FUNCTION_NAMES = 'attribute block constant cycle date dump include ' + 'max min parent random range source template_from_string';

  var FUNCTIONS = {
    beginKeywords: FUNCTION_NAMES,
    keywords: { name: FUNCTION_NAMES },
    relevance: 0,
    contains: [PARAMS]
  };

  var FILTER = {
    begin: /\|[A-Za-z_]+:?/,
    keywords: 'abs batch capitalize convert_encoding date date_modify default ' + 'escape first format join json_encode keys last length lower ' + 'merge nl2br number_format raw replace reverse round slice sort split ' + 'striptags title trim upper url_encode',
    contains: [FUNCTIONS]
  };

  var TAGS = 'autoescape block do embed extends filter flush for ' + 'if import include macro sandbox set spaceless use verbatim';

  TAGS = TAGS + ' ' + TAGS.split(' ').map(function (t) {
    return 'end' + t;
  }).join(' ');

  return {
    aliases: ['craftcms'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [hljs.COMMENT(/\{#/, /#}/), {
      className: 'template-tag',
      begin: /\{%/, end: /%}/,
      contains: [{
        className: 'name',
        begin: /\w+/,
        keywords: TAGS,
        starts: {
          endsWithParent: true,
          contains: [FILTER, FUNCTIONS],
          relevance: 0
        }
      }]
    }, {
      className: 'template-variable',
      begin: /\{\{/, end: /}}/,
      contains: ['self', FILTER, FUNCTIONS]
    }]
  };
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = {
    keyword: 'in if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const class public private protected get set super ' + 'static implements enum export import declare type namespace abstract ' + 'as from extends async await',
    literal: 'true false null undefined NaN Infinity',
    built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document any number boolean string void Promise'
  };

  return {
    aliases: ['ts'],
    keywords: KEYWORDS,
    contains: [{
      className: 'meta',
      begin: /^\s*['"]use strict['"]/
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, { // template string
      className: 'string',
      begin: '`', end: '`',
      contains: [hljs.BACKSLASH_ESCAPE, {
        className: 'subst',
        begin: '\\$\\{', end: '\\}'
      }]
    }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
      className: 'number',
      variants: [{ begin: '\\b(0[bB][01]+)' }, { begin: '\\b(0[oO][0-7]+)' }, { begin: hljs.C_NUMBER_RE }],
      relevance: 0
    }, { // "value" container
      begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
      keywords: 'return throw case',
      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, {
        className: 'function',
        begin: '(\\(.*?\\)|' + hljs.IDENT_RE + ')\\s*=>', returnBegin: true,
        end: '\\s*=>',
        contains: [{
          className: 'params',
          variants: [{
            begin: hljs.IDENT_RE
          }, {
            begin: /\(\s*\)/
          }, {
            begin: /\(/, end: /\)/,
            excludeBegin: true, excludeEnd: true,
            keywords: KEYWORDS,
            contains: ['self', hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
          }]
        }]
      }],
      relevance: 0
    }, {
      className: 'function',
      begin: 'function', end: /[\{;]/, excludeEnd: true,
      keywords: KEYWORDS,
      contains: ['self', hljs.inherit(hljs.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/ }), {
        className: 'params',
        begin: /\(/, end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE],
        illegal: /["'\(]/
      }],
      illegal: /%/,
      relevance: 0 // () => {} is more typical in TypeScript
    }, {
      beginKeywords: 'constructor', end: /\{/, excludeEnd: true,
      contains: ['self', {
        className: 'params',
        begin: /\(/, end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE],
        illegal: /["'\(]/
      }]
    }, { // prevent references like module.id from being higlighted as module definitions
      begin: /module\./,
      keywords: { built_in: 'module' },
      relevance: 0
    }, {
      beginKeywords: 'module', end: /\{/, excludeEnd: true
    }, {
      beginKeywords: 'interface', end: /\{/, excludeEnd: true,
      keywords: 'interface extends'
    }, {
      begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
    }, {
      begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
    }, {
      className: 'meta', begin: '@[A-Za-z]+'
    }]
  };
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    keywords: {
      keyword:
      // Value types
      'char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 ' + 'uint16 uint32 uint64 float double bool struct enum string void ' +
      // Reference types
      'weak unowned owned ' +
      // Modifiers
      'async signal static abstract interface override virtual delegate ' +
      // Control Structures
      'if while do for foreach else switch case break default return try catch ' +
      // Visibility
      'public private protected internal ' +
      // Other
      'using new this get set const stdout stdin stderr var',
      built_in: 'DBus GLib CCode Gee Object Gtk Posix',
      literal: 'false true null'
    },
    contains: [{
      className: 'class',
      beginKeywords: 'class interface namespace', end: '{', excludeEnd: true,
      illegal: '[^,:\\n\\s\\.]',
      contains: [hljs.UNDERSCORE_TITLE_MODE]
    }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
      className: 'string',
      begin: '"""', end: '"""',
      relevance: 5
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, {
      className: 'meta',
      begin: '^#', end: '$',
      relevance: 2
    }]
  };
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['vb'],
    case_insensitive: true,
    keywords: {
      keyword: 'addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval ' + /* a-b */
      'call case catch class compare const continue custom declare default delegate dim distinct do ' + /* c-d */
      'each equals else elseif end enum erase error event exit explicit finally for friend from function ' + /* e-f */
      'get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue ' + /* g-i */
      'join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass ' + /* j-m */
      'namespace narrowing new next not notinheritable notoverridable ' + /* n */
      'of off on operator option optional or order orelse overloads overridable overrides ' + /* o */
      'paramarray partial preserve private property protected public ' + /* p */
      'raiseevent readonly redim rem removehandler resume return ' + /* r */
      'select set shadows shared skip static step stop structure strict sub synclock ' + /* s */
      'take text then throw to try unicode until using when where while widening with withevents writeonly xor', /* t-x */
      built_in: 'boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype ' + /* b-c */
      'date decimal directcast double gettype getxmlnamespace iif integer long object ' + /* d-o */
      'sbyte short single string trycast typeof uinteger ulong ushort', /* s-u */
      literal: 'true false nothing'
    },
    illegal: '//|{|}|endif|gosub|variant|wend', /* reserved deprecated keywords */
    contains: [hljs.inherit(hljs.QUOTE_STRING_MODE, { contains: [{ begin: '""' }] }), hljs.COMMENT('\'', '$', {
      returnBegin: true,
      contains: [{
        className: 'doctag',
        begin: '\'\'\'|<!--|-->',
        contains: [hljs.PHRASAL_WORDS_MODE]
      }, {
        className: 'doctag',
        begin: '</?', end: '>',
        contains: [hljs.PHRASAL_WORDS_MODE]
      }]
    }), hljs.C_NUMBER_MODE, {
      className: 'meta',
      begin: '#', end: '$',
      keywords: { 'meta-keyword': 'if else elseif end region externalsource' }
    }]
  };
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    aliases: ['vbs'],
    case_insensitive: true,
    keywords: {
      keyword: 'call class const dim do loop erase execute executeglobal exit for each next function ' + 'if then else on error option explicit new private property let get public randomize ' + 'redim rem select case set stop sub while wend with end to elseif is or xor and not ' + 'class_initialize class_terminate default preserve in me byval byref step resume goto',
      built_in: 'lcase month vartype instrrev ubound setlocale getobject rgb getref string ' + 'weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency ' + 'conversions csng timevalue second year space abs clng timeserial fixs len asc ' + 'isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate ' + 'instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex ' + 'chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim ' + 'strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion ' + 'scriptengine split scriptengineminorversion cint sin datepart ltrim sqr ' + 'scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw ' + 'chrw regexp server response request cstr err',
      literal: 'true false null nothing empty'
    },
    illegal: '//',
    contains: [hljs.inherit(hljs.QUOTE_STRING_MODE, { contains: [{ begin: '""' }] }), hljs.COMMENT(/'/, /$/, {
      relevance: 0
    }), hljs.C_NUMBER_MODE]
  };
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    subLanguage: 'xml',
    contains: [{
      begin: '<%', end: '%>',
      subLanguage: 'vbscript'
    }]
  };
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var SV_KEYWORDS = {
    keyword: 'accept_on alias always always_comb always_ff always_latch and assert assign ' + 'assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 ' + 'byte case casex casez cell chandle checker class clocking cmos config const ' + 'constraint context continue cover covergroup coverpoint cross deassign default ' + 'defparam design disable dist do edge else end endcase endchecker endclass ' + 'endclocking endconfig endfunction endgenerate endgroup endinterface endmodule ' + 'endpackage endprimitive endprogram endproperty endspecify endsequence endtable ' + 'endtask enum event eventually expect export extends extern final first_match for ' + 'force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 ' + 'if iff ifnone ignore_bins illegal_bins implements implies import incdir include ' + 'initial inout input inside instance int integer interconnect interface intersect ' + 'join join_any join_none large let liblist library local localparam logic longint ' + 'macromodule matches medium modport module nand negedge nettype new nexttime nmos ' + 'nor noshowcancelled not notif0 notif1 or output package packed parameter pmos ' + 'posedge primitive priority program property protected pull0 pull1 pulldown pullup ' + 'pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos ' + 'real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran ' + 'rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared ' + 'sequence shortint shortreal showcancelled signed small soft solve specify specparam ' + 'static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on ' + 'sync_reject_on table tagged task this throughout time timeprecision timeunit tran ' + 'tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 ' + 'unsigned until until_with untyped use uwire var vectored virtual void wait wait_order ' + 'wand weak weak0 weak1 while wildcard wire with within wor xnor xor',
    literal: 'null',
    built_in: '$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale ' + '$bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat ' + '$realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson ' + '$assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff ' + '$assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk ' + '$fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control ' + '$coverage_get $coverage_save $set_coverage_db_name $rose $stable $past ' + '$rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display ' + '$coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename ' + '$unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow ' + '$floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning ' + '$dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh ' + '$tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random ' + '$dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson ' + '$dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array ' + '$async$nand$array $async$or$array $async$nor$array $sync$and$array ' + '$sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf ' + '$async$and$plane $async$nand$plane $async$or$plane $async$nor$plane ' + '$sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system ' + '$display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo ' + '$write $readmemb $readmemh $writememh $value$plusargs ' + '$dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit ' + '$writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb ' + '$dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall ' + '$dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo ' + '$fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh ' + '$swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb ' + '$fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat ' + '$sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror'
  };
  return {
    aliases: ['v', 'sv', 'svh'],
    case_insensitive: false,
    keywords: SV_KEYWORDS, lexemes: /[\w\$]+/,
    contains: [hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE, hljs.QUOTE_STRING_MODE, {
      className: 'number',
      contains: [hljs.BACKSLASH_ESCAPE],
      variants: [{ begin: '\\b((\\d+\'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)' }, { begin: '\\B((\'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)' }, { begin: '\\b([0-9_])+', relevance: 0 }]
    },
    /* parameters to instances */
    {
      className: 'variable',
      variants: [{ begin: '#\\((?!parameter).+\\)' }, { begin: '\\.\\w+', relevance: 0 }]
    }, {
      className: 'meta',
      begin: '`', end: '$',
      keywords: { 'meta-keyword': 'define __FILE__ ' + '__LINE__ begin_keywords celldefine default_nettype define ' + 'else elsif end_keywords endcelldefine endif ifdef ifndef ' + 'include line nounconnected_drive pragma resetall timescale ' + 'unconnected_drive undef undefineall' },
      relevance: 0
    }]
  }; // return
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  // Regular expression for VHDL numeric literals.

  // Decimal literal:
  var INTEGER_RE = '\\d(_|\\d)*';
  var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
  var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';
  // Based literal:
  var BASED_INTEGER_RE = '\\w+';
  var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

  var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

  return {
    case_insensitive: true,
    keywords: {
      keyword: 'abs access after alias all and architecture array assert assume assume_guarantee attribute ' + 'begin block body buffer bus case component configuration constant context cover disconnect ' + 'downto default else elsif end entity exit fairness file for force function generate ' + 'generic group guarded if impure in inertial inout is label library linkage literal ' + 'loop map mod nand new next nor not null of on open or others out package port ' + 'postponed procedure process property protected pure range record register reject ' + 'release rem report restrict restrict_guarantee return rol ror select sequence ' + 'severity shared signal sla sll sra srl strong subtype then to transport type ' + 'unaffected units until use variable vmode vprop vunit wait when while with xnor xor',
      built_in: 'boolean bit character ' + 'integer time delay_length natural positive ' + 'string bit_vector file_open_kind file_open_status ' + 'std_logic std_logic_vector unsigned signed boolean_vector integer_vector ' + 'std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signed' + 'real_vector time_vector',
      literal: 'false true note warning error failure ' + // severity_level
      'line text side width' // textio
    },
    illegal: '{',
    contains: [hljs.C_BLOCK_COMMENT_MODE, // VHDL-2008 block commenting.
    hljs.COMMENT('--', '$'), hljs.QUOTE_STRING_MODE, {
      className: 'number',
      begin: NUMBER_RE,
      relevance: 0
    }, {
      className: 'string',
      begin: '\'(U|X|0|1|Z|W|L|H|-)\'',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      className: 'symbol',
      begin: '\'[A-Za-z](_?[A-Za-z0-9])*',
      contains: [hljs.BACKSLASH_ESCAPE]
    }]
  };
};

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    lexemes: /[!#@\w]+/,
    keywords: {
      keyword:
      // express version except: ! & * < = > !! # @ @@
      'N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope ' + 'cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ' + 'ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 ' + 'profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor ' + 'so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew ' + 'tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ ' +
      // full version
      'Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload ' + 'bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap ' + 'cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor ' + 'endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap ' + 'imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview ' + 'lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap ' + 'nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ' + 'ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding ' + 'scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace ' + 'startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious ' + 'trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew ' + 'vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank',
      built_in: //built in func
      'synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv ' + 'complete_check add getwinposx getqflist getwinposy screencol ' + 'clearmatches empty extend getcmdpos mzeval garbagecollect setreg ' + 'ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable ' + 'shiftwidth max sinh isdirectory synID system inputrestore winline ' + 'atan visualmode inputlist tabpagewinnr round getregtype mapcheck ' + 'hasmapto histdel argidx findfile sha256 exists toupper getcmdline ' + 'taglist string getmatches bufnr strftime winwidth bufexists ' + 'strtrans tabpagebuflist setcmdpos remote_read printf setloclist ' + 'getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval ' + 'resolve libcallnr foldclosedend reverse filter has_key bufname ' + 'str2float strlen setline getcharmod setbufvar index searchpos ' + 'shellescape undofile foldclosed setqflist buflisted strchars str2nr ' + 'virtcol floor remove undotree remote_expr winheight gettabwinvar ' + 'reltime cursor tabpagenr finddir localtime acos getloclist search ' + 'tanh matchend rename gettabvar strdisplaywidth type abs py3eval ' + 'setwinvar tolower wildmenumode log10 spellsuggest bufloaded ' + 'synconcealed nextnonblank server2client complete settabwinvar ' + 'executable input wincol setmatches getftype hlID inputsave ' + 'searchpair or screenrow line settabvar histadd deepcopy strpart ' + 'remote_peek and eval getftime submatch screenchar winsaveview ' + 'matchadd mkdir screenattr getfontname libcall reltimestr getfsize ' + 'winnr invert pow getbufline byte2line soundfold repeat fnameescape ' + 'tagfiles sin strwidth spellbadword trunc maparg log lispindent ' + 'hostname setpos globpath remote_foreground getchar synIDattr ' + 'fnamemodify cscope_connection stridx winbufnr indent min ' + 'complete_add nr2char searchpairpos inputdialog values matchlist ' + 'items hlexists strridx browsedir expand fmod pathshorten line2byte ' + 'argc count getwinvar glob foldtextresult getreg foreground cosh ' + 'matchdelete has char2nr simplify histget searchdecl iconv ' + 'winrestcmd pumvisible writefile foldlevel haslocaldir keys cos ' + 'matchstr foldtext histnr tan tempname getcwd byteidx getbufvar ' + 'islocked escape eventhandler remote_send serverlist winrestview ' + 'synstack pyeval prevnonblank readfile cindent filereadable changenr ' + 'exp'
    },
    illegal: /;/,
    contains: [hljs.NUMBER_MODE, hljs.APOS_STRING_MODE,

    /*
    A double quote can start either a string or a line comment. Strings are
    ended before the end of a line by another double quote and can contain
    escaped double-quotes and post-escaped line breaks.
     Also, any double quote at the beginning of a line is a comment but we
    don't handle that properly at the moment: any double quote inside will
    turn them into a string. Handling it properly will require a smarter
    parser.
    */
    {
      className: 'string',
      begin: /"(\\"|\n\\|[^"\n])*"/
    }, hljs.COMMENT('"', '$'), {
      className: 'variable',
      begin: /[bwtglsav]:[\w\d_]*/
    }, {
      className: 'function',
      beginKeywords: 'function function!', end: '$',
      relevance: 0,
      contains: [hljs.TITLE_MODE, {
        className: 'params',
        begin: '\\(', end: '\\)'
      }]
    }, {
      className: 'symbol',
      begin: /<[\w-]+>/
    }]
  };
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  return {
    case_insensitive: true,
    lexemes: '[.%]?' + hljs.IDENT_RE,
    keywords: {
      keyword: 'lock rep repe repz repne repnz xaquire xrelease bnd nobnd ' + 'aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63',
      built_in:
      // Instruction pointer
      'ip eip rip ' +
      // 8-bit registers
      'al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ' +
      // 16-bit registers
      'ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w ' +
      // 32-bit registers
      'eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d ' +
      // 64-bit registers
      'rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 ' +
      // Segment registers
      'cs ds es fs gs ss ' +
      // Floating point stack registers
      'st st0 st1 st2 st3 st4 st5 st6 st7 ' +
      // MMX Registers
      'mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 ' +
      // SSE registers
      'xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 ' + 'xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ' +
      // AVX registers
      'ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ' + 'ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 ' +
      // AVX-512F registers
      'zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 ' + 'zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 ' +
      // AVX-512F mask registers
      'k0 k1 k2 k3 k4 k5 k6 k7 ' +
      // Bound (MPX) register
      'bnd0 bnd1 bnd2 bnd3 ' +
      // Special register
      'cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 ' +
      // NASM altreg package
      'r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b ' + 'r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d ' + 'r0h r1h r2h r3h ' + 'r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l ' + 'db dw dd dq dt ddq do dy dz ' + 'resb resw resd resq rest resdq reso resy resz ' + 'incbin equ times ' + 'byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr',

      meta: '%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif ' + '%if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep ' + '%endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment ' + '.nolist ' + '__FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ ' + '__UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend ' + 'align alignb sectalign daz nodaz up down zero default option assume public ' + 'bits use16 use32 use64 default section segment absolute extern global common cpu float ' + '__utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ ' + '__float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ ' + '__Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e ' + 'float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__'
    },
    contains: [hljs.COMMENT(';', '$', {
      relevance: 0
    }), {
      className: 'number',
      variants: [
      // Float number and x87 BCD
      {
        begin: '\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|' + '(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b',
        relevance: 0
      },

      // Hex number in $
      { begin: '\\$[0-9][0-9A-Fa-f]*', relevance: 0 },

      // Number in H,D,T,Q,O,B,Y suffix
      { begin: '\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b' },

      // Number in X,D,T,Q,O,B,Y prefix
      { begin: '\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b' }]
    },
    // Double quote string
    hljs.QUOTE_STRING_MODE, {
      className: 'string',
      variants: [
      // Single-quoted string
      { begin: '\'', end: '[^\\\\]\'' },
      // Backquoted string
      { begin: '`', end: '[^\\\\]`' }],
      relevance: 0
    }, {
      className: 'symbol',
      variants: [
      // Global label and local label
      { begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)' },
      // Macro-local label
      { begin: '^\\s*%%[A-Za-z0-9_$#@~.?]*:' }],
      relevance: 0
    },
    // Macro parameter
    {
      className: 'subst',
      begin: '%[0-9]+',
      relevance: 0
    },
    // Macro parameter
    {
      className: 'subst',
      begin: '%!\S+',
      relevance: 0
    }, {
      className: 'meta',
      begin: /^\s*\.[\w_-]+/
    }]
  };
};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var BUILTIN_MODULES = 'ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo ' + 'StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts';

  var XL_KEYWORDS = {
    keyword: 'if then else do while until for loop import with is as where when by data constant ' + 'integer real text name boolean symbol infix prefix postfix block tree',
    literal: 'true false nil',
    built_in: 'in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin ' + 'acos atan exp expm1 log log2 log10 log1p pi at text_length text_range ' + 'text_find text_replace contains page slide basic_slide title_slide ' + 'title subtitle fade_in fade_out fade_at clear_color color line_color ' + 'line_width texture_wrap texture_transform texture scale_?x scale_?y ' + 'scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y ' + 'rotate_?z? rectangle circle ellipse sphere path line_to move_to ' + 'quad_to curve_to theme background contents locally time mouse_?x ' + 'mouse_?y mouse_buttons ' + BUILTIN_MODULES
  };

  var DOUBLE_QUOTE_TEXT = {
    className: 'string',
    begin: '"', end: '"', illegal: '\\n'
  };
  var SINGLE_QUOTE_TEXT = {
    className: 'string',
    begin: '\'', end: '\'', illegal: '\\n'
  };
  var LONG_TEXT = {
    className: 'string',
    begin: '<<', end: '>>'
  };
  var BASED_NUMBER = {
    className: 'number',
    begin: '[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?'
  };
  var IMPORT = {
    beginKeywords: 'import', end: '$',
    keywords: XL_KEYWORDS,
    contains: [DOUBLE_QUOTE_TEXT]
  };
  var FUNCTION_DEFINITION = {
    className: 'function',
    begin: /[a-z][^\n]*->/, returnBegin: true, end: /->/,
    contains: [hljs.inherit(hljs.TITLE_MODE, { starts: {
        endsWithParent: true,
        keywords: XL_KEYWORDS
      } })]
  };
  return {
    aliases: ['tao'],
    lexemes: /[a-zA-Z][a-zA-Z0-9_?]*/,
    keywords: XL_KEYWORDS,
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, DOUBLE_QUOTE_TEXT, SINGLE_QUOTE_TEXT, LONG_TEXT, FUNCTION_DEFINITION, IMPORT, BASED_NUMBER, hljs.NUMBER_MODE]
  };
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var KEYWORDS = 'for let if while then else return where group by xquery encoding version' + 'module namespace boundary-space preserve strip default collation base-uri ordering' + 'copy-namespaces order declare import schema namespace function option in allowing empty' + 'at tumbling window sliding window start when only end when previous next stable ascending' + 'descending empty greatest least some every satisfies switch case typeswitch try catch and' + 'or to union intersect instance of treat as castable cast map array delete insert into' + 'replace value rename copy modify update';
  var LITERAL = 'false true xs:string xs:integer element item xs:date xs:datetime xs:float xs:double xs:decimal QName xs:anyURI xs:long xs:int xs:short xs:byte attribute';
  var VAR = {
    begin: /\$[a-zA-Z0-9\-]+/
  };

  var NUMBER = {
    className: 'number',
    begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
    relevance: 0
  };

  var STRING = {
    className: 'string',
    variants: [{ begin: /"/, end: /"/, contains: [{ begin: /""/, relevance: 0 }] }, { begin: /'/, end: /'/, contains: [{ begin: /''/, relevance: 0 }] }]
  };

  var ANNOTATION = {
    className: 'meta',
    begin: '%\\w+'
  };

  var COMMENT = {
    className: 'comment',
    begin: '\\(:', end: ':\\)',
    relevance: 10,
    contains: [{
      className: 'doctag', begin: '@\\w+'
    }]
  };

  var METHOD = {
    begin: '{', end: '}'
  };

  var CONTAINS = [VAR, STRING, NUMBER, COMMENT, ANNOTATION, METHOD];
  METHOD.contains = CONTAINS;

  return {
    aliases: ['xpath', 'xq'],
    case_insensitive: false,
    lexemes: /[a-zA-Z\$][a-zA-Z0-9_:\-]*/,
    illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
    keywords: {
      keyword: KEYWORDS,
      literal: LITERAL
    },
    contains: CONTAINS
  };
};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (hljs) {
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [{
      begin: 'b"', end: '"'
    }, {
      begin: 'b\'', end: '\''
    }, hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null }), hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null })]
  };
  var NUMBER = { variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE] };
  return {
    aliases: ['zep'],
    case_insensitive: true,
    keywords: 'and include_once list abstract global private echo interface as static endswitch ' + 'array null if endwhile or const for endforeach self var let while isset public ' + 'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' + 'return parent clone use __CLASS__ __LINE__ else break print eval new ' + 'catch __METHOD__ case exception default die require __FUNCTION__ ' + 'enddeclare final try switch continue endfor endif declare unset true false ' + 'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' + 'yield finally int uint long ulong char uchar double float bool boolean string' + 'likely unlikely',
    contains: [hljs.C_LINE_COMMENT_MODE, hljs.HASH_COMMENT_MODE, hljs.COMMENT('/\\*', '\\*/', {
      contains: [{
        className: 'doctag',
        begin: '@[A-Za-z]+'
      }]
    }), hljs.COMMENT('__halt_compiler.+?;', false, {
      endsWithParent: true,
      keywords: '__halt_compiler',
      lexemes: hljs.UNDERSCORE_IDENT_RE
    }), {
      className: 'string',
      begin: '<<<[\'"]?\\w+[\'"]?$', end: '^\\w+;',
      contains: [hljs.BACKSLASH_ESCAPE]
    }, {
      // swallow composed identifiers to avoid parsing them as keywords
      begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
    }, {
      className: 'function',
      beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
      illegal: '\\$|\\[|%',
      contains: [hljs.UNDERSCORE_TITLE_MODE, {
        className: 'params',
        begin: '\\(', end: '\\)',
        contains: ['self', hljs.C_BLOCK_COMMENT_MODE, STRING, NUMBER]
      }]
    }, {
      className: 'class',
      beginKeywords: 'class interface', end: '{', excludeEnd: true,
      illegal: /[:\(\$"]/,
      contains: [{ beginKeywords: 'extends implements' }, hljs.UNDERSCORE_TITLE_MODE]
    }, {
      beginKeywords: 'namespace', end: ';',
      illegal: /[\.']/,
      contains: [hljs.UNDERSCORE_TITLE_MODE]
    }, {
      beginKeywords: 'use', end: ';',
      contains: [hljs.UNDERSCORE_TITLE_MODE]
    }, {
      begin: '=>' // No markup, just a relevance booster
    }, STRING, NUMBER]
  };
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animejs = __webpack_require__(1);

var _animejs2 = _interopRequireDefault(_animejs);

var _util = __webpack_require__(0);

var _modal = __webpack_require__(2);

var _modal2 = _interopRequireDefault(_modal);

var _modal3 = __webpack_require__(3);

var _modal4 = _interopRequireDefault(_modal3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimeModal = function () {
  function AnimeModal() {
    _classCallCheck(this, AnimeModal);

    this.isOpen = false;
    this.isAnimate = false;
    this.button = document.getElementById('js-anime-modal-button');
  }

  _createClass(AnimeModal, [{
    key: 'init',
    value: function init() {
      var div = document.createElement('div');
      div.insertAdjacentHTML('beforeend', (0, _modal2.default)(_modal4.default));

      this.overlay = div.firstChild;
      this.modal = this.overlay.querySelector('.js-modal');
      this.buttonClose = this.overlay.querySelector('.js-modal-close');

      document.body.appendChild(this.overlay);
    }
  }, {
    key: 'addEvent',
    value: function addEvent() {
      var options = (0, _util.enablePassiveEventListeners)() ? {
        passive: true
      } : false;

      this.button.addEventListener('click', this.onClickButton.bind(this), options);
      this.overlay.addEventListener('click', this.onClickOverlay.bind(this), options);
      this.buttonClose.addEventListener('click', this.onClickButtonClose.bind(this), options);
    }
  }, {
    key: 'onClickButton',
    value: function onClickButton() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: 'onClickOverlay',
    value: function onClickOverlay(e) {
      if (e.target === this.overlay) {
        this.close();
      }
    }
  }, {
    key: 'onClickButtonClose',
    value: function onClickButtonClose() {
      this.close();
    }
  }, {
    key: 'open',
    value: function open() {
      var _this = this;

      if (this.isAnimate) return;

      this.isAnimate = true;

      this.overlay.style.display = 'block';

      (0, _animejs2.default)({
        targets: this.overlay,
        opacity: [0, 1],
        complete: function complete() {
          _this.isOpen = true;
          _this.isAnimate = false;
        },
        update: function update() {
          console.log('opacity: ' + _this.overlay.style.opacity);
        }
      });
    }
  }, {
    key: 'close',
    value: function close() {
      var _this2 = this;

      if (this.isAnimate) return;

      this.isAnimate = true;

      (0, _animejs2.default)({
        targets: this.overlay,
        opacity: [1, 0],
        complete: function complete() {
          _this2.overlay.style.display = 'none';
          _this2.isOpen = false;
          _this2.isAnimate = false;
        },
        update: function update() {
          console.log('opacity: ' + _this2.overlay.style.opacity);
        }
      });
    }
  }]);

  return AnimeModal;
}();

exports.default = AnimeModal;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(186).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 186 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(188)(undefined);
// imports


// module
exports.push([module.i, "._2K-bWbA64Ta8RjQ7CI4v78 {\n  display: none;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n._2DHA8wb9alWd3WO2E3kTrS {\n  position: absolute;\n  top: 100px;\n  right: 0;\n  bottom: 100px;\n  left: 0;\n  width: 640px;\n  margin: auto;\n  padding: 20px;\n  background-color: #fff;\n  box-sizing: border-box; }\n", ""]);

// exports
exports.locals = {
	"modal_overlay": "_2K-bWbA64Ta8RjQ7CI4v78",
	"modal": "_2DHA8wb9alWd3WO2E3kTrS"
};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(190);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animejs = __webpack_require__(1);

var _animejs2 = _interopRequireDefault(_animejs);

var _util = __webpack_require__(0);

var _modal = __webpack_require__(2);

var _modal2 = _interopRequireDefault(_modal);

var _modal3 = __webpack_require__(3);

var _modal4 = _interopRequireDefault(_modal3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimeModal = function () {
  function AnimeModal() {
    _classCallCheck(this, AnimeModal);

    this.isOpen = false;
    this.isAnimate = false;
    this.button = document.getElementById('js-anime-modal-button2');
  }

  _createClass(AnimeModal, [{
    key: 'init',
    value: function init() {
      var div = document.createElement('div');
      div.insertAdjacentHTML('beforeend', (0, _modal2.default)(_modal4.default));

      this.overlay = div.firstChild;
      this.modal = this.overlay.querySelector('.js-modal');
      this.buttonClose = this.overlay.querySelector('.js-modal-close');

      document.body.appendChild(this.overlay);
    }
  }, {
    key: 'addEvent',
    value: function addEvent() {
      var options = (0, _util.enablePassiveEventListeners)() ? {
        passive: true
      } : false;

      this.button.addEventListener('click', this.onClickButton.bind(this), options);
      this.overlay.addEventListener('click', this.onClickOverlay.bind(this), options);
      this.buttonClose.addEventListener('click', this.onClickButtonClose.bind(this), options);
    }
  }, {
    key: 'onClickButton',
    value: function onClickButton() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: 'onClickOverlay',
    value: function onClickOverlay(e) {
      if (e.target === this.overlay) {
        this.close();
      }
    }
  }, {
    key: 'onClickButtonClose',
    value: function onClickButtonClose() {
      this.close();
    }
  }, {
    key: 'open',
    value: function open() {
      var _this = this;

      if (this.isAnimate) return;

      this.isAnimate = true;

      this.overlay.style.display = 'block';

      (0, _animejs2.default)({
        targets: this.overlay,
        opacity: [0, 1],
        easing: 'easeOutQuad',
        complete: function complete() {
          _this.isOpen = true;
          _this.isAnimate = false;
        }
      });
    }
  }, {
    key: 'close',
    value: function close() {
      var _this2 = this;

      if (this.isAnimate) return;

      this.isAnimate = true;

      (0, _animejs2.default)({
        targets: this.overlay,
        opacity: [1, 0],
        easing: 'easeOutQuad',
        complete: function complete() {
          _this2.overlay.style.display = 'none';
          _this2.isOpen = false;
          _this2.isAnimate = false;
        }
      });
    }
  }]);

  return AnimeModal;
}();

exports.default = AnimeModal;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _velocityAnimate = __webpack_require__(193);

var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

var _util = __webpack_require__(0);

var _modal = __webpack_require__(2);

var _modal2 = _interopRequireDefault(_modal);

var _modal3 = __webpack_require__(3);

var _modal4 = _interopRequireDefault(_modal3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VelocityModal = function () {
  function VelocityModal() {
    _classCallCheck(this, VelocityModal);

    this.isOpen = false;
    this.isAnimate = false;
    this.button = document.getElementById('js-velocity-modal-button');
    this.button2 = document.getElementById('js-anime-modal-button2');
  }

  _createClass(VelocityModal, [{
    key: 'init',
    value: function init() {
      // append modal
      var div = document.createElement('div');
      div.insertAdjacentHTML('beforeend', (0, _modal2.default)(_modal4.default));

      this.overlay = div.firstChild;
      this.modal = this.overlay.querySelector('.js-modal');
      this.buttonClose = this.overlay.querySelector('.js-modal-close');

      document.body.appendChild(this.overlay);
    }
  }, {
    key: 'addEvent',
    value: function addEvent() {
      var options = (0, _util.enablePassiveEventListeners)() ? {
        passive: true
      } : false;

      this.button.addEventListener('click', this.onClickButton.bind(this), options);
      this.overlay.addEventListener('click', this.onClickOverlay.bind(this), options);
      this.buttonClose.addEventListener('click', this.onClickButtonClose.bind(this), options);
    }
  }, {
    key: 'onClickButton',
    value: function onClickButton() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: 'onClickOverlay',
    value: function onClickOverlay(e) {
      if (e.target === this.overlay) {
        this.close();
      }
    }
  }, {
    key: 'onClickButtonClose',
    value: function onClickButtonClose() {
      this.close();
    }
  }, {
    key: 'open',
    value: function open() {
      var _this = this;

      if (this.isAnimate) return;

      this.isAnimate = true;

      this.overlay.style.display = 'block';

      (0, _velocityAnimate2.default)(this.overlay, {
        opacity: [1, 0]
      }, {
        complete: function complete() {
          _this.isOpen = true;
          _this.isAnimate = false;
        }
      });
    }
  }, {
    key: 'close',
    value: function close() {
      var _this2 = this;

      if (this.isAnimate) return;

      this.isAnimate = true;

      (0, _velocityAnimate2.default)(this.overlay, {
        opacity: [0, 1]
      }, {
        complete: function complete() {
          _this2.overlay.style.display = 'none';
          _this2.isOpen = false;
          _this2.isAnimate = false;
        }
      });
    }
  }]);

  return VelocityModal;
}();

exports.default = VelocityModal;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

/*************************
 Velocity jQuery Shim
 *************************/

/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

(function (window) {
	"use strict";
	/***************
  Setup
  ***************/

	/* If jQuery is already loaded, there's no point in loading this shim. */

	if (window.jQuery) {
		return;
	}

	/* jQuery base. */
	var $ = function $(selector, context) {
		return new $.fn.init(selector, context);
	};

	/********************
  Private Methods
  ********************/

	/* jQuery */
	$.isWindow = function (obj) {
		/* jshint eqeqeq: false */
		return obj && obj === obj.window;
	};

	/* jQuery */
	$.type = function (obj) {
		if (!obj) {
			return obj + "";
		}

		return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

	/* jQuery */
	$.isArray = Array.isArray || function (obj) {
		return $.type(obj) === "array";
	};

	/* jQuery */
	function isArraylike(obj) {
		var length = obj.length,
		    type = $.type(obj);

		if (type === "function" || $.isWindow(obj)) {
			return false;
		}

		if (obj.nodeType === 1 && length) {
			return true;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}

	/***************
  $ Methods
  ***************/

	/* jQuery: Support removed for IE<9. */
	$.isPlainObject = function (obj) {
		var key;

		if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
			return false;
		}

		try {
			if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
				return false;
			}
		} catch (e) {
			return false;
		}

		for (key in obj) {}

		return key === undefined || hasOwn.call(obj, key);
	};

	/* jQuery */
	$.each = function (obj, callback, args) {
		var value,
		    i = 0,
		    length = obj.length,
		    isArray = isArraylike(obj);

		if (args) {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (!obj.hasOwnProperty(i)) {
						continue;
					}
					value = callback.apply(obj[i], args);

					if (value === false) {
						break;
					}
				}
			}
		} else {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (!obj.hasOwnProperty(i)) {
						continue;
					}
					value = callback.call(obj[i], i, obj[i]);

					if (value === false) {
						break;
					}
				}
			}
		}

		return obj;
	};

	/* Custom */
	$.data = function (node, key, value) {
		/* $.getData() */
		if (value === undefined) {
			var getId = node[$.expando],
			    store = getId && cache[getId];

			if (key === undefined) {
				return store;
			} else if (store) {
				if (key in store) {
					return store[key];
				}
			}
			/* $.setData() */
		} else if (key !== undefined) {
			var setId = node[$.expando] || (node[$.expando] = ++$.uuid);

			cache[setId] = cache[setId] || {};
			cache[setId][key] = value;

			return value;
		}
	};

	/* Custom */
	$.removeData = function (node, keys) {
		var id = node[$.expando],
		    store = id && cache[id];

		if (store) {
			// Cleanup the entire store if no keys are provided.
			if (!keys) {
				delete cache[id];
			} else {
				$.each(keys, function (_, key) {
					delete store[key];
				});
			}
		}
	};

	/* jQuery */
	$.extend = function () {
		var src,
		    copyIsArray,
		    copy,
		    name,
		    options,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		if (typeof target === "boolean") {
			deep = target;

			target = arguments[i] || {};
			i++;
		}

		if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && $.type(target) !== "function") {
			target = {};
		}

		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {
			if (options = arguments[i]) {
				for (name in options) {
					if (!options.hasOwnProperty(name)) {
						continue;
					}
					src = target[name];
					copy = options[name];

					if (target === copy) {
						continue;
					}

					if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && $.isArray(src) ? src : [];
						} else {
							clone = src && $.isPlainObject(src) ? src : {};
						}

						target[name] = $.extend(deep, clone, copy);
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		return target;
	};

	/* jQuery 1.4.3 */
	$.queue = function (elem, type, data) {
		function $makeArray(arr, results) {
			var ret = results || [];

			if (arr) {
				if (isArraylike(Object(arr))) {
					/* $.merge */
					(function (first, second) {
						var len = +second.length,
						    j = 0,
						    i = first.length;

						while (j < len) {
							first[i++] = second[j++];
						}

						if (len !== len) {
							while (second[j] !== undefined) {
								first[i++] = second[j++];
							}
						}

						first.length = i;

						return first;
					})(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					[].push.call(ret, arr);
				}
			}

			return ret;
		}

		if (!elem) {
			return;
		}

		type = (type || "fx") + "queue";

		var q = $.data(elem, type);

		if (!data) {
			return q || [];
		}

		if (!q || $.isArray(data)) {
			q = $.data(elem, type, $makeArray(data));
		} else {
			q.push(data);
		}

		return q;
	};

	/* jQuery 1.4.3 */
	$.dequeue = function (elems, type) {
		/* Custom: Embed element iteration. */
		$.each(elems.nodeType ? [elems] : elems, function (i, elem) {
			type = type || "fx";

			var queue = $.queue(elem, type),
			    fn = queue.shift();

			if (fn === "inprogress") {
				fn = queue.shift();
			}

			if (fn) {
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				fn.call(elem, function () {
					$.dequeue(elem, type);
				});
			}
		});
	};

	/******************
  $.fn Methods
  ******************/

	/* jQuery */
	$.fn = $.prototype = {
		init: function init(selector) {
			/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
			if (selector.nodeType) {
				this[0] = selector;

				return this;
			} else {
				throw new Error("Not a DOM node.");
			}
		},
		offset: function offset() {
			/* jQuery altered code: Dropped disconnected DOM node checking. */
			var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };

			return {
				top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
				left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
			};
		},
		position: function position() {
			/* jQuery */
			function offsetParentFn(elem) {
				var offsetParent = elem.offsetParent;

				while (offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || document;
			}

			/* Zepto */
			var elem = this[0],
			    offsetParent = offsetParentFn(elem),
			    offset = this.offset(),
			    parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? { top: 0, left: 0 } : $(offsetParent).offset();

			offset.top -= parseFloat(elem.style.marginTop) || 0;
			offset.left -= parseFloat(elem.style.marginLeft) || 0;

			if (offsetParent.style) {
				parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
				parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
			}

			return {
				top: offset.top - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		}
	};

	/**********************
  Private Variables
  **********************/

	/* For $.data() */
	var cache = {};
	$.expando = "velocity" + new Date().getTime();
	$.uuid = 0;

	/* For $.queue() */
	var class2type = {},
	    hasOwn = class2type.hasOwnProperty,
	    toString = class2type.toString;

	var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
	for (var i = 0; i < types.length; i++) {
		class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
	}

	/* Makes $(node) possible, without having to call init. */
	$.fn.init.prototype = $.fn;

	/* Globalize Velocity onto the window, and assign its Utilities property. */
	window.Velocity = { Utilities: $ };
})(window);

/******************
 Velocity.js
 ******************/

(function (factory) {
	"use strict";
	/* CommonJS module. */

	if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
		module.exports = factory();
		/* AMD module. */
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		/* Browser globals. */
	} else {
		factory();
	}
})(function () {
	"use strict";

	return function (global, window, document, undefined) {

		/***************
   Summary
   ***************/

		/*
   - CSS: CSS stack that works independently from the rest of Velocity.
   - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
   - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
   - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
   Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
   - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
   - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
   - completeCall(): Handles the cleanup process for each Velocity call.
   */

		/*********************
   Helper Functions
   *********************/

		/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
		var IE = function () {
			if (document.documentMode) {
				return document.documentMode;
			} else {
				for (var i = 7; i > 4; i--) {
					var div = document.createElement("div");

					div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

					if (div.getElementsByTagName("span").length) {
						div = null;

						return i;
					}
				}
			}

			return undefined;
		}();

		/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
		var rAFShim = function () {
			var timeLast = 0;

			return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
				var timeCurrent = new Date().getTime(),
				    timeDelta;

				/* Dynamically set delay on a per-tick basis to match 60fps. */
				/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
				timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
				timeLast = timeCurrent + timeDelta;

				return setTimeout(function () {
					callback(timeCurrent + timeDelta);
				}, timeDelta);
			};
		}();

		var performance = function () {
			var perf = window.performance || {};

			if (typeof perf.now !== "function") {
				var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : new Date().getTime();

				perf.now = function () {
					return new Date().getTime() - nowOffset;
				};
			}
			return perf;
		}();

		/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
		function compactSparseArray(array) {
			var index = -1,
			    length = array ? array.length : 0,
			    result = [];

			while (++index < length) {
				var value = array[index];

				if (value) {
					result.push(value);
				}
			}

			return result;
		}

		/**
   * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
   * on host objects like NamedNodeMap, NodeList, and HTMLCollection
   * (technically, since host objects have been implementation-dependent,
   * at least before ES2015, IE hasn't needed to work this way).
   * Also works on strings, fixes IE < 9 to allow an explicit undefined
   * for the 2nd argument (as in Firefox), and prevents errors when
   * called on other DOM objects.
   */
		var _slice = function () {
			var slice = Array.prototype.slice;

			try {
				// Can't be used with DOM elements in IE < 9
				slice.call(document.documentElement);
				return slice;
			} catch (e) {
				// Fails in IE < 9

				// This will work for genuine arrays, array-like objects, 
				// NamedNodeMap (attributes, entities, notations),
				// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
				// and will not fail on other DOM objects (as do DOM elements in IE < 9)
				return function (begin, end) {
					var len = this.length;

					if (typeof begin !== "number") {
						begin = 0;
					}
					// IE < 9 gets unhappy with an undefined end argument
					if (typeof end !== "number") {
						end = len;
					}
					// For native Array objects, we use the native slice function
					if (this.slice) {
						return slice.call(this, begin, end);
					}
					// For array like object we handle it ourselves.
					var i,
					    cloned = [],

					// Handle negative value for "begin"
					start = begin >= 0 ? begin : Math.max(0, len + begin),

					// Handle negative value for "end"
					upTo = end < 0 ? len + end : Math.min(end, len),

					// Actual expected size of the slice
					size = upTo - start;

					if (size > 0) {
						cloned = new Array(size);
						if (this.charAt) {
							for (i = 0; i < size; i++) {
								cloned[i] = this.charAt(start + i);
							}
						} else {
							for (i = 0; i < size; i++) {
								cloned[i] = this[start + i];
							}
						}
					}
					return cloned;
				};
			}
		}();

		/* .indexOf doesn't exist in IE<9 */
		var _inArray = function _inArray() {
			if (Array.prototype.includes) {
				return function (arr, val) {
					return arr.includes(val);
				};
			}
			if (Array.prototype.indexOf) {
				return function (arr, val) {
					return arr.indexOf(val) >= 0;
				};
			}
			return function (arr, val) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] === val) {
						return true;
					}
				}
				return false;
			};
		};

		function sanitizeElements(elements) {
			/* Unwrap jQuery/Zepto objects. */
			if (Type.isWrapped(elements)) {
				elements = _slice.call(elements);
				/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
			} else if (Type.isNode(elements)) {
				elements = [elements];
			}

			return elements;
		}

		var Type = {
			isNumber: function isNumber(variable) {
				return typeof variable === "number";
			},
			isString: function isString(variable) {
				return typeof variable === "string";
			},
			isArray: Array.isArray || function (variable) {
				return Object.prototype.toString.call(variable) === "[object Array]";
			},
			isFunction: function isFunction(variable) {
				return Object.prototype.toString.call(variable) === "[object Function]";
			},
			isNode: function isNode(variable) {
				return variable && variable.nodeType;
			},
			/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */
			/* NOTE: HTMLFormElements also have a length. */
			isWrapped: function isWrapped(variable) {
				return variable && variable !== window && Type.isNumber(variable.length) && !Type.isString(variable) && !Type.isFunction(variable) && !Type.isNode(variable) && (variable.length === 0 || Type.isNode(variable[0]));
			},
			isSVG: function isSVG(variable) {
				return window.SVGElement && variable instanceof window.SVGElement;
			},
			isEmptyObject: function isEmptyObject(variable) {
				for (var name in variable) {
					if (variable.hasOwnProperty(name)) {
						return false;
					}
				}

				return true;
			}
		};

		/*****************
   Dependencies
   *****************/

		var $,
		    isJQuery = false;

		if (global.fn && global.fn.jquery) {
			$ = global;
			isJQuery = true;
		} else {
			$ = window.Velocity.Utilities;
		}

		if (IE <= 8 && !isJQuery) {
			throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
		} else if (IE <= 7) {
			/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
			jQuery.fn.velocity = jQuery.fn.animate;

			/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
			return;
		}

		/*****************
   Constants
   *****************/

		var DURATION_DEFAULT = 400,
		    EASING_DEFAULT = "swing";

		/*************
   State
   *************/

		var Velocity = {
			/* Container for page-wide Velocity state data. */
			State: {
				/* Detect mobile devices to determine if mobileHA should be turned on. */
				isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
				/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
				isAndroid: /Android/i.test(navigator.userAgent),
				isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
				isChrome: window.chrome,
				isFirefox: /Firefox/i.test(navigator.userAgent),
				/* Create a cached element for re-use when checking for CSS property prefixes. */
				prefixElement: document.createElement("div"),
				/* Cache every prefix match to avoid repeating lookups. */
				prefixMatches: {},
				/* Cache the anchor used for animating window scrolling. */
				scrollAnchor: null,
				/* Cache the browser-specific property names associated with the scroll anchor. */
				scrollPropertyLeft: null,
				scrollPropertyTop: null,
				/* Keep track of whether our RAF tick is running. */
				isTicking: false,
				/* Container for every in-progress call to Velocity. */
				calls: [],
				delayedElements: {
					count: 0
				}
			},
			/* Velocity's custom CSS stack. Made global for unit testing. */
			CSS: {/* Defined below. */},
			/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
			Utilities: $,
			/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
			Redirects: {/* Manually registered by the user. */},
			Easings: {/* Defined below. */},
			/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
			Promise: window.Promise,
			/* Velocity option defaults, which can be overriden by the user. */
			defaults: {
				queue: "",
				duration: DURATION_DEFAULT,
				easing: EASING_DEFAULT,
				begin: undefined,
				complete: undefined,
				progress: undefined,
				display: undefined,
				visibility: undefined,
				loop: false,
				delay: false,
				mobileHA: true,
				/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
				_cacheValues: true,
				/* Advanced: Set to false if the promise should always resolve on empty element lists. */
				promiseRejectEmpty: true
			},
			/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
			init: function init(element) {
				$.data(element, "velocity", {
					/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
					isSVG: Type.isSVG(element),
					/* Keep track of whether the element is currently being animated by Velocity.
      This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
					isAnimating: false,
					/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					computedStyle: null,
					/* Tween data is cached for each animation on the element so that data can be passed across calls --
      in particular, end values are used as subsequent start values in consecutive Velocity calls. */
					tweensContainer: null,
					/* The full root property values of each CSS hook being animated on this element are cached so that:
      1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
      2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
					rootPropertyValueCache: {},
					/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
					transformCache: {}
				});
			},
			/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
			hook: null, /* Defined below. */
			/* Velocity-wide animation time remapping for testing purposes. */
			mock: false,
			version: { major: 1, minor: 5, patch: 0 },
			/* Set to 1 or 2 (most verbose) to output debug info to console. */
			debug: false,
			/* Use rAF high resolution timestamp when available */
			timestamp: true,
			/* Pause all animations */
			pauseAll: function pauseAll(queueName) {
				var currentTime = new Date().getTime();

				$.each(Velocity.State.calls, function (i, activeCall) {

					if (activeCall) {

						/* If we have a queueName and this call is not on that queue, skip */
						if (queueName !== undefined && (activeCall[2].queue !== queueName || activeCall[2].queue === false)) {
							return true;
						}

						/* Set call to paused */
						activeCall[5] = {
							resume: false
						};
					}
				});

				/* Pause timers on any currently delayed calls */
				$.each(Velocity.State.delayedElements, function (k, element) {
					if (!element) {
						return;
					}
					pauseDelayOnElement(element, currentTime);
				});
			},
			/* Resume all animations */
			resumeAll: function resumeAll(queueName) {
				var currentTime = new Date().getTime();

				$.each(Velocity.State.calls, function (i, activeCall) {

					if (activeCall) {

						/* If we have a queueName and this call is not on that queue, skip */
						if (queueName !== undefined && (activeCall[2].queue !== queueName || activeCall[2].queue === false)) {
							return true;
						}

						/* Set call to resumed if it was paused */
						if (activeCall[5]) {
							activeCall[5].resume = true;
						}
					}
				});
				/* Resume timers on any currently delayed calls */
				$.each(Velocity.State.delayedElements, function (k, element) {
					if (!element) {
						return;
					}
					resumeDelayOnElement(element, currentTime);
				});
			}
		};

		/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
		if (window.pageYOffset !== undefined) {
			Velocity.State.scrollAnchor = window;
			Velocity.State.scrollPropertyLeft = "pageXOffset";
			Velocity.State.scrollPropertyTop = "pageYOffset";
		} else {
			Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
			Velocity.State.scrollPropertyLeft = "scrollLeft";
			Velocity.State.scrollPropertyTop = "scrollTop";
		}

		/* Shorthand alias for jQuery's $.data() utility. */
		function Data(element) {
			/* Hardcode a reference to the plugin name. */
			var response = $.data(element, "velocity");

			/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
			return response === null ? undefined : response;
		}

		/**************
   Delay Timer
   **************/

		function pauseDelayOnElement(element, currentTime) {
			/* Check for any delay timers, and pause the set timeouts (while preserving time data)
    to be resumed when the "resume" command is issued */
			var data = Data(element);
			if (data && data.delayTimer && !data.delayPaused) {
				data.delayRemaining = data.delay - currentTime + data.delayBegin;
				data.delayPaused = true;
				clearTimeout(data.delayTimer.setTimeout);
			}
		}

		function resumeDelayOnElement(element, currentTime) {
			/* Check for any paused timers and resume */
			var data = Data(element);
			if (data && data.delayTimer && data.delayPaused) {
				/* If the element was mid-delay, re initiate the timeout with the remaining delay */
				data.delayPaused = false;
				data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
			}
		}

		/**************
   Easing
   **************/

		/* Step easing generator. */
		function generateStep(steps) {
			return function (p) {
				return Math.round(p * steps) * (1 / steps);
			};
		}

		/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
		function generateBezier(mX1, mY1, mX2, mY2) {
			var NEWTON_ITERATIONS = 4,
			    NEWTON_MIN_SLOPE = 0.001,
			    SUBDIVISION_PRECISION = 0.0000001,
			    SUBDIVISION_MAX_ITERATIONS = 10,
			    kSplineTableSize = 11,
			    kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
			    float32ArraySupported = "Float32Array" in window;

			/* Must contain four arguments. */
			if (arguments.length !== 4) {
				return false;
			}

			/* Arguments must be numbers. */
			for (var i = 0; i < 4; ++i) {
				if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
					return false;
				}
			}

			/* X values must be in the [0, 1] range. */
			mX1 = Math.min(mX1, 1);
			mX2 = Math.min(mX2, 1);
			mX1 = Math.max(mX1, 0);
			mX2 = Math.max(mX2, 0);

			var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

			function A(aA1, aA2) {
				return 1.0 - 3.0 * aA2 + 3.0 * aA1;
			}
			function B(aA1, aA2) {
				return 3.0 * aA2 - 6.0 * aA1;
			}
			function C(aA1) {
				return 3.0 * aA1;
			}

			function calcBezier(aT, aA1, aA2) {
				return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
			}

			function getSlope(aT, aA1, aA2) {
				return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
			}

			function newtonRaphsonIterate(aX, aGuessT) {
				for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
					var currentSlope = getSlope(aGuessT, mX1, mX2);

					if (currentSlope === 0.0) {
						return aGuessT;
					}

					var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
					aGuessT -= currentX / currentSlope;
				}

				return aGuessT;
			}

			function calcSampleValues() {
				for (var i = 0; i < kSplineTableSize; ++i) {
					mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
				}
			}

			function binarySubdivide(aX, aA, aB) {
				var currentX,
				    currentT,
				    i = 0;

				do {
					currentT = aA + (aB - aA) / 2.0;
					currentX = calcBezier(currentT, mX1, mX2) - aX;
					if (currentX > 0.0) {
						aB = currentT;
					} else {
						aA = currentT;
					}
				} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

				return currentT;
			}

			function getTForX(aX) {
				var intervalStart = 0.0,
				    currentSample = 1,
				    lastSample = kSplineTableSize - 1;

				for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
					intervalStart += kSampleStepSize;
				}

				--currentSample;

				var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
				    guessForT = intervalStart + dist * kSampleStepSize,
				    initialSlope = getSlope(guessForT, mX1, mX2);

				if (initialSlope >= NEWTON_MIN_SLOPE) {
					return newtonRaphsonIterate(aX, guessForT);
				} else if (initialSlope === 0.0) {
					return guessForT;
				} else {
					return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
				}
			}

			var _precomputed = false;

			function precompute() {
				_precomputed = true;
				if (mX1 !== mY1 || mX2 !== mY2) {
					calcSampleValues();
				}
			}

			var f = function f(aX) {
				if (!_precomputed) {
					precompute();
				}
				if (mX1 === mY1 && mX2 === mY2) {
					return aX;
				}
				if (aX === 0) {
					return 0;
				}
				if (aX === 1) {
					return 1;
				}

				return calcBezier(getTForX(aX), mY1, mY2);
			};

			f.getControlPoints = function () {
				return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }];
			};

			var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
			f.toString = function () {
				return str;
			};

			return f;
		}

		/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
		/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
   then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
		var generateSpringRK4 = function () {
			function springAccelerationForState(state) {
				return -state.tension * state.x - state.friction * state.v;
			}

			function springEvaluateStateWithDerivative(initialState, dt, derivative) {
				var state = {
					x: initialState.x + derivative.dx * dt,
					v: initialState.v + derivative.dv * dt,
					tension: initialState.tension,
					friction: initialState.friction
				};

				return { dx: state.v, dv: springAccelerationForState(state) };
			}

			function springIntegrateState(state, dt) {
				var a = {
					dx: state.v,
					dv: springAccelerationForState(state)
				},
				    b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
				    c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
				    d = springEvaluateStateWithDerivative(state, dt, c),
				    dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
				    dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

				state.x = state.x + dxdt * dt;
				state.v = state.v + dvdt * dt;

				return state;
			}

			return function springRK4Factory(tension, friction, duration) {

				var initState = {
					x: -1,
					v: 0,
					tension: null,
					friction: null
				},
				    path = [0],
				    time_lapsed = 0,
				    tolerance = 1 / 10000,
				    DT = 16 / 1000,
				    have_duration,
				    dt,
				    last_state;

				tension = parseFloat(tension) || 500;
				friction = parseFloat(friction) || 20;
				duration = duration || null;

				initState.tension = tension;
				initState.friction = friction;

				have_duration = duration !== null;

				/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
				if (have_duration) {
					/* Run the simulation without a duration. */
					time_lapsed = springRK4Factory(tension, friction);
					/* Compute the adjusted time delta. */
					dt = time_lapsed / duration * DT;
				} else {
					dt = DT;
				}

				while (true) {
					/* Next/step function .*/
					last_state = springIntegrateState(last_state || initState, dt);
					/* Store the position. */
					path.push(1 + last_state.x);
					time_lapsed += 16;
					/* If the change threshold is reached, break. */
					if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
						break;
					}
				}

				/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
     computed path and returns a snapshot of the position according to a given percentComplete. */
				return !have_duration ? time_lapsed : function (percentComplete) {
					return path[percentComplete * (path.length - 1) | 0];
				};
			};
		}();

		/* jQuery easings. */
		Velocity.Easings = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
			spring: function spring(p) {
				return 1 - Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6);
			}
		};

		/* CSS3 and Robert Penner easings. */
		$.each([["ease", [0.25, 0.1, 0.25, 1.0]], ["ease-in", [0.42, 0.0, 1.00, 1.0]], ["ease-out", [0.00, 0.0, 0.58, 1.0]], ["ease-in-out", [0.42, 0.0, 0.58, 1.0]], ["easeInSine", [0.47, 0, 0.745, 0.715]], ["easeOutSine", [0.39, 0.575, 0.565, 1]], ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]], ["easeInQuad", [0.55, 0.085, 0.68, 0.53]], ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]], ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]], ["easeInCubic", [0.55, 0.055, 0.675, 0.19]], ["easeOutCubic", [0.215, 0.61, 0.355, 1]], ["easeInOutCubic", [0.645, 0.045, 0.355, 1]], ["easeInQuart", [0.895, 0.03, 0.685, 0.22]], ["easeOutQuart", [0.165, 0.84, 0.44, 1]], ["easeInOutQuart", [0.77, 0, 0.175, 1]], ["easeInQuint", [0.755, 0.05, 0.855, 0.06]], ["easeOutQuint", [0.23, 1, 0.32, 1]], ["easeInOutQuint", [0.86, 0, 0.07, 1]], ["easeInExpo", [0.95, 0.05, 0.795, 0.035]], ["easeOutExpo", [0.19, 1, 0.22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [0.6, 0.04, 0.98, 0.335]], ["easeOutCirc", [0.075, 0.82, 0.165, 1]], ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]], function (i, easingArray) {
			Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
		});

		/* Determine the appropriate easing type given an easing input. */
		function getEasing(value, duration) {
			var easing = value;

			/* The easing option can either be a string that references a pre-registered easing,
    or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
			if (Type.isString(value)) {
				/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
				if (!Velocity.Easings[value]) {
					easing = false;
				}
			} else if (Type.isArray(value) && value.length === 1) {
				easing = generateStep.apply(null, value);
			} else if (Type.isArray(value) && value.length === 2) {
				/* springRK4 must be passed the animation's duration. */
				/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
     function generated with default tension and friction values. */
				easing = generateSpringRK4.apply(null, value.concat([duration]));
			} else if (Type.isArray(value) && value.length === 4) {
				/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
				easing = generateBezier.apply(null, value);
			} else {
				easing = false;
			}

			/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
    if the Velocity-wide default has been incorrectly modified. */
			if (easing === false) {
				if (Velocity.Easings[Velocity.defaults.easing]) {
					easing = Velocity.defaults.easing;
				} else {
					easing = EASING_DEFAULT;
				}
			}

			return easing;
		}

		/*****************
   CSS Stack
   *****************/

		/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
   It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
		/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
		var CSS = Velocity.CSS = {
			/*************
    RegEx
    *************/

			RegEx: {
				isHex: /^#([A-f\d]{3}){1,2}$/i,
				/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
				valueUnwrap: /^[A-z]+\((.*)\)$/i,
				wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
				/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
				valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
			},
			/************
    Lists
    ************/

			Lists: {
				colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
				transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
				transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
				units: ["%", // relative
				"em", "ex", "ch", "rem", // font relative
				"vw", "vh", "vmin", "vmax", // viewport relative
				"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
				"deg", "grad", "rad", "turn", // angles
				"s", "ms" // time
				],
				colorNames: {
					"aliceblue": "240,248,255",
					"antiquewhite": "250,235,215",
					"aquamarine": "127,255,212",
					"aqua": "0,255,255",
					"azure": "240,255,255",
					"beige": "245,245,220",
					"bisque": "255,228,196",
					"black": "0,0,0",
					"blanchedalmond": "255,235,205",
					"blueviolet": "138,43,226",
					"blue": "0,0,255",
					"brown": "165,42,42",
					"burlywood": "222,184,135",
					"cadetblue": "95,158,160",
					"chartreuse": "127,255,0",
					"chocolate": "210,105,30",
					"coral": "255,127,80",
					"cornflowerblue": "100,149,237",
					"cornsilk": "255,248,220",
					"crimson": "220,20,60",
					"cyan": "0,255,255",
					"darkblue": "0,0,139",
					"darkcyan": "0,139,139",
					"darkgoldenrod": "184,134,11",
					"darkgray": "169,169,169",
					"darkgrey": "169,169,169",
					"darkgreen": "0,100,0",
					"darkkhaki": "189,183,107",
					"darkmagenta": "139,0,139",
					"darkolivegreen": "85,107,47",
					"darkorange": "255,140,0",
					"darkorchid": "153,50,204",
					"darkred": "139,0,0",
					"darksalmon": "233,150,122",
					"darkseagreen": "143,188,143",
					"darkslateblue": "72,61,139",
					"darkslategray": "47,79,79",
					"darkturquoise": "0,206,209",
					"darkviolet": "148,0,211",
					"deeppink": "255,20,147",
					"deepskyblue": "0,191,255",
					"dimgray": "105,105,105",
					"dimgrey": "105,105,105",
					"dodgerblue": "30,144,255",
					"firebrick": "178,34,34",
					"floralwhite": "255,250,240",
					"forestgreen": "34,139,34",
					"fuchsia": "255,0,255",
					"gainsboro": "220,220,220",
					"ghostwhite": "248,248,255",
					"gold": "255,215,0",
					"goldenrod": "218,165,32",
					"gray": "128,128,128",
					"grey": "128,128,128",
					"greenyellow": "173,255,47",
					"green": "0,128,0",
					"honeydew": "240,255,240",
					"hotpink": "255,105,180",
					"indianred": "205,92,92",
					"indigo": "75,0,130",
					"ivory": "255,255,240",
					"khaki": "240,230,140",
					"lavenderblush": "255,240,245",
					"lavender": "230,230,250",
					"lawngreen": "124,252,0",
					"lemonchiffon": "255,250,205",
					"lightblue": "173,216,230",
					"lightcoral": "240,128,128",
					"lightcyan": "224,255,255",
					"lightgoldenrodyellow": "250,250,210",
					"lightgray": "211,211,211",
					"lightgrey": "211,211,211",
					"lightgreen": "144,238,144",
					"lightpink": "255,182,193",
					"lightsalmon": "255,160,122",
					"lightseagreen": "32,178,170",
					"lightskyblue": "135,206,250",
					"lightslategray": "119,136,153",
					"lightsteelblue": "176,196,222",
					"lightyellow": "255,255,224",
					"limegreen": "50,205,50",
					"lime": "0,255,0",
					"linen": "250,240,230",
					"magenta": "255,0,255",
					"maroon": "128,0,0",
					"mediumaquamarine": "102,205,170",
					"mediumblue": "0,0,205",
					"mediumorchid": "186,85,211",
					"mediumpurple": "147,112,219",
					"mediumseagreen": "60,179,113",
					"mediumslateblue": "123,104,238",
					"mediumspringgreen": "0,250,154",
					"mediumturquoise": "72,209,204",
					"mediumvioletred": "199,21,133",
					"midnightblue": "25,25,112",
					"mintcream": "245,255,250",
					"mistyrose": "255,228,225",
					"moccasin": "255,228,181",
					"navajowhite": "255,222,173",
					"navy": "0,0,128",
					"oldlace": "253,245,230",
					"olivedrab": "107,142,35",
					"olive": "128,128,0",
					"orangered": "255,69,0",
					"orange": "255,165,0",
					"orchid": "218,112,214",
					"palegoldenrod": "238,232,170",
					"palegreen": "152,251,152",
					"paleturquoise": "175,238,238",
					"palevioletred": "219,112,147",
					"papayawhip": "255,239,213",
					"peachpuff": "255,218,185",
					"peru": "205,133,63",
					"pink": "255,192,203",
					"plum": "221,160,221",
					"powderblue": "176,224,230",
					"purple": "128,0,128",
					"red": "255,0,0",
					"rosybrown": "188,143,143",
					"royalblue": "65,105,225",
					"saddlebrown": "139,69,19",
					"salmon": "250,128,114",
					"sandybrown": "244,164,96",
					"seagreen": "46,139,87",
					"seashell": "255,245,238",
					"sienna": "160,82,45",
					"silver": "192,192,192",
					"skyblue": "135,206,235",
					"slateblue": "106,90,205",
					"slategray": "112,128,144",
					"snow": "255,250,250",
					"springgreen": "0,255,127",
					"steelblue": "70,130,180",
					"tan": "210,180,140",
					"teal": "0,128,128",
					"thistle": "216,191,216",
					"tomato": "255,99,71",
					"turquoise": "64,224,208",
					"violet": "238,130,238",
					"wheat": "245,222,179",
					"whitesmoke": "245,245,245",
					"white": "255,255,255",
					"yellowgreen": "154,205,50",
					"yellow": "255,255,0"
				}
			},
			/************
    Hooks
    ************/

			/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
    (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
			/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
    tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
			Hooks: {
				/********************
     Registration
     ********************/

				/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
				/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
				templates: {
					"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
					"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
					"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
					"backgroundPosition": ["X Y", "0% 0%"],
					"transformOrigin": ["X Y Z", "50% 50% 0px"],
					"perspectiveOrigin": ["X Y", "50% 50%"]
				},
				/* A "registered" hook is one that has been converted from its template form into a live,
     tweenable property. It contains data to associate it with its root property. */
				registered: {
					/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
      which consists of the subproperty's name, the associated root property's name,
      and the subproperty's position in the root's value. */
				},
				/* Convert the templates into individual hooks then append them to the registered object above. */
				register: function register() {
					/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
      currently set to "transparent" default to their respective template below when color-animated,
      and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
      which is almost always set closer to black than white. */
					for (var i = 0; i < CSS.Lists.colors.length; i++) {
						var rgbComponents = CSS.Lists.colors[i] === "color" ? "0 0 0 1" : "255 255 255 1";
						CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
					}

					var rootProperty, hookTemplate, hookNames;

					/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
      Thus, we re-arrange the templates accordingly. */
					if (IE) {
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");

							var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

							if (hookNames[0] === "Color") {
								/* Reposition both the hook's name and its default value to the end of their respective strings. */
								hookNames.push(hookNames.shift());
								defaultValues.push(defaultValues.shift());

								/* Replace the existing template for the hook's root property. */
								CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
							}
						}
					}

					/* Hook registration. */
					for (rootProperty in CSS.Hooks.templates) {
						if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
							continue;
						}
						hookTemplate = CSS.Hooks.templates[rootProperty];
						hookNames = hookTemplate[0].split(" ");

						for (var j in hookNames) {
							if (!hookNames.hasOwnProperty(j)) {
								continue;
							}
							var fullHookName = rootProperty + hookNames[j],
							    hookPosition = j;

							/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
        and the hook's position in its template's default value string. */
							CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
						}
					}
				},
				/*****************************
     Injection and Extraction
     *****************************/

				/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
				/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
				getRoot: function getRoot(property) {
					var hookData = CSS.Hooks.registered[property];

					if (hookData) {
						return hookData[0];
					} else {
						/* If there was no hook match, return the property name untouched. */
						return property;
					}
				},
				getUnit: function getUnit(str, start) {
					var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";

					if (unit && _inArray(CSS.Lists.units, unit)) {
						return unit;
					}
					return "";
				},
				fixColors: function fixColors(str) {
					return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function ($0, $1, $2) {
						if (CSS.Lists.colorNames.hasOwnProperty($2)) {
							return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
						}
						return $1 + $2;
					});
				},
				/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
     the targeted hook can be injected or extracted at its standard position. */
				cleanRootPropertyValue: function cleanRootPropertyValue(rootProperty, rootPropertyValue) {
					/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
					if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
						rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
					}

					/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
      default to the root's default value as defined in CSS.Hooks.templates. */
					/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
      zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
					if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
						rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
					}

					return rootPropertyValue;
				},
				/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
				extractValue: function extractValue(fullHookName, rootPropertyValue) {
					var hookData = CSS.Hooks.registered[fullHookName];

					if (hookData) {
						var hookRoot = hookData[0],
						    hookPosition = hookData[1];

						rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

						/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
						return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
					} else {
						/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
						return rootPropertyValue;
					}
				},
				/* Inject the hook's value into its root property's value. This is used to piece back together the root property
     once Velocity has updated one of its individually hooked values through tweening. */
				injectValue: function injectValue(fullHookName, hookValue, rootPropertyValue) {
					var hookData = CSS.Hooks.registered[fullHookName];

					if (hookData) {
						var hookRoot = hookData[0],
						    hookPosition = hookData[1],
						    rootPropertyValueParts,
						    rootPropertyValueUpdated;

						rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

						/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
       then reconstruct the rootPropertyValue string. */
						rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
						rootPropertyValueParts[hookPosition] = hookValue;
						rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

						return rootPropertyValueUpdated;
					} else {
						/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
						return rootPropertyValue;
					}
				}
			},
			/*******************
    Normalizations
    *******************/

			/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
    and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
			Normalizations: {
				/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
     the targeted element (which may need to be queried), and the targeted property value. */
				registered: {
					clip: function clip(type, element, propertyValue) {
						switch (type) {
							case "name":
								return "clip";
							/* Clip needs to be unwrapped and stripped of its commas during extraction. */
							case "extract":
								var extracted;

								/* If Velocity also extracted this value, skip extraction. */
								if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
									extracted = propertyValue;
								} else {
									/* Remove the "rect()" wrapper. */
									extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

									/* Strip off commas. */
									extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
								}

								return extracted;
							/* Clip needs to be re-wrapped during injection. */
							case "inject":
								return "rect(" + propertyValue + ")";
						}
					},
					blur: function blur(type, element, propertyValue) {
						switch (type) {
							case "name":
								return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
							case "extract":
								var extracted = parseFloat(propertyValue);

								/* If extracted is NaN, meaning the value isn't already extracted. */
								if (!(extracted || extracted === 0)) {
									var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

									/* If the filter string had a blur component, return just the blur value and unit type. */
									if (blurComponent) {
										extracted = blurComponent[1];
										/* If the component doesn't exist, default blur to 0. */
									} else {
										extracted = 0;
									}
								}

								return extracted;
							/* Blur needs to be re-wrapped during injection. */
							case "inject":
								/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
								if (!parseFloat(propertyValue)) {
									return "none";
								} else {
									return "blur(" + propertyValue + ")";
								}
						}
					},
					/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
					opacity: function opacity(type, element, propertyValue) {
						if (IE <= 8) {
							switch (type) {
								case "name":
									return "filter";
								case "extract":
									/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
          Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
									var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

									if (extracted) {
										/* Convert to decimal value. */
										propertyValue = extracted[1] / 100;
									} else {
										/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
										propertyValue = 1;
									}

									return propertyValue;
								case "inject":
									/* Opacified elements are required to have their zoom property set to a non-zero value. */
									element.style.zoom = 1;

									/* Setting the filter property on elements with certain font property combinations can result in a
          highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
          value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
									if (parseFloat(propertyValue) >= 1) {
										return "";
									} else {
										/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
										return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
									}
							}
							/* With all other browsers, normalization is not required; return the same values that were passed in. */
						} else {
							switch (type) {
								case "name":
									return "opacity";
								case "extract":
									return propertyValue;
								case "inject":
									return propertyValue;
							}
						}
					}
				},
				/*****************************
     Batched Registrations
     *****************************/

				/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
				register: function register() {

					/*****************
      Transforms
      *****************/

					/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
      so that they can be referenced in a properties map by their individual names. */
					/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
      setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
      Transform setting is batched in this way to improve performance: the transform style only needs to be updated
      once when multiple transform subproperties are being animated simultaneously. */
					/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
      transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
      from being normalized for these browsers so that tweening skips these properties altogether
      (since it will ignore them as being unsupported by the browser.) */
					if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
						/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
       share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
						CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
					}

					for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
						/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
       paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
						(function () {
							var transformName = CSS.Lists.transformsBase[i];

							CSS.Normalizations.registered[transformName] = function (type, element, propertyValue) {
								switch (type) {
									/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
									case "name":
										return "transform";
									/* Transform values are cached onto a per-element transformCache object. */
									case "extract":
										/* If this transform has yet to be assigned a value, return its null value. */
										if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
											/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
											return (/^scale/i.test(transformName) ? 1 : 0
											);
											/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
            Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
										}
										return Data(element).transformCache[transformName].replace(/[()]/g, "");
									case "inject":
										var invalid = false;

										/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
           Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
										/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
										switch (transformName.substr(0, transformName.length - 1)) {
											/* Whitelist unit types for each transform. */
											case "translate":
												invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
												break;
											/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
											case "scal":
											case "scale":
												/* Chrome on Android has a bug in which scaled elements blur if their initial scale
             value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
             and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
												if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
													propertyValue = 1;
												}

												invalid = !/(\d)$/i.test(propertyValue);
												break;
											case "skew":
												invalid = !/(deg|\d)$/i.test(propertyValue);
												break;
											case "rotate":
												invalid = !/(deg|\d)$/i.test(propertyValue);
												break;
										}

										if (!invalid) {
											/* As per the CSS spec, wrap the value in parentheses. */
											Data(element).transformCache[transformName] = "(" + propertyValue + ")";
										}

										/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
										return Data(element).transformCache[transformName];
								}
							};
						})();
					}

					/*************
      Colors
      *************/

					/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
      Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
					for (var j = 0; j < CSS.Lists.colors.length; j++) {
						/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
       (Otherwise, all functions would take the final for loop's colorName.) */
						(function () {
							var colorName = CSS.Lists.colors[j];

							/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
							CSS.Normalizations.registered[colorName] = function (type, element, propertyValue) {
								switch (type) {
									case "name":
										return colorName;
									/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
									case "extract":
										var extracted;

										/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
										if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
											extracted = propertyValue;
										} else {
											var converted,
											    colorNames = {
												black: "rgb(0, 0, 0)",
												blue: "rgb(0, 0, 255)",
												gray: "rgb(128, 128, 128)",
												green: "rgb(0, 128, 0)",
												red: "rgb(255, 0, 0)",
												white: "rgb(255, 255, 255)"
											};

											/* Convert color names to rgb. */
											if (/^[A-z]+$/i.test(propertyValue)) {
												if (colorNames[propertyValue] !== undefined) {
													converted = colorNames[propertyValue];
												} else {
													/* If an unmatched color name is provided, default to black. */
													converted = colorNames.black;
												}
												/* Convert hex values to rgb. */
											} else if (CSS.RegEx.isHex.test(propertyValue)) {
												converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
												/* If the provided color doesn't match any of the accepted color formats, default to black. */
											} else if (!/^rgba?\(/i.test(propertyValue)) {
												converted = colorNames.black;
											}

											/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
            repeated spaces (in case the value included spaces to begin with). */
											extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
										}

										/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
										if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
											extracted += " 1";
										}

										return extracted;
									case "inject":
										/* If we have a pattern then it might already have the right values */
										if (/^rgb/.test(propertyValue)) {
											return propertyValue;
										}

										/* If this is IE<=8 and an alpha component exists, strip it off. */
										if (IE <= 8) {
											if (propertyValue.split(" ").length === 4) {
												propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
											}
											/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
										} else if (propertyValue.split(" ").length === 3) {
											propertyValue += " 1";
										}

										/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
           on all values but the fourth (R, G, and B only accept whole numbers). */
										return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
								}
							};
						})();
					}

					/**************
      Dimensions
      **************/
					function augmentDimension(name, element, wantInner) {
						var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";

						if (isBorderBox === (wantInner || false)) {
							/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
							var i,
							    value,
							    augment = 0,
							    sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
							    fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];

							for (i = 0; i < fields.length; i++) {
								value = parseFloat(CSS.getPropertyValue(element, fields[i]));
								if (!isNaN(value)) {
									augment += value;
								}
							}
							return wantInner ? -augment : augment;
						}
						return 0;
					}
					function getDimension(name, wantInner) {
						return function (type, element, propertyValue) {
							switch (type) {
								case "name":
									return name;
								case "extract":
									return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
								case "inject":
									return parseFloat(propertyValue) - augmentDimension(name, element, wantInner) + "px";
							}
						};
					}
					CSS.Normalizations.registered.innerWidth = getDimension("width", true);
					CSS.Normalizations.registered.innerHeight = getDimension("height", true);
					CSS.Normalizations.registered.outerWidth = getDimension("width");
					CSS.Normalizations.registered.outerHeight = getDimension("height");
				}
			},
			/************************
    CSS Property Names
    ************************/

			Names: {
				/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
     Camelcasing is used to normalize property names between and across calls. */
				camelCase: function camelCase(property) {
					return property.replace(/-(\w)/g, function (match, subMatch) {
						return subMatch.toUpperCase();
					});
				},
				/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
				SVGAttribute: function SVGAttribute(property) {
					var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

					/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
					if (IE || Velocity.State.isAndroid && !Velocity.State.isChrome) {
						SVGAttributes += "|transform";
					}

					return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
				},
				/* Determine whether a property should be set with a vendor prefix. */
				/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
     If the property is not at all supported by the browser, return a false flag. */
				prefixCheck: function prefixCheck(property) {
					/* If this property has already been checked, return the cached value. */
					if (Velocity.State.prefixMatches[property]) {
						return [Velocity.State.prefixMatches[property], true];
					} else {
						var vendors = ["", "Webkit", "Moz", "ms", "O"];

						for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
							var propertyPrefixed;

							if (i === 0) {
								propertyPrefixed = property;
							} else {
								/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
								propertyPrefixed = vendors[i] + property.replace(/^\w/, function (match) {
									return match.toUpperCase();
								});
							}

							/* Check if the browser supports this property as prefixed. */
							if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
								/* Cache the match. */
								Velocity.State.prefixMatches[property] = propertyPrefixed;

								return [propertyPrefixed, true];
							}
						}

						/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
						return [property, false];
					}
				}
			},
			/************************
    CSS Property Values
    ************************/

			Values: {
				/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
				hexToRgb: function hexToRgb(hex) {
					var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
					    longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
					    rgbParts;

					hex = hex.replace(shortformRegex, function (m, r, g, b) {
						return r + r + g + g + b + b;
					});

					rgbParts = longformRegex.exec(hex);

					return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
				},
				isCSSNullValue: function isCSSNullValue(value) {
					/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
      Thus, we check for both falsiness and these special strings. */
					/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
      templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
					/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
					return !value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value);
				},
				/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
				getUnitType: function getUnitType(property) {
					if (/^(rotate|skew)/i.test(property)) {
						return "deg";
					} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
						/* The above properties are unitless. */
						return "";
					} else {
						/* Default to px for all other properties. */
						return "px";
					}
				},
				/* HTML elements default to an associated display type when they're not set to display:none. */
				/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
				getDisplayType: function getDisplayType(element) {
					var tagName = element && element.tagName.toString().toLowerCase();

					if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
						return "inline";
					} else if (/^(li)$/i.test(tagName)) {
						return "list-item";
					} else if (/^(tr)$/i.test(tagName)) {
						return "table-row";
					} else if (/^(table)$/i.test(tagName)) {
						return "table";
					} else if (/^(tbody)$/i.test(tagName)) {
						return "table-row-group";
						/* Default to "block" when no match is found. */
					} else {
						return "block";
					}
				},
				/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
				addClass: function addClass(element, className) {
					if (element) {
						if (element.classList) {
							element.classList.add(className);
						} else if (Type.isString(element.className)) {
							// Element.className is around 15% faster then set/getAttribute
							element.className += (element.className.length ? " " : "") + className;
						} else {
							// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
							var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

							element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
						}
					}
				},
				removeClass: function removeClass(element, className) {
					if (element) {
						if (element.classList) {
							element.classList.remove(className);
						} else if (Type.isString(element.className)) {
							// Element.className is around 15% faster then set/getAttribute
							// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
							element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
						} else {
							// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
							var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

							element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
						}
					}
				}
			},
			/****************************
    Style Getting & Setting
    ****************************/

			/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
			getPropertyValue: function getPropertyValue(element, property, rootPropertyValue, forceStyleLookup) {
				/* Get an element's computed property value. */
				/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
     style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
     *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
				function computePropertyValue(element, property) {
					/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
      element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
      offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
      We subtract border and padding to get the sum of interior + scrollbar. */
					var computedValue = 0;

					/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
      of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
      codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
      Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
					if (IE <= 8) {
						computedValue = $.css(element, property); /* GET */
						/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
       associated element so that it does not need to be refetched upon every GET. */
					} else {
						/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
       toggle display to the element type's default value. */
						var toggleDisplay = false;

						if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
							toggleDisplay = true;
							CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
						}

						var revertDisplay = function revertDisplay() {
							if (toggleDisplay) {
								CSS.setPropertyValue(element, "display", "none");
							}
						};

						if (!forceStyleLookup) {
							if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
								var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
								revertDisplay();

								return contentBoxHeight;
							} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
								var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
								revertDisplay();

								return contentBoxWidth;
							}
						}

						var computedStyle;

						/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
       of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
						if (Data(element) === undefined) {
							computedStyle = window.getComputedStyle(element, null); /* GET */
							/* If the computedStyle object has yet to be cached, do so now. */
						} else if (!Data(element).computedStyle) {
							computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
							/* If computedStyle is cached, use it. */
						} else {
							computedStyle = Data(element).computedStyle;
						}

						/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
						if (property === "borderColor") {
							property = "borderTopColor";
						}

						/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
       instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
						if (IE === 9 && property === "filter") {
							computedValue = computedStyle.getPropertyValue(property); /* GET */
						} else {
							computedValue = computedStyle[property];
						}

						/* Fall back to the property's style value (if defined) when computedValue returns nothing,
       which can happen when the element hasn't been painted. */
						if (computedValue === "" || computedValue === null) {
							computedValue = element.style[property];
						}

						revertDisplay();
					}

					/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
      defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
      effect as being set to 0, so no conversion is necessary.) */
					/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
      property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
      to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
					if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
						var position = computePropertyValue(element, "position"); /* GET */

						/* For absolute positioning, jQuery's $.position() only returns values for top and left;
       right and bottom will have their "auto" value reverted to 0. */
						/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
       Not a big deal since we're currently in a GET batch anyway. */
						if (position === "fixed" || position === "absolute" && /top|left/i.test(property)) {
							/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
							computedValue = $(element).position()[property] + "px"; /* GET */
						}
					}

					return computedValue;
				}

				var propertyValue;

				/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
     extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
				if (CSS.Hooks.registered[property]) {
					var hook = property,
					    hookRoot = CSS.Hooks.getRoot(hook);

					/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
      query the DOM for the root property's value. */
					if (rootPropertyValue === undefined) {
						/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
						rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
					}

					/* If this root has a normalization registered, peform the associated normalization extraction. */
					if (CSS.Normalizations.registered[hookRoot]) {
						rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
					}

					/* Extract the hook's value. */
					propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

					/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
      normalize the property's name and value, and handle the special case of transforms. */
					/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
      numerical and therefore do not require normalization extraction. */
				} else if (CSS.Normalizations.registered[property]) {
					var normalizedPropertyName, normalizedPropertyValue;

					normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

					/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
      At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
      This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
      thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
					if (normalizedPropertyName !== "transform") {
						normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

						/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
						if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
							normalizedPropertyValue = CSS.Hooks.templates[property][1];
						}
					}

					propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
				}

				/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
				if (!/^[\d-]/.test(propertyValue)) {
					/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
      their HTML attribute values instead of their CSS style values. */
					var data = Data(element);

					if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
						/* Since the height/width attribute values must be set manually, they don't reflect computed values.
       Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
						if (/^(height|width)$/i.test(property)) {
							/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
							try {
								propertyValue = element.getBBox()[property];
							} catch (error) {
								propertyValue = 0;
							}
							/* Otherwise, access the attribute value directly. */
						} else {
							propertyValue = element.getAttribute(property);
						}
					} else {
						propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
					}
				}

				/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
     convert CSS null-values to an integer of value 0. */
				if (CSS.Values.isCSSNullValue(propertyValue)) {
					propertyValue = 0;
				}

				if (Velocity.debug >= 2) {
					console.log("Get " + property + ": " + propertyValue);
				}

				return propertyValue;
			},
			/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
			setPropertyValue: function setPropertyValue(element, property, propertyValue, rootPropertyValue, scrollData) {
				var propertyName = property;

				/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
				if (property === "scroll") {
					/* If a container option is present, scroll the container instead of the browser window. */
					if (scrollData.container) {
						scrollData.container["scroll" + scrollData.direction] = propertyValue;
						/* Otherwise, Velocity defaults to scrolling the browser window. */
					} else {
						if (scrollData.direction === "Left") {
							window.scrollTo(propertyValue, scrollData.alternateValue);
						} else {
							window.scrollTo(scrollData.alternateValue, propertyValue);
						}
					}
				} else {
					/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
      Thus, for now, we merely cache transforms being SET. */
					if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
						/* Perform a normalization injection. */
						/* Note: The normalization logic handles the transformCache updating. */
						CSS.Normalizations.registered[property]("inject", element, propertyValue);

						propertyName = "transform";
						propertyValue = Data(element).transformCache[property];
					} else {
						/* Inject hooks. */
						if (CSS.Hooks.registered[property]) {
							var hookName = property,
							    hookRoot = CSS.Hooks.getRoot(property);

							/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
							rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

							propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
							property = hookRoot;
						}

						/* Normalize names and values. */
						if (CSS.Normalizations.registered[property]) {
							propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
							property = CSS.Normalizations.registered[property]("name", element);
						}

						/* Assign the appropriate vendor prefix before performing an official style update. */
						propertyName = CSS.Names.prefixCheck(property)[0];

						/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
       Try/catch is avoided for other browsers since it incurs a performance overhead. */
						if (IE <= 8) {
							try {
								element.style[propertyName] = propertyValue;
							} catch (error) {
								if (Velocity.debug) {
									console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
								}
							}
							/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
							/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
						} else {
							var data = Data(element);

							if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
								/* Note: For SVG attributes, vendor-prefixed property names are never used. */
								/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
								element.setAttribute(property, propertyValue);
							} else {
								element.style[propertyName] = propertyValue;
							}
						}

						if (Velocity.debug >= 2) {
							console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
						}
					}
				}

				/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
				return [propertyName, propertyValue];
			},
			/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
			/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
			flushTransformCache: function flushTransformCache(element) {
				var transformString = "",
				    data = Data(element);

				/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
     (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
				if ((IE || Velocity.State.isAndroid && !Velocity.State.isChrome) && data && data.isSVG) {
					/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
      Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
					var getTransformFloat = function getTransformFloat(transformProperty) {
						return parseFloat(CSS.getPropertyValue(element, transformProperty));
					};

					/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
      we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
					var SVGTransforms = {
						translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
						skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
						/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
       (this behavior mimics the result of animating all these properties at once on HTML elements). */
						scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
						/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
       defining the rotation's origin point. We ignore the origin values (default them to 0). */
						rotate: [getTransformFloat("rotateZ"), 0, 0]
					};

					/* Iterate through the transform properties in the user-defined property map order.
      (This mimics the behavior of non-SVG transform animation.) */
					$.each(Data(element).transformCache, function (transformName) {
						/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
       properties so that they match up with SVG's accepted transform properties. */
						if (/^translate/i.test(transformName)) {
							transformName = "translate";
						} else if (/^scale/i.test(transformName)) {
							transformName = "scale";
						} else if (/^rotate/i.test(transformName)) {
							transformName = "rotate";
						}

						/* Check that we haven't yet deleted the property from the SVGTransforms container. */
						if (SVGTransforms[transformName]) {
							/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
							transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

							/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
        re-insert the same master property if we encounter another one of its axis-specific properties. */
							delete SVGTransforms[transformName];
						}
					});
				} else {
					var transformValue, perspective;

					/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
					$.each(Data(element).transformCache, function (transformName) {
						transformValue = Data(element).transformCache[transformName];

						/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
						if (transformName === "transformPerspective") {
							perspective = transformValue;
							return true;
						}

						/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
						if (IE === 9 && transformName === "rotateZ") {
							transformName = "rotate";
						}

						transformString += transformName + transformValue + " ";
					});

					/* If present, set the perspective subproperty first. */
					if (perspective) {
						transformString = "perspective" + perspective + " " + transformString;
					}
				}

				CSS.setPropertyValue(element, "transform", transformString);
			}
		};

		/* Register hooks and normalizations. */
		CSS.Hooks.register();
		CSS.Normalizations.register();

		/* Allow hook setting in the same fashion as jQuery's $.css(). */
		Velocity.hook = function (elements, arg2, arg3) {
			var value;

			elements = sanitizeElements(elements);

			$.each(elements, function (i, element) {
				/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
				if (Data(element) === undefined) {
					Velocity.init(element);
				}

				/* Get property value. If an element set was passed in, only return the value for the first element. */
				if (arg3 === undefined) {
					if (value === undefined) {
						value = CSS.getPropertyValue(element, arg2);
					}
					/* Set property value. */
				} else {
					/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
					var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);

					/* Transform properties don't automatically set. They have to be flushed to the DOM. */
					if (adjustedSet[0] === "transform") {
						Velocity.CSS.flushTransformCache(element);
					}

					value = adjustedSet;
				}
			});

			return value;
		};

		/*****************
   Animation
   *****************/

		var animate = function animate() {
			var opts;

			/******************
    Call Chain
    ******************/

			/* Logic for determining what to return to the call stack when exiting out of Velocity. */
			function getChain() {
				/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
     default to null instead of returning the targeted elements so that utility function's return value is standardized. */
				if (isUtility) {
					return promiseData.promise || null;
					/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
				} else {
					return elementsWrapped;
				}
			}

			/*************************
    Arguments Assignment
    *************************/

			/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
    objects are defined on a container object that's passed in as Velocity's sole argument. */
			/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
			var syntacticSugar = arguments[0] && (arguments[0].p || $.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || Type.isString(arguments[0].properties)),

			/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
			isUtility,

			/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
    passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
			elementsWrapped,
			    argumentIndex;

			var elements, propertiesMap, options;

			/* Detect jQuery/Zepto elements being animated via the $.fn method. */
			if (Type.isWrapped(this)) {
				isUtility = false;

				argumentIndex = 0;
				elements = this;
				elementsWrapped = this;
				/* Otherwise, raw elements are being animated via the utility function. */
			} else {
				isUtility = true;

				argumentIndex = 1;
				elements = syntacticSugar ? arguments[0].elements || arguments[0].e : arguments[0];
			}

			/***************
    Promises
    ***************/

			var promiseData = {
				promise: null,
				resolver: null,
				rejecter: null
			};

			/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
    promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
    method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
    call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
			/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
    triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
    grouped together for the purposes of resolving and rejecting a promise. */
			if (isUtility && Velocity.Promise) {
				promiseData.promise = new Velocity.Promise(function (resolve, reject) {
					promiseData.resolver = resolve;
					promiseData.rejecter = reject;
				});
			}

			if (syntacticSugar) {
				propertiesMap = arguments[0].properties || arguments[0].p;
				options = arguments[0].options || arguments[0].o;
			} else {
				propertiesMap = arguments[argumentIndex];
				options = arguments[argumentIndex + 1];
			}

			elements = sanitizeElements(elements);

			if (!elements) {
				if (promiseData.promise) {
					if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
						promiseData.rejecter();
					} else {
						promiseData.resolver();
					}
				}
				return;
			}

			/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
    single raw DOM element is passed in (which doesn't contain a length property). */
			var elementsLength = elements.length,
			    elementsIndex = 0;

			/***************************
    Argument Overloading
    ***************************/

			/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
    Overloading is detected by checking for the absence of an object being passed into options. */
			/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
			if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
				/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
				var startingArgumentPosition = argumentIndex + 1;

				options = {};

				/* Iterate through all options arguments */
				for (var i = startingArgumentPosition; i < arguments.length; i++) {
					/* Treat a number as a duration. Parse it out. */
					/* Note: The following RegEx will return true if passed an array with a number as its first item.
      Thus, arrays are skipped from this check. */
					if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
						options.duration = arguments[i];
						/* Treat strings and arrays as easings. */
					} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
						options.easing = arguments[i];
						/* Treat a function as a complete callback. */
					} else if (Type.isFunction(arguments[i])) {
						options.complete = arguments[i];
					}
				}
			}

			/*********************
    Action Detection
    *********************/

			/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
    or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
    first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
    instead of a properties map. */
			var action;

			switch (propertiesMap) {
				case "scroll":
					action = "scroll";
					break;

				case "reverse":
					action = "reverse";
					break;

				case "pause":

					/*******************
      Action: Pause
      *******************/

					var currentTime = new Date().getTime();

					/* Handle delay timers */
					$.each(elements, function (i, element) {
						pauseDelayOnElement(element, currentTime);
					});

					/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
      single element will cause any calls that containt tweens for that element to be paused/resumed
      as well. */

					/* Iterate through all calls and pause any that contain any of our elements */
					$.each(Velocity.State.calls, function (i, activeCall) {

						var found = false;
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function (k, activeElement) {
								var queueName = options === undefined ? "" : options;

								if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function (l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {

										/* Set call to paused */
										activeCall[5] = {
											resume: false
										};

										/* Once we match an element, we can bounce out to the next call entirely */
										found = true;
										return false;
									}
								});

								/* Proceed to check next call if we have already matched */
								if (found) {
									return false;
								}
							});
						}
					});

					/* Since pause creates no new tweens, exit out of Velocity. */
					return getChain();

				case "resume":

					/*******************
      Action: Resume
      *******************/

					/* Handle delay timers */
					$.each(elements, function (i, element) {
						resumeDelayOnElement(element, currentTime);
					});

					/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
      single element will cause any calls that containt tweens for that element to be paused/resumed
      as well. */

					/* Iterate through all calls and pause any that contain any of our elements */
					$.each(Velocity.State.calls, function (i, activeCall) {
						var found = false;
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function (k, activeElement) {
								var queueName = options === undefined ? "" : options;

								if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Skip any calls that have never been paused */
								if (!activeCall[5]) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function (l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {

										/* Flag a pause object to be resumed, which will occur during the next tick. In
           addition, the pause object will at that time be deleted */
										activeCall[5].resume = true;

										/* Once we match an element, we can bounce out to the next call entirely */
										found = true;
										return false;
									}
								});

								/* Proceed to check next call if we have already matched */
								if (found) {
									return false;
								}
							});
						}
					});

					/* Since resume creates no new tweens, exit out of Velocity. */
					return getChain();

				case "finish":
				case "finishAll":
				case "stop":
					/*******************
      Action: Stop
      *******************/

					/* Clear the currently-active delay on each targeted element. */
					$.each(elements, function (i, element) {
						if (Data(element) && Data(element).delayTimer) {
							/* Stop the timer from triggering its cached next() function. */
							clearTimeout(Data(element).delayTimer.setTimeout);

							/* Manually call the next() function so that the subsequent queue items can progress. */
							if (Data(element).delayTimer.next) {
								Data(element).delayTimer.next();
							}

							delete Data(element).delayTimer;
						}

						/* If we want to finish everything in the queue, we have to iterate through it
       and call each function. This will make them active calls below, which will
       cause them to be applied via the duration setting. */
						if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
							/* Iterate through the items in the element's queue. */
							$.each($.queue(element, Type.isString(options) ? options : ""), function (_, item) {
								/* The queue array can contain an "inprogress" string, which we skip. */
								if (Type.isFunction(item)) {
									item();
								}
							});

							/* Clearing the $.queue() array is achieved by resetting it to []. */
							$.queue(element, Type.isString(options) ? options : "", []);
						}
					});

					var callsToStop = [];

					/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
      been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
      is stopped, the next item in its animation queue is immediately triggered. */
					/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
      or a custom queue string can be passed in. */
					/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
      regardless of the element's current queue state. */

					/* Iterate through every active call. */
					$.each(Velocity.State.calls, function (i, activeCall) {
						/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
						if (activeCall) {
							/* Iterate through the active call's targeted elements. */
							$.each(activeCall[1], function (k, activeElement) {
								/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
         clear calls associated with the relevant queue. */
								/* Call stopping logic works as follows:
         - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
         - options === undefined --> stop current queue:"" call and all queue:false calls.
         - options === false --> stop only queue:false calls.
         - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
								var queueName = options === undefined ? "" : options;

								if (queueName !== true && activeCall[2].queue !== queueName && !(options === undefined && activeCall[2].queue === false)) {
									return true;
								}

								/* Iterate through the calls targeted by the stop command. */
								$.each(elements, function (l, element) {
									/* Check that this call was applied to the target element. */
									if (element === activeElement) {
										/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
           due to the queue-clearing above. */
										if (options === true || Type.isString(options)) {
											/* Iterate through the items in the element's queue. */
											$.each($.queue(element, Type.isString(options) ? options : ""), function (_, item) {
												/* The queue array can contain an "inprogress" string, which we skip. */
												if (Type.isFunction(item)) {
													/* Pass the item's callback a flag indicating that we want to abort from the queue call.
              (Specifically, the queue will resolve the call's associated promise then abort.)  */
													item(null, true);
												}
											});

											/* Clearing the $.queue() array is achieved by resetting it to []. */
											$.queue(element, Type.isString(options) ? options : "", []);
										}

										if (propertiesMap === "stop") {
											/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
            changed to reflect the final value that the elements were actually tweened to. */
											/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
            object. Also, queue:false animations can't be reversed. */
											var data = Data(element);
											if (data && data.tweensContainer && queueName !== false) {
												$.each(data.tweensContainer, function (m, activeTween) {
													activeTween.endValue = activeTween.currentValue;
												});
											}

											callsToStop.push(i);
										} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
											/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
            they finish upon the next rAf tick then proceed with normal call completion logic. */
											activeCall[2].duration = 1;
										}
									}
								});
							});
						}
					});

					/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
      that the complete callback and display:none setting should be skipped since we're completing prematurely. */
					if (propertiesMap === "stop") {
						$.each(callsToStop, function (i, j) {
							completeCall(j, true);
						});

						if (promiseData.promise) {
							/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
							promiseData.resolver(elements);
						}
					}

					/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
					return getChain();

				default:
					/* Treat a non-empty plain object as a literal properties map. */
					if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
						action = "start";

						/****************
       Redirects
       ****************/

						/* Check if a string matches a registered redirect (see Redirects above). */
					} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
						opts = $.extend({}, options);

						var durationOriginal = opts.duration,
						    delayOriginal = opts.delay || 0;

						/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
						if (opts.backwards === true) {
							elements = $.extend(true, [], elements).reverse();
						}

						/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
						$.each(elements, function (elementIndex, element) {
							/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
							if (parseFloat(opts.stagger)) {
								opts.delay = delayOriginal + parseFloat(opts.stagger) * elementIndex;
							} else if (Type.isFunction(opts.stagger)) {
								opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
							}

							/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
        the duration of each element's animation, using floors to prevent producing very short durations. */
							if (opts.drag) {
								/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
								opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

								/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
         B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
         The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
								opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
							}

							/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
        reduce the opts checking logic required inside the redirect. */
							Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
						});

						/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
       (The performance overhead up to this point is virtually non-existant.) */
						/* Note: The jQuery call chain is kept intact by returning the complete element set. */
						return getChain();
					} else {
						var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

						if (promiseData.promise) {
							promiseData.rejecter(new Error(abortError));
						} else if (window.console) {
							console.log(abortError);
						}

						return getChain();
					}
			}

			/**************************
    Call-Wide Variables
    **************************/

			/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
    being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
    avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
    conversion metrics across Velocity animations that are not immediately consecutively chained. */
			var callUnitConversionData = {
				lastParent: null,
				lastPosition: null,
				lastFontSize: null,
				lastPercentToPxWidth: null,
				lastPercentToPxHeight: null,
				lastEmToPx: null,
				remToPx: null,
				vwToPx: null,
				vhToPx: null
			};

			/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
    Velocity.State.calls array that is processed during animation ticking. */
			var call = [];

			/************************
    Element Processing
    ************************/

			/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
    1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
    2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
    3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
    `elementArrayIndex` allows passing index of the element in the original array to value functions.
    If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
    */
			function processElement(element, elementArrayIndex) {

				/*************************
     Part I: Pre-Queueing
     *************************/

				/***************************
     Element-Wide Variables
     ***************************/

				var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
				opts = $.extend({}, Velocity.defaults, options),

				/* A container for the processed data associated with each property in the propertyMap.
     (Each property in the map produces its own "tween".) */
				tweensContainer = {},
				    elementUnitConversionData;

				/******************
     Element Init
     ******************/

				if (Data(element) === undefined) {
					Velocity.init(element);
				}

				/******************
     Option: Delay
     ******************/

				/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
				/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
     (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
				if (parseFloat(opts.delay) && opts.queue !== false) {
					$.queue(element, opts.queue, function (next) {
						/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
						Velocity.velocityQueueEntryFlag = true;

						/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
       The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
       delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */

						/* Temporarily store delayed elements to facilite access for global pause/resume */
						var callIndex = Velocity.State.delayedElements.count++;
						Velocity.State.delayedElements[callIndex] = element;

						var delayComplete = function (index) {
							return function () {
								/* Clear the temporary element */
								Velocity.State.delayedElements[index] = false;

								/* Finally, issue the call */
								next();
							};
						}(callIndex);

						Data(element).delayBegin = new Date().getTime();
						Data(element).delay = parseFloat(opts.delay);
						Data(element).delayTimer = {
							setTimeout: setTimeout(next, parseFloat(opts.delay)),
							next: delayComplete
						};
					});
				}

				/*********************
     Option: Duration
     *********************/

				/* Support for jQuery's named durations. */
				switch (opts.duration.toString().toLowerCase()) {
					case "fast":
						opts.duration = 200;
						break;

					case "normal":
						opts.duration = DURATION_DEFAULT;
						break;

					case "slow":
						opts.duration = 600;
						break;

					default:
						/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
						opts.duration = parseFloat(opts.duration) || 1;
				}

				/************************
     Global Option: Mock
     ************************/

				if (Velocity.mock !== false) {
					/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
      Alternatively, a multiplier can be passed in to time remap all delays and durations. */
					if (Velocity.mock === true) {
						opts.duration = opts.delay = 1;
					} else {
						opts.duration *= parseFloat(Velocity.mock) || 1;
						opts.delay *= parseFloat(Velocity.mock) || 1;
					}
				}

				/*******************
     Option: Easing
     *******************/

				opts.easing = getEasing(opts.easing, opts.duration);

				/**********************
     Option: Callbacks
     **********************/

				/* Callbacks must functions. Otherwise, default to null. */
				if (opts.begin && !Type.isFunction(opts.begin)) {
					opts.begin = null;
				}

				if (opts.progress && !Type.isFunction(opts.progress)) {
					opts.progress = null;
				}

				if (opts.complete && !Type.isFunction(opts.complete)) {
					opts.complete = null;
				}

				/*********************************
     Option: Display & Visibility
     *********************************/

				/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
				/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
				if (opts.display !== undefined && opts.display !== null) {
					opts.display = opts.display.toString().toLowerCase();

					/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
					if (opts.display === "auto") {
						opts.display = Velocity.CSS.Values.getDisplayType(element);
					}
				}

				if (opts.visibility !== undefined && opts.visibility !== null) {
					opts.visibility = opts.visibility.toString().toLowerCase();
				}

				/**********************
     Option: mobileHA
     **********************/

				/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
     on animating elements. HA is removed from the element at the completion of its animation. */
				/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
				/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
				opts.mobileHA = opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread;

				/***********************
     Part II: Queueing
     ***********************/

				/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
     In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
				/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
     the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
				function buildQueue(next) {
					var data, lastTweensContainer;

					/*******************
      Option: Begin
      *******************/

					/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
					if (opts.begin && elementsIndex === 0) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.begin.call(elements, elements);
						} catch (error) {
							setTimeout(function () {
								throw error;
							}, 1);
						}
					}

					/*****************************************
      Tween Data Construction (for Scroll)
      *****************************************/

					/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
					if (action === "scroll") {
						/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
						var scrollDirection = /^x$/i.test(opts.axis) ? "Left" : "Top",
						    scrollOffset = parseFloat(opts.offset) || 0,
						    scrollPositionCurrent,
						    scrollPositionCurrentAlternate,
						    scrollPositionEnd;

						/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
       as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
						if (opts.container) {
							/* Ensure that either a jQuery object or a raw DOM element was passed in. */
							if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
								/* Extract the raw DOM element from the jQuery wrapper. */
								opts.container = opts.container[0] || opts.container;
								/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
         (due to the user's natural interaction with the page). */
								scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

								/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
         -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
         the scroll container's current scroll position. */
								scrollPositionEnd = scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
								/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
							} else {
								opts.container = null;
							}
						} else {
							/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
        the appropriate cached property names (which differ based on browser type). */
							scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
							/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
							scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

							/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
        and therefore end values do not need to be compounded onto current values. */
							scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
						}

						/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
						tweensContainer = {
							scroll: {
								rootPropertyValue: false,
								startValue: scrollPositionCurrent,
								currentValue: scrollPositionCurrent,
								endValue: scrollPositionEnd,
								unitType: "",
								easing: opts.easing,
								scrollData: {
									container: opts.container,
									direction: scrollDirection,
									alternateValue: scrollPositionCurrentAlternate
								}
							},
							element: element
						};

						if (Velocity.debug) {
							console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
						}

						/******************************************
       Tween Data Construction (for Reverse)
       ******************************************/

						/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
       that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
       the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
						/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
						/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
       there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
       as reverting to the element's values as they were prior to the previous *Velocity* call. */
					} else if (action === "reverse") {
						data = Data(element);

						/* Abort if there is no prior animation data to reverse to. */
						if (!data) {
							return;
						}

						if (!data.tweensContainer) {
							/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
							$.dequeue(element, opts.queue);

							return;
						} else {
							/*********************
        Options Parsing
        *********************/

							/* If the element was hidden via the display option in the previous call,
        revert display to "auto" prior to reversal so that the element is visible again. */
							if (data.opts.display === "none") {
								data.opts.display = "auto";
							}

							if (data.opts.visibility === "hidden") {
								data.opts.visibility = "visible";
							}

							/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
        Further, remove the previous call's callback options; typically, users do not want these to be refired. */
							data.opts.loop = false;
							data.opts.begin = null;
							data.opts.complete = null;

							/* Since we're extending an opts object that has already been extended with the defaults options object,
        we remove non-explicitly-defined properties that are auto-assigned values. */
							if (!options.easing) {
								delete opts.easing;
							}

							if (!options.duration) {
								delete opts.duration;
							}

							/* The opts object used for reversal is an extension of the options object optionally passed into this
        reverse call plus the options used in the previous Velocity call. */
							opts = $.extend({}, data.opts, opts);

							/*************************************
        Tweens Container Reconstruction
        *************************************/

							/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
							lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);

							/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
							for (var lastTween in lastTweensContainer) {
								/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
								if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
									var lastStartValue = lastTweensContainer[lastTween].startValue;

									lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
									lastTweensContainer[lastTween].endValue = lastStartValue;

									/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
          Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
          The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
									if (!Type.isEmptyObject(options)) {
										lastTweensContainer[lastTween].easing = opts.easing;
									}

									if (Velocity.debug) {
										console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
									}
								}
							}

							tweensContainer = lastTweensContainer;
						}

						/*****************************************
       Tween Data Construction (for Start)
       *****************************************/
					} else if (action === "start") {

						/*************************
       Value Transferring
       *************************/

						/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
       while the element was in the process of being animated by Velocity, then this current call is safe to use
       the end values from the prior call as its start values. Velocity attempts to perform this value transfer
       process whenever possible in order to avoid requerying the DOM. */
						/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
       then the DOM is queried for the element's current values as a last resort. */
						/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */

						data = Data(element);

						/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
       to transfer over end values to use as start values. If it's set to true and there is a previous
       Velocity call to pull values from, do so. */
						if (data && data.tweensContainer && data.isAnimating === true) {
							lastTweensContainer = data.tweensContainer;
						}

						/***************************
       Tween Data Calculation
       ***************************/

						/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
						/* Property map values can either take the form of 1) a single value representing the end value,
       or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
       The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
       the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
						var parsePropertyValue = function parsePropertyValue(valueData, skipResolvingEasing) {
							var endValue, easing, startValue;

							/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
							if (Type.isFunction(valueData)) {
								valueData = valueData.call(element, elementArrayIndex, elementsLength);
							}

							/* Handle the array format, which can be structured as one of three potential overloads:
        A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
							if (Type.isArray(valueData)) {
								/* endValue is always the first item in the array. Don't bother validating endValue's value now
         since the ensuing property cycling logic does that. */
								endValue = valueData[0];

								/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
         start value since easings can only be non-hex strings or arrays. */
								if (!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1]) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
									startValue = valueData[1];
									/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
								} else if (Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]] || Type.isArray(valueData[1])) {
									easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

									/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
									startValue = valueData[2];
								} else {
									startValue = valueData[1] || valueData[2];
								}
								/* Handle the single-value format. */
							} else {
								endValue = valueData;
							}

							/* Default to the call's easing if a per-property easing type was not defined. */
							if (!skipResolvingEasing) {
								easing = easing || opts.easing;
							}

							/* If functions were passed in as values, pass the function the current element as its context,
        plus the element's index and the element set's size as arguments. Then, assign the returned value. */
							if (Type.isFunction(endValue)) {
								endValue = endValue.call(element, elementArrayIndex, elementsLength);
							}

							if (Type.isFunction(startValue)) {
								startValue = startValue.call(element, elementArrayIndex, elementsLength);
							}

							/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
							return [endValue || 0, easing, startValue];
						};

						var fixPropertyValue = function fixPropertyValue(property, valueData) {
							/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
							var rootProperty = CSS.Hooks.getRoot(property),
							    rootPropertyValue = false,

							/* Parse out endValue, easing, and startValue from the property's data. */
							endValue = valueData[0],
							    easing = valueData[1],
							    startValue = valueData[2],
							    pattern;

							/**************************
        Start Value Sourcing
        **************************/

							/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
        inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
        Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
							/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
        there is no way to check for their explicit browser support, and so we skip skip this check for them. */
							if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
								if (Velocity.debug) {
									console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
								}
								return;
							}

							/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
        animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
        a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
							if ((opts.display !== undefined && opts.display !== null && opts.display !== "none" || opts.visibility !== undefined && opts.visibility !== "hidden") && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
								startValue = 0;
							}

							/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
        for all of the current call's properties that were *also* animated in the previous call. */
							/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
							if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
								if (startValue === undefined) {
									startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
								}

								/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
         instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
         attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
								rootPropertyValue = data.rootPropertyValueCache[rootProperty];
								/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
							} else {
								/* Handle hooked properties. */
								if (CSS.Hooks.registered[property]) {
									if (startValue === undefined) {
										rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
										/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
           getPropertyValue() will extract the hook from rootPropertyValue. */
										startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
										/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
           just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
           root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
           to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
									} else {
										/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
										rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
									}
									/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
								} else if (startValue === undefined) {
									startValue = CSS.getPropertyValue(element, property); /* GET */
								}
							}

							/**************************
        Value Data Extraction
        **************************/

							var separatedValue,
							    endValueUnitType,
							    startValueUnitType,
							    operator = false;

							/* Separates a property value into its numeric value and its unit type. */
							var separateValue = function separateValue(property, value) {
								var unitType, numericValue;

								numericValue = (value || "0").toString().toLowerCase()
								/* Match the unit type at the end of the value. */
								.replace(/[%A-z]+$/, function (match) {
									/* Grab the unit type. */
									unitType = match;

									/* Strip the unit type off of value. */
									return "";
								});

								/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
								if (!unitType) {
									unitType = CSS.Values.getUnitType(property);
								}

								return [numericValue, unitType];
							};

							if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
								pattern = "";
								var iStart = 0,
								    // index in startValue
								iEnd = 0,
								    // index in endValue
								aStart = [],
								    // array of startValue numbers
								aEnd = [],
								    // array of endValue numbers
								inCalc = 0,
								    // Keep track of being inside a "calc()" so we don't duplicate it
								inRGB = 0,
								    // Keep track of being inside an RGB as we can't use fractional values
								inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel

								startValue = CSS.Hooks.fixColors(startValue);
								endValue = CSS.Hooks.fixColors(endValue);
								while (iStart < startValue.length && iEnd < endValue.length) {
									var cStart = startValue[iStart],
									    cEnd = endValue[iEnd];

									if (/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)) {
										var tStart = cStart,
										    // temporary character buffer
										tEnd = cEnd,
										    // temporary character buffer
										dotStart = ".",
										    // Make sure we can only ever match a single dot in a decimal
										dotEnd = "."; // Make sure we can only ever match a single dot in a decimal

										while (++iStart < startValue.length) {
											cStart = startValue[iStart];
											if (cStart === dotStart) {
												dotStart = ".."; // Can never match two characters
											} else if (!/\d/.test(cStart)) {
												break;
											}
											tStart += cStart;
										}
										while (++iEnd < endValue.length) {
											cEnd = endValue[iEnd];
											if (cEnd === dotEnd) {
												dotEnd = ".."; // Can never match two characters
											} else if (!/\d/.test(cEnd)) {
												break;
											}
											tEnd += cEnd;
										}
										var uStart = CSS.Hooks.getUnit(startValue, iStart),
										    // temporary unit type
										uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type

										iStart += uStart.length;
										iEnd += uEnd.length;
										if (uStart === uEnd) {
											// Same units
											if (tStart === tEnd) {
												// Same numbers, so just copy over
												pattern += tStart + uStart;
											} else {
												// Different numbers, so store them
												pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
												aStart.push(parseFloat(tStart));
												aEnd.push(parseFloat(tEnd));
											}
										} else {
											// Different units, so put into a "calc(from + to)" and animate each side to/from zero
											var nStart = parseFloat(tStart),
											    nEnd = parseFloat(tEnd);

											pattern += (inCalc < 5 ? "calc" : "") + "(" + (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart + " + " + (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd + ")";
											if (nStart) {
												aStart.push(nStart);
												aEnd.push(0);
											}
											if (nEnd) {
												aStart.push(0);
												aEnd.push(nEnd);
											}
										}
									} else if (cStart === cEnd) {
										pattern += cStart;
										iStart++;
										iEnd++;
										// Keep track of being inside a calc()
										if (inCalc === 0 && cStart === "c" || inCalc === 1 && cStart === "a" || inCalc === 2 && cStart === "l" || inCalc === 3 && cStart === "c" || inCalc >= 4 && cStart === "(") {
											inCalc++;
										} else if (inCalc && inCalc < 5 || inCalc >= 4 && cStart === ")" && --inCalc < 5) {
											inCalc = 0;
										}
										// Keep track of being inside an rgb() / rgba()
										if (inRGB === 0 && cStart === "r" || inRGB === 1 && cStart === "g" || inRGB === 2 && cStart === "b" || inRGB === 3 && cStart === "a" || inRGB >= 3 && cStart === "(") {
											if (inRGB === 3 && cStart === "a") {
												inRGBA = 1;
											}
											inRGB++;
										} else if (inRGBA && cStart === ",") {
											if (++inRGBA > 3) {
												inRGB = inRGBA = 0;
											}
										} else if (inRGBA && inRGB < (inRGBA ? 5 : 4) || inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
											inRGB = inRGBA = 0;
										}
									} else {
										inCalc = 0;
										// TODO: changing units, fixing colours
										break;
									}
								}
								if (iStart !== startValue.length || iEnd !== endValue.length) {
									if (Velocity.debug) {
										console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
									}
									pattern = undefined;
								}
								if (pattern) {
									if (aStart.length) {
										if (Velocity.debug) {
											console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
										}
										startValue = aStart;
										endValue = aEnd;
										endValueUnitType = startValueUnitType = "";
									} else {
										pattern = undefined;
									}
								}
							}

							if (!pattern) {
								/* Separate startValue. */
								separatedValue = separateValue(property, startValue);
								startValue = separatedValue[0];
								startValueUnitType = separatedValue[1];

								/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
								separatedValue = separateValue(property, endValue);
								endValue = separatedValue[0].replace(/^([+-\/*])=/, function (match, subMatch) {
									operator = subMatch;

									/* Strip the operator off of the value. */
									return "";
								});
								endValueUnitType = separatedValue[1];

								/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
								startValue = parseFloat(startValue) || 0;
								endValue = parseFloat(endValue) || 0;

								/***************************************
         Property-Specific Value Conversion
         ***************************************/

								/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
								if (endValueUnitType === "%") {
									/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
          which is identical to the em unit's behavior, so we piggyback off of that. */
									if (/^(fontSize|lineHeight)$/.test(property)) {
										/* Convert % into an em decimal value. */
										endValue = endValue / 100;
										endValueUnitType = "em";
										/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
									} else if (/^scale/.test(property)) {
										endValue = endValue / 100;
										endValueUnitType = "";
										/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
									} else if (/(Red|Green|Blue)$/i.test(property)) {
										endValue = endValue / 100 * 255;
										endValueUnitType = "";
									}
								}
							}

							/***************************
        Unit Ratio Calculation
        ***************************/

							/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
        %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
        for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
        from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
        1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
        2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
							/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
        setting values with the target unit type then comparing the returned pixel value. */
							/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
        of batching the SETs and GETs together upfront outweights the potential overhead
        of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
							/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
							var calculateUnitRatios = function calculateUnitRatios() {

								/************************
         Same Ratio Checks
         ************************/

								/* The properties below are used to determine whether the element differs sufficiently from this call's
         previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
         of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
         this is done to minimize DOM querying. */
								var sameRatioIndicators = {
									myParent: element.parentNode || document.body, /* GET */
									position: CSS.getPropertyValue(element, "position"), /* GET */
									fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
								},

								/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
								samePercentRatio = sameRatioIndicators.position === callUnitConversionData.lastPosition && sameRatioIndicators.myParent === callUnitConversionData.lastParent,

								/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
								sameEmRatio = sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize;

								/* Store these ratio indicators call-wide for the next element to compare against. */
								callUnitConversionData.lastParent = sameRatioIndicators.myParent;
								callUnitConversionData.lastPosition = sameRatioIndicators.position;
								callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

								/***************************
         Element-Specific Units
         ***************************/

								/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
         of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
								var measurement = 100,
								    unitRatios = {};

								if (!sameEmRatio || !samePercentRatio) {
									var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

									Velocity.init(dummy);
									sameRatioIndicators.myParent.appendChild(dummy);

									/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
          Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
									/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
									$.each(["overflow", "overflowX", "overflowY"], function (i, property) {
										Velocity.CSS.setPropertyValue(dummy, property, "hidden");
									});
									Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
									Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
									Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

									/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
									$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (i, property) {
										Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
									});
									/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
									Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

									/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
									unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
									unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
									unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

									sameRatioIndicators.myParent.removeChild(dummy);
								} else {
									unitRatios.emToPx = callUnitConversionData.lastEmToPx;
									unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
									unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
								}

								/***************************
         Element-Agnostic Units
         ***************************/

								/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
         once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
         that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
         so we calculate it now. */
								if (callUnitConversionData.remToPx === null) {
									/* Default to browsers' default fontSize of 16px in the case of 0. */
									callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
								}

								/* Similarly, viewport units are %-relative to the window's inner dimensions. */
								if (callUnitConversionData.vwToPx === null) {
									callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
									callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
								}

								unitRatios.remToPx = callUnitConversionData.remToPx;
								unitRatios.vwToPx = callUnitConversionData.vwToPx;
								unitRatios.vhToPx = callUnitConversionData.vhToPx;

								if (Velocity.debug >= 1) {
									console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
								}
								return unitRatios;
							};

							/********************
        Unit Conversion
        ********************/

							/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
							if (/[\/*]/.test(operator)) {
								endValueUnitType = startValueUnitType;
								/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
         is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
         on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
         would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
								/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
							} else if (startValueUnitType !== endValueUnitType && startValue !== 0) {
								/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
								/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
         match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
         which remains past the point of the animation's completion. */
								if (endValue === 0) {
									endValueUnitType = startValueUnitType;
								} else {
									/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
          If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
									elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

									/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
									/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
									var axis = /margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x" ? "x" : "y";

									/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
          1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
									switch (startValueUnitType) {
										case "%":
											/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
            Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
            to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
											startValue *= axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight;
											break;

										case "px":
											/* px acts as our midpoint in the unit conversion process; do nothing. */
											break;

										default:
											startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
									}

									/* Invert the px ratios to convert into to the target unit. */
									switch (endValueUnitType) {
										case "%":
											startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
											break;

										case "px":
											/* startValue is already in px, do nothing; we're done. */
											break;

										default:
											startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
									}
								}
							}

							/*********************
        Relative Values
        *********************/

							/* Operator logic must be performed last since it requires unit-normalized start and end values. */
							/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
        to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
        50 points is added on top of the current % value. */
							switch (operator) {
								case "+":
									endValue = startValue + endValue;
									break;

								case "-":
									endValue = startValue - endValue;
									break;

								case "*":
									endValue = startValue * endValue;
									break;

								case "/":
									endValue = startValue / endValue;
									break;
							}

							/**************************
        tweensContainer Push
        **************************/

							/* Construct the per-property tween object, and push it to the element's tweensContainer. */
							tweensContainer[property] = {
								rootPropertyValue: rootPropertyValue,
								startValue: startValue,
								currentValue: startValue,
								endValue: endValue,
								unitType: endValueUnitType,
								easing: easing
							};
							if (pattern) {
								tweensContainer[property].pattern = pattern;
							}

							if (Velocity.debug) {
								console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
							}
						};

						/* Create a tween out of each property, and append its associated data to tweensContainer. */
						for (var property in propertiesMap) {

							if (!propertiesMap.hasOwnProperty(property)) {
								continue;
							}
							/* The original property name's format must be used for the parsePropertyValue() lookup,
        but we then use its camelCase styling to normalize it for manipulation. */
							var propertyName = CSS.Names.camelCase(property),
							    valueData = parsePropertyValue(propertiesMap[property]);

							/* Find shorthand color properties that have been passed a hex string. */
							/* Would be quicker to use CSS.Lists.colors.includes() if possible */
							if (_inArray(CSS.Lists.colors, propertyName)) {
								/* Parse the value data for each shorthand. */
								var endValue = valueData[0],
								    easing = valueData[1],
								    startValue = valueData[2];

								if (CSS.RegEx.isHex.test(endValue)) {
									/* Convert the hex strings into their RGB component arrays. */
									var colorComponents = ["Red", "Green", "Blue"],
									    endValueRGB = CSS.Values.hexToRgb(endValue),
									    startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

									/* Inject the RGB component tweens into propertiesMap. */
									for (var i = 0; i < colorComponents.length; i++) {
										var dataArray = [endValueRGB[i]];

										if (easing) {
											dataArray.push(easing);
										}

										if (startValueRGB !== undefined) {
											dataArray.push(startValueRGB[i]);
										}

										fixPropertyValue(propertyName + colorComponents[i], dataArray);
									}
									/* If we have replaced a shortcut color value then don't update the standard property name */
									continue;
								}
							}
							fixPropertyValue(propertyName, valueData);
						}

						/* Along with its property data, store a reference to the element itself onto tweensContainer. */
						tweensContainer.element = element;
					}

					/*****************
      Call Push
      *****************/

					/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
      being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
					if (tweensContainer.element) {
						/* Apply the "velocity-animating" indicator class. */
						CSS.Values.addClass(element, "velocity-animating");

						/* The call array houses the tweensContainers for each element being animated in the current call. */
						call.push(tweensContainer);

						data = Data(element);

						if (data) {
							/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
							if (opts.queue === "") {

								data.tweensContainer = tweensContainer;
								data.opts = opts;
							}

							/* Switch on the element's animating flag. */
							data.isAnimating = true;
						}

						/* Once the final element in this call's element set has been processed, push the call array onto
       Velocity.State.calls for the animation tick to immediately begin processing. */
						if (elementsIndex === elementsLength - 1) {
							/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
        Anything on this call container is subjected to tick() processing. */
							Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);

							/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
							if (Velocity.State.isTicking === false) {
								Velocity.State.isTicking = true;

								/* Start the tick loop. */
								tick();
							}
						} else {
							elementsIndex++;
						}
					}
				}

				/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
				if (opts.queue === false) {
					/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
      we manually inject the delay property here with an explicit setTimeout. */
					if (opts.delay) {

						/* Temporarily store delayed elements to facilitate access for global pause/resume */
						var callIndex = Velocity.State.delayedElements.count++;
						Velocity.State.delayedElements[callIndex] = element;

						var delayComplete = function (index) {
							return function () {
								/* Clear the temporary element */
								Velocity.State.delayedElements[index] = false;

								/* Finally, issue the call */
								buildQueue();
							};
						}(callIndex);

						Data(element).delayBegin = new Date().getTime();
						Data(element).delay = parseFloat(opts.delay);
						Data(element).delayTimer = {
							setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
							next: delayComplete
						};
					} else {
						buildQueue();
					}
					/* Otherwise, the call undergoes element queueing as normal. */
					/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
				} else {
					$.queue(element, opts.queue, function (next, clearQueue) {
						/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
       so it's fine if this is repeatedly triggered for each element in the associated call.) */
						if (clearQueue === true) {
							if (promiseData.promise) {
								promiseData.resolver(elements);
							}

							/* Do not continue with animation queueing. */
							return true;
						}

						/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
       See completeCall() for further details. */
						Velocity.velocityQueueEntryFlag = true;

						buildQueue(next);
					});
				}

				/*********************
     Auto-Dequeuing
     *********************/

				/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
     must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
     for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
     queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
     first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
				/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
     each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
				/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
     Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
				if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
					$.dequeue(element);
				}
			}

			/**************************
    Element Set Iteration
    **************************/

			/* If the "nodeType" property exists on the elements variable, we're animating a single element.
    Place it in an array so that $.each() can iterate over it. */
			$.each(elements, function (i, element) {
				/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
				if (Type.isNode(element)) {
					processElement(element, i);
				}
			});

			/******************
    Option: Loop
    ******************/

			/* The loop option accepts an integer indicating how many times the element should loop between the values in the
    current call's properties map and the element's property values prior to this call. */
			/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
    to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
    which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
			opts = $.extend({}, Velocity.defaults, options);
			opts.loop = parseInt(opts.loop, 10);
			var reverseCallsCount = opts.loop * 2 - 1;

			if (opts.loop) {
				/* Double the loop count to convert it into its appropriate number of "reverse" calls.
     Subtract 1 from the resulting value since the current call is included in the total alternation count. */
				for (var x = 0; x < reverseCallsCount; x++) {
					/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
      isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
      call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
					var reverseOptions = {
						delay: opts.delay,
						progress: opts.progress
					};

					/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
      so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
					if (x === reverseCallsCount - 1) {
						reverseOptions.display = opts.display;
						reverseOptions.visibility = opts.visibility;
						reverseOptions.complete = opts.complete;
					}

					animate(elements, "reverse", reverseOptions);
				}
			}

			/***************
    Chaining
    ***************/

			/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
			return getChain();
		};

		/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
		Velocity = $.extend(animate, Velocity);
		/* For legacy support, also expose the literal animate method. */
		Velocity.animate = animate;

		/**************
   Timing
   **************/

		/* Ticker function. */
		var ticker = window.requestAnimationFrame || rAFShim;

		/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
   To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
   devices to avoid wasting battery power on inactive tabs. */
		/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
		if (!Velocity.State.isMobile && document.hidden !== undefined) {
			var updateTicker = function updateTicker() {
				/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
				if (document.hidden) {
					ticker = function ticker(callback) {
						/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
						return setTimeout(function () {
							callback(true);
						}, 16);
					};

					/* The rAF loop has been paused by the browser, so we manually restart the tick. */
					tick();
				} else {
					ticker = window.requestAnimationFrame || rAFShim;
				}
			};

			/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
			updateTicker();

			/* And then run check again every time visibility changes */
			document.addEventListener("visibilitychange", updateTicker);
		}

		/************
   Tick
   ************/

		/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
		function tick(timestamp) {
			/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
    We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
    the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
    calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
    the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
    by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
			if (timestamp) {
				/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
     under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
     We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
				var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();

				/********************
     Call Iteration
     ********************/

				var callsLength = Velocity.State.calls.length;

				/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
     when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
     has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
				if (callsLength > 10000) {
					Velocity.State.calls = compactSparseArray(Velocity.State.calls);
					callsLength = Velocity.State.calls.length;
				}

				/* Iterate through each active call. */
				for (var i = 0; i < callsLength; i++) {
					/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
					if (!Velocity.State.calls[i]) {
						continue;
					}

					/************************
      Call-Wide Variables
      ************************/

					var callContainer = Velocity.State.calls[i],
					    call = callContainer[0],
					    opts = callContainer[2],
					    timeStart = callContainer[3],
					    firstTick = !!timeStart,
					    tweenDummyValue = null,
					    pauseObject = callContainer[5],
					    millisecondsEllapsed = callContainer[6];

					/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
      We assign timeStart now so that its value is as close to the real animation start time as possible.
      (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
      between that time and now would cause the first few frames of the tween to be skipped since
      percentComplete is calculated relative to timeStart.) */
					/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
      first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
      same style value as the element's current value. */
					if (!timeStart) {
						timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
					}

					/* If a pause object is present, skip processing unless it has been set to resume */
					if (pauseObject) {
						if (pauseObject.resume === true) {
							/* Update the time start to accomodate the paused completion amount */
							timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);

							/* Remove pause object after processing */
							callContainer[5] = null;
						} else {
							continue;
						}
					}

					millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;

					/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
      (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
      Accordingly, we ensure that percentComplete does not exceed 1. */
					var percentComplete = Math.min(millisecondsEllapsed / opts.duration, 1);

					/**********************
      Element Iteration
      **********************/

					/* For every call, iterate through each of the elements in its set. */
					for (var j = 0, callLength = call.length; j < callLength; j++) {
						var tweensContainer = call[j],
						    element = tweensContainer.element;

						/* Check to see if this element has been deleted midway through the animation by checking for the
       continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
						if (!Data(element)) {
							continue;
						}

						var transformPropertyExists = false;

						/**********************************
       Display & Visibility Toggling
       **********************************/

						/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
       (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
						if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
							if (opts.display === "flex") {
								var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];

								$.each(flexValues, function (i, flexValue) {
									CSS.setPropertyValue(element, "display", flexValue);
								});
							}

							CSS.setPropertyValue(element, "display", opts.display);
						}

						/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}

						/************************
       Property Iteration
       ************************/

						/* For every element, iterate through each property. */
						for (var property in tweensContainer) {
							/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
							if (tweensContainer.hasOwnProperty(property) && property !== "element") {
								var tween = tweensContainer[property],
								    currentValue,

								/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
         on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
								easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

								/******************************
         Current Value Calculation
         ******************************/

								if (Type.isString(tween.pattern)) {
									var patternReplace = percentComplete === 1 ? function ($0, index, round) {
										var result = tween.endValue[index];

										return round ? Math.round(result) : result;
									} : function ($0, index, round) {
										var startValue = tween.startValue[index],
										    tweenDelta = tween.endValue[index] - startValue,
										    result = startValue + tweenDelta * easing(percentComplete, opts, tweenDelta);

										return round ? Math.round(result) : result;
									};

									currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
								} else if (percentComplete === 1) {
									/* If this is the last tick pass (if we've reached 100% completion for this tween),
          ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
									currentValue = tween.endValue;
								} else {
									/* Otherwise, calculate currentValue based on the current delta from startValue. */
									var tweenDelta = tween.endValue - tween.startValue;

									currentValue = tween.startValue + tweenDelta * easing(percentComplete, opts, tweenDelta);
									/* If no value change is occurring, don't proceed with DOM updating. */
								}
								if (!firstTick && currentValue === tween.currentValue) {
									continue;
								}

								tween.currentValue = currentValue;

								/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
         it can be passed into the progress callback. */
								if (property === "tween") {
									tweenDummyValue = currentValue;
								} else {
									/******************
          Hooks: Part I
          ******************/
									var hookRoot;

									/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
          for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
          rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
          updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
          subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
									if (CSS.Hooks.registered[property]) {
										hookRoot = CSS.Hooks.getRoot(property);

										var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

										if (rootPropertyValueCache) {
											tween.rootPropertyValue = rootPropertyValueCache;
										}
									}

									/*****************
          DOM Update
          *****************/

									/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
									/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
									var adjustedSetData = CSS.setPropertyValue(element, /* SET */
									property, tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType), tween.rootPropertyValue, tween.scrollData);

									/*******************
          Hooks: Part II
          *******************/

									/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
									if (CSS.Hooks.registered[property]) {
										/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
										if (CSS.Normalizations.registered[hookRoot]) {
											Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
										} else {
											Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
										}
									}

									/***************
          Transforms
          ***************/

									/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
									if (adjustedSetData[0] === "transform") {
										transformPropertyExists = true;
									}
								}
							}
						}

						/****************
       mobileHA
       ****************/

						/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
       It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
						if (opts.mobileHA) {
							/* Don't set the null transform hack if we've already done so. */
							if (Data(element).transformCache.translate3d === undefined) {
								/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
								Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

								transformPropertyExists = true;
							}
						}

						if (transformPropertyExists) {
							CSS.flushTransformCache(element);
						}
					}

					/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
      Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
					if (opts.display !== undefined && opts.display !== "none") {
						Velocity.State.calls[i][2].display = false;
					}
					if (opts.visibility !== undefined && opts.visibility !== "hidden") {
						Velocity.State.calls[i][2].visibility = false;
					}

					/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
					if (opts.progress) {
						opts.progress.call(callContainer[1], callContainer[1], percentComplete, Math.max(0, timeStart + opts.duration - timeCurrent), timeStart, tweenDummyValue);
					}

					/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
					if (percentComplete === 1) {
						completeCall(i);
					}
				}
			}

			/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
			if (Velocity.State.isTicking) {
				ticker(tick);
			}
		}

		/**********************
   Call Completion
   **********************/

		/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
		function completeCall(callIndex, isStopped) {
			/* Ensure the call exists. */
			if (!Velocity.State.calls[callIndex]) {
				return false;
			}

			/* Pull the metadata from the call. */
			var call = Velocity.State.calls[callIndex][0],
			    elements = Velocity.State.calls[callIndex][1],
			    opts = Velocity.State.calls[callIndex][2],
			    resolver = Velocity.State.calls[callIndex][4];

			var remainingCallsExist = false;

			/*************************
    Element Finalization
    *************************/

			for (var i = 0, callLength = call.length; i < callLength; i++) {
				var element = call[i].element;

				/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
				/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
				/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
				if (!isStopped && !opts.loop) {
					if (opts.display === "none") {
						CSS.setPropertyValue(element, "display", opts.display);
					}

					if (opts.visibility === "hidden") {
						CSS.setPropertyValue(element, "visibility", opts.visibility);
					}
				}

				/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
     a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
     an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
     we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
     is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
				var data = Data(element);

				if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
					/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
					if (data) {
						data.isAnimating = false;
						/* Clear the element's rootPropertyValueCache, which will become stale. */
						data.rootPropertyValueCache = {};

						var transformHAPropertyExists = false;
						/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
						$.each(CSS.Lists.transforms3D, function (i, transformName) {
							var defaultValue = /^scale/.test(transformName) ? 1 : 0,
							    currentValue = data.transformCache[transformName];

							if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
								transformHAPropertyExists = true;

								delete data.transformCache[transformName];
							}
						});

						/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
						if (opts.mobileHA) {
							transformHAPropertyExists = true;
							delete data.transformCache.translate3d;
						}

						/* Flush the subproperty removals to the DOM. */
						if (transformHAPropertyExists) {
							CSS.flushTransformCache(element);
						}

						/* Remove the "velocity-animating" indicator class. */
						CSS.Values.removeClass(element, "velocity-animating");
					}
				}

				/*********************
     Option: Complete
     *********************/

				/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
				/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
				if (!isStopped && opts.complete && !opts.loop && i === callLength - 1) {
					/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
					try {
						opts.complete.call(elements, elements);
					} catch (error) {
						setTimeout(function () {
							throw error;
						}, 1);
					}
				}

				/**********************
     Promise Resolving
     **********************/

				/* Note: Infinite loops don't return promises. */
				if (resolver && opts.loop !== true) {
					resolver(elements);
				}

				/****************************
     Option: Loop (Infinite)
     ****************************/

				if (data && opts.loop === true && !isStopped) {
					/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
      continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
					$.each(data.tweensContainer, function (propertyName, tweenContainer) {
						if (/^rotate/.test(propertyName) && (parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0) {
							var oldStartValue = tweenContainer.startValue;

							tweenContainer.startValue = tweenContainer.endValue;
							tweenContainer.endValue = oldStartValue;
						}

						if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
							tweenContainer.endValue = 0;
							tweenContainer.startValue = 100;
						}
					});

					Velocity(element, "reverse", { loop: true, delay: opts.delay });
				}

				/***************
     Dequeueing
     ***************/

				/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
     which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
     $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
				if (opts.queue !== false) {
					$.dequeue(element, opts.queue);
				}
			}

			/************************
    Calls Array Cleanup
    ************************/

			/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
    (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
			Velocity.State.calls[callIndex] = false;

			/* Iterate through the calls array to determine if this was the final in-progress animation.
    If so, set a flag to end ticking and clear the calls array. */
			for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
				if (Velocity.State.calls[j] !== false) {
					remainingCallsExist = true;

					break;
				}
			}

			if (remainingCallsExist === false) {
				/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
				Velocity.State.isTicking = false;

				/* Clear the calls array so that its length is reset. */
				delete Velocity.State.calls;
				Velocity.State.calls = [];
			}
		}

		/******************
   Frameworks
   ******************/

		/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
   If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
   also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
   accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
   (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
		global.Velocity = Velocity;

		if (global !== window) {
			/* Assign the element function to Velocity's core animate() method. */
			global.fn.velocity = animate;
			/* Assign the object function's defaults to Velocity's global defaults object. */
			global.fn.velocity.defaults = Velocity.defaults;
		}

		/***********************
   Packaged Redirects
   ***********************/

		/* slideUp, slideDown */
		$.each(["Down", "Up"], function (i, direction) {
			Velocity.Redirects["slide" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
				var opts = $.extend({}, options),
				    begin = opts.begin,
				    complete = opts.complete,
				    inlineValues = {},
				    computedValues = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" };

				if (opts.display === undefined) {
					/* Show the element before slideDown begins and hide the element after slideUp completes. */
					/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
					opts.display = direction === "Down" ? Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block" : "none";
				}

				opts.begin = function () {
					/* If the user passed in a begin callback, fire it now. */
					if (elementsIndex === 0 && begin) {
						begin.call(elements, elements);
					}

					/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
					for (var property in computedValues) {
						if (!computedValues.hasOwnProperty(property)) {
							continue;
						}
						inlineValues[property] = element.style[property];

						/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
       use forcefeeding to start from computed values and animate down to 0. */
						var propertyValue = CSS.getPropertyValue(element, property);
						computedValues[property] = direction === "Down" ? [propertyValue, 0] : [0, propertyValue];
					}

					/* Force vertical overflow content to clip so that sliding works as expected. */
					inlineValues.overflow = element.style.overflow;
					element.style.overflow = "hidden";
				};

				opts.complete = function () {
					/* Reset element to its pre-slide inline values once its slide animation is complete. */
					for (var property in inlineValues) {
						if (inlineValues.hasOwnProperty(property)) {
							element.style[property] = inlineValues[property];
						}
					}

					/* If the user passed in a complete callback, fire it now. */
					if (elementsIndex === elementsSize - 1) {
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					}
				};

				Velocity(element, computedValues, opts);
			};
		});

		/* fadeIn, fadeOut */
		$.each(["In", "Out"], function (i, direction) {
			Velocity.Redirects["fade" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
				var opts = $.extend({}, options),
				    complete = opts.complete,
				    propertiesMap = { opacity: direction === "In" ? 1 : 0 };

				/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
     callbacks by firing them only when the final element has been reached. */
				if (elementsIndex !== 0) {
					opts.begin = null;
				}
				if (elementsIndex !== elementsSize - 1) {
					opts.complete = null;
				} else {
					opts.complete = function () {
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					};
				}

				/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
				/* Note: We allow users to pass in "null" to skip display setting altogether. */
				if (opts.display === undefined) {
					opts.display = direction === "In" ? "auto" : "none";
				}

				Velocity(this, propertiesMap, opts);
			};
		});

		return Velocity;
	}(window.jQuery || window.Zepto || window, window, window ? window.document : undefined);
});

/******************
 Known Issues
 ******************/

/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(194)(module)))

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animejs = __webpack_require__(1);

var _animejs2 = _interopRequireDefault(_animejs);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollTop = function () {
  function ScrollTop() {
    _classCallCheck(this, ScrollTop);

    this.button = document.getElementById('js-scroll-button');
  }

  _createClass(ScrollTop, [{
    key: 'addEvent',
    value: function addEvent() {
      var options = (0, _util.enablePassiveEventListeners)() ? {
        passive: true
      } : false;

      this.button.addEventListener('click', this.onClickButton.bind(this), options);
    }
  }, {
    key: 'onClickButton',
    value: function onClickButton() {
      var scroll = {
        y: window.scrollY || window.pageYOffset
      };

      (0, _animejs2.default)({
        targets: scroll,
        y: 0,
        duration: 350,
        easing: 'easeInOutCubic',
        update: function update() {
          console.log('scrollY: ' + scroll.y);
          window.scrollTo(0, scroll.y);
        }
      });
    }
  }]);

  return ScrollTop;
}();

exports.default = ScrollTop;

/***/ })
/******/ ]);