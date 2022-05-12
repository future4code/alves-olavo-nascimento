
// Exercícios de interpretação de código

// 1-Indique todas as mensagens impressas no console, SEM EXECUTAR o programa

// a.  undefined 
// Não tem valor atribuido a variavel

// b.  null
// O valor atribuido foi null

// c.  11
// Existe onze caractéris dentro da string

// d.  3
// i = 0 Em uma arrey 0 e o primeiro valor, logo i tem valor 3

// e.  ???

// f.  9
// const valor = array[i+6]   
// console.log('f. ', valor)
// i = 3, i+6 3+6


//========================================================

//-2Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// SUBI NUM ÔNIBUS EM MIRROCOS, 28
//.toUpperCase deixa tudo maiúsculo, .replaceAll substitui onde tem "A" por "I"


//=======================================================

//Exercícios de escrita de código
// 1- Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
//   O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
/*

const nome = prompt("digite seu nome")
const email = prompt("digite seu email")
const frase = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`
console.log(frase)

// 2-Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
// Em seguida, siga os passos:

//a
const comidas = ["lasanha", "sorvete", "pastel", "peixe", "carne"]
console.log(comidas)
//b
console.log(`Estas são minhas comidas preferidas:\n${comidas[0]}\n${comidas[1]}\n${comidas[2]}\n${comidas[3]}\n${comidas[4]} `)
//c
const usuarioComida = Number(prompt("Qual sua comida preferida?"))


//=======================================================


///3-Faça um programa, seguindo os passos:
*/
//a
let listaDeTarefas = []
console.log(listaDeTarefas)

//b
const tarefa1 = prompt("Digite uma tarefa que você faz no seu dia")
const tarefa2 = prompt("Digite uma segunta tarefa.")
const tarefa3 = prompt("E pra finalizar uma terceira.")

listaDeTarefas = ["tarefa1", "tarefa2", "tarefa3"]
console.log(listaDeTarefas)

//c   
console.log(listaDeTarefas)


//d
let indiceUser = prompt("Digite um numero de uma tarefa de 1 a 3 que você realizou")
console.log(indiceUser)


//e   ???

indiceUser.splice()






