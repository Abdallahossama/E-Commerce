import { z } from "zod";

// Only enforced at signup — login shouldn't re-check complexity against an
// existing password, since rules could change after the account was created.
const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(20, { message: "Password cannot exceed 20 characters" })
  .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
  .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
  .regex(/[0-9]/, { message: "Must contain at least one number" })
  .regex(/[^A-Za-z0-9]/, {
    message: "Must contain at least one special character",
  });

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email(),
  password: passwordSchema,
});

export type SignUpInput = z.infer<typeof signUpSchema>;

export const logInSchema = z.object({
  email: z.email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export type LogInInput = z.infer<typeof logInSchema>;

// Both logout and refresh operate on a specific stored refresh token —
// logout revokes it, refresh rotates it — so they share the same shape.
const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, { message: "Refresh token is required" }),
});

export const logOutSchema = refreshTokenSchema;
export type LogOutInput = z.infer<typeof logOutSchema>;

export const refreshSchema = refreshTokenSchema;
export type RefreshInput = z.infer<typeof refreshSchema>;
