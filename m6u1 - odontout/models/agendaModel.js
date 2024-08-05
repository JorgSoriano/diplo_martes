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


module.exports = { getAgenda, insertAgenda }