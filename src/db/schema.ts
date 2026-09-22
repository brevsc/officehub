import { sql } from "drizzle-orm";
import {
  pgTable,
  varchar,
  timestamp,
  numeric,
  date,
  integer,
  uuid,
  serial,
  index,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  companyId: integer("company_id").references(() => companiesTable.id, {
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const sessionsTable = pgTable(
  "sessions",
  {
    id: uuid("id").primaryKey().notNull(),
    userId: uuid("user_id").references(() => usersTable.id, {
      onDelete: "cascade",
    }),
    createdAt: timestamp("created_at", {
      withTimezone: true,
    })
      .notNull()
      .defaultNow(),
    expiresAt: timestamp("expires_at", {
      withTimezone: true,
    })
      .notNull()
      .default(sql`now() + interval '30 days'`),
  },
  (table) => ({
    userIdIdx: index("sessions_user_id_idx").on(table.userId),
  }),
);

export const companiesTable = pgTable("companies", {
  id: serial("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});

export const goalsTable = pgTable("goals", {
  id: serial("id").notNull().primaryKey(),
  companyId: integer("company_id").references(() => companiesTable.id, {
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
