import express from "express";
import auth from "./authRouter.js";
import products from "./productRouter.js";

export const router = express.Router();

router.use("/auth", auth);
router.use("/products",products);
// router.use("/users");

export default router;