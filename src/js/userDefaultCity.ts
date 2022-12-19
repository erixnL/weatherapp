import Mustache from 'mustache';
const key: string = 'd5b2e1a2f78a432e82221541221212';
let defaultCityDiv: HTMLElement = document.getElementById('defaultCity');
let defaultCity: string = 'wollongong';
let dataSet = {};

const showDefaultCity = function(): void { 
    defaultCity = localStorage.getItem("defaultCity");
    const url: string = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${defaultCity}&aqi=no`;
    fetch(url).then(response=> response.json()).then(data => {
            dataSet = {
                "icon": "https://" + data.current.condition.icon.split('//')[1],
                "text": data.current.condition.text,
                "temp_c": data.current.temp_c,
                "name": data.location.name,
                "country": data.location.country
            };
            return dataSet;

        }).then(dataSet => {
            var template = document.getElementById('userCityTemplate').innerHTML
            var renderedContent = Mustache.render(template, dataSet);
            defaultCityDiv.innerHTML = renderedContent; 
            var changeButton = document.getElementById('changeDefault');
            changeButton.addEventListener('click', e=> {
                e.preventDefault();
                var template = document.getElementById('changeTemplate').innerHTML
                var renderedContent = Mustache.render(template, undefined);
                defaultCityDiv.innerHTML = renderedContent;
                var saveDefault = document.getElementById('saveChange');
                saveDefault.addEventListener('click', function(): void {
                    e.preventDefault();
                    let newCity = (<HTMLInputElement>document.getElementById('changedCity')).value;
                    localStorage.setItem("defaultCity", newCity);
                    showDefaultCity();
                })
                
            });
        });
}

export{showDefaultCity}
