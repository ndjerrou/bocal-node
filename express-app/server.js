const express = require('express');

const app = express();

app.use(express.json()); //middleware

const products = [
  { id: 1, name: 'xiaomi x11', price: 30 },
  { id: 2, name: 'xiaomi x12', price: 20 },
];

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
  console.log(req.body);

  products.push({
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  });

  res.send({
    success: 'Great ! ',
    data: {
      products,
    },
  });
});

app.listen(3000, () => console.log('Server listenning on port 3000'));

// EXO

// Se familiariser avec le code + jouer un peu avec

// Comment faire pour que notre base de données soit toujours identique même si on redémarre le serveur ?
