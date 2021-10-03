import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private tser:PayeeService,private router:Router) { 

    this.transfer=new Transfer();
  }

  ngOnInit(): void {
    this.accno=localStorage.getItem("Accno");
  }
  transferdo(formValue:any)
  {

    this.transfer=formValue.value;
    console.log(this.transfer);
    
    this.tser.doTrransfer(this.transfer).subscribe(
      (data)=>{
        if(data)
        {
          alert("Transfer Successful : Mode "+this.transfer.txndetails+" Amount : "+this.transfer.amount+" To "+this.transfer.toaccno);
          this.router.navigate(["/logindashboard"]);
        }
        else
        {
          alert("Transfer Cannot be Done, Balance Not enough");
        }
      }
    )
  }
}
