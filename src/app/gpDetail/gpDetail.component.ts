import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-season',
  templateUrl: './gpDetail.component.html',
  styleUrls: ['./gpDetail.component.css']
})
export class GpDetailComponent implements OnInit {

  race: any = 0;
  dataSource: any[] = [];
  gpDetailData: any[] = [];
  displayedColumnsGP: string[] = ['position', 'driver', 'constructor', 'laps', 'status', 'points'];

  constructor(private route: ActivatedRoute, private requestService: RequestService) { }

  ngOnInit(): void {
    this.getRaceID();
  }

  getRaceID() {
    this.route.params.subscribe(parameter => {
      this.race = +parameter['raceID'];
    });

    this.getGpResult();
  }

  getGpResult() {

    this.requestService.getAllRacesCurrentSeason(this.race).subscribe({
      next: (response: any) => {
        const gpData = response.MRData.RaceTable.Races[0].Results;
        this.gpDetailData = gpData;
        this.dataSource = this.gpDetailData;
        console.log(this.dataSource);
      },
      error: (error) => {
        console.error('Error al obtener la informacion de la Carrera: ', error);
      }
    });
  }
}
