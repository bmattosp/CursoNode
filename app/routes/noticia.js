module.exports = function (app)
{   

    app.get("/noticias", function(req, res)
        {
            var conection = app.config.dbConnection();
            conection.query("select * from noticias", function (error, result) {
                res.render("noticias/noticias.ejs", {noticias: result});
            });            
        }
    );
}