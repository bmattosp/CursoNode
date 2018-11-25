module.exports = function (application)
{   

    application.get("/noticia", function(req, res)
        {
            var conection = application.config.dbConnection();
            var noticiasModel = application.app.models.noticiasModel();

            var callback = function (error, result) {
                res.render("noticias/noticia.ejs", {noticia: result});
            }

            noticiasModel.getNoticia(conection, 2, callback);     
        }
    );
}