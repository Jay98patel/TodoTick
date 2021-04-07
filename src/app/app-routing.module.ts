import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule)
  },
  {
    path: 'shipments',
    loadChildren: () => import('./shipments/shipments.module').then(m => m.ShipmentsModule)
  },
  {
    path: 'todo/:id/:role', component: TodoComponent
  },
  { 
    path: "**", component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
