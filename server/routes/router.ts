import express from "express";
import auth from "./authRouter.js";

export const router = express.Router();

router.use("/auth", auth);
// router.use("/users");

export default router;