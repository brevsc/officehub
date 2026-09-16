"use server";

import { db } from "@/src";
import { usersTable } from "@/src/db/schema";
import argon2 from "argon2";
import { registerSchema } from "../validation/registerSchema";
import { treeifyError } from "zod/v4/core";

export async function register(formData: FormData) {
  const result = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    password_confirmation: formData.get("password_confirmation"),
  });

  if (!result.success) {
    const errors = treeifyError(result.error)
    return {
      success: false,
      errors,
    };
  }

  const { name, email, password, password_confirmation } = result.data;
  const passwordHash = await argon2.hash(password);

  try {
    await db.insert(usersTable).values({
      name,
      email,
      password: passwordHash,
    });

    return {
      success: true,
    };
  } catch (err) {
    return new Response(JSON.stringify({ error: err }), { status: 400 });
  }
}
