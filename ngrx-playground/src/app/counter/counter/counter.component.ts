import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { add, subtract } from './counter.actions';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent  {
  counter$!: Observable<number>;

  constructor(private store: Store<{
    counter: number
  }>) {
    this.counter$ = this.store.select('counter');
   
    // alternatywa dla select - nasłuchujemy Observable danego wycinka store i uzyskujemy dostęp 
    // do wartości z danego reducera
    // this.store.select('counter').subscribe(val => {
    //   console.log(val);
    // })
  }

  handleAdd() {
    this.store.dispatch(add());
  }

  handleSubtract() {
    this.store.dispatch(subtract());
  }


}
