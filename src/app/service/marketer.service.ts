import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { APIViewModel } from '../Models/APIViewModel';
import { EditUserProfile } from '../Models/EditUserProfile';

@Injectable({
  providedIn: 'root'
})
export class MarketerService {

  constructor(private http : HttpClient) { }

  getmarketerById(id:any)
{
  return this.http.get<APIViewModel>("https://localhost:63000/User/UpdateProfile?ID="+id)
}
updatemarketer(val:EditUserProfile)
{
  return this.http.post<APIViewModel>("https://localhost:63000/User/Profile",val)
}

}
