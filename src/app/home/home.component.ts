import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { lastValueFrom } from 'rxjs';
import { Comment } from '../services/Comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public comments: Array<Comment> = [];

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {

    this.getProducts();
  }

  public async getProducts() {

    try {

      let response = this.requestService.getSeasonComments();

      const data = await lastValueFrom(response);

      this.comments = data.map((commentData: any) => new Comment(commentData));
    } catch (error) {
      console.error(error);
    }
  }
}