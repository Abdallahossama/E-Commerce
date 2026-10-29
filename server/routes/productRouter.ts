import { Router } from "express";
import * as productControllers from "../controllers/productControllers";
import { validate } from "../middleware/validate";
import {
  createProductSchema,
  updateProductSchema,
} from "../validators/productValidator";
import isTokenValid from "../middleware/auth";

const products = Router();

products.post(
  "/",
  isTokenValid,
  validate(createProductSchema),
  productControllers.createProduct,
);
products.get("/", isTokenValid, productControllers.getAllProducts);
products.get("/:id", isTokenValid, productControllers.getProductById);
products.put(
  "/:id",
  isTokenValid,
  validate(updateProductSchema),
  productControllers.updateProduct,
);
products.delete("/:id", isTokenValid, productControllers.deleteProduct);

export default products;
