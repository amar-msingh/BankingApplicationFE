import { Component, OnInit } from '@angular/core';
import { Accountdetails } from '../accountdetails';
import { UserService } from '../user.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {
  account: Accountdetails;
  acc:any;
  constructor(private userser:UserService) { 
    this.account=new Accountdetails();
  }

  ngOnInit(): void {
    this.acc=localStorage.getItem("Accno");
    this.userser.customerDetails(this.acc).subscribe(
      (data)=>{
        console.log(data);
        this.account=data as Accountdetails
        console.log(this.account);  
        
        
      }
    )
 
  }

}
