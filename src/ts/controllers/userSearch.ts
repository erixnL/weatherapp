import { UrlGenerator } from "./urlConstructor";
import { returnApiInfo } from "../model/dataReturned";
import { WeatherResult } from "../view/outputs";
import { clearContent } from "../lib/contentReset";
import { showInvalidError } from "../lib/errorMsg";
require('matchmedia-polyfill');
require('matchmedia-polyfill/matchMedia.addListener');

export class WeatherSearch {
    currentSearch = document.querySelector<HTMLButtonElement>('#currentBtn');
    forecastSearch = document.querySelector<HTMLButtonElement>('#forecastBtn');
    userObj = new UrlGenerator();
    displayDiv = document.querySelector<HTMLDivElement>('#weatherResult');

    searchCurrentWeather(){
        this.currentSearch.addEventListener('click', e=>{
            e.preventDefault();
            let targetUrl = this.userObj.getCurrentUrl();
            clearContent();
            returnApiInfo(targetUrl).then (data => {
                let weatherResult = new WeatherResult();
                weatherResult.showCurrentWeather(data);
                if (matchMedia('only screen and (max-width: 480px)').matches) {
                    document.querySelector('#defaultCity').classList.add('hidden');
                }
            }).catch(() => {
                showInvalidError();
            });
        })
    }

    searchForecast() {
        this.forecastSearch.addEventListener('click', e=>{
            e.preventDefault();
            let targetUrl = this.userObj.getForecastUrl();
            clearContent();
            returnApiInfo(targetUrl).then (data => {
                let weatherResult = new WeatherResult();
                weatherResult.showForecast(data);
                if (matchMedia('only screen and (max-width: 480px)').matches) {
                    document.querySelector('#defaultCity').classList.add('hidden');
                }
            }).catch(() => {
                showInvalidError();
            });
        })
    }
    }


