import { deixaMaiscula } from "./deixaMaiusculo"

describe("exercicio 1", () => {
    test("Deixa imput em caixa alta", () => {
        const imput = "joao de barro"
        const output = deixaMaiscula(imput)

        expect(output).toBe("JOAO DE BARRO")
    })
})