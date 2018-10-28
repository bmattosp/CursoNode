var http = require('http');

var server = http.createServer(trataRequisicao);

server.listen(3000);



function trataRequisicao(req, res)
{
	var categoria = req.url;

	if(categoria == '/moda')
	{
		res.end('<html><body><h1> Moda é aqui</h1></body></html>');
		return;
	}
	
	if(categoria == '/Games')
	{
		res.end('<html><body><h1> Games é aqui</h1></body></html>');
		return;
	}
	
	res.end('<html><body><h1> Portal de Noticias</h1></body></html>');
}