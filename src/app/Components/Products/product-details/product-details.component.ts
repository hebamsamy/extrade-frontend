import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:any;
  productdetails :any =[];
  searchtext :string ="";
    constructor(private route:ActivatedRoute ,private Api :ApiService) {
      this.id =this.route.snapshot.paramMap.get("id")
      console.log(this.id)
     }
    
    ngOnInit(): void {
      this.getProductById();
    }
    getProductById(){
      this.Api.getProductById(this.id).subscribe(res=>{
      this.productdetails=res
      })
    }
    Onsearchtextchange(searchValue :string){
         this.searchtext=searchValue;
         console.log(this.searchtext)
    }
  }
  

