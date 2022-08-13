// Exercício 3

const addTarefa = (tarefa) => {
    const arrey = ["lavar a louça", "Corta cabelo"]
    const novaTarefa = [...arrey, tarefa]
    return novaTarefa
}

console.log(addTarefa(process.argv[2]))

// comando inserido;
// npm start "fazer leite da lívia"
// resposta:
// [ 'lavar, louça', 'Corta cabelo', 'fazer leite da lívia' ]