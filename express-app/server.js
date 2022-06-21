const fs = require('fs');
const express = require('express');

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
    id: products.length + 1,
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

app.listen(3000, () => console.log('Server listenning on port 3000'));

// EXO

// Se familiariser avec le code + jouer un peu avec

// Comment faire pour que notre base de données soit toujours identique même si on redémarre le serveur ?
