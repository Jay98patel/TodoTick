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
  @Output() editEventItem = new EventEmitter<Events>();

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getAllEvents();
  }

  editEvent(event){
    this.editEventItem.emit(event);
  }

  getAllEvents() {
    this.eventList = this.eventService.getAllEvents();
  } 

  deleteEvent(eventIndex:number){
    this.eventService.deleteEvent(eventIndex);
  }

}
