ALTER TABLE "goals" RENAME COLUMN "month" TO "name";--> statement-breakpoint
ALTER TABLE "goals" ALTER COLUMN "name" SET DATA TYPE varchar(255) USING "name"::varchar(255);