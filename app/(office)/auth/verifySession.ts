"use server";
import { db } from "@/src";
import { cookies } from "next/headers";

export async function verifySession() {
  const cookiesStore = await cookies();
  const sessionId = cookiesStore.get("session")?.value;

  if (!sessionId) {
    return null;
  }
  const session = await db.query.sessionsTable.findFirst({
    where: {
      id: {
        eq: sessionId,
      },
    },
  });

  if (!session || !session.userId) {
    return null
  }
  
  const user = await db.query.usersTable.findFirst({
    where: {
      id: {
        eq: session.userId,
      },
    },
  });
  
  if (!user){
    return null
  }
  

  return user.name;
}
