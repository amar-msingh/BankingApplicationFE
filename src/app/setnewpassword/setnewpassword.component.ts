import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-setnewpassword',
  templateUrl: './setnewpassword.component.html',
  styleUrls: ['./setnewpassword.component.css']
})
export class SetnewpasswordComponent implements OnInit {
  pass1:string="";
  pass2:string="";
  accno:any;
  temp:string="";
  constructor(private logser:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    this.accno=localStorage.getItem("Accnonewpass");
  }
  clicked(){
  if(this.pass1==this.pass2)
  {
    this.temp="Password Matched";
    this.logser.setNewPassword(this.accno,this.pass1).subscribe(
      (data)=>{
        if(data)
        {
        alert("Password Updated");
        this.router.navigate(["/login"])
      }
      }
    )
  }
  else{
    this.temp="Password Do Not Match";
  }
}
}
