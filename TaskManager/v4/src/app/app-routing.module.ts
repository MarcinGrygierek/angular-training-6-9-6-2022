import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { TasksComponent } from './views/tasks/tasks.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
