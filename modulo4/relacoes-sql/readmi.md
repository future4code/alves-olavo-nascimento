
# Exercício 1

create table avaliacoes (
  id varchar(255) primary key,
  comentario text not null,
  avaliacao float not null,
  filme_id varchar(255),
    foreign key (filme_id) references filmes(id)
);

# b)

INSERT INTO avaliacoes (id, comentario, avaliacao, filme_id)
VALUES (
 "001",
    "Muito bom!",
    7,
 "004"
),
(
 "002",
    "Esse vou reassistir!",
    7,
 "001"
),
(
 "003",
    "Nem lembro bem desse!",
    7,
 "002"
);

- b)

INSERT INTO avaliacoes (id, comentario, avaliacao, filme_id)
VALUES (
 "004",
    "Muito bom!",
    7,
 "003"
);

- c)

# Não é possível adicionar ou atualizar uma linha filha: falha na restrição de chave estrangeira, como não existe isse id nos filmes ele não erro

- d)

alter table avaliacoes drop column avaliacao;

- e)

delete from filmes where id = "001";

# Não é possível deletar ou atualizar uma linha pai: uma restrição de chave estrangeira falha

# Como na tabela de avaliações esse filme esta sendo referenciado, pela chave estrangeira o o mysql não permite

# Exercício 2

CREATE TABLE Elenco_filme (
 filme_id VARCHAR(255),
 actor_id VARCHAR(255),
    FOREIGN KEY (filme_id) REFERENCES filmes(id),
    FOREIGN KEY (actor_id) REFERENCES actor(id)
);

# a) Nessa Tabela esta sendo feita a referência de duas outras, a de filmes e a de atores

- b)

INSERT INTO Elenco_filme (filme_id, actor_id)
VALUES (
"004", "001"),
("004", "003"),
("004", "003"),
("004" "004"),
("002", "004"),
("002", "001"),
("001", "001"),
("001", "003"),
("001", "005"),
("001", "006");

- c)

INSERT INTO Elenco_filme (filme_id, actor_id)
VALUES (
"005", "001"
);

# Não é possível adicionar pois o id "005" não existe na tabela de filmes

- d)

 DELETE FROM actor WHERE id = "001";

# Você está usando o modo de atualização segura e tentou atualizar uma tabela sem um WHERE que usa uma coluna KEY

# Para desabilitar o modo de segurança, alterne a opção em Preferências ->

# Não consegui desabilitar

# Exercício

 SELECT * FROM filmes INNER JOIN avaliacoes ON filmes.id = avaliacoes.filme_id;

- a) selecione tudo de filmes olhe a tabela de filmes e avaliações e retorne quando filmes.id = avaliacoes.filme_id

- b)
