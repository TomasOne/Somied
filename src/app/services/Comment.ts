// En tu archivo Comment.ts

import { IComment } from "./Interfaces";

export class Comment implements IComment {
    id: number | null = null;
    name: string = '';
    email: string = '';
    comment: string = '';
    editing?: boolean = false;

    constructor(comment?: any) {
        this.id = comment == undefined ? null : comment.id;
        this.name = comment == undefined ? '' : comment.name;
        this.email = comment == undefined ? '' : comment.email;
        this.comment = comment == undefined ? '' : comment.comment;
    }
}
