module.exports = function logaExecucao(app)
{
    app.listen(3000, logaServer);


    function logaServer()
    {
        console.log('Servidor Ligado!!!!');
    }
}