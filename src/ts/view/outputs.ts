import { WeatherInfo } from "../lib/interface";
import Mustache from 'mustache';

export class WeatherResult {
    displayDiv = document.querySelector<HTMLDivElement>('#weatherResult');

    showCurrentWeather(data) {
        var dataSet: WeatherInfo = {
            icon: "https://" + data.current.condition.icon.split('//')[1],
            "text": data.current.condition.text,
            "currentTemperature": data.current.temp_c,
            "name": data.location.name,
            "country": data.location.country
        };
        var template = document.getElementById('template').innerHTML
        var renderedContent = Mustache.render(template, dataSet);
        this.displayDiv.innerHTML = renderedContent;
    }

    showForecast(data) {
        var forecastList = document.createElement('ul');
        var listContent = "";
        listContent +=  `<li><span class="resultHeadLine">${data.location.name}, ${data.location.country} in Next Three Days:<span></li>`
            var forecastData = data.forecast.forecastday;
            forecastData.forEach(element =>{
                    var perDay: WeatherInfo = {
                        "date": element.date.slice(5),
                        "maxTemperature": element.day.maxtemp_c,
                        "minTemperature":element.day.mintemp_c,
                        "icon": "https:" + element.day.condition.icon,
                        "text": element.day.condition.text,
                    };
                    var template = document.getElementById('forecastTemplate').innerHTML
                    var renderedContent = Mustache.render(template, perDay);
                    listContent += renderedContent;     
                });
            if (this.displayDiv.innerHTML == "") {
                forecastList.innerHTML = listContent;
                this.displayDiv.appendChild(forecastList);
            };
    }

}