import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  titles=['Mr.','Mrs.','Miss','Master'];
  options=['Yes','No'];
  customer:Customer;
  constructor(private userser:UserService,private router:Router) {
    this.customer=new Customer();
   }
  accno:any;

  ngOnInit(): void {
    this.accno=localStorage.getItem("Accno");
    console.log(this.accno);
    
    this.userser.searchCustomer(this.accno).subscribe(
      (data)=>{
        console.log(data);
        this.customer=data as Customer;
        
      }
    )


  }
  updateCustomer(customerForm:any)
  {
    console.log(customerForm.value);
    
    this.customer=customerForm.value;
    console.log(this.customer);
    
    this.userser.updateCustomer(this.accno,this.customer).subscribe(
      (data)=>{
        if(data)
        alert("Successfully Updated");
      }
    )
      this.router.navigate(["/logindashboard"]);
  }

}
