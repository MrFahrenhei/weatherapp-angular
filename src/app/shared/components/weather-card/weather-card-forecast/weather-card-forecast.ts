import { Component } from '@angular/core';
import { WeatherForecastDay } from './weather-forecast-day/weather-forecast-day';
import { MatIconModule } from '@angular/material/icon';
import { WeatherCardHeader } from '../weather-card-header/weather-card-header';

@Component({
  selector: 'app-weather-card-forecast',
  imports: [
    WeatherForecastDay,
  ],
  templateUrl: './weather-card-forecast.html',
  styleUrl: './weather-card-forecast.scss',
})
export class WeatherCardForecast {}
