
use `alves-olavo-nascimento`

## Exercício 1

## Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo

## Abaixo está a query que cria essa tabela no MySQL

create table actor(
id varchar(255) primary key,
name varchar(255) not null,
salary float not null,
birth_date date not null,
gender varchar(6) not null);

## a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela

## Explique os demais comandos que estão nessa query

## o primary key e uma chave única para cada iten de uma tabela tem um

## varchar e onde vai receber uma string e o número entre parênteses e o máximo de caracteres que ela pode receber

## date vai receber uma data

## not null, quer dizer que aquele campo não pode ficar vazio

## b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e

## SHOW TABLES. Explique os resultados

show databases;

## databases retorna o nome do banco de dados

show tables ;

## retorna as tabelas do banco de dados

## c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados

describe actor;

## traz estrutura de uma tabela específica

## Exercício 2

## O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso

insert into actor(id, name, salary, birth_date, gender)
values(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
),
(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"male"
),
(
"003",
"Murilo Benício",
1400000,
"1971-07-13",
"male"
);

## Entrada duplicada '002' para chave 'PRIMARY' 0,141 seg

## Como o primary key e único, não poder ser repetido

INSERT INTO actor (id, name, salary)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);

## A contagem de colunas não corresponde à contagem de valores na linha

## Esta faltando duas informações por isso o erro

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);

INSERT INTO actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18",
  "male"
);

## O campo 'nome' não tem um valor padrão

## falta o campo nome

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18",
  "male"
);

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);

## Valor de data incorreto: '1950' para a coluna 'birth_date'

## Tipo data precisa de ""

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "006",
  "Marcos Palmeira",
  400000,
  "1963-08-19",
  "male"
),
(
  "007",
  " Paola Oliveira",
  700000,
  "1982-04-14",
  "female"
);

## Exercício 3

select * from actor;

select id, salary from actor;

select id, name from actor where gender = "male";

## a)Escreva uma query que retorne todas as informações das atrizes

select * from actor where gender = "female";

## b)Escreva uma query que retorne o salário do ator com o nome Tony Ramos

select salary, name from actor where name = "Tony Ramos";

## c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado

select * from actor where gender = "invalid";  

## O retorno e a tabela como todos os campos vazios porque não

## tem gender invalido

## d)Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

select id, name, salary from actor where salary <= 500000;

## e)  Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro

## traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija

## individualmente a query para que funcione, teste o comando e anote-o também como resposta

select id, nome from actor where id = "002";

## Coluna desconhecida 'nome' na 'lista de campos

## O erro se dá porque não existe "nome" na tabela e sim "name"

select id, name from actor where id = "002";

## Exercício 4

## Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes

## cujos nomes começam com "A" ou "J"; e

## cujos salários são maiores do que R$300.000

select * from actor where (name like "a%" or name like "j%") and salary > 300000;

## a) a) Explique com as suas palavras a query acima

## Diz assim: seleciona tudo da tabela actor que o nome comece com "a" ou "j" e que seja maior que 300.000

## b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

select * from actor where name not like "a%" and salary > 350000;

## c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome

select * from actor where name like "%G%" or "%g%";

## d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

select * from actor where (name like "%a%" or name like "%A%" or name like "%g%" or name like "%G%")  and (salary > 350000 and  salary < 900000);

## Exercício 5

## Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com

## as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

## a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente

create table filmes(
id varchar(255) primary key,
titulo varchar(255) not null,
sinopse text not null,
data_lançamento date not null,
avaliação int not null
);

## o tipo text tem uma capacidade muito maior de caracteres que a varchar, mas vai da necessidade, além delas existe a mediumtext e a longtext

insert into filmes (id, titulo, sinopse, data_lançamento, avaliação)
values(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/01/06",
7
),
(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta
 depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
10
),
(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8
),
(
"004",
"O Homem que Desafiou o Diabo",
"Zé Araújo (Marcos Palmeira) é um homem boêmio, que gosta de frequentar cabarés e ouvir cantadores de viola. Após tirar a virgindade de uma turca, ele é obrigado
 pelo pai dela a se casar. Durante anos Zé passa por seguidas humilhações, provocadas por sua esposa. Um dia, ao ouvir uma piada sobre sua situação, ele se revolta, destrói
 o armazém do sogro e ainda dá uma surra na esposa. Ao terminar ele monta em seu cavalo e parte sem destino, decidido a ter uma vida de aventuras. A partir deste dia Zé
 Araújo passa a ser conhecido como Ojuara, enfrentando inimigos e vivendo situações inusitadas.",
"2007/09/28",
8
);

## xercício 6

## Escreva uma query que

## a) Retorne o id, título e avaliação a partir de um id específico

select id, titulo, avaliação from filmes where id = "004";

## b) Retorne um filme a partir de um nome específico

select * from filmes where titulo like "%diabo%";

## c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7

select id, titulo, sinopse from filmes where avaliação >= 7;

## Exercício 7

## Escreva uma query que

## a) Retorna um filme cujo título contenha a palavra vida

select * from filmes where titulo like "%vida%";

## b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse

## Utilize qualquer `TERMO DE BUSCA` para exemplificar

select * from filmes where titulo like "%vida%" or sinopse like "%vida%";

## c) Procure por todos os filmes que já tenham lançadoadd

select * from filmes where data_lançamento < "2022/08/22";

## d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`

select * from filmes where data_lançamento < "2022/08/22" and (titulo like "%mãe%" or sinopse like "%mãe%") and avaliação > 7;

select * from filmes where data_lançamento < curdate() and  (titulo like "%homem%" Or sinopse like "%homem%");
