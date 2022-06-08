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
    ReactiveFormFbComponent
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
