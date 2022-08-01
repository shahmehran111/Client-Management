import { EventEmitter, Injectable } from '@angular/core';

import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  selectedCustomer = new EventEmitter<Customer>();
  listupdate = new EventEmitter<Customer[]>();
  startEditing = new EventEmitter<number>();
  private customer: Customer[] = [ 
     new Customer('Asmat','Bacha','5433452','female'),
     new Customer('TOUQER','Bacha','5433452','female'),
     new Customer('ALI','Bacha','5433452','female'),
     new Customer('NOMI','Bacha','5433452','female'),
    ]
     
  constructor() {  }

  getCustomers(){
    return this.customer.slice() ;
  }

  getCustomer(index: number){
   return this.customer[index] ;
   }

  addCustomer(data: Customer){
    this.customer.push(data)
    this.listupdate.emit(this.customer.slice())
  }

  updateCustomer(index : number, newCustomer : Customer){
    this.customer[index] = newCustomer;
    this.listupdate.emit(this.customer.slice())
  }
}
