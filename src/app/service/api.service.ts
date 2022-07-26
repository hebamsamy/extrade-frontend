import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  
  searchProduct(val:string)
  {
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res
    } 
    ))
  }
  getproduct()
  {
    return this.http.get<any>("https://localhost:63000/Api/Getproduct")
    // .pipe(map((res:any)=>{
    //  console.log(res)
    // } 
 
  }
getallcategories()
{
  return this.http.get<any>("https://fakestoreapi.com/products/categories")
  .pipe(map((res:any)=>{
    return res
  } 
  ))
}
getproductbycategoty(keyword :string)
{
  return this.http.get<any>("https://fakestoreapi.com/products/category/"+keyword)
}

getProductById(id:any)
{
  return this.http.get<any>("https://fakestoreapi.com/products/"+id)
  .pipe(map((res:any)=>{
    return res
  } 
  ))
}
}
