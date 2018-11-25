module.exports = function(){

    this.getNoticias = function(connection, callback) {
        connection.query("select * from noticias", callback);
    }

    this.getNoticia = function(connection, idNoticia, callback) {
        connection.query("select * from noticias where idNoticias = ?", idNoticia, callback);
    }    

    return this;
}