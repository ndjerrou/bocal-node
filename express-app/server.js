const fs = require('fs');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json()); //middleware

let products = [];

const pathToData = `${__dirname}/datA/products.json`;

fs.readFile(pathToData, (err, data) => {
  if (err) console.error('Reading file impossible');
  else {
    const productsString = data.toString();
    products = JSON.parse(productsString);

    console.log(products);
  }
});

// combos / RESTFull --> comment architecture notre API

// [GET /, GET /:id, POST /, UPDATE /:id, DELETE /:id]

// combo = VERB + ENDPOINT

app.get('/', (req, res) => {
  res.send('Bienvenue sur la homepage !');
});

// route parameters
app.get('/cities/:city', (req, res) => {
  console.log(req.params);

  res.send(`Vous habitez à : ${req.params.city}`);
});

// query string parameters
app.get('/products', (req, res) => {
  const filter = req.query.filterBy;

  if (filter === 'price') products.sort((a, b) => (a.price < b.price ? -1 : 1));

  res.send(products);
});

app.post('/products', (req, res) => {
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

app.delete('/products/:id', (req, res) => {
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

app.listen(3000, () => console.log('Server listenning on port 3000'));

// EXO

// Créer le combo DELETE /products/id - UPDATE /products/id (méthode PUT sur postman)

// Récupérer l'id provenant du client

// Supprimer le produit qui correspond à l'id reçu

// Mettre à jour notre base de données locales

// renvoyer une réponse au client (plusieurs cas possibles)
