// Exercício 1

export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

}

const olavo = new User("001", "olavo@gmail.com", "olavo", "1234")
console.log(olavo)

// a) Somenta a senha não pois não existe função de pegar senha, apenas se imprimir todo a instancia.
// b) Se colocar somente a instancia no log nenhuma e se por a instancia.propriedade uma.
