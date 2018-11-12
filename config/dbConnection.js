var mysql = require('mysql');


var myconn = function()
{
    console.log('Conexão com o bd sendo estabelecida');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'cursonode',
        password: '1234',
        database: 'cursonode'
        
    });
    console.log('Conexão com o bd realizada');

    return connection;
}

module.exports = function()
{  
    console.log('Autoload do dbconnection realizado');
    return myconn;
}