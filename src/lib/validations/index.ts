import * as z from "zod";

export const SignUpValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Too Short. Please provide atleast 3 characters." }),
  username: z
    .string()
    .min(2, { message: "Too Short. Please provide atleast 3 characters." }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters long." }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters long." }),
});

export const PostValidation = z.object({
  caption: z.string().min(3).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(2200),
  tags: z.string(),
});
