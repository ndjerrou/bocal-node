// framework express - module créé pour nodejs

// Création d'un serveur web avec express

// 2 endpoints :

// /homepage ==> <h1>hello into my website</h1>

// /city ==> <p>Vous habitez à [city]</p>

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<p>Je suis un paragraphe venant du serveur !!!</p>');
});

app.listen(3000, () => console.log('Server listenning on port 3000'));
