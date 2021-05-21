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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDisplay */ \"./src/weatherDisplay.js\");\n/* harmony import */ var _weatherFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherFetch */ \"./src/weatherFetch.js\");\n/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchBar */ \"./src/searchBar.js\");\n\r\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content');\r\n\r\nfunction onStart(){\r\n    contentDiv.appendChild((0,_searchBar__WEBPACK_IMPORTED_MODULE_2__.default)());\r\n}\r\n\r\ndocument.onload = onStart();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/searchBar.js":
/*!**************************!*\
  !*** ./src/searchBar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weatherDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDisplay */ \"./src/weatherDisplay.js\");\n/* harmony import */ var _weatherFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherFetch */ \"./src/weatherFetch.js\");\n\r\n\r\n\r\nconst searchBar = () => {\r\n    const searchInput =  document.createElement('input');\r\n        searchInput.type = 'text';\r\n        searchInput.classList.add('search-bar');\r\n        searchInput.placeholder = 'Enter Location!';\r\n\r\n        searchInput.addEventListener('keydown', (e)=>{\r\n            if(e.key === 'Enter'){\r\n                if(searchInput.value === ''){\r\n                    console.log(\"Enter pressed, nothing to say\");\r\n                } else {\r\n                    (0,_weatherFetch__WEBPACK_IMPORTED_MODULE_1__.default)(searchInput.value);\r\n                    searchInput.value = '';\r\n                }\r\n            }\r\n        });\r\n    return searchInput\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchBar);\n\n//# sourceURL=webpack://weather-app/./src/searchBar.js?");

/***/ }),

/***/ "./src/weatherDisplay.js":
/*!*******************************!*\
  !*** ./src/weatherDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _searchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchBar */ \"./src/searchBar.js\");\n\r\n\r\nfunction weatherDisplay(cityName=\"London\", temperature=\"69\", weatherCondition = 'Cloudy'){\r\n    const contentDiv = document.querySelector('#content');\r\n\r\n    const weatherHeader = document.createElement('h1');\r\n        weatherHeader.innerText = `Today\\'s Weather in ${cityName}`;\r\n        \r\n    // const weatherIcon = document.createElement('span');\r\n    //     weatherIcon.innerHTML = '<i class=\"fas fa-cloud\"></i>';\r\n\r\n    //     weatherHeader.appendChild(weatherIcon);\r\n\r\n    const temperatureDiv = document.createElement('div');\r\n        temperatureDiv.innerText = `The current temperature is ${temperature}`;\r\n\r\n    const weatherConditionDiv = document.createElement('div');\r\n        weatherConditionDiv.innerText = `${weatherCondition}`;\r\n    \r\n    contentDiv.appendChild(weatherHeader);\r\n    contentDiv.appendChild(temperatureDiv);\r\n    contentDiv.appendChild(weatherConditionDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherDisplay);\n\n//# sourceURL=webpack://weather-app/./src/weatherDisplay.js?");

/***/ }),

/***/ "./src/weatherFetch.js":
/*!*****************************!*\
  !*** ./src/weatherFetch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiToken */ \"./src/apiToken.js\");\n/* harmony import */ var _weatherDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherDisplay */ \"./src/weatherDisplay.js\");\n\r\n\r\n\r\n\r\nfunction weatherFetch(cityName=\"London\"){\r\n    \r\n    let apiKeyUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${_apiToken__WEBPACK_IMPORTED_MODULE_0__.default}`;\r\n    \r\n    fetch(apiKeyUrl,{mode: 'cors'})\r\n        .then(res => res.json())\r\n        .then(res => console.log(res))\r\n        .catch(function(err){\r\n            console.log(err);\r\n        });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherFetch);\n\n//# sourceURL=webpack://weather-app/./src/weatherFetch.js?");

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