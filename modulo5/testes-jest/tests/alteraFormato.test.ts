import { alteraFormato } from "./alteraFormato"

describe("Exercício 9", () => {
    test("Converte data em formato americano para brasileiro", () => {
        const dataAmericana = "1992/02/20"
        const convertida = alteraFormato(dataAmericana)

        expect(convertida).toBe("20/02/1992")
    })
})