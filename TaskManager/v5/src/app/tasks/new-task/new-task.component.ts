import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

  @Output()
  onNewTask = new EventEmitter<string>();

  task = {
    name: ''
  }

  handleSubmit() {
    this.onNewTask.emit(this.task.name);
    this.task.name = '';
  }

}
