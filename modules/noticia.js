module.exports = function noticia(app)
{
    // app.get("/noticias", requisicaoNoticia);

    // function requisicaoNoticia(req, res)
    // {	
    //     res.render('noticias/noticia.ejs');
    // }

    app.get("/noticias", function(req, res)
    {
        var mysql = require('mysql');

        var conection = mysql.createConnection({
            host: 'localhost',
            user: 'cursonode',
            password: '1234',
            database: 'cursonode'
            
        });

        conection.query("select * from noticias", function (error, result)
        {
            res.send(result);
        });
        
    }
    )
}