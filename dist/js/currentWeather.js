import { validation } from "./formValidation";
import { clearContent } from "./clearContent";
const key = '969b2ddf4e224eccb47230525222711';
const invalidCity = document.getElementById('invalideName');
const displayDiv = document.getElementById('weatherResult');
const city = document.getElementById('city');

const currentWeatherSearch = function () {document.getElementById('submit').addEventListener('click', e=>{
    e.preventDefault(); 
    validation();
    clearContent();
    if (validation()) {
        const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city.value}&aqi=no`;
        fetch(url).then(response=> response.json()).then(data => {
            var dataSet = {
                "icon": "https://" + data.current.condition.icon.split('//')[1],
                "text": data.current.condition.text,
                "temp_c": data.current.temp_c,
                "name": data.location.name,
                "country": data.location.country
            };
            var template = document.getElementById('template').innerHTML
            var renderedContent = Mustache.render(template, dataSet);
            displayDiv.innerHTML = renderedContent;
        }).catch(() => {
            invalidCity.style.display = 'block';
        });
    }
    }
)
}

export {currentWeatherSearch};