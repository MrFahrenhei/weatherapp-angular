import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Place, Weather } from '../../service/place';
import { WeatherForecast } from '../weather-forecast/weather-forecast';

@Component({
  selector: 'app-form',
  imports: [
    FormsModule,
    WeatherForecast
  ],
  templateUrl: './form.html',
})
export class Form {
  private weatherService = inject(Place);

  public _message: string = '';
  public weather = signal<Weather | null>(null);
  public error = signal('');

  onSubmit(){
    const city = this._message.trim();
    if (!city) return;
    this.weatherService.getWeather(city).subscribe({
      next: (data)=>{
        this.weather.set(data);
        this.error.set('');
      },
      error: () => {
        this.weather.set(null);
        this.error.set('City not found');
      },
    });
  }
}
