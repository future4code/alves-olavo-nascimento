// Exercício 1
// a) Responda como comentário no seu código: como fazemos para acessar os 

// Apenas chamando process.argv[0] no código

// b) Crie um programa que receba seu nome e sua idade. 
// Após receber estes valores, imprima no console uma mensagem que 
// siga a seguinte estrutura:

// "Olá, (Nome)! Você tem (sua idade) anos."

// console.log(`Olá, ${process.argv[2]}!,Você tem ${process.argv[3]}, anos.`)

// comando inserido:
// node index.js Olavo 30 ou npm start Olavo 30 
// (usarei 'npm start parametros' nas demais questoes como exemplo)
// resposta:
// Olá, Olavo! Você tem 30 anos.

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

// console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${Number(process.argv[4]) + 7}`)

// comando inserido;
// npm start Olavo 30
// resposta:
// Olá, Olavo! Você tem 30 anos. Em sete anos você terá 37

// Exercício 2

const operacoes = (operacao, num1, num2) => {
    if (operacao === "add") {
        return num1 + num2
    } else if (operacao === "sub") {
        return num1 - num2
    } else if (operacao === "mult") {
        return num1 * num2
    } else if (operacao === "div") {
        return num1 / num2
    }
}
console.log(operacoes(process.argv[2],  Number(process.argv[3]),  Number(process.argv[4])))

// comando inserido;
// npm start add ou sub ou mult ou div 10 2
// resposta:
// 12 ou 8 ou 20 ou 5 

// Exercício 3

// const tarefa = process.argv[2]
// const addTarefa = (tarefa) => {
//     const arrey = ["lavar a louça", "Corta cabelo"]
//     const novaTarefa = [...arrey, tarefa]
//     return novaTarefa
// }

// console.log(addTarefa(process.argv[2]))

// comando inserido;
// npm start "fazer leite da lívia"
// resposta:
// [ 'lavar, louça', 'Corta cabelo', 'fazer leite da lívia' ]

