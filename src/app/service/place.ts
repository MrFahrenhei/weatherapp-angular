import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, throwError } from 'rxjs';

interface GeoResult {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

export interface Weather{
  name: string;
  main: {temp:number};
  weather: {main: string; icon: string}[];
}

const API_KEY = "dfeea90d3ae79e96f8e5ed0e7aa7e4ad";

@Injectable({
  providedIn: 'root',
})
export class Place {
  private http = inject(HttpClient);
  getWeather(city: string): Observable<Weather>{
     return this.http
      .get<GeoResult[]>('https://api.openweathermap.org/geo/1.0/direct', {
        params: { q: city, limit: 1, appid: API_KEY },
      })
      .pipe(
        switchMap((places) => {
          if (places.length === 0) {
            return throwError(() => new Error('City not found'));
          }
          const { lat, lon } = places[0];

          return this.http.get<Weather>(
            'https://api.openweathermap.org/data/4.0/onecall/current',
            { params: { lat, lon, appid: API_KEY, units: 'metric' } }
          );
        })
      );
  }
}
