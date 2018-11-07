var app = require('./config/server.js');



// app.get("/", requisicaoHome);
// app.get("/formulario_inclusao_noticia", requisicaoAdmin);
// app.get("/noticias", requisicaoNoticia);

require('./modules/logaExecucao.js')(app);
require('./routes/app/home.js')(app);
require('./routes/app/noticia.js')(app);
require('./routes/app/form_add_noticia.js')(app);

// function requisicaoHome(req, res)
// {	
// 	res.render('home/index.ejs');
// }

// function requisicaoAdmin(req, res)
// {	
// 	res.render('admin/form_add_noticia.ejs');
// }

// function requisicaoNoticia(req, res)
// {	
// 	res.render('noticias/noticia.ejs');
// }


