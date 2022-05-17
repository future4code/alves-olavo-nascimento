// Exercícios de interpretação de código

//1
//a
//Matheus Nachtergaele
//Virginia Cavendish
//{canal: 'Globo', horario: '14h'}

//2
//a
//{nome: 'Juca', idade: 3, raca: 'SRD'}
//{nome: 'Juba', idade: 3, raca: 'SRD'}
//{nome: 'Jubo', idade: 3, raca: 'SRD'}

//b
// indica a criação de uma cópia

//3
//false
//indefined

//b
//O backender retorna false pois foi o valor atribuido a essa chave.
//E altura, não existe essa chave. log resultado será indefined.

//==============================================================================

//Exercícios de escrita de código

//1
//a
const pessoa = {
    nome: "Olavo",
    apelidos: ["Brow", "Olavinho", "Baixinho"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de:${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}.`)

//b
const novaPessoa = {
    ...pessoa,
    apelidos: ["Lindo", "Esperto", "Esforçado"]
}
console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de:${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]}, ${novaPessoa.apelidos[2]}.`)

2
//a
const objeto1 = {
    nome: "Olavo",
    idade: 30,
    profissao: "Dev"

}

const objeto2 = {
    nome: "Igor",
    idade: 20,
    profissao: "Repositor"
}

//b
function formatacaoObjeto1(qualquer) {
   const array = [qualquer.nome, qualquer.nome.length, qualquer.idade, qualquer.profissao, qualquer.profissao.length]
   console.log(array)
}
formatacaoObjeto1(objeto1)
formatacaoObjeto1(objeto2)


//==============================================================================


// //3
//a
const carrinho = []

//b

const bananaObjeto = {
    nome: "Banana",
    disponibilidade: true
}

const mangaObjeto = {
    nome: "Manga",
    disponibilidade: true
}

const uvaObjeto = {
    nome: "Uva",
    disponibilidade: true
}

//c
const porCarrinho = (parametro1) => {
    const carrinho = []
    carrinho.push(bananaObjeto, mangaObjeto, uvaObjeto)
    console.log(carrinho)
}
porCarrinho(carrinho)

//==============================================================================

// Desafios

//1
// const perguntaUser = (par) => {
//     const nomeuser = prompt("Digite seu nome")
//     const idadeUser = Number(prompt("Digite sua idade"))
//     const profissaoUser = prompt("Digite sua profissao")
//     console.log(nomeuser, idadeUser, profissaoUser)
// }
// perguntaUser(`Nome:nomeuser, idade:idadeUser, profissao:profissaoUser`)

// //2
// const filmes = () =>

// const minhaFuncao = (num1, num2) => {
//      let num1User = Number(prompt("Digite um número."))
//      let num2User = Number(prompt("Digite outro número."))
//      let igual = num1User === num2User 
//          igual =true
//      if (condicao1) {
//         let condicao1 = num1User === num2User
//         condicao1 = true
//         return condicao1
//      }
    
//      if (condicao2) {
//         let condicao2 = num1User !== num2User
//         condicao2 = false
//         return condicao2
    
//      }
     
// }














