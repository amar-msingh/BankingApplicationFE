import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  mobno:string="";
  constructor(private pser:LoginServiceService) { }
  str:string="";
  val:number | undefined;
  ngOnInit(): void {
  }
  clicked()
  {
    console.log(this.mobno);
    
    this.pser.checkstatus(this.mobno).subscribe(
      (data)=>{
        this.val=data as number;
        console.log(this.val);
        
      if(this.val==0)
      {
      this.str="Your Account has been Approved. Your credentials have been sent to you Email ID."
      }
      if(this.val==1)
      {
        this.str="Account Still Not Approved"
      }
      if(this.val==2)
      {
        this.str="Account Not Present Or Disapproved"
      }
    }
    );
  }
}
