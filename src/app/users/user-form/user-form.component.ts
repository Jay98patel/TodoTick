import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { keyValuePair, masterData, Skills } from '../../shared/masterData/masterData'
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
  skill: Skills[];
  newSkills:Skills[];
  userEdit: User;
  subscription: Subscription;
  @Output() saveUsers = new EventEmitter<User>();

  constructor(public fb: FormBuilder, public roles: masterData, private route: Router) {
    // console.log(this.route.getCurrentNavigation().extras.state as User)
  }

  ngOnInit() {
    this.userForm = this.buildUserForm();
    this.role = this.roles.Role();
    this.skill = this.roles.skill();
    this.appliedFor = this.roles.applyFor();
    if (this.userEdit == undefined) {
      this.loadUserValueEdit();
    }
    this.onChangeWorkExp();
    //condition :- if age will greater then 18 ,pan is compulsory
    const age = this.userForm.get('age') as FormControl;
    const panNumber = this.userForm.get('panNumber') as FormControl;
    this.subscription = age.valueChanges.subscribe((value) => {
      if (value > 18) {
        panNumber.setValidators([Validators.required]);
      }
      else {
        panNumber.setValidators(null);
      }
      panNumber.updateValueAndValidity();
    })
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
      panNumber: [''],
      skillList: this.fb.array([
        this.initializeSkill()
      ]),
      age: ['', [Validators.required]],
      jobRole: [0],
      acceptTerms: [false, Validators.required],
      userDate: ['', Validators.required],
    })
  }

  //testing
  ageEligibility(age: string, role: string) {
    return (formGroup: FormGroup) => {
      const ageEligible = formGroup.controls[age]
      if (ageEligible.value > 18) {
        ageEligible.setErrors({ notEligible: true });
        console.log(this.validateUserForm.age);
      }
      else {
        ageEligible.setErrors({ notEligible: false });
        console.log(role)
      }
    }
  }
  //testing

  get validateUserForm() {
    return this.userForm.controls;
  }

  initializeWorExp() {
    return this.fb.group({
      workExp: [""],
    });
  }
  initializeSkill() {
    return this.fb.group({
      skills: ['']
    })
  }

  workArrayControl() {
    return (this.userForm.get('workExpiriences') as FormArray).controls;
  }

  removeWorkExpirence(i) {
    const control = <FormArray>this.userForm.controls["workExpiriences"];
    control.removeAt(i);
  }

  addWorkExpirence() {
    if (this.disableWorkExpButton) {
      const control = <FormArray>this.userForm.controls["workExpiriences"];
      control.push(this.initializeWorExp());
    }
  }

  skillArrayControl() {
    return (this.userForm.get('skillList') as FormArray).controls;
  }

  addNewskills(){
    console.log(this.newSkills)
  }

  addskills() {
    const control = <FormArray>this.userForm.controls["skillList"];
    control.push(this.initializeSkill());
  }

  removeSkills(i,skills) {
    const control = <FormArray>this.userForm.controls["skillList"];
    let skillSelected = this.userForm.controls.skillList.value[i];
    const sk = this.roles.skill().find(x => {
      if (x.name == skillSelected.skills) {
        return skills[x.id-1].disable=false
      }
    })
    control.removeAt(i);
  }

  changeSkillOption(index,skills) {
    let skillSelected = this.userForm.controls.skillList.value[index];
    const sk = this.roles.skill().find(x => {
      if (x.name == skillSelected.skills) {
        return skills[x.id-1].disable=true
      }
    })
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
      this.workArrayControl().splice(1, this.workArrayControl().length);
      // this.userForm.controls.workExpiriences.reset();
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

  submitUser() {
    if (this.userForm.valid) {
      this.saveUsers.emit(this.userForm.value)
    }
  }
}
