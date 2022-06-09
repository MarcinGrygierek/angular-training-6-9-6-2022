import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  private numbers: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([1, 2, 3]);
  public numbers$: Observable<number[]>;

  constructor() {
    this.numbers$ = this.numbers.asObservable();
  }

  addNumber(newNumber: number) {
    const current = this.numbers.getValue();
    this.numbers.next([...current, newNumber]);
  }
}
