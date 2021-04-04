/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiToken.js":
/*!*************************!*\
  !*** ./src/apiToken.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiToken = '3f06e2b0078f1ce055f5891af19c4e57';\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiToken);\n\n//# sourceURL=webpack://weather-app/./src/apiToken.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDisplay */ \"./src/weatherDisplay.js\");\n/* harmony import */ var _weatherFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherFetch */ \"./src/weatherFetch.js\");\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content');\r\n\r\ncontentDiv.appendChild(_weatherDisplay__WEBPACK_IMPORTED_MODULE_0__.default);\r\n\r\ndocument.onload = (0,_weatherFetch__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherDisplay.js":
/*!*******************************!*\
  !*** ./src/weatherDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherDisplay = document.createElement('h1');\r\n    weatherDisplay.innerText = 'Today\\'s Weather';\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherDisplay);\n\n//# sourceURL=webpack://weather-app/./src/weatherDisplay.js?");

/***/ }),

/***/ "./src/weatherFetch.js":
/*!*****************************!*\
  !*** ./src/weatherFetch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiToken */ \"./src/apiToken.js\");\n\r\n\r\n\r\nfunction weatherFetch(){\r\n    let cityName = 'London';\r\n    \r\n    let apiKeyUrl = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${_apiToken__WEBPACK_IMPORTED_MODULE_0__.default}`;\r\n    \r\n    fetch(apiKeyUrl,{mode: 'cors'})\r\n        .then(function(res){\r\n            // console.log('returned json');\r\n            console.log(res);\r\n        })\r\n        .catch(function(err){\r\n            console.log(err);\r\n        });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherFetch);\n\n//# sourceURL=webpack://weather-app/./src/weatherFetch.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;