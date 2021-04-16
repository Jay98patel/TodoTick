import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Events } from '../../event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  newEventForm: FormGroup;
  eventToEdit: Events;
  newEvent: Events;

  @Input()
  set eventEdit(eventValue: Events) {
    if (eventValue) {
      this.eventToEdit = { ...eventValue };
      this.newEventForm.patchValue(eventValue);
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
      eventName: ['', [Validators.required]],
      eventLocation: ['', [Validators.required]],
    });
  }

  submitEvent() {
    const eventData = this.eventService.getAllEvents();
    if (this.newEventForm.valid) {
      let eventFormData: Events = this.newEventForm.value;
      if (this.eventToEdit) {
        eventFormData = { ...this.eventToEdit, ...eventFormData };
        let index = eventData.findIndex(item => item.id === this.eventToEdit.id);
        if (index >= 0) {
          eventData[index] = eventFormData;
          this.newEventForm.reset();
        }
      }
      else {
        let eventNewData = { ...this.newEventForm.value, ...{ id: eventData.length + 1 } }
        this.eventService.addEvent(eventNewData);
        this.newEventForm.reset();
      }
    }
  }
}