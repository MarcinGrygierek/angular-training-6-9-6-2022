import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContentComponent } from './page-content/page-content.component';



@NgModule({
  declarations: [
    PageContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageContentComponent,
    CommonModule
  ]
})
export class SharedModule { }
