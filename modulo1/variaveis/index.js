console.log("Olá mundo!")
//interpretação 
let a = 10
let b = 10
console.log(b)
b = 5
console.log(a, b)

//respostas interpretação
//10
//10 5

//interpretação 
let am = 10
let bm = 20
cm = am
bm = cm
am = bm
console.log(am, bm, cm)

//respostas interpretação
//10 10 10

//sugira melhores nomes para as variáveis.



/*
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let valorDiaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)


//A-Declare uma variável para armazenar um nome, sem atribuir um valor.
let usuario 

//B-Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade

//C-Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
console.log(typeof usuario)
undefined
console.log(typeof idade)
undefined

//D-Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// resposta: porque não a valores atribuidos a eles.
*/
//E-Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
const usuario1 = prompt("Qual seu nome pequeno gafanhoto?")
let idade1 = prompt("Qual sua idade?")



//F-Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
//console.log(typeof usuario1)
//console.log(typeof idade1)
//Não tenho certeza que esta correto, deu "undefined"



//G- Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
console.log("Olá usuario1, você tem idade1 anos")

//2-Escreva um programa que faça 3 perguntas de Sim ou Não
//A- Crie três novas variáveis, contendo as respostas
