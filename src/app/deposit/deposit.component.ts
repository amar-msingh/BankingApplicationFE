import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  amount:number=0;
  accno:number=0;
  constructor(private userve:UserService,private router:Router) { }
  
  clicked()
  {
    this.userve.depositMoney(this.accno,this.amount).subscribe(
      (data)=>{
        if(data)
        {

        alert("Money Added")
        console.log(true);
        this.router.navigate(["/admindashboard"])
        }
        else
        {
          alert("Account Not Found")
        }
      }
    )
  }
  ngOnInit(): void {
    
  }

}
