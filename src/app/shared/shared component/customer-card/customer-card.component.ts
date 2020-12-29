import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { customer } from 'src/app/components/customers/customer/models/customer.model';
import { EditCustomerComponent } from 'src/app/components/customers/edit-customer/edit-customer.component';

@Component({
  selector: 'customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
@Input() customer:customer;

  constructor( public matDialog:MatDialog) { }

  ngOnInit() {
  }
  edit(customer) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "edit";
    dialogConfig.data = customer;
    dialogConfig.height = "230px";
    dialogConfig.width = "300px";
    // https://material.angular.io/components/dialog/overview
    this.matDialog.open(EditCustomerComponent, dialogConfig);
    
  }
}
