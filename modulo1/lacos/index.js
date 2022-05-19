
//Exercícios de interpretação de código

//1
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
//Ele esta somando o valor com o índice.
//10

//2
//a
//19, 21, 23, 25, 27, 30.

//b

//3
// *
// **
// ***
// ****

//Exercícios de escrita de código

//11
//a
let bichinhos = +prompt("Digite quantos animais de estimaçao você tem?")

// //b
// //essa deu dor de cabeça e por fim não saiu. :( 

if (bichinhos == "0") {
    console.log("Que pena! Você pode adotar um pet!")
} else if (bichinhos !== 0) {
    let arrayAnimais = [] 
    for (let i = 0; i < 4; i++) {
        let mais = prompt("Digite o nome deles um por um")
        arrayAnimais.push(mais)
        console.log(`Parabéns por o seu pet(s):${mais}, `)
       
}
}


