import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { customer } from '../customer/models/customer.model';
import { CustomerService } from '../customer/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editCustomerForm: FormGroup;
  customers: Array<customer> = []
  constructor(private customerService: CustomerService,
    public dialogRef: MatDialogRef<EditCustomerComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: customer, private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("data", this.data)
    this.editCustomerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]]
      }
    )
  }
  close() {
    this.dialogRef.close()
  }
  editCustomer() {

   this.customers = this.customerService.customers
    let obj = {
      id:this.data.id,
      name: this.editCustomerForm.get("name").value || this.data.name,
      city: this.editCustomerForm.get("city").value || this.data.city,
      state: this.editCustomerForm.get("state").value || this.data.state
    }
    let index = this.customers.findIndex((customer:customer) => customer.id == this.data.id);
    this.customers[index] = obj;
    console.log("customers", this.customers)
    this.customerService.customers =  this.customers 
    this.dialogRef.close()
  }
}
