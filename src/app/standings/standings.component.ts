import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})

export class StandingsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'piloto', 'puntos'];
  dataSource: any[] = []; // Inicializamos el dataSource como un array vacío
  driverResult: any[] = [];

  constructor(private requestService: RequestService) {}

  getDrivers() {
    this.requestService.getDriverStanding().subscribe({
      next: (response: any) => {
        const driverInfo = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        this.driverResult = driverInfo;
        this.dataSource = this.driverResult; // Asignamos los datos a dataSource
      },
      error: (error) => {
        console.error('Error al obtener la carrera:', error);
      }
    });
  }

  ngOnInit(): void {
    this.getDrivers();
  }
}
