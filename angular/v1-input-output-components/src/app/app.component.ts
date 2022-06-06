import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: string[] = ['Marcin', 'Łukasz', 'Ania', 'Tomek'];

  deleteRandomUser() {
    const [first, ...rest] = this.users;
    this.users = rest;
  }

  handleNewUser(name: string) {
    this.users = [...this.users, name];
  }
}
