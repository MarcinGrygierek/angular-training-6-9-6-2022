import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskReactiveComponent } from './new-task-reactive/new-task-reactive.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksComponent,
    SingleTaskComponent,
    NewTaskComponent,
    NewTaskReactiveComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
