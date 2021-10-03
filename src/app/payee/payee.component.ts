import { Component, OnInit } from '@angular/core';
import { Payee } from '../payee';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-payee',
  templateUrl: './payee.component.html',
  styleUrls: ['./payee.component.css']
})
export class PayeeComponent implements OnInit {
  payee:Payee;
  accno:any;
  constructor(private paser:PayeeService) { 
    this.payee=new Payee()
  }

  ngOnInit(): void {
    this.accno=localStorage.getItem("Accno");
  }
  updatePayee(payeeForm:any)
  {
    this.payee=payeeForm.value;
    this.paser.addPayee(this.accno,this.payee).subscribe(
      (data)=>{
        if(data)
        {
          alert("Updated Successfully")
        }
        else
        {
          alert("Not Added")
        }
      }
    )

  }
}
