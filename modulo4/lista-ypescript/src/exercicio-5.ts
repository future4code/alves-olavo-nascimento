// Exercício 5

// Considerando o `array` de usuários abaixo, crie uma função que receba este 
// `array` como parâmetro e retorne uma lista com apenas os emails dos usuários 
// “admin”.


const users2: {name: string, email: string, role: string}[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

const emailAdmin = (array: { name: string, email: string, role: string }[]): string[] => {
    const teste = array.filter((arr) => {
        return arr.email && arr.role === 'admin'
    }).map((arr) => {
        return arr.email
    })
    return teste
}

console.log(emailAdmin(users2))