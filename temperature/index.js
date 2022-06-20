const getCoordinates = require('./getCoordinates.js');

// 1 - Getting the city
const city = process.argv[2];

// // 2 - Getting the coordinates - using .then method to handle promise
getCoordinates(city).then(function (resultat) {
  console.log(resultat);
});

// // 3 - Getting the temperature
// const temperature = getTemperature(coordinates);

// console.log(temperature);
