import {  Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
 
  ngOnInit(): void {
    const obs = new Observable((observer) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        observer.next(counter);
        console.log('Observable', counter);
      }, 1000);

      return {
        unsubscribe() {
          console.log('clearing subscription');
          clearInterval(interval);
        }
      }
    });

    // dla porównania - Promise wykonuje się jako eager - jest uruchamiany od razu w przeciwieństwie
    // do Oservable które jest lazy - rozpoczyna działanie dopiero w momencie pojawienia się subskrypcja
    const prms = new Promise((resolve, reject) => {
      let counter = 0;
      const interval = setInterval(() => {
        counter++;
        // console.log('Promise', counter);
        if(counter > 20) {
          clearInterval(interval)
          resolve(true);
        }
      }, 1000);

     
    })

    // setTimeout(() => {
    //   const subscription = obs.subscribe(val => {
    //     console.log('In subscription', val);
    //   });

    //   setTimeout(() => {
    //     const subscription2 = obs.subscribe(val => {
    //       console.log('In subscription2', val);
    //     });

    //     setTimeout(() => {
    //       subscription2.unsubscribe();
    //     }, 10000)
    //   }, 5000)
     

    //   setTimeout(() => {
    //     subscription.unsubscribe();
    //   }, 10000)
    // }, 5000);

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('test');
        resolve('Sukces')
      }, 5000)
    })

    const observableFromPromise = from(promise);
    observableFromPromise.subscribe(val => {
      console.log(val);
    })
    console.log(observableFromPromise);
  }
  
}
