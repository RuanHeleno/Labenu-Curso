import { UserBusiness } from "../../src/business/UserBusiness";
import { DeleteUserSchema } from "../../src/dtos/user/deleteUser.dto";
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

  test("deve delete um usuário especifico", async () => {
    const input = DeleteUserSchema.parse({
      token: "token-mock-fulano",
      id: "id-mock-fulano",
    });

    const output = await userBusiness.deleteUser(input);

    expect(output).toEqual({ message: "Usuário deletado com sucesso" });
  });

  test("deve retornar um usuário inexistente", async () => {
    const input = DeleteUserSchema.parse({
      token: "token-mock-fulano",
      id: "id-invalido",
    });

    const output = userBusiness.deleteUser(input);

    expect(output).toThrow("Usuário não encontrado");
  });

  test("deve lidar com token inválido", async () => {
    const input = DeleteUserSchema.parse({
      token: "token-mock-invalido",
      id: "id-mock-fulano",
    });

    const output = await userBusiness.deleteUser(input);

    expect(output).toThrow("Token inválido");
  });
});
