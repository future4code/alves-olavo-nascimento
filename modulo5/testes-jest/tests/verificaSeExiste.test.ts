import { verificaSeExiste } from "./verificaseexiste"

describe("Exercício 6", () => {
    test("Verifica se o astrodev existe na lista", () => {
        const imput = "astrodev"
        const output = verificaSeExiste(imput)

        expect(output).toHaveProperty("nome", "astrodev")
    })
})