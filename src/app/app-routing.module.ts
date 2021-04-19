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
    path: 'yourTeam',
    loadChildren: () => import('./player/player.module').then(m => m.PlayerModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./events/event.module').then(m => m.EventModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'lifeCycleHook',
    loadChildren: () => import('./life-cycle-hook/life-cycle-hook.module').then(m => m.LifeCycleHookModule)
  },
  {
    path: 'customersOrders',
    loadChildren: () => import('./customers-orders/customers-orders.module').then(m => m.CustomersOrdersModule)
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
