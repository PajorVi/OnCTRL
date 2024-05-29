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

create table jogo (
	id int auto_increment,
    nome varchar(45),
    genero varchar(45),
	descricao varchar(500),
    dataAdd date,
    fkUsuario int,
    
    constraint pk_jogo primary key(id),
    constraint fk_usuario foreign key (fkUsuario) references usuario(id)
);