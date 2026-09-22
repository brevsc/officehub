"use server"
import { cookies } from "next/headers";
import { db } from "@/src";
import { sessionsTable } from "@/src/db/schema";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";


export async function createSession(userId:string){
  const sessionId = randomUUID()
  
  await db.insert(sessionsTable).values({
    id: sessionId,
    userId: userId
  })

  const cookiesStore = await cookies();
  cookiesStore.set("session", sessionId, {
    httpOnly: true,
    sameSite:"lax",
    // secure: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    path: "/",
  })

  redirect("/dashboard")
}
