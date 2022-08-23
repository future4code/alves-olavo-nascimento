// Exercício 2 
// Crie uma função que receba um parâmetro qualquer e que imprima no console 
// o tipo da variável. 

const any = (hello: string): void => {
    console.log(typeof(hello))
}

any('hello word')