module.exports = function Admin(app)
{
    app.get("/", requisicaoHome);

    function requisicaoHome(req, res)
    {	
        res.render('home/index.ejs');
    }
}


