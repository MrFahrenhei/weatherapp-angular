import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-weather-card-header',
  imports: [
    MatIconModule
  ],
  templateUrl: './weather-card-header.html',
  styleUrl: './weather-card-header.scss',
})
export class WeatherCardHeader {}
