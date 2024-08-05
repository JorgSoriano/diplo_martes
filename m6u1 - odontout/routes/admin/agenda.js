var express = require('express');
var router = express.Router();
var agendaModel = require('./../../models/agendaModel')


router.get('/', async function (req, res, next) {

    var agenda = await agendaModel.getAgenda();
    res.render('admin/agenda', { //view/carpeta admin/login.hbs
        layout: 'admin/layout', //view/carpetaadmin/layout.hbs
        persona: req.session.nombre,
        agenda
    });
});

//formulario para agregar


router.get('/agregar', (req, res, next) => {

    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);

        if (req.body.nombre != "" && req.body.mail != "" &&
            req.body.telefono != "" &&
            req.body.mensaje != "") {
            await agendaModel.insertAgenda(req.body)
            res.redirect('/admin/agenda')

        } else {
            res.render('admin/agenda', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agenda', {
            layout: 'admin/layout',
            error: true, message: 'No se cargo contacto'
        })
    }
})


module.exports = router;