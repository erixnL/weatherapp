import Mustache from 'mustache';
import { CurrentWeather} from '../lib/types';
import { returnApiInfo } from './dataReturned';
import { UrlGenerator } from '../controllers/urlConstructor';


export class DefaultCity {
    defaultCityDiv = document.querySelector<HTMLDivElement>('#defaultCity');

    showDefault() {
        var url = new UrlGenerator();
        var targetUrl = url.getDefaultCityUrl();
        returnApiInfo(targetUrl).then((data: CurrentWeather) => { 
            var dataSet = {
                icon: "https://" + data.current.condition.icon.split('//')[1],
                text: data.current.condition.text,
                currentTemperature: data.current.temp_c,
                name: data.location.name,
                country: data.location.country
            };
    
            var template = document.querySelector<HTMLElement>('#userCityTemplate').innerHTML
                var renderedContent = Mustache.render(template, dataSet);
                this.defaultCityDiv.innerHTML = renderedContent; 
       
        }).then(() =>{
            var changeButton = document.querySelector<HTMLButtonElement>('#changeDefault');
            changeButton.addEventListener('click', e=> {
                e.preventDefault();
                var template = document.querySelector('#changeTemplate').innerHTML
                var renderedContent = Mustache.render(template, undefined);
                this.defaultCityDiv.innerHTML = renderedContent;    
                var saveDefault = document.querySelector('#saveChange');
                    saveDefault.addEventListener('click', e => {
                    e.preventDefault();
                    let newCity = document.querySelector<HTMLInputElement>('#changedCity').value;
                        localStorage.setItem("defaultCity", newCity);    
                        this.showDefault();
                        })
                })
        })     
    }
}