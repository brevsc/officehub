"use server";
import { goalSchema } from "../validation/goalSchema";
import { db } from "@/src";
import { goalsTable } from "@/src/db/schema";

export async function createGoal(formdata: FormData) {
  const result = goalSchema.safeParse({
    name: formdata.get("name"),
    entry: formdata.get("entry"),
    bonus: formdata.get("cfop_bonus"),
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

  const { name, entry, bonus, consume, stock_transfer, cards, sales } =
    result.data;

  const revenue = (entry - bonus - consume - stock_transfer) * 0.2;
  const target = Math.max(revenue, cards);
  const remaining = target - sales;

  await db.insert(goalsTable).values({
    companyId: 1,
    name,
    entry: entry.toFixed(2),
    bonus: bonus.toFixed(2),
    consume: consume.toFixed(2),
    revenue: revenue.toFixed(2),
    cards: cards.toFixed(2),
    sales: sales.toFixed(2),
    target: target.toFixed(2),
    remaining: remaining.toFixed(2),
  });

  return {
    success: true,
  };
}
