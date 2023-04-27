import { Observable, Subject, map, tap } from "rxjs";

import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  now = new Date()
  year = this.now.getFullYear()

  month = this.now.getMonth() + 1


  countriesURL = "https://restcountries.com/v3.1/all"
  url = 'https://reqres.in/api/users?page=2'
  salatApi = `http://api.aladhan.com/v1/calendarByCity/${this.year}/${this.month}?city=Bonneville&country=France&method=99&methodSettings=16.5,null,90mins`;

  apiHadith = 'https://api.hadith.gading.dev/books/muslim/'


  quranApi = 'http://api.alquran.cloud/v1/ayah/'
  isOver: boolean = true
  dataToSend$ = new Subject<boolean>(); // c'est une observable
  // ? dataAnnounced$ = this.dataToSend.asObservable();





  constructor(private _http: HttpClient) {
  }

  sendData(data: boolean): void {
    this.dataToSend$.next(this.isOver)
  }
  getAyah(): Observable<any> {
    let numero = Math.floor(Math.random() * 6236);
    console.log(numero);
    return this._http.get(this.quranApi + numero)
  }
  getHadith(): Observable<any> {
    let numero = Math.floor(Math.random() * 500);
    return this._http.get(this.apiHadith + numero)
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

