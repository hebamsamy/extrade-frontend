import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginViewModel } from 'src/app/Models/LoginViewModel';
import { AccountService } from 'src/app/service/Account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginform !: FormGroup;
  constructor(private formbuilder: FormBuilder, private Account: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      Email: ["", [Validators.required, Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]],
      Password: ["", Validators.required],
      RememberMe: [false]

    })
  }
  login() {
    let value = new LoginViewModel()
    value.Email = this.loginform.value['Email']
    value.Password = this.loginform.value['Password']
    value.RememberMe = this.loginform.value["RememberMe"]

    this.Account.login(value).subscribe(res => {
      if (res.success == true) {
        console.log(res)
        localStorage.setItem('Token', res.token);
        localStorage.setItem('username', value.Email);
        localStorage.setItem('role', res.role);
        localStorage.setItem("id", res.id);
        if (res.role == "User") { this.router.navigateByUrl("/user") }
        else { this.router.navigateByUrl("/marketer/updateprofile") }
      } else {
        alert("try Again !!!!")
      }
    })


  }
}