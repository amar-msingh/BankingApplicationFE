import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl="http://localhost:8082";
  constructor(private myhttp:HttpClient) { }
  public adminLogin(admin:Admin){
    
    return this.myhttp.post(this.baseUrl+"/adminlogin",admin);
  }
  public disApproveCustomer(accNo:Number){
    return this.myhttp.delete(this.baseUrl+"/disapprovecustomers/"+accNo);
  }

  public approveCustomer(accNo:Number){
    return this.myhttp.put(this.baseUrl+"/approvecustomers/"+accNo,true);
  }




}
