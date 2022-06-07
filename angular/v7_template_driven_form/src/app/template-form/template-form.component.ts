import { Component, OnInit } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  constructor() { }

  data: Data = new Data('asdasdasdasd', 'asdasdaasdasad');

  handleSubmit() {
    console.log(`Sending form with data`, this.data);
  }

}
