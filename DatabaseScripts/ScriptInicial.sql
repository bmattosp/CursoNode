
CREATE DATABASE `cursonode` /*!40100 DEFAULT CHARACTER SET utf8 */;

CREATE TABLE `cursonode`.`noticias` (
  `idnoticias` INT  NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `noticia` TEXT NOT NULL,
  `datacriacao` timestamp default current_timestamp,
  PRIMARY KEY (`idnoticias`));


INSERT INTO `cursonode`.`noticias`
(`titulo`,
`noticia`)
VALUES
(
'título da notícia',
'texto da noticia. Pode escrever qualquer coisa aqui.');
