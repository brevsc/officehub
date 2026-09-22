import z from "zod";

export const registerSchema = z
  .object({
    name: z.string({
      error: (issue) =>
        issue.input === undefined ? "field required" : "field invalid",
    }),
    email: z.email({
      error: (issue) =>
        issue.input === undefined ? "field required" : "field invalid",
    }),
    password: z
      .string({
        error: (issue) =>
          issue.input === undefined ? "field required" : "field invalid",
      })
      .min(8)
      .trim(),
    password_confirmation: z
      .string({
        error: (issue) =>
          issue.input === undefined ? "field required" : "field invalid",
      })
      .min(8)
      .trim(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "passwords don't match",
    path: ["password_confirmation"],
  });
