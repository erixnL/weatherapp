import { UrlGenerator } from "./urlConstructor";
import { WeatherInfo } from "./interface";

export class weatherSearch {
    currentSearch = document.querySelector<HTMLButtonElement>('#currentBtn');
    forecastSearch = document.querySelector<HTMLButtonElement>('#forecastBtn');

    searchCurrentWeather(){
        this.currentSearch.addEventListener('click', e=>{
            let userObj = new UrlGenerator();
            let targetUrl = userObj.getUserSearchUrl();
            async function returnApiInfo(): Promise<WeatherInfo[]> {
                const response: Response = await fetch(targetUrl);
                const returnedInfo: WeatherInfo[] = await response.json();
                return returnedInfo;
        }
    })
    }

    searchForecast() {
        this.forecastSearch.addEventListener('click', e=>{
            let userObj = new UrlGenerator();
            let targetUrl = userObj.getUserSearchUrl();
            async function returnApiInfo(): Promise<WeatherInfo[]> {
                const response: Response = await fetch(targetUrl);
                const returnedInfo: WeatherInfo[] = await response.json();
                return returnedInfo;
        }
    })
    }
}

