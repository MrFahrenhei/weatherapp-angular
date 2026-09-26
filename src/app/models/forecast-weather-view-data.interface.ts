export interface ForecastWeatherViewData{
    dt: number;
    temp: number;
    humidity: number;
    weather: {
        main: string,
        description: string,
        icon: string,
    },
    windSpeed: number;
}