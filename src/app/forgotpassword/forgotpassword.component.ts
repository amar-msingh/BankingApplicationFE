import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  tempo:string="";
  constructor(private logser:LoginServiceService,private router:Router) { }
  accno:number=0;
  otp:string="";
  otpget:string="";
  accnumber:any;
  ngOnInit(): void {
  }
  clicked()
  {
    this.logser.forgotpassword(this.accno).subscribe(
      (data)=>{
      this.otpget=data as string;
      console.log(this.otpget);
      
      if(this.otpget==null)
      {
        this.tempo="Customer not authorized";
      }
      else{
        this.tempo="Email Sent Successfully";
      }
    }
    )
  }
  clickedotp()
  {
    if(this.otp==this.otpget)
    {  
      console.log(this.otp);
      console.log("matched");
      this.accnumber=this.accno
      localStorage.setItem("Accnonewpass",this.accnumber);
      
    this.router.navigate(["/setnewpassword"])
  }
  else{
    alert("Otp does Not Match... Redirecting to Home Screen")
    this.tempo="Otp doest not Match"
    this.router.navigate([""]);
  }
    }
}
