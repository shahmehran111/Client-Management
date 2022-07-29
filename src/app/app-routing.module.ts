import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerProfileComponent } from './customer-list/customer-profile/customer-profile.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {path:'', redirectTo:'customerList', pathMatch:'full'},
  {path:'addCustomer', component:AddCustomerComponent},
  {path:'reactiveForm', component:ReactiveFormComponent},
  {path:'customerList', component:CustomerListComponent},
  {path:'customerList/:id', component:CustomerProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
