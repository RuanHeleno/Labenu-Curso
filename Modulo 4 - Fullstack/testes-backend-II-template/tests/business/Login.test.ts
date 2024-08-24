import { UserBusiness } from "../../src/business/UserBusiness";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { LoginInputDTO } from "../../src/dtos/user/login.dto";

const userBusiness = new UserBusiness(
  new UserDatabaseMock(),
  new IdGeneratorMock(),
  new TokenManagerMock(),
  new HashManagerMock()
);

describe("Testes de Login", () => {
  test("Caso de Sucesso", async () => {
    const input: LoginInputDTO = {
      email: "fulano@email.com",
      password: "fulano123",
    };

    const result = await userBusiness.login(input);

    /* expect(result.token).toBeDefined();
    expect(result.message).toBe("Login realizado com sucesso"); */

    expect(result).toEqual({
      message: "Login realizado com sucesso",
      token: "token-mock-fulano",
    });
  });
});
