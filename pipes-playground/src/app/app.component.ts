import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe-playground';
  date = new Date();
  amount = 10.2763;
  cost = 1220.23
}
