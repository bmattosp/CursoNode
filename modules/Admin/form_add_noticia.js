module.exports = function requisicaoAdmin(app)
{
    app.get("/formulario_inclusao_noticia", requisicaoAdmin);

    function requisicaoAdmin(req, res)
    {	
        res.render('admin/form_add_noticia.ejs');
    }
}