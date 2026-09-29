import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Weather } from '../../service/place'

@Component({
  selector: 'app-weather-forecast',
  imports: [DecimalPipe],
  templateUrl: './weather-forecast.html',
})
export class WeatherForecast {
  weather = input<Weather | null>(null);
  error = input('')
}
