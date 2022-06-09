import { Component, OnInit } from '@angular/core';
import { SourceService } from '../source.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public randomValue: number;
  constructor(private source: SourceService) {
    this.randomValue = source.randomValue;
  }

  ngOnInit(): void {
  }

}
