import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIViewModel } from '../Models/APIViewModel';
import { CollectionEditViewModel, CollectionViewModel } from '../Models/CollectionViewModel';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient) { }

  // getcollection(id: any) {
  //   return this.http.get<any>("https://localhost:63000/Collection/ProductWithCollection" + id)
  //     .pipe(map((res: any) => {
  //       return res
  //     }
  //     ))
  // }
  // getproduct() {
  //   return this.http.get<any>("https://localhost:63000/Product/GetProductWithCollection")
  //     .pipe(map((res: any) => {
  //       return res
  //     }
  //     ))
  // }
  // addcollection() {
  //   return this.http.get<any>("https://localhost:63000/Product/GetProductWithCollection")
  //     .pipe(map((res: any) => {
  //       return res

  //     }
  //     ))
  // }
  private collections: any = localStorage.getItem('id');
  addCollection(RegisterView: CollectionEditViewModel) {
    console.log(RegisterView)
    return this.http.post<APIViewModel>("https://localhost:63000/Api/AddCollection", RegisterView);
  }
  getCollection() {
    console.log(this.collections)
    return this.http.get<APIViewModel>("https://localhost:63000/Api/GetCollection?id=" + this.collections);
  }
  getProductsInCollection(Code: string) {
    return this.http.post<APIViewModel>("https://localhost:63000/Api/GetCollection", Code);
  }
}
