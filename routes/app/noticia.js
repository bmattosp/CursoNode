module.exports = function noticia(app)
{
    var conection = require('../../config/dbConnection')();
    app.get("/noticias", function(req, res)
        {
            conection.query("select * from noticias", function (error, result) {
                res.render("noticias/noticias.ejs", {noticias: result});
            });            
        }
    )
}