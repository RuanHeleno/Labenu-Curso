import { UserBusiness } from "../../src/business/UserBusiness";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { SignupInputDTO } from "../../src/dtos/user/signup.dto";

const userBusiness = new UserBusiness(
  new UserDatabaseMock(),
  new IdGeneratorMock(),
  new TokenManagerMock(),
  new HashManagerMock()
);

describe("Testes de Login", () => {
  test("Caso de Sucesso", async () => {
    const input: SignupInputDTO = {
      name: "ruan",
      email: "fulano@email.com",
      password: "fulano123",
    };

    const result = await userBusiness.signup(input);

    expect(result).toEqual({
      message: "Cadastro realizado com sucesso",
      token: "token-mock",
    });
  });
});
