const express = require('express');
const pathModule = require('path');

const { read, write } = require('../utilities/files');

const Router = express.Router();

const path = pathModule.join(__dirname, '../data/products.json');

let products = [];

read(path).then((ps) => {
  products = JSON.parse(ps);
});

Router.post('/add-product', (req, res) => {
  products.push({
    id: products.length,
    ...req.body,
  });

  products = JSON.stringify(products);

  write(path, products);

  res.status(201).send('Product added to the list shop');
});

Router.get('/list-products', (req, res) => {
  res.send(products);
});

Router.delete('/delete-product/:id', (req, res) => {
  const id = req.params.id;

  products = products.filter((product) => product.id !== +id);

  res.send(products);

  products = JSON.stringify(products);

  write(path, products);

  res.send('Produit supprimé de notre list shop');
});

module.exports = Router;
