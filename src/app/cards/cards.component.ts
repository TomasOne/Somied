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
    //this.getRace();
  }
}