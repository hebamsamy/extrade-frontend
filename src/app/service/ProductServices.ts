import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { environment } from "src/environments/environment"
import { APIViewModel } from "../Models/APIViewModel"
import { ProudctViewModel } from "../Models/ProductViewModel";


@Injectable({
    providedIn: 'root'
  })
export class ProductServices {
    constructor(private http: HttpClient) { }
    // url: string = environment.apiUrl
    // addProduct(Product: ProudctViewModel) {
    //     return this.http.post<APIViewModel>(this.url + "Student/post", Product)
    // }
    // getStudent() {
    //     return this.http.get<APIViewModel>(environment.apiUrl + "Student/get")
    // }
    // getStudentById(ID: number) {
    //     return this.http.get<APIViewModel>(environment.apiUrl + "Student/getbyid?id=" + ID)
    // }

    // deleteStudent(ID: number) {
    //     return this.http.delete<APIViewModel>(this.url + "Student/delete?id=" + ID)
    // }
    // updateStudent(Product: ProudctViewModel) {
    //     return this.http.put<APIViewModel>(this.url + "Student/put", Product)
    // }
    GetProduct() {

        return this.http.get<APIViewModel>("https://localhost:63000/ProductApi/Get");

    }

    AddProduct(product: ProudctViewModel) {

        return this.http.post<APIViewModel>("https://localhost:63000/ProductApi/Add", product);
    }
}







