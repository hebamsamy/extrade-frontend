import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from 'src/app/shard/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MarketerSignupComponent } from './marketer-signup/marketer-signup.component';

let routes:Routes=[
  {path:'' , redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'Marketersignup',component:MarketerSignupComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    MarketerSignupComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class AccountModule { }
