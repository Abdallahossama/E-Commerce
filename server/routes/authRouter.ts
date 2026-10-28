import { Router } from "express";
import * as authControllers from "../controllers/authControllers";
import { validate } from "../middleware/validate";
import {
  logInSchema,
  signUpSchema,
  logOutSchema,
  refreshSchema,
} from "../validators/authValidator";

const auth = Router();

// routes/authRouter.ts — one import line instead of four

auth.post("/login", validate(logInSchema), authControllers.logIn);
auth.post("/signup", validate(signUpSchema), authControllers.signUp);
auth.post("/logout", validate(logOutSchema), authControllers.logOut);
// auth.post("/refresh", validate(refreshSchema), authControllers.refreshToken);

export default auth;
