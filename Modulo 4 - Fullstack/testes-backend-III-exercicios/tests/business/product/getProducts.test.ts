import { ProductBusiness } from "../../../src/business/ProductBusiness";
import { GetProductsSchema } from "../../../src/dtos/product/getProducts.dto";
import { BadRequestError } from "../../../src/errors/BadRequestError";
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock";
import { ProductDatabaseMock } from "../../mocks/ProductDatabaseMock";
import { TokenManagerMock } from "../../mocks/TokenManagerMock";

describe("Testando getProducts", () => {
  const productBusiness = new ProductBusiness(
    new ProductDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock()
  );

  test("deve retornar lista de todos users", async () => {
    const input = GetProductsSchema.parse({
      token: "token-mock-astrodev",
    });

    const output = await productBusiness.getProducts(input);

    expect(output).toHaveLength(2);
    expect(output).toEqual([
      {
        id: "p001",
        name: "Mouse",
        price: 50,
        createdAt: expect.any(String),
      },
      {
        id: "p002",
        name: "Teclado",
        price: 80,
        createdAt: expect.any(String),
      },
    ]);
  });

  test("deve testar o token inválido", async () => {
    const input = GetProductsSchema.parse({
      token: "token-mock",
    });

    try {
      await productBusiness.getProducts(input);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error instanceof BadRequestError).toBe(true);
      expect((error as BadRequestError).message).toBe("token inválido");
    }
  });
});
