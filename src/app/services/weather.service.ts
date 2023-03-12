import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  urlGps = "https://api-adresse.data.gouv.fr/search/";
  urlMeteo = "https://api.open-meteo.com/v1/forecast/"

  constructor(private _http: HttpClient) { }



  getLocation(rue: string, codePostale: string, ville: string): Observable<any> {
    const parameters = new HttpParams().append("q", `${rue},${codePostale},${ville}`)
    return this._http.get(this.urlGps,
      { params: parameters })
  }
  getMeteo(longitude: number, latitude: number): Observable<any> {
    const parametres = new HttpParams().append("latitude", latitude).append("longitude", longitude).append('hourly', 'temperature_2m').append('timezone', 'Europe/Berlin')
    return this._http.get(this.urlMeteo,
      { params: parametres });
  }

}
