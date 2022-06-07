import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-push-test',
  templateUrl: './push-test.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./push-test.component.scss']
})
export class PushTestComponent implements OnInit {
  @Input() 
  data: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
