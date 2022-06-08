export class User {
    name: string;
    hidden: boolean;
    id: string;

    constructor(name: string) {
        this.name = name;
        this.id = Math.round(Math.random() * 100000).toString();
        this.hidden = Math.random() > 0.5 ? true : false;
    }
}