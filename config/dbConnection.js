var mysql = require('mysql');

module.exports = function()
{  

    var conection = mysql.createConnection({
        host: 'localhost',
        user: 'cursonode',
        password: '1234',
        database: 'cursonode'
        
    });

    return conection;
}