import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  @Input()
  users: User[] = [];

  @Input()
  title: string = '';

  @Input()
  handleClick!: Function;

  @Output()
  onNewUser = new EventEmitter<string>();

  @Output()
  onUserDelete = new EventEmitter<string>();

  calculatedID: string = 'lorem-ipsum';
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.handleClick);
  }

  handleSecondClick() {
    const newUserName = `Lorem Ipsum ${Math.round(Math.random() * 100)}`;
    this.onNewUser.emit(newUserName);
  }

  trackByFn(index: number, element: User) {
    return element.id;
  }

  handleUserDelete(index: number, userId: string) {
    this.onUserDelete.emit(userId);
  }

}
