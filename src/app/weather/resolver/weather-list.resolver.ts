import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Weather } from '../model/weather.model';
import { WeatherService } from '../services/weather.service';

@Injectable()

export class WeatherListResolver implements Resolve<Weather[]> {
  constructor(private weatherService: WeatherService) { }

  resolve(): Observable<Weather[]> {
    return this.weatherService.getWeatherList();
  }

}
