import { Component, computed, signal } from '@angular/core';
import { ForecastWeatherViewData } from '../../../../../models/forecast-weather-view-data.interface';

const days = ['SUM', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

@Component({
  selector: 'app-weather-forecast-day',
  imports: [],
  templateUrl: './weather-forecast-day.html',
  styleUrl: './weather-forecast-day.scss',
})
export class WeatherForecastDay {
  public weatherCardForecastDayForecast: ForecastWeatherViewData = {
    temp: 283,
    dt: new Date().valueOf() / 1000,
    humidity: 0,
    windSpeed: 0,
    weather: {
      description: 'Light Rain', icon: '10n', main: 'Raining'
    }
  }  
  weatherForecast = signal(this.weatherCardForecastDayForecast);

  dayName = computed(() => {
    const date = new Date(this.weatherForecast().dt * 1000);
    return days[date.getDay()];
  })

  weatherIcon = computed(()=>{
    return `
    https://openweathermap.org/img/wn/${
    this.weatherForecast().weather.icon
    }@2x.png`;
  })
}
