import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app//services/request.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  //raceInfo: any; // Agrega la propiedad raceInfo
  raceResults: any[] = [];

  constructor(private requestService: RequestService){

  }

  getRace() {
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
  }

  ngOnInit(): void { 
    this.getRace();
  }
}