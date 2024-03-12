/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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


/***/ }),

/***/ 771:
/***/ (() => {

/**
 * Polyfill for Element.matches().
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 */
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function(s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}


/***/ }),

/***/ 405:
/***/ ((module) => {

module.exports = debounce;

function debounce(fn, delay, atStart, guarantee) {
  var timeout;
  var args;
  var self;

  return function debounced() {
    self = this;
    args = Array.prototype.slice.call(arguments);

    if (timeout && (atStart || guarantee)) {
      return;
    } else if (!atStart) {
      clear();

      timeout = setTimeout(run, delay);
      return timeout;
    }

    timeout = setTimeout(clear, delay);
    fn.apply(self, args);

    function run() {
      clear();
      fn.apply(self, args);
    }

    function clear() {
      clearTimeout(timeout);
      timeout = null;
    }
  };
}


/***/ }),

/***/ 265:
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_543__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_543__);
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
/******/ 	__nested_webpack_require_543__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_543__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_543__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_543__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_543__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_543__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_543__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_543__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_543__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_543__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_543__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_543__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_543__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_543__(__nested_webpack_require_543__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_4019__) {

"use strict";
__nested_webpack_require_4019__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/tools.js
var argumentAsArray = function argumentAsArray(argument) {
  return Array.isArray(argument) ? argument : [argument];
};
var isElement = function isElement(target) {
  return target instanceof Node;
};
var isElementList = function isElementList(nodeList) {
  return nodeList instanceof NodeList;
};
var eachNode = function eachNode(nodeList, callback) {
  if (nodeList && callback) {
    nodeList = isElementList(nodeList) ? nodeList : [nodeList];

    for (var i = 0; i < nodeList.length; i++) {
      if (callback(nodeList[i], i, nodeList.length) === true) {
        break;
      }
    }
  }
};
var throwError = function throwError(message) {
  return console.error("[scroll-lock] ".concat(message));
};
var arrayAsSelector = function arrayAsSelector(array) {
  if (Array.isArray(array)) {
    var selector = array.join(', ');
    return selector;
  }
};
var nodeListAsArray = function nodeListAsArray(nodeList) {
  var nodes = [];
  eachNode(nodeList, function (node) {
    return nodes.push(node);
  });
  return nodes;
};
var findParentBySelector = function findParentBySelector($el, selector) {
  var self = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var $root = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;

  if (self && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1) {
    return $el;
  }

  while (($el = $el.parentElement) && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) === -1) {
    ;
  }

  return $el;
};
var elementHasSelector = function elementHasSelector($el, selector) {
  var $root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var has = nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1;
  return has;
};
var elementHasOverflowHidden = function elementHasOverflowHidden($el) {
  if ($el) {
    var computedStyle = getComputedStyle($el);
    var overflowIsHidden = computedStyle.overflow === 'hidden';
    return overflowIsHidden;
  }
};
var elementScrollTopOnStart = function elementScrollTopOnStart($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollTop = $el.scrollTop;
    return scrollTop <= 0;
  }
};
var elementScrollTopOnEnd = function elementScrollTopOnEnd($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollTop = $el.scrollTop;
    var scrollHeight = $el.scrollHeight;
    var scrollTopWithHeight = scrollTop + $el.offsetHeight;
    return scrollTopWithHeight >= scrollHeight;
  }
};
var elementScrollLeftOnStart = function elementScrollLeftOnStart($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollLeft = $el.scrollLeft;
    return scrollLeft <= 0;
  }
};
var elementScrollLeftOnEnd = function elementScrollLeftOnEnd($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollLeft = $el.scrollLeft;
    var scrollWidth = $el.scrollWidth;
    var scrollLeftWithWidth = scrollLeft + $el.offsetWidth;
    return scrollLeftWithWidth >= scrollWidth;
  }
};
var elementIsScrollableField = function elementIsScrollableField($el) {
  var selector = 'textarea, [contenteditable="true"]';
  return elementHasSelector($el, selector);
};
var elementIsInputRange = function elementIsInputRange($el) {
  var selector = 'input[type="range"]';
  return elementHasSelector($el, selector);
};
// CONCATENATED MODULE: ./src/scroll-lock.js
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "disablePageScroll", function() { return disablePageScroll; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "enablePageScroll", function() { return enablePageScroll; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "getScrollState", function() { return getScrollState; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "clearQueueScrollLocks", function() { return clearQueueScrollLocks; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "getTargetScrollBarWidth", function() { return scroll_lock_getTargetScrollBarWidth; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "getCurrentTargetScrollBarWidth", function() { return scroll_lock_getCurrentTargetScrollBarWidth; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "getPageScrollBarWidth", function() { return getPageScrollBarWidth; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "getCurrentPageScrollBarWidth", function() { return getCurrentPageScrollBarWidth; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addScrollableTarget", function() { return scroll_lock_addScrollableTarget; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "removeScrollableTarget", function() { return scroll_lock_removeScrollableTarget; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addScrollableSelector", function() { return scroll_lock_addScrollableSelector; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "removeScrollableSelector", function() { return scroll_lock_removeScrollableSelector; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addLockableTarget", function() { return scroll_lock_addLockableTarget; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addLockableSelector", function() { return scroll_lock_addLockableSelector; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "setFillGapMethod", function() { return scroll_lock_setFillGapMethod; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addFillGapTarget", function() { return scroll_lock_addFillGapTarget; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "removeFillGapTarget", function() { return scroll_lock_removeFillGapTarget; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "addFillGapSelector", function() { return scroll_lock_addFillGapSelector; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "removeFillGapSelector", function() { return scroll_lock_removeFillGapSelector; });
/* harmony export (binding) */ __nested_webpack_require_4019__.d(__webpack_exports__, "refillGaps", function() { return refillGaps; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var FILL_GAP_AVAILABLE_METHODS = ['padding', 'margin', 'width', 'max-width', 'none'];
var TOUCH_DIRECTION_DETECT_OFFSET = 3;
var state = {
  scroll: true,
  queue: 0,
  scrollableSelectors: ['[data-scroll-lock-scrollable]'],
  lockableSelectors: ['body', '[data-scroll-lock-lockable]'],
  fillGapSelectors: ['body', '[data-scroll-lock-fill-gap]', '[data-scroll-lock-lockable]'],
  fillGapMethod: FILL_GAP_AVAILABLE_METHODS[0],
  //
  startTouchY: 0,
  startTouchX: 0
};
var disablePageScroll = function disablePageScroll(target) {
  if (state.queue <= 0) {
    state.scroll = false;
    scroll_lock_hideLockableOverflow();
    fillGaps();
  }

  scroll_lock_addScrollableTarget(target);
  state.queue++;
};
var enablePageScroll = function enablePageScroll(target) {
  state.queue > 0 && state.queue--;

  if (state.queue <= 0) {
    state.scroll = true;
    scroll_lock_showLockableOverflow();
    unfillGaps();
  }

  scroll_lock_removeScrollableTarget(target);
};
var getScrollState = function getScrollState() {
  return state.scroll;
};
var clearQueueScrollLocks = function clearQueueScrollLocks() {
  state.queue = 0;
};
var scroll_lock_getTargetScrollBarWidth = function getTargetScrollBarWidth($target) {
  var onlyExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isElement($target)) {
    var currentOverflowYProperty = $target.style.overflowY;

    if (onlyExists) {
      if (!getScrollState()) {
        $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-overflow-y-property');
      }
    } else {
      $target.style.overflowY = 'scroll';
    }

    var width = scroll_lock_getCurrentTargetScrollBarWidth($target);
    $target.style.overflowY = currentOverflowYProperty;
    return width;
  } else {
    return 0;
  }
};
var scroll_lock_getCurrentTargetScrollBarWidth = function getCurrentTargetScrollBarWidth($target) {
  if (isElement($target)) {
    if ($target === document.body) {
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      var currentWidth = windowWidth - documentWidth;
      return currentWidth;
    } else {
      var borderLeftWidthCurrentProperty = $target.style.borderLeftWidth;
      var borderRightWidthCurrentProperty = $target.style.borderRightWidth;
      $target.style.borderLeftWidth = '0px';
      $target.style.borderRightWidth = '0px';

      var _currentWidth = $target.offsetWidth - $target.clientWidth;

      $target.style.borderLeftWidth = borderLeftWidthCurrentProperty;
      $target.style.borderRightWidth = borderRightWidthCurrentProperty;
      return _currentWidth;
    }
  } else {
    return 0;
  }
};
var getPageScrollBarWidth = function getPageScrollBarWidth() {
  var onlyExists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return scroll_lock_getTargetScrollBarWidth(document.body, onlyExists);
};
var getCurrentPageScrollBarWidth = function getCurrentPageScrollBarWidth() {
  return scroll_lock_getCurrentTargetScrollBarWidth(document.body);
};
var scroll_lock_addScrollableTarget = function addScrollableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-scrollable', '');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_removeScrollableTarget = function removeScrollableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.removeAttribute('data-scroll-lock-scrollable');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_addScrollableSelector = function addScrollableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.scrollableSelectors.push(selector);
    });
  }
};
var scroll_lock_removeScrollableSelector = function removeScrollableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.scrollableSelectors = state.scrollableSelectors.filter(function (sSelector) {
        return sSelector !== selector;
      });
    });
  }
};
var scroll_lock_addLockableTarget = function addLockableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-lockable', '');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });

    if (!getScrollState()) {
      scroll_lock_hideLockableOverflow();
    }
  }
};
var scroll_lock_addLockableSelector = function addLockableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.lockableSelectors.push(selector);
    });

    if (!getScrollState()) {
      scroll_lock_hideLockableOverflow();
    }

    scroll_lock_addFillGapSelector(selector);
  }
};
var scroll_lock_setFillGapMethod = function setFillGapMethod(method) {
  if (method) {
    if (FILL_GAP_AVAILABLE_METHODS.indexOf(method) !== -1) {
      state.fillGapMethod = method;
      refillGaps();
    } else {
      var methods = FILL_GAP_AVAILABLE_METHODS.join(', ');
      throwError("\"".concat(method, "\" method is not available!\nAvailable fill gap methods: ").concat(methods, "."));
    }
  }
};
var scroll_lock_addFillGapTarget = function addFillGapTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-fill-gap', '');

          if (!state.scroll) {
            scroll_lock_fillGapTarget($target);
          }
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_removeFillGapTarget = function removeFillGapTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.removeAttribute('data-scroll-lock-fill-gap');

          if (!state.scroll) {
            scroll_lock_unfillGapTarget($target);
          }
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_addFillGapSelector = function addFillGapSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      if (state.fillGapSelectors.indexOf(selector) === -1) {
        state.fillGapSelectors.push(selector);

        if (!state.scroll) {
          scroll_lock_fillGapSelector(selector);
        }
      }
    });
  }
};
var scroll_lock_removeFillGapSelector = function removeFillGapSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.fillGapSelectors = state.fillGapSelectors.filter(function (fSelector) {
        return fSelector !== selector;
      });

      if (!state.scroll) {
        scroll_lock_unfillGapSelector(selector);
      }
    });
  }
};
var refillGaps = function refillGaps() {
  if (!state.scroll) {
    fillGaps();
  }
};

var scroll_lock_hideLockableOverflow = function hideLockableOverflow() {
  var selector = arrayAsSelector(state.lockableSelectors);
  scroll_lock_hideLockableOverflowSelector(selector);
};

var scroll_lock_showLockableOverflow = function showLockableOverflow() {
  var selector = arrayAsSelector(state.lockableSelectors);
  scroll_lock_showLockableOverflowSelector(selector);
};

var scroll_lock_hideLockableOverflowSelector = function hideLockableOverflowSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_hideLockableOverflowTarget($target);
  });
};

var scroll_lock_showLockableOverflowSelector = function showLockableOverflowSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_showLockableOverflowTarget($target);
  });
};

var scroll_lock_hideLockableOverflowTarget = function hideLockableOverflowTarget($target) {
  if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') !== 'true') {
    var computedStyle = window.getComputedStyle($target);
    $target.setAttribute('data-scroll-lock-saved-overflow-y-property', computedStyle.overflowY);
    $target.setAttribute('data-scroll-lock-saved-inline-overflow-property', $target.style.overflow);
    $target.setAttribute('data-scroll-lock-saved-inline-overflow-y-property', $target.style.overflowY);
    $target.style.overflow = 'hidden';
    $target.setAttribute('data-scroll-lock-locked', 'true');
  }
};

var scroll_lock_showLockableOverflowTarget = function showLockableOverflowTarget($target) {
  if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') === 'true') {
    $target.style.overflow = $target.getAttribute('data-scroll-lock-saved-inline-overflow-property');
    $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-inline-overflow-y-property');
    $target.removeAttribute('data-scroll-lock-saved-overflow-property');
    $target.removeAttribute('data-scroll-lock-saved-inline-overflow-property');
    $target.removeAttribute('data-scroll-lock-saved-inline-overflow-y-property');
    $target.removeAttribute('data-scroll-lock-locked');
  }
};

var fillGaps = function fillGaps() {
  state.fillGapSelectors.map(function (selector) {
    scroll_lock_fillGapSelector(selector);
  });
};

var unfillGaps = function unfillGaps() {
  state.fillGapSelectors.map(function (selector) {
    scroll_lock_unfillGapSelector(selector);
  });
};

var scroll_lock_fillGapSelector = function fillGapSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  var isLockable = state.lockableSelectors.indexOf(selector) !== -1;
  eachNode($targets, function ($target) {
    scroll_lock_fillGapTarget($target, isLockable);
  });
};

var scroll_lock_fillGapTarget = function fillGapTarget($target) {
  var isLockable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isElement($target)) {
    var scrollBarWidth;

    if ($target.getAttribute('data-scroll-lock-lockable') === '' || isLockable) {
      scrollBarWidth = scroll_lock_getTargetScrollBarWidth($target, true);
    } else {
      var $lockableParent = findParentBySelector($target, arrayAsSelector(state.lockableSelectors));
      scrollBarWidth = scroll_lock_getTargetScrollBarWidth($lockableParent, true);
    }

    if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
      scroll_lock_unfillGapTarget($target);
    }

    var computedStyle = window.getComputedStyle($target);
    $target.setAttribute('data-scroll-lock-filled-gap', 'true');
    $target.setAttribute('data-scroll-lock-current-fill-gap-method', state.fillGapMethod);

    if (state.fillGapMethod === 'margin') {
      var currentMargin = parseFloat(computedStyle.marginRight);
      $target.style.marginRight = "".concat(currentMargin + scrollBarWidth, "px");
    } else if (state.fillGapMethod === 'width') {
      $target.style.width = "calc(100% - ".concat(scrollBarWidth, "px)");
    } else if (state.fillGapMethod === 'max-width') {
      $target.style.maxWidth = "calc(100% - ".concat(scrollBarWidth, "px)");
    } else if (state.fillGapMethod === 'padding') {
      var currentPadding = parseFloat(computedStyle.paddingRight);
      $target.style.paddingRight = "".concat(currentPadding + scrollBarWidth, "px");
    }
  }
};

var scroll_lock_unfillGapSelector = function unfillGapSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_unfillGapTarget($target);
  });
};

var scroll_lock_unfillGapTarget = function unfillGapTarget($target) {
  if (isElement($target)) {
    if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
      var currentFillGapMethod = $target.getAttribute('data-scroll-lock-current-fill-gap-method');
      $target.removeAttribute('data-scroll-lock-filled-gap');
      $target.removeAttribute('data-scroll-lock-current-fill-gap-method');

      if (currentFillGapMethod === 'margin') {
        $target.style.marginRight = "";
      } else if (currentFillGapMethod === 'width') {
        $target.style.width = "";
      } else if (currentFillGapMethod === 'max-width') {
        $target.style.maxWidth = "";
      } else if (currentFillGapMethod === 'padding') {
        $target.style.paddingRight = "";
      }
    }
  }
};

var onResize = function onResize(e) {
  refillGaps();
};

var onTouchStart = function onTouchStart(e) {
  if (!state.scroll) {
    state.startTouchY = e.touches[0].clientY;
    state.startTouchX = e.touches[0].clientX;
  }
};

var scroll_lock_onTouchMove = function onTouchMove(e) {
  if (!state.scroll) {
    var startTouchY = state.startTouchY,
        startTouchX = state.startTouchX;
    var currentClientY = e.touches[0].clientY;
    var currentClientX = e.touches[0].clientX;

    if (e.touches.length < 2) {
      var selector = arrayAsSelector(state.scrollableSelectors);
      var direction = {
        up: startTouchY < currentClientY,
        down: startTouchY > currentClientY,
        left: startTouchX < currentClientX,
        right: startTouchX > currentClientX
      };
      var directionWithOffset = {
        up: startTouchY + TOUCH_DIRECTION_DETECT_OFFSET < currentClientY,
        down: startTouchY - TOUCH_DIRECTION_DETECT_OFFSET > currentClientY,
        left: startTouchX + TOUCH_DIRECTION_DETECT_OFFSET < currentClientX,
        right: startTouchX - TOUCH_DIRECTION_DETECT_OFFSET > currentClientX
      };

      var handle = function handle($el) {
        var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if ($el) {
          var parentScrollableEl = findParentBySelector($el, selector, false);

          if (elementIsInputRange($el)) {
            return false;
          }

          if (skip || elementIsScrollableField($el) && findParentBySelector($el, selector) || elementHasSelector($el, selector)) {
            var prevent = false;

            if (elementScrollLeftOnStart($el) && elementScrollLeftOnEnd($el)) {
              if (direction.up && elementScrollTopOnStart($el) || direction.down && elementScrollTopOnEnd($el)) {
                prevent = true;
              }
            } else if (elementScrollTopOnStart($el) && elementScrollTopOnEnd($el)) {
              if (direction.left && elementScrollLeftOnStart($el) || direction.right && elementScrollLeftOnEnd($el)) {
                prevent = true;
              }
            } else if (directionWithOffset.up && elementScrollTopOnStart($el) || directionWithOffset.down && elementScrollTopOnEnd($el) || directionWithOffset.left && elementScrollLeftOnStart($el) || directionWithOffset.right && elementScrollLeftOnEnd($el)) {
              prevent = true;
            }

            if (prevent) {
              if (parentScrollableEl) {
                handle(parentScrollableEl, true);
              } else {
                if (e.cancelable) {
                  e.preventDefault();
                }
              }
            }
          } else {
            handle(parentScrollableEl);
          }
        } else {
          if (e.cancelable) {
            e.preventDefault();
          }
        }
      };

      handle(e.target);
    }
  }
};

var onTouchEnd = function onTouchEnd(e) {
  if (!state.scroll) {
    state.startTouchY = 0;
    state.startTouchX = 0;
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('resize', onResize);
}

if (typeof document !== 'undefined') {
  document.addEventListener('touchstart', onTouchStart);
  document.addEventListener('touchmove', scroll_lock_onTouchMove, {
    passive: false
  });
  document.addEventListener('touchend', onTouchEnd);
}

var deprecatedMethods = {
  hide: function hide(target) {
    throwError('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget');
    disablePageScroll(target);
  },
  show: function show(target) {
    throwError('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget');
    enablePageScroll(target);
  },
  toggle: function toggle(target) {
    throwError('"toggle" is deprecated! Do not use it.');

    if (getScrollState()) {
      disablePageScroll();
    } else {
      enablePageScroll(target);
    }
  },
  getState: function getState() {
    throwError('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate');
    return getScrollState();
  },
  getWidth: function getWidth() {
    throwError('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth');
    return getPageScrollBarWidth();
  },
  getCurrentWidth: function getCurrentWidth() {
    throwError('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth');
    return getCurrentPageScrollBarWidth();
  },
  setScrollableTargets: function setScrollableTargets(target) {
    throwError('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget');
    scroll_lock_addScrollableTarget(target);
  },
  setFillGapSelectors: function setFillGapSelectors(selector) {
    throwError('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector');
    scroll_lock_addFillGapSelector(selector);
  },
  setFillGapTargets: function setFillGapTargets(target) {
    throwError('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget');
    scroll_lock_addFillGapTarget(target);
  },
  clearQueue: function clearQueue() {
    throwError('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks');
    clearQueueScrollLocks();
  }
};

var scrollLock = _objectSpread({
  disablePageScroll: disablePageScroll,
  enablePageScroll: enablePageScroll,
  getScrollState: getScrollState,
  clearQueueScrollLocks: clearQueueScrollLocks,
  getTargetScrollBarWidth: scroll_lock_getTargetScrollBarWidth,
  getCurrentTargetScrollBarWidth: scroll_lock_getCurrentTargetScrollBarWidth,
  getPageScrollBarWidth: getPageScrollBarWidth,
  getCurrentPageScrollBarWidth: getCurrentPageScrollBarWidth,
  addScrollableSelector: scroll_lock_addScrollableSelector,
  removeScrollableSelector: scroll_lock_removeScrollableSelector,
  addScrollableTarget: scroll_lock_addScrollableTarget,
  removeScrollableTarget: scroll_lock_removeScrollableTarget,
  addLockableSelector: scroll_lock_addLockableSelector,
  addLockableTarget: scroll_lock_addLockableTarget,
  addFillGapSelector: scroll_lock_addFillGapSelector,
  removeFillGapSelector: scroll_lock_removeFillGapSelector,
  addFillGapTarget: scroll_lock_addFillGapTarget,
  removeFillGapTarget: scroll_lock_removeFillGapTarget,
  setFillGapMethod: scroll_lock_setFillGapMethod,
  refillGaps: refillGaps,
  _state: state
}, deprecatedMethods);

/* harmony default export */ var scroll_lock = __webpack_exports__["default"] = (scrollLock);

/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ 616:
/***/ ((module) => {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
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
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return fn;
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}

var list = [
	" daum[ /]",
	" deusu/",
	" yadirectfetcher",
	"(?:^| )site",
	"(?:^|[^g])news",
	"@[a-z]",
	"\\(at\\)[a-z]",
	"\\(github\\.com/",
	"\\[at\\][a-z]",
	"^12345",
	"^<",
	"^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$",
	"^[^ ]{50,}$",
	"^active",
	"^ad muncher",
	"^amaya",
	"^anglesharp/",
	"^anonymous",
	"^avsdevicesdk/",
	"^axios/",
	"^bidtellect/",
	"^biglotron",
	"^btwebclient/",
	"^castro",
	"^clamav[ /]",
	"^client/",
	"^cobweb/",
	"^coccoc",
	"^custom",
	"^ddg[_-]android",
	"^discourse",
	"^dispatch/\\d",
	"^downcast/",
	"^duckduckgo",
	"^facebook",
	"^fdm[ /]\\d",
	"^getright/",
	"^gozilla/",
	"^hatena",
	"^hobbit",
	"^hotzonu",
	"^hwcdn/",
	"^jeode/",
	"^jetty/",
	"^jigsaw",
	"^linkdex",
	"^lwp[-: ]",
	"^metauri",
	"^microsoft bits",
	"^movabletype",
	"^mozilla/\\d\\.\\d \\(compatible;?\\)$",
	"^mozilla/\\d\\.\\d \\w*$",
	"^navermailapp",
	"^netsurf",
	"^offline explorer",
	"^php",
	"^postman",
	"^postrank",
	"^python",
	"^read",
	"^reed",
	"^restsharp/",
	"^snapchat",
	"^space bison",
	"^svn",
	"^swcd ",
	"^taringa",
	"^test certificate info",
	"^thumbor/",
	"^tumblr/",
	"^user-agent:mozilla",
	"^valid",
	"^venus/fedoraplanet",
	"^w3c",
	"^webbandit/",
	"^webcopier",
	"^wget",
	"^whatsapp",
	"^xenu link sleuth",
	"^yahoo",
	"^yandex",
	"^zdm/\\d",
	"^zoom marketplace/",
	"^{{.*}}$",
	"adbeat\\.com",
	"appinsights",
	"archive",
	"ask jeeves/teoma",
	"bit\\.ly/",
	"bluecoat drtr",
	"bot",
	"browsex",
	"burpcollaborator",
	"capture",
	"catch",
	"check",
	"chrome-lighthouse",
	"chromeframe",
	"cloud",
	"crawl",
	"cryptoapi",
	"dareboost",
	"datanyze",
	"dataprovider",
	"dejaclick",
	"dmbrowser",
	"download",
	"evc-batch/",
	"feed",
	"firephp",
	"freesafeip",
	"gomezagent",
	"google",
	"headlesschrome/",
	"http",
	"httrack",
	"hubspot marketing grader",
	"hydra",
	"ibisbrowser",
	"images",
	"inspect",
	"iplabel",
	"ips-agent",
	"java",
	"library",
	"mail\\.ru/",
	"manager",
	"monitor",
	"morningscore/",
	"neustar wpm",
	"nutch",
	"offbyone",
	"optimize",
	"pageburst",
	"pagespeed",
	"perl",
	"phantom",
	"pingdom",
	"powermarks",
	"preview",
	"proxy",
	"ptst[ /]\\d",
	"reader",
	"rexx;",
	"rigor",
	"rss",
	"scan",
	"scrape",
	"search",
	"serp ?reputation ?management",
	"server",
	"sogou",
	"sparkler/",
	"speedcurve",
	"spider",
	"splash",
	"statuscake",
	"stumbleupon\\.com",
	"supercleaner",
	"synapse",
	"synthetic",
	"torrent",
	"tracemyfile",
	"transcoder",
	"trendsmapresolver",
	"twingly recon",
	"url",
	"virtuoso",
	"wappalyzer",
	"webglance",
	"webkit2png",
	"websitemetadataretriever",
	"whatcms/",
	"wordpress",
	"zgrab"
];

/**
 * Mutate given list of patter strings
 * @param {string[]} list
 * @returns {string[]}
 */
function amend(list) {
  try {
    // Risk: Uses lookbehind assertion, avoid breakage in parsing by using RegExp constructor
    new RegExp('(?<! cu)bot').test('dangerbot'); // eslint-disable-line prefer-regex-literals
  } catch (error) {
    // Skip regex fixes
    return list;
  }
  [
  // Addresses: Cubot device
  ['bot', '(?<! cu)bot'],
  // Addresses: Android webview
  ['google', '(?<! (?:channel/|google/))google(?!(app|/google| pixel))'],
  // Addresses: libhttp browser
  ['http', '(?<!(?:lib))http'],
  // Addresses: java based browsers
  ['java', 'java(?!;)'],
  // Addresses: Yandex Search App
  ['search', '(?<! ya(?:yandex)?)search']].forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      search = _ref2[0],
      replace = _ref2[1];
    var index = list.lastIndexOf(search);
    if (~index) {
      list.splice(index, 1, replace);
    }
  });
  return list;
}

amend(list);
var flags = 'i';

/**
 * Test user agents for matching patterns
 */
var _list = /*#__PURE__*/new WeakMap();
var _pattern = /*#__PURE__*/new WeakMap();
var _update = /*#__PURE__*/new WeakSet();
var _index = /*#__PURE__*/new WeakSet();
var Isbot = /*#__PURE__*/function () {
  function Isbot(patterns) {
    var _this = this;
    _classCallCheck(this, Isbot);
    /**
     * Find the first index of an existing rule or -1 if not found
     * @param  {string} rule
     * @returns {number}
     */
    _classPrivateMethodInitSpec(this, _index);
    /**
     * Recreate the pattern from rules list
     */
    _classPrivateMethodInitSpec(this, _update);
    /**
     * @type {string[]}
     */
    _classPrivateFieldInitSpec(this, _list, {
      writable: true,
      value: void 0
    });
    /**
     * @type {RegExp}
     */
    _classPrivateFieldInitSpec(this, _pattern, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _list, patterns || list.slice());
    _classPrivateMethodGet(this, _update, _update2).call(this);
    var isbot = function isbot(ua) {
      return _this.test(ua);
    };
    return Object.defineProperties(isbot, Object.entries(Object.getOwnPropertyDescriptors(Isbot.prototype)).reduce(function (accumulator, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        prop = _ref2[0],
        descriptor = _ref2[1];
      if (typeof descriptor.value === 'function') {
        Object.assign(accumulator, _defineProperty({}, prop, {
          value: _this[prop].bind(_this)
        }));
      }
      if (typeof descriptor.get === 'function') {
        Object.assign(accumulator, _defineProperty({}, prop, {
          get: function get() {
            return _this[prop];
          }
        }));
      }
      return accumulator;
    }, {}));
  }
  _createClass(Isbot, [{
    key: "pattern",
    get:
    /**
     * Get a clone of the pattern
     * @type RegExp
     */
    function get() {
      return new RegExp(_classPrivateFieldGet(this, _pattern));
    }

    /**
     * Match given string against out pattern
     * @param  {string} ua User Agent string
     * @returns {boolean}
     */
  }, {
    key: "test",
    value: function test(ua) {
      return Boolean(ua) && _classPrivateFieldGet(this, _pattern).test(ua);
    }
  }, {
    key: "isbot",
    value: function isbot(ua) {
      return Boolean(ua) && _classPrivateFieldGet(this, _pattern).test(ua);
    }

    /**
     * Get the match for strings' known crawler pattern
     * @param  {string} ua User Agent string
     * @returns {string|null}
     */
  }, {
    key: "find",
    value: function find() {
      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var match = ua.match(_classPrivateFieldGet(this, _pattern));
      return match && match[0];
    }

    /**
     * Get the patterns that match user agent string if any
     * @param  {string} ua User Agent string
     * @returns {string[]}
     */
  }, {
    key: "matches",
    value: function matches() {
      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return _classPrivateFieldGet(this, _list).filter(function (entry) {
        return new RegExp(entry, flags).test(ua);
      });
    }

    /**
     * Clear all patterns that match user agent
     * @param  {string} ua User Agent string
     * @returns {void}
     */
  }, {
    key: "clear",
    value: function clear() {
      var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.exclude(this.matches(ua));
    }

    /**
     * Extent patterns for known crawlers
     * @param  {string[]} filters
     * @returns {void}
     */
  }, {
    key: "extend",
    value: function extend() {
      var _this2 = this;
      var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      [].push.apply(_classPrivateFieldGet(this, _list), filters.filter(function (rule) {
        return _classPrivateMethodGet(_this2, _index, _index2).call(_this2, rule) === -1;
      }).map(function (filter) {
        return filter.toLowerCase();
      }));
      _classPrivateMethodGet(this, _update, _update2).call(this);
    }

    /**
     * Exclude patterns from bot pattern rule
     * @param  {string[]} filters
     * @returns {void}
     */
  }, {
    key: "exclude",
    value: function exclude() {
      var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var length = filters.length;
      while (length--) {
        var index = _classPrivateMethodGet(this, _index, _index2).call(this, filters[length]);
        if (index > -1) {
          _classPrivateFieldGet(this, _list).splice(index, 1);
        }
      }
      _classPrivateMethodGet(this, _update, _update2).call(this);
    }

    /**
     * Create a new Isbot instance using given list or self's list
     * @param  {string[]} [list]
     * @returns {Isbot}
     */
  }, {
    key: "spawn",
    value: function spawn(list) {
      return new Isbot(list || _classPrivateFieldGet(this, _list));
    }
  }]);
  return Isbot;
}();
function _update2() {
  _classPrivateFieldSet(this, _pattern, new RegExp(_classPrivateFieldGet(this, _list).join('|'), flags));
}
function _index2(rule) {
  return _classPrivateFieldGet(this, _list).indexOf(rule.toLowerCase());
}

var isbot = new Isbot();

module.exports = isbot;
//# sourceMappingURL=index.js.map


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/header-password-drawer/default/header-password-drawer.js
class HeaderPasswordDrawer extends Core.Component {
  onMount() {
    const drawerModal = Core.Components.getComponent('drawer-modal');

    if (drawerModal) {
      const embedModalBtnEl = this.el.querySelector('[data-header-password-drawer-close]');

      this.events.register(embedModalBtnEl, 'click', e => {
        e.stopPropagation();
        e.preventDefault();

        const closeEvent = new CustomEvent('header-password-drawer:close', { bubbles: true });
        this.el.dispatchEvent(closeEvent);
      });
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/add-the-look-item/default/add-the-look-item.js
/**
 * @class AddTheLookItem
 * @classdesc The Shop the Look section. Displays an image
 *            with interactable points directing customers to featured products.
 * @extends Core.SectionComponent
 */
class AddTheLookItem extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);

    this.state = {
      product: this.data.product,
    };
  }

  get optionsSelector() {
    return this.query('options-selector');
  }

  get formData() {
    return new FormData(this.el.querySelector('[data-product-form]'));
  }

  onMount() {
    this.events.register(this.el, 'product:options-change', event => {
      const { variant } = event.detail;

      fetch(`${this.data.product_url}/async?variant=${variant.id}&section_id=${this.data.section_id}`)
        .then(response => response.text())
        .then(responseText => {
          const html = new DOMParser().parseFromString(responseText, 'text/html');
          const detailsEl = html.querySelector('[data-component="product-details"]');

          if (detailsEl) {
            this.el.querySelector('[data-component="product-details"]').replaceWith(detailsEl);
          }
        });
    });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/shop-the-look/default/shop-the-look.js
/**
 * @class ShopTheLook
 * @classdesc The Shop the Look section. Displays an image
 *            with interactable points directing customers to featured products.
 * @extends Core.SectionComponent
 */
class ShopTheLook extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);

    this._imageWrapperEl = this.el.querySelector('[data-image-wrapper]');
    this._viewInListEl = this.el.querySelector('[data-hotspot-viewinlist]');
    this._hotspotEls = this.el.querySelectorAll('[data-hotspot]');
    this._hotspots = [];
    this._addTheLookFragment = this.el.querySelector('[data-add-the-look-template]').content.cloneNode(true);
    this._addTheLook = null;
    this._currentAnimation = Promise.resolve();

    this._validHotspots = 0;
    this._hotspotEls.forEach(hotspotEl => {
      const toggleEl = hotspotEl.querySelector('[data-hotspot-toggle]');
      const modalEl = hotspotEl.querySelector('[data-hotspot-modal]');
      const animation = Core.Animations.transition({ el: modalEl, state: 'closed' });
      const { hotspot: id, hotspotUrl: productUrl, hotspotPage: page } = hotspotEl.dataset;
      const valid = !!productUrl;

      this._hotspots.push({
        id,
        el: hotspotEl,
        toggleEl,
        modalEl,
        productUrl,
        animation,
        page,
        selectedOptions: null,
        quickshop: null,
        zIndex: 1,
        valid,
      });

      if (valid) {
        this._validHotspots++;
      }
    });
    this._hotspotPages = this._validHotspots + 1;
  }

  onMount() {
    this._drawerModal = Core.Components.getComponent('drawer-modal');

    if (this._drawerModal) {
      this._drawerFlyout = this._drawerModal.createFlyout();
    }

    this.events.register(this._viewInListEl, 'click', e => {
      e.preventDefault();
      e.stopPropagation();

      this._openDrawerWithAddTheLook(this._viewInListEl);
    });

    this.events.register(document.body, 'click', e => {
      if (
        this._hotspots.some(({ el }) => el === e.target || el.contains(e.target))
      ) {
        return;
      }

      this._hotspots.forEach(hotspot => this._closeHotspot(hotspot));
    });

    this._hotspots.forEach(hotspot => {
      const {
        toggleEl,
        modalEl,
        productUrl,
      } = hotspot;

      this.events.register(toggleEl, 'click', async e => {
        e.preventDefault();

        const { open, cause } = await this._getHotspotState(hotspot);

        if (!open || (open && cause !== 'click')) {
          this._openHotspot(hotspot, 'click');
        } else {
          this._closeHotspot(hotspot);
        }
      });

      this.events.register(toggleEl, 'mouseover', async () => {
        const { open, cause } = await this._getHotspotState(hotspot);

        // Preload quickshop
        this._retrieveQuickshop(hotspot);

        if (!open || (open && cause !== 'click')) {
          this._openHotspot(hotspot, 'mouseover');
        }
      });

      this.events.register(modalEl, 'mouseover', async () => {
        const { open, cause } = await this._getHotspotState(hotspot);

        if (!open || (open && cause !== 'click')) {
          this._openHotspot(hotspot, 'mouseover');
        }
      });

      this.events.register(toggleEl, 'mouseleave', async e => {
        const { open, cause } = await this._getHotspotState(hotspot);

        // Do not do anything if we mouseover the product
        if (e.relatedTarget === modalEl || modalEl.contains(e.relatedTarget)) return;

        if (open && cause !== 'click') {
          this._closeHotspot(hotspot);
        }
      });

      this.events.register(modalEl, 'mouseleave', async e => {
        const { open, cause } = await this._getHotspotState(hotspot);

        // Do not do anything if we mouseover the toggle
        if (e.relatedTarget === toggleEl || toggleEl.contains(e.relatedTarget)) return;

        if (open && cause !== 'click') {
          this._closeHotspot(hotspot);
        }
      });

      if (productUrl) {
        this.events.register(modalEl, 'product-details:view-full-details', e => {
          e.stopPropagation();
          e.preventDefault();

          this._openDrawerWithHotspot(e.target, hotspot);
        });
      }
    });
  }

  onDismount() {
    super.onDismount();

    if (this._drawerFlyout) {
      this._drawerFlyout.then(drawerFlyout => drawerFlyout.destroy());
    }
  }

  onBlockSelect(event) {
    const hotspot = this._getHotspotById(event.detail.blockId);

    this._openHotspot(hotspot, 'click');
  }

  onBlockDeselect(event) {
    const hotspot = this._getHotspotById(event.detail.blockId);

    this._closeHotspot(hotspot);
  }

  _getHotspotById(id) {
    return this._hotspots.find(hotspot => hotspot.id === id);
  }

  _getHotspotByEl(el) {
    return this._hotspots.find(hotspot => hotspot.el === el);
  }

  _getHotspotByToggleEl(toggleEl) {
    return this._hotspots.find(hotspot => hotspot.toggleEl === toggleEl);
  }

  _getHotspotByModalEl(modalEl) {
    return this._hotspots.find(hotspot => hotspot.modalEl === modalEl);
  }

  _getHotspotState(hotspot) {
    return this
      ._currentAnimation
      .then(() => {
        const { el } = hotspot;

        return {
          open: el.open,
          cause: el.open ? el.getAttribute('data-hotspot-visible-by') : null,
        };
      });
  }

  _openHotspot(hotspot, cause = null) {
    return this
      ._currentAnimation
      .then(() => this._getHotspotState(hotspot))
      .then(({ open }) => {
        const {
          el,
          toggleEl,
          modalEl,
          animation,
        } = hotspot;

        if (cause) {
          el.setAttribute('data-hotspot-visible-by', cause);
        } else {
          el.removeAttribute('data-hotspot-visible-by');
        }

        hotspot.zIndex = this._hotspots.reduce((acc, h) => {
          if (hotspot === h) return acc;

          if (h.zIndex >= acc) return h.zIndex + 1;

          return acc;
        }, hotspot.zIndex);
        el.style.zIndex = hotspot.zIndex;

        if (open) return Promise.resolve(); // Already open

        el.open = true;
        this._findOpenSpaceForModal(toggleEl, modalEl);

        return animation.animateTo('opened');
      });
  }

  _closeHotspot(hotspot) {
    return this
      ._currentAnimation
      .then(() => this._getHotspotState(hotspot))
      .then(({ open }) => {
        const { animation } = hotspot;

        if (!open) return Promise.resolve(); // Already closed

        return animation
          .animateTo('closed')
          .then(() => open);
      })
      .then(open => {
        const { el } = hotspot;

        el.removeAttribute('data-hotspot-visible-by');

        if (!open) return;

        el.open = false;
        el.style.zIndex = '';
        hotspot.zIndex = 1;
      });
  }

  _findOpenSpaceForModal(toggleEl, modalEl) {
    const directionClasses = [
      'shop-the-look__hotspot-modal--right',
      'shop-the-look__hotspot-modal--left',
      'shop-the-look__hotspot-modal--bottom',
      'shop-the-look__hotspot-modal--top',
    ];

    const fudgeFactor = 1.075; // Add for spacing between product and toggle
    const {
      top: topImageEdge,
      right: rightImageEdge,
      bottom: bottomImageEdge,
      left: leftImageEdge,
    } = this._imageWrapperEl.getBoundingClientRect();
    const {
      top: topToggleEdge,
      right: rightToggleEdge,
      bottom: bottomToggleEdge,
      left: leftToggleEdge,
    } = toggleEl.getBoundingClientRect();
    const {
      width: productWidth,
      height: productHeight,
    } = modalEl.getBoundingClientRect();

    const topEdge = topToggleEdge - productHeight * fudgeFactor;
    const rightEdge = rightToggleEdge + productWidth * fudgeFactor;
    const bottomEdge = bottomToggleEdge + productHeight * fudgeFactor;
    const leftEdge = leftToggleEdge - productWidth * fudgeFactor;

    if (rightEdge <= rightImageEdge) {
      // Within bounds of right side
      modalEl.classList.remove(...directionClasses);
      modalEl.classList.add(directionClasses[0]);
    } else if (leftEdge >= leftImageEdge) {
      // Within bounds of left side
      modalEl.classList.remove(...directionClasses);
      modalEl.classList.add(directionClasses[1]);
    } else if (bottomEdge <= bottomImageEdge) {
      // Within bounds of bottom side
      modalEl.classList.remove(...directionClasses);
      modalEl.classList.add(directionClasses[2]);
    } else if (topEdge >= topImageEdge) {
      // Within bounds of top side
      modalEl.classList.remove(...directionClasses);
      modalEl.classList.add(directionClasses[3]);
    }
  }

  _retrieveQuickshop(hotspot) {
    const { productUrl } = hotspot;

    if (!productUrl) return null;

    if (!hotspot.quickshop) {
      hotspot.quickshop = fetch(productUrl.includes('?') ? `${productUrl}&view=quickshop` : `${productUrl}?view=quickshop`)
        .then(response => response.text()) // Return text string of the HTML
        .then(text => {
          // Convert the HTML string into a document object
          const productContent = new DOMParser()
            .parseFromString(text, 'text/html')
            .querySelector('[data-component="product-quickshop"]');
          const quickshopSection = productContent.parentElement;

          return quickshopSection;
        });
    }

    return hotspot.quickshop;
  }

  /**
   * Opens a quickshop using a drawer modal
   *
   * @param {HTMLNode} trigger The trigger that was clicked to open the quickshop
   * @param {Object} data An object containing data relevant to the quickshop
   * @param {String} data.productLink The link to fetch the product quickshop content
   */
  async _openDrawerWithHotspot(trigger, hotspot) {
    if (!this._drawerFlyout) return;

    const drawerFlyout = await this._drawerFlyout;

    this._drawerModal.openFlyout(drawerFlyout, trigger);
    this._refreshDrawerWithHotspot(hotspot);
  }

  async _openDrawerWithAddTheLook(trigger) {
    if (!this._drawerFlyout) return;

    const drawerFlyout = await this._drawerFlyout;

    this._drawerModal.openFlyout(drawerFlyout, trigger);
    this._refreshDrawerWithAddTheLook();
  }

  async _refreshDrawerWithHotspot(hotspot) {
    if (!this._drawerFlyout) return;

    const drawerFlyout = await this._drawerFlyout;
    const addTheLookHeadingEl = this._addTheLookFragment.querySelector('[data-add-the-look-quickshop-heading]').cloneNode(true);
    const addTheLookFooterEl = this._addTheLookFragment.querySelector('[data-add-the-look-footer]').cloneNode(true);
    const addTheLookAtc = addTheLookFooterEl.querySelector('[data-add-the-look-atc]');

    addTheLookAtc.remove();

    this
      ._retrieveQuickshop(hotspot)
      .then(quickshopSectionEl => {
        drawerFlyout.populateHeading(addTheLookHeadingEl, true);
        drawerFlyout.clearNotification();
        drawerFlyout.populateContent(quickshopSectionEl, true);
        drawerFlyout.populateFooter(addTheLookFooterEl, true);

        this.events.register(quickshopSectionEl, 'product:options-change', event => {
          const { options } = event.detail;

          hotspot.selectedOptions = options;
        });

        Core.Components
          .awaitComponents(quickshopSectionEl)
          .then(components => {
            const productQuickshop = components.filter(component => component.name === 'product-quickshop');
            const { optionsSelector } = productQuickshop;

            if (optionsSelector) {
              if (hotspot.selectedOptions) {
                optionsSelector
                  .setSelectedOptions(hotspot.selectedOptions);
              } else {
                const options = optionsSelector.getSelectedOptions();

                hotspot.selectedOptions = options;
              }
            }

            this._initAddTheLookNavigation(addTheLookFooterEl, parseInt(hotspot.page, 10));
          });
      });
  }

  async _refreshDrawerWithAddTheLook() {
    if (!this._drawerFlyout) return;

    const drawerFlyout = await this._drawerFlyout;
    const addTheLookEl = this._addTheLook ? this._addTheLook : this._addTheLookFragment.querySelector('[data-add-the-look]');
    const addTheLookHeadingEl = this._addTheLookFragment.querySelector('[data-add-the-look-heading]').cloneNode(true);
    const addTheLookFooterEl = this._addTheLookFragment.querySelector('[data-add-the-look-footer]').cloneNode(true);

    const awaitingAddTheLookEl = Core.Components.awaitComponents(addTheLookEl);
    const awaitingAddTheLookFooter = Core.Components.awaitComponents(addTheLookFooterEl);

    drawerFlyout.populateHeading(addTheLookHeadingEl, true);
    drawerFlyout.populateContent(addTheLookEl, true);
    drawerFlyout.populateFooter(addTheLookFooterEl, true);

    Promise.all([
      awaitingAddTheLookEl,
      awaitingAddTheLookFooter,
    ]).then(([addTheLookComponents, addTheLookFooterComponents]) => {
      const addTheLookItems = addTheLookComponents.filter(component => component.name === 'add-the-look-item');
      const addTheLookAtc = addTheLookFooterComponents.find(component => component.name === 'button-action');

      this._initAddTheLookItems(addTheLookItems, addTheLookAtc);
      this._initAddTheLookAtc(addTheLookAtc, addTheLookItems);
      this._initAddTheLookNavigation(
        addTheLookFooterEl,
        this._hotspotPages,
      );

      this._updateAddTheLookNotification(addTheLookItems);
      this._updateAddTheLookAtc(addTheLookAtc, addTheLookItems);

      this._addTheLook = addTheLookEl;
    });
  }

  _getAddTheLookItemState(addTheLookItems) {
    let selectedItems = 0;
    let itemsRequiringOptionSelection = 0;

    addTheLookItems.forEach(addTheLookItem => {
      const { optionsSelector, formData } = addTheLookItem;

      if (formData.get('add_item')) {
        selectedItems++;

        if (!formData.get('id') || (optionsSelector && optionsSelector.getSelectedOptions().some(option => option === ''))) {
          itemsRequiringOptionSelection++;
        }
      }
    });

    return {
      selectedItems,
      itemsRequiringOptionSelection,
    };
  }

  _initAddTheLookNavigation(navigationEls, currentPage) {
    const navigationPrev = navigationEls.querySelector('[data-add-the-look-navigation-previous]');
    const navigationPagesEl = navigationEls.querySelector('[data-add-the-look-navigation-pages]');
    const navigationNext = navigationEls.querySelector('[data-add-the-look-navigation-next]');

    navigationPrev.disabled = currentPage === 1;
    navigationNext.disabled = currentPage === this._hotspotPages;

    navigationPagesEl.innerHTML = navigationPagesEl
      .innerHTML
      .replace('||current_page||', currentPage)
      .replace('||total_pages||', this._hotspotPages);

    this.events.register(navigationPrev, 'mouseover', () => {
      const previousPage = currentPage - 1;
      const previousHotspot = this._hotspots
        .find(({ page }) => page === previousPage.toString());

      if (previousHotspot) {
        this._retrieveQuickshop(previousHotspot);
      }
    });

    this.events.register(navigationNext, 'mouseover', () => {
      const nextPage = currentPage + 1;
      const nextHotspot = this._hotspots
        .find(({ page }) => page === nextPage.toString());

      if (nextHotspot) {
        this._retrieveQuickshop(nextHotspot);
      }
    });

    this.events.register(navigationPrev, 'click', () => {
      const previousPage = currentPage - 1;
      const previousHotspot = this._hotspots
        .find(({ page }) => page === previousPage.toString());

      if (previousHotspot) {
        this._refreshDrawerWithHotspot(previousHotspot);
      }
    });

    this.events.register(navigationNext, 'click', () => {
      const nextPage = currentPage + 1;
      const nextHotspot = this._hotspots
        .find(({ page }) => page === nextPage.toString());

      if (nextPage === this._hotspotPages) {
        this._refreshDrawerWithAddTheLook();
      } else if (nextHotspot) {
        this._refreshDrawerWithHotspot(nextHotspot);
      }
    });
  }

  _initAddTheLookItems(addTheLookItems, addTheLookAtc) {
    addTheLookItems.forEach(addTheLookItem => {
      const hotspotId = addTheLookItem.el.parentElement.dataset.addTheLookItemHotspot;
      const hotspot = this._getHotspotById(hotspotId);
      const { optionsSelector } = addTheLookItem;

      if (optionsSelector) {
        if (hotspot.selectedOptions) {
          optionsSelector
            .setSelectedOptions(hotspot.selectedOptions);
        } else {
          const options = optionsSelector.getSelectedOptions();

          hotspot.selectedOptions = options;
        }
      }

      this.events.register(addTheLookItem.el, 'change', () => {
        this._updateAddTheLookNotification(addTheLookItems);
        this._updateAddTheLookAtc(addTheLookAtc, addTheLookItems);
      });

      this.events.register(addTheLookItem.el, 'product:options-change', event => {
        const { options } = event.detail;

        hotspot.selectedOptions = options;

        this._updateAddTheLookNotification(addTheLookItems);
        this._updateAddTheLookAtc(addTheLookAtc, addTheLookItems);
      });
    });
  }

  async _updateAddTheLookNotification(addTheLookItems) {
    if (!this._drawerFlyout) return;

    const drawerFlyout = await this._drawerFlyout;
    const {
      selectedItems,
      itemsRequiringOptionSelection,
    } = this._getAddTheLookItemState(addTheLookItems);

    const addTheLookNotification = this._addTheLookFragment.querySelector('[data-add-the-look-notification]').cloneNode(true);
    const notificationError = addTheLookNotification.querySelector('[data-add-the-look-notification-error]');
    const notificationSelected = addTheLookNotification.querySelector('[data-add-the-look-notification-selected]');
    const notificationRequiresOptionSelections = addTheLookNotification
      .querySelector('[data-add-the-look-notification-requires-option-selection]');

    notificationError.remove();

    notificationSelected.innerHTML = notificationSelected
      .innerHTML
      .replace('||amount||', selectedItems)
      .replace('||total_items||', this._validHotspots);

    if (itemsRequiringOptionSelection > 0) {
      notificationRequiresOptionSelections.innerHTML = notificationRequiresOptionSelections
        .innerHTML
        .replace('||amount||', itemsRequiringOptionSelection)
        .replace('||total_selected||', selectedItems);
    } else {
      notificationRequiresOptionSelections.remove();
    }

    drawerFlyout.populateNotification(addTheLookNotification, true, true);
  }

  _updateAddTheLookAtc(addTheLookAtc, addTheLookItems) {
    const {
      selectedItems,
      itemsRequiringOptionSelection,
    } = this._getAddTheLookItemState(addTheLookItems);

    if (selectedItems === 0 || itemsRequiringOptionSelection > 0) {
      addTheLookAtc.disabled = true;
      addTheLookAtc.text = this.data.locales.select_variant;
    } else {
      addTheLookAtc.disabled = false;
      addTheLookAtc.text = this.data.locales.add_to_cart;
    }
  }

  async _initAddTheLookAtc(addTheLookAtc, addTheLookItems) {
    if (!this._drawerFlyout) return;

    const drawerFlyout = await this._drawerFlyout;
    const { el: addTheLookAtcEl } = addTheLookAtc;

    this.events.register(addTheLookAtcEl, 'click', () => {
      addTheLookAtc.loading = true;

      const formDatas = addTheLookItems.map(addTheLookItem => addTheLookItem.formData);
      const combinedFormData = {
        items: [],
      };

      formDatas.forEach(formData => {
        if (formData.get('add_item')) {
          combinedFormData.items.push(Object.fromEntries(formData));
        }
      });

      fetch(
        `${window.PXUTheme.routes.cart_add_url}.js`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(combinedFormData),
        },
      )
        .then(response => (
          Promise.all([
            response,
            fetch(
              `${window.PXUTheme.routes.cart_url}.js`,
              {
                method: 'GET',
              },
            ),
          ])
        ))
        .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
        .then(([response, cart]) => {
          if (response.status) {
            const addToCartErrorEvent = new CustomEvent('product:add-to-cart:error', { detail: { cart, error: response }, bubbles: true });
            const addTheLookNotification = this._addTheLookFragment.querySelector('[data-add-the-look-notification]').cloneNode(true);
            const notificationError = addTheLookNotification.querySelector('[data-add-the-look-notification-error]');
            const notificationSelected = addTheLookNotification.querySelector('[data-add-the-look-notification-selected]');
            const notificationRequiresOptionSelections = addTheLookNotification
              .querySelector('[data-add-the-look-notification-requires-option-selection]');

            this.el.dispatchEvent(addToCartErrorEvent);

            notificationSelected.remove();
            notificationRequiresOptionSelections.remove();
            notificationError.innerText = response.description;
            drawerFlyout.populateNotification(addTheLookNotification, true, true);

            return;
          }

          if (window.location.pathname === '/cart') {
            window.location.reload();
            return;
          }

          const addToCartEvent = new CustomEvent('product:add-to-cart:success', { detail: { cart, line_item: response }, bubbles: true });
          this.el.dispatchEvent(addToCartEvent);

          const cartDrawer = Core.Components.getComponent('cart-drawer');

          if (cartDrawer && cartDrawer.data.enabled) {
            cartDrawer.open(addTheLookAtc.el, true, response.items);
          } else {
            window.location = window.PXUTheme.routes.cart_url;
          }
        })
        .catch(err => console.error('Error:', err))
        .finally(() => { addTheLookAtc.loading = false; });
    });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/video-player/default/video-player.js
class VideoPlayer extends Core.Component {
  constructor(el, context) {
    super(el, context);

    const videoEl = el.querySelector('[data-video]');

    this._video = Core.Media.createVideo(videoEl, this.data.type);
  }

  /**
   * Play the video and dispatch video-related events based on resolve/reject from Promise
   * @public
   */
  play() {
    this._video.play();
  }

  /**
   * Pause the video
   * @public
   */
  pause() {
    this._video.pause();
  }

  /**
   * Unload the video on unmount
   */
  onDismount() {
    this._video.unload();
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/blocks/block-promo-image/default/block-promo-image.js
class BlockPromoImage extends Core.BlockComponent {
  constructor(el, context) {
    super(el, context);
    this.image = el.querySelector('img');
  }

  get blockHeight() {
    return this.image
      ? `${this.image.naturalHeight}px`
      : '300px'; /* placeholder value for SVG */
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/blocks/block-promo-text/default/block-promo-text.js
class BlockPromoText extends Core.BlockComponent {
  constructor(el, context) {
    super(el, context);

    this.contentArea = el.querySelector('[data-content-area]');
  }

  get blockHeight() {
    const {
      paddingTop: containerPaddingTop,
      paddingBottom: containerPaddingBottom,
    } = getComputedStyle(this.el);
    const paddingTopInt = Number(containerPaddingTop.replace('px', ''));
    const paddingBottomInt = Number(containerPaddingBottom.replace('px', ''));
    return `${this.contentArea.offsetHeight + paddingTopInt + paddingBottomInt}px`;
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/blocks/block-promo-editorial/default/block-promo-editorial.js
class BlockPromoEditorial extends Core.BlockComponent {
  constructor(el, context) {
    super(el, context);

    this.contentWrapper = el.querySelector('[data-content-wrapper]');
    this.contentAreas = el.querySelectorAll('[data-content-area]');
  }

  get blockHeight() {
    const {
      paddingTop: containerPaddingTop,
      paddingBottom: containerPaddingBottom,
    } = getComputedStyle(this.contentWrapper);
    const paddingTopInt = Number(containerPaddingTop.replace('px', ''));
    const paddingBottomInt = Number(containerPaddingBottom.replace('px', ''));
    const height = [...this.contentAreas]
      .reduce((acc, curr) => acc + curr.offsetHeight, paddingTopInt + paddingBottomInt);
    return `${height}px`;
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/promotions-grid/default/promotions-grid.js
class PromotionsGrid extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);

    this.slideContainer = el.querySelector('[data-promo-grid-slider-list]');
    if (!this.slideContainer) return;

    this.slides = this.slideContainer.querySelectorAll('[data-promo-grid-slider-item]');
    this.slideButtonPrevious = el.querySelector('[data-promo-grid-slider-previous]');
    this.slideButtonNext = el.querySelector('[data-promo-grid-slider-next]');
    this.currentSlideIndicator = el.querySelector('[data-promo-grid-slider-navigation-current-slide]');
    this.slideCount = this.data.numberOfSlides;
    this.largestMobileHeightSetting = Number(this.slideContainer.dataset.promoGridLargestSlide);
    this.resizeFunc = this._onResize.bind(this);
    this._observer = new IntersectionObserver(this._handleIntersection.bind(this), {
      root: this.slideContainer,
      rootMargin: '0px 0px 0px 0px',
      threshold: 1.0,
    });

    this.state = {
      selectedSlideIndex: 0,
      numberOfSlidesZeroBased: Number(this.slideCount) - 1,
    };

    this.events.register(this.slideButtonPrevious, 'click', e => {
      e.preventDefault();
      const selectedSlideEl = this.slideContainer.querySelector(`[data-promo-grid-slide-index='${this.state.selectedSlideIndex}']`);
      const currentSlidePosition = Array.prototype.indexOf.call(this.slides, selectedSlideEl);
      const nextSlideIndex = currentSlidePosition - 1;
      const matchingSlide = this.slides[nextSlideIndex];

      if (matchingSlide) {
        this._scrollIntoView(matchingSlide);
      }
    });

    this.events.register(this.slideButtonNext, 'click', e => {
      e.preventDefault();

      const selectedSlideEl = this.slideContainer.querySelector(`[data-promo-grid-slide-index='${this.state.selectedSlideIndex}']`);
      const currentSlidePosition = Array.prototype.indexOf.call(this.slides, selectedSlideEl);
      const nextSlideIndex = currentSlidePosition + 1;
      const matchingSlide = this.slides[nextSlideIndex];

      if (matchingSlide) {
        this._scrollIntoView(matchingSlide);
      }
    });

    this.events.register(this.slideContainer, 'rimg:load', () => this._adjustSectionHeight());

    this.slides.forEach(slide => this._observer.observe(slide));
  }

  _onResize() {
    this._adjustSectionHeight();
    if (this.selectedBlock) {
      this._scrollIntoView(this.selectedBlock);
    }
  }

  onMount() {
    if (!this.slideContainer) return;
    this._adjustSectionHeight();
    Core.Breakpoints.onChange(this.resizeFunc);
  }

  onDismount() {
    super.onDismount();
    Core.Breakpoints.offChange(this.resizeFunc);
  }

  onBlockSelect(e) {
    if (!e) return;
    this.selectedBlock = e.target;
    this._scrollIntoView(e.target);
  }

  /**
   * Adjusts the section height according to the text content within the block.
   * The block with the largest amount of text content sets the height of the slider on mobile
   * On desktop, we calculate the height when the first block in a row is using the 'natural'
   * height setting so that all text content appears.
   */
  _adjustSectionHeight() {
    const editorialBlocks = this.queryAll('block-promo-editorial');
    const textBlocks = this.queryAll('block-promo-text');
    const imageBlocks = this.queryAll('block-promo-image');
    const blockHeights = [...editorialBlocks, ...textBlocks, ...imageBlocks].map(block => Number(block.blockHeight.replace('px', '')));
    const largestBlockHeight = Math.max(...blockHeights);

    if (Core.Breakpoints.max('M')) {
      if (largestBlockHeight > this.largestMobileHeightSetting) {
        this.slideContainer.style.setProperty('--mobile-height', `${largestBlockHeight}px`);
      }
    } else {
      const gridRows = this._calculateGridRowHeights();
      this.slideContainer.style.setProperty('--row-heights', gridRows);
    }
  }

  /**
   * Determine grid row heights based on block setting values.
   * This is specifically for cases where the text content is
   * taller than the grid row
   * @returns {String}
   */
  _calculateGridRowHeights() {
    // Figure out which slides are first in the row by tracking how many columns
    // each block spans. Everytime the column count passes 12 we know that a new row
    // has begun.
    let currentColumnInt = 0;
    let gridRowString = '';
    const { blockHeight } = Core.Components.getComponent(this.slides[0].children[0]);
    const firstBlockSettingHeight = this.slides[0].dataset.promoGridSliderItemHeight;
    gridRowString = firstBlockSettingHeight === 'auto'
      ? blockHeight
      : firstBlockSettingHeight;

    this.slides.forEach(slide => {
      const { promoGridSliderItemWidth, promoGridSliderItemHeight } = slide.dataset;
      const { blockHeight: currentBlockHeight } = Core.Components.getComponent(slide.children[0]);
      const blockColumnInt = Number(promoGridSliderItemWidth);
      let newHeight;
      currentColumnInt += blockColumnInt;

      if (currentColumnInt > 12) {
        newHeight = promoGridSliderItemHeight === 'auto'
          ? currentBlockHeight
          : promoGridSliderItemHeight;

        gridRowString = `${gridRowString} ${newHeight}`;
        currentColumnInt = blockColumnInt;
      }
    });

    return gridRowString;
  }

  /**
   * Callback for IntersectionObserver
   * Handles updating the selected slide state as well as
   * the current slide indicator and button disabled state
   * @param {IntersectionObserverEntry[]} entries -
   */
  _handleIntersection(entries) {
    const intersectingSlideIndex = entries
      .filter(entry => entry.isIntersecting)
      .map(({ target }) => Array.prototype.indexOf.call(this.slides, target));

    if (intersectingSlideIndex.length > 0) {
      this.setState({
        selectedSlideIndex: intersectingSlideIndex[0],
      });
    }
  }

  /**
   * Scrolls the next/previous slide into view
   * @param {HTMLElement} slide
   */
  _scrollIntoView(slide) {
    this.slideContainer.scrollTo({
      left: slide.offsetLeft,
      behavior: 'smooth',
    });
  }

  onStateChange() {
    this.currentSlideIndicator.innerText = this.state.selectedSlideIndex + 1;
    if (this.state.selectedSlideIndex === 0) {
      this.slideButtonPrevious.setAttribute('disabled', '');
    } else {
      this.slideButtonPrevious.removeAttribute('disabled');
    }

    if (this.state.selectedSlideIndex === this.state.numberOfSlidesZeroBased) {
      this.slideButtonNext.setAttribute('disabled', '');
    } else {
      this.slideButtonNext.removeAttribute('disabled');
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/product-recommendations/default/product-recommendations.js
/**
 * @class ProductRecommendations
 * @classdesc The Product Recommendations class handles loading in the recommended products.
 * @extends Core.SectionComponent
 */
class ProductRecommendations extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);

    // We want to start loading the products when the user has scrolled within 200px of the section.
    new IntersectionObserver(this._handleIntersection.bind(this), { rootMargin: '0px 0px 200px 0px' }).observe(el);
  }

  /**
   *
   * Monitors and loads the recommended products if scrolled within 200px of the section
   * @param {IntersectionObserverEntry[]} entries - This Intersection Observer API interface
   * describes the intersection between the target element and its root container at a specific
   * moment of transition.
   * @param {IntersectionObserver} observer - provides a way to asynchronously observe changes
   * in the intersection of a target element with an ancestor element or with a top-level
   * document's viewport.
   * @private
   */
  _handleIntersection(entries, observer) {
    if (!entries[0].isIntersecting) return;
    observer.unobserve(this.el);

    fetch(this.data.url)
      .then(response => response.text())
      .then(text => {
        const html = document.createElement('div');
        html.innerHTML = text;
        const recommendations = html.querySelector('.product-recommendations');
        if (recommendations && recommendations.innerHTML.trim().length) {
          this.el.innerHTML = recommendations.innerHTML;
        }
      })
      .catch(e => {
        console.error(e);
      });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/product-details/default/product-details.js
/**
 * @class ProductDetails
 * @classdesc A minimal version of the product, limiting details only to the necessary elements.
 *
 * @extends Core.Component
 */
class ProductDetails extends Core.Component {
  onMount() {
    const viewFullDetailsLink = this.query('button-link');

    this.events.register(viewFullDetailsLink.el, 'click', e => {
      const clickEvent = new CustomEvent('product-details:view-full-details', { bubbles: true, cancelable: true });
      const isCancelled = !viewFullDetailsLink.el.dispatchEvent(clickEvent);

      if (isCancelled) {
        e.stopPropagation();
        e.preventDefault();
      }
    });
  }

  onDismount() {
    this.events.unregisterAll();
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/product-quickshop/default/product-quickshop.js
class ProductQuickshop extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);

    const { product, selectedVariant } = this.data;

    this.state = {
      product,
      selectedVariant,
    };

    this.events.register(el, 'product:variant-change', event => this._onVariantChange(event));
  }

  get optionsSelector() {
    return this.query('options-selector');
  }

  _onVariantChange(event) {
    const { variant, state } = event.detail;

    if (state !== 'unselected') {
      this._refreshProduct(variant);

      this.setState({ selectedVariant: variant });
    }
  }

  _refreshProduct(variant) {
    // Update the price component using fetch
    fetch(`${this.data.url}/async?view=quickshop&variant=${variant.id}&section_id=${this.sectionId}`)
      .then(response => response.text())
      .then(responseText => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const detailsBlockEl = html.querySelector('[data-type="details"]');
        const skuBlockEl = html.querySelector('[data-type="sku"]');
        const priceBlockEl = html.querySelector('[data-type="price"]');
        const inventoryStatusBlockEl = html.querySelector('[data-type="inventory_status"]');
        const buyButtonsEl = html.querySelector('[data-type="buy_buttons"]');
        const sharingEl = html.querySelector('[data-type="share"]');

        if (detailsBlockEl) {
          this.el.querySelector('[data-type="details"]').innerHTML = detailsBlockEl.innerHTML;
        }

        if (skuBlockEl) {
          this.el.querySelector('[data-type="sku"]').innerHTML = skuBlockEl.innerHTML;
        }

        if (priceBlockEl) {
          this.el.querySelector('[data-type="price"]').innerHTML = priceBlockEl.innerHTML;
        }

        if (inventoryStatusBlockEl) {
          this.el.querySelector('[data-type="inventory_status"]').innerHTML = inventoryStatusBlockEl.innerHTML;
        }

        if (buyButtonsEl) {
          this.el.querySelector('[data-type="buy_buttons"]').innerHTML = buyButtonsEl.innerHTML;
        }

        if (sharingEl) {
          this.el.querySelector('[data-type="share"]').innerHTML = sharingEl.innerHTML;
        }
      });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/blocks/block-complementary-products/default/block-complementary-products.js
/**
 * @class ComplementaryProducts
 * @classdesc The class for initializing complementary product recommendations
 *
 * @extends Core.Component
 */

 class ComplementaryProducts extends Core.Component {
  onMount() {
    this.loadRecommendations();
  }

  /**
   * Fetches and inserts section content via the Shopify recommendations endpoint
   */
  loadRecommendations() {
    const url = `${this.data.recommendations_route}?section_id=${this.data.section_id}&limit=${this.data.product_recommendation_limit}&product_id=${this.data.product_id}&intent=complementary`;
    return fetch(url)
      .then(response => response.text())
      .then(text => {
        const html = document.createElement('div');
        html.innerHTML = text;

        this.el.querySelector('[data-complementary-products-content]').innerHTML = html.querySelector('[data-complementary-products-content]').innerHTML;
      });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/product-gallery/default/product-gallery.js
function scrollIntoView(gallery, media) {
  if (Core.Breakpoints.min('M')) {
    window.scrollTo({
      top: media.offsetTop,
      behavior: 'smooth',
    });
  } else {
    gallery.scrollTo({
      left: media.offsetLeft,
      behavior: 'smooth',
    });
  }
}

class ProductGallery extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.gallery = el.querySelector('[data-product-gallery-list]');
    this.galleryMedia = this.gallery.querySelectorAll('[data-media]');
    this.zoomableImageBtns = el.querySelectorAll('[data-product-gallery-media-zoom]');
    this.navigationThumbnails = el.querySelector('[data-product-gallery-navigation-thumbnails]');
    this.navigationCurrentMedia = el.querySelector('[data-product-gallery-navigation-current-media]');
    this.navigationArrowPrevious = el.querySelector('[data-product-gallery-navigation-arrow-previous]');
    this.navigationArrowNext = el.querySelector('[data-product-gallery-navigation-arrow-next]');

    this.state = {
      selectedMedia: this.data.selected_media,
    };

    this.zoomableImageBtns.forEach(zoomableImageBtn => {
      this.events.register(zoomableImageBtn, 'click', e => {
        const img = e.target.closest('[data-media]');

        if (!img) return;

        const { media: mediaId } = img.dataset;
        const galleryModal = this.query('product-gallery-modal');

        if (galleryModal) {
          galleryModal.open(mediaId);
        }
      });
    });

    if (this.galleryMedia.length > 1) {
      this.events.register(this.navigationThumbnails, 'click', e => {
        e.preventDefault();

        const btn = e.target.closest('a[data-media]');

        if (!btn) return; // We clicked into the void

        const matchingMedia = this.gallery.querySelector(`[data-media='${btn.dataset.media}']`);

        if (matchingMedia) {
          scrollIntoView(this.gallery, matchingMedia);

          this.setState({
            selectedMedia: matchingMedia.dataset.media,
          });
        }
      });

      this.events.register(this.navigationArrowPrevious, 'click', e => {
        e.preventDefault();

        const selectedMediaEl = this.gallery.querySelector(`[data-media='${this.state.selectedMedia}']`);
        const currMediaPosition = Array.prototype.indexOf.call(this.galleryMedia, selectedMediaEl);
        const nextMediaIndex = currMediaPosition - 1;
        const matchingMedia = this.galleryMedia[nextMediaIndex];

        if (matchingMedia) {
          scrollIntoView(this.gallery, matchingMedia);
        }
      });

      this.events.register(this.navigationArrowNext, 'click', e => {
        e.preventDefault();

        const selectedMediaEl = this.gallery.querySelector(`[data-media='${this.state.selectedMedia}']`);
        const currMediaPosition = Array.prototype.indexOf.call(this.galleryMedia, selectedMediaEl);
        const nextMediaIndex = currMediaPosition + 1;
        const matchingMedia = this.galleryMedia[nextMediaIndex];

        if (matchingMedia) {
          scrollIntoView(this.gallery, matchingMedia);
        }
      });

      this._intersectionObserver = new IntersectionObserver(this._handleIntersection.bind(this), { root: this.gallery, rootMargin: '0px 0px 0px 0px', threshold: 0.5 });
      this.galleryMedia.forEach(galleryMedia => this._intersectionObserver.observe(galleryMedia));

      Core.Breakpoints.onChange(this._handleBreakpointChange.bind(this));
    }
  }

  onContextChange({ selectedVariant }) {
    if (!selectedVariant || !selectedVariant.featured_media) return;

    const matchingMedia = this.gallery.querySelector(`[data-media='${selectedVariant.featured_media.id}']`);

    if (matchingMedia) {
      scrollIntoView(this.gallery, matchingMedia);

      this.setState({
        selectedMedia: matchingMedia.dataset.media,
      });
    }
  }

  onStateChange(newState) {
    const shopifyXrEl = this.el.querySelector('[data-gallery-xr]');

    if (!shopifyXrEl) return;

    const matchingMedia = this.gallery.querySelector(`[data-media='${newState.selectedMedia}']`);

    if (matchingMedia.dataset.mediaType === 'model') {
      shopifyXrEl.dataset.shopifyModel3dId = newState.selectedMedia;
    } else {
      shopifyXrEl.dataset.shopifyModel3dId = shopifyXrEl.dataset.defaultModelId;
    }
  }

  /**
   * Called when the component is dismounted
   */
  onDismount() {
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
    }

    this.events.unregisterAll();
  }

  _handleBreakpointChange({ current }) {
    if (current.value === 'S') {
      const matchingMedia = this.galleryMedia[0];

      if (matchingMedia) {
        scrollIntoView(this.gallery, matchingMedia);
        const matchingMediaIndex = Array.prototype
          .indexOf.call(this.galleryMedia, matchingMedia);
        this.navigationArrowPrevious.disabled = matchingMediaIndex === 0;
        this.navigationCurrentMedia.innerText = matchingMediaIndex + 1;
        this.navigationArrowNext.disabled = matchingMediaIndex === this.galleryMedia.length - 1;

        this.setState({
          selectedMedia: matchingMedia.dataset.media,
        });
      }
    }
  }

  /**
   * Handles the intersection event of a media item and gallery viewport
   * Updates the navigation arrows
   */
  _handleIntersection(entries) {
    if (!Core.Breakpoints.max('S')) return;

    const intersectingEntry = entries
      .reduce((acc, entry) => {
        let largestIntersectingEntry = acc;

        if (
          entry.intersectionRatio >= this._intersectionObserver.thresholds
          && (
            !largestIntersectingEntry
            || largestIntersectingEntry.intersectionRatio < entry.intersectionRatio
          )
        ) {
          largestIntersectingEntry = entry;
        }

        return largestIntersectingEntry;
      }, null);

    if (!intersectingEntry) return;

    Core.Media.pauseAll();

    const intersectingMediaIndex = Array.prototype
      .indexOf.call(this.galleryMedia, intersectingEntry.target);

    if (intersectingMediaIndex >= 0) {
      const currImgPosition = intersectingMediaIndex + 1; // Position is 1-based index

      this.navigationArrowPrevious.disabled = intersectingMediaIndex === 0;
      this.navigationCurrentMedia.innerText = currImgPosition;
      this.navigationArrowNext.disabled = intersectingMediaIndex === this.galleryMedia.length - 1;

      this.setState({
        selectedMedia: intersectingEntry.target.dataset.media,
      });
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/product/default/product.js
class Product extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);

    const { selectedVariant } = this.data;

    this.state = {
      selectedVariant,
    };

    this.events.register(el, 'product:add-to-cart:success', event => this._onAddToCartSuccess(event));
    this.events.register(el, 'product:variant-change', event => this._onVariantChange(event));

    const productGridEl = el.querySelector('[data-product-grid]');
    const productGridColumnDetailsEl = el.querySelector('[data-product-grid-column-details]');
    const resizeObserver = new ResizeObserver(entries => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const viewportHeight = window.visualViewport.height;
        const { height, top, bottom } = productGridEl.getBoundingClientRect();
        const pxInViewport = Math.max(
          0,
          top > 0
            ? Math.min(height, viewportHeight - top)
            : Math.min(bottom, viewportHeight),
        );

        if (entry.contentRect.height <= pxInViewport) {
          productGridEl.dataset.stickyPosition = 'top';
        } else {
          productGridEl.dataset.stickyPosition = 'bottom';
        }
      }
    });

    resizeObserver.observe(productGridColumnDetailsEl);
  }

  _onAddToCartSuccess() {
    const { selectedVariant } = this.state;

    this._refreshProduct(selectedVariant);
  }

  _onVariantChange(event) {
    const { variant, state } = event.detail;

    if (state !== 'unselected') {
      this._refreshProduct(variant);

      this.setState({ selectedVariant: variant });
    }
  }

  _refreshProduct(variant) {
    // Update the price component using fetch
    fetch(`${this.data.url}/async?variant=${variant.id}&section_id=${this.sectionId}`)
      .then(response => response.text())
      .then(responseText => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const skuBlockEl = html.querySelector('[data-type="sku"]');
        const priceBlockEl = html.querySelector('[data-type="price"]');
        const inventoryStatusBlockEl = html.querySelector('[data-type="inventory_status"]');
        const buyButtonsEl = html.querySelector('[data-type="buy_buttons"]');
        const recipientFormEl = html.querySelector('[data-recipient-form]');
        const sharingEl = html.querySelector('[data-type="share"]');

        if (skuBlockEl) {
          this.el.querySelector('[data-type="sku"]').innerHTML = skuBlockEl.innerHTML;
        }

        if (priceBlockEl) {
          this.el.querySelector('[data-type="price"]').innerHTML = priceBlockEl.innerHTML;
        }

        if (inventoryStatusBlockEl) {
          this.el.querySelector('[data-type="inventory_status"]').innerHTML = inventoryStatusBlockEl.innerHTML;
        }

        if (buyButtonsEl) {
          this.el.querySelector('[data-type="buy_buttons"]').innerHTML = buyButtonsEl.innerHTML;
        }

        if (sharingEl) {
          this.el.querySelector('[data-type="share"]').innerHTML = sharingEl.innerHTML;
        }
      });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/page-age-gate/default/page-age-gate.js
class PageAgeGate extends Core.SectionComponent {
  onSelect() {
    const ageGate = Core.Components.getComponent('age-gate-page');

    if (!ageGate) return;
    
    ageGate.open();
  }

  onDeselect() {
    const ageGate = Core.Components.getComponent('age-gate-page');
    
    if (!ageGate) return;

    ageGate.close();
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/main-search/default/main-search.js
class MainSearch extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);

    this.filterResults = el.querySelector('[data-filter-results]');

    this.events.register(window, 'popstate', e => this.onHistoryChange(e));
  }

  onMount() {
    this.filters = this.query('faceted-filters');
    this.mobileFilters = this.query('faceted-filters-mobile');

    if (this.filters) {
      this.events.register(this.filters.el, 'filter:update', e => {
        const { searchParams } = e.detail;

        this._updateSectionContent(searchParams);

        history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
      });
    }

    if (this.mobileFilters) {
      this.events.register(this.mobileFilters.el, 'filter:update', e => {
        const { searchParams } = e.detail;

        this._updateSectionContent(searchParams);

        history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
      });
    }
  }

  onDismount() {
    this.events.unregisterAll();
  }

  onHistoryChange(e) {
    // Sometimes, a user might copy + paste a URL that has a search query in it.
    // Or, they might press 'Enter' to submit the search form.
    // In both cases, we want to preserve that initial state, which can be accessed via
    // `window.location.search` on the "last" press of the "back" button
    // (when state object is empty)
    this._updateSectionContent(e.state
      ? e.state.searchParams
      : window.location.search.substring(1));
  }

  _updateSectionContent(searchParams) {
    const url = `${window.location.pathname}?section_id=${this.sectionId}&${searchParams}`;

    fetch(url)
      .then(response => response.text())
      .then(html => {
        const newDom = new DOMParser().parseFromString(html, 'text/html');

        this.filterResults.innerHTML = newDom.querySelector('[data-filter-results]').innerHTML;

        this.filters.updateFilters(newDom);
        this.mobileFilters.updateFilters(newDom);
      });
  }
}

// EXTERNAL MODULE: ./node_modules/just-debounce/index.js
var just_debounce = __webpack_require__(405);
var just_debounce_default = /*#__PURE__*/__webpack_require__.n(just_debounce);
;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/drawer-filters/default/drawer-filters.js


/**
 * @class
 * @classdesc This component handles opening the drawer filter menu (usually used on mobile).
 *
 * @extends Core.Component
 */
class DrawerFilters extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.drawerFiltersEl = el.querySelector('[data-drawer-filters]');
    this.closeButton = el.querySelector('[data-drawer-filters-close]');
    this.clearButton = el.querySelector('[data-drawer-filters-clear]');
    this.filterForm = el.querySelector('[data-filter-form]');
    this.filters = el.querySelector('[data-filter-disclosures]');
    this.emptyFilters = el.querySelector('[data-filters-empty]');
    this.summaryElements = this.filters.querySelectorAll('[data-filter-summary]');
    this.viewResultsButton = el.querySelector('[data-drawer-view-results] button');
    this.searchInput = el.querySelector('[data-search-input]');

    this.summaryClickEvents = {};
    this.contentCloseEvents = {};
    this.summaryAnimations = {};

    this.formChange = this._formChange.bind(this);
  }

  onMount() {
    this.drawerModal = Core.Components.getComponent('drawer-modal');

    if (!this.drawerModal) return;

    this.drawerFlyout = this.drawerModal.createFlyout(this.drawerFiltersEl);
  }

  onDismount() {
    super.onDismount();

    if (this.drawerFlyout) {
      this.drawerFlyout.then(drawerFlyout => drawerFlyout.destroy());
    }
  }

  /**
   * Creates a flyout by moving the content into a drawer and then opens the navigation drawer
   *
   * @param {HTMLElement} trigger The trigger that opened this drawer.
   */
  async open(trigger) {
    if (!this.drawerFlyout) return;

    const drawerFlyout = await this.drawerFlyout;

    // We only register the events once the flyout is opening for the first time, because when
    // we create the flyout, the element is moved and thus re-mounted. If we called this in
    // onMount or the constructor, the events would be created twice.
    this.events.register(this.filterForm, 'input', just_debounce_default()(e => this._formChange(e), 500));
    this.events.register(this.closeButton, 'click', () => this.drawerModal.closeFlyout(drawerFlyout));
    this.events.register(this.viewResultsButton, 'click', e => {
      e.preventDefault();
      this.drawerModal.closeFlyout(drawerFlyout);
    });
    this.events.register(window, 'keyup', e => { if (e.key === 'Escape') this.closeAllDisclosures(); });
    this.summaryElements.forEach(summaryElement => this._initSummary(summaryElement));

    this.drawerFiltersEl.dataset.ready = 'true';

    // Close all disclosures before opening again.
    this.closeAllDisclosures();
    this.drawerModal.openFlyout(drawerFlyout, trigger);
  }

  /**
   * Main entrypoint to update all of the components of the drawer filters with any changes
   * based on the newDom.
   *
   * @param {HTMLElement} newDom - The new DOM which should include a new version of the drawer
   * filters html.
   */
  updateFilters(newDom) {
    const newDrawerDom = newDom.querySelector('[data-drawer-filters]');

    this.clearButton.href = newDom.querySelector('[data-drawer-filters-clear]').href;
    this.viewResultsButton.innerHTML = newDom.querySelector('[data-drawer-view-results] button').innerHTML;

    this.emptyFilters.classList = newDrawerDom.querySelector('[data-filters-empty]').classList;

    this._updateDisclosures(newDrawerDom);
  }

  /**
   * Closes all disclosures that were opened within the flyout.
   */
  closeAllDisclosures() {
    this.summaryElements = this.filters.querySelectorAll('[data-filter-summary]');
    this.summaryElements.forEach(summaryElement => {
      const { parentElement } = summaryElement;
      const { key } = parentElement.dataset;
      if (this.summaryAnimations[key]) {
        this.summaryAnimations[key].animateTo('closed').then(() => {
          parentElement.open = false;
        });
      }
    });
  }

  /**
   * Triggered when a summary element is clicked and should open the content of the details
   * with another drawer.
   *
   * @param {Summary} summaryElement The summary element that has received a click event
   * @private
   */
  _initSummary(summaryElement) {
    const { parentElement } = summaryElement;
    const { key } = parentElement.dataset;
    const contentElement = summaryElement.nextElementSibling;
    const backButton = contentElement.querySelector('[data-filter-back-button]');

    this.summaryAnimations[key] = Core.Animations.transition({ el: contentElement, state: 'closed' });

    this.summaryClickEvents[key] = this.events.register(summaryElement, 'click', () => {
      this.summaryAnimations[key].animateTo('open').then(() => {
        Core.A11y.trapFocus(contentElement);
      });
    });

    this.contentCloseEvents[key] = this.events.register(backButton, 'click', async e => {
      if (!this.drawerFlyout) return;

      const drawerFlyout = await this.drawerFlyout;

      e.preventDefault();
      this.summaryAnimations[key]
        .animateTo('closed')
        .then(() => {
          parentElement.open = false;
          drawerFlyout.trapFocus();
          summaryElement.focus();
        });
    });
  }

  /**
   * Removes all of the actions and animations that are stored for the summary element click event.
   *
   * @param {Summary} summaryElement The element to be removed.
   * @private
   */
  _removeSummaryActions(summaryElement) {
    const { key } = summaryElement.parentElement.dataset;

    delete this.summaryAnimations[key];

    if (this.summaryClickEvents[key]) {
      this.events.unregister(this.summaryClickEvents[key]);
    }

    if (this.contentCloseEvents[key]) {
      this.events.unregister(this.contentCloseEvents[key]);
    }
  }

  /**
   * Triggered when one of the filters are updated in the form.
   * Dispatches an event called `filter:update` which passes along `searchParams` from the
   * filters form.
   *
   * @param {Event} e - The event sent by the form being updated.
   * @private
   */
  _formChange(e) {
    e.preventDefault();

    const currentTarget = e.target;

    const formData = new FormData(currentTarget.closest('form'));
    const searchParams = new URLSearchParams(formData).toString();

    // Fire off event to submit the new params to the parent section
    const updateEvent = new CustomEvent('filter:update', { detail: { searchParams } });
    this.el.dispatchEvent(updateEvent);
  }

  /**
   * Updates all of the filter disclosures with a newDom.
   * Will only update disclosures if focus is not currently within the disclosure so the user does
   * not lose focus.
   *
   * @param {HTMLElement} newDom - The new DOM which should include a new version of the faceted
   * filters html.
   * @private
   */
  _updateDisclosures(newDom) {
    const currentDisclosure = document.activeElement && document.activeElement.closest('[data-filter-disclosure]');
    const existingDisclosures = this.filters.querySelectorAll('[data-filter-disclosure]');
    const filterDisclosures = newDom.querySelectorAll('[data-filter-disclosure]');

    if (this.searchInput) {
      this.searchInput.value = newDom.querySelector('[data-search-input]').value;
    }

    // Remove any disclosures that don't exist anymore in the new Dom
    existingDisclosures.forEach(disclosure => {
      if (!newDom.querySelector(`[data-filter-disclosure][data-key="${disclosure.dataset.key}"]`)) {
        this._removeSummaryActions(disclosure.querySelector('[data-filter-summary]'));
        disclosure.remove();
      }
    });

    // Update the existing Dom with the updated and new disclosures from the new Dom
    filterDisclosures.forEach(disclosure => {
      const oldDisclosure = this.filterForm.querySelector(`[data-filter-disclosure][data-key="${disclosure.dataset.key}"]`);

      if (!oldDisclosure) {
        this.filters.appendChild(disclosure);
        this._initSummary(disclosure.querySelector('[data-filter-summary]'));
      } else {
        if (!currentDisclosure || disclosure.dataset.key !== currentDisclosure.dataset.key) {
          const filterContent = oldDisclosure.querySelector('[data-filter-form-items]');
          filterContent.innerHTML = disclosure.querySelector('[data-filter-form-items]').innerHTML;
        }

        const filterSummary = oldDisclosure.querySelector('[data-filter-summary]');
        filterSummary.innerHTML = disclosure.querySelector('[data-filter-summary]').innerHTML;

        const filterHeader = oldDisclosure.querySelector('[data-filter-heading]');
        filterHeader.innerHTML = disclosure.querySelector('[data-filter-heading]').innerHTML;

        const resetButton = oldDisclosure.querySelector('[data-filter-reset]');
        resetButton.href = disclosure.querySelector('[data-filter-reset]').href;
      }
    });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/filters-active-mobile/default/filters-active-mobile.js
/**
 * @class FilterActiveMobile
 * @classdesc This class handles the active filter buttons that are used for mobile filtering.
 *
 * @extends Core.Component
 */
class FiltersActiveMobile extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.activeFilterList = el.querySelector('[data-mobile-active-filter-list]');
  }

  /**
   * This will update the buttons based on the filters being updated asynchronously.
   *
   * @param {HTMLElement} newDom The new elements to update.
   */
  updateFilters(newDom) {
    this.el.classList = newDom.querySelector('[data-filters-active-mobile]').classList;
    this.activeFilterList.innerHTML = newDom.querySelector('[data-mobile-active-filter-list]').innerHTML;
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/filters-buttons-mobile/default/filters-buttons-mobile.js
/**
 * @class FilterButtonsMobile
 * @classdesc This class handles the buttons that are used for mobile filtering.
 *
 * @extends Core.Component
 */
class FiltersButtonsMobile extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.mobileFiltersButton = el.querySelector('[data-mobile-filters-button]');
  }

  onMount() {
    this.sortByButton = this.query('disclosure');

    if (this.mobileFiltersButton) {
      this.events.register(this.mobileFiltersButton, 'click', e => {
        e.stopPropagation();
        const openEvent = new CustomEvent('filter:open', { detail: { trigger: this.mobileFiltersButton } });
        this.el.dispatchEvent(openEvent);
      });
    }

    if (this.sortByButton) {
      this.events.register(this.sortByButton.el, 'input', () => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('sort_by', this.sortByButton.getValue());

        // Fire off event to submit the new params to the parent section
        const updateEvent = new CustomEvent('filter:update', { detail: { searchParams: searchParams.toString() } });
        this.el.dispatchEvent(updateEvent);
      });
    }
  }

  /**
   * This will update the buttons based on the filters being updated asynchronously.
   *
   * @param {HTMLElement} newDom The new elements to update.
   */
  updateFilters(newDom) {
    this.mobileFiltersButton.innerHTML = newDom.querySelector('[data-mobile-filters-button]').innerHTML;

    if (newDom.querySelector('[data-results-count]').dataset.resultsCount === '0') {
      this.el.classList.add('hidden');
    } else {
      this.el.classList.remove('hidden');
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/faceted-filters-mobile/default/faceted-filters-mobile.js
/**
 * @class FacetedFiltersMobile
 * @classdesc The faceted filters mobile component which is included on collection and search pages
 * to allow merchants to filter lists of products dynamically. This class allows filters to be
 * updated without refreshing the page.
 *
 * @extends Core.Component
 */
class FacetedFiltersMobile extends Core.Component {
  onMount() {
    this.filterButtons = this.query('filters-buttons-mobile');
    this.activeFilters = this.query('filters-active-mobile');
    this.drawerFilters = this.query('drawer-filters');

    if (this.filterButtons && this.drawerFilters) {
      this.events.register(this.filterButtons.el, 'filter:open', e => {
        const { trigger } = e.detail;
        this.drawerFilters.open(trigger);
      });

      this.events.register(this.drawerFilters.el, 'filter:update', e => {
        const updateEvent = new CustomEvent('filter:update', { detail: e.detail });
        this.el.dispatchEvent(updateEvent);
      });

      this.events.register(this.filterButtons.el, 'filter:update', e => {
        const updateEvent = new CustomEvent('filter:update', { detail: e.detail });
        this.el.dispatchEvent(updateEvent);
      });
    }
  }

  /**
   * Main entrypoint to update all of the components of the mobile filters with any changes
   * based on the newDom.
   *
   * @param {HTMLElement} newDom - The new DOM which should include a new version of the mobile
   * filters html.
   */
  updateFilters(newDom) {
    const newFilterDom = newDom.querySelector('[data-faceted-filters-mobile]');

    if (this.filterButtons) {
      this.filterButtons.updateFilters(newFilterDom);
      this.activeFilters.updateFilters(newFilterDom);
      this.drawerFilters.updateFilters(newFilterDom);
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/faceted-filters/default/faceted-filters.js


/**
 * @class FacetedFilters
 * @classdesc The faceted filters component which is included on collection and search pages to
 * allow merchants to filter lists of products dynamically. This class allows filters to be
 * updated without refreshing the page.
 *
 * @extends Core.Component
 */
class FacetedFilters extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.filterForm = el.querySelector('[data-filter-form]');
    this.searchInput = el.querySelector('[data-filter-search-input]');
    this.filters = el.querySelector('[data-filter-disclosures]');

    this.disclosures = el.querySelectorAll('[data-filter-disclosure]');
    this.sortBy = el.querySelector('[data-filters-sort]');
    this.resultCount = el.querySelector('[data-filter-result-count]');
    this.activeFilters = el.querySelector('[data-active-filters]');

    this.formChange = this._formChange.bind(this);

    this.events.register(this.filterForm, 'input', just_debounce_default()(e => this._formChange(e), 2000));
    this.events.register(window, 'keyup', e => { if (e.key === 'Escape') this._closeAllDisclosures(); });
    this.events.register(document, 'click', e => this._closeAllDisclosures(e));
    this.disclosures.forEach(disclosure => this._setupDisclosure(disclosure));
  }

  /**
   * Main entrypoint to update all of the components of the faceted filters with any changes
   * based on the newDom.
   *
   * @param {HTMLElement} newDom - The new DOM which should include a new version of the faceted
   * filters html.
   */
  updateFilters(newDom) {
    const newFilterDom = newDom.querySelector('[data-faceted-filters]');

    if (this.searchInput && document.activeElement !== this.searchInput.querySelector('input[type="search"]')) {
      this.searchInput.innerHTML = newFilterDom.querySelector('[data-filter-search-input]').innerHTML;
    }

    if (this.resultCount) {
      this.resultCount.innerHTML = newFilterDom.querySelector('[data-filter-result-count]').innerHTML;
    }

    if (this.activeFilters) {
      const newActiveFilters = newFilterDom.querySelector('[data-active-filters]');
      this.activeFilters.innerHTML = newActiveFilters.innerHTML;
      this.activeFilters.dataset.activeFiltersCount = newActiveFilters.dataset.activeFiltersCount;

      if (newActiveFilters.dataset.activeFiltersCount === '0') {
        this.activeFilters.classList.add('hidden');
      } else {
        this.activeFilters.classList.remove('hidden');
      }
    }

    this._updateDisclosures(newFilterDom);
  }

  /**
   * Triggered when one of the filters are updated in the form.
   * Dispatches an event called `filter:update` which passes along `searchParams` from the
   * filters form.
   *
   * @param {Event} e - The event sent by the form being updated.
   * @private
   */
  _formChange(e) {
    e.preventDefault();

    const currentTarget = e.target;

    const formData = new FormData(currentTarget.closest('form'));
    const searchParams = new URLSearchParams(formData).toString();

    // Fire off event to submit the new params to the parent section
    const updateEvent = new CustomEvent('filter:update', { detail: { searchParams } });
    this.el.dispatchEvent(updateEvent);
  }

  /**
   * Updates all of the filter disclosures with a newDom.
   * Will only update disclosures if focus is not currently within the disclosure so the user does
   * not lose focus.
   *
   * @param {HTMLElement} newDom - The new DOM which should include a new version of the faceted
   * filters html.
   * @private
   */
  _updateDisclosures(newDom) {
    const currentDisclosure = document.activeElement && document.activeElement.closest('[data-filter-disclosure]');
    const existingDisclosures = this.el.querySelectorAll('[data-filter-disclosure]');
    const filterDisclosures = newDom.querySelectorAll('[data-filter-disclosure]');

    // Remove any disclosures that don't exist anymore in the new Dom
    existingDisclosures.forEach(disclosure => {
      if (!newDom.querySelector(`[data-filter-disclosure][data-index="${disclosure.dataset.index}"]`)) {
        disclosure.remove();
      }
    });

    // Update the existing Dom with the updated and new disclosures from the new Dom
    filterDisclosures.forEach(disclosure => {
      const oldDisclosure = this.filterForm.querySelector(`[data-filter-disclosure][data-index="${disclosure.dataset.index}"]`);

      if (!oldDisclosure) {
        this.filters.appendChild(disclosure);
        this._setupDisclosure(disclosure);
      } else if (!currentDisclosure || disclosure.dataset.index !== currentDisclosure.dataset.index) {
        oldDisclosure.innerHTML = disclosure.innerHTML;
      } else {
        const filterSummary = oldDisclosure.querySelector('[data-filter-summary]');
        const filterHeader = oldDisclosure.querySelector('[data-filter-header]');

        filterSummary.innerHTML = disclosure.querySelector('[data-filter-summary]').innerHTML;
        filterHeader.innerHTML = disclosure.querySelector('[data-filter-header]').innerHTML;
      }
    });

    this.disclosures = this.el.querySelectorAll('[data-filter-disclosure]');

    // Update the sort by select box
    if (this.sortBy) {
      if (!document.activeElement || !document.activeElement.closest('[data-filters-sort]')) {
        const newSort = newDom.querySelector('[data-filters-sort]');
        if (newSort) {
          this.sortBy.innerHTML = newSort.innerHTML;
        }
      }
    }
  }

  /**
   * Sets up the events to handle on the disclosure.
   *
   * @param {HTMLElement} disclosure The disclosure to be set up
   * @private
   */
  _setupDisclosure(disclosure) {
    this.events.register(disclosure, 'focusout', e => {
      // Using e.relatedTarget works best here, but the label of any checkboxes within
      // the disclosures should have a tabindex="-1" to ensure the correct target is used
      // when clicked.
      if (!disclosure.contains(e.relatedTarget)) {
        disclosure.open = false;
      }
    });
  }

  /**
   * Closes all of the open disclosures. Will keep a disclosure open if the trigger's
   * target was inside it.
   * @param {Event} event The event that is triggering the close.
   * @private
   */
  _closeAllDisclosures(event) {
    this.disclosures.forEach(disclosure => {
      if (disclosure.open) {
        if (!event || event.target.closest('[data-filter-disclosure]') !== disclosure) {
          disclosure.open = false;
          disclosure.querySelector('summary').focus();
        }
      }
    });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/main-collection-grid/default/main-collection-grid.js
/**
 * @class MainCollection
 * @classdesc The canonical collection section component intended for the collection page.
 *
 * @extends Core.SectionComponent
 */
class MainCollectionGrid extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);

    this.productList = el.querySelector('[data-product-list]');

    this.events.register(window, 'popstate', e => this._onHistoryChange(e));
  }

  onMount() {
    this.filters = this.query('faceted-filters');
    this.mobileFilters = this.query('faceted-filters-mobile');

    if (this.filters) {
      this.events.register(this.filters.el, 'filter:update', e => {
        const { searchParams } = e.detail;

        this._updateSectionContent(searchParams);

        history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
      });
    }

    if (this.mobileFilters) {
      this.events.register(this.mobileFilters.el, 'filter:update', e => {
        const { searchParams } = e.detail;

        this._updateSectionContent(searchParams);

        history.pushState({ searchParams }, '', `${window.location.pathname}${searchParams && '?'.concat(searchParams)}`);
      });
    }
  }

  onDismount() {
    this.events.unregisterAll();
  }

  /**
   * This handles what happens when the history of the browser changes. This it triggered when the
   * back button is hit in the browser.
   *
   * @param {Event} e - The event sent by the browser changing its history
   * (usually using the back/forward buttons).
   * @private
   */
  _onHistoryChange(e) {
    this._updateSectionContent(e.state ? e.state.searchParams : '');
  }

  /**
   * This handles a call to update the section's content (including filters) when the filters in the
   * section are updated or history changes on the page.
   *
   * @param {String} searchParams - The URL params that are used to filter and sort the list of
   * products on the page.
   * @private
   */
  _updateSectionContent(searchParams) {
    const url = `${window.location.pathname}?section_id=${this.sectionId}&${searchParams}`;

    fetch(url)
      .then(response => response.text())
      .then(html => {
        const newDom = new DOMParser().parseFromString(html, 'text/html');

        this.productList.innerHTML = newDom.querySelector('[data-product-list]').innerHTML;

        this.filters.updateFilters(newDom);
        this.mobileFilters.updateFilters(newDom);
      });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/product-cross-sell-slider/default/product-cross-sell-slider.js
/**
 * @class ProductCrossSellSlider
 * @classdesc This component fetches content for the cross-sell feature
 *
 * @extends Core.Component
 */

class ProductCrossSellSlider extends Core.Component {
  constructor(el, context) {
    super(el, context);
  }

  onMount() {
    let sectionId;

    const cart = this.closest('main-cart');

    if (cart) {
      sectionId = cart.sectionId;
    }

    const productId = this.data.product_id;

    if (sectionId && productId) {
      this
        .fetchRecommendations(sectionId, productId);
    }
  }

  /**
   * Fetches section content via the Shopify recommendations endpoint
   * @param {string} sectionId - the ID of the section to fetch
   * @param {string} productId - the ID of the product on which to base recommendations
   */
  fetchRecommendations(sectionId, productId) {
    const url = `${this.data.recommendations_route}?section_id=${sectionId}&product_id=${productId}&limit=4`;
    return fetch(url)
      .then(response => response.text())
      .then(text => {
        const html = document.createElement('div');
        html.innerHTML = text;

        this.el.querySelector('[data-cross-sell-content]').innerHTML = html.querySelector('[data-cross-sell-content]').innerHTML;
      });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/main-cart/default/main-cart.js


/**
 * @class MainCart
 * @classdesc The cart section is used to handle the cart page functionality.
 *
 * @extends Core.SectionComponent
 */
class MainCart extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);

    this.headerCartCount = el.querySelector('[data-header-cart-count]');
    this.cartPage = el.querySelector('[data-cart-page]');
    this.cartErrors = el.querySelector('[data-cart-errors]');
    this.cartForm = el.querySelector('[data-cart-form]');
    this.cartContents = el.querySelector('[data-cart-contents]');
    this.cartItems = el.querySelector('[data-cart-items]');
    this.cartItemErrors = el.querySelectorAll('[data-cart-item-error]');
    this.cartTotal = el.querySelector('[data-cart-total]');


    if (!this.cartForm) return;

    this.cartItemCount = parseInt(this.cartForm.dataset.cartCount, 10);
    this.cartId = this.cartContents.dataset.id;
  }

  /**
   * On mount, we create the event listeners for the cart section.
   */
  onMount() {
    if (!this.cartForm) return;
    this._createListeners();
  }

  /**
   * Creates event listeners used to detect changes to line item quantity changes
   *
   * @private
   */
  _createListeners() {
    const cartRows = this.cartForm.querySelectorAll('[data-cart-row]');

    // Bind quantity selectors
    cartRows.forEach(row => {
      const rowId = row.id;
      const rowKey = row.dataset.cartItemKey;
      const quantitySelector = this.query('quantity-selector', rowKey);
      const buttonRemoveItem = row.querySelector('[data-remove]');


      if (quantitySelector) {
        this.events.register(quantitySelector.el, 'quantity:update', e => {
          if (e.detail.quantity === 0) {
            this._removeRow({ id: rowId, key: rowKey, row: row, event: e });
          } else {
            this._updateCart(rowId, rowKey, e);
          }
        });
      }

      if (buttonRemoveItem) {
        this.events.register(buttonRemoveItem, 'click', e => {
          e.preventDefault();
          this._removeRow({ id: rowId, key: rowKey, row: row, event: 0 });
        });
      }
    });

    this.events.register(document, 'cart:update', e => {
      if (this.headerCartCount) {
        this.headerCartCount.innerHTML = e.detail.count;
      }
    });

    const cartNotes = this.query('input-textarea');

    if (cartNotes) {
      const notesTextArea = cartNotes.el.querySelector('textarea');
      this.events.register(notesTextArea, 'change', just_debounce_default()(e => this._updateNote(e), 500));
    }
  }

  /**
   * Updates the cart with the new quantity and refreshes the innerHTML content.
   *
   * @param {number} id - The id of the line item to update.
   * @param {number} rowKey- The key of the line item to update.
   * @param {object} e - The event object triggered.
   * @private
   */
  _updateCart(rowId, rowKey, e) {
    let quantity;
    if (e.detail !== undefined) {
      ({ quantity } = e.detail);
    } else {
      quantity = 0;
    }

    const body = JSON.stringify({
      line: rowId,
      quantity,
      sections: this.cartPage.dataset.id,
      sections_url: window.location.pathname,
    });

    fetch(window.PXUTheme.routes.cart_change_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      ...{ body },
    })
      .then(response => response.text())
      .then(state => {
        const parsedState = JSON.parse(state);
        const newDom = new DOMParser().parseFromString(parsedState.sections[this.sectionId], 'text/html');

        // Update the cart page content
        this._clearErrors();

        if (parsedState.item_count > 0) {
          if (this.cartItems) {
            this.cartItems.innerHTML = newDom.querySelector('[data-cart-items]').innerHTML;
          }

          if (this.cartTotal) {
            this.cartTotal.innerHTML = newDom.querySelector('[data-cart-total]').innerHTML;
          }

          const recommendationsSlider = this.query('product-cross-sell-slider');

          if (recommendationsSlider) {
            const productId = parsedState.items[0].product_id;
            const sectionId = this.sectionId;

            recommendationsSlider.fetchRecommendations(sectionId, productId);
          }
        } else if (this.cartPage) {
          this.cartPage.innerHTML = newDom.querySelector('[data-cart-page]').innerHTML;
        }


        // Return data for inventory handling
        return { key: rowKey, count: parsedState.item_count };
      }).then(data => {
        const targetSelector = this.query('quantity-selector', rowKey);
        const idTarget = this.cartForm.querySelector(`[data-cart-row="${rowId}"]`);

        if (targetSelector && e.detail !== undefined) {
          // Set focus back on the original element
          targetSelector.focus(e.detail.actionName);
        } else if (idTarget) {
          // If original key is gone from the dom lets focus on the new one in it's row
          const targetInput = idTarget.querySelector('[data-quantity-input]');
          targetInput.focus();
        } else {
          // If the original key and row is gone from the dom lets focus on the next one above it
          for (let i = rowId; i > 0; i--) {
            const target = this.cartForm.querySelector(`[data-cart-row="${i}"]`);

            if (target) {
              const targetInput = target.querySelector('[data-quantity-input]');
              targetInput.focus();

              break;
            }
          }
        }

        this._handleInventory(data.key, data.count);
        this._removeListeners();
        this._createListeners();
      })
      .catch(error => {
        this._handleError(error);
      });
  }

  /**
   * Handles error messaging for cart quantity changes.
   *
   * @param {number} rowKey - The id of the line item to update.
   * @param {number} itemCount - The current quantity of items in the cart
   * @private
   */
  _handleInventory(rowKey, itemCount) {
    if (this.cartItemCount === itemCount) {
      const targetSelector = this.query('quantity-selector', rowKey);
      const inputValue = targetSelector.getValue();

      document.querySelector(`[data-cart-item-error="${rowKey}"]`).innerHTML = this.data.locales.quantityError.replace('{{ quantity }}', inputValue);
    }

    this.cartItemCount = itemCount;

    const updateEvent = new CustomEvent('cart:update', { detail: { count: this.cartItemCount }, bubbles: true });
    this.el.dispatchEvent(updateEvent);
  }

  /**
   * Handles general error messaging.
   *
   * @private
   */
  _handleError(error) {
    this.cartErrors.style.display = 'block';
    this.cartErrors.innerHTML = this.data.locales.error;
    this._removeListeners();
    this._createListeners();

    console.error(error);
  }

  /**
   * Clear error messaging from the cart section.
   *
   * @private
   */
  _clearErrors() {
    this.cartErrors.style.display = 'none';
    this.cartErrors.innerHTML = '';
    this.cartItemErrors.forEach(error => {
      error.innerHTML = '';
    });
  }

  /**
   * Animates the removal of items from the cart
   *
   * @param {object} data - The data object containing the id, key, and row of the item to remove.
   * @private
   */
  _removeRow(data) {
    const { id, key, row, event } = data;
    const animateRemoval = Core.Animations.transition({ el: row, state: 'active' });
    row.style.setProperty('--open-height', `${row.scrollHeight}px`);
    animateRemoval.animateTo('fade')
      .then(() => {
        animateRemoval.animateTo('remove')
          .then(() => {
            row.remove();
            this._updateCart(id, key, event);
          });
      });
  }

  _updateNote(e) {
    const body = JSON.stringify({ note: e.target.value});
    fetch(window.PXUTheme.routes.cart_update_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      ...{ body },
    });
  }

  /**
   * Used to unregister all the event handles initialized on the cart section
   *
   * @private
   */
  _removeListeners() {
    this.events.unregisterAll();
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/main-blog/default/main-blog.js

/**
 * @class Blog
 * @classdesc The blog class handles the blog page functionality
 * @extends Core.SectionComponent
 */
class Blog extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);

    this.blogTagsSelect = el.querySelector('[data-blog-tags]');

    this._filterBlog = this._filterBlog.bind(this);

    if (this.blogTagsSelect) {
      this.events.register(this.blogTagsSelect, 'change', this._filterBlog);
    }
  }

  /**
   * Updates the current view according to the selected blog tag
   *
   * @param {Event} e - A <select> 'change' event object
   * @private
   */
  _filterBlog(e) {
    const {
      target: {
        dataset: {
          blogUrl,
        },
      },
    } = e;

    window.location.href = this.blogTagsSelect.value === 'all' || this.blogTagsSelect.value === ''
      ? blogUrl
      : `${blogUrl}/tagged/${this.blogTagsSelect.value}`;
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/image-banner/two-image/image-banner.js
/**
 * @class ImageBanner
 * @classdesc Primarily responsible for handling situations where the section content
 * is larger than the defined setting value
 * @extends Core.SectionComponent
 */
class ImageBanner extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);
    this.contentEl = el.querySelector('[data-image-banner-content]');
    this.wrapper = el.querySelector('[data-image-banner-wrapper]');
    this.imageContainers = el.querySelectorAll('[data-image-banner-image]');
    this.desktopHeight = this.data.desktopHeight;
    this._resizeFunc = this._adjustSectionHeight.bind(this);

    Core.Breakpoints.onChange(this._resizeFunc);
  }

  onMount() {
    this._adjustSectionHeight();
  }

  onDismount() {
    super.onDismount();
    Core.Breakpoints.offChange(this._resizeFunc);
  }

  /**
   * Sets CSS Custom Properties based on content height.
   * When desktop height is set to 'adapt to height of first image', the height of the image
   * is used to determine whether the content will fit inside without overflow.
   * Otherwise, the pixel value of the setting is used as the comparison.
   */
  _adjustSectionHeight() {
    if (!this.contentEl) return;

    const visibleImageContainer = [...this.imageContainers]
      .filter(img => img.offsetParent !== null);
    const visibleImage = visibleImageContainer[0].querySelector('img') !== null
      ? visibleImageContainer[0].querySelector('img')
      : visibleImageContainer[0].querySelector('svg');

    const { offsetHeight: imageHeight } = visibleImage;
    const { innerHeight: mobileHeight } = window;
    const { paddingTop: containerPaddingTop } = getComputedStyle(this.contentEl);
    const paddingTopInt = Number(containerPaddingTop.replace('px', ''));
    const totalContainerHeight = [...this.contentEl.children]
      .reduce((acc, curr) => acc + curr.offsetHeight, paddingTopInt * 2);

    const valueToCompare = this.desktopHeight === 'adapt'
      ? imageHeight
      : Number(this.desktopHeight);

    if (Core.Breakpoints.min('S') && valueToCompare < totalContainerHeight) {
      this.wrapper.style.setProperty('--desktop-height', `${totalContainerHeight}px`);
    }

    if (mobileHeight < totalContainerHeight) {
      this.wrapper.style.setProperty('--mobile-height', `${totalContainerHeight}px`);
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/navigation-drawer/default/navigation-drawer.js
/**
 * @class NavigationDrawer
 * @classdesc Handles the functionality of the navigation drawer
 *
 * @extends Core.Component
 */
class NavigationDrawer extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.headerWrapper = this.el.closest('.section-header');
    this.parentSection = this.el.closest('section');
    this.header = this.headerWrapper.querySelector('[data-header]');
    this.navigation = this.el.querySelector('[data-nav-drawer-navigation]');
    this.tier1Nav = this.navigation.querySelector('[data-navigation-tier-1]');
    this.summaryElements = this.navigation.querySelectorAll('[data-nav-drawer-summary]');

    this.isOpen = false;

    this.summaryAnimations = {};
    this.focusInCloseEvents = {};
    this.focusInStopEvents = {};

    this.openAnimation = Core.Animations.transition({ el: this.el, state: 'closed' });

    this.summaryElements.forEach(summaryElement => this._initSummary(summaryElement));
  }

  onMount() {
    this.siteOverlay = Core.Components.getComponent('site-overlay');
  }

  /**
   * Opens the navigation drawer
   */
  open() {
    if (this.siteOverlay) this.siteOverlay.show();

    const style = getComputedStyle(this.el);
    const announcementHeight = style.getPropertyValue('--announcement-height');
    const headerRect = this.header.getBoundingClientRect();

    if (headerRect.bottom > 0) {
      if (announcementHeight) {
        window.scrollTo({ top: announcementHeight, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    Core.Utils.scrollLock(this.el, this.navigation);

    this.openAnimation.animateTo('open', {
      onStart: () => {
        const { height } = this.el.getBoundingClientRect();
        this.el.style.setProperty('--mobile-nav-height', `${height}px`);
        this.el.dataset.heightSet = true;

        if (this.headerWrapper) {
          this.headerWrapper.dataset.mobileNavOpen = true;
        }
      },
    }).then(() => {
      this.el.style.setProperty('--mobile-nav-height', 'auto');
      this.el.dataset.heightSet = false;
      this.navigation.style.setProperty('--navigation-height', `${this.tier1Nav.scrollHeight}px`);

      const { innerHeight } = window;
      this.el.style.setProperty('--window-height', `${innerHeight}px`);

      this.el.querySelector('[data-nav-drawer-summary], [data-nav-drawer-link]').focus();
    });

    this.addressBarEvent = this.events.register(window, 'resize', () => {
      const { innerHeight } = window;
      this.el.style.setProperty('--window-height', `${innerHeight}px`);
    });
  }

  /**
   * Closes the navigation drawer
   */
  close() {
    Core.Utils.scrollUnlock(this.el);

    if (this.closing) return;

    this.closing = true;

    this.openAnimation.animateTo('closed', {
      onStart: () => {
        const { height } = this.el.getBoundingClientRect();
        this.el.style.setProperty('--mobile-nav-height', `${height}px`);
        this.el.dataset.heightSet = true;

        this.navigation.style.setProperty('--navigation-height', `${this.tier1Nav.scrollHeight}px`);
      },
    }).then(() => {
      this.el.dataset.heightSet = false;

      if (this.headerWrapper) {
        this.headerWrapper.dataset.mobileNavOpen = false;
      }

      this._closeAllSummaries();

      this.closing = false;
      this.events.unregister(this.addressBarEvent);
    });

    if (this.siteOverlay) this.siteOverlay.hide();
  }

  /**
   * Closes all open submenus
   * @private
   */
  _closeAllSummaries() {
    this.summaryElements.forEach(summaryElement => {
      const { parentElement } = summaryElement;
      const { index } = summaryElement.dataset;

      this.summaryAnimations[index].animateTo('closed');

      parentElement.open = false;
      summaryElement.setAttribute('aria-expanded', 'false');

      if (this.focusInCloseEvents[index]) {
        this.events.unregister(this.focusInCloseEvents[index]);
      }

      if (this.focusInStopEvents[index]) {
        this.events.unregister(this.focusInStopEvents[index]);
      }
    });
  }

  /**
   * Triggered when a summary element is clicked and should open the content of the details
   * with another drawer.
   *
   * @param {Summary} summaryElement The summary element that has received a click event
   * @private
   */
  _initSummary(summaryElement) {
    const { index } = summaryElement.dataset;
    const contentElement = summaryElement.nextElementSibling;
    const backButton = contentElement.querySelector('[data-nav-drawer-back-button]');

    this.summaryAnimations[index] = Core.Animations.transition({ el: contentElement, state: 'closed' });

    this.events.register(summaryElement, 'click', () => {
      this._openSummary(summaryElement);
    });

    this.events.register(backButton, 'click', e => {
      e.preventDefault();
      this._closeSummary(summaryElement);
    });
  }

  /**
   * Opens the submenu passed in (summary element)
   * @param {HTMLElement} summaryElement
   * @private
   */
  _openSummary(summaryElement) {
    const { index } = summaryElement.dataset;
    const contentElement = summaryElement.nextElementSibling;
    const parentPane = summaryElement.closest('[data-navigation-pane]');
    const backButton = contentElement.querySelector('[data-nav-drawer-back-button]');

    this.summaryAnimations[index].animateTo('open', {
      onStart: () => {
        const navHeight = contentElement.getBoundingClientRect().height;
        this.navigation.style.setProperty('--navigation-height', `${navHeight}px`);

        // Scroll to top of menu to avoid jump when we focus on the back link after animating.
        this.el.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      },
    }).then(() => {
      summaryElement.setAttribute('aria-expanded', 'true');
      backButton.focus();
    });

    // A11y: Add a focusin event for the parent pane, if focus enters this parent pane, then
    // we want to close the summary that is opening.
    this.focusInCloseEvents[index] = this.events.register(parentPane, 'focusin', e => {
      e.stopPropagation();
      this._closeSummary(summaryElement);
    });

    // A11y: When focusing within this pane, we don't want to close the pane, the focusin
    // event will fire anywhere else in the mobile nav, and will close this summary otherwise.
    this.focusInStopEvents[index] = this.events.register(contentElement, 'focusin', e => e.stopPropagation());
  }

  /**
   * Closes the submenu passed in (summary element
   * @param {HTMLElement} summaryElement
   * @private
   */
  _closeSummary(summaryElement) {
    const { parentElement } = summaryElement;
    const { index } = summaryElement.dataset;
    const parentPane = summaryElement.closest('[data-navigation-pane]');

    this.summaryAnimations[index].animateTo('closed', {
      onStart: () => {
        this.navigation.style.setProperty('--navigation-height', `${parentPane.scrollHeight}px`);
      },
    }).then(() => {
      parentElement.open = false;
      summaryElement.setAttribute('aria-expanded', 'false');

      // A11y: Remove the focusin events for this element
      if (this.focusInCloseEvents[index]) {
        this.events.unregister(this.focusInCloseEvents[index]);
      }

      if (this.focusInStopEvents[index]) {
        this.events.unregister(this.focusInStopEvents[index]);
      }

      summaryElement.focus();
    });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/live-search/default/live-search.js
class LiveSearch extends Core.Component {
  constructor(el, context) {
    super(el, context);
    this.cachedResults = {};
    this.input = el.querySelector('[data-live-search-query-input]');
    this.liveSearchResultsContainer = el.querySelector('[data-live-search-results-container]');
    this.liveSearchResults = el.querySelector('[data-live-search-results]');
    const form = el.querySelector('[data-live-search-form]');
    this.loadingText = this.data.loading_text;

    this.animation = Core.Animations.transition({ el: this.liveSearchResultsContainer, state: 'closed' });
    this.isOpen = false;

    this.events.register(form, 'submit', e => this._onFormSubmit(e));
    this.events.register(this.input, 'input', e => this._onChange(e));
    this.events.register(this.input, 'focus', e => this._onFocus(e));
    this.events.register(el, 'keyup', e => this._onKeyup(e));
    this.events.register(el, 'keydown', e => this._onKeydown(e));
  }

  onMount() {
    this.siteOverlay = Core.Components.getComponent('site-overlay');
  }

  focus() {
    this.input.focus();
  }

  close() {
    return this._close();
  }

  _getQuery() {
    return this.input.value.trim();
  }

  _onChange() {
    const searchTerm = this._getQuery();

    if (!searchTerm.length) {
      this._close(true);
      return;
    }

    this._getSearchResults(searchTerm);
  }

  _onFormSubmit(event) {
    // Submit buttons should always submit form
    if (event.submitter && event.submitter.type === 'submit') return;

    if (!this._getQuery().length || this.el.querySelector('[aria-selected="true"] a')) event.preventDefault();
  }

  _onFocus() {
    const searchTerm = this._getQuery();

    if (!searchTerm.length) return;

    if (this.el.getAttribute('results') === 'true') {
      this._open();
    } else {
      this._getSearchResults(searchTerm);
    }
  }

  _onKeyup(event) {
    if (!this._getQuery().length) this._close(true);
    event.preventDefault();

    switch (event.code) {
      case 'ArrowUp':
        this._switchOption('up');
        break;
      case 'ArrowDown':
        this._switchOption('down');
        break;
      case 'Enter':
        this._selectOption();
        break;
      default:
        break;
    }
  }

  _onKeydown(event) {
    // Prevent the cursor from moving in the input when using the up and down arrow keys
    if (
      event.code === 'ArrowUp'
      || event.code === 'ArrowDown'
    ) {
      event.preventDefault();
    }
  }

  _switchOption(direction) {
    if (!this.isOpen) return;

    const moveUp = direction === 'up';
    const selectedElement = this.el.querySelector('[aria-selected="true"]');
    const allElements = this.el.querySelectorAll('[data-predictive-search-result]');
    let activeElement = this.el.querySelector('[data-predictive-search-result]');

    if (moveUp && !selectedElement) return;

    this.statusElement.textContent = '';
    const selectedIndex = Array.prototype.indexOf.call(allElements, selectedElement);

    if (!moveUp && selectedElement) {
      activeElement = allElements[selectedIndex + 1] || allElements[0];
    } else if (moveUp) {
      activeElement = allElements[selectedIndex - 1] || allElements[allElements.length - 1];
    }

    if (activeElement === selectedElement) return;

    activeElement.setAttribute('aria-selected', true);
    activeElement.focus();

    if (selectedElement) selectedElement.setAttribute('aria-selected', false);

    this._setLiveRegionText(activeElement.innerText);
  }

  _selectOption() {
    const actionSelectors = [
      '[data-predictive-search-result-action]',
      'a',
      'button',
    ];

    const selectedAction = actionSelectors.reduce((selected, actionSelector) => {
      if (selected) return selected;

      return this.el.querySelector(`[aria-selected="true"] ${actionSelector}`);
    }, null);

    if (selectedAction) selectedAction.click();
  }

  _getSearchResults(searchTerm) {
    const queryKey = searchTerm.replace(' ', '-').toLowerCase();
    this._setLiveRegionLoadingState();

    if (this.cachedResults[queryKey]) {
      this._renderSearchResults(this.cachedResults[queryKey]);
      return;
    }

    fetch(`${window.PXUTheme.routes.predictive_search_url}?q=${encodeURIComponent(searchTerm)}&section_id=predictive-search`)
      .then(response => {
        if (!response.ok) {
          const error = new Error(response.status);
          this._close();
          throw error;
        }

        return response.text();
      })
      .then(text => {
        const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
        this.cachedResults[queryKey] = resultsMarkup;
        this._renderSearchResults(resultsMarkup);
      })
      .catch(error => {
        this._close();
        throw error;
      });
  }

  _setLiveRegionLoadingState() {
    this.statusElement = this.statusElement || this.el.querySelector('[data-live-search-status]');
    this._setLiveRegionText(this.loadingText);
    this.el.setAttribute('loading', true);
  }

  _setLiveRegionText(statusText) {
    this.statusElement.setAttribute('aria-hidden', 'false');
    this.statusElement.textContent = statusText;

    setTimeout(() => {
      this.statusElement.setAttribute('aria-hidden', 'true');
    }, 1000);
  }

  _renderSearchResults(resultsMarkup) {
    this.liveSearchResults.innerHTML = resultsMarkup;
    this.el.setAttribute('results', true);

    const predictiveSearchResults = this.el.querySelector('[data-predictive-search-results]');
    const predictiveSearchResultsMultiColumn = predictiveSearchResults.classList.contains('predictive-search__results--multi-column');

    if (predictiveSearchResults.classList.contains('predictive-search__results--multi-column')) {
      this.el.classList.remove('live-search--single-column');
      this.el.classList.add('live-search--multi-column');
    } else {
      this.el.classList.remove('live-search--multi-column');
      this.el.classList.add('live-search--single-column');
    }

    this._setLiveRegionResults();
    this._open();
  }

  _setLiveRegionResults() {
    this.el.removeAttribute('loading');
    this._setLiveRegionText(this.el.querySelector('[data-predictive-search-live-region-count-value]').textContent);
  }

  _open() {
    if (this.isOpen) return;
    this.isOpen = true;

    Core.Utils.scrollLock(this.liveSearchResults, this.liveSearchResults, false);

    this.animation.animateTo('open')
      .then(() => {
        if (this.siteOverlay) this.siteOverlay.show({ belowHeader: true });
        this.input.setAttribute('aria-expanded', true);
      });
  }

  _close(clearSearchTerm = false) {
    if (clearSearchTerm) {
      this.input.value = '';

      this.el.removeAttribute('results');
    }


    Core.Utils.scrollUnlock(this.liveSearchResults);

    return this.animation.animateTo('closed')
      .then(() => {
        this.isOpen = false;
        const selected = this.el.querySelector('[aria-selected="true"]');
        if (selected) selected.setAttribute('aria-selected', false);

        this.input.setAttribute('aria-activedescendant', '');
        this.input.setAttribute('aria-expanded', false);
      });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/blocks/block-meganav/default/block-meganav.js
/**
 * @class BlockMeganav
 * @classdesc BlockMeganav component interacts with editor events and dispatches events for
 * handling by parent navigation
 *
 * @extends Core.BlockComponent
 */
class BlockMeganav extends Core.BlockComponent {
  onSelect() {
    const selectEvent = new CustomEvent('meganav:select', { bubbles: true });
    this.el.dispatchEvent(selectEvent);
  }

  onDeselect() {
    const deselectEvent = new CustomEvent('meganav:deselect', { bubbles: true });
    this.el.dispatchEvent(deselectEvent);
  }
}

// EXTERNAL MODULE: ./node_modules/@pixelunion/events/dist/EventHandler.js
var EventHandler = __webpack_require__(766);
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
(/* unused pure expression or super */ null && (function () {
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
}()));

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



;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/navigation-desktop/default/scripts/navigation-desktop-parent.js


 // eslint-disable-line import/no-cycle

/**
 * @class NavigationDesktopParent
 * @classdesc NavigationDesktopParent controls the functionality of tier 2 menus
 */
class NavigationDesktopParent {
  constructor(options) {
    this.menuItem = options.menuItem;
    this.detailsItem = options.menuItem.querySelector('[data-nav-desktop-details]');
    this.parentMenu = options.parentMenu;
    this._locked = options.locked || (() => false);

    this.menuLink = this.detailsItem.querySelector('[data-nav-desktop-link]');
    this.submenuEl = this.menuItem.querySelector('[data-nav-desktop-submenu]');
    this.isMeganav = 'navDesktopMeganav' in this.submenuEl.dataset;

    this._isOpen = false;
    this.submenu = null;

    this.events = new EventHandler/* default */.Z();

    this._open = this._open.bind(this);
    this._close = this._close.bind(this);
    this.close = this.close.bind(this);

    // When a user hits the escape key all of the menus should close and the keyboard focus should return
    // to the parent link. This will bubble up to the top parent menu.
    this.closeEsc = e => {
      if (e.key === 'Escape') {
        this.menuLink.focus();
        this._close();
      }
    };

    // When the mouse leaves the open menu, we don't want to close it right away. Setting a delay on close
    // allows situations where you might go to another parent menu but your mouse would drag slightly outside
    // of the open menu, causing you to have to go back and open the menu again. This improves accessibility
    // as well as general usability.
    this.closeTimer = null;
    this.mouseover = () => {
      clearTimeout(this.closeTimer);
      this._open();
    };

    this.mouseout = () => {
      this.closeTimer = setTimeout(this.close, 400);
    };

    this.click = e => {
      e.stopPropagation();
      // If the menu is already open, we want to continue to the link in the <a> tag.
      // For mouse hover, this is pretty straightforward, but with keyboard and touch navigation
      // you will have to touch or trigger that link a second time. This is maybe not the best for
      // accessibility, but it's a good compromise for now.

      const clickedParent = e.target.closest('[data-nav-desktop-link]');

      if (clickedParent && clickedParent.dataset.href) {
        // We only prevent the click through if the menu wasn't already open.
        e.preventDefault();

        if (this._isOpen) {
          window.location = clickedParent.dataset.href;
          return;
        }
      }

      // If the submenu isn't open, open it
      this._open();
    };

    // During keyboard navigation, when you focus onto the parent menuItem, this will close the other
    // menu items that were previously open. This usually happens when you were navigating within
    // a submenu and then tab out of it to the next menu item at a lower tier.
    this.focusin = e => {
      e.stopPropagation();
      this.parentMenu.closeSiblings(this);
    };

    // Set up animation event
    this.animation = transition({ el: this.submenuEl, state: 'closed' });

    this.events.register(this.menuItem, 'mouseover', () => this.mouseover());
    this.events.register(this.menuItem, 'mouseout', () => this.mouseout());
    this.events.register(this.menuItem, 'click', e => this.click(e));
    this.events.register(this.menuItem, 'touchend', e => this.click(e));
    this.events.register(this.menuItem, 'focusin', e => this.focusin(e));

    // If the user clicks, taps, or their keyboard focus reaches outside of the menu
    // we should close this menu.
    this.events.register(document.body, 'click', () => this._close());
    this.events.register(document.body, 'focusin', () => this._close());
  }

  /**
   * Close the dropdown menu immediately
   *
   */
  forceClose() {
    this._close();
  }

  /**
   * Close the dropdown menu
   *
   */
  close() {
    this._close();
  }

  /**
   * Open the dropdown menu immediately
   */
  forceOpen() {
    this._open(true);
  }

  /**
   * Open the dropdown menu
   */
  open() {
    this._open();
  }

  /**
   * Check to see if dropdown is offscreen and apply a class so it can be styled differently.
   */
  _setAlternateDrop() {
    if (this.isMeganav) return;

    const menuBounds = this.submenuEl.getBoundingClientRect();
    if (menuBounds.right > document.documentElement.clientWidth) {
      this.submenuEl.classList.add('alternate-drop');
    }
    if (menuBounds.left < 0) {
      this.submenuEl.classList.add('alternate-drop-left');
    }
  }

  /**
   * Remove any class applied to prevent offscreen menus
   */
  _removeAlternateDrop() {
    this.submenuEl.classList.remove('alternate-drop');
  }

  /**
   * Opens the dropdown menu
   *
   * @private
   */
  _open(force = false) {
    if (this._isOpen || this._locked()) return;

    this._isOpen = true;
    this.parentMenu.closeSiblings(this);

    this.closeEscEvent = this.events.register(window, 'keyup', e => this.closeEsc(e));

    if (!this.submenu) {
      this.submenu = new NavigationDesktopMenu({ navList: this.submenuEl });
    }

    this._removeAlternateDrop();

    this.animation.animateTo('open', {
      onStart: ({ el }) => {
        const { scrollHeight } = el;

        if (!this._heightSet) {
          el.style.setProperty('--open-height', `${scrollHeight}px`);
          this._heightSet = true;
        }

        this._setAlternateDrop();

        this.detailsItem.setAttribute('open', 'open');
      },
      force,
    }).then(() => {
      this.submenuEl.dataset.opened = 'true';
    });

    this.menuLink.setAttribute('aria-expanded', true);
    this.detailsItem.setAttribute('open', 'open');
  }

  /**
   * Closes the dropdown menu
   *
   * @private
   */
  _close() {
    if (!this._isOpen || this._locked()) return;

    if (this.submenu) {
      this.submenu.unload();
      this.submenu = null;
    }

    this._isOpen = false;

    this.events.unregister(this.closeEscEvent);

    this.animation.animateTo('closed', {
      onStart: ({ el }) => {
        el.dataset.opened = 'false';
      },
    }).then(() => {
      this._removeAlternateDrop();
      this.menuLink.setAttribute('aria-expanded', false);
      this.detailsItem.removeAttribute('open');
    });
  }

  /**
   * Unbinds all events
   *
   */
  unload() {
    this.forceClose();
    this.events.unregisterAll();

    if (this.closeEscEvent) {
      this.events.unregister(this.closeEscEvent);
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/navigation-desktop/default/scripts/navigation-desktop-menu.js

 // eslint-disable-line import/no-cycle

/**
 * @class NavigationDesktopMenu
 * @classdesc NavigationDesktopMenu controls the overall menu functionality and initializes Tier 2 menus
 */
class NavigationDesktopMenu {
  constructor(options) {
    this.navList = options.navList;
    this.menuItems = this.navList.children;

    // NavigationDesktopParent for meganav, if any, that is selected for editing in the TE.
    this._selectedBlock = null;

    this.parents = [];

    this.events = new EventHandler/* default */.Z();

    for (let i = 0; i < this.menuItems.length; i++) {
      const menuItem = this.menuItems[i];
      if (menuItem.dataset.navDesktopParent !== undefined) {
        this.parents.push(
          new NavigationDesktopParent({
            menuItem,
            parentMenu: this,
            locked: () => this._selectedBlock !== null,
          }),
        );
      } else {
        // If the keyboard navigation moves to another menuItem, we should close any
        // other existing menus that are open.
        this.events.register(menuItem, 'focusin', () => this.closeAllMenus());
      }
    }
  }

  onBlockSelect(block) {
    const meganavParent = this.parents.find(parent => parent.menuItem.contains(block));

    if (!meganavParent) return;

    meganavParent.forceOpen();
    this._selectedBlock = meganavParent;
  }

  onBlockDeselect() {
    this._selectedBlock = null;
    this.closeAllMenus();
  }

  /**
   * This function will close all menus that are not the current menu.
   * This is mostly used by the HeaderNavParent class.
   *
   * @param { Object } current - The current menuItem
   */
  closeSiblings(current) {
    this.parents.forEach(parent => {
      if (parent !== current) {
        parent.close();
      }
    });
  }

  /**
   * This function will close all menus
   *
   */
  closeAllMenus() {
    this.parents.forEach(parent => parent.close());
  }

  /**
   * Unbinds all events
   *
   */
  unload() {
    this.parents.forEach(parent => { parent.unload(); });
    this.events.unregisterAll();
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/navigation-desktop/default/navigation-desktop.js


/**
 * @class NavigationDesktop
 * @classdesc Header navigation component is used to display menus on the header and set up their functionality
 *
 * @extends Core.Component
 */
class NavigationDesktop extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.navTier1 = el.querySelector('[data-nav-desktop-tier-1]');

    this.events.register(el, 'meganav:select', e => {
      if (!this.headerNavMenu) return;
      if (!Core.Breakpoints.min('M')) return;

      this.headerNavMenu.onBlockSelect(e.target);
    });
    this.events.register(el, 'meganav:deselect', () => {
      if (!this.headerNavMenu) return;

      this.headerNavMenu.onBlockDeselect();
    });
  }

  /**
   * On mount, we initialize the 1st level navigation menu
   */
  onMount() {
    if (this.navTier1) {
      this.headerNavMenu = new NavigationDesktopMenu({
        navList: this.navTier1,
      });
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/blocks/block-announcement/default/block-announcement.js
/**
 * @class BlockAnnouncement
 * @classdesc Class for handling theme editor interactions
 */
class BlockAnnouncement extends Core.BlockComponent {
  constructor(el, context) {
    super(el, context);
  }

  onSelect() {
    const selectEvent = new CustomEvent('announcement-block:select', { detail: { index: this.el.dataset.slideIndex }, bubbles: true });
    this.el.dispatchEvent(selectEvent);
  }

  onDeselect() {
    const deselectEvent = new CustomEvent('announcement-block:deselect', { bubbles: true });
    this.el.dispatchEvent(deselectEvent);
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/header-toolbar/default/header-toolbar.js


/**
 * @class HeaderToolBar
 * @classdesc The cart drawer component is used to handle the cart drawer functionality.
 *
 * @extends Core.Component
 */
class HeaderToolBar extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.slider = el.querySelector('[data-announcement-slider]');
    this.headerToolbar = el.querySelector('[data-header-toolbar-list]');
    this.slides = el.querySelectorAll('[data-announcement-block]');
    this.controls = el.querySelector('[data-header-toolbar-controls]');
    this.controlButtons = el.querySelectorAll('[data-header-toolbar-control-button]');
    this.previousButton = el.querySelector('[data-header-toolbar-direction="previous"]');
    this.nextButton = el.querySelector('[data-header-toolbar-direction="next"]');
    this.currentIndex = 1;
    this.min = 1;
    this.max = this.slides.length;

    if (this.data.settings.block_size > 1) {
      this._setButtonStates();
    }

    this.events.register(this.controls, 'click', just_debounce_default()(e => {
      this._setIndex(e.target.dataset.headerToolbarDirection);

      const link = e.target.closest('a');
      const matchingText = this.headerToolbar.querySelector(`li[id='${link.getAttribute('href').replace('#', '')}-${this.currentIndex}']`);

      e.preventDefault();
      this.headerToolbar.scrollTo({ left: matchingText.offsetLeft, behavior: 'smooth' });

      this._setActiveState(matchingText);

      this._setTabIndex();
    }), 500);

    this.events.register(this.headerToolbar, 'scroll', just_debounce_default()(() => this._setActiveSlide(), 100));
    this.events.register(el, 'announcement-block:select', (e) => this.onBlockSelect(e));
  }

  /**
   * Fires when an announcement block is selected in the theme editor
   */
  onBlockSelect(e) {
    this.forceIndex(e);
  }

  /**
   * Force a specific announcement block to slide into view
   *
   */
  forceIndex(e) {
    this.currentIndex = Number(e.detail.index);
    this.headerToolbar.scrollTo({ left: e.target.offsetLeft, behavior: 'smooth' });
    this._setButtonStates();

    this._setActiveState(e.target);

    this._setTabIndex();
  }

  /**
   * Controls which slide is active
   *
   * @private
   */
  _setActiveSlide() {
    const currentSlideIndex = Math.floor(this.headerToolbar.scrollLeft / this.headerToolbar.offsetWidth);

    this.controlButtons.forEach((button, index) => {
      if (index === currentSlideIndex) {
        button.dataset.active = 'true';
      } else {
        button.dataset.active = 'false';
      }
    });
  }

  /**
   * Loops through slides and sets the active state
   *
   * @param {HTMLElement} target - The target element
   * @private
   */
  _setActiveState(el) {
    this.slides.forEach(slide => {
      slide.dataset.active = 'false';
    });

    el.dataset.active = 'true';
  }

  /**
   * Sets the current slide index
   *
   * @param {string} direction - The direction of the slide
   * @private
   */
  _setIndex(direction) {
    if (direction === 'next' && this.nextButton.dataset.disabled !== 'true') {
      if (this.currentIndex < this.max) {
        this.currentIndex++;
      }
    } else if (direction === 'previous' && this.previousButton.dataset.disabled !== 'true') {
      if (this.currentIndex > this.min) {
        this.currentIndex--;
      }
    }

    this._setButtonStates();
  }

  /**
   * Handles state of the control buttons
   *
   * @private
   */
  _setButtonStates() {
    if (this.slides.length < 2) return;
    if (this.currentIndex === this.max) {
      this.nextButton.dataset.disabled = 'true';
    } else {
      this.nextButton.dataset.disabled = 'false';
    }

    if (this.currentIndex === this.min) {
      this.previousButton.dataset.disabled = 'true';
    } else {
      this.previousButton.dataset.disabled = 'false';
    }
  }

  /**
   * Controls which links are tabbable in the current context of the slider
   *
   * @private
   */
  _setTabIndex() {
    this.slides.forEach(slide => {
      const aTags = slide.querySelectorAll('a');

      if (slide.dataset.active === 'true') {
        aTags.forEach(a => {
          a.setAttribute('tabindex', '0');
        });
      } else {
        aTags.forEach(a => {
          a.setAttribute('tabindex', '-1');
        });
      }
    });
  }

  /**
   * Returns the height of the header toolbar.
   *
   */
  getHeight() {
    return this.el.offsetHeight;
  }

  /**
   * Unregisters all event listeners
   *
   */
  unload() {
    this.events.unregisterAll();
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/header/default/scripts/liveSearchTakeover.js
class LiveSearchTakeover {
  constructor({
    liveSearch,
    events,
    triggerEls,
    takeoverEl,
  }) {
    const closeEl = takeoverEl.querySelector('[data-search-cancel-button]');
    this.liveSearch = liveSearch;
    this.events = events;
    this.previousFocus = null;
    this.open = false;
    this.animation = Core.Animations.transition({ el: takeoverEl, state: 'closed' });
    this.siteOverlay = Core.Components.getComponent('site-overlay');
    triggerEls.forEach(el => {
      events.register(el, 'click', e => this._handleTriggerClick(e));
    });
    events.register(closeEl, 'click', () => this._close());
    events.register(document, 'click', e => {
      if (takeoverEl.contains(e.target)) return;

      this._close();
    });
    events.register(takeoverEl, 'focusout', () => {
      window.requestAnimationFrame(() => {
        if (!takeoverEl.contains(document.activeElement)) {
          this._close();
          if (this.siteOverlay) this.siteOverlay.hide();
        }
      });
    });
  }

  _handleTriggerClick(e) {
    e.preventDefault();
    const escapeEvent = this.events.register(window, 'keyup', keyevent => {
      if (keyevent.key === 'Escape') {
        this.events.unregister(escapeEvent);
        this._close();
      }
    });
    this._open();
  }

  _open() {
    if (this.open) return;

    this.animation.animateTo('open')
      .then(() => {
        this.previousFocus = document.activeElement;
        this.liveSearch.focus();
        this.open = true;
      });
  }

  _close() {
    if (!this.open) return;

    this.liveSearch.close()
      .then(() => this.animation.animateTo('closed'))
      .then(() => {
        if (this.previousFocus) this.previousFocus.focus();
        this.open = false;
      });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/header/default/header.js



/**
 * @class Header
 * @classdesc The header section is used to handle the header functionality.
 *
 * @extends Core.SectionComponent
 */
class Header extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);
    this.header = this.el.querySelector('[data-header]');
    this.cartCount = this.el.querySelector('[data-cart-count]');
    this.cartDrawerButton = this.el.querySelector('[data-cart-button]');
    this.mobileDrawerButton = this.el.querySelector('[data-menu-button]');
    this.mobileDrawerCloseButton = this.el.querySelector('[data-menu-close-button]');
    this.searchButtons = this.el.querySelectorAll('[data-search-button]');
    this.liveSearchTakeover = this.el.querySelector('[data-live-search-takeover]');
    this.mobileMenu = null;
    this.sticky = this.data.settings.sticky;
    this.showBorder = this.data.settings.show_border;
    this.enable_live_search = this.data.settings.enable_live_search;
    this.live_search_open = false;

    this.events.register(document, 'cart:update', e => {
      this._updateCartCount(e.detail.count);
    });
    this.events.register(document, 'product:add-to-cart:success', e => {
      this._updateCartCount(e.detail.cart.item_count);
    });

    if (this.sticky && this.showBorder === false) {
      this.events.register(document, 'scroll', just_debounce_default()(() => { this._setStickyShadow(); }, 100, false, true));
    }
  }

  /**
   * On mount, we create the event listeners for the header section.
   */
  onMount() {
    // Event for opening the mobile menu drawer
    this.drawerMenu = this.query('navigation-drawer');
    this.events.register(this.mobileDrawerButton, 'click', e => {
      e.stopPropagation();
      this.drawerMenu.open(this.mobileDrawerButton);

      this.escapeEvent = this.events.register(window, 'keyup', keyevent => {
        if (keyevent.key === 'Escape') {
          this._toggleMenuButton(false);
          this.drawerMenu.close();
          this.mobileDrawerButton.focus();
          this.events.unregister(this.escapeEvent);
        }
      });

      // Set up events to handle keyboard, mouse, and touch events
      this.bodyClickEvent = this.events.register(document, 'click', () => {
        this._closeDrawerMenu();
      });

      this.focusBodyEvent = this.events.register(document.body, 'focusin', () => {
        this._closeDrawerMenu();
      });

      Core.Breakpoints.onChange(() => this._closeDrawerMenu());

      this._toggleMenuButton(true);
    });

    // We need to stop propagation on the events that happen on the drawer menu so that the menu
    // doesn't close from focusin or click events within it.
    this.menuDrawerFocusInEvent = this.events.register(this.drawerMenu.el, 'focusin', event => {
      event.stopPropagation();
    });

    this.menuDrawerClickEvent = this.events.register(this.drawerMenu.el, 'click', event => event.stopPropagation());

    this.events.register(this.mobileDrawerCloseButton, 'click', event => {
      event.stopPropagation();
      this._closeDrawerMenu();
    });

    // Event for opening the cart drawer
    const cartDrawer = Core.Components.getComponent('cart-drawer');
    if (cartDrawer && cartDrawer.data.enabled && !document.body.classList.contains('template-cart')) {
      this.events.register(this.cartDrawerButton, 'click', e => {
        e.stopPropagation();
        e.preventDefault();
        cartDrawer.open(this.cartDrawerButton, false);
      });
    }

    this.headerToolbar = this.query('header-tool-bar');

    this._setHeightVariables();
    this.events.register(window, 'resize', just_debounce_default()(() => this._setHeightVariables(), 100));

    if (this.enable_live_search) {
      this.liveSearchTakeover = new LiveSearchTakeover({
        liveSearch: this.query('live-search'),
        events: this.events,
        triggerEls: this.searchButtons,
        takeoverEl: this.liveSearchTakeover,
      });
    }
  }

  /**
   * Forces the mobile drawer menu to close
   * @private
   */
  _closeDrawerMenu() {
    this._toggleMenuButton(false);
    this.mobileDrawerButton.focus();
    this.drawerMenu.close();
    this.events.unregister(this.bodyClickEvent);
    this.events.unregister(this.focusBodyEvent);
  }

  /**
   * Toggles the menu and close button in the mobile header.
   * @param {Boolean} open If true, the menu is opening.
   * @private
   */
  _toggleMenuButton(open) {
    if (open) {
      this.mobileDrawerButton.classList.add('hidden');
      this.mobileDrawerCloseButton.classList.remove('hidden');
    } else {
      this.mobileDrawerButton.classList.remove('hidden');
      this.mobileDrawerCloseButton.classList.add('hidden');
    }
  }

  /**
   * Updates the cart count in the header
   *
   * @param {number} count - The cart item count to display.
   * @private
   */
  _updateCartCount(count) {
    this.cartCount.innerHTML = count;

    if (count === 0) {
      this.cartCount.classList.add('header__cart-count--is-zero');
    } else {
      this.cartCount.classList.remove('header__cart-count--is-zero');
    }
  }

  /**
   * Updates the sticky header logic
   *
   * @private
   */
  _setHeightVariables() {
    this.headerSection = document.querySelector('[data-header-section]');
    let headerHeight = 0;

    if (this.headerToolbar) {
      this.headerToolbarHeight = this.headerToolbar.getHeight();
      this.headerSection.style.setProperty('--announcement-height', `${this.headerToolbarHeight}px`);
      headerHeight += this.headerToolbarHeight;
    }

    headerHeight += this.header.getBoundingClientRect().height;
    this.headerSection.style.setProperty('--header-height', `${headerHeight}px`);
  }

  /**
   * Checks the scroll position and sets the sticky shadow
   *
   * @private
   */
  _setStickyShadow() {
    if (window.scrollY > 100) {
      this.header.classList.add('header--shadow');
    } else {
      this.header.classList.remove('header--shadow');
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/disclosure/default/disclosure.js
const classes = {
  alternateDrop: 'disclosure__modal--alternate-drop',
  alternateVerticalDrop: 'disclosure__modal--above',
};

/**
 * @class Disclosure
 * @classdesc Manages the opening and closing of disclosure elements.
 */
class Disclosure extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.disclosureToggle = el.querySelector('[data-disclosure-toggle]');
    this.disclosureModal = el.querySelector('[data-disclosure-modal]');
    this.disclosureOptions = el.querySelectorAll('[data-disclosure-option]');
    this.disclosureClose = el.querySelector('[data-disclosure-close]');

    this.isOpen = false;

    const input = document.createElement('input');
    input.name = this.data.inputName;
    input.value = this.data.inputValue;
    input.type = 'hidden';
    input.dataset.disclosureInput = true;

    this.el.appendChild(input);

    this.disclosureAnimation = Core.Animations.transition({ el: this.disclosureModal, state: 'closed' });

    this.disclosureInput = input;

    // Set up the click events for the toggle button
    this.events.register(this.disclosureToggle, 'click', e => {
      if (this.isOpen) {
        this._hideList();
        return;
      }

      const ariaExpanded = e.currentTarget.getAttribute('aria-expanded') === 'true';

      e.currentTarget.setAttribute('aria-expanded', !ariaExpanded);

      this.disclosureModal.classList.remove(classes.alternateDrop);
      this.disclosureModal.classList.remove(classes.alternateVerticalDrop);

      this.isOpen = true;

      this.disclosureAnimation.animateTo('open', {
        onStart: ({ el: disclosureModal }) => {
          const { right, bottom } = disclosureModal.getBoundingClientRect();
          const { innerWidth, innerHeight } = window;
          const gutter = 30;
          if ((right + gutter) > innerWidth) {
            disclosureModal.classList.add(classes.alternateDrop);
          }

          if ((bottom + gutter) > innerHeight) {
            disclosureModal.classList.add(classes.alternateVerticalDrop);
          }
        },
      });

      const siteOverlay = Core.Components.getComponent('site-overlay');

      if (siteOverlay && Core.Breakpoints.max('S')) {
        siteOverlay.show();
      }
    });

    // Set up the click event handlers for the disclosure options
    this.disclosureOptions.forEach(option => {
      this.events.register(option, 'click', e => {
        e.preventDefault();
        this.disclosureInput.value = e.currentTarget.dataset.value;

        if (!this.data.alwaysShowHeading) {
          this.disclosureToggle.innerHTML = e.currentTarget.innerHTML;
        }

        this.disclosureOptions.forEach(item => {
          if (item === option) {
            item.classList.add('disclosure__link--selected');
            item.setAttribute('aria-current', true);
          } else {
            item.classList.remove('disclosure__link--selected');
            item.setAttribute('aria-current', false);
          }
        });

        this.el.dispatchEvent(new Event('input', { bubbles: true }));

        // Give it a little bit of a delay after a new choice is selected before closing
        // so that users can see that their option was selected.
        setTimeout(() => this._hideList(), 300);
      });
    });

    this.events.register(this.disclosureClose, 'click', e => {
      e.preventDefault();
      this._hideList();
    });

    // Setup events for keyboard navigation
    this.events.register(this.disclosureToggle, 'focusout', e => {
      const disclosureLostFocus = !this.el.contains(e.relatedTarget);

      if (disclosureLostFocus) {
        this._hideList();
      }
    });

    this.events.register(this.disclosureModal, 'focusout', e => {
      const childInFocus = e.currentTarget.contains(e.relatedTarget);

      if (this.isOpen && !childInFocus) {
        this._hideList();
      }
    });

    this.events.register(window, 'keyup', e => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (this.el.contains(document.activeElement)) {
          this.disclosureToggle.focus();
        }

        this._hideList();
      }
    });

    this.events.register(document.body, 'click', e => {
      const isOption = this.el.contains(e.target);

      if (this.isOpen && !isOption) {
        this._hideList();
      }
    });
  }

  /**
   * Gets the current value of the input
   *
   * @returns Value of the input
   */
  getValue() {
    return this.disclosureInput.value;
  }

  /**
   * Closes the disclosure list
   * @private
   */
  _hideList() {
    this.disclosureAnimation.animateTo('closed').then(() => {
      this.isOpen = false;
      this.disclosureToggle.setAttribute('aria-expanded', false);
    });

    const siteOverlay = Core.Components.getComponent('site-overlay');

    if (siteOverlay && Core.Breakpoints.max('S')) {
      siteOverlay.hide();
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/cross-border/default/cross-border.js
/**
 * @class CrossBorder
 * @classdesc A class for handling form submission on the cross border disclosure elements
 * @extends Core.Component
 */
class CrossBorder extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.forms = el.querySelectorAll('[data-cross-border-form]');
    this.forms.forEach(form => this.events.register(form, 'input', () => form.submit()));
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/share/default/share.js
class Share extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.input = el.querySelector('input');
    this.inputWrapper = el.querySelector('[data-share-input-wrapper]');
    this.successContainer = el.querySelector('[data-share-copy-success]');

    this.state = {
      open: false,
    };
  }

  onMount() {
    this.button = this.query('button');
    this.events.register(this.button.el, 'click', () => this.copyToClipboard());
  }

  copyToClipboard() {
    const { open } = this.state;

    if (!open) {
      navigator.clipboard.writeText(this.input.value)
        .then(() => {
          this.inputWrapper.classList.add('hidden');
          this.successContainer.textContent = this.data.locales.success_message;
          this.input.classList.add('hidden');
          this.successContainer.classList.remove('hidden');
          this.setState({ open: true });

          setTimeout(() => {
            this.inputWrapper.classList.remove('hidden');
            this.successContainer.textContent = '';
            this.input.classList.remove('hidden');
            this.successContainer.classList.add('hidden');
            this.setState({ open: false });
          }, 30000);
        });
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/product-page/default/product-page.js
class ProductPage extends Core.Component {
  onMount() {
    const drawerHeaderFragment = this.el.querySelector('[data-drawer-header-template]').content.cloneNode(true);
    const drawerFragment = this.el.querySelector('[data-drawer-template]').content.cloneNode(true);
    const embedModalBtnEl = this.el.querySelector('[data-drawer-btn]');
    const drawerModal = Core.Components.getComponent('drawer-modal');

    if (!drawerModal) return;

    this._drawerFlyout = drawerModal.createFlyout();
    this._drawerFlyout
      .then(drawerFlyout => {
        if (!drawerFlyout) return;

        this.events.register(embedModalBtnEl, 'click', e => {
          e.stopPropagation();
          e.preventDefault();

          drawerFlyout.populateHeading(drawerHeaderFragment);
          drawerFlyout.populateContent(drawerFragment);
          drawerModal.openFlyout(drawerFlyout, embedModalBtnEl);
          this.events.register(drawerFlyout.el, 'product-page-drawer:close', () => drawerModal.closeFlyout(drawerFlyout));
        });
      });
  }

  onDismount() {
    super.onDismount();

    if (this._drawerFlyout) {
      this._drawerFlyout.then(drawerFlyout => drawerFlyout.destroy());
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/product-page-drawer/default/product-page-drawer.js
class ProductSizeGuideDrawer extends Core.Component {
  onMount() {
    const drawerModal = Core.Components.getComponent('drawer-modal');

    if (drawerModal) {
      const embedModalBtnEl = this.el.querySelector('[data-drawer-close]');

      this.events.register(embedModalBtnEl, 'click', e => {
        e.stopPropagation();
        e.preventDefault();

        const closeEvent = new CustomEvent('product-page-drawer:close', { bubbles: true });
        this.el.dispatchEvent(closeEvent);
      });
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/product-size-guide/default/product-size-guide.js
class ProductSizeGuide extends Core.Component {
  onMount() {
    const drawerHeaderFragment = this.el.querySelector('[data-drawer-header-template]').content.cloneNode(true);
    const drawerFragment = this.el.querySelector('[data-drawer]').content.cloneNode(true);
    const embedModalBtnEl = this.el.querySelector('[data-drawer-btn]');
    const drawerModal = Core.Components.getComponent('drawer-modal');

    if (!drawerModal) return;

    this._drawerFlyout = drawerModal.createFlyout();
    this._drawerFlyout
      .then(drawerFlyout => {
        if (!drawerFlyout) return;

        this.events.register(embedModalBtnEl, 'click', e => {
          e.stopPropagation();
          e.preventDefault();

          drawerFlyout.populateHeading(drawerHeaderFragment);
          drawerFlyout.populateContent(drawerFragment);
          drawerModal.openFlyout(drawerFlyout, embedModalBtnEl);
          this.events.register(drawerFlyout.el, 'product-page-drawer:close', () => drawerModal.closeFlyout(drawerFlyout));
        });
      });
  }

  onDismount() {
    super.onDismount();

    if (this._drawerFlyout) {
      this._drawerFlyout.then(drawerFlyout => drawerFlyout.destroy());
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/product-gallery-modal/default/product-gallery-modal.js
/**
 * @class ProductGalleryModal
 * @classdesc A modal for rendering the product gallery
 *
 * @extends Core.Component
 */
class ProductGalleryModal extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.content = this.el.querySelector('[data-product-gallery-modal-content]');
    this.closeBtn = this.el.querySelector('[data-product-gallery-modal-close]');
  }

  /**
   * Opens the gallery modal
   * @public
   */
  open(mediaId = null) {
    this.el.classList.add('product-gallery-modal--visible');
    Core.Utils.scrollLock(this.el, this.content);

    const mediaItem = this.el.querySelector(`.product-gallery-modal__media-item[data-media="${mediaId}"]`);

    if (mediaItem) {
      mediaItem.classList.add('product-gallery-modal__media-item--selected');
      mediaItem.scrollIntoView({ behavior: 'smooth' });
    }

    this.escEvent = this.events.register(window, 'keydown', e => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        this.close();
      }
    });

    this.closeBtnEvent = this.events.register(this.closeBtn, 'click', () => this.close());
  }

  /**
   * Closes the gallery modal
   * @public
   */
  close() {
    const mediaItems = this.el.querySelectorAll('.product-gallery-modal__media-item');
    this.events.unregister(this.escEvent);
    this.events.unregister(this.closeBtnEvent);
    this.el.classList.remove('product-gallery-modal--visible');
    mediaItems.forEach(mediaItem => mediaItem.classList.remove('product-gallery-modal__media-item--selected'));
    Core.Utils.scrollUnlock(this.el);
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/media-model/default/media-model.js
/**
 * @class MediaModel
 * @classdesc Handles creating an model media element
 *
 * @extends Core.Component
 */
class MediaModel extends Core.Component {
  constructor(el, context) {
    super(el, context);

    const modelEl = this.el.querySelector('model-viewer');

    this._model = Core.Media.createModel(modelEl);
  }

  /**
   * Play the model and dispatch video-related events based on resolve/reject from Promise
   * @public
   */
  play() {
    this._model.play();
  }

  /**
   * Pause the video
   * @public
   */
  pause() {
    this._model.pause();
  }

  /**
   * Unload the video on unmount
   */
  onDismount() {
    this._model.unload();
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/media-external-video/default/media-external-video.js
/**
 * @class MediaExternalVideo
 * @classdesc Handles creating an external video media element
 *
 * @extends Core.Component
 */
class MediaExternalVideo extends Core.Component {
  constructor(el, context) {
    super(el, context);

    const videoEl = el.querySelector('iframe');

    this._video = Core.Media.createVideo(videoEl, this.data.type);
  }

  /**
   * Play the video
   * @public
   */
  play() {
    this._video.play();
  }

  /**
   * Pause the video
   * @public
   */
  pause() {
    this._video.pause();
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/media-video/default/media-video.js
/**
 * @class MediaVideo
 * @classdesc Handles creating a video media element
 *
 * @extends Core.Component
 */
class MediaVideo extends Core.Component {
  constructor(el, context) {
    super(el, context);

    const videoEl = this.el.querySelector('video');

    this._video = Core.Media.createVideo(videoEl, 'html5');
  }

  /**
   * Play the media
   * @public
   */
  pause() {
    this._video.pause();
  }

  /**
   * Pause the media
   * @public
   */
  play() {
    this._video.play();
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/featured-product-gallery/default/featured-product-gallery.js
function featured_product_gallery_scrollIntoView(gallery, media, direction = 'horizontal') {
  switch (direction) {
    case 'horizontal':
      gallery.scrollTo({
        left: media.offsetLeft,
        behavior: 'smooth',
      });
      break;
    case 'vertical':
      gallery.scrollTo({
        top: media.offsetTop,
        behavior: 'smooth',
      });
      break;
    default:
      break;
  }
}

class FeaturedProductGallery extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.gallery = el.querySelector('[data-product-gallery-list]');
    this.galleryMedia = this.gallery.querySelectorAll('[data-media]');
    this.zoomableImageBtns = el.querySelectorAll('[data-product-gallery-media-zoom]');
    this.navigationThumbnails = el.querySelector('[data-product-gallery-navigation-thumbnails]');
    this.navigationCurrentMedia = el.querySelector('[data-product-gallery-navigation-current-media]');
    this.navigationArrowPrevious = el.querySelector('[data-product-gallery-navigation-arrow-previous]');
    this.navigationArrowNext = el.querySelector('[data-product-gallery-navigation-arrow-next]');

    this.state = {
      selectedMedia: this.data.selected_media,
    };

    if (this.data.enable_autoplay) {
      this._interval = setInterval(() => {
        const selectedMediaEl = this.gallery.querySelector(`[data-media='${this.state.selectedMedia}']`);
        const currMediaPosition = Array.prototype.indexOf.call(this.galleryMedia, selectedMediaEl);
        const nextMediaIndex = (currMediaPosition + 1) >= this.galleryMedia.length
          ? 0
          : currMediaPosition + 1;
        const matchingMedia = this.galleryMedia[nextMediaIndex];

        if (matchingMedia) {
          featured_product_gallery_scrollIntoView(this.gallery, matchingMedia);
        }
      }, 3000);

      const event = this.events.register(el, 'pointerover', () => {
        clearInterval(this._interval);

        this.events.unregister(event);
      });
    }

    this.zoomableImageBtns.forEach(zoomableImageBtn => {
      this.events.register(zoomableImageBtn, 'click', e => {
        const img = e.target.closest('[data-media]');

        if (!img) return;

        const { media: mediaId } = img.dataset;
        const galleryModal = this.query('product-gallery-modal');

        if (galleryModal) {
          galleryModal.open(mediaId);
        }
      });
    });

    if (this.galleryMedia.length > 1) {
      this.events.register(this.navigationThumbnails, 'click', e => {
        e.preventDefault();

        const thumbnailMediaEl = e.target.closest('[data-media]');

        if (!thumbnailMediaEl) return; // We clicked into the void

        const matchingMedia = this.gallery.querySelector(`[data-media='${thumbnailMediaEl.dataset.media}']`);

        if (matchingMedia) {
          featured_product_gallery_scrollIntoView(this.gallery, matchingMedia);
        }
      });

      this.events.register(this.navigationArrowPrevious, 'click', e => {
        e.preventDefault();

        const selectedMediaEl = this.gallery.querySelector(`[data-media='${this.state.selectedMedia}']`);
        const currMediaPosition = Array.prototype.indexOf.call(this.galleryMedia, selectedMediaEl);
        const nextMediaIndex = currMediaPosition - 1;
        const matchingMedia = this.galleryMedia[nextMediaIndex];

        if (matchingMedia) {
          featured_product_gallery_scrollIntoView(this.gallery, matchingMedia);
        }
      });

      this.events.register(this.navigationArrowNext, 'click', e => {
        e.preventDefault();

        const selectedMediaEl = this.gallery.querySelector(`[data-media='${this.state.selectedMedia}']`);
        const currMediaPosition = Array.prototype.indexOf.call(this.galleryMedia, selectedMediaEl);
        const nextMediaIndex = currMediaPosition + 1;
        const matchingMedia = this.galleryMedia[nextMediaIndex];

        if (matchingMedia) {
          featured_product_gallery_scrollIntoView(this.gallery, matchingMedia);
        }
      });

      this._intersectionObserver = new IntersectionObserver(this._handleIntersection.bind(this), { root: this.gallery, rootMargin: '0px 0px 0px 0px', threshold: 0.5 });
      this.galleryMedia.forEach(galleryMedia => this._intersectionObserver.observe(galleryMedia));

      Core.Breakpoints.onChange(this._handleBreakpointChange.bind(this));
    }
  }

  onContextChange({ selectedVariant }) {
    if (!selectedVariant || !selectedVariant.featured_media) return;

    const matchingMedia = this.gallery.querySelector(`[data-media='${selectedVariant.featured_media.id}']`);

    if (matchingMedia) {
      clearInterval(this._interval);
      featured_product_gallery_scrollIntoView(this.gallery, matchingMedia);

      this.setState({
        selectedMedia: matchingMedia.dataset.media,
      });
    }
  }

  onStateChange(newState) {
    const matchingMedia = this.gallery.querySelector(`[data-media='${newState.selectedMedia}']`);
    const mediaThumbnails = this.navigationThumbnails.querySelectorAll('[data-media]');
    const matchingMediaThumbnail = this.navigationThumbnails.querySelector(`[data-media='${newState.selectedMedia}']`);

    mediaThumbnails.forEach(mediaThumbnail => mediaThumbnail.removeAttribute('data-media-selected'));

    if (matchingMediaThumbnail) {
      featured_product_gallery_scrollIntoView(this.navigationThumbnails, matchingMediaThumbnail, 'vertical');

      matchingMediaThumbnail.setAttribute('data-media-selected', '');
    }

    const shopifyXrEl = this.el.querySelector('[data-gallery-xr]');

    if (!shopifyXrEl) return;

    if (matchingMedia.dataset.mediaType === 'model') {
      shopifyXrEl.dataset.shopifyModel3dId = newState.selectedMedia;
    } else {
      shopifyXrEl.dataset.shopifyModel3dId = shopifyXrEl.dataset.defaultModelId;
    }
  }

  /**
   * Called when the component is dismounted
   */
  onDismount() {
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
    }

    this.events.unregisterAll();
  }

  _handleBreakpointChange({ current }) {
    if (current.value === 'S') {
      const matchingMedia = this.galleryMedia[0];

      if (matchingMedia) {
        featured_product_gallery_scrollIntoView(this.gallery, matchingMedia);
        const matchingMediaIndex = Array.prototype
          .indexOf.call(this.galleryMedia, matchingMedia);
        this.navigationArrowPrevious.disabled = matchingMediaIndex === 0;
        this.navigationCurrentMedia.innerText = matchingMediaIndex + 1;
        this.navigationArrowNext.disabled = matchingMediaIndex === this.galleryMedia.length - 1;
      }
    }
  }

  /**
   * Handles the intersection event of a media item and gallery viewport
   * Updates the navigation arrows
   */
  _handleIntersection(entries) {
    const intersectingEntry = entries
      .reduce((acc, entry) => {
        let largestIntersectingEntry = acc;

        if (
          entry.intersectionRatio >= this._intersectionObserver.thresholds
          && (
            !largestIntersectingEntry
            || largestIntersectingEntry.intersectionRatio < entry.intersectionRatio
          )
        ) {
          largestIntersectingEntry = entry;
        }

        return largestIntersectingEntry;
      }, null);

    if (!intersectingEntry) return;

    Core.Media.pauseAll();

    const intersectingMediaIndex = Array.prototype
      .indexOf.call(this.galleryMedia, intersectingEntry.target);

    if (intersectingMediaIndex >= 0) {
      const currImgPosition = intersectingMediaIndex + 1; // Position is 1-based index

      this.navigationArrowPrevious.disabled = intersectingMediaIndex === 0;
      this.navigationCurrentMedia.innerText = currImgPosition;
      this.navigationArrowNext.disabled = intersectingMediaIndex === this.galleryMedia.length - 1;

      this.setState({
        selectedMedia: intersectingEntry.target.dataset.media,
      });
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/featured-product/default/featured-product.js
class FeaturedProduct extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);

    const { product, selectedVariant } = this.data;

    this.state = {
      product,
      selectedVariant,
    };

    this.events.register(el, 'product:add-to-cart:success', event => this._onAddToCartSuccess(event));
    this.events.register(el, 'product:variant-change', event => this._onVariantChange(event));

    const productGridEl = el.querySelector('[data-product-grid]');
    const productGridColumnDetailsEl = el.querySelector('[data-product-grid-column-details]');
    const resizeObserver = new ResizeObserver(entries => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const viewportHeight = window.visualViewport.height;

        if (entry.contentRect.height <= viewportHeight) {
          productGridEl.dataset.stickyPosition = 'top';
        } else {
          productGridEl.dataset.stickyPosition = 'bottom';
        }
      }
    });

    resizeObserver.observe(productGridColumnDetailsEl);
  }

  _onAddToCartSuccess() {
    const { selectedVariant } = this.state;

    this._refreshProduct(selectedVariant);
  }

  _onVariantChange(event) {
    const { variant, state } = event.detail;

    if (state !== 'unselected') {
      this._refreshProduct(variant);

      this.setState({ selectedVariant: variant });
    }
  }

  _refreshProduct(variant) {
    // Update the price component using fetch
    fetch(`${this.data.url}/async?variant=${variant.id}&section_id=${this.sectionId}`)
      .then(response => response.text())
      .then(responseText => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const skuBlockEl = html.querySelector('[data-type="sku"]');
        const priceBlockEl = html.querySelector('[data-type="price"]');
        const inventoryStatusBlockEl = html.querySelector('[data-type="inventory_status"]');
        const buyButtonsEl = html.querySelector('[data-type="buy_buttons"]');
        const sharingEl = html.querySelector('[data-type="share"]');

        if (skuBlockEl) {
          this.el.querySelector('[data-type="sku"]').innerHTML = skuBlockEl.innerHTML;
        }

        if (priceBlockEl) {
          this.el.querySelector('[data-type="price"]').innerHTML = priceBlockEl.innerHTML;
        }

        if (inventoryStatusBlockEl) {
          this.el.querySelector('[data-type="inventory_status"]').innerHTML = inventoryStatusBlockEl.innerHTML;
        }

        if (buyButtonsEl) {
          this.el.querySelector('[data-type="buy_buttons"]').innerHTML = buyButtonsEl.innerHTML;
        }

        if (sharingEl) {
          this.el.querySelector('[data-type="share"]').innerHTML = sharingEl.innerHTML;
        }
      });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/product-card/default/product-card.js
/**
 * @class ProductCard
 * @classdesc The class for a product card.
 *
 * @extends Core.Component
 */
class ProductCard extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.productImage = this.el.querySelector('[data-product-image]');
    this.productVariantColorLabel = this.el.querySelector('[data-variant-color-label]');
  }

  onMount() {
    this.swatches = this.query('product-card-swatches');
    this.quickAddButton = this.el.querySelector('[data-quick-add-button]');
    this.quickAddMobile = this.query('button-floating');
    this.quickshop = Core.Components.getComponent('quickshop');

    if (this.swatches) {
      this.events.register(this.swatches.el, 'swatch:update', e => {
        this._updateSelectedVariant(e.detail.color);
      });
    }

    // Handle quick add button click to show quickshop
    if (this.quickAddButton) {
      this.events.register(this.quickAddButton, 'mouseover', e => {
        e.stopPropagation();
        const { productLink } = this.quickAddButton.dataset;
        this.quickshop.loadQuickshop({ productLink });
      });

      this.events.register(this.quickAddButton, 'click', e => {
        e.stopPropagation();
        const { productLink } = this.quickAddButton.dataset;
        this.quickshop.open(this.quickAddButton, { productLink });
      });
    }

    if (this.quickAddMobile) {
      this.events.register(this.quickAddMobile.el, 'click', e => {
        e.stopPropagation();
        const { productLink } = this.quickAddButton.dataset;
        this.quickshop.open(this.quickAddMobile.el, { productLink });
      });
    }
  }

  onDismount() {
    this.events.unregisterAll();
  }

  /**
   * This method will display the image for the variant of the color requested, if one exists.
   * @param {String} color The color of the variant to switch to
   * @private
   */
  _updateSelectedVariant(color) {
    const variantImagesContainer = this.el.querySelector('[data-variant-images]');
    const variantImages = variantImagesContainer.querySelectorAll('[data-variant-image]');
    const currentImage = this.el.querySelector(`[data-variant-image="${color}"]`);

    variantImagesContainer.classList.add('hidden');

    variantImages.forEach(image => {
      image.classList.add('hidden');
    });

    if (currentImage) {
      variantImagesContainer.classList.remove('hidden');
      currentImage.classList.remove('hidden');
    }

    if (this.productVariantColorLabel) {
      this.productVariantColorLabel.innerHTML = color;
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/product-card-slider/default/product-card-slider.js
/**
 * @class ProductCardSlider
 * @classdesc A class for handling product card slider interactions
 * @extends Core.Component
 */
class ProductCardSlider extends Core.Component {
  constructor(el, context) {
    super(el, context);
  }

  onMount() {
    this.slider = this.el.querySelector('[data-slider]');
    this.sliderItems = this.slider.querySelectorAll('[data-slider-item]');
    this.buttonContainer = this.el.querySelector('[data-product-card-slider-buttons]');
    this.previousButton = this.buttonContainer.querySelector('[data-slider-button-previous]');
    this.nextButton = this.buttonContainer.querySelector('[data-slider-button-next]');
    this.scrollIncrementBreakpoint = this.data.scrollIncrementBp;

    this._setScrollIncrement();
    this._setButtonContainerHeight();

    this.events.register(this.previousButton, 'click', event => this._handleClick(event));
    this.events.register(this.nextButton, 'click', event => this._handleClick(event));
    this.events.register(window, 'resize', () => this._setButtonContainerHeight());
    Core.Breakpoints.onChange(() => this._setScrollIncrement());

    // The 10% rootMargin is to account for the 10% "sneak peak" of the next card in the slider
    this._observer = new IntersectionObserver(this._handleIntersection.bind(this), { root: this.slider, rootMargin: '0px 10% 0px 0px', threshold: 1.0 });
    this.sliderItems.forEach(item => this._observer.observe(item));

  }

  /**
   * Handles the click event for when the previous/next buttons are clicked.
   * Slider scrolls one card-length per click.
   * @param {Event} event - The 'click' event object
   */
  _handleClick(event) {
    event.preventDefault();

    const { name } = event.currentTarget;
    const newScrollPosition = name === 'next'
      ? this.slider.scrollLeft + this.scrollIncrement
      : this.slider.scrollLeft - this.scrollIncrement;

    this.slider.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
  }

  /**
   *
   * Callback for IntersectionObserver.
   * Toggle button visibility based on users scroll position in slider
   * @param {IntersectionObserverEntry[]} entries
   */
  _handleIntersection(entries) {
    // Safari doesn't support `scrollTo`'s `smooth` behavior. Therefore,
    // process the entries in batches as multiple cards may become visible
    // in a single scroll movement
    const intersectionCardIndices = entries
      .filter(entry => entry.isIntersecting)
      .map(({ target }) => Array.prototype.indexOf.call(this.sliderItems, target));

    if (intersectionCardIndices.length === 0) return;

    const containsFirstCard = intersectionCardIndices.includes(0);
    const containsLastCard = intersectionCardIndices.includes(this.sliderItems.length - 1);

    this.previousButton.classList.toggle('hidden', containsFirstCard);
    this.nextButton.classList.toggle('hidden', containsLastCard);
  }

  /**
   * Determine how many cards to scroll when previous/next buttons
   * are clicked.
   */
  _setScrollIncrement() {
    this.multiplier = Core.Breakpoints.min(this.scrollIncrementBreakpoint)
      ? Number(this.data.cardsPerRow, 10)
      : Number(this.data.cardsPerRowMobile, 10);

    if (this.sliderItems[0] !== undefined) {
      this.scrollIncrement = this.sliderItems[0].clientWidth * this.multiplier;
    }
  }

  /**
   * Manually set button container height so buttons are centred
   * relative to product card images
   */
  _setButtonContainerHeight() {
    if (!this.buttonContainer) return;
    const { offsetHeight } = this.slider.querySelector('[data-product-image]');
    this.buttonContainer.style.height = `${offsetHeight}px`;
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/customer-address-form/default/customer-address-form.js
class CustomerAddressForm extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.countryContainer = el.querySelector('[data-address-form-country]');
    this.countrySelect = this.countryContainer.querySelector('select');
    this.provinceContainer = el.querySelector('[data-address-form-province]');
    this.provinceSelect = this.provinceContainer.querySelector('select');

    this.countryProvinceObserver = new Shopify.CountryProvinceSelector(
      this.countrySelect.id,
      this.provinceSelect.id,
      {
        hideElement: this.provinceContainer.id,
      },
    );
  }

  onMount() {
    const editButton = this.query('button', 'edit-address');
    const deleteButton = this.query('button', 'delete-address');
    const resetButton = this.query('button', 'reset-address');

    Core.Events.register(editButton.el, 'click', e => {
      this.toggleEditForm(e);
    });
    Core.Events.register(resetButton.el, 'click', e => this.toggleEditForm(e));

    if (deleteButton) {
      Core.Events.register(deleteButton.el, 'click', e => this.handleDeleteClick(e));
    }
  }

  toggleEditForm({ currentTarget }) {
    const addressForm = this.el.querySelector('[data-edit-address-modal]');
    const open = addressForm.dataset.open === 'true';
    addressForm.setAttribute('data-open', open ? 'false' : 'true');
    currentTarget.setAttribute('aria-expanded', open ? 'false' : 'true');
  }

  handleDeleteClick({ currentTarget }) {
    // eslint-disable-next-line no-alert
    if (confirm(currentTarget.getAttribute('data-confirm-message'))) {
      Shopify.postLink(currentTarget.dataset.target, {
        parameters: { _method: 'delete' },
      });
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/cart-drawer-template/default/cart-drawer-template.js
/**
 * @class CartDrawerTemplate
 * @classdesc The content for the cart drawer
 *
 * @extends Core.SectionComponent
 */
class CartDrawerTemplate extends Core.SectionComponent {
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/age-gate/default/age-gate.js
const scrollLock = __webpack_require__(265);
const isbot = __webpack_require__(616);

function getAge(birthdate) {
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const m = today.getMonth() - birthdate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  return age;
}

/**
 * @class AgeGate
 * @classdesc The class for site Age Gate.
 *
 * @extends Core.Component
 */
class AgeGate extends Core.Component {
  constructor(el, context) {
    super(el, context);
    this._ageGate = this.el.querySelector('[data-age-gate]');

    if (!this._ageGate) return; // We're not enabled

    this._ageGateForm = this._ageGate.querySelector('[data-age-gate-form]');
    this._ageGateErrorEl = this._ageGateForm.querySelector('[data-age-gate-error]');
    this._requiredAge = this._ageGateForm.dataset.requiredAge;
    this._ageGateForm.addEventListener('submit', this._onFormSubmit.bind(this));

    if (isbot(navigator.userAgent)) {
      this.close();
    } else if (this._ageGate.style.display === '') {
      this.open();
    }
  }

  open() {
    scrollLock.disablePageScroll();
    this._ageGate.style.display = '';
  }

  close() {
    scrollLock.enablePageScroll();
    this._ageGate.style.display = 'none';
  }

  _onFormSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const data = new FormData(event.target);
    const day = data.get('day');
    const month = data.get('month');
    const year = data.get('year');

    if (day === '' || month === '' || year === '') return;

    const age = getAge(new Date(year, month, day));

    if (age >= this._requiredAge) {
      this.close();
      sessionStorage.setItem('age-gate', age);
    } else {
      this._ageGateErrorEl.style.display = '';
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/button-text/default/button-text.js
class ButtonText extends Core.Component {
  get disabled() {
    return this.el.disabled;
  }

  set disabled(disabled) {
    this.el.disabled = disabled;
  }

  get text() {
    return this.el.innerText;
  }

  set text(text) {
    this.el.innerText = text;
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/surface-pick-up-drawer/default/surface-pick-up-drawer.js
const LOCAL_STORAGE_KEY = 'pxu-shopify-surface-pick-up';

const isNotExpired = timestamp => timestamp + (1000 * 60 * 60) >= Date.now();

// Haversine Distance
// The haversine formula is an equation giving great-circle distances between
// two points on a sphere from their longitudes and latitudes
function calculateDistance(
  latitude1,
  longitude1,
  latitude2,
  longitude2,
  unitSystem,
) {
  const dtor = Math.PI / 180;
  const radius = unitSystem === 'metric' ? 6378.14 : 3959;

  const rlat1 = latitude1 * dtor;
  const rlong1 = longitude1 * dtor;
  const rlat2 = latitude2 * dtor;
  const rlong2 = longitude2 * dtor;

  const dlon = rlong1 - rlong2;
  const dlat = rlat1 - rlat2;

  const a = Math.sin(dlat / 2) ** 2
    + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(dlon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return radius * c;
}

async function getGeoLocation() {
  return new Promise((resolve, reject) => {
    const options = {
      maximumAge: 3600000, // 1 hour
      timeout: 5000,
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => resolve(coords), reject, options);
    } else {
      reject();
    }
  });
}

async function setLocation({ latitude, longitude }) {
  const newData = {
    latitude,
    longitude,
    timestamp: Date.now(),
  };

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));

  return fetch('/localization.json', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ latitude, longitude }),
  }).then(() => ({ latitude, longitude }));
}

async function getLocation(requestLocation = false) {
  const cachedLocation = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (cachedLocation && isNotExpired(cachedLocation.timestamp)) {
    return cachedLocation;
  }

  if (requestLocation) {
    return getGeoLocation().then(coords => {
      setLocation(coords); // We don't need to wait for this

      return coords;
    });
  }

  return null;
}

class SurfacePickUpDrawer extends Core.Component {
  constructor(el, context) {
    super(el, context);

    const items = el.querySelectorAll('[data-surface-pick-up-item]');

    getLocation(true)
      .then(coords => {
        items.forEach(item => {
          const distanceEl = item.querySelector('[data-distance]');
          const distanceUnitEl = item.querySelector('[data-distance-unit]');
          const unitSystem = distanceUnitEl.dataset.distanceUnit;
          const itemLatitude = parseFloat(distanceEl.dataset.latitude);
          const itemLongitude = parseFloat(distanceEl.dataset.longitude);

          if (coords && isFinite(itemLatitude) && isFinite(itemLongitude)) {
            const distance = calculateDistance(
              coords.latitude,
              coords.longitude,
              itemLatitude,
              itemLongitude,
              unitSystem,
            );

            distanceEl.innerHTML = distance.toFixed(1);
          } else {
            distanceEl.remove();
            distanceUnitEl.remove();
          }
        });
      })
      .catch(e => {
        console.debug(e);

        items.forEach(item => {
          const distanceEl = item.querySelector('[data-distance]');
          const distanceUnitEl = item.querySelector('[data-distance-unit]');

          distanceEl.remove();
          distanceUnitEl.remove();
        });
      });
  }

  onMount() {
    const drawerModal = Core.Components.getComponent('drawer-modal');

    if (drawerModal) {
      const embedModalBtnEl = this.el.querySelector('[data-surface-pick-up-drawer-close]');

      this.events.register(embedModalBtnEl, 'click', e => {
        e.stopPropagation();
        e.preventDefault();

        const closeEvent = new CustomEvent('surface-pick-up-drawer:close', { bubbles: true });
        this.el.dispatchEvent(closeEvent);
      });
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/surface-pick-up/default/surface-pick-up.js
class SurfacePickUp extends Core.Component {
  onMount() {
    const drawerModal = Core.Components.getComponent('drawer-modal');

    if (!drawerModal) return;

    this._drawerFlyout = drawerModal.createFlyout();

    const embedModalBtn = this.query('button');

    if (!embedModalBtn) return; // We're not looking at a variant with surface pick up

    const drawerHeaderFragment = this.el.querySelector('[data-drawer-header-template]').content.cloneNode(true);
    const drawerFragment = this.el.querySelector('[data-drawer-template]').content.cloneNode(true);
    const { el: embedModalBtnEl } = embedModalBtn;

    this.events.register(embedModalBtnEl, 'click', e => {
      e.stopPropagation();
      e.preventDefault();

      this._drawerFlyout
        .then(drawerFlyout => {
          if (!drawerFlyout) return;

          drawerFlyout.populateHeading(drawerHeaderFragment);
          drawerFlyout.populateContent(drawerFragment);
          drawerModal.openFlyout(drawerFlyout, embedModalBtnEl);

          this.events.register(drawerFlyout.el, 'surface-pick-up-drawer:close', () => drawerModal.closeFlyout(drawerFlyout));
        });
    });
  }

  onDismount() {
    super.onDismount();

    if (this._drawerFlyout) {
      this._drawerFlyout.then(drawerFlyout => drawerFlyout.destroy());
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/notification/default/notification.js
class Notification extends Core.Component {
  get type() {
    return this.el.getAttribute('role') === 'alert' ? 'error' : 'success';
  }

  set type(type) {
    this.el.setAttribute('role', type === 'error' ? 'alert' : 'status');
  }

  get content() {
    return this.el.innerHTML;
  }

  set content(content) {
    this.el.innerHTML = content;
  }

  get hidden() {
    return this.el.hasAttribute('hidden');
  }

  set hidden(hidden) {
    if (hidden) {
      this.el.setAttribute('hidden', '');
    } else {
      this.el.removeAttribute('hidden');
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/gift-card-recipient-form/default/gift-card-recipient-form.js
class GiftCardRecipientForm extends Core.Component {
  constructor(el, context) {
    super(el, context);
    this.inputs = this.el.querySelectorAll('[data-input]');
    this.email = this.el.querySelector('[data-input-email]');
    this.checkbox = this.el.querySelector('[data-input-checkbox]');
    this.notification = this.el.querySelector('.notification');

    this.events.register(this.checkbox, 'change', () => {
      if (this.checkbox.checked) {
        this._open();
      } else {
        this._close();
      }
    });
  }

  _open() {
    this.el.classList.add('recipient-form--open');
    this.email.setAttribute('required', '');
  }

  _close() {
    this.el.classList.remove('recipient-form--open', 'recipient-form--errors');
    this.email.removeAttribute('required');

    if (this.notification) {
      this.notification.hidden = true;
    }

    this.inputs.forEach(input => {
      input.value = '';
    });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/button-action/default/button-action.js
class ButtonAction extends Core.Component {
  set size(size) {
    switch (size) {
      case 'small':
      case 'medium':
      case 'large':
        this.el.classList.remove('button-action--small', 'button-action--medium', 'button-action--large');
        this.el.classList.add(`button-action--${size}`);
        break;
      default:
        break;
    }
  }

  set style(style) {
    switch (style) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        this.el.classList.remove('button-action--primary', 'button-action--secondary', 'button-action--tertiary');
        this.el.classList.add(`button-action--${style}`);
        break;
      default:
        break;
    }
  }

  get disabled() {
    return this.el.disabled;
  }

  set disabled(disabled) {
    this.el.disabled = disabled;
  }

  get text() {
    return this.el.innerText;
  }

  set text(text) {
    this.el.innerText = text;
  }

  set loading(loading) {
    if (loading) {
      this.el.setAttribute('data-loading', '');
      this.el.setAttribute('aria-busy', true);
    } else {
      this.el.removeAttribute('data-loading');
      this.el.setAttribute('aria-busy', false);
    }
  }

  get loading() {
    return this.el.hasAttribute('data-loading');
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/buy-buttons/default/buy-buttons.js
class BuyButtons extends Core.Component {
  onMount() {
    const dynamicCheckoutBtnEl = this.el.querySelector('[data-shopify="payment-button"]');

    if (window.Shopify && Shopify.PaymentButton) {
      Shopify.PaymentButton.init();
    }

    if (dynamicCheckoutBtnEl && !dynamicCheckoutBtnEl.classList.contains('.shopify-payment-button__button--hidden')) {
      const btn = this.query('button-action');

      btn.style = 'secondary';
    }

    this.events.register(this.el, 'submit', e => {
      e.preventDefault();

      const btn = this.query('button-action');
      const notifications = this.queryAll('notification');
      const recipientForm = this.el.querySelector('[data-recipient-form]');

      btn.loading = true;

      fetch(
        `${window.PXUTheme.routes.cart_add_url}.js`,
        {
          method: 'POST',
          headers: { Accept: 'application/javascript', 'X-Requested-With': 'XMLHttpRequest' },
          body: new FormData(e.target),
        },
      )
        .then(response => (
          Promise.all([
            response,
            fetch(
              `${window.PXUTheme.routes.cart_url}.js`,
              {
                method: 'GET',
                headers: { Accept: 'application/javascript', 'X-Requested-With': 'XMLHttpRequest' },
              },
            ),
          ])
        ))
        .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
        .then(([response, cart]) => {
          if (response.status) {
            const addToCartErrorEvent = new CustomEvent('product:add-to-cart:error', { detail: { cart, error: response }, bubbles: true });
            this.el.dispatchEvent(addToCartErrorEvent);

            notifications.forEach(notification => {
              notification.type = 'error';
              if (response.description.email) {
                notifications[0].hidden = false;
              } else {
                notification.content = response.description;
                notification.hidden = false;
              }
            });

            if (response.description.email) {
              recipientForm.classList.add('recipient-form--errors');
            }

            return;
          }

          if (recipientForm) {
            recipientForm.classList.remove('recipient-form--errors');

            notifications.forEach(notification => {
              notification.hidden = true;
            });
          }

          if (window.location.pathname === '/cart') {
            window.location.reload();
            return;
          }

          const addToCartEvent = new CustomEvent('product:add-to-cart:success', { detail: { cart, line_item: response }, bubbles: true });
          this.el.dispatchEvent(addToCartEvent);

          const cartDrawer = Core.Components.getComponent('cart-drawer');

          if (cartDrawer && cartDrawer.data.enabled) {
            cartDrawer.open(btn.el, true, [response]);
          } else {
            window.location = window.PXUTheme.routes.cart_url;
          }
        })
        .catch(err => console.error('Error:', err))
        .finally(() => { btn.loading = false; });
    });
  }

  setButtonState(state) {
    const btn = this.query('button-action');
    switch(state) {
      case 'unavailable':
        btn.el.innerHTML = this.data.unavailable;
        btn.el.setAttribute('disabled', '');
        break;
      case 'sold out':
        btn.el.innerHTML = this.data.soldOut;
        btn.el.setAttribute('disabled', '');
        break;
      case 'available':
        btn.el.innerHTML = this.data.addToCart;
        btn.el.removeAttribute('disabled');
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/input-fieldset/default/input-fieldset.js
/**
 * @class InputFieldset
 * @classdesc Represents an input of type fieldset
 *
 * @extends Core.Component
 */
class InputFieldset extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.labelEl = el.querySelector('[data-label]');
  }

  /**
   * Gets the fieldset label
   */
  get label() {
    return this.labelEl.innerHTML;
  }

  /**
   * Sets the fieldset label with new content
   *
   * @param {HTMLElement|DOMString|string} content - The content to replace the
   *                                       current labels content with.
   */
  set label(content) {
    if (content instanceof HTMLElement) {
      this.labelEl.innerHTML = '';
      this.labelEl.appendChild(content);
    } else {
      this.labelEl.innerHTML = content;
    }
  }

  setUnavailableValues(values) {
    const existingOptions = [...this.queryAll('input-radio'), ...this.queryAll('input-swatch')];

    existingOptions.forEach(existingOption => {
      existingOption.unavailable = values.some(value => value === existingOption.value);
    });
  }

  disableValues(values) {
    const existingOptions = [...this.queryAll('input-radio'), ...this.queryAll('input-swatch')];

    existingOptions.forEach(existingOption => {
      if (values.some(value => value === existingOption.value)) {
        existingOption.disabled = true;
      }
    });
  }

  removeValues(values) {
    const existingOptions = [...this.queryAll('input-radio'), ...this.queryAll('input-swatch')];

    existingOptions.forEach(existingOption => {
      if (values.some(value => value === existingOption.value)) {
        // This doesn't feel right, maybe we should have a Component.remove(); method?
        existingOption.el.remove();
      }
    });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/input-radio/default/input-radio.js
/**
 * @class InputRadio
 * @classdesc Represents an input of type radio
 *
 * @extends Core.Component
 */
class InputRadio extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.inputEl = el.querySelector('[data-input]');

    // Get all radio inputs with same name and listen to their changes events
    // to sync this component
    // This is anti-pattern for a component but is acceptable because
    // all radio inputs with the same name inherently control each other
    const groupEls = document.querySelectorAll(`input[type="radio"][name="${this.inputEl.name}"]`);

    groupEls.forEach(groupEl => {
      this.events.register(groupEl, 'change', () => {
        if (this.inputEl.checked) {
          this.el.setAttribute('data-checked', '');
        } else {
          this.el.removeAttribute('data-checked');
        }
      });
    });
  }

  get value() {
    return this.inputEl.value;
  }

  get disabled() {
    return this.inputEl.disabled;
  }

  set disabled(disabled) {
    if (disabled) {
      this.el.setAttribute('data-disabled', '');
    } else {
      this.el.removeAttribute('data-disabled');
    }

    this.inputEl.disabled = disabled;
  }

  get checked() {
    return this.inputEl.checked;
  }

  set checked(checked) {
    if (checked) {
      this.el.setAttribute('data-checked', '');
    } else {
      this.el.removeAttribute('data-checked');
    }

    this.inputEl.checked = checked;
  }

  get unavailable() {
    return this.el.hasAttribute('data-unavailable');
  }

  set unavailable(unavailable) {
    if (unavailable) {
      this.el.setAttribute('data-unavailable', '');
    } else {
      this.el.removeAttribute('data-unavailable');
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/input-swatch/default/input-swatch.js
/**
 * @class InputSwatch
 * @classdesc Represents an input of type radio
 *
 * @extends Core.Component
 */
class InputSwatch extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.inputEl = el.querySelector('[data-input]');

    // Get all radio inputs with same name and listen to their changes events
    // to sync this component
    // This is anti-pattern for a component but is acceptable because
    // all radio inputs with the same name inherently control each other
    const groupEls = document.querySelectorAll(`input[type="radio"][name="${this.inputEl.name}"]`);

    groupEls.forEach(groupEl => {
      this.events.register(groupEl, 'change', () => {
        if (this.inputEl.checked) {
          this.el.setAttribute('data-checked', '');
        } else {
          this.el.removeAttribute('data-checked');
        }
      });
    });
  }

  get value() {
    return this.inputEl.value;
  }

  get disabled() {
    return this.inputEl.disabled;
  }

  set disabled(disabled) {
    if (disabled) {
      this.el.setAttribute('data-disabled', '');
    } else {
      this.el.removeAttribute('data-disabled');
    }

    this.inputEl.disabled = disabled;
  }

  get checked() {
    return this.inputEl.checked;
  }

  set checked(checked) {
    if (checked) {
      this.el.setAttribute('data-checked', '');
    } else {
      this.el.removeAttribute('data-checked');
    }

    this.inputEl.checked = checked;
  }

  get unavailable() {
    return this.el.hasAttribute('data-unavailable');
  }

  set unavailable(unavailable) {
    if (unavailable) {
      this.el.setAttribute('data-unavailable', '');
    } else {
      this.el.removeAttribute('data-unavailable');
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/option-selectable-boxes/default/option-selectable-boxes.js
/**
 * @class OptionSelectableBoxes
 * @classdesc Represents an option as selectable boxes
 *
 * @extends Core.Component
 */
class OptionSelectableBoxes extends Core.Component {
  /**
   * Returns the selected value or false if unselected
   */
  get selectedValue() {
    const inputs = [...this.queryAll('input-swatch'), ...this.queryAll('input-radio')];
    const checkedInput = inputs.find(input => input.checked);

    if (checkedInput) {
      return checkedInput.value;
    }

    return false;
  }

  set selectedValue(value) {
    const inputs = [...this.queryAll('input-swatch'), ...this.queryAll('input-radio')];
    const selectedInput = inputs.find(input => input.value === value);

    inputs.forEach(input => {
      if (input === selectedInput) {
        input.checked = true;
      } else {
        input.checked = false;
      }
    });
  }

  get position() {
    return this.data.position;
  }

  onMount() {
    this.events.register(this.el, 'change', () => {
      const inputFieldset = this.query('input-fieldset');
      const { selectedValue } = this;
      const div = document.createElement('div');

      div.innerHTML = this.data.chosen_option.replace('|value|', `<span>${selectedValue}</span>`);

      if (inputFieldset) {
        if (selectedValue) {
          inputFieldset.label = div.innerHTML;
        } else {
          inputFieldset.label = this.data.chose_option;
        }
      }
    });
  }

  setUnavailableValues(values) {
    const inputFieldset = this.query('input-fieldset');

    if (inputFieldset) {
      inputFieldset.setUnavailableValues(values);
    }
  }

  disableValues(values) {
    const inputFieldset = this.query('input-fieldset');

    if (inputFieldset) {
      inputFieldset.disableValues(values);
    }
  }

  removeValues(values) {
    const inputFieldset = this.query('input-fieldset');

    if (inputFieldset) {
      inputFieldset.removeValues(values);
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/input-select/default/input-select.js
/**
 * @class InputSelect
 * @classdesc Represents an input of type select
 *
 * @extends Core.Component
 */
class InputSelect extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.inputEl = el.querySelector('[data-input]');
    this.labelEl = el.querySelector('[data-label]');
  }

  get value() {
    return this.inputEl.value;
  }

  set value(value) {
    this.inputEl.value = value;
  }

  /**
   * Returns the select label
   */
  get label() {
    return this.labelEl.innerHTML;
  }

  /**
   * Sets the select label
   *
   * @param {HTMLElement|DOMString|string} content - The content to replace the
   *                                       current labels content with.
   */
  set label(content) {
    if (content instanceof HTMLElement) {
      this.labelEl.innerHTML = '';
      this.labelEl.appendChild(content);
    } else {
      this.labelEl.innerHTML = content;
    }
  }

  disableValues(values) {
    const existingOptions = this.inputEl.querySelectorAll('option');

    existingOptions.forEach(existingOption => {
      if (values.some(value => value === existingOption.value)) {
        existingOption.setAttribute('disabled', '');
      }
    });

    return null;
  }

  removeValues(values) {
    const existingOptions = this.inputEl.querySelectorAll('option');

    existingOptions.forEach(existingOption => {
      if (values.some(value => value === existingOption.value)) {
        existingOption.remove();
      }
    });

    return null;
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/option-dropdown/default/option-dropdown.js
/**
 * @class OptionDropdown
 * @classdesc Represents an option as dropdown
 *
 * @extends Core.Component
 */
class OptionDropdown extends Core.Component {
  /**
   * Returns the selected value or false if unselected
   */
  get selectedValue() {
    const input = this.query('input-select');

    if (input) {
      return input.value !== '' ? input.value : false;
    }

    return false;
  }

  set selectedValue(value) {
    const input = this.query('input-select');

    input.value = value;
  }

  get position() {
    return this.data.position;
  }

  onMount() {
    this.events.register(this.el, 'change', () => {
      const inputSelect = this.query('input-select');
      const { selectedValue } = this;

      if (inputSelect) {
        if (selectedValue) {
          inputSelect.label = this.data.chosen_option;
        } else {
          inputSelect.label = this.data.chose_option;
        }
      }
    });
  }

  // This method does nothing.
  // It exists to match the selectable boxes interface
  setUnavailableValues() {
    return undefined;
  }

  disableValues(values) {
    const inputSelect = this.query('input-select');

    if (inputSelect) {
      inputSelect.disableValues(values);
    }
  }

  removeValues(values) {
    const inputSelect = this.query('input-select');

    if (inputSelect) {
      inputSelect.removeValues(values);
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/options-selector/default/scripts/options.js
const valueElementType = {
  select: 'option',
  radio: 'input[type="radio"]',
};

function getOptions(optionsEls) {
  const select = [];
  const radio = [];

  for (let i = 0; i < optionsEls.length; i++) {
    const optionEl = optionsEls[i];
    const wrappers = optionEl.matches('[data-variant-option-value-wrapper]')
      ? [optionEl]
      : Array.prototype.slice.call(optionEl.querySelectorAll('[data-variant-option-value-wrapper]'));
    const values = optionEl.matches('[data-variant-option-value]')
      ? [optionEl]
      : Array.prototype.slice.call(optionEl.querySelectorAll('[data-variant-option-value]'));

    if (!values.length) break;

    const option = {
      option: optionEl,
      wrappers,
      values,
    };

    if (values[0].matches(valueElementType.select)) {
      select.push(option);
    } else if (values[0].matches(valueElementType.radio)) {
      radio.push(option);
    }
  }

  return {
    select,
    radio,
  };
}

function getVariantFromSelectedOptions(variants, selectedOptions) {
  for (let i = 0; i < variants.length; i++) {
    const variant = variants[i];
    const isVariant = variant.options.every((option, index) => option === selectedOptions[index]);

    if (isVariant) return variant; // We found the variant
  }

  return false;
}

function _getVariant(variants, options) {
  return variants
    .find(variant => variant.options.every((option, index) => option === options[index]));
}

function _setOptionsMap(
  product,
  selectedOptions,
  optionsMap,
  option1,
  option2 = null,
  option3 = null,
) {
  const updatedOptionsMap = { ...optionsMap };
  const options = [option1, option2, option3].filter(option => !!option);
  const variant = _getVariant(product.variants, options);
  const variantOptionMatches = options.filter(
    (option, index) => option === selectedOptions[index],
  ).length;
  const isCurrentVariant = variantOptionMatches === product.options.length;
  const isNeighbor = variantOptionMatches === product.options.length - 1;

  for (let i = 0; i < options.length; i++) {
    const option = options[i];

    if (option) {
      let {
        setByCurrentVariant,
        setByNeighbor,
        accessible,
        available,
      } = optionsMap[i][option];

      if (variant) {
        accessible = variant.available || accessible;

        // The current variant is always
        // the priority for option availability
        if (isCurrentVariant) {
          setByCurrentVariant = true;
          ({ available } = variant);
        } else if (!setByCurrentVariant && isNeighbor) {
          // If the variant is a neighbor
          // And the option doesn't belong to the variant
          // Use its availability information for the option
          // If multiple neighbors exist, prefer true
          available = setByNeighbor ? available || variant.available : variant.available;
          setByNeighbor = true;
        }
      } else if (isCurrentVariant) {
        // Catch case where current variant doesn't exist
        // Ensure availability is false
        setByCurrentVariant = true;
        available = false;
      } else if (!setByCurrentVariant && isNeighbor) {
        // Catch case where neighbor doesn't exist
        // Ensure availability is false
        // If multiple neighbors exist, prefer true
        available = setByNeighbor ? available : false;
        setByNeighbor = true;
      }

      // If the option isn't set by either
      // the current variant or a neighbor
      // default to general accessibility
      if (!setByCurrentVariant && !setByNeighbor) {
        available = accessible;
      }

      updatedOptionsMap[i][option] = {
        setByCurrentVariant,
        setByNeighbor,
        accessible,
        available,
      };
    }
  }

  return updatedOptionsMap;
}

function getOptionsAccessibility(product, selectedOptions) {
  let optionsMap = product.options.map(() => ({}));

  for (let i = 0; i < product.options.length; i++) {
    for (let j = 0; j < product.variants.length; j++) {
      const variant = product.variants[j];
      const option = variant.options[i];

      optionsMap[i][option] = {
        setByCurrentVariant: false,
        setByNeighbor: false,
        accessible: false,
        available: false,
      };
    }
  }

  const option1Values = optionsMap.length >= 1 ? Object.keys(optionsMap[0]) : [];
  const option2Values = optionsMap.length >= 2 ? Object.keys(optionsMap[1]) : [];
  const option3Values = optionsMap.length >= 3 ? Object.keys(optionsMap[2]) : [];

  option1Values.forEach((option1Value => {
    option2Values.forEach((option2Value => {
      option3Values.forEach((option3Value => {
        optionsMap = _setOptionsMap(
          product,
          selectedOptions,
          optionsMap,
          option1Value,
          option2Value,
          option3Value,
        );
      }));

      if (!option3Values.length) {
        optionsMap = _setOptionsMap(
          product,
          selectedOptions,
          optionsMap,
          option1Value,
          option2Value,
        );
      }
    }));

    if (!option2Values.length) {
      optionsMap = _setOptionsMap(
        product,
        selectedOptions,
        optionsMap,
        option1Value,
      );
    }
  }));

  return optionsMap;
}



;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/options-selector/default/options-selector.js


class OptionsSelector extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.el.style.display = '';
    this._onChangeFn = this._onOptionChange.bind(this);

    this._optionsEls = this.el.querySelectorAll('[data-variant-option]');
  }

  onMount() {
    if (!this.context.product) return;

    const selectedOptions = this.getSelectedOptions();

    this._setOptionVisibility(selectedOptions);
    this._updateOptionAvailability(selectedOptions);

    this.events.register(this.el, 'change', this._onChangeFn);
  }

  getSelectedOptions() {
    const options = [...this.queryAll('option-dropdown'), ...this.queryAll('option-selectable-boxes')];
    const selectedOptions = options.reduce((acc, option) => {
      const { selectedValue } = option;

      if (selectedValue) {
        acc[option.position - 1] = selectedValue;
      }

      return acc;
    }, options.map(() => ''));

    return selectedOptions;
  }

  setSelectedOptions(selectedOptions) {
    const options = [...this.queryAll('option-dropdown'), ...this.queryAll('option-selectable-boxes')];

    options.forEach(option => {
      if (option.position - 1 < selectedOptions.length) {
        option.selectedValue = selectedOptions[option.position - 1];
      }
    });

    this._onOptionChange();
  }

  _setOptionVisibility(selectedOptions) {
    const optionsAccessibility = getOptionsAccessibility(this.context.product, selectedOptions);
    const options = [...this.queryAll('option-dropdown'), ...this.queryAll('option-selectable-boxes')];

    options.forEach(option => {
      const optionValueAccessibility = optionsAccessibility[option.position - 1];

      const inaccessibleValues = Object
        .keys(optionValueAccessibility)
        .filter(value => !optionValueAccessibility[value].accessible);

      if (this.data.remove_unavailable) {
        option.removeValues(inaccessibleValues);
      } else if (this.data.disable_unavailable) {
        option.disableValues(inaccessibleValues);
      }
    });
  }

  _updateOptionAvailability(selectedOptions) {
    const optionsAccessibility = getOptionsAccessibility(this.context.product, selectedOptions);
    const options = [...this.queryAll('option-dropdown'), ...this.queryAll('option-selectable-boxes')];

    options.forEach(option => {
      const optionValueAvailability = optionsAccessibility[option.position - 1];

      const unavailableValues = Object
        .keys(optionValueAvailability)
        .filter(value => !optionValueAvailability[value].available);

      option.setUnavailableValues(unavailableValues);
    });
  }

  _updateVariantSelection(selectedOptions) {
    if (!this.context.product) return;

    const variant = getVariantFromSelectedOptions(
      this.context.product.variants,
      selectedOptions,
    );

    let state = 'selected';

    if (!variant) {
      const isUnselected = selectedOptions.some(option => option === '');

      state = isUnselected ? 'unselected' : 'unavailable';
    }

    const event = new CustomEvent('product:options-change', {
      bubbles: true,
      cancelable: false,
      detail: {
        variant,
        options: selectedOptions,
        state,
      },
    });

    this.el.dispatchEvent(event);
  }

  _onOptionChange() {
    const selectedOptions = this.getSelectedOptions();

    this._updateOptionAvailability(selectedOptions);
    this._updateVariantSelection(selectedOptions);
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/variant-selector/default/variant-selector.js
class VariantSelector extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this._product = this.context.product;
    this._selectedVariant = this._product
      ? this._product.variants.find(v => v.id.toString() === this.context.selected_variant)
      : null;

    const mainInputEl = this.el.querySelector('input[data-variants]');
    this._mainEl = mainInputEl || this.el.querySelector('select[data-variants]');
    this.events.register(this._mainEl, 'change', event => this._onMainElChange(event));
  }

  get product() {
    return this._product;
  }

  get selectedVariant() {
    return this._selectedVariant;
  }

  onMount() {
    this.events.register(this.parent.el, 'product:options-change', event => this._onVariantChange(event));
  }

  _onVariantChange(event) {
    const { variant, state } = event.detail;
    const cancelled = !this._dispatchEvent(variant, state);

    if (!cancelled) {
      this._selectedVariant = variant;
      this._mainEl.value = variant.id;
    }

    return cancelled;
  }

  _onMainElChange(event) {
    const { value: variantId } = event.currentTarget;
    const variant = this._product.variants
      .find(v => v.id.toString() === variantId.toString());
    const cancelled = this._onVariantChange({ detail: { variant, state: variant ? 'unavailable' : 'unselected' } });

    if (cancelled) {
      event.preventDefault();
    }
  }

  _dispatchEvent(variant, state) {
    const event = new CustomEvent('product:variant-change', {
      bubbles: true,
      cancelable: true,
      detail: {
        product: this._product,
        variant,
        state,
      },
    });

    return this.el.dispatchEvent(event);
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/button/default/button.js
class Button extends Core.Component {
  get disabled() {
    return this.el.disabled;
  }

  set disabled(disabled) {
    this.el.disabled = disabled;
  }

  get text() {
    return this.el.innerText;
  }

  set text(text) {
    this.el.innerText = text;
  }

  setAttribute(attribute, value) {
    this.el.setAttribute(attribute, value);
  }

  getAttribute(attribute) {
    this.el.getAttribute(attribute);
  }

  hasAttribute(attribute) {
    this.el.hasAttribute(attribute);
  }

  removeAttribute(attribute) {
    this.el.removeAttribute(attribute);
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/product-card-swatches/default/product-card-swatches.js
/**
 * @class ProductCardSwatches
 * @classdesc This class handles all of the actions of the swatch buttons on the product cards.
 *
 * @extends Core.Component
 */
class ProductCardSwatches extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.swatchButtons = this.el.querySelectorAll('[data-swatch-button]');
    this.showMoreButton = this.el.querySelector('[data-swatches-show-more]');

    this.swatchButtons.forEach(swatchButton => {
      this.events.register(swatchButton, 'click', () => {
        // Fire off event to indicate which swatch was clicked
        let detail = { color: swatchButton.dataset.color }
        if (swatchButton.dataset.variantIndex) {
          detail.variantIndex = parseInt(swatchButton.dataset.variantIndex, 10);
        }

        const clickEvent = new CustomEvent('swatch:update', { detail });
        this.el.dispatchEvent(clickEvent);

        this.swatchButtons.forEach(button => {
          button.dataset.selected = '';
        });

        swatchButton.dataset.selected = 'selected';
      });
    });

    this.hiddenButtonsCheck();
  }

  hiddenButtonsCheck() {
    // We need to hide the swatches that are overflowing the container and handle showing them
    // after clicking the show more button.
    const rowTop = this.swatchButtons[0].getBoundingClientRect().top;

    this.hiddenButtons = [...this.swatchButtons].reduce((hiddenButtons, nextButton) => {
      if (hiddenButtons.length > 0 || nextButton.getBoundingClientRect().top > rowTop) {
        return hiddenButtons.concat(nextButton);
      }

      return hiddenButtons;
    }, []);

    if (this.hiddenButtons.length > 0) {
      // Hide all of the buttons that are overflowing so keyboard can't access them
      this.hiddenButtons.forEach(button => button.classList.add('hidden'));

      this.showMoreButton.innerHTML = this.showMoreButton.innerHTML.replace('count', this.hiddenButtons.length);
      this.el.classList.add('product-card-swatches--collapsed');
      this.showMoreButton.classList.remove('hidden');

      this.events.register(this.showMoreButton, 'click', () => {
        this.el.classList.remove('product-card-swatches--collapsed');
        this.el.classList.add('product-card-swatches--expanded');

        this.hiddenButtons.forEach(button => button.classList.remove('hidden'));
      });
    }

  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/cross-sell-card/default/cross-sell-card.js
/**
 * @class CrossSellCard
 * @classdesc The class for a product cross sell card.
 *
 * @extends Core.Component
 */
class CrossSellCard extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.state = {
      product: this.data.product,
      selectedVariant: this.data.selectedVariant,
    };

    this._imgChangeFn = this._updateSelectedImage.bind(this);
  }

  onMount() {
    this.productImage = this.el.querySelector('[data-product-image]');
    this.productVariantColorLabel = this.el.querySelectorAll('[data-variant-color-label]');
    this.swatches = this.query('product-card-swatches');
    this.selectOptionsLink = this.el.querySelector('[data-cross-sell-card-atc]');
    this.backLink = this.el.querySelector('[data-cross-sell-card-back]');
    this.productDetails = this.el.querySelector('[data-cross-sell-card-details]');
    this.productForm = this.el.querySelector('[data-cross-sell-card-form]');
    this.optionsSelector = this.query('options-selector');

    this._bindEvents();
  }

  onDismount() {
    this.events.unregisterAll();
  }

  /**
   * Binds card events (click event to toggle form etc.)
   */
  _bindEvents() {
    if (this.swatches) {
      this.events.register(this.swatches.el, 'swatch:update', e => {
        this._imgChangeFn(e.detail);
      });

      this.events.register(this.el, 'cross-sell:selected', event => {
        // In the case where the cards are animating from display: none (ie. the 
        // cart drawer), the 'overflowing' swatches won't register on load as hidden
        // because the height of the element is 0.
        // We handle this by emitting an event on the card in the parent element which
        // triggers an extra check for hidden swatches
        setTimeout(() => { this.swatches.hiddenButtonsCheck(); }, 50);
      });
    }

    this.events.register(this.selectOptionsLink, 'click', e => {
      e.preventDefault();
      this._toggleProductForm();
    });

    this.events.register(this.backLink, 'click', e => {
      e.preventDefault();
      this._toggleProductForm();
    });

    this.events.register(this.el, 'product:variant-change', event => this._onVariantChange(event));
  }

  _onVariantChange(event) {
    const { product, variant } = event.detail;
    this.setState({ selectedVariant: variant });

    const buyButtons = this.query('buy-buttons');

    if (variant) {
      if (variant.available) {
        buyButtons.setButtonState('available');
      } else {
        buyButtons.setButtonState('sold out');
      }
    } else {
      buyButtons.setButtonState('unavailable');
    }
  }

  /**
   * Toggle the product form or product details into view
   */
  _toggleProductForm() {
    this.productDetails.classList.toggle('hidden');
    this.productForm.classList.toggle('hidden');

    if (this.optionsSelector) {
      this.optionsSelector.setSelectedOptions(this.state.selectedVariant.options);
    }
  }

  /**
   * When a swatch is selected, change the backround image to that variant image
   * @param color {string} - the name of the variant color to identify the image
   */
  _updateSelectedImage({ color, variantIndex }) {
    const currentImage = this.el.querySelector(`[data-variant-image="${color}"]`);
    const variantImagesContainer = this.el.querySelector('[data-variant-images]');
    const variantImages = variantImagesContainer.querySelectorAll('[data-variant-image]');
    const initialImage = this.el.querySelector('[data-cross-sell-card-img]');

    const variant = this.state.product.variants[variantIndex];

    if (variant && variant.available) {
      this.setState({ selectedVariant: variant });

      this.productVariantColorLabel.forEach(el => {
        const colorString = color.charAt(0).toUpperCase() + color.slice(1);
        el.innerHTML = colorString;
      });

      if (currentImage) {
        variantImagesContainer.classList.add('hidden');

        variantImages.forEach(image => {
          image.classList.add('hidden');
        });

        variantImagesContainer.classList.remove('hidden');
        currentImage.classList.remove('hidden');
        initialImage.classList.add('hidden');
      }
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/product-cross-sell/default/product-cross-sell.js
/**
 * @class ProductCrossSell
 * @classdesc This component fetches content for the cross-sell feature
 *
 * @extends Core.Component
 */

class ProductCrossSell extends Core.Component {
  onMount() {
    this.nextButton = null;
    this.prevButton = null;
  }

  onDismount() {
    this.unload();
  }

  /**
   * Fetches section content via the Shopify recommendations endpoint
   * @param {string} sectionId - the ID of the section to fetch
   */
  fetchRecommendations(sectionId) {
    const url = `${this.data.recommendations_route}?section_id=${sectionId}&product_id=${this.data.product_id}&limit=4`;
    return fetch(url)
      .then(response => response.text())
      .then(text => {
        const html = document.createElement('div');
        html.innerHTML = text;

        this.el.querySelector('[data-cross-sell-content]').innerHTML = html.querySelector('[data-cross-sell-content]').innerHTML;
        this._initAnimations();
        this._bindEvents();
      });
  }

  /**
   * Initialize the animations for switching cards
   */
  _initAnimations() {
    this.cardWrappers = this.el.querySelectorAll('[data-cross-sell-card-wrapper]');
    this.animations = {};
    this.animatingIn = false;
    this.animatingOut = false;

    this.cardWrappers.forEach(el => {
      const { cardIndex } = el.dataset;
      let state = 'hidden';

      if (parseInt(cardIndex) === 1) {
        state = 'visible';
      }

      this.animations[cardIndex] = Core.Animations.transition({ el, state });
    });
  }

  /**
   * Initialize animations
   * Bind click events to previous and next buttons
   */
  _bindEvents() {
    this.nextButton = this.el.querySelector('[data-cross-sell-next]');
    this.prevButton = this.el.querySelector('[data-cross-sell-previous]');

    if (this.nextButton && this.prevButton) {
      this.events.register(this.nextButton, 'click', e => this._nextProduct(e.currentTarget));
      this.events.register(this.prevButton, 'click', e => this._previousProduct(e.currentTarget));
    }
  }

  /**
   * Callback for 'next' button click
   * @param target {element} - the click event's 'currentTarget'
   */
  _nextProduct(target) {
    if (this.animatingIn || this.animatingOut || target.hasAttribute('disabled')) return;

    const selectedEvent = new CustomEvent('cross-sell:selected');
    const selectedCard = this.el.querySelector('[data-cross-sell-selected]');
    const selectedIndex = parseInt(selectedCard.dataset.cardIndex);
    const nextIndex = selectedIndex + 1;
    const nextCard = this.el.querySelector(`[data-card-index="${nextIndex}"]`);
    const navLabel = this.el.querySelector('[data-index-current]');


    if (this.animations[selectedIndex] && this.animations[nextIndex]) {
      this.animatingIn = true;
      this.animatingOut = true;

      if (nextIndex <= this.cardWrappers.length) {
        this.animations[selectedIndex].animateTo('hidden')
          .then(() => {
            this.animatingOut = false;
          });
        this.animations[nextIndex].animateTo('visible')
          .then(() => {
            this.animatingIn = false;
          });

        selectedCard.removeAttribute('data-cross-sell-selected');
        nextCard.setAttribute('data-cross-sell-selected', '');

        const cardComponent = nextCard.querySelector('[data-component="cross-sell-card"]');

        cardComponent.dispatchEvent(selectedEvent);

        navLabel.innerText = nextIndex;

        if (nextIndex === this.cardWrappers.length) {
          this.nextButton.setAttribute('disabled', '');
        }

        if (selectedIndex === 1) {
          this.prevButton.removeAttribute('disabled');
        }
      }
    }
  }

  /**
   * Callback for 'previous' button click
   * @param target {element} - the click event's 'currentTarget'
   */
  _previousProduct(target) {
    if (this.animatingIn || this.animatingOut || target.hasAttribute('disabled')) return;

    const selectedCard = this.el.querySelector('[data-cross-sell-selected]');
    const selectedIndex = parseInt(selectedCard.dataset.cardIndex);
    const nextIndex = selectedIndex - 1;
    const nextCard = this.el.querySelector(`[data-card-index="${nextIndex}"]`);
    const navLabel = this.el.querySelector('[data-index-current]');

    if (this.animations[selectedIndex] && this.animations[nextIndex]) {
      this.animatingIn = true;
      this.animatingOut = true;

      if (nextIndex >= 1) {
        this.animations[selectedIndex].animateTo('hidden')
          .then(() => {
            this.animatingOut = false;
          });

        this.animations[nextIndex].animateTo('visible')
          .then(() => {
            this.animatingIn = false;
          });

        selectedCard.removeAttribute('data-cross-sell-selected');
        nextCard.setAttribute('data-cross-sell-selected', '');

        navLabel.innerText = nextIndex;

        if (nextIndex === 1) {
          this.prevButton.setAttribute('disabled', '');
        }

        if (selectedIndex === this.cardWrappers.length) {
          this.nextButton.removeAttribute('disabled');
        }
      }
    }
  }

  unload() {
    this.events.unregisterAll();
    this.animations = {};
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/input-textarea/default/input-textarea.js
class InputTextarea extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.inputEl = el.querySelector('[data-input]');
  }

  get value() {
    return this.inputEl.value;
  }

  set value(value) {
    this.inputEl.value = value;
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/quantity-selector/default/quantity-selector.js
/**
 * @class QuantitySelector
 * @classdesc Quantity selectors are used to update the quantity of a product. Currently it can be used for the cart and product page.
 *
 * @extends Core.Component
 */
class QuantitySelector extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.buttonPlus = el.querySelector('[data-quantity-plus]');
    this.buttonMinus = el.querySelector('[data-quantity-minus]');
    this.quantityInput = el.querySelector('[data-quantity-input]');

    this.events.register(this.buttonPlus, 'click', e => this._inputChange(e));
    this.events.register(this.buttonMinus, 'click', e => this._inputChange(e));
    this.events.register(this.quantityInput, 'change', e => this._inputChange(e));

    this.inputTimer = null;
  }

  /**
   * Triggered when one of the quantity selector buttons or input is updated.
   * Dispatches an event called `quantity:update` which passes along `quantity` and `actionName` from the quantity selector.
   *
   * @param {Event} e - The event sent by the form being updated.
   * @private
   */
  _inputChange(e) {
    e.preventDefault();
    clearInterval(this.inputTimer);

    const currentTarget = e.target;
    const previousValue = this.quantityInput.value;

    if (currentTarget.name === 'plus') {
      this.quantityInput.stepUp();
    } else if (currentTarget.name === 'minus' && this.quantityInput.value >= 1) {
      this.quantityInput.stepDown();
    }

    if (this.quantityInput.min && this.quantityInput.value < this.quantityInput.min) {
      this.quantityInput.value = this.quantityInput.min;
    } else if (this.quantityInput.max && this.quantityInput.value > this.quantityInput.max) {
      this.quantityInput.value = this.quantityInput.max;
    }

    this.inputTimer = setTimeout(() => {
      // Fire off event to submit the new params to the parent section
      if (previousValue !== this.quantityInput.value || currentTarget.type === 'number') {
        const updateEvent = new CustomEvent('quantity:update', { detail: { quantity: parseInt(this.quantityInput.value, 10), actionName: currentTarget.name } });
        this.el.dispatchEvent(updateEvent);
      }
    }, 500);
  }

  /**
   * Sets focus on targeted element
   *
   * @param {Object} name - The element to focus on.
   */
  focus(name = null) {
    if (name) {
      this.el.querySelector(`[name="${name}"]`).focus();
    } else {
      this.quantityInput.focus();
    }
  }

  /**
   * Returns value of quantity input
   *
   */
  getValue() {
    return this.quantityInput.value;
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/parseItem.js
/**
 * The default template render function. Turns a template string into an image
 * URL.
 *
 * @param {String} template
 * @param {Size} size
 * @returns {String}
 */
function defaultTemplateRender(template, size) {
  return template.replace('{size}', `${size.width}x${size.height}`)
}

/**
 * @type Settings
 */
const defaults = {
  scale: 1,
  template: false,
  templateRender: defaultTemplateRender,
  max: { width: Infinity, height: Infinity},
  round: 32,
  placeholder: false,
  crop: null,
};

/**
 * Get a data attribute value from an element, with a default fallback and
 * sanitization step.
 *
 * @param {Element} el
 *
 * @param {String} name
 *        The data attribute name.
 *
 * @param {Object} options
 *        An object holding fallback values if the data attribute does not
 *        exist. If this object doesn't have the property, we further fallback
 *        to our defaults.
 *
 * @param {Function} [sanitize]
 *        A function to sanitize the data attribute value with.
 *
 * @returns {String|*}
 */
function getData(el, name, options, sanitize) {
  const attr = `data-rimg-${name}`;
  if (!el.hasAttribute(attr)) return options[name] || defaults[name];

  const value = el.getAttribute(attr);

  return sanitize
    ? sanitize(value)
    : value;
}

/**
 * Sanitize data attributes that represent a size (in the form of `10x10`).
 *
 * @param {String} value
 * @returns {Object} An object with `width` and `height` properties.
 */
function parseSize(value) {
  value = value.split('x');
  return { width: parseInt(value[0], 10), height: parseInt(value[1], 10) };
}

/**
 * Sanitize crop values to ensure they are valid, or null
 *
 * @param {String} value
 * @returns {Object} Shopify crop parameter ('top', 'center', 'bottom', 'left', 'right') or null, if an unsupported value is found
 */
function processCropValue(value) {
  switch (value) {
    case 'top':
    case 'center':
    case 'bottom':
    case 'left':
    case 'right':
      return value;
    default:
      return null;
  }
}

/**
 * Loads information about an element.
 *
 * Options can be set on the element itself using data attributes, or through
 * the `options` parameter. Data attributes take priority.
 *
 * @param {HTMLElement} el
 * @param {Settings} options
 * @returns {Item}
 */
function parseItem(el, options = {}) {
  const isImage = el.hasAttribute('data-rimg-template');

  /**
   * @typedef {Settings} Item
   */
  return {
    el,

    // Type of element
    isImage,
    isBackgroundImage: isImage && el.tagName !== 'IMG',

    // Image scale
    scale: parseInt(getData(el, 'scale', options)),

    // Device density
    density: window.devicePixelRatio || 1,

    // Image template URL
    template: getData(el, 'template', options),
    templateRender: options.templateRender || defaults.templateRender,

    // Maximum image dimensions
    max: getData(el, 'max', options, parseSize),

    // Round image dimensions to the nearest multiple
    round: getData(el, 'round', options),

    // Placeholder image dimensions
    placeholder: getData(el, 'placeholder', options, parseSize),

    // Crop value; null if image is uncropped, otherwise equal to the Shopify crop parameter ('center', 'top', etc.)
    crop: getData(el, 'crop', options, processCropValue),
  };
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/roundSize.js
/**
 * Round to the nearest multiple.
 *
 * This is so we don't tax the image server too much.
 *
 * @param {Number} size The size, in pixels.
 * @param {Number} [multiple] The multiple to round to the nearest.
 * @param {Number} [maxLimit] Maximum allowed value - value to return if rounded multiple is above this limit
 * @returns {Number}
 */
function roundSize(size, multiple = 32, maxLimit = Infinity) {
  return size === 0 
    ? multiple 
    : Math.min(Math.ceil(size / multiple) * multiple, maxLimit);
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/getElementSize.js
/**
 * Get the size of an element.
 *
 * If it is too small, it's parent element is checked, and so on. This helps
 * avoid the situation where an element doesn't have a size yet or is positioned
 * out of the layout.
 *
 * @param {HTMLElement} el
 * @return {Object} size
 * @return {Number} size.width The width, in pixels.
 * @return {Number} size.height The height, in pixels.
 */
function getElementSize(el) {
  const size = { width: 0, height: 0 };

  while (el) {
    size.width = el.offsetWidth;
    size.height = el.offsetHeight;
    if (size.width > 20 && size.height > 20) break;
    el = el.parentNode;
  }

  return size;
};

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/supportedDensity.js
/**
 * Return the maximum supported density of the image, given the container.
 *
 * @param {Item} item
 * @param {Size} size
 */

function supportedDensity(item, size) {
  return Math.min(
    Math.min(Math.max(item.max.width / size.width, 1), item.density),
    Math.min(Math.max(item.max.height / size.height, 1), item.density),
  ).toFixed(2);
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/events.js
/**
 * Trigger a custom event.
 *
 * Note: this approach is deprecated, but still required to support older
 * browsers such as IE 10.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
 *
 * @param {HTMLElement} el
 *        The element to trigger the event on.
 *
 * @param {String} name
 *        The event name.
 *
 * @returns {Boolean}
 *          True if the event was canceled.
 */
 function trigger(el, name) {
  const event = document.createEvent('Event');
  event.initEvent(name, true, true);
  return !el.dispatchEvent(event);
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/loadImage.js





/**
 * Set the image URL on the element. Supports background images and `srcset`.
 *
 * @param {Item} item
 * @param {Size} size
 * @param {Boolean} isPlaceholder
 */
function setImage(item, size, isPlaceholder, onLoad) {
  const render = item.templateRender;
  const density = isPlaceholder ? 1 : supportedDensity(item, size);
  const round = isPlaceholder ? 1 : item.round;

  // Calculate the final display size, taking into account the image's
  // maximum dimensions.
  const targetWidth = size.width * density;
  const targetHeight = size.height * density;

  let displaySize;

  if (item.crop) {
    displaySize = {
      width: roundSize(targetWidth, round, item.max.width),
      height: roundSize(targetHeight, round, item.max.height),
    };
  } else {
    // Shopify serves images clamped by the requested dimensions (fitted to the smallest dimension).
    // To get the desired and expected pixel density we need to request cover dimensions (fitted to largest dimension).
    // This isn't a problem with cropped images which are served at the exact dimension requested.
    const containerAspectRatio = size.width / size.height;
    const imageAspectRatio = item.max.width / item.max.height;

    if (containerAspectRatio > imageAspectRatio) {
      // fit width
      displaySize = {
        width: roundSize(targetWidth, round, item.max.width),
        height: roundSize(targetWidth / imageAspectRatio, round, item.max.height),
      };
    } else {
      // fit height
      displaySize = {
        width: roundSize(targetHeight * imageAspectRatio, round, item.max.width),
        height: roundSize(targetHeight, round, item.max.height),
      }
    }
  }

  const url = render(item.template, displaySize);

  // On load callback
  const image = new Image();
  image.onload = onLoad;
  image.src = url;

  // Set image
  if (item.isBackgroundImage) {
    item.el.style.backgroundImage = `url('${url}')`;
  } else {
    item.el.setAttribute('srcset', `${url} ${density}x`);
  }
}

/**
 * Load the image, set loaded status, and trigger the load event.
 *
 * @fires rimg:load
 * @fires rimg:error
 * @param {Item} item
 * @param {Size} size
 */
function loadFullImage(item, size) {
  const el = item.el;

  setImage(item, size, false, (event) => {
    if (event.type === 'load') {
      el.setAttribute('data-rimg', 'loaded');
    } else {
      el.setAttribute('data-rimg', 'error');
      trigger(el, 'rimg:error');
    }

    trigger(el, 'rimg:load');
  });
}

/**
 * Load in a responsive image.
 *
 * Sets the image's `srcset` attribute to the final image URLs, calculated based
 * on the actual size the image is being shown at.
 *
 * @fires rimg:loading
 *        The image URLs have been set and we are waiting for them to load.
 *
 * @fires rimg:loaded
 *        The final image has loaded.
 *
 * @fires rimg:error
 *        The final image failed loading.
 *
 * @param {Item} item
 */
function loadImage(item) {
  const el = item.el;

  // Already loaded?
  const status = el.getAttribute('data-rimg');
  if (status === 'loading' || status === 'loaded') return;

  // Is the SVG loaded?
  // In Firefox, el.complete always returns true so we also check el.naturalWidth,
  // which equals 0 until the image loads
  if (el.naturalWidth == 0
    && el.complete
    && !item.isBackgroundImage) {
    // Wait for the load event, then call load image
    el.addEventListener('load', function cb() {
      el.removeEventListener('load', cb);
      loadImage(item);
    });

    return;
  }

  // Trigger loading event, and stop if cancelled
  if (trigger(el, 'rimg:loading')) return;

  // Mark as loading
  el.setAttribute('data-rimg', 'loading');

  // Get element size. This is used as the ideal display size.
  const size = getElementSize(item.el);

  size.width *= item.scale;
  size.height *= item.scale;

  if (item.placeholder) {
    // Load a placeholder image first, followed by the full image. Force the
    // element to keep its dimensions while it loads. If the image is smaller
    // than the element size, use the image's size. Density is taken into account
    // for HiDPI devices to avoid blurry images.
    if (!item.isBackgroundImage) {
      el.setAttribute('width', Math.min(Math.floor(item.max.width / item.density), size.width));
      el.setAttribute('height', Math.min(Math.floor(item.max.height / item.density), size.height));
    }

    setImage(item, item.placeholder, true, () => loadFullImage(item, size));
  } else {
    loadFullImage(item, size);
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/load.js




/**
 * Prepare an element to be displayed on the screen.
 *
 * Images have special logic applied to them to swap out the different sources.
 *
 * @fires rimg:enter
 *        The element is entering the viewport.
 *
 * @param {HTMLElement} el
 * @param {Settings} options
 */
function load(el, options) {
  if (!el) return;
  trigger(el, 'rimg:enter');

  const item = parseItem(el, options);

  if (item.isImage) {
    if (!item.isBackgroundImage) {
      el.setAttribute('data-rimg-template-svg', el.getAttribute('srcset'));
    }

    loadImage(item);
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/update.js




/**
 * Reset an element's state so that its image can be recalculated.
 *
 * @fires rimg:update
 *        The element is being updated.
 *
 * @param {HTMLElement} el
 * @param {Settings} options
 */
function update(el, options) {
  if (!el) return;
  trigger(el, 'rimg:update');

  const item = parseItem(el, options);

  if (item.isImage) {
    if (!item.isBackgroundImage) {
      el.setAttribute('data-rimg', 'lazy');
      el.setAttribute('srcset', el.getAttribute('data-rimg-template-svg'));
    }

    loadImage(item);
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/inViewport.js
/**
 * Returns true if the element is within the viewport.
 * @param {HTMLElement} el
 * @returns {Boolean}
 */
function inViewport(el) {
  if (!el.offsetWidth || !el.offsetHeight || !el.getClientRects().length) {
    return false;
  }

  const root = document.documentElement;
  const width = Math.min(root.clientWidth, window.innerWidth);
  const height = Math.min(root.clientHeight, window.innerHeight);
  const rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= height &&
    rect.left <= width
  );
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/rimg.js




/**
 * @typedef {Object} Size
 * @property {Number} width
 * @property {Number} height
 */

/**
 * A function to turn a template string into a URL.
 *
 * @callback TemplateRenderer
 * @param {String} template
 * @param {Size} size
 * @returns {String}
 */

/**
 * @typedef {Object} Settings
 *
 * @property {String} [template]
 *           A template string used to generate URLs for an image. This allows us to
 *           dynamically load images with sizes to match the container's size.
 *
 * @property {TemplateRenderer} [templateRender]
 *           A function to turn a template string into a URL.
 *
 * @property {Size} [max]
 *           The maximum available size for the image. This ensures we don't
 *           try to load an image larger than is possible.
 * 
 * @property {Number} [scale]
 *           A number to scale the final image dimensions by. 
 *           Only applies to lazy-loaded images. Defaults to 1.
 *
 * @property {Number} [round]
 *           Round image dimensions to the nearest multiple. This is intended to
 *           tax the image server less by lowering the number of possible image
 *           sizes requested.
 *
 * @property {Size} [placeholder]
 *           The size of the lo-fi image to load before the full image.
 * 
 * @property {String} [crop]
 *           Crop value; null if image is uncropped, otherwise equal 
 *           to the Shopify crop parameter ('center', 'top', etc.).
 */

/**
 * Initialize the responsive image handler.
 *
 * @param {String|HTMLElement|NodeList} selector
 *        The CSS selector, element, or elements to track for lazy-loading.
 *
 * @param {Settings} options
 *
 * @returns {PublicApi}
 */
function rimg(selector = '[data-rimg="lazy"]', options = {}) {
  // Intersections
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        io.unobserve(entry.target);
        load(entry.target, options);
      }
    });
  }, {
    // Watch the viewport, with 20% vertical margins
    rootMargin: '20% 0px',
  });

  /**
   * @typedef {Object} PublicApi
   */
  const api = {
    /**
     * Track a new selector, element, or nodelist for lazy-loading.
     * @type Function
     * @param {String|HTMLElement|NodeList} selector
     */
    track(selector = '[data-rimg="lazy"]') {
      const els = querySelector(selector);

      for (let i = 0; i < els.length; i++) {
        // If an element is already in the viewport, load it right away. This
        // fixes a race-condition with dynamically added elements.
        if (inViewport(els[i])) {
          load(els[i], options);
        } else {
          io.observe(els[i]);
        }
      }
    },

    /**
     * Update element(s) that have already been loaded to force their images
     * to be recalculated.
     * @type Function
     * @param {String|HTMLElement|NodeList} selector
     */
    update(selector = '[data-rimg="loaded"]') {
      const els = querySelector(selector);
      for (let i = 0; i < els.length; i++) update(els[i], options);
    },

    /**
     * Stop tracking element(s) for lazy-loading.
     * @type Function
     * @param {String|HTMLElement|NodeList} selector
     */
    untrack(selector = '[data-rimg]') {
      const els = querySelector(selector);
      for (let i = 0; i < els.length; i++) io.unobserve(els[i]);
    },

    /**
     * Manually load images.
     * @type Function
     * @param {String|HTMLElement|NodeList} selector
     */
    load(selector = '[data-rimg]') {
      const els = querySelector(selector);
      for (let i = 0; i < els.length; i++) {
        load(els[i], options);
      }
    },

    /**
     * Unload all event handlers and observers.
     * @type Function
     */
    unload() {
      io.disconnect();
    },
  };

  // Add initial elements
  api.track(selector);

  return api;
}

/**
 * Finds a group of elements on the page.
 *
 * @param {String|HTMLElement|NodeList} selector
 * @returns {Object} An array-like object.
 */
function querySelector(selector) {
  if (typeof selector === 'string') {
    return document.querySelectorAll(selector);
  }

  if (selector instanceof HTMLElement) {
    return [selector];
  }

  if (selector instanceof NodeList) {
    return selector;
  }

  return [];
}

// EXTERNAL MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/matches.js
var matches = __webpack_require__(771);
;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/scripts/rimgShopify.js



const state = {
  init,
  watch,
  unwatch,
  load: rimgShopify_load,
};

/* harmony default export */ const rimgShopify = (state);

/**
 * Track an element, and its children.
 *
 * @param {HTMLElement} el
 */
function watch(el) {
  // Track element
  if (typeof el.matches === 'function' && el.matches(state.selector)) {
    state.instance.track(el);
  }

  // Track element's children
  state.instance.track(el.querySelectorAll(state.selector));
}

/**
 * Untrack an element, and its children
 *
 * @param {HTMLElement} el
 * @private
 */
function unwatch(el) {
  // Untrack element's children
  state.instance.untrack(el.querySelectorAll(state.selector));

  // Untrack element
  if (typeof el.matches === 'function' && el.matches(state.selector)) {
    state.instance.untrack(el);
  }
}

/**
 * Manually load an image
 *
 * @param {HTMLElement} el
 */
function rimgShopify_load(el) {
  // Load element
  if (typeof el.matches === 'function' && el.matches(state.selector)) {
    state.instance.load(el);
  }

  // Load element's children
  state.instance.load(el.querySelectorAll(state.selector));
}

/**
 * Update an element, and its children.
 *
 * @param {HTMLElement} el
 */
function _update() {
  const currentWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  // Return if we're not 2x smaller, or larger than the existing loading size
  if (currentWidth / state.loadedWidth > 0.5 && currentWidth / state.loadedWidth < 2) {
    return;
  }

  state.loadedWidth = currentWidth;
  state.instance.update();
}

function init(selector = '[data-rimg="lazy"]', options = {}) {
  state.selector = selector;
  state.instance = rimg(selector, options);
  state.loadedWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  const resizeObserver = new ResizeObserver(() => _update());

  resizeObserver.observe(document.body);

  // Listen for Shopify theme editor events
  document.addEventListener('shopify:section:load', event => watch(event.target));

  document.addEventListener('shopify:section:unload', event => unwatch(event.target));

  // Listen for custom events to allow themes to hook into rimg
  document.addEventListener('theme:rimg:watch', event => watch(event.target));

  document.addEventListener('theme:rimg:unwatch', event => unwatch(event.target));

  // Support custom events triggered through jQuery
  // See: https://github.com/jquery/jquery/issues/3347
  if (window.jQuery) {
    jQuery(document).on({
      'theme:rimg:watch': event => watch(event.target),
      'theme:rimg:unwatch': event => unwatch(event.target),
    });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/lazy-img/default/lazy-img.js


// Global instance
rimgShopify.init();

class LazyImg extends Core.Component {
  constructor(el, context) {
    super(el, context);

    rimgShopify.watch(this.el);
  }

  unload() {
    rimgShopify.unwatch(this.el);
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/cart-drawer/default/cart-drawer.js


/**
 * @class CartDrawer
 * @classdesc The cart drawer component is used to handle the cart drawer functionality.
 *
 * @extends Core.Component
 */
class CartDrawer extends Core.Component {
  constructor(el, context) {
    super(el, context);

    // Event listeners that have a different lifecycle to the component
    this._cartDrawerEventListeners = [];

    this.cartDrawer = this.el;
    this.cartDrawerErrors = this.el.querySelector('[data-cart-drawer-form-errors]');
    this.cartDrawerItemErrors = el.querySelectorAll('[data-cart-drawer-form-item-error]');

    this.state = {
      item_count: this.data.item_count,
    };
  }

  onMount() {
    const cartDrawerEl = this.el.querySelector('[data-cart-drawer]');

    this._fetchCartDrawer = Promise.resolve(cartDrawerEl);
    this.drawerModal = Core.Components.getComponent('drawer-modal');

    if (!this.drawerModal) return;

    this.drawerFlyout = this.drawerModal.createFlyout();
    this.enabled = this.data.enabled;

    this._populateFlyout(cartDrawerEl);
  }

  onDismount() {
    super.onDismount();

    if (this.drawerFlyout) {
      this.drawerFlyout.then(drawerFlyout => drawerFlyout.destroy());
    }
  }

  async prefetch() {
    // We fetch the cart drawer template and
    // reapply it to the drawer to get a unique instance of the cart drawer form
    this._fetchCartDrawer = this._fetchCartDrawer
      .then(() => fetch(`${window.PXUTheme.routes.cart_url}?section_id=cart-drawer-template`))
      .then(response => response.text()) // Return text string of the HTML
      .then(html => (
        // Convert the HTML string into a document object
        new DOMParser()
          .parseFromString(html, 'text/html')
          .querySelector('[data-cart-drawer]')
      ));

    return this._fetchCartDrawer;
  }

  /**
   * Opens a cart drawer using a drawer modal
   *
   * @param {HTMLNode} trigger The trigger that was clicked to open the cart drawer
   */
  async open(trigger, refresh = true, itemsAdded = null) {
    if (!this.enabled || !this.drawerFlyout) return;

    const drawerFlyout = await this.drawerFlyout;

    const fetchCartDrawer = (refresh
      ? this.prefetch()
      : this._fetchCartDrawer);

    fetchCartDrawer
      .then(cartDrawerEl => this._populateFlyout(cartDrawerEl, itemsAdded))
      .then(() => {
        this.drawerModal.closeAllFlyouts();
        this.drawerModal.openFlyout(drawerFlyout, trigger);
      });
  }

  async _populateFlyout(cartDrawerEl, itemsAdded = false) {
    const drawerFlyout = await this.drawerFlyout;

    const cartHeadingFragment = cartDrawerEl
      .querySelector('[data-cart-drawer-heading-template]')
      .content
      .cloneNode(true);

    drawerFlyout.populateHeading(cartHeadingFragment, true);

    if (itemsAdded) {
      const notificationFragment = cartDrawerEl.querySelector('[data-cart-drawer-notification-template]').content.cloneNode(true);
      const notificationFragmentMessageText = notificationFragment.querySelector('[data-cart-drawer-notification-message-text]');
      const notificationMessageSingular = notificationFragmentMessageText.querySelector('[data-cart-drawer-notification-message-atc-singular]');
      const notificationMessagePlural = notificationFragmentMessageText.querySelector('[data-cart-drawer-notification-message-atc-plural]');

      if (itemsAdded.length === 1) {
        notificationMessageSingular.innerText = notificationMessageSingular
          .innerText
          .replace('||title||', itemsAdded[0].title);
        notificationMessagePlural.remove();
      } else {
        notificationMessagePlural.innerText = notificationMessagePlural.innerText.replace('||count||', itemsAdded.length);
        notificationMessageSingular.remove();
      }

      drawerFlyout.populateNotification(notificationFragment, true);
    }

    this._destroyCartDrawerListeners();

    drawerFlyout.populateContent(cartDrawerEl, true);

    Core
      .Components
      .awaitComponents(cartDrawerEl)
      .then(components => {
        const productCrossSell = components.find(component => component.name === 'product-cross-sell');

        if (productCrossSell) {
          productCrossSell.fetchRecommendations('cart-drawer-template');
        }
      })
      .then(() => this._createCartDrawerListeners(cartDrawerEl));
  }

  _destroyCartDrawerListeners() {
    this._cartDrawerEventListeners.forEach(cartDrawerEventListener => (
      this.events.unregister(cartDrawerEventListener)
    ));

    this._cartDrawerEventListeners = [];
  }

  /**
   * Initializes the listeners for the cart drawer content.
   *
   * @private
   */
  _createCartDrawerListeners(cartDrawerEl) {
    const cartDrawerCount = cartDrawerEl.querySelector('[data-cart-drawer-count]');
    const cartRows = cartDrawerEl.querySelectorAll('[data-cart-drawer-form-item]');
    const cartNotes = cartDrawerEl.querySelector('[data-cart-notes] [data-component="input-textarea"]');
    const cartDrawerUpdateEvent = this.events.register(
      document,
      'cart:update',
      e => {
        if (cartDrawerCount) {
          cartDrawerCount.innerHTML = e.detail.count;
        }
      },
    );

    this._cartDrawerEventListeners.push(cartDrawerUpdateEvent);

    cartRows.forEach(row => {
      const lineItemKey = row.dataset.cartDrawerFormItem;
      const quantitySelector = row.querySelector('[data-component="quantity-selector"]');
      const buttonRemoveItem = row.querySelector('[data-remove]');

      const quantityChangeEvent = this.events.register(
        quantitySelector,
        'quantity:update',
        e => {
          const { quantity } = e.detail;

          if (quantity === 0) {
            this
              ._removeRow(row)
              .then(() => this._updateLineItem(lineItemKey, 0));
          } else {
            this._updateLineItem(lineItemKey, quantity);
          }
        },
      );

      const removeClickEvent = this.events.register(
        buttonRemoveItem,
        'click',
        e => {
          e.preventDefault();
          this
            ._removeRow(row)
            .then(() => this._updateLineItem(lineItemKey, 0));
        },
      );

      this._cartDrawerEventListeners.push(quantityChangeEvent, removeClickEvent);
    });

    if (cartNotes) {
      const cartNoteChangeEvent = this.events.register(
        cartNotes,
        'input',
        just_debounce_default()(e => this._updateNote(e), 500),
      );

      this._cartDrawerEventListeners.push(cartNoteChangeEvent);
    }
  }

  /**
   * Refreshes the cart content based off of the drawer cart template
   *
   * @param {Number} lineItemKey - The unique key of the line item to update.
   * @param {Number} itemCount - The current quantity of items in the cart
   * @private
   */
  _refreshCart(response, lineItemKey) {
    const { item_count: itemCount, sections } = response;
    const cartDrawerEl = new DOMParser()
      .parseFromString(sections['cart-drawer-template'], 'text/html')
      .querySelector('[data-cart-drawer]');

    this
      ._populateFlyout(cartDrawerEl)
      .then(() => {
        if (this.state.item_count === itemCount) {
          Core
            .Components
            .awaitComponents(cartDrawerEl)
            .then(() => {
              const row = cartDrawerEl.querySelector(`[data-cart-drawer-form-item="${lineItemKey}"]`);
              const targetSelector = Core.Components.getComponent(row.querySelector('[data-component="quantity-selector"]'));
              const inputValue = targetSelector.getValue();

              row
                .querySelector('[data-cart-drawer-form-item-error]')
                .innerHTML = this.data.locales.quantityError.replace('{{ quantity }}', inputValue);
            });
        }

        this.setState({
          item_count: itemCount,
        });

        const updateEvent = new CustomEvent('cart:update', { detail: { count: itemCount }, bubbles: true });
        this.el.dispatchEvent(updateEvent);
      });
  }

  /**
   * Updates the cart with the new quantity and refreshes the innerHTML content.
   *
   * @param {number} lineItemKey - The unique key of the line item to update.
   * @param {object} e - The event object triggered.
   * @private
   */
  _updateLineItem(key, quantity) {
    const formData = {
      id: key,
      quantity,
      sections: 'cart-drawer-template',
      sections_url: `${window.PXUTheme.routes.cart_url}`,
    };

    fetch(`${window.PXUTheme.routes.cart_change_url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(response => this._refreshCart(response, key))
      .catch(error => this._handleError(error));
  }

  /**
   * Handles general error messaging.
   *
   * @param {String} error - The error message to display.
   * @private
   */
  _handleError(error) {
    this.cartDrawerErrors.style.display = 'block';
    this.cartDrawerErrors.innerHTML = this.data.locales.error;

    console.error(error);
  }

  /**
   * Clear error messaging from the cart section.
   *
   * @private
   */
  _clearErrors() {
    this.cartDrawerErrors.style.display = 'none';
    this.cartDrawerErrors.innerHTML = '';
    this.cartDrawerItemErrors.forEach(error => {
      error.innerHTML = '';
    });
  }

  /**
   * Animates the removal of items from the cart
   *
   * @param {object} data - The data object containing the id, key, and row of the item to remove.
   * @private
   */
  _removeRow(rowEl) {
    const animateRemoval = Core.Animations.transition({ el: rowEl, state: 'active' });

    rowEl.style.setProperty('--open-height', `${rowEl.scrollHeight}px`);

    return animateRemoval
      .animateTo('fade')
      .then(() => animateRemoval.animateTo('remove'))
      .then(() => rowEl.remove());
  }

  _updateNote(e) {
    fetch(window.PXUTheme.routes.cart_update_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
      body: JSON.stringify({ note: e.target.value }),
    });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/quickshop/default/quickshop.js
/**
 * @class Quickshop
 * @classdesc The quickshop for a theme that will show a product within it dynamically
 *
 * @extends Core.Component
 */
class Quickshop extends Core.Component {
  constructor(el, context) {
    super(el, context);
    this.loaded = false;
    this.loadedLink = '';
  }

  onMount() {
    this.drawerModal = Core.Components.getComponent('drawer-modal');

    if (!this.drawerModal) return;

    this.drawerFlyout = this.drawerModal.createFlyout();
  }

  onDismount() {
    super.onDismount();

    if (this.drawerFlyout) {
      this.drawerFlyout.then(drawerFlyout => drawerFlyout.destroy());
    }
  }

  /**
   * Opens a quickshop using a drawer modal
   *
   * @param {HTMLNode} trigger The trigger that was clicked to open the quickshop
   * @param {Object} data An object containing data relevant to the quickshop
   * @param {String} data.productLink The link to fetch the product quickshop content
   */
  async open(trigger, data) {
    if (!this.drawerFlyout) return;

    const drawerFlyout = await this.drawerFlyout;

    this.drawerModal.clearFlyout(drawerFlyout);
    this.drawerModal.openFlyout(drawerFlyout, trigger);

    if (!this.loaded || this.loadedLink !== data.productLink) {
      this.loadQuickshop(data)
        .then(() => {
          drawerFlyout.populateHeading(this.headingFragment, true);
          drawerFlyout.populateContent(this.content, true);
          this._bindATCEvent(this.content, drawerFlyout);
        });
    } else {
      drawerFlyout.populateHeading(this.headingFragment, true);
      drawerFlyout.populateContent(this.content, true);
      this._bindATCEvent(this.content, drawerFlyout);
    }
  }

  _bindATCEvent(drawerContent, drawerFlyout) {
    const buyButton = drawerContent.querySelector('[data-component="buy-buttons"]');

    this.events.register(buyButton, 'product:add-to-cart:success', () => {
      this.drawerModal.closeFlyout(drawerFlyout);
      this.loaded = false;
    });
  }

  /**
   *
   * Preloads quickshop for quicker initialization
   *
   * @param {Object} data An object containing data relevant to the quickshop
   * @param {String} data.productLink The link to fetch the product quickshop content
   * @returns {Promise}
   */
  loadQuickshop(data) {
    const { productLink } = data;

    return new Promise(resolve => {
      fetch(productLink.includes('?') ? `${productLink}&view=quickshop` : `${productLink}?view=quickshop`)
        .then(response => response.text()) // Return text string of the HTML
        .then(html => {
          // Convert the HTML string into a document object
          const quickshopComponentEl = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-product-quickshop]');
          const quickshopSectionEl = quickshopComponentEl.parentElement;
          const quickshopHeadingFragment = quickshopSectionEl
            .querySelector('[data-product-quickshop-heading-template]')
            .content
            .cloneNode(true);

          this.headingFragment = quickshopHeadingFragment;
          this.content = quickshopSectionEl;
          this.loaded = true;
          this.loadedLink = productLink;
          resolve();
        });
    });
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/flyout/default/flyout.js
/**
 * @class Flyout
 * @classdesc A instance of the a drawer flyout which can be populated with content
 */
class Flyout extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.flyoutHeaderWrapper = this.el.querySelector('[data-flyout-header-wrapper]');
    this.flyoutHeader = this.el.querySelector('[data-flyout-header]');
    this.flyoutHeading = this.el.querySelector('[data-flyout-heading]');
    this.flyoutNotification = this.el.querySelector('[data-flyout-notification]');
    this.flyoutCloseBtn = this.el.querySelector('[data-flyout-close-btn]');
    this.flyoutContent = this.el.querySelector('[data-flyout-content]');
    this.flyoutFooter = this.el.querySelector('[data-flyout-footer]');

    this.flyoutContent = this.el.querySelector('[data-flyout-content]');
    this.flyoutAnimation = Core.Animations.transition({ el: this.el, state: 'closed' });
    this.flyoutNotificationAnimation = Core.Animations.transition({ el: this.flyoutNotification, state: 'closed' });

    this.events.register(this.flyoutCloseBtn, 'click', () => this.parent.closeFlyout(this));
    this.events.register(this.el, 'click', e => e.stopPropagation());

    this.state = {
      open: false,
      trigger: null,
    };
  }

  onDismount() {
    super.onDismount();

    Core.Utils.scrollUnlock(this.el);
    Core.A11y.removeTrapFocus();
  }

  /**
   * Opens the flyout, traps focus within it, and locks the scroll behaviour
   * on the site (except for this flyout).
   *
   * @param {Boolean} loading If true, will clear the content and set the state to loading
   */
  open(trigger) {
    this.setState({
      open: true,
      trigger,
    });

    this.flyoutAnimation
      .animateTo('open')
      .then(() => this.focus());
  }

  focus() {
    Core.Utils.scrollLock(this.el, this.flyoutContent);

    // Trap focus so that all items within the content are now accessible through keyboard
    Core.A11y.trapFocus(this.el);
  }

  clear() {
    this.clearHeading();
    this.clearNotification();
    this.clearContent();
    this.clearFooter();
  }

  clearHeading() {
    this.flyoutHeader.setAttribute('hidden', '');
    this.flyoutHeading.innerHTML = '';

    if (this.flyoutNotification.hasAttribute('hidden')) {
      this.flyoutHeaderWrapper.setAttribute('hidden', '');
    }
  }

  clearNotification(animate = false) {
    return this.flyoutNotificationAnimation
      .animateTo(
        'closed',
        {
          onStart: () => this.flyoutNotification.style.setProperty('--notification-height', ''),
          force: !animate,
        },
      )
      .then(() => {
        this.flyoutNotification.setAttribute('hidden', '');
        this.flyoutNotification.innerHTML = '';

        if (this.flyoutHeader.hasAttribute('hidden')) {
          this.flyoutHeaderWrapper.setAttribute('hidden', '');
        }
      });
  }

  clearContent() {
    this.flyoutContent.innerHTML = '';
  }

  clearFooter() {
    this.flyoutFooter.setAttribute('hidden', '');
    this.flyoutFooter.innerHTML = '';
  }

  /**
   * Updates the content of the flyout to contain the DOM in contentHTML. If the element is already
   * in the DOM, that element will be moved inside of this flyout and will no longer exist in its
   * original location.
   *
   * @param {HTMLNode} contentNode The content to be placed in the flyout (will be moved in the DOM)
   */
  populateHeading(contentNode, replace = false) {
    if (replace) {
      this.flyoutHeading.innerHTML = '';
    }

    this.flyoutHeading.appendChild(contentNode);
    this.flyoutHeader.removeAttribute('hidden');
    this.flyoutHeaderWrapper.removeAttribute('hidden');

    if (this.state.open) {
      // Trap focus again so that all items within the content are now accessible through keyboard
      Core.A11y.trapFocus(this.el);
    }
  }

  populateNotification(contentNode, replace = false, animate = false, timeout = 0) {
    if (replace) {
      this.flyoutNotification.innerHTML = '';
    }

    this.flyoutNotification.appendChild(contentNode);
    this.flyoutNotification.removeAttribute('hidden');
    this.flyoutHeaderWrapper.removeAttribute('hidden');

    const animation = Promise.resolve();
    const scrollheight = Array
      .from(this.flyoutNotification.children)
      .reduce((acc, child) => (acc + child.scrollHeight), 0);

    if (this.state.open) {
      // Trap focus again so that all items within the content are now accessible through keyboard
      Core.A11y.trapFocus(this.el);

      // Resize the element
      this.flyoutNotification.style.setProperty('--notification-height', `${scrollheight}px`);
    } else {
      animation.then(() => (
        this.flyoutNotificationAnimation
          .animateTo(
            'opened',
            {
              onStart: () => this.flyoutNotification.style.setProperty('--notification-height', `${scrollheight}px`),
              force: !animate,
            },
          )
      ));
    }

    return animation.then(() => {
      if (timeout > 0) {
        setTimeout(() => this.clearNotification(true), timeout);
      }
    });
  }

  /**
   * Updates the content of the flyout to contain the DOM in contentHTML. If the element is already
   * in the DOM, that element will be moved inside of this flyout and will no longer exist in its
   * original location.
   *
   * @param {HTMLNode} contentNode The content to be placed in the flyout (will be moved in the DOM)
   */
  populateContent(contentNode, replace = false) {
    if (replace) {
      this.flyoutContent.innerHTML = '';
    }

    this.flyoutContent.appendChild(contentNode);

    if (this.state.open) {
      // Trap focus again so that all items within the content are now accessible through keyboard
      Core.A11y.trapFocus(this.el);
    }
  }

  populateFooter(contentNode, replace = false) {
    if (replace) {
      this.flyoutFooter.innerHTML = '';
    }

    this.flyoutFooter.appendChild(contentNode);
    this.flyoutFooter.removeAttribute('hidden');

    if (this.state.open) {
      // Trap focus again so that all items within the content are now accessible through keyboard
      Core.A11y.trapFocus(this.el);
    }
  }

  /**
   * Closes this flyout, and then removes the trap focus from it.
   */
  close() {
    this.setState({
      open: false,
      trigger: null,
    });

    return this.flyoutAnimation
      .animateTo('closed')
      .then(() => {
        Core.Utils.scrollUnlock(this.el);
        Core.A11y.removeTrapFocus();
      });
  }

  destroy() {
    this.el.remove();
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/drawer-modal/default/drawer-modal.js
/**
 * @class DrawerModal
 * @classdesc A drawer modal component that can support multiple flyouts with content within them.
 *
 * @extends Core.Component
 */
class DrawerModal extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.template = el.querySelector('[data-drawer-flyout-template]');
    this.events.register(window, 'keyup', e => { if (e.key === 'Escape') this.closeAllFlyouts(); });
    this.events.register(document, 'click', e => {
      if (e.target.tagName !== 'SHOPIFY-INSTALLMENTS-MODAL') {
        this.closeAllFlyouts();
      }
    });
  }

  onMount() {
    this.siteOverlay = Core.Components.getComponent('site-overlay');
  }

  /**
   * Creates a new drawer modal which can be opened and closed.
   * @param {HTMLNode} content The content to be included within the flyout
   * @param {String} direction The direction the flyout should open from, if "left" will open from
   * the left instead of "right".
   * @returns {Flyout} The new flyout object
   */
  createFlyout(content) {
    const flyoutFragment = this.template.content.cloneNode(true);
    const flyoutEl = flyoutFragment.firstElementChild;

    const awaitingFlyoutEl = Core.Components.awaitComponents(flyoutEl);

    this.el.appendChild(flyoutEl);

    return awaitingFlyoutEl
      .then(components => components.find(component => component.el === flyoutEl))
      .then(flyout => {
        if (flyout && content) {
          flyout.populateContent(content);
        }

        return flyout;
      });
  }

  destroyFlyout(flyout) {
    if (!flyout) return;

    flyout.el.remove();
  }

  /**
   * Clears the content in the flyout
   * @param {*} flyout  The flyout to clear
   */
  clearFlyout(flyout) {
    if (!flyout) return;

    flyout.clear();
  }

  /**
   * Opens the flyout.
   * Will show the site overlay if available.
   * @param {*} flyout The flyout to be opened
   * @param {*} trigger The trigger that was clicked to open this flyout
   * @param {*} loading If true, will clear the content of the flyout and set the state to loading
   */
  openFlyout(flyout, trigger) {
    if (!flyout) return;

    if (this.siteOverlay) {
      this.siteOverlay.show();
    }

    flyout.open(trigger);
  }

  /**
   * Closes the flyout that is passed in.
   * @param {Flyout} flyout The flyout to be closed
   */
  closeFlyout(flyout) {
    if (!flyout) return;

    const { trigger } = flyout.state;

    flyout.close();

    const openFlyouts = this.children.filter(f => f.state.open);
    const nextFlyout = openFlyouts.length ? openFlyouts[openFlyouts.length - 1] : null;

    if (nextFlyout) {
      nextFlyout.focus();
    } else {
      if (this.siteOverlay) {
        this.siteOverlay.hide();
      }

      if (trigger) {
        trigger.focus();
      }
    }
  }

  /**
   * Closes all flyouts, returns focus to the first trigger, and removes the scroll lock.
   */
  closeAllFlyouts() {
    const flyouts = this.children;

    flyouts.forEach(flyout => this.closeFlyout(flyout));
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/components/site-overlay/default/site-overlay.js
/**
 * @class SiteOverlay
 * @classdesc An overlay to be placed over the full site content to block interaction
 * with site components while modals are open.
 *
 * @extends Core.Component
 */
class SiteOverlay extends Core.Component {
  constructor(el, context) {
    super(el, context);

    this.overlayAnimation = Core.Animations.transition({ el: this.el, state: 'closed' });
    this.events.register(this.el, 'click', () => this.hide());
    this.events.register(window, 'keyup', e => { if (e.key === 'Escape') this.hide(); });
  }

  /**
   * Shows an overlay over the entire site
   */
  show({ belowHeader = false } = {}) {
    if (belowHeader) {
      this.el.style.setProperty('--index-overlay', 'calc(var(--index-header) - 1)');
    } else {
      this.el.style.removeProperty('--index-overlay');
    }

    this.overlayAnimation.animateTo('open');
  }

  /**
   * Hides the overlay
   */
  hide() {
    this.overlayAnimation.animateTo('closed');
  }
}

;// CONCATENATED MODULE: ./node_modules/@pixelunion/shopify-components/sections/header-password/default/header-password.js


/**
 * @class HeaderPassword
 * @classdesc The header section is used to handle the header functionality.
 *
 * @extends Core.SectionComponent
 */
class HeaderPassword extends Core.SectionComponent {
  constructor(el, context) {
    super(el, context);
    this.header = this.el.querySelector('[data-header-password]');
    this.sticky = this.data.settings.sticky;
    this.showBorder = this.data.settings.show_border;

    this.events.register(document, 'cart:update', e => {
      this._updateCartCount(e.detail.count);
    });

    if (this.sticky && this.showBorder === false) {
      this.events.register(document, 'scroll', just_debounce_default()(() => { this._setStickyShadow(); }, 100, false, true));
    }
  }

  /**
   * On mount, we create the event listeners for the header section.
   */
  onMount() {
    const drawerFragment = this.el.querySelector('[data-drawer]').content.cloneNode(true);
    const { el: embedModalBtnEl } = this.query('button', 'login');
    const drawerModal = Core.Components.getComponent('drawer-modal');

    if (!drawerModal) return;

    this.drawerFlyout = drawerModal.createFlyout(drawerFragment);
    this.drawerFlyout
      .then(drawerFlyout => {
        if (!drawerFlyout) return;

        if (this.data.password_error) {
          drawerFlyout.populateContent(drawerFragment);
          drawerModal.openFlyout(drawerFlyout, embedModalBtnEl);

          this.events.register(drawerFlyout.el, 'header-password-drawer:close', () => drawerModal.closeFlyout(drawerFlyout));
        }

        this.events.register(embedModalBtnEl, 'click', e => {
          e.stopPropagation();
          e.preventDefault();

          drawerFlyout.populateContent(drawerFragment);
          drawerModal.openFlyout(drawerFlyout, embedModalBtnEl);

          this.events.register(drawerFlyout.el, 'header-password-drawer:close', () => drawerModal.closeFlyout(drawerFlyout));
        });
      });

    this.headerToolbar = this.query('header-tool-bar');

    this._setHeightVariables();
    this.events.register(window, 'resize', just_debounce_default()(() => this._setHeightVariables(), 100));
  }

  onDismount() {
    super.onDismount();

    if (this.drawerFlyout) {
      this.drawerFlyout.then(drawerFlyout => drawerFlyout.destroy());
    }
  }

  /**
   * Updates the sticky header logic
   *
   * @private
   */
  _setHeightVariables() {
    this.headerSection = document.querySelector('#shopify-section-header-password');

    if (this.headerToolbar) {
      this.headerToolbarHeight = this.headerToolbar.getHeight();
      this.headerSection.style.setProperty('--announcement-height', `${this.headerToolbarHeight}px`);
    }

    const headerHeight = this.header.getBoundingClientRect().height;
    this.headerSection.style.setProperty('--header-height', `${headerHeight}px`);
  }

  /**
   * Checks the scroll position and sets the sticky shadow
   *
   * @private
   */
  _setStickyShadow() {
    if (window.scrollY > 100) {
      this.header.classList.add('header--shadow');
    } else {
      this.header.classList.remove('header--shadow');
    }
  }
}

;// CONCATENATED MODULE: ../../../../../tmp/paskit-PJMHiI/scripts/components.js














































































Core.Components.register(HeaderPasswordDrawer, 'header-password-drawer');
Core.Components.register(AddTheLookItem, 'add-the-look-item');
Core.Components.register(ShopTheLook, 'shop-the-look');
Core.Components.register(VideoPlayer, 'video-player');
Core.Components.register(BlockPromoImage, 'block-promo-image');
Core.Components.register(BlockPromoText, 'block-promo-text');
Core.Components.register(BlockPromoEditorial, 'block-promo-editorial');
Core.Components.register(PromotionsGrid, 'promotions-grid');
Core.Components.register(ProductRecommendations, 'product-recommendations');
Core.Components.register(ProductDetails, 'product-details');
Core.Components.register(ProductQuickshop, 'product-quickshop');
Core.Components.register(ComplementaryProducts, 'complementary-products');
Core.Components.register(ProductGallery, 'product-gallery');
Core.Components.register(Product, 'product');
Core.Components.register(PageAgeGate, 'page-age-gate');
Core.Components.register(MainSearch, 'main-search');
Core.Components.register(DrawerFilters, 'drawer-filters');
Core.Components.register(FiltersActiveMobile, 'filters-active-mobile');
Core.Components.register(FiltersButtonsMobile, 'filters-buttons-mobile');
Core.Components.register(FacetedFiltersMobile, 'faceted-filters-mobile');
Core.Components.register(FacetedFilters, 'faceted-filters');
Core.Components.register(MainCollectionGrid, 'main-collection-grid');
Core.Components.register(ProductCrossSellSlider, 'product-cross-sell-slider');
Core.Components.register(MainCart, 'main-cart');
Core.Components.register(Blog, 'blog');
Core.Components.register(ImageBanner, 'image-banner');
Core.Components.register(NavigationDrawer, 'navigation-drawer');
Core.Components.register(LiveSearch, 'live-search');
Core.Components.register(BlockMeganav, 'block-meganav');
Core.Components.register(NavigationDesktop, 'navigation-desktop');
Core.Components.register(BlockAnnouncement, 'block-announcement');
Core.Components.register(HeaderToolBar, 'header-tool-bar');
Core.Components.register(Header, 'header');
Core.Components.register(Disclosure, 'disclosure');
Core.Components.register(CrossBorder, 'cross-border');
Core.Components.register(Share, 'share');
Core.Components.register(ProductPage, 'product-page');
Core.Components.register(ProductSizeGuideDrawer, 'product-size-guide-drawer');
Core.Components.register(ProductSizeGuide, 'product-size-guide');
Core.Components.register(ProductGalleryModal, 'product-gallery-modal');
Core.Components.register(MediaModel, 'media-model');
Core.Components.register(MediaExternalVideo, 'media-external-video');
Core.Components.register(MediaVideo, 'media-video');
Core.Components.register(FeaturedProductGallery, 'featured-product-gallery');
Core.Components.register(FeaturedProduct, 'featured-product');
Core.Components.register(ProductCard, 'product-card');
Core.Components.register(ProductCardSlider, 'product-card-slider');
Core.Components.register(CustomerAddressForm, 'customer-address-form');
Core.Components.register(CartDrawerTemplate, 'cart-drawer-template');
Core.Components.register(AgeGate, 'age-gate');
Core.Components.register(ButtonText, 'button-text');
Core.Components.register(SurfacePickUpDrawer, 'surface-pick-up-drawer');
Core.Components.register(SurfacePickUp, 'surface-pick-up');
Core.Components.register(Notification, 'notification');
Core.Components.register(GiftCardRecipientForm, 'gift-card-recipient-form');
Core.Components.register(ButtonAction, 'button-action');
Core.Components.register(BuyButtons, 'buy-buttons');
Core.Components.register(InputFieldset, 'input-fieldset');
Core.Components.register(InputRadio, 'input-radio');
Core.Components.register(InputSwatch, 'input-swatch');
Core.Components.register(OptionSelectableBoxes, 'option-selectable-boxes');
Core.Components.register(InputSelect, 'input-select');
Core.Components.register(OptionDropdown, 'option-dropdown');
Core.Components.register(OptionsSelector, 'options-selector');
Core.Components.register(VariantSelector, 'variant-selector');
Core.Components.register(Button, 'button');
Core.Components.register(ProductCardSwatches, 'product-card-swatches');
Core.Components.register(CrossSellCard, 'cross-sell-card');
Core.Components.register(ProductCrossSell, 'product-cross-sell');
Core.Components.register(InputTextarea, 'input-textarea');
Core.Components.register(QuantitySelector, 'quantity-selector');
Core.Components.register(LazyImg, 'lazy-img');
Core.Components.register(CartDrawer, 'cart-drawer');
Core.Components.register(Quickshop, 'quickshop');
Core.Components.register(Flyout, 'flyout');
Core.Components.register(DrawerModal, 'drawer-modal');
Core.Components.register(SiteOverlay, 'site-overlay');
Core.Components.register(HeaderPassword, 'header-password');
})();

/******/ })()
;
//# sourceMappingURL=components.js.map?1705431153389