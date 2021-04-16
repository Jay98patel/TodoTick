import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTickButtonComponent } from './todo-tick-button.component';

describe('TodoTickButtonComponent', () => {
  let component: TodoTickButtonComponent;
  let fixture: ComponentFixture<TodoTickButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTickButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTickButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
