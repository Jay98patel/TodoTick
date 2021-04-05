import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { Weather } from "../model/weather.model";
import { WeatherService } from "../services/weather.service";

export class WeatherDataSource implements DataSource<Weather> {

  private weatherSubject = new BehaviorSubject<Weather[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loader = this.loadingSubject.asObservable();

  constructor(private WeatherService: WeatherService) { }

  connect(): Observable<Weather[]> {
    return this.weatherSubject.asObservable();
  }

  disconnect(): void {
    this.weatherSubject.complete();
    this.loadingSubject.complete();
  }

  loadWeather(q= '',_order = 'asc', _page = 0, _limit = 3) {
    this.loadingSubject.next(true);
    this.WeatherService.fetchWeather(q, _order, _page+1, _limit)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        weather => this.weatherSubject.next(weather)
      );
  }
}