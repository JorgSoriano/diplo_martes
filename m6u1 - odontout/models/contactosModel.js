var pool = require('./bd');

// async function getContactos() {
//     var query = "select * from contactos"; 
//     var rows = await pool.query(query);
//     return rows;
// }

async function insertContacto(obj) {
    try {
        var query = 'insert into contactos set?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = { insertContacto }