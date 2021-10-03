import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {
  email:string="";
  constructor(private lser:LoginServiceService) { }
  temp:string="";
  ngOnInit(): void {
  }
  
  
  clicked()
  {
    console.log(this.email);
    
    this.lser.sendmail(this.email).subscribe(
      (data)=>{
        if(data)
        {
          console.log(data);
          
          this.temp="Email Successfully Send";
        }
        if(!data)
        {
          this.temp="Customer Not Present";
        }
      }
    )
  }
}
