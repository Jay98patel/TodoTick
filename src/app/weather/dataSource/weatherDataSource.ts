import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { Weather } from "../model/weather.model";
import { WeatherService } from "../services/weather.service";

export class WeatherDataSource implements DataSource<Weather> {

  private weatherSubject = new BehaviorSubject<Weather[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public searchList: Weather[]
  public loader = this.loadingSubject.asObservable();

  constructor(private WeatherService: WeatherService) { }

  connect(): Observable<Weather[]> {
    return this.weatherSubject.asObservable();
  }

  disconnect() {
    this.weatherSubject.complete();
    this.loadingSubject.complete();
  }

  loadWeather(_like: string = '', q = '', _sort: string = '', _order = 'asc', _page = 0, _limit = 3) {
    this.loadingSubject.next(true);
    this.WeatherService.fetchWeather(_like, q, _sort, _order, _page + 1, _limit)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        weather => {
          this.weatherSubject.next(weather);
          this.searchList = weather
          console.log(this.searchList)
        }
      );
  }

}