const axios = require('axios');

async function getTemperature(coordinates) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.longitude}&appid=75df4771c32af58b732d3f749b83215d&units=metric`;

  const resultat = await axios.get(url);

  return resultat.data.main.temp;
}

module.exports = getTemperature;
