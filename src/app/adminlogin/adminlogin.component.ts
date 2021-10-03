import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin:Admin;
  warning:string="Enter you credentials";
  constructor(private adminservice:AdminService,private router:Router) {
    this.admin=new Admin();
   }

  ngOnInit(): void {
  }
  validateLogin(adminLoginForm:any){
    console.log(adminLoginForm.value);
    this.admin=adminLoginForm.value;
    this.adminservice.adminLogin(this.admin).subscribe(
      (data)=>{
        //console.log(data);
        if(data==0){
          alert("Welcome Admin");
          this.router.navigate(["/admindashboard"]);
        }
        if(data==1)
        {
          this.warning="Wrong Credentials"
        }
        if(data==2)
        {
          this.warning="You are not the admin"
        }
        
      },
      (error)=>{
        console.log(error);
        
      })

    }

}
