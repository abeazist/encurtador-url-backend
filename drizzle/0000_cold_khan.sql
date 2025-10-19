-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"codigo" varchar(10) NOT NULL,
	"legenda" varchar(255),
	"url_original" text NOT NULL,
	"clicks" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "links_codigo_key" UNIQUE("codigo")
);

*/