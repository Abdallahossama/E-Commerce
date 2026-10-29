import type { Request, Response } from "express";
import * as authServices from "../services/authServices";
import type { SignUpInput } from "../validators/authValidator";
// Log In
export const logIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await authServices.logIn({ email, password });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        data: { token, user },
      });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// Sign Up
export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body as SignUpInput;
    const { token, user } = await authServices.signUp({ name, email, password });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(201)
      .json({
        success: true,
        message: "Account created successfully",
        data: { token, user },
      });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// log Out
export const logOut = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token").status(200).json({ message: "Logged out" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// refreshToken to do later
// export const refreshToken = async (req: Request, res: Response) => {
//   try {
//   } catch (e) {
//     throw e;
//   }
// };
