import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from '../main-dashboard/main-dashboard.component';
import { MainViewComponent } from '../main-view/main-view.component';
import { ParameterViewComponent } from '../parameter-view/parameter-view.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent, children: [
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
] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
