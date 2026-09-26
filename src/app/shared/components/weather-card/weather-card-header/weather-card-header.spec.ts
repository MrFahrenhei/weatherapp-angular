import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardHeader } from './weather-card-header';

describe('WeatherCardHeader', () => {
  let component: WeatherCardHeader;
  let fixture: ComponentFixture<WeatherCardHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherCardHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherCardHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
