var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // localhost:3000/users
  res.send('respond with a resource');
});

module.exports = router;
