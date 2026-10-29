import type { Request, Response } from "express";
import * as productServices from "../services/productServices";
import type {
  CreateProductInput,
  UpdateProductInput,
} from "../validators/productValidator";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body as CreateProductInput;
    const product = await productServices.createProduct(data);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: { product },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productServices.getAllProducts();

    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: { products },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "Product ID is required" });
    }
    const product = await productServices.getProductById(id);

    res.status(200).json({
      success: true,
      message: "Product retrieved successfully",
      data: { product },
    });
  } catch (error) {
    res.status(404).json({ success: false, error: (error as Error).message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "Product ID is required" });
    }
    const data = req.body as UpdateProductInput;
    const product = await productServices.updateProduct(id, data);

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: { product },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    if (!id) {
      return res
        .status(400)
        .json({ success: false, error: "Product ID is required" });
    }
    const result = await productServices.deleteProduct(id);

    res.status(200).json({
      success: true,
      message: result.message,
      data: { product: result.product },
    });
  } catch (error) {
    res.status(404).json({ success: false, error: (error as Error).message });
  }
};
