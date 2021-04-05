import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../../model/weather.model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit, AfterViewInit {
  weather: Weather[];
  // weatherSource:WeatherDataSource
  constructor(private route: ActivatedRoute, private router: Router, private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.route.data.subscribe((weather: {weatherList: Weather[]}) => {
      this.weather=weather.weatherList;
    })
  }

  ngAfterViewInit() {

  }

}
