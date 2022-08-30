# Exercício 1

alter table actor add sabor_sorvete_avorito varchar(255);

alter table actor add type varchar(255) default "SemDiretor";

- a)

alter table actor drop column salary;

## Comando para remover a coluna salary

- b)

alter table actor change gender sex varchar(6);

- Aqui está alterando gender por sex

- c)

alter table actor change gender gender varchar(255);

## Já aqui esta alterando o tipo a capacidade de caracteres do tipo varchar

- d)

alter table actor change gender gender varchar(100);

## Exercício 2

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123";

- a)

update actor set name="Moacyr Franco", birth_date="1910/04/04"where id = "003";

- b)

update actor set name="JULIANA PAES" where name="Juliana Paes";

- c)

update actor set name="Juliana Paes" where name="JULIANA PAES";

- d)

update actor set name="Cana Brava" where id="08";

## Ele até da um tik de que deu certo, porem não muda nada na tabela

## Exercício 3

delete from actor where name ="Tony Ramos";

- a)

delete from actor where name ="Fernanda Montenegro";

- b)

delete from actor where gender="male" and salary > 1000000;

## Exercício 4

select count(*) from actor;
select count(*) from actor where gender = "female";
select avg(salary) from actor;

- a)

select max(salary) from actor;

- b)

select min(salary) from actor;

- c)

select count(*) from actor where gender="female";

- d)

select sum(salary) from actor;

## Exercício 5

select *from actor limit 3;
select* from actor order by name asc;
select *from actor order by name asc limit 4;
select* from actor where gender = 'female' order by name asc limit 4;
select count(*), gender from actor group by gender;

- a)

Conte todos os gêneros de atores e os agrupe por gênero.

- b)

select name, id  from actor order by id desc;

- c)

select * from actor order by salary asc;

- d)

select * from actor order by salary desc limit 3;

- e)

select avg(salary) gender from actor group by gender;

- Exercício 6

- a)

alter table filmes add playing_limit_date date default "2022/11/06";

-b)

alter table filmes change avaliação avaliação float;

-c)

update filmes set playing_limit_date="2022/07/20" where id="001";
update filmes set playing_limit_date="2022/09/20" where id="002";

-d)

delete from filmes where id="003";
update filmes set sinopse="Testa Sinopse" where id="003";

## Mostrou o ícone de suceso mas da a mensagem que nenhum ítem foi afetado

## Exercício 7

- a)

select * from filmes where avaliação > 7.5;

- b)

select avg(avaliação) from filmes;

- c)

select count(*) from filmes where playing_limit_date > "2022/08/23";

- d)

select count(*) from filmes where data_lançamento > "2022/08/23";

- e)

select max(avaliação) from filmes;

- f)

select min(avaliação) from filmes;

## Exercício 8

- a)

select * from filmes order by titulo asc;

- b)

select * from filmes order by titulo desc limit 5;

- c)

select * from filmes where data_lançamento < curdate() order by data_lançamento desc limit 3; # Essa não conseguifazer. Só fiz com a ajuda para não ficae sem entender.

- d)

select * from filmes order by avaliação desc limit 3;
