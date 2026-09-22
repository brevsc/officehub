import z from "zod";

export const searchSchema = z.object({
  cnpj: z
    .string({
      error: (issue) => {
        issue.input === "undefined" ? "field is required" : "invalid cnpj";
      },
    })
    .trim()
    .min(14)
    .max(14),
});
