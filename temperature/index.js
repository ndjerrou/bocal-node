// 1 - Getting the city
const city = process.argv[2];

// 2 - Getting the coordinates
const coordinates = getCoordinates(city);

// 3 - Getting the temperature
const temperature = getTemperature(coordinates);

console.log(temperature);
