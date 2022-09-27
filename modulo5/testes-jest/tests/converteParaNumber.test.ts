import { converteParaNumber } from "./converteParaNumber"

describe("Exercício 3", () => {
    test("Converte um numero tipo string para number", () => {
        const imput = "100"
        const output = converteParaNumber(imput)

        expect(output).toBe(100)
    })
})