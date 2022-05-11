// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // false

// console.log("d. ", typeof resultado) // boolean


// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")
// primeiroNumero = Number(primeiroNumero)
// segundoNumero = Number(segundoNumero)
// const soma = primeiroNumero + segundoNumero

// console.log(soma)


// // 1. Faça um programa que:
// // a) Pergunte a idade do usuário
// let idade = prompt("Qual sua idade?")
// let idadeAmigo = prompt("Qual a idade do seu melhor amigo?")
// idade = Number(idade)
// idadeAmigo = Number(idadeAmigo)
// console.log("Sua idade e maior do que a do seu melhor amigo?", idade >= idadeAmigo )

// let difIdade = idade - idadeAmigo
// console.log("A diferença de idade é", difIdade)

// 2- Faça um programa que:

// let user = prompt("Insira um número par")
// user = Number(user)
// console.log(user % 2) //o pradão e sempre zero.
// Os numeros serão variados

// 3-Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
// let usuario = prompt("Qual sua idade em anos?")
// usuario = Number(usuario)
// console.log("Sua idade em meses é", usuario * 12)
// console.log("Sua idade em dias", usuario * 365)
// let resultado = usuario * 365
// console.log("Sua idade em horas", resultado * 24)


let usuario = prompt("Digite um número")
let outroUsuario = prompt("Digite um número")
usuario = Number(usuario)
outroUsuario = Number(outroUsuario)
console.log("Primeiro numero e maior que o segundo?", usuario > outroUsuario)
console.log("Primeiro numero e igua ao segundo?", usuario == outroUsuario)
let resultado = usuario % outroUsuario
console.log("Primeiro e divisivél pelo segundo", resultado == 0)
    resultado = outroUsuario % usuario
console.log("O segundo numero é divisível pelo primeiro?", resultado == 0)






















