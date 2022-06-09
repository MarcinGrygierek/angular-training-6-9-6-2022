import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  randomValue: number = 0;

  constructor() {
    console.log('service is constructed')
    this.randomValue = Math.random() * 1000;
   }
}
