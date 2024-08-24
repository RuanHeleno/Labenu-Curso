import { UserBusiness } from "../../../src/business/UserBusiness";
import { GetUsersSchema } from "../../../src/dtos/user/getUsers.dto";
import { BadRequestError } from "../../../src/errors/BadRequestError";
import { USER_ROLES } from "../../../src/models/User";
import { HashManagerMock } from "../../mocks/HashManagerMock";
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../../mocks/UserDatabaseMock";

describe("Testando getUsers", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("deve retornar lista de todos users", async () => {
    const input = GetUsersSchema.parse({
      token: "token-mock-astrodev",
    });

    const output = await userBusiness.getUsers(input);

    expect(output).toHaveLength(2);
    expect(output).toEqual([
      {
        id: "id-mock-fulano",
        name: "Fulano",
        email: "fulano@email.com",
        createdAt: expect.any(String),
        role: USER_ROLES.NORMAL,
      },
      {
        id: "id-mock-astrodev",
        name: "Astrodev",
        email: "astrodev@email.com",
        createdAt: expect.any(String),
        role: USER_ROLES.ADMIN,
      },
    ]);
  });

  test("deve testar o token inválido", async () => {
    const input = GetUsersSchema.parse({
      token: "token-mock",
    });

    try {
      await userBusiness.getUsers(input);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error instanceof BadRequestError).toBe(true);
      expect((error as BadRequestError).message).toBe("token inválido");
    }
  });

  test("deve testar o acesso a somente admins", async () => {
    const input = GetUsersSchema.parse({
      token: "token-mock-fulano",
    });

    try {
      await userBusiness.getUsers(input);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error instanceof BadRequestError).toBe(true);
      expect((error as BadRequestError).message).toBe(
        "somente admins podem acessar"
      );
    }
  });
});
