var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    res.render('admin/novedades', { //view/carpeta admin/login.hbs
        layout: 'admin/layout', //view/carpetaadmin/layout.hbs
        persona: req.session.nombre
    });
});

module.exports = router;