import { Injectable } from '@angular/core';
import { customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Array<customer> = [
    { id: 1, name: 'ibrahim', city: 'fayoum', state: 'fayoum' },
    { id: 2,name: 'ibrahim', city: 'fayoum', state: 'fayoum' },
    { id: 3,name: 'ibrahim', city: 'fayoum', state: 'fayoum' },
    { id: 4,name: 'hind', city: 'fayoum', state: 'fayoum' },
    {id: 5, name: 'ahmed', city: 'fayoum', state: 'fayoum' },
    { id: 6,name: 'awad', city: 'fayoum', state: 'fayoum' },
  ]
  constructor() {
  }
}
