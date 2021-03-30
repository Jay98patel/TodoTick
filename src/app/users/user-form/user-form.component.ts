import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { keyValuePair, masterData } from '../masterData/masterData'
import { User } from '../user.model';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  imageUpload: File;
  disableWorkExpButton: boolean = false
  role: keyValuePair[];
  appliedFor: keyValuePair[];
  userEdit: User
  @Output() saveUsers = new EventEmitter<User>();

  constructor(public fb: FormBuilder, public roles: masterData, private route: Router) {
    // console.log(this.route.getCurrentNavigation().extras.state as User)
  }

  ngOnInit() {
    this.userForm = this.buildUserForm();
    this.role = this.roles.Role();
    this.appliedFor = this.roles.applyFor();
    if (this.userEdit == undefined) {
      this.loadUserValueEdit();
    }
    this.onChangeWorkExp();
  }

  buildUserForm() {
    
    const lowerCase = "^[a-z_1-9]*"; // allows lowercase and _
    return this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8), Validators.pattern(lowerCase)]],
      role: [''],
      status: ['fresher'],
      workExpiriences: this.fb.array([
        this.initializeWorExp()
      ]),
      jobRole: [''],
      acceptTerms: [false, Validators.required],
      userDate: ['', Validators.required],
    });
  }

  get validateUserForm() {
    return this.userForm.controls;
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
    if (this.disableWorkExpButton) {
      const control = <FormArray>this.userForm.controls["workExpiriences"];
      control.push(this.initializeWorExp());
    }
  }

  removeWorkExpirence(i) {
    const control = <FormArray>this.userForm.controls["workExpiriences"];
    control.removeAt(i);
  }

  onChangeWorkExp() {
    const status = this.userForm.controls.status.value;
    const control = (<FormArray>this.userForm.get('workExpiriences')).controls;
    if (status == "Expirenced") {
      control.forEach(control => {
        control.enable();
      })
      this.disableWorkExpButton = true
    }
    else if (status == "fresher") {
      control.forEach(control => {
        control.disable();
      })
      this.disableWorkExpButton = false
      console.log(this.workArrayControl())
      // this.workArrayControl().splice(1, this.workArrayControl().length);
      this.userForm.controls.workExpiriences.reset();
    }
  }

  loadUserValueEdit() {
    this.userEdit = history.state;
    for (let i = 0; i <= this.userEdit.workExpiriences?.length - 2; i++) {
      const control = <FormArray>this.userForm.controls["workExpiriences"];
      control.push(this.initializeWorExp());
    }
    this.userForm.patchValue(this.userEdit);
  }

  onImageChanged(e) {
    let imageReader = new FileReader();
    let image = e.target.files[0];
    if (e.target.files.length > 0) {
      const file = e.target.files;
      this.imageUpload = file;
    }
  }

  submitUser() {
    this.saveUsers.emit(this.userForm.value)
    //global error handler 
  }
}
