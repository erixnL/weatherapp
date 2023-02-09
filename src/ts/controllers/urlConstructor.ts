import { validation } from "../lib/validation";

export class UrlGenerator {
    key: string = 'd5b2e1a2f78a432e82221541221212';
    city = document.querySelector<HTMLInputElement>('#city');
    // currentWeatherUrl: string = `http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${this.city.value}&aqi=no`;
    // forecastUrl:string = `http://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${this.city.value}&days=3&aqi=no&alerts=no`;
    

    getDefaultCityUrl() {
        let userDefinedCity = localStorage.getItem("defaultCity");
        if (userDefinedCity == '' || userDefinedCity == null){
            userDefinedCity = 'wollongong';
        }
        return `http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${userDefinedCity}&aqi=no`;
    }

    getCurrentUrl() {
        if (validation()) {
            return `http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${this.city.value}&aqi=no`;
        }
    }

    getForecastUrl() {
        if (validation()) {
            return `http://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${this.city.value}&days=3&aqi=no&alerts=no`;
        }
    }
}










