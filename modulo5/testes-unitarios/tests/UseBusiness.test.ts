import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"
import { UserBusiness } from "../src/business/UserBusiness"

describe("testando a UseBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Devolve um token e uma mensagem de sucesso.", async () => {
        const input = {
            name: "olavo",
            email: "olavo@gmail.com",
            password: "olavo"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })

})

