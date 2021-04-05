import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../../model/weather.model';
import { WeatherService } from '../../services/weather.service';
import { WeatherDataSource } from '../../dataSource/weatherDataSource';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit, AfterViewInit {
  weather: Weather[];
  weatherSource: WeatherDataSource;
  error: string;
  displayedColumns = ['id', 'cityName', 'State', 'country', 'windSpeed', 'temparature', 'humidity', 'region'];
  constructor(private route: ActivatedRoute, private router: Router, private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.route.data.subscribe((weather: { weatherList: Weather[] }) => {
      this.weather = weather.weatherList;
      this.weatherSource = new WeatherDataSource(this.weatherService);
      this.weatherSource.loadWeather('', 'asc', 0, 3);
    },
      (error) => {
        this.error = error;
        console.log("error in loading Weather");
      });
  }

  ngAfterViewInit() {

  }

}
