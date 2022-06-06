const cars = [
  {
    name: 'Toyota',
    isBroken: false,
  },
  {
    name: 'Fiat',
    isBroken: true,
  },
  {
    name: 'Mercedes',
    isBroken: false,
  },
  {
    name: 'Porsche',
    isBroken: true,
  },
];

// const brokenCars = cars.filter((car) => car.isBroken);
// const brokenCarsInfo = brokenCars.map(
//   (car) => `Samochód ${car.name} jest zepsuty`
// );

// można również połączyć map z filter
const brokenCarsInfo = cars
  .filter((car) => car.isBroken)
  .map((car) => `Samochód ${car.name} jest zepsuty`);
