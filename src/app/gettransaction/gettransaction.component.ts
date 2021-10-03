import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-gettransaction',
  templateUrl: './gettransaction.component.html',
  styleUrls: ['./gettransaction.component.css']
})
export class GettransactionComponent implements OnInit {
  accno:any;
  constructor(private userve:UserService) { }
  transarray:any;
  ngOnInit(): void {
    this.accno=localStorage.getItem("Accno");
    this.userve.getTransaction(this.accno).subscribe(
      (data)=>{
        this.transarray=data
        console.log(this.transarray);
        
      }
    )

  }

}
