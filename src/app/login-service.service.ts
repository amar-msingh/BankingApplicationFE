import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { Netregister } from './netregister';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 baseUrl="http://localhost:8082";
  constructor(private myhttp:HttpClient) { }
    checkLogin(login:Login)
    {
      console.log(login);
      
      return this.myhttp.post(this.baseUrl+"/login",login);
    }
    checkstatus(mobno:string)
    {
      console.log(mobno);
      
        return this.myhttp.post(this.baseUrl+"/status",mobno);
    }
    sendmail(email:string)
    {
      console.log(email);
      
      return this.myhttp.post(this.baseUrl+"/sendID",email);
    }
    netregister(netregister:Netregister)
    {
      return this.myhttp.post(this.baseUrl+"/netregister",netregister);
    }
    forgotpassword(accno:number)
    {
      return this.myhttp.post(this.baseUrl+"/sendotp",accno);
    }
    setNewPassword(accno:string,pass1:string)
    {
      return this.myhttp.post(this.baseUrl+"/setnewpass/"+accno,pass1);
    }
}
