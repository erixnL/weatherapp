/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentWeatherSearch": () => (/* binding */ currentWeatherSearch)
/* harmony export */ });
/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


var key = '969b2ddf4e224eccb47230525222711';
var invalidCity = document.getElementById('invalideName');
var displayDiv = document.getElementById('weatherResult');
var city = document.getElementById('city');
var currentWeatherSearch = function currentWeatherSearch() {
  document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    (0,_formValidation__WEBPACK_IMPORTED_MODULE_0__.validation)();
    (0,_clearContent__WEBPACK_IMPORTED_MODULE_1__.clearContent)();
    if ((0,_formValidation__WEBPACK_IMPORTED_MODULE_0__.validation)()) {
      var url = "http://api.weatherapi.com/v1/current.json?key=".concat(key, "&q=").concat(city.value, "&aqi=no");
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        var dataSet = {
          "icon": "https://" + data.current.condition.icon.split('//')[1],
          "text": data.current.condition.text,
          "temp_c": data.current.temp_c,
          "name": data.location.name,
          "country": data.location.country
        };
        var template = document.getElementById('template').innerHTML;
        var renderedContent = Mustache.render(template, dataSet);
        displayDiv.innerHTML = renderedContent;
      })["catch"](function () {
        invalidCity.style.display = 'block';
      });
    }
  });
};


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validation": () => (/* binding */ validation)
/* harmony export */ });
var validation = function formValidate() {
  if (city.value === '') {
    emptyInput.style.display = 'block';
    return false;
  }
  return true;
};


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearContent": () => (/* binding */ clearContent)
/* harmony export */ });
var invalidCity = document.getElementById('invalideName');
var displayDiv = document.getElementById('weatherResult');
var clearContent = function clearContent() {
  emptyInput.style.display = 'none';
  invalidCity.style.display = 'none';
  if (displayDiv.innerHTML != '') {
    displayDiv.innerHTML = '';
  }
};


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherForecast": () => (/* binding */ weatherForecast)
/* harmony export */ });
/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


var key = '969b2ddf4e224eccb47230525222711';
var invalidCity = document.getElementById('invalideName');
var displayDiv = document.getElementById('weatherResult');
var city = document.getElementById('city');
var weatherForecast = function weatherForecast() {
  document.getElementById('forecastBtn').addEventListener('click', function (e) {
    e.preventDefault();
    (0,_formValidation__WEBPACK_IMPORTED_MODULE_0__.validation)();
    (0,_clearContent__WEBPACK_IMPORTED_MODULE_1__.clearContent)();
    var forecastList = document.createElement('ul');
    if ((0,_formValidation__WEBPACK_IMPORTED_MODULE_0__.validation)()) {
      var url = "http://api.weatherapi.com/v1/forecast.json?key=".concat(key, "&q=").concat(city.value, "&days=5&aqi=no&alerts=no");
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        var forecastData = data.forecast.forecastday;
        var headLine = document.createElement('li');
        headLine.innerHTML = "<span class=\"resultHeadLine\">".concat(data.location.name, ", ").concat(data.location.country, " in Next Five Days:<span>");
        forecastList.appendChild(headLine);
        forecastData.forEach(function (element) {
          var perDay = {
            "date": element.date,
            "max": element.day.maxtemp_c,
            "min": element.day.mintemp_c,
            "icon": "https:" + element.day.condition.icon,
            "conditionText": element.day.condition.text
          };
          var template = document.getElementById('forecastTemplate').innerHTML;
          var renderedContent = Mustache.render(template, perDay);
          forecastList.innerHTML += renderedContent;
        });
        displayDiv.appendChild(forecastList);
      })["catch"](function () {
        invalidCity.style.display = 'block';
      });
    }
  });
};


/***/ })
/******/ 	]);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _currentWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);

var emptyInput = document.getElementById('emptyInput');
var invalidCity = document.getElementById('invalideName');


document.getElementById('city').onfocus = function () {
  this.value = '';
  emptyInput.style.display = 'none';
  invalidCity.style.display = 'none';
};
(0,_currentWeather__WEBPACK_IMPORTED_MODULE_1__.currentWeatherSearch)();
(0,_forecast__WEBPACK_IMPORTED_MODULE_2__.weatherForecast)();
})();

/******/ })()
;