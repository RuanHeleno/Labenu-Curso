import { ProductBusiness } from "../../../src/business/ProductBusiness";
import { CreateProductSchema } from "../../../src/dtos/product/createProduct.dto";
import { BadRequestError } from "../../../src/errors/BadRequestError";
import { IdGeneratorMock } from "../../mocks/IdGeneratorMock";
import { ProductDatabaseMock } from "../../mocks/ProductDatabaseMock";
import { TokenManagerMock } from "../../mocks/TokenManagerMock";

describe("Testando createProduct", () => {
  const productBusiness = new ProductBusiness(
    new ProductDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock()
  );

  test("deve cadastrar corretamente", async () => {
    const input = CreateProductSchema.parse({
      name: "p3",
      price: 399,
      token: "token-mock-astrodev",
    });

    const output = await productBusiness.createProduct(input);

    expect(output).toEqual({
      message: "Producto cadastrado com sucesso",
      product: {
        id: expect.any(String),
        name: "p3",
        price: 399,
        createdAt: expect.any(String),
      },
    });
  });

  test("deve testar o token inválido", async () => {
    const input = CreateProductSchema.parse({
      name: "p3",
      price: 399,
      token: "token",
    });

    try {
      await productBusiness.createProduct(input);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error instanceof BadRequestError).toBe(true);
      expect((error as BadRequestError).message).toBe("token inválido");
    }
  });

  test("deve testar o acesso a somente admins", async () => {
    const input = CreateProductSchema.parse({
      name: "p3",
      price: 399,
      token: "token-mock-fulano",
    });

    try {
      await productBusiness.createProduct(input);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error instanceof BadRequestError).toBe(true);
      expect((error as BadRequestError).message).toBe(
        "somente admins podem acessar"
      );
    }
  });
});
