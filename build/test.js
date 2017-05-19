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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * browser-simple-loader
 *
 * Simple html5 (based on svg) loader in browser.
 *
 * @author Alexander Usolcev <alexander.usolcev@gmail.com>
 *
 */

var instance = void 0;

var Loader = function () {
    /**
     * The loader main class.
     *
     * @param {{size: Number, duration: Number, radius: Number, colors: [...[]], templates: {style: String, loader: String}, container: Node, className: String }} [config]
     */
    function Loader(config) {
        _classCallCheck(this, Loader);

        if (instance) {
            console.warn('Loader is a singleton. You trying call new Loader() but you have a another instance of Loader on the page. Use them: ', instance);

            return instance;
        }

        this.config = _extends({
            size: 120, // px

            duration: 1, // seconds
            radius: 8, // px
            colors: [['#c5523f', '#f2b736'], ['#f2b736', '#499255'], ['#499255', '#1875e5'], ['#1875e5', '#c5523f']],

            templates: {
                style: null, // <style>....</style>
                loader: null // <svg>....</svg>
            },

            container: document.getElementsByTagName('body')[0], // DOM element

            className: 'browser-simple-loader' // String
        }, config);

        this.loader = document.createElement('div');
        this.loader.className = this.config.className;
        this.loader.innerHTML = this.getStyleTemplate() + this.getLoaderTemplate();

        this.container = this.config.container;

        this.container.appendChild(this.loader);

        instance = this;
    }

    /**
     * Static method to get a instance.
     *
     * @return {*}
     */


    _createClass(Loader, [{
        key: 'getLoaderTemplate',


        /**
         * Method of creating a template for loader.
         *
         * @return {string}
         */
        value: function getLoaderTemplate() {
            var _config = this.config,
                loader = _config.templates.loader,
                size = _config.size,
                duration = _config.duration,
                radius = _config.radius,
                colors = _config.colors;


            return loader || '\n            <svg width="' + size + 'px" height="' + size + 'px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n                <rect x="0" y="0" width="100" height="100" fill="none"></rect>\n                <g transform="rotate(0 50 50)">\n                    <circle r="' + radius + '" cx="20" cy="50" transform="translate(23.4991 -23.4991)">\n                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="' + duration + 's" values="0 0;30 -30" keyTimes="0;1"></animateTransform>\n                        <animate attributeName="fill" dur="' + duration + 's" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="' + colors[0][0] + ';' + colors[0][1] + '"></animate>\n                    </circle>\n                </g>\n                <g transform="rotate(90 50 50)">\n                    <circle r="' + radius + '" cx="20" cy="50" transform="translate(23.4991 -23.4991)">\n                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="' + duration + 's" values="0 0;30 -30" keyTimes="0;1"></animateTransform>\n                        <animate attributeName="fill" dur="' + duration + 's" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="' + colors[1][0] + ';' + colors[1][1] + '"></animate>\n                    </circle>\n                </g>\n                <g transform="rotate(180 50 50)">\n                    <circle r="' + radius + '" cx="20" cy="50" transform="translate(23.4991 -23.4991)">\n                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="' + duration + 's" values="0 0;30 -30" keyTimes="0;1"></animateTransform>\n                        <animate attributeName="fill" dur="' + duration + 's" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="' + colors[2][0] + ';' + colors[2][1] + '"></animate>\n                    </circle>\n                </g>\n                <g transform="rotate(270 50 50)">\n                    <circle r="' + radius + '" cx="20" cy="50" transform="translate(23.4991 -23.4991)">\n                        <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="' + duration + 's" values="0 0;30 -30" keyTimes="0;1"></animateTransform>\n                        <animate attributeName="fill" dur="' + duration + 's" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="' + colors[3][0] + ';' + colors[3][1] + '"></animate>\n                    </circle>\n                </g>\n            </svg>\n        ';
        }

        /**
         * Method of creating a template for styles.
         *
         * @return {string}
         */

    }, {
        key: 'getStyleTemplate',
        value: function getStyleTemplate() {
            var _config2 = this.config,
                style = _config2.templates.style,
                size = _config2.size;


            return style || '\n            <style type="text/css">\n                .browser-simple-loader {\n                    background: rgba(255, 255, 255, 0.5);\n                    bottom: 0;\n                    left: 0;\n                    position: fixed;\n                    right: 0;\n                    top: 0;\n                    z-index: 1000;\n                    display: none;\n                }\n        \n                .browser-simple-loader svg {\n                    position: fixed;\n                    left: 50%;\n                    top: 50%;\n                    z-index: 1001;\n                    margin: -' + size / 2 + 'px 0 0 -' + size / 2 + 'px;\n                }\n            </style>\n        ';
        }

        /**
         * Show loader method.
         *
         * @return {Loader}
         */

    }, {
        key: 'show',
        value: function show() {
            this.loader.style.display = 'block';
            this.container.style.overflow = 'hidden';

            return this;
        }

        /**
         * Hide loader method.
         *
         * @return {Loader}
         */

    }, {
        key: 'hide',
        value: function hide() {
            this.loader.style.display = 'none';
            this.container.style.overflow = '';

            return this;
        }
    }], [{
        key: 'getInstance',
        value: function getInstance() {
            return instance;
        }
    }]);

    return Loader;
}();

/**
 * Export Loader to popular modules.
 */


(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Loader = factory();
    }
})(this, function () {
    return Loader;
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_browser_simple_loader__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__source_browser_simple_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__source_browser_simple_loader__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Test = function Test() {
    _classCallCheck(this, Test);

    var loader = new __WEBPACK_IMPORTED_MODULE_0__source_browser_simple_loader___default.a({
        size: 200
    });

    loader.show();
};

/* harmony default export */ __webpack_exports__["default"] = (new Test());

/***/ })
/******/ ]);