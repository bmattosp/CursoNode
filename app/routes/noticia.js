module.exports = function (app)
{   

    app.get("/noticia", function(req, res)
        {
            var conection = app.config.dbConnection();
            conection.query("select * from noticias where idnoticias = 2", function (error, result) {
                res.render("noticias/noticia.ejs", {noticia: result});
            });            
        }
    );
}