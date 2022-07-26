import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public CartItemList :any =[]
  public ProductList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>("https://localhost:63000/Api/Getproduct")
  }

  setProduct(Product :any){
    this.CartItemList.push(...Product);
    this.ProductList.next(Product);
  }
  addtocart(Product:any){
    this.CartItemList.push(Product);
    this.ProductList.next(this.CartItemList);
    this.getTotalPrice();
    console.log(this.CartItemList)
  }
  getTotalPrice() :number {
    let grandTotal=0;
    this.CartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal;
  }
  removeCartItem(Product:any){
    this.CartItemList.map((a:any,index:any)=>{
      if(Product.id===a.id){
        this.CartItemList.splice(index,1);
      }
    })
    this.ProductList.next(this.CartItemList);
  }
  removeAllCart(){
    this.CartItemList=[]
    this.ProductList.next(this.CartItemList);
  }
  }

