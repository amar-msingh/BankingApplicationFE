import { Component, OnInit } from '@angular/core';
import { Daterange } from '../daterange';
import { UserService } from '../user.service';

@Component({
  selector: 'app-transactionbydate',
  templateUrl: './transactionbydate.component.html',
  styleUrls: ['./transactionbydate.component.css']
})
export class TransactionbydateComponent implements OnInit {
  transarray:any;
  date:Daterange;
  accno:any;
  constructor(private userve:UserService) {
    this.date=new Daterange();
   }
   checkDate(dateForm:any)
   {
     this.date=dateForm.value;
     console.log(this.date);
     this.userve.getTransactionByDate(this.accno,this.date).subscribe(
       (data)=>{
         this.transarray=data
         console.log(this.transarray);
         
       }
     )

     
   }
  ngOnInit(): void {
    this.accno=localStorage.getItem("Accno");
  }

}
