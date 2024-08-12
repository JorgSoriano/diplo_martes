var express = require('express');
var router = express.Router();
var contactosModel = require('./../../models/contactosModel');

router.get('/', function (req, res, next) {

    res.render('admin/contactos', {
        layout: 'admin/layout'
    });
});

router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        if (req.body.nombre != "" && req.body.mail != "" &&
            req.body.telefono != "" &&
            req.body.mensaje != "") {
            await contactosModel.insertContacto(req.body)
            res.redirect('/admin/contactos')

        } else {
            res.render('admin/contactos', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/contactos', {
            layout: 'admin/layout',
            error: true, message: 'No se cargo contacto'
        })
    }
})


module.exports = router;

