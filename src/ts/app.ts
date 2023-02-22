import '../input.css';
import { WeatherSearch } from "./controllers/userSearch";
import { onfocusReset } from './lib/contentReset';
import { DefaultCity } from './model/defaultCity';


onfocusReset();
const newUserSearch = new WeatherSearch();
const userDefaultCity  = new DefaultCity();
userDefaultCity.showDefault();
newUserSearch.searchCurrentWeather();
newUserSearch.searchForecast();

