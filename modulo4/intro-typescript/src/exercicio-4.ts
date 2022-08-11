// - Exercício 4

import { ReadableByteStreamController } from "stream/web";

// A seguinte função recebe dois números como parâmetro e retorna a diferença 
// entre o maior número e o menor. Dessa forma, refatore a função para o T
// ypescript.

function comparaDoisNumeros(num1: number, num2: number): number {
    let maiorNumero;
    let menorNumero;

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    } else {
        maiorNumero = num2;
        menorNumero = num1;
    }

    const diferenca: number = maiorNumero - menorNumero;
 
    return diferenca
}

console.log(comparaDoisNumeros(Number(process.argv[2]), Number(process.argv[3])))

// código inserido
// npm run startExer4 40 100
// retorno
// 60