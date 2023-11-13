import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { lastValueFrom } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private requestService: RequestService) { }

  public async checkAuth(email: string, password: string): Promise<boolean> {

    let users: User[] = [];

    try {
      let response = this.requestService.getUserToAuth(email, password);
      users = await lastValueFrom(response);
    } catch (error) {
      console.log(error);
    }

    return users.length == 1;
  }
}
