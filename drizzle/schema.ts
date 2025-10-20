import { pgTable, serial, varchar, timestamp, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"


export const links = pgTable("links", {
	id: serial().primaryKey().notNull(),
	idLinkEncurtado: varchar({ length: 255 }).notNull(),
	legenda: varchar({ length: 255 }).notNull(),
	urlOriginal: varchar({ length: 255 }).notNull(),
	dataCriacao: timestamp({ mode: 'string' }).defaultNow(),
	numCliques: integer("num_cliques").default(0).notNull(),
});
