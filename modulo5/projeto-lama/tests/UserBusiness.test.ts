import { UserBusiness } from "../src/business/UserBusiness"
import { ILoginInputDTO, ILoginOutputDTO, ISignupInputDTO } from "../src/model/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { GenerateIdMock } from "./mocks/GenerateIdMock"
import { UserDataBaseMock } from "./mocks/UserDataBaseMock"

describe("Testando a UseBusiness", () => {
    const userBusiness = new UserBusiness(
        new HashManagerMock,
        new GenerateIdMock,
        new UserDataBaseMock,
        new AuthenticatorMock
    )

    test("Usuário deve receber um token e mensagem de sucesso", async () => {
        const input: ISignupInputDTO = {
            email: "fulano@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toBe("Parabéns Fulano, você criou sua conta.")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Usuário deve receber um token na tentativa de login", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)

        expect(response.token).toBe("token-mock-admin")
    })
})