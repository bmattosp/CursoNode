module.exports = function (application)
{   

    application.get("/noticias", function(req, res)
        {
            var conection = application.config.dbConnection();
            var noticiasModel = application.app.models.noticiasModel();

            var callback = function (error, result) {
                res.render("noticias/noticias.ejs", {noticias: result});
            }

            noticiasModel.getNoticias(conection, callback);     
        }
    );
}