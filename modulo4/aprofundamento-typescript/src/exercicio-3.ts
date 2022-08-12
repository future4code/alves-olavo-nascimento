// -Exercício 3**

// Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.

// Observe o seguinte array de posts:

// const posts = [
//     {
//         autor: "Alvo Dumbledore",
//         texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//         autor: "Severo Snape",
//         texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//         autor: "Hermione Granger",
//         texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//         autor: "Dobby",
//         texto: "Dobby é um elfo livre!"
//     },
//     {
//         autor: "Lord Voldemort",
//         texto: "Avada Kedavra!"
//     }
// ]

// a) Copie o código acima para um arquivo .ts depois:

// - crie um *type* para representar um post;

type autor = {
    autor: string,
    texto: string
}
// Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.

const posts: autor[] = []

const dumbledore: autor = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
}
const snape: autor = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}
const hermione: autor = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
}
const dobby: autor = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}
const voldemort: autor = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}

posts.push(dumbledore, snape, dobby, voldemort)

// b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:

function buscarPostsPorAutor(posts: autor[], autorInformado: string): object {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}

// console.log(posts.autor)
console.log(buscarPostsPorAutor(posts, "Lord Voldemort"))

// codigo inserido
// npm run startExer3
// retorno
// [ { autor: 'Lord Voldemort', texto: 'Avada Kedavra!' } ]

// Quais são as entradas e saídas dessa função? Copie a função para o mesmo
// arquivo .ts do array de posts e faça a tipagem necessária.

// entradas
// posts: autor[]
// autorInformado: string
// saidas
// object