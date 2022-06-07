import { Component } from '@angular/core';
import { User } from './users/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [
    new User('Marcin'),
    new User('Łukasz'),
    new User('Tomek'),
    new User('Ania'),
  ];

  data: string[] = ['lorem', 'ipsum', 'dolor'];

  deleteRandomUser() {
    const [first, ...rest] = this.users;
    this.users = rest;
  }

  handleNewUser(name: string) {
    // this.users = [...this.users, new User(name)];
    this.users.push(new User(name));
  }

  handleUserDelete(userId: string) {
    this.users = this.users.filter(user => {
      if(user.id === userId) return false;
      return true;
    })
  }

  addNewData() {
    // this.data = [...this.data, 'lorem'];
    this.data.push('lorem');
  }
}
