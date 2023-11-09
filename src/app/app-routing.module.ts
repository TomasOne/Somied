import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StandingsComponent } from './standings/standings.component';
import { DriversComponent } from './drivers/drivers.component';
import { GpDetailComponent } from './gpDetail/gpDetail.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'drivers',
    component: DriversComponent
  },
  {
    path: 'standings',
    component: StandingsComponent
  },
  {
    path: 'gp-detail/:raceID',
    component: GpDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }