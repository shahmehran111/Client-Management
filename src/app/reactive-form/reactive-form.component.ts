import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders=['Male', 'Female']
  signUp!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signUp = new FormGroup({
      userData : new FormGroup({
        'userName': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('Male'),
      'hobbies' : new FormArray([])
    })
  }

  onSubmit(){
    console.log(this.signUp)
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUp.get('hobbies')).controls.push(control);
  }

  getControls() {
    return (<FormArray>this.signUp.get('hobbies')).controls;
  }
}
