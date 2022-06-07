import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Status, StatusChange, Task } from '../task';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnChanges {

  @Input()
  task!: Task;

  @Output()
  onDelete = new EventEmitter<string>();
  
  @Output()
  onStatusChange = new EventEmitter<StatusChange>();

  statusNew = Status.New;
  statusInProgress = Status.InProgress;
  statusDone = Status.Done;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
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
