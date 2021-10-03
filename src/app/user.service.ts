import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Daterange } from './daterange';
import { Password } from './password';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="http://localhost:8082";
  constructor(private myhttp:HttpClient) { }
  searchCustomer(accno:string)
  {
    return this.myhttp.get(this.baseUrl+"/userdetails/"+accno);
  }
  updateCustomer(accno:string,customer:Customer)
  {
    console.log(customer);
    
    return this.myhttp.post(this.baseUrl+"/userdetails/"+accno,customer);
  }
  changePassword(accno:string,password:Password)
  {
    return this.myhttp.post(this.baseUrl+"/changepassword/"+accno,password);
  }
  customerDetails(accno:string)
  {
    return this.myhttp.get(this.baseUrl+"/accountdetails/"+accno);
    }
    
  getTransaction(accno:string)
  {
    return this.myhttp.get(this.baseUrl+"/getTransaction/"+accno);
  }
  getTransactionByDate(accno:string,date:Daterange)
    {
      console.log(accno);
      console.log(date);
      
      
      return this.myhttp.post(this.baseUrl+"/getTransactiononit/"+accno,date);
    }
    depositMoney(accno:string,amount:number)
    {
      return this.myhttp.post(this.baseUrl+"/deposit/"+accno,amount);
    }
}
