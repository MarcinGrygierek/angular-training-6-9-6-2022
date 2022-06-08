import { AfterViewChecked, Component, QueryList, ViewChildren } from '@angular/core';
import { SingleTaskComponent } from './single-task/single-task.component';
import { Status, StatusChange, Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren(SingleTaskComponent)
  allTasks!: QueryList<SingleTaskComponent>

  tasks: Task[] = [
    new Task('Pierwsze zadanie')
  ];

  getTasksTotalTime() {
    const sum = this.allTasks.reduce((acc, task) => {
      return acc + task.timer
    }, 0);

    alert(`Łączny czas zadań na liście to ${sum} sekund`);
  }

  trackByFn(index: number, el: Task) {
    return el.id;
  }

  addNewTask(name: string) {
    const newTask = new Task(name);
    this.tasks = [...this.tasks, newTask];
  }

  deleteTask(taskId: string) {
    // Twarde usuwanie
    // this.tasks = this.tasks.filter(task => {
    //   if(task.id === taskId) return false;
    //   return true;
    // })

    // Ukrywanie taska
    this.tasks = this.tasks.map(task => {
      if(task.id === taskId) return {
        ...task,
        hidden: true
      }
      return task;
    })
  }

  handleChangeStatus(taskId: string) {
    // Zmiana statusu w sposób mutacyjny - nie zadziała, zmiana następuje z poziomu komponentu rodzica,
    // co w przypadku OnPush przy braku nowej referencji nie generuje ponownego renderowania
    // const taskToChange = this.tasks.find(task => task.id === taskId);
    // if(taskToChange) taskToChange.status = Status.Done;

    // aby komponent z OnPush się odświeżył należy zmienić to w sposób niemutowalny
    this.tasks = this.tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          status: Status.Done
        }
      }
      return task;
    });
  }

  changeStatus(statusChange: StatusChange) {
    // Zmiana statusu w sposób mutacyjny - nie polecam. Natomiast w naszym przypadku zadziała
    // ponieważ wyemitowanie zdarzenia w komponencie dziecka przeprowadza ponowny render dziecka
    // const taskToChange = this.tasks.find(task => task.id === statusChange.taskId);
    // if(taskToChange) taskToChange.status = statusChange.newStatus;

    // Sposób polecany tak kczy inaczej - niemutacyjny
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
