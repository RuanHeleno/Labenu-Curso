import { UserBusiness } from "../../../src/business/UserBusiness";
import { LoginSchema } from "../../../src/dtos/user/login.dto";
import { BadRequestError } from "../../../src/errors/BadRequestError";
import { NotFoundError } from "../../../src/errors/NotFoundError";
import { HashManagerMock } from "../../mocks/HashManagerMock";
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../../mocks/UserDatabaseMock";

describe("Testando login", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("deve gerar token ao logar", async () => {
    const input = LoginSchema.parse({
      email: "fulano@email.com",
      password: "fulano123",
    });

    const output = await userBusiness.login(input);

    expect(output).toEqual({
      message: "Login realizado com sucesso",
      token: "token-mock-fulano",
    });
  });

  test("deve testar se não achar o usuário", async () => {
    const input = LoginSchema.parse({
      email: "fulano@email.com.br",
      password: "fulano123",
    });

    try {
      await userBusiness.login(input);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error instanceof NotFoundError).toBe(true);
      expect((error as NotFoundError).message).toBe("'email' não encontrado");
    }
  });

  test("deve testar se o email ou senha forem incorretos", async () => {
    const input = LoginSchema.parse({
      email: "fulano@email.com",
      password: "fulano12345",
    });

    try {
      await userBusiness.login(input);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error instanceof BadRequestError).toBe(true);
      expect((error as BadRequestError).message).toBe(
        "'email' ou 'password' incorretos"
      );
    }
  });
});
