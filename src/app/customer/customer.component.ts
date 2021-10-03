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
          alert("New Customer Added");
          this.router.navigate([""]);
        }
        
      },
      (error)=>{
        console.log(error);
        
      })
    }

}
