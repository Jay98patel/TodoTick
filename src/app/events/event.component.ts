import { Component, OnInit } from '@angular/core';
import { Events } from './event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  editEvent:Events;

  constructor() { }

  ngOnInit(): void {
  }

  eventToEdit(editEvent){
    this.editEvent=editEvent;
  }
}