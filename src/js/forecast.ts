import { validation } from "./formValidation";
import { clearContent } from "./clearContent";
import Mustache from 'mustache';
const key: string = 'd5b2e1a2f78a432e82221541221212';
const invalidCity = document.getElementById('invalideName');
const displayDiv = document.getElementById('weatherResult');
const city = (<HTMLInputElement>document.getElementById('city'));

const weatherForecast = function(): void {document.getElementById('forecastBtn').addEventListener('click', e=>{
    e.preventDefault();
    validation();
    clearContent();
    var forecastList = document.createElement('ul');
    var listContent = "";
    if (validation()) {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city.value}&days=5&aqi=no&alerts=no`;
         fetch(url).then(response=> response.json()).then(data => {
            listContent +=  `<li><span class="resultHeadLine">${data.location.name}, ${data.location.country} in Next Three Days:<span></li>`
            var forecastData = data.forecast.forecastday;
            forecastData.forEach(element =>{
                    var perDay = {
                        "date": element.date.slice(5),
                        "max": element.day.maxtemp_c,
                        "min":element.day.mintemp_c,
                        "icon": "https:" + element.day.condition.icon,
                        "conditionText": element.day.condition.text,
                    };
                    var template = document.getElementById('forecastTemplate').innerHTML
                    var renderedContent = Mustache.render(template, perDay);
                    listContent += renderedContent;     
                });
            if (displayDiv.innerHTML == "") {
                forecastList.innerHTML = listContent;
                displayDiv.appendChild(forecastList);
            };
            
        }).catch(() => {
            invalidCity.style.display = 'block';
        });
        if(window.innerWidth <= 700){
            document.getElementById('defaultCity').style.display = 'none';
        }
        
    }
    }
    );
}

export {weatherForecast};