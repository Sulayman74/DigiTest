import { Observable, Subject } from "rxjs";

import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  countriesURL = "https://restcountries.com/v3.1/all"
  url = 'https://reqres.in/api/users?page=2'
  salatApi = " http://api.aladhan.com/v1/calendarByCity?city=London&country=United Kingdom&method=2&month=11&year=2022";

  isOver: boolean = true
  dataToSend$ = new Subject<boolean>(); // c'est une observable
  // ? dataAnnounced$ = this.dataToSend.asObservable();




  constructor(private _http: HttpClient) {
  }

  sendData(data: boolean): void {
    this.dataToSend$.next(this.isOver)
  }

  getSalat(): Observable<any> {
    return this._http.get(this.salatApi)
  }

  getData(): Observable<any> {
    return this._http.get(this.url)
  }
  getCountries(): Observable<any> {
    return this._http.get(this.countriesURL)
  }

  //! test
  //Using any
  // public editDataDetails: any = [];
  // public subject = new Subject<any>();
  // private messageSource = new  BehaviorSubject(this.editDataDetails);
  // currentMessage = this.messageSource.asObservable();
  // changeMessage(message: string) {
  // this.messageSource.next(message)
}

