import { Component, input } from '@angular/core';
import { WeatherForecastDay } from './weather-forecast-day/weather-forecast-day';
import { ForecastWeatherViewData } from '../../../../models/forecast-weather-view-data.interface';

@Component({
  selector: 'app-weather-card-forecast',
  imports: [
    WeatherForecastDay,
  ],
  templateUrl: './weather-card-forecast.html',
  styleUrl: './weather-card-forecast.scss',
})
export class WeatherCardForecast {
  weatherCardForecastDayForecast = input.required<ForecastWeatherViewData>();
}
