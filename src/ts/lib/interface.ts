export interface WeatherInfo {
    name?: string;
    country?: string;
    icon: string;
    text: string;
    date?: string;
    currentTemperature?: string | number;
    maxTemperature?: string | number;
    minTemperature?: string | number;
}