import z from "zod";

export const goalSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  entry: z.coerce.number(),
  bonus: z.coerce.number(),
  consume: z.coerce.number(),
  stock_transfer: z.coerce.number(),
  cards: z.coerce.number(),
  sales: z.coerce.number(),
});
