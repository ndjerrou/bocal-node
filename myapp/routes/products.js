const express = require('express');

const { faker } = require('@faker-js/faker');

const Router = express.Router();

let products = [];
for (let i = 0; i < 10; i++) {
  products.push({
    name: faker.commerce.product(),
    price: +faker.commerce.price(),
  });
}

Router.get('/list', (req, res) => {
  // localhost:3000/products

  res.send(products);
});

Router.post('/shop', (req, res) => {
  console.log(req.body);

  res.send('Votre comande a bien été reçue');
});

module.exports = Router;
