
DROP DATABASE careCerveja;

CREATE DATABASE careCerveja;

USE careCerveja;

CREATE TABLE empresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45),
	senha VARCHAR(45),
	cnpj CHAR(18)
);

CREATE TABLE dadoSensor (
	idDadoSensor INT PRIMARY KEY AUTO_INCREMENT,
	status VARCHAR(50),
	dataAtual TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	fkSensor INT,
	FOREIGN KEY (fkSensor) REFERENCES sensor(idSensor)
);

insert into dadoSensor (status, fkSensor) values
('Nivel Maximo', 1);

SELECT * from dadoSensor; 

CREATE TABLE sensor (
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45)
);

insert into sensor (nome) values
('TCR5000');

create table tanque (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	idTanque INT PRIMARY KEY AUTO_INCREMENT,
	fkEmpresa INT,
	FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
	fkSensor INT,
	FOREIGN KEY (fkSensor) REFERENCES sensor(idSensor)

);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

-- create table dadoSensor (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT,
-- 	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
-- );

insert into empresa (nome, email, senha, cnpj) values ('Skol', 'contato@skol.com', '123', '07.526.557/0001-00');

select * from empresa;



insert into dadoSensor (status) values ('Nivel Maximo');

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
