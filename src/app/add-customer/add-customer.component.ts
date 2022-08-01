import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @ViewChild('f') inputForm!: NgForm;
  // @ViewChild('f') userPersona!: NgForm;
  editedItemIndex!:number;
  editedMode = false;
  editeditem !: Customer;
  constructor(private customerService: CustomerService) { }

  suggestUserName(){
    const suggestName = 'merie';
    // this.inputForm.setValue({
    //   userPersona:{
    //     fname: suggestName,
    //     lname: 'pak'
    //   },
    //   phoneNo: '032450505050',
    //   email:'meriepak11@gmail.com',
    //   visa: 'visit',
    //   country: 'eng',
    //   gender: 'Male',
    //   state: 'UK',
    //   address : 'Hse 222 str 33 Manc',

    // })
    this.inputForm.form.patchValue({
      userPersona:{
        fname:'Merie',
        lname: 'Pak'
      }
    })
  }
  defaultSelect = 'business';
  address=''
  genders = ['Male', 'Female', 'Other']
  data : Customer={
    fname:'',
    lname: '',
    phoneNo: '',
    gender: ''
    
  }
  // data={
  //   fname:'',
  //   lname: '',
  //   phoneNo: '',
  //     email:'',
  //     visa: '',
  //     country: '',
  //     gender: '',
  //     state: '',
  //     address : '',
  // }
  submitted=false;
 

  ngOnInit(): void {
    this.customerService.startEditing
       .subscribe((index : number) =>{
            this.editedItemIndex = index;
            this.editedMode = true ;
            this.editeditem = this.customerService.getCustomer(index)
            this.inputForm.form.patchValue({
              userPersona:{
                fname: this.editeditem.fname,
                lname: this.editeditem.lname
              }
            })
  })  
  }

  // onSubmit(form: NgForm){
  //   console.log(form.value.name)
  // }

  onSubmit(){
    this.submitted=true;
   this.data.fname= this.inputForm.value.userPersona.fname
   this.data.lname= this.inputForm.value.userPersona.lname
   this.data.phoneNo= this.inputForm.value.phoneNo
  //  this.data.email= this.inputForm.value.email
  //  this.data.visa= this.inputForm.value.visa
  //  this.data.country= this.inputForm.value.country
   this.data.gender= this.inputForm.value.gender
  //  this.data.state= this.inputForm.value.state
  //  this.data.address= this.inputForm.value.address

   this.inputForm.reset()
   if(this.editedMode){
    this.customerService.updateCustomer(this.editedItemIndex, this.data)
    }else{
    this.customerService.addCustomer(this.data)
   }
  }

}
