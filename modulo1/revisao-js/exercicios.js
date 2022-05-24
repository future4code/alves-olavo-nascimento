// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
    return array.length
}

let array10 = [1,2,3]
retornaTamanhoArray(array10)

//EXERCÍCIO 02
function retornaArrayInvertido(array) {
   
    return array.reverse()
}
let array11 = [10,20,30,40]
retornaArrayInvertido(array11)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    return array.sort((a,b) => a-b)
}

let array12 = [3, 2, 1]
retornaArrayOrdenado(array12)


// EXERCÍCIO 04
function retornaNumerosPares(array) {
   array.filter((pares) => {
          if(pares%2===0){
              console.log(pares)
          }
    })
}
let oi = [1, 2, 3, 4]
retornaNumerosPares(oi)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}