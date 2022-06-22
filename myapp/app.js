const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const products = require('./routes/products');
const reseller = require('./routes/reseller');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.get('/', (req, res) => {
  res.send({
    message: 'Bienvenue dans ma boutique !',
  });
});

app.use('/users', usersRouter);
app.use('/products', products);
app.use('/reseller', reseller);

module.exports = app;
