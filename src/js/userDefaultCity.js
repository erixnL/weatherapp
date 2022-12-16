const key = 'd5b2e1a2f78a432e82221541221212';
var defaultCityDiv = document.getElementById('defaultCity')
var defaultCity;
var dataSet = {};

const showDefaultCity = function(){ 
    if (defaultCity == null){
        defaultCity = 'wollongong';
    };
    defaultCity = localStorage.getItem("defaultCity");
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${defaultCity}&aqi=no`;
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
                var renderedContent = Mustache.render(template);
                defaultCityDiv.innerHTML = renderedContent;
                var saveDefault = document.getElementById('saveChange');
                saveDefault.addEventListener('click', function(){
                    e.preventDefault();
                    var newCity = document.getElementById('changedCity').value;
                    localStorage.setItem("defaultCity", newCity);
                    showDefaultCity();
                })
                
            });
        });
}

export{showDefaultCity}
