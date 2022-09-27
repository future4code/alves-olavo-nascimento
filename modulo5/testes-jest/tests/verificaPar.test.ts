import { verificaPer } from "./verificaPar"

describe("Questão 0", () => {
    test("Verifica se e par", () => {
        const imput = 10
        const output = verificaPer(imput)

        expect(output).toBe(true)
    })
})