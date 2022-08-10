// Exercício 2

const operacoes = (operacao, num1, num2) => {
    if (operacao && num1 && num2) {
        if (operacao === "add") {
            return num1 + num2
        } else if (operacao === "sub") {
            return num1 - num2
        } else if (operacao === "mult") {
            return num1 * num2
        } else if (operacao === "div") {
            return num1 / num2
        }
    } else {
        console.log("Esperava 3 parâmetros sendo 1: add ou sub ou mult ou div e  mais 2 parâmetros tipo números, recebi menos.")
    }
}

console.log(operacoes(process.argv[2], Number(process.argv[3]), Number(process.argv[4])))

// comando inserido;
// npm start add ou sub ou mult ou div 10 2
// resposta:
// 12 ou 8 ou 20 ou 5 