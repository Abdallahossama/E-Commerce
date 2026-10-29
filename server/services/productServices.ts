import db from "../config/db";
import type {
  CreateProductInput,
  UpdateProductInput,
} from "../validators/productValidator";

export const createProduct = async (input: CreateProductInput) => {
  const { name, image, price, description, stock_quantity } = input;

  const result = await db.query(
    `INSERT INTO products (name, image, price, description, stock_quantity, created_at)
     VALUES ($1, $2, $3, $4, $5, NOW())
     RETURNING id, name, image, price, description, stock_quantity, created_at`,
    [name, image, price, description, stock_quantity],
  );

  return result.rows[0];
};

export const getAllProducts = async () => {
  const result = await db.query(
    `SELECT id, name, image, price, description, stock_quantity, created_at
     FROM products
     ORDER BY created_at DESC`,
  );

  return result.rows;
};

export const getProductById = async (id: string | number) => {
  const result = await db.query(
    `SELECT id, name, image, price, description, stock_quantity, created_at
     FROM products
     WHERE id = $1`,
    [id],
  );

  if (result.rows.length === 0) {
    throw new Error("Product not found");
  }

  return result.rows[0];
};

export const updateProduct = async (
  id: string | number,
  input: UpdateProductInput,
) => {
  const product = await getProductById(id);

  const { name, image, price, description, stock_quantity } = input;
  const updatedName = name ?? product.name;
  const updatedImage = image ?? product.image;
  const updatedPrice = price ?? product.price;
  const updatedDescription = description ?? product.description;
  const updatedStockQuantity = stock_quantity ?? product.stock_quantity;

  const result = await db.query(
    `UPDATE products
     SET name = $1, image = $2, price = $3, description = $4, stock_quantity = $5
     WHERE id = $6
     RETURNING id, name, image, price, description, stock_quantity, created_at`,
    [
      updatedName,
      updatedImage,
      updatedPrice,
      updatedDescription,
      updatedStockQuantity,
      id,
    ],
  );

  return result.rows[0];
};

export const deleteProduct = async (id: string | number) => {
  const product = await getProductById(id);

  await db.query(`DELETE FROM products WHERE id = $1`, [id]);

  return { message: "Product deleted successfully", product };
};
