import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  @Input()
  users: string[] = [];

  @Input()
  title: string = '';

  @Input()
  handleClick!: Function;

  @Output()
  onNewUser = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.handleClick);
  }

  handleSecondClick() {
    const newUserName = `Lorem Ipsum ${Math.round(Math.random() * 100)}`;
    this.onNewUser.emit(newUserName);
  }

}
