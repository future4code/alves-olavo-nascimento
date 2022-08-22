export type User = {
    name: string,
    cpf: number,
    date: Date | string,
    balance: number,
    spending: Spending[]
}

export type Spending = {
    value: number,
    date: Date | string,
    description: string
}

export let users: User[] = [
    {
        name: "João",
        cpf: 12345678910,
        date: "20/02/1990",
        balance: 500.59 ,
        spending: [
            {
                value: 20,
                date: '10/10/2022',
                description: 'Casas Bahia'
            },
            {
                value: 80,
                date: '20/10/2022',
                description: 'Padaria Pedroca'
            }
        ]
    },
    {
        name: "Maria",
        cpf: 12345678911,
        date: "10/02/1980",
        balance: 300,
        spending: [
            {
                value: 100,
                date: '23/07/2022',
                description: 'Habibis'
            },
            {
                value: 200,
                date: '10/05/2022',
                description: 'Ifood'
            }
        ]
    },
    {
        name: "Fernando",
        cpf: 12345678912,
        date: "06/02/1987",
        balance: 800,
        spending: [
            {
                value: 25,
                date: '11/06/2022',
                description: 'Recarga Tim'
            },
            {
                value: 120,
                date: '06/50/2022',
                description: 'Kaboom'
            }
        ]
    }
]