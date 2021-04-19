import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleHookComponent } from './life-cycle-hook.component';

const routes: Routes = [
  { 
    path: '', component: LifeCycleHookComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleHookRoutingModule { }
