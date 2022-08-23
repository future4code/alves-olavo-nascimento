// Exercício 1

// Crie um função que receba uma `string` com o nome e outra `string` com uma 
// data de nascimento(ex.: “24 / 04 / 1993”).A função deve separar o dia, o mês
//  e ano e retornar uma `string` no seguinte formato:

const getDate = (name: string, date: string): string => {
    const resultDate = date.split('')
    const day: string = resultDate[0] + resultDate[1]
    const month: string = resultDate[3] + resultDate[4]
    const year: string = resultDate[6] + resultDate[7] + resultDate[8] + resultDate[9]
    return `Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`
}

console.log(getDate('Olavo', '20/02/1992'))