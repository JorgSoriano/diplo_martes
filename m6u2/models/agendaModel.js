//const { checkout } = require('../routes/admin/novedades');
var pool = require('./bd');

async function getAgenda() {
    var query = "select * from contactos"; // order by id desc
    var rows = await pool.query(query);
    return rows;
}

async function insertAgenda(obj) {
    try {
        var query = 'insert into contactos set?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }

}



async function deleteNovedadById(id) {
    var query = 'delete from contactos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}


async function getAgendaById(id) {
    var query = 'select * from contactos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}


async function modificarAgendaById(obj, id) {

    try {
        var query = 'update contactos set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }

}




module.exports = { getAgenda, insertAgenda, deleteNovedadById, getAgendaById, modificarAgendaById }