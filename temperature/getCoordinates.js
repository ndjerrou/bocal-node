const axios = require('axios');

const url =
  'https://api.openweathermap.org/data/2.5/weather?q=London&appid=75df4771c32af58b732d3f749b83215d';

// making a request using axios using the operation GET

// axios.get takes a certain amount of time du to its nature (firing up an http request)

// we should handle this asynchronous operation ( = non bloquant )

// role de async/await

async function getCoordinates() {
  const resultat = await axios.get(url);
  console.log('L16 = ', resultat.data);

  const lat = // ??
  const longitude = // ??
}

getCoordinates();
