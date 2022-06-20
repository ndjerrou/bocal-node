const axios = require('axios');

async function getTemperature({ lat, longitude }) {
  //   const { lat, longitude } = coordinates;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longitude}&appid=75df4771c32af58b732d3f749b83215d&units=metric`;

  const { data } = await axios.get(url);

  const {
    main: { temp: temperature },
  } = data;

  return temperature;
}

module.exports = getTemperature;
