import z from "zod";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const SignUpSchema = z
  .object({
    name: z
      .string()
      .min(3, "Username muss mindestens 3 Zeichen haben")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores.",
      ),

    email: z.email("Ungültige E-Mail-Adresse"),
    password: z.string().min(4, "Passwort muss mindestens 8 Zeichen lang sein"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwörter stimmen nicht überein!",
    path: ["confirmPassword"],
  });

export const SignInSchema = z.object({
  email: z.email("Ungültige E-Mail-Adresse"),
  password: z.string().min(1, "Passwort erforderlich"),
});
