// Exercício 1**

// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então 
// vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string = 12

// Não da certo, o tipo 'number' não pode ser atribuído ao tipo 'string'.

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
// Como fazer para que essa variável também aceite strings? Ou seja, como criamos 
// no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number | string = 12
console.log(meuNumero)

// comando inserido
// npm run startExer1
// retorno
// 12

// Obs usando "|" podemos declarar mais de um tipo para uma variável.

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três
// propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

type person = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CoresArcoIris {
    VEERMELHA = "Vermelha",
    LARANJA = "Laranja",
    AMARELA = "Amarela",
    VERDE = "Verde",
    AZUL = "Azul",
    AZULESCURO = "Azul-Escuro",
    VIOLETA = "Violeta"
}


const joao: person = {
    nome: "Joao",
    idade: 40,
    corFavorita: CoresArcoIris.AZUL
}
const olavo: person = {
    nome: "Olavo",
    idade: 30,
    corFavorita: CoresArcoIris.AZULESCURO
}
const geise: person = {
    nome: "Geise",
    idade: 29,
    corFavorita: CoresArcoIris.VERDE
}
const livia: person = {
    nome: "Lívia",
    idade: 1,
    corFavorita: CoresArcoIris.VIOLETA
}

console.log(joao, olavo, geise, livia)

// comando inserido
// npm run startExer1
// retorno
// { nome: 'Joao', idade: 40, corFavorita: 'Azul' }
// { nome: 'Olavo', idade: 30, corFavorita: 'Azul-Escuro' }
// { nome: 'Geise', idade: 29, corFavorita: 'Verde' }
// { nome: 'Lívia', idade: 1, corFavorita: 'Violeta' }