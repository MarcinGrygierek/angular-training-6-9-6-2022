import { Component, OnInit } from '@angular/core';
import { SourceService } from '../source.service';
import { FooService } from './foo.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  providers: [FooService]
})
export class FooComponent implements OnInit {
  data: number[] = [];
  counter!: number;

  valueFromSource!: number;
  constructor(
    private source: SourceService,
    private fooService: FooService
    ) { 
      this.data = this.fooService.data;
      this.source.numbers$.subscribe((val: number[]) => {
        this.counter = val.length;
      })
  }

  addNewNumber() {
    this.source.addNumber(Math.round(Math.random()*1000));
  }

  ngOnInit(): void {
  }

}
