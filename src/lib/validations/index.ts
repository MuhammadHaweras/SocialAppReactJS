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
