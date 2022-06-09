export enum Status {
    New,
    InProgress,
    Done
}

export class Task {
    id: string;
    name: string;
    status: Status;
    hidden: boolean;

    constructor(name: string) {
        this.name = name;
        this.status = Status.New;
        this.id = Math.round(Math.random() * 1000000).toString();
        this.hidden = false;
    }
}

export interface StatusChange {
    taskId: string;
    newStatus: Status;
}
