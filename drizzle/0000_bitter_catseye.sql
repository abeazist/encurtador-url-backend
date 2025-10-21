-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"idLinkEncurtado" varchar(255) NOT NULL,
	"legenda" varchar(255) NOT NULL,
	"urlOriginal" varchar(255) NOT NULL,
	"dataCriacao" timestamp DEFAULT now(),
	"num_cliques" int DEFAULT 0
);

*/