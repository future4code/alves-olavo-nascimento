import { calculaIdade } from "./calculaIdade"

describe("Exercício 8", () => {
    test("Recebe o ano de nascimento e retorna idade", () => {
        const anoNascimento = 1992
        const idadeAtual = calculaIdade(anoNascimento)

        expect(idadeAtual).toBe(30)
    })
})