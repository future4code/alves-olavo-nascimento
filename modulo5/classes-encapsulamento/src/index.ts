// Exercício 1
// a) Construtor serve para inicializar objetos com atributos definidos.
// Temos que declarar ele dentro da classe como constructor, e acessamos atraves do this.proriedade.

// b) 

// type Transaction = {

// }

// class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];

//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = "12312312312";
//        this.name = "olavo";
//        this.age = 30;
//     }

//   }
// Nenhuma

// c)
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
        balance: number,
        transactions: Transaction[]
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions
    }

    public getCpf() {
        return this.cpf
    }
    public set(newCpf: string) {
        this.cpf = newCpf
    }
    public getName() {
        return this.name
    }
    public setName(newName: string) {
        this.name = newName
    }
    public getAge() {
        return this.age
    }
    public setAge(newAge: number) {
        this.age = newAge
    }
    public getBalance() {
        return this.balance
    }
    public setBalance(newBalance: number) {
        this.balance = newBalance
    }
    public getTransaction() {
        return this.transactions
    }
}

// const User: UserAccount = new UserAccount('11122233344', "Olavo", 30, 2000, [])
// console.log(User)
// console.log(User.getName())
// User.setName("Fernando")
// console.log(User.getName())

// Exercício 2
class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(
        description: string,
        value: number,
        date: string
    ) {
        this.description = description
        this.value = value
        this.date = date
    }
    public getDescription() {
        return this.description
    }
    public setDescription(newDescription: string) {
        this.description = newDescription
    }
    public getValue() {
        return this.value
    }
    public setValue(newValue: number) {
        this.value = newValue
    }
    public getDate() {
        return this.date
    }
    public setDate(newDate: string) {
        this.date = newDate
    }
}

const transaction: Transaction = new Transaction("Nootboo", 4.500, "25/01/2022")
console.log(transaction)
const User: UserAccount = new UserAccount('11122233344', "Olavo", 30, 2000, [transaction])
console.log(User)
console.log(User.getName())
User.setName("Fernando")
console.log(User.getName())

// Exercicio 3
class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }
    public getAccounts(): UserAccount[] {
        return this.accounts
    }
}
const teste: Bank = new Bank([User])
console.log(teste.getAccounts()[0].getTransaction())