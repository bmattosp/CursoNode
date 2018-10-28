var app = require('./config/server.js');


app.get("/", requisicaoHome);
app.get("/formulario_inclusao_noticia", requisicaoAdmin);
app.get("/noticias", requisicaoNoticia);

app.listen(3000, logaExecucao);


function logaExecucao()
{
	console.log('Servidor Ligado!!!!');
}

function requisicaoHome(req, res)
{	
	res.render('home/index.ejs');
}

function requisicaoAdmin(req, res)
{	
	res.render('admin/form_add_noticia.ejs');
}

function requisicaoNoticia(req, res)
{	
	res.render('noticias/noticia.ejs');
}


