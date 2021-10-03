import { Component, OnInit } from '@angular/core';
import { Password } from '../password';
import { UserService } from '../user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
    accno:any;
    password:Password;
    pass1:string="";
    pass2:string="";
    pass3:string="";
    pass4:string="";
  constructor(private userser:UserService) {
    this.password=new Password();
   }
  warning:string="Change Your Password"
  ngOnInit(): void {
    this.accno=localStorage.getItem("Accno");
  }
  changePassword(changepasswordform:any)
  {
    console.log(this.password);
    
    this.password=changepasswordform.value;
    this.userser.changePassword(this.accno,this.password).subscribe(
      (data)=>{
        if(data){
          this.warning="Password Updated"
        }
        else
        {
          this.warning="Password does not match"
        }
      }
    )
  }
}
