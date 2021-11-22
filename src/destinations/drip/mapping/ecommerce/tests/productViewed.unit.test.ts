import { mockProductViewed } from "../../../../../mocks/ecommerce";
import productViewed from "../productViewed";

it("creates parameters matching the snapshot", () => {
  const res = productViewed(mockProductViewed);

  expect(res).toMatchInlineSnapshot(`
    Object {
      "name": "Viewed A Product",
      "properties": Object {
        "brand": undefined,
        "categories": Array [
          "Trip",
        ],
        "currency": "GBP",
        "image_url": "http://example.com/image.jpg",
        "name": "Product Name",
        "price": 10000,
        "product_id": "productID",
        "product_variant_id": "variant",
        "sku": "sku",
        "url": "http://example.com/productID",
      },
    }
  `);
});
