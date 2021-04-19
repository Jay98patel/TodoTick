import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHookRoutingModule } from './life-cycle-hook-routing.module';
import { ParentComponent } from './components/parent/parent.component';


@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    LifeCycleHookRoutingModule
  ]
})
export class LifeCycleHookModule { }
