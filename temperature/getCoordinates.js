const axios = require('axios');

// making a request using axios using the operation GET

// axios.get takes a certain amount of time du to its nature (firing up an http request)

// we should handle this asynchronous operation ( = non bloquant )

// role de async/await

async function getCoordinates(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75df4771c32af58b732d3f749b83215d`;

  const { data: resultat } = await axios.get(url);
  //   const lat = resultat.data.coord.lat;
  //   const longitude = resultat.data.coord.lon;

  const {
    coord: { lat, lon: longitude },
  } = resultat;

  // it returns a promise because the function is async
  return {
    lat, // lat: lat
    longitude, // longitude: longitude
  };
}

// export my function
module.exports = getCoordinates;
