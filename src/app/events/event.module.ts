import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventService } from './services/event.service';
import { AllEvents } from './masterData/allEvents';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EventComponent,EventFormComponent,EventListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventRoutingModule,
  ],
  providers:[
    EventService,
    AllEvents]
})
export class EventModule { }
