import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  
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
    console.log('ON INIT');
  }

  ngDoCheck(): void {
    console.log('DO CHECK');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ON CHANGES', changes);
  }

  ngOnDestroy(): void {
    console.log('ON DESTROY');
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
