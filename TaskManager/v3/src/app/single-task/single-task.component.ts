import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Status, StatusChange, Task } from '../task';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit, OnDestroy {

  @Input()
  task!: Task;

  @Output()
  onDelete = new EventEmitter<string>();
  
  @Output()
  onStatusChange = new EventEmitter<StatusChange>();

  timer: number = 0;
  subscription!: Subscription;

  statusNew = Status.New;
  statusInProgress = Status.InProgress;
  statusDone = Status.Done;

  constructor() { }

  ngOnInit(): void {
    const int = interval(1000);
    this.subscription = int.subscribe(val => {
      this.timer += 1;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getStatusName(status: Status) {
    switch(status) {
      case Status.New: return 'Nowe';
      case Status.InProgress: return 'W trakcie';
      case Status.Done: return 'Ukończone';
    }
  }

  handleDelete(taskId: string) {
    this.onDelete.emit(taskId);
  }

  handleStatusChange(taskId: string, status: Status) {
    this.onStatusChange.emit({
      taskId,
      newStatus: status
    })
  }

}
