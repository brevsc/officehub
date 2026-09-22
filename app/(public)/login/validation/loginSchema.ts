import z from "zod";

export const loginSchema = z.object({
  email: z.email({error: (issue)=> {
    issue.input === "undefined" ? "email is required" : "invalid email or password"
  }}),
  password: z.string({error: (issue)=> {
    issue.input === "undefined" ? "email is required" : "invalid email or password"
  }}).trim()
})