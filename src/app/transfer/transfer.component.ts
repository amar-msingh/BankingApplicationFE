import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payee } from '../payee';
import { PayeeService } from '../payee.service';
import { Transfer } from '../transfer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  accno:any;
  transfer:Transfer;
  payeearray:any;
  constructor(private tser:PayeeService,private router:Router) { 

    this.transfer=new Transfer();
  }

  ngOnInit(): void {
    this.accno=localStorage.getItem("Accno");
    this.tser.getPayee(this.accno).subscribe(
      (data)=>{
        this.payeearray=data as Payee;
        
      }
    )
 
  }
  transferdo(formValue:any)
  {

    this.transfer=formValue.value;
    console.log(this.transfer);
    
    this.tser.doTrransfer(this.transfer).subscribe(
      (data)=>{
        if(data==0)
        {
          alert("Transfer Successful : Mode "+this.transfer.txndetails+" Amount : "+this.transfer.amount+" To "+this.transfer.toaccno);
          this.router.navigate(["/logindashboard"]);
        }
        if(data==1)
        {
          alert("Transfer Cannot be Done, Balance Not enough");
        }
        if(data==2)
        {
          alert("Payee Account not registered with bank");
        }
      }
    )
  }
}
