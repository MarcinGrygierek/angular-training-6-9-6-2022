import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PushTestComponent } from './push-test/push-test.component';
import { ProjectionComponent } from './projection/projection.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PageTitleComponent,
    PushTestComponent,
    ProjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
