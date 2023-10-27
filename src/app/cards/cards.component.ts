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

  ngOnInit(): void {
    console.log('Inicio del Proyecto');
  }
  
 /*getRace() {
    this.requestService.getLastRaceHttpClient().subscribe({
      next: (response: any) => {
        //console.log(response);
        // Accede a la información que necesitas directamente
        const raceInfo = response.MRData.RaceTable.Races[0];
        //const circuitInfo = raceInfo.Circuit;
        const results = raceInfo.Results[0];
        const driver = raceInfo.Results[0].Driver;
  
        // Luego, puedes imprimir o utilizar esta información como desees
        //console.log('Información de la carrera:', raceInfo);
        //console.log('Información del circuito:', circuitInfo);
        console.log('Resultados de la carrera:', driver);
      },
      error: (error) => {
        console.error('Error al obtener la carrera:', error);
      }
    });
  }*/
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
  
}