import { UrlGenerator } from "./urlConstructor";
import { returnApiInfo } from "../model/dataReturned";
import { WeatherResult } from "../view/outputs";
import { clearContent } from "../lib/contentReset";

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

            }).catch(() => {
                var invalidCity = document.querySelector<HTMLSpanElement>('#invalideName')
                invalidCity.style.display = 'block';
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
            }).catch(() => {
                var invalidCity = document.querySelector<HTMLSpanElement>('#invalideName')
                invalidCity.style.display = 'block';
            });
        })
    }

    }


