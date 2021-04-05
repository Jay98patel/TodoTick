import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../../model/weather.model';
import { WeatherService } from '../../services/weather.service';
import { WeatherDataSource } from '../../dataSource/weatherDataSource';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit, AfterViewInit {
  weatherList: Weather[];
  weatherSource: WeatherDataSource;
  error: string;
  displayedColumns = ['id', 'cityName', 'State', 'country', 'windSpeed', 'temparature', 'humidity', 'region'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private router: Router, private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.route.data.subscribe(
      (weather: { weatherList: Weather[] }) => {
        this.weatherList = weather.weatherList;
        this.weatherSource = new WeatherDataSource(this.weatherService);
        this.weatherSource.loadWeather('', 'asc', 0, 3);
        console.log(this.weatherList?.length)
      },
      (error) => {
        this.error = error;
        console.log("error in loading Weather");
      });
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadWeatherPage())
      )
      .subscribe();
  }

  loadWeatherPage() {
    this.weatherSource.loadWeather(
      '',
      'asc',
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }
}
