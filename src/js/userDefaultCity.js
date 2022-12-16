const key = 'd5b2e1a2f78a432e82221541221212';
var defaultCityDiv = document.getElementById('defaultCity')
var defaultCity = 'wollongong';

const showDefaultCity = function(){ 
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${defaultCity}&aqi=no`;
    fetch(url).then(response=> response.json()).then(data => {
        var dataSet = {
             "icon": "https://" + data.current.condition.icon.split('//')[1],
            "text": data.current.condition.text,
            "temp_c": data.current.temp_c,
            "name": data.location.name,
            "country": data.location.country
        };
        var template = document.getElementById('userCityTemplate').innerHTML
        var renderedContent = Mustache.render(template, dataSet);
        defaultCityDiv.innerHTML = renderedContent;
        }); 
};



export{showDefaultCity};