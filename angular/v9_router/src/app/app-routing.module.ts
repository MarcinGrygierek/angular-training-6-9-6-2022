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
    path: 'main', component: MainDashboardComponent, children: [
      {
        path: '',
        component: MainViewComponent
      },
      {
        path: ':id',
        component: ParameterViewComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
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
