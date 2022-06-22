const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const Router = require('express').Router();

let products = [];

const pathToData = path.join(__dirname, '../data/products.json');

fs.readFile(pathToData, (err, data) => {
  if (err) console.error('Reading file impossible');
  else {
    const productsString = data.toString();
    products = JSON.parse(productsString);

    console.log(products);
  }
});

// query string parameters
Router.get('/', (req, res) => {
  // localhost:3000/products
  const filter = req.query.filterBy;

  if (filter === 'price') products.sort((a, b) => (a.price < b.price ? -1 : 1));

  res.send(products);
});

Router.post('/', (req, res) => {
  products.push({
    id: uuidv4(),
    name: req.body.name,
    price: req.body.price,
  });

  const productsString = JSON.stringify(products);

  fs.writeFile(pathToData, productsString, (err) => {
    if (err)
      return res.status(500).send({ message: 'Error writing into the DB' });
  });

  res.status(201).send({
    message: 'Successfully created a new ressource ! ',
    data: {
      products,
    },
  });
});

// localhost:3000/products/id
Router.delete('/:id', (req, res) => {
  //products/3 ==> req.params.id qui vaut 3
  // const id = req.params.id

  const { id } = req.params; //string

  const idx = products.findIndex((el) => {
    return el.id === id;
  });

  products.splice(idx, 1);

  const productsString = JSON.stringify(products);

  fs.writeFile(pathToData, productsString, (err) => {
    if (err)
      return res.status(500).send({ message: 'Error writing into the DB' });
  });

  res.status(200).send({
    message: 'Succesfully deleted the product',
    data: {
      products,
    },
  });
});

Router.put('/:id', (req, res) => {
  const { id } = req.params;

  const updatedProducts = products.map((product) => {
    console.log(product);
    if (product.id === id) {
      //getting the corresponding product to modify
      for (let key in req.body) {
        // we iterate over the body of the request
        product[key] = req.body[key]; //dynamically search for a property inside my object product
      }
    }
    return product;
  });

  const productsString = JSON.stringify(updatedProducts);

  fs.writeFile(pathToData, productsString, (err) => {
    if (err)
      return res.status(500).send({ message: 'Error writing into the DB' });
  });

  res.status(200).send({
    message: 'Updated successfully',
    data: {
      updatedProducts,
    },
  });
});

module.exports = Router;
