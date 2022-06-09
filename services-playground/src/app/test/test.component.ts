import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SourceService } from '../source.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  public numbers$!: Observable<number[]>;

  constructor(private source: SourceService) {
    this.numbers$ = this.source.numbers$;
  }
}
