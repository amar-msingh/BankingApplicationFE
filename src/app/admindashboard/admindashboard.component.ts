import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private cservice:CustomerService,private adminservice:AdminService) { }
  customerArray:any;
 
  ngOnInit(): void {
    this.getAllCustomers()
  }
  getAllCustomers(){
    this.cservice.getAllCustomers().subscribe(
      (data)=>{
        console.log(data);
        this.customerArray=data;
        console.log(this.customerArray);
      },
      (error)=>{
        console.log(error);
        
      }
    )

  }
  approveCust(accountnumber:Number){  

    this.adminservice.approveCustomer(accountnumber).subscribe(
      (data)=>{
        alert("Account Approved");
        this.getAllCustomers()
        
      },
      (error)=>{
        console.log(error);
        
      }
    );

  }
  disapproveCust(accountnumber:Number){
    this.adminservice.disApproveCustomer(accountnumber).subscribe(
      (data)=>{
        alert("Account Deleted");
        this.getAllCustomers()
        
      },
      (error)=>{
        console.log(error);
        
      });

  }


}
