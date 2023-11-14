import { IUser } from "./Interfaces";

export class User implements IUser {

    id: string = '';
    email: string = '';
    password: string = '';

    constructor(user?: any) {
        this.id = user == undefined ? '' : user.id;
        this.email = user == undefined ? '' : user.email;
        this.password = user == undefined ? '' : user.password;
    }
}