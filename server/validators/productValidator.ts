import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  image: z.string().url("Image must be a valid URL").optional(),
  price: z.number().positive("Price must be a positive number"),
  description: z.string().optional(),
  stock_quantity: z.number().int().nonnegative("Stock quantity must be a non-negative integer"),
});

export const updateProductSchema = createProductSchema.partial();

export const getProductSchema = z.object({
  id: z.string().or(z.number()),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export type GetProductInput = z.infer<typeof getProductSchema>;
