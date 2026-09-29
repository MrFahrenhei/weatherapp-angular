import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface Weather{
  location: {
    name: string;
    country: string;
  }
  current: {
    condition: {
      text: string;
      icon: string;
    }
    temp_c: number;
    humidity: number;
  };
}


@Injectable({
  providedIn: 'root',
})
export class Place {
  private http = inject(HttpClient);
  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      'https://api.weatherapi.com/v1/current.json',
      { params: {q: city ,key: environment.weatherApiKey } }
    );
  }

}
