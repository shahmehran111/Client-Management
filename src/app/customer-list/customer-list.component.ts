import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers:[CustomerService]
})
export class CustomerListComponent implements OnInit {
  customer!: Customer[];
  id!:number;
  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { 
    
   }
  ngOnInit(): void {
    this.customer = this.customerService.getCustomers();
  }

  onClickView(index : number){
    this.customerService.getCustomer(index)
    this.router.navigate(['customerList', index]);
  }

  onDeleteList(index:number){
    this.customer.splice(index, 1);
  }

}
