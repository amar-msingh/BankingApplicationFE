import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Netregister } from '../netregister';

@Component({
  selector: 'app-registernet',
  templateUrl: './registernet.component.html',
  styleUrls: ['./registernet.component.css']
})
export class RegisternetComponent implements OnInit {
  netreg:Netregister=new Netregister();
  constructor(private logser:LoginServiceService) { }
  warning:string="Enter your data";
  ngOnInit(): void {
  }
  checkregister(netregisterForm:any)
  {
    this.netreg=netregisterForm.value;
    this.logser.netregister(this.netreg).subscribe(
      (data)=>{
        if(data){
          this.warning="Successfully Registered"
        }
        else
        {
          this.warning="Not Valid"
        }
      }
    )
  }
}
