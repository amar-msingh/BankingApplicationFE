import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payee } from './payee';
import { Transfer } from './transfer';

@Injectable({
  providedIn: 'root'
})
export class PayeeService {

  constructor(private myhttp:HttpClient) { }
  baseUrl="http://localhost:8082";

addPayee(accno:string,payee:Payee)
{
  return this.myhttp.post(this.baseUrl+"/addPayee/"+accno,payee);
}
getPayee(accno:string)
{
  return this.myhttp.get(this.baseUrl+"/getPayee/"+accno);
}
doTrransfer(transfer:Transfer)
{
  return this.myhttp.post(this.baseUrl+"/transfer",transfer);
}
}
