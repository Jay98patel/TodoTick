import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../model/weather.model';

@Injectable()
export class WeatherService {
  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = environment.apiUrl;
  }

  getWeatherList(): Observable<Weather[]> {
    return this.http.get<Weather[]>(`${this.baseURL}/weather`)
  }

  fetchWeather(_like: string, q = '', _sort: string = '', _order = 'asc', _page = 0, _limit = 3): Observable<Weather[]> {
    let params = new HttpParams()
    if (_like) {
      params = params.set('region', _like)
    }
    return this.http.get<Weather[]>(`${this.baseURL}/weather/`, {
      params: params
        .set('q', q)
        .set('_sort', _sort)
        .set('_order', _order)
        .set('_page', _page.toString())
        .set('_limit', _limit.toString())
    });
  }
}