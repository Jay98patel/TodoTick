import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../../model/weather.model';
import { WeatherService } from '../../services/weather.service';
import { WeatherDataSource } from '../../dataSource/weatherDataSource';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { keyValuePair, masterData } from 'src/app/shared/masterData/masterData';
import { MatSort } from '@angular/material/sort';
import { merge } from 'rxjs';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})

export class WeatherListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  weatherList: Weather[];
  weatherSource: WeatherDataSource;
  error: string;
  searchText: string = '';
  regionSelected: string = '';
  region: keyValuePair[];
  weatherListLength: number;
  displayedColumns = ['id', 'cityName', 'State', 'country', 'windSpeed', 'temparature', 'humidity', 'region'];

  constructor(private route: ActivatedRoute, private weatherService: WeatherService, public regions: masterData) { }

  ngOnInit() {
    this.region = this.regions.Region();
    this.getWeather();
  }

  getWeather() {
    this.route.data.subscribe(
      (weather: { weatherList: Weather[] }) => {
        this.weatherList = weather.weatherList;
        this.weatherSource = new WeatherDataSource(this.weatherService);
        this.weatherSource.loadWeather('', '', '', 'asc', 0, 3);
        this.weatherListLength = this.weatherList.length;
      },
      (error) => {
        this.error = error;
        console.log("error in loading Weather");
      });
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadWeatherPage())
      )
      .subscribe();
  }

  selectedRegion(region) {
    this.regionSelected = region.value.name;
    this.paginator.pageIndex = 0;
    this.loadWeatherPage();
    let result =this.weatherList.filter(x=>
      {
       let bunny:[]= region.value.forEach(
          x2=>{
           return x.region === x2.name
          }
        )
        console.log(bunny)
      })
      console.log(result)
  }

  resetFilter() {
    this.regionSelected = '';
    this.weatherSource.loadWeather('', '', 'asc', this.sort.active, 0, this.paginator.pageSize);
    console.log("Filter Reset")
  }

  onSearchText(searchText) {
    if (searchText.target.value === "") {
      this.searchText = ''
      this.weatherSource.loadWeather('', '', 'asc', this.sort.active, 0, this.paginator.pageSize);
      this.weatherList.length = this.weatherListLength;
    }
    else {
      this.searchText = searchText.target.value;
      this.paginator.pageIndex = 0;
      this.weatherList.length = this.weatherSource.searchList.length;
      this.loadWeatherPage();
    }
  }

  loadWeatherPage() {
    this.weatherSource.loadWeather(
      this.regionSelected,
      this.searchText,
      this.sort.active,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }
}
