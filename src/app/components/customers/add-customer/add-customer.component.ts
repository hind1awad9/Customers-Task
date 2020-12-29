import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { customer } from '../customer/models/customer.model';
import { CustomerService } from '../customer/services/customer.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addCustomerForm: FormGroup
  customers: Array<customer> = [];
  customer: customer;
  constructor(
    private _formBuilder: FormBuilder,
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<AddCustomerComponent>) { }

  ngOnInit() {

    this.addCustomerForm = this._formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]]
      }
    )
  }
  add() {
   let count:number = this.customerService.customers.length
    this.customer = {
      id:  count + 1,
      name: this.addCustomerForm.get('name').value,
      city: this.addCustomerForm.get('city').value,
      state: this.addCustomerForm.get('state').value
    }
    
   this.customerService.customers.push(this.customer)
  
    console.log("this.add", this.customerService.customers)
    this.close()
  }
  close() {
    this.dialogRef.close()
  }
}
