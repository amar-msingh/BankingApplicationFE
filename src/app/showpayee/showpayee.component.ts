import { Component, OnInit } from '@angular/core';
import { Payee } from '../payee';
import { PayeeService } from '../payee.service';

@Component({
  selector: 'app-showpayee',
  templateUrl: './showpayee.component.html',
  styleUrls: ['./showpayee.component.css']
})
export class ShowpayeeComponent implements OnInit {
  accno:any;
  payeearray:any;
  constructor(private pser:PayeeService) { }

  ngOnInit(): void {
    this.accno=localStorage.getItem("Accno");
    this.pser.getPayee(this.accno).subscribe(
      (data)=>{
      this.payeearray=data as Payee;
    }
    )
  }

}
