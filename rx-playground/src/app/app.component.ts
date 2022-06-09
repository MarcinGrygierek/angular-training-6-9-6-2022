import { Component, OnInit } from '@angular/core';
import { from, interval, merge, Observable, Observer, of, timer } from 'rxjs';
import {delay, map, mergeAll, mergeMap, scan, startWith, switchMap, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // const ids = [1, 2, 3, 4];

    // const subs = from(ids)
    // .pipe(
    //   map(id => of(id).pipe(delay((Math.random() * 3000) + 1000))),
    //   mergeMap(val => val),
    //   tap(val => console.log(val)),
    // )
    // .subscribe(val => {
    //   console.log(val);
    // })

    // // subs.unsubscribe();

    // of(ids).subscribe(val => {
    //   console.log(val);
    // })

    // of(...ids).subscribe(val => {
    //   console.log(val);
    // })

    // const watchdog = timer(2000);

    // const sub1 = interval(1000).pipe(
    //   takeUntil(watchdog)
    // ).subscribe(val => {
    //   console.log('INT1', val);
    // });

    // const sub2 = interval(500).pipe(
    //   startWith(100),
    //   take(3)
    // ).subscribe(val => {
    //   console.log('INT2', val);
    // });

    // const sub3 = interval(1200).pipe(
    //   takeUntil(watchdog)
    // ).subscribe(val => {
    //   console.log('INT3', val);
    // });

    // console.log(sub1, sub2, sub3);

    // setTimeout(() => {
    //   console.log(sub1, sub2, sub3);
    // }, 3000)

    const products = [{
        id: 1,
        price: 10,
      },
      {
        id: 2,
        price: 20,
      },
      {
        id: 3,
        price: 30,
      },
    ]

    from(products)
    .pipe(
      scan((acc, curr) => acc + curr.price, 0)
    )
    .subscribe(val => {
      console.log(val);
    })

  }
}
