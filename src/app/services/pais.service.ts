import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = "https://restcountries.com/v3.1/subregion/europe";

  get httpParams(){
    return new HttpParams().set('fields','name,flags');
  }

  constructor(private http:HttpClient) { }

  traerPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.apiUrl,{params: this.httpParams});
  }
}
