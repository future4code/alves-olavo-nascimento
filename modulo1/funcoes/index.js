
// Exercícios de interpretação de código

// 1
//a
// 10   bem de boa até aqui
// 50   tramquilo

//b
// Erro, pois chamamos a função fora do scoop mas sem explicar para maquina o que deve ser feito com ela. 

//=====================================================================================

// 2-Leia o código abaixo

//a
// Ela pega ainformação passada pelo usuário pôe em caixa baixa e faz uma  busca/comparação com uma informação- 
// do sistema("cenoura") e responde se ele encontrar um grupo de caracteris igaual ao digitado pelo usuário com- 
// true se encontrar e false se não encontrar.

//b
// true encontrou igual

//c
// true  esta em caixa alta mas ele põe baixa com .incluides

//d
// true pois tem a palavra "cenouras" incluido na frase mesmo no plural a palavra foi encontrada.

//=====================================================================================

// Exercícios de escrita de código

// 1

// a

let frase = () => {
    console.log("Eu sou Olavo, tenho 30 anos, moro em Santo André abc paulista, e sou estudante Labenu.")
}
frase()

//b

const nomesVariados = (nome, idade, cidade, profissao) => {
   return `Eu sou ${nome} tenho ${idade}, moro em ${cidade} e sou ${profissao}.`
    
}
console.log(nomesVariados("olavo", "30", "fortaleza", "dev"))

///=====================================================================================

//2

//a
const doisNumeros = (nume1, nume2) => {
    const soma = nume1 + nume2
    return soma
}

console.log(doisNumeros(1, 2))

//b
const numeroMaior = (numero3, numero4) => {
    const maiorIgual = numero3 >= numero4
    return maiorIgual
}
console.log(numeroMaior(10, 33))

//c
const boleanoPar = (nomerobole) => {
    const seriaPar = nomerobole%2 == 0
         
    return seriaPar
}
console.log(boleanoPar(5))

//d
const recebe = prompt("Digite algo")
const mensagem = (recebe) => {
  console.log(recebe.toUpperCase())
  console.log(recebe.length)

}
mensagem(recebe)

///=====================================================================================

// 3 



