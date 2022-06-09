import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BazComponent } from './baz/baz.component';
import { TestService } from './test.service';



@NgModule({
  declarations: [
    BazComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BazComponent,
  ]
})
export class TestModuleModule { }
