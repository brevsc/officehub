ALTER TABLE "goals" RENAME COLUMN "total_output" TO "sales";--> statement-breakpoint
ALTER TABLE "goals" ADD COLUMN "stock_transfer" numeric(12,2) DEFAULT '0' NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" DROP COLUMN "nfe_output";--> statement-breakpoint
ALTER TABLE "goals" DROP COLUMN "nfce_output";