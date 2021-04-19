import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHookRoutingModule } from './life-cycle-hook-routing.module';
import { ParentComponent } from './components/parent/parent.component';
import { LifeCycleHookComponent } from './life-cycle-hook.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [LifeCycleHookComponent,ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    LifeCycleHookRoutingModule
  ]
})
export class LifeCycleHookModule { }
