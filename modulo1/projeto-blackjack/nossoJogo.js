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



if(confirm("BOAS VINDAS AO JOGO BLACKJACK, VOCÊ ESTÁ PRONTO?")) {
   
   console.log(``)
   console.log("PRIMEIRA RODADA!")
   console.log(``)

console.log(`♦️ ♥️ ♣️ ♠️ ♦️ ♥️ ♣️ ♠️ ♦️ ♥️ ♣️ ♠️`)

const usuario = comprarCarta()
const usuario2 = comprarCarta()
const somaUsuario = usuario.valor + usuario2.valor
console.log(`Usuario\nSuas cartas: ${usuario.texto}, ${usuario.valor};  ${usuario2.texto}, ${usuario2.valor}.\nPontuação: ${somaUsuario}. `)

console.log(`♦️ ♥️ ♣️ ♠️ ♦️ ♥️ ♣️ ♠️ ♦️ ♥️ ♣️ ♠️`)

const pc = comprarCarta()
const pc2 = comprarCarta()
const somaPc = pc.valor + pc2.valor
console.log(`Máquina\nMinhas cartas: ${pc.texto}, ${pc.valor};  ${pc2.texto}, ${pc2.valor}.\nPontuação: ${somaPc}.`)

console.log(`♦️ ♥️ ♣️ ♠️ ♦️ ♥️ ♣️ ♠️ ♦️ ♥️ ♣️ ♠️`)


console.log(` `)

if (somaUsuario > somaPc) {
   console.log(`VOCÊ VENCEU!`)

} else if (somaUsuario === somaPc) {
   console.log(`EMPATE.`) 

} else {
   console.log(`VOCÊ PERDEU.`)   

}
} else {
	console.log("O JOGO ACABOU. MAS VOLTE QUANDO QUISER UM NOVO DESAFIO.")

}

//=====================================================================================
//=====================================================================================

// //DESAFIO

// if(confirm("BOAS VINDAS AO JOGO BLACKJACK, VOCÊ ESTÁ PRONTO?")) {


// const usuario = comprarCarta()
// const usuario2 = comprarCarta()
// const somaUsuario = usuario.valor + usuario2.valor
// alert(`♦️ ♥️ ♣️ ♠️ ♦️ ♥️ ♣️ ♠️ ♦️ ♠️\nUsuario\nSuas cartas são: ${usuario.texto},  ${usuario2.texto}. \nPontuação: ${somaUsuario}\n♦️ ♥️ ♣️ ♠️ ♦️ ♥️ ♣️ ♠️ ♦️ ♠️ `)

// const pc = comprarCarta()
// const pc2 = comprarCarta()
// const somaPc = pc.valor + pc2.valor
// alert(`♦️ ♥️ ♣️ ♠️ ♦️ ♥️ ♣️ ♠️ ♦️ ♠️\nMáquina\nMinhas cartas são:  ${pc.texto},  ${pc2.texto}. \nPontuação: ${somaPc}\n♦️ ♥️ ♣️ ♠️ ♦️ ♥️ ♣️ ♠️ ♦️ ♠️`)

// //========================================================================
// console.log(` `)

// if (somaUsuario > somaPc) {
//    alert(`VOCÊ VENCEU!`)

// } else if (somaUsuario === somaPc) {
//    alert(`EMPATE.`) 
   
// } else {
//    alert(`VOCÊ PERDEU.`)   

// }
// } else {
// 	alert("O JOGO ACABOU. MAS VOLTE QUANDO QUISER UM NOVO DESAFIO.")

// }

