import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Events } from '../../event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  newEventForm: FormGroup;
  eventToEdit:Events;
  newEvent:Events;

  @Input()
  set eventEdit(todoValue: Events) {
    if (todoValue) {
      this.eventToEdit = { ...todoValue };
      this.newEventForm.patchValue(todoValue);
    }
  }
  get eventEdit(): Events {
    return this.eventToEdit;
  }

  constructor(public fb: FormBuilder, private eventService: EventService) { }

  ngOnInit(): void {
    this.newEventForm = this.buildEventForm();
  }

  buildEventForm() {
    return this.fb.group({
      eventName: [''],
      eventLocation: [''],
    });
  }

  submitEvent() {
    let eventFormData:Events=this.newEventForm.value;
    if (this.eventToEdit) {
      eventFormData={...this.eventToEdit,...eventFormData};
      let index = this.eventService.getAllEvents().findIndex(item => item.id === this.eventToEdit.id);
      if(index>=0){
        this.eventService.getAllEvents()[index]=eventFormData;
      }
    }
    else{
      let eventNewData={...this.newEventForm.value,...{id:this.eventService.getAllEvents().length + 1}}
      this.eventService.addEvent(eventNewData);
      this.newEventForm.reset();
    }
  }
}
