import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { RequestService } from 'src/app//services/request.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  //raceInfo: any; // Agrega la propiedad raceInfo
  //raceResults: any[] = [];
  seasonRaceResults: any[] = [];

  constructor(private router: Router, private requestService: RequestService) { }


  ngOnInit(): void {
    //this.getRace();
    this.getAllRaces();
  }

  // Se comenta el codigo hecho donde se testeaban las Cards.
  /*getRace() {
    this.requestService.getLastRaceHttpClient().subscribe({
      next: (response: any) => {
        // Accede a la información que necesitas directamente
        const raceInfo = response.MRData.RaceTable.Races[0];
        this.raceResults = raceInfo.Results; // Asigna la información a la propiedad raceInfo

        // Luego, puedes imprimir o utilizar esta información como desees
        //console.log('Resultados de la carrera:', this.raceInfo);
      },
      error: (error) => {
        console.error('Error al obtener la carrera:', error);
      }
    });
  }*/

  /*getDrivers() {
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
  }*/

  /*   getAllRaces() {
  
      for (let race = 2; race <= 19; race++) {
  
        let data = this.requestService.getAllRacesCurrentSeason(race);
        data.subscribe({
            next: (response: any) => {
              const raceInfo = response.MRData.RaceTable.Races[0];
              this.seasonRaceResults.push(raceInfo);
            },
            error: (error) => {
              console.error('Error al obtener la informacion de la Carrera: ', error);
            }
          });
      }
    } */

  goToGpResults(raceID: number) {

    if (raceID) {
      this.router.navigate(['/gp-detail', raceID]);
    }
  }

  getAllRaces() {
    const observables = [];

    for (let race = 1; race <= 19; race++) {
      observables.push(this.requestService.getAllRacesCurrentSeason(race));
    }

    forkJoin(observables).subscribe({
      next: (responses: any[]) => {
        for (const response of responses) {
          const raceInfo = response.MRData.RaceTable.Races[0];
          this.seasonRaceResults.push(raceInfo);
        }
      },
      error: (error) => {
        console.error('Error al obtener la información de las Carreras: ', error);
      }
    });
  }
}