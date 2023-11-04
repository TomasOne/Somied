import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { RequestService } from 'src/app//services/request.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})

export class DriversComponent implements OnInit {

  driverData: any[] = [];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.getAllDriversJson();
  }

  getAllDriversJson() {
    const observables = [];

    for (let id = 1; id <= 22; id++) {
      observables.push(this.requestService.getDriversJson(id));
    }

    forkJoin(observables).subscribe({
      next: (responses: any[]) => {
        for (const response of responses) {
          this.driverData.push(response);
        }
      },
      error: (error) => {
        console.error('Error al obtener la información de las Carreras: ', error);
      }
    });
  }
}
