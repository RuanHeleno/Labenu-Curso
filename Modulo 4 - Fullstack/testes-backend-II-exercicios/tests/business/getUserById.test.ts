import { UserBusiness } from "../../src/business/UserBusiness";
import { GetUserByIdSchema } from "../../src/dtos/user/getUserById.dto";
import { USER_ROLES } from "../../src/models/User";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";

describe("Testes do getUserById", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("deve retornar um usuário especifico", async () => {
    const input = GetUserByIdSchema.parse({
      token: "token-mock-astrodev",
      id: "id-mock-astrodev",
    });

    const output = await userBusiness.getUserById(input);

    expect(output).toEqual(
      expect.objectContaining({
        id: "id-mock-astrodev",
        name: "Astrodev",
        email: "astrodev@email.com",
        role: USER_ROLES.ADMIN,
        createdAt: expect.any(String), // Aceita qualquer valor de string
      })
    );
  });

  test("deve retornar um usuário inexistente", async () => {
    const input = GetUserByIdSchema.parse({
      token: "token-mock-astrodev",
      id: "id-invalido",
    });

    const output = userBusiness.getUserById(input);

    expect(output).toThrow("Usuário não encontrado");
  });

  test("deve lidar com token inválido", async () => {
    const input = GetUserByIdSchema.parse({
      token: "token-mock-invalido",
      id: "id-mock-astrodev",
    });

    const output = await userBusiness.getUserById(input);

    expect(output).toThrow("Token inválido");
  });
});
