// lib/api.test.ts
import { fetchAllProducts, fetchSingleProduct, Product } from "./api";

const API_BASE = "https://api.escuelajs.co/api/v1";

describe("lib/api", () => {
  const mockProduct: Omit<Product, "variants"> = {
    id: 123,
    title: "Test Product",
    price: 9.99,
    description: "A product for testing",
    images: ["img1.jpg", "img2.jpg"],
    category: { id: 1, name: "TestCat", image: "cat.jpg" },
  };

  beforeAll(() => {
    process.env.API_BASE_URL = API_BASE;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("fetchAllProducts", () => {
    it("returns products with added variants on success", async () => {
      // Arrange
      const rawProducts = [mockProduct, { ...mockProduct, id: 456 }];
      (global.fetch as jest.Mock) = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(rawProducts),
      });

      // Act
      const products = await fetchAllProducts();

      // Assert
      expect(global.fetch).toHaveBeenCalledWith(`${API_BASE}/products`);
      expect(products).toHaveLength(2);
      for (const p of products) {
        expect(p).toMatchObject({
          ...rawProducts.find(r => r.id === p.id)!,
          variants: {
            colors: ["Red", "Blue", "Green", "Black"],
            sizes: ["S", "M", "L", "XL"],
          },
        });
      }
    });

    it("throws an error when response.ok is false", async () => {
      (global.fetch as jest.Mock) = jest.fn().mockResolvedValue({
        ok: false,
      });

      await expect(fetchAllProducts()).rejects.toThrow(
        "Failed to fetch All products"
      );
    });
  });

  describe("fetchSingleProduct", () => {
    it("returns a single product with added variants on success", async () => {
      // Arrange
      (global.fetch as jest.Mock) = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockProduct),
      });

      // Act
      const product = await fetchSingleProduct("123");

      // Assert
      expect(global.fetch).toHaveBeenCalledWith(
        `${API_BASE}/products/123`
      );
      expect(product).toMatchObject({
        ...mockProduct,
        variants: {
          colors: ["Red", "Blue", "Green", "Black"],
          sizes: ["S", "M", "L", "XL"],
        },
      });
    });

    it("throws an error when response.ok is false", async () => {
      (global.fetch as jest.Mock) = jest.fn().mockResolvedValue({
        ok: false,
      });

      await expect(fetchSingleProduct("999")).rejects.toThrow(
        "Failed to fetch this product number : 999"
      );
    });
  });
});
