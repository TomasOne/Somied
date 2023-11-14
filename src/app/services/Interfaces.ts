export interface IUser {

  id: string;
  email: string;
  password: string;
}

export interface IComment {

  id: number | null;
  name: string;
  email: string;
  comment: string;
}