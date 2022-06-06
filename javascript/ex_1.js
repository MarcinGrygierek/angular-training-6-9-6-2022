const getSum = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr);

  return sum;
};

// Metoda subiektywnie preferowana
const getSumShorter = (arr) => {
  return arr.reduce((acc, curr) => acc + curr);
};

// Należy się zastanowić czy to jest wystarczająco czytelne
const getSumShortest = (arr) => arr.reduce((acc, curr) => acc + curr);

console.log(getSumShorter([1, 2, 3, 4, 5]));
console.log(getSumShorter([5, 10, 15, 20]));
console.log(getSumShorter([2, 10, 9, 11]));
