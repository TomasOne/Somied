import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }


  // METODOS //
  goHome() {
    this.router.navigate(['/home']);
  }

  goToDrivers() {
    this.router.navigate(['/drivers']);
  }

  goToStandings() {
    this.router.navigate(['/standings']);
  }
}