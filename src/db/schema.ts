import {
  pgTable,
  varchar,
  serial,
  timestamp,
  numeric,
  date,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const companiesTable = pgTable("companies", {
  id: serial("id").notNull().primaryKey(),
  userId: serial("user_id")
    .notNull()
    .references(() => usersTable.id, {
    onDelete: "cascade",
  }),
  name: varchar("name", { length: 255 }).notNull(),
});

export const goalsTable = pgTable("goals", {
  id: serial("id").notNull().primaryKey(),
  companyId: serial("company_id").references(() => companiesTable.id, {
    onDelete: "cascade",
  }),
  month: date("month").notNull(),
  entry: numeric("entry", {
    precision: 12,
    scale: 2,
  })
    .notNull()
    .default("0"),
  bonus: numeric("bonus", {
    precision: 12,
    scale: 2,
  })
    .notNull()
    .default("0"),
  consume: numeric("consume", {
    precision: 12,
    scale: 2,
  })
    .notNull()
    .default("0"),
  revenue: numeric("revenue", {
    precision: 12,
    scale: 2,
  })
    .notNull()
    .default("0"),
  cards: numeric("cards", {
    precision: 12,
    scale: 2,
  })
    .notNull()
    .default("0"),
  nfeOutput: numeric("nfe_output", {
    precision: 12,
    scale: 2,
  })
    .notNull()
    .default("0"),
  nfceOutput: numeric("nfce_output", {
    precision: 12,
    scale: 2,
  })
    .notNull()
    .default("0"),
  totalOutput: numeric("total_output", {
    precision: 12,
    scale: 2,
  })
    .notNull()
    .default("0"),
  target: numeric("target", {
    precision: 12,
    scale: 2,
  })
    .notNull()
    .default("0"),
});
