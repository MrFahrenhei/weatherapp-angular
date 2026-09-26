import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastDay } from './weather-forecast-day';

describe('WeatherForecastDay', () => {
  let component: WeatherForecastDay;
  let fixture: ComponentFixture<WeatherForecastDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherForecastDay],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherForecastDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
