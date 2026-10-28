import { error } from "node:console";
import db from "../config/db";
import type { LogInInput, SignUpInput } from "../validators/authValidator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// login
export const logIn = async ({ email, password }: LogInInput) => {
  const result = await db.query(
    "SELECT email, password_hash,role,name FROM users WHERE email = $1",
    [email],
  );
  if (!result) {
    throw error("Email or password is wrong");
  }

  const isPasswordValid = bcrypt.compare(
    password,
    result.rows[0].password_hash,
  );

  if (!isPasswordValid) {
    throw error("Email or password is wrong");
  }
  const token = jwt.sign(
    {
      userId: result.rows[0].id,
      email: result.rows[0].email,
      role: result.rows[0].role,
    },
    process.env.ACCESS_TOKEN_SECRET as string,
    { expiresIn: "24h" },
  );
  console.log(token);

  return {
    token,
    user: {
      userId: result.rows[0].id,
      name: result.rows[0].name,
      email: result.rows[0].email,
      role: result.rows[0].role,
    },
  };
};
// Sign Up
export const signUp = async ({ name, email, password }: SignUpInput) => {
  const existing = await db.query("SELECT id FROM users WHERE email = $1", [
    email,
  ]);
  if (existing.rows.length > 0) {
    throw new Error("Email already in use");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const result = await db.query(
    `INSERT INTO users (name, email, password_hash)
     VALUES ($1, $2, $3)
     RETURNING id, name, email, role, created_at`,
    [name, email, passwordHash],
  );

  return result.rows[0];
};
