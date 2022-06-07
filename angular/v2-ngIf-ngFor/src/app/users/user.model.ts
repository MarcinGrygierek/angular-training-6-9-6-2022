export class User {
    name: string;
    id: string;

    constructor(name: string) {
        this.name = name;
        this.id = Math.round(Math.random() * 100000).toString();
    }
}