import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorViewComponent } from './error-view/error-view.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ParameterViewComponent } from './parameter-view/parameter-view.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingViewComponent
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  {
    path: '**',
    component: ErrorViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
