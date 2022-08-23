// Exercício 6

// Agora, pediram para você ajudar a fazer uma funcionalidade de um banco 
// digital. Antes de explicar a sua tarefa, você precisa entender como eles 
// guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, 
// o saldo total e uma lista contendo todas os débitos realizados pelo cliente. 
// Exemplo:

// entrada
// const customers: { cliente: string, saldoTotal: number, debitos: number[] }[] = [
//     { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
//     { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
//     { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
//     { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
//     { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
//     { cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]
type teste = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}
const customers: teste[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

// Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes
// precisando de empréstimos.Dessa forma, a sua tarefa é criar uma função que
// receba este array como parâmetro, atualize o saldo total descontando todos
// os débitos e retorne apenas os clientes com saldo negativo.


// const customersNegative = (customer: { cliente: string, saldoTotal: number, debitos: number[] }[]) => {
//     const customerFilter = customer.map((cust) => {
//         return cust.debitos
//     })
//     // console.log(customerFilter)
//     const teste = customerFilter.map((cust, indice) => {
//         return cust
//     })
//     console.log(customerFilter)
//     console.log(teste)
//     // return teste.reduce((acc, curr) => {
//     //     return acc + curr
//     // })
// }
const customersNegative = (customer: teste[]) => {
    const customerMap = customer.map((cust) => {
        const custDebitos = cust.debitos.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        const teste = cust.saldoTotal - custDebitos
        return teste
    })
    customerMap.filter((cust)=>{
        return cust 
    })
    return customerMap
}

console.log(customersNegative(customers))