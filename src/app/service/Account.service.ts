import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResultViewModel } from '../Models/Acount';
import { LoginViewModel } from '../Models/LoginViewModel';
import { APIViewModel } from '../Models/APIViewModel';
import { UserMarketerSignupViewModel } from '../Models/SignUpViewModel';
@Injectable({
    providedIn: 'root'
  })
export class AccountService {

  constructor(private http:HttpClient) { }


  login (LogIn : LoginViewModel){

   return this.http.post<LoginResultViewModel>("https://localhost:63000/User/Login",LogIn)

  }

  logout(){
    let token=localStorage.getItem('Token');
    return this.http.post<LoginResultViewModel>("https://localhost:63000/User/SignIn",{token:token});
}
IsLoggedIn():boolean{
    let token =localStorage.getItem('token')
    if(token != null){
        return true;
    }
    return false;
}
////////////////////////////
addMarketer(Register: UserMarketerSignupViewModel){
     console.log(Register)
 return this.http.post<APIViewModel>("https://localhost:63000/Api/AddMarketer",Register);

}

addUser(RegisterView: UserMarketerSignupViewModel){
  return this.http.post<APIViewModel>("https://localhost:63000/User/Register",RegisterView)
}
}
