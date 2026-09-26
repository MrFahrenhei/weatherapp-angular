import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardForecast } from './weather-card-forecast';

describe('WeatherCardForecast', () => {
  let component: WeatherCardForecast;
  let fixture: ComponentFixture<WeatherCardForecast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCardForecast],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherCardForecast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
