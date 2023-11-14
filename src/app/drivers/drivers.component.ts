import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { RequestService } from 'src/app//services/request.service';
import { Driver } from '../services/Driver';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})

export class DriversComponent implements OnInit {

  driverData: any[] = [];
  @Input() inputDrivers: Array<Driver> = []
  @Output() driverToEdit: EventEmitter<Driver> = new EventEmitter();

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
        console.error('Error al obtener la información de los Pilotos: ', error);
      }
    });
  }

  public editDriver(driver: Driver) {
    this.driverToEdit.emit(driver);
  }
}
