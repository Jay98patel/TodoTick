import { Injectable } from '@angular/core';
import { Events } from '../event.model';
import { AllEvents } from '../masterData/allEvents';

@Injectable()

export class EventService {

  constructor(private allevents:AllEvents) { 
  }

  getAllEvents():Events[]{
    return this.allevents.events;
  }

  addEvent(newEvent:Events){
    return this.allevents.events.push(newEvent)
  }

  deleteEvent(eventIndex:number){
    return this.allevents.events.splice(eventIndex,1)
  }
}
