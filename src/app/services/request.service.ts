import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient){
    //this.getLastRaceHttpClient();
  }

   getLastRaceHttpClient(){
    return this.http.get('https://ergast.com/api/f1/current/last/results.json');
   }
}