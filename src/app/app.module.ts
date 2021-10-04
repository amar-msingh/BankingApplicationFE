import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DasboardLoginComponent } from './dasboard-login/dasboard-login.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { RegisternetComponent } from './registernet/registernet.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CustomerComponent } from './customer/customer.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { GettransactionComponent } from './gettransaction/gettransaction.component';
import { TransactionbydateComponent } from './transactionbydate/transactionbydate.component';
import { DepositComponent } from './deposit/deposit.component';
import { SetnewpasswordComponent } from './setnewpassword/setnewpassword.component';
import { PayeeComponent } from './payee/payee.component';
import { ShowpayeeComponent } from './showpayee/showpayee.component';
import { TransferComponent } from './transfer/transfer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ErrorComponent } from './error/error.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DasboardLoginComponent,
    HomeComponent,
    StatusComponent,
    SendmailComponent,
    RegisternetComponent,
    ForgotpasswordComponent,
    CustomerComponent,
    UserdetailsComponent,
    ChangepasswordComponent,
    AccountdetailsComponent,
    GettransactionComponent,
    TransactionbydateComponent,
    DepositComponent,
    SetnewpasswordComponent,
    PayeeComponent,
    ShowpayeeComponent,
    TransferComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot()
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
