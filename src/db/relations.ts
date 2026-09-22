import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
  usersTable: {
    companies: r.one.companiesTable({
      from: r.usersTable.companyId,
      to: r.companiesTable.id,
    }),
    sessions: r.many.sessionsTable()
  },
  sessionsTable: {
    users: r.one.usersTable({
      from: r.sessionsTable.userId,
      to: r.usersTable.id
    })
  },
  companiesTable: {
    users: r.many.usersTable(),
    goals: r.many.goalsTable(),
  },
  goalsTable: {
    companies: r.one.companiesTable({
      from: r.goalsTable.companyId,
      to: r.companiesTable.id,
    }),
  },
}));
