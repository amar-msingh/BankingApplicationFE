import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CustomerComponent } from './customer/customer.component';
import { DasboardLoginComponent } from './dasboard-login/dasboard-login.component';
import { DepositComponent } from './deposit/deposit.component';
import { ErrorComponent } from './error/error.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GettransactionComponent } from './gettransaction/gettransaction.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PayeeComponent } from './payee/payee.component';
import { RegisternetComponent } from './registernet/registernet.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { ShowpayeeComponent } from './showpayee/showpayee.component';
import { StatusComponent } from './status/status.component';
import { TransactionbydateComponent } from './transactionbydate/transactionbydate.component';
import { TransferComponent } from './transfer/transfer.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'logindashboard',component:DasboardLoginComponent},
  {path:'status',component:StatusComponent},
  {path:'forgotID',component:SendmailComponent},
  {path:'netregister',component:RegisternetComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'register',component:CustomerComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'accountdetails',component:AccountdetailsComponent},
  {path:'getTransaction',component:GettransactionComponent},
  {path:'TransactionDate',component:TransactionbydateComponent},
  {path:'deposit',component:DepositComponent},
  {path:'setnewpassword',component:SetnewpasswordComponent},
  {path:'addPayee',component:PayeeComponent},
  {path:'showAllPayee',component:ShowpayeeComponent},
  {path:'transfer',component:TransferComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
