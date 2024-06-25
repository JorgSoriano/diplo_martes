var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.send('Este es el segundo manejador');
});

module.exports = router;
