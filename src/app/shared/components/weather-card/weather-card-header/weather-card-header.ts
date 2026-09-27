import { Component, input, inject, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ForecastWeatherViewData } from '../../../../models/forecast-weather-view-data.interface';
import { WeatherLocation } from '../../../../models/weather-location.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-weather-card-header',
  imports: [
    MatIconModule
  ],
  templateUrl: './weather-card-header.html',
  styleUrl: './weather-card-header.scss',
})
export class WeatherCardHeader {
  private sanitizer = inject(DomSanitizer);
  weatherToday = input.required<ForecastWeatherViewData>();
  location = input.required<WeatherLocation>();

  vieWeatherData = computed(()=> {
    const weatherForecast = this.weatherToday();
    return {
      temperature: `${Math.round((weatherForecast.temp - 273) * 100) / 100} º`,
      weatherType: weatherForecast.weather.description,
      humidity: weatherForecast.humidity + "%",
      wind: weatherForecast.windSpeed + ' m/sec'
    }
  })

  weatherIcon = computed(()=>{
    return this.sanitizer.bypassSecurityTrustStyle(`
    https://openweathermap.org/img/wn/${
    this.weatherToday().weather.icon
    }@2x.png`);
  })
}
