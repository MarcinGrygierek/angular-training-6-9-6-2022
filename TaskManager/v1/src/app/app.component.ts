import { Component } from '@angular/core';
import { StatusChange, Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks: Task[] = [
    new Task('Pierwsze zadanie')
  ];

  trackByFn(index: number, el: Task) {
    return el.id;
  }

  addNewTask() {
    const newTask = new Task('Lorem ipsum');
    this.tasks.push(newTask);
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => {
      if(task.id === taskId) return false;
      return true;
    })
  }

  changeStatus(statusChange: StatusChange) {
    this.tasks = this.tasks.map(task => {
      if(task.id === statusChange.taskId) {
        return {
          ...task,
          status: statusChange.newStatus
        }
      }
      return task;
    });
  }
}
