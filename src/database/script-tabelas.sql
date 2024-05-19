create database onctrl;
use onctrl;

create table usuario (
	id int auto_increment,
    nomeUsuario varchar(50),
    apelido varchar(45),
    email varchar(50),
    senha varchar(45),
    
    constraint pk_usuario primary key(id)
);