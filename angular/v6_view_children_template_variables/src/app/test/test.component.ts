import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
  public publicVal: number = 0;
  private _privateVal: string = 'Dolor sit';

  private subscription!: Subscription;

  constructor() { }
  
  get privateVal() {
    return this._privateVal;
  }

  ngOnInit(): void {
    const int = interval(1000);
    this.subscription = int.subscribe(val => {
      this.publicVal++;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
