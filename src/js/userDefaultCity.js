const key = '969b2ddf4e224eccb47230525222711';
var city = 'wollongong';


const showDefaultCity = function(){window.addEventListener('load', e=>{ 
    
    var defaultCityDiv = document.getElementById('defaultCity');
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
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
})};

export{showDefaultCity};