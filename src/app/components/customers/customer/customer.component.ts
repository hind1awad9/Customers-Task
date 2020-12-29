import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { customer } from './models/customer.model';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Array<customer>
  filterForm: FormGroup
  filteredCustomers :Array<customer>;
  constructor(
    public matDialog: MatDialog, private customerService: CustomerService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.filterForm = this.formBuilder.group(
      {
        name: ['']
      }
    )
    this.customers = this.customerService.customers

  }
  add() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "add";
    // dialogConfig.data = data
    dialogConfig.height = "230px";
    dialogConfig.width = "300px";
    // https://material.angular.io/components/dialog/overview
    this.matDialog.open(AddCustomerComponent, dialogConfig);

  }


  filterCustomers() {
    let value = this.filterForm.get('name').value
    if(value == '')
    {
      this.customers = this.customerService.customers
    }
    else
    {
      this.filteredCustomers = this.customers.filter((customer: customer) => {
        const regex = new RegExp(value,'gi');
        return customer.name.match(regex)
      })
       this.customers = this.filteredCustomers
    }
    

  }
}
