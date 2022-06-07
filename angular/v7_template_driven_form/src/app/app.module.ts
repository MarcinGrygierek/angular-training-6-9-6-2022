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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PageTitleComponent,
    PushTestComponent,
    ProjectionComponent,
    TestComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
