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


// para eliminar
router.get('/eliminar/:id', async (req, res, next) => {

    var id = req.params.id;
    console.log(id)
    await agendaModel.deleteNovedadById(id);
    res.redirect('/admin/agenda')

}); //cierra get de eliminar


// formulario de modificar con los datos cargado
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    console.log(req.params.id)
    var agenda = await agendaModel.getAgendaById(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        agenda
    });
});
// para modificar

router.post('/modificar', async (req, res, next) => {

    try {

        var obj = {
            nombre: req.body.nombre,
            mail: req.body.mail,
            telefono: req.body.telefono,
            mensaje: req.body.mensaje
        }
        // console.log.(obj)
        // console.log.(req.body.titulo)
        // console.log.(req.body.id)
        await agendaModel.modificarAgendaById(obj, req.body.id);
        res.redirect('/admin/agenda');
    } catch (error) {

        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico la novedad'
        })
    }
})



module.exports = router;