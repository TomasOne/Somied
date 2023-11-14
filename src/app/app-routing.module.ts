import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { GpDetailComponent } from './gpDetail/gpDetail.component';
import { StandingsComponent } from './standings/standings.component';
import { DriversComponent } from './drivers/drivers.component';
import { GpCommentComponent } from './gpComment/gpComment.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gp-detail/:raceID',
    component: GpDetailComponent
  },
  {
    path: 'gp-comments/:raceID',
    component: GpCommentComponent
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
    path:'**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }