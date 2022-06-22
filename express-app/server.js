const express = require('express');

const products = require('./routes/products.js');

const app = express();

app.use(express.json()); //middleware

app.use('/products', products); //enregistrement de mon routeur
// préfixe les routes avec /products

app.get('/messages', (req, res) => {
  res.send('this is all of your messages');
});

app.listen(3000, () => console.log('Server listenning on port 3000'));
