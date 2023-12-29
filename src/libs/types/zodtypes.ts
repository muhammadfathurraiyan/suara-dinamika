import { z } from "zod";

export const CreateUserSchema = z.object({
  name: z
    .string()
    .min(1, { message: "name must be at least 1 character long. \n" })
    .max(30, { message: "name must be at most 30 characters long. \n" }),
  email: z
    .string()
    .email("invalid email. \n")
    .min(1, { message: "email must be at least 1 character long. \n" })
    .max(30, { message: "email must be at most 30 characters long. \n" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters long. \n" }),
  role: z.string(),
  image: z.string(),
});

export const SignInSchema = z.object({
  email: z
    .string()
    .email("invalid email. \n")
    .min(1, { message: "email harus lebih dari 1 karakter. \n" })
    .max(30, { message: "email harus kurang dari 30 karakter. \n" }),
  password: z
    .string()
    .min(8, { message: "password harus lebih dari 8 karakter. \n" }),
});

export const EditUserSchema = z.object({
  name: z
    .string()
    .min(1, { message: "name must be at least 1 character long. \n" })
    .max(30, { message: "name must be at most 30 characters long. \n" }),
  email: z
    .string()
    .email("invalid email. \n")
    .min(1, { message: "email must be at least 1 character long. \n" })
    .max(30, { message: "email must be at most 30 characters long. \n" }),
  role: z.string(),
  image: z.string(),
});
