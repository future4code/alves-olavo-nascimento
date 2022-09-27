import { separaLetras } from "./seperaLetras"

describe("Exercício 2", () => {
    test("Separa as letras do imput", () => {
        const imput = "olavo"
        const output = separaLetras(imput)
        
        expect(output).toEqual(["o","l","a","v","o"])

    })
})