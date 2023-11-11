import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../services/User';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public newUser: User = new User();

  @Output() public userToCreate: EventEmitter<User> = new EventEmitter();

  constructor(private requestService: RequestService, private router: Router) { }

  // METODOS //
  public createUser(user: User) {
    if (!user.id || !user.email || !user.password) {
      alert("Please fill in all the fields");
      return;
    }

    this.isIdRepeated(user.id).subscribe((isRepeated: boolean) => {
      if (isRepeated) {
        alert("ID already exists. Please choose a different one.");
      } else {
        this.requestService.addUserJson(user).subscribe({
          next: () => {
            this.requestService.getUsersJson();
            alert("User created. Welcome!");
            this.goToHome();
          },
          error: () => alert("Can not create a new User")
        });
      }
    });
  }

  private isIdRepeated(id: string): Observable<boolean> {
    return this.requestService.getUsersJson().pipe(
      map((existingUsers: any) => existingUsers.some((user: any) => user.id === id)),
      tap((isRepeated: boolean) => {
        if (isRepeated) {
          alert("ID already exists. Please choose a different one.");
        }
      })
    );
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
