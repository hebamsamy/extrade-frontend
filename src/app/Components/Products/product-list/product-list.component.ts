// import { Component, OnInit } from '@angular/core';
// import { ProudctViewModel } from 'src/app/Models/ProductViewModel';
// import { ProductServices } from 'src/app/service/ProductServices';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {

//    productids : number []=[];
//   constructor( private productserve:ProductServices) { }
//   product: ProudctViewModel =new ProudctViewModel()
//   Data :  [] =[];
//  loading : boolean= true



//   ngOnInit(): void {


//     this.loading=true
//     this.productserve.GetProduct().subscribe(
    
//    i=> {
//       this.Data=i.Data
//       this.loading=false
//     }
//    );


   
  
//   }



  

//   add(id:number){
   
 
//   }

// }



import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import {faviourtService} from 'src/app/service/faviourt.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productlist : any;
  public categorieslist:any;
  public loading :boolean=false;
 constructor(private api :ApiService,private cartservice :CartService , private faviourtService:faviourtService) { }

 ngOnInit(): void {
  
  this.getproduct()
   this.getallcategories()
 }
 filter(value:string){
   this.loading=true;
   this.api.searchProduct(value).subscribe(res=>{

     this.productlist =res
     this.loading=false;
   }
     )
 }
 getproduct(){
   this.loading=true;
 this.api.getproduct().subscribe(res=>{
   console.log(res)
   this.productlist =res;
   this.loading=false;

   this.productlist.forEach((a:any) => {
     Object.assign(a,{quantity:1,total:a.price});
   });
 }
 // ,error=>{
 //   alert("error")
 // }
 )}
 addtocart(item :any){
    this.cartservice.addtocart(item);
 }
 addtofavourit(item :any){
   this.faviourtService.addtofaviourt(item);
 }

 getallcategories(){
   this.loading=true;
   this.api.getallcategories().subscribe(res=>{
     console.log(res)
     this.categorieslist=res;
     this.loading=false;
   })
 }
 filtercategoty(value :any){
  if(value=="all"){
   this.getproduct()
  }
  else{
   this.getproductbycategoty(value)
  }
 
 }
 getproductbycategoty(keyword:string)
 {
   this.loading=true;
   this.api.getproductbycategoty(keyword).subscribe(res=>{
      this.productlist=res;
      this.loading=false;
   })
 }

}
