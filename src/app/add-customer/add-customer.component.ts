import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @ViewChild('f') inputForm!: NgForm;
  defaultSelect = 'business';
  address=''
  genders = ['Male', 'Female', 'Other']
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm){
  //   console.log(form.value.name)
  // }

  onSubmit(){
    console.log(this.inputForm)
  }

}
