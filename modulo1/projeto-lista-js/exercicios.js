// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2
}
console.log(soma(1, 2))

// // EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  let pedeAltura = Number(prompt("Olá, digite a altura um triangulo"))
  let pedeLargura = Number(prompt("Agora digite a largura dele."))
  const areaTriangulo = pedeAltura * pedeLargura

  console.log(areaTriangulo)
}

//EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual."))
  const anoNascimento = Number(prompt("Agora o ano em que nasceu."))
  const idadeUser = anoAtual - anoNascimento
  console.log(idadeUser)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const resultado = peso / (altura * altura)
  return resultado
}
console.log(calculaIMC(60, 1.62))


// EXERCÍCIO 04
 function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome?")
  const idade = Number(prompt("Digite sua idade."))
  const email = prompt("Digite seu email.")
  let frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(frase)
 }
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite um acor")
  const cor2 = prompt("Digite outra cor")
  const cor3 = prompt("E pra finalizar uma ultima")
  let array = [cor1, cor2, cor3]
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return `${string.toUpperCase()}`
}
console.log(retornaStringEmMaiuscula('Finalmente consegui!'))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const divisao = custo / valorIngresso
  return divisao
}
console.log(retornaPrimeiroElemento(3000, 90))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  //

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}