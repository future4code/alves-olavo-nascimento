
//Exercícios de interpretação de código

//1
//a
//Será impresso todos os elementos da array "ususarios"

//2
//['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//3
//Será impresso os dois elementos de apelidos, sem "Chijo"

//==============================================================================

//Exercícios de escrita de código

//1
//a
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomePets = pets.map((nomes) => {
//      console.log(nomes.nome)
//  })

//b
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const racaSalsicha = pets.filter((racas) => {
//      return racas.raca.toLowerCase() === "salsicha"
//  }).map((racas) => {
//      console.log(racas.nome)
//  })

//c
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const petsPoodles = pets.filter((poodles) => {
//      return poodles.raca.toLowerCase() === "poodle"
//  }).map((poodles) => {
//      //console.log(poodles.nome) 
//      if (poodles.nome === "Madame") {
//          console.log("Você ganhou um cupom de desconto de 10% para tosar o/a Madame!")
//      } else {
//          console.log("Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!")
//      }

//      }
//  )
//  console.log

//2
//a
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const nomeProdutos = produtos.map((nomes) => {
//      console.log(nomes.nome)
//  })

//b
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const nomeProdutos = produtos.filter((nomes) => {
//      const listaNomes =  nomes.nome
//      const listaPreco = nomes.preco
//      listaPrecoComDes = listaPreco * 5 /100
//      const uniao = {
//          nome: listaNomes,
//          preco: listaPrecoComDes.toFixed(2)
//      }
//      console.log(uniao)
// })

//c
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// const soBebidas = produtos.filter((breja) => {
//         if (breja.categoria.toLowerCase() === "bebidas") {
//             return breja
//         }
// }).map((breja) => {
//     return breja
// })

// for ( let soBebidasMesmo of soBebidas ) {
//     console.log(soBebidasMesmo)
// }

//d
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const produtoYpe = produtos.filter((limpezaExem) => {
//      if ( limpezaExem.categoria.toLowerCase() === "limpeza") { 
//      return limpezaExem
//     }
    
    
// }).map((limpezaExem) => {
//     return limpezaExem
// })
    
// for (let numero of produtoYpe) {
//    console.log(numero)
// } 
// //Infelismente essa não consegui.    
 
 









