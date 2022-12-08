import '../css/base.css';
const emptyInput = document.getElementById('emptyInput');
const invalidCity = document.getElementById('invalideName');
import { currentWeatherSearch } from './currentWeather.js';
import { weatherForecast } from './forecast.js';


document.getElementById('city').onfocus=function(){
    this.value=''; 
    emptyInput.style.display = 'none';
    invalidCity.style.display = 'none';
}

currentWeatherSearch();
weatherForecast();


