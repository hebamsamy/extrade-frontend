import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{
    constructor(){

    }
    getToken(){
       
        return localStorage.getItem("Token")
    }
    getHeaderForHTTP(){
        
        let headers = new HttpHeaders({  
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getToken()}`,
         });
         
        return{ headers: headers };
        
    }
}