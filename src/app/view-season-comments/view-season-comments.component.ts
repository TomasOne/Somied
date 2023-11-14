import { Component, Input } from '@angular/core';
import { Comment } from '../services/Comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-view-season-comments',
  templateUrl: './view-season-comments.component.html',
  styleUrls: ['./view-season-comments.component.css'],
})
export class ViewSeasonCommentsComponent {

  @Input() inputComments: Array<Comment> = [];
  newComment: Comment = { id: null, name: '', email: '', comment: '', editing: false };

  constructor(private commentService: CommentService) { }

  toggleEdit(index: number) {
    this.inputComments[index].editing = !this.inputComments[index].editing;
  }

  saveEdit(index: number) {
    this.inputComments[index].editing = false;

    this.commentService.updateComment(this.inputComments[index]).subscribe((updatedComment) => {
      console.log('Save edit for comment with index', index);
      console.log('Updated Comment:', updatedComment);
    });
  }

  cancelEdit(index: number) {
    this.inputComments[index].editing = false;
  }

  deleteComment(index: number) {
    const commentId = this.inputComments[index].id;

    if (commentId !== null) {
      this.commentService.deleteComment(commentId.toString()).subscribe(() => {
        this.inputComments.splice(index, 1);
        console.log('Delete comment with index', index);
      });
    }
  }

  addComment() {
    this.commentService.addComment(this.newComment).subscribe((addedComment) => {
      this.inputComments.push(addedComment);
      this.newComment = { id: null, name: '', email: '', comment: '', editing: false };
    });
  }
}
