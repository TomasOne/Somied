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

  raceInfo: any;
  raceResults: any[] = [];
  seasonRaceResults: any[] = [];
  lastRaceResult: any[] = [];

  constructor(private router: Router, private requestService: RequestService) { }


  ngOnInit(): void {
    this.getLastRace();
    this.getAllRaces();
  }

  getLastRace() {
    this.requestService.getLastRace().subscribe({
      next: (response: any) => {
        const raceInfo = response.MRData.RaceTable.Races[0];
        this.lastRaceResult.push(raceInfo);
      },
      error: (error) => {
        console.error('Error al obtener la carrera:', error);
      }
    });
  }

  goToGpResults(raceID: number) {

    if (raceID) {
      this.router.navigate(['/gp-detail', raceID]);
    }
  }

  goToGpComments(raceID: number) {
    if (raceID) {
      this.router.navigate(['/gp-comments', raceID]);
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