import { EventEmitter, Injectable } from '@angular/core';

import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // selectedCustomer = new EventEmitter<Customer>();
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
    console.log(index + ": id")
   return this.customer[index] ;
   } 
}
