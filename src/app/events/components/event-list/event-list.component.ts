import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Events } from '../../event.model'
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  eventList: Events[];
  @Output() editEventItem = new EventEmitter();

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getAllEvents();
  }

  editEvent(events){
    this.editEventItem.emit(events)
  }

  getAllEvents() {
    this.eventList = this.eventService.getAllEvents();
  } 

  deleteEvent(eventsIndex:number){
    this.eventService.deleteEvent(eventsIndex);
  }

}
