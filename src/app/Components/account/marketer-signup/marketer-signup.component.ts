import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserMarketerSignupViewModel } from 'src/app/Models/SignUpViewModel';
import { AccountService } from 'src/app/service/Account.service';

@Component({
  selector: 'app-marketer-signup',
  templateUrl: './marketer-signup.component.html',
  styleUrls: ['./marketer-signup.component.css']
})
export class MarketerSignupComponent implements OnInit {
  Form:FormGroup=new FormGroup([]);
  constructor( private formBuilder:FormBuilder ,private userServices :AccountService,private router:Router ) { 
    
  }
  ngOnInit(): void {
   this.build();
  }




  build(user?:UserMarketerSignupViewModel){

    this.Form=this.formBuilder.group(
      {
        nameEn:[user?.nameEn,[Validators.required,Validators.minLength(3)]],
        nameAr:[user?.nameAr,[Validators.required,Validators.minLength(3)]],
        email:[user?.email,[Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]],
        password:[user?.password,Validators.required],
        country:[user?.country,[Validators.required,Validators.minLength(4)]],
        city:[user?.city,[Validators.required,Validators.minLength(4)]],
        street:[user?.street,[Validators.required,Validators.minLength(4)]],
        phones:[user?.phones,[Validators.required]],
        taxCard:[user?.taxCard]
    });

   
  }
    
    add(){
      let user:UserMarketerSignupViewModel=new UserMarketerSignupViewModel();

      user.nameEn=this.Form.value["nameEn"];
      user.nameAr=this.Form.value["nameAr"];
      user.email=this.Form.value["email"];
      user.password=this.Form.value["password"];
      user.country=this.Form.value["country"];
      user.city=this.Form.value["city"];
      user.street=this.Form.value["street"];
      user.phones.push(this.Form.value["phones"]);
       user.taxCard=this.Form.value["taxCard"];
      user.Img="1.jpg";
      this.userServices.addMarketer(user).subscribe(res=>{

      
        if(res.success == true){
          alert("sign up success");
          this.router.navigateByUrl('account/login');
  }else{
    alert("Try Again!!!")
  }
});

 
}
}



