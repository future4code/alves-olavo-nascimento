// Exercício 1

// a) Responda como comentário no seu código: como fazemos para acessar os 

// Apenas chamando process.argv[0] no código

// b) Crie um programa que receba seu nome e sua idade. 
// Após receber estes valores, imprima no console uma mensagem que 
// siga a seguinte estrutura:

// "Olá, (Nome)! Você tem (sua idade) anos."

// if(process.argv[2] && process.argv[3]){
//     console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]}, anos.`)
// } else {
//     console.log("Esperava 2 parâmetros só recebi um.")
// }

// comando inserido:
// node index.js Olavo 30 ou npm start Olavo 30 
// (usarei 'npm start parametros' nas demais questoes como exemplo)
// resposta:
// Olá, Olavo! Você tem 30 anos.

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

// if(process.argv[2] && process.argv[3]){
//     console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${Number(process.argv[3]) + 7}`)
// } else {
//     console.log("Esperava 2 parâmetros, recebi apenas 1.")
// }

// comando inserido;
// npm start Olavo 30 37
// resposta:
// Olá, Olavo! Você tem 30 anos. Em sete anos você terá 37