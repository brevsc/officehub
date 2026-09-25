"use server";
import { db } from "@/src";
import { goalsTable } from "@/src/db/schema";
import { goalSchema } from "../../create-goal/validation/goalSchema";
import { eq } from "drizzle-orm";

export async function editGoal(formdata: FormData) {
  const result = goalSchema.safeParse({
    id: formdata.get("id"),
    name: formdata.get("name"),
    entry: formdata.get("entry"),
    bonus: formdata.get("bonus"),
    consume: formdata.get("consume"),
    stock_transfer: formdata.get("stock_transfer"),
    cards: formdata.get("cards"),
    sales: formdata.get("sales"),
  });

  if (!result.success) {
    return {
      success: false,
    };
  }

  const { id, name, entry, bonus, consume, stock_transfer, cards, sales } =
    result.data;

  const revenue = (entry - bonus - consume - stock_transfer) * 0.2;
  const target = Math.max(revenue, cards);
  const remaining = target - sales;

  const [updatedGoal] = await db
    .update(goalsTable)
    .set({
      name,
      entry: entry.toFixed(2),
      bonus: bonus.toFixed(2),
      consume: consume.toFixed(2),
      stock_transfer: stock_transfer.toFixed(2),
      revenue: revenue.toFixed(2),
      cards: cards.toFixed(2),
      sales: sales.toFixed(2),
      target: target.toFixed(2),
      remaining: remaining.toFixed(2),
    })
    .where(eq(goalsTable.id, id))
    .returning();

  return {
    success: true,
    goal: updatedGoal,
  };
}
