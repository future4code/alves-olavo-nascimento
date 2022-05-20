/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas a o jogo de Blackjack, você está pronto?")


if(confirm("Quer iniciar uma nova rodada?")) {

const usuario = comprarCarta()
console.log(usuario.texto),
console.log(usuario.valor)
const usuario2 = comprarCarta()
console.log(usuario2.texto)
console.log(usuario2.valor)




const pc = comprarCarta()
console.log(pc.texto)
console.log(pc.valor)
const pc2 = comprarCarta()
console.log(pc.texto)
console.log(pc.valor)



} else {
	console.log("O jogo acabou. Mas volte quando quiser um desafio.")
}


// const carta = comprarCarta(); 
// // Sorteia uma carta. Por exemplo, o rei de ouros

// console.log(carta.texto) 
// // imprime o texto da carta. Nesse caso: "K♦️"

// console.log(carta.valor) 
// // imprime o valor da carta (um número). Nesse caso: 10)