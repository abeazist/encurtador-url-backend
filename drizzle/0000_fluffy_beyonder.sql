CREATE TABLE "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"idLinkEncurtado" varchar(255) NOT NULL,
	"legenda" varchar(255) NOT NULL,
	"urlOriginal" varchar(255) NOT NULL,
	"dataCriacao" timestamp DEFAULT now(),
	"clicks" number NOT NULL
);
