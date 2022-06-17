// I am into a private file

const os = require('os'); // loading a native module
const axios = require('axios'); //loading a cloud module
const log = require('./log.js'); // loading a personnal module

// console.log(log); // getting the log function

log('Je suis le premier log');

// ici nous avons du code asynchrone (= operation qui prends du temps)

async function getPokemon() {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto'); // await : waiting for the response}
  console.log(res.data.base_experience);
}

getPokemon();
