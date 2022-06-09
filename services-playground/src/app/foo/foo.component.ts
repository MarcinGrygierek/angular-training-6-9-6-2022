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
  constructor(
    private source: SourceService,
    private fooService: FooService
    ) { 
      this.data = this.fooService.data;
  }


  ngOnInit(): void {
  }

}
