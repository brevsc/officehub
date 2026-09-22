"use server";

import { db } from "@/src";
import { loginSchema } from "../validation/loginSchema";
import argon2 from "argon2";
import { createSession } from "../auth/createSession";

export async function login(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const result = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return { success: false, error: "Invalid input" };
  }

  const { email, password } = result.data;

  const user = await db.query.usersTable.findFirst({
    where: {
      email: {
        eq: email,
      },
    },
  });

  if (!user || !(await argon2.verify(user.password, password))) {
    return { success: false, error: "Invalid email or password" };
  }

  await createSession(user.id);
  return {
    success: true,
    user: user.name,
  };
}
