module.exports = function requisicaoAdmin(application )
{
    application .get("/formulario_inclusao_noticia", function requisicaoAdmin(req, res)
    {	
        res.render('admin/form_add_noticia.ejs');
    });

    application .post("/noticias/salvar", function requisicaoAdmin(req, res)
    {	
        var noticia = req.body;

        var conection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel();

        var callback = function (error, result) {
            if(error != null && error != '')
                res.send(error);
            else
                res.redirect("/noticias");
        }

        noticiasModel.salvaNoticia(noticia, conection, callback); 
    });

    
}