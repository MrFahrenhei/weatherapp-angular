import { Component } from '@angular/core';
import { MainHeader } from '../../shared/components/main-header/main-header';
import { LocationSearch } from '../../shared/components/location-search/location-search';
import { WeatherCard } from '../../shared/components/weather-card/weather-card';

@Component({
  selector: 'app-main-page',
  imports: [
    MainHeader,
    LocationSearch,
    WeatherCard
   ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
