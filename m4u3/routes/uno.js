
var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.send('Este es el primer manejador');
});


module.exports = router;
