const key: string = 'd5b2e1a2f78a432e82221541221212';
const city = (<HTMLInputElement>document.getElementById('city'));

import { validation } from "./validation";
let mainURL = '';

class UrlGenerator {
    url: string;
    
    constructor() {

    }
}
export function defaultCityUrl(): string {
    let userDefinedCity = localStorage.getItem("defaultCity");
    if (userDefinedCity){
        mainURL = mainURL + `current.json?key=${key}&q=${userDefinedCity}&aqi=no`;
    } else {
        mainURL = mainURL + `current.json?key=${key}&q=wollongong&aqi=no`;
    }
    return mainURL;
}

export function currentWeatherUrl(): string {
    if(validation()){
        mainURL = mainURL + `current.json?key=${key}&q=${city}&aqi=no`;
        return mainURL;
    }
}

// export function forecastWeatherUrl(): string {
//     if(validation()){
//         return mainURL + `forecast.json?key=${key}&q=${city.value}&days=5&aqi=no&alerts=no`;
//     }

// }

export {mainURL};









