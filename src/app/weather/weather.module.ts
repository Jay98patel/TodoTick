import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherService } from './services/weather.service';
import { WeatherListResolver } from './resolver/weather-list.resolver';

@NgModule({
  declarations: [WeatherComponent, WeatherListComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    AngularMaterialModule
  ],
  providers:[
    WeatherService,
    WeatherListResolver
  ]
})
export class WeatherModule { }
