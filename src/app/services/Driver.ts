import { IDriver } from "./Interfaces";

export class Driver implements IDriver{

    id: number | null= null;
    givenName: string = '';
    familyName: string = '';
    nationality: string = '';
    races: string = '';
    polePositions: string = '';
    podiums: string = '';
    wins: string = '';
    worldChampionships: string = '';

    constructor(driver?: any) {
        this.id = driver == undefined ? null : driver.id;
        this.givenName = driver == undefined ? '' : driver.givenName;
        this.familyName = driver == undefined ? '' : driver.familyName;
        this.nationality = driver == undefined ? '' : driver.nationality;
        this.races = driver == undefined ? '' : driver.races;
        this.polePositions = driver == undefined ? '' : driver.polePositions;
        this.podiums = driver == undefined ? '' : driver.podiums;
        this.wins = driver == undefined ? '' : driver.wins;
        this.worldChampionships = driver == undefined ? '' : driver.worldChampionships;
    }
}