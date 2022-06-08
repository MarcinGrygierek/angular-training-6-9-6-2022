import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PushTestComponent } from './push-test/push-test.component';
import { ProjectionComponent } from './projection/projection.component';
import { TestComponent } from './test/test.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormFbComponent } from './reactive-form-fb/reactive-form-fb.component';
import { MainViewComponent } from './main-view/main-view.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { ParameterViewComponent } from './parameter-view/parameter-view.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PageTitleComponent,
    PushTestComponent,
    ProjectionComponent,
    TestComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveFormFbComponent,
    MainViewComponent,
    LandingViewComponent,
    MainDashboardComponent,
    ErrorViewComponent,
    ParameterViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // DashboardModule // nie importujemy, ponieważ ten moduł jest ładowany leniwie po wejściu w /dashboard
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
