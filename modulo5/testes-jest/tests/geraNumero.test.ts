import { geraNumero } from "./geraNumero"

describe("Exercício 5", () => {
    test("Gera Número aleatório de 1 a 10", () => {
        const numeroGerado = geraNumero()

        expect(numeroGerado).toBeGreaterThanOrEqual(1)
        expect(numeroGerado).toBeLessThanOrEqual(10)
        

    })
})