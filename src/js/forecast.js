import { validation } from "./formValidation.js";
import { clearContent } from "./clearContent.js";
const key = '969b2ddf4e224eccb47230525222711';
const invalidCity = document.getElementById('invalideName');
const displayDiv = document.getElementById('weatherResult');
const city = document.getElementById('city');

const weatherForecast = function() {document.getElementById('forecastBtn').addEventListener('click', e=>{
    e.preventDefault();
    validation();
    clearContent();
    var forecastList = document.createElement('ul');
    var listContent = "";
    if (validation()) {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city.value}&days=5&aqi=no&alerts=no`;
        fetch(url).then(response=> response.json()).then(data => {
            listContent +=  `<li><span class="resultHeadLine">${data.location.name}, ${data.location.country} in Next Five Days:<span></li>`
            var forecastData = data.forecast.forecastday;
            forecastData.forEach(element=>{
                    var perDay = {
                        "date": element.date,
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
    }
    }
)
}

export {weatherForecast};