import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.buildUserForm()
    console.log(this.userForm)
    
  }

  buildUserForm() {
    return this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      userName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(5)]],
      role: ['', Validators.required],
      workExpiriences: this.fb.array([
        this.initializeWorExp()
      ]),
      userDate: ['', Validators.required],
    });
  }

  validateUserForm(){
    return this.userForm.controls
  }

  initializeWorExp() {
    return this.fb.group({
      workExp: [""],
    });
  }

  workArrayControl() {
    return (this.userForm.get('workExpiriences') as FormArray).controls;
  }

  addWorkExpirence() {
    const control = <FormArray>this.userForm.controls["workExpiriences"];
    control.push(this.initializeWorExp());
  }

  removeWorkExpirence(i) {
    const control = <FormArray>this.userForm.controls["workExpiriences"];
    control.removeAt(i);
  }

  changeValue(){
    console.log(this.userForm)
  }

  submitUser() {
    console.log(this.userForm.value)
  }

}
