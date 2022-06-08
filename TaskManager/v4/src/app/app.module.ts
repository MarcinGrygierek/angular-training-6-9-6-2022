import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { PageContentComponent } from './page-content/page-content.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTaskReactiveComponent } from './new-task-reactive/new-task-reactive.component';
import { LandingComponent } from './views/landing/landing.component';
import { TasksComponent } from './views/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleTaskComponent,
    PageContentComponent,
    NewTaskComponent,
    NewTaskReactiveComponent,
    LandingComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
