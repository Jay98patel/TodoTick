import { Injectable } from '@angular/core';
import { AllEvents } from '../masterData/allEvents';

@Injectable()

export class EventService {

  constructor(private allevents:AllEvents) { 
  }

  getAllEvents(){
    return this.allevents.events;
  }

  addEvent(newEvent){
    return this.allevents.events.push(newEvent)
  }

  deleteEvent(id){
    return this.allevents.events.splice(id,1)
  }
  
}
