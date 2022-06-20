const objJSON = {
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    { id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03d' },
  ],
  base: 'stations',
  main: {
    temp: 292.81,
    feels_like: 292.08,
    temp_min: 290.37,
    temp_max: 295.96,
    pressure: 1020,
    humidity: 48,
  },
  visibility: 10000,
  wind: { speed: 4.12, deg: 60 },
  clouds: { all: 40 },
  dt: 1655725545,
  sys: {
    type: 2,
    id: 268730,
    country: 'GB',
    sunrise: 1655696573,
    sunset: 1655756469,
  },
  timezone: 3600,
  id: 2643743,
  name: 'London',
  cod: 200,
};

// const temperature = objJSON.main.temp;
// console.log(temperature);
// const country = objJSON.sys.country;
// console.log(country);

// destructuring

// before
// const weather = objJSON.weather

// extract the values of the prop weather, temp and country from the objJSON object
const {
  main: { temp: temperature },
} = objJSON;

console.log('temp = ', temperature);
