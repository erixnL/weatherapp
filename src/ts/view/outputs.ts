import { CurrentWeather, ForecastWeather } from "../lib/types";
import Mustache from 'mustache';

export class WeatherResult {
    displayDiv = document.querySelector<HTMLDivElement>('#weatherResult');

    showCurrentWeather(data: CurrentWeather) {
        var dataSet = {
            icon: "https://" + data.current.condition.icon.split('//')[1],
            "text": data.current.condition.text,
            "currentTemperature": data.current.temp_c,
            "name": data.location.name,
            "country": data.location.country
        };
        var template = document.querySelector<HTMLElement>('#template').innerHTML
        var renderedContent = Mustache.render(template, dataSet);
        this.displayDiv.innerHTML = renderedContent;
    }

    showForecast(data: ForecastWeather) {
        var forecastList = document.createElement('ul');
        var listContent = "";
        listContent +=  `<li><span class="text-xl px-1 block mb:2 md:text-2xl md:px-5 mb-5">${data.location.name}, ${data.location.country} in Next Three Days:<span></li>`
            var forecastData = data.forecast.forecastday;
            forecastData.forEach((forecastday) =>{
                    var perDay = {
                        "date": forecastday.date.slice(5),
                        "maxTemperature": forecastday.day.maxtemp_c,
                        "minTemperature":forecastday.day.mintemp_c,
                        "icon": "https:" + forecastday.day.condition.icon,
                        "text": forecastday.day.condition.text,
                    };
                    var template = document.querySelector<HTMLElement>('#forecastTemplate').innerHTML
                    var renderedContent = Mustache.render(template, perDay);
                    listContent += renderedContent;     
                });
            if (this.displayDiv.innerHTML == "") {
                forecastList.innerHTML = listContent;
                this.displayDiv.appendChild(forecastList);
            };
    }

}