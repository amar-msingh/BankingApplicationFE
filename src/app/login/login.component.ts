import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login=new Login();
  att:number | undefined;
  accnumber:any;
  
  warning:string ="Enter Your Credentials";

  constructor(private logserve:LoginServiceService,private router:Router) {
    }
    checkLogin(loginForm:any)
    {
       this.login=loginForm.value;
       console.log(this.login);
       this.logserve.checkLogin(this.login).subscribe(
        (data)=>{ this.att=data as number;
          
          console.log(this.att);
          
          if(this.att==0)
          {
            this.accnumber=this.login.accno;
            localStorage.setItem("Accno",this.accnumber)  
            this.router.navigate(["/logindashboard"])

          }
          if(this.att==1)
          {
            this.warning="Login Credentials Invalid"
          }
          if(this.att==2)
          {
            this.warning="Account Locked";
          }
          if(this.att==3)
          {
            this.warning="Customer Not Available";
          }
          if(this.att==4)
          {
            this.warning="Not Registered for Online Banking"
          }
            
        
        }
  
        
      )
       
    }
   

  ngOnInit(): void {

    
    
  }

}


