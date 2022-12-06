/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/formValidation.js
var validation = function formValidate() {
  if (city.value === '') {
    emptyInput.style.display = 'block';
    return false;
  }
  return true;
};

;// CONCATENATED MODULE: ./src/js/clearContent.js
var invalidCity = document.getElementById('invalideName');
var displayDiv = document.getElementById('weatherResult');
var clearContent = function clearContent() {
  emptyInput.style.display = 'none';
  invalidCity.style.display = 'none';
  if (displayDiv.innerHTML != '') {
    displayDiv.innerHTML = '';
  }
};

;// CONCATENATED MODULE: ./src/js/currentWeather.js


var key = '969b2ddf4e224eccb47230525222711';
var currentWeather_invalidCity = document.getElementById('invalideName');
var currentWeather_displayDiv = document.getElementById('weatherResult');
var currentWeather_city = document.getElementById('city');
var currentWeatherSearch = function currentWeatherSearch() {
  document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    validation();
    clearContent();
    if (validation()) {
      var url = "http://api.weatherapi.com/v1/current.json?key=".concat(key, "&q=").concat(currentWeather_city.value, "&aqi=no");
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
        currentWeather_displayDiv.innerHTML = renderedContent;
      })["catch"](function () {
        currentWeather_invalidCity.style.display = 'block';
      });
    }
  });
};

;// CONCATENATED MODULE: ./src/js/forecast.js


var forecast_key = '969b2ddf4e224eccb47230525222711';
var forecast_invalidCity = document.getElementById('invalideName');
var forecast_displayDiv = document.getElementById('weatherResult');
var forecast_city = document.getElementById('city');
var weatherForecast = function weatherForecast() {
  document.getElementById('forecastBtn').addEventListener('click', function (e) {
    e.preventDefault();
    validation();
    clearContent();
    var forecastList = document.createElement('ul');
    if (validation()) {
      var url = "http://api.weatherapi.com/v1/forecast.json?key=".concat(forecast_key, "&q=").concat(forecast_city.value, "&days=5&aqi=no&alerts=no");
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
        forecast_displayDiv.appendChild(forecastList);
      })["catch"](function () {
        forecast_invalidCity.style.display = 'block';
      });
    }
  });
};

;// CONCATENATED MODULE: ./src/js/main.js

var main_emptyInput = document.getElementById('emptyInput');
var main_invalidCity = document.getElementById('invalideName');


document.getElementById('city').onfocus = function () {
  this.value = '';
  main_emptyInput.style.display = 'none';
  main_invalidCity.style.display = 'none';
};
currentWeatherSearch();
weatherForecast();
/******/ })()
;