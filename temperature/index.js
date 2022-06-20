const getCoordinates = require('./getCoordinates.js');

const getTemperature = require('./getTemperature');

const city = process.argv[2];

getCoordinates(city).then((coordinates) =>
  getTemperature(coordinates).then((temperature) =>
    console.log(`La température à ${city} est de : ${temperature}°`)
  )
);
