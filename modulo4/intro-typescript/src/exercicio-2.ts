
// Exercício 2  
// A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas
//  e imprime no console um array que contenha essas três cores. Refatore a 
//  função para o Typescript.

function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): string[] {
    const cor10: string = (`Sua primeira cor favorita é ${cor1}`)
    const cor20: string = (`Sua segunda cor favorita é ${cor2}`)
    const cor30: string = (`Sua terceira cor favorita é ${cor3}`)
    return [cor10, cor20, cor30]
}

console.log(imprimeTresCoresFavoritas(process.argv[2], process.argv[3], process.argv[4]))

// obs: precisei instar esse pacote
// npm i --save-dev @types/node para usar o process.argv

// codigo inserido
// npm run startExer2 verde azul branco
// retorno
// verde
// [
//   'Sua primeira cor favorita é verde',
//   'Sua segunda cor favorita é azul',
//   'Sua terceira cor favorita é branco'
// ]