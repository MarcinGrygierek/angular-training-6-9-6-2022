enum TaskStatus {
    New,
    InProgress,
    Done
}

interface Task {
    id: string;
    name: string;
    status: TaskStatus
}

class TaskManager {
    private tasks: Task[] = [];

    private getStatusName(status: TaskStatus) {
        switch (status) {
            case TaskStatus.New: return 'nowy';
            case TaskStatus.InProgress: return 'w trakcie';
            case TaskStatus.Done: return 'zakończone';
        }
    }

    printTasks() {
        this.tasks.forEach(task => {
            console.log(`Zadanie ${task.name} (${task.id}) - ${this.getStatusName(task.status)}`)
        })
    }

    addTask(name: string): string {
        const newTask: Task = {
            name,
            status: TaskStatus.New,
            id: `${new Date().getTime()}-${Math.random() * 10}`,
        }

        // wersja mutowalna
        // this.tasks.push(newTask);

        // wersja niemutowalna
        this.tasks = [...this.tasks, newTask];

        return newTask.id;
    }

    editTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks = this.tasks.map(task => {
            if (task.id === taskId) return {
                ...task,
                status: newStatus
            }
            return task;
        })
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => {
            if (task.id === taskId) return false;
            return true;
        })
    }
}

const manager = new TaskManager();
const task1 = manager.addTask('Lorem');
const task2 = manager.addTask('Ipsum');
const task3 = manager.addTask('Dolor');

manager.printTasks();

manager.editTaskStatus(task2, TaskStatus.Done);
manager.editTaskStatus(task3, TaskStatus.InProgress);

manager.printTasks();

manager.removeTask(task1);

manager.printTasks();