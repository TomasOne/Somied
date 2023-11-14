import { Component, Input } from '@angular/core';
import { Comment } from '../services/User';

@Component({
  selector: 'app-view-season-comments',
  templateUrl: './view-season-comments.component.html',
  styleUrls: ['./view-season-comments.component.css']
})
export class ViewSeasonCommentsComponent {

  @Input() inputProducts: Array<Comment> = []

}
