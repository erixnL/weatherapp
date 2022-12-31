import Mustache from 'mustache';
import { WeatherInfo } from '../lib/interface';
import { returnApiInfo } from '../model/dataReturned';
import { UrlGenerator } from '../controllers/urlConstructor';

export class DefaultCity {
    defaultCityDiv = document.querySelector<HTMLDivElement>('#defaultCity');
    // changeButton? = document.getElementById('changeDefault');

    showDefault() {
        var url = new UrlGenerator();
        var targetUrl = url.getDefaultCityUrl();
        returnApiInfo(targetUrl).then(data =>{
            var dataSet: WeatherInfo = {
                icon: "https://" + data.current.condition.icon.split('//')[1],
                "text": data.current.condition.text,
                "currentTemperature": data.current.temp_c,
                "name": data.location.name,
                "country": data.location.country
            };
    
            var template = document.getElementById('userCityTemplate').innerHTML
                var renderedContent = Mustache.render(template, dataSet);
                this.defaultCityDiv.innerHTML = renderedContent; 
                // this.changeDefault();
        })        
    }

    // changeDefault(){
    //     this.changeButton.addEventListener('click', e=> {
    //         e.preventDefault();
    //         var template = document.getElementById('changeTemplate').innerHTML
    //         var renderedContent = Mustache.render(template, undefined);
    //         this.defaultCityDiv.innerHTML = renderedContent;    
    //         var saveDefault = document.getElementById('saveChange');
    //         saveDefault.addEventListener('click', e => {
    //             e.preventDefault();
    //             let newCity = (<HTMLInputElement>document.getElementById('changedCity')).value;
    //             localStorage.setItem("defaultCity", newCity);
    //             this.showDefault();
    //         })
    //     })
    // }
}