import { contaCaracter } from "./contaCaracter"

describe("Questão 4", () => {
    test("Conta a quantidade de caracters", () => {
        const imput = "exemplo"
        const output = contaCaracter(imput)

        expect(output).toBe(7)
    })
})