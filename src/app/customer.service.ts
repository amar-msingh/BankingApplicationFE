import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

baseUrl="http://localhost:8082";


  constructor(private myhttp:HttpClient) {

  }
    addCustomer(customer:Customer){
      return this.myhttp.post(this.baseUrl+"/customer",customer);
    }
    getAllCustomers(){
      return this.myhttp.get(this.baseUrl+"/customers")
    }
   



}