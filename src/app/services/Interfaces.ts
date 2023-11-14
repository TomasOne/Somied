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

export interface IDriver {
  id: number | null;
  givenName: string;
  familyName: string;
  nationality: string;
  races: string;
  polePositions: string;
  podiums: string;
  wins: string;
  worldChampionships: string;
}