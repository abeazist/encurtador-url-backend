CREATE TABLE "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"codigo" varchar(255) NOT NULL,
	"legenda" varchar(255) NOT NULL,
	"url_original" varchar(255) NOT NULL,
	"data_criacao" timestamp DEFAULT now()
);
