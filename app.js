var app = require('./config/server.js');



// app.get("/", requisicaoHome);
// app.get("/formulario_inclusao_noticia", requisicaoAdmin);
// app.get("/noticias", requisicaoNoticia);

require('./modules/logaExecucao.js')(app);
require('./modules/home.js')(app);
require('./modules/noticia.js')(app);
require('./modules/Admin/form_add_noticia.js')(app);

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


