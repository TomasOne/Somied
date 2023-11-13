import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http: HttpClient) { }

  // METODOS API//
  getLastRace() {
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

  getUsersJson(){
    return this.http.get(`http://localhost:3000/users`);
  }

  getUserToAuth(email:string, password: string): Observable<User[]>{
    return this.http.get<User[]>(`http://localhost:3000/users?email=${email}&password=${password}`);
  }

  addUserJson(createUser: User): Observable<boolean> {
    const url = `http://localhost:3000/users`;
    return this.http.post<boolean>(url, createUser);
  }
}