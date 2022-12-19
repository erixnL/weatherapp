import '../css/main.scss';
const emptyInput = document.getElementById('emptyInput');
const invalidCity = document.getElementById('invalideName');
import { showDefaultCity } from './userDefaultCity';
import { currentWeatherSearch } from './currentWeather';
import { weatherForecast } from './forecast';

const city = (<HTMLInputElement>document.getElementById('city'));
city.onfocus = function(){
    city.value=''; 
    emptyInput.style.display = 'none';
    invalidCity.style.display = 'none';
}

showDefaultCity();
currentWeatherSearch();
weatherForecast();



