(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Core"] = factory();
	else
		root["Core"] = factory();
})(globalThis, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 646:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Reads the content property on the documentElement ::before pseudo element
 * for a string of ordered, comma-separated, breakpoint names.
 *
 * @returns An ordered array of strings representing the breakpoint names
 *
 */
function readCSSBreakpoints() {
    return window
        .getComputedStyle(document.documentElement, ':before')
        .getPropertyValue('content')
        .replace(/"/g, '')
        .split(',');
}
/**
 * Reads the content property on the documentElement ::after pseudo element
 * for a string of the current breakpoint name. This value is updated using
 * dynamically using media queries and should match a value found in
 * the ::before pseudo element.
 *
 * @returns A string representing the current breakpoint name
 *
 */
function readCSSCurrentBreakpoint() {
    return window
        .getComputedStyle(document.documentElement, ':after')
        .getPropertyValue('content')
        .replace(/"/g, '');
}
var callbacks = [];
var cssBreakpoints = readCSSBreakpoints();
var CSSBreakpoint = /** @class */ (function () {
    function CSSBreakpoint(cssBreakpoint) {
        this.cssBreakpoint = cssBreakpoint;
    }
    Object.defineProperty(CSSBreakpoint.prototype, "value", {
        get: function () {
            return this.cssBreakpoint;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks whether this breakpoint is at least the input breakpoint
     *
     * @param breakpointName - The input breakpoint name
     * @returns Whether this breakpoint is the same or greater than the input breakpoint
     *
     */
    CSSBreakpoint.prototype.min = function (breakpointName) {
        var comparison = cssBreakpoints.indexOf(this.value) - cssBreakpoints.indexOf(breakpointName);
        return comparison >= 0;
    };
    /**
     * Checks whether this breakpoint is at most the input breakpoint
     *
     * @param breakpointName - The input breakpoint name
     * @returns Whether this breakpoint is the same or less than the input breakpoint
     *
     */
    CSSBreakpoint.prototype.max = function (breakpointName) {
        var comparison = cssBreakpoints.indexOf(this.value) - cssBreakpoints.indexOf(breakpointName);
        return comparison <= 0;
    };
    /**
     * Checks whether this breakpoint is at within the input breakpoint start
     * and input breakpoint end, inclusive
     *
     * @param breakpointNameStart - The starting input breakpoint name
     * @param breakpointNameEnd - The ending input breakpoint name
     * @returns Whether this breakpoint is the same or greater than the starting input
     *          breakpoint and the same or less than the ending input breakpoint
     *
     */
    CSSBreakpoint.prototype.range = function (breakpointNameStart, breakpointNameEnd) {
        var indexCurrent = cssBreakpoints.indexOf(this.value);
        var indexStart = cssBreakpoints.indexOf(breakpointNameStart);
        var indexEnd = cssBreakpoints.indexOf(breakpointNameEnd);
        return indexStart <= indexCurrent && indexCurrent <= indexEnd;
    };
    /**
     * Checks whether this breakpoint is one of the input breakpoints
     *
     * @param breakpointNames - One or more input breakpoint names
     * @returns Whether this breakpoint is one of the input breakpoints
     *
     */
    CSSBreakpoint.prototype.is = function () {
        var _this = this;
        var breakpointNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            breakpointNames[_i] = arguments[_i];
        }
        return breakpointNames.some(function (breakpoint) { return breakpoint === _this.value; });
    };
    return CSSBreakpoint;
}());
var breakpoints = {
    previous: new CSSBreakpoint(readCSSCurrentBreakpoint()),
    current: new CSSBreakpoint(readCSSCurrentBreakpoint()),
};
/**
 * Gets the breakpoints
 *
 * @returns The current and previous breakpoint
 *
 */
function get() {
    return breakpoints;
}
exports.get = get;
/**
 * Adds an event listener to be called when a breakpoint changes
 *
 * @param callback - The function to be called when a breakpoint changes
 *
 */
function onChange(callback) {
    if (callbacks.indexOf(callback) === -1) {
        callbacks.push(callback);
    }
}
exports.onChange = onChange;
/**
 * Removes an event listener to be called when a breakpoint changes
 *
 * @param callback - The function to be removed from the set of event listeners
 *
 */
function offChange(callback) {
    var index = callbacks.indexOf(callback);
    if (index !== -1) {
        callbacks.splice(index, 1);
    }
}
exports.offChange = offChange;
var currentMin = function (breakpointName) { return breakpoints.current.min(breakpointName); };
exports.min = currentMin;
var currentMax = function (breakpointName) { return breakpoints.current.max(breakpointName); };
exports.max = currentMax;
var currentRange = function (breakpointNameStart, breakpointNameEnd) { return breakpoints.current.range(breakpointNameStart, breakpointNameEnd); };
exports.range = currentRange;
var currentIs = function () {
    var _a;
    var breakpointNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        breakpointNames[_i] = arguments[_i];
    }
    return (_a = breakpoints.current).is.apply(_a, breakpointNames);
};
exports.is = currentIs;
/*
 * document.styleSheets is considered experimental technology; however,
 * the majority of current browsers implement this functionality.
 *
 * One drawback is under certain conditions, stylesheets may become
 * available due to security rules in the browser and we must be able to
 * fallback gracefully.
 */
var styleSheetList = document.styleSheets;
var mediaLists = Object.keys(styleSheetList).reduce(function (accumulator, key) {
    var stylesheet = styleSheetList[key];
    if (!stylesheet.href || stylesheet.href.indexOf('theme') === -1) {
        return accumulator;
    }
    try {
        var cssRules = stylesheet.cssRules;
        for (var i = 0; i < cssRules.length; i++) {
            var cssRule = stylesheet.cssRules[i];
            if (!(cssRule instanceof CSSMediaRule)) {
                continue;
            }
            for (var j = 0; j < cssRules.length; j++) {
                var cssMediaCssRule = cssRule.cssRules[j];
                if (!(cssMediaCssRule instanceof CSSStyleRule)) {
                    continue;
                }
                if (cssMediaCssRule.selectorText && cssMediaCssRule.selectorText.indexOf('html::after') !== -1) {
                    accumulator.push(cssRule.media);
                }
            }
        }
    }
    catch (_a) {
        return accumulator;
    }
    return accumulator;
}, []);
/*
 * Use window.matchMedia when stylesheets are accessible in the browser.
 * matchMedia is theoretically more performant than listening to every resize
 * event because it only fires when a media query boundary is crossed.
 *
 * If stylesheets aren't available, revert back to using the resize event.
 */
if (mediaLists.length > 0) {
    mediaLists.forEach(function (mediaList) {
        var mql = window.matchMedia(mediaList.mediaText);
        mql.addListener(function () {
            var cssCurrentBreakpoint = readCSSCurrentBreakpoint();
            if (breakpoints.current.value !== cssCurrentBreakpoint) {
                breakpoints.previous = breakpoints.current;
                breakpoints.current = new CSSBreakpoint(cssCurrentBreakpoint);
                callbacks.forEach(function (callback) { return callback(breakpoints); });
            }
        });
    });
}
else {
    window.addEventListener('resize', function () {
        var cssCurrentBreakpoint = readCSSCurrentBreakpoint();
        if (breakpoints.current.value !== cssCurrentBreakpoint) {
            breakpoints.previous = breakpoints.current;
            breakpoints.current = new CSSBreakpoint(cssCurrentBreakpoint);
            callbacks.forEach(function (callback) { return callback(breakpoints); });
        }
    });
}


/***/ }),

/***/ 766:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = true;
var EventHandler = /** @class */ (function () {
    function EventHandler() {
        this.events = [];
    }
    // According to MDN, "If not specified, useCapture defaults to false.",
    // so we'll follow suit and set the default value of the `options`/`useCapture` parameter to `false`.
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#parameters
    EventHandler.prototype.register = function (el, event, listener, options) {
        if (options === void 0) { options = false; }
        if (!el || !event || !listener)
            return null;
        this.events.push({ el: el, event: event, listener: listener, options: options });
        el.addEventListener(event, listener, options);
        return { el: el, event: event, listener: listener, options: options };
    };
    EventHandler.prototype.unregister = function (_a) {
        var el = _a.el, event = _a.event, listener = _a.listener, options = _a.options;
        if (!el || !event || !listener)
            return null;
        this.events = this.events.filter(function (e) { return el !== e.el
            || event !== e.event
            || listener !== e.listener; });
        el.removeEventListener(event, listener, options);
        return { el: el, event: event, listener: listener, options: options };
    };
    EventHandler.prototype.unregisterAll = function () {
        this.events.forEach(function (_a) {
            var el = _a.el, event = _a.event, listener = _a.listener, options = _a.options;
            return el.removeEventListener(event, listener, options);
        });
        this.events = [];
    };
    return EventHandler;
}());
exports.Z = EventHandler;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
(function (n, v) {
    // eslint-disable-next-line max-len
    if (window.Shopify && window.Shopify.theme && navigator && navigator.sendBeacon && window.Shopify.designMode) {
      if (sessionStorage.getItem('oots_beacon')) return;

      navigator.sendBeacon('https://app.outofthesandbox.com/beacon', new URLSearchParams({
        shop_domain: window.Shopify.shop,
        shop_id: window.PXUTheme.context.shop.id,
        theme_name: n,
        theme_version: v,
        theme_store_id: window.Shopify.theme.theme_store_id,
        theme_id: window.Shopify.theme.id,
        theme_role: window.Shopify.theme.role,
      }));

      sessionStorage.setItem('oots_beacon', '');
    }
  }('tailor','2.2.0'))
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A11y": () => (/* binding */ core_A11y),
  "Animations": () => (/* binding */ Animations),
  "BlockComponent": () => (/* binding */ core_BlockComponent),
  "Breakpoints": () => (/* binding */ Breakpoints),
  "Component": () => (/* binding */ core_Component),
  "Components": () => (/* binding */ Components),
  "Events": () => (/* binding */ Events),
  "Media": () => (/* binding */ core_Media),
  "Money": () => (/* binding */ core_Money),
  "SectionComponent": () => (/* binding */ core_SectionComponent),
  "Utils": () => (/* binding */ core_Utils)
});

// NAMESPACE OBJECT: ./node_modules/@pixelunion/animations/dist/animations.es.js
var animations_es_namespaceObject = {};
__webpack_require__.r(animations_es_namespaceObject);
__webpack_require__.d(animations_es_namespaceObject, {
  "Animation": () => (Animation),
  "AnimationsManager": () => (AnimationsManager),
  "animation": () => (animation),
  "transition": () => (transition)
});

;// CONCATENATED MODULE: ./node_modules/@pixelunion/animations/dist/animations.es.js

  /*!
   * @pixelunion/animations v0.1.0
   * (c) 2019 Pixel Union
   * Released under the UNLICENSED license.
  */

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Promisified version of window.requestAnimationFrame.
 * @returns {Promise} Promise will resolve when requestAnimationFrame callback is run.
 */
function raf() {
  return new Promise(function (resolve) {
    window.requestAnimationFrame(resolve);
  });
}
/**
 * Represents an HTML element with associate states
 */


var Animation =
/*#__PURE__*/
function () {
  /**
   * @param {Object} options
   * @param {HTMLElement}  options.el Target element
   * @param {String} [options.state=initial] Initial state. This is also the default state.
   * @param {String} [options.stateAttribute=data-revealer] Attribute name to update with state.
   * @param {String} [options.stateChangeAttribute=data-revealer-transition] Attribute name to
   * update with change of state.
   * @param {String} [options.endEvent=transitionend] Event to listen for at end of state change.
   * @param {Boolean} [options.hold=false] If true, changeAttribute will not be removed until the
   * next state change.
   * @param {Function} [options.onStart] Callback to execute immediate after
   * applying stateChangeAttribute.
   */
  function Animation(options) {
    _classCallCheck(this, Animation);

    this._el = options.el;
    this.cancelRunning = null;
    this._state = options.state || 'initial';
    this.initialState = this._state;
    this.stateAttribute = options.stateAttribute || 'data-animation-state';
    this.stateChangeAttribute = options.stateChangeAttribute || 'data-animation';
    this.endEvent = options.endEvent || 'transitionend';
    this.hold = !!options.hold;

    this.onStart = options.onStart || function () {
      /* do nothing */
    };

    this.activeEventHandler = null;
  }
  /**
   * Returns target element
   *
   * @return {HTMLElement} Target element
   */


  _createClass(Animation, [{
    key: "isState",

    /**
     * Check if a state is active
     * @param {String} state State to compare
     *
     * @return {Boolean}
     */
    value: function isState(state) {
      return state === this._state;
    }
    /**
     * Sequences a change to a new state.
     * @param {String} state Target state
     *
     * @param {Boolean} options.force Switch to final state immediately
     *
     * @param {Function} options.onStart Callback to execute immediately after
     * applying stateChangeAttribute for this state change only.
     *
     * @param {Boolean} [options.hold=false] If true, changeAttribute will not be removed until the
     * next state change.
     *
     * @return {Promise} Resolves when endEvent triggered
     */

  }, {
    key: "animateTo",
    value: function animateTo(state) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var from = this._el.dataset[this.stateAttribute] || this._state;
      var to = state || this.initialState;
      var force = options.force;
      var hold = 'hold' in options ? options.hold : this.hold;
      return new Promise(function (resolve) {
        if (_this.cancelRunning) {
          _this.cancelRunning();
        }

        if (from === to) {
          // Removing this here fixes some lingering attributes. But why?
          _this._el.removeAttribute(_this.stateChangeAttribute);

          resolve(from, null);
          return;
        }

        var running = true;

        _this.cancelRunning = function () {
          running = false;
          resolve(null, null);
        };

        _this._el.removeEventListener(_this.endEvent, _this.activeEventHandler);

        _this.activeEventHandler = null;

        if (force) {
          _this._el.setAttribute(_this.stateChangeAttribute, "".concat(from, "=>").concat(to));

          _this.onStart({
            el: _this._el,
            from: from,
            to: to
          });

          if (typeof options.onStart === 'function') {
            options.onStart({
              el: _this._el,
              from: from,
              to: to
            });
          }

          _this._el.setAttribute(_this.stateAttribute, to);

          _this._state = to;

          if (!hold) {
            _this._el.removeAttribute(_this.stateChangeAttribute);
          }

          resolve(to, null);
          return;
        }

        raf().then(function () {
          if (!running) throw new Error('cancelled');

          _this._el.setAttribute(_this.stateChangeAttribute, "".concat(from, "=>").concat(to));

          _this.onStart({
            el: _this._el,
            from: from,
            to: to
          });

          if (typeof options.onStart === 'function') {
            options.onStart({
              el: _this._el,
              from: from,
              to: to
            });
          }

          return raf();
        }).then(function () {
          if (!running) throw new Error('cancelled');

          _this._el.removeEventListener(_this.endEvent, _this.activeEventHandler);

          _this.activeEventHandler = function (e) {
            // Ignore any events bubbling up
            if (e.target !== _this._el || !running) return;

            _this._el.removeEventListener(_this.endEvent, _this.activeEventHandler);

            if (!hold) {
              _this._el.removeAttribute(_this.stateChangeAttribute);
            }

            resolve(to, e);
          };

          _this._el.addEventListener(_this.endEvent, _this.activeEventHandler);

          _this._el.setAttribute(_this.stateAttribute, to);

          _this._state = to;
        })["catch"](function (error) {
          // Only catch 'cancelled' errors.
          if (error.message !== 'cancelled') throw error;
        });
      });
    }
    /**
     * Remove any event listeners
     */

  }, {
    key: "unload",
    value: function unload() {
      this._el.removeEventListener(this.endEvent, this.activeEventHandler);

      this.activeEventHandler = null;
    }
  }, {
    key: "el",
    get: function get() {
      return this._el;
    }
    /**
     * Returns current state
     *
     * @return {String} Current state
     */

  }, {
    key: "state",
    get: function get() {
      return this._state;
    }
  }]);

  return Animation;
}();

/**
 * Manage state changes for a set of elements
 */

var AnimationsManager =
/*#__PURE__*/
function () {
  function AnimationsManager() {
    _classCallCheck(this, AnimationsManager);

    this.animations = new Map();
  }
  /**
   * Add a new element and return an animation for that element. If element already has an associated animation, return that animation.
   * @param {Object} options
   * @param {HTMLElement}  options.el Target element
   * @param {String} [options.state=initial] Initial state. This is also the default state.
   * @param {String} [options.stateAttribute=data-revealer] Attribute name to update with state.
   * @param {String} [options.stateChangeAttribute=data-revealer-transition] Attribute name to update with change of state.
   * @param {String} [options.endEvent=transitionend] Event name to listen for at end of state change.
   * @param {Boolean} [options.hold=false] If true, changeAttribute will not be removed until the next state change.
   * @param {Function} [options.onStart] Callback to execute immediate after applying stateChangeAttribute.
   *
   * @return {Animation}
   */


  _createClass(AnimationsManager, [{
    key: "add",
    value: function add(options) {
      if (this.animations.has(options.el)) return this.animations.get(options.el);
      var animation = new Animation(options);
      this.animations.set(options.el, animation);
      return animation;
    }
    /**
     * Remove a single animation
     * @param {Animation} animation Animation to remove. Any event listeners will also be removed.
     */

  }, {
    key: "remove",
    value: function remove(animation) {
      this.animations["delete"](animation.el);
      animation.unload();
    }
    /**
     * Remove all animations, including all event listeners.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      this.animations.forEach(function (animation) {
        return animation.unload();
      });
    }
  }]);

  return AnimationsManager;
}();

function animation(options) {
  var setOptions = {
    endEvent: 'animationend',
    hold: true
  };
  return new Animation(_objectSpread2({
    options: options
  }, setOptions));
}

function transition(options) {
  return new Animation(options);
}



// EXTERNAL MODULE: ./node_modules/@pixelunion/breakpoint/dist/cjs/index.js
var cjs = __webpack_require__(646);
// EXTERNAL MODULE: ./node_modules/@pixelunion/events/dist/EventHandler.js
var EventHandler = __webpack_require__(766);
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/components/Component.js

function loadData(el) {
  const dataEl = Array.from(el.children).find(child => 'componentData' in child.dataset);
  if (!dataEl) return {};

  // Load data from attribute, or innerHTML
  const data = dataEl.getAttribute('data-component-data') || dataEl.innerHTML;
  try {
    return JSON.parse(data);
  } catch (error) {
    throw new Error('Invalid component data found.', {
      cause: error
    });
  }
}

/**
 * @class Component
 * @classdesc Class representing a component.
 */
class Component {
  /**
   * @constructor
   * @param {HTMLElement} el - The component element.
   * @param {Object} context - The component's context.
   */
  constructor(el) {
    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this._el = el;
    this._context = context;
    this._state = {};
    this._data = loadData(el);
    this._eventHandler = new EventHandler/* default */.Z();
    if (!this._el.hasAttribute('id')) {
      this._el.setAttribute('id',
      // eslint-disable-next-line no-bitwise, space-infix-ops, no-mixed-operators
      ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)));
    }
  }

  /**
   * Get the component's name.
   *
   * @memberof Component.prototype
   * @type {string} Component's name.
   */
  get name() {
    return this._el.dataset.component;
  }

  /**
   * Get the component's type.
   *
   * @memberof Component.prototype
   * @type {string} Component's type.
   */
  get type() {
    return this._el.dataset.componentType;
  }

  /**
   * Get the component's tag, if available.
   *
   * @memberof Component.prototype
   * @type {string|null} Component's tag, returns null if not present.
   */
  get tag() {
    return this._el.dataset.componentTag;
  }

  /**
   * Get the component's id.
   *
   * @memberof Component.prototype
   * @type {string} Component's id.
   */
  get id() {
    return this._el.id;
  }

  /**
   * Get the component's parent
   *
   * @memberof Component.prototype
   * @type {Component|null} Component's parent, returns null if no parent is found.
   */
  get parent() {
    const parentComponentEl = this._el.parentElement.closest('[data-component]');
    return parentComponentEl ? Core.Components.getComponent(parentComponentEl.getAttribute('id')) : null;
  }

  /**
   * Get the component's children
   *
   * @memberof Component.prototype
   * @type {Component[]} Component's children, returns an empty array if no children are found.
   */
  get children() {
    const children = [];
    const descendantComponentEls = this._el.querySelectorAll('[data-component]');
    for (let i = 0; i < descendantComponentEls.length; i++) {
      const descendantComponentEl = descendantComponentEls[i];
      const descendantComponent = Core.Components.getComponent(descendantComponentEl.getAttribute('id'));
      if (descendantComponent && descendantComponent.parent === this) {
        children.push(descendantComponent);
      }
    }
    return children;
  }

  /**
   * Get the component's element
   *
   * @memberof Component.prototype
   * @type {HTMLElement} Component's element.
   */
  get el() {
    return this._el;
  }

  /**
   * Get the component's context
   *
   * @memberof Component.prototype
   * @type {Object} Component's context.
   */
  get context() {
    return this._context;
  }

  /**
   * Get the component's data
   *
   * @memberof Component.prototype
   * @type {Object} Component's data.
   */
  get data() {
    return this._data;
  }

  /**
   * Get the component's state
   *
   * @memberof Component.prototype
   * @type {Object} Component's state.
   */
  get state() {
    return this._state;
  }

  /**
   * Set the component's state
   *
   * @memberof Component.prototype
   * @type {Object} Component's state.
   */
  set state(state) {
    this._state = state;
  }

  /**
   * Get the component's event handler
   *
   * @memberof Component.prototype
   * @type {EventHandler} Component's event handler.
   * @see {@link https://github.com/pixelunion/events|Events}
   */
  get events() {
    return this._eventHandler;
  }

  /**
   * Get the closest component with given parameters
   *
   * @memberof Component.prototype
   * @param {string} name - A component name
   * @param {string} [tag] - A component tag
   * @return {Component|null} The closest component with a given name and tag, null if not found.
   */
  closest(name) {
    let tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const result = this._el.closest(`[data-component="${name}"]${tag ? `[data-component-tag="${tag}"]` : ''}`);
    if (!result) return null;
    return Core.Components.getComponent(result.getAttribute('id'));
  }

  /**
   * Get first child component with given parameters
   *
   * @memberof Component.prototype
   * @param {string} name - A component name
   * @param {string} [tag] - A component tag
   * @return {Component|null} The first child component
   *                          with a given name and tag, null if not found.
   */
  query(name) {
    let tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const result = this._el.querySelector(`[data-component="${name}"]${tag ? `[data-component-tag="${tag}"]` : ''}`);
    if (!result) return null;
    return Core.Components.getComponent(result.getAttribute('id'));
  }

  /**
   * Get all children components with given parameters
   *
   * @memberof Component.prototype
   * @param {string} name - A component name
   * @param {string} [tag] - A component tag
   * @return {Component[]} An array of child components
   *                          with a given name and tag, an empty array if none are found.
   */
  queryAll(name) {
    let tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const results = [...this._el.querySelectorAll(`[data-component="${name}"]${tag ? `[data-component-tag="${tag}"]` : ''}`)];
    if (!results.length) return [];
    return results.reduce((acc, result) => {
      const component = Core.Components.getComponent(result.getAttribute('id'));
      if (component) {
        acc.push(component);
      }
      return acc;
    }, []);
  }

  /**
   * Set the state of the component
   *
   * @memberof Component.prototype
   * @param {Object} state - An object containing new state of the component
   */
  setState() {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const stateDiff = {};
    const stateKeys = Object.keys(state);

    // Shallow comparison
    for (let i = 0; i < stateKeys.length; i++) {
      const key = stateKeys[i];
      const value = state[key];
      if (!(key in this._state) || this._state[key] !== value) {
        stateDiff[key] = value;
      }
    }

    // Fast return if there's no shallow changes
    if (!Object.keys(stateDiff).length) return;
    this._state = {
      ...this._state,
      ...state
    };
    const notifyChildren = parent => {
      const {
        children
      } = parent;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child._context = {
          ...this._context,
          ...this._state
        };
        child.onContextChange(stateDiff);
        notifyChildren(child);
      }
    };
    notifyChildren(this);
    this.onStateChange(stateDiff);
  }

  /**
   * Called when the component is mounted to the DOM
   * all dependent components have been constructed.
   *
   * Initialization logic requiring interactions with other components
   * should be handled here.
   *
   * @memberof Component.prototype
   */
  onMount() {
    return undefined;
  }

  /**
   * Called when an ancenstral component changes state
   *
   * @memberof Component.prototype
   * @param {Object} newContext - An object representing the
   *                              new context derived from ancestral components
   */
  // eslint-disable-next-line no-unused-vars
  onContextChange(newContext) {
    return undefined;
  }

  /**
   * Called when this component changes state
   *
   * @memberof Component.prototype
   * @param {Object} newState - An object representing the
   *                            new state of the component
   */
  // eslint-disable-next-line no-unused-vars
  onStateChange(newState) {
    return undefined;
  }

  /**
   * Called when the component is dismounted.
   *
   * Destruction logic should be handled here.
   *
   * @memberof Component.prototype
   * @function
   */
  onDismount() {
    this._eventHandler.unregisterAll();
    this.unload();
  }

  /**
   * Called when the component is dismounted.
   *
   * @memberof Component.prototype
   * @deprecated Please update to onDismount
   */
  unload() {
    return undefined;
  }
}
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/components/SectionComponent.js


/**
 * @class SectionComponent
 * @classdesc Class representing a section component.
 * @extends Component
 */
class SectionComponent extends Component {
  /**
   * @constructor
   * @param {HTMLElement} el - The component element.
   * @param {Object} context - The component's context.
   */
  constructor(el) {
    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    super(el, context);
    this._sectionWrapper = el.parentElement;
    // ID's of Shopify sections are preceded by 'shopify-section-' when using
    // the HTML wrapper ID as the source, so let's remove that
    this._sectionId = this._sectionWrapper.id.replace('shopify-section-', '');
  }

  /**
   * Get the section's Shopify wrapper
   *
   * @memberof SectionComponent.prototype
   * @type {HTMLElement} Section's Shopify wrapper element.
   */
  get sectionWrapper() {
    return this._sectionWrapper;
  }

  /**
   * Get the section's Shopify wrapper ID
   *
   * @memberof SectionComponent.prototype
   * @type {string} Section's Shopify wrapper ID.
   */
  get sectionId() {
    return this._sectionId;
  }

  /**
   * Called when the component is selected in the Shopify Theme Editor.
   *
   * @memberof SectionComponent.prototype
   */
  onSelect() {
    return undefined;
  }

  /**
   * Called when the component is deselected in the Shopify Theme Editor.
   *
   * @memberof SectionComponent.prototype
   */
  onDeselect() {
    return undefined;
  }

  /**
   * Called when the component is reordered in the Shopify Theme Editor.
   *
   * @memberof SectionComponent.prototype
   */
  onReorder() {
    return undefined;
  }

  /**
   * Called when a block within the section is selected in the Shopify Theme Editor.
   *
   * @memberof SectionComponent.prototype
   */
  onBlockSelect() {
    return undefined;
  }

  /**
   * Called when a block within the section is deselected in the Shopify Theme Editor.
   *
   * @memberof SectionComponent.prototype
   */
  onBlockDeselect() {
    return undefined;
  }
}
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/components/BlockComponent.js


/**
 * @class BlockComponent
 * @classdesc Class representing a block component.
 * @extends Component
 */
class BlockComponent extends Component {
  /**
   * Called when the component is selected in the Shopify Theme Editor.
   *
   * @memberof SectionComponent.prototype
   */
  onSelect() {
    return undefined;
  }

  /**
   * Called when the component is deselected in the Shopify Theme Editor.
   *
   * @memberof SectionComponent.prototype
   */
  onDeselect() {
    return undefined;
  }

  /**
   * Called when the component is reordered in the Shopify Theme Editor.
   *
   * @memberof SectionComponent.prototype
   */
  onReorder() {
    return undefined;
  }
}
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/components/ComponentManager.js




/**
 * @class ComponentManager
 * @classdesc Class representing a component manager.
 */
class ComponentManager {
  /**
   * @constructor
   */
  constructor() {
    this._componentClasses = {};
    this._instances = {};
    this._deferredEvents = [];
    this._onShopifyEvent = this._onShopifyEvent.bind(this);
    this._awaitingComponents = [];
    document.addEventListener('DOMContentLoaded', () => {
      // create a new instance of `MutationObserver` named `observer`,
      // passing it a callback function
      const observer = new MutationObserver(mutationsList => {
        for (let i = 0; i < mutationsList.length; i++) {
          const mutation = mutationsList[i];
          const {
            type,
            addedNodes,
            removedNodes
          } = mutation;
          if (type === 'childList') {
            removedNodes.forEach(removedNode => {
              // Only want to look at element nodes
              if (removedNode.nodeType === Node.ELEMENT_NODE) {
                const componentEls = removedNode.dataset && 'component' in removedNode.dataset ? [removedNode, ...removedNode.querySelectorAll('[data-component]')] : removedNode.querySelectorAll('[data-component]');
                componentEls.forEach(componentEl => this._destroyInstance(componentEl));
              }
            });
            addedNodes.forEach(addedNode => {
              // Only want to look at element nodes
              if (addedNode.nodeType === Node.ELEMENT_NODE) {
                const componentEls = addedNode.dataset && 'component' in addedNode.dataset ? [addedNode, ...addedNode.querySelectorAll('[data-component]')] : [...addedNode.querySelectorAll('[data-component]')];
                const components = componentEls.map(componentEl => this._createInstance(componentEl)).filter(componentEl => !!componentEl);
                components.forEach(component => this._mountComponent(component));
                this._awaitingComponents.forEach(awaitingComponents => {
                  if (awaitingComponents.el === addedNode || addedNode.contains(awaitingComponents.el)) {
                    awaitingComponents.callback(components);
                  }
                });
              }
            });
            if (this._deferredEvents.length) {
              this._deferredEvents.forEach(deferredEvent => this._onShopifyEvent(deferredEvent, true));
              this._deferredEvents = [];
            }
          }
        }
      });

      // call `observe()` on that MutationObserver instance,
      // passing it the element to observe, and the options object
      observer.observe(document.body, {
        subtree: true,
        childList: true
      });
      document.addEventListener('shopify:section:select', this._onShopifyEvent);
      document.addEventListener('shopify:section:deselect', this._onShopifyEvent);
      document.addEventListener('shopify:section:reorder', this._onShopifyEvent);
      document.addEventListener('shopify:block:select', this._onShopifyEvent);
      document.addEventListener('shopify:block:deselect', this._onShopifyEvent);
      this._initializeComponents();
    }, {
      once: true
    });
  }

  /**
   * Get all component instances
   *
   * @memberof ComponentManager.prototype
   * @type {Object.<string, Component>} A map of component names to components.
   */
  get instances() {
    return this._instances;
  }

  /**
   * Get component hierarchy
   *
   * @memberof ComponentManager.prototype
   * @type {Object.<string, Object>} A hierarchical map of components in the DOM
   */
  get hierarchy() {
    const outputFn = components => components.reduce((acc, component) => {
      acc[`${component.name}${component.tag ? `:${component.tag}` : ''}:${component.id}`] = outputFn(component.children);
      return acc;
    }, {});
    const rootComponents = Object.keys(this._instances).reduce((acc, id) => {
      const component = this._instances[id];
      if (!component.parent) {
        acc.push(component);
      }
      return acc;
    }, []);
    return outputFn(rootComponents);
  }

  /**
   * Register a component
   *
   * @memberof ComponentManager.prototype
   * @param {Component} componentClass A component class
   * @param {string} name The component name in kebab case
   */
  register(componentClass, name) {
    // Pascal to kebab case
    const kebabCaseName = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    if (!(kebabCaseName in this._componentClasses)) {
      this._componentClasses[kebabCaseName] = {};
    }

    // Store the section handler
    this._componentClasses[kebabCaseName] = componentClass;

    // Initialize just these components if document is already loaded
    if (document.readyState === 'loaded') {
      this._initializeComponents(kebabCaseName);
    }
  }

  /**
   * Get a component by id or HTMLElement
   *
   * @memberof ComponentManager.prototype
   * @param {HTMLElement|string} selector A component element or ID
   * @returns {Component} The modified param.
   */
  getComponent(selector) {
    if (selector instanceof HTMLElement) {
      return this._instances[selector.id];
    }
    return this._instances[selector];
  }

  /**
   * Get components of a newly added DOM elements
   *
   * @memberof ComponentManager.prototype
   * @param {HTMLElement|string} element An element that contains one or more components
   * @param {Number} [timeout] The maximum time to wait for components to mount
   * @returns {Component[]} A list of mounted components
   */
  awaitComponents(el) {
    var _this = this;
    let timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
    const components = [];
    let componentEls = [];
    if (el.hasAttribute('data-component')) {
      componentEls.push(el);
    }
    el.querySelectorAll('[data-component]').forEach(componentEl => componentEls.push(componentEl));

    // Add any existing components to the component list
    // and reduce the amount of elements we're waiting
    // to be mounted
    componentEls = componentEls.reduce((acc, componentEl) => {
      const awaitedComponent = this.getComponent(componentEl);
      if (awaitedComponent) {
        components.push(awaitedComponent);
        return acc;
      }
      acc.push(componentEl);
      return acc;
    }, []);
    if (!componentEls.length) {
      return Promise.resolve(components);
    }
    return new Promise(resolve => {
      let timer = null;
      const entry = {};
      entry.el = el;
      entry.callback = function () {
        let newComponents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        // Add any awaited components to the component list
        // and reduce the amount of elements we're waiting
        // to be mounted
        componentEls = componentEls.reduce((acc, componentEl) => {
          const awaitedComponent = newComponents.find(newComponent => newComponent.el === componentEl);
          if (awaitedComponent) {
            components.push(awaitedComponent);
            return acc;
          }
          acc.push(componentEl);
          return acc;
        }, []);

        // No more components to await on, so we'll resolve
        if (!componentEls.length) {
          clearTimeout(timer);
          _this._awaitingComponents.splice(_this._awaitingComponents.indexOf(entry), 1);
          resolve(components);
        }
      };
      timer = setTimeout(() => {
        console.debug(`ComponentManager: awaitComponents has reached timeout after ${timeout}ms.`);
        console.debug(el);
        resolve(components);
      }, timeout);
      this._awaitingComponents.push(entry);
    });
  }

  /**
   * Get first child component with given parameters
   *
   * @memberof ComponentManager.prototype
   * @param {string} name - A component name
   * @param {string} [tag] - A component tag
   * @return {Component|null} The first child component
   *                          with a given name and tag, null if not found.
   */
  query(name, tag) {
    let scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;
    const componentSelector = name ? `[data-component="${name}"]` : '[data-component]';
    const tagSelector = tag ? `[data-component-tag="${tag}]` : '';
    const result = scope.querySelector(`${componentSelector}${tagSelector}`);
    if (!result) return null;
    return this.getComponent(result.getAttribute('id'));
  }

  /**
   * Get all children components with given parameters
   *
   * @memberof ComponentManager.prototype
   * @param {string} name - A component name
   * @param {string} [tag] - A component tag
   * @return {Component[]} An array of child components
   *                          with a given name and tag, an empty array if none are found.
   */
  queryAll() {
    let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    let scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;
    const componentSelector = name ? `[data-component="${name}"]` : '[data-component]';
    const tagSelector = tag ? `[data-component-tag="${tag}]` : '';
    const results = [...scope.querySelectorAll(`${componentSelector}${tagSelector}`)];
    if (!results.length) return [];
    return results.reduce((acc, result) => {
      const component = this.getComponent(result.getAttribute('id'));
      if (component) {
        acc.push(component);
      }
      return acc;
    }, []);
  }

  /**
   * Initialize components already on the page.
   *
   * @private
   */
  _initializeComponents() {
    let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    // Fetch all existing sections of our type on the page
    const componentEls = name ? [...document.querySelectorAll(`[data-component="${name}"]`)] : [...document.querySelectorAll('[data-component]')];
    if (!componentEls.length) return;

    // Create an instance for each section
    const components = componentEls.map(componentEl => this._createInstance(componentEl)).filter(componentEl => !!componentEl);
    components.forEach(component => this._mountComponent(component));
  }

  /**
   * Mount a component and emit an event
   *
   * @private
   */
  _mountComponent(component) {
    component.onMount();
    const event = new CustomEvent('core:component-mount', {
      detail: {
        component
      },
      bubbles: true
    });
    component.el.dispatchEvent(event);
  }

  /**
   * Dismount a component and emit an event
   *
   * @private
   */
  _dismountComponent(component) {
    component.onDismount();
    const event = new CustomEvent('core:component-dismount', {
      detail: {
        component
      },
      bubbles: true
    });
    component.el.dispatchEvent(event);
  }

  /**
   * Trigger associated events on components based on Shopify lifecycle.
   *
   * @private
   */
  _onShopifyEvent(event) {
    let deferred = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const {
      target,
      type
    } = event;
    const {
      sectionId,
      blockId,
      load
    } = event.detail;
    let component = null;
    let parentComponent = null;
    if (deferred) {
      console.debug(`ComponentManager: Deferred event '${type}' for${blockId ? ` Block ${blockId} within` : ''} Section ${sectionId} received.`);
    } else {
      console.debug(`ComponentManager: Event '${type}' for${blockId ? ` Block ${blockId} within` : ''} Section ${sectionId} received.`);
    }

    // A Shopify event with the flag 'load' means that the DOM was changed. We need to defer this event and handle it when
    // the component is mounted via the MutationObserver.
    if (!deferred && load) {
      this._deferredEvents.push(event);
      console.debug(`ComponentManager: Event '${type}' for${blockId ? ` Block ${blockId} within` : ''} Section ${sectionId} deferred.`);
    }
    if (blockId) {
      component = this.getComponent(target); // Block is target

      // Inform the parent section that one of its blocks has been selected/deselected
      if (sectionId) {
        const parentElement = document.querySelector(`#shopify-section-${sectionId}`);
        if (parentElement) {
          parentComponent = this.getComponent(parentElement.firstElementChild);
        }
      }
      if (!component && !parentComponent) return; // No block or section to handle event
    } else if (sectionId) {
      component = this.getComponent(target.firstElementChild); // Section is wrapped by target

      if (!component || component.type !== 'section') return; // Component type mismatch
    }

    switch (event.type) {
      case 'shopify:section:load':
        // Uneeded, observer initializes this
        break;
      case 'shopify:section:unload':
        this._dismountComponent(component);
        delete this._instances[component.id];
        break;
      case 'shopify:section:select':
        component.onSelect(event);
        break;
      case 'shopify:section:deselect':
        component.onDeselect(event);
        break;
      case 'shopify:section:reorder':
        component.onReorder(event);
        break;
      case 'shopify:block:select':
        if (component) {
          component.onSelect(event);
        }
        if (parentComponent) {
          parentComponent.onBlockSelect(event);
        }
        break;
      case 'shopify:block:deselect':
        if (component) {
          component.onDeselect(event);
        }
        if (parentComponent) {
          parentComponent.onBlockDeselect(event);
        }
        break;
      default:
        break;
    }
  }
  _destroyInstance(componentEl) {
    const id = componentEl.getAttribute('id');
    const {
      component: name
    } = componentEl.dataset;
    const component = this._instances[id];
    if (component) {
      this._dismountComponent(component);
      delete this._instances[id];
      console.debug(`ComponentManager: Component '${name}' successfully destroyed.`);
    } else {
      console.debug(`ComponentManager: Component '${name}' failed to destroy.`);
    }
  }

  /**
   * Creates a new instances of a component.
   *
   * @param {HTMLElement} componentEl - The component root element
   * @private
   */
  _createInstance(componentEl) {
    const {
      component: name
    } = componentEl.dataset;
    if (!name) return null;
    let ComponentClass = null;
    if (name in this._componentClasses) {
      ComponentClass = this._componentClasses[name];
    } else {
      switch (componentEl.dataset.componentType) {
        case 'section':
          ComponentClass = SectionComponent;
          break;
        case 'block':
          ComponentClass = BlockComponent;
          break;
        case 'component':
        default:
          ComponentClass = Component;
          break;
      }
    }
    const parentComponentEl = componentEl.parentElement ? componentEl.parentElement.closest('[data-component]') : null;
    const parentComponent = parentComponentEl ? this.getComponent(parentComponentEl.id) : null;
    const context = {
      ...PXUTheme.context,
      ...(parentComponent ? {
        ...parentComponent.context,
        ...parentComponent.state
      } : {})
    };
    try {
      const component = new ComponentClass(componentEl, context);
      this._instances[component.id] = component;
      console.debug(`ComponentManager: Component '${name}' successfully initialized.`);
      return component;
    } catch (e) {
      console.group(`ComponentManager: Component '${name}' failed to initialize.`);
      console.error(e);
      if ('cause' in e) {
        console.error(e.cause);
      }
      console.groupEnd();
      return null;
    }
  }
}
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/helpers/a11y.js
const trapFocusHandlers = {};

/**
 * @class A11y
 * @classdesc Functions that we use to make the accessibility experience better across our themes.
 */
class A11y {
  /**
   * Finds all of the focuable elements within the container.
   *
   * @memberof A11y.prototype
   * @param {Element} container - Container DOM element to find all focusable elements within
   *
   */
  getFocusableElements(container) {
    return Array.from(container.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"));
  }

  /**
   * Removes the trapped focus from the page.
   *
   * @memberof A11y.prototype
   * @param {Element} elementToFocus - Element to be focused on after trapped focus is removed
   *
   */
  removeTrapFocus() {
    let elementToFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    document.removeEventListener('focusin', trapFocusHandlers.focusin);
    document.removeEventListener('focusout', trapFocusHandlers.focusout);
    document.removeEventListener('keydown', trapFocusHandlers.keydown);
    if (elementToFocus) elementToFocus.focus();
  }

  /**
   * Traps the focus in a particular container
   *
   * @memberof A11y.prototype
   * @param {Element} container - Container DOM element to trap focus inside of
   * @param {Element} elementToFocus - Element to be focused on first
   *
   */
  trapFocus(container) {
    let elementToFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : container;
    const elements = this.getFocusableElements(container);
    const first = elements[0];
    const last = elements[elements.length - 1];
    this.removeTrapFocus();
    trapFocusHandlers.focusin = event => {
      if (event.target !== container && event.target !== last && event.target !== first) {
        return;
      }
      document.addEventListener('keydown', trapFocusHandlers.keydown);
    };
    trapFocusHandlers.focusout = () => {
      document.removeEventListener('keydown', trapFocusHandlers.keydown);
    };
    trapFocusHandlers.keydown = event => {
      if (event.code.toUpperCase() !== 'TAB') return; // If not TAB key
      // On the last focusable element and tab forward, focus the first element.
      if (event.target === last && !event.shiftKey) {
        event.preventDefault();
        first.focus();
      }

      //  On the first focusable element and tab backward, focus the last element.
      if ((event.target === container || event.target === first) && event.shiftKey) {
        event.preventDefault();
        last.focus();
      }
    };
    document.addEventListener('focusout', trapFocusHandlers.focusout);
    document.addEventListener('focusin', trapFocusHandlers.focusin);
    elementToFocus.focus();
  }
}
/* harmony default export */ const a11y = (new A11y());
;// CONCATENATED MODULE: ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  } else if (!locks.length) {
    restoreOverflowSetting();
  }
};


;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/helpers/Utils.js


/**
 * @class Utils
 * @classdesc Several utility functions for use across the theme.
 */
class Utils {
  /**
   * Prevents all scrolling of the document.
   *
   * @memberof Utils.prototype
   * @param {HTMLElement} element Element within which scrolling is allowed
   */
  scrollLock(element, scrollableElement) {
    let reserveScrollBarGap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    disableBodyScroll(element, {
      allowTouchMove: el => {
        while (el && el !== document.body) {
          if (el === scrollableElement || el.contains(scrollableElement)) {
            return true;
          }
          el = el.parentElement;
        }
      },
      reserveScrollBarGap
    });
  }

  /**
   * Removes the scroll lock from the page.
   *
   * @memberof Utils.prototype
   * @param {HTMLElement} element Element within which scrolling is allowed
   */
  scrollUnlock(element) {
    enableBodyScroll(element);
  }

  /**
   * Will return true/false if the scroll is locked on the page.
   *
   * @memberof Utils.prototype
   * @return {Boolean} True if scroll is locked on the page.
   */
  scrollIsLocked() {
    const html = document.querySelector('html');
    return html.classList.contains('scroll-locked');
  }

  /**
   * Helper function to block scroll on various events from the browser.
   *
   * @memberof Utils.prototype
   * @private
   */
  _blockScroll(event) {
    // Only block events that occur outside the modal
    if (event.target.closest('.allow-scroll-while-locked')) return;
    event.preventDefault();
    event.stopPropagation();
  }
}
/* harmony default export */ const helpers_Utils = (new Utils());
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-currency/currency.js
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

const moneyFormat = '${{amount}}';

/**
 * Format money values based on your shop currency settings
 * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
 * or 3.00 dollars
 * @param  {String} format - shop money_format setting
 * @return {String} value - formatted value
 */
function formatMoney(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }
  let value = '';
  const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  const formatString = format || moneyFormat;

  function formatWithDelimiters(
    number,
    precision = 2,
    thousands = ',',
    decimal = '.'
  ) {
    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    const parts = number.split('.');
    const dollarsAmount = parts[0].replace(
      /(\d)(?=(\d\d\d)+(?!\d))/g,
      `$1${thousands}`
    );
    const centsAmount = parts[1] ? decimal + parts[1] : '';

    return dollarsAmount + centsAmount;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
}

;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/helpers/Money.js

/* harmony default export */ const Money = ({
  create(cents) {
    const template = document.getElementById('template-money').content;
    const moneyFragment = template.cloneNode(true);
    const moneyEl = moneyFragment.querySelector('[data-money]');
    const moneyFormatted = formatMoney(cents, PXUTheme.money_format);
    moneyEl.innerHTML = moneyFormatted;
    return moneyFragment;
  },
  createRange(centsMin, centsMax) {
    const template = document.getElementById('template-money-range').content;
    const moneyFragment = template.cloneNode(true);
    const moneyMinEl = moneyFragment.querySelector('[data-money-min]');
    const moneyMaxEl = moneyFragment.querySelector('[data-money-max]');
    const moneyMinFormatted = formatMoney(centsMin, PXUTheme.money_format);
    const moneyMaxFormatted = formatMoney(centsMax, PXUTheme.money_format);
    moneyMinEl.innerHTML = moneyMinFormatted;
    moneyMaxEl.innerHTML = moneyMaxFormatted;
    return moneyFragment;
  }
});
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/helpers/media/Model.js
/**
 * @class Model
 * @classdesc Handles creating an model element
 */
class Model {
  constructor(el) {
    const features = [{
      name: 'model-viewer-ui',
      version: '1.0',
      onLoad: () => this._onLibraryLoad()
    }, {
      name: 'shopify-xr',
      version: '1.0'
    }];
    this.el = el;
    this._onCorePauseMedia = event => {
      const {
        exclude
      } = event.detail;
      let shouldPause = true;
      if (Array.isArray(exclude) && exclude.some(e => e === el)) {
        shouldPause = false;
      } else if (exclude === el) {
        shouldPause = false;
      }
      if (shouldPause) {
        this.pause();
      }
    };
    window.Shopify.loadFeatures(features);
    document.body.addEventListener('core:pause-media', this._onCorePauseMedia);
  }

  /**
   * Play the media
   * @public
   */
  play() {
    if (this._model) {
      this._model.play();
    }
  }

  /**
   * Pause the media
   * @public
   */
  pause() {
    if (this._model) {
      this._model.pause();
    }
  }
  unload() {
    if (this._model) {
      this._model.destroy();
    }
    document.body.removeEventListener('core:pause-media', this._onCorePauseMedia);
  }

  /**
   * On Shopify XR library load, create a new model UI
   */
  _onLibraryLoad() {
    const controls = ['zoom-in', 'zoom-out'];
    if (document.fullscreenEnabled) controls.push('fullscreen');
    this._model = new Shopify.ModelViewerUI(this.el, {
      controls
    });
  }
}
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/helpers/media/YoutubeVideo.js
const api = 'https://www.youtube.com/iframe_api';
let apiLoadedCallbacks = [];
let apiLoaded = false;
window.onYouTubeIframeAPIReady = () => {
  apiLoadedCallbacks.forEach(apiLoadedCallback => apiLoadedCallback());
  apiLoadedCallbacks = [];
  apiLoaded = true;
};
class YoutubeVideo {
  constructor(el) {
    this.el = el;
    this.onApiLoaded = this._onApiLoaded.bind(this);
    this.onStateChange = this._onStateChange.bind(this);
    this.onReady = this._onReady.bind(this);
    this.isReady = false;
    this.onReadyCallback = null;
    this.playerState = null;
    this.onPlayCallback = null;
    this.onPlayError = null;
    this.el.addEventListener('load', () => {
      if (apiLoaded) {
        this._onApiLoaded();
      } else {
        apiLoadedCallbacks.push(this.onApiLoaded);
        this._loadApi();
      }
    });
  }

  /**
   * Load the Youtube API: https://developers.google.com/youtube/iframe_api_reference
   * This code loads the IFrame Player API code asynchronously.
   * @private
   */
  _loadApi() {
    const tag = document.createElement('script');
    tag.src = api;
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  /**
   * Play the YouTube video. If player is not ready, add the callback so that it can
   * be played right after the player becomes ready.
   *
   * @returns {Promise} - whether the video was successfully started or not
   * @public
   */
  play() {
    return new Promise((resolve, reject) => {
      this.onPlayCallback = resolve;
      this.onPlayError = reject;
      if (this.isReady) {
        this.player.playVideo();
      } else {
        this.onReadyCallback = () => {
          this.player.playVideo();
        };
      }
    });
  }

  /**
   * Pause the video
   * @public
   */
  pause() {
    if (this.player) {
      this.player.pauseVideo();
    }
  }

  /**
   * Unload the player
   * @public
   */
  unload() {
    if (this.player) {
      this.player.destroy();
    }
  }

  /**
   * YouTube's API will call this function once the iFrame API has finished loading.
   * This method is pushed to the global scope so that the iFrame API can reach it.
   * @private
   */
  _onApiLoaded() {
    this.player = new YT.Player(this.el, {
      events: {
        onReady: this.onReady,
        onStateChange: this.onStateChange
      }
    });
  }

  /**
   * This function is called when the player is ready. We pass a reference to it
   * via the `events` parameter when setting up the player.
   * @private
   */
  _onReady() {
    this.isReady = true;
    if (this.onReadyCallback) {
      this.onReadyCallback();
    }
  }

  /**
   * This method is called whenever the state of the player changes. We pass a reference of this
   * to the player during initialization.
   *
   * @param {Event} event - event data that contains information about the state of the player
   * @private
   */
  _onStateChange(event) {
    const state = event.data;
    if (state === YT.PlayerState.PLAYING) {
      Core.Media.pauseAll(this.el);
    }
    if (this.onPlayCallback) {
      if (state === YT.PlayerState.PLAYING) {
        this.onPlayCallback();
        this.onPlayCallback = null;
        this.onPlayError = null;
      } else if (this.playerState === YT.PlayerState.BUFFERING && (state === YT.PlayerState.UNSTARTED || state === YT.PlayerState.PAUSED)) {
        this.onPlayError();
        this.onPlayCallback = null;
        this.onPlayError = null;
      }
    }
    this.playerState = state;
  }
}
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/helpers/media/VimeoVideo.js
const VimeoVideo_api = 'https://player.vimeo.com/api/player.js';
let VimeoVideo_apiLoaded = false;
class VimeoVideo {
  constructor(el, options) {
    this.el = el;
    this.options = options;
    this.isReady = false;
    this.onReadyCallback = null;
    this.onPlayCallback = null;
    this.startedPlaying = false;
    this.onApiLoaded = this._onApiLoaded.bind(this);
    this.onReady = this._onReady.bind(this);
    this.onProgress = this._onProgress.bind(this);
    if (VimeoVideo_apiLoaded) {
      this._onApiLoaded();
    } else {
      this._loadApi();
    }
  }

  /**
   * Load the Vimeo API: https://developer.vimeo.com/player/sdk/reference
   * @private
   */
  _loadApi() {
    const tag = document.createElement('script');
    tag.onload = () => this._onApiLoaded();
    tag.src = VimeoVideo_api;
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  /**
   *
   * @returns {Promise} - Whether the video has begun playing or not
   * @public
   */
  play() {
    return new Promise((resolve, reject) => {
      this.onPlayCallback = resolve;
      this.onPlayError = reject;
      if (this.isReady) {
        this.player.play().then(() => {
          this.player.on('progress', this.onProgress);
        }).catch(() => {
          this.player.off('progress', this.onProgress);
          this.onPlayError();
        });
      } else {
        this.onReadyCallback = () => {
          this.player.play().then(() => {
            this.player.on('progress', this.onProgress);
          }).catch(() => {
            this.player.off('progress', this.onProgress);
            this.onPlayError();
          });
        };
      }
    });
  }

  /**
   * Pause the video
   * @public
   */
  pause() {
    if (this.player) {
      this.player.pause().catch();
    }
  }

  /**
   * Unload the player
   * @public
   */
  unload() {
    if (this.player) {
      this.player.unload().catch();
    }
  }

  /**
   * Initialize the player when the API has finished loading
   * @private
   */
  _onApiLoaded() {
    this.player = new window.Vimeo.Player(this.el);
    this.player.ready().then(() => {
      this._onReady();
    }).catch(() => {
      this.onPlayError();
    });
    this.player.on('play', () => Core.Media.pauseAll(this.el));
    VimeoVideo_apiLoaded = true;
  }

  /**
   * Set the ready state and fire any callbacks when the player is ready
   * @private
   */
  _onReady() {
    this.isReady = true;
    if (this.onReadyCallback) {
      this.onReadyCallback();
    }
  }

  /**
   * Set the playing state and fire any callbacks when the video starts playing
   * @private
   */
  _onProgress() {
    this.startedPlaying = true;
    this.player.off('progress', this.onProgress);
    if (this.onPlayCallback) {
      this.onPlayCallback();
      this.onPlayCallback = null;
    }
  }
}
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/helpers/media/Html5Video.js
let loadPlyrStyles = null;
class Html5Video {
  constructor(el) {
    this.el = el;
    if (!(loadPlyrStyles instanceof Promise)) {
      loadPlyrStyles = new Promise(resolve => {
        const stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.href = 'https://cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.css';
        stylesheet.onload = resolve;
        document.body.appendChild(stylesheet);
      });
    }
    window.Shopify.loadFeatures([{
      name: 'video-ui',
      version: '1.0',
      onLoad: () => loadPlyrStyles.then(() => this._setupVideo())
    }]);
  }

  /**
   * Setup the video player with Shopify's Plyr library
   *
   * @returns {undefined} - Used as an early return mechanism. Should otherwise be treated
   * as a method that does not return anything.
   * @private
   */
  _setupVideo() {
    if (!Shopify.Plyr) {
      return;
    }
    this.player = new Shopify.Plyr(this.el);
    this.player.on('play', () => Core.Media.pauseAll(this.el));
  }

  /**
   * Play the video
   *
   * @returns {Promise} - Whether the video has started to play or not
   * @public
   */
  play() {
    return new Promise((resolve, reject) => {
      if (this.player) {
        this.player.play();
        resolve();
      } else {
        reject();
      }
    });
  }

  /**
   * Pause the video
   * @public
   */
  pause() {
    if (this.player) {
      this.player.pause();
    }
  }

  /**
   * Unload the video player
   * @public
   */
  unload() {
    if (this.player) {
      this.player.destroy();
    }
  }
}
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/helpers/media/VideoPlayer.js



class VideoPlayer {
  constructor(el, type) {
    switch (type) {
      case 'youtube':
        this._video = new YoutubeVideo(el);
        break;
      case 'vimeo':
        this._video = new VimeoVideo(el);
        break;
      case 'html5':
        this._video = new Html5Video(el);
        break;
      default:
        this._video = null;
        console.warn('Video type was not specified. Must be either: youtube, vimeo, or html5');
        break;
    }
    this._onCorePauseMedia = event => {
      const {
        exclude
      } = event.detail;
      let shouldPause = true;
      if (Array.isArray(exclude) && exclude.some(e => e === el)) {
        shouldPause = false;
      } else if (exclude === el) {
        shouldPause = false;
      }
      if (shouldPause) {
        this.pause();
      }
    };
    document.body.addEventListener('core:pause-media', this._onCorePauseMedia);
  }

  /**
   * Play the video and dispatch video-related events based on resolve/reject from Promise
   * @public
   */
  play() {
    if (this._video) {
      this._video.play();
    }
  }

  /**
   * Pause the video
   * @public
   */
  pause() {
    if (this._video) {
      this._video.pause();
    }
  }

  /**
   * Unload the video
   */
  unload() {
    if (this._video) {
      this._video.unload();
    }
    document.body.removeEventListener('core:pause-media', this._onCorePauseMedia);
  }
}
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/helpers/Media.js



/**
 * @class Media
 * @classdesc Several media utility functions for use across the theme.
 */
class Media {
  /**
   * Creates a new VideoPlayer
   */
  createVideo(el, host) {
    return new VideoPlayer(el, host);
  }
  createModel(el) {
    return new Model(el);
  }

  /**
   * Pauses all media.
   * Components with media should react to this event and pause associated media
   */
  pauseAll(exclude) {
    const event = new CustomEvent('core:pause-media', {
      detail: {
        exclude
      }
    });
    document.body.dispatchEvent(event);
  }
}
/* harmony default export */ const helpers_Media = (new Media());
;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/core.js
/**
 * @module Core
 */













/**
 * The animation library
 * @see {@link https://github.com/pixelunion/animations|Animations}
 */
const Animations = animations_es_namespaceObject;

/**
 * The breakpoint library
 * @see {@link https://github.com/pixelunion/breakpoint|Breakpoints}
 */
const Breakpoints = cjs;

/**
 * A global instance of the event handler
 * @see {@link https://github.com/pixelunion/events|Events}
 */
const Events = new EventHandler/* default */.Z();

/**
 * A global instance of the component manager
 * @see {@link lib/components/README.md#ComponentManager|ComponentManager}
 */
const Components = new ComponentManager();

/**
 * The component class
 * @see {@link lib/components/README.md#Component|Component}
 */
const core_Component = Component;

/**
 * The section component class
 * @see {@link lib/components/README.md#SectionComponent|SectionComponent}
 */
const core_SectionComponent = SectionComponent;

/**
 * The block component class
 * @see {@link lib/components/README.md#BlockComponent|BlockComponent}
 */
const core_BlockComponent = BlockComponent;

/**
 * Accessbility helpers
 * @see {@link lib/helpers/README.md#Ally|A11y}
 */
const core_A11y = a11y;

/**
 * Utility helpers
 * @see {@link lib/helpers/README.md#Utils|Utils}
 */
const core_Utils = helpers_Utils;
const core_Money = Money;
const core_Media = helpers_Media;
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=core.js.map?1705431149927