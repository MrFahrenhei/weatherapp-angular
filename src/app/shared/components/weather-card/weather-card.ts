import { Component } from '@angular/core';
import { WeatherCardHeader } from './weather-card-header/weather-card-header';
import { WeatherCardForecast } from './weather-card-forecast/weather-card-forecast';
import { ForecastWeatherViewData } from '../../../models/forecast-weather-view-data.interface';
import { WeatherLocation } from '../../../models/weather-location.interface';

@Component({
  selector: 'app-weather-card',
  imports: [
    WeatherCardHeader,
    WeatherCardForecast
],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.scss',
})
export class WeatherCard {
public weatherCardForecastDayForecast: ForecastWeatherViewData = {
    temp: 283,
    dt: new Date().valueOf() / 1000,
    humidity: 0,
    windSpeed: 0,
    weather: {
      description: 'Light Rain', icon: '10n', main: 'Raining'
    }
  } 
  public weatherLocation: WeatherLocation = {
    name: 'Chicago',
    country : 'US'
  }
}
