import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../services/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  public async checkAuth() {

    const check = this.authService.checkAuth(this.user.email, this.user.password);

    if (await check) {
      this.router.navigate(['/home']);
    }
    else {
      alert("No existe el usuario");
    }
  }

  public goToRegister() {
    this.router.navigate(['/register']);
  }
}
