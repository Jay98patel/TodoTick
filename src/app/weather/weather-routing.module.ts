import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherListResolver } from './resolver/weather-list.resolver';

const routes: Routes = [
  {
    path: '', component: WeatherListComponent
  },
  {
    path: 'weatherList',
    component: WeatherListComponent,
    resolve: { weatherList: WeatherListResolver }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
