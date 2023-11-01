import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})

export class StandingsComponent implements OnInit {

  displayedColumnsDrivers: string[] = ['position', 'piloto', 'puntos'];
  displayedColumnsConstructors: string[] = ['position', 'constructor', 'puntos'];
  dataSource: any[] = []; // Inicializamos el dataSource como un array vacío
  driverResult: any[] = [];
  constructorResult: any[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.getDrivers();
    this.getConstructors();
  }

  getDrivers() {
    this.requestService.getDriverStanding().subscribe({
      next: (response: any) => {
        const driverInfo = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        this.driverResult = driverInfo;
        this.dataSource = this.driverResult; // Asignamos los datos a dataSource
      },
      error: (error) => {
        console.error('Error al obtener Standing de los Pilotos: ', error);
      }
    });
  }

  getConstructors(){
    this.requestService.getConstructorStanding().subscribe({
      next: (response: any) => {
      const constructorInfo = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
      this.constructorResult = constructorInfo;
      this.dataSource = this.constructorResult;
    },
    error: (error) => {
      console.error('Error al obtener Standing de los Constructores: ', error);
    }
    })
  }
}
