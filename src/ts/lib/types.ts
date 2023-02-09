export type CurrentWeather = {
    current: {
        condition: {
            icon: string;
            text: string;
        }
        temp_c: number;
    };
    location: {
        country: string;
        name: string;
    }
};


export type ForecastWeather = {
    location: {
        country: string;
        name: string;
    };
    forecast: {
        forecastday: [{
            date: string;
            day: {
                maxtemp_c: number;
                mintemp_c: number;
                condition: {
                    icon: string;
                    text: string;
            }
       
    }
        }]
    }     
    }
