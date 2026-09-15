CREATE TABLE "companies" (
	"id" serial PRIMARY KEY,
	"user_id" serial,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "goals" (
	"id" serial PRIMARY KEY,
	"company_id" serial,
	"month" date NOT NULL,
	"entry" numeric(12,2) DEFAULT '0' NOT NULL,
	"bonus" numeric(12,2) DEFAULT '0' NOT NULL,
	"consume" numeric(12,2) DEFAULT '0' NOT NULL,
	"revenue" numeric(12,2) DEFAULT '0' NOT NULL,
	"cards" numeric(12,2) DEFAULT '0' NOT NULL,
	"nfe_output" numeric(12,2) DEFAULT '0' NOT NULL,
	"nfce_output" numeric(12,2) DEFAULT '0' NOT NULL,
	"total_output" numeric(12,2) DEFAULT '0' NOT NULL,
	"target" numeric(12,2) DEFAULT '0' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"email" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "companies" ADD CONSTRAINT "companies_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "goals" ADD CONSTRAINT "goals_company_id_companies_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE CASCADE;