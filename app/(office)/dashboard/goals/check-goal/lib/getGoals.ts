import { db } from "@/src";
import { eq } from "drizzle-orm";

export async function getGoals() {
  const goal = db.query.goalsTable.findMany({
    where: {
      companyId: {
        eq: 1,
      },
    },
  });
  return goal;
}
