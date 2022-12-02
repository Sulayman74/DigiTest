import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {


  url = "https://reqres.in/api/users/2"
  constructor(private http: HttpClient) { }
  getSingleUser(): Observable<any> {
    return this.http.get(this.url)

  }
}
