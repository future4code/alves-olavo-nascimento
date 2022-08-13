// Exercício 2

// Observe a função a seguir, escrita em JavaScript:

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// a) Quais são as entradas e saídas dessa função? Copie a função para um
// arquivo .ts e faça a tipagem desses parâmetros

// a entrada seria o parametro "numeros", e a saida o retorno "estatisticas"

function obterEstatisticas(numeros: number[]): object {
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: { maior: number, menor: number, media: number } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([1, 2, 3, 4, 23, 45]))

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas
// elas 

// obterEstatisticas: object
// numeros: number[]
// numerosOrdenados: number[]
// soma: number
// estatisticas: object

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades
//  numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, 
//  declarado em JavaScript:

type amostraDados = {

    numeros: number[],

    obterEstatisticas: (numeros: number[]) => object
}

// comando inserido 
// npm run startExer2
// retorno
// { maior: 45, menor: 1, media: 13 }