// 1. let/const/var
//es5
var a = 10;

//es6
let valLet = 10;
const valConst = 200; // stała więc nie możemy podstawić jej nowej wartości

// 2. hoisting
console.log(valVar); // zadziała ponieważ zachodzi hoistig
var valVar = 10;

console.log(valLet2); // wystąpi błąd - dla let nie zachodzi hoisting i valLet2 nie istnieje na tym etapie
let valLet2 = 10;

// 3. spread/rest
const arr1 = [1, 2, 3];
const arr2 = arr1; // nie jest kopiowana tablica a referencja!
// w związku z czym
console.log(arr1 === arr2); // true, bo stałe współdzielą referencję

const arr3 = [...arr1]; //tworzymy nową referencję i kopiujemy tablicę

// WAŻNE! - spread działa na jednym poziomie, każde zagnieżdżenie trzeba obsłużyć osobno!
const user1 = {
  name: 'Marcin',
  colors: ['red', 'green'],
};

const user2DeepCopy = {
  ...user1,
  colors: [...user1.colors],
};

// 4. default parameters
function getValue(a = 1000) {
  console.log(a);
}

getValue(100);
getValue(); // zostanie przyjęta domyślna wartość a - 1000

// 5. arrow functions
// standardowy zapis:
function sum(a, b) {
  return a + b;
}

// jako funkcja strzałkowa:
const sumArrow = (a, b) => a + b; // jeżeli wartość w {} jest bezpośrednio wartością zwracaną można pominąć {} i return

// 6. higher order functions
const get2ValuesAndProcessThem = (cb) => {
  const v1 = Math.random();
  const v2 = Math.random();

  cb(v1, v2);
};

// przekazanie funkcji w parametrze pozwala na sprecyzowanie dokładnego działania

get2ValuesAndProcessThem((a, b) => {
  // mnożenie wylosowanych liczb
  console.log(a * b);
});

get2ValuesAndProcessThem((a, b) => {
  // sumowanie wylosowanych liczb
  console.log(a + b);
});

// 7. array methods
const arr5 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr5.length; i++) {
  console.log(arr5[i]);
}

arr5.forEach((el, index, array) => {
  console.log(el, index, array);
});

const cubed = arr5.map((el, index, array) => el * el * el);

const onlyOdd = arr5.filter((el, index, array) => el % 2 === 1);

const sum = arr.reduce((acc, curr) => {
  return acc + curr;
});

const arrOfObjects = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];

arrOfObjects.reduce((acc, curr) => {
  return acc + curr.a;
});
// '[object Object]2345' - niepoprawna wartość akumulatora

const sumOfObjectVal = arrOfObjects.reduce((acc, curr) => {
  return acc + curr.a;
}, 0); // poprawnie zainicjalizowany akumulator

// 8. destructuring
const arr = [1, 2, 3];
const [val1, , val3] = arr;
const [first, ...rest] = arr;

const obj = {
  a: 10,
  b: 20,
  c: 30,
};

const a = obj.a;
const c = obj.c;

const { a, c } = obj;

const foo = (person) => {
  console.log(person.name, person.surname, person.age);
};

const user = {
  name: 'Marcin',
  surname: 'Grygierek',
  age: 29,
};

// destrukturyzacja obiektu w ciele funkcji
const foo2 = (person) => {
  const { name, surname, age } = person;
  console.log(name, surname, age);
};

// destrukturyzacja obiektu w parametrze funkcji
const foo3 = ({ name, surname, age }) => {
  console.log(name, surname, age);
};

// 9. shorthand properties
const name = 'Marcin';
const surname = 'Grygierek';
const age = 29;

const newUser = {
  name: name,
  surname: surname,
  age: age,
};

const newUserBetter = {
  name,
  surname,
  age,
};

// 10. template strings
let a = 10;
let b = 'Lorem ' + a + ' ipsum';

const templateVal = `Lorem ${a + a} ipsum`;
