import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard-login',
  templateUrl: './dasboard-login.component.html',
  styleUrls: ['./dasboard-login.component.css']
})
export class DasboardLoginComponent implements OnInit {
  accnumber:any;
  accno:string="";
  constructor(private router:Router) { }

  ngOnInit(): void {   
    
  }
  clicked()
  {
    console.log(localStorage.getItem("Accno"));
    
    localStorage.removeItem("Accno")
    this.router.navigate(['']);
  }
}
