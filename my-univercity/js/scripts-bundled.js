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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wordpress/wp-content/themes/my-univercity/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wordpress/wp-content/themes/my-univercity/css/style.css":
/*!*****************************************************************!*\
  !*** ./wordpress/wp-content/themes/my-univercity/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (2:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| /* 3rd party packages */\\n> @import \\\"normalize.css\\\";\\n| @import \\\"../node_modules/@glidejs/glide/dist/css/glide.core.min.css\\\";\\n| \");\n\n//# sourceURL=webpack:///./wordpress/wp-content/themes/my-univercity/css/style.css?");

/***/ }),

/***/ "./wordpress/wp-content/themes/my-univercity/js/modules/HeroSlider.js":
/*!****************************************************************************!*\
  !*** ./wordpress/wp-content/themes/my-univercity/js/modules/HeroSlider.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '@glidejs/glide'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar HeroSlider = function HeroSlider() {\n  _classCallCheck(this, HeroSlider);\n\n  if (document.querySelector(\".hero-slider\")) {\n    // count how many slides there are\n    var dotCount = document.querySelectorAll(\".hero-slider__slide\").length; // Generate the HTML for the navigation dots\n\n    var dotHTML = \"\";\n\n    for (var i = 0; i < dotCount; i++) {\n      dotHTML += \"<button class=\\\"slider__bullet glide__bullet\\\" data-glide-dir=\\\"=\".concat(i, \"\\\"></button>\");\n    } // Add the dots HTML to the DOM\n\n\n    document.querySelector(\".glide__bullets\").insertAdjacentHTML(\"beforeend\", dotHTML); // Actually initialize the glide / slider script\n\n    var glide = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '@glidejs/glide'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\".hero-slider\", {\n      type: \"carousel\",\n      perView: 1,\n      autoplay: 3000\n    });\n    glide.mount();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSlider);\n\n//# sourceURL=webpack:///./wordpress/wp-content/themes/my-univercity/js/modules/HeroSlider.js?");

/***/ }),

/***/ "./wordpress/wp-content/themes/my-univercity/js/modules/MobileMenu.js":
/*!****************************************************************************!*\
  !*** ./wordpress/wp-content/themes/my-univercity/js/modules/MobileMenu.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MobileMenu = /*#__PURE__*/function () {\n  function MobileMenu() {\n    _classCallCheck(this, MobileMenu);\n\n    this.menu = document.querySelector(\".site-header__menu\");\n    this.openButton = document.querySelector(\".site-header__menu-trigger\");\n    this.events();\n  }\n\n  _createClass(MobileMenu, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      this.openButton.addEventListener(\"click\", function () {\n        return _this.openMenu();\n      });\n    }\n  }, {\n    key: \"openMenu\",\n    value: function openMenu() {\n      this.openButton.classList.toggle(\"fa-bars\");\n      this.openButton.classList.toggle(\"fa-window-close\");\n      this.menu.classList.toggle(\"site-header__menu--active\");\n    }\n  }]);\n\n  return MobileMenu;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\n\n//# sourceURL=webpack:///./wordpress/wp-content/themes/my-univercity/js/modules/MobileMenu.js?");

/***/ }),

/***/ "./wordpress/wp-content/themes/my-univercity/js/scripts.js":
/*!*****************************************************************!*\
  !*** ./wordpress/wp-content/themes/my-univercity/js/scripts.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./wordpress/wp-content/themes/my-univercity/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./wordpress/wp-content/themes/my-univercity/js/modules/MobileMenu.js\");\n/* harmony import */ var _modules_HeroSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/HeroSlider */ \"./wordpress/wp-content/themes/my-univercity/js/modules/HeroSlider.js\");\n // Our modules / classes\n\n\n // Instantiate a new object using our modules/classes\n\nvar mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar heroSlider = new _modules_HeroSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"](); // Allow new JS and CSS to load in browser without a traditional page refresh\n\nif (false) {}\n\n//# sourceURL=webpack:///./wordpress/wp-content/themes/my-univercity/js/scripts.js?");

/***/ })

/******/ });
