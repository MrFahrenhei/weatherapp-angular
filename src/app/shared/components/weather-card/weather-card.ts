import { Component } from '@angular/core';
import { WeatherCardHeader } from './weather-card-header/weather-card-header';
import { WeatherForecastDay } from './weather-card-forecast/weather-forecast-day/weather-forecast-day';
import { WeatherCardForecast } from './weather-card-forecast/weather-card-forecast';

@Component({
  selector: 'app-weather-card',
  imports: [
    WeatherCardHeader,
    WeatherCardForecast
],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.scss',
})
export class WeatherCard {}
