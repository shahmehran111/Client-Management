import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerProfileComponent } from './customer-list/customer-profile/customer-profile.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerService } from './shared/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerProfileComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
