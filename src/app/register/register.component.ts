import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../services/User';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';

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

    console.log(user);
    this.requestService.addUserJson(user).subscribe({
      next: () => {
        this.requestService.getUsersJson();
        alert("User created. Welcome!");

      },
      error: () => alert("Can not create a new User")
    })

    this.goToHome();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
