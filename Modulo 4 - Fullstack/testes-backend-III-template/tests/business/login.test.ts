import { ZodError } from "zod";
import { UserBusiness } from "../../src/business/UserBusiness";
import { LoginSchema } from "../../src/dtos/user/login.dto";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { NotFoundError } from "../../src/errors/NotFoundError";

describe("Testando login", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("deve gerar um token ao logar", async () => {
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

  test("deve testar se o email não é uma string", async () => {
    expect.assertions(3);

    try {
      const input = LoginSchema.parse({
        email: "fulano@email.com",
        password: "fulano123",
      });

      expect(typeof input.email).toBe("string");
    } catch (error) {
      expect(error).toBeDefined();
      expect(error instanceof ZodError).toBe(true);
      expect((error as ZodError).message).toBe("Email não é uma string");
    }
  });

  test("deve testar se o email não é uma string", async () => {
    expect.assertions(3);

    try {
      const input = LoginSchema.parse({
        email: "fulano@email.com",
        password: "fulano123",
      });

      await userBusiness.login(input);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error instanceof NotFoundError).toBe(true);
      expect((error as NotFoundError).message).toBe("'email' não encontrado");
    }
  });
});
