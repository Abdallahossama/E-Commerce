import type { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: Jwt.JwtPayload | string;
}

const isTokenValid = (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.header("authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  // Extract token from "Bearer TOKEN"
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Invalid token format" });
  }

  try {
    const decoded = Jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string,
    );
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export default isTokenValid;
