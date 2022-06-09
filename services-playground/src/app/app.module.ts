import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FooComponent } from './foo/foo.component';
import { TestModuleModule } from './test-module/test-module.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FooComponent
  ],
  imports: [
    TestModuleModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
