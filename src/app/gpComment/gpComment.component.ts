import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-comment',
  templateUrl: './gpComment.component.html',
  styleUrls: ['./gpComment.component.css']
})
export class GpCommentComponent implements OnInit {


  constructor(private router: Router, private requestService: RequestService) { }

  ngOnInit(): void {

  }

  /*
  getRaceID() {
    this.route.params.subscribe(parameter => {
      this.race = +parameter['raceID'];
    });

    this.getGpResult();
  }
  */

  /*
  getGpResult() {

    this.requestService.getAllRacesCurrentSeason(this.race).subscribe({
      next: (response: any) => {
        const gpData = response.MRData.RaceTable.Races[0].Results;
        this.gpDetailData = gpData;
        this.dataSource = this.gpDetailData;
      },
      error: (error) => {
        console.error('Error al obtener la informacion de la Carrera: ', error);
      }
    });
  }
  */
}
