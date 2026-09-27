import { Component, computed, signal, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ForecastWeatherViewData } from '../../../../../models/forecast-weather-view-data.interface';
const days = ['SUM', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

@Component({
  selector: 'app-weather-forecast-day',
  imports: [],
  templateUrl: './weather-forecast-day.html',
  styleUrl: './weather-forecast-day.scss',
})
export class WeatherForecastDay {

  private sanitizer = inject(DomSanitizer);
  weatherForecast = input.required<ForecastWeatherViewData>()

  dayName = computed(() => {
    const date = new Date(this.weatherForecast().dt * 1000);
    return days[date.getDay()];
  })

  weatherIcon = computed(()=>{
    return this.sanitizer.bypassSecurityTrustUrl(`
    https://openweathermap.org/img/wn/${
    this.weatherForecast().weather.icon
    }@2x.png`);
  })

  temperature = computed(
    ()=> {
      return `${(this.weatherForecast().temp - 273).toFixed(2)} º`;
    }
  );
}
