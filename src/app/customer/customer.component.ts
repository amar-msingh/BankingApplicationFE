import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]
  titles=['Mr.','Mrs.','Miss','Master'];
  options=['Yes','No'];

  customer:Customer;

  constructor(private cservice:CustomerService,private router:Router) {

    this.customer=new Customer();
   }

  ngOnInit(): void {
  }

  saveCustomer(customerForm:any){
    console.log(customerForm.value);
    this.customer=customerForm.value;
    this.cservice.addCustomer(this.customer).subscribe(
      (data)=>{
        console.log(data);
        if(data){
          alert(" Customer Data Submitted Successfully , Kindly Wait for your Approval");
          this.router.navigate([""]);
        }
        
      },
      (error)=>{
        console.log(error);
        
      })
    }

}
