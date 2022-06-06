// 1. Typy proste
let value: number = 100;
value = "1";  // błąd - niezgodny typ

// typ określony automatycznie
let value = 100;
value = "1"; // błąd - niezgodny typ

const sum = (a: number, b: number): number => {
    return a + b;
}

const result = sum(1, 2); // typ result określony na podstawie wartości zwróconej z sum

// 2. Typy złożone
// tablica
const arr: number[] = [1, 2, 3, 4];
arr.push(10);
arr.push(true);

// obiekt
const user: {
    name: string;
    surname: string;
    age: number
} = {
    name: 'Marcin',
    surname: 'Grygierek',
    age: 29
}

// interfejsy
interface Address {
    street: string;
    city: string;
}
interface User {
    name: string;
    age: number;
    addresses: Address[];
    surname?: string; // Opcjonalna wartość
}

const user: User = {
    name: 'Marcin',
    surname: 'Grygierek',
    age: 29,
    addresses: [
        {
            street: 'Lorem',
            city: 'Ipsum'
        }
    ]
}

// użycie interfejsu do otypowania parametrów funkcji
const displayUser = ({ name, surname }: User) => {
    console.log(name, surname);
}

displayUser(user);

// użycie interfejsu jako wartość zwracana
interface SimpleUser {
    name: string;
    age: number;
}

const convertUser = (person: User): SimpleUser => {
    return {
        name: person.name,
        age: person.age
    }
}