import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http: HttpClient) { }

  // METODOS API//
  getLastRaceHttpClient() {
    return this.http.get('https://ergast.com/api/f1/current/last/results.json');
  }

  getAllRacesCurrentSeason(race: number) {
    return this.http.get(`https://ergast.com/api/f1/2023/${race}/results.json`);
  }

  getDriverStanding() {
    return this.http.get('https://ergast.com/api/f1/current/driverStandings.json');
  }

  getConstructorStanding() {
    return this.http.get('https://ergast.com/api/f1/current/constructorStandings.json')
  }

  // METODOS JSON //
  getDriversJson(id: number) {
    return this.http.get(`http://localhost:3000/drivers/${id}`);
  }
}