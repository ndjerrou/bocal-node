const getCoordinates = require('./getCoordinates.js');

const getTemperature = require('./getTemperature');

// 1 - Getting the city
const city = process.argv[2];

// // 2 - Getting the coordinates - using .then method to handle promise
getCoordinates(city).then(function (coordinates) {
  // getting coord from getCoordinates
  //const temperature = getTemperature(coordinates); // WRONG : need to wait for the result

  getTemperature(coordinates).then(function (temperature) {
    console.log(`La température à ${city} est de : ${temperature}°`);
  });
});
